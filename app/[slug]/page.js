import { fetchAPI } from 'lib'
import { Hero, About, Images } from './components'

export async function generateMetadata({ params: { slug } }) {
  const projectsData = await fetchAPI('/projects', {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      fields: ['name'],
      content: {
        populate: '*',
      },
      hero_image: {
        populate: '*',
      },
      images: {
        populate: '*',
      },
    },
  })
  const projectsDoc = projectsData?.data[0]

  return {
    title: projectsDoc?.name,
    description: projectsDoc?.content?.large_description,
    openGraph: {
      title: projectsDoc?.name,
      description: projectsDoc?.content?.large_description,
      url: `https://www.outerlabs.studio/${projectsDoc?.slug}`,
      type: 'website',
    },
  }
}

async function Project({ params: { slug } }) {
  const projectsData = await fetchAPI('/projects', {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      fields: ['name'],
      content: {
        populate: '*',
      },
      hero_image: {
        populate: '*',
      },
      images: {
        populate: '*',
      },
    },
  })
  const projectsDoc = projectsData?.data[0]

  return (
    <>
      <Hero data={projectsDoc} />
      <About data={projectsDoc} />
      <Images data={projectsDoc} />
      {/* {services && <Services services={services} />} */}
    </>
  )
}

export default Project
