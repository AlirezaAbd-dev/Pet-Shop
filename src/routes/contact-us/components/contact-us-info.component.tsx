import React from 'react';

import SvgLocation32 from '@/assets/svg/location-32.svg';
import SvgLocation40 from '@/assets/svg/location-40.svg';
import SvgMail32 from '@/assets/svg/mail-32.svg';
import SvgMail40 from '@/assets/svg/mail-40.svg';
import SvgPhoneCall32 from '@/assets/svg/phone-call-32.svg';
import SvgPhoneCall40 from '@/assets/svg/phone-call-40.svg';

const ContactUsInfo = () => {
  return (
    <main className="mt-8 flex flex-col md:flex-row md:justify-between gap-8 px-5 md:mt-24">
      <section>
        <span className="w-12 h-12 md:w-[64px] md:h-[64px] rounded-lg bg-secondary-500/5 flex justify-center items-center">
          <SvgMail32 className="md:hidden" />
          <SvgMail40 className="hidden md:block" />
        </span>
        <p className="mt-4 md:mt-6 font-bold text-lg md:text-2xl">Email</p>
        <p className="mt-2 md:mt-4 md:text-base text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in ero.
        </p>
        <p className="mt-3 md:mt-6 md:text-base text-sm">hello@relume.io</p>
      </section>
      <section>
        <span className="w-12 h-12 md:w-[64px] md:h-[64px] rounded-lg bg-secondary-500/5 flex justify-center items-center">
          <SvgPhoneCall32 className="md:hidden" />
          <SvgPhoneCall40 className="hidden md:block" />
        </span>
        <p className="mt-4 md:mt-6 font-bold text-lg md:text-2xl">Phone</p>
        <p className="mt-2 md:mt-4 md:text-base text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in ero.
        </p>
        <p className="mt-3 md:mt-6 md:text-base text-sm">+1 (555) 000-0000</p>
      </section>
      <section>
        <span className="w-12 h-12 md:w-[64px] md:h-[64px] rounded-lg bg-secondary-500/5 flex justify-center items-center">
          <SvgLocation32 className="md:hidden" />
          <SvgLocation40 className="hidden md:block" />
        </span>
        <p className="mt-4 md:mt-6 font-bold text-lg md:text-2xl">Office</p>
        <p className="mt-2 md:mt-4 md:text-base text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in ero.
        </p>
        <p className="mt-3 md:mt-6 md:text-base text-sm">
          123 Sample St, Sydney NSW 2000 AU
        </p>
      </section>
    </main>
  );
};

export default ContactUsInfo;
