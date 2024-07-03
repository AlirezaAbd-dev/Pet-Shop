import React from 'react';

const HomeCategories = () => {
  return (
    <main className="mt-16 px-5 md:px-20 md:mt-24">
      <p className="font-nunito font-black text-xl md:text-4xl text-center">
        Category
      </p>
      <section className="mt-5 md:mt-8 grid grid-cols-2 md:grid-cols-5 justify-items-center gap-y-8">
        <div className="flex flex-col items-center gap-3">
          <div className="rectangle flex items-center w-[111px] h-[107px] md:w-[158px] md:h-[153px] p-5 bg-nature-700">
            <img src="/static/categories/toys.png" />
          </div>
          <p className="text-sm font-bold">Toys</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="rectangle flex items-center w-[111px] h-[107px] md:w-[158px] md:h-[153px] p-5 bg-nature-700">
            <img src="/static/categories/training-and-sport.png" />
          </div>
          <p className="text-sm font-bold">Training and sport</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="rectangle flex items-center w-[111px] h-[107px] md:w-[158px] md:h-[153px] p-5 bg-nature-700">
            <img src="/static/categories/resting-place.png" />
          </div>
          <p className="text-sm font-bold">Resting places</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="rectangle flex items-center w-[111px] h-[107px] md:w-[158px] md:h-[153px] p-5 bg-nature-700">
            <img src="/static/categories/at-home.png" />
          </div>
          <p className="text-sm font-bold">At home</p>
        </div>
        <div className="flex flex-col items-center gap-3 col-span-2 md:col-span-1">
          <div className="rectangle flex items-center w-[111px] h-[107px] md:w-[158px] md:h-[153px] p-5 bg-nature-700">
            <img src="/static/categories/food.png" />
          </div>
          <p className="text-sm font-bold">Food</p>
        </div>
      </section>
    </main>
  );
};

export default HomeCategories;
