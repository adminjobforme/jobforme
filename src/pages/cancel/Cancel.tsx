import './Cancel.css';
import {MdOutlineCancel} from 'react-icons/md';

const Cancel = () => {
  return (
    <main className='d-flex flex-column align-items-center justify-content-center' id='cancel-main'>
        <MdOutlineCancel id='cancel-icon' fill='#FF1300'/>
        <h1 className='text-center'>Your order request has been cancelled</h1>
        <p className='text-center'>Please feel free to contact us if you are facing any difficulties</p>
    </main>
  )
};

export default Cancel;