import { useState } from "react";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
export default function SetTrainingPlanComponent() {

    const [month, setMonth] = useState(new Date().getMonth())
    const [day, setDay] = useState(new Date().getDay())
    const [year, setYear] = useState(new Date().getFullYear())

  return (
    <div>
        <div>Training Plan</div>
        <div className="container-fluid mx-5">
            <Row>
                <Col>Sunday</Col>
                <Col>Mondy</Col>
                <Col>Tuesday</Col>
                <Col>Wednesday</Col>
                <Col>Thursday</Col>
                <Col>Friday</Col>
            </Row>
            <Row>
                <Col className='border-2 border-dark'>{month}-{day}-{year}</Col>
                <Col className=''></Col>
                <Col className=''></Col>
                <Col className=''></Col>
                <Col className=''></Col>
                <Col className=''></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </div>
        
        <div className="container-fluid">
            <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control type='date' placeholder='date' />
            </Form.Group>
            <Form.Group>
                <Form.Label>Plan title</Form.Label>
                <Form.Control type='text' placeholder='Plan title' />
            </Form.Group>
            <Form.Group>
                <Form.Label>Plan Details</Form.Label>
                <Form.Control as='textarea' placeholder='Plan details' />
            </Form.Group>
            <Form.Group>
                <Form.Label>Plan title</Form.Label>
                <Form.Control type='text' placeholder='Plan title' />
            </Form.Group>                        
        </div>
    </div>
  )
}