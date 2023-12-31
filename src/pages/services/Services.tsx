import { Button } from 'react-bootstrap';
import './Services.css';
import careerScene from '../../images/services/careerPlan.png';
import cvScene from '../../images/services/cv.png';
import interviewScene from '../../images/services/interview.png';
import linkedinScene from '../../images/services/linkedIn.png';
import { Link } from 'react-router-dom';

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
          <div className='d-flex align-items-center justify-content-center h-50 w-100 flex-column flex-lg-row mt-5'>
            <div className='d-flex flex-column align-items-center justify-content-center w-100 h-100'>
              <h3>
                Interview Preparation
              </h3>
              <p className='text-center text-secondary' id='services-text'>
              Are you ready to land that dream job? Our company specializes in providing comprehensive interview preparation services designed to give you the competitive edge in today&#39;s competitive job market. Our team of experienced professionals is dedicated to equipping you with the skills, confidence, and strategies you need to excel in interviews.
              </p>
              <Link to='/checkout' className='text-decoration-none'>
                  <Button className='btn-ternary'>
                    Get Started
                  </Button>
                </Link>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-5' id='services-image-round'>
              <img src={interviewScene} className='img-fluid'/>
            </div>
          </div>

          <div className='d-flex flex-column align-items-center justify-content-center flex-lg-row-reverse h-50 w-100 mt-5'>
            <div className=' d-flex flex-column align-items-center justify-content-center w-100 h-100'>
              <h3>
                Career Development
              </h3>
              <p className='text-center text-secondary' id='services-text'>
                Our tailored approach to career development covers a diverse range of industries and roles, ensuring that your plan is customized to your unique goals. Whether you&#39;re aiming for a promotion, exploring a career transition, or seeking to enhance your skills, our comprehensive services are designed to propel you forward.
              </p>
              <Link to='/checkout' className='text-decoration-none'>
                  <Button className='btn-ternary'>
                    Get Started
                  </Button>
                </Link>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-5' id='services-image-round'>
              <img src={careerScene} className='img-fluid'/>
            </div>
          </div>
        </section>
        <section id='services-c'>
          <div className='d-flex flex-column align-items-center justify-content-center flex-lg-row h-50 w-100 mt-5'>
            <div className=' d-flex flex-column align-items-center justify-content-center w-100 h-100'>
              <h3 className='text-center'>
                CV, Cover Letter and LinkedIn Optimisation
              </h3>
              <p className='text-center text-secondary' id='services-text'>
                We know that a well-crafted CV, accompanied by a persuasive cover letter and a strategically optimised LinkedIn profile, can open doors to exciting opportunities. Our proven track record of success includes helping numerous individuals like you achieve their professional objectives.              </p>
                <Link to='/checkout' className='text-decoration-none'>
                  <Button className='btn-ternary'>
                    Get Started
                  </Button>
                </Link>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-5' id='services-image-round'>
              <img src={cvScene} className='img-fluid'/>
            </div>
          </div>

          <div className='d-flex flex-column align-items-center justify-content-center flex-lg-row-reverse h-50 w-100 mt-5'>
              <div className=' d-flex flex-column align-items-center justify-content-center w-100 h-100'>
                <h3>
                  More Questions?
                </h3>
                <p className='text-center text-secondary' id='services-text'>
                  Having some doubts or questions or maybe you’re interested in services offered above? Please check out our <a href='/contact-us'>FAQ’s</a> & do not hesitate by writing to   <a href='mailto:help@jobforme.ie'>help@jobforme.ie</a>  if you did not find an answer to your question.
                </p>
                <Link to='/checkout' className='text-decoration-none'>
                  <Button className='btn-ternary'>
                    Get Started
                  </Button>
                </Link>
              </div>
              <div className='d-flex align-items-center justify-content-center' id='services-image-round'>
                <img src={linkedinScene} className='img-fluid'/>
              </div>
          </div>
        </section>
    </div>
  )
}

export default Services