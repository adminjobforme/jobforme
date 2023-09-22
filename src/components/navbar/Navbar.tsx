import { Link } from 'react-router-dom';
import { LogoMulti } from '../../icons';
import './Navbar.css';
import { Nav, NavDropdown} from 'react-bootstrap';

const Navbar = () => {
    return(
        <div className='d-flex'>
            <nav className='d-flex align-items-center justify-content-around position-fixed mt-1 hidden-mobile' id='navbar-desktop'>
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
            </nav>

            <Nav className='d-flex w-100 align-items-center justify-content-between position-fixed hidden-desktop py-2' id='navbar-mobile'>
                <Nav.Item>
                    <Nav.Link as={Link} to='/' className='text-decoration-none text-dark mt-1 fw-bold'>
                        <div className='mx-3 my-2'>
                            <LogoMulti/> JOB4ME
                        </div>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className='d-flex flex-row justify-content-between'>
                    <Nav.Item className=' d-flex align-items-center justify-content-center'>
                        <Nav.Link as={Link} to='/checkout' className='text-decoration-none'>
                            <button className='btn-ternary'>Get Started</button>
                        </Nav.Link>
                    </Nav.Item>
                    <NavDropdown className='text-decoration-none' title='' >
                        <NavDropdown.Item as={Link} to='/services'>
                                Services
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/about-us'>
                                About Us
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/contact-us'>
                                Contact Us
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/track-order'>
                                Track Order
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Navbar;