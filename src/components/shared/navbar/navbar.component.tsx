'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import SvgLogoDesktop from '@/assets/svg/logo-title-desktop.svg';
import SvgLogoMobile from '@/assets/svg/logo-title-mobile.svg';
import Icon from '@/components/icon';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

import SvgSearch from '@icons/search-loupe-custom.svg';
import SvgSingleUserDesktop from '@icons/single-user-desktop.svg';
import SvgSingleUser from '@icons/single-user.svg';

import CartButton from './cart-hover.component';
import MobileSidebar from './mobile-sidebar.component';
import ShopHover from './shop-hover.component';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between md:items-center px-5 md:px-20 py-3 md:py-5 border-b border-nature-800">
      <div className="flex gap-3">
        {/* Drawer */}
        <MobileSidebar />
        {/* End Drawer */}
        <Link href={'/'}>
          <SvgLogoMobile className="md:hidden" />
          <SvgLogoDesktop className="hidden md:block" />
        </Link>
        <ul className="hidden md:flex items-center pl-8 gap-7">
          <Link href={'/'}>
            <li
              className={cn(
                'flex items-center gap-1 cursor-pointer  text-lg',
                pathname === '/' ? 'font-bold text-primary-500 active-dot' : '',
              )}
            >
              Home
            </li>
          </Link>
          {/* Shop hover card */}
          <ShopHover />
          {/* End Shop hover card */}
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

        {/* Mini cart */}
        <CartButton />
        {/* End Mini Cart */}
      </div>
    </nav>
  );
};

export default Navbar;
