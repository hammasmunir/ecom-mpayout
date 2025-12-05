import HeroStarter from '@/components/ui/HeroStarter';
import Image from 'next/image';
import React from 'react';
import vibeRideImage from '@/assets/images/case-studies/cs-3.svg';
import Points from '@/components/case-studies/Points';
import Outcome from '@/components/case-studies/Outcome';
import Benefits from '@/components/case-studies/Benefits';
import AuthorBox from '@/components/case-studies/AuthorBox';

const page = () => {
  const points = [
    { title: '30–50%', description: 'Chargeback Reduction' },
    { title: '+3–5%', description: 'Authorization Rates Increase' },
    { title: 'In a days', description: 'MID Scalability' },
  ];
  const outcome = {
    heading: 'Metric',
    beforeLabel: 'Before Ecom Payouts',
    afterLabel: 'After Ecom Payouts',
    rows: [
      {
        metric: 'Authorization Rate',
        before: 'Declines during traffic surges',
        after: '+3-5% improvement with optimized routing',
      },
      {
        metric: 'Cash Flow',
        before: 'Slow settlements, capital tied up',
        after: 'Improved liquidity + reduced reserve strain',
      },
      {
        metric: 'Chargebacks',
        before: 'Reactive handling',
        after: '30-50% reduction with alerts + VAMP monitoring',
      },
      {
        metric: 'MID Scalability',
        before: 'Weeks to add merchant accounts',
        after: 'New MIDs in days via Ecom Payouts',
      },
      {
        metric: 'Operational Insight',
        before: 'Limited to batch reports',
        after: 'Real-time dashboards and actionable analytics',
      },
      {
        metric: 'Launch Capacity',
        before: 'Systems strained during spikes',
        after: 'Seamless high-volume scaling across ISOs',
      },
    ],
  };
  return (
    <>
      <HeroStarter
        heading="Scaling VibeRide With Smarter Payments"
        text="VibeRide gained stability, visibility, and the ability to scale launches confidently with smarter routing and instant insights."
        label="Viberide"
        noCenter={true}
        className="items-start"
      />
      <section className="border-border b-bottom border-dashed pt-10 pb-20">
        <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-5">
          <Image
            src={vibeRideImage}
            alt="viberide"
            className="h-[420px] w-full rounded-xl object-cover"
          />
          <section className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[0.4fr_1fr]">
            <Points data={points} />
            <section className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl font-medium md:text-5xl">Brand Overview</h2>
                <p className="text-text">
                  VibeRide is an innovative board brand known for the BrakeBoard — a skateboard and
                  longboard equipped with a unique foot-controlled brake system. Founded by young
                  entrepreneurs, their mission is to make braking a standard feature on cruiser
                  boards for safer riding. They sell both braking kits and fully built boards and
                  operate on Shopify, managing rapid growth in both hardware production and
                  e-commerce volume.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="mb-3 text-2xl font-medium md:text-4xl">
                  Challenges Before Switching
                </h2>
                <h3 className="text-xl font-medium md:text-3xl">Cash Flow Constraints</h3>
                <p className="text-text">
                  As a hardware-based DTC company, VibeRide needed significant upfront investment in
                  manufacturing boards and brake kits. Inventory cycles tied up capital, creating
                  cash flow pressure as they scaled new SKUs and product lines.
                </p>
                <h3 className="text-xl font-medium md:text-3xl">High Transaction Volume Spikes</h3>
                <p className="text-text">
                  Product drops and restocks generated large transaction spikes. Their previous
                  payment setup couldn’t handle surges reliably, which led to increased declines,
                  stress on settlement timelines, and potential acquirer risk warnings.
                </p>
                <h3 className="text-xl font-medium md:text-3xl">
                  Merchant Risk & Underwriting Complexity
                </h3>
                <p className="text-text">
                  As a fast-growing physical goods brand, some acquirers viewed VibeRide as higher
                  risk. Rapid growth, high order values, and refund potential created underwriting
                  friction and potential account instability.
                </p>
                <h3 className="text-xl font-medium md:text-3xl">Limited Payment Visibility</h3>
                <p className="text-text">
                  Without real-time analytics, VibeRide struggled to monitor authorization rates,
                  chargebacks, refunds, and settlement flow. Manual reconciliation slowed operations
                  and made scaling decisions less transparent.
                </p>
                <h3 className="text-xl font-medium md:text-3xl">
                  Scaling Merchant Accounts (MIDs)
                </h3>
                <p className="text-text">
                  Growth required new MIDs or volume splitting, but traditional underwriting
                  processes were slow. Being dependent on a single acquirer created bottlenecks,
                  raised chargeback exposure, and threatened scaling during major product drops.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="text-2xl font-medium md:text-4xl">Solutions Delivered</h2>

                <p className="text-text">
                  VibeRide gained dynamic routing through the highest-performing ISO at any moment.
                  This increased approval rates, reduced declines during traffic spikes, and
                  stabilized processing during launches.
                </p>
                <p className="text-text">
                  They could open new MIDs in days rather than weeks. This enabled volume scaling,
                  product line separation, international expansion, and better risk distribution
                  without delays.
                </p>
                <p className="text-text">
                  VibeRide gained instant visibility into authorization trends, declines,
                  chargebacks, and settlement flows. This allowed them to forecast better, optimize
                  campaigns, and maintain operational control even during surge periods.
                </p>
                <p className="text-text">
                  Early alerts and proactive monitoring enabled VibeRide to act before disputes
                  escalated. They could spot suspicious activity faster, reduce risk exposure, and
                  maintain cleaner merchant accounts.
                </p>
                <p className="text-text">
                  By distributing volume across multiple ISOs and improving routing logic,
                  settlement times became faster and more consistent. Reduced reserve pressure freed
                  capital for inventory, marketing, and product growth.
                </p>
                <p className="text-text">
                  Your platform gave VibeRide a resilient infrastructure capable of supporting major
                  launches, international expansion, and rapid order growth — without processing
                  interruptions.
                </p>
              </div>
              <Outcome data={outcome} />
              <Benefits text="VibeRide saw smoother product launches, improved stability during peak sales periods, and greater confidence in scaling inventory and marketing. With better risk tools and diversified processing, they minimized exposure and gained financial reliability. Reduced reserve pressure freed capital for reinvesting into new board lines and brake technology." />
            </section>
          </section>
          <AuthorBox
            text="Scaling VibeRide was impossible with our old setup — every product launch felt like a risk. Ecom Payouts gave us routing flexibility, instant visibility, and the ability to scale MIDs fast. Now we can handle massive spikes without declines, manage cash better, and grow with confidence."
            name="Charlie Cannon"
            desg="Co-Founder, VibeRide"
          />
        </section>
      </section>
    </>
  );
};

export default page;
