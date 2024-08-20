import Image from 'next/image';
import React from 'react';

const HomeAchievements = () => {
  return (
    <section className="px-5 mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-4 md:px-20">
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
        <p className="font-nunito font-black text-sm md:text-xl mt-3 md:mt-6 text-center">
          +2000 Products
        </p>
        <p className="mt-2 text-xs md:text-base text-center">
          Best Quality, Variety of Categories
        </p>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#FFFBF4] rounded-2xl p-4 md:h-[298px]">
        <span className="flex justify-center items-center rounded-full bg-white w-[75px] h-[75px] md:w-[98px] md:h-[98px]">
          <Image
            src={'/static/achievements/protection.png'}
            alt="professional-vets"
            width={44}
            height={61}
            className="w-[38px] h-[38px] md:w-[56px] md:h-[56px]"
          />
        </span>
        <p className="font-nunito font-black text-sm md:text-xl mt-3 md:mt-6 text-center">
          +20 Countries
        </p>
        <p className="mt-2 text-xs md:text-base text-center">
          Serving Pets Worldwide
        </p>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#F0FFFB] rounded-2xl p-4 md:h-[298px]">
        <span className="flex justify-center items-center rounded-full bg-white w-[75px] h-[75px] md:w-[98px] md:h-[98px]">
          <Image
            src={'/static/achievements/awards-win.png'}
            alt="professional-vets"
            width={57}
            height={57}
            className="w-[38px] h-[38px] md:w-[56px] md:h-[56px]"
          />
        </span>
        <p className="font-nunito font-black text-sm md:text-xl mt-3 md:mt-6 text-center">
          +25 Years Experience
        </p>
        <p className="mt-2 text-xs md:text-base text-center">
          Trusted by Pet Owners Since 1999
        </p>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#FFF7F6] rounded-2xl p-4 md:h-[298px]">
        <span className="flex justify-center items-center rounded-full bg-white w-[75px] h-[75px] md:w-[98px] md:h-[98px]">
          <Image
            src={'/static/achievements/happy-clients.png'}
            alt="professional-vets"
            width={58}
            height={55}
            className="w-[38px] h-[38px] md:w-[56px] md:h-[56px]"
          />
        </span>
        <p className="font-nunito font-black text-sm md:text-xl mt-3 md:mt-6 text-center">
          +1000 Happy Clients
        </p>
        <p className="mt-2 text-xs md:text-base text-center">
          Loved by Pets & Owners Alike
        </p>
      </div>
    </section>
  );
};

export default HomeAchievements;
