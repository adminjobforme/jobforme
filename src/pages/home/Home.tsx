import Loading from '../../components/loading/Loading';
import './Home.css';
import { homeServices } from './home-services';

const Home = () => {
    return(
        <div className='d-flex-column' id='Home'>
            <section className='d-flex align-items-center justify-content-center' id='HomeA'>
                <div className='d-flex-col w-50 align-items-center justify-content-center' id='home-content-A'>
                    <h1 className='text-center fw-bold mb-5'>Enhance your potential with us.</h1>
                    <h5 className='text-center faded'>
                        <p>Need help with CV, landing your dream job or career guidance?</p>
                        <p>Contact us, we&#39;re here to help!</p>
                    </h5>
                </div>
            </section>
            <section className='d-flex-col align-items-stretch' id='HomeB'>
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
        </div>
    );
}

export default Home;