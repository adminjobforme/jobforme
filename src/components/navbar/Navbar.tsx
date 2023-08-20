import { Link } from 'react-router-dom';
import { LogoMulti } from '../../icons';
import './Navbar.css';
import {Dropdown} from 'react-bootstrap';

const Navbar = () => {
    return(
        <div className='d-flex'>
            <div className='d-flex align-items-center justify-content-around position-fixed mt-1 hidden-mobile' id='navbar-desktop'>
                <div className='d-flex justify-content-center align-items-center' id='navbar-logo'>
                    <Link to='/' className='text-decoration-none text-dark mt-1 fw-bold'>
                        <LogoMulti/> JOB4ME
                    </Link>
                </div>
                <div className='d-flex w-75 align-itmes-center justify-content-around mx-4'>
                <div className='d-flex align-items-center w-25'>
                        <Link to='/services' id='navbar-text' style={{textDecoration:'none'}}>
                            Services
                        </Link>
                    </div>
                    
                    <div className='d-flex align-items-center w-25'>
                        <Link to='/about-us' id='navbar-text' style={{textDecoration:'none'}}>
                            About Us
                        </Link>
                    </div>
                    <div className='d-flex align-items-center w-25'>
                        <Link to='/contact-us' id='navbar-text' style={{textDecoration:'none'}}>
                            Contact Us
                        </Link>
                    </div>
                    <div className='d-flex align-items-center w-25'>
                        <Link to='/track-order' id='navbar-text' style={{textDecoration:'none'}}>
                            Track Order
                        </Link>
                    </div>
                </div>
                <div className='w-25 d-flex align-items-center justify-content-center'>
                    <Link to='/checkout' className='text-decoration-none'>
                        <button className='btn-ternary'>Get Started</button>
                    </Link>
                </div>
            </div>

            <div className='d-flex w-100 align-items-center justify-content-between position-fixed hidden-desktop py-2' id='navbar-mobile'>
                <Link to='/' className='text-decoration-none text-dark mt-1 fw-bold'>
                    <div className='mx-3 my-2'>
                        <LogoMulti/> JOB4ME
                    </div>
                </Link>
                <div className='d-flex justify-content-between mx-3'>
                    <div className=' d-flex align-items-center justify-content-center'>
                        <Link to='/checkout' className='text-decoration-none'>
                            <button className='btn-ternary'>Get Started</button>
                        </Link>
                    </div>
                    <Dropdown className='mx-3'>
                        <Dropdown.Toggle variant="transparent" id="navbar-dropdown-mobile"/>
                        <Dropdown.Menu>
                            <Link to='/services' id='navbar-text' style={{textDecoration:'none'}}>
                                <Dropdown.Item id='navbar-text'>
                                    Services
                                </Dropdown.Item>
                            </Link>
                            <Link to='/about-us' id='navbar-text' style={{textDecoration:'none'}}>
                                <Dropdown.Item  id='navbar-text'>
                                    About Us
                                </Dropdown.Item>
                            </Link>
                            <Link to='/contact-us' id='navbar-text' style={{textDecoration:'none'}}>
                                <Dropdown.Item  id='navbar-text'>
                                    Contact Us
                                </Dropdown.Item>
                            </Link>
                            <Link to='/track-order' id='navbar-text' style={{textDecoration:'none'}}>
                                <Dropdown.Item  id='navbar-text'>
                                    Track Order
                                </Dropdown.Item>
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default Navbar;