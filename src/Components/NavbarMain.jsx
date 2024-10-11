import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import logo01 from '../images/logo-1.png';
import Nav from 'react-bootstrap/Nav';

export default function NavbarMain() {
    return (
        <nav className='bg-dark text-white'>
            <Container>
                <Row className='align-items-center py-3'>
                    <Col xs={4} className="fs-4">
                        <FontAwesomeIcon icon={faBars} />
                    </Col>
                    <Col xs={4} className="d-flex justify-content-center">
                        <img src={logo01} alt="Logo" className='img-fluid' />
                    </Col>
                    <Col xs={4} className="d-flex justify-content-end">
                        <button
                            type="button"
                            className="btn btn-transparent text-white border border-light border-2 rounded-0 py-1 px-4 shadow">
                            SUBSCRIBE
                        </button>
                    </Col>
                    <Col>
                        <Nav className='d-flex justify-content-center gap-3 fw-bold pt-4'>
                            <Nav.Link className='text-decoration-none text-white' href="#">CATEGORY</Nav.Link>
                            <Nav.Link className='text-decoration-none text-white' href="#">BEST DEALS</Nav.Link>
                            <Nav.Link className='text-decoration-none text-white' href="#">MALL</Nav.Link>
                            <Nav.Link className='text-decoration-none text-white' href="#">TOP SELLERS</Nav.Link>
                            <Nav.Link className='text-decoration-none text-white' href="#">ABOUT US</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
}
