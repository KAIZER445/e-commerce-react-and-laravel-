import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import corouselimages from '../images/digital-online-shopping-tech-background_332666-36.avif'

export default function HeroCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={corouselimages} alt="" className='w-100 imagefit-corousel object-fit-cover'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={corouselimages} alt="" className='w-100 imagefit-corousel object-fit-cover'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={corouselimages} alt="" className='w-100 imagefit-corousel object-fit-cover'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
