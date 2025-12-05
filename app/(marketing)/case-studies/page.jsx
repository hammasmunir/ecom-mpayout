import HeroStarter from '@/components/ui/HeroStarter';
import Starter from '@/components/ui/Starter';
import React from 'react';
import Image1 from '@/assets/images/case-studies/cs-1.svg';
import Image2 from '@/assets/images/case-studies/cs-2.svg';
import Image3 from '@/assets/images/case-studies/cs-3.svg';
import Image from 'next/image';

const page = () => {
  return (
    <>
      <HeroStarter
        heading="Real Results From Real Businessess"
        text="Explore success stories that show the impact of better processing, smarter routing, and stable MIDs."
        label="All case studies"
        maxWidth="680px"
      />
      <section className="border-border b-bottom b-top mt-20 border-dashed py-16 lg:py-20">
        <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-16 px-5">
          <div className="flex w-full flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-between">
            <Starter
              heading="Explore Case Studies"
              className="max-w-[600px] lg:items-start lg:text-left"
              noCenter={true}
            />
            <p className="text-text max-w-[460px] text-center lg:text-left">
              See how brands across industries improved payments, stability, and revenue with our
              platform.
            </p>
          </div>
          <section className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 lg:grid-rows-2">
            <article className="flex min-h-[280px] flex-col rounded-2xl bg-[#F6FFFE] p-8">
              <h4 className="text-3xl font-medium text-black">Healthletic</h4>
              <div className="flex h-full items-center justify-center">
                {' '}
                <Image src={Image1} alt="" className="h-auto w-full max-w-[500px]" />
              </div>
            </article>
            <article className="flex min-h-[280px] flex-col rounded-2xl bg-[#0047A0] p-8">
              <h4 className="text-3xl font-medium text-white">OMNX</h4>
              <div className="flex h-full items-center justify-center">
                {' '}
                <Image src={Image2} alt="" className="h-auto w-full max-w-[500px]" />
              </div>{' '}
            </article>{' '}
            <article className="relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl p-8 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3">
              <div className="absolute inset-0">
                <Image
                  src={Image3}
                  alt="Case study background"
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                  className="rounded-2xl"
                />
              </div>
              <div className="relative z-10 flex h-full">
                <h4 className="text-3xl font-medium text-white">Viberide</h4>
              </div>
            </article>
          </section>
        </section>
      </section>
    </>
  );
};

export default page;
