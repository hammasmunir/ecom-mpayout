import HeroStarter from '@/components/ui/HeroStarter';
import Image from 'next/image';
import CardImage from '@/assets/images/gateway/img-1.svg';
import Platforms from '@/components/gateway/Platforms';

const page = () => {
  return (
    <>
      <HeroStarter
        heading="A Gateway That Works Everywhere"
        text="Connect to every major US gateway and seamlessly integrate with the platforms your business depends on every day."
        label="Gateway"
        maxWidth="800px"
      />
      <section className="border-border b-bottom border-dashed py-16 lg:py-20">
        <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-20 px-5">
          <article
            className={`grid w-full grid-cols-1 items-center gap-16 overflow-hidden rounded-xl p-6 shadow-[0px_4px_20px_2px_#0000001F] lg:grid-cols-2 lg:p-10`}
          >
            <div className={`flex flex-col gap-5`}>
              <h3 className="text-2xl font-medium lg:text-3xl">
                Works With Every Major US Gateway
              </h3>
              <p className="text-text text-lg lg:text-xl">
                Our gateway connects directly with the largest payment processors in the US,
                allowing you to route payments, manage subscriptions, and accept transactions
                without switching tools. <br /> <br /> No extra setup, no restrictions, and no
                custom development required just instant compatibility across your entire payment
                stack.
              </p>
            </div>
            <Image src={CardImage} alt="Chargeback Tracking" className={`h-auto w-full`} />
          </article>
        </section>
      </section>
      <Platforms />
    </>
  );
};

export default page;
