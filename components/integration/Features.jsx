import React from 'react';
import Starter from '../ui/Starter';

const Features = ({ title, desp, data = [] }) => {
  return (
    <section className="border-border border-b-[3px] border-dashed py-16 lg:py-20">
      <section className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 lg:gap-20">
        <div className="flex w-full flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-between">
          <Starter
            heading={title}
            className="max-w-[600px] lg:items-start lg:text-left"
            noCenter={true}
          />
          <p className="text-text max-w-[400px] text-center lg:text-left">{desp}</p>
        </div>
        <section className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1fr_0.6fr]">
          {data.map((item, idx) => {
            const isRow2 = idx >= 2;

            return (
              <article
                key={idx}
                className={`flex flex-col gap-3 rounded-xl p-7 shadow-md transition-shadow duration-300 hover:shadow-lg ${isRow2 ? 'lg:col-[span_1] lg:grid-cols-[0.6fr_1fr]' : ''} `}
              >
                {item.icon}
                <h3 className="text-xl font-medium lg:text-2xl">{item.title}</h3>
                <p className="text-text text-base lg:text-xl">{item.description}</p>
              </article>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default Features;
