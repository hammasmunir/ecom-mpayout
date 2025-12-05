import React from 'react';
import Starter from '../ui/Starter';
import DollarIcon from '@/assets/icons/partner/DollarIcon';
import VerifyIcon from '@/assets/icons/partner/VerifyIcon';
import BlockIcon from '@/assets/icons/partner/BlockIcon';
import SupportIcon from '@/assets/icons/partner/SupportIcon';
import GearIcon from '@/assets/icons/partner/GearIcon';
import StarIcon from '@/assets/icons/partner/StarIcon';

const WhyChoose = () => {
  const data = [
    {
      icon: <DollarIcon />,
      title: 'Recurring Commissions',
      description: 'Earn steady revenue on every merchant you refer.',
    },
    {
      icon: <VerifyIcon />,
      title: 'Higher Merchant Approvals',
      description: 'Your clients get approved faster, even in tough industries.',
    },
    {
      icon: <BlockIcon />,
      title: 'Dedicated MID Access',
      description: 'Offer merchants stability PayFacs can’t match.',
    },
    {
      icon: <SupportIcon />,
      title: 'Priority Partner Support',
      description: 'Direct access to our team for fast resolutions.',
    },
    {
      icon: <GearIcon />,
      title: 'Zero Work Required',
      description: 'We handle onboarding, risk, payouts, and support.',
    },
    {
      icon: <StarIcon />,
      title: 'More Value for Your Clients',
      description: 'Better processing, lower declines, and real human support.',
    },
  ];
  return (
    <section className="border-border b-bottom border-dashed py-16 lg:py-20">
      <section className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 lg:gap-20">
        <div className="flex w-full flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-between">
          <Starter
            heading="Why Choose Our Partner Program"
            className="max-w-[400px] lg:items-start lg:text-left"
            noCenter={true}
          />
          <p className="text-text max-w-[400px] text-center lg:text-left">
            Get reliable approvals, real-time visibility, and a checkout experience your customers
            can trust.
          </p>
        </div>
        <section className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, idx) => {
            return (
              <article
                key={idx}
                className="flex flex-col gap-3 rounded-xl p-7 shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                {item.icon}
                <h3 className="text-xl font-medium lg:text-2xl">{item.title}</h3>
                <p className="text-text text-base lg:text-xl">{item.description}</p>
              </article>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default WhyChoose;
