import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';
import Label from '../ui/Label';
import FlashIcon from '@/assets/icons/FlashIcon';
import HeroDesktop from '@/assets/images/hero-simple.svg';
import HeroMobile from '@/assets/images/hero-mobile.svg';
import Button from '../ui/Button';
import ThumbIcon from '@/assets/icons/hero-icons/ThumbIcon';
import DollarIcon from '@/assets/icons/hero-icons/DollarIcon';
import WalletIcon from '@/assets/icons/hero-icons/WalletIcon';
import CardIcon from '@/assets/icons/hero-icons/CardIcon';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden px-6 sm:px-12 md:px-24">
      {/* ===== Background Image + Radial Gradient ===== */}
      <div className="absolute inset-0 -z-10 mx-auto h-[50%] w-full max-w-[1440px]">
        <Image src="/home/section1/grid.png" alt="Background Grid" fill className="object-cover" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,#ffffff_100%)]" />
      </div>

      {/* ===== Center Content ===== */}
      <div className="relative z-10 mx-auto mt-20 flex max-w-[1440px] flex-col items-center justify-center gap-4 px-5 text-center sm:mt-24 md:mt-28">
        <div className="flex max-w-4xl flex-col items-center gap-4">
          <Label text="Trusted by 35+ Banks Worldwide" icon={<FlashIcon />} />
          <h1 className="mb-4 px-5 text-3xl font-semibold text-gray-900 sm:px-0 md:text-4xl lg:text-6xl">
            The Most Reliable Payments for High-Risk Merchants.
          </h1>

          <p className="text-text mb-6 max-w-xl px-2 text-base sm:max-w-2xl sm:px-0 sm:text-lg md:text-xl">
            Get approved fast, process globally, and never worry about sudden holds or bans again.
          </p>

          <Button
            text="Secure your spot"
            className="z-10"
            icon={<MdArrowOutward size={20} />}
            variant="primary"
          />
        </div>

        {/* ===== Dashboard + Group Image ===== */}
        <div className="hero-div relative mt-10 w-full max-w-5xl">
          {/* Dashboard Image */}
          <Image src={HeroDesktop} alt="Dashboard preview" className="hidden w-full md:block" />
          <Image
            src={HeroMobile}
            alt="Dashboard preview mobile"
            className="block w-full md:hidden"
          />
          <div className="hero-icon-pop absolute -top-40 left-20 delay-1">
            <ThumbIcon />
          </div>
          <div className="hero-icon-pop absolute -top-40 right-20 delay-2">
            <DollarIcon />
          </div>
          <div className="hero-icon-pop absolute -top-25 right-50 delay-3">
            <WalletIcon />
          </div>
          <div className="hero-icon-pop absolute -top-25 left-50 delay-4">
            <CardIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
