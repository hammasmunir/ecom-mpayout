import React from 'react';
import Starter from '../ui/Starter';

const WhyChoose = () => {
  return (
    <section className="border-border border-b-[3px] border-dashed py-16 lg:py-20">
      <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-5 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
        <div className="flex w-full flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-between">
          <Starter
            heading="Why Choose Our Partner Program"
            className="max-w-[400px] lg:items-start lg:text-left"
            noCenter={true}
          />
          <p className="text-text max-w-[300px] text-center lg:text-left">
            Get reliable approvals, real-time visibility, and a checkout experience your customers
            can trust.
          </p>
        </div>
      </section>
    </section>
  );
};

export default WhyChoose;
