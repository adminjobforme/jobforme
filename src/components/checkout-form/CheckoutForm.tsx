import { Button, Form } from 'react-bootstrap';
import './CheckoutForm.css';
import { createStripeCheckout } from '../../shared/utils/firebase-functions';
import { checkoutItems } from './checkout-items';
import { useRef, useState } from 'react';
import { ProductModel } from '../../shared/models/product-model';
import FormOptions from './FormOptions';
import { OrderStatus } from '../../shared/enums/order-status';
import { OrderType } from '../../shared/enums/order-type';
import { PaymentStatus } from '../../shared/enums/payment-status';
import { addOrder } from '../../shared/utils/firestore-utils';
import { FileUploadModel } from '../../shared/models/file-upload-model';
import { FormOptionsModel } from './form-options-model';
import { orderTypes } from './order-types';
import { signInAnonymously } from 'firebase/auth';
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';



const CheckoutForm = () => {

  const [product, setProduct] = useState<ProductModel>(checkoutItems[0]);
  const [option, setOption] = useState<string>('0');
  const [displayOption, setDisplayOption] = useState<boolean>(true);
  const [disableButton, setDisableButton] = useState<boolean>(false);
 
  const ref = useRef<FormOptionsModel>({cv: null, coverLetter: null, linkedIn: null});
  const [fname, setFname] = useState<string>('');
  const [lname, setLname] = useState<string>('');
  const [orderType, setOrderType] = useState<OrderType[]>([OrderType.CV]);
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const anonymousSignIn = async () => {
    return await signInAnonymously(auth)
    .then((user) => { return user})
    .catch((err) => console.log(err));
  }

  const handleFormOnChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDisplayOption(false);
    await setOption(e.target.value);
    setDisplayOption(true);
    await setProduct(checkoutItems[e.target.value as unknown as number]);
    await setOrderType(orderTypes[e.target.value as unknown as number]);
  }

  const handleCheckout = async () => { 
    await setDisableButton(true);
    const refFileUploads: FileUploadModel = {
        cv: ref.current.cv?.files? ref.current.cv?.files[0] : undefined,
        coverLetter: ref.current.coverLetter?.files? ref.current.coverLetter?.files[0] : undefined
    }

    let link = '';
    let id: string;
    const user = await anonymousSignIn();
    if(user) {
        await createStripeCheckout(product).then(async (response) => {
        const sessionData = response.data as {url: string, id: string};
        link = sessionData.url;
        id = sessionData.id
        console.log(id)
        await addOrder({
          created: (new Date()).toISOString(),
          firstname: fname,
          surname: lname,
          email: email,
          orderId: id,
          amount: product.unitAmount/100,
          orderStatus: OrderStatus.RECEIVED,
          orderType: orderType,
          paymentStatus: PaymentStatus.PROCESSING,
          phone: phone,
          files: refFileUploads,
          link: ref.current?.linkedIn?.value || ''
        }).catch((e) => {console.log(e)});
        window.location.assign(link)
        }).catch((e) => {console.log(e)})
    }else{
        console.log('authentication error')
    }
  }

  const validateForm = (): boolean => {
    if(fname == '' || lname == '' || phone == '' || isValidEmail(email) == false) return false;
    if(orderType.includes(OrderType.CV)) {
        return ref.current.cv?.files? ref.current.cv?.files.length > 0 : false;
    }
    if(orderType.includes(OrderType.COVER_LETTER)) {
        return ref.current.coverLetter?.files? ref.current.coverLetter?.files.length > 0 : false;
    }
    if(orderType.includes(OrderType.LINKEDIN)) {
        return isValidUrl(ref.current.linkedIn?.value as string);
    }

    return true;
  }

  const isValidEmail = (address: string): boolean => {
    return /\S+@\S+\.\S+/.test(address);
  }

  const isValidUrl = (address: string): boolean => {
    try {
        new URL(address);
        return true;
    }catch {
        return false;
    }
  }


  return (
    <div className='d-flex flex-column align-items-center justify-content-center w-100 h-100' id='checkout-form'>
        <Form className='d-flex flex-column align-items-center'>
            <div className='d-flex justify-content-around'>
                <Form.Group className="mb-3 mx-2 w-50" controlId="formBasicFirst">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type='text' placeholder="First Name" required onChange={(e) => setFname(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3 mx-2 w-50" controlId="formBasicLast">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type='text' placeholder="Last Name" required onChange={(e) => setLname(e.target.value)} />
                </Form.Group>
            </div>
            <div className='d-flex justify-content-between'>
                <Form.Group className="mb-3 mx-2 w-50" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" className='form-control' placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3 mx-2 w-50" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" placeholder="Phone" required onChange={(e) => setPhone(e.target.value)}/>
                </Form.Group>
            </div>

            <div className='mb-3'>
            <Form.Group>
                <Form.Label className='text-center w-100'>Select a Service</Form.Label>
                <Form.Select onChange={(e) => handleFormOnChange(e)} aria-label="service selector">
                    <option disabled>-- Single Services --</option>
                    <option value="0">CV</option>
                    <option value="1">Cover Letter</option>
                    <option value="2">LinkedIn Review</option>
                    <option value="3">Interview Preparation</option>
                    <option value="4">Career Development Plan</option>
                    <option disabled>-- Double Services --</option>
                    <option value="5">CV and Cover Letter</option>
                    <option value="6">CV and LinkedIn Profile</option>
                    <option value="7">Cover Letter and LinkedIn</option>
                    <option disabled>-- Triple Services --</option>
                    <option value="8">CV, Cover Letter and LinkedIn</option>
                </Form.Select>
            </Form.Group>
            </div>
            {displayOption ? <FormOptions ref={ref} key={option} option={option}/> : (<></>)}

            <div className='d-flex flex-column align-items-center w-100 justify-content-center'>
                <p>By clicking &#39;Checkout&#39; you are agreeing to our <Link  rel='noreferrer' target='_blank' to='/terms-and-conditions'>Terms and Conditions</Link></p>
                <Button className='btn-ternary w-25' disabled={disableButton} onClick={() => {validateForm() ? handleCheckout() : alert('please fill in all fields and attach all relevant files')}}>
                    { disableButton ? <div className='spinner-border text-light'/> : 'Checkout'}
                </Button>
            </div>

        </Form>
    </div>
  )
}

export default CheckoutForm