// components/ImageCarousel.jsx
'use client';
import Slider from 'react-slick';
import Image from 'next/image';
import Lgoo1 from '@/assets/images/logos/logo-1.png';
import Lgoo2 from '@/assets/images/logos/logo-2.png';
import Lgoo3 from '@/assets/images/logos/logo-3.png';
import Lgoo4 from '@/assets/images/logos/logo-4.png';
import Lgoo5 from '@/assets/images/logos/logo-5.png';
import Lgoo6 from '@/assets/images/logos/logo-6.png';
import Lgoo7 from '@/assets/images/logos/logo-7.png';
import Lgoo8 from '@/assets/images/logos/logo-8.png';
const images = [Lgoo1, Lgoo2, Lgoo3, Lgoo4, Lgoo5, Lgoo6, Lgoo7, Lgoo8];

export default function ImageCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="icon-slide border-border b-bottom b-top mt-20 border-dashed" data-animate="fade-up">
      <section className="mx-auto max-w-[1440px] px-5">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="p-2">
              <Image src={src} alt={`Image ${index + 1}`} className="w-full max-w-[150px]" />
            </div>
          ))}
        </Slider>
      </section>
    </section>
  );
}
