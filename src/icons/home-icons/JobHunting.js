import * as React from 'react'
const SvgJobHunting = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={54} height={54} fill='none' {...props}>
    <g filter='url(#jobHunting_svg__a)'>
      <path
        fill='hsl(23, 100%, 50%)'
        d='M3 21.2c0-6.72 0-10.08 1.308-12.648a12 12 0 0 1 5.244-5.244C12.12 2 15.48 2 22.2 2h9.6c6.72 0 10.08 0 12.648 1.308a12 12 0 0 1 5.244 5.244C51 11.12 51 14.48 51 21.2v9.6c0 6.72 0 10.08-1.308 12.648a12 12 0 0 1-5.244 5.244C41.88 50 38.52 50 31.8 50h-9.6c-6.72 0-10.08 0-12.648-1.308a12 12 0 0 1-5.244-5.244C3 40.88 3 37.52 3 30.8v-9.6Z'
      />
    </g>
    <g fill='#fff' clipPath='url(#jobHunting_svg__b)'>
      <path d='M36.333 15.333h-1.466A6.679 6.679 0 0 0 28.333 10h-2.666a6.678 6.678 0 0 0-6.534 5.333h-1.466A6.675 6.675 0 0 0 11 22v4h32v-4a6.675 6.675 0 0 0-6.667-6.667Zm-14.421 0a4 4 0 0 1 3.755-2.666h2.666a4 4 0 0 1 3.755 2.666H21.912ZM28.333 30a1.333 1.333 0 1 1-2.666 0v-1.334H11v6.667A6.675 6.675 0 0 0 17.667 42h18.666A6.674 6.674 0 0 0 43 35.333v-6.666H28.333V30Z' />
    </g>
    <defs>
      <clipPath id='jobHunting_svg__b'>
        <path fill='#fff' d='M11 10h32v32H11z' />
      </clipPath>
      <filter
        id='jobHunting_svg__a'
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
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_103_63533' />
        <feBlend in='SourceGraphic' in2='effect1_dropShadow_103_63533' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={-1} />
        <feComposite in2='hardAlpha' k2={-1} k3={1} operator='arithmetic' />
        <feColorMatrix values='0 0 0 0 0.184314 0 0 0 0 0.168627 0 0 0 0 0.262745 0 0 0 0.1 0' />
        <feBlend in2='shape' result='effect2_innerShadow_103_63533' />
      </filter>
    </defs>
  </svg>
)
export default SvgJobHunting
