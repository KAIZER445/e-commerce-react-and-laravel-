import React from 'react'
import { Container, Row } from 'react-bootstrap'
import show1 from '../../images/product_images/show-1.jpg'
import show2 from '../../images/product_images/show-2.jpg'
import show3 from '../../images/product_images/show-3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'

export default function Productdisplay() {
  return (
    <div className='mt-5'>
      <Container>
        <Row>
          <div className='col-1'>
            <div className='border mb-3'>
              <img src={show2} alt="..." className='productdisplayimg img-fluid' />
            </div>
            <div className='border'>
              <img src={show3} alt="..." className='productdisplayimg img-fluid' />
            </div>
          </div>
          <div className='col-5'>
            <div className='border'>
              <img src={show1} alt="..." className='productdisplayimg img-fluid' />
            </div>
          </div>
          <div className='col-6'>
              <h4>Man Bag One Shoulder Multi-function Messenger Bag Password Lock Sports Bike Bag Waterproof USB Charging Port Anti-theft Chest BA</h4>
              <div className='d-flex align-items-center justify-content-between text-secondary'>
                <p className='mb-1'>Brand: <a href="/" className='text-decoration-none'>Visvim</a></p>
                <p className='mb-1 d-flex gap-3 '><FontAwesomeIcon icon={farHeart}/><FontAwesomeIcon icon={faShareNodes} /></p>
              </div>
              <hr />

              <h3 className='text-danger'>Rs. 4,000</h3>
          </div>
        </Row>
      </Container>
    </div>
  )
}
