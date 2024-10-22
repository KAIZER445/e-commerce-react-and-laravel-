import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo01 from '../images/logo-1.png';
import Nav from 'react-bootstrap/Nav';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { Link } from 'react-router-dom';

export default function NavbarMain() {
    return (
        <nav className='bg-dark text-white'>
            <Container>
                <Row className='align-items-center py-3'>
                    <Col xs={3}>
                        <Link to="/"><img src={logo01} alt="Logo" className='img-fluid' /></Link>
                    </Col>
                    <Col xs={6} className="d-flex justify-content-center">
                        <div className='border border-1 border-white bg-transparent rounded-2 overflow-hidden w-100'>
                            <input type="text" className='border-0 bg-transparent py-2 w-75 text-white px-2'/>
                            <button className='bg-white text-dark border-0 p-2 w-25'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                        </div>
                    </Col>
                    <Col xs={3} className="d-flex justify-content-end fs-4">
                    <FontAwesomeIcon icon={faBars} className='me-4 navbar_adjust_sec'/>
                    <FontAwesomeIcon icon={faCartShopping} />
                    </Col>
                    <Col className='navbar_adjust'>
                        <Nav className='d-flex justify-content-center gap-3 fw-bold pt-4'>
                            <Nav.Link className='text-decoration-none text-white' href="#">CATEGORY</Nav.Link>
                            <Nav.Link className='text-decoration-none text-white' href="#">BEST DEALS</Nav.Link>
                            <Nav.Link as={Link} to='/Explore-More' className='text-decoration-none text-white' href="#">EXPLORE MORE</Nav.Link>
                            <Nav.Link className='text-decoration-none text-white' href="#">ABOUT US</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
}
