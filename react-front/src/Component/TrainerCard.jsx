import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

export default class TrainerCard extends Component {

  render() {
    const profile = this.props;

    return (
        <div className='mx-auto d-inline-flex'>
            <Card style={{width: '12rem'}} className='mx-auto mt-5 ms-3 bg-light'>
                <Card.Img variant='top' src={profile.imageUrl}/>
                <Card.Body className='text-center bg-warning'>
                    <Card.Title>{profile.firstName} {profile.lastName}</Card.Title>
                    <Card.Header>Age: {profile.age}</Card.Header>
                    <Card.Header>Years Exp: {profile.years}</Card.Header>
                </Card.Body>
            </Card>
        </div>
    )
  }
}
