import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useAuth } from "./AuthContext";
import { useParams } from "react-router-dom";
import { getAllPlansService, setTrainingPlanService } from "./api/ApiService";

export default function SetTrainingPlanComponent() {
    const [today, setToday] = useState(new Date())
    const [month, setMonth] = useState([])

    const getToday = () => {
        while (today.getDay() > 0){
            today.setDate(today.getDate() - 1)
        }
        today.setDate(today.getDate() - 1)
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
        today.setDate(d.getDate()-35)
        setToday(today)
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
    const [date, setPlanDate] = useState(null)
    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')
    const [savingStatus, setSavingStatus] = useState(false)

    const savePlan = (event) => {
        event.preventDefault()
        let plan = {trainerId: trainerId, customerId: customerId, title: title, details: detail, date:date, completed: false}
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
        console.log(date)
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
        console.log(trainerId)
        console.log(customerId)
        getAllPlansService(trainerId, customerId).then(res => {
            setPlans(res.data)
            console.log(res.data)
        })
    },[])

  return (
    <div>
        <div>Training Plan</div>
        <div className="container-fluid">
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
                        {day.substring(5,10)}
                        {plans.filter(plan => plan.date === day.substring(0,10))
                              .map(plan => 
                              <div key={plan.id} className={plan.completed? 'text-success fw-bold' : 'text-dark fw-bold'}>
                                {plan.title}
                              </div>)
                        }
                    </Col>
                    )}
                    <Col></Col>
            </Row>)}
        </div>
        
        <div className="container-fluid">
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
            <Form.Group>
                <button className="btn btn-sm btn-dark" onClick={savePlan}>{savingStatus? 'Plan Saved' : 'Save Plan'}</button>
            </Form.Group>                        
        </div>
    </div>
  )
}