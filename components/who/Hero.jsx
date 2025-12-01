import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';
import Label from '../ui/Label';
import FlashIcon from '@/assets/icons/FlashIcon';
import HeroDesktop from '@/assets/images/hero-desk.svg';
import HeroMobile from '@/assets/images/hero-mobile.svg';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden px-6 sm:px-12 md:px-24">
      {/* ===== Center Content ===== */}
      <div className="relative z-10 mx-auto mt-20 flex max-w-[1440px] flex-col items-center justify-center gap-4 px-5 text-center sm:mt-24 md:mt-28">
        <div className="flex max-w-4xl flex-col items-center gap-4">
          <Label text="Who we are" />
          <h1 className="mb-4 px-5 text-3xl font-semibold text-gray-900 sm:px-0 md:text-4xl lg:text-6xl">
            Confidence in Every Transaction You Make
          </h1>

          <p className="text-text mb-6 max-w-xl px-2 text-base sm:max-w-2xl sm:px-0 sm:text-lg md:text-xl">
            Gain complete confidence with a payment system that shows you every sale, payout, and
            dispute in real time{' '}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
