import Image from 'next/image';
import React from 'react';

const HomeAchievements = () => {
  return (
    <section className="px-5 mt-16 grid grid-cols-2 space-x-4 space-y-4">
      <div className="flex flex-col items-center justify-center bg-[#F9F7FF] rounded-2xl p-4">
        <span className="flex justify-center items-center rounded-full bg-white w-[75px] h-[75px]">
          <Image
            src={'/static/achievements/professional-vets.png'}
            alt="professional-vets"
            width={38}
            height={38}
          />
        </span>
        <p className="font-nunito font-black mt-3">60 +</p>
        <p className="mt-2 text-[15px]">Professional Vets</p>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#FFFBF4] rounded-2xl p-4">
        <span className="flex justify-center items-center rounded-full bg-white w-[75px] h-[75px]">
          <Image
            src={'/static/achievements/protection.png'}
            alt="professional-vets"
            width={38}
            height={38}
          />
        </span>
        <p className="font-nunito font-black mt-3">99.99 %</p>
        <p className="mt-2 text-[15px]">Protection</p>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#F0FFFB] rounded-2xl p-4">
        <span className="flex justify-center items-center rounded-full bg-white w-[75px] h-[75px]">
          <Image
            src={'/static/achievements/awards-win.png'}
            alt="professional-vets"
            width={38}
            height={38}
          />
        </span>
        <p className="font-nunito font-black mt-3">80 +</p>
        <p className="mt-2 text-[15px]">Awards Win</p>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#FFF7F6] rounded-2xl p-4">
        <span className="flex justify-center items-center rounded-full bg-white w-[75px] h-[75px]">
          <Image
            src={'/static/achievements/happy-clients.png'}
            alt="professional-vets"
            width={38}
            height={38}
          />
        </span>
        <p className="font-nunito font-black mt-3">96 +</p>
        <p className="mt-2 text-[15px]">Happy Clients</p>
      </div>
    </section>
  );
};

export default HomeAchievements;
