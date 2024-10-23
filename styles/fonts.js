import localFont from 'next/font/local'

const wtskrappa = localFont({
  adjustFontFallback: 'Arial',
  variable: '--font',
  preload: true,
  src: [
    {
      path: '../public/fonts/WT_Skrappa_Roman.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
})

export default wtskrappa
