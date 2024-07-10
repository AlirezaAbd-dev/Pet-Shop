import Icon from '@/components/icon';

import SvgShoppingCardDesktop from '@icons/shopping-card-desktop.svg';
import SvgShoppingCard from '@icons/shopping-card.svg';

const CartHoverTrigger = () => {
  return (
    <Icon className="flex justify-center items-center w-8 md:w-14 h-8 md:h-14 cursor-pointer bg-primary-500 rounded-lg md:rounded-2xl text-primary-500">
      <SvgShoppingCard className="md:hidden w-6 h-6" />
      <SvgShoppingCardDesktop className="hidden md:block w-8 h-8" />
    </Icon>
  );
};
export default CartHoverTrigger;
