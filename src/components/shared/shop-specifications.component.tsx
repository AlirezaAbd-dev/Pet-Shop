import SvgMedal36 from '@/assets/svg/medal-36.svg';
import SvgMoney36 from '@/assets/svg/money-36.svg';
import SvgShield36 from '@/assets/svg/shield-36.svg';
import SvgStarOutlined36 from '@/assets/svg/start-outlined-36.svg';
import { cn } from '@/lib/utils';

import Icon from '../icon';

type ShopSecificationsProps = {
  className?: string;
};

const ShopSpecifications = (props: ShopSecificationsProps) => {
  return (
    <ul
      className={cn(
        'flex flex-col md:flex-row md:justify-between md:items-center gap-6',
        props.className,
      )}
    >
      <li className="flex md:flex-col gap-3 md:items-center">
        <Icon>
          <SvgMedal36 className="md:hidden" />
          <SvgMedal36 className="hidden md:block" />
        </Icon>
        <div className="flex flex-col gap-2">
          <p className="text-sm md:text-base md:text-center">Experience</p>
          <p className="text-sm md:text-base font-semibold md:text-center">
            25+ years in pet supplies
          </p>
        </div>
      </li>
      <div className="hidden md:block border-l border-secondary-100 h-[31px]"></div>
      <li className="flex gap-3 md:flex-col md:items-center">
        <Icon>
          <SvgShield36 className="md:hidden" />
          <SvgShield36 className="hidden md:block" />
        </Icon>
        <div className="flex flex-col gap-2">
          <p className="text-sm md:text-base md:text-center">Materials</p>
          <p className="text-sm md:text-base font-semibold md:text-center">
            Top-tier materials only
          </p>
        </div>
      </li>
      <div className="hidden md:block border-l border-secondary-100 h-[31px]"></div>

      <li className="flex gap-3 md:flex-col md:items-center">
        <Icon>
          <SvgMoney36 className="md:hidden" />
          <SvgMoney36 className="hidden md:block" />
        </Icon>
        <div className="flex flex-col gap-2">
          <p className="text-sm md:text-base md:text-center">Prices</p>
          <p className="text-sm md:text-base font-semibold md:text-center">
            Competitive prices, premium quality
          </p>
        </div>
      </li>
      <div className="hidden md:block border-l border-secondary-100 h-[31px]"></div>

      <li className="flex gap-3 md:flex-col md:items-center">
        <Icon>
          <SvgStarOutlined36 className="md:hidden" />
          <SvgStarOutlined36 className="hidden md:block" />
        </Icon>
        <div className="flex flex-col gap-2">
          <p className="text-sm md:text-base md:text-center">Quality</p>
          <p className="text-sm md:text-base font-semibold md:text-center">
            Uncompromising quality assured
          </p>
        </div>
      </li>
    </ul>
  );
};

export default ShopSpecifications;
