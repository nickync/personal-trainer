import React, { useState } from 'react'
import { Form, Button, Container, Col, Row } from 'react-bootstrap'
import { signUpService } from './api/ApiService'

export default function SignupComponent() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [tempPassword, setTempassword] = useState('')
    const [role, setRole] = useState('')
    const [bio, setBio] = useState('')
    const [motto, setMotto] = useState('')
    const [background, setBackground] = useState('')
    const [years, setYears] = useState(-1)

    const [img, setImg] = useState('https://www.nicepng.com/png/detail/14-148358_lovely-penguin-clip-art-is-penguin-profile.png')

    const updateUsername = (event) => {
        setUsername(event.target.value)
    }

    const updateTempPassword = (event) => {
        setTempassword(event.target.value)
    }

    const updatePassword = (event) => {
        setPassword(event.target.value)
    }

    const updateRole = (event) => {
        setRole(event.target.value)
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
        console.log(years)
        setYears(event.target.value)
    }

    const updateImg = (event) => {
        setImg(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(username, password, role)
        if (password === tempPassword){
            let user = {username: username, password: password, role:role}
            signUpService(user)
        }
    }

  return (
    <Container>
        <Form>
            <Row>
                <Col className='col-sm-4 me-5'>
                    <Form.Group className='mb-3' controlId='username'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type='username' placeholder='Enter username' value={username} onChange={updateUsername}/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='username'>
                        <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter password' value={tempPassword} onChange={updateTempPassword}/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='username'>
                        <Form.Label>Password</Form.Label>
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
                            <Form.Group>
                                <Form.Label>Years in industry</Form.Label>
                                <Form.Control type='number' size='sm' value={years} onChange={updateYears} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Location</Form.Label>
                                <Form.Select>
                                    <option>New York</option>
                                    <option>Florida</option>
                                    <option>Connecticut</option>
                                </Form.Select>
                            </Form.Group>
                            </Row>
                            <Form.Group>
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control type='text' placeholder={img} value={img} onChange={updateImg} />
                            </Form.Group>
                        </div>
                    : role === 'CUSTOMER' ?
                        <div>
                            <Form.Label>Weight</Form.Label>
                        </div>
                    :
                        ''
                    }
                </Col>
            </Row>
            <Row className='text-center'>
                <Form.Group className='mx-3' controlId='submit'>
                    <Button type='submit' className='btn btn-sm btn-dark text-info px-3' onClick={handleSubmit}>Sign Up</Button>
                </Form.Group>
            </Row>
        </Form>
    </Container>
  )
}
