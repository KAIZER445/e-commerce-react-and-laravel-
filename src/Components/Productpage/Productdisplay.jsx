import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import show1 from '../../images/product_images/show-1.jpg'
import show2 from '../../images/product_images/show-2.jpg'
import show3 from '../../images/product_images/show-3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faMinus, faPlus, faShareNodes, faStar } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Productdisplay() {

  const [currentQuantity, setCurrentQuantity] = useState(1);
  function onaddition () {
    setCurrentQuantity(currentQuantity + 1)
  }

  function onminus() {
    if(currentQuantity>1){
      setCurrentQuantity(currentQuantity - 1)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='mt-5'>
      <Container>
        <Row>
          <div className='col-lg-1 col-3 '>
            <div className='border mb-3'>
              <img src={show2} alt="..." className='productdisplayimg img-fluid' />
            </div>
            <div className='border'>
              <img src={show3} alt="..." className='productdisplayimg img-fluid' />
            </div>
          </div>
          <div className='col-lg-5 col-9'>
            <div className='border'>
              <img src={show1} alt="..." className='productdisplayimg img-fluid' />
            </div>
          </div>
          <div className='col-lg-6 col-12 mt-4 mt-lg-0'>
            <h4>Man Bag One Shoulder Multi-function Messenger Bag Password Lock Sports Bike Bag Waterproof USB Charging Port Anti-theft Chest BA</h4>
            <div className='d-flex align-items-center justify-content-between text-secondary'>
              <p className='mb-1'>Brand: <a href="/" className='text-decoration-none'>Visvim</a></p>
              <p className='mb-1 d-flex gap-3 '><FontAwesomeIcon icon={farHeart} /><FontAwesomeIcon icon={faShareNodes} /></p>
            </div>
            <div className='d-flex gap-1 text-warning align-items-center mb-1'>
              <span className='text-secondary'>Rating :</span>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className='mb-1 text-secondary'>Total sales till now : <span className='text-black'>2.5k</span></p>
            <hr />
            <h3 className='text-danger'>Rs. 4,000</h3>
            <hr />
            <div className='d-flex gap-3 align-items-center mb-4 mt-4'>
              <p className='mb-0'>Quantity :</p>
              <div className='d-flex gap-3 align-items-center'>
                <button className='btn btn-flight rounded-0 border' onClick={onaddition}><FontAwesomeIcon icon={faPlus} /></button>
                <span className='fw-bold'>{currentQuantity}</span>
                <button className='btn btn-flight rounded-0 border' onClick={onminus}><FontAwesomeIcon icon={faMinus} /></button>
              </div>
            </div>
            <div className='d-flex gap-5'>
              <button className='btn btn-dark rounded-0 w-50 py-2'>Buy Now</button>
              <button className='btn btn-light rounded-0 border w-50 py-2'>Add to Cart</button>
            </div>
            <div className='border mt-4 px-2 py-2'>
              <p>Sold by</p>
              <hr />
              <div className='d-flex justify-content-between'>
                <h5>Himal traders</h5>
                <div className='d-flex gap-3 align-items-center mb-1'>
                  <FontAwesomeIcon icon={faFacebookF} style={{ color: '#1877F2' }} />
                  <FontAwesomeIcon icon={faInstagram} style={{ color: '#E1306C' }} />
                  <FontAwesomeIcon icon={faTwitter} style={{ color: '#1DA1F2' }} />
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}
