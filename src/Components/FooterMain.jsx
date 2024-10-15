import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import cod from '../images/Payment_method/cash-on-delivery-logo-free-png.webp'
import mastercard from '../images/Payment_method/MasterCard_Logo.svg.png'
import visacard from '../images/Payment_method/Visadebitcardpng-1599584312349.png'

export default function FooterMain() {
    return (
        <div className='mt-5 bg-light'>
            <br />
            <footer>
                <Container>
                    <Row>
                        <Col md={3} className=" text-md-left">
                            <h5>About Us</h5>
                            <p>We are a leading company providing top-notch services and solutions for over 10 years.</p>
                        </Col>
                        <Col md={3}>
                            <h5>Quick Links</h5>
                            <ul className='list_proper'>
                                <li><a className='text-decoration-none' href="/">Home</a></li>
                                <li><a className='text-decoration-none' href="/services">Services</a></li>
                                <li><a className='text-decoration-none' href="/about">About Us</a></li>
                                <li><a className='text-decoration-none' href="/contact">Contact</a></li>
                            </ul>
                        </Col>
                        <Col md={3} className="text-md-right">
                        <h5>Payment Method</h5>
                            <Row className='mb-3'>
                                <div className='col-2'>
                                    <img src={cod} alt="..." className='img-fluid' />
                                </div>
                                <div className='col-2'>
                                    <img src={mastercard} alt="..." className='img-fluid' />
                                </div>
                                <div className='col-2'>
                                    <img src={visacard} alt="..." className='img-fluid' />
                                </div>
                            </Row>
                        </Col>
                        <Col md={3} className="text-md-right">
                            <h5>Contact Us</h5>
                            <p>Email: info@yourcompany.com</p>
                            <p>Phone: +1234567890</p>
                            <p>Address: Somewhere in the middle</p>
                        </Col>
                    </Row>
                    <p className='text-center mt-3 mb-0 pb-2'>© 2024 All rights reserved.</p>
                </Container>
            </footer>
        </div>
    )
}
