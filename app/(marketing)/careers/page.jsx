import Roles from '@/components/careers/Roles';
import Value from '@/components/careers/Value';
import HeroStarter from '@/components/ui/HeroStarter';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import React from 'react';

const page = () => {
  return (
    <>
      <ScrollAnimator />
      <HeroStarter
        heading="Build the Future of Payments With Us"
        text="Join a team that’s reshaping how businesses move money globally through innovation and trust."
        label="Careers"
        data-animate="fade-up"
      />
      <Value />
      <Roles />
    </>
  );
};

export default page;
