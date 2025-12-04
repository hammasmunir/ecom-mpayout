import React from 'react';
import Starter from '../ui/Starter';

const FeatureCard = ({ title, description, icon }) => {
  return (
    <article className="flex flex-col items-center gap-10 rounded-2xl p-6">
      <h3 className="w-full text-xl font-medium lg:text-2xl">{title}</h3>
      {icon}
      <p className="text-text w-full text-base lg:text-xl">{description}</p>
    </article>
  );
};

const CoreFeatures = () => {
  return (
    <section className="border-border border-b-[3px] border-dashed py-16 lg:py-20">
      <section className="mx-auto mb-20 flex max-w-[1440px] flex-col gap-10 px-5 lg:gap-20">
        <div className="flex w-full flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-between">
          <Starter
            heading="Complete System Under Your Brand"
            className="max-w-[420px] lg:items-start lg:text-left"
            noCenter={true}
          />
          <p className="text-text max-w-[400px] text-center lg:text-left">
            We give you all the tools gateway, CRM, merchant management, dashboards, MIDs and you
            deliver them under your own company name.
          </p>
        </div>
      </section>
      <section className="mx-auto flex flex-col gap-10 px-5 lg:gap-20">hello</section>
    </section>
  );
};

export default CoreFeatures;
