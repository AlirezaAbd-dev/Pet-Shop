import React from 'react';

const OfferCard = () => {
  return (
    <div className="h-[43px] md:h-[49px] flex justify-between p-3 bg-error-50 rounded-xl">
      <p className="text-error-500 font-semibold text-sm md:text-lg">
        Amazing offer
      </p>
      <p className="text-error-500 font-bold text-sm md:text-lg">
        Friday, July 19, 2024
      </p>
    </div>
  );
};

export default OfferCard;
