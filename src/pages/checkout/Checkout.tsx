import CheckoutForm from '../../components/checkout-form/CheckoutForm';
import './Checkout.css';


const Checkout = () => {
  return (
    <div className='d-flex align-items-center justify-content-center' id='checkout'>
      <section className='d-flex w-100 h-100 align-items-center justify-content-center' id='checkout-body'>
        <div className='d-flex h-100 p-2 mt-5 w-100'>
          <CheckoutForm/>
        </div>
      </section>
    </div>
  )
}

export default Checkout;