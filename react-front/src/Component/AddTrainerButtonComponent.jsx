import React, { useContext } from 'react'
import UserLogin from './UserLogins'



export default function AddTrainerButtonComponent() {
    const isAdmin = useContext(UserLogin)

    return (
        <div>
            {isAdmin ? <a className="nav-item nav-link text-info  px-2" href="/add">Add trainer</a> : <div></div>}
        </div>
    )
}
