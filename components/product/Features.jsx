import React from 'react';
import Feature1Image from '@/assets/images/feature-1.png';
import Feature2Image from '@/assets/images/feature-2.png';
import Feature3Image from '@/assets/images/feature-3.png';
import Image from 'next/image';
import Starter from '../ui/Starter';

const Features = () => {
  const cards = [
    {
      title: 'Smart Payment Routing',
      description:
        'EcomPayouts routes your transactions through the most efficient payment processors for your business.',
      image: Feature1Image,
    },
    {
      title: 'Seamless Recurring Billing (MRR)',
      description: 'Recover failed payments with smart retries and card updates.',
      image: Feature2Image,
    },
    {
      title: 'Global Coverage & Integration',
      description: 'Accept 180+ currencies and connect with major platforms.',
      image: Feature3Image,
    },
  ];
  return (
    <section className="py-16 lg:py-20">
      <section className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5">
        <Starter
          heading="Powerful Features Built for Every Merchant"
          text="From smart routing to fraud protection everything you need to scale securely."
          label="Features"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col justify-between overflow-hidden rounded-2xl shadow-md"
            >
              <div className="flex flex-col gap-3 p-6">
                <h5 className="text-lg font-medium">{card.title}</h5>
                <p className="text-text">{card.description}</p>
              </div>
              {card.image && <Image src={card.image} alt={card.title} className="h-auto w-full" />}
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Features;
