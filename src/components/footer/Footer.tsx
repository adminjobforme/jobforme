import { Link } from 'react-router-dom';
import { LogoMulti } from '../../icons';
import './Footer.css';
import { AiFillFacebook, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const Footer = () => {
    return(
        <section className="d-flex-col w-100" id="footer">
            <div className='d-flex align-items-center justify-content-around' id="footer-top">
                <div className='d-flex align-items-center justify-content-start mx-5 w-75' id='footer-logo'>
                    <Link to='/' className='text-decoration-none text-dark mt-1 fw-bold'>
                        <div className='mx-3 my-2 text-center'>
                            <LogoMulti/> JOB4ME
                        </div>
                    </Link> 
                </div>
                <div className='d-flex align-items-center justify-content-around h-75 w-50 mx-5' id='footer-socials'>
                <IconContext.Provider value={{ size: '5vh'}}>
                    <Link to='https://twitter.com/Jobforme_ie' target='blank' className='h-50'>
                        <AiOutlineTwitter fill='#26a7de'/>
                    </Link>
                    <Link to='https://www.facebook.com/profile.php?id=100094509490398' target='blank' className='h-50'>
                        <AiFillFacebook fill='#4267B2'/>
                    </Link>
                    <Link to='https://www.wa.link/si9s8r' target='blank' className='h-50'>
                        <AiOutlineWhatsApp fill='#25D366'/>
                    </Link>
                    <Link to='https://www.linkedin.com/company/jobforme-ie' target='blank' className='h-50' style={{background:'#0072b1'}}>
                        <AiOutlineLinkedin fill='#ffffff'/>
                    </Link>
                </IconContext.Provider>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-center faded' id="footer-bottom">
                <div id='footer-bottom-text'>JobForMe. All right reserved. © 2023</div>
            </div>
        </section>
    );
};

export default Footer;