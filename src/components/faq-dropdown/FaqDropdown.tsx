import { useState } from 'react';
import './FaqDropdown.css';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import { IconContext } from 'react-icons';

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
            <h6 className='fw-bold mt-2 w-75'>{question}</h6>
            {state? 
            <IconContext.Provider value={{size: '30px'}}>
              <AiOutlineMinus/>
            </IconContext.Provider>: 
            <IconContext.Provider value={{size: '30px'}}>
              <AiOutlinePlus/>
            </IconContext.Provider>
            }
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