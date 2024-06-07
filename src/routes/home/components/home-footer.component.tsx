import Image from 'next/image';
import React from 'react';

import SvgPhoneCall from '@/assets/svg/Phone-Call.svg';
import SvgWhatsup from '@/assets/svg/Whatsup.svg';
import SvgEmail from '@/assets/svg/email-letter-mail-medium.svg';
import SvgFooterlogo from '@/assets/svg/footer-logo.svg';
import SvgTelegram from '@/assets/svg/telegram-circle.svg';
import Icon from '@/components/icon';

const HomeFooter = () => {
  return (
    <footer className="flex flex-col mt-16 bg-secondary-500 px-5 pt-6">
      <Icon>
        <SvgFooterlogo />
      </Icon>
      <p className="font-nunito text-sm text-white mt-6">
        Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut scing
        elit. Ut Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut
        scing elit. Ut{' '}
      </p>

      <ul className="flex flex-col gap-4 mt-6 text-white text-sm font-nunito">
        <li className="flex items-center gap-2 cursor-pointer">
          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>Shop
        </li>
        <li className="flex items-center gap-2 cursor-pointer">
          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>About
          us
        </li>
        <li className="flex items-center gap-2 cursor-pointer">
          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
          Contact us
        </li>
        <li className="flex items-center gap-2 cursor-pointer">
          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
          Privacy
        </li>
      </ul>

      <div className="flex gap-5 mt-6">
        <span className="flex justify-center items-center w-12 h-12 border border-white rounded-full">
          <Icon>
            <SvgPhoneCall />
          </Icon>
        </span>
        <span className="flex justify-center items-center w-12 h-12 border border-white rounded-full">
          <Icon>
            <SvgWhatsup />
          </Icon>
        </span>
        <span className="flex justify-center items-center w-12 h-12 border border-white rounded-full">
          <Icon>
            <SvgTelegram />
          </Icon>
        </span>
        <span className="flex justify-center items-center w-12 h-12 border border-white rounded-full">
          <Icon>
            <SvgEmail />
          </Icon>
        </span>
      </div>

      <Image
        src={'/static/footer-dog-mobile.png'}
        alt="footer-dog"
        width={316}
        height={190}
        className="mt-14"
      />
    </footer>
  );
};

export default HomeFooter;
