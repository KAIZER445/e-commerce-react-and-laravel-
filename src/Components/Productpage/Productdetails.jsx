import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function Productdetails() {
  return (
    <div className='mt-5'>
      <Container>
        <h5>Product Specifications</h5>
        <Row>
          <div className='col-6'>
            <ul>
              <li>
                Brand Name : jeep buluo
              </li>
              <li>
                Lining Material : Polyester
              </li>
              <li>
                Item Height : 28cm
              </li>
              <li>
                Item Length : 37.5cm
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Item Weight : 0.85kg
              </li>
              <li>
                Item Width : 10cm
              </li>
              <li>
                Interior : Interior Slot Pocket,Interior Compartment,Computer Interlaye
              </li>
            </ul>
          </div>
          <div className="col-12">
            <p style={{textAlign: 'justify'}}>
              Large Capacity and Organized: The large backpack owns 3 spacious compartments, one separate laptop compartment that fits 17 inches laptops, and one main compartment roomy for daily necessities, such as clothes, notebooks, etc. The front compartment has many small pockets, as well as pen pockets and a keychain design to keep your things organized. The large backpack for men has more than 10 pockets, including 2 side mesh pockets for water bottles and umbrellas. Size: 17.5 x 13 x 8.5 inches
            </p>
          </div>
        </Row>
      </Container>
    </div>
  )
}
