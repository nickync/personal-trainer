import React, { useEffect, useState, useLocation} from 'react'
import { useParams } from 'react-router-dom';
import TrainerService from '../service/TrainerService';


export default function TrainerDetails() {
    const user = useParams();
    const [trainer, setTrainer] = useState();
    const username = user['username']
<<<<<<< HEAD:pt/pt/src/component/TrainerDetails.jsx
    console.log(username)
    const [trainer, setTrainer] = useState([])
    
=======
>>>>>>> parent of 8ee3de1 (trainer details page):pt/pt/src/component/TrainerDetails.js
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
