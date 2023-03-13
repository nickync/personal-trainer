import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { bookTrainerService, getCustomerService } from "./api/ApiService";
import { useNavigate } from "react-router-dom";

export default function BookTrainerComponent({ trainerid }) {
    const authContext = useAuth()
    const customerId = authContext.id ? authContext.id : null;
    const navigate = useNavigate()
    const [disableBook, setDisableBook] = useState(false)
    
    useEffect(() => {
        console.log(customerId)
        if (customerId){
            getCustomerService(customerId).then(res => {
                console.log(res.data)
                console.log(res.data.trainerId)
                if (res.data.trainerId !== -1){
                    setDisableBook(true)
                }
            }).catch(err => {
                setDisableBook(true)
                console.log('trainers cannot book other trainer')
            })
        }
    },[])

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
            {disableBook ? 
                <button className="btn btn-dark btn-sm border-3 disabled" onClick={ handleBookTrainer } >Book this trainer</button>
            :
                <button className="btn btn-dark btn-sm border-3" onClick={ handleBookTrainer } >Book this trainer</button>}
        </div>
    )
}