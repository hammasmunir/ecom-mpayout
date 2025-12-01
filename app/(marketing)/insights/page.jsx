import Explore from '@/components/insights/Explore';
import HeroStarter from '@/components/ui/HeroStarter';
import React from 'react';

const page = () => {
  return (
    <>
      <HeroStarter
        heading="Your Business Data, Live and In One Place"
        text="Get real-time visibility into your sales, payouts, and Chargebacks from one dashboard with clarity most platforms simply can’t offer."
        label="Insights"
      />
      <Explore />
    </>
  );
};

export default page;
