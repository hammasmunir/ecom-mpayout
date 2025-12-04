import React from 'react';

const SearchIcon = () => {
  return (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_1_2678)">
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
          d="M39.7073 38.2938L33.4553 32.0431C35.2674 29.8676 36.171 27.0772 35.9781 24.2524C35.7852 21.4277 34.5108 18.786 32.4198 16.877C30.3289 14.9679 27.5825 13.9385 24.7519 14.0028C21.9213 14.0672 19.2244 15.2203 17.2224 17.2224C15.2203 19.2244 14.0672 21.9213 14.0028 24.7519C13.9385 27.5825 14.9679 30.3289 16.877 32.4198C18.786 34.5108 21.4277 35.7852 24.2524 35.9781C27.0772 36.171 29.8676 35.2674 32.0431 33.4553L38.2938 39.7073C38.3866 39.8001 38.4968 39.8737 38.618 39.9239C38.7393 39.9741 38.8693 40 39.0005 40C39.1318 40 39.2617 39.9741 39.383 39.9239C39.5043 39.8737 39.6145 39.8001 39.7073 39.7073C39.8001 39.6145 39.8737 39.5043 39.9239 39.383C39.9741 39.2617 40 39.1318 40 39.0005C40 38.8693 39.9741 38.7393 39.9239 38.618C39.8737 38.4968 39.8001 38.3866 39.7073 38.2938ZM16.0254 25.0157C16.0254 23.2376 16.5527 21.4994 17.5406 20.021C18.5284 18.5425 19.9325 17.3902 21.5753 16.7098C23.218 16.0293 25.0257 15.8513 26.7696 16.1982C28.5135 16.5451 30.1154 17.4013 31.3728 18.6586C32.6301 19.9159 33.4863 21.5178 33.8332 23.2618C34.1801 25.0057 34.0021 26.8134 33.3216 28.4561C32.6411 30.0989 31.4888 31.5029 30.0104 32.4908C28.532 33.4787 26.7938 34.0059 25.0157 34.0059C22.6321 34.0033 20.347 33.0553 18.6615 31.3698C16.9761 29.6844 16.0281 27.3992 16.0254 25.0157Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_1_2678"
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
            result="effect1_innerShadow_1_2678"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_2678" />
        </filter>
      </defs>
    </svg>
  );
};

export default SearchIcon;
