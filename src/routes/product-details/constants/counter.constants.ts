export const COUNTER_VARIANTS = {
  lg: {
    container:
      'flex gap-4 md:gap-6 justify-between items-center p-2 md:py-[10px] px-3 border border-nature-900 rounded-lg md:rounded-2xl',
    counterButtons:
      'flex justify-center items-center w-7 h-7 md:w-11 md:h-11 bg-nature-700 rounded-[4px] cursor-pointer md:rounded-lg',
    icons: 'w-5 text-text-400',
    delete: 'w-5 text-error-500',
    valueText: 'text-xl md:text-[32px]',
  },
  sm: {
    container:
      'flex gap-4 mt-3 md:gap-4  justify-between items-center md:p-1 py-1 px-2 border border-nature-900 rounded-lg',
    counterButtons:
      'flex justify-center items-center w-6 h-6 md:w-7 md:h-7 bg-nature-700 rounded-[4px] cursor-pointer md:rounded-lg',
    delete: 'w-3 md:w-4 text-error-500',
    icons: 'w-4 md:w-5 text-text-400',
    valueText: 'text-lg md:text-xl',
  },
  md: {
    container:
      'flex gap-3 md:gap-6 justify-between items-center px-2 py-[5px] md:p-3 border border-nature-900 rounded-lg cursor-pointer md:rounded-2xl',
    counterButtons:
      'flex justify-center items-center w-6 h-6 md:w-8 md:h-8 bg-nature-700 rounded-[4px] md:rounded-lg',
    delete: 'w-3 md:w-4 text-error-500',
    icons: 'w-4 md:w-5 text-text-400',
    valueText: 'text-lg md:text-[24px]',
  },
} as const;

export type CounterVariantsSizeType = keyof typeof COUNTER_VARIANTS;
