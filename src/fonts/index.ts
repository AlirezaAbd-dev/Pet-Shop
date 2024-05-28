import localFont from 'next/font/local';

const ModamLocalFont = localFont({
  src: [
    {
      path: './modam/Modam-ExtraLight.ttf',
      style: 'normal',
      weight: '200',
    },
    {
      path: './modam/Modam-Light.ttf',
      style: 'normal',
      weight: '300',
    },
    {
      path: './modam/Modam-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: './modam/Modam-Medium.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: './modam/Modam-SemiBold.ttf',
      style: 'normal',
      weight: '600',
    },
    {
      path: './modam/Modam-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
    {
      path: './modam/Modam-ExtraBold.ttf',
      style: 'normal',
      weight: '800',
    },
    {
      path: './modam/Modam-Black.ttf',
      style: 'normal',
      weight: '900',
    },
  ],
});
const ModamNumLocalFont = localFont({
  src: [
    {
      path: './modam/ModamFaNum-ExtraLight.ttf',
      style: 'normal',
      weight: '200',
    },
    {
      path: './modam/ModamFaNum-Light.ttf',
      style: 'normal',
      weight: '300',
    },
    {
      path: './modam/ModamFaNum-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: './modam/ModamFaNum-Medium.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: './modam/ModamFaNum-SemiBold.ttf',
      style: 'normal',
      weight: '600',
    },
    {
      path: './modam/ModamFaNum-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
    {
      path: './modam/ModamFaNum-ExtraBold.ttf',
      style: 'normal',
      weight: '800',
    },
    {
      path: './modam/ModamFaNum-Black.ttf',
      style: 'normal',
      weight: '900',
    },
  ],
});

const classNames = `${ModamLocalFont.className} ${ModamNumLocalFont.className}`;

const fonts = {
  fonts: {
    ModamLocalFont: ModamLocalFont,
    ModamFaNumLocalFont: ModamNumLocalFont,
  },
  classNames,
};

export default fonts;
