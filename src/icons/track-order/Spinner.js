import * as React from 'react'
const SvgSpinner = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={40} height={40} fill='none' {...props}>
    <g clipPath='url(#spinner_svg__a)'>
      <path
        fill='#169B62'
        d='M20.944 40C9.898 39.997.946 31.04.949 19.995.952 8.949 9.909-.003 20.954 0A20 20 0 0 1 38.8 10.982a2.5 2.5 0 0 1-4.46 2.258C30.607 5.845 21.586 2.876 14.19 6.609 6.795 10.342 3.826 19.363 7.56 26.759c3.733 7.395 12.755 10.364 20.15 6.631a15 15 0 0 0 6.613-6.595 2.5 2.5 0 1 1 4.457 2.268A19.928 19.928 0 0 1 20.944 40Z'
      />
    </g>
    <defs>
      <clipPath id='spinner_svg__a'>
        <path fill='#fff' d='M0 0h40v40H0z' />
      </clipPath>
    </defs>
  </svg>
)
export default SvgSpinner
