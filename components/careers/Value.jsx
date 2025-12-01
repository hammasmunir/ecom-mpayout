import React from 'react';
import Starter from '../ui/Starter';

const Value = () => {
  return (
    <section className="border-border border-b-[3px] border-dashed py-16 lg:py-20">
      <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-20 px-5">
        <div className="flex w-full flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-between">
          <Starter
            heading="What We Value"
            className="max-w-[400px] lg:items-start lg:text-left"
            noCenter={true}
          />
          <p className="text-text max-w-[300px] text-center lg:text-left">
            The principles that guide how we work and grow together.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Value;
