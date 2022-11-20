import React, { useEffect, useState, useLocation} from 'react'
import { useParams } from 'react-router-dom';
import TrainerService from '../service/TrainerService';


export default function TrainerDetails() {
    const user = useParams();
    const [trainer, setTrainer] = useState();
    const username = user['username']
    console.log(trainer)
    useEffect(() => {
        TrainerService.getTrainerByUsername(username).then((res)=>{
            setTrainer(res.data)
        })
    },username)

    return (
        <div className='container'>
            <h1>{trainer['firstName']}</h1>
        </div>
    )
}
