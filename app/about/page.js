import { Layout } from 'layouts/default'
import { Hero, About, ImageSection, Services, Team } from './components'

export const metadata = {
  title: 'About | Outer Labs',
  description: 'Home Description',
}

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <ImageSection />
      <Services />
      <Team />
    </Layout>
  )
}
