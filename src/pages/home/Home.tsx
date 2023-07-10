import HomeCard from '../../components/home-card/HomeCard';
import Loading from '../../components/loading/Loading';
import './Home.css';
import { homeServices } from './home-services';

const Home = () => {
    return(
        <div className='d-flex flex-column' id='home'>
            <section className='d-flex align-items-center justify-content-center' id='home-a'>
                <div className='d-flex-col align-items-center justify-content-center' id='home-content-a'>
                    <h1 className='text-center fw-bold mb-5'>Enhance your potential with us.</h1>
                    <p className='fs-5 text-center'>Need help with CV, landing your dream job or career guidance? <br/> Contact us, we&#39;re here to help!</p>
                </div>
            </section>

            <section className='d-flex-col align-items-stretch' id='home-b'>
                <div id='home-b-1'>
                    <h1 className='text-center fw-bold w-75'>
                        One platform, all the help you need to find the right workplace.
                    </h1>
                    <div className='d-flex text-center w-50'>
                        <p className='faded'>
                            At JOB4ME, we offer services that will help you grow, enhance your potential, and offer advice that will make you a successful candidate for the job you dream of.
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-around' id='home-b-2'>
                    <div className='row row-cols-1 row-cols-md-3' id='home-b-2-content'>
                        {homeServices.map((item) => {
                            return(
                                <div className='col d-flex-col justify-content-center align-items-center mt-1' key={item.key} id='home-service-item'>
                                    <div className='d-flex align-items-center justify-content-center'>{item.icon()}</div>
                                    <h5 className='text-center fw-bold my-2'>{item.subheader}</h5>
                                    <div className='mx-5 text-center faded'>{item.text}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section id='home-c'>
                <div className='d-flex flex-column justify-content-around h-100'>
                    <div className='d-flex flex-column justify-content-end h-50'>
                        <h2 className='text-center fw-bold'>Important once in a lifetime investment</h2>
                        <p className='text-center faded'>
                            It’s our passion and aim to help you reach for the goal and bring out your best potential
                        </p>
                    </div>
                    <div className='h-50 row row-cols-1 row-cols-md-3 w-100'>
                        <div className='d-flex flex-column col justify-content-center'>
                            <h1 className='text-center fw-bold'>Over 3X</h1>
                            <h6 className='text-center'>More chances for an interview</h6>
                        </div>
                        <div className='d-flex flex-column col justify-content-center'>
                            <h1 className='text-center fw-bold'>Over 3X</h1>
                            <h6 className='text-center'>More chances for an interview</h6>
                        </div>
                        <div className='d-flex flex-column col justify-content-center'>
                            <h1 className='text-center fw-bold'>Over 3X</h1>
                            <h6 className='text-center'>More chances for an interview</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className='d-flex w-100' id='home-d'>
                <div className='d-flex flex-column w-100 h-100'>
                    <div className='d-flex flex-column align-items-center justify-content-end' id='home-d-top'>
                        <h1 className='text-center fw-bold'>Build your career with us.</h1>
                        <p className='text-center faded w-50'>
                            Ranging from Entry level to Professional roles, our prices stay the same and do not change depending on your career level.
                        </p>
                    </div>

                    <div className='d-flex align-items-center justify-content-around' id='home-d-bottom'>
                        <div className='h-100 row row-cols-1 row-cols-md-2 row-cols-lg-3 w-75 d-flex justify-content-around'>
                            <HomeCard/>
                            <HomeCard/>
                            <HomeCard/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;