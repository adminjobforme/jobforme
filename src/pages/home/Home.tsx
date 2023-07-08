import Loading from '../../components/loading/Loading';
import './Home.css';

const Home = () => {
    return(
        <div className='d-flex-col' id='Home'>
            <section className='d-flex align-items-center justify-content-center' id='HomeA'>
                <div id='home-content-A'>
                    <h1 className='text-center fw-bold'>Single platform To meet all your needs</h1>
                </div>
            </section>
            <section className='d-flex align-items-center justify-content-center' id='HomeB'>
                <div className='d-flex-col h-25'>
                    <h1 className='text-center'>We can help you get to the next level</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Vitae elementum enim in pharetra accumsan amet elementum. Rhoncus eu turpis est sed vel in.
                    </p>
                </div>
                <div className='h-75'>

                </div>
            </section>
        </div>
    );
}

export default Home;