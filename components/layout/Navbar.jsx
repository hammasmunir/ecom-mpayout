'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import FullLogo from '@/assets/images/main-logo.svg';
import HalfLogo from '@/assets/images/half-logo.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
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

  // Navigation data with dropdown items
  const navItems = [
    {
      title: 'Products',
      links: [
        { name: 'Product 1', href: '/product1' },
        { name: 'Product 2', href: '/product2' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Service 1', href: '/service1' },
        { name: 'Service 2', href: '/service2' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Solution 1', href: '/solution1' },
        { name: 'Solution 2', href: '/solution2' },
      ],
    },
    {
      title: 'Pricing',
      links: [
        { name: 'Plans', href: '/plans' },
        { name: 'Enterprise', href: '/enterprise' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Tutorials', href: '/tutorials' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { name: 'Support', href: '/support' },
        { name: 'Sales', href: '/sales' },
      ],
    },
  ];

  return (
    <nav className={`sticky top-0 z-50 w-full px-5 transition-all duration-300`}>
      <div className="mx-auto w-full max-w-[1440px] rounded-full border border-[#EBEBEB] px-4 backdrop-blur-md sm:px-6 lg:px-8">
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
            {/* Navigation Links with Dropdowns */}
            {navItems.map((item, index) => (
              <div
                key={item.title}
                className="group relative"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-sm font-medium whitespace-nowrap text-gray-700 transition-all duration-300 hover:text-blue-600 xl:text-base">
                  {item.title}
                  <FiChevronDown
                    className={`ml-1 h-3 w-3 transition-transform duration-300 xl:h-4 xl:w-4 ${
                      activeDropdown === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu with Smooth Animation */}
                <div
                  className={`absolute top-full left-1/2 z-50 w-48 origin-top -translate-x-1/2 transform rounded-xl border border-gray-100 bg-white py-2 shadow-xl transition-all duration-300 ${
                    activeDropdown === index
                      ? 'visible translate-y-0 scale-100 opacity-100'
                      : 'invisible -translate-y-2 scale-95 opacity-0'
                  }`}
                  style={{
                    transition: 'opacity 300ms ease, transform 300ms ease, visibility 300ms ease',
                  }}
                >
                  {item.links.map((link, linkIndex) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block transform rounded-lg px-4 py-3 text-sm text-gray-700 transition-all duration-250 hover:translate-x-2 hover:bg-blue-50 hover:text-blue-600"
                      style={{
                        transitionDelay: activeDropdown === index ? `${linkIndex * 50}ms` : '0ms',
                      }}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
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
          {navItems.map((item, index) => (
            <div key={item.title} className="border-b border-gray-100 last:border-b-0">
              <button
                onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
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

              {/* Mobile Dropdown with Smooth Animation */}
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${activeDropdown === item.title ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="mx-2 my-2 space-y-2 rounded-xl bg-gray-50 p-2 pb-3 pl-4">
                  {item.links.map((link, linkIndex) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block transform rounded-lg px-3 py-3 text-sm text-gray-600 transition-all duration-300 hover:translate-x-3 hover:bg-blue-100 hover:text-blue-600"
                      style={{
                        transitionDelay:
                          activeDropdown === item.title ? `${linkIndex * 80}ms` : '0ms',
                      }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}

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
