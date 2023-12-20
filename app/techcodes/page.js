import Project from 'components/project'

const title = 'TechCodes - STEM education for the next generation'
const description = `We partnered with TechCodes to promote inclusivity in STEM by making computer science education accessible and fun.`
const url = `${
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://www.outerlabs.studio'
}/techcodes`
const image = `${
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://www.outerlabs.studio'
}/techcodes-1.webp`

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
        title="TechCodes"
        heroImage={{ src: '/techcodes-1.webp', alt: 'TechCodes' }}
        about={{
          subtitle: `We partnered with TechCodes to promote inclusivity in STEM by making computer science education accessible and fun.`,
          paragraphs: [
            `TechCodes, initially a high school club, has evolved into a significant force in inspiring the next generation of software engineers. As a student-run nonprofit, TechCodes is dedicated to making computer science education accessible and engaging to students worldwide. They have collaborated with leading companies like Google, Microsoft, and Amazon, emphasizing their commitment to quality and relevance in the tech industry​​.`,
            `Their approach to teaching is innovative and diverse, focusing on various programs designed to cater to different levels of interest and expertise in computer science. These include annual hackathons, after school workshops, summer programs, and high school events like speaker events and game jams. These initiatives are meticulously crafted to foster creativity, collaboration, and practical skills among students​​.`,
            `For a brand strategy that aligns with TechCodes' goals and ethos, it was crucial to encapsulate these core values and approaches. Our design emphasizes the organization's commitment to accessible and engaging computer science education, its collaborative and volunteer-driven nature, and its connection with industry leaders. We kept a youthful and dynamic aesthetic while maintaining a professional tone, resonating with both the student community and potential partners in the tech industry. This balance helped solidify TechCodes' position as a significant contributor to STEM education and a hub for future software engineers.`,
          ],
          live: 'https://techcodes.outerlabs.studio',
        }}
        images={[
          { src: '/techcodes-2.webp', alt: 'TechCodes brochure' },
          { src: '/techcodes-4.webp', alt: 'TechTalks posters and branding' },
          { src: '/techcodes-5.webp', alt: 'Code Overflow Figma mockups' },
          { src: '/techcodes-6.webp', alt: 'TechCodes about page mockups' },
        ]}
        services={[
          {
            type: 'Services',
            list: [
              'Web design',
              'Frontend development',
              'Content guidelines',
              'Creative direction',
              'Branding',
            ],
          },
          {
            type: 'Technology',
            list: [
              'React',
              'NextJS',
              'Styled components',
              'Sanity',
              'Vercel',
              'GSAP',
            ],
          },
        ]}
      />
    </>
  )
}
