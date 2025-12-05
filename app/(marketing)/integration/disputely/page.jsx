import HeroStarter from '@/components/ui/HeroStarter';
import Image from 'next/image';
import CardImage from '@/assets/images/integration/disputely-card.svg';
import Features from '@/components/integration/Features';

import MonitorIcon from '@/assets/icons/integration/disputely/MonitorIcon';
import SearchIcon from '@/assets/icons/integration/disputely/SearchIcon';
import FileIcon from '@/assets/icons/integration/disputely/FileIcon';
import BellIcon from '@/assets/icons/integration/disputely/BellIcon';

const page = () => {
  return (
    <>
      <HeroStarter
        heading="Powerful Features Built for Every Merchant"
        text="From smart routing to fraud protection everything you need to scale securely."
        label="Disputely"
        maxWidth="800px"
      />
      <section className="border-border b-bottom border-dashed py-16 lg:py-20">
        <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-20 px-5">
          <article
            className={`grid w-full grid-cols-1 items-center gap-16 overflow-hidden rounded-xl p-6 shadow-[0px_4px_20px_2px_#0000001F] lg:grid-cols-2 lg:p-10`}
          >
            <div className={`flex flex-col gap-5`}>
              <h3 className="text-2xl font-medium lg:text-3xl">
                Early Chargeback Alerts & Monitoring
              </h3>
              <p className="text-text text-lg lg:text-xl">
                Receive notifications via Disputely’s alert network including Ethoca, RDR and CDRN
                and monitor your risk in real time with full visibility and control.
              </p>
            </div>
            <Image src={CardImage} alt="Chargeback Tracking" className={`h-auto w-full`} />
          </article>
        </section>
      </section>
      <Features
        title="Tools That Help You Stop Chargebacks Early"
        desp="Get real-time alerts and monitoring to prevent disputes and protect your revenue."
        data={[
          {
            icon: <BellIcon />,
            title: 'Active Alerts Network',
            description:
              'Access alerts from all major schemes to stop disputes before they escalate into chargebacks.',
          },
          {
            icon: <MonitorIcon />,
            title: 'VAMP & Portfolio Monitoring',
            description:
              'Track board-level risk and stay compliant with changes under Visa’s VAMP framework.',
          },
          {
            icon: <SearchIcon />,
            title: 'Root-Cause Insights',
            description:
              'Deep analytics that show trends, merchant-specific drivers, and actions to reduce loss.',
          },
          {
            icon: <FileIcon />,
            title: 'Full Evidence & Response Support',
            description:
              'Receive documentation and workflow tools to tackle chargebacks efficiently and reclaim revenue.',
          },
        ]}
      />
    </>
  );
};

export default page;
