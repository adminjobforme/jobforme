import './AboutUs.css';
import img1 from '../../images/about-us/topImage.jpg';
import img2 from '../../images/about-us/middleImage.jpg';

const AboutUs = () => {
    return(
        <div className='d-flex flex-column' id='about-us'>
            <section className='w-100 d-flex flex-column justify-content-center align-items-center' id='about-us-a'>
                    <h1 className='text-center w-75 fw-bolder about-us-a-content' >
                        We want to find job hunters perfect opportunity and empower companies to find better employees.
                    </h1>
                    <p className='w-75 text-center mt-3 faded about-us-a-content about-us-a-subtext'>
                        No matter what we’re working on, we&#39;ve got you covered with all the required tools & techniques in order for you, to be the best version of yourself.
                    </p>
            </section>
            <section className='d-flex flex-column p-5' id='about-us-b'>
                
                <div className='d-flex justify-content-center align-items-center my-2' id='about-us-vision-tag'>
                    <p className='text-center about-us-vision w-100 h-100 m-0 mt-2'>Vision of the founder</p>
                </div>
                <div className='h-100 w-100 row row-cols-1 row-cols-lg-2'>
                    <div className='col d-flex flex-column align-items-start justify-content-start'>
                        <h2 className='fw-bolder w-75 mb-4'>
                            Who we are and what we do
                        </h2>
                        <p className='text-start w-75'>
                            We are a group of people with passion to help others aim higher and reach their potential. We were found in Dublin, Ireland in 2022, during the COVID-19 pandemic when a lot of people have unfortunately lost their jobs. Since then, we have successfully helped many of our clients find different opportunities to continue & grow their careers within several industries.
                            <br/> <br/>
                            We specialize in creating & reviewing of CV’s, cover letters, LinkedIn profiles, assisting people with job hunting, interview preparations on which we cover the most important topics, to prepare you in a best possible way. We also offer career development plans, in which we discuss your career growth, what you can do to grow even bigger or if you’re unsure which path you would like to take in life, we can discuss this topic and do our best to find the right one.
                        </p>
                    </div>
                    <div className='col d-flex align-items-center justify-content-center'>
                        <h1 className='w-100 h-75 border d-flex align-items-center justify-content-center about-us-image-round'>
                            <img src={img1} className='img-fluid' alt='laughter-image'></img>
                        </h1>
                    </div>
                </div>

                <div className='d-flex justify-content-center align-items-center my-2' id='about-us-vision-tag'>
                    <p className='text-center about-us-vision w-100 h-100 m-0 mt-2'>Vision of the founder</p>
                </div>
                <div className='h-100 w-100 row row-cols-1 row-cols-lg-2'>
                    <div className='col d-flex flex-column align-items-start justify-content-start'>
                        <h2 className='fw-bolder w-75 mb-4'>
                            Who we are and what we do
                        </h2>
                        <p className='text-start w-75'>
                            We are a group of people with passion to help others aim higher and reach their potential. We were found in Dublin, Ireland in 2022, during the COVID-19 pandemic when a lot of people have unfortunately lost their jobs. Since then, we have successfully helped many of our clients find different opportunities to continue & grow their careers within several industries.
                            <br/> <br/>
                            We specialize in creating & reviewing of CV’s, cover letters, LinkedIn profiles, assisting people with job hunting, interview preparations on which we cover the most important topics, to prepare you in a best possible way. We also offer career development plans, in which we discuss your career growth, what you can do to grow even bigger or if you’re unsure which path you would like to take in life, we can discuss this topic and do our best to find the right one.
                        </p>
                    </div>
                    <div className='col d-flex align-items-center justify-content-center'>
                        <h1 className='w-100 h-75 border d-flex align-items-center justify-content-center about-us-image-round'>
                            <img src={img2} className='img-fluid' alt='laughter-image'></img>
                        </h1>
                    </div>
                </div>

                <div className='d-flex justify-content-center align-items-center my-2' id='about-us-vision-tag'>
                    <p className='text-center about-us-vision w-100 h-100 m-0 mt-2'>Vision of the founder</p>
                </div>
                <div className='h-100 w-100 row row-cols-1 row-cols-lg-2'>
                    <div className='col d-flex flex-column align-items-start justify-content-start'>
                        <h2 className='fw-bolder w-75 mb-4'>
                            Who we are and what we do
                        </h2>
                        <p className='text-start w-75'>
                            We are a group of people with passion to help others aim higher and reach their potential. We were found in Dublin, Ireland in 2022, during the COVID-19 pandemic when a lot of people have unfortunately lost their jobs. Since then, we have successfully helped many of our clients find different opportunities to continue & grow their careers within several industries.
                            <br/> <br/>
                            We specialize in creating & reviewing of CV’s, cover letters, LinkedIn profiles, assisting people with job hunting, interview preparations on which we cover the most important topics, to prepare you in a best possible way. We also offer career development plans, in which we discuss your career growth, what you can do to grow even bigger or if you’re unsure which path you would like to take in life, we can discuss this topic and do our best to find the right one.
                        </p>
                    </div>
                    <div className='col d-flex align-items-center justify-content-center'>
                        <h1 className='w-100 h-75 border d-flex align-items-center justify-content-center about-us-image-round'>
                            <img src={img1} className='img-fluid' alt='laughter-image'></img>
                        </h1>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default AboutUs;