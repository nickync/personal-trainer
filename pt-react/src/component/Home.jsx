import React, { useEffect, useState } from 'react'
import { getAllTrainers } from './api/ApiService'

export default function Home() {
    const [trainers, setTrainers] = useState([])

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
                    <div className='row'>
                        <div className='col-lg-4'><h2 className='text-gray fw-bolder'>{trainer.firstName.toUpperCase() + ' ' + trainer.lastName.toUpperCase()}</h2></div>
                        <div className='col-lg-4 text-start'>{trainer.rating.toFixed(2)}</div>
                        <div className='col-lg-4'><img src={trainer.img} className="img-thumbnail rounded" width={'200px'} alt='thumb'/></div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-1'></div>
                        <div className='col-lg-10 text-start'>{trainer.bio}</div>
                    </div>
                </div>
            )}

    </div>
  )
}
