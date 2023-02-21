import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { signUpService } from './api/ApiService'

export default function SignupComponent() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [tempPassword, setTempassword] = useState('')
    const [role, setRole] = useState('')

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

    const handleSubmit = () => {
        if (password === tempPassword){
            let user = {username: username, password: password, role:role}
            signUpService(user)
        }
    }

  return (
    <div>
        <Form>
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
                <Form.Check type='radio' name='role' label='Trainer' value='trainer' />
                <Form.Check type='radio' name='role' label='Customer' value='customer' />
            </Form.Group>
            <Form.Group className='mx-3' controlId='submit'>
                <Button type='submit' className='btn btn-sm btn-dark text-info px-3' onClick={handleSubmit}>Sign Up</Button>
            </Form.Group>
        </Form>
    </div>
  )
}
