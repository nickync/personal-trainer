import { upload } from '@testing-library/user-event/dist/upload'
import React, { Component } from 'react'

export default class AddTrainerComponent extends Component {
  render() {
    return (
      <div className='container'>
        <form>
            <label>First name</label>
            <input></input>
            <label>Last name</label>
            <input></input>
            <label>Age</label>
            <input></input>
            <label>Years of experience</label>
            <input></input>
            <label>Photo</label>
            <input type="file" accept="image/png, image/jpeg"></input>
        </form>
      </div>
    )
  }
}
