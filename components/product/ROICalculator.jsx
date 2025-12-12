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
import PayCloudIcon from '@/assets/images/payment-cloud.svg';
import ZenPaymentsIcon from '@/assets/images/zen-payments.svg';
import HighRiskIcon from '@/assets/images/high-risk.svg';

const ROICalculator = () => {
  const [selectedCompany, setSelectedCompany] = useState('ecomPayouts');
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

  const ecomCalcData = {
    percentage: 2.45,
    monthlyFee: 50,
    setupFee: 0,
    transVal: 0.2,
  };

  const compCalData = {
    zenPayments: {
      lowRisk: {
        percentage: 2.82,
        monthlyFee: 50,
        setupFee: 250,
        transVal: 0.3,
      },
      midRisk: {
        percentage: 3.12,
        monthlyFee: 150,
        setupFee: 250,
        transVal: 0.3,
      },
      highRisk: {
        percentage: 4.4,
        monthlyFee: 150,
        setupFee: 250,
        transVal: 0.3,
      },
    },
    payCloud: {
      lowRisk: {
        percentage: 2.8,
        monthlyFee: 50,
        setupFee: 250,
        transVal: 0.3,
      },
      midRisk: {
        percentage: 3.1,
        monthlyFee: 150,
        setupFee: 250,
        transVal: 0.3,
      },
      highRisk: {
        percentage: 4.3,
        monthlyFee: 150,
        setupFee: 250,
        transVal: 0.3,
      },
    },
    highRisk: {
      lowRisk: {
        percentage: 2.77,
        monthlyFee: 50,
        setupFee: 250,
        transVal: 0.3,
      },
      midRisk: {
        percentage: 3.07,
        monthlyFee: 150,
        setupFee: 250,
        transVal: 0.3,
      },
      highRisk: {
        percentage: 4.25,
        monthlyFee: 150,
        setupFee: 250,
        transVal: 0.3,
      },
    },
  };

  const [selectedIndustry, setSelectedIndustry] = useState('');
  const handleSelectedIndustry = (industry) => {
    setSelectedIndustry(industry);
    setUserData({ ...userData, riskLevel: getRiskLevel() });
  };
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const selectCompany = (company) => {
    setSelectedCompany(company);
  };

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

  const calculateROI = () => {
    const { yearlyVolume, averageOrderValue, chargebacksRate, profitMargin, industry } = userData;
    console.log(currentRiskLevel);
    if (selectedCompany === 'ecomPayouts') {
      const value = yearlyVolume * (ecomCalcData.percentage / 100);
      const perTransactionFee =
        averageOrderValue * (ecomCalcData.percentage / 100) + ecomCalcData.transVal;
      const transactionFee = value + (yearlyVolume / averageOrderValue) * ecomCalcData.transVal;
      const monthlyFee = ecomCalcData.monthlyFee;
      const setupFee = ecomCalcData.setupFee;
      const netRevenue =
        yearlyVolume * (profitMargin / 100) - transactionFee - monthlyFee - setupFee;
      setResultData({
        grossRevenue: yearlyVolume,
        transactionFee: transactionFee,
        perTransactionFee: perTransactionFee,
        monthlyFee: monthlyFee,
        setupFee: setupFee,
        netRevenue: netRevenue,
      });
    } else if (selectedCompany === 'zenPayments') {
      if (currentRiskLevel === 'Low-Risk') {
        const value = yearlyVolume * (compCalData.zenPayments.lowRisk.percentage / 100);
        const perTransactionFee =
          averageOrderValue * (compCalData.zenPayments.lowRisk.percentage / 100) +
          compCalData.zenPayments.lowRisk.transVal;
        const transactionFee =
          value + (yearlyVolume / averageOrderValue) * compCalData.zenPayments.lowRisk.transVal;
        const monthlyFee = compCalData.zenPayments.lowRisk.monthlyFee;
        const setupFee = compCalData.zenPayments.lowRisk.setupFee;
        const netRevenue =
          yearlyVolume * (profitMargin / 100) - transactionFee - monthlyFee - setupFee;
        setResultData({
          grossRevenue: yearlyVolume,
          transactionFee: transactionFee,
          perTransactionFee: perTransactionFee,
          monthlyFee: monthlyFee,
          setupFee: setupFee,
          netRevenue: netRevenue,
        });
      } else if (currentRiskLevel === 'Mid-Risk') {
        const value = yearlyVolume * (compCalData.zenPayments.midRisk.percentage / 100);
        const perTransactionFee =
          averageOrderValue * (compCalData.zenPayments.midRisk.percentage / 100) +
          compCalData.zenPayments.midRisk.transVal;
        const transactionFee =
          value + (yearlyVolume / averageOrderValue) * compCalData.zenPayments.midRisk.transVal;
        const monthlyFee = compCalData.zenPayments.midRisk.monthlyFee;
        const setupFee = compCalData.zenPayments.midRisk.setupFee;
        const netRevenue =
          yearlyVolume * (profitMargin / 100) - transactionFee - monthlyFee - setupFee;
        setResultData({
          grossRevenue: yearlyVolume,
          transactionFee: transactionFee,
          perTransactionFee: perTransactionFee,
          monthlyFee: monthlyFee,
          setupFee: setupFee,
          netRevenue: netRevenue,
        });
      } else if (currentRiskLevel === 'High-Risk') {
        const value = yearlyVolume * (compCalData.zenPayments.highRisk.percentage / 100);
        const perTransactionFee =
          averageOrderValue * (compCalData.zenPayments.highRisk.percentage / 100) +
          compCalData.zenPayments.highRisk.transVal;
        const transactionFee =
          value + (yearlyVolume / averageOrderValue) * compCalData.zenPayments.highRisk.transVal;
        const monthlyFee = compCalData.zenPayments.highRisk.monthlyFee;
        const setupFee = compCalData.zenPayments.highRisk.setupFee;
        const netRevenue =
          yearlyVolume * (profitMargin / 100) - transactionFee - monthlyFee - setupFee;
        setResultData({
          grossRevenue: yearlyVolume,
          transactionFee: transactionFee,
          perTransactionFee: perTransactionFee,
          monthlyFee: monthlyFee,
          setupFee: setupFee,
          netRevenue: netRevenue,
        });
      }
    } else if (selectedCompany === 'payCloud') {
      if (currentRiskLevel === 'Low-Risk') {
        const value = yearlyVolume * (compCalData.payCloud.lowRisk.percentage / 100);
        const perTransactionFee =
          averageOrderValue * (compCalData.payCloud.lowRisk.percentage / 100) +
          compCalData.payCloud.lowRisk.transVal;
        const transactionFee =
          value + (yearlyVolume / averageOrderValue) * compCalData.payCloud.lowRisk.transVal;
        const monthlyFee = compCalData.payCloud.lowRisk.monthlyFee;
        const setupFee = compCalData.payCloud.lowRisk.setupFee;
        const netRevenue =
          yearlyVolume * (profitMargin / 100) - transactionFee - monthlyFee - setupFee;
        setResultData({
          grossRevenue: yearlyVolume,
          transactionFee: transactionFee,
          perTransactionFee: perTransactionFee,
          monthlyFee: monthlyFee,
          setupFee: setupFee,
          netRevenue: netRevenue,
        });
      } else if (currentRiskLevel === 'Mid-Risk') {
        const value = yearlyVolume * (compCalData.payCloud.midRisk.percentage / 100);
        const perTransactionFee =
          averageOrderValue * (compCalData.payCloud.midRisk.percentage / 100) +
          compCalData.payCloud.midRisk.transVal;
        const transactionFee =
          value + (yearlyVolume / averageOrderValue) * compCalData.payCloud.midRisk.transVal;
        const monthlyFee = compCalData.payCloud.midRisk.monthlyFee;
        const setupFee = compCalData.payCloud.midRisk.setupFee;
        const netRevenue =
          yearlyVolume * (profitMargin / 100) - transactionFee - monthlyFee - setupFee;
        setResultData({
          grossRevenue: yearlyVolume,
          transactionFee: transactionFee,
          perTransactionFee: perTransactionFee,
          monthlyFee: monthlyFee,
          setupFee: setupFee,
          netRevenue: netRevenue,
        });
      } else if (currentRiskLevel === 'High-Risk') {
        const value = yearlyVolume * (compCalData.payCloud.highRisk.percentage / 100);
        const perTransactionFee =
          averageOrderValue * (compCalData.payCloud.highRisk.percentage / 100) +
          compCalData.payCloud.highRisk.transVal;
        const transactionFee =
          value + (yearlyVolume / averageOrderValue) * compCalData.payCloud.highRisk.transVal;
        const monthlyFee = compCalData.payCloud.highRisk.monthlyFee;
        const setupFee = compCalData.payCloud.highRisk.setupFee;
        const netRevenue =
          yearlyVolume * (profitMargin / 100) - transactionFee - monthlyFee - setupFee;
        setResultData({
          grossRevenue: yearlyVolume,
          transactionFee: transactionFee,
          perTransactionFee: perTransactionFee,
          monthlyFee: monthlyFee,
          setupFee: setupFee,
          netRevenue: netRevenue,
        });
      }
    } else if (selectedCompany === 'highRisk') {
      if (currentRiskLevel === 'Low-Risk') {
        const value = yearlyVolume * (compCalData.highRisk.lowRisk.percentage / 100);
        const perTransactionFee =
          averageOrderValue * (compCalData.highRisk.lowRisk.percentage / 100) +
          compCalData.highRisk.lowRisk.transVal;
        const transactionFee =
          value + (yearlyVolume / averageOrderValue) * compCalData.highRisk.lowRisk.transVal;
        const monthlyFee = compCalData.highRisk.lowRisk.monthlyFee;
        const setupFee = compCalData.highRisk.lowRisk.setupFee;
        const netRevenue =
          yearlyVolume * (profitMargin / 100) - transactionFee - monthlyFee - setupFee;
        setResultData({
          grossRevenue: yearlyVolume,
          transactionFee: transactionFee,
          perTransactionFee: perTransactionFee,
          monthlyFee: monthlyFee,
          setupFee: setupFee,
          netRevenue: netRevenue,
        });
      } else if (currentRiskLevel === 'Mid-Risk') {
        const value = yearlyVolume * (compCalData.highRisk.midRisk.percentage / 100);
        const perTransactionFee =
          averageOrderValue * (compCalData.highRisk.midRisk.percentage / 100) +
          compCalData.highRisk.midRisk.transVal;
        const transactionFee =
          value + (yearlyVolume / averageOrderValue) * compCalData.highRisk.midRisk.transVal;
        const monthlyFee = compCalData.highRisk.midRisk.monthlyFee;
        const setupFee = compCalData.highRisk.midRisk.setupFee;
        const netRevenue =
          yearlyVolume * (profitMargin / 100) - transactionFee - monthlyFee - setupFee;
        setResultData({
          grossRevenue: yearlyVolume,
          transactionFee: transactionFee,
          perTransactionFee: perTransactionFee,
          monthlyFee: monthlyFee,
          setupFee: setupFee,
          netRevenue: netRevenue,
        });
      } else if (currentRiskLevel === 'High-Risk') {
        const value = yearlyVolume * (compCalData.highRisk.highRisk.percentage / 100);
        const perTransactionFee =
          averageOrderValue * (compCalData.highRisk.highRisk.percentage / 100) +
          compCalData.highRisk.highRisk.transVal;
        const transactionFee =
          value + (yearlyVolume / averageOrderValue) * compCalData.highRisk.highRisk.transVal;
        const monthlyFee = compCalData.highRisk.highRisk.monthlyFee;
        const setupFee = compCalData.highRisk.highRisk.setupFee;
        const netRevenue =
          yearlyVolume * (profitMargin / 100) - transactionFee - monthlyFee - setupFee;
        setResultData({
          grossRevenue: yearlyVolume,
          transactionFee: transactionFee,
          perTransactionFee: perTransactionFee,
          monthlyFee: monthlyFee,
          setupFee: setupFee,
          netRevenue: netRevenue,
        });
      }
    } else {
      document.location.reload();
      return;
    }
  };
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
            className={`circle roi-blob roi-blob-bottom absolute bottom-0 left-0 h-0 w-[10px] rounded-full bg-[#0356f050] opacity-75 shadow-[0_0_700px_150px_#0356f0] backdrop-blur-2xl ${isVisible ? 'animate' : ''}`}
          ></div>
          <div className="circle roi-blob roi-blob-mid absolute top-1/2 left-1/2 h-0 w-[10px] rounded-full bg-[#03CCF0] opacity-75 shadow-[0_0_700px_150px_#03CCF0] backdrop-blur-2xl"></div>
          <div
            className={`circle roi-blob roi-blob-top absolute top-0 right-0 h-0 w-[10px] rounded-full bg-[#3E03F0] opacity-75 shadow-[0_0_700px_150px_#3E03F0] backdrop-blur-2xl ${isVisible ? 'animate' : ''}`}
          ></div>

          <div className="col-span-1 rounded-md bg-white p-4" data-animate="fade-up">
            <div
              className={`mb-4 flex cursor-pointer justify-center rounded-md bg-[#EDF3FF] p-4 ${selectedCompany === 'ecomPayouts' ? 'bg-[#EDF3FF]' : 'bg-white'}`}
              onClick={() => selectCompany('ecomPayouts')}
            >
              <Image src={Logo} alt="Logo" />
            </div>
            <div
              className={`mb-4 flex cursor-pointer justify-center rounded-md bg-[#EDF3FF] p-4 ${selectedCompany === 'zenPayments' ? 'bg-[#EDF3FF]' : 'bg-white'}`}
              onClick={() => selectCompany('zenPayments')}
            >
              <Image src={ZenPaymentsIcon} alt="Logo" />
            </div>
            <div
              className={`mb-4 flex cursor-pointer justify-center rounded-md bg-[#EDF3FF] p-4 ${selectedCompany === 'payCloud' ? 'bg-[#EDF3FF]' : 'bg-white'}`}
              onClick={() => selectCompany('payCloud')}
            >
              <Image src={PayCloudIcon} alt="Logo" />
            </div>
            <div
              className={`mb-4 flex cursor-pointer justify-center rounded-md bg-[#EDF3FF] p-4 ${selectedCompany === 'highRisk' ? 'bg-[#EDF3FF]' : 'bg-white'}`}
              onClick={() => selectCompany('highRisk')}
            >
              <Image src={HighRiskIcon} alt="Logo" />
            </div>
            <button onClick={calculateROI}>Calculate ROI</button>
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
                {
                  label: 'Yearly Volume',
                  name: 'yearlyVolume',
                  value: userData.yearlyVolume,
                  symbol: '$',
                },
                {
                  label: 'Average Order Value',
                  name: 'averageOrderValue',
                  value: userData.averageOrderValue,
                  symbol: '$',
                },
                {
                  label: 'Chargebacks Rate',
                  name: 'chargebacksRate',
                  value: userData.chargebacksRate,
                  symbol: '%',
                },
                {
                  label: 'Profit margin (%)',
                  name: 'profitMargin',
                  value: userData.profitMargin,
                  symbol: '%',
                },
              ].map((field) => (
                <label
                  key={field.label}
                  className="text-text flex flex-col gap-2 text-sm font-medium"
                >
                  {field.label}
                  <div className="relative w-full">
                    {field.symbol === '$' && (
                      <span className="absolute top-1/2 left-4 -translate-y-1/2 text-base font-medium text-gray-500">
                        {field.symbol}
                      </span>
                    )}
                    <input
                      type="text"
                      name={field.name}
                      value={field.value}
                      onChange={(e) => setUserData({ ...userData, [field.name]: e.target.value })}
                      className={`w-full rounded-lg border border-[#E5E7EB] py-3 text-base font-medium text-gray-900 ${
                        field.symbol === '$' ? 'pr-4 pl-8' : 'pr-8 pl-4'
                      }`}
                    />
                    {field.symbol === '%' && (
                      <span className="absolute top-1/2 right-4 -translate-y-1/2 text-base font-medium text-gray-500">
                        {field.symbol}
                      </span>
                    )}
                  </div>
                </label>
              ))}
              <label className="text-text flex flex-col gap-2 text-sm font-medium">
                Industry
                <IndustryDropdown
                  groupedOptions={groupedIndustries}
                  value={selectedIndustry}
                  onChange={handleSelectedIndustry}
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
                { label: 'Gross Revenue', value: resultData.grossRevenue, symbol: '$' },
                { label: 'Transaction fee', value: resultData.transactionFee, symbol: '$' },
                { label: 'Per transaction fee', value: resultData.perTransactionFee, symbol: '$' },
                { label: 'Monthly fee', value: resultData.monthlyFee, symbol: '$' },
                { label: 'Setup fee', value: resultData.setupFee, symbol: '$' },
                { label: 'Net Revenue', value: resultData.netRevenue, symbol: '$' },
              ].map((field) => (
                <div key={field.label} className="rounded-lg border border-[#E5E7EB] px-4 py-3">
                  <p className="text-text text-sm font-medium">{field.label}</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {field.symbol}
                    {field.value}
                  </p>
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
