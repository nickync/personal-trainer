import React, { useEffect, useState } from 'react'
import { getAllTrainers, getTrainerReviewService } from './api/ApiService'
import { Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import image1 from '../image1.jpg'
import image2 from '../image2.jpg'
import image3 from '../image3.jpg'
import image4 from '../image4.jpg'
import axios from 'axios'

export default function Home() {
    const [trainers, setTrainers] = useState([])
    const [review, setReview] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getTrainers()
    },[]
    )

    const getTrainers = () => {
        getAllTrainers().then(res => {
            setTrainers(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    const handleTrainerInformation = (id) => {
        navigate('/trainer/information/'+id)
    }

    const getReviews = () => {
        if (trainers.length !== 0){
            trainers
                .filter(trainer => trainer.rating > 4)
                .map(trainer => {
                    getTrainerReviewService(trainer.id).then(res => {
                        let topReview = res.data.find(i => (i.rating > 4))
                        setReview((preState) => [...preState, topReview])
                })
            })
        }
    }

    useEffect(() => {
        getReviews()
    },[trainers])

  return (
    <div className='container-fluid text-center'>
        <h1 id='header-pt' className='fw-bold fst m-3' style={{textShadow:'2px 2px 2px black'}}>Welcome to Personal Trainer!</h1>
        <div id="textCaro" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators pt-4">
                <button type="button" data-bs-target="#textCaro" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#textCaro" data-bs-slide-to="1" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#textCaro" data-bs-slide-to="2" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#textCaro" data-bs-slide-to="3" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner mx-auto mb-3" style={{width:'80%'}}>
                <div className="carousel-item active" >
                    <div className="carousel-caption">
                        <h3 className="text-center fw fs-2 fw-semibold text-light text-uppercase" style={{textShadow:'2px 2px 2px black'}}>Our Personal Trainers are passionate about health and fitness, and through their work inspire and encourage others to develop healthy habits and routines</h3>
                    </div>
                    <img src={image2} className='w-75' alt='p'/>
                </div>

                <div className="carousel-item" >
                    <div className="carousel-caption">
                        <h2 className="text-center fw fs-2 f fw-semibold text-light text-uppercase" style={{textShadow:'2px 2px 2px black'}}>Perform fitness assessments to determine client’s level of fitness</h2>
                    </div>
                    <img src={image1} className='w-75' alt='p'/>
                </div>

                <div className="carousel-item" >
                    <div className="carousel-caption">
                        <h2 className="text-center fw fs-2 f fw-semibold text-light text-uppercase" style={{textShadow:'2px 2px 2px black'}}>Develop + implement tailored exercise regimens that meet client’s needs.</h2>
                    </div>
                    <img src={image3} className='w-75' alt='p'/>
                </div>

                <div className="carousel-item" >
                    <div className="carousel-caption">
                        <h2 className="text-center fw fs-2 f fw-semibold text-light text-uppercase" style={{textShadow:'2px 2px 2px black'}}>Communicate and follow-up with clients</h2>
                    </div>
                    <img src={image4} className='w-75' alt='p'/>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#textCaro" data-bs-slide="prev" data-interval="100">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#textCaro" data-bs-slide="next" data-interval="100">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>
        <div id='scroll-container' className='row bg-light bg-gradient text-dark mt-3'>
            <div id='scroll-text' className='fs-4 fw-bolder fst-italic'>Our Top Trainers...</div>
        </div>
        {trainers
            .filter(trainer => trainer.rating > 4)
            .map(trainer => 
                <div className='p-2 mt-5 mb-5' key={trainer.id}>
                    <div className='row align-items-center'>
                        <div className='col-lg-4'>
                            <h2 className='text-gray fw-bolder'>{trainer.firstName.toUpperCase() + ' ' + trainer.lastName.toUpperCase()}</h2>
                            <p><Badge bg='dark'>{trainer.bio}</Badge></p>
                            <p className='text-dark fst-italic fw-bold fs-6'>"{trainer.background}"</p>
                        </div>
                        <div className='col-lg-4'>
                            <div className='text-start fst-italic'>Rating: {trainer.rating.toFixed(2)}</div>
                            <div className='text-start fst-italic'>
                                <p className='fw-bolder text-primary'>What our customer says about <span className='text-uppercase'>{trainer.firstName}</span> :</p>
                                {review.filter(review => review.trainerId === trainer.id).map(review => 
                                    <p key={review.id} className='ms-2'>{review.review}</p>
                                    )}
                            </div>
                        </div>
                        <div className='col-lg-4 d-flex flex-column align-items-center'>
                            <img src={trainer.img} className="img-thumbnail rounded align-items-center" width={'200px'} alt='thumb'/>
                            <button className='btn btn-sm btn-info my-1' style={{width:'200px'}} onClick={() => handleTrainerInformation(trainer.id)} >View more</button>
                        </div>
                    </div>
                </div>
            )}
    </div>
  )
}
