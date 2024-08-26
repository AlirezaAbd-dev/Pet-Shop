import React from 'react';

import SvgWhatsapp32 from '@/assets/svg/Whatsup-secondary-32.svg';
import SvgWhatsapp40 from '@/assets/svg/Whatsup-secondary-40.svg';
import SvgMail32 from '@/assets/svg/mail-32.svg';
import SvgMail40 from '@/assets/svg/mail-40.svg';
import SvgPhoneCall32 from '@/assets/svg/phone-call-32.svg';
import SvgPhoneCall40 from '@/assets/svg/phone-call-40.svg';

const ContactUsInfo = () => {
  return (
    <main className="mt-8 flex flex-col md:flex-row md:justify-between gap-8 px-5 md:px-20 md:mt-24">
      <section className="w-full">
        <span className="w-12 h-12 md:w-[64px] md:h-[64px] rounded-lg bg-secondary-500/5 flex justify-center items-center">
          <SvgMail32 className="md:hidden" />
          <SvgMail40 className="hidden md:block" />
        </span>
        <p className="mt-4 md:mt-6 font-bold text-lg md:text-2xl">Email</p>
        <p className="mt-2 md:mt-4 md:text-base text-sm">
          Please feel free to contact us via email at info@uspetinc.com.
        </p>
      </section>
      <section className="w-full">
        <span className="w-12 h-12 md:w-[64px] md:h-[64px] rounded-lg bg-secondary-500/5 flex justify-center items-center">
          <SvgPhoneCall32 className="md:hidden" />
          <SvgPhoneCall40 className="hidden md:block" />
        </span>
        <p className="mt-4 md:mt-6 font-bold text-lg md:text-2xl">Phone</p>
        <p className="mt-2 md:mt-4 md:text-base text-sm">
          Please feel free to contact us via phone call +971-52-369-3866.
        </p>
      </section>
      <section className="w-full">
        <span className="w-12 h-12 md:w-[64px] md:h-[64px] rounded-lg bg-secondary-500/5 flex justify-center items-center">
          <SvgWhatsapp32 className="md:hidden" />
          <SvgWhatsapp40 className="hidden md:block" />
        </span>
        <p className="mt-4 md:mt-6 font-bold text-lg md:text-2xl">Whatsapp</p>
        <p className="mt-2 md:mt-4 md:text-base text-sm">
          Please feel free to contact us via whats app.
        </p>
      </section>
    </main>
  );
};

export default ContactUsInfo;
