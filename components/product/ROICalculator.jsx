import React from 'react';
import Label from '../ui/Label';
import Starter from '../ui/Starter';
import Image from 'next/image';
import ROIimage from '@/assets/images/roi-calc.svg';

const ROICalculator = () => {
  return (
    <section className="border-b border-dashed border-gray-300 py-16 lg:py-20">
      <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-5">
        <Starter
          heading="See How Much You Could Save With Smarter Payments"
          text="Our ROI calculator shows how much more you could make with lower fees, fewer declines, and faster payouts."
          label="ROI Calculator"
        />
        <Image src={ROIimage} alt="ROI Calculator" />
      </section>
    </section>
  );
};

export default ROICalculator;
