import React from 'react';

import SvgPenEditMobile from '@/assets/svg/pen-edit-mobile.svg';

const MobileInfo = () => {
  return (
    <section className="md:hidden flex justify-between items-center">
      <div>
        <p className="font-nunito font-bold">Milad saeedi</p>
        <p className="mt-2">milad138001@gmail.com</p>
      </div>
      <SvgPenEditMobile />
    </section>
  );
};

export default MobileInfo;
