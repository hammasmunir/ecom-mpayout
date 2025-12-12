'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import Starter from '../ui/Starter';
import IndustryDropdown from '../ui/IndustryDropdown';
import Image from 'next/image';
import Logo from '@/assets/images/main-logo.svg';
import CalculatorIcon from '@/assets/icons/CalculatorIcon';
import NotesIcon from '@/assets/icons/NotesIcon';
import PayCloudIcon from '@/assets/images/payment-cloud.svg';
import ZenPaymentsIcon from '@/assets/images/zen-payments.svg';
import HighRiskIcon from '@/assets/images/high-risk.svg';
import { competitorPricing, ecomPricing, groupIndustries } from '@/app/data/roi';

// Static data - moved outside component for better performance
const GROUPED_INDUSTRIES = groupIndustries;

const ECOM_PRICING = ecomPricing;

const COMPETITOR_PRICING = competitorPricing;

const ROICalculator = () => {
  const [selectedCompany, setSelectedCompany] = useState('ecomPayouts');

  const [userData, setUserData] = useState({
    yearlyVolume: '',
    averageOrderValue: '',
    chargebacksRate: '',
    profitMargin: '',
  });

  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const selectCompany = (company) => {
    setSelectedCompany(company);
  };

  const getRiskLevel = () => {
    if (!selectedIndustry) return null;

    for (const group of GROUPED_INDUSTRIES) {
      if (group.items.includes(selectedIndustry)) {
        return group.label;
      }
    }
    return null;
  };

  // Get effective risk level considering chargeback rate for competitors
  const getEffectiveRiskLevel = () => {
    // For ecomPayouts, risk level doesn't affect pricing
    if (selectedCompany === 'ecomPayouts') {
      return getRiskLevel(); // Just for display purposes
    }

    // For competitors, chargeback rate can override industry risk
    const chargebackRate = parseFloat(userData.chargebacksRate);

    if (chargebackRate && !isNaN(chargebackRate)) {
      // Chargeback rate >= 1% → Force High-Risk
      if (chargebackRate >= 1) {
        return 'High-Risk';
      }
      // Chargeback rate >= 0.7% and < 1% → Force Mid-Risk
      if (chargebackRate >= 0.7) {
        return 'Mid-Risk';
      }
    }

    // Below 0.7% or no chargeback rate → Use industry-based risk
    return getRiskLevel();
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

  // Helper function to get pricing data based on company and risk level
  const getPricingData = () => {
    if (selectedCompany === 'ecomPayouts') {
      return ECOM_PRICING;
    }

    // For competitors, use effective risk level (considers chargeback rate)
    const effectiveRisk = getEffectiveRiskLevel();

    // Map risk levels to nested keys
    const riskMap = {
      'Low-Risk': 'lowRisk',
      'Mid-Risk': 'midRisk',
      'High-Risk': 'highRisk',
    };

    const riskKey = riskMap[effectiveRisk];
    if (!riskKey || !COMPETITOR_PRICING[selectedCompany]) {
      return null;
    }

    return COMPETITOR_PRICING[selectedCompany][riskKey];
  };

  // Helper function to format numbers
  const formatNumber = (num) => {
    if (!num && num !== 0) return '';
    return Number(num).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // Auto-calculate results using useMemo
  const resultData = useMemo(() => {
    const { yearlyVolume, averageOrderValue, profitMargin, chargebacksRate } = userData;

    // Validate inputs
    const yearly = parseFloat(yearlyVolume);
    const avgOrder = parseFloat(averageOrderValue);
    const profit = parseFloat(profitMargin);

    // Silent validation - don't calculate if required fields are missing
    if (!yearly || !avgOrder || !profit) {
      return {
        grossRevenue: '',
        transactionFee: '',
        perTransactionFee: '',
        monthlyFee: '',
        setupFee: '',
        netRevenue: '',
      };
    }

    // For competitor companies, chargeback rate is required
    if (selectedCompany !== 'ecomPayouts') {
      const chargeback = parseFloat(chargebacksRate);
      if (!chargeback && chargeback !== 0) {
        return {
          grossRevenue: '',
          transactionFee: '',
          perTransactionFee: '',
          monthlyFee: '',
          setupFee: '',
          netRevenue: '',
        };
      }
    }

    // Get pricing data for selected company and risk level
    const pricingData = getPricingData();
    if (!pricingData) {
      return {
        grossRevenue: '',
        transactionFee: '',
        perTransactionFee: '',
        monthlyFee: '',
        setupFee: '',
        netRevenue: '',
      };
    }

    // Calculate values using pricing data
    const percentageFee = yearly * (pricingData.percentage / 100);
    const numTransactions = yearly / avgOrder;
    const transactionFee = percentageFee + numTransactions * pricingData.transVal;
    const perTransactionFee = avgOrder * (pricingData.percentage / 100) + pricingData.transVal;
    const netRevenue =
      yearly * (profit / 100) - transactionFee - pricingData.monthlyFee - pricingData.setupFee;

    return {
      grossRevenue: formatNumber(yearly),
      transactionFee: formatNumber(transactionFee),
      perTransactionFee: formatNumber(perTransactionFee),
      monthlyFee: formatNumber(pricingData.monthlyFee),
      setupFee: formatNumber(pricingData.setupFee),
      netRevenue: formatNumber(netRevenue),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData, selectedCompany, selectedIndustry]);
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
              className={`flex cursor-pointer justify-center rounded-md bg-[#EDF3FF] p-4 ${selectedCompany === 'highRisk' ? 'bg-[#EDF3FF]' : 'bg-white'}`}
              onClick={() => selectCompany('highRisk')}
            >
              <Image src={HighRiskIcon} alt="Logo" />
            </div>
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
              <div className="flex flex-col gap-2">
                <div
                  className={`${badgeStyles.bgColor} ${badgeStyles.textColor} ${badgeStyles.borderColor} flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium`}
                >
                  <div className={`${badgeStyles.dotColor} h-2.5 w-2.5 rounded-full`}></div>
                  <span>{currentRiskLevel} (Industry)</span>
                </div>
                {selectedCompany !== 'ecomPayouts' &&
                  getEffectiveRiskLevel() !== currentRiskLevel && (
                    <div
                      className={`${getRiskBadgeStyles(getEffectiveRiskLevel()).bgColor} ${getRiskBadgeStyles(getEffectiveRiskLevel()).textColor} ${getRiskBadgeStyles(getEffectiveRiskLevel()).borderColor} flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium`}
                    >
                      <div
                        className={`${getRiskBadgeStyles(getEffectiveRiskLevel()).dotColor} h-2.5 w-2.5 rounded-full`}
                      ></div>
                      <span>{getEffectiveRiskLevel()} (Pricing - High Chargeback)</span>
                    </div>
                  )}
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
                  groupedOptions={GROUPED_INDUSTRIES}
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
                { label: 'Gross Revenue', value: resultData.grossRevenue },
                { label: 'Transaction fee', value: resultData.transactionFee },
                { label: 'Per transaction fee', value: resultData.perTransactionFee },
                { label: 'Monthly fee', value: resultData.monthlyFee },
                { label: 'Setup fee', value: resultData.setupFee },
                { label: 'Net Revenue', value: resultData.netRevenue },
              ].map((field) => (
                <div key={field.label} className="rounded-lg border border-[#E5E7EB] px-4 py-3">
                  <p className="text-text text-sm font-medium">{field.label}</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {field.value && `$${field.value}`}
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
