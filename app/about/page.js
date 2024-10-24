import { fetchAPI } from 'lib'
import { Hero, About, Services, Team } from './components'

export const metadata = {
  title: 'About',
}

async function AboutPage() {
  const data = await fetchAPI('/about', {
    populate: {
      fields: ['large_description', 'short_description'],
      services: {
        populate: '*',
      },
      team: {
        populate: '*',
      },
    },
  })
  const doc = data?.data

  return (
    <>
      <Hero />
      <About data={doc} />
      <Services data={doc} />
      <Team data={doc} />
    </>
  )
}

export default AboutPage
