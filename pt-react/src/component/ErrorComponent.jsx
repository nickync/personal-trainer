import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function ErrorComponent(){

    const navigate = useNavigate()

    const homePage = () => {
        navigate('/')
    }

    return (
        <Container className="text-center">
            <Row className="mt-5">
                <Col className="fs-3 my-5">This page is no longer available. Try searching for what you’re looking for or explore the bottom of the page.</Col>
            </Row>
            <Row>
                <Col></Col>
                <Col><button className="btn btn-sm btn-dark" onClick={homePage}>Home</button></Col>
                <Col></Col>
            </Row>
        </Container>
    )
}