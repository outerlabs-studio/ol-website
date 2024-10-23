import { fetchAPI } from 'lib/api'
import { About, Hero, Studio } from './home'

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

  return (
    <>
      <Hero data={doc.hero} />
      <div>
        <About data={doc.about} />
        <Studio data={doc.studio} />
      </div>
    </>
  )
}

export default Home
