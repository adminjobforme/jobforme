import * as React from 'react'
const SvgWeb = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={54} height={54} fill='none' {...props}>
    <g filter='url(#web_svg__a)'>
      <rect width={48} height={48} x={3} y={2} fill='#fff' rx={24} shapeRendering='crispEdges' />
      <path
        fill='#2F2B43'
        d='M27 36c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10Zm-2.29-2.333A17.9 17.9 0 0 1 23.027 27h-3.965a8.008 8.008 0 0 0 5.648 6.667ZM25.03 27c.151 2.439.848 4.73 1.97 6.752A15.906 15.906 0 0 0 28.97 27h-3.94Zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 34.938 27Zm-15.876-2h3.965a17.9 17.9 0 0 1 1.683-6.667A8.008 8.008 0 0 0 19.062 25Zm5.969 0h3.938A15.904 15.904 0 0 0 27 18.248 15.906 15.906 0 0 0 25.03 25h.001Zm4.259-6.667A17.9 17.9 0 0 1 30.973 25h3.965a8.008 8.008 0 0 0-5.648-6.667Z'
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
        id='web_svg__a'
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
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_265_57451' />
        <feBlend in='SourceGraphic' in2='effect1_dropShadow_265_57451' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={-1} />
        <feComposite in2='hardAlpha' k2={-1} k3={1} operator='arithmetic' />
        <feColorMatrix values='0 0 0 0 0.184314 0 0 0 0 0.168627 0 0 0 0 0.262745 0 0 0 0.1 0' />
        <feBlend in2='shape' result='effect2_innerShadow_265_57451' />
      </filter>
    </defs>
  </svg>
)
export default SvgWeb
