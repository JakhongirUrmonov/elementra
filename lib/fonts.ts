import localFont from 'next/font/local';

export const farabee = localFont({
  src: [
    {
      path: '../public/fonts/Farabee Straight Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/Farabee Straight Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Farabee Straight Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Farabee Straight Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Farabee Straight Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Farabee Straight Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Farabee Straight Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
});

export const farabeeHeading = localFont({
  src: [
    {
      path: '../public/fonts/Farabee Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/Farabee Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Farabee Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Farabee Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Farabee Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Farabee Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Farabee Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-canela',
  display: 'swap',
});
