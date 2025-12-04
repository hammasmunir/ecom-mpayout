import React from 'react';

const CardIcon = () => {
  return (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_1_3217)">
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
          d="M39 17H15C14.4696 17 13.9609 17.2107 13.5858 17.5858C13.2107 17.9609 13 18.4696 13 19V35C13 35.5304 13.2107 36.0391 13.5858 36.4142C13.9609 36.7893 14.4696 37 15 37H39C39.5304 37 40.0391 36.7893 40.4142 36.4142C40.7893 36.0391 41 35.5304 41 35V19C41 18.4696 40.7893 17.9609 40.4142 17.5858C40.0391 17.2107 39.5304 17 39 17ZM39 19V22H15V19H39ZM39 35H15V24H39V35ZM37 32C37 32.2652 36.8946 32.5196 36.7071 32.7071C36.5196 32.8946 36.2652 33 36 33H32C31.7348 33 31.4804 32.8946 31.2929 32.7071C31.1054 32.5196 31 32.2652 31 32C31 31.7348 31.1054 31.4804 31.2929 31.2929C31.4804 31.1054 31.7348 31 32 31H36C36.2652 31 36.5196 31.1054 36.7071 31.2929C36.8946 31.4804 37 31.7348 37 32ZM29 32C29 32.2652 28.8946 32.5196 28.7071 32.7071C28.5196 32.8946 28.2652 33 28 33H26C25.7348 33 25.4804 32.8946 25.2929 32.7071C25.1054 32.5196 25 32.2652 25 32C25 31.7348 25.1054 31.4804 25.2929 31.2929C25.4804 31.1054 25.7348 31 26 31H28C28.2652 31 28.5196 31.1054 28.7071 31.2929C28.8946 31.4804 29 31.7348 29 32Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_1_3217"
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
            result="effect1_innerShadow_1_3217"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_3217" />
        </filter>
      </defs>
    </svg>
  );
};

export default CardIcon;
