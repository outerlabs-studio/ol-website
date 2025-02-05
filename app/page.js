import { fetchAPI } from 'lib/api'
import { About, Hero, Projects, Studio } from './home'
import Head from 'next/head'
import { jsonLdScriptProps } from 'react-schemaorg'

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
      <Head>
        <script
          {...jsonLdScriptProps({
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            name: doc.hero.image.alternativeText,
            description: doc.hero.description,
            uploadDate: doc.hero.image.updatedAt,
            contentUrl: 'https://www.outerlabs.studio',
            embedUrl: doc.hero.image.url,
          })}
        />
      </Head>
      <Hero data={doc.hero} />
      <About data={doc.about} />
      <Projects data={projectsDoc} />
      <Studio data={doc.studio} />
    </>
  )
}

export default Home
