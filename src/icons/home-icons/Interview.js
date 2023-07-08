import * as React from 'react'
const SvgInterview = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={54} height={54} fill='none' {...props}>
    <g filter='url(#interview_svg__a)'>
      <path
        fill='#FF883E'
        d='M3 21.2c0-6.72 0-10.08 1.308-12.648a12 12 0 0 1 5.244-5.244C12.12 2 15.48 2 22.2 2h9.6c6.72 0 10.08 0 12.648 1.308a12 12 0 0 1 5.244 5.244C51 11.12 51 14.48 51 21.2v9.6c0 6.72 0 10.08-1.308 12.648a12 12 0 0 1-5.244 5.244C41.88 50 38.52 50 31.8 50h-9.6c-6.72 0-10.08 0-12.648-1.308a12 12 0 0 1-5.244-5.244C3 40.88 3 37.52 3 30.8v-9.6Z'
      />
    </g>
    <g fill='#fff' clipPath='url(#interview_svg__b)'>
      <path d='M27 20.595a2.03 2.03 0 1 0 0-4.062 2.03 2.03 0 0 0 0 4.062Z' />
      <path d='M37.667 10.001H16.333A5.376 5.376 0 0 0 11 15.409v16.227a5.377 5.377 0 0 0 5.333 5.409h3.898l4.997 4.267c.99.904 2.502.918 3.508.03l5.127-4.298h3.804A5.377 5.377 0 0 0 43 31.634V15.41a5.376 5.376 0 0 0-5.333-5.408ZM27 14.057c6.153.163 6.152 9.303 0 9.467-6.153-.164-6.152-9.3 0-9.467Zm5.665 18.888a1.333 1.333 0 0 1-1.624-.972 4.227 4.227 0 0 0-8.084 0 1.334 1.334 0 0 1-2.58-.675 6.883 6.883 0 0 1 13.248 0 1.355 1.355 0 0 1-.96 1.647Z' />
    </g>
    <defs>
      <clipPath id='interview_svg__b'>
        <path fill='#fff' d='M11 10h32v32H11z' />
      </clipPath>
      <filter
        id='interview_svg__a'
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
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_103_63542' />
        <feBlend in='SourceGraphic' in2='effect1_dropShadow_103_63542' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={-1} />
        <feComposite in2='hardAlpha' k2={-1} k3={1} operator='arithmetic' />
        <feColorMatrix values='0 0 0 0 0.184314 0 0 0 0 0.168627 0 0 0 0 0.262745 0 0 0 0.1 0' />
        <feBlend in2='shape' result='effect2_innerShadow_103_63542' />
      </filter>
    </defs>
  </svg>
)
export default SvgInterview
