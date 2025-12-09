'use client';

import WhyChoose from '@/components/partner/WhyChoose';
import Form from '@/components/ui/Form';
import HeroStarter from '@/components/ui/HeroStarter';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import React from 'react';

const PartnerProgram = () => {
  const handleSubmit = (formData, e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
  };
  const formFields = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      required: true,
      bgColor: '#FAFAFA',
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      required: true,
      bgColor: '#FAFAFA',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      bgColor: '#FAFAFA',
    },
    {
      name: 'companyName',
      label: 'Company Name',
      type: 'text',
      required: true,
      bgColor: '#FAFAFA',
    },
    {
      name: 'companyType',
      label: 'Company Type',
      type: 'dropdown',
      options: ['E-commerce', 'Retail', 'SaaS'],
      required: true,
      bgColor: '#FAFAFA',
    },
  ];

  return (
    <>
      <ScrollAnimator />
      <section className="border-border b-bottom border-dashed py-16 lg:py-20">
        <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-5 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <HeroStarter
            heading="Partner With Us, Grow Faster"
            text="Earn recurring revenue while giving your clients a better way to process payments."
            label="Partner Program"
            noCustom
            noCenter
            maxWidth="500px"
            data-animate="fade-up"
          />
          <div data-animate="fade-up">
            <Form
              fields={formFields}
              onSubmit={handleSubmit}
              formBgColor="bg-white"
              submitButton={{
                text: 'Submit',
                className: 'bg-primary-500 rounded-full p-4 text-white cursor-pointer',
              }}
            />
          </div>
        </section>
      </section>
      <div data-animate="fade-up">
        <WhyChoose />
      </div>
    </>
  );
};

export default PartnerProgram;
