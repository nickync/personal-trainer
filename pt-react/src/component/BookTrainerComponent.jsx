import React from "react";
import { useAuth } from "./AuthContext";
import { bookTrainerService } from "./api/ApiService";
import { useNavigate } from "react-router-dom";

export default function BookTrainerComponent({ trainerid }) {
    const authContext = useAuth()
    const customerId = authContext.id ? authContext.id : null;
    const navigate = useNavigate()

    const handleBookTrainer = () => {

        if (customerId !== null){
            bookTrainerService(trainerid, customerId).then(res => {
                if (res.status === 200){
                    navigate('/customer/details')
                } else {
                    navigate('/error')
                }
            }).catch( err => {
                navigate('/error')
            })
        } else {
            navigate('/login')
        }
    }

    return (
        <div>
            <button className="btn btn-dark btn-sm border-3" onClick={ handleBookTrainer } >Book this trainer</button>
        </div>
    )
}