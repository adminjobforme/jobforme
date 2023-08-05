import { Button, Form } from 'react-bootstrap';
import './CheckoutForm.css';

const CheckoutForm = () => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center w-100 h-100' id='checkout-form'>
        <Form className='d-flex flex-column align-items-center'>
            <div className='d-flex justify-content-around'>
                <Form.Group className="mb-3 mx-2 w-50" controlId="formBasicFirst">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type='text' placeholder="First Name" />
                </Form.Group>

                <Form.Group className="mb-3 mx-2 w-50" controlId="formBasicLast">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type='text' placeholder="Last Name" />
                </Form.Group>
            </div>
            <div className='d-flex justify-content-between'>
                <Form.Group className="mb-3 mx-2 w-50" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3 mx-2 w-50" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" placeholder="Phone" />
                </Form.Group>
            </div>

            <div className='mb-3'>
                Select services and input files...
            </div>

            <div className='d-flex w-100 justify-content-center'>
                <Button className='btn-ternary w-25' type="submit">
                    Stripe
                </Button>
            </div>
            
        </Form>
    </div>
  )
}

export default CheckoutForm