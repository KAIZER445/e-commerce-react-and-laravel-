import React from 'react'
import LearnmoreBanner from '../images/Advertisement/2148674158.jpg'
import '../App.css'

export default function Advertisementbanner() {
  return (
    <div className='mt-5 position-relative d-flex align-items-center'>
      <div className='position-absolute px-5 mx-5 text-white'>
        <h1 className='text-center '>SHOP <br /> WITH US</h1>
        <p className='text-center mb-0 Qwitcher_bold fs-1'>If you’d like something different or tailored to a <br /> specific product or target audience, just let us know!</p>
      </div>
      <img src={LearnmoreBanner} alt="" className='w-100 Learnmore_image object-fit-cover' />
    </div>
  )
}
