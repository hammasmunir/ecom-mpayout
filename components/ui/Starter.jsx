import React from 'react';
import Label from './Label';

const Starter = ({ heading, text, noCenter, label, className }) => {
  return (
    <div
      className={`${!noCenter && 'mx-auto'} flex max-w-2xl flex-col items-center justify-center gap-5 text-center ${className || ''}`}
    >
      {label && <Label text={label} />}

      <h3 className="text-2xl font-semibold md:text-3xl lg:text-5xl">{heading}</h3>
      {text && <p className="text-text text-base md:text-xl">{text}</p>}
    </div>
  );
};

export default Starter;
