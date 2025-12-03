import HeroStarter from '@/components/ui/HeroStarter';
import React from 'react';

const page = () => {
  return (
    <section className="border-border border-b-[3px] border-dashed py-16 lg:py-20">
      <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-20 px-5">
        <HeroStarter
          heading="Get in Touch with Our Team"
          text="Talk to our experts for tailored guidance on payments, onboarding, and growth."
          label="Contact Us"
          noCustom
          noCenter
        />
        <form>
          
        </form>
      </section>
    </section>
  );
};

export default page;
