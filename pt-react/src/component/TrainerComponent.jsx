import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAllTrainers } from './api/ApiService'

export default function TrainerComponent() {
    const [trainers, setTrainers] = useState([]);
    const navigate = useNavigate()
    const [location, setLocation] = useState('')
    const [rating, setRating] = useState(0)
    const [star, setStar] = useState(5)

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

    const handleLocationChange = (event) => {
        event.preventDefault()
        setLocation(event.target.value)
    }

    // const handleRatingChange = (event) => {
    //     event.preventDefault()
    //     setRating(event.target.value)
    // }
    
    // useEffect(() => {
    //     if (location !== '' && trainers !== []){
    //         setTrainers(trainers.filter(trainer => trainer.location === location))
    //     }
    //     if (rating !== 0 && trainers !== []){
    //         setTrainers(trainers.filter(trainer => trainer.rating >= rating))
    //     }
    // },[rating, location])

    const getStar = (number) => {
        setRating(number)
        setStar(number)
    }

    useEffect(() => {
        
    }, [star])

  return (
    <div className='container-fluid'>
        <div>
            <label className='fw-bold'>Location:</label>
            <select value={location} onChange={handleLocationChange} className="rounded bg-dark bg-gradient text-light">
                <option>New York</option>
                <option>Florida</option>
                <option>Arkansas</option>
            </select>
        </div>
        <div className='d-flex'>
            <div className='fw-bold'>Rating: </div>
            <div>
                <button className={`fa fa-star p-0 m-0 btn ${star >= 1 ? "checked" : ''}`} onClick={() => getStar(1)}></button>
                <button className={`fa fa-star p-0 m-0 btn ${star >= 2 ? "checked" : ''}`} onClick={() => getStar(2)}></button>
                <button className={`fa fa-star p-0 m-0 btn ${star >= 3 ? "checked" : ''}`} onClick={() => getStar(3)}></button>
                <button className={`fa fa-star p-0 m-0 btn ${star >= 4 ? "checked" : ''}`} onClick={() => getStar(4)}></button>
                <button className={`fa fa-star p-0 m-0 btn ${star >= 5 ? "checked" : ''}`} onClick={() => getStar(5)}></button>
            </div>
        </div>
        <div className='text-center justify-content-center d-flex flex-wrap'>
            {trainers
                .filter(trainer => location !== '' ? trainer.location === location : trainer)
                .filter(trainer => rating !== 0 ? trainer.rating >= rating : trainer)
                .map(trainer => 
                    <div className="card m-3 p-1 border-secondary" style={{width:"30rem"}} key={trainer.id}>
                        <img src={trainer.img} className="card-img-top" height={'350rem'} alt="#"/>
                        <div className="card-body">
                            <h5 className="card-title text-uppercase">{trainer.firstName + ' ' + trainer.lastName}</h5>
                            <p className="card-text">{trainer.bio}</p>
                            <p className='card-text'>{trainer.rating.toFixed(2)}</p>
                            <button onClick={()=>goInfoPage(trainer.id)} className="btn btn-primary">View more</button>
                        </div>
                    </div>
            )}
        </div>
    </div>
  )
}
