import Link from 'next/link';

import SvgPhoneCallMobile from '@/assets/svg/Phone-Call.svg';
import SvgWhatsupDesktop from '@/assets/svg/Whatsup-desktop.svg';
import SvgWhatsup from '@/assets/svg/Whatsup.svg';
import SvgEmailDesktop from '@/assets/svg/email-letter-mail-medium-desktop.svg';
import SvgEmail from '@/assets/svg/email-letter-mail-medium.svg';
import SvgFooterDogMobile from '@/assets/svg/footer-dog-mobile.svg';
import SvgFooterlogoMobile from '@/assets/svg/footer-logo-mobile.svg';
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
          <SvgFooterlogo className="hidden md:block" />
          <SvgFooterlogoMobile className="md:hidden" />
        </Icon>
        <div className="hidden md:flex gap-6">
          <HowToContact />
        </div>
      </div>

      <div className="hidden md:block w-full border-t border-white/45 mt-9"></div>

      <div className="md:flex md:justify-between md:mt-8">
        <p className="font-nunito text-sm md:text-base text-white mt-6 md:mt-0 md:max-w-[590px]">
          At US Pet Supplies, we&apos;re dedicated to providing quality products
          and supplies for your furry, feathered, and scaly friends. From
          nutrition to toys, we have everything you need to keep your pets happy
          and healthy
        </p>

        <ul className="flex flex-col md:flex-row gap-4 md:gap-6 mt-6 md:mt-0 text-white text-sm md:text-base font-nunito">
          <Link href={'/shop'}>
            <li className="flex items-center gap-2 cursor-pointer">
              <span className="md:hidden w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
              Shop
            </li>
          </Link>
          <Link href={'/about-us'}>
            <li className="flex items-center gap-2 cursor-pointer">
              <span className="md:hidden w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
              About us
            </li>
          </Link>
          <Link href={'/contact-us'}>
            <li className="flex items-center gap-2 cursor-pointer">
              <span className="md:hidden w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
              Contact us
            </li>
          </Link>
          <a href={process.env.NEXT_PUBLIC_BLOG_BASE_URL + '/blog'}>
            <li className="flex items-center gap-2 cursor-pointer">
              <span className="md:hidden w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
              Blog
            </li>
          </a>
        </ul>
      </div>

      <div className="flex md:hidden gap-5 mt-6">
        <HowToContact />
      </div>

      {/* <SvgFooterDogMobile className="mt-14 md:hidden self-center" /> */}
      <img
        src="/static/footer-dog-mobile.png"
        alt="footer-mobile"
        className="self-center md:hidden w-[175px] mt-14"
      />

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
      <a
        href="Tel:971-52-369-3866"
        className="flex justify-center items-center md:gap-2 w-12 h-12 md:w-[213px] md:h-[67px] border border-white rounded-full"
      >
        <Icon>
          <SvgPhoneCallMobile className="md:hidden" />
          <SvgPhoneCallDesktop className="hidden md:block" />
        </Icon>
        <p className="hidden md:inline text-white font-nunito font-bold">
          +971 52 369 3866
        </p>
      </a>
      <a
        href="https://wa.me/+989121249686"
        className="flex justify-center items-center w-12 h-12 md:w-[67px] md:h-[67px] border border-white rounded-full"
      >
        <Icon>
          <SvgWhatsup className="md:hidden" />
          <SvgWhatsupDesktop className="hidden md:block" />
        </Icon>
      </a>
      <a
        href="https://t.me/+989121249686"
        className="flex justify-center items-center w-12 h-12 md:w-[67px] md:h-[67px] border border-white rounded-full"
      >
        <span>
          <SvgTelegram className="md:hidden" />
          <SvgTelegramDesktop className="hidden md:block" />
        </span>
      </a>
      <a
        href="mailto:supplies@gmail.com"
        className="flex justify-center items-center w-12 h-12 md:w-[67px] md:h-[67px] border border-white rounded-full"
      >
        <Icon>
          <SvgEmail className="md:hidden" />
          <SvgEmailDesktop className="hidden md:block" />
        </Icon>
      </a>
    </>
  );
};

export default Footer;
