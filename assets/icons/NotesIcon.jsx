import React from 'react';

const NotesIcon = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_1_5105)">
        <rect width="40" height="40" rx="10" fill="#0357F0" />
        <rect x="1" y="1" width="38" height="38" rx="9" stroke="#DBE8FF" stroke-width="2" />
        <path
          d="M23.1796 8.00537V12.6701C23.1796 13.3018 23.4617 13.9089 23.965 14.3564C24.4696 14.8044 25.1527 15.0559 25.8647 15.0556H31.8647"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.6684 14.3537H18.4175M13.6684 20.0003H26.3316M13.6684 25.647H26.3316M32 15.5484V26.6627C31.9711 27.3897 31.7812 28.1044 31.4412 28.7656C31.1012 29.4268 30.6178 30.0215 30.0189 30.5154C29.4195 31.0115 28.7164 31.3975 27.9497 31.6512C27.183 31.905 26.3678 32.0215 25.5505 31.9942H14.5105C13.6883 32.0277 12.8668 31.9161 12.0931 31.6659C11.3193 31.4157 10.6085 31.0318 10.0015 30.5361C9.39676 30.0409 8.90843 29.4435 8.56484 28.7786C8.22125 28.1136 8.02925 27.3944 8 26.6627V13.3354C8.02888 12.6084 8.2188 11.8937 8.55881 11.2325C8.89882 10.5712 9.3822 9.97656 9.98109 9.4827C10.5805 8.98655 11.2836 8.60058 12.0503 8.34685C12.817 8.09311 13.6322 7.97657 14.4495 8.0039H22.7607C24.0295 7.9999 25.2542 8.41856 26.1949 9.17786L30.5004 12.7088C30.9598 13.0618 31.3308 13.497 31.5891 13.9862C31.8475 14.4755 31.9875 15.0077 32 15.5484Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_1_5105"
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
            result="effect1_innerShadow_1_5105"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_5105" />
        </filter>
      </defs>
    </svg>
  );
};

export default NotesIcon;
