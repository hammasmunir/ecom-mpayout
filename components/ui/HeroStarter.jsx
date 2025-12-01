import React from 'react';
import Label from './Label';

const HeroStarter = ({ heading, text, noCenter, label, className }) => {
  return (
    <section className="relative w-full overflow-hidden px-6 sm:px-12 md:px-24">
      <div
        className={`relative z-10 mt-20 flex max-w-[600px] flex-col ${!noCenter && 'mx-auto items-center justify-center'} gap-4 px-5 text-center sm:mt-24 md:mt-28 ${className}`}
      >
        <div className="flex max-w-4xl flex-col items-center gap-4">
          <Label text={label} />
          <h1 className="mb-4 px-5 text-3xl font-semibold text-gray-900 sm:px-0 md:text-4xl lg:text-6xl">
            {heading}
          </h1>

          <p className="text-text mb-6 max-w-xl px-2 text-base sm:max-w-2xl sm:px-0 sm:text-lg md:text-xl">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroStarter;
