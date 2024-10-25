import { fetchAPI } from 'lib'
import { Hero, List } from './components'

export const metadata = {
  title: 'Journal',
}

async function Journal() {
  const blogData = await fetchAPI('/blogs', {
    populate: {
      fields: ['slug', 'title'],
      hero_image: {
        populate: '*',
      },
    },
  })
  const blogDoc = blogData?.data

  return (
    <>
      <Hero />
      <List data={blogDoc} />
    </>
  )
}

export default Journal
