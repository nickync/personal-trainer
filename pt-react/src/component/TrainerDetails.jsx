import React, { useEffect, useState } from 'react'
import { Badge, Container } from 'react-bootstrap'
import { getTrainerService } from './api/ApiService'
import { useAuth } from './AuthContext'
import {Row, Col} from 'react-bootstrap'

export default function TrainerDetails() {
  const authContext = useAuth()
  const [trainer, setTrainer] = useState([])
  
  useEffect( () => {
    getTrainerService(authContext.id).then(res => {
      setTrainer(res.data)
    })
  },[authContext.id])
  
  return (
    <Container className='mt-5'>
      <Row>
        <Col><img className="card-img-top" height={'100%'} alt="#" src={trainer.img}></img></Col>
        <Col>
          <Row className='justify-content-center fs-1 text-uppercase'> {trainer.firstName + " " + trainer.lastName}</Row>
          <Row className='justify-content-center fs-4 fst-italic'> <Badge bg='dark' style={{width:'90%'}}>{trainer.bio}</Badge></Row>
          <Row className='justify-content-center' > ${trainer.price?.toFixed(2)} per hour</Row>
        </Col>
      </Row>
    </Container>
  )
}
