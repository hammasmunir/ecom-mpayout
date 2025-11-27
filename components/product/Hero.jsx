import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';
import Label from '../ui/Label';
import FlashIcon from '@/assets/icons/FlashIcon';
import HeroDesktop from '@/assets/images/hero-desk.svg';
import HeroMobile from '@/assets/images/hero-mobile.svg';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden px-6 sm:px-12 md:px-24">
      {/* ===== Background Image + Radial Gradient ===== */}
      <div className="absolute inset-0 -z-10 h-[50%] w-full">
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

          <button className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 sm:px-6 sm:py-3 sm:text-base">
            Secure your spot
            <MdArrowOutward size={20} />
          </button>
        </div>

        {/* ===== Dashboard + Group Image ===== */}
        <div className="relative -mt-16 w-full max-w-5xl">
          {/* Dashboard Image */}
          <Image src={HeroDesktop} alt="Dashboard preview" className="hidden w-full md:block" />
          <Image
            src={HeroMobile}
            alt="Dashboard preview mobile"
            className="block w-full md:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
