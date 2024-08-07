import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import Icon from '@/components/icon';
import { Input } from '@/components/ui/input';
import UseWindowSize from '@/hooks/use-window-size.hook';
import { cn } from '@/lib/utils';

import SvgSearch from '@icons/search-loupe-custom.svg';

import SearchPopover from './search-popover.component';

const NavbarSearch = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { width } = UseWindowSize();

  const router = useRouter();

  useEffect(() => {
    setIsSearchOpen(false);
  }, [router, width]);

  const openSearch = () => {
    setIsSearchOpen(true);
  };
  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <>
      {isSearchOpen && (
        <div
          className="hidden md:block absolute w-screen h-screen opacity-20 top-0 left-0 cursor-pointer z-[900]"
          onClick={closeSearch}
        ></div>
      )}
      {isSearchOpen && (
        <div className="hidden sm:block absolute top-0">
          <SearchPopover onClose={closeSearch} />
        </div>
      )}
      <div
        className={cn('hidden md:block relative w-[340px] h-[48px]')}
        onClick={openSearch}
      >
        <div className="hidden md:flex items-center w-[291px] h-[54px] bg-nature-600 rounded-2xl px-3">
          <Icon className="text-text-200">
            <SvgSearch className="w-8 h-8" />
          </Icon>
          <Input
            readOnly
            placeholder="Search product..."
            className="bg-transparent placeholder:text-text-200 font-nunito border-none text-base"
          />
        </div>
        <div className="sm:hidden">{isSearchOpen && <SearchPopover />}</div>
      </div>
    </>
  );
};

export default NavbarSearch;
