import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAllTrainers } from './api/ApiService'

export default function TrainerComponent() {
    const [trainers, setTrainers] = useState([]);
    const navigate = useNavigate()

    useEffect(
        () => getTrainers,[]
    )

    const getTrainers = () => {
        getAllTrainers().then(res => {
            setTrainers(res.data) 
        })
    }
    const goInfoPage = (id) => {
        navigate(`/trainer/information/${id}`)
    }

  return (
    <div className='container-fluid text-center card-group'>
        {trainers.map(trainer => 
                <div className="card m-3 p-1 border-secondary" style={{flexBasis:"45%"}} key={trainer.id}>
                    <img src={trainer.img} className="card-img-top" height={'100%'} alt="#"/>
                    <div className="card-body">
                        <h5 className="card-title text-uppercase">{trainer.firstName + ' ' + trainer.lastName}</h5>
                        <p className="card-text">{trainer.bio}</p>
                        <p className='card-text'>{trainer.rating.toFixed(2)}</p>
                        <button onClick={()=>goInfoPage(trainer.id)} className="btn btn-primary">View more</button>
                    </div>
                </div>
        )}
    </div>
  )
}
