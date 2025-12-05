import Starter from '../ui/Starter';
import Image from 'next/image';
import BrandImage from '@/assets/images/white-label/brand-baner.svg';

const Brand = () => {
  return (
    <section className="border-border mt-10 border-t-[3px] border-b-[3px] border-dashed py-16 lg:py-20">
      <section className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 lg:gap-20">
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
        <Image src={BrandImage} alt="Brand" className="mx-auto h-auto w-full" />
      </section>
    </section>
  );
};

export default Brand;
