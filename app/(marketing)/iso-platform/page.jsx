import HeroStarter from '@/components/ui/HeroStarter';
import Image from 'next/image';

import Sections from '@/components/iso/Sections';
import CardImage1 from '@/assets/images/iso/img-1.svg';
import CardImage2 from '@/assets/images/iso/img-2.svg';
import { MdArrowForwardIos } from 'react-icons/md';
import IconBoxes from '@/components/iso/IconBoxes';

const page = () => {
  const data = [
    {
      title: 'Your Brand. Your Merchants. Our Infrastructure.',
      description:
        'Run your own ISO using our infrastructure, branding, pricing control, and full dashboard access.',
      listItems: [
        'Become a payment processor under your brand',
        'Use our APIs to customize everything',
        'Set pricing with your own margins',
        'Access every tool under your branding',
        'Manage merchants through one dashboard',
      ],
      image: CardImage1,
    },
    {
      title: 'All the Tools of a Modern Processor',
      description:
        'Offer every modern processing tool checkout, alerts, routing, dashboards fully branded for your platform',
      listItems: [
        'Custom Checkout (fully developer-friendly)',
        'Chargeback Alerts & CE3.0',
        'VAMP risk monitoring',
        'PayFac Ramp + MID issuing network',
        'Real-time dashboards & reporting',
        'Full gateway integrations',
      ],
      image: CardImage2,
    },
  ];

  return (
    <>
      <HeroStarter
        heading="Operate Like a Processor Without Building"
        text="Offer your own processing solutions, manage merchants, and grow recurring revenue with a fully white-label platform."
        label="ISO Platform"
        maxWidth="800px"
      />
      <section className="border-border b-bottom border-dashed py-16 lg:py-20">
        <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-20 px-5">
          <Sections data={data} />
          <article
            className={`grid w-full grid-cols-1 items-center gap-16 overflow-hidden rounded-xl p-6 shadow-[0px_4px_20px_2px_#0000001F] lg:grid-cols-[0.6fr_1fr] lg:p-10`}
          >
            <div className={`flex flex-col gap-5`}>
              <h3 className="text-2xl font-medium lg:text-3xl">
                Simple Pricing Built for Your Growth{' '}
              </h3>
              <p className="text-text text-lg lg:text-xl">
                Clear monthly costs and flexible buy rates that let you create your own pricing
                model.
              </p>
            </div>
            <div className="flex gap-4 rounded-2xl bg-[#F5F5F5] p-8">
              <div className="border-border flex flex-col items-start gap-3 border-r-[3px] border-dashed pr-8">
                <span className="border-border text-text rounded-sm border bg-white p-1">
                  Retainer
                </span>
                <div className="flex items-end gap-1">
                  <h3 className="text-4xl font-medium">$2500</h3>
                  <p className="text-text">/monthly</p>
                </div>
                <p className="text-text">For all merchant.</p>
                <button className="flex items-center gap-2 rounded-md bg-[#0357F0] px-4 py-2 text-white">
                  Book A Call <MdArrowForwardIos />
                </button>
              </div>
              <ul className="text-text flex flex-col gap-2 pl-4 lg:text-xl">
                {[
                  'Buy rates for merchant fees',
                  'Monthly custom checkout fee',
                  'Chargeback alert fee',
                  'Per-transaction fee on PayFac Ramp',
                  'One-time PayFac Ramp activation fee',
                ].map((item, idx) => {
                  return (
                    <li className="flex items-center gap-2" key={idx}>
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.167 0.5C11.4999 0.500041 12.7591 0.753395 13.9395 1.2627C15.1103 1.76794 16.1343 2.45661 17.0059 3.32812C17.8772 4.19955 18.5651 5.22287 19.0703 6.39355C19.5797 7.57413 19.833 8.83386 19.833 10.167C19.833 11.4999 19.5796 12.759 19.0703 13.9395C18.5651 15.1103 17.8774 16.1343 17.0059 17.0059C16.1343 17.8774 15.1103 18.5651 13.9395 19.0703C12.759 19.5796 11.4999 19.833 10.167 19.833C8.83386 19.833 7.57413 19.5797 6.39355 19.0703C5.22287 18.5651 4.19955 17.8772 3.32812 17.0059C2.45661 16.1343 1.76794 15.1103 1.2627 13.9395C0.753395 12.7591 0.500041 11.4999 0.5 10.167C0.5 8.83387 0.753274 7.57413 1.2627 6.39355C1.76794 5.22268 2.45661 4.19964 3.32812 3.32812C4.19964 2.45661 5.22268 1.76794 6.39355 1.2627C7.57413 0.753274 8.83387 0.5 10.167 0.5ZM8.88379 12.5234L8.5293 12.1699L6.27051 9.91113L5.69434 10.4863L8.88281 13.6748L14.6377 7.91992L14.0625 7.34473L8.88379 12.5234Z"
                          stroke="#0357F0"
                        />
                      </svg>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
        </section>
      </section>
      <IconBoxes />
    </>
  );
};

export default page;
