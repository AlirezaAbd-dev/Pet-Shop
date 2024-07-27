import React from 'react';

import { Button } from '@/components/ui/button';

const AdminCommentCard = () => {
  return (
    <li className="w-full bg-white border border-nature-800 px-4 py-6 rounded-xl">
      <div className="flex justify-between">
        <p className="flex gap-3">
          Name product
          <span className="font-bold">Royal Canin Urinary</span>
        </p>
        <p className="flex gap-3">
          Phone
          <span className="font-bold">09304673884</span>
        </p>
        <p className="flex gap-3">
          Email
          <span className="font-bold">milad138001@gmail.com</span>
        </p>
        <p className="flex gap-3">
          Username
          <span className="font-bold">Milad saeedi</span>
        </p>
      </div>
      <div className="w-full border-t border-[#E0E0E0] mt-6"></div>
      <p className="mt-6">
        Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut scing elit
        Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut scing elit
      </p>

      <div className="flex justify-end gap-4 mt-9">
        <Button
          variant={'confirm'}
          className="md:text-sm font-semibold h-11 w-[142px] rounded-lg"
        >
          Confirmation
        </Button>
        <Button
          variant={'outline'}
          className="md:text-sm font-semibold h-11 w-[103px] rounded-lg"
        >
          Remove
        </Button>
      </div>
    </li>
  );
};

export default AdminCommentCard;
