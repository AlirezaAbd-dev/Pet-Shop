import Link from 'next/link';
import React from 'react';

import { Banner } from '..';

type Props = {
  banners: Banner[];
};

const Banners2 = (props: Props) => {
  return (
    <main className="mt-16 md:mt-24 flex flex-col md:flex-row gap-6 md:gap-7 px-5 md:px-20">
      {props.banners.slice(0, 2).map((b) => (
        <Link key={b.id} href={b.link} className="w-full">
          <img
            src={process.env.NEXT_PUBLIC_BASE_URL + b.image}
            className="w-full"
          />
        </Link>
      ))}
    </main>
  );
};

export default Banners2;
