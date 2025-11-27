'use client';

import Image from 'next/image';
import { useState } from 'react';
import Starter from '../ui/Starter';
import FlashImage from '@/assets/images/why-choose-flash.svg';
import CardImage from '@/assets/images/why-choose-card.svg';
import SheildImage from '@/assets/images/why-choose-sheild.svg';

const WhyChooseUs = () => {
  const tabs = [
    {
      title: 'Instant Approvals That Stick',
      description:
        'We manually verify every account, so once you’re approved, you stay approved. No bots, no random bans just long-term stability.',
    },
    {
      title: 'Fast Payouts That Keep You Moving',
      description:
        'Your money moves when you do. Enjoy same-day or next-day payouts with no hidden reserves or holdbacks.',
      mobileImage: CardImage,
      mobileAlt: 'Card',
    },
    {
      title: 'Built-In Protection That Works for You',
      description:
        'Real-time fraud detection and chargeback alerts keep your business safe without slowing down transactions.',
      mobileImage: SheildImage,
      mobileAlt: 'Shield',
    },
  ];

  const desktopImages = [FlashImage, CardImage, SheildImage];
  const [activeTab, setActiveTab] = useState(0);

  const renderArticles = [];

  tabs.forEach((tab, index) => {
    renderArticles.push(
      <article
        key={tab.title}
        className={`flex flex-col gap-3 px-7 py-12 transition-opacity duration-300 lg:cursor-pointer ${
          activeTab === index ? 'lg:opacity-100' : 'lg:opacity-50'
        }`}
        onClick={() => setActiveTab(index)}
      >
        <h3 className="max-w-[300px] text-xl font-medium lg:text-3xl">{tab.title}</h3>
        <p>{tab.description}</p>
        {tab.mobileImage && (
          <Image
            src={tab.mobileImage}
            alt={tab.mobileAlt}
            className="mx-auto h-auto w-full max-w-[500px] lg:hidden lg:max-w-full"
          />
        )}
      </article>
    );

    if (index === 0) {
      renderArticles.push(
        <article key="why-choose-image" className="flex items-center justify-center px-7 py-12">
          <div className="mx-auto h-auto w-full max-w-[500px]">
            <Image src={FlashImage} alt="Flash" className="mx-auto w-full lg:hidden" />
            <Image
              src={desktopImages[activeTab]}
              alt={tabs[activeTab].title}
              className="mx-auto hidden w-full lg:block"
            />
          </div>
        </article>
      );
    }
  });

  return (
    <>
      <section className="pt-16 pb-10 lg:pt-20">
        <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-5">
          <div className="flex w-full flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-between">
            <Starter
              heading="Take Control of Your Payments"
              label="Why Choose Us"
              className="max-w-[400px] lg:items-start lg:text-left"
              noCenter={true}
            />
            <p className="max-w-[500px] text-center lg:text-left">
              We built a payment system that gives you speed, transparency, and control exactly what
              every modern business deserves.
            </p>
          </div>
        </section>
      </section>
      <section className="">
        <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-5">
          <section className="why-choose-grid">{renderArticles}</section>
        </section>
      </section>
    </>
  );
};

export default WhyChooseUs;
