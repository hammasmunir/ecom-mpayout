'use client';
import Form from '@/components/ui/Form';
import HeroStarter from '@/components/ui/HeroStarter';
import React from 'react';

const Contact = () => {
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
      name: 'industry',
      label: 'Industry',
      type: 'dropdown',
      options: ['E-commerce', 'Retail', 'SaaS'],
      required: true,
      bgColor: '#FAFAFA',
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      required: true,
      bgColor: '#FAFAFA',
      rows: 4,
    },
    {
      name: 'companyName',
      label: 'Company Name',
      type: 'text',
      required: true,
      bgColor: '#FAFAFA',
    },
  ];

  const handleSubmit = (formData, e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="border-border b-bottom border-dashed py-16 lg:py-20">
      <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-5 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
        <HeroStarter
          heading="Get in Touch with Our Team"
          text="Talk to our experts for tailored guidance on payments, onboarding, and growth."
          label="Contact Us"
          noCustom
          noCenter
          maxWidth="500px"
        />
        <Form
          fields={formFields}
          onSubmit={handleSubmit}
          formBgColor="bg-white"
          submitButton={{
            text: 'Submit',
            className: 'bg-primary-500 rounded-full p-4 text-white cursor-pointer',
          }}
        />
      </section>
    </section>
  );
};

export default Contact;
