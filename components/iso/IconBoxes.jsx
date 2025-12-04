import DrumIcon from '@/assets/icons/iso/DrumIcon';
import GraphIcon from '@/assets/icons/iso/GraphIcon';
import StackIcon from '@/assets/icons/iso/StackIcon';
import TableIcon from '@/assets/icons/iso/TableIcon';

const IconBoxes = () => {
  const data = [
    {
      icon: <TableIcon />,
      title: 'Onboarding Under Your Brand',
      description: 'Board and manage new merchants easily from your own platform.',
    },
    {
      icon: <StackIcon />,
      title: 'Access to Multiple Banking Partners',
      description: 'Match merchants to the right bank quickly using our network.',
    },
    {
      icon: <DrumIcon />,
      title: 'Control Your Pricing and Margins',
      description: 'Set your own rates and keep the revenue you generate.',
    },
    {
      icon: <GraphIcon />,
      title: 'Real-Time Portfolio Monitoring',
      description: 'View live performance, risk, and activity across all accounts.',
    },
  ];

  return (
    <section className="border-border border-b-[3px] border-dashed py-16 lg:py-20">
      <section className="mx-auto grid max-w-[1440px] grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item, idx) => {
          const isLast = idx === data.length - 1;

          const smallScreen = !isLast ? 'border-b-[3px]' : '';

          const mdRightBorder = idx % 2 === 0 ? 'md:border-r-[3px]' : '';
          const mdNoBottom = 'md:border-b-0';

          const lgRightBorder = idx !== data.length - 1 ? 'lg:border-r-[3px]' : '';
          const lgNoBottom = 'lg:border-b-0';

          return (
            <article
              key={idx}
              className={`border-border flex flex-col items-start gap-3 border-dashed p-8 ${smallScreen} ${mdRightBorder} ${mdNoBottom} ${lgRightBorder} ${lgNoBottom} `}
            >
              {item.icon}
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="text-text">{item.description}</p>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default IconBoxes;
