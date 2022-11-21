import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import TrainerService from '../service/TrainerService';


export default function TrainerDetails() {
    const user = useParams();
    // const [trainer, setTrainer] = useState(null);
    const username = user['username']
    console.log(username)
    const [trainer, setTrainer] = useState([])
    
    console.log(trainer)
    useEffect(() => {
        TrainerService.getTrainerByUsername(username).then((res)=>{
            setTrainer(res.data)
        })
    },[username])

    return (
        <div className='container card text-center'>
            <div className='row'>
                <h1 className="col-sm-12">{trainer.firstName + " " + trainer.lastName}</h1>
            </div>
            <div className="row">
                <p className="col-sm-4">Location: {trainer.location}</p>
                <p className="col-sm-4">Price (per hour): ${trainer.price == null ? '' : trainer.price.toFixed(2)}</p>
                <p className="col-sm-4">Years of Experience: {trainer.yearsOfExperience}</p>
            </div>
            <div className='row'>
                <p className="col-sm-3">Age: {trainer.age}</p>
                <p className="col-sm-6 text-primary">{trainer.background}</p>
                <p className="col-sm-3">{trainer.email}</p>
            </div>
        </div>
    )
}
