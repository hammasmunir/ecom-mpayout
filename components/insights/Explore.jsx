import Image from 'next/image';
import React from 'react';
import CardImage1 from '@/assets/images/insights/in-1.svg';
import CardImage2 from '@/assets/images/insights/in-2.svg';
import CardImage3 from '@/assets/images/insights/in-3.svg';

const Explore = () => {
  const data = [
    {
      title: 'Chargeback Tracking',
      description:
        'Monitor dispute performance with real-time metrics for total disputes, answered cases, wins, and losses. Drill into individual chargebacks to view issuer decisions, transaction history, and required actions.',
      image: CardImage1,
    },
    {
      title: 'Sales Breakdown',
      description:
        'View all your sales activity from one clean dashboard. Track volume, revenue trends, top products, and processor performance in real time.Spot issues early, understand where your revenue is coming from, and make faster, data-backed decisions.',
      image: CardImage2,
    },
    {
      title: 'Payouts Analysis',
      description:
        'Track your upcoming, pending, and completed payouts with full transparency no hidden holds, no surprise delays.See exactly when your next payout arrives, how much is being released, and which bank account it is going to.',
      image: CardImage3,
    },
  ];
  return (
    <section className="border-border b-bottom border-dashed py-16 lg:py-20">
      <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-20 px-5">
        {data.map((item, idx) => {
          const reverse = idx % 2 === 1;
          return (
            <section
              key={idx}
              className={`grid w-full grid-cols-1 items-center gap-16 overflow-hidden rounded-xl shadow-[0px_4px_20px_2px_#0000001F] ${reverse ? 'md:grid-cols-[1fr_0.7fr]' : 'md:grid-cols-[0.7fr_1fr]'}`}
            >
              <div className={`flex flex-col gap-5 p-6 ${reverse ? 'md:order-2' : 'md:order-1'}`}>
                <h3 className="text-2xl font-medium lg:text-3xl">{item.title}</h3>
                <p className="text-text text-lg lg:text-xl">{item.description}</p>
              </div>
              <Image
                src={item.image}
                alt="Chargeback Tracking"
                className={`h-auto w-full ${reverse ? 'md:order-1' : 'md:order-2'}`}
              />
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default Explore;
