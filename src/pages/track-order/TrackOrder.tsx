import { Form, InputGroup } from 'react-bootstrap';
import './TrackOrder.css';
import { Spinner } from '../../icons/track-order';

const TrackOrder = () => {
  return (
    <div className='d-flex flex-column'>
        <div className='d-flex justify-content-center align-items-center' id='track-order-top'>
            <div className='d-flex flex-column align-items-center w-75' id='track-order-content'>
                <h1 className='fw-bold text-center'>
                    Enter the tracking number and we will tell you everything about it.
                </h1>
                <div className='mt-5 d-flex align-items-center justify-content-center w-75'>
                    <InputGroup className="">
                        <Form.Control
                        placeholder="Enter Tracking Number..."
                        aria-label="Track Order Input"
                        aria-describedby="basic-addon2"
                        className='mx-3'
                        id='track-order-input'
                        />
                    </InputGroup>
                    <button className='btn-ternary' id='track-order-submit'>
                        Submit
                    </button>
                </div>
            </div>
        </div>

        <div className='d-flex justify-content-center align-items-center' id='track-order-bottom'>
            <div className='d-flex flex-column align-items-center w-75' id='track-order-content'>
                <div>
                    <h1 className='fw-bold text-center'>
                        Order Status
                    </h1>
                    <p className='track-order-status-message'>
                        Order # 421 14444 222 111 111 is on its way and will be delivered to you in couple of working days.
                    </p>
                </div>
                <div className='mt-5 d-flex align-items-center justify-content-between w-75'>
                    <div className='w-25 d-flex flex-column justify-content-center align-items-center'>
                        <div className='spinner-border mb-4' id='track-order-spinner'>
                        
                        </div>
                        <div>
                            <h5 className='fw-bold mb-0 text-center'>Order step #01</h5>
                            <p className='fw-lighter faded-subheader mt-0 text-center'>Released on Jan 1st 2020</p>
                        </div>
                        <div>
                            <p className='track-order-status-message text-center'>
                                Lorem ipsum dolor sit amet consectetur. Elementum eros ac non eget feugiat velit diam.
                            </p>
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center w-25'>
                        <div className='spinner-border mb-4' id='track-order-spinner'>
                        
                        </div>
                        <div>
                            <h5 className='fw-bold mb-0 text-center'>Order step #02</h5>
                            <p className='fw-lighter faded-subheader mt-0 text-center'>Released on Jan 1st 2020</p>
                        </div>
                        <div>
                            <p className='track-order-status-message text-center'>
                                Lorem ipsum dolor sit amet consectetur. Elementum eros ac non eget feugiat velit diam.
                            </p>
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center w-25'>
                        <div className='spinner-border mb-4' id='track-order-spinner'>
                        
                        </div>
                        <div>
                            <h5 className='fw-bold mb-0 text-center'>Order step #03</h5>
                            <p className='fw-lighter faded-subheader mt-0 text-center'>Released on Jan 1st 2020</p>
                        </div>
                        <div>
                            <p className='track-order-status-message text-center'>
                                Lorem ipsum dolor sit amet consectetur. Elementum eros ac non eget feugiat velit diam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrackOrder