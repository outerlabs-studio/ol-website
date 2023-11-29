import { Layout } from 'layouts/default'
import { Hero, Transition, Projects, About } from './components'

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
