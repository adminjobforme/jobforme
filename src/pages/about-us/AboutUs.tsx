import './AboutUs.css';
import img1 from '../../images/about-us/topImage.jpg';
import img2 from '../../images/about-us/middleImage.jpg';
import img3 from '../../images/about-us/tomek.jpg';
import { Wish } from '../../icons/about-us';

const AboutUs = () => {
    return(
        <div className='d-flex flex-column' id='about-us'>
            <section className='w-100 d-flex flex-column justify-content-center align-items-center' id='about-us-a'>
                    <h1 className='text-center w-75 fw-bolder about-us-a-content' >
                        We want to find job hunters perfect opportunity and empower companies to find better employees.
                    </h1>
                    <p className=' text-center w-75 mt-3 faded about-us-a-content about-us-a-subtext'>
                        No matter what we’re working on, we&#39;ve got you covered with all the required tools & techniques in order for you, to be the best version of yourself.
                    </p>
            </section>
            <section className='d-flex flex-column p-5' id='about-us-b'>
                
            <div className='h-100 w-100 d-flex row row-cols-1 row-cols-lg-2'>
                <div className='col d-flex flex-column align-items-center justify-content-start'>
                    <div className='d-flex justify-content-start align-items-center my-2' id='about-us-vision-tag'>
                        <p className='text-center about-us-vision w-100 h-100 m-0 mt-2'>Vision of the founder</p>
                    </div>
                        <h2 className='fw-bolder w-75 mb-4'>
                            Who we are and what we do
                        </h2>
                        <div className='text-start' id='about-us-desc'>
                            We are a group of people with passion to help others aim higher and reach their potential. We were found in Dublin, Ireland in 2022, during the COVID-19 pandemic when a lot of people have unfortunately lost their jobs. Since then, we have successfully helped many of our clients find different opportunities to continue & grow their careers within several industries.
                            <br/> <br/>
                            We specialize in creating & reviewing of CV’s, cover letters, LinkedIn profiles, assisting people with job hunting, interview preparations on which we cover the most important topics, to prepare you in a best possible way. We also offer career development plans, in which we discuss your career growth, what you can do to grow even bigger or if you’re unsure which path you would like to take in life, we can discuss this topic and do our best to find the right one.
                        </div>
                </div>
                <div className='col d-flex align-items-center justify-content-center'>
                    <h1 className='w-100 h-75 d-flex align-items-center justify-content-center about-us-image-round'>
                        <img src={img1} className='img-fluid' alt='laughter-image'></img>
                    </h1>
                </div>
            </div>

                <div className='h-100 w-100 d-flex flex-lg-row-reverse row row-cols-1 row-cols-lg-2'>
                    <div className='col d-flex flex-column align-items-center justify-content-start'>
                        <div className='d-flex justify-content-center align-items-center my-2' id='about-us-vision-tag'>
                            <p className='text-center about-us-vision w-100 h-100 m-0 mt-2'>Vision of the founder</p>
                        </div>
                        <h2 className='fw-bolder w-75 mb-4'>
                            Our work is our passion
                        </h2>
                        <div id='about-us-desc'>
                            <div className='col w-100  mx-auto'>
                                <div className='row'>
                                    <h4 className='text-start fw-bolder mx-2'>
                                        <Wish /> &nbsp; The Customer is our priority
                                    </h4>
                                </div>
                                <p className='text-start'>
                                    It’s a service made by people, for people. To each of our clients we come up individually, seriously and with priority.
                                </p>
                            </div>
                            <div className='col w-100  mx-auto'>
                                <div className='row justify-content-start'>
                                    <h4 className='text-start fw-bolder mx-2'>
                                        <Wish /> &nbsp; Secure and reliable
                                    </h4>
                                </div>
                                <p className='text-start'>
                                    Our website is 100% secure, therefore any payments made go directly to us and once the funds will be received, we will contact you as soon as possible regarding your application.
                                </p>
                            </div>
                            <div className='col w-100  mx-auto'>
                                <div className='row d-inline'> 
                                    <h4 className='text-start fw-bolder mx-2'>
                                        <Wish /> &nbsp; Price & Professionalism
                                    </h4>
                                </div>
                                <p className='text-start'>
                                    We offer one of the best prices and most professional service within this sector in Ireland.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col d-flex align-items-center justify-content-center'>
                        <h1 className='w-100 h-75 d-flex align-items-center justify-content-center about-us-image-round'>
                            <img src={img2} className='img-fluid' alt='laughter-image'></img>
                        </h1>
                    </div>
                </div>

                <div className='h-100 w-100 d-flex row row-cols-1 row-cols-lg-2'>
                    <div className='col d-flex flex-column align-items-center justify-content-start'>
                        <div className='d-flex justify-content-start align-items-center my-2' id='about-us-vision-tag'>
                            <p className='text-center about-us-vision w-100 h-100 m-0 mt-2'>Vision of the founder</p>
                        </div>
                        <h2 className='text-center fw-bolder w-75 mb-4'>
                            Founder&#39;s words
                        </h2>
                        <div className='d-flex flex-column align-items-center w-100'>
                            <p className='text-center m-0' id='about-us-desc'>
                                My passion was always to help people and bring out the best version of themselves. Past experience has led me to collide passion with work and set up JOB4ME. Service made by people, for people.
                            </p>
                            <br></br>
                            <h6 className='fw-bold mb-0'>Tomasz Schlass</h6>
                            <p className='p-0 mt-0 faded'>CEO - JobForMe</p>
                        </div>
                    </div>
                    <div className='col d-flex align-items-center justify-content-center'>
                        <h1 className='w-100 h-75 d-flex align-items-center justify-content-center about-us-image-round'>
                            <img src={img3} className='img-fluid about-us-image-round' alt='ceo-image'></img>
                        </h1>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default AboutUs;