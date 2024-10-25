import { fetchAPI } from 'lib'
import { Article, Hero } from './components'

export async function generateMetadata({ params: { slug } }) {
  const blogData = await fetchAPI('/blogs', {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      fields: ['title'],
      hero_image: {
        populate: '*',
      },
      article: {
        populate: '*',
      },
    },
  })
  const blogDoc = blogData?.data[0]

  return {
    title: blogDoc?.title,
    // description: blogDoc?.content?.large_description,
    openGraph: {
      title: blogDoc?.title,
      // description: blogDoc?.content?.large_description,
      url: `https://www.outerlabs.studio/journal/${blogDoc?.slug}`,
      type: 'website',
      images: {
        url: `${blogDoc?.hero_image?.url}?format=jpg&resize=1200x630`,
        width: 1200,
        height: 630,
      },
    },
  }
}

async function BlogPage({ params: { slug } }) {
  const blogsData = await fetchAPI('/blogs', {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      fields: ['title', 'date', 'author', 'read_time'],
      hero_image: {
        populate: '*',
      },
      article: {
        populate: '*',
      },
    },
  })
  const blogsDoc = blogsData?.data[0]

  return (
    <article>
      <Hero data={blogsDoc} />
      <Article data={blogsDoc} />
    </article>
  )
}

export default BlogPage
