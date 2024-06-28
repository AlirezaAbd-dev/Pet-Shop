import Image from 'next/image';
import React from 'react';

import SvgPhoneCallMobile from '@/assets/svg/Phone-Call.svg';
import SvgWhatsupDesktop from '@/assets/svg/Whatsup-desktop.svg';
import SvgWhatsup from '@/assets/svg/Whatsup.svg';
import SvgEmailDesktop from '@/assets/svg/email-letter-mail-medium-desktop.svg';
import SvgEmail from '@/assets/svg/email-letter-mail-medium.svg';
import SvgFooterDogMobile from '@/assets/svg/footer-dog-mobile.svg';
import SvgFooterlogo from '@/assets/svg/footer-logo.svg';
import SvgPhoneCallDesktop from '@/assets/svg/phone-call-desktop.svg';
import SvgTelegramDesktop from '@/assets/svg/telegram-circle-desktop.svg';
import SvgTelegram from '@/assets/svg/telegram-circle.svg';
import Icon from '@/components/icon';

const Footer = () => {
  return (
    <footer className="flex flex-col mt-16 md:mt-24 bg-secondary-500 px-5 md:px-20 pt-6 md:pt-9">
      <div className="flex justify-between">
        <Icon>
          <SvgFooterlogo />
        </Icon>
        <div className="hidden md:flex gap-6">
          <HowToContact />
        </div>
      </div>

      <div className="hidden md:block w-full border-t border-white/45 mt-9"></div>

      <div className="md:flex md:justify-between md:mt-8">
        <p className="font-nunito text-sm md:text-base text-white mt-6 md:mt-0 md:max-w-[590px]">
          Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut scing
          elit. Ut Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut
          scing elit. Ut{' '}
        </p>

        <ul className="flex flex-col md:flex-row gap-4 md:gap-6 mt-6 md:mt-0 text-white text-sm md:text-base font-nunito">
          <li className="flex items-center gap-2 cursor-pointer">
            <span className="md:hidden w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
            Shop
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <span className="md:hidden w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
            About us
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <span className="md:hidden w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
            Contact us
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <span className="md:hidden w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
            Privacy
          </li>
        </ul>
      </div>

      <div className="flex md:hidden gap-5 mt-6">
        <HowToContact />
      </div>

      <SvgFooterDogMobile className="mt-14 md:hidden" />

      <img
        src={'/static/footer-dog-desktop.png'}
        alt="footer-dog"
        className="hidden md:block self-center"
      />
    </footer>
  );
};

const HowToContact = () => {
  return (
    <>
      <span className="flex justify-center items-center md:gap-2 w-12 h-12 md:w-[213px] md:h-[67px] border border-white rounded-full">
        <Icon>
          <SvgPhoneCallMobile className="md:hidden" />
          <SvgPhoneCallDesktop className="hidden md:block" />
        </Icon>
        <p className="hidden md:inline text-white font-nunito font-bold">
          +1-245-234-211
        </p>
      </span>
      <span className="flex justify-center items-center w-12 h-12 md:w-[67px] md:h-[67px] border border-white rounded-full">
        <Icon>
          <SvgWhatsup className="md:hidden" />
          <SvgWhatsupDesktop className="hidden md:block" />
        </Icon>
      </span>
      <span className="flex justify-center items-center w-12 h-12 md:w-[67px] md:h-[67px] border border-white rounded-full">
        <Icon>
          <SvgTelegram className="md:hidden" />
          <SvgTelegramDesktop className="hidden md:block" />
        </Icon>
      </span>
      <span className="flex justify-center items-center w-12 h-12 md:w-[67px] md:h-[67px] border border-white rounded-full">
        <Icon>
          <SvgEmail className="md:hidden" />
          <SvgEmailDesktop className="hidden md:block" />
        </Icon>
      </span>
    </>
  );
};

export default Footer;
