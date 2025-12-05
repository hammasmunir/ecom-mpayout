import React from 'react';
import Starter from '../ui/Starter';
import AlertImage from '@/assets/images/insights/alerts.svg';
import FraudImage from '@/assets/images/insights/fraud-bg.svg';
import Image from 'next/image';

const Alerts = () => {
  return (
    <section id="alerts" className="border-border b-bottom border-dashed py-16 lg:py-20">
      <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-20 px-5">
        <Starter
          heading="Real-Time Alerts That Protect Your Revenue"
          text="Receive early chargeback notifications and automatic fraud flags so you can take action before losses happen."
          label="Alerts"
        />
        <section className="grid grid-cols-1 gap-6 rounded-xl p-10 shadow-[0px_4px_20px_2px_#0000001F] lg:grid-cols-[0.7fr_1fr]">
          <div className={`flex flex-col justify-center gap-5`}>
            <h3 className="text-2xl font-medium lg:text-3xl">
              Chargeback Alerts & Early Dispute Resolution
            </h3>
            <p className="text-text text-lg lg:text-xl">
              Get complete protection with all major alert systems in one place.
              <br />
              <br />
              We support Ethoca, RDR, CDRN, and CE3.0 to catch disputes early, notify you instantly,
              and stop chargebacks before they reach your MID.
              <br />
              <br />
              Resolve issues in real time, prevent revenue loss, and maintain a healthy chargeback
              ratio with industry-leading coverage.
            </p>
          </div>
          <div className="flex h-full items-center justify-center">
            <Image src={AlertImage} alt="Chargeback Alerts & Early Dispute Resolution" />
          </div>
        </section>
        <section className="grid grid-cols-1 gap-6 rounded-xl p-10 shadow-[0px_4px_20px_2px_#0000001F] lg:grid-cols-[1fr_0.7fr]">
          <div className="flex h-full items-center justify-center">
            <Image src={FraudImage} alt="Chargeback Alerts & Early Dispute Resolution" />
          </div>
          <div className={`flex flex-col justify-center gap-5`}>
            <h3 className="text-2xl font-medium lg:text-3xl">
              Advanced Fraud Detection & Risk Monitoring
            </h3>
            <p className="text-text text-lg lg:text-xl">
              Our system automatically flags high-risk customers, identifies repeat offenders, and
              highlights suspicious activity before it turns into a dispute.
              <br />
              <br />
              Stay fully protected with real-time fraud alerts, smart customer scoring, and
              automated warnings that help you prevent chargebacks before they ever occur.
            </p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Alerts;
