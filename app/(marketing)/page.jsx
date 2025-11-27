import ImageCarousel from '@/components/product/ImageCarousel';

import ROICalculator from '../../components/product/ROICalculator';
import Label from '@/components/ui/Label';
import FlashIcon from '@/assets/icons/FlashIcon';
import Features from '@/components/product/Features';
import Hero from '@/components/product/Hero';
import Benefits from '@/components/product/Benefits';

export default function ProductPage() {
  return (
    <>
      <Hero />
      <ImageCarousel />
      <Features />
      <ROICalculator />
      <Benefits />
    </>
  );
}
