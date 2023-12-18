import { Hero, About, Images, Services } from './components'

export const metadata = {
  title: 'TechCodes - STEM Education',
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Images />
      <Services />
    </>
  )
}
