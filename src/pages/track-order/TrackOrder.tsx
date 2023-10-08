import { Form, InputGroup } from 'react-bootstrap';
import './TrackOrder.css';
import { useState } from 'react';
import { getOrder } from '../../shared/utils/firestore-utils';
import { Order } from '../../shared/models/order-model';
import { OrderType } from '../../shared/enums/order-type';
import { OrderStatus } from '../../shared/enums/order-status';
import { AiFillCheckCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const TrackOrder = () => {
    const [orderNumber, setOrderNumber] = useState<string>('');
    const [orderData, setOrderData] = useState<Order>();

    const handleSubmit = async () => {
        try{
            await getOrder(orderNumber)
            .then((o) => {o != undefined ? setOrderData(o as Order) : alert('Please ensure the number you entered is correct and try again')});
        }catch(err){
            console.log(err);
        }
    }

  return (
    <div className='d-flex flex-column'>
        <div className='d-flex justify-content-center align-items-center' id='track-order-top'>
            <div className='d-flex flex-column align-items-center w-75' id='track-order-content'>
                <h1 className='fw-bold text-center'>
                    Enter the tracking number and we will tell you everything about it.
                </h1>
                <div className='mt-5 d-flex align-items-center justify-content-center w-100'>
                    <InputGroup>
                        <Form.Control
                        placeholder="Enter Tracking Number..."
                        aria-label="Track Order Input"
                        aria-describedby="basic-addon2"
                        className='mx-3'
                        id='track-order-input'
                        onChange={(e) => setOrderNumber(e.target.value)}
                        />
                    </InputGroup>
                    <button className='btn-ternary' id='track-order-submit' onClick={() => handleSubmit()}>
                        Submit
                    </button>
                </div>
            </div>
        </div>

        { orderData ? <div className='d-flex justify-content-center align-items-center' id='track-order-bottom'>
            <div className='d-flex flex-column align-items-center w-75' id='track-order-content'>
                <div>
                    <h1 className='fw-bold text-center mt-5'>
                        Order Status
                    </h1>
                    <p className='track-order-status-message text-center'>
                        Order <strong>#{orderData.orderId}</strong> is on its way and will be delivered to you in couple of working days.
                    </p>
                </div>
                <div className='mt-5 d-flex flex-column flex-lg-row align-items-center justify-content-between w-75'>
                    <div className='w-75 d-flex flex-column align-items-center' id='track-order-info'>
                        { orderData.orderStatus == OrderStatus.PROCESSING || orderData.orderStatus == OrderStatus.RECEIVED || orderData.orderStatus == OrderStatus.DELIVERED
                        ? <AiFillCheckCircle fill='#169B62' size='40px' className='mb-4'/>
                        : <div className='spinner-border mb-4' id='track-order-spinner'/>}
                        <div>
                            <h5 className='fw-bold mb-0 text-center'>Received</h5>
                            <p className='fw-lighter faded-subheader mt-0 text-center'>{orderData.created.substring(0,10)}</p>
                        </div>
                        <div>
                            <p className='track-order-status-message text-center'>
                                Your order has been received and will be processed shortly
                            </p>
                        </div>
                    </div>
                    <div className='d-flex flex-column align-items-center w-75' id='track-order-info'>
                        { orderData.orderStatus == OrderStatus.PROCESSING || orderData.orderStatus == OrderStatus.DELIVERED
                        ? <AiFillCheckCircle fill='#169B62' size='40px' className='mb-4'/>
                        : <div className='spinner-border mb-4' id='track-order-spinner'/>}
                        <div>
                            <h5 className='fw-bold mb-0 text-center'>Processing</h5>
                            <p className='fw-lighter faded-subheader mt-0 text-center'>
                                {orderData.orderStatus == OrderStatus.PROCESSING || orderData.orderStatus == OrderStatus.DELIVERED
                                ? orderData.created.substring(0,10) 
                                : 'N/A'}
                            </p>
                        </div>
                        <div>
                            <p className='track-order-status-message text-center'>
                                Your order is currently being processed and will be delivered soon
                            </p>
                        </div>
                    </div>
                    <div className='d-flex flex-column align-items-center w-75' id='track-order-info'>
                            { orderData.orderStatus == OrderStatus.DELIVERED
                            ? <AiFillCheckCircle fill='#169B62' size='40px' className='mb-4'/>
                            : <div className='spinner-border mb-4' id='track-order-spinner'/>}
                        <div>
                            <h5 className='fw-bold mb-0 text-center'>Delivered</h5>
                            <p className='fw-lighter faded-subheader mt-0 text-center'>
                                {orderData.orderStatus == OrderStatus.DELIVERED 
                                ? 'Check your email'
                                : 'N/A'}
                            </p>
                        </div>
                        <div>
                            <p className='track-order-status-message text-center'>
                                Your order has been delivered. Thank you for choosing JobForMe!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div> : null}
    </div>
  )
}

export default TrackOrder