'use client';

import Slider from 'react-slick';
import Starter from '../ui/Starter';
import RoutingIcon from '@/assets/icons/white-label/RoutingIcon';
import GatewayIcon from '@/assets/icons/white-label/GatewayIcon';
import ReportingIcon from '@/assets/icons/white-label/ReportingIcon';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import APIIcon from '@/assets/icons/white-label/APIIcon';

const FeatureCard = ({ title, description, icon }) => {
  return (
    <article className="flex h-full flex-col items-center justify-between gap-20 rounded-2xl bg-[#F5F5F5] p-6">
      <h3 className="w-full text-xl font-medium lg:text-2xl">{title}</h3>
      <div className="flex flex-1 items-center justify-center">{icon}</div>
      <p className="text-text w-full text-base lg:text-xl">{description}</p>
    </article>
  );
};

const CoreFeatures = () => {
  const cardData = [
    {
      title: 'Smart Routing + MIDs',
      description: 'Represents routing paths, logic, and multiple processors/MIDs.',
      icon: <RoutingIcon />,
    },
    {
      title: 'Custom Gateway',
      description: 'Accept payments globally using a gateway branded with your company identity.',
      icon: <GatewayIcon />,
    },
    {
      title: 'Powerful Reporting',
      description: 'Give clients real-time insights into sales, payouts, and chargebacks.',
      icon: <ReportingIcon />,
    },
    {
      title: 'Full API Access',
      description: 'Integrate your white-label platform with any tool or system you choose.',
      icon: <APIIcon />,
    },
  ];
  return (
    <section className="border-border b-bottom border-dashed py-16 lg:py-20">
      <section className="mx-auto mb-20 flex max-w-[1440px] flex-col gap-10 px-5 lg:gap-20">
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
      </section>
      <section className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 lg:gap-20">
        <div className="feature-carousel">
          <Slider
            dots={false}
            infinite={true}
            speed={500}
            arrows={false}
            slidesToShow={4}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            {cardData.map((card, index) => (
              <div key={index} className="h-full px-3">
                <FeatureCard title={card.title} description={card.description} icon={card.icon} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </section>
  );
};

export default CoreFeatures;
