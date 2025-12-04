import HeroStarter from '@/components/ui/HeroStarter';
import Image from 'next/image';
import CardImage from '@/assets/images/integration/shopify-card.svg';

const page = () => {
  return (
    <>
      <HeroStarter
        heading="Better Payment Solution for Shopify Brands"
        text="Get higher approvals, a custom checkout, real-time insights, and direct bank processing that gives your Shopify store"
        label="Shopify"
        maxWidth="800px"
      />
      <section className="border-border border-b-[3px] border-dashed py-16 lg:py-20">
        <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-20 px-5">
          <article
            className={`grid w-full grid-cols-1 items-center gap-16 overflow-hidden rounded-xl p-6 shadow-[0px_4px_20px_2px_#0000001F] lg:grid-cols-2 lg:p-10`}
          >
            <div className={`flex flex-col gap-5`}>
              <h3 className="text-2xl font-medium lg:text-3xl">Effortless Shopify Setup</h3>
              <p className="text-text text-lg lg:text-xl">
                Get your Shopify store processing payments in minutes with seamless onboarding,
                automatic configuration, and a checkout that just works no developers needed.
              </p>
            </div>
            <Image src={CardImage} alt="Chargeback Tracking" className={`h-auto w-full`} />
          </article>
        </section>
      </section>
    </>
  );
};

export default page;
