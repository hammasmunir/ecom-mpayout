import HeroStarter from '@/components/ui/HeroStarter';
import Turning from '@/components/processing/Turning';
import Difference from '@/components/processing/Difference';

const page = () => {
  return (
    <>
      <HeroStarter
        heading="The Smarter, Safer Way to Process Payments"
        text="Discover how dedicated bank processing ends bans, freezes, and shared risk giving your business stability, control, and lasting freedom."
        label="Processing"
        maxWidth="800px"
      />
      <Turning />
      <Difference />
    </>
  );
};

export default page;
