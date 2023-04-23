import React, { useEffect, useState } from 'react'
import { Form, Button, Container, Col, Row } from 'react-bootstrap'
import { customerSignUpService, signUpService, trainerSignUpService } from './api/ApiService'
import { useNavigate } from 'react-router-dom'

export default function SignupComponent() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [tempPassword, setTempassword] = useState('')
    const [role, setRole] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [img, setImg] = useState('https://www.nicepng.com/png/detail/14-148358_lovely-penguin-clip-art-is-penguin-profile.png')

    // trainer info
    const [bio, setBio] = useState('')
    const [motto, setMotto] = useState('')
    const [background, setBackground] = useState('')
    const [years, setYears] = useState(0)
    const [location, setLocation] = useState('New York')
    const [price, setPrice] = useState(0)

    // customer info
    const [age, setAge] = useState(0)
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [goal, setGoal] = useState('')

    // UI state
    const [buttonState, setButtonState] = useState(false)
    const [alert, setAlert] = useState(false)
    const [usernameAlert, setUsernameAlert] = useState(false)
    const [registrationState, setRegistrationState] = useState(false)
    const [usernameReq, setUsernameReq] = useState(false)

    const navigate = useNavigate()

    const updateButtonState = () => {
        (role !== '' && !alert && username !== '' && password !== '' && firstName !== '' && lastName !== '') ?  setButtonState(false) : setButtonState(true)
    }

    useEffect(() => {
        updateButtonState()
    },[role, alert, username, password, firstName, lastName])

    const updateUsername = (event) => {
        setUsername(event.target.value)
        setUsernameAlert(false)
        setUsernameReq(false)
    }

    const updateTempPassword = (event) => {
        setTempassword(event.target.value)
    }

    const updatePassword = (event) => {
        setPassword(event.target.value)
    }

    const setError = () => {
        password !== tempPassword ? setAlert(true) : setAlert(false)
    }

    useEffect(() => {
        setError()
    }, [password])

    const updateRole = (event) => {
        setRole(event.target.value)
    }

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
        event.preventDefault()
        let user = {username: username, password: password, role:role}
        if (username.length <= 3){
            setUsernameReq(true)
        } else{
            signUpService(user).then(res => {
                if (res.status === 200){
                    if (role === 'TRAINER'){
                        let trainer = {id:res.data['userId'], firstName: firstName, lastName: lastName, bio:bio, role:role, img:img, yearsOfExp:years, motto:motto, background:background, location:location, price:price, rating:0}
                        trainerSignUpService(trainer).then(res => {
                            setRegistrationState(true)
                            setTimeout(() => {
                                navigate('/login')
                            }, 3000);
                        }).catch(err => {
                            console.log('Fail to create trainer')
                        })
                    } else if (role === 'CUSTOMER'){
                        let customer = {id:res.data['userId'], firstName:firstName, lastName:lastName, age:age, goal:goal, weight:weight, height:height, img:img}
                        console.log(customer)
                        customerSignUpService(customer).then(res => {
                            navigate('/login')
                        }).catch(res => {
                            console.log('Fail to create customer')
                        })
                    }
                }
            }).catch(err => {
                console.log('Fail to create user')
                setUsernameAlert(true)
            })
        } 
    }

  return (
    <Container className='vh-100'>
        <Form className='fst-italic fw-bold'>
            <div>
                <Col className='col-sm-4 mx-auto'>
                    <Form.Group className='mb-2' controlId='username'>
                        <Form.Label>Username {usernameAlert ? <span className='text-danger fw-bolder'>Username has already been used, please use a different one.</span> :''} </Form.Label>
                        <Form.Label>{usernameReq ? <span className='text-danger fw-bolder'>Username needs to be longer than 3.</span> :''} </Form.Label>
                        <Form.Control type='username' placeholder='Enter username' value={username} onChange={updateUsername}/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='username'>
                        <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter password' value={tempPassword} onChange={updateTempPassword}/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='username'>
                        <Form.Label>Confirm Password {alert ? <span className='text-danger fw-bolder'> Passwords do not match! </span> : ''}</Form.Label>
                        <Form.Control type='password' placeholder='Enter password' value={password} onChange={updatePassword}/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='username' onChange={updateRole}>
                        <Form.Label>Role</Form.Label>
                        <Form.Check type='radio' name='role' label='Trainer' value='TRAINER' />
                        <Form.Check type='radio' name='role' label='Customer' value='CUSTOMER' />
                    </Form.Group>
                </Col>
                <Col>
                    {role === 'TRAINER'? 
                        <div>
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
                        </div>
                    : role === 'CUSTOMER' ?
                        <div>
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
                            <Form.Group>
                                <Form.Label>Goal</Form.Label>
                                <Form.Control as='textarea' size='lg' value={goal} onChange={updateGoal} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control type='text' placeholder={img} value={img} onChange={updateImg} />
                            </Form.Group>
                        </div>
                    :
                        ''
                    }
                </Col>
            </div>
            <Row className='text-center my-5'>
                <Form.Group className='mx-3' controlId='submit'>
                    <Button type='submit' className='btn btn-sm btn-dark text-info px-3' onClick={handleSubmit} disabled={buttonState} >Sign Up</Button>
                </Form.Group>
            </Row>
            <Row className='text-center'>
                {registrationState ? <span className='text-success fw-bolder fst-3'>Registration successful, redirecting to home...</span> : ''}
            </Row>
        </Form>
    </Container>
  )
}
