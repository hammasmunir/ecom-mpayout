import Image from 'next/image';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';
import { RiTwitterXFill } from 'react-icons/ri';
import { PiLinkedinLogo } from 'react-icons/pi';
import { SlSocialInstagram } from 'react-icons/sl';
import { PiFacebookLogo } from 'react-icons/pi';
import { TfiGame } from 'react-icons/tfi';
import FooterBg from '@/assets/images/footer-bg.svg';
import FooterBgM from '@/assets/images/footer-bg-mobile.svg';
import DollarIcon from '@/assets/icons/DollarIcon';
import ThumbIcon from '@/assets/icons/ThumbIcon';
import WalletIcon from '@/assets/icons/WalletIcon';
import CardIcon from '@/assets/icons/CardIcon';
export default function Footer() {
  return (
    <footer className="w-full">
      <div className="w-full py-20">
        <div className="relative mx-auto flex min-h-[350px] max-w-[1440px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat px-6 text-center md:min-h-[447px] md:px-20 lg:min-h-[447px] lg:px-40">
          <Image
            src={FooterBg}
            alt="Footer Background"
            fill
            className="absolute inset-0 -z-10 hidden object-cover md:block"
            priority
          />
          <Image
            src={FooterBgM}
            alt="Footer Background"
            fill
            className="absolute inset-0 -z-10 block object-cover md:hidden"
            priority
          />
          <div className="absolute top-5 right-5 z-1 md:top-15 md:right-10">
            <DollarIcon />
          </div>
          <div className="absolute right-5 bottom-5 z-1 md:right-40 md:bottom-15">
            <WalletIcon />
          </div>
          <div className="absolute top-5 left-5 z-1 md:top-15 md:left-10">
            <ThumbIcon />
          </div>
          <div className="absolute bottom-5 left-5 z-1 md:bottom-15 md:left-30">
            <CardIcon />
          </div>

          <div className="flex min-h-[600px] max-w-[90%] flex-col items-center justify-center md:min-h-0 md:max-w-[700px]">
            <h2 className="z-5 mb-4 text-3xl font-bold text-white md:text-5xl lg:text-6xl">
              Let&apos;s Grow Your Business Without Limits
            </h2>

            <p className="z-5 mb-4 max-w-xl text-sm text-white md:text-base">
              EcomPayouts is your trusted partner for seamless e-commerce payouts. We provide
              reliable and efficient payment solutions tailored to your business needs.
            </p>

            <div className="z-5 flex flex-wrap justify-center gap-6 text-white">
              <Link href="/about" className="hover:text-gray-100">
                About Us
              </Link>
              <Link href="/contact" className="hover:text-gray-100">
                Contact
              </Link>
            </div>

            <button className="bg-primary-500 hover:text-primary-500 mt-6 rounded-full border-4 px-6 py-3 font-semibold text-white transition hover:bg-gray-100">
              <div className="flex items-center justify-center gap-2">
                <span>Secure your spot</span>
                <MdArrowOutward />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}

      <div className="">
        <div className="mx-auto flex max-w-[1440px] flex-col px-5 lg:flex-row lg:items-start lg:justify-between">
          {/* ------- LEFT SIDE ------- */}
          <div className="flex w-full flex-col items-start py-8 lg:w-auto lg:pl-20">
            <div className="h-[50px] w-[200px] md:w-[260px]">
              <Image
                src="/footer/logo.png"
                alt="Footer Logo"
                width={260}
                height={50}
                className="object-cover"
              />
            </div>

            {/* Social Icons */}
            <div className="mt-7 flex w-full justify-between text-xl md:w-[260px]">
              <RiTwitterXFill />
              <PiLinkedinLogo />
              <SlSocialInstagram />
              <PiFacebookLogo />
              <TfiGame />
            </div>

            {/* Input + Button */}
            <div className="relative mt-7 w-full md:w-[260px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="h-14 w-full rounded-lg border-gray-500 bg-[#F5F5F5] px-4 pr-20"
              />

              <button className="absolute top-1/2 right-2 h-11 -translate-y-1/2 rounded-md bg-blue-600 px-4 text-sm text-white">
                Send
              </button>
            </div>

            {/* Badges */}
            <div className="mt-7 flex w-full items-center justify-between md:w-[260px]">
              <Image src="/footer/pic.png" alt="Badge 1" width={123} height={45} />
              <Image src="/footer/secure.png" alt="Badge 2" width={117} height={45} />
            </div>
          </div>

          {/* ------- RIGHT SIDE ------- */}
          <div className="mt-12 flex w-full flex-col lg:mt-0 lg:w-auto">
            {/* TOP 3 COLUMNS */}
            <div className="grid grid-cols-3 sm:grid-cols-2 lg:flex lg:flex-row">
              {/* Product */}
              <div className="border-r border-b border-dashed border-gray-300 p-2 sm:border-b-0 md:p-8">
                <h3 className="mt-4 mb-4 text-xl font-medium">Product</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Processing</li>
                  <li>Gateway</li>
                  <li>Insights</li>
                  <li>Alerts</li>
                </ul>
              </div>

              {/* Integrations */}
              <div className="border-r border-b border-dashed border-gray-300 p-2 sm:border-b-0 md:p-8">
                <h3 className="mt-4 mb-4 text-xl font-medium">Integrations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>All Integrations</li>
                  <li>Shopify</li>
                  <li>Authorize.net</li>
                  <li>Disputely</li>
                </ul>
              </div>

              {/* Industries */}
              <div className="p-2 md:p-8">
                <h3 className="mt-4 mb-4 text-xl font-medium">Industries</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>E commerce</li>
                  <li>Retail</li>
                </ul>
              </div>
            </div>

            {/* BOTTOM 3 COLUMNS */}
            <div className="grid grid-cols-3 border-t border-dashed border-gray-300 sm:grid-cols-2 lg:flex lg:flex-row">
              {/* Partners */}
              <div className="border-r border-b border-dashed border-gray-300 p-2 sm:border-b-0 md:p-8">
                <h3 className="mt-4 mb-4 text-xl font-medium">Partners</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Partner Program</li>
                  <li>White Label Solutions</li>
                  <li>ISO Platform</li>
                </ul>
              </div>

              {/* Customers */}
              <div className="border-r border-b border-dashed border-gray-300 p-2 sm:border-b-0 md:p-8">
                <h3 className="mt-4 mb-4 text-xl font-medium">Customers</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>All case studies</li>
                  <li>Viberide</li>
                  <li>Healthletic</li>
                  <li>OMNX</li>
                </ul>
              </div>

              {/* Company */}
              <div className="p-2 md:p-8">
                <h3 className="mt-4 mb-4 text-xl font-medium">Company</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Who we are</li>
                  <li>Careers</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-8 py-7 md:px-24">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between px-5 md:flex-row">
          <p className="text-gray-[#525252] text-base md:text-xl">
            &copy; 2024 EcomPayouts. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 text-base text-gray-400 md:mt-0">
            <div>Terms of Service</div>
            <div>Privacy Policy</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
