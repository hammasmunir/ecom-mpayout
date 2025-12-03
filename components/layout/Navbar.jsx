'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import FullLogo from '@/assets/images/main-logo.svg';
import HalfLogo from '@/assets/images/half-logo.svg';
import ProcessingIcon from '@/assets/icons/menu/ProcessingIcon';
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
    dropdownWidth: 'w-full',
    columns: 4,
    cards: [
      {
        title: 'Processing',
        description: 'Fast, stable global payments',
        Icon: ProcessingIcon,
        href: '/processing',
      },
      { title: 'Gateway', description: 'Smart, secure integrations', Icon: GatewayIcon, href: '/gateway' },
      {
        title: 'Insights',
        description: 'Real-time performance tracking',
        Icon: InsightsIcon,
        href: '/insights',
      },
      {
        title: 'Alerts',
        description: 'Instant fraud & payout updates',
        Icon: AlertIcon,
        href: '/insights#alerts',
      },
    ],
    mobileLinks: [
      { label: 'Processing', href: '/processing' },
      { label: 'Gateway', href: '/gateway' },
      { label: 'Insights', href: '/insights' },
      { label: 'Alerts', href: '/insights#alerts' },
    ],
  },
  {
    title: 'Customers',
    type: 'mega',
    layout: 'customers',
    dropdownWidth: 'w-full',
    feature: {
      title: 'All case studies',
      description: 'See real success stories',
      Icon: CaseStudyIcon,
      href: '/case-studies',
    },
    logos: [
      {
        name: 'Viberide',
        image: ViberideLogo,
        width: 92,
        height: 30,
        href: '/case-studies/viberide',
      },
      {
        name: 'Healthletic',
        image: HealthleticLogo,
        width: 120,
        height: 30,
        href: '/case-studies/healthletic',
      },
      { name: 'OMNX', image: OmnxLogo, width: 90, height: 28, href: '/case-studies/omnx' },
    ],
    mobileLinks: [
      { label: 'All case studies', href: '/case-studies' },
      { label: 'Viberide', href: '/case-studies/viberide' },
      { label: 'Healthletic', href: '/case-studies/healthletic' },
      { label: 'OMNX', href: '/case-studies/omnx' },
    ],
  },
  {
    title: 'Industries',
    type: 'mega',
    layout: 'cards',
    dropdownWidth: 'w-full',
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
    dropdownWidth: 'w-full',
    columns: 3,
    cards: [
      {
        title: 'Partner Program',
        description: 'Earn more by partnering with us',
        Icon: PartnerProgramIcon,
        href: '/partner-program',
      },
      {
        title: 'White Label Solutions',
        description: 'Launch your own payment brand',
        Icon: WhiteLabelIcon,
      },
      { title: 'ISO Platform', description: 'Manage merchants under your account', Icon: IOSIcon },
    ],
    mobileLinks: [
      { label: 'Partner Program', href: '/partner-program' },
      { label: 'White Label' },
      { label: 'ISO Platform' },
    ],
  },
  {
    title: 'Integration',
    type: 'mega',
    layout: 'integration',
    dropdownWidth: 'w-full',
    feature: {
      title: 'All Integrations',
      description: 'Connect with any platform',
      Icon: IntegrationIcon,
      href: '/integration',
    },
    logos: [
      { name: 'Shopify', image: ShopifyLogo, width: 90, height: 26 },
      { name: 'Authorize.net', image: AuthorizeLogo, width: 120, height: 28 },
      { name: 'Disputely', image: DisputelyLogo, width: 110, height: 28 },
    ],
    mobileLinks: [
      { label: 'All Integrations', href: '/integration' },
      { label: 'Shopify' },
      { label: 'Authorize.net' },
      { label: 'Disputely' },
    ],
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
    dropdownWidth: 'w-full',
    feature: {
      title: 'Who we are',
      description: 'Learn about our mission',
      Icon: WhoAreWeIcon,
      href: '/who-are-we',
    },
    cards: [
      {
        title: 'Careers',
        description: 'Grow with a team that cares',
        Icon: CareersIcon,
        href: '/careers',
      },
      {
        title: 'Contact Us',
        description: "We're here to help you",
        Icon: ContactIcon,
        href: '/contact',
      },
    ],
    mobileLinks: [
      { label: 'Who we are', href: '/who-are-we' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
];

const MegaMenuShell = ({ children, className = '' }) => (
  <div className={`mega-menu-shell rounded-[28px] p-5 text-gray-900 ${className}`}>
    <div className="space-y-4">{children}</div>
  </div>
);

const MegaMenuCard = ({ title, description, Icon, className = '', href }) => {
  const cardClasses = `flex h-full flex-col justify-between rounded-[20px] bg-white p-5 text-left shadow-md transition hover:-translate-y-0.5 hover:shadow-lg ${className}`;
  const content = (
    <div className={cardClasses}>
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

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
};

const MegaMenuLogoList = ({ logos }) => (
  <div className="flex flex-col gap-3">
    {logos.map((logo) => {
      const content = (
        <div className="flex h-full items-center justify-between rounded-[20px] bg-white px-4 py-3 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
          <span className="text-sm font-medium text-gray-700">{logo.name}</span>
          <Image
            src={logo.image}
            alt={logo.name}
            width={logo.width}
            height={logo.height}
            className="w-full max-w-[60px]"
          />
        </div>
      );

      if (logo.href) {
        return (
          <Link key={logo.name} href={logo.href} className="block h-full">
            {content}
          </Link>
        );
      }

      return (
        <div key={logo.name} className="block h-full">
          {content}
        </div>
      );
    })}
  </div>
);

const renderMegaMenuContent = (item) => {
  const shellWidthClass = `mx-auto ${item.dropdownWidth || 'w-full'}`;
  switch (item.layout) {
    case 'cards': {
      const columnClass =
        {
          2: 'lg:grid-cols-2',
          3: 'lg:grid-cols-3',
          4: 'lg:grid-cols-4',
        }[item.columns || item.cards.length] || 'lg:grid-cols-3';

      return (
        <MegaMenuShell className={shellWidthClass}>
          <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${columnClass} `}>
            {item.cards.map((card) => (
              <MegaMenuCard key={card.title} {...card} />
            ))}
          </div>
        </MegaMenuShell>
      );
    }
    case 'customers':
      return (
        <MegaMenuShell className={shellWidthClass}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.2fr_1fr]">
            <MegaMenuCard {...item.feature} />
            <MegaMenuLogoList logos={item.logos} />
          </div>
        </MegaMenuShell>
      );
    case 'integration':
      return (
        <MegaMenuShell className={shellWidthClass}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.2fr_1fr]">
            <MegaMenuCard {...item.feature} />
            <MegaMenuLogoList logos={item.logos} />
          </div>
        </MegaMenuShell>
      );
    case 'company':
      return (
        <MegaMenuShell className={shellWidthClass}>
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

const formatMobileSection = (section) =>
  typeof section === 'string' ? { label: section } : section;

const getMobileSections = (item) => {
  if (item.type === 'link') return [];
  if (item.mobileLinks) return item.mobileLinks.map(formatMobileSection);
  if (item.cards) return item.cards.map((card) => ({ label: card.title, href: card.href }));
  if (item.feature)
    return [formatMobileSection({ label: item.feature.title, href: item.feature.href })];
  return [];
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const hideTimeoutRef = useRef(null);
  const activeMegaItem = navItems.find(
    (item) => item.title === activeDropdown && item.type !== 'link'
  );

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
      <div
        className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[32px] border border-[#EBEBEB] bg-white/40 px-4 backdrop-blur-xs sm:px-6 lg:px-8"
        onMouseLeave={handleMenuLeave}
      >
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
                >
                  <button className="flex items-center text-sm font-medium whitespace-nowrap text-gray-700 transition-all duration-300 hover:text-blue-600 xl:text-base">
                    {item.title}
                    <FiChevronDown
                      className={`ml-1 h-3 w-3 transition-transform duration-300 xl:h-4 xl:w-4 ${
                        isActive ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
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

        {/* Desktop Mega Menu rendered inside glass panel */}
        <div className="hidden lg:block">
          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              activeMegaItem
                ? 'pointer-events-auto max-h-[560px] opacity-100'
                : 'pointer-events-none max-h-0 opacity-0'
            }`}
            onMouseEnter={() => activeDropdown && handleMenuEnter(activeDropdown)}
          >
            {activeMegaItem && (
              <div className="pt-4 pb-6">{renderMegaMenuContent(activeMegaItem)}</div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu with Smooth Animation */}
      <div
        ref={mobileMenuRef}
        className={`absolute top-full right-4 left-4 z-50 translate-y-3 transform overflow-hidden rounded-2xl border border-gray-200 bg-white/70 shadow-2xl backdrop-blur-xs transition-all duration-500 ease-in-out lg:hidden ${
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
                    {sections.map((section, index) => {
                      const key = section.label || section;
                      const commonClasses =
                        'block transform rounded-lg px-3 py-3 text-sm text-gray-600 transition-all duration-300 hover:translate-x-3 hover:bg-blue-100 hover:text-blue-600';
                      const style = {
                        transitionDelay: activeDropdown === item.title ? `${index * 80}ms` : '0ms',
                      };

                      if (section.href) {
                        return (
                          <Link
                            key={key}
                            href={section.href}
                            className={commonClasses}
                            style={style}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {section.label}
                          </Link>
                        );
                      }

                      return (
                        <div key={key} className={commonClasses} style={style}>
                          {section.label || section}
                        </div>
                      );
                    })}
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
