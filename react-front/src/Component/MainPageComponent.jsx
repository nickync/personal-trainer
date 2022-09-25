import axios from 'axios';
import React, { Component } from 'react'
import { InputGroup } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import TrainerService from '../services/TrainerService';
import GenerateAllCards from './GenerateAllCards';

export default class MainPageComponent extends Component {
    state = {
        name:'',
    };

    handleSubmit = async(e) => {
        e.preventDefault();
        let res = null;
        try {
            res = await TrainerService.searchByName(this.state.name)
            this.props.onSubmit(res.data);
            this.setState({name:''});
        } catch (err){
            console.log('error')
        }
    }

  render() {
    return (
        <div className='text-center mt-2'>
        <form onSubmit={this.handleSubmit}>
          <InputGroup className='mx-auto w-75'>
            <Form.Control type='text'
              placeholder = "Enter trainer name" value={this.state.name} onChange={ e => this.setState({name: e.target.value})} required
            />
            <button className='btn btn-dark bg-gradient'>Search</button>
          </InputGroup>
        </form>
      </div>
    )
  }
}
