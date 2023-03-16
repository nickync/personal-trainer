import React, { useEffect, useState } from 'react'
import { Badge, Container } from 'react-bootstrap'
import { getCustomerService, getTrainerService, removeTrainerService, sendReviewService } from './api/ApiService'
import { useAuth } from './AuthContext'
import {Row, Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Popup from 'reactjs-popup'

export default function CustomerDetails() {
  const authContext = useAuth()
  const [customer, setCustomer] = useState([])
  const [trainer, setTrainer] = useState()
  const navigate = useNavigate()

  useEffect( () => {
    getCustomerService(authContext.id).then(res => {
      setCustomer(res.data)
    })
   
  },[authContext.id])
  
  useEffect( () => {
    getTrainer()
  }, [customer.trainerId])

  const getTrainer = () => {
    if(customer.trainerId !== undefined && customer.trainerId !== -1){
      console.log(customer.trainerId)
      getTrainerService(customer.trainerId).then(res => {
          setTrainer(res.data)
      })
    }
  }

  const handleEdit = () => {
    navigate('/customer/edit')
  }

  const trainerInformation = (id) => {
    navigate(`/trainer/information/${id}`)
  }

  const removeTrainer = (id) => {
    let action = window.confirm("Are you sure you want to remove this trainer?")
    if (action == true){
      removeTrainerService(id).then(res => {
        navigate('/')
        setTimeout(() => {
          navigate('/customer/details')
        },1000)
      })
    } 
  }

  const trainersPage = () => {
    navigate('/trainers')
  }

  const messagePage = () => {
    navigate('/customerMessaging')
  }

  const [rating, setRating] = useState(1)
  const [review, setReview] = useState('')
  const [sent, setSent] = useState(false)

  const handleRatingChange = (event) => {
    event.preventDefault()
    setRating(event.target.value)
  }

  const handleReviewChange = (event) => {
    event.preventDefault()
    setReview(event.target.value)
  }


  const sendReview = () => {
    let reviewObj = {trainerId: customer.trainerId, customerId: customer.id, rating: rating, review: review, customerName: customer.firstName + " " + customer.lastName}
    console.log(reviewObj)
    console.log(customer.trainerId)
    sendReviewService(reviewObj).then(res => {
      if (res.status === 200){
        setSent(true)
        setTimeout(() => {
          setSent(false)
        }, 1500)
      }
    })
  }

  return (
    <Container className='mt-5'>
      <Row className='text-end'>
        <Col><button className='btn btn-sm btn-dark' onClick={handleEdit}>Edit</button></Col>
      </Row>
      <Row>
        <Col><img className="card-img-top" height={'100%'} alt="#" src={customer.img ? customer.img : 'https://www.nicepng.com/png/detail/14-148358_lovely-penguin-clip-art-is-penguin-profile.png'}></img></Col>
        <Col>
          <Row className='justify-content-center fs-1 text-uppercase'> {customer.firstName + " " + customer.lastName}</Row>
          <Row className='justify-content-center fs-4 fst-italic my-3'> <Badge bg='info' style={{width:'50%'}}>{customer.goal}</Badge></Row>
          <Row className='justify-content-center fw-bold my-1' >Age: {customer.age}</Row>
          <Row className='justify-content-center fw-bold my-1' >Height: {customer.height}</Row>
          <Row className='justify-content-center fw-bold my-1' >Weight: {customer.weight}</Row>
        </Col>
      </Row>
      <Row className='my-2'>
        <Col className='text-center fs-4 fw-bolder fst-italic my-3'>Your Trainer</Col>
      </Row>
      <Row>
        <Col className='text-center text-uppercase my-2'>{trainer ? trainer.firstName + " " + trainer.lastName 
        : 
        <Row className='text-center'>
          <span>You don't have a trainer yet.</span>
          <Col></Col>
          <Col><button className='btn btn-sm btn-info' style={{width:'150px'}} onClick={trainersPage}>Find a Trainer</button></Col>
          <Col></Col>
        </Row>
        }
        </Col>
      </Row>
      <Row className='justify-content-center fs-4 fst-italic'><Badge bg='dark' style={{width:'10%'}}>{trainer?.bio}</Badge></Row>
      <Row className='justify-content-center fs-6 fst-italic my-2'>{trainer? 'Hourly Pricing:':''} {trainer?.price.toFixed(2)}</Row>

      {trainer ? 
        <Row>
          <Col className='text-end'><button className='btn btn-sm btn-info' onClick={messagePage}>Message</button></Col>
          <Col className='text-center'><button className='btn btn-sm btn-info' onClick={() => trainerInformation(trainer.id)}>View Trainer</button></Col>
          
          <Col>
            <Popup trigger={<button className="btn btn-sm btn-info me-2" > Send a review </button> } position='top center'>

              <div className="d-flex flex-column p-2 bg-gradient text-light bg-dark rounded-1">
                  <label>Rating</label>
                  <select value={rating} onChange={handleRatingChange}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <label>Review</label>
                  <textarea type='text' value={review} onChange={handleReviewChange} />
                  <button className="btn btn-sm btn-dark btn-outline-secondary" onClick={sendReview}>Send</button>
              </div>

            </Popup>
            {sent ? <div className='text-success-emphasis'>Review has been sent...</div> : ""}
          </Col>

          <Col className='text-start'><button className='btn btn-sm btn-danger' onClick={() => removeTrainer(authContext.id)}>Remove trainer</button></Col>
        </Row>
        : ''}

    </Container>
  )
}