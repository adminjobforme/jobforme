import { Alert } from 'react-bootstrap';
import { Edit, Featured, Web } from '../../icons/home-icons';
import './HomeCard.css';

const HomeCard = () => {
  return (
    <div className='border col' id='homecard'>
        <div className='d-flex flex-column' id='homecard-content'>
            <div className='d-flex flex-column h-50 mx-2 py-2'>

                <div className='d-flex justify-content-between align-items-center pb-2 h-50'>
                    <div>
                        <Featured/>
                    </div>
                    <div>
                        <p className='text-center border p-1 background-white' id='homecard-header-tag'>Most popular</p>
                    </div>
                </div> 
                <div className='d-flex flex-column h-100'>
                    <h6 className='fw-bold'>
                        CV, Cover Letter or LinkedIn account (Choose One)
                    </h6>
                    <p className='faded' id='homecard-body-subheader'>
                        Professional CV, Cover Letter or LinkedIn account written by our team
                    </p>
                </div>
                <div className='d-flex align-itmes-end justify-content-start h-50'>
                    <h2>€60</h2>
                    <div className='d-flex align-items-end justify-content-end h-100'>
                        <p className='p-0 mb-2 mx-1 faded' id='homecard-body-subheader'>/Single</p>
                    </div>
                </div> 
            </div>

            <div className='h-50 mx-2 d-flex flex-column align-items-center justify-content-around' id='homecard-body'>
                <div className='d-flex py-1'>
                    <div>
                        <Web/>
                    </div>
                    <div className='w-75 mx-3 d-flex flex-column justify-content-center'>
                        <h6 className='text-start homecard-info-header-text-size m-0 p-0 fw-bold'>Unlimited viewers</h6>
                        <p className='text-start homecard-info-text-size m-0 p-0 faded'>Easily customizable global styles</p>
                    </div>
                </div>
                <div className='d-flex py-1'>
                    <div>
                        <Edit/>
                    </div>
                    <div className='w-75 mx-3 d-flex flex-column justify-content-center'>
                        <h6 className='text-start homecard-info-header-text-size m-0 p-0 fw-bold'>Unlimited viewers</h6>
                        <p className='text-start homecard-info-text-size m-0 p-0 faded'>Easily customizable global styles</p>
                    </div>
                </div>
                <div className='d-flex py-1'>
                    <div>
                        <Featured/>
                    </div>
                    <div className='w-75 mx-3 d-flex flex-column justify-content-center'>
                        <h6 className='text-start homecard-info-header-text-size m-0 p-0 fw-bold'>Unlimited viewers</h6>
                        <p className='text-start homecard-info-text-size m-0 p-0 faded'>Easily customizable global styles</p>
                    </div>
                </div>
            </div>

            <div className='d-flex align-items-center justify-content-center p-2' id='homecard-button-div'>
                <button className='homecard-btn-normal' id='homecard-button'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default HomeCard