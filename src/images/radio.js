import React from "react";

export const Radio = () => {
  return (
    <svg className="svg" viewBox="0,0,800,800" height="100%" width="100%">
      <title>Wavy: Experiments with the HTML5 audio API</title>
      <desc>An animated radio with a bouncing speaker</desc>
      <defs>
        <path
          d="M595.904795,381 L632,381 L632,299 L155.274094,299 L155.274094,381 L405.095205,381 C429.057487,355.747331 462.939751,340 500.5,340 C538.060249,340 571.942513,355.747331 595.904795,381 Z"
          id="path-1"
        ></path>
        <mask
          id="mask-2"
          maskContentUnits="userSpaceOnUse"
          maskUnits="objectBoundingBox"
          x="0"
          y="0"
          width="476.725906"
          height="82"
          fill="white"
        >
          <use href="#path-1"></use>
        </mask>
      </defs>
      <g
        id="Page-1"
        stroke="black"
        strokeWidth="4"
        fill="none"
        fillRule="evenodd"
      >
        <g id="soundcloud">
          <path
            d="M133,85 L138,85 L138,106 L133,106 L133,85 Z M128,71 L143,71 L141,85 L130,85 L128,71 Z"
            id="antenna-top"
            fill="#FFFFFF"
          ></path>
          <rect
            id="antenna-middle"
            fill="white"
            x="131"
            y="100"
            width="9"
            height="80"
          ></rect>
          <path
            d="M129,180 L141.73888,180 L141.73888,317.48407 C141.73888,317.48407 129,321.438156 129,309.836779 L129,180 Z"
            id="antenna-bottom"
            fill="white"
          ></path>
          <rect
            id="Rectangle-2"
            fill="white"
            x="135"
            y="289"
            width="516"
            height="317"
          ></rect>
          <path
            d="M580.336051,367 L626,367 L626,318 L158.103555,318 L158.103555,367 L420.663949,367 C442.799954,350.062853 470.474824,340 500.5,340 C530.525176,340 558.200046,350.062853 580.336051,367 Z"
            id="Combined-Shape"
            fill="#FFFFFF"
          ></path>
          <path
            d="M158.498411,331.627666 L627.869995,331.627666"
            id="Path-2"
            stroke="black"
            strokeWidth="4"
            strokeDasharray="3,2"
          ></path>
          <polygon
            id="Rectangle-4"
            fill="white"
            points="650 289 670.157288 275.988767 669.157288 571.142057 650 606"
          ></polygon>
          <use
            id="Combined-Shape"
            stroke="black"
            mask="url(#mask-2)"
            strokeWidth="10"
            href="#path-1"
          ></use>
          <polygon
            id="Rectangle-3"
            fill="white"
            points="184.943596 275.362611 671.101471 275.362611 650 289 135.360923 289"
          ></polygon>
          <g id="speaker" transform="translate(385.000000, 356.000000)">
            <circle
              id="speaker-large"
              fill="white"
              cx="115.5"
              cy="115.5"
              r="115.5"
            ></circle>
            <ellipse
              id="speaker-small"
              stroke="black"
              strokeWidth="4"
              cx="113.660072"
              cy="112.339928"
              rx="45.3399281"
              ry="45.3399281"
            ></ellipse>
          </g>
          <rect
            id="Rectangle-6"
            fill="white"
            x="158"
            y="393"
            width="199"
            height="121"
          ></rect>
          <rect
            id="Rectangle-7"
            fill="white"
            x="160"
            y="525"
            width="199"
            height="59"
          ></rect>
          <ellipse
            id="Oval-6"
            stroke="black"
            fill="#FFFFFF"
            cx="663.5"
            cy="359.5"
            rx="8.5"
            ry="40.5"
          ></ellipse>
          <rect
            id="Rectangle-8"
            fill="#FFFFFF"
            x="662"
            y="318"
            width="12"
            height="83"
          ></rect>
          <ellipse
            id="Oval-6"
            fill="white"
            cx="673.5"
            cy="359.5"
            rx="8.5"
            ry="40.5"
          ></ellipse>
          <path
            id="needle"
            d="M246.359053,375.877534 C246.359053,355.62646 249.877203,305.629144 249.877203,305.629144 L251.978315,375.877534"
            fill="white"
          ></path>
        </g>
      </g>
    </svg>
  );
};
