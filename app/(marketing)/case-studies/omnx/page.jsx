import HeroStarter from '@/components/ui/HeroStarter';
import Image from 'next/image';
import React from 'react';
import omnxImage from '@/assets/images/case-studies/cs-2.svg';
import Points from '@/components/case-studies/Points';
import Outcome from '@/components/case-studies/Outcome';
import Benefits from '@/components/case-studies/Benefits';
import AuthorBox from '@/components/case-studies/AuthorBox';

const page = () => {
  const points = [
    { title: '+100%', description: 'Revenue Increase After 6 to 12 Months' },
    { title: '30–50%', description: 'Chargeback Reduction Via Early Alerts' },
    { title: '+4%', description: 'Authorization Rates Increase' },
  ];
  const outcome = {
    heading: 'Metric / Goal',
    beforeLabel: 'Before (Legacy Payment Setup)',
    afterLabel: 'After Switching to ecom payouts',
    rows: [
      {
        metric: 'Bank Approvals & Stability',
        before:
          'Single acquiring partner with rolling reserves, frequent reviews, and the threat of sudden account holds',
        after:
          'Diversified acquirer mix, faster renewals, and steadier reserves thanks to stronger underwriting + real-time risk signals',
      },
      {
        metric: 'Authorization Rates',
        before:
          'Declines during subscription renewals and high-ticket cross-border orders with limited fallback paths',
        after:
          '+4–6% auth-rate lift by routing through best-fit ISOs with automated failover per segment',
      },
      {
        metric: 'Chargeback Rate',
        before:
          'Disputes discovered late, reactive responses, and elevated loss ratios on subscription SKUs',
        after:
          '40–60% reduction via early alerts, guided representments, and better customer communication flows',
      },
      {
        metric: 'Customer Retention / Subscription Growth',
        before:
          'Subscription churn tied to billing failures, frustrated customers, and lengthy support cycles',
        after:
          'Retention improved with fewer failed payments, proactive retries, and clearer renewal messaging',
      },
      {
        metric: 'Cash Flow / Reserve Requirements',
        before:
          'Capital locked in rolling reserves and unpredictable settlement windows slowed reinvestment',
        after:
          'Predictable settlements and optimized reserves freed budget for launches, R&D, and customer success',
      },
      {
        metric: 'Operational Efficiency',
        before:
          'Separate dashboards, manual reconciliation, and delayed visibility into risk or decline spikes',
        after:
          'Unified reporting with live alerts enabled faster decisions, streamlined compliance, and fewer surprises',
      },
      {
        metric: 'Scaling Confidence',
        before:
          'Growth throttled by limited MIDs and fear of triggering reviews or MID shutdowns during promos',
        after:
          'Can spin up new MIDs in days, route dynamically, and plan major campaigns without risking instability',
      },
    ],
  };
  return (
    <>
      <HeroStarter
        heading="How OMNX Doubled Revenue With Smarter Payments"
        text="See how a fast-growing wellness brand improved approvals, reduced risk, and scaled effortlessly by switching to a more flexible payment infrastructure."
        label="OMNX"
        noCenter={true}
        className="items-start"
        maxWidth="680px"
      />
      <section className="border-border b-bottom border-dashed pt-10 pb-20">
        <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-5">
          <div className="flex h-[420px] w-full items-center justify-center rounded-xl bg-[#0047A0]">
            <Image src={omnxImage} alt="healthletic" className="w-full max-w-[520px] rounded-xl" />
          </div>
          <section className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[0.4fr_1fr]">
            <Points data={points} />
            <section className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl font-medium md:text-5xl">Brand Overview</h2>
                <p className="text-text">
                  OMNX is a fast-growing direct-to-consumer wellness brand specializing in
                  science-backed focus gummies designed for entrepreneurs, deep work, and
                  high-output performance. Their value lies in fast absorption, crash-free energy,
                  and sustained mental clarity.
                  <br />
                  <br />
                  HomeFi is naturally more exposed to disputes and chargebacks as a
                  subscription-based business, many triggered by forgotten cancellations or
                  miscommunications. With Chargeflow, they’ve turned what was once a recurring
                  operational burden into an automated and efficient system that drives results.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="mb-3 text-2xl font-medium md:text-4xl">
                  Challenges Before Switching
                </h2>
                <h3 className="text-xl font-medium md:text-3xl">
                  Fragmented Payment Infrastructure
                </h3>
                <p className="text-text">
                  OMNX relied on a limited set of payment providers, which constrained flexibility
                  and prevented them from routing transactions in the most efficient or
                  cost-effective way.
                </p>
                <h3 className="text-xl font-medium md:text-3xl">Lack of Real-Time Visibility</h3>
                <p className="text-text">
                  Their previous system only provided delayed or aggregated reporting, making it
                  difficult to monitor trends, catch issues early, or optimize promotions and
                  retention strategies.
                </p>
                <h3 className="text-xl font-medium md:text-3xl">High Chargeback Exposure</h3>
                <p className="text-text">
                  As a fast-moving consumer brand, OMNX was exposed to elevated chargeback risk but
                  lacked early-warning systems to manage disputes proactively.
                </p>
                <h3 className="text-xl font-medium md:text-3xl">Scaling Bottlenecks</h3>
                <p className="text-text">
                  The company was approaching volume thresholds where existing providers could no
                  longer scale with them, and onboarding or upgrading new MIDs required slow,
                  complicated processes that limited growth.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="text-2xl font-medium md:text-4xl">Solutions Delivered</h2>

                <p className="text-text">
                  Enabled OMNX to route transactions through 35+ ISOs optimizing for cost, speed, or
                  risk. This improved approval rates and reduced overall processing costs.
                </p>
                <p className="text-text">
                  They could issue, split, or upgrade MIDs directly from your portal.
                  On-ramp/off-ramp PayFac structure helped them scale safely as they grew.
                </p>
                <p className="text-text">
                  Instant access to KPIs like volume, approvals, disputes, chargebacks, and campaign
                  performance all in real time.
                </p>
                <p className="text-text">
                  Early alerts allowed OMNX to act before disputes escalated. VAMP tools reduced
                  losses and helped maintain cleaner risk profiles.
                </p>
                <p className="text-text">
                  Your system plugged directly into all their existing gateways, requiring minimal
                  development and creating a single layer for reporting.
                </p>
              </div>
              <Outcome data={outcome} />
              <Benefits text="Better settlement times helped fund inventory, marketing, and product development faster. || Fewer declines and smoother checkout improved the customer experience and likely boosted retention. || Instant access to KPIs like volume, approvals, disputes, chargebacks, and campaign performance all in real time. || A flexible, future-proof infrastructure gave OMNX the confidence to grow aggressively without payment-related barriers." />
            </section>
          </section>
          <AuthorBox
            text="Switching to ecompayouts was a game changer for us. We doubled our monthly revenue, eliminated risk, and gained insights that changed how we run promotions. Their chargeback alerts alone saved us tens of thousands. And scaling with new MIDs was fast and painless."
            name="Jane Doe"
            desg="Chief Operating Officer, OMNX"
          />
        </section>
      </section>
    </>
  );
};

export default page;
