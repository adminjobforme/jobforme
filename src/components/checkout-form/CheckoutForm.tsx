import { Button, Form } from 'react-bootstrap';
import './CheckoutForm.css';

const CheckoutForm = () => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center w-100 h-100' id='checkout-form'>
        <Form className='d-flex flex-column align-items-center'>
            <div className='d-flex justify-content-around'>
                <Form.Group className="mb-3 mx-2 w-50" controlId="formBasicFirst">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type='text' placeholder="First Name" required />
                </Form.Group>

                <Form.Group className="mb-3 mx-2 w-50" controlId="formBasicLast">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type='text' placeholder="Last Name" required />
                </Form.Group>
            </div>
            <div className='d-flex justify-content-between'>
                <Form.Group className="mb-3 mx-2 w-50" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" className='form-control' placeholder="Email" required />
                </Form.Group>

                <Form.Group className="mb-3 mx-2 w-50" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" placeholder="Phone" required />
                </Form.Group>
            </div>

            <div className='mb-3'>
            <Form.Select aria-label="service selector">
                <label>-- Select a Service --</label>
                <option disabled>-- Single Services --</option>
                <option value="1">CV</option>
                <option value="2">Cover Letter</option>
                <option value="3">LinkedIn Review</option>
                <option value="3">Interview Preparation</option>
                <option value="3">Career Development Plan</option>
                <option disabled>-- Bundles --</option>
                <option value="1">CV and Cover Letter</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
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