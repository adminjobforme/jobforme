import * as React from 'react'
const SvgCareer = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={54} height={54} fill='none' {...props}>
    <g filter='url(#career_svg__a)'>
      <path
        fill='hsl(23, 100%, 50%)'
        d='M3 21.2c0-6.72 0-10.08 1.308-12.648a12 12 0 0 1 5.244-5.244C12.12 2 15.48 2 22.2 2h9.6c6.72 0 10.08 0 12.648 1.308a12 12 0 0 1 5.244 5.244C51 11.12 51 14.48 51 21.2v9.6c0 6.72 0 10.08-1.308 12.648a12 12 0 0 1-5.244 5.244C41.88 50 38.52 50 31.8 50h-9.6c-6.72 0-10.08 0-12.648-1.308a12 12 0 0 1-5.244-5.244C3 40.88 3 37.52 3 30.8v-9.6Z'
      />
    </g>
    <g clipPath='url(#career_svg__b)'>
      <path
        fill='#fff'
        d='M36.333 15.333h-1.466A6.667 6.667 0 0 0 28.333 10h-2.666c-3.214 0-5.907 2.293-6.534 5.333h-1.466A6.67 6.67 0 0 0 11 22v13.333A6.67 6.67 0 0 0 17.667 42h18.666A6.67 6.67 0 0 0 43 35.333V22a6.67 6.67 0 0 0-6.667-6.667Zm-10.666-2.666h2.666c1.734 0 3.2 1.12 3.76 2.666H21.92a3.988 3.988 0 0 1 3.76-2.666h-.013Zm8.16 18.826-3.187 3.414c-.267.28-.613.426-.973.426-.32 0-.654-.12-.907-.36-.533-.506-.573-1.346-.067-1.88L31.573 30h-11.24C19.6 30 19 29.4 19 28.667c0-.734.6-1.334 1.333-1.334h11.24l-2.88-3.093a1.329 1.329 0 0 1 .067-1.88 1.328 1.328 0 0 1 1.88.067l3.213 3.453c.72.72 1.134 1.733 1.134 2.8a3.964 3.964 0 0 1-1.174 2.827l.014-.014Z'
      />
    </g>
    <defs>
      <clipPath id='career_svg__b'>
        <path fill='#fff' d='M11 10h32v32H11z' />
      </clipPath>
      <filter
        id='career_svg__a'
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
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_103_63551' />
        <feBlend in='SourceGraphic' in2='effect1_dropShadow_103_63551' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={-1} />
        <feComposite in2='hardAlpha' k2={-1} k3={1} operator='arithmetic' />
        <feColorMatrix values='0 0 0 0 0.184314 0 0 0 0 0.168627 0 0 0 0 0.262745 0 0 0 0.1 0' />
        <feBlend in2='shape' result='effect2_innerShadow_103_63551' />
      </filter>
    </defs>
  </svg>
)
export default SvgCareer
