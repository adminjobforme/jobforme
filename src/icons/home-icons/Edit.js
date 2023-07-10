import * as React from 'react'
const SvgEdit = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={54} height={54} fill='none' {...props}>
    <g filter='url(#edit_svg__a)'>
      <rect width={48} height={48} x={3} y={2} fill='#fff' rx={24} shapeRendering='crispEdges' />
      <path
        fill='#2F2B43'
        d='M25 22h4v-1.5a3.5 3.5 0 1 1 3.5 3.5H31v4h1.5a3.5 3.5 0 1 1-3.5 3.5V30h-4v1.5a3.5 3.5 0 1 1-3.5-3.5H23v-4h-1.5a3.5 3.5 0 1 1 3.5-3.5V22Zm-2 0v-1.5a1.5 1.5 0 1 0-1.5 1.5H23Zm0 8h-1.5a1.5 1.5 0 1 0 1.5 1.5V30Zm8-8h1.5a1.5 1.5 0 1 0-1.5-1.5V22Zm0 8v1.5a1.5 1.5 0 1 0 1.5-1.5H31Zm-6-6v4h4v-4h-4Z'
      />
      <rect
        width={47}
        height={47}
        x={3.5}
        y={2.5}
        stroke='#2F2B43'
        strokeOpacity={0.1}
        rx={23.5}
        shapeRendering='crispEdges'
      />
    </g>
    <defs>
      <filter
        id='edit_svg__a'
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
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_265_57458' />
        <feBlend in='SourceGraphic' in2='effect1_dropShadow_265_57458' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={-1} />
        <feComposite in2='hardAlpha' k2={-1} k3={1} operator='arithmetic' />
        <feColorMatrix values='0 0 0 0 0.184314 0 0 0 0 0.168627 0 0 0 0 0.262745 0 0 0 0.1 0' />
        <feBlend in2='shape' result='effect2_innerShadow_265_57458' />
      </filter>
    </defs>
  </svg>
)
export default SvgEdit
