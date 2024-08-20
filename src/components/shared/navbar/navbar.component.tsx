'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import SvgArrowWhite16 from '@/assets/svg/Arrow-white-16.svg';
import SvgArrowWhite24 from '@/assets/svg/Arrow-white-24.svg';
import SvgLogoDesktop from '@/assets/svg/logo-title-desktop.svg';
import SvgLogoMobile from '@/assets/svg/logo-title-mobile.svg';
import Icon from '@/components/icon';
import useProfileQuery from '@/hooks/react-query/queries/profile.query';
import useSyncCartQuery from '@/hooks/react-query/queries/sync-cart.query';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/store/auth.store';

import SvgSingleUserDesktop from '@icons/single-user-desktop.svg';
import SvgSingleUser from '@icons/single-user.svg';

import useCategoriesQuery from './categories.query';
import CartButton from './mini-cart/cart-hover.component';
import MobileSidebar from './mobile-sidebar/mobile-sidebar.component';
import NavbarSearch from './search/navbar-search.component';
import ShopHover from './shop-hover.component';

const Navbar = () => {
  useProfileQuery();
  useSyncCartQuery();

  const { data } = useCategoriesQuery();

  const pathname = usePathname();
  const router = useRouter();

  const profile = useAuthStore((s) => s.profile);

  return (
    <nav className="flex justify-between md:items-center px-5 md:px-20 py-3 md:py-5 border-b border-nature-800">
      <div className="flex gap-3">
        {/* Drawer */}
        <MobileSidebar categories={data} />
        {/* End Drawer */}
        <Link href={'/'}>
          <SvgLogoMobile className="md:hidden mt-1" />
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
          <ShopHover categories={data} />
          {/* End Shop hover card */}
          <Link href={'/about-us'}>
            <li
              className={cn(
                'flex items-center gap-1 cursor-pointer  text-lg',
                pathname === '/about-us'
                  ? 'font-bold text-primary-500 active-dot'
                  : '',
              )}
            >
              About us
            </li>
          </Link>
          <Link href={'/contact-us'}>
            <li
              className={cn(
                'flex items-center gap-1 cursor-pointer  text-lg',
                pathname === '/contact-us'
                  ? 'font-bold text-primary-500 active-dot'
                  : '',
              )}
            >
              Contact us
            </li>
          </Link>
          <a href={process.env.NEXT_PUBLIC_BLOG_BASE_URL + '/blog'}>
            <li
              className={cn(
                'flex items-center gap-1 cursor-pointer  text-lg',
                pathname === '/blog'
                  ? 'font-bold text-primary-500 active-dot'
                  : '',
              )}
            >
              Blog
            </li>
          </a>
        </ul>
      </div>
      <div className="flex gap-2 md:gap-4">
        <NavbarSearch />
        <Icon
          onClick={() => {
            if (profile) {
              router.push('/dashboard/main');
            } else {
              router.push('/login');
            }
          }}
          className={cn(
            'flex justify-center items-center w-8 md:w-14 h-8 md:h-14 cursor-pointer bg-secondary-500 rounded-lg md:rounded-2xl text-white',
            profile ? 'w-auto md:w-auto md:px-4 md:gap-2 gap-0 px-2' : '',
          )}
        >
          <SvgSingleUser className="md:hidden w-6 h-6" />
          <SvgSingleUserDesktop className="hidden md:block w-8 h-8" />
          {profile && (
            <>
              <p className="hidden md:block">{profile?.full_name}</p>
              <SvgArrowWhite24 className="hidden md:block" />
              <SvgArrowWhite16 className="md:hidden" />
            </>
          )}
        </Icon>

        {/* Mini cart */}
        <CartButton />
        {/* End Mini Cart */}
      </div>
    </nav>
  );
};

export default Navbar;
