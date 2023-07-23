import './Checkout.css';

const Checkout = () => {
  return (
    <div className='d-flex align-items-center justify-content-center' id='checkout'>
      <section className='d-flex w-75 h-75 border align-items-center justify-content-center' id='checkout-body'>
        <div className='border d-flex w-100'>
          Form
        </div>
        <div className='d-flex-column w-50 h-75 rounded p-3' id='checkout-summary'>
          <h3 className='text-center'>
            Purchase Details
          </h3>
          <div className='h-25'>
            Basket goes here
          </div>
          <div className='h-50'>
            Summary goes here
          </div>
        </div>
      </section>
    </div>
  )
}

export default Checkout;