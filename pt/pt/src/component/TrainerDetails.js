import React, { useEffect, useState, useLocation} from 'react'
import TrainerService from '../service/TrainerService';


export default function TrainerDetails() {
    const location = useLocation();
    const [trainer, setTrainer] = useState();

    useEffect(() => {
        TrainerService.getTrainerByUsername(location.state.username).then((res)=>{
            setTrainer(res.data)
        })
    }, [])

    return (
        <div className='container'>
            <h1>{trainer.username}</h1>
        </div>
    )
}
