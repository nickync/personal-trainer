import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { getTrainerReviewService, getTrainerService } from './api/ApiService'
import { useAuth } from './AuthContext'
import {Row, Col} from 'react-bootstrap'
import {Badge} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function TrainerDetails() {
  const authContext = useAuth()
  const navigate = useNavigate()
  const [trainer, setTrainer] = useState('')
  const [reviews, setReviews] = useState([])

  useEffect( () => {
    getTrainerService(authContext.id).then(res => {
      setTrainer(res.data)
      console.log(trainer)
    })
  },[])
  
  const handleEdit = () => {
    navigate('/trainer/edit')
  }

  const getAllReviews = () => {
    getTrainerReviewService(authContext.id).then(res => {
      setReviews(res.data)
    })
  }

  useEffect(()=>{
    getAllReviews()
    console.log(reviews)
  },[trainer])

  const getStars = (rating) => {
    let stars = ""
    for (let i=0; i<rating; i++){
        stars += "\u2B50"
    }
    return stars
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
      
      <Row className='text-center shadow-lg m-3'>
        <h3>Customer Reviews</h3>
      </Row>
      {reviews.map(review => 
        <>
          <Row className='text-uppercase fw-bold'>{review.customerName}:</Row>
          <Row>{getStars(review.rating)}</Row>
          <Row className='fst-italic p-2 mb-4'>{review.review}</Row>
        </>
      )}
    </Container>
  )
}
