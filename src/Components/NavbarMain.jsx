import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import logo01 from '../images/logo-1.png';

export default function NavbarMain() {
    return (
        <div className='bg-dark text-white'>
            <Container>
                <Row className='align-items-center py-4'>
                    <Col xs={4} className="fs-4">
                        <FontAwesomeIcon icon={faBars} />
                    </Col>
                    <Col xs={4} className="d-flex justify-content-center">
                    <img src={logo01} alt="Logo" className='img-fluid' />
                    </Col>
                    <Col xs={4} className="d-flex justify-content-end">
                        <button className="btn btn-transparent text-white border border-light border-2 rounded-0 py-1 px-4 shadow">
                            SUBSCRIBE
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
