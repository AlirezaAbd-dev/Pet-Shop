import React from 'react';

import { ProductWildCardProps } from './product-wild-card.component';

type Props = Pick<ProductWildCardProps, 'activePromotions'>;

const OfferCard = (props: Props) => {
  return (
    <div className="h-[43px] md:h-[49px] flex justify-between p-3 bg-error-50 rounded-xl">
      <p className="text-error-500 font-semibold text-sm md:text-lg">
        Amazing offer
      </p>
      <p className="text-error-500 font-bold text-sm md:text-lg">
        {new Date(
          props.activePromotions?.[0].valid_to as string,
        ).toLocaleDateString('en-us', { dateStyle: 'full' })}
      </p>
    </div>
  );
};

export default OfferCard;
