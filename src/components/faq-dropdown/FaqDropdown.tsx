import { useState } from 'react';
import './FaqDropdown.css';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

const FaqDropdown = () => {
  const [state, setState] = useState(false);
  return (
    <div className='d-flex flex-column py-2' id='faqdropdown'>
        <div className='pb-1 border-bottom d-flex align-items-center justify-content-between h-100' onClick={() => {setState(!state)}}>
            <h5 className='fw-bold mt-2'>How does Job4Me work?</h5>
            {state? <AiOutlineMinus size='30px'/> : <AiOutlinePlus size='30px'/>}
        </div>
        <div className={state? 'pt-1' : 'd-none'} id='faqdropdown-info'>
                <p>
                    All things starts with a homepage —  Get inspired without breaking your wallet with premium Figma and Sketch templates. Capitalize hanging fruit to identify a ballpark value added activity to beta test. Podcasting operational — change management inside of workflows.
                </p>
        </div>
    </div>
  )
}

export default FaqDropdown