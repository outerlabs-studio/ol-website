import { RealViewport, StyledComponentsRegistry } from 'lib'

export const metadata = {
  title: 'Outer Labs Studio',
  description:
    'Outer Labs offers a wide range of creative and strategic services for remarkable brands, companies and organizations. Outer Labs is a design and development consultancy specializing in creating uniquely aesthetic and highly functional websites, apps, brands, designs, and experiences.',
  openGraph: {
    title: 'Outer Labs Studio',
    description:
      'Outer Labs offers a wide range of creative and strategic services for remarkable brands, companies and organizations. Outer Labs is a design and development consultancy specializing in creating uniquely aesthetic and highly functional websites, apps, brands, designs, and experiences.',
    images: [
      `${
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://outerlabs.studio'
      }/OG.jpg`,
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
        <RealViewport />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
