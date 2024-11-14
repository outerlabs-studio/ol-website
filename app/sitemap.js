import { fetchAPI } from 'lib'

export const revalidate = 3600

export default async function sitemap() {
  const URL = `https://www.outerlabs.studio`

  const blogData = await fetchAPI('/blogs', {
    populate: {
      fields: ['slug', 'title'],
    },
  })
  const blogDoc = blogData?.data
  const projectsData = await fetchAPI('/projects', {
    populate: {
      fields: ['slug', 'name'],
      thumbnail: {
        populate: '*',
      },
    },
  })
  const projectsDoc = projectsData?.data

  const blogPost = blogDoc.map((post) => {
    return {
      url: `${URL}/journal/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'monthly',
      priority: 0.5,
    }
  })
  const projectPost = projectsDoc.map((post) => {
    return {
      url: `${URL}/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'monthly',
      priority: 0.5,
    }
  })

  return [
    {
      url: URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${URL}/#work`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${URL}/journal`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...blogPost,
    ...projectPost,
  ]
}
