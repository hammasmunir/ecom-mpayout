'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import FullLogo from '@/assets/images/main-logo.svg';
import HalfLogo from '@/assets/images/half-logo.svg';
import ProcessingIcon from '@/assets/icons/menu/GatewayIcon';
import GatewayIcon from '@/assets/icons/menu/GatewayIcon';
import InsightsIcon from '@/assets/icons/menu/InsightsIcon';
import AlertIcon from '@/assets/icons/menu/AlertIcon';
import CaseStudyIcon from '@/assets/icons/menu/CaseStudyIcon';
import EcommerceIcon from '@/assets/icons/menu/EcommerceIcon';
import RetailIcon from '@/assets/icons/menu/RetailIcon';
import PartnerProgramIcon from '@/assets/icons/menu/PartnerProgram';
import WhiteLabelIcon from '@/assets/icons/menu/WhiteLabel';
import IOSIcon from '@/assets/icons/menu/IOSIcon';
import IntegrationIcon from '@/assets/icons/menu/IntegrationIcon';
import WhoAreWeIcon from '@/assets/icons/menu/WhoAreWeIcon';
import CareersIcon from '@/assets/icons/menu/CareersIcon';
import ContactIcon from '@/assets/icons/menu/ContactIcon';
import ShopifyLogo from '@/assets/images/menu/shopify.svg';
import AuthorizeLogo from '@/assets/images/menu/authorized.svg';
import DisputelyLogo from '@/assets/images/menu/disputely.svg';
import ViberideLogo from '@/assets/images/menu/viberide.svg';
import HealthleticLogo from '@/assets/images/menu/Healthletic.svg';
import OmnxLogo from '@/assets/images/menu/omnx.svg';

const navItems = [
  {
    title: 'Product',
    type: 'mega',
    layout: 'cards',
    dropdownWidth: 'w-[980px]',
    columns: 4,
    cards: [
      { title: 'Processing', description: 'Fast, stable global payments', Icon: ProcessingIcon },
      { title: 'Gateway', description: 'Smart, secure integrations', Icon: GatewayIcon },
      { title: 'Insights', description: 'Real-time performance tracking', Icon: InsightsIcon },
      { title: 'Alerts', description: 'Instant fraud & payout updates', Icon: AlertIcon },
    ],
    mobileLinks: ['Processing', 'Gateway', 'Insights', 'Alerts'],
  },
  {
    title: 'Customers',
    type: 'mega',
    layout: 'customers',
    dropdownWidth: 'w-[920px]',
    feature: {
      title: 'All case studies',
      description: 'See real success stories',
      Icon: CaseStudyIcon,
    },
    logos: [
      { name: 'Viberide', image: ViberideLogo, width: 92, height: 30 },
      { name: 'Healthletic', image: HealthleticLogo, width: 120, height: 30 },
      { name: 'OMNX', image: OmnxLogo, width: 90, height: 28 },
    ],
    mobileLinks: ['All case studies', 'Viberide', 'Healthletic', 'OMNX'],
  },
  {
    title: 'Industries',
    type: 'mega',
    layout: 'cards',
    dropdownWidth: 'w-[760px]',
    columns: 2,
    cards: [
      { title: 'E commerce', description: 'Online payments made easy', Icon: EcommerceIcon },
      { title: 'Retail', description: 'Fast, secure in-store transactions', Icon: RetailIcon },
    ],
    mobileLinks: ['E commerce', 'Retail'],
  },
  {
    title: 'Partners',
    type: 'mega',
    layout: 'cards',
    dropdownWidth: 'w-[900px]',
    columns: 3,
    cards: [
      {
        title: 'Partner Program',
        description: 'Earn more by partnering with us',
        Icon: PartnerProgramIcon,
      },
      {
        title: 'White Label Solutions',
        description: 'Launch your own payment brand',
        Icon: WhiteLabelIcon,
      },
      { title: 'ISO Platform', description: 'Manage merchants under your account', Icon: IOSIcon },
    ],
    mobileLinks: ['Partner Program', 'White Label', 'ISO Platform'],
  },
  {
    title: 'Integration',
    type: 'mega',
    layout: 'integration',
    dropdownWidth: 'w-[920px]',
    feature: {
      title: 'All Integrations',
      description: 'Connect with any platform',
      Icon: IntegrationIcon,
    },
    logos: [
      { name: 'Shopify', image: ShopifyLogo, width: 90, height: 26 },
      { name: 'Authorize.net', image: AuthorizeLogo, width: 120, height: 28 },
      { name: 'Disputely', image: DisputelyLogo, width: 110, height: 28 },
    ],
    mobileLinks: ['All Integrations', 'Shopify', 'Authorize.net', 'Disputely'],
  },
  {
    title: 'Pricing',
    type: 'link',
    href: '/pricing',
  },
  {
    title: 'Company',
    type: 'mega',
    layout: 'company',
    dropdownWidth: 'w-[860px]',
    feature: {
      title: 'Who we are',
      description: 'Learn about our mission',
      Icon: WhoAreWeIcon,
    },
    cards: [
      { title: 'Careers', description: 'Grow with a team that cares', Icon: CareersIcon },
      { title: 'Contact Us', description: "We're here to help you", Icon: ContactIcon },
    ],
    mobileLinks: ['Who we are', 'Careers', 'Contact Us'],
  },
];

const MegaMenuShell = ({ children }) => (
  <div className="rounded-[28px] bg-white/90 p-5 text-gray-900 shadow-2xl ring-1 ring-white/60 backdrop-blur-xl">
    <div className="space-y-4">{children}</div>
  </div>
);

const MegaMenuCard = ({ title, description, Icon, className = '' }) => (
  <div
    className={`flex h-full flex-col justify-between rounded-[20px] bg-white p-5 text-left shadow-sm ${className}`}
  >
    <div>
      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </div>
    {Icon && (
      <div className="mt-4">
        <Icon />
      </div>
    )}
  </div>
);

const MegaMenuLogoList = ({ logos }) => (
  <div className="flex flex-col gap-3">
    {logos.map((logo) => (
      <div
        key={logo.name}
        className="flex items-center justify-between rounded-[20px] bg-white px-4 py-3 shadow-sm"
      >
        <span className="text-sm font-medium text-gray-700">{logo.name}</span>
        <Image
          src={logo.image}
          alt={logo.name}
          width={logo.width}
          height={logo.height}
          className="h-6 w-auto"
        />
      </div>
    ))}
  </div>
);

const renderMegaMenuContent = (item) => {
  switch (item.layout) {
    case 'cards': {
      const columnClass =
        {
          2: 'lg:grid-cols-2',
          3: 'lg:grid-cols-3',
          4: 'lg:grid-cols-4',
        }[item.columns || item.cards.length] || 'lg:grid-cols-3';

      return (
        <MegaMenuShell>
          <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${columnClass}`}>
            {item.cards.map((card) => (
              <MegaMenuCard key={card.title} {...card} />
            ))}
          </div>
        </MegaMenuShell>
      );
    }
    case 'customers':
      return (
        <MegaMenuShell>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.2fr_1fr]">
            <MegaMenuCard {...item.feature} />
            <MegaMenuLogoList logos={item.logos} />
          </div>
        </MegaMenuShell>
      );
    case 'integration':
      return (
        <MegaMenuShell>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.2fr_1fr]">
            <MegaMenuCard {...item.feature} />
            <MegaMenuLogoList logos={item.logos} />
          </div>
        </MegaMenuShell>
      );
    case 'company':
      return (
        <MegaMenuShell>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.2fr_0.8fr]">
            <MegaMenuCard {...item.feature} />
            <div className="flex flex-col gap-3">
              {item.cards.map((card) => (
                <MegaMenuCard key={card.title} {...card} className="h-full" />
              ))}
            </div>
          </div>
        </MegaMenuShell>
      );
    default:
      return null;
  }
};

const getMobileSections = (item) => {
  if (item.type === 'link') return [];
  if (item.mobileLinks) return item.mobileLinks;
  if (item.cards) return item.cards.map((card) => card.title);
  return [];
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  const handleMenuEnter = (title) => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    setActiveDropdown(title);
  };

  const handleMenuLeave = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <nav className="sticky top-0 z-50 w-full px-5 transition-all duration-300">
      <div className="relative mx-auto w-full max-w-[1440px] rounded-full border border-[#EBEBEB] px-4 backdrop-blur-md sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-5">
          {/* Logo */}
          <div className="">
            <Link
              href="/"
              className="text-xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600 sm:text-2xl"
            >
              <Image src={FullLogo} className="hidden lg:block" alt="Full Logo" />
              <Image src={HalfLogo} className="block lg:hidden" alt="Half Logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-4 lg:flex xl:space-x-6">
            {navItems.map((item) => {
              if (item.type === 'link') {
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-sm font-medium whitespace-nowrap text-gray-700 transition hover:text-blue-600 xl:text-base"
                  >
                    {item.title}
                  </Link>
                );
              }

              const isActive = activeDropdown === item.title;
              return (
                <div
                  key={item.title}
                  className="group"
                  onMouseEnter={() => handleMenuEnter(item.title)}
                  onMouseLeave={handleMenuLeave}
                >
                  <button className="flex items-center text-sm font-medium whitespace-nowrap text-gray-700 transition-all duration-300 hover:text-blue-600 xl:text-base">
                    {item.title}
                    <FiChevronDown
                      className={`ml-1 h-3 w-3 transition-transform duration-300 xl:h-4 xl:w-4 ${
                        isActive ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute top-full left-1/2 z-50 w-screen max-w-[1440px] -translate-x-1/2 px-4 pt-4 transition-all duration-300 ${
                      isActive
                        ? 'pointer-events-auto visible translate-y-0 opacity-100'
                        : 'pointer-events-none invisible -translate-y-3 opacity-0'
                    }`}
                  >
                    {renderMegaMenuContent(item)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden items-center space-x-3 lg:flex xl:space-x-4">
            <button className="transform text-sm font-medium whitespace-nowrap text-gray-700 transition-all duration-300 hover:scale-105 hover:text-blue-600 xl:text-base">
              Sign In
            </button>
            <button className="transform rounded-full bg-blue-600 px-3 py-2 text-sm font-medium whitespace-nowrap text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-lg xl:px-4 xl:text-base">
              Book a Call
            </button>
          </div>

          {/* Tablet/Mobile Buttons - Visible on medium screens */}
          {/* <div className="hidden items-center space-x-3 md:flex lg:hidden">
            <button className="text-sm font-medium text-gray-700 transition-all duration-300 hover:text-blue-600">
              Sign In
            </button>
            <button className="rounded-full bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700">
              Book Call
            </button>
          </div> */}

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="transform p-2 text-gray-700 transition-all duration-300 hover:scale-110 hover:text-blue-600"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FiX size={20} className="rotate-90 transition-transform duration-300" />
              ) : (
                <FiMenu size={20} className="transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Smooth Animation */}
      <div
        ref={mobileMenuRef}
        className={`absolute top-full right-4 left-4 z-50 transform overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl transition-all duration-500 ease-in-out lg:hidden ${
          isMobileMenuOpen
            ? 'max-h-[80vh] translate-y-0 scale-100 opacity-100'
            : 'max-h-0 -translate-y-4 scale-95 opacity-0'
        }`}
        style={{
          transition: 'max-height 500ms ease-in-out, opacity 400ms ease, transform 400ms ease',
        }}
      >
        <div className="space-y-0 px-6 py-4">
          {/* Mobile Navigation Links */}
          {navItems.map((item) => {
            if (item.type === 'link') {
              return (
                <div key={item.title} className="border-b border-gray-100 last:border-b-0">
                  <Link
                    href={item.href}
                    className="block py-4 text-base font-medium text-gray-700 transition hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </div>
              );
            }

            const sections = getMobileSections(item);
            return (
              <div key={item.title} className="border-b border-gray-100 last:border-b-0">
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === item.title ? null : item.title)
                  }
                  className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-gray-700 transition-all duration-300 hover:text-blue-600"
                >
                  <span className="transition-transform duration-300 hover:translate-x-2">
                    {item.title}
                  </span>
                  <FiChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      activeDropdown === item.title ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    activeDropdown === item.title ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="mx-2 my-2 space-y-2 rounded-xl bg-gray-50 p-2 pb-3 pl-4">
                    {sections.map((section, index) => (
                      <div
                        key={section}
                        className="block transform rounded-lg px-3 py-3 text-sm text-gray-600 transition-all duration-300 hover:translate-x-3 hover:bg-blue-100 hover:text-blue-600"
                        style={{
                          transitionDelay:
                            activeDropdown === item.title ? `${index * 80}ms` : '0ms',
                        }}
                      >
                        {section}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Mobile Buttons */}
          <div className="mt-2 space-y-3 border-t border-gray-200 pt-6 pb-4">
            <button
              className="w-full transform rounded-xl border-2 border-gray-200 py-4 text-center text-base font-medium text-gray-700 transition-all duration-300 hover:scale-105 hover:border-blue-600 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </button>
            <button
              className="w-full transform rounded-xl bg-blue-600 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className={`bg-opacity-20 fixed inset-0 z-40 transition-opacity duration-500 ease-in-out lg:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
