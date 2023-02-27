import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { getTrainerService } from './api/ApiService'
import { useAuth } from './AuthContext'
import {Row, Col} from 'react-bootstrap'
import {Badge} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function TrainerDetails() {
  const authContext = useAuth()
  const navigate = useNavigate()
  const [trainer, setTrainer] = useState('')


  useEffect( () => {
    getTrainerService(authContext.id).then(res => {
      setTrainer(res.data)
      console.log(trainer)
    })
  },[])
  
  const handleEdit = () => {
    navigate('/trainer/edit')
  }

  return (
    <Container className='mt-5'>
      <Row className='text-end'>
        <Col><button onClick={handleEdit} className='btn btn-sm btn-dark'>Edit</button></Col>
      </Row>
      <Row>
        <Col><img className="card-img-top" style={{height:'100%'}} alt="#" src={trainer.img}></img></Col>
        <Col>
          <Row className='justify-content-center fs-1 text-uppercase'> {trainer.firstName + " " + trainer.lastName}</Row>
          <Row className='justify-content-center fs-4 fst-italic my-3'> <Badge bg='info' style={{width:'30%'}}>{trainer.bio}</Badge></Row>
          <Row className='justify-content-center fw-bold my-1' >Price: {trainer.price?.toFixed(2)}</Row>
          <Row className='justify-content-center fw-bold my-1' >Location: {trainer.location}</Row>
          <Row className='justify-content-center fw-bold my-1' >Motto: {trainer.motto}</Row>
          <Row className='justify-content-center fw-bold my-1' >Background: {trainer.background}</Row>
          <Row className='justify-content-center fw-bold my-1' >Years of experience: {trainer.yearsOfExp}</Row>
        </Col>
      </Row>
    </Container>
  )
}
