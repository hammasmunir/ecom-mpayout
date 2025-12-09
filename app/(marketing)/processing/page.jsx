'use client';

import HeroStarter from '@/components/ui/HeroStarter';
import Turning from '@/components/processing/Turning';
import Difference from '@/components/processing/Difference';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

const page = () => {
  return (
    <>
      <ScrollAnimator />
      <HeroStarter
        heading="The Smarter, Safer Way to Process Payments"
        text="Discover how dedicated bank processing ends bans, freezes, and shared risk giving your business stability, control, and lasting freedom."
        label="Processing"
        maxWidth="800px"
        data-animate="fade-up"
      />
      <div data-animate="fade-up">
        <Turning />
      </div>
      <div data-animate="fade-up">
        <Difference />
      </div>
    </>
  );
};

export default page;
