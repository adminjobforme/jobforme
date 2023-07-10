import * as React from 'react'
const SvgCoverLetter = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={54} height={54} fill='none' {...props}>
    <g filter='url(#coverLetter_svg__a)'>
      <path
        fill='hsl(23, 100%, 50%)'
        d='M3 21.2c0-6.72 0-10.08 1.308-12.648a12 12 0 0 1 5.244-5.244C12.12 2 15.48 2 22.2 2h9.6c6.72 0 10.08 0 12.648 1.308a12 12 0 0 1 5.244 5.244C51 11.12 51 14.48 51 21.2v9.6c0 6.72 0 10.08-1.308 12.648a12 12 0 0 1-5.244 5.244C41.88 50 38.52 50 31.8 50h-9.6c-6.72 0-10.08 0-12.648-1.308a12 12 0 0 1-5.244-5.244C3 40.88 3 37.52 3 30.8v-9.6Z'
      />
    </g>
    <g clipPath='url(#coverLetter_svg__b)'>
      <path
        fill='#fff'
        d='M29.666 19.333v-8.72a9.303 9.303 0 0 1 3.287 2.12l4.645 4.648a9.273 9.273 0 0 1 2.122 3.286H31a1.333 1.333 0 0 1-1.334-1.334Zm10.667 4.647v11.353A6.674 6.674 0 0 1 33.667 42H20.332a6.674 6.674 0 0 1-6.666-6.667V16.667A6.674 6.674 0 0 1 20.332 10h6.02c.217 0 .432.017.647.032v9.301a4 4 0 0 0 4 4H40.3c.015.215.032.43.032.647Zm-7.035 5.101a1.334 1.334 0 0 0-1.884-.046l-4.8 4.574a1.334 1.334 0 0 1-1.94-.053l-2.12-1.885a1.334 1.334 0 1 0-1.775 1.992l2.058 1.832a4 4 0 0 0 5.635.022l4.78-4.552a1.333 1.333 0 0 0 .046-1.884Z'
      />
    </g>
    <defs>
      <clipPath id='coverLetter_svg__b'>
        <path fill='#fff' d='M11 10h32v32H11z' />
      </clipPath>
      <filter
        id='coverLetter_svg__a'
        width={54}
        height={54}
        x={0}
        y={0}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1.5} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0.184314 0 0 0 0 0.168627 0 0 0 0 0.262745 0 0 0 0.1 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_103_63510' />
        <feBlend in='SourceGraphic' in2='effect1_dropShadow_103_63510' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={-1} />
        <feComposite in2='hardAlpha' k2={-1} k3={1} operator='arithmetic' />
        <feColorMatrix values='0 0 0 0 0.184314 0 0 0 0 0.168627 0 0 0 0 0.262745 0 0 0 0.1 0' />
        <feBlend in2='shape' result='effect2_innerShadow_103_63510' />
      </filter>
    </defs>
  </svg>
)
export default SvgCoverLetter
