import Loading from '../../components/loading/Loading';
import './Home.css';
import { homeServices } from './home-services';

const Home = () => {
    return(
        <div className='d-flex-column' id='Home'>
            <section className='d-flex align-items-center justify-content-center' id='HomeA'>
                <div id='home-content-A'>
                    <h1 className='text-center fw-bold'>Single platform To meet all your needs</h1>
                </div>
            </section>
            <section className='d-flex-col align-items-stretch' id='HomeB'>
                <div id='home-b-1'>
                    <h1 className='text-center'>We can help you get to the next level</h1>
                    <p className='text-center'>
                        Lorem ipsum dolor sit amet consectetur. Vitae elementum enim in pharetra accumsan amet elementum. Rhoncus eu turpis est sed vel in.
                    </p>
                </div>
                <div className='d-flex justify-content-around' id='home-b-2'>
                    <div className='row row-cols-1 row-cols-md-3' id='home-b-2-content'>
                        {homeServices.map((item) => {
                            return(
                                <div className='col d-flex-col justify-content-center align-items-center pt-5' key={item.key} id='home-service-item'>
                                    <div className='d-flex align-items-center justify-content-center'>{item.icon()}</div>
                                    <h5 className='text-center'>{item.subheader}</h5>
                                    <div className='text-center faded'>{item.text}</div>
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