import { Button } from 'react-bootstrap';
import './Services.css';
import { CareerScene, CvScene, InterviewScene, LinkedinScene } from '../../icons/services';
import careerScene from '../../images/services/careerPlan.png';
import cvScene from '../../images/services/cv.png';
import interviewScene from '../../images/services/interview.png';
import linkedinScene from '../../images/services/linkedIn.png';

const Services = () => {
  return (
    <div id='services'>
        <section className='d-flex align-items-center justify-content-center' id='services-a'>
            <div className='d-flex-col align-items-center justify-content-center' id='services-content-a'>
                <h1 className='text-center fw-bold mb-5'>Your Ultimate Expert Guide for hunting the job you want.</h1>
                <p className='fs-5 text-center'>No matter what project you&#39;re working on, we&#39;ve got you covered with all the recruitment tools & techniques required.</p>
            </div>
        </section>
        <section id='services-b'>
          <div className='d-flex h-50 w-100 flex-column flex-lg-row'>
            <div className=' d-flex flex-column align-items-center justify-content-center w-100 h-100'>
              <h3>
                Interview Preparation
              </h3>
              <p className='text-center text-secondary'>
              Lorem ipsum dolor sit amet consectetur. Ut tincidunt quam sed in diam lobortis. Ornare velit pellentesque commodo ipsum orci eget. Condimentum penatibus libero in a lobortis lectus urna pretium. Vivamus tristique risus in commodo libero tristique purus feugiat at. Arcu felis tempus elementum at. Accumsan.
              </p>
              <Button className='btn-ternary'>
                Get Started
              </Button>
            </div>
            <div className='d-flex align-items-center justify-content-center w-100 h-100 rounded'>
              <img src={interviewScene} className='h-100'/>
            </div>
          </div>

          <div className='d-flex flex-column flex-lg-row-reverse h-50 w-100'>
            <div className=' d-flex flex-column align-items-center justify-content-center w-100 h-100'>
              <h3>
                Career Development
              </h3>
              <p className='text-center text-secondary'>
              Lorem ipsum dolor sit amet consectetur. Ut tincidunt quam sed in diam lobortis. Ornare velit pellentesque commodo ipsum orci eget. Condimentum penatibus libero in a lobortis lectus urna pretium. Vivamus tristique risus in commodo libero tristique purus feugiat at. Arcu felis tempus elementum at. Accumsan.
              </p>
              <Button className='btn-ternary'>
                Get Started
              </Button>
            </div>
            <div className='d-flex align-items-center justify-content-center w-100 h-100 rounded'>
              <img src={careerScene} className='h-100'/>
            </div>
          </div>
        </section>
        <section id='services-c'>
          <div className='d-flex flex-column flex-lg-row h-50 w-100'>
            <div className=' d-flex flex-column align-items-center justify-content-center w-100 h-100'>
              <h3>
                CV and Cover Letter 
              </h3>
              <p className='text-center text-secondary'>
              Lorem ipsum dolor sit amet consectetur. Ut tincidunt quam sed in diam lobortis. Ornare velit pellentesque commodo ipsum orci eget. Condimentum penatibus libero in a lobortis lectus urna pretium. Vivamus tristique risus in commodo libero tristique purus feugiat at. Arcu felis tempus elementum at. Accumsan.
              </p>
              <Button className='btn-ternary'>
                Get Started
              </Button>
            </div>
            <div className='d-flex align-items-center justify-content-center  w-100 h-100 rounded'>
              <img src={cvScene} className='h-100'/>
            </div>
          </div>

          <div className='d-flex flex-column flex-lg-row-reverse h-50 w-100'>
              <div className=' d-flex flex-column align-items-center justify-content-center w-100 h-100'>
                <h3>
                  LinkedIn Optimisation
                </h3>
                <p className='text-center text-secondary'>
                Lorem ipsum dolor sit amet consectetur. Ut tincidunt quam sed in diam lobortis. Ornare velit pellentesque commodo ipsum orci eget. Condimentum penatibus libero in a lobortis lectus urna pretium. Vivamus tristique risus in commodo libero tristique purus feugiat at. Arcu felis tempus elementum at. Accumsan.
                </p>
                <Button className='btn-ternary'>
                  Get Started
                </Button>
              </div>
              <div className='d-flex align-items-center justify-content-center w-100 h-100 rounded'>
                <img src={linkedinScene} className='h-100'/>
              </div>
          </div>
        </section>
    </div>
  )
}

export default Services