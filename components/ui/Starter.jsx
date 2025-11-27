import React from 'react';
import Label from './Label';

const Starter = ({ heading, text, noCenter, label, className }) => {
  return (
    <div
      className={`${!noCenter && 'mx-auto'} flex max-w-2xl flex-col items-center justify-center gap-5 text-center ${className || ''}`}
    >
      {' '}
      <Label text={label} />
      <h3 className="text-2xl font-semibold md:text-3xl lg:text-5xl">{heading}</h3>
      <p className="text-base md:text-xl">{text && text}</p>
    </div>
  );
};

export default Starter;
