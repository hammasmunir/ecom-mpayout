'use client';

import React, { useState } from 'react';
import Label from '../ui/Label';
import Starter from '../ui/Starter';
import Dropdown from '../ui/Dropdown';
import Image from 'next/image';
import ROIimage from '@/assets/images/roi-calc.svg';
import ROIBg from '@/assets/images/roi-bg.png';
import Logo from '@/assets/images/main-logo.svg';
import CalculatorIcon from '@/assets/icons/CalculatorIcon';
import NotesIcon from '@/assets/icons/NotesIcon';

const ROICalculator = () => {
  const industries = ['Select from Dropdown', 'E-commerce', 'Retail', 'SaaS'];
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);

  return (
    <section className="border-border border-b-[3px] border-dashed py-16 lg:py-20">
      <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-5">
        <Starter
          heading="See How Much You Could Save With Smarter Payments"
          text="Our ROI calculator shows how much more you could make with lower fees, fewer declines, and faster payouts."
          label="ROI Calculator"
        />
        <section
          className="mx-auto grid w-full max-w-5xl grid-cols-1 grid-rows-1 gap-5 rounded-lg bg-cover p-5 lg:grid-cols-[0.8fr_1fr_1fr]"
          style={{ backgroundImage: `url(${ROIBg.src})` }}
        >
          <div className="col-span-1 rounded-md bg-white p-4">
            <div className="mb-4 flex justify-center rounded-md bg-[#EDF3FF] p-4">
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
            <div className="mt-6 flex flex-col gap-4">
              {[
                { label: 'Yearly Volume', value: '$50,000' },
                { label: 'Average Order Value', value: '$80.00' },
                { label: 'Chargebacks Rate', value: '0.5%' },
                { label: 'Profit margin (%)', value: '10%' },
              ].map((field) => (
                <label
                  key={field.label}
                  className="text-text flex flex-col gap-2 text-sm font-medium"
                >
                  {field.label}
                  <input
                    type="text"
                    value={field.value}
                    readOnly
                    className="w-full rounded-lg border border-[#E5E7EB] px-4 py-3 text-base font-medium text-gray-900"
                  />
                </label>
              ))}
              <label className="text-text flex flex-col gap-2 text-sm font-medium">
                Industry
                <Dropdown
                  options={industries}
                  value={selectedIndustry}
                  onChange={setSelectedIndustry}
                  placeholder="Select from Dropdown"
                />
              </label>
            </div>
          </div>
          <div className="col-span-1 rounded-md bg-white p-4">
            <div className="flex items-center gap-2">
              <NotesIcon />
              <h3 className="text-xl font-medium">Output Summary</h3>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4">
              {[
                { label: 'Gross Revenue', value: '$50,000' },
                { label: 'Transaction fee', value: '$950.00' },
                { label: 'Per transaction fee', value: '$150.00' },
                { label: 'Monthly fee', value: '$100.00' },
                { label: 'Setup fee', value: '$50.00' },
                { label: 'Net Revenue', value: '$48,750' },
              ].map((field) => (
                <div key={field.label} className="rounded-lg border border-[#E5E7EB] px-4 py-3">
                  <p className="text-text text-sm font-medium">{field.label}</p>
                  <p className="text-lg font-semibold text-gray-900">{field.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default ROICalculator;
