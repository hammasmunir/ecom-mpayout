import HeroStarter from '@/components/ui/HeroStarter';
import Starter from '@/components/ui/Starter';
import Image from 'next/image';
import React from 'react';
import Banner from '@/assets/images/integration/integration-banner.svg';
import PP1 from '@/assets/images/integration/payment-platforms/img-1.svg';
import PP2 from '@/assets/images/integration/payment-platforms/img-2.svg';
import PP3 from '@/assets/images/integration/payment-platforms/img-3.svg';
import PP4 from '@/assets/images/integration/payment-platforms/img-4.svg';
import PP5 from '@/assets/images/integration/payment-platforms/img-5.svg';
import PP6 from '@/assets/images/integration/payment-platforms/img-6.svg';
import PN1 from '@/assets/images/integration/payment-networks/img-1.svg';
import PN2 from '@/assets/images/integration/payment-networks/img-2.svg';
import PN3 from '@/assets/images/integration/payment-networks/img-3.svg';
import PN4 from '@/assets/images/integration/payment-networks/img-4.svg';
import PN5 from '@/assets/images/integration/payment-networks/img-5.svg';
import EP1 from '@/assets/images/integration/ecommerce-platforms/img-1.svg';
import EP2 from '@/assets/images/integration/ecommerce-platforms/img-2.svg';
import EP3 from '@/assets/images/integration/ecommerce-platforms/img-3.svg';
import EP4 from '@/assets/images/integration/ecommerce-platforms/img-4.svg';
import EP5 from '@/assets/images/integration/ecommerce-platforms/img-5.svg';
import EP6 from '@/assets/images/integration/ecommerce-platforms/img-6.svg';
import EP7 from '@/assets/images/integration/ecommerce-platforms/img-7.svg';
import EP8 from '@/assets/images/integration/ecommerce-platforms/img-8.svg';

const page = () => {
  const data = [
    {
      starter: {
        heading: 'Payment Platforms',
        text: 'Connect with leading payment processors and gateways for fast, secure, and global transactions.',
      },
      data: [
        {
          image: PP1,
          name: 'Payment Platforms',
          description:
            'Connect with leading payment processors and gateways for fast, secure, and global transactions.',
          maxWidth: '100px',
        },
      ],
    },
  ];
  return (
    <>
      <HeroStarter
        heading="Powerful Connections That Keep Payments Flowing"
        text="Build your ideal payment stack with ready-to-use integrations for eCommerce, retail, and service-based businesses."
        label="Integrations"
        maxWidth="800px"
      />
      <section className="border-border mx-auto flex max-w-[1440px] items-center justify-center border-b-[3px] border-dashed px-5 pb-10 lg:pb-20">
        <Image src={Banner} alt="Integration Banner" className="h-auto w-full" />
      </section>
      {/* <section className="border-border border-b-[3px] border-dashed py-16 lg:py-20">
        <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-20 px-5">
          <div className="flex w-full flex-col items-center gap-5 lg:flex-row lg:justify-between">
            <Starter heading="Gateway Platforms" className="lg:items-start lg:text-left" noCenter />
            <p className="text-text max-w-[400px] text-center lg:text-left">
              Effortless compatibility with leading storefronts, funnels, and checkout systems.
            </p>
          </div>
          <section className="flex w-full flex-wrap justify-center gap-6">
            {platforms.map((p) => (
              <article
                key={p.name}
                className="flex w-full flex-col rounded-3xl p-3 shadow-[0px_4px_20px_2px_#0000001F] transition-shadow duration-300 hover:shadow-[0px_4px_20px_8px_#0000001F] lg:w-[30%]"
              >
                <div className="flex h-[330px] items-center justify-center rounded-2xl bg-[#F5F5F5] p-4">
                  <Image
                    src={PP1}
                    alt={p.name}
                    style={{ maxWidth: p.maxWidth }}
                    className="h-auto w-full"
                  />
                </div>
                <div className="p-2">
                  <h4 className="mb-2 text-xl font-medium">{p.name}</h4>
                  <p className="text-text text-base">{p.description}</p>
                </div>
              </article>
            ))}
          </section>
        </section>
      </section> */}
    </>
  );
};

export default page;
