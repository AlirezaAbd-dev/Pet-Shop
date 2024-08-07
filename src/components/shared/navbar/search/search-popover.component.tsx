import { X } from 'lucide-react';
import Link from 'next/link';

import Icon from '@/components/icon';
import { Input } from '@/components/ui/input';
import LoadingSpinner from '@/components/ui/loading-spinner';
import { cn } from '@/lib/utils';

import useSearchQuery from './search.query';

type SearchPopoverProps = {
  onClose?: () => void;
};

const SearchPopover = (props: SearchPopoverProps) => {
  const {
    query: { data, isPending },
    search,
    setSearch,
  } = useSearchQuery();

  const products = data?.slice(0, 6) || [];

  return (
    <div
      dir="ltr"
      className="absolute top-0 pt-5 z-[1000] overflow-y-auto bg-transparent "
    >
      <div className="hidden md:flex items-center w-[291px] h-[54px] bg-nature-600 rounded-2xl px-3">
        <Icon
          className="text-text-200"
          onClick={() => {
            props.onClose?.();
          }}
        >
          <X className="w-5 h-5" />
        </Icon>
        <Input
          autoFocus
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search product..."
          className="bg-transparent placeholder:text-text-200 font-nunito border-none text-base"
        />
      </div>
      {/* {searchContent} */}
      <ul className="bg-nature-700 w-[291px] mt-3 rounded-xl p-4 flex flex-col gap-5">
        {search.length >= 3 && isPending && (
          <LoadingSpinner className="scale-50" />
        )}
        {search.length < 3 && (
          <p className="text-center text-text-300 font-semibold text-sm">
            Type what you looking for?
          </p>
        )}
        {search.length >= 3 && !isPending && data?.length === 0 && (
          <p className="text-center text-text-300 font-semibold text-sm">
            Nothing found
          </p>
        )}
        {search.length >= 3 &&
          !isPending &&
          data &&
          products.map((item, index) => (
            <Link key={item.id} href={`/product/${item.id}`}>
              <li
                className={cn(
                  '',
                  index !== products.length - 1
                    ? 'pb-5 border-b border-nature-900'
                    : '',
                )}
              >
                {item.name}
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default SearchPopover;
