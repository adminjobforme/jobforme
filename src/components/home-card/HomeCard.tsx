import { Edit, Featured, Web } from '../../icons/home-icons';
import { HomeCardModel } from '../../shared/home-card-model';
import './HomeCard.css';

const HomeCard = (homeCardModel: HomeCardModel) => {
  return (
    <div className={homeCardModel.mostPopular? 'homecard-special col my-2' : 'border col my-2'} id='homecard'>
        <div className='d-flex flex-column homecard-special-body' id='homecard-content'>
            <div className='d-flex flex-column h-50 mx-2 py-2'>

                <div className='d-flex justify-content-between align-items-center pb-2 h-50'>
                    <div>
                        {homeCardModel.icon()}
                    </div>
                    <div>
                        {homeCardModel.mostPopular? <p className='text-center p-1 bg-white' id='homecard-header-tag'>Most popular</p> : ''}
                    </div>
                </div> 
                <div className='d-flex flex-column h-100'>
                    <h6 className='fw-bold'>
                        {homeCardModel.header}
                    </h6>
                    <p className='homecard-text' id='homecard-body-subheader'>
                        {homeCardModel.subheader}
                    </p>
                </div>
                <div className='d-flex align-itmes-end justify-content-start h-50'>
                    <h2>€{homeCardModel.pricing.value}</h2>
                    <div className='d-flex align-items-center justify-content-end h-100'>
                        <p className='p-0 mx-1 homecard-text' id='homecard-body-subheader'>/ {homeCardModel.pricing.offer}</p>
                    </div>
                </div> 
            </div>

            <div className='h-50 mx-2 d-flex flex-column align-items-center justify-content-around' id='homecard-body'>
                <div className='d-flex py-1'>
                    <div>
                        <Web/>
                    </div>
                    <div className='w-75 mx-3 d-flex flex-column justify-content-center'>
                        <h6 className='text-start homecard-info-header-text-size m-0 p-0 fw-bold'>Free Consultation Included</h6>
                        <p className='text-start homecard-info-text-size m-0 p-0 homecard-text'>Up to 30 minute consultation with one of our experts</p>
                    </div>
                </div>
                <div className='d-flex py-1'>
                    <div>
                        <Edit/>
                    </div>
                    <div className='w-75 mx-3 d-flex flex-column justify-content-center'>
                        <h6 className='text-start homecard-info-header-text-size m-0 p-0 fw-bold'>Up to one week to make changes</h6>
                        <p className='text-start homecard-info-text-size m-0 p-0 homecard-text'>Unsure about something, or would like to edit it? We can change that for you up to 1 week after receiving the finalized product</p>
                    </div>
                </div>
                <div className='d-flex py-1'>
                    <div>
                        <Featured/>
                    </div>
                    <div className='w-75 mx-3 d-flex flex-column justify-content-center'>
                        <h6 className='text-start homecard-info-header-text-size m-0 p-0 fw-bold'>2-4 days of waiting time</h6>
                    </div>
                </div>
            </div>

            <div className='d-flex align-items-center justify-content-center p-2' id='homecard-button-div'>
                <button className={homeCardModel.mostPopular? 'homecard-btn-special' : 'homecard-btn-normal'} id='homecard-button'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default HomeCard