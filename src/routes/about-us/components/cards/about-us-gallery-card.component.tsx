import React from 'react';

type Props = {
  image: string;
};

const AboutUsGalleryCard = (props: Props) => {
  return (
    <div>
      <img src={props.image} />
      <p className="font-bold mt-4 text-center md:text-xl">Name company</p>
      <p className="mt-2 text-sm text-center md:text-base">Year 2024</p>
    </div>
  );
};

export default AboutUsGalleryCard;
