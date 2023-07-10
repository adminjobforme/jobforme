import * as React from 'react'
const SvgCv = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={54} height={54} fill='none' {...props}>
    <g filter='url(#cv_svg__a)'>
      <path
        fill='hsl(23, 100%, 50%)'
        d='M3 21.2c0-6.72 0-10.08 1.308-12.648a12 12 0 0 1 5.244-5.244C12.12 2 15.48 2 22.2 2h9.6c6.72 0 10.08 0 12.648 1.308a12 12 0 0 1 5.244 5.244C51 11.12 51 14.48 51 21.2v9.6c0 6.72 0 10.08-1.308 12.648a12 12 0 0 1-5.244 5.244C41.88 50 38.52 50 31.8 50h-9.6c-6.72 0-10.08 0-12.648-1.308a12 12 0 0 1-5.244-5.244C3 40.88 3 37.52 3 30.8v-9.6Z'
      />
    </g>
    <path
      fill='#fff'
      d='M26.812 23.177A4.756 4.756 0 0 0 22.482 26h8.66c-.754-1.694-2.354-2.823-4.33-2.823ZM26.812 21.294a1.882 1.882 0 1 0 0-3.764 1.882 1.882 0 0 0 0 3.764Z'
    />
    <path
      fill='#fff'
      d='M35.659 10.941H18.34a3.575 3.575 0 0 0-3.576 3.577v22.965c0 1.976 1.6 3.576 3.576 3.576H35.66c1.976 0 3.576-1.6 3.576-3.576V14.518c0-1.977-1.6-3.577-3.576-3.577ZM24.082 21.953a3.825 3.825 0 0 1-.94-2.541 3.776 3.776 0 0 1 3.764-3.765 3.776 3.776 0 0 1 3.765 3.765c0 .941-.377 1.788-.942 2.541 1.883.941 3.294 2.73 3.67 4.894 0 .283 0 .565-.187.753-.283.188-.565.283-.847.283H21.259c-.283 0-.565-.095-.753-.377-.188-.188-.282-.47-.188-.753.376-2.165 1.788-3.953 3.764-4.8Zm10.447 14.4H19.47c-.564 0-.94-.376-.94-.941s.376-.941.94-.941h15.06c.564 0 .94.376.94.941s-.376.941-.94.941Zm0-3.764H19.47c-.564 0-.94-.377-.94-.942 0-.564.376-.94.94-.94h15.06c.564 0 .94.376.94.94 0 .565-.376.942-.94.942Z'
    />
    <defs>
      <filter
        id='cv_svg__a'
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
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_103_63496' />
        <feBlend in='SourceGraphic' in2='effect1_dropShadow_103_63496' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={-1} />
        <feComposite in2='hardAlpha' k2={-1} k3={1} operator='arithmetic' />
        <feColorMatrix values='0 0 0 0 0.184314 0 0 0 0 0.168627 0 0 0 0 0.262745 0 0 0 0.1 0' />
        <feBlend in2='shape' result='effect2_innerShadow_103_63496' />
      </filter>
    </defs>
  </svg>
)
export default SvgCv
