import { Layout } from 'layouts/default'
import { Hero, Transition, Projects, About } from './components'

export const metadata = {
  title: 'Outer Labs',
  description: 'Home Description',
}

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Transition />
      <Projects />
      <About />
    </Layout>
  )
}
