import { Hero, About, ImageSection, Services, Team } from './components'

export const metadata = {
  title: 'About',
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ImageSection />
      <Services />
      <Team />
    </>
  )
}
