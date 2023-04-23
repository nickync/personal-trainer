import { useState, useEffect, useCallback } from "react";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useAuth } from "./AuthContext";
import { useParams } from "react-router-dom";
import { getAllPlansService, setTrainingPlanService, updatePlanService, deletePlanService } from "./api/ApiService";
import Popup from "reactjs-popup";

export default function SetTrainingPlanComponent() {
    const [today, setToday] = useState(new Date())
    const [month, setMonth] = useState([])

    const getToday = () => {
        while (today.getDay() > 0){
            today.setDate(today.getDate() - 1)
        }
        today.setDate(today.getDate() - 14)
    }

    useEffect(() => {
        getToday()
    },[today])

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
        console.log(today)
        generateGrid()
    }

    const nextWeek = () => {
        today.setDate(today.getDate() - 21)
        setToday(today)
        console.log(today)
        generateGrid()
    }

    useEffect(() => {
        generateGrid()
    }, [])

    const changePlan = () => {

    }

    // plan details service
    const authContext = useAuth()
    const [trainerId, setTrainerId] = useState(authContext.id)
    const {customerId} = useParams()
    const [date, setPlanDate] = useState('')
    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')
    const [savingStatus, setSavingStatus] = useState(false)
    const [completed, setCompleted] = useState(false)

    const savePlan = (event) => {
        event.preventDefault()
        let plan = {trainerId: trainerId, customerId: customerId, title: title, details: detail, date:date, completed: completed}
        console.log(plan)
        setTrainingPlanService(plan).then(res => {
            if (res.status == 200){
                setSavingStatus(true)
                setTimeout(() => {
                    setPlanDate('')
                    setTitle('')
                    setDetail('')
                    setSavingStatus(false)
                    retrieveAllPlans()
                }, 1500);
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const handleDate = (event) => {
        console.log(event.target.value)
        setPlanDate(event.target.value)
    }

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleDetail = (event) => {
        setDetail(event.target.value)
    }

    // retrieve all plans
    const [plans, setPlans] = useState([])

    useEffect(() => {
        retrieveAllPlans()
    },[])

    const retrieveAllPlans = useCallback(() => {
        getAllPlansService(trainerId, customerId).then(res => {
            setPlans(res.data)
        })
    })

    const editPlan = (planId) => {
        let plan = {id:planId, trainerId: trainerId, customerId: customerId, title: title, details: detail, date:date, completed: completed}
        console.log(plan)
        updatePlanService(plan).then(res => {
            if (res.status === 200){
                setSavingStatus(true)
                setTimeout(() => {
                    setPlanDate('')
                    setTitle('')
                    setDetail('')
                    setSavingStatus(false)
                    retrieveAllPlans()
                }, 1500);
            }
        }).catch(err => {
            console.log(err)
            console.log(plan)
        })
    }

    const deletePlan = (planId) => {
        deletePlanService(planId).then(res => {
            if (res.status === 200){
                retrieveAllPlans()
            }
        })
    }

  return (
    <div className="container-fluid" style={{height:"87vh"}}>
        <h2 className="text-center font-monospace fs-2 fw-bolder my-3" style={{'textShadow': '3px 3px 9px white'}}>Training Plan</h2>
        <div className="text-center">
            <Row>
                <Col><button className="btn btn-sm btn-dark"  onClick={prevWeek}>Previous Week</button></Col>
                <Col><button className="btn btn-sm btn-dark" onClick={nextWeek}>Next week</button></Col>
            </Row>
            <Row className="container-fluid weekday">
                <Col className="fw-bold text-light fst-italic">Sunday</Col>
                <Col className="fw-bold text-light fst-italic">Mondy</Col>
                <Col className="fw-bold text-light fst-italic">Tuesday</Col>
                <Col className="fw-bold text-light fst-italic">Wednesday</Col>
                <Col className="fw-bold text-light fst-italic">Thursday</Col>
                <Col className="fw-bold text-light fst-italic">Friday</Col>
                <Col className="fw-bold text-light fst-italic">Saturday</Col>
            </Row>
            
            {month.map(week => 
                <Row className="container-fluid p-0 m-0" key={Math.random()}>
                    {week.map(day =>
                    <Col className="card" style={{width:"10rem", height:"10rem"}}>
                        <div className="fw-bold text-center">{day.substring(5,10)}</div>
                        {plans.filter(plan => plan.date === day.substring(0,10))
                              .map(plan => 
                              <span key={plan.id} >
                                <Popup trigger={<button className='btn btn-sm btn-dark bg-gradient plan'>{plan.title}</button>} position='bottom center'>
                                    <div className="card py-2 px-2 bg-dark bg-gradient text-light">
                                        <div className="fst-3 fw-bold text-uppercase">{plan.title}</div>
                                        <div className="fst-6 fst-italic">{plan.details}</div>
                                    </div>
                                </Popup>
                              </span>)
                        }
                    </Col>
                    )}
            </Row>)}
        </div>

        <div className="container-fluid d-flex flex-row justify-content-around flex-wrap">
            <div>
                <Col className="text-center fs-4 fw-bolder my-3" style={{'textShadow': '3px 3px 6px black'}}>Add a plan</Col>
                <Col>
                    <div className="d-flex flex-column">
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Form.Control type='date' placeholder='date' value={date} onChange={handleDate}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Plan title</Form.Label>
                            <Form.Control type='text' placeholder='Plan title' value={title} onChange={handleTitle}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Plan Details</Form.Label>
                            <Form.Control as='textarea' placeholder='Plan details' value={detail} onChange={handleDetail} />
                        </Form.Group>
                        <Form.Group className="text-center">
                            <button className="btn btn-sm btn-dark mx-auto my-2" onClick={savePlan}>{savingStatus? 'Plan Saved' : 'Save Plan'}</button>
                        </Form.Group>                        
                    </div>
                </Col>
            </div>
            <div className="">
                <Row className="justify-content-center font-monospace fs-4 fw-bolder my-3" style={{'textShadow': '3px 3px 3px white'}} >Plan List</Row>
                <Row className="weekday">
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
                            <Popup trigger={<button className="btn btn-sm btn-dark me-2" > Edit </button> } position='top left'>

                                <div className="d-flex flex-column p-2 bg-gradient text-light bg-dark rounded-1">
                                    <label>Date</label>
                                    <input type='date' value={date} onChange={handleDate} />
                                    <label>Title</label>
                                    <input type='text' value={title} onChange={handleTitle} />
                                    <label>Details</label>
                                    <textarea type='text' value={detail} onChange={handleDetail} />
                                    <button className="btn btn-sm btn-dark btn-outline-secondary" onClick={() => editPlan(plan.id)}>Save</button>
                                </div>

                            </Popup>
                            <button className="btn btn-sm btn-dark"onClick={() => deletePlan(plan.id)} >Delete</button>
                        </Col>
                    </Row>)}
            </div>
        </div>
    </div>
  )
}