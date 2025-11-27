import React from 'react';
import Starter from '../ui/Starter';
import BenfitsImage1 from '@/assets/images/benefits/benefits-1.svg';
import BenfitsImage2 from '@/assets/images/benefits/benefits-2.svg';
import BenfitsImage3 from '@/assets/images/benefits/benefits-3.svg';
import BenfitsImage4 from '@/assets/images/benefits/benefits-4.svg';
import Image from 'next/image';

const Benefits = () => {
  return (
    <section className="py-16 lg:py-20">
      <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-5">
        <Starter
          heading="Built to Power Payments in Every Industry"
          text="We provide the tools, technology, and stability your business needs to grow worldwide."
          label="Benefits"
        />
        <section className="benefits-grid">
          <article className="flex flex-col gap-3 rounded-2xl p-6 shadow-md lg:justify-end">
            <Image
              src={BenfitsImage1}
              alt="Benefit 1"
              className="mx-auto h-auto w-full max-w-[400px] lg:max-w-full"
            />
            <div className="flex flex-col gap-3 lg:mt-20">
              <h5 className="text-lg font-medium">Built for Speed and Stability</h5>
              <p>
                Process payments faster with near-zero downtime and globally optimized reliability.
              </p>
            </div>
          </article>
          <article className="flex flex-col justify-between gap-3 overflow-hidden rounded-2xl shadow-md">
            <div className="flex flex-col gap-3 px-6 pt-6">
              <h5 className="text-lg font-medium">Transparent and Fair Processing</h5>
              <p>
                No surprise freezes, full visibility and honest communication for every transaction.
              </p>
            </div>
            <Image
              src={BenfitsImage3}
              alt="Benefit 3"
              className="mx-auto h-auto w-full max-w-[400px] lg:max-w-full"
            />
          </article>
          <article className="flex flex-col justify-between gap-3 overflow-hidden rounded-2xl shadow-md">
            <div className="flex flex-col gap-3 px-6 pt-6">
              <h5 className="text-lg font-medium">Scales as You Grow</h5>
              <p>Expand smoothly into new markets with flexible, stable payment infrastructure. </p>
            </div>
            <Image
              src={BenfitsImage2}
              alt="Benefit 2"
              className="mx-auto h-auto w-full max-w-[400px] lg:max-w-full"
            />
          </article>
          <article className="flex flex-col justify-between gap-3 overflow-hidden rounded-2xl shadow-md">
            <div className="flex max-w-lg flex-col gap-3 px-6 pt-6">
              <h5 className="text-lg font-medium">Know Exactly Where Your Money Is</h5>
              <p>
                Track every payout and transaction instantly from one clear, powerful
                dashboard.{' '}
              </p>
            </div>
            <Image src={BenfitsImage4} alt="Benefit 2" className="w-full" />
          </article>
        </section>
      </section>
    </section>
  );
};

export default Benefits;
