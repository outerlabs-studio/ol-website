import { fetchAPI } from 'lib'
import { Hero } from './components'

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
      {/* <About subtitle={subtitle} paragraphs={paragraphs} live={live} /> */}
      {/* {images && <Images images={images} />} */}
      {/* {services && <Services services={services} />} */}
    </>
  )
}

export default Project
