import Image from 'next/image';
import Starter from '../ui/Starter';
import FlashImage from '@/assets/images/why-choose-flash.svg';

const WhyChooseUs = () => {
  return (
    <>
      <section className="pt-16 pb-10 lg:pt-20">
        <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-5">
          <div className="flex w-full items-center justify-between gap-5">
            <Starter
              heading="Take Control of Your Payments"
              label="Why Choose Us"
              className="max-w-[400px] lg:items-start lg:text-left"
              noCenter={true}
            />
            <p className="max-w-[500px]">
              We built a payment system that gives you speed, transparency, and control exactly what
              every modern business deserves.
            </p>
          </div>
        </section>
      </section>
      <section className="">
        <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-5">
          <section className="why-choose-grid">
            <article className="flex flex-col gap-3 px-7 py-12">
              <h3 className="max-w-[250px] text-xl font-medium lg:text-3xl">
                Instant Approvals That Stick
              </h3>
              <p>
                We manually verify every account, so once you’re approved, you stay approved. No
                bots, no random bans just long-term stability.
              </p>
            </article>
            <article>
              <Image src={FlashImage} alt="Flash" className="h-auto w-full" />
            </article>
            <article className="flex flex-col gap-3 px-7 py-12">
              <h3 className="max-w-[250px] text-xl font-medium lg:text-3xl">
                Fast Payouts That Keep You Moving
              </h3>
              <p>
                Your money moves when you do. Enjoy same-day or next-day payouts with no hidden
                reserves or holdbacks.
              </p>
            </article>
            <article className="flex flex-col gap-3 px-7 py-12">
              <h3 className="max-w-[300px] text-xl font-medium lg:text-3xl">
                Built-In Protection That Works for You{' '}
              </h3>
              <p>
                Real-time fraud detection and chargeback alerts keep your business safe without
                slowing down transactions.
              </p>
            </article>
          </section>
        </section>
      </section>
    </>
  );
};

export default WhyChooseUs;
