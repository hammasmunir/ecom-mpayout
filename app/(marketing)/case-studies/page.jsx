import HeroStarter from '@/components/ui/HeroStarter';
import Starter from '@/components/ui/Starter';
import React from 'react';
import Image1 from '@/assets/images/case-studies/cs-1.svg';
import Image2 from '@/assets/images/case-studies/cs-2.svg';
import Image3 from '@/assets/images/case-studies/cs-3.png';
import Image from 'next/image';

const page = () => {
  return (
    <>
      <HeroStarter
        heading="Real Results From Real Businessess"
        text="Explore success stories that show the impact of better processing, smarter routing, and stable MIDs."
        label="All case studies"
      />
      <section className="border-border mt-20 border-t-[3px] border-b-[3px] border-dashed py-16 lg:py-20">
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
          <section className="grid w-full grid-cols-1 grid-rows-none gap-6 md:grid-cols-2 md:grid-rows-2">
            <article className="rounded-2xl bg-[#F6FFFE] p-8">
              <h4 className="text-3xl font-medium text-black">Healthletic</h4>
              <div className="flex h-full items-center">
                {' '}
                <Image src={Image1} alt="" className="h-auto w-full max-w-[500px]" />
              </div>
            </article>
            <article className="rounded-2xl bg-[#0047A0] p-8">
              <h4 className="text-3xl font-medium text-white">Healthletic</h4>
              <div className="flex h-full items-center">
                {' '}
                <Image src={Image2} alt="" className="h-auto w-full max-w-[500px]" />
              </div>{' '}
            </article>{' '}
            <article
              className="col-start-2 col-end-3 row-start-1 row-end-3 rounded-2xl p-8"
              style={{
                backgroundImage: `url(${Image3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              Hello 3
            </article>
          </section>
        </section>
      </section>
    </>
  );
};

export default page;
