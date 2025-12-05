import React from 'react';
import Starter from '../ui/Starter';

const Value = () => {
  const data = [
    {
      title: 'Ownership Over Everything',
      description:
        'You’re trusted to take the lead, make decisions, and bring ideas to life without waiting for permission.',
    },
    {
      title: 'Speed, Simplicity, and Results',
      description: 'We move fast, ship fast, and prioritize clean execution over complexity.',
    },
    {
      title: 'Growth Through Responsibility',
      description: 'We give people room to grow by giving them meaningful ownership. ',
    },
    {
      title: 'Transparent Communication',
      description:
        'We communicate openly, honestly, and quickly so everyone can move forward with clarity.',
    },
  ];
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
        <section className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
          {data.map((item, idx) => {
            return (
              <article
                key={idx}
                className="flex flex-col gap-5 rounded-2xl p-10 shadow-[0px_4px_20px_2px_#0000001F]"
              >
                <h3 className="text-xl font-semibold lg:text-2xl">{item.title}</h3>
                <p className="text-text text-base lg:text-xl">{item.description}</p>
              </article>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default Value;
