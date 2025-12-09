 'use client';

import HeroStarter from '@/components/ui/HeroStarter';
import Image from 'next/image';
import CardImage from '@/assets/images/integration/shopify-card.svg';
import Features from '@/components/integration/Features';
import TagIcon from '@/assets/icons/integration/shopify/TagIcon';
import CardIcon from '@/assets/icons/integration/shopify/CardIcon';
import ShopIcon from '@/assets/icons/integration/shopify/ShopIcon';
import LinkIcon from '@/assets/icons/integration/shopify/LinkIcon';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

const page = () => {
  return (
    <>
      <ScrollAnimator />
      <HeroStarter
        heading="Better Payment Solution for Shopify Brands"
        text="Get higher approvals, a custom checkout, real-time insights, and direct bank processing that gives your Shopify store"
        label="Shopify"
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
              <h3 className="text-2xl font-medium lg:text-3xl">Effortless Shopify Setup</h3>
              <p className="text-text text-lg lg:text-xl">
                Get your Shopify store processing payments in minutes with seamless onboarding,
                automatic configuration, and a checkout that just works no developers needed.
              </p>
            </div>
            <Image src={CardImage} alt="Chargeback Tracking" className={`h-auto w-full`} />
          </article>
        </section>
      </section>
      <div data-animate="fade-up">
        <Features
          title="You Need to Process Payments Smoothly"
          desp="Get reliable approvals, real-time visibility, and a checkout experience your customers can trust."
          data={[
            {
              icon: <TagIcon />,
              title: 'Automated Order Tagging',
              description:
                'We automatically flag and organize disputed orders and customers so you always know what needs attention.',
            },
            {
              icon: <CardIcon />,
              title: 'Flexible, Fair Pricing',
              description:
                'You’re only charged when we successfully recover a chargeback never before.',
            },
            {
              icon: <ShopIcon />,
              title: 'Multi-Account Ready',
              description:
                ' Use multiple processors and manage multiple stores seamlessly as your business grows.',
            },
            {
              icon: <LinkIcon />,
              title: 'Shopify-Optimized Processing',
              description:
                'A direct, compliant integration built to work perfectly with Shopify and Shopify Payments.',
            },
          ]}
        />
      </div>
    </>
  );
};

export default page;
