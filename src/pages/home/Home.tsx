import { Dropdown, Form } from 'react-bootstrap';
import HomeCard from '../../components/home-card/HomeCard';
import Loading from '../../components/loading/Loading';
import './Home.css';
import { homeCardService, homeServices } from './home-service';
import { HomeCardModel } from '../../shared/home-card-model';
import { IndexInfo } from 'typescript';

const Home = () => {
    return(
        <div className='d-flex flex-column' id='home'>
            <section className='d-flex align-items-center justify-content-center' id='home-a'>
                <div className='d-flex-col align-items-center justify-content-center' id='home-content-a'>
                    <h1 className='text-center fw-bold mb-5'> JOB4ME</h1>
                    <p className='fs-5 text-center text-secondary'>Need help with CV, landing your dream job or career guidance? <br/> Contact us, we&#39;re here to help!</p>
                    <div className='d-flex mt-5 w-100 align-items-center justify-content-center'>
                        <Form.Select className='btn btn-outline border-dark' aria-label="language selector" id='language-selector'>
                            <label>-- Select a Service --</label>
                            <option disabled>-- Select a Language ---</option>
                            <option value="1">English</option>
                            <option value="2">Polish</option>
                            <option value="3">French</option>
                            <option value="3">Spanish</option>
                            <option value="3">German</option>
                        </Form.Select>
                    </div>
                </div>
                
            </section>

            <section className='d-flex-col align-items-stretch' id='home-b'>
                <div id='home-b-1'>
                    <h1 className='text-center fw-bold w-75 mb-5'>
                        What we offer?
                    </h1>
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
                            <h6 className='text-center'>Better Career Perspective</h6>
                        </div>
                        <div className='d-flex flex-column col justify-content-center'>
                            <h1 className='text-center fw-bold'>100+</h1>
                            <h6 className='text-center'>Candidates successfully employed.</h6>
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
                            {homeCardService.map((card: HomeCardModel, key: number) => {
                                return <HomeCard header={card.header} icon={card.icon} info={card.info}
                                        mostPopular={card.mostPopular} pricing={card.pricing} subheader={card.subheader} key={key} />
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;