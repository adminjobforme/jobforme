import './Success.css';
import {BsCheck2Circle} from 'react-icons/bs';

const Success = () => {
  return (
    <main className='d-flex flex-column align-items-center justify-content-center' id='success-main'>
        <BsCheck2Circle id='success-icon' fill='#169B62'/>
        <h1 className='text-center'>Thank you for your order!</h1>
        <p className='text-center'>You should receive an email with your order details shortly</p>
    </main>
  )
};

export default Success;