import { LogoMulti } from '../../icons';
import './Footer.css';

const Footer = () => {
    return(
        <section className="d-flex-col w-100" id="footer">
            <div className='d-flex align-items-center justify-content-around' id="footer-top">
                <div className='d-flex align-items-center justify-content-start mx-5 w-50' id='footer-logo'>
                    <LogoMulti/>
                </div>
                <div className='d-flex align-items-center justify-content-around w-50' id='footer-content'>
                    <div className='fw-bold faded'>
                        Link A
                    </div>
                    <div className='fw-bold faded'>
                        Link B
                    </div>
                    <div className='fw-bold faded'>
                        Link C
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-end w-50 mx-5' id='footer-socials'>
                        Icons
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-center' id="footer-bottom">
                <div id='footer-bottom-text'>JobForMe. All right reserved. © 2023</div>
            </div>
        </section>
    );
};

export default Footer;