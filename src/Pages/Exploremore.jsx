import React from 'react'
import Asidebar from '../Components/Exploremore/Asidebar'
import { Container, Row } from 'react-bootstrap'
import Exploredproduct from '../Components/Exploremore/Exploredproduct'


export default function Exploremore() {
  return (
    <div>
      <Container>
        <Row className='mt-5'>
            <div className='col-0 col-lg-2 navbar_adjust'>
                <Asidebar />
            </div>
            <div className='col-12 col-lg-10'>
            <Exploredproduct />
            </div>
        </Row>
      </Container>
    </div>
  )
}
