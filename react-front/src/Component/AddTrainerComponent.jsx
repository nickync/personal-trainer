import React, { Component } from 'react'
import TrainerService from '../services/TrainerService'
import withRouter from './withRouter'

class AddTrainerComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName:'',
      age:'',
      years:'',
      image:null,
      added: null,
      hide:'d-none',
      file:null
    }
    this.firstNameHandler = this.firstNameHandler.bind(this)
    this.lastNameHandler = this.lastNameHandler.bind(this)
    this.yearsHandler = this.yearsHandler.bind(this)
    this.ageHandler = this.ageHandler.bind(this)
    this.imageHandler = this.imageHandler.bind(this)
  }

  firstNameHandler = (event) => {
    this.setState({firstName: event.target.value})
  }

  lastNameHandler = (event) => {
    this.setState({lastName: event.target.value})
  }

  ageHandler = (event) => {
    this.setState({age: event.target.value})
  }

  yearsHandler = (event) => {
    this.setState({years: event.target.value})
  }

  imageHandler = (event) => {
    // this.setState({image: event.target.value})
    if (event.target.files && event.target.files[0]){
      let img = event.target.files[0];
      console.log(img)
      this.setState({
        image: URL.createObjectURL(img),
        file: img
      })
    }
  
  }

  saveTrainer = (event) => {
    event.preventDefault();
    if (this.state.firstName.length === 0) {alert("Invalid First Name.")}
    
    const formData = new FormData();

    let trainer = {firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, 
                    years: this.state.years, image: this.state.image}
  
    formData.append("file", this.state.file);
    formData.append("trainer", JSON.stringify(trainer))

    TrainerService.addTrainer(formData).then((res, rej) => {
      if (res.status === 200){
        const {navigate} = this.props
        navigate('/add')
        this.setState({
          firstName: '',
          lastName:'',
          age:'',
          years:'',
          imageUrl:'',
          added: true,
          hide: '',
          file:null
        })
      } else {
        const {navigate} = this.props
        navigate('/add')
        this.setState({
          firstName: '',
          lastName:'',
          age:'',
          years:'',
          imageUrl:'',
          added: true,
          hide: ''
        })
      } 
    }
    ).catch(err => {
        alert("Invalid input")
    })
  }

  render() {
    return (
      <div className='container-fluid' style={{width:50+"%"}}>
        
        <form className='col-sm-5 mx-auto' onSubmit={this.saveTrainer}>
        
          <div className='form-group'>
            <label>First name</label>
              <input className='form-control' value={this.state.firstName} onChange={this.firstNameHandler} />
          </div>
          <div>
            <label>Last name</label>
            <input className='form-control' value={this.state.lastName} onChange={this.lastNameHandler} />
          </div>

          <div>
            <label>Age</label>
            <input className='form-control'value={this.state.age} onChange={this.ageHandler} />
          </div>

          <div>
            <label>Years of experience</label>
            <input className='form-control' value={this.state.years} onChange={this.yearsHandler} />
          </div>

          <div>
            <label>Photo</label>
            <input type="file" accept="image/png, image/jpeg" className='form-control' onChange={this.imageHandler} required/>
          </div>

          <button onClick={this.saveTrainer}>Submit</button>

          <div className={`mx-auto pt-5 ${this.state.hide}`}>
            {this.state.added ? <p className='text-warning text-center'>Trainer is added.</p> : <div className='text-danger text-center'>Trainer is not added!!!</div>}
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(AddTrainerComponent);
