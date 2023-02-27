import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { getTrainerService, updateTrainerService } from "./api/ApiService";

export default function EditTrainerComponent() {
    const authContext = useAuth()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [img, setImg] = useState('https://www.nicepng.com/png/detail/14-148358_lovely-penguin-clip-art-is-penguin-profile.png')

    useEffect(() => {
        getTrainerService(authContext.id).then(res => {
            setFirstName(res.data.firstName)
            setLastName(res.data.lastName)
            setImg(res.data.img)
            setBio(res.data.bio)
            setMotto(res.data.motto)
            setBackground(res.data.background)
            setYears(res.data.yearsOfExp)
            setPrice(res.data.price)
            setLocation(res.data.location)
        })
    }, [authContext.id])

    // trainer info
    const [bio, setBio] = useState('')
    const [motto, setMotto] = useState('')
    const [background, setBackground] = useState('')
    const [years, setYears] = useState(0)
    const [location, setLocation] = useState('')
    const [price, setPrice] = useState(0)
    
    // UI state
    const [alert, setAlert] = useState(false)
    const navigate = useNavigate()

    const updateFirstName = (event) => {
        setFirstName(event.target.value)
    }

    const updateLastName = (event) => {
        setLastName(event.target.value)
    }

    const updateBio = (event) => {
        setBio(event.target.value)
    }

    const updateMotto = (event) => {
        setMotto(event.target.value)
    }

    const updateBackground = (event) => {
        setBackground(event.target.value)
    }

    const updateYears = (event) => {
        setYears(event.target.value)
    }

    const updateLocation = (event) => {
        setLocation(event.target.value)
    }

    const updatePrice = (event) => {
        setPrice(event.target.value)
    }

    const updateImg = (event) => {
        setImg(event.target.value)
    }

    const handleSubmit = (event) => {
        let trainer = {id:authContext.id, firstName: firstName, lastName: lastName, bio:bio, role:authContext.role, img:img, yearsOfExp:years, motto:motto, background:background, location:location, price:price, rating:0}
        updateTrainerService(trainer).then(res => {
            setAlert(true)
            setTimeout(() => {
                navigate('/trainer/details')
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
            <Form.Group>
                <Form.Label>Bio</Form.Label>
                <Form.Control type='text' placeholder='Enter your bio' value={bio} onChange={updateBio} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Motto</Form.Label>
                <Form.Control type='text' placeholder='Enter your motto' value={motto} onChange={updateMotto} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Background</Form.Label>
                <Form.Control as='textarea' size='lg' placeholder='Enter your background' value={background} onChange={updateBackground} />
            </Form.Group>
            <Row>
                <Col className='col-sm-4 me-2'>
                    <Form.Group>
                        <Form.Label>Years in industry</Form.Label>
                        <Form.Control type='number' size='sm' value={years} onChange={updateYears} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Location</Form.Label>
                        <Form.Select value={location} onChange={updateLocation}>
                            <option>New York</option>
                            <option>Florida</option>
                            <option>Connecticut</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col className='col-sm-4 me-2'>
                    <Form.Group>
                        <Form.Label>Pricing</Form.Label>
                        <Form.Control type='number' size='sm' value={price} onChange={updatePrice} />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group>
                <Form.Label>Image URL</Form.Label>
                <Form.Control type='text' placeholder={img} value={img} onChange={updateImg} />
            </Form.Group>
            <Row className='text-center mt-1'>
                <Form.Group className='mx-3' controlId='submit'>
                    <button type='submit' className='btn btn-sm btn-dark text-info px-3' onClick={handleSubmit} >Save</button>
                </Form.Group>
            </Row>
            <Row>{alert ? <span className="text-center text-success">Saving your information... ...</span> : ''}</Row>
        </Container>
    )
}