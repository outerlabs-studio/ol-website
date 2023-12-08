import { StyledComponentsRegistry } from 'lib'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: {
    template: '%s | Outer Labs',
    default: 'Outer Labs | Websites, apps, & branding',
  },
  description:
    'Outer Labs offers a wide range of creative and strategic services for remarkable brands, companies and organizations. Outer Labs is a design and development consultancy specializing in creating uniquely aesthetic and highly functional websites, apps, brands, designs, and experiences.',
  keywords: [
    'Outer Labs',
    'Outer Labs Studio',
    'Outer Labs Design',
    'branding',
    'website design',
    'web design',
    'web development',
    'app development',
    'creative direction',
    'creative web design',
    'creative web development',
    'creative agency',
    'creative studio',
    'creative design',
    'ecommerce',
    'ecommerce development',
    'app design',
    'graphic design',
    'logo design',
    'logo',
    'SEO optimiztion',
    'design',
    'development',
    'awwwards',
    'css design awards',
    'nyc design',
    'nyc design studio',
    'nyc design agency',
  ],
  openGraph: {
    title: 'Outer Labs Studio',
    description:
      'Outer Labs offers a wide range of creative and strategic services for remarkable brands, companies and organizations. Outer Labs is a design and development consultancy specializing in creating uniquely aesthetic and highly functional websites, apps, brands, designs, and experiences.',
    url: 'https://outerlabs.studio',
    locale: 'en_US',
    type: 'website',
    images: {
      url: `${
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://outerlabs.studio'
      }/og-image.jpg`,
      width: 1200,
      height: 630,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Outer Labs | Design and Development Studio',
    description:
      'Outer Labs offers a wide range of creative and strategic services for remarkable brands, companies and organizations. Outer Labs is a design and development consultancy specializing in creating uniquely aesthetic and highly functional websites, apps, brands, designs, and experiences.',
    creator: '@kyryloren',
    images: [
      `${
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://outerlabs.studio'
      }/og-image.jpg`,
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/lrk0fqe.css" />

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="referrer" content="no-referrer" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="US" />

        {/* START FAVICON */}
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned.tab.svg"
          color="#121212"
        />
        <meta name="msapplication-TileColor" content="#121212" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="icon" href="/favicon/favicon.ico" />

        {/* END FAVICON */}
      </head>
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Analytics />
      </body>
    </html>
  )
}
