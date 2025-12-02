import React from 'react';

const Benefits = ({ text }) => {
  const textArray = text.split(' || ');
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl font-medium md:text-4xl">Additional Benefits</h2>
      {textArray.map((item, index) => (
        <p key={index} className="text-text">
          {item}
        </p>
      ))}
    </div>
  );
};

export default Benefits;
