import HeroStarter from '@/components/ui/HeroStarter';
import Image from 'next/image';
import CardImage from '@/assets/images/ecommerce-retail/ecommerce-banner.svg';
import Features from '@/components/integration/Features';
import GlobeIcon from '@/assets/icons/ecommerce/GlobeIcon';
import BlockIcon from '@/assets/icons/ecommerce/BlockIcon';
import CardIcon from '@/assets/icons/ecommerce/CardIcon';
import SheildIcon from '@/assets/icons/ecommerce/SheildIcon';

const page = () => {
  return (
    <>
      <HeroStarter
        heading="Complete Payment Stack for Modern Online Brands"
        text="Get faster approvals, instant platform integrations, and a custom checkout designed to increase conversions and keep your revenue flowing."
        label="Ecommerce"
        maxWidth="800px"
      />
      <section className="border-border border-b-[3px] border-dashed py-16 lg:py-20">
        <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-20 px-5">
          <article
            className={`grid w-full grid-cols-1 items-center gap-16 overflow-hidden rounded-xl p-6 shadow-[0px_4px_20px_2px_#0000001F] lg:grid-cols-2 lg:p-10`}
          >
            <div className={`flex flex-col gap-5`}>
              <h3 className="text-2xl font-medium lg:text-3xl">
                Built for Fast-Growing E-commerce Brands
              </h3>
              <p className="text-text text-lg lg:text-xl">
                High approvals, a custom checkout, and seamless integrations with every major
                platform.
              </p>
              <ul className="text-text flex flex-col gap-2 lg:text-xl">
                <li className="flex items-center gap-2">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.88333 13.3833L14.3458 6.92083L13.0625 5.6375L7.88333 10.8167L5.27083 8.20417L3.9875 9.4875L7.88333 13.3833ZM9.16667 18.3333C7.89861 18.3333 6.70694 18.0927 5.59167 17.6115C4.47639 17.1302 3.50625 16.4771 2.68125 15.6521C1.85625 14.8271 1.20313 13.8569 0.721875 12.7417C0.240625 11.6264 0 10.4347 0 9.16667C0 7.89861 0.240625 6.70694 0.721875 5.59167C1.20313 4.47639 1.85625 3.50625 2.68125 2.68125C3.50625 1.85625 4.47639 1.20313 5.59167 0.721875C6.70694 0.240625 7.89861 0 9.16667 0C10.4347 0 11.6264 0.240625 12.7417 0.721875C13.8569 1.20313 14.8271 1.85625 15.6521 2.68125C16.4771 3.50625 17.1302 4.47639 17.6115 5.59167C18.0927 6.70694 18.3333 7.89861 18.3333 9.16667C18.3333 10.4347 18.0927 11.6264 17.6115 12.7417C17.1302 13.8569 16.4771 14.8271 15.6521 15.6521C14.8271 16.4771 13.8569 17.1302 12.7417 17.6115C11.6264 18.0927 10.4347 18.3333 9.16667 18.3333Z"
                      fill="#0357F0"
                    />
                  </svg>
                  Higher approval rates than PayFacs
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.88333 13.3833L14.3458 6.92083L13.0625 5.6375L7.88333 10.8167L5.27083 8.20417L3.9875 9.4875L7.88333 13.3833ZM9.16667 18.3333C7.89861 18.3333 6.70694 18.0927 5.59167 17.6115C4.47639 17.1302 3.50625 16.4771 2.68125 15.6521C1.85625 14.8271 1.20313 13.8569 0.721875 12.7417C0.240625 11.6264 0 10.4347 0 9.16667C0 7.89861 0.240625 6.70694 0.721875 5.59167C1.20313 4.47639 1.85625 3.50625 2.68125 2.68125C3.50625 1.85625 4.47639 1.20313 5.59167 0.721875C6.70694 0.240625 7.89861 0 9.16667 0C10.4347 0 11.6264 0.240625 12.7417 0.721875C13.8569 1.20313 14.8271 1.85625 15.6521 2.68125C16.4771 3.50625 17.1302 4.47639 17.6115 5.59167C18.0927 6.70694 18.3333 7.89861 18.3333 9.16667C18.3333 10.4347 18.0927 11.6264 17.6115 12.7417C17.1302 13.8569 16.4771 14.8271 15.6521 15.6521C14.8271 16.4771 13.8569 17.1302 12.7417 17.6115C11.6264 18.0927 10.4347 18.3333 9.16667 18.3333Z"
                      fill="#0357F0"
                    />
                  </svg>
                  Custom checkout optimized for conversions{' '}
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.88333 13.3833L14.3458 6.92083L13.0625 5.6375L7.88333 10.8167L5.27083 8.20417L3.9875 9.4875L7.88333 13.3833ZM9.16667 18.3333C7.89861 18.3333 6.70694 18.0927 5.59167 17.6115C4.47639 17.1302 3.50625 16.4771 2.68125 15.6521C1.85625 14.8271 1.20313 13.8569 0.721875 12.7417C0.240625 11.6264 0 10.4347 0 9.16667C0 7.89861 0.240625 6.70694 0.721875 5.59167C1.20313 4.47639 1.85625 3.50625 2.68125 2.68125C3.50625 1.85625 4.47639 1.20313 5.59167 0.721875C6.70694 0.240625 7.89861 0 9.16667 0C10.4347 0 11.6264 0.240625 12.7417 0.721875C13.8569 1.20313 14.8271 1.85625 15.6521 2.68125C16.4771 3.50625 17.1302 4.47639 17.6115 5.59167C18.0927 6.70694 18.3333 7.89861 18.3333 9.16667C18.3333 10.4347 18.0927 11.6264 17.6115 12.7417C17.1302 13.8569 16.4771 14.8271 15.6521 15.6521C14.8271 16.4771 13.8569 17.1302 12.7417 17.6115C11.6264 18.0927 10.4347 18.3333 9.16667 18.3333Z"
                      fill="#0357F0"
                    />
                  </svg>
                  Native integrations: Shopify, WooCommerce etc..{' '}
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.88333 13.3833L14.3458 6.92083L13.0625 5.6375L7.88333 10.8167L5.27083 8.20417L3.9875 9.4875L7.88333 13.3833ZM9.16667 18.3333C7.89861 18.3333 6.70694 18.0927 5.59167 17.6115C4.47639 17.1302 3.50625 16.4771 2.68125 15.6521C1.85625 14.8271 1.20313 13.8569 0.721875 12.7417C0.240625 11.6264 0 10.4347 0 9.16667C0 7.89861 0.240625 6.70694 0.721875 5.59167C1.20313 4.47639 1.85625 3.50625 2.68125 2.68125C3.50625 1.85625 4.47639 1.20313 5.59167 0.721875C6.70694 0.240625 7.89861 0 9.16667 0C10.4347 0 11.6264 0.240625 12.7417 0.721875C13.8569 1.20313 14.8271 1.85625 15.6521 2.68125C16.4771 3.50625 17.1302 4.47639 17.6115 5.59167C18.0927 6.70694 18.3333 7.89861 18.3333 9.16667C18.3333 10.4347 18.0927 11.6264 17.6115 12.7417C17.1302 13.8569 16.4771 14.8271 15.6521 15.6521C14.8271 16.4771 13.8569 17.1302 12.7417 17.6115C11.6264 18.0927 10.4347 18.3333 9.16667 18.3333Z"
                      fill="#0357F0"
                    />
                  </svg>
                  Works with every major hosting platform{' '}
                </li>
              </ul>
            </div>
            <Image src={CardImage} alt="Chargeback Tracking" className={`h-auto w-full`} />
          </article>
        </section>
      </section>
      <Features
        title="E-commerce Processing System"
        desp="Everything you need to sell online smoothly from approvals to checkout and platform integrations."
        data={[
          {
            icon: <SheildIcon />,
            title: 'High Approval Rates',
            description: 'Get approved faster with direct banking partners built for eCommerce.',
          },
          {
            icon: <CardIcon />,
            title: 'Custom Checkout',
            description: 'A lightweight, optimized checkout that increases conversions instantly.',
          },
          {
            icon: <BlockIcon />,
            title: 'Platform Integrations',
            description: 'Connect with Shopify, WooCommerce, BigCommerce, Wix, and more.',
          },
          {
            icon: <GlobeIcon />,
            title: 'Hosting Compatibility',
            description:
              'Fully supports all leading web hosting platforms with complete flexibility.',
          },
        ]}
      />
    </>
  );
};

export default page;
