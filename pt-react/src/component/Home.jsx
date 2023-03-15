import React, { useEffect, useState } from 'react'
import { getAllTrainers } from './api/ApiService'
import { Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const [trainers, setTrainers] = useState([])

    const navigate = useNavigate()

    useEffect(
        () => getTrainers, []
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

  return (
    <div className='container-fluid text-center'>
        <h1 className='fw-light m-3' style={{textShadow:'2px 2px 2px black'}}>Welcome to Personal Trainer!</h1>
        {/* <div>
            <ul>
                <li>Our Personal Trainers are passionate about health and fitness, and through their work inspire and encourage others to develop healthy habits and routines</li>
                <li>Perform fitness assessments to determine client’s level of fitness</li>
                <li>Develop + implement tailored exercise regimens that meet client’s needs</li>
                <li>Motivate and inspire clients to achieve results and reach goals</li>
                <li>Communicate and follow-up with clients</li>
            </ul>
        </div> */}
        <div id="textCaro" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators pt-4">
                <button type="button" data-bs-target="#textCaro" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#textCaro" data-bs-slide-to="1" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#textCaro" data-bs-slide-to="2" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#textCaro" data-bs-slide-to="3" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner" style={{height:'20rem'}}>
                <div className="carousel-item active" >
                    <div className="card-header">
                        <h3 className="text-center fs-5 fst-italic fw-semibold text-dark text-body-emphasis" style={{textShadow:'1px 1px 2px black'}}>Our Personal Trainers are passionate about health and fitness, and through their work inspire and encourage others to develop healthy habits and routines</h3>
                    </div>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTE3eGhRH0Ih2wJt1BpxkoJSxqLBiV9u1MBQ&usqp=CAU' alt='p'/>

                </div>

                <div className="carousel-item" >
                    <div className="card-header">
                        <h2 className="text-center fs-5 fst-italic fw-semibold text-dark text-body-emphasis" style={{textShadow:'1px 1px 2px black'}}>Perform fitness assessments to determine client’s level of fitness</h2>
                    </div>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl_GTFVxdTTGbmtBPwlC1poeTEYzfEeGniBg&usqp=CAU' alt='p'/>
                </div>

                <div className="carousel-item" >
                    <div className="card-header">
                        <h2 className="text-center fs-5 fst-italic fw-semibold text-dark text-body-emphasis" style={{textShadow:'1px 1px 2px black'}}>Develop + implement tailored exercise regimens that meet client’s needs.</h2>
                    </div>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKv6F1WuL_oHMVMWzobHG3YZ9CNDUfMQPp0w&usqp=CAU' alt='p' />
                </div>

                <div className="carousel-item" >
                    <div className="card-header">
                        <h2 className="text-center fs-5 fst-italic fw-semibold text-dark text-body-emphasis" style={{textShadow:'1px 1px 2px black'}}>Communicate and follow-up with clients</h2>
                    </div>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQ4JH4aU73hKnO_TBqQ4VFawEyQ6gEbhrzA&usqp=CAU' alt='p' />
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
        <div id='scroll-container' className='row bg-light bg-gradient text-dark'>
            <div id='scroll-text' className='fs-4 fw-bolder fst-italic'>Our Top Trainers...</div>
        </div>
        {trainers
            .filter(trainer => trainer.rating > 3)
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
                                <p className='fw-bolder text-primary'>What our customer says about {trainer.firstName} :</p>
                                <p className='ms-2'>llalallalalalalallalaaa</p>
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
