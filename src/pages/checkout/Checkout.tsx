import CheckoutForm from '../../components/checkout-form/CheckoutForm';
import './Checkout.css';


const Checkout = () => {
  return (
    <div className='d-flex align-items-center justify-content-center' id='checkout'>
      <section className='d-flex flex-column w-100 h-100 align-items-center justify-content-center' id='checkout-body'>
        <br/>
        <h3 className='mt-5 text-center'>Checkout</h3>
        <div className='d-flex h-100 p-2 w-100'>
          <CheckoutForm/>
        </div>
      </section>
    </div>
  )
}

export default Checkout;