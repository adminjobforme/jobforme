import * as React from 'react'
const SvgEmail = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={40} height={40} fill='none' {...props}>
    <circle cx={20} cy={20} r={20} fill='#FF883E' fillOpacity={0.1} />
    <path
      fill='#FF883E'
      d='M30 28.007a1 1 0 0 1-.992.993H10.992a.993.993 0 0 1-.992-.993V27h18V15.3l-8 7.2-10-9V12a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16.007ZM12.434 13 20 19.81 27.566 13H12.434ZM8 23h8v2H8v-2Zm0-5h5v2H8v-2Z'
    />
  </svg>
)
export default SvgEmail
