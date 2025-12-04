import HeroStarter from '@/components/ui/HeroStarter';
import Image from 'next/image';
import React from 'react';
import healthImage from '@/assets/images/case-studies/cs-1.svg';
import Points from '@/components/case-studies/Points';
import Outcome from '@/components/case-studies/Outcome';
import Benefits from '@/components/case-studies/Benefits';

const page = () => {
  const points = [
    { title: '40-60%', description: 'Chargeback Reduction' },
    { title: '+3–5%', description: 'Authorization Rates Increase' },
  ];
  const outcome = {
    heading: 'Metric / Goal',
    beforeLabel: 'Before (Legacy Payment Setup)',
    afterLabel: 'After Switching to ecom payouts',
    rows: [
      {
        metric: 'Bank Approvals & Stability',
        before:
          'Multiple rejections or long underwriting delays; high rolling reserve; limited acquirer options',
        after:
          'Faster approvals, lower risk of account termination, more favorable reserve terms because of stronger underwriting + risk monitoring',
      },
      {
        metric: 'Authorization Rates',
        before:
          'Declines more often, especially on recurring payment attempts or large transactions',
        after: '+ 3–5% auth-rate improvement due to smarter ISO routing and fallback paths',
      },
      {
        metric: 'Chargeback Rate',
        before: 'Elevated (especially on subscription or high-ticket sales)',
        after:
          'Chargebacks reduced by 40–60% due to early alerts, proactive interventions, and better subscription transparency',
      },
      {
        metric: 'Customer Retention / Subscription Growth',
        before: 'Some churn from billing declines, customer distrust, or failed payments',
        after:
          'Retention improved; fewer failed payments; more seamless billing; better customer experience',
      },
      {
        metric: 'Cash Flow / Reserve Requirements',
        before: 'High cash held in reserve, constraining working capital',
        after:
          'More predictable cash flow; reserves optimized; funds freed up for marketing, R&D, or operations',
      },
      {
        metric: 'Operational Efficiency',
        before: 'Manual reconciliation, delayed risk detection, disconnected reporting',
        after:
          'Real-time dashboards, unified gateway metrics, proactive risk signals streamlined operations',
      },
      {
        metric: 'Scaling Confidence',
        before: 'Hesitant to scale due to reserves / account instability',
        after:
          'Confident scaling: can issue new MIDs, route flexibly, and manage risk dynamically; long-term growth becomes more achievable',
      },
    ],
  };
  return (
    <>
      <HeroStarter
        heading="The Wellness Brand That Turned Payments Into a Growth Engine"
        text="Earn how advanced risk tools, flexible MID setup, and unified reporting enabled a high-risk wellness brand to operate with more stability and predictability."
        label="Healthletic"
        noCenter={true}
        className="items-start"
        maxWidth="680px"
      />
      <section className="border-border border-b-[3px] border-dashed pt-10 pb-20">
        <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-5">
          <div className="flex h-[420px] w-full items-center justify-center rounded-xl bg-[#F6FFFE]">
            <Image
              src={healthImage}
              alt="healthletic"
              className="w-full max-w-[520px] rounded-xl"
            />
          </div>
          <section className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[0.4fr_1fr]">
            <Points data={points} />
            <section className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl font-medium md:text-5xl">Brand Overview</h2>
                <p className="text-text">
                  Healthletic (healthletic.io) is a health-tech and wellness e-commerce brand
                  operating in the supplement and performance-optimization space. Their products
                  help customers improve physical or cognitive health, placing them directly inside
                  a category that acquiring banks often classify as high risk. Because the brand
                  deals with health-related claims, subscriptions, and wellness-focused products,
                  banks apply stricter scrutiny, making payment infrastructure a critical part of
                  their operations.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="mb-3 text-2xl font-medium md:text-4xl">
                  Challenges Before Switching
                </h2>
                <h3 className="text-xl font-medium md:text-3xl">Bank Underwriting Risk</h3>
                <p className="text-text">
                  Healthletic operated under heightened banking scrutiny, as supplement and
                  health-wellness brands often face tougher underwriting, regulatory skepticism, and
                  long approval cycles. Some acquirers hesitated to open or maintain merchant
                  accounts, and those who did often imposed reserves, higher rates, or restrictive
                  terms.
                </p>
                <h3 className="text-xl font-medium md:text-3xl">High Chargeback Exposure</h3>
                <p className="text-text">
                  The wellness vertical naturally carries elevated chargeback risk due to customer
                  expectations, subscription misunderstandings, and sensitive product claims.
                  Without proactive dispute monitoring, Healthletic struggled to predict or manage
                  these risks before they became financial losses.
                </p>
                <h3 className="text-xl font-medium md:text-3xl">
                  Regulatory and Compliance Complexity
                </h3>
                <p className="text-text">
                  Banks worry about potential compliance violations and health-claim regulations,
                  and Healthletic’s previous payment setups required extensive documentation and
                  more frequent reviews. This slowed onboarding, added friction, and created
                  uncertainty as they scaled.
                </p>
                <h3 className="text-xl font-medium md:text-3xl">
                  Lack of Real-Time Risk Visibility
                </h3>
                <p className="text-text">
                  Their previous payment infrastructure did not offer real-time alerts or
                  early-warning systems. Without live monitoring, Healthletic couldn’t detect rising
                  dispute risk or adapt quickly to performance changes across campaigns,
                  subscriptions, or new customer cohorts.
                </p>
                <h3 className="text-xl font-medium md:text-3xl">Scaling Limitations</h3>
                <p className="text-text">
                  Healthletic faced bottlenecks when trying to increase volume. Rolling reserves,
                  slow MID provisioning, capped processing limits, and limited acquirer options
                  restricted their ability to scale subscriptions, reinvest revenue, and grow
                  aggressively.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="text-2xl font-medium md:text-4xl">Solutions Delivered</h2>

                <p className="text-text">
                  By accessing 35+ ISOs through your platform, Healthletic could route transactions
                  through the most reliable and risk-appropriate acquirer for each situation. This
                  flexibility helped improve approval rates and create a more stable foundation for
                  growth in a high-risk category.
                </p>
                <p className="text-text">
                  New MIDs could be issued rapidly through your portal, enabling Healthletic to
                  scale without long underwriting delays. The on-ramp/off-ramp PayFac capability
                  provided a flexible way to expand safely as volume increased.
                </p>
                <p className="text-text">
                  Your real-time dashboard gave Healthletic immediate visibility into performance
                  metrics, including declines, approvals, chargeback signals, and overall flow
                  health. This empowered the team to adjust routing strategies, optimize funnels,
                  and improve subscription performance based on live data.
                </p>
                <p className="text-text">
                  Early dispute alerts allowed Healthletic to intervene before chargebacks became
                  official. Integrated VAMP monitoring helped them detect elevated risk patterns and
                  take corrective action, lowering operational exposure.
                </p>
                <p className="text-text">
                  Your network includes acquirers that are familiar with supplement, wellness, and
                  health-product merchants. This reduced onboarding friction and helped Healthletic
                  maintain compliance by flagging risky transactions, improper billing flows, or
                  marketing elements that could raise regulatory concerns.
                </p>
                <p className="text-text">
                  Healthletic kept its existing gateways, but by operating through your payment
                  layer, they gained unified reporting, centralized monitoring, and significantly
                  simplified payment operations.
                </p>
              </div>
              <Outcome data={outcome} />
              <Benefits text="Healthletic experienced a meaningful reduction in compliance-related stress, since the platform connected them with banking partners familiar with their vertical. Their strengthened risk controls improved their standing with acquirers, making future approvals and negotiations smoother. Additionally, stable processing, fewer payment failures, and cleaner subscription flows improved customer trust and long-term retention." />
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default page;
