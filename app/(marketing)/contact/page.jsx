'use client';
import Dropdown from '@/components/ui/Dropdown';
import HeroStarter from '@/components/ui/HeroStarter';
import React, { useState } from 'react';

const Contact = () => {
  const companyTypes = ['E-commerce', 'Retail', 'SaaS'];
  const [selectedCompanyType, setSelectedCompanyType] = useState(null);

  return (
    <section className="border-border border-b-[3px] border-dashed py-16 lg:py-20">
      <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-20 px-5 lg:grid-cols-[1fr_0.8fr]">
        <HeroStarter
          heading="Get in Touch with Our Team"
          text="Talk to our experts for tailored guidance on payments, onboarding, and growth."
          label="Contact Us"
          noCustom
          noCenter
        />
        <form className="flex w-full flex-col gap-4 rounded-xl bg-white p-7 shadow-[10px_-10px_75px_0px_#0357F040]">
          <div className="gap flex flex-col">
            <label htmlFor="firstName" className="text-text text-sm">
              First Name<span className="text-gray-500">*</span>
            </label>
            <input
              type="text"
              className="text-text border-border rounded-lg border bg-[#FAFAFA] px-5 py-2 text-lg outline-none"
              name="firstName"
              required
              id="firstName"
            />
          </div>
          <div className="gap flex flex-col">
            <label htmlFor="lastName" className="text-text text-sm">
              Last Name<span className="text-gray-500">*</span>
            </label>
            <input
              type="text"
              className="text-text border-border rounded-lg border bg-[#FAFAFA] px-5 py-2 text-lg outline-none"
              name="lastName"
              required
              id="lastName"
            />
          </div>
          <div className="gap flex flex-col">
            <label htmlFor="email" className="text-text text-sm">
              Email<span className="text-gray-500">*</span>
            </label>
            <input
              type="email"
              className="text-text border-border rounded-lg border bg-[#FAFAFA] px-5 py-2 text-lg outline-none"
              name="email"
              required
              id="email"
            />
          </div>
          <div className="gap flex flex-col">
            <label htmlFor="companyName" className="text-text text-sm">
              Company Name<span className="text-gray-500">*</span>
            </label>
            <input
              type="text"
              className="text-text border-border rounded-lg border bg-[#FAFAFA] px-5 py-2 text-lg outline-none"
              name="companyName"
              required
              id="companyName"
            />
          </div>
          <div className="gap flex flex-col">
            <label htmlFor="comapnyType" className="text-text text-sm">
              Company Type<span className="text-gray-500">*</span>
            </label>
            <Dropdown
              options={companyTypes}
              value={selectedCompanyType}
              onChange={setSelectedCompanyType}
              className="bg-[#FAFAFA]"
            />
          </div>
          <button className="bg-primary-500 rounded-full px-4 py-2 text-white" type="submit">
            Submit
          </button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
