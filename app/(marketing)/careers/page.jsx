import Value from '@/components/careers/Value';
import HeroStarter from '@/components/ui/HeroStarter';
import React from 'react';

const page = () => {
  return (
    <>
      <HeroStarter
        heading="Build the Future of Payments With Us"
        text="Join a team that’s reshaping how businesses move money globally through innovation and trust."
        label="Careers"
      />
      <Value />
    </>
  );
};

export default page;
