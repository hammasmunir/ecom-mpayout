import React from 'react';

const Benefits = ({ text }) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl font-medium md:text-4xl">Additional Benefits</h2>
      <p className="text-text">{text}</p>
    </div>
  );
};

export default Benefits;
