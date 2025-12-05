import HeroStarter from '@/components/ui/HeroStarter';
import Image from 'next/image';
import CardImage from '@/assets/images/ecommerce-retail/retail-banner.svg';

const page = () => {
  return (
    <>
      <HeroStarter
        heading="Simple Payment Solutions for Retail"
        text="Built to support every retail business with simple, reliable in-store payments."
        label="Retail"
        maxWidth="800px"
      />
      <section className="border-border b-bottom border-dashed py-16 lg:py-20">
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
          <article
            className={`grid w-full grid-cols-1 items-center gap-16 overflow-hidden rounded-xl p-6 shadow-[0px_4px_20px_2px_#0000001F] lg:grid-cols-[1fr_0.6fr] lg:p-10`}
          >
            <div className="order-1 lg:order-1">
              <table className="w-full border-collapse">
                <tbody>
                  <tr>
                    <td className="border-border text-text b-bottom border-r-[3px] border-dashed p-4 text-base">
                      PAX P3
                    </td>
                    <td className="border-border text-text b-bottom border-r-[3px] border-dashed p-4 text-base">
                      PAX A920
                    </td>
                    <td className="border-border text-text b-bottom border-r-[3px] border-dashed p-4 text-base">
                      PAX A920 Pro
                    </td>
                    <td className="border-border text-text b-bottom border-dashed p-4 text-base">
                      PAX A35
                    </td>
                  </tr>
                  <tr>
                    <td className="border-border text-text b-bottom border-r-[3px] border-dashed p-4 text-base">
                      PAX A920 MAX
                    </td>
                    <td className="border-border text-text b-bottom border-r-[3px] border-dashed p-4 text-base">
                      Dejavoo QD4
                    </td>
                    <td className="border-border text-text b-bottom border-r-[3px] border-dashed p-4 text-base">
                      Dejavoo QD2
                    </td>
                    <td className="border-border text-text b-bottom border-dashed p-4 text-base">
                      Dejavoo QD5 Pinpad
                    </td>
                  </tr>
                  <tr>
                    <td className="border-border text-text b-bottom border-r-[3px] border-dashed p-4 text-base">
                      Dejavoo Z6
                    </td>
                    <td className="border-border text-text b-bottom border-r-[3px] border-dashed p-4 text-base">
                      Dejavoo Z8
                    </td>
                    <td className="border-border text-text b-bottom border-r-[3px] border-dashed p-4 text-base">
                      Dejavoo Z9
                    </td>
                    <td className="border-border text-text b-bottom border-dashed p-4 text-base">
                      Dejavoo Z11
                    </td>
                  </tr>
                  <tr>
                    <td className="border-border text-text b-bottom border-r-[3px] border-dashed p-4 text-base">
                      SwipeSimple B350
                    </td>
                    <td className="border-border text-text b-bottom border-r-[3px] border-dashed p-4 text-base">
                      iDynamo 5 (Gen II)
                    </td>
                    <td className="border-border text-text b-bottom border-r-[3px] border-dashed p-4 text-base">
                      Aries 8 Tablet
                    </td>
                    <td className="border-border text-text b-bottom border-dashed p-4 text-base">
                      Aries 8 Stand
                    </td>
                  </tr>
                  <tr>
                    <td className="border-border text-text border-r-[3px] border-dashed p-4 text-base">
                      IDTECH VP3350
                    </td>
                    <td className="border-border text-text border-r-[3px] border-dashed p-4 text-base">
                      TSP 143IIIU Printer
                    </td>
                    <td className="border-border text-text border-r-[3px] border-dashed p-4 text-base">
                      PAX L920
                    </td>
                    <td className="border-border text-text border-dashed p-4 text-base">
                      Cash Drawer
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={`order-2 flex flex-col gap-5 lg:order-2`}>
              <h3 className="text-2xl font-medium lg:text-3xl">
                Modern Terminals That Fit Your Business{' '}
              </h3>
              <p className="text-text text-lg lg:text-xl">
                Choose from industry-leading hardware built for speed, reliability, and smooth
                in-store payments.
              </p>
            </div>
          </article>
        </section>
      </section>
    </>
  );
};

export default page;
