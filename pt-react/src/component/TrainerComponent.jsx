import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { getAllTrainers } from './api/ApiService'

export default function TrainerComponent() {
    const [trainers, setTrainers] = useState([]);

    useEffect(
        () => getTrainers,[]
    )

    const getTrainers = () => {
        getAllTrainers().then(res => {
            setTrainers(res.data) 
        })
    }
  return (
    <div className='container-fluid text-center flex-inline flex-wrap'>
        {trainers.map(trainer => 
                <div className="card mt-3 me-4" style={{width: '50%'}} key={trainer.id}>
                    <img src="#" className="card-img-top" alt="#"/>
                    <div className="card-body">
                        <h5 className="card-title">{trainer.firstName.toUpperCase() + ' ' + trainer.lastName.toUpperCase() }</h5>
                        <p className="card-text">{trainer.bio}</p>
                        <p className='card-text'>{trainer.rating.toFixed(2)}</p>
                        <a href="#" className="btn btn-primary">View more</a>
                    </div>
                </div>
        )}
    </div>
  )
}
