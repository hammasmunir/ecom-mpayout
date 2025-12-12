'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const IndustryDropdown = ({
  value,
  onChange,
  placeholder = 'Select an option',
  className = '',
  disabled = false,
  bgColor,
  groupedOptions = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownContentRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });

  const updatePosition = () => {
    if (dropdownRef.current) {
      const button = dropdownRef.current.querySelector('button');
      const element = button || dropdownRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        setPosition({
          top: rect.bottom + 8,
          left: rect.left,
          width: rect.width,
        });
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Use requestAnimationFrame to ensure DOM is ready and layout is complete
      requestAnimationFrame(() => {
        updatePosition();
      });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        dropdownContentRef.current &&
        !dropdownContentRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (isOpen) {
        updatePosition();
      }
    };

    const handleScroll = () => {
      if (isOpen) {
        updatePosition();
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    if (!disabled) {
      const newIsOpen = !isOpen;
      setIsOpen(newIsOpen);
      if (newIsOpen) {
        // Calculate position immediately when opening
        setTimeout(() => {
          updatePosition();
        }, 10);
      }
    }
  };

  const handleSelect = (option) => {
    if (onChange) {
      onChange(option);
    }
    setIsOpen(false);
  };

  const displayValue = value || placeholder;

  // Get risk level icon
  const getRiskIcon = (riskLevel) => {
    switch (riskLevel) {
      case 'Low-Risk':
        return (
          <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        );
      case 'Mid-Risk':
        return (
          <svg className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        );
      case 'High-Risk':
        return (
          <svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
              clipRule="evenodd"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const dropdownContent = isOpen && groupedOptions.length > 0 && (
    <div
      ref={dropdownContentRef}
      className="fixed z-[9999] max-h-[400px] overflow-y-auto rounded-lg border border-[#E5E7EB] bg-white shadow-lg"
      style={{
        top: position.top > 0 ? `${position.top}px` : 'auto',
        left: position.left > 0 ? `${position.left}px` : 'auto',
        width: position.width > 0 ? `${position.width}px` : '300px',
        minWidth: '200px',
        visibility: position.width > 0 ? 'visible' : 'hidden',
      }}
    >
      {groupedOptions.map((group, groupIndex) => (
        <div key={groupIndex} className="border-b border-gray-100 last:border-b-0">
          <div className="sticky top-0 z-10 flex items-center gap-2 bg-gray-50 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-gray-700">
            {getRiskIcon(group.label)}
            <span>{group.label} Industries</span>
          </div>
          {group.items && group.items.length > 0 ? (
            group.items.map((item, itemIndex) => (
              <button
                key={`${groupIndex}-${itemIndex}`}
                type="button"
                onClick={() => handleSelect(item)}
                className={`w-full px-4 py-2.5 text-left text-sm transition hover:bg-gray-100 ${
                  value === item ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-700'
                }`}
              >
                {item}
              </button>
            ))
          ) : null}
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className={`relative ${className}`} ref={dropdownRef}>
        <button
          type="button"
          onClick={toggleDropdown}
          disabled={disabled}
          className={`text-text flex w-full items-center justify-between rounded-lg border border-[#E5E7EB] px-4 py-3 text-left text-base font-medium shadow-[0px_3px_8px_0px_#00000014] transition hover:border-gray-400 ${
            disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
          }`}
          style={bgColor ? { backgroundColor: bgColor } : {}}
        >
          <span>{displayValue}</span>
          <svg
            className={`h-4 w-4 transform text-gray-500 transition ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      {typeof window !== 'undefined' && createPortal(dropdownContent, document.body)}
    </>
  );
};

export default IndustryDropdown;

