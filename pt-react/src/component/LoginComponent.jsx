import React, { useState } from 'react'
import { Button, Form, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { getRoleService } from './api/ApiService'
import { useAuth } from './AuthContext'

export default function LoginComponent() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState(false)
    const [alertPassword, setAlertPassword] = useState(false)
    const navigate = useNavigate()
    const authContext = useAuth()

    const updateUsername = (event) => {
        setAlert(false)
        setAlertPassword(false)
        setUsername(event.target.value)
    }

    const updatePassword = (event) => {
        setAlert(false)
        setAlertPassword(false)
        setPassword(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (username == '' || password == ''){
            setAlert(true)
        }
        
        if (await authContext.login(username, password)){
            let role = null
            await getRoleService(username).then(res => {
                role = res.data
            }).catch(err => {
                console.log(err)
            })
            role === 'TRAINER' ? navigate('/trainer/details') : navigate('/customer/details')
        } else {
            setAlertPassword(true)
        }
    }

    const handleSignUp = () => {
        navigate('/sign-up')
    }

    const demoTrainerLogin = async () => {
        if (authContext.login('trainer', 1)){
            let role = null
            await getRoleService(username).then(res => {
                role = res.data
            }).catch(err => {
                console.log(err)
            })
            role === 'TRAINER' ? navigate('/trainer/details') : navigate('/customer/details')
        }
    }

    const demoCustomerLogin = async () => {
        if (authContext.login('customer', 1)){
            let role = null
            await getRoleService(username).then(res => {
                role = res.data
            }).catch(err => {
                console.log(err)
            })
            role === 'TRAINER' ? navigate('/trainer/details') : navigate('/customer/details')
        }
    }

  return (
    <div className='container-fluid text-center'>
        <div className='row text-center'>
            <div className='text-gray fw-bolder fs-4'>Welcome back!</div>
        </div>
        <div className='row text-center'>
            <div className='col-sm-4'>
                <button className='btn btn-sm btn-dark me-3' onClick={demoTrainerLogin}>Demo Trainer</button>
                <button className='btn btn-sm btn-dark' onClick={demoCustomerLogin}>Demo Customer</button>
            </div>
            <div className='col-sm-4'>
                {alert ? <div className='text-danger fw-bold'>Please enter your username and password.</div> : " "}
                {alertPassword ? <div className='text-danger fw-bold'>Your username and password does not match.</div> : " "}
                <Form>
                    <Form.Group className='mb-3' controlId='username'>
                        <Form.Label className='fs-6 fw-bold'>Username</Form.Label>
                        <Form.Control type='username' placeholder='Enter username' value={username} onChange={updateUsername}/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='password'>
                        <Form.Label className='fs-6 fw-bold'>Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter password' value={password} onChange={updatePassword}/>
                    </Form.Group>
                    <div className='d-flex justify-content-center'>
                        <Form.Group className='mx-3' controlId='submit'>
                            <Button type='submit' className='btn btn-sm btn-dark text-info px-3' onClick={handleSubmit}>Sign In</Button>
                        </Form.Group>
                        <div>|</div>
                        <Form.Group className='mx-3' controlId='submit'>
                            <Button type='submit' className='btn btn-sm btn-secondary text-info px-2' onClick={handleSignUp}>New User</Button>
                        </Form.Group>
                    </div>
                    <Form.Group className='mt-3 ' controlId='reset'>
                        <Nav.Link className='text-underline'><u>Forgot your password?</u></Nav.Link>
                    </Form.Group>
                </Form>   
            </div>
            <div className='col-sm-4'></div>   
        </div>
    </div>
  )
}
