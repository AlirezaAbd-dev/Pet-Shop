import Link from 'next/link';

import SvgLogoDesktop from '@/assets/svg/logo-title-desktop.svg';
import SvgLogoMobile from '@/assets/svg/logo-title-mobile.svg';
import Icon from '@/components/icon';
import { Input } from '@/components/ui/input';

import SvgArrow from '@icons/arrow.1.svg';
import SvgMenuBurger from '@icons/menu-burger-square.1.svg';
import SvgSearch from '@icons/search-loupe-custom.svg';
import SvgSingleUserDesktop from '@icons/single-user-desktop.svg';
import SvgSingleUser from '@icons/single-user.svg';

import CartButton from './cart-hover.component';

const Navbar = () => {
  return (
    <nav className="flex justify-between md:items-center px-5 md:px-20 py-3 md:py-5 border-b border-nature-800">
      <div className="flex gap-3">
        <Icon className="md:hidden flex justify-center items-center w-8 h-8 bg-nature-600 rounded-lg">
          <SvgMenuBurger className="w-6 h-6" />
        </Icon>
        <Link href={'/'}>
          <SvgLogoMobile className="md:hidden" />
          <SvgLogoDesktop className="hidden md:block" />
        </Link>
        <ul className="hidden md:flex items-center pl-8 gap-7">
          <Link href={'/'}>
            <li className="flex items-center gap-1 cursor-pointer font-bold text-lg text-primary-500 active-dot">
              Home
            </li>
          </Link>
          <li className="flex items-center gap-1 cursor-pointer text-lg">
            Shop{' '}
            <Icon>
              <SvgArrow className="w-5 h-5 rotate-180" />
            </Icon>
          </li>
          <li className="flex items-center gap-1 cursor-pointer text-lg">
            About us
          </li>
          <li className="flex items-center gap-1 cursor-pointer text-lg">
            Contact us
          </li>
        </ul>
      </div>
      <div className="flex gap-2 md:gap-4">
        <div className="hidden md:flex items-center w-[291px] h-[54px] bg-nature-600 rounded-2xl px-3">
          <Icon className="text-text-200">
            <SvgSearch className="w-8 h-8" />
          </Icon>
          <Input
            placeholder="Search product..."
            className="bg-transparent placeholder:text-text-200 font-nunito border-none text-base"
          />
        </div>
        <Link href={'/login'}>
          <Icon className="flex justify-center items-center w-8 md:w-14 h-8 md:h-14 cursor-pointer bg-secondary-500 rounded-lg md:rounded-2xl text-white">
            <SvgSingleUser className="md:hidden w-6 h-6" />
            <SvgSingleUserDesktop className="hidden md:block w-8 h-8" />
          </Icon>
        </Link>

        <CartButton />
      </div>
    </nav>
  );
};

export default Navbar;
