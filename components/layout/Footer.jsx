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
import Logo from '@/assets/images/main-logo.svg';
import XIcon from '@/assets/icons/social/XIcon';
import LinkedinIcon from '@/assets/icons/social/LinkedinIcon';
import InstagramIcon from '@/assets/icons/social/InstagramIcon';
import FBIcon from '@/assets/icons/social/FBIcon';
import DiscordIcon from '@/assets/icons/social/DiscordIcon';
import Button from '../ui/Button';

export default function Footer() {
  // Footer links data
  const footerLinks = {
    product: [
      { label: 'Processing', href: '/processing' },
      { label: 'Gateway', href: '/gateway' },
      { label: 'Insights', href: '/insights' },
      { label: 'Alerts', href: '/insights#alerts' },
    ],
    integrations: [
      { label: 'All Integrations', href: '/integration' },
      { label: 'Shopify', href: '/integration/shopify' },
      { label: 'Authorize.net', href: '/integration/authorized-net' },
      { label: 'Disputely', href: '/integration/disputely' },
    ],
    industries: [
      { label: 'E commerce', href: '/ecommerce' },
      { label: 'Retail', href: '/retail' },
    ],
    partners: [
      { label: 'Partner Program', href: '/partner-program' },
      { label: 'White Label Solutions', href: '/white-label-solutions' },
      { label: 'ISO Platform', href: '/iso-platform' },
    ],
    customers: [
      { label: 'All case studies', href: '/case-studies' },
      { label: 'Viberide', href: '/case-studies/viberide' },
      { label: 'Healthletic', href: '/case-studies/healthletic' },
      { label: 'OMNX', href: '/case-studies/omnx' },
    ],
    company: [
      { label: 'Who we are', href: '/who-are-we' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: '/contact' },
    ],
  };

  return (
    <footer className="w-full">
      <div className="w-full px-5 py-20">
        <div className="relative mx-auto flex min-h-[350px] max-w-[1420px] flex-col items-center justify-center overflow-hidden rounded-[36px] text-center md:min-h-[447px] lg:min-h-[490px]">
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

            <Button
              text="Secure your spot"
              icon={<MdArrowOutward />}
              variant="primary"
              className="z-10"
            />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}

      <div className="w-full border-t border-transparent">
        <div className="border-border mx-auto flex w-full max-w-[1480px] flex-col gap-12 border-t-[3px] border-dashed lg:flex-row lg:justify-between lg:pl-5">
          {/* LEFT SIDE */}
          <div className="flex w-full max-w-sm flex-col px-5 py-10 lg:px-20">
            <div className="">
              <Image
                src={Logo}
                alt="Footer Logo"
                className="w-full max-w-[200px] lg:max-w-[300px]"
              />
            </div>

            <div className="mt-7 flex items-center gap-4 text-xl">
              <XIcon />
              <LinkedinIcon />
              <InstagramIcon />
              <FBIcon />
              <DiscordIcon />
            </div>

            <div className="relative mt-7 w-full">
              <input
                type="text"
                placeholder="Enter your email"
                className="h-14 w-full rounded-lg bg-[#F5F5F5] px-4 pr-24 text-sm"
              />
              <button className="absolute top-1/2 right-2 h-11 -translate-y-1/2 rounded-md bg-blue-600 px-4 text-white">
                Send
              </button>
            </div>

            <div className="mt-7 hidden items-center justify-between gap-4 lg:flex">
              <Image src="/footer/pic.png" alt="Badge 1" width={123} height={45} />
              <Image src="/footer/secure.png" alt="Badge 2" width={117} height={45} />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex w-full flex-col lg:max-w-[600px]">
            {/* TOP ROW */}
            <div className="flex flex-col min-[380px]:flex-row min-[380px]:justify-between">
              <div className="border-border flex grow flex-col gap-2 border-b-[3px] border-dashed py-5 pr-5 pl-5 min-[380px]:border-r-[3px] min-[380px]:border-b-0 min-[380px]:pr-2 sm:pr-3 lg:pr-10">
                <h3 className="text-base font-medium min-[380px]:text-sm sm:text-lg lg:text-xl">
                  Product
                </h3>
                <ul className="text-text flex flex-col gap-2 text-sm min-[380px]:text-xs sm:text-xs lg:text-base">
                  {footerLinks.product.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="transition hover:text-gray-900">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-border flex grow flex-col gap-2 border-b-[3px] border-dashed px-5 py-5 min-[380px]:border-r-[3px] min-[380px]:border-b-0 min-[380px]:px-2 sm:px-3 lg:px-10">
                <h3 className="text-base font-medium min-[380px]:text-sm sm:text-lg lg:text-xl">
                  Integrations
                </h3>
                <ul className="text-text flex flex-col gap-2 text-sm min-[380px]:text-xs sm:text-xs lg:text-base">
                  {footerLinks.integrations.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="transition hover:text-gray-900">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-border flex grow flex-col gap-2 py-5 pr-5 pl-5 min-[380px]:pr-2 min-[380px]:pl-2 sm:pr-3 sm:pl-3 lg:pr-0 lg:pl-10">
                <h3 className="text-base font-medium min-[380px]:text-sm sm:text-lg lg:text-xl">
                  Industries
                </h3>
                <ul className="text-text flex flex-col gap-2 text-sm min-[380px]:text-xs sm:text-xs lg:text-base">
                  {footerLinks.industries.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="transition hover:text-gray-900">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* BOTTOM ROW */}
            <div className="border-border flex flex-col border-t-[3px] border-dashed min-[380px]:flex-row min-[380px]:justify-between">
              <div className="border-border flex grow flex-col gap-2 border-b-[3px] border-dashed py-5 pr-5 pl-5 min-[380px]:border-r-[3px] min-[380px]:border-b-0 min-[380px]:pr-2 sm:pr-3 lg:pr-10">
                <h3 className="text-base font-medium min-[380px]:text-sm sm:text-lg lg:text-xl">
                  Partners
                </h3>
                <ul className="text-text flex flex-col gap-2 text-sm min-[380px]:text-xs sm:text-xs lg:text-base">
                  {footerLinks.partners.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="transition hover:text-gray-900">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-border flex grow flex-col gap-2 border-b-[3px] border-dashed px-5 py-5 min-[380px]:border-r-[3px] min-[380px]:border-b-0 min-[380px]:px-2 sm:px-3 lg:px-10">
                <h3 className="text-base font-medium min-[380px]:text-sm sm:text-lg lg:text-xl">
                  Customers
                </h3>
                <ul className="text-text flex flex-col gap-2 text-sm min-[380px]:text-xs sm:text-xs lg:text-base">
                  {footerLinks.customers.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="transition hover:text-gray-900">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-border flex grow flex-col gap-2 py-5 pr-5 pl-5 min-[380px]:pr-2 min-[380px]:pl-2 sm:pr-3 sm:pl-3 lg:pr-5 lg:pl-10">
                <h3 className="text-base font-medium min-[380px]:text-sm sm:text-lg lg:text-xl">
                  Company
                </h3>
                <ul className="text-text flex flex-col gap-2 text-sm min-[380px]:text-xs sm:text-xs lg:text-base">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="transition hover:text-gray-900">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-[1480px] items-center justify-around gap-4 px-5 py-10 lg:hidden">
          <Image src="/footer/pic.png" alt="Badge 1" width={123} height={45} />
          <Image src="/footer/secure.png" alt="Badge 2" width={117} height={45} />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-border border-t-[3px] border-dashed py-7">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between px-5 md:flex-row">
          <p className="text-text text-base md:text-xl">
            &copy; 2024 EcomPayouts. All rights reserved.
          </p>
          <div className="text-text mt-4 flex space-x-6 text-base md:mt-0">
            <div>Terms of Service</div>
            <div>Privacy Policy</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
