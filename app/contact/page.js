import { lightTheme } from 'styles'
import { Hero } from './components'

export const metadata = {
  title: 'Contact',
}

export default function Contact() {
  return (
    <div style={{ backgroundColor: `rgb(${lightTheme.text})` }}>
      <Hero />
      <Hero />
      <Hero />
    </div>
  )
}
