import Link from 'next/link';
import React from 'react';

import SvgPenEditMobile from '@/assets/svg/pen-edit-mobile.svg';

type MobileInfoProps = {
  fullName: string;
  email: string;
};

const MobileInfo = (props: MobileInfoProps) => {
  return (
    <section className="md:hidden flex justify-between items-center">
      <div>
        <p className="font-nunito font-bold">{props.fullName}</p>
        <p className="mt-2">{props.email}</p>
      </div>
      <Link href={'/dashboard/profile'}>
        <SvgPenEditMobile />
      </Link>
    </section>
  );
};

export default MobileInfo;
