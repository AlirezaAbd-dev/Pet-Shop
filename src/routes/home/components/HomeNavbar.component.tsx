import React from 'react';

import SvgLogo from '@/assets/svg/logo-title-mobile.svg';
import Icon from '@/components/icon';

import SvgBag2 from '@icons/bag-2.svg';
import SvgMenuBurger from '@icons/menu-burger-square.1.svg';
import SvgSingleUser from '@icons/single-user.svg';

const HomeNavbar = () => {
  return (
    <nav className="flex justify-between px-5 py-3 border-b border-neutral-800">
      <div className="flex gap-3">
        <Icon className="flex justify-center items-center w-8 h-8 bg-nature-600 rounded-lg">
          <SvgMenuBurger className="w-6 h-6" />
        </Icon>
        <Icon>
          <SvgLogo />
        </Icon>
      </div>
      <div className="flex gap-2">
        <Icon className="flex justify-center items-center w-8 h-8 bg-secondary-500 rounded-lg text-white">
          <SvgSingleUser className="w-6 h-6" />
        </Icon>
        <Icon className="flex justify-center items-center w-8 h-8 bg-primary-500 rounded-lg text-primary-500">
          <SvgBag2 className="w-6 h-6" />
        </Icon>
      </div>
    </nav>
  );
};

export default HomeNavbar;
