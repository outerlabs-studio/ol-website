import { fetchAPI } from 'lib/api'
import { Hero } from './home'

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
    </>
  )
}

export default Home
