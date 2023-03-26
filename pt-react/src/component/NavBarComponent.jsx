import React from 'react'
import { Nav } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import MessageNavbarComponent from './MessageNavbarComponent'
import { useState } from 'react'

export default function NavBarComponent() {
    // get url

    const authContext = useAuth()

    const location = useLocation()

    const navigate = useNavigate()

    const hideNavbar = () => {
        let elem = document.getElementById('navbarNavAltMarkup')
        if (elem.classList.contains('show')){
            elem.classList.remove('show')
        }
    }

    const homePage = () => {
        hideNavbar()
        navigate('/')
    }

    const trainersPage = () => {
        hideNavbar()
        navigate('/trainers')
    }

    const loginPage = () => {
        hideNavbar()
        navigate('/login')
    }

    const trainerPage = () => {
        hideNavbar()
        navigate('/trainer/details')
    }

    const customerPage = () => {
        hideNavbar()
        navigate('/customer/details')
    }

    const logout = () => {
        authContext.logout()
        navigate('/')
    }

    const manageClientPage = () => {
        hideNavbar()
        navigate('/trainers/manageclient')
    }

    const trainingPlanPage = () => {
        hideNavbar()
        navigate('/customers/trainingplan')
    }

    const messagingPage = () => {
        hideNavbar()
        if(authContext.role === 'TRAINER'){
            navigate('/messaging')
        } else if (authContext.role === 'CUSTOMER'){
            navigate('/customerMessaging')
        }

    }
    
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark bg-gradient">
            <div className="container-fluid">
                <Nav.Link onClick={homePage} className="navbar-brand fst-italic text-info text-badge fw-bolder text-center" >Personal Trainer</Nav.Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav" >
                        <Nav.Link onClick={homePage} className={location.pathname === '/' ? 'nav-link active fw-bolder text-info' : 'nav-link'}>Home</Nav.Link>
                        <Nav.Link onClick={trainersPage} className={location.pathname === '/trainers' ? 'nav-link active fw-bolder text-info' : 'nav-link'} >Our Trainers</Nav.Link>
                        
                        {authContext.role === null ? 
                            <Nav.Link onClick={loginPage} className={location.pathname === '/login' ? 'nav-link active fw-bolder text-info' : 'nav-link'} >Login</Nav.Link> 
                        : authContext.role === 'TRAINER' ?
                            <Nav.Link onClick={trainerPage} className={location.pathname === '/trainer/details' ? 'nav-link active fw-bolder text-info' : 'nav-link'} >Profile</Nav.Link>
                        :
                            <Nav.Link onClick={customerPage} className={location.pathname === '/customer/details' ? 'nav-link active fw-bolder text-info' : 'nav-link'} >Profile</Nav.Link>
                        }
                        {authContext.role === 'TRAINER' ?
                            <Nav.Link onClick={manageClientPage} className={location.pathname === '/trainers/manageclient' ? 'nav-link active fw-bolder text-info' : 'nav-link'}>Manage Client</Nav.Link>
                        : authContext.role === 'CUSTOMER' ? 
                        <Nav.Link onClick={trainingPlanPage} className={location.pathname === '/customers/trainingplan' ? 'nav-link active fw-bolder text-info' : 'nav-link'}>Training Plan</Nav.Link>
                        : ''
                        }

                        {authContext.role ?
                            <Nav.Link className={location.pathname === '/messaging' ? 'nav-link active fw-bolder text-info' : 'nav-link'}><MessageNavbarComponent messagingPage={messagingPage} /></Nav.Link>
                        : ''
                        }
                    </div>
                </div>
                {authContext.isAuthenticated ? <button className='btn btn-warning' onClick={logout}>Log out</button> : ''}
            </div>
        </nav>
  )
}
