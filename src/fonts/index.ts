import localFont from 'next/font/local';

const OpenSansLocalFont = localFont({
  src: [
    {
      path: './Open_Sans/OpenSans-Light.ttf',
      style: 'normal',
      weight: '300',
    },
    {
      path: './Open_Sans/OpenSans-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: './Open_Sans/OpenSans-Medium.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: './Open_Sans/OpenSans-SemiBold.ttf',
      style: 'normal',
      weight: '600',
    },
    {
      path: './Open_Sans/OpenSans-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
    {
      path: './Open_Sans/OpenSans-ExtraBold.ttf',
      style: 'normal',
      weight: '800',
    },
  ],
  variable: '--font-opensans',
});
const NunitoLocalFont = localFont({
  src: [
    {
      path: './Nunito/Nunito-ExtraLight.ttf',
      style: 'normal',
      weight: '200',
    },
    {
      path: './Nunito/Nunito-Light.ttf',
      style: 'normal',
      weight: '300',
    },
    {
      path: './Nunito/Nunito-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: './Nunito/Nunito-Medium.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: './Nunito/Nunito-SemiBold.ttf',
      style: 'normal',
      weight: '600',
    },
    {
      path: './Nunito/Nunito-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
    {
      path: './Nunito/Nunito-ExtraBold.ttf',
      style: 'normal',
      weight: '800',
    },
    {
      path: './Nunito/Nunito-Black.ttf',
      style: 'normal',
      weight: '900',
    },
  ],
  variable: '--font-nunito',
});

const classNames = `${OpenSansLocalFont.className} ${NunitoLocalFont.className}`;
const variables = `${OpenSansLocalFont.variable} ${NunitoLocalFont.variable}`;

const fonts = {
  fonts: {
    opensans: OpenSansLocalFont,
    nunito: NunitoLocalFont,
  },
  classNames,
  variables,
};

export default fonts;
