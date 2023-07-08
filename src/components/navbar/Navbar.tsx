import { LogoMulti } from '../../icons';
import './Navbar.css';
import {Dropdown} from 'react-bootstrap';

const Navbar = () => {
    return(
        <div className='w-50 d-flex align-items-center justify-content-around position-fixed mt-3' id='Navbar'>
            <div className='d-flex justify-content-center align-items-center' id='navbar-logo'>
                <LogoMulti/>
            </div>
            <div className='d-flex w-75 align-itmes-center justify-content-around'>
                <div className='d-flex w-25'>
                <Dropdown>
                    <Dropdown.Toggle variant="transparent" id="navbar-dropdown">
                        Servies
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
                <div className='d-flex align-items-center w-25' id='navbar-text'>
                    About Us
                </div>
                <div className='d-flex align-items-center w-25' id='navbar-text'>
                    Contact Us
                </div>
                <div className='d-flex align-items-center w-25' id='navbar-text'>
                    Track Order
                </div>
            </div>
            <div className='w-25 d-flex align-items-center justify-content-center'>
                <button className='btn-ternary'>Get Started</button>
            </div>
        </div>
    )
}

export default Navbar;