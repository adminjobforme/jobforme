import { useState } from 'react';
import './FaqDropdown.css';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

interface ChildProps {
  question: string,
  info: string
}

const FaqDropdown = (props: ChildProps) => {
  const {info, question} = props
  const [state, setState] = useState<boolean>(false);
  return (
    <div className='d-flex flex-column py-2' id='faqdropdown'>
        <div className='pb-1 border-bottom d-flex align-items-center justify-content-between h-100' id='faqdropdown-button' onClick={() => {setState(!state)}}>
            <h5 className='fw-bold mt-2'>{question}</h5>
            {state? <AiOutlineMinus size='30px'/> : <AiOutlinePlus size='30px'/>}
        </div>
        <div className={state? 'pt-1' : 'd-none'} id='faqdropdown-info'>
                <p>
                  {info}
                </p>
        </div>
    </div>
  )
}

export default FaqDropdown