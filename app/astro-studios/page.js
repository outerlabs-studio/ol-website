import Project from 'components/project'

const title = 'astro studios - podcasting for Gen Z'
const description = `In our collaboration with Astro Studios, we are transforming the podcast landscape for Generation Z by addressing mental health stigmas and enhancing accessibility; making podcasts an appealing and supportive resource for the well-being of young minds.`
const url = `${
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://www.outerlabs.studio'
}/astro-studios`
const image = `${
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://www.outerlabs.studio'
}/astrostudios-2.webp`

export const metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: url,
    images: { url: image, width: 1200, height: 630 },
  },
  twitter: {
    title: title,
    description: description,
    url: url,
    images: { url: image, width: 1200, height: 630 },
  },
}

export default function Home() {
  return (
    <>
      <Project
        title="Astro&nbsp;Studios"
        heroImage={{ src: '/astrostudios-2.webp', alt: 'Astro Studios' }}
        about={{
          subtitle: `In our collaboration with Astro Studios, we are transforming the podcast landscape for Generation Z by addressing mental health stigmas and enhancing accessibility; making podcasts an appealing and supportive resource for the well-being of young minds.`,
          paragraphs: [
            `Astro Studios, emerging from the successful Teenager Therapy podcast, has rapidly become a trailblazer in the realm of adolescent mental health support. At its core, Astro Studios is a mission-driven podcast network dedicated to producing content that addresses the complex emotional and mental health needs of today's youth.​`,
            `Founded by the visionary Gael Aitor, at just 19 years of age, and co-founded by Kayla Suarez, Astro Studios is a testament to the power of young entrepreneurs in making a substantial impact in the mental health sector. Their approach is innovative and empathetic, focusing on creating a variety of podcast series that cater to different aspects of teen mental health, such as dealing with breakups, loneliness, and the transition to adulthood. These podcasts are carefully curated to provide comfort, guidance, and a sense of community to adolescents grappling with life's challenges. Astro Studios' collaboration with professionals in the field underscores their commitment to offering reliable, insightful, and accessible mental health resources. The design and strategy of the brand reflect its dedication to addressing the nuanced needs of Gen Z, with a focus on authenticity, relatability, and practical advice, thus solidifying its position as a pivotal resource in the landscape of teen mental health and well-being`,
            `For Astro Studios, we created a website that seamlessly mirrors its brand identity, focusing on mental health support for adolescents. The design features a rich color palette, fun typography, and a scroll-based layout, allowing users to expolore the site rather than just read it. Technically, the site boasts a user-friendly interface with modern motion design, responsive design for optimal viewing across devices, and a robust content management system for dynamic updates. Accessibility is prioritized with features like text-to-speech and adjustable text sizes, ensuring inclusivity. Security measures are stringent, protecting user data and privacy. The integration of advanced analytics and adherence to SEO best practices ensure the site’s effectiveness and reach, making it a digital haven that embodies Astro Studios' mission of empathy, innovation, and inclusivity in teen mental health support.`,
          ],
          live: 'https://astrostudios.xyz',
        }}
        images={[
          { src: '/astrostudios-4.webp', alt: 'Astro Studios team section' },
          { src: '/astrostudios-3.webp', alt: 'Astro Studios' },
          { src: '/astrostudios-5.webp', alt: 'Astro Studios about section' },
          {
            src: '/astrostudios-6.webp',
            alt: 'Astro Studios information section',
          },
        ]}
        services={[
          {
            type: 'Services',
            list: [
              'Web design',
              'Frontend development',
              'Content guidelines',
              'CMS development',
            ],
          },
          {
            type: 'Technology',
            list: [
              'React',
              'NextJS',
              'Styled components',
              'Strapi',
              'Vercel',
              'GSAP',
            ],
          },
        ]}
      />
    </>
  )
}
