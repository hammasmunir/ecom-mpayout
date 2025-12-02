import React from 'react';

const Points = ({ data = [] }) => {
  return (
    <section className="flex flex-col gap-5">
      {data.map((item, idx) => {
        return (
          <div key={idx}>
            <h3 className="mb-2 text-2xl font-semibold text-[#0357F0] md:text-4xl">{item.title}</h3>
            <p className="text-text md:text-xl">{item.description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Points;
