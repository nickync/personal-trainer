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
        <h1>Welcome to personal trainer site!</h1>
        <h4>Customize your training plan.</h4>
        <div className='row'>
            <div className='col-sm-6 fst-italic'>Our Top Trainers...</div>
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
