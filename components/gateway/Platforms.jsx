import React from 'react';
import Starter from '../ui/Starter';
import Image from 'next/image';
import Shopify from '@/assets/images/gateway/shopify.svg';
import Woo from '@/assets/images/gateway/woo.svg';
import CheckoutChamp from '@/assets/images/gateway/checkout-champ.svg';
import BigCommerce from '@/assets/images/gateway/big-commerce.svg';
import Funnelish from '@/assets/images/gateway/funnelish.svg';

const Platforms = () => {
  const platforms = [
    {
      name: 'Shopify',
      image: Shopify,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor',
      maxWidth: '100px',
    },
    {
      name: 'WooCommerce',
      image: Woo,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor',
      maxWidth: '150px',
    },
    {
      name: 'Checkout Champ',
      image: CheckoutChamp,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor',
      maxWidth: '180px',
    },
    {
      name: 'BigCommerce',
      image: BigCommerce,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor',
      maxWidth: '220px',
    },
    {
      name: 'Funnelish',
      image: Funnelish,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor',
      maxWidth: '180px',
    },
  ];

  return (
    <section className="border-border b-bottom border-dashed py-16 lg:py-20">
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
                  src={p.image}
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
    </section>
  );
};

export default Platforms;
