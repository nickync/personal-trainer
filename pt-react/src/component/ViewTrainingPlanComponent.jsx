import React, { useEffect, useState } from "react";
import { getAllPlansService, getCustomerService, setPlanStatusService } from "./api/ApiService";
import { useAuth } from "./AuthContext";
import { Col, Row } from "react-bootstrap";
import Popup from "reactjs-popup";

export default function ViewTrainingPlanComponent(){
    const authContext = useAuth()
    const [customer, setCustomer] = useState('')
    const [plans, setPlans] = useState([])
    const [today, setToday] = useState(new Date())
    const [month, setMonth] = useState([])

    useEffect(() => {
        getToday()
    },[today])

    const getToday = () => {
        while (today.getDay() > 0){
            today.setDate(today.getDate() - 1)
        }
        today.setDate(today.getDate() - 14)
    }

    const generateGrid = () => {
        
        let m = []
        for (let week=0; week < 4; week ++){
            let row = []
            for (let day=0; day<7; day++){
                row.push(today.toISOString())
                today.setDate(today.getDate() + 1)
            }
            m.push(row)
        }
        setMonth(m)
    }

    const prevWeek = () => {
        today.setDate(today.getDate() - 35)
        setToday(today)
        generateGrid()
    }

    const nextWeek = () => {
        today.setDate(today.getDate() - 21)
        setToday(today)
        generateGrid()
    }

    useEffect(() => {
        generateGrid()
    }, [])

    const getCustomer = () => {
        getCustomerService(authContext.id).then(res => {
            setCustomer(res.data)
        })
    }

    useEffect(() => {
        getCustomer()
    }, [])

    const getAllPlans = () => {
        if (customer !== ''){
            getAllPlansService(customer.trainerId, customer.id).then(res => {
                setPlans(res.data)
            })   
        }
    }

    const setPlanStatus = (planId, planStatus) => {
        setPlanStatusService(planId, !planStatus).then(res => {
            if (res.status === 200){
                getAllPlans()
            }
        })
    }


    useEffect(() => {
        getAllPlans()
    },[customer])
    return(
        <div className="container-fluid">
            <h2 className="text-center font-monospace fs-2 fw-bolder my-3" style={{'textShadow': '3px 3px 9px white'}}>Training Plan</h2>
            <div className="text-center">
                <Row>
                    <Col><button className="btn btn-sm btn-dark"  onClick={prevWeek}>Previous Week</button></Col>
                    <Col><button className="btn btn-sm btn-dark" onClick={nextWeek}>Next week</button></Col>
                </Row>
                <Row className="">
                    <Col></Col>
                    <Col className="fw-bold text-light fst-italic">Sunday</Col>
                    <Col className="fw-bold text-light fst-italic">Mondy</Col>
                    <Col className="fw-bold text-light fst-italic">Tuesday</Col>
                    <Col className="fw-bold text-light fst-italic">Wednesday</Col>
                    <Col className="fw-bold text-light fst-italic">Thursday</Col>
                    <Col className="fw-bold text-light fst-italic">Friday</Col>
                    <Col className="fw-bold text-light fst-italic">Saturday</Col>
                    <Col></Col>
                </Row>
                
                {month.map(week => 
                    <Row className="container-fluid" key={Math.random()}>
                        <Col></Col>
                        {week.map(day =>
                        <Col key={day.substring(0,10)} className="card" style={{width:"10rem", height:"10rem"}}>
                            <div className="fw-bold text-center">{day.substring(5,10)}</div>
                            {plans.filter(plan => plan.date === day.substring(0,10))
                                .map(plan => 
                                <span key={plan.id} >
                                    {plan.completed ? 
                                        <Popup trigger={<button className='btn btn-sm btn-success bg-gradient'>{plan.title}</button>} position='bottom center'>
                                            <div className="card py-2 px-2 bg-dark bg-gradient text-light">
                                                <div className="fst-3 fw-bold text-uppercase">{plan.title}</div>
                                                <div className="fst-6 fst-italic">{plan.details}</div>
                                                <button className="btn btn-sm btn-dark btn-outline-light" onClick={() => setPlanStatus(plan.id, plan.completed)}>Update Status</button>
                                            </div>
                                        </Popup> 
                                        :
                                        <Popup trigger={<button className='btn btn-sm btn-danger bg-gradient'>{plan.title}</button>} position='bottom center'>
                                        <div className="card py-2 px-2 bg-dark bg-gradient text-light">
                                            <div className="fst-3 fw-bold text-uppercase">{plan.title}</div>
                                            <div className="fst-6 fst-italic">{plan.details}</div>
                                            <button className="btn btn-sm btn-dark btn-outline-light" onClick={() => setPlanStatus(plan.id, plan.completed)}>Update Status</button>
                                        </div>
                                    </Popup> 
                                    }

                                </span>)
                            }
                        </Col>
                        )}
                        <Col></Col>
                </Row>)}
            </div>
            <div className="w-75 text-center mx-auto">
                <Row className="justify-content-center font-monospace fs-4 fw-bolder my-3" style={{'textShadow': '3px 3px 3px white'}} >Plan List</Row>
                <Row>
                    <Col>Date</Col>
                    <Col>Title</Col>
                    <Col>Details</Col>
                    <Col>Completed</Col>
                    <Col>Action</Col>
                </Row>
                {plans.map(plan => 
                    <Row key={plan.id} className='border border-secondary'>
                        <Col>{plan.date}</Col>
                        <Col>{plan.title}</Col>
                        <Col>{plan.details}</Col>
                        <Col>{plan.completed ? 'Completed' : 'Not Completed'}</Col>
                        <Col>
                           <button className="btn btn-sm btn-dark" onClick={() => setPlanStatus(plan.id, plan.completed)}>Update Status</button>
                        </Col>
                    </Row>)}
            </div>
        </div>
    )
}