import React from 'react';

const FileIcon = () => {
  return (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_1_2684)">
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
          d="M37.7075 21.2925L30.7075 14.2925C30.6146 14.1997 30.5042 14.1261 30.3829 14.0759C30.2615 14.0257 30.1314 13.9999 30 14H18C17.4696 14 16.9609 14.2107 16.5858 14.5858C16.2107 14.9609 16 15.4696 16 16V38C16 38.5304 16.2107 39.0391 16.5858 39.4142C16.9609 39.7893 17.4696 40 18 40H36C36.5304 40 37.0391 39.7893 37.4142 39.4142C37.7893 39.0391 38 38.5304 38 38V22C38.0001 21.8686 37.9743 21.7385 37.9241 21.6172C37.8739 21.4958 37.8003 21.3854 37.7075 21.2925ZM31 17.4138L34.5863 21H31V17.4138ZM36 38H18V16H29V22C29 22.2652 29.1054 22.5196 29.2929 22.7071C29.4804 22.8946 29.7348 23 30 23H36V38ZM32 28C32 28.2652 31.8946 28.5196 31.7071 28.7071C31.5196 28.8946 31.2652 29 31 29H23C22.7348 29 22.4804 28.8946 22.2929 28.7071C22.1054 28.5196 22 28.2652 22 28C22 27.7348 22.1054 27.4804 22.2929 27.2929C22.4804 27.1054 22.7348 27 23 27H31C31.2652 27 31.5196 27.1054 31.7071 27.2929C31.8946 27.4804 32 27.7348 32 28ZM32 32C32 32.2652 31.8946 32.5196 31.7071 32.7071C31.5196 32.8946 31.2652 33 31 33H23C22.7348 33 22.4804 32.8946 22.2929 32.7071C22.1054 32.5196 22 32.2652 22 32C22 31.7348 22.1054 31.4804 22.2929 31.2929C22.4804 31.1054 22.7348 31 23 31H31C31.2652 31 31.5196 31.1054 31.7071 31.2929C31.8946 31.4804 32 31.7348 32 32Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_1_2684"
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
            result="effect1_innerShadow_1_2684"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_2684" />
        </filter>
      </defs>
    </svg>
  );
};

export default FileIcon;
