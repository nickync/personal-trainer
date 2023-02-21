import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { getTrainerService } from './api/ApiService'
import { useAuth } from './AuthContext'
import {Row, Col} from 'react-bootstrap'

export default function TrainerDetails() {
  const authContext = useAuth()
  const [trainer, setTrainer] = useState('')
  useEffect( () => {
    getTrainerService(authContext.id).then(res => {
      setTrainer(res.data)
      console.log(trainer)
    })
  },[])
  
  return (
    <Container className='mt-5'>
      <Row>
        <Col><img className="card-img-top" height={'100%'} alt="#" src={trainer.img}></img></Col>
        <Col>
          <Row> {trainer.firstName + " " + trainer.lastName}</Row>
          <Row className='justify-content-center'> {trainer.bio}</Row>
          <Row> {trainer.price}</Row>
        </Col>
      </Row>
    </Container>
  )
}
