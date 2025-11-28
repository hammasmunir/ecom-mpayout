import React from 'react';
import Label from '../ui/Label';
import Starter from '../ui/Starter';
import Image from 'next/image';
import ROIimage from '@/assets/images/roi-calc.svg';
import ROIBg from '@/assets/images/roi-bg.png';
import Logo from '@/assets/images/main-logo.svg';
import CalculatorIcon from '@/assets/icons/CalculatorIcon';
import NotesIcon from '@/assets/icons/NotesIcon';

const ROICalculator = () => {
  return (
    <section className="border-border border-b-[3px] border-dashed py-16 lg:py-20">
      <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-5">
        <Starter
          heading="See How Much You Could Save With Smarter Payments"
          text="Our ROI calculator shows how much more you could make with lower fees, fewer declines, and faster payouts."
          label="ROI Calculator"
        />
        <section
          className="mx-auto grid w-full max-w-5xl grid-cols-[0.8fr_1fr_1fr] grid-rows-1 gap-5 overflow-hidden rounded-lg bg-cover p-5"
          style={{ backgroundImage: `url(${ROIBg.src})` }}
        >
          <div className="col-span-1 rounded-md bg-white p-4">
            <div className="mb-4 rounded-md bg-[#EDF3FF] p-4">
              <Image src={Logo} alt="Logo" />
            </div>
            <ul className="text-text text-center text-xl">
              <li className="py-4">Competitor 1</li>
              <li className="py-4">Competitor 2</li>
              <li className="py-4">Competitor 3</li>
            </ul>
          </div>
          <div className="col-span-1 rounded-md bg-white p-4">
            <div className="flex items-center gap-2">
              <CalculatorIcon />
              <h3 className="text-xl font-medium">ROI Calculator</h3>
            </div>
          </div>
          <div className="col-span-1 rounded-md bg-white p-4">
            <div className="flex items-center gap-2">
              <NotesIcon />
              <h3 className="text-xl font-medium">Output Summary</h3>
            </div>
          </div>{' '}
        </section>
      </section>
    </section>
  );
};

export default ROICalculator;
