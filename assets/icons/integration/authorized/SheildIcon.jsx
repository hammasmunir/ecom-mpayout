import React from 'react';

const SheildIcon = () => {
  return (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_1_2631)">
        <rect width="54" height="54" rx="12" fill="#0357F0" />
        <rect
          x="1.75"
          y="1.75"
          width="50.5"
          height="50.5"
          rx="10.25"
          stroke="#DBE8FF"
          stroke-width="3.5"
        />
        <path
          d="M37.8333 15H16.1667C15.592 15 15.0409 15.2276 14.6346 15.6326C14.2283 16.0377 14 16.5871 14 17.16V24.72C14 31.8372 17.4558 36.1504 20.3551 38.5156C23.4778 41.0617 26.5843 41.927 26.7197 41.9621C26.9059 42.0126 27.1022 42.0126 27.2884 41.9621C27.4239 41.927 30.5263 41.0617 33.653 38.5156C36.5442 36.1504 40 31.8372 40 24.72V17.16C40 16.5871 39.7717 16.0377 39.3654 15.6326C38.9591 15.2276 38.408 15 37.8333 15ZM37.8333 24.72C37.8333 29.7244 35.9835 33.7865 32.3354 36.7916C30.7474 38.0953 28.9413 39.1099 27 39.7886C25.0841 39.1217 23.3003 38.1252 21.7296 36.8443C18.0381 33.8338 16.1667 29.7555 16.1667 24.72V17.16H37.8333V24.72Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_1_2631"
          x="0"
          y="0"
          width="54"
          height="54"
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
            result="effect1_innerShadow_1_2631"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_2631" />
        </filter>
      </defs>
    </svg>
  );
};

export default SheildIcon;
