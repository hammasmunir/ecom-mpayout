import HeroStarter from '@/components/ui/HeroStarter';
import Starter from '@/components/ui/Starter';
import Image from 'next/image';
import React from 'react';
import CardImage1 from '@/assets/images/processing/img-1.svg';
import CardImage2 from '@/assets/images/processing/img-2.svg';
import CardImage3 from '@/assets/images/processing/img-3.svg';

const page = () => {
  const data = [
    {
      title: 'Why PayFacs Fail Growing Businesses',
      description:
        'PayFacs make onboarding easy but they’re built for small sellers, not scaling brands. || When volume spikes or products fall into high-risk categories, accounts get flagged, funds get frozen, and support disappears. || Shared MIDs mean shared risk one bad actor can take everyone down.',
      image: CardImage1,
    },
    {
      title: 'Direct Bank Processing Wins',
      description:
        'Business gets its own dedicated MID not one shared with thousands of others. || That means no wave bans, no surprise freezes, and no risk from someone else’s chargebacks. || Your account is issued directly by trusted banks across the US, CA, AU, and UK, giving you unmatched stability and control.',
      image: CardImage2,
    },
    {
      title: 'Why Banks Trust Our Network',
      description:
        'High-risk doesn’t mean untrustworthy it means you’re innovating in spaces others avoid. || We work directly with over 35 banking partners who understand your industry and back it responsibly. || Whether you sell CBD, Vape, Supplements, or digital products, we match you with the right bank to keep your business moving.',
      image: CardImage3,
    },
  ];
  return (
    <>
      <HeroStarter
        heading="The Smarter, Safer Way to Process Payments"
        text="Discover how dedicated bank processing ends bans, freezes, and shared risk giving your business stability, control, and lasting freedom."
        label="Processing"
        maxWidth="800px"
      />
      <section className="border-border border-t-[3px] border-b-[3px] border-dashed py-16 lg:py-20">
        <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-20 px-5">
          <div className="flex w-full flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-between">
            <Starter
              heading="Turning Payment Chaos Into Long-Term Stability"
              className="lg:items-start lg:text-left"
              noCenter={true}
            />
            <p className="text-text max-w-[500px] text-center lg:text-left">
              From frozen funds to dedicated MIDs and trusted banking partners. We give businesses
              the foundation to grow safely and confidently.{' '}
            </p>
          </div>
          {data.map((item, idx) => {
            const reverse = idx % 2 === 1;
            const description = item.description.split(' || ').map((line, index) => (
              <p key={index} className="text-text text-lg lg:text-xl">
                {line}
              </p>
            ));
            return (
              <section
                key={idx}
                className={`grid w-full grid-cols-1 items-center gap-16 overflow-hidden rounded-xl p-6 shadow-[0px_4px_20px_2px_#0000001F] lg:p-10 ${reverse ? 'lg:grid-cols-[1fr_0.7fr]' : 'lg:grid-cols-[0.7fr_1fr]'}`}
              >
                <div className={`flex flex-col gap-5 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h3 className="text-2xl font-medium lg:text-3xl">{item.title}</h3>
                  {description}
                </div>
                <Image
                  src={item.image}
                  alt="Chargeback Tracking"
                  className={`h-auto w-full ${reverse ? 'lg:order-1' : 'lg:order-2'}`}
                />
              </section>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default page;
