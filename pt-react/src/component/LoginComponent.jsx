import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default function LoginComponent() {
    
  return (
    <div className='container-sm text-center'>
        <div className='row'>
            <div className='col-sm-3'></div>
            <div className='col-sm-6 text-gray fw-bolder fs-2'>Welcome back!</div>
            <div className='col-sm-3'></div>
        </div>
        <div className='row'>
            <div className='col-sm-3'></div>
            <div className='col-sm-6'>
                <Form>
                    <Form.Group className='mb-3' controlId='username'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type='username' placeholder='Enter username'/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter password'/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='submit'>
                        <Button type='submit' className='btn btn-dark text-info'>Sign In</Button>
                    </Form.Group>
                </Form>   
            </div>
            <div className='col-sm-3'></div>       
        </div>
    </div>
  )
}
