import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useAuth } from "./AuthContext";
import { useParams } from "react-router-dom";
import { getAllPlansService, setTrainingPlanService } from "./api/ApiService";
import Popup from "reactjs-popup";

export default function SetTrainingPlanComponent() {
    const [today, setToday] = useState(new Date())
    const [month, setMonth] = useState([])

    const getToday = () => {
        while (today.getDay() > 0){
            today.setDate(today.getDate() - 1)
        }
        today.setDate(today.getDate() - 15)
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

    const goToday = () => {
        let d = new Date()
        setToday(today)
        generateGrid()
    }

    useEffect(() => {
        generateGrid()
    }, [today])

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
        getAllPlansService(trainerId, customerId).then(res => {
            setPlans(res.data)
        })
    },[])

    const editPlan = (planId, planDate) => {
        console.log(date)
        setPlanDate(planDate)
        let plan = {planId:planId, trainerId: trainerId, customerId: customerId, title: title, details: detail, date:date, completed: completed}
        console.log(date)
        setTrainingPlanService(plan).then(res => {
            if (res.status == 200){
                setSavingStatus(true)
                setTimeout(() => {
                    setPlanDate('')
                    setTitle('')
                    setDetail('')
                    setSavingStatus(false)
                }, 1500);
            }
        }).catch(err => {
            console.log(err)
        })
    }

  return (
    <div className="container-fluid">
        <h2 className="text-center font-monospace fs-2 fw-bolder my-3" style={{'text-shadow': '3px 3px 9px white'}}>Training Plan</h2>
        <div>
            <Row>
                <Col></Col>
                <Col><button className="btn btn-sm btn-dark"  onClick={prevWeek}>Previous Week</button></Col>
                <Col><button className="btn btn-sm btn-dark" onClick={goToday}>Today</button></Col>
                <Col><button className="btn btn-sm btn-dark" onClick={nextWeek}>Next week</button></Col>
                <Col></Col>
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
                                <Popup trigger={<button className='btn btn-sm btn-dark bg-gradient'>{plan.title}</button>} position='bottom center'>
                                    <div className="card py-2 px-2 bg-dark bg-gradient text-light">
                                        <div className="fst-3 fw-bold text-uppercase">{plan.title}</div>
                                        <div className="fst-6 fst-italic">{plan.details}</div>
                                        <button>Edit</button>
                                    </div>
                                </Popup>
                              </span>)
                        }
                    </Col>
                    )}
                    <Col></Col>
            </Row>)}
        </div>

        <div className="container-fluid d-flex flex-row justify-content-around">
            <div>
                <Col className="text-center fs-4 fw-bolder my-3">Add a plan</Col>
                <Col></Col>
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
                <Col></Col>
                <Col></Col>
            </div>
            <div className="mt-5">
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
                        <Popup trigger={<button>Edit</button> } position='top center'>

                            <div className="d-flex flex-column">
                                <label>Date</label>
                                <input type='date' value={date} onChange={handleDate} />
                                <label>Title</label>
                                <input type='text' value={title} onChange={handleTitle} />
                                <label>Details</label>
                                <textarea type='text' value={detail} onChange={handleDetail} />
                                <button onClick={() => editPlan(plan.id, plan.date)}>Save</button>
                            </div>

                        </Popup></Col>
                    </Row>)}
            </div>
        </div>
    </div>
  )
}