'use client';

import React, { useEffect, useRef, useState } from 'react';

const Dropdown = ({
  options = [],
  value,
  onChange,
  placeholder = 'Select an option',
  className = '',
  disabled = false,
  bgColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  };

  const handleSelect = (option) => {
    if (onChange) {
      onChange(option);
    }
    setIsOpen(false);
  };

  const displayValue = value || placeholder;

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        disabled={disabled}
        className={`flex w-full items-center justify-between rounded-lg border border-[#E5E7EB] px-4 py-3 text-left text-base font-medium text-gray-900 transition hover:border-gray-400 ${
          disabled ? 'cursor-not-allowed opacity-50' : ''
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
      {isOpen && (
        <div className="absolute right-0 left-0 z-10 mt-2 overflow-hidden rounded-lg border border-[#E5E7EB] bg-white shadow-lg">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelect(option)}
              className={`w-full px-4 py-2 text-left text-sm transition hover:bg-gray-100 ${
                value === option ? 'bg-gray-50 font-semibold' : ''
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
