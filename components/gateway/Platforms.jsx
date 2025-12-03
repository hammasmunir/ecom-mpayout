import React from 'react';
import Starter from '../ui/Starter';
import Image from 'next/image';
import Shopify from '@/assets/images/gateway/shopify.svg';
import Woo from '@/assets/images/gateway/woo.svg';
import CheckoutChamp from '@/assets/images/gateway/checkout-champ.svg';
import BigCommerce from '@/assets/images/gateway/big-commerce.svg';
import Funnelish from '@/assets/images/gateway/funnelish.svg';

const Platforms = () => {
  return (
    <section className="border-border border-b-[3px] border-dashed py-16 lg:py-20">
      <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-20 px-5">
        <div className="flex w-full flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-between">
          <Starter
            heading="Gateway Platforms "
            className="lg:items-start lg:text-left"
            noCenter={true}
          />
          <p className="text-text max-w-[400px] text-center lg:text-left">
            Effortless compatibility with leading storefronts, funnels, and checkout systems.
          </p>
        </div>
        <section>
          <article className="flex flex-col gap-4 rounded-3xl p-3 shadow-[0px_4px_20px_2px_#0000001F]">
            <div className="rounded-2xl bg-[#F5F5F5] p-4">
              <Image
                src={Shopify}
                alt="Gateway Platform"
                className="mx-auto h-auto w-full max-w-[100px]"
              />
            </div>
            <div>
              <h4 className="text-xl font-medium">Shopify</h4>
              <p className="text-text text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              </p>
            </div>
          </article>
        </section>
      </section>
    </section>
  );
};

export default Platforms;
