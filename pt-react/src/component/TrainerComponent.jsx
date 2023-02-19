import React, { useEffect, useState } from 'react'
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
    <div className='container-fluid text-center card-group'>
        {trainers.map(trainer => 
                <div className="card m-3 p-1 border-secondary" style={{flexBasis:"45%"}} key={trainer.id}>
                    <img src={trainer.img} className="card-img-top" height={'100%'} alt="#"/>
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
