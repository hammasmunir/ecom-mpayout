import React from 'react';

const TagIcon = () => {
  return (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_1_2572)">
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
          d="M39.4357 26.5187L27.4816 14.5646C27.3034 14.3849 27.0913 14.2425 26.8576 14.1456C26.6239 14.0487 26.3732 13.9992 26.1202 14H14.963C14.7076 14 14.4627 14.1015 14.2821 14.2821C14.1015 14.4627 14 14.7076 14 14.963V26.1202C13.9992 26.3732 14.0487 26.6239 14.1456 26.8576C14.2425 27.0913 14.3849 27.3034 14.5646 27.4816L26.5187 39.4357C26.6975 39.6146 26.9098 39.7565 27.1435 39.8534C27.3772 39.9502 27.6277 40 27.8807 40C28.1336 40 28.3841 39.9502 28.6178 39.8534C28.8515 39.7565 29.0638 39.6146 29.2427 39.4357L39.4357 29.2427C39.6146 29.0638 39.7565 28.8515 39.8534 28.6178C39.9502 28.3841 40 28.1336 40 27.8807C40 27.6277 39.9502 27.3772 39.8534 27.1435C39.7565 26.9098 39.6146 26.6975 39.4357 26.5187ZM27.8801 38.0743L15.926 26.1202V15.926H26.1202L38.0743 27.8801L27.8801 38.0743ZM21.7038 20.2593C21.7038 20.545 21.6191 20.8243 21.4604 21.0618C21.3016 21.2994 21.076 21.4845 20.8121 21.5938C20.5482 21.7032 20.2577 21.7318 19.9775 21.676C19.6973 21.6203 19.44 21.4827 19.2379 21.2807C19.0359 21.0787 18.8984 20.8213 18.8426 20.5411C18.7869 20.2609 18.8155 19.9705 18.9248 19.7066C19.0342 19.4426 19.2193 19.217 19.4568 19.0583C19.6944 18.8996 19.9736 18.8149 20.2593 18.8149C20.6424 18.8149 21.0098 18.9671 21.2807 19.2379C21.5516 19.5088 21.7038 19.8762 21.7038 20.2593Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_1_2572"
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
            result="effect1_innerShadow_1_2572"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_2572" />
        </filter>
      </defs>
    </svg>
  );
};

export default TagIcon;
