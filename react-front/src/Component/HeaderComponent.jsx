import React, { Component } from 'react'

export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header>
            <nav className='navbar navbar-nav bg-dark bg-gradient flex-row justify-content-space-between'>
                <div className='navbar-nav flex-row align-items-space-between'>
                    <img src='logo192.png' alt='logo' width={30} className='px-1'/>
                    <a className='nav-brand text-info text-decoration-none bg-dark bg-gradient px-2' href='/'>Personal Trainer App</a>                   
                </div>

                <div className="navbar-nav flex-row justify-content-space-between">
                    <a className="nav-item nav-link active text-info px-2" href="/">Home</a>
                    <a className="nav-item nav-link text-info px-2" href="/all">All Trainers</a>
                    <a className="nav-item nav-link text-info px-2" href="#">Pricing</a>
                    <a className="nav-item nav-link text-info  px-2 disabled" href="#">Disabled</a>
                </div>
            </nav>
        </header>
      </div>
    )
  }
}
