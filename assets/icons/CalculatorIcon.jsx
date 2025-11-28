import React from 'react';

const CalculatorIcon = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_1_5078)">
        <rect width="40" height="40" rx="10" fill="#0357F0" />
        <rect x="1" y="1" width="38" height="38" rx="9" stroke="#DBE8FF" stroke-width="2" />
        <path
          d="M9.7568 30.2432C11.516 32 14.3432 32 20 32C25.6568 32 28.4852 32 30.242 30.242C32 28.4864 32 25.6568 32 20C32 14.3432 32 11.5148 30.242 9.7568C28.4864 8 25.6568 8 20 8C14.3432 8 11.5148 8 9.7568 9.7568C8 11.516 8 14.3432 8 20C8 25.6568 8 28.4864 9.7568 30.2432Z"
          stroke="white"
          stroke-width="1.5"
        />
        <path
          d="M27.2 15.7999H22.4M27.2 22.9999H22.4M27.2 26.5999H22.4M17.6 15.7999H15.2M15.2 15.7999H12.8M15.2 15.7999V13.3999M15.2 15.7999V18.1999M17 22.9999L15.2 24.7999M15.2 24.7999L13.4 26.5999M15.2 24.7999L13.4 22.9999M15.2 24.7999L17 26.5999"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_1_5078"
          x="0"
          y="0"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="8"
            operator="erode"
            in="SourceAlpha"
            result="effect1_innerShadow_1_5078"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_5078" />
        </filter>
      </defs>
    </svg>
  );
};

export default CalculatorIcon;
