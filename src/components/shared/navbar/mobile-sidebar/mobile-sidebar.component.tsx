'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Category } from '@/app/(core)/shop/page';
import SvgMobileSidebarLogo from '@/assets/svg/logo-title-mobile.svg';
import Icon from '@/components/icon';
import {
  AccordionContentFilter,
  AccordionFilter,
  AccordionItemFilter,
  AccordionTriggerFilter,
} from '@/components/ui/accordion-filter';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import UseWindowSize from '@/hooks/use-window-size.hook';
import { cn } from '@/lib/utils';

import SvgMenuBurger from '@icons/menu-burger-square.1.svg';

import MobileSearch from './mobile-search.component';

type Props = {
  categories?: Category[];
};

const MobileSidebar = (props: Props) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const pathname = usePathname();

  const { width } = UseWindowSize();

  useEffect(() => {
    if (width && width > 765) {
      setIsSheetOpen(false);
    }
  }, [width]);

  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger>
        <Icon className="md:hidden flex justify-center items-center w-8 h-8 bg-nature-600 rounded-lg">
          <SvgMenuBurger className="w-6 h-6" />
        </Icon>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-0 p-4 bg-white overflow-y-auto">
        <SvgMobileSidebarLogo />

        <div className="pt-[30px]">
          <MobileSearch />
        </div>

        <ul className="flex flex-col gap-3 mt-6">
          <Link href="/">
            <li
              className={cn(
                'text-sm',
                pathname === '/' ? 'font-bold text-primary-500' : '',
              )}
            >
              Home
            </li>
          </Link>
          <AccordionFilter type="single" collapsible>
            <AccordionItemFilter value="shop" className="border-none">
              <AccordionTriggerFilter className="p-0">
                <li className={cn('text-sm font-normal')}>Shop</li>
              </AccordionTriggerFilter>
              <AccordionContentFilter className="py-1">
                {props.categories?.map((item) => (
                  <Link
                    key={item.id}
                    href={`/shop?category=${item.id}`}
                    className="flex gap-2 items-center rounded-lg cursor-pointer p-1 py-2 hover:bg-nature-200"
                  >
                    <span className="flex items-center w-[39px] aspect-video rounded-md overflow-hidden bg-nature-700">
                      <img src={item.image} className="w-full object-fill" />
                    </span>
                    <p className="font-normal text-xs">{item.name}</p>
                  </Link>
                ))}
              </AccordionContentFilter>
            </AccordionItemFilter>
          </AccordionFilter>
          <Link href="/about-us">
            <li
              className={cn(
                'text-sm',
                pathname === '/about-us' ? 'font-bold text-primary-500' : '',
              )}
            >
              About us
            </li>
          </Link>
          <Link href="/contact-us">
            <li
              className={cn(
                'text-sm',
                pathname === '/contact-us' ? 'font-bold text-primary-500' : '',
              )}
            >
              Contact us
            </li>
          </Link>
          <a href={process.env.NEXT_PUBLIC_BLOG_BASE_URL + '/blog'}>
            <li
              className={cn(
                'text-sm',
                pathname === '/blog' ? 'font-bold text-primary-500' : '',
              )}
            >
              Blog
            </li>
          </a>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
