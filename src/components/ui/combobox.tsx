'use client';

import SvgArrowDropDown from '@material-symbols/svg-400/rounded/arrow_drop_down.svg';
import { NoInfer } from '@tanstack/react-query';
import { Check, ChevronDown } from 'lucide-react';
import * as React from 'react';

import { Prettify } from '@/lib/types/utils';
import { cn } from '@/lib/utils';

import Icon from '../icon';
import { Button } from './button';
import { Command, CommandEmpty, CommandGroup, CommandItem } from './command';
import { Input } from './input';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

type ComboboxProps<TValue extends string, TLiteral extends boolean> = Prettify<
  {
    name: string;
    placeholder?: string;
    emptyMessage?: string;
    lang?: 'en' | 'fa';
    data: { value: TValue; label: string }[];
    required?: boolean;
    buttonClassName?: string;
    placeholderClassName?: string;
    isLiteral?: TLiteral;
    value?: TLiteral extends true ? NoInfer<TValue> : string;
    onSelect?: (
      name: string,
      value: TLiteral extends true ? NoInfer<TValue> : string,
    ) => void;
    onBlur?: () => void;
  } & (
    | {
        noneEmpty?: true;
        defaultValue: TLiteral extends true ? NoInfer<TValue> : string;
      }
    | {
        noneEmpty?: false;
        defaultValue?: TLiteral extends true ? NoInfer<TValue> : string;
      }
  )
>;

export function Combobox<
  TValue extends string,
  TLiteral extends boolean = true,
>({
  noneEmpty = false,
  emptyMessage = '',
  placeholder = '',
  lang = 'en',
  onBlur,
  ...props
}: ComboboxProps<TValue, TLiteral>) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<TValue | string>(
    props.defaultValue || '',
  );
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    props.onSelect?.(props.name, value as TValue);
  }, [value, props.name]);

  React.useEffect(() => {
    if (props.value != null) setValue(props.value);
  }, [props.value]);

  const items = props.data.filter((item) => {
    if (!searchValue) return true;
    else {
      if (item.label.includes(searchValue)) {
        return true;
      } else {
        return false;
      }
    }
  });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger dir={lang === 'en' ? 'ltr' : 'rtl'} asChild>
        <Button
          variant="outline-gray"
          role="combobox"
          aria-expanded={open}
          className={cn(
            'w-full justify-between bg-white border-gray-300 rounded-xl text-dark-60 border sm:text-sm md:font-normal md:text-base',
            props.buttonClassName,
          )}
        >
          {value ? (
            props.data.find((d) => d.value === value)?.label
          ) : placeholder ? (
            <p className={props.placeholderClassName}>
              {placeholder + `${props.required ? '*' : ''}`}
            </p>
          ) : (
            <span></span>
          )}

          <ChevronDown className="h-6 w-6 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        className="w-[200px] p-3 rounded-xl bg-white border-nature-800"
        dir={lang === 'en' ? 'ltr' : 'rtl'}
      >
        <ul className="w-full flex flex-col gap-2">
          {items.map((item) => (
            <li
              key={item.value}
              className="flex justify-between items-center p-2 cursor-pointer rounded-lg hover:bg-nature-200"
              onClick={() => {
                if (!noneEmpty) {
                  setValue(item.value === value ? '' : item.value);
                } else {
                  setValue(item.value);
                }
                setOpen(false);
                onBlur?.();
              }}
            >
              {item.label}
              <Check
                className={cn(
                  'mr-2 h-4 w-4',
                  value === item.value ? 'opacity-100' : 'opacity-0',
                )}
              />
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
