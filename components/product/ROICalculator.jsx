'use client';

import React, { useState, useRef, useEffect } from 'react';
import Label from '../ui/Label';
import Starter from '../ui/Starter';
import IndustryDropdown from '../ui/IndustryDropdown';
import Image from 'next/image';
import ROIimage from '@/assets/images/roi-calc.svg';
import ROIBg from '@/assets/images/roi-bg.png';
import Logo from '@/assets/images/main-logo.svg';
import CalculatorIcon from '@/assets/icons/CalculatorIcon';
import NotesIcon from '@/assets/icons/NotesIcon';

const ROICalculator = () => {
  const groupedIndustries = [
    {
      label: 'Low-Risk',
      items: [
        'Fashion & Apparel',
        'Beauty & Personal Care',
        'Electronics & Gadgets',
        'Home & Kitchen',
        'Pets',
        'Baby & Kids',
        'Sports & Outdoor',
        'Jewelry & Accessories',
        'Home Improvement / DIY',
        'Automotive Accessories',
        'Gifts / Custom Products',
      ],
    },
    {
      label: 'Mid-Risk',
      items: [
        'Health & Wellness',
        'Coaching / Online Courses',
        'Dropshipping Stores',
        'Travel & Ticketing',
        'Event & Raffle Sites',
      ],
    },
    {
      label: 'High-Risk',
      items: [
        'CBD & Hemp Products',
        'Nutraceuticals & Supplements',
        'Vape & Tobacco Alternatives',
        'Firearms & Weapon Accessories',
        'Adult Products',
        'Crypto, Web3 & Investment',
        'Dating Sites & Apps',
        'Debt Repair / Credit Services',
      ],
    },
  ];

  const [userData, setUserData] = useState({
    yearlyVolume: '',
    averageOrderValue: '',
    chargebacksRate: '',
    profitMargin: '',
    industry: '',
    riskLevel: '',
  });

  const [calcData, setCalcData] = useState({
    percentage: null,
    monthlyFee: null,
    setupFee: null,
  });

  const [resultData, setResultData] = useState({
    grossRevenue: '',
    transactionFee: '',
    perTransactionFee: '',
    monthlyFee: '',
    setupFee: '',
    netRevenue: '',
  });

  const [ecomCalcData, setEcomCalcData] = useState({
    percentage: 2.45,
    monthlyFee: 50,
    setupFee: 0,
  });

  const [compCalcData, setCompCalcData] = useState({
    zenPayments: {
      lowRisk: {
        percentage: 2.82,
        monthlyFee: 50,
        setupFee: 250,
      },
      midRisk: {
        percentage: 3.12,
        monthlyFee: 150,
        setupFee: 250,
      },
      highRisk: {
        percentage: 4.4,
        monthlyFee: 150,
        setupFee: 250,
      },
    },
    highRisk: {
      lowRisk: {
        percentage: 2.8,
        monthlyFee: 50,
        setupFee: 250,
      },
      midRisk: {
        percentage: 3.1,
        monthlyFee: 150,
        setupFee: 250,
      },
      highRisk: {
        percentage: 4.3,
        monthlyFee: 150,
        setupFee: 250,
      },
    },
    highRisk: {
      lowRisk: {
        percentage: 2.77,
        monthlyFee: 50,
        setupFee: 250,
      },
      midRisk: {
        percentage: 3.07,
        monthlyFee: 150,
        setupFee: 250,
      },
      highRisk: {
        percentage: 4.25,
        monthlyFee: 150,
        setupFee: 250,
      },
    },
  });

  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const getRiskLevel = () => {
    if (!selectedIndustry) return null;

    for (const group of groupedIndustries) {
      if (group.items.includes(selectedIndustry)) {
        return group.label;
      }
    }
    return null;
  };

  const getRiskBadgeStyles = (riskLevel) => {
    switch (riskLevel) {
      case 'Low-Risk':
        return {
          bgColor: 'bg-green-50',
          textColor: 'text-green-700',
          dotColor: 'bg-green-500',
          borderColor: 'border-green-200',
        };
      case 'Mid-Risk':
        return {
          bgColor: 'bg-yellow-50',
          textColor: 'text-yellow-700',
          dotColor: 'bg-yellow-500',
          borderColor: 'border-yellow-200',
        };
      case 'High-Risk':
        return {
          bgColor: 'bg-red-50',
          textColor: 'text-red-700',
          dotColor: 'bg-red-500',
          borderColor: 'border-red-200',
        };
      default:
        return {
          bgColor: 'bg-gray-50',
          textColor: 'text-gray-700',
          dotColor: 'bg-gray-400',
          borderColor: 'border-gray-200',
        };
    }
  };

  const currentRiskLevel = getRiskLevel();
  const badgeStyles = currentRiskLevel
    ? getRiskBadgeStyles(currentRiskLevel)
    : getRiskBadgeStyles(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once animated, we can disconnect the observer
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: '0px',
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section className="border-border b-bottom border-dashed py-16 lg:py-20" data-animate="fade-up">
      <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-5">
        <div data-animate="fade-up">
          <Starter
            heading="See How Much You Could Save With Smarter Payments"
            text="Our ROI calculator shows how much more you could make with lower fees, fewer declines, and faster payouts."
            label="ROI Calculator"
          />
        </div>
        <section
          ref={sectionRef}
          className="roi-bg relative mx-auto grid w-full max-w-5xl grid-cols-1 grid-rows-1 gap-5 overflow-hidden rounded-lg bg-[#F5F5F5] bg-cover p-5 lg:grid-cols-[0.8fr_1fr_1fr]"
          data-animate="fade-up"
        >
          <div
            className={`circle roi-blob roi-blob-bottom absolute bottom-0 left-0 h-0 w-[10px] rounded-full bg-[#0356f050] shadow-[0_0_500px_90px_#0356f0] backdrop-blur-2xl ${isVisible ? 'animate' : ''}`}
          ></div>
          <div className="circle roi-blob roi-blob-mid absolute top-1/2 left-1/2 h-0 w-[10px] rounded-full bg-[#03CCF0] shadow-[0_0_500px_90px_#03CCF0] backdrop-blur-2xl"></div>
          <div
            className={`circle roi-blob roi-blob-top absolute top-0 right-0 h-0 w-[10px] rounded-full bg-[#3E03F0] shadow-[0_0_500px_90px_#3E03F0] backdrop-blur-2xl ${isVisible ? 'animate' : ''}`}
          ></div>
          <div className="col-span-1 rounded-md bg-white p-4" data-animate="fade-up">
            <div className="mb-4 flex justify-center rounded-md bg-[#EDF3FF] p-4">
              <Image src={Logo} alt="Logo" />
            </div>
            <ul className="text-text text-center text-xl">
              <li className="py-4">Competitor 1</li>
              <li className="py-4">Competitor 2</li>
              <li className="py-4">Competitor 3</li>
            </ul>
          </div>
          <div
            className="col-span-1 flex flex-col items-start gap-4 rounded-md bg-white p-4"
            data-animate="fade-up"
            style={{ transitionDelay: '80ms' }}
          >
            <div className="flex items-center gap-2">
              <CalculatorIcon />
              <h3 className="text-xl font-medium">ROI Calculator</h3>
            </div>
            {currentRiskLevel && (
              <div
                className={`${badgeStyles.bgColor} ${badgeStyles.textColor} ${badgeStyles.borderColor} flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium`}
              >
                <div className={`${badgeStyles.dotColor} h-2.5 w-2.5 rounded-full`}></div>
                <span>{currentRiskLevel}</span>
              </div>
            )}
            <div className="flex w-full flex-col gap-4">
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
                <IndustryDropdown
                  groupedOptions={groupedIndustries}
                  value={selectedIndustry}
                  onChange={setSelectedIndustry}
                  placeholder="Select from Dropdown"
                />
              </label>
            </div>
          </div>
          <div
            className="col-span-1 rounded-md bg-white p-4"
            data-animate="fade-up"
            style={{ transitionDelay: '160ms' }}
          >
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
