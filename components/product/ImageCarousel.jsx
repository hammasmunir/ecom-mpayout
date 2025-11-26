// components/ImageCarousel.jsx
'use client';

import Slider from 'react-slick';
import Image from 'next/image';

const images = [
  '/home/section2/logo 1.png',
  '/home/section2/logo 2.png',
  '/home/section2/logo 3.png',
  '/home/section2/logo 4.png',
  '/home/section2/logo 5.png',
  '/home/section2/logo 6.png',
  '/home/section2/logo 7.png',
  '/home/section2/logo 8.png',
  //   '/home/section2/logo 9.png',
  //   '/ihome/section2logo 10.png',
];

export default function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="p-2">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={500}
              height={70}
              className="h-[70px] w-full rounded-lg object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
