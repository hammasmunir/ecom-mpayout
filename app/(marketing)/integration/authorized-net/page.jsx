'use client';

import HeroStarter from '@/components/ui/HeroStarter';
import Image from 'next/image';
import CardImage from '@/assets/images/integration/a-card.svg';
import Features from '@/components/integration/Features';
import GrowthIcon from '@/assets/icons/integration/authorized/GrowthIcon';
import SheildIcon from '@/assets/icons/integration/authorized/SheildIcon';
import CartIcon from '@/assets/icons/integration/authorized/CartIcon';
import GlobeIcon from '@/assets/icons/integration/authorized/GlobeIcon';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

const page = () => {
  return (
    <>
      <ScrollAnimator />
      <HeroStarter
        heading="Powerful Features Built for Every Merchant"
        text="From smart routing to fraud protection everything you need to scale securely."
        label="Authorize.net"
        maxWidth="800px"
        data-animate="fade-up"
      />
      <section className="border-border b-bottom border-dashed py-16 lg:py-20">
        <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-20 px-5">
          <article
            className={`grid w-full grid-cols-1 items-center gap-16 overflow-hidden rounded-xl p-6 shadow-[0px_4px_20px_2px_#0000001F] lg:grid-cols-2 lg:p-10`}
            data-animate="fade-up"
          >
            <div className={`flex flex-col gap-5`}>
              <h3 className="text-2xl font-medium lg:text-3xl">
                Connect Your Business Through Authorize.net
              </h3>
              <p className="text-text text-lg lg:text-xl">
                Unlock hundreds of checkout, store, and platform integrations by connecting your
                payments through Authorize.net fast, flexible, and built for scale.
              </p>
            </div>
            <Image src={CardImage} alt="Chargeback Tracking" className={`h-auto w-full`} />
          </article>
        </section>
      </section>
      <div data-animate="fade-up">
        <Features
          title="Smarter Way to Power Your Online Payments"
          desp="Connect once and unlock smoother checkouts, broader platform compatibility, stronger security, and reliable payment performance"
          data={[
            {
              icon: <GlobeIcon />,
              title: 'Works With Every Major Checkout',
              description:
                'Integrate seamlessly with Funnelish, ClickFunnels, Shift4Shop, Checkout Champs, and dozens more.',
            },
            {
              icon: <CartIcon />,
              title: 'Built for eCommerce Platforms',
              description: 'Use Authorize.net across nearly all major online store builders.',
            },
            {
              icon: <SheildIcon />,
              title: 'Advanced Fraud Protection',
              description:
                'Leverage Authorize.net’s built-in fraud tools to secure every transaction automatically.',
            },
            {
              icon: <GrowthIcon />,
              title: 'Reliable, Scalable Processing',
              description:
                'Process payments smoothly as you grow stable, fast, and supported across most major US gateways.',
            },
          ]}
        />
      </div>
    </>
  );
};

export default page;
