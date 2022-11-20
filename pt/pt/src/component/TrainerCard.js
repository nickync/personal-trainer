import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function TrainerCard({trainer}) {
    const navigate = useNavigate();
    
    const handleClickDetails = (event, username) => {
        event.preventDefault()
        navigate(`/details/`, {state: {username: username}})
    }

    return (
    <div className='container-fluid text-center border border-light border-2 bg-secondary bg-gradient shadow-lg p-3 mb-3 bg-body rounded'>
        <div className='row'>
            <h1 className="col-sm-12">{trainer.firstName + " " + trainer.lastName}</h1>
        </div>
        <div className="row">
            <p className="col-sm-4">Location: {trainer.location}</p>
            <p className="col-sm-4">Price (per hour): ${trainer.price.toFixed(2)}</p>
            <p className="col-sm-4">Years of Experience: {trainer.yearsOfExperience}</p>
        </div>
        <div className='row'>
            <p className="col-sm-3"></p>
            <p className="col-sm-6 text-primary">{trainer.background}</p>
            <p className="col-sm-3">{trainer.username}</p>
        </div>
        <div className='row'>
            <p className="col-sm-4"></p>
            <button className='btn btn-sm px-1 mx-1 btn-light col-sm-2' onClick={handleClickDetails}>See details</button>
            <button className='btn btn-sm px-1 mx-1 btn-light col-sm-2' onClick={handleClickDetails}>See details</button>
            <p className="col-sm-4"></p>
        </div>
    </div>
  )
}
