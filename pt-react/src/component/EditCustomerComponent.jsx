import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { getCustomerService, getTrainerService, updateCustomerService, updateTrainerService } from "./api/ApiService";

export default function EditCustomerComponent() {
    const authContext = useAuth()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [img, setImg] = useState('https://www.nicepng.com/png/detail/14-148358_lovely-penguin-clip-art-is-penguin-profile.png')

    useEffect(() => {
        getCustomerService(authContext.id).then(res => {
            setFirstName(res.data.firstName)
            setLastName(res.data.lastName)
            setImg(res.data.img)
            setAge(res.data.age)
            setWeight(res.data.weight)
            setHeight(res.data.height)
            setGoal(res.data.goal)
        })
    }, [])

    // customer info
    const [age, setAge] = useState(0)
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [goal, setGoal] = useState('')
    
    // UI state
    const [buttonState, setButtonState] = useState(false)
    const [alert, setAlert] = useState(false)
    const navigate = useNavigate()

    const updateFirstName = (event) => {
        setFirstName(event.target.value)
    }

    const updateLastName = (event) => {
        setLastName(event.target.value)
    }

    const updateImg = (event) => {
        setImg(event.target.value)
    }

    const updateAge = (event) => {
        setAge(event.target.value)
    }

    const updateWeight = (event) => {
        setWeight(event.target.value)
    }

    const updateHeight = (event) => {
        setHeight(event.target.value)
    }

    const updateGoal = (event) => {
        setGoal(event.target.value)
    }

    const handleSubmit = (event) => {
        let customer = {id:authContext.id, firstName: firstName, lastName: lastName, goal:goal, role:authContext.role, img:img, age:age, weight:weight, height:height}
        updateCustomerService(customer).then(res => {
            setAlert(true)
            setTimeout(() => {
                navigate('/customer/details')
            },1500)
        })
    }

    return(
        <Container>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type='text' placeholder='Enter your first name' value={firstName} onChange={updateFirstName} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type='text' placeholder='Enter your last name' value={lastName} onChange={updateLastName} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Age</Form.Label>
                        <Form.Control type='number' value={age} onChange={updateAge} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Weight</Form.Label>
                        <Form.Control type='number' value={weight} onChange={updateWeight} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Height</Form.Label>
                        <Form.Control type='number' value={height} onChange={updateHeight} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
            <Form.Group>
                <Form.Label>Goal</Form.Label>
                <Form.Control as='textarea' size='lg' value={goal} onChange={updateGoal} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Image URL</Form.Label>
                <Form.Control type='text' placeholder={img} value={img} onChange={updateImg} />
            </Form.Group>
            </Row>
            <Row className='text-center mt-1'>
                <Form.Group className='mx-3' controlId='submit'>
                    <button type='submit' className='btn btn-sm btn-dark text-info px-3' onClick={handleSubmit} disabled={buttonState} >Save</button>
                </Form.Group>
            </Row>
            <Row>{alert ? <span className="text-center text-success">Saving your information... ...</span> : ''}</Row>
        </Container>
    )
}