import React from 'react'
import Asidebar from '../Components/Exploremore/Asidebar'
import { Container, Row } from 'react-bootstrap'
import JustForYou from '../Components/Justforyou'

export default function Exploremore() {
  return (
    <div>
      <Container>
        <Row className='mt-5'>
            <div className='col-2'>
                <Asidebar />
            </div>
            <div className='col-10'>
                    <JustForYou />
            </div>
        </Row>
      </Container>
    </div>
  )
}
