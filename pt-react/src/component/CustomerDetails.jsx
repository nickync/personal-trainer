import React, { useEffect, useState } from 'react'
import { Badge, Container } from 'react-bootstrap'
import { getCustomerService, getTrainerService } from './api/ApiService'
import { useAuth } from './AuthContext'
import {Row, Col} from 'react-bootstrap'

export default function CustomerDetails() {
  const authContext = useAuth()
  const [customer, setCustomer] = useState([])
  const [trainer, setTrainer] = useState()

  useEffect( () => {
    getCustomerService(authContext.id).then(res => {
      setCustomer(res.data)
    })
   
  },[authContext.id])
  
  useEffect( () => {
    if(customer.trainerId !== undefined && customer.trainerId !== -1){
      console.log(customer.trainerId)
      getTrainerService(customer.trainerId).then(res => {
          setTrainer(res.data)
      })
    }
  }, [customer.trainerId])


  return (
    <Container className='mt-5'>
      <Row>
        <Col><img className="card-img-top" height={'100%'} alt="#" src={customer.img ? customer.img : 'https://www.nicepng.com/png/detail/14-148358_lovely-penguin-clip-art-is-penguin-profile.png'}></img></Col>
        <Col>
          <Row className='justify-content-center fs-1 text-uppercase'> {customer.firstName + " " + customer.lastName}</Row>
          <Row className='justify-content-center fs-4 fst-italic my-3'> <Badge bg='info' style={{width:'30%'}}>{customer.goal}</Badge></Row>
          <Row className='justify-content-center fw-bold my-1' >Age: {customer.age}</Row>
          <Row className='justify-content-center fw-bold my-1' >Height: {customer.height}</Row>
          <Row className='justify-content-center fw-bold my-1' >Weight: {customer.weight}</Row>
        </Col>
      </Row>
      <Row className='my-2'>
        <Col className='text-center fs-4 fw-bolder fst-italic my-3'>Your Trainer</Col>
      </Row>
      <Row>
        <Col className='text-center text-uppercase'>{trainer ? trainer.firstName + " " + trainer.lastName : "You don't have a trainer yet."}</Col>
      </Row>
      <Row className='justify-content-center fs-4 fst-italic'><Badge bg='dark' style={{width:'10%'}}>{trainer?.bio}</Badge></Row>
      <Row className='justify-content-center fs-6 fst-italic'>{trainer? 'Pricing:':''} {trainer?.price.toFixed(2)}</Row>
      <Row>
      {trainer ? <button className='btn btn-info'>Message</button> : ''}
      </Row>
    </Container>
  )
}