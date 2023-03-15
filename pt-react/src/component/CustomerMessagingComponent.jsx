import React, { useRef } from "react"
import { useAuth } from "./AuthContext"
import { useState, useEffect } from "react"
import { getAllMessageService, getCustomerService, getTrainerClients, getTrainerService, sendMessageService } from "./api/ApiService"
import { Col, Row } from "react-bootstrap"


export default function CustomerMessagingComponent() {
    const authContext = useAuth()
    const [message, setMessage] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const [sent, setSent] = useState(false)
    const [trainerId, setTrainerId] = useState([])
    const [displayMsg, setDisplayMsg] = useState(false)
    const [trainers, setTrainers] = useState([])
    const [trainer, setTrainer] = useState([])
    const [noHistory, setNoHistory] = useState(true)

    useEffect(() => {
        getCustomerService(authContext.id).then(res => {
            if (res.data.trainerId !== -1){       
                setNoHistory(false)
                setTrainerId(res.data.trainerId)
                console.log(res.data.trainerId, 'sdff')
                getTrainerService(res.data.trainerId).then(res => {
                    setTrainer(res.data)
                    console.log(res.data)
                })
            } 
        })
    },[])

    useEffect(() => {
        const listOfTrainerId = []
        message.map(msg => {
            if (!listOfTrainerId.includes(msg.trainerId)){
                listOfTrainerId.push(msg.trainerId)
            }
        })
        setTrainerId(listOfTrainerId)
        console.log(listOfTrainerId)
        const listOfTrainers = []
        listOfTrainerId.map(id => {
            getTrainerService(id).then(res => {
                listOfTrainers.push(res.data)
            })
            setTrainers(listOfTrainers)
        })
        console.log(message)
    },[message])

    const getMessage = (trainerId, customerId) => {
        // setClientId(customerId)
        getAllMessageService(trainerId, customerId).then(res => {
            setMessage(res.data)
            setDisplayMsg(true)
        }).catch(err => {
            console.log('failed to retrieve messages')
        })
    }

    const handleNewMessage = (event) => {
        event.preventDefault()  
        setNewMessage(event.target.value)
    }

    const sendMessage = (trainerId) => {
        let msg = { trainerId:trainerId, customerId:authContext.id, message:newMessage, time:new Date().toISOString(), sender:'Customer' }
        console.log(msg)
        sendMessageService(msg).then(res => {
            if (res.status === 200){
                getMessage(trainerId, authContext.id)
                setNewMessage('')
            }
        })
    }

    useEffect(() => {
        const element = document.getElementById("chatBox")
        if (element !== null){
            element.scrollIntoView()
        }
    },[message])

  return (
    <>
        {
            noHistory ? 
                <div className="fs-3 text-center">You have no message history.</div>
            :
            <div className="container-fluid d-flex">
                <div className="w-25 text-center mt-4">
                    <div key={trainerId} className=" border-info border text-uppercase">
                        <button className="text-uppercase fst-italic btn btn-lg bg-light w-100 rounded-0" onClick={() => getMessage(trainer.id, authContext.id)}>{trainer.firstName + " " + trainer.lastName}</button>
                    </div>
                    {trainers.map(trainer =>
                    <div key={trainer.id} className=" border-info border text-uppercase">
                        <button className="btn btn-lg bg-light w-100 rounded-0" onClick={() => getMessage(trainer.id, authContext.id)}>{trainer.firstName + " " + trainer.lastName}</button>
                    </div>
                    )}
                </div>
                {displayMsg ?
                    <div className="w-75 text-center" >
                        <div className="mt-1 fs-5 shadow-sm text-light" >Message History</div>
                        <div className="w-75 mx-auto overflow-y-scroll m-1 border d-flex flex-column" style={{maxHeight:'30rem'}}>
                            {message.map(msg => 
                                <Row key={msg.id} className={`w-75 rounded-5 p-2 m-1 text-start bg-gradient ${msg.sender === 'Trainer' ? "bg-light" : "justify-content-end align-self-end bg-info-subtle"}`}>{msg.message}</Row>
                            )}
                            <div className="d-flex p-3">
                                <textarea id="chatBox" type="text" className="w-75" value={newMessage} onChange={handleNewMessage}/>
                                <button className="btn btn-sm btn-dark mf-0" onClick={() => sendMessage(trainer.id)}>Send</button>
                                {sent? <div>Message sent.</div> : ""}
                            </div>
                        </div>
                    </div>
                :
                    ""
                }
            </div>
        }
    </>
  )
}