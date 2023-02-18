import React from 'react'
import { useLocation } from 'react-router-dom'

export default function NavBarComponent() {
    // get url
    const location = useLocation()


    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark bg-gradient">
            <div className="container-fluid">
                <a className="navbar-brand fst-italic text-info text-badge fw-bolder text-center" href="/">Personal Trainer</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className={location.pathname == '/' ? 'nav-link active fw-bolder text-info' : 'nav-link'} aria-current='page' href="/">Home</a>
                        <a className={location.pathname == '/trainers' ? 'nav-link active fw-bolder text-info' : 'nav-link'} href="/trainers">Our Trainers</a>
                        <a className={location.pathname == '/login' ? 'nav-link active fw-bolder text-info' : 'nav-link'} href="/login">Login</a>
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </div>
                </div>
            </div>
        </nav>
  )
}
