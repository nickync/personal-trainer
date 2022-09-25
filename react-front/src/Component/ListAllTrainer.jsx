import React, { Component } from 'react'
import TrainerService from '../services/TrainerService'
import Card from 'react-bootstrap/Card'
import TrainerCard from './TrainerCard'
import GenerateAllCards from './GenerateAllCards'

export default class ListAllTrainer extends Component {

    constructor(props){
        super(props)

        this.state = {
            trainers:[]
        }   
    }

    componentDidMount(){
        TrainerService.getAllTrainer().then(res => {
            this.setState({trainers:res.data})
        })
    }
   
  render() {
    
    return (
            <GenerateAllCards trainers = {this.state.trainers}/>
    )
  }
}
