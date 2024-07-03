'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import SvgMobileSidebarLogo from '@/assets/svg/mobile-sidebar-logo.svg';
import Icon from '@/components/icon';
import {
  AccordionContentFilter,
  AccordionFilter,
  AccordionItemFilter,
  AccordionTriggerFilter,
} from '@/components/ui/accordion-filter';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

import SvgMenuBurger from '@icons/menu-burger-square.1.svg';
import SvgSearch from '@icons/search-loupe-custom-mobile.svg';

const MobileSidebar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const event = () => {
      setIsSheetOpen(false);
    };
    window.addEventListener('resize', event);

    return () => {
      window.removeEventListener('resize', event);
    };
  }, []);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger>
        <Icon className="md:hidden flex justify-center items-center w-8 h-8 bg-nature-600 rounded-lg">
          <SvgMenuBurger className="w-6 h-6" />
        </Icon>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-0 p-4 bg-white overflow-y-auto">
        <SvgMobileSidebarLogo />

        <div className="flex items-center w-full h-[44px] bg-nature-600 rounded-xl px-3 mt-[30px]">
          <Icon className="text-text-200">
            <SvgSearch />
          </Icon>
          <Input
            placeholder="Search product..."
            className="bg-transparent placeholder:text-text-200 font-nunito border-none text-xs pl-1"
          />
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
                <div className="flex gap-1 items-center rounded-lg cursor-pointer p-1 hover:bg-nature-200">
                  <span className="rectangle flex items-center w-[39px] h-[39px] p-[6px] bg-nature-700">
                    <img src="/static/categories/toys.png" />
                  </span>
                  <p className="font-normal text-xs">Toys</p>
                </div>
                <div className="flex gap-1 items-center rounded-lg cursor-pointer p-1 hover:bg-nature-200">
                  <span className="rectangle flex items-center w-[39px] h-[39px] p-[6px] bg-nature-700">
                    <img src="/static/categories/resting-place.png" />
                  </span>
                  <p className="font-normal text-xs">Resting places</p>
                </div>
                <div className="flex gap-1 items-center rounded-lg cursor-pointer p-1 hover:bg-nature-200">
                  <span className="rectangle flex items-center w-[39px] h-[39px] p-[6px] bg-nature-700">
                    <img src="/static/categories/at-home.png" />
                  </span>
                  <p className="font-normal text-xs">At home</p>
                </div>
                <div className="flex gap-1 items-center rounded-lg cursor-pointer p-1 hover:bg-nature-200">
                  <span className="rectangle flex items-center w-[39px] h-[39px] p-[6px] bg-nature-700">
                    <img src="/static/categories/food.png" />
                  </span>
                  <p className="font-normal text-xs">Food</p>
                </div>
                <div className="flex gap-1 items-center rounded-lg cursor-pointer p-1 hover:bg-nature-200">
                  <span className="rectangle flex items-center w-[39px] h-[39px] p-[6px] bg-nature-700">
                    <img src="/static/categories/training-and-sport.png" />
                  </span>
                  <p className="font-normal text-xs">Training and sport</p>
                </div>
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
              Contact-us
            </li>
          </Link>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
