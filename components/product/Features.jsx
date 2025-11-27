import React from 'react';
import Label from '../ui/Label';

const Features = () => {
  return (
    <section className="border-b border-dashed border-gray-300 py-16 lg:py-20">
      <section className="mx-auto max-w-[1440px] bg-red-200 px-5">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4 text-center">
          {' '}
          <Label text="Features" />
          <h3 className="text-2xlfont-bold md:text-3xl lg:text-5xl">
            Powerful Features Built for Every Merchant{' '}
          </h3>
          <p className="text-xl text-gray-400">
            From smart routing to fraud protection everything you need to scale securely.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Features;
