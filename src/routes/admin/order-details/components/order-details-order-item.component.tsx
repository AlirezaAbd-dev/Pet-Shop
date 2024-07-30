import React from 'react';

type Props = {
  id: number;
  name: string;
  image: string;
  weight: number;
  quantity: number;
  price: string;
};

const OrderDetailsOrderItemCard = (props: Props) => {
  return (
    <li key={props.id} className="flex gap-6">
      <div className="flex justify-center items-center w-[160px] h-[160px] bg-nature-700 rounded-xl">
        <img src={props.image} className="h-[133px] w-auto" />
      </div>
      <div>
        <p className="text-xl font-bold">{props.name}</p>
        <p className="mt-4 font-semibold text-lg text-text-400">
          {props.weight}KG
        </p>
        <p className="mt-4 font-semibold text-lg text-text-400">
          Number: {props.quantity}
        </p>
        <p className="mt-4 font-semibold text-lg text-text-400">
          Price: ${props.price}
        </p>
      </div>
    </li>
  );
};

export default OrderDetailsOrderItemCard;
