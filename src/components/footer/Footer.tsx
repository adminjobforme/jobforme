import { Link } from 'react-router-dom';
import { LogoMulti } from '../../icons';
import './Footer.css';
import { AiFillFacebook, AiFillTwitterCircle, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai';

const Footer = () => {
    return(
        <section className="d-flex-col w-100" id="footer">
            <div className='d-flex align-items-center justify-content-around' id="footer-top">
                <div className='d-flex align-items-center justify-content-start mx-5 w-50' id='footer-logo'>
                    <Link to='/' className='text-decoration-none text-dark mt-1 fw-bold'>
                        <div className='mx-3 my-2'>
                            <LogoMulti/> JOB4ME
                        </div>
                    </Link> 
                </div>
                <div className='d-flex align-items-center justify-content-around w-50' id='footer-content'>
                    <div>
                        <Link to='/terms-and-conditions' className='text-decoration-none fw-bolder faded'>
                            Terms and Conditions
                        </Link>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center h-75 w-50 mx-5' id='footer-socials'>
                        <AiOutlineTwitter className='h-50 w-25'/>
                        <AiFillFacebook className='h-50 w-25'/>
                        <AiOutlineWhatsApp className='h-50 w-25'/>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-center faded' id="footer-bottom">
                <div id='footer-bottom-text'>JobForMe. All right reserved. © 2023</div>
            </div>
        </section>
    );
};

export default Footer;