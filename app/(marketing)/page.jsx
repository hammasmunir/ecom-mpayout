import ImageCarousel from '@/components/product/ImageCarousel';
import ROICalculator from '../../components/product/ROICalculator';
import Features from '@/components/product/Features';
import Hero from '@/components/product/Hero';
import Benefits from '@/components/product/Benefits';
import FAQs from '@/components/product/FAQs';
import WhyChooseUs from '@/components/product/WhyChooseUs';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

export default function ProductPage() {
  return (
    <>
      <ScrollAnimator />
      <Hero />
      <ImageCarousel />
      <Features />
      <WhyChooseUs />
      <Benefits />
      <ROICalculator />
      <FAQs />
    </>
  );
}
