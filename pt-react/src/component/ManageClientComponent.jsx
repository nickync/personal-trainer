import React, { useEffect, useState } from "react"
import { getTrainerClients } from "./api/ApiService"
import { useAuth } from "./AuthContext"
import { Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function ManageClientComponent() {
    const navidate = useNavigate()
    const authContext = useAuth()
    const [clients, setClients] = useState([])
    
    const getClients = () => {
        getTrainerClients(authContext.id).then(res => {
            setClients(res.data)
        })
    }

    useEffect(() => {
        getClients()
    },[authContext.id])

    const setTrainingPlan = (customerId) => {
        navidate(`/setTrainingPlan/${customerId}`)
    }

  return (
    <div className="container-fluid d-flex justify-content-start text-center flex-column" style={{height:"87vh"}}>
        <div>
            <h2 className="fst-italic">Your clients</h2>
        </div>
        <div className="d-flex flex-wrap flex-row justify-content-center">
            {clients.map(client => 
                <div className="card m-3 p-1 border-secondary" style={{width:"20rem"}} key={client.id}>
                    <img src={client.img} className="card-img-top" height={'100%'} alt="#"/>
                    <div className="card-body">
                        <h5 className="card-title text-uppercase">{client.firstName + ' ' + client.lastName}</h5>
                        <p className="card-text">{client.goal}</p>
                        <p className='card-text'>{client.height}</p>
                        <p className='card-text'>{client.weight}</p>
                        <button className="btn btn-info bg-gradient btn-sm" onClick={() => setTrainingPlan(client.id)}>Customize plan</button>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}