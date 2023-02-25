import React, { useEffect, useState } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getAllTrainers } from "./api/ApiService";
import BookTrainerComponent from "./BookTrainerComponent";

export default function TrainerInformation(){
    const [trainers, setTrainers] = useState([])
    const {id} = useParams()
    
    useEffect(
        () => getTrainers, []
    )

    const getTrainers = () => {
        getAllTrainers().then(res => {
            setTrainers(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    const getStars = (rating) => {
        let stars = ""
        for (let i=0; i<rating; i++){
            stars += "\u2B50"
        }
        return stars
    }
    
    return(
        <Container>
            {trainers.filter(i => i.id === Number(id))
            .map(trainer =>
            <div key={id}>
                <Row>
                    <Col className="text-center fs-1 text-uppercase text-black-50 fw-bold fst-italic shadow my-2"> {trainer.firstName + " " +trainer.lastName} </Col>
                </Row>
                <Row className="my-5 d-flex align-items-center">
                    <Col><img className="card-img-top" height={'100%'} src={trainer.img} alt="profile"/></Col>
                    <Col className='text-center fs-4 fst-italic'>
                        <p><Badge bg='dark'>{trainer.bio}</Badge></p>
                        <p>${trainer.price?.toFixed(2)} per hour</p>
                        <p><span className="d-inline fw-bold fs-5">Motto:</span> {trainer.motto}</p>
                        <p><span className="d-inline fw-bold fs-5">Background:</span> {trainer.background}</p>
                        <p>Rating: {getStars(trainer.rating)}</p>
                        <p>{trainer.location}</p>
                        <BookTrainerComponent trainerid={trainer.id}/>
                        {/* <button className="btn btn-dark btn-sm border-3" onClick={() => handleBookTrainer(trainer.id, customerId)} >Book this trainer</button> */}
                    </Col>
                </Row>
                <Row>
  
                </Row>
            </div>
            )}
        </Container>
    )
}