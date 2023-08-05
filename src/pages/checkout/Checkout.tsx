import CheckoutForm from '../../components/checkout-form/CheckoutForm';
import './Checkout.css';

const Checkout = () => {
  return (
    <div className='d-flex align-items-center justify-content-center' id='checkout'>
      <section className='d-flex w-75 h-75 align-items-center justify-content-center' id='checkout-body'>
        <div className='d-flex h-100 p-2 w-100'>
          <CheckoutForm/>
        </div>
        <div className='d-flex flex-column w-50 h-75 rounded p-3' id='checkout-summary'>
          <h3 className='text-center'>
            Purchase Details
          </h3>
          <div className='h-100'>
            Summary goes here
          </div>
          <div className='btn bg-white'>
            Price goes here
          </div>
        </div>
      </section>
    </div>
  )
}

export default Checkout;