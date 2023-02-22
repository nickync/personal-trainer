import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllTrainers } from "./api/ApiService";

export default function TrainerInformation(){
    const [trainers, setTrainers] = useState([])
    const {id} = useParams()
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

    
    return(
        <div>
            {trainers.filter(i => i.id == id)
            .map(trainer => 
            <div>
                {trainer.firstName}
            </div>)}
        </div>
    )
}