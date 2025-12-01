import Hero from '@/components/who/Hero';
import Image from 'next/image';
import React from 'react';
import WhoImage1 from '@/assets/images/who-are-we/who-1.jpg';
import WhoImage2 from '@/assets/images/who-are-we/who-2.jpg';
import WhoImage3 from '@/assets/images/who-are-we/who-3.jpg';

const page = () => {
  const data = [
    {
      title: 'Our Story',
      description:
        'EcomPayouts was founded by merchants who experienced the pain of frozen funds and sudden account bans firsthand. We knew businesses needed a payment system that was transparent, stable, and human-driven.',
      image: WhoImage1,
    },
    {
      title: 'Our Mission',
      description:
        'Our mission is to simplify how businesses get paid securely and without limits. We empower companies to focus on growth, not on fighting processor restrictions.',
      image: WhoImage2,
    },
    {
      title: 'Our Network',
      description:
        'We work with over 35 global banking partners to support businesses in every industry. From eCommerce to high-risk verticals, we provide stable, scalable payment solutions that fit.',
      image: WhoImage3,
    },
  ];
  return (
    <>
      <Hero />
      <section className="border-border border-b-[3px] border-dashed py-16 lg:py-20">
        <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-20 px-5">
          {data.map((item, idx) => {
            const reverse = idx % 2 === 1;

            return (
              <article
                key={idx}
                className={`grid w-full grid-cols-1 items-center gap-16 ${reverse ? 'md:grid-cols-[1fr_0.7fr]' : 'md:grid-cols-[0.7fr_1fr]'}`}
              >
                <div
                  className={`${reverse ? 'md:order-2' : 'md:order-1'} order-1 flex flex-col gap-5`}
                >
                  <h3 className="text-2xl font-medium md:text-3xl">{item.title}</h3>
                  <p className="text-text text-lg md:text-xl">
                    {item.description}
                    <br />
                    <br />
                    We knew businesses needed a payment system that was transparent, stable, and
                    human-driven.
                  </p>
                </div>

                <div
                  className={`${reverse ? 'md:order-1' : 'md:order-2'} order-2 h-[400px] w-full overflow-hidden rounded-2xl`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </article>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default page;
