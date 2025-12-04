import React from 'react';

const GrowthIcon = () => {
  return (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_1_2637)">
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
          d="M40 37C40 37.2652 39.8946 37.5196 39.7071 37.7071C39.5196 37.8946 39.2652 38 39 38H15C14.7348 38 14.4804 37.8946 14.2929 37.7071C14.1054 37.5196 14 37.2652 14 37V17C14 16.7348 14.1054 16.4804 14.2929 16.2929C14.4804 16.1054 14.7348 16 15 16C15.2652 16 15.5196 16.1054 15.7071 16.2929C15.8946 16.4804 16 16.7348 16 17V30.5863L22.2925 24.2925C22.3854 24.1995 22.4957 24.1258 22.6171 24.0754C22.7385 24.0251 22.8686 23.9992 23 23.9992C23.1314 23.9992 23.2615 24.0251 23.3829 24.0754C23.5043 24.1258 23.6146 24.1995 23.7075 24.2925L27 27.5863L33.5863 21H31C30.7348 21 30.4804 20.8946 30.2929 20.7071C30.1054 20.5196 30 20.2652 30 20C30 19.7348 30.1054 19.4804 30.2929 19.2929C30.4804 19.1054 30.7348 19 31 19H36C36.2652 19 36.5196 19.1054 36.7071 19.2929C36.8946 19.4804 37 19.7348 37 20V25C37 25.2652 36.8946 25.5196 36.7071 25.7071C36.5196 25.8946 36.2652 26 36 26C35.7348 26 35.4804 25.8946 35.2929 25.7071C35.1054 25.5196 35 25.2652 35 25V22.4137L27.7075 29.7075C27.6146 29.8005 27.5043 29.8742 27.3829 29.9246C27.2615 29.9749 27.1314 30.0008 27 30.0008C26.8686 30.0008 26.7385 29.9749 26.6171 29.9246C26.4957 29.8742 26.3854 29.8005 26.2925 29.7075L23 26.4137L16 33.4137V36H39C39.2652 36 39.5196 36.1054 39.7071 36.2929C39.8946 36.4804 40 36.7348 40 37Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_1_2637"
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
            result="effect1_innerShadow_1_2637"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_2637" />
        </filter>
      </defs>
    </svg>
  );
};

export default GrowthIcon;
