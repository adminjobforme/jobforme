import * as React from 'react'
const SvgLinkedIn = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={54} height={54} fill='none' {...props}>
    <g filter='url(#linkedIn_svg__a)'>
      <path
        fill='#FF883E'
        d='M3 21.2c0-6.72 0-10.08 1.308-12.648a12 12 0 0 1 5.244-5.244C12.12 2 15.48 2 22.2 2h9.6c6.72 0 10.08 0 12.648 1.308a12 12 0 0 1 5.244 5.244C51 11.12 51 14.48 51 21.2v9.6c0 6.72 0 10.08-1.308 12.648a12 12 0 0 1-5.244 5.244C41.88 50 38.52 50 31.8 50h-9.6c-6.72 0-10.08 0-12.648-1.308a12 12 0 0 1-5.244-5.244C3 40.88 3 37.52 3 30.8v-9.6Z'
      />
    </g>
    <path
      fill='#fff'
      d='M18.333 19.333a4.672 4.672 0 0 1-4.666-4.666A4.672 4.672 0 0 1 18.333 10 4.672 4.672 0 0 1 23 14.667a4.672 4.672 0 0 1-4.667 4.666Zm12 0a4.672 4.672 0 0 1-4.666-4.666A4.672 4.672 0 0 1 30.333 10 4.672 4.672 0 0 1 35 14.667a4.672 4.672 0 0 1-4.667 4.666Zm10.928 16.179-1.298-.75c.221-.662.37-1.358.37-2.095 0-.738-.148-1.434-.37-2.096l1.298-.75a1.334 1.334 0 0 0-1.333-2.309l-1.297.75c-.94-1.06-2.192-1.834-3.63-2.126v-1.468a1.334 1.334 0 0 0-2.668 0v1.468c-1.438.293-2.69 1.068-3.63 2.125l-1.298-.749a1.334 1.334 0 0 0-1.333 2.31l1.299.749c-.222.662-.37 1.358-.37 2.096 0 .737.147 1.433.37 2.096l-1.299.749a1.334 1.334 0 0 0 1.333 2.31l1.298-.75c.94 1.059 2.192 1.833 3.63 2.125v1.468a1.334 1.334 0 0 0 2.667 0v-1.468c1.439-.293 2.69-1.068 3.63-2.125l1.298.75a1.331 1.331 0 0 0 1.821-.488 1.333 1.333 0 0 0-.488-1.822Zm-7.594-.845c-1.103 0-2-.898-2-2 0-1.103.897-2 2-2 1.102 0 2 .897 2 2 0 1.102-.898 2-2 2Zm-5.864-12.464a4.638 4.638 0 0 0-3.436-1.536 4.672 4.672 0 0 0-4.667 4.666c0 1.758.988 3.274 2.428 4.07a12.014 12.014 0 0 1 5.675-7.2Zm-6.136 10.464c0-.407.021-.808.061-1.206-3.068.596-5.395 3.299-5.395 6.539 0 .736.598 1.333 1.334 1.333h6.024a11.935 11.935 0 0 1-2.024-6.666Zm-4.634-7.334c0-1.737.611-3.333 1.624-4.59-4.126-.598-7.68 2.61-7.657 6.628.004.721.62 1.296 1.341 1.296h5.523a7.23 7.23 0 0 1-.83-3.334Z'
    />
    <defs>
      <filter
        id='linkedIn_svg__a'
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
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_103_63518' />
        <feBlend in='SourceGraphic' in2='effect1_dropShadow_103_63518' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={-1} />
        <feComposite in2='hardAlpha' k2={-1} k3={1} operator='arithmetic' />
        <feColorMatrix values='0 0 0 0 0.184314 0 0 0 0 0.168627 0 0 0 0 0.262745 0 0 0 0.1 0' />
        <feBlend in2='shape' result='effect2_innerShadow_103_63518' />
      </filter>
    </defs>
  </svg>
)
export default SvgLinkedIn