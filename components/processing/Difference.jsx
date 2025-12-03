import React from 'react';
import Starter from '../ui/Starter';

const Difference = () => {
  return (
    <section className="border-border border-t-[3px] border-b-[3px] border-dashed py-16 lg:py-20">
      <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-20 px-5">
        <div className="flex w-full flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-between">
          <Starter
            heading="The Difference That Changes Everything"
            className="lg:items-start lg:text-left"
            noCenter={true}
          />
          <p className="text-text max-w-[500px] text-center lg:text-left">
            Shared MIDs mean shared risk one bad actor can trigger wave bans for everyone. With
            dedicated MIDs, your processing is isolated, secure, and built to last.
          </p>
        </div>
        <section></section>
      </section>
    </section>
  );
};

export default Difference;
