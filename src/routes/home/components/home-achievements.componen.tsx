import Image from 'next/image';
import React from 'react';

const HomeAchievements = () => {
  return (
    <section className="px-5 mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 space-x-4 md:space-x-6 space-y-4 md:px-20">
      <div className="flex flex-col items-center justify-center bg-[#F9F7FF] rounded-2xl p-4 md:h-[298px]">
        <span className="flex justify-center items-center rounded-full bg-white w-[75px] h-[75px] md:w-[98px] md:h-[98px]">
          <Image
            src={'/static/achievements/professional-vets.png'}
            alt="professional-vets"
            width={56}
            height={56}
            className="w-[38px] h-[38px] md:w-[56px] md:h-[56px]"
          />
        </span>
        <p className="font-nunito font-black md:text-2xl mt-3 md:mt-6">60 +</p>
        <p className="mt-2 text-[15px] md:text-2xl">Professional Vets</p>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#FFFBF4] rounded-2xl p-4">
        <span className="flex justify-center items-center rounded-full bg-white w-[75px] h-[75px] md:w-[98px] md:h-[98px]">
          <Image
            src={'/static/achievements/protection.png'}
            alt="professional-vets"
            width={44}
            height={61}
            className="w-[34px] h-[48px] md:w-[44px] md:h-[61px]"
          />
        </span>
        <p className="font-nunito font-black md:text-2xl mt-3 md:mt-6">
          99.99 %
        </p>
        <p className="mt-2 text-[15px] md:text-2xl">Protection</p>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#F0FFFB] rounded-2xl p-4">
        <span className="flex justify-center items-center rounded-full bg-white w-[75px] h-[75px] md:w-[98px] md:h-[98px]">
          <Image
            src={'/static/achievements/awards-win.png'}
            alt="professional-vets"
            width={57}
            height={57}
            className="w-[39px] h-[39px] md:w-[57px] md:h-[57px]"
          />
        </span>
        <p className="font-nunito font-black md:text-2xl mt-3 md:mt-6">80 +</p>
        <p className="mt-2 text-[15px] md:text-2xl">Awards Win</p>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#FFF7F6] rounded-2xl p-4">
        <span className="flex justify-center items-center rounded-full bg-white w-[75px] h-[75px] md:w-[98px] md:h-[98px]">
          <Image
            src={'/static/achievements/happy-clients.png'}
            alt="professional-vets"
            width={58}
            height={55}
            className="w-[43px] h-[41px] md:w-[58px] md:h-[55px]"
          />
        </span>
        <p className="font-nunito font-black md:text-2xl mt-3 md:mt-6">96 +</p>
        <p className="mt-2 text-[15px] md:text-2xl">Happy Clients</p>
      </div>
    </section>
  );
};

export default HomeAchievements;
