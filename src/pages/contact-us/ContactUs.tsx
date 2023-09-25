import { Button, Form } from 'react-bootstrap';
import './ContactUs.css';
import FaqDropdown from '../../components/faq-dropdown/FaqDropdown';
import { Email, Phone } from '../../icons/contact-us';
import { sendSupportMail } from '../../shared/utils/firebase-functions';
import { useState } from 'react';
import { faqOptions } from './faq-options';

const ContactUs = () => {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [question, setQuestion] = useState<string>('');
  const [disabledButton, setDisabledButton] = useState<boolean>(false);

  const handleSubmit = async () => {
    setDisabledButton(true)
    await sendSupportMail({
        fname: name,
        recipient: email,
        phone: phone,
        question: question,
    })
  }

  const isValidForm = (): boolean => {
    if(name  === '' || phone === '' || question === '' || !isValidEmail(email)) return false;
    return true;
  }

  const isValidEmail = (address: string): boolean => {
    return /\S+@\S+\.\S+/.test(address);
  }

  return (
    <div className='d-flex flex-column' id='contact-us'>

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
                <h3 className='fw-bold d-flex align-items-center h-25 mt-5'>Frequently Asked Questions</h3>
                <div className=' d-flex flex-column h-75 w-75 mt-5'>
                    {faqOptions.map((option, index) => {return(
                        <FaqDropdown question={option.question} info={option.info} key={index}/>
                    )})}
                </div>
        </section>

        <section className='d-flex flex-column justify-content-center align-items-center' id='contact-us-c'>
                <h3 className='fw-bold d-flex align-items-center justify-content-center text-center w-75 h-25'>Still Not able to find the answers? <br/> Send us a message</h3>
                <div className='h-75 w-75 d-flex flex-column align-items-center justify-content-around'>
                    <Form.Group className='h-100 d-flex flex-column align-items-center w-75'>
                        <Form.Control
                        placeholder="Name"
                        aria-label="Contact Us Name"
                        aria-describedby="basic-addon2"
                        type='name'
                        className='rounded my-2'
                        onChange={(e) => setName(e.target.value)}
                        />
                        <Form.Control
                        placeholder="Email"
                        aria-label="Contact Us Email"
                        aria-describedby="basic-addon2"
                        type='email'
                        className='rounded my-2'
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Control
                        placeholder="Phone Number"
                        aria-label="Contact Us Phone"
                        aria-describedby="basic-addon2"
                        type='tel'
                        className='rounded my-2'
                        onChange={(e) => setPhone(e.target.value)}
                        />
                        <Form.Control
                        placeholder="Question"
                        aria-label="Contact Us Description"
                        aria-describedby="basic-addon2"
                        className='rounded my-2 h-25'
                        type='text'
                        as='textarea'
                        rows={3}
                        onChange={(e) => setQuestion(e.target.value)}
                        />
                        <Button className='btn-ternary w-50' type='submit' id='track-order-submit' disabled={disabledButton} onClick={() => {isValidForm() ? handleSubmit() : alert('please complete the form')}}>
                            {disabledButton ? 'Message Sent!' : 'Submit'}
                        </Button>
                    </Form.Group>
                </div>
        </section>

        <section className='d-flex flex-column justify-content-center align-items-center pt-5' id='contact-us-d'>
                <h3 className='fw-bold d-flex align-items-center justify-content-center mb-3 w-75 h-25'>Still Not satisfied, contact us through these options.</h3>
                <div className='h-100 w-100 d-flex flex-column flex-lg-row justify-content-center align-items-center'>
                    <div className='w-50 my-2 d-flex flex-column align-items-center justify-content-center'>
                        <div className='d-flex align-items-center'>
                            <Phone/>
                            <h6 className='fw-bold h-100 mx-3'>Phone</h6>
                        </div>
                        <div className='h-50 d-flex align-items-center mt-2'>
                            <p>Phone us at <a href='tel:+353894226543' className='text-decoration-none'>+353894226543</a></p>
                        </div>
                    </div>

                    <div className='w-50 my-2 d-flex flex-column align-items-center justify-content-center'>
                        <div className='d-flex align-items-center'>
                            <Email/>
                            <h6 className='fw-bold h-100 mx-3'>Email</h6>
                        </div>
                        <div className='h-50 d-flex align-items-center mt-2'>
                            <p>email us at <a href='mailto:support@jobforme.ie' className='text-decoration-none'>help@jobforme.ie</a></p>
                        </div>
                    </div>

                </div>
        </section>
    </div>
  )
}

export default ContactUs