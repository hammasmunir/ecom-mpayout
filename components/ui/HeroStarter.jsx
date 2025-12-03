import React from 'react';
import Label from './Label';

const HeroStarter = ({ heading, text, noCenter, label, className, noCustom, maxWidth }) => {
  const width = maxWidth ? maxWidth : '1440px';
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className={`flex flex-col ${!noCenter && 'mx-auto items-center justify-center text-center'} gap-4 ${!noCustom && 'z-10 mt-20 px-5 pb-10 md:mt-28'} ${className}`}
        style={{ maxWidth: width }}
      >
        <div
          className={`flex w-full flex-col items-center gap-4 ${noCenter && 'mx-auto items-start'}`}
        >
          <Label text={label} />
          <h1 className="mb-4 text-3xl font-semibold text-gray-900 sm:px-0 md:text-4xl lg:text-6xl">
            {heading}
          </h1>

          {text && (
            <p className="text-text mb-6 max-w-xl px-2 text-base sm:max-w-2xl sm:px-0 sm:text-lg md:text-xl">
              {text}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroStarter;
