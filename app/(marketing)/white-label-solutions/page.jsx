import HeroStarter from '@/components/ui/HeroStarter';
import Brand from '@/components/white-label/Brand';
import CoreFeatures from '@/components/white-label/CoreFeatures';

const page = () => {
  return (
    <>
      <HeroStarter
        heading="Launch Your Own Payment Platform"
        text="Offer your clients a fully branded gateway, dashboard, and merchant onboarding system powered by our infrastructure."
        label="White Label Solutions"
        maxWidth="800px"
      />
      <Brand />
      <CoreFeatures />
    </>
  );
};

export default page;
