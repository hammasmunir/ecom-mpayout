'use client';

import HeroStarter from '@/components/ui/HeroStarter';
import Brand from '@/components/white-label/Brand';
import CoreFeatures from '@/components/white-label/CoreFeatures';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

const page = () => {
  return (
    <>
      <ScrollAnimator />
      <HeroStarter
        heading="Launch Your Own Payment Platform"
        text="Offer your clients a fully branded gateway, dashboard, and merchant onboarding system powered by our infrastructure."
        label="White Label Solutions"
        maxWidth="800px"
        data-animate="fade-up"
      />
      <div data-animate="fade-up">
        <Brand />
      </div>
      <div data-animate="fade-up">
        <CoreFeatures />
      </div>
    </>
  );
};

export default page;
