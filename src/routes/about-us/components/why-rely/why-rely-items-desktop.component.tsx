const WhyRelyItemsDesktop = () => {
  return (
    <section className="hidden md:flex gap-8">
      <div className="w-full">
        <div className="flex flex-col items-center bg-nature-600 rounded-xl p-6">
          <div className="flex justify-center items-center w-12 h-12 md:w-[61px] md:h-[61px] rounded-lg bg-[#058441]">
            <img
              src="/static/achievements/professional-vets.png"
              className="w-6 h-6 md:w-8 md:h-8 fill-white"
            />
          </div>
          <p className="mt-4 font-black font-nunito md:text-base text-center">
            Uncompromising quality assured
          </p>
        </div>
        <div className="flex flex-col items-center bg-nature-600 rounded-xl p-6 mt-6">
          <div className="flex justify-center items-center w-12 h-12 md:w-[61px] md:h-[61px] rounded-lg bg-[#2CC0FE]">
            <img
              src="/static/achievements/protection.png"
              className="w-6 h-6 md:w-8 md:h-8 fill-white"
            />
          </div>
          <p className="mt-4 font-black font-nunito md:text-base text-center">
            Competitive prices, premium quality
          </p>
        </div>
      </div>
      <div className="w-full mt-9">
        <div className="flex flex-col items-center bg-nature-600 rounded-xl p-6">
          <div className="flex justify-center items-center w-12 h-12 md:w-[61px] md:h-[61px] rounded-lg bg-[#FF8413]">
            <img
              src="/static/achievements/awards-win.png"
              className="w-6 h-6 md:w-8 md:h-8 fill-white"
            />
          </div>
          <p className="mt-4 font-black font-nunito md:text-base text-center">
            25+ years in pet supplies
          </p>
        </div>
        <div className="flex flex-col items-center bg-nature-600 rounded-xl p-6 mt-6">
          <div className="flex justify-center items-center w-12 h-12 md:w-[61px] md:h-[61px] rounded-lg bg-[#B9112B]">
            <img
              src="/static/achievements/happy-clients.png"
              className="w-6 h-6 md:w-8 md:h-8 fill-white"
            />
          </div>
          <p className="mt-4 font-black font-nunito md:text-base text-center">
            Top-tier materials only
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyRelyItemsDesktop;
