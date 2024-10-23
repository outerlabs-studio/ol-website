import { fetchAPI } from 'lib/api'
import { About, Hero, Projects, Studio } from './home'

async function Home() {
  const data = await fetchAPI('/homepage', {
    populate: {
      fields: ['about'],
      hero: {
        populate: '*',
      },
      studio: {
        populate: '*',
      },
    },
  })
  const doc = data?.data

  const projectsData = await fetchAPI('/projects', {
    populate: {
      fields: ['slug', 'name'],
      thumbnail: {
        populate: '*',
      },
    },
  })
  const projectsDoc = projectsData?.data

  return (
    <>
      <Hero data={doc.hero} />
      <div>
        <About data={doc.about} />
        <Projects data={projectsDoc} />
      </div>
      <Studio data={doc.studio} />
    </>
  )
}

export default Home
