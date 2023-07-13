import { Form, InputGroup } from 'react-bootstrap';
import './ContactUs.css';
import { Featured } from '../../icons/home-icons';
import FaqDropdown from '../../components/faq-dropdown/FaqDropdown';
const ContactUs = () => {
  return (
    <div className='' id='contact-us'>

        <section className='d-flex flex-column' id='contact-us-a'>
            <div className='d-flex flex-column align-items-center justify-content-center w-100 h-100 contact-us-content'>
                <h1 className='fw-bold w-75 text-center'>
                    Doubts, concerns, problems, give them to us and take a backseat
                </h1>
                <p className='mt-3 text-center w-75 contact-us-a-subheader'>
                    No matter what project you&#39;re working on, we&#39;ve got you covered with all the recruitment tools & techniques required.
                </p>
            </div>
        </section>

        <section className='d-flex flex-column justify-content-center align-items-center' id='contact-us-b'>
                <h3 className='fw-bold d-flex align-items-center h-25'>Frequently Asked Questions</h3>
                <div className='h-75 w-75'>
                    <FaqDropdown/>
                    <FaqDropdown/>
                    <FaqDropdown/>
                    <FaqDropdown/>
                    <FaqDropdown/>
                    <FaqDropdown/>
                </div>
        </section>

        <section className='d-flex flex-column justify-content-center align-items-center' id='contact-us-c'>
                <h3 className='fw-bold d-flex align-items-center h-25'>Still Not able to find the answers? Send us a message</h3>
                <div className='h-75 w-75 d-flex flex-column align-items-center justify-content-around'>
                    <InputGroup className='h-100'>
                        <div className="row row-cols-1 row-cols-md-2 w-100">
                            <div className='col'>
                            <Form.Control
                            placeholder="Full Name"
                            aria-label="Contact Us Name"
                            aria-describedby="basic-addon2"
                            className='rounded mx-3'
                            />
                            </div>
                            <div className='col'>
                            <Form.Control
                            placeholder="Email"
                            aria-label="Contact Us Email"
                            aria-describedby="basic-addon2"
                            className='rounded mx-3'
                            />
                            </div>
                        </div>
                        <div className='row row-cols-1 w-100'>
                            <div className='col p-0 w-50'>
                                <Form.Control
                                placeholder="Phone Number..."
                                aria-label="Track Order Input"
                                aria-describedby="basic-addon2"
                                className='rounded mx-3'
                                />
                            </div>
                            <div className='col p-0 d-flex pb-3 w-100'>
                                <Form.Control
                                placeholder="Description..."
                                aria-label="Track Order Input"
                                aria-describedby="basic-addon2"
                                className='rounded mx-3 h-100'
                                />
                            </div>
                        </div>
                    </InputGroup>
                    <button className='btn-ternary w-25' id='track-order-submit'>
                        Submit
                    </button>  
                </div>
        </section>

        <section className='d-flex flex-column justify-content-center align-items-center pt-5' id='contact-us-d'>
                <h3 className='fw-bold d-flex align-items-center h-25'>Still Not satisfied, contact us through these options.</h3>
                <div className='h-75 w-75 row row-cols-1 row-cols-lg-3'>
                    <div className='col'>
                        <div className='d-flex align-items-center'>
                            <Featured/>
                            <h6 className='fw-bold h-100'>Chat</h6>
                        </div>
                        <div className='h-50 d-flex align-items-center'>
                            <p >Some dummy text to fill space</p>
                        </div>

                    </div>
                    <div className='col'>
                        <div className='d-flex align-items-center'>
                            <Featured/>
                            <h6 className='fw-bold h-100'>Chat</h6>
                        </div>
                        <div className='h-50 d-flex align-items-center'>
                            <p >Some dummy text to fill space</p>
                        </div>

                    </div>
                    <div className='col'>
                        <div className='d-flex align-items-center'>
                            <Featured/>
                            <h6 className='fw-bold h-100'>Chat</h6>
                        </div>
                        <div className='h-50 d-flex align-items-center'>
                            <p >Some dummy text to fill space</p>
                        </div>

                    </div>
                </div>
        </section>
    </div>
  )
}

export default ContactUs