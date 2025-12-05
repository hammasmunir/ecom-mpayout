import React from 'react';
import Starter from '../ui/Starter';

const Features = ({ title, desp, data = [] }) => {
  return (
    <section className="border-border b-bottom border-dashed py-16 lg:py-20">
      <section className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 lg:gap-20">
        <div className="flex w-full flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-between">
          <Starter
            heading={title}
            className="max-w-[600px] lg:items-start lg:text-left"
            noCenter={true}
          />
          <p className="text-text max-w-[400px] text-center lg:text-left">{desp}</p>
        </div>
        <section className="flex flex-col gap-10">
          {Array.from({ length: Math.ceil(data.length / 2) }).map((_, rowIdx) => {
            const rowItems = data.slice(rowIdx * 2, rowIdx * 2 + 2);
            const isEvenRow = rowIdx % 2 === 0;

            return (
              <div
                key={rowIdx}
                className={`grid grid-cols-1 gap-10 md:grid-cols-2 ${
                  isEvenRow ? 'lg:grid-cols-[1fr_0.6fr]' : 'lg:grid-cols-[0.6fr_1fr]'
                }`}
              >
                {rowItems.map((item, itemIdx) => (
                  <article
                    key={rowIdx * 2 + itemIdx}
                    className="flex flex-col gap-3 rounded-xl p-7 shadow-md transition-shadow duration-300 hover:shadow-lg"
                  >
                    {item.icon}
                    <div className="flex max-w-[380px] flex-col gap-2">
                      <h3 className="text-xl font-medium lg:text-2xl">{item.title}</h3>
                      <p className="text-text text-base lg:text-xl">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default Features;
