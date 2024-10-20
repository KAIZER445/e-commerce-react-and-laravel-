import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import TodaySelectionImages from '../images/product_images/fbea6f87d2d4afbfa8fe2ba4dda27a36.jpg_720x720q80.jpg_.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function TodaySelection() {
    return (
        <>
            <Container>
                <h6 className='mb-0 mt-5'>Todays Selection</h6>
                <hr />
                <Row>
                    <div className='col-6 col-lg-3 col-mb-3 pb-4 pb-lg-0' >
                        <Link to="/Productpage" className='text-decoration-none'>
                            <Card className='product'>
                                <Card.Img variant="top" src={TodaySelectionImages} className='w-100 productimageheight' />
                                <Card.Body>
                                    <Card.Title>HQ54 Wired Gaming</Card.Title>
                                    <Card.Text>
                                        <p className='text-danger mb-2 fw-semibold'>Rs. 1,195</p>
                                        <div className='d-flex gap-1 text-warning'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                    <div className='col-6 col-lg-3 col-mb-3' >
                        <Link to="/Productpage" className='text-decoration-none'>
                            <Card className='product'>
                                <Card.Img variant="top" src={TodaySelectionImages} className='w-100 productimageheight' />
                                <Card.Body>
                                    <Card.Title>HQ54 Wired Gaming</Card.Title>
                                    <Card.Text>
                                        <p className='text-danger mb-2 fw-semibold'>Rs. 1,195</p>
                                        <div className='d-flex gap-1 text-warning'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                    <div className='col-6 col-lg-3 col-mb-3' >
                        <Link to="/Productpage" className='text-decoration-none'>
                            <Card className='product'>
                                <Card.Img variant="top" src={TodaySelectionImages} className='w-100 productimageheight' />
                                <Card.Body>
                                    <Card.Title>HQ54 Wired Gaming</Card.Title>
                                    <Card.Text>
                                        <p className='text-danger mb-2 fw-semibold'>Rs. 1,195</p>
                                        <div className='d-flex gap-1 text-warning'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                    <div className='col-6 col-lg-3 col-mb-3' >
                        <Link to="/Productpage" className='text-decoration-none'>
                            <Card className='product'>
                                <Card.Img variant="top" src={TodaySelectionImages} className='w-100 productimageheight' />
                                <Card.Body>
                                    <Card.Title>HQ54 Wired Gaming</Card.Title>
                                    <Card.Text>
                                        <p className='text-danger mb-2 fw-semibold'>Rs. 1,195</p>
                                        <div className='d-flex gap-1 text-warning'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                </Row>
                <hr />
            </Container>
        </>
    );
}
