import React from 'react';

import SvgLinkedin24 from '@/assets/svg/linkedin-white-24.svg';
import SvgLinkedin40 from '@/assets/svg/linkedin-white-40.svg';
import SvgSms24 from '@/assets/svg/sms-white-24.svg';
import SvgSms40 from '@/assets/svg/sms-white-40.svg';

const AboutusFounder = () => {
  return (
    <main className="px-5 md:px-20 md:mt-24 mt-16 flex flex-col md:flex-row-reverse">
      <section className="bg-nature-600 rounded-t-lg md:rounded-tl-none md:rounded-r-2xl p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:justify-between md:w-full">
          <div>
            <p className="text-lg md:text-[28px] font-black font-nunito">
              Milad Saeedi
            </p>
            <p className="mt-2 md:text-2xl">
              Founder of{' '}
              <span className="text-primary-500 font-bold">Uspet Supplies</span>
            </p>
          </div>
          <div className="flex gap-2 md:gap-4 mt-4 md:mt-0">
            <span className="w-9 h-9 md:w-[54px] md:h-[54px] md:rounded-lg rounded-[4px] bg-secondary-500 flex justify-center items-center">
              <SvgSms24 className="md:hidden" />
              <SvgSms40 className="hidden md:block" />
            </span>
            <span className="w-9 h-9 md:w-[54px] md:h-[54px] md:rounded-lg rounded-[4px] bg-secondary-500 flex justify-center items-center">
              <SvgLinkedin24 className="md:hidden" />
              <SvgLinkedin40 className="hidden md:block" />
            </span>
          </div>
        </div>
        <div className="w-full border-t border-nature-900 mt-4 md:mt-6"></div>
        <p className="text-sm mt-4 md:mt-6 md:text-base leading-6 md:leading-7">
          Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut scing
          elit. Ut Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut
          scing elit. Lorem ipsum dolor sit amet, consec tetur adipi scing elit.
          Ut scing elit. Ut Lorem ipsum dolor sit amet, consec tetur adipi scing
          elit. Ut scing elit. Lorem ipsum dolor sit amet, consec tetur adipi
          scing elit. Ut scing elit. Ut Lorem ipsum dolor sit amet, consec tetur
          adipi scing elit. Ut scing elit.{' '}
        </p>
      </section>
      <img
        src="/static/milad.png"
        alt="milad"
        className="rounded-b-lg md:rounded-l-2xl md:rounded-br-none md:h-[333px]"
      />
    </main>
  );
};

export default AboutusFounder;
