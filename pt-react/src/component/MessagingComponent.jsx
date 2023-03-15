import React, { useRef } from "react"
import { useAuth } from "./AuthContext"
import { useState, useEffect } from "react"
import { getAllMessageService, getTrainerClients, sendMessageService } from "./api/ApiService"
import { Col, Row } from "react-bootstrap"


export default function MessagingComponent() {
    const authContext = useAuth()
    const [clients, setClients] = useState([])
    const [message, setMessage] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const [sent, setSent] = useState(false)
    const [clientId, setClientId] = useState('')
    const [displayMsg, setDisplayMsg] = useState(false)
    
    const getClients = () => {
        getTrainerClients(authContext.id).then(res => {
            setClients(res.data)
        })
    }

    useEffect(() => {
        getClients()
    },[authContext.id])

    const getMessage = (trainerId, customerId) => {
        setClientId(customerId)
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

    const sendMessage = (customerId) => {
        let msg = { trainerId:authContext.id, customerId:customerId, message:newMessage, time:new Date().toISOString(), sender:'Trainer' }
        console.log(msg)
        sendMessageService(msg).then(res => {
            if (res.status === 200){
                getMessage(authContext.id, customerId)
                setNewMessage('')
            }
        })
    }

    const scrollToRef = useRef()

    useEffect(() => {
        const element = document.getElementById("chatBox")
        if (element !== null){
            element.scrollIntoView()
        }
    },[message])

  return (
    <div className="container-fluid d-flex">
        <div className="w-25 text-center mt-4">
            {clients.map(client =>
            <div key={client.id} className=" border-info border text-uppercase">
                <button className="text-uppercase fst-italic btn btn-lg bg-light w-100 rounded-0" onClick={() => getMessage(authContext.id, client.id)}>{client.firstName + " " + client.lastName}</button>
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
                        <input id="chatBox" type="text" className="w-75" value={newMessage} onChange={handleNewMessage}/>
                        <button className="btn btn-sm btn-dark mf-0" onClick={() => sendMessage(clientId)}>Send</button>
                        {sent? <div>Message sent.</div> : ""}
                    </div>
                </div>
            </div>
        :
            ""
        }
    </div>
  )
}