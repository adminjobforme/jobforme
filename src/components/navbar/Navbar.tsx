import { Link } from 'react-router-dom';
import { LogoMulti } from '../../icons';
import './Navbar.css';
import {Dropdown} from 'react-bootstrap';

const Navbar = () => {
    return(
        <div className='d-flex'>
            <div className='w-50 d-flex align-items-center justify-content-around position-fixed mt-1 hidden-mobile' id='navbar-desktop'>
                <div className='d-flex justify-content-center align-items-center' id='navbar-logo'>
                    <Link to='/'>
                        <LogoMulti/>
                    </Link>
                </div>
                <div className='d-flex w-75 align-itmes-center justify-content-around'>
                    <div className='d-flex w-25'>
                    <Dropdown>
                        <Dropdown.Toggle variant="transparent" id="navbar-dropdown">
                            Servies
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/cv-coverletter">CV / Cover Letter</Dropdown.Item>
                            <Dropdown.Item href="/interview-jobhunt">Interviews / Job Hunting</Dropdown.Item>
                            <Dropdown.Item href="/career-linkedIn">Career Plan / LinkedIn</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
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
                    <button className='btn-ternary'>Get Started</button>
                </div>
            </div>

            <div className='d-flex w-100 align-items-center justify-content-between position-fixed hidden-desktop py-2' id='navbar-mobile'>
                <div className='mx-3 my-2'>
                    <LogoMulti/>
                </div>
                <div className='d-flex justify-content-between mx-3'>
                    <div className=' d-flex align-items-center justify-content-center'>
                        <button className='btn-ternary'>Get Started</button>
                    </div>
                    <Dropdown className='mx-3'>
                        <Dropdown.Toggle variant="transparent" id="navbar-dropdown-mobile"/>
                        <Dropdown.Menu>
                            <Dropdown>
                                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                                    Servies
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown.Item href="#/action-2" id='navbar-text'>About Us</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" id='navbar-text'>Contact Us</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" id='navbar-text'>Track Order</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default Navbar;