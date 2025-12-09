import Alerts from '@/components/insights/Alerts';
import Explore from '@/components/insights/Explore';
import HeroStarter from '@/components/ui/HeroStarter';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import React from 'react';

const page = () => {
  return (
    <>
      <ScrollAnimator />
      <HeroStarter
        heading="Your Business Data, Live and In One Place"
        text="Get real-time visibility into your sales, payouts, and Chargebacks from one dashboard with clarity most platforms simply can’t offer."
        label="Insights"
        data-animate="fade-up"
      />
      <div data-animate="fade-up">
        <Explore />
      </div>
      <div data-animate="fade-up">
        <Alerts />
      </div>
    </>
  );
};

export default page;
