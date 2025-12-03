import React from 'react';
import Label from './Label';

const HeroStarter = ({
  heading,
  text,
  noCenter,
  label,
  className,
  noCustom = true,
  maxWidth = '1440px',
}) => {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className={`flex max-w-[1440px] flex-col ${!noCenter && 'mx-auto items-center justify-center text-center'} gap-4 ${!noCustom && 'relative z-10 mt-20 px-5 sm:mt-24 md:mt-28'} ${className}`}
      >
        <div
          className={`flex max-w-[${maxWidth}] flex-col items-center gap-4 ${noCenter && 'items-start'}`}
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
