import './App.css';
import HeaderComponent from './Component/HeaderComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListAllTrainer from './Component/ListAllTrainer';
import FooterComponent from './Component/FooterComponent';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import MainPageComponent from './Component/MainPageComponent';
import { Component } from 'react';
import GenerateAllCards from './Component/GenerateAllCards';
import UserLogin from './Component/UserLogins';
import AddTrainerComponent from './Component/AddTrainerComponent';

class App extends Component {
  state = {
     trainers: [],
  }

  

  addTrainer = (trainer) => {
    if (trainer.length === 'undefined'){
      this.setState(prevState => ({
        trainers : [...prevState.trainers, trainer]
      }))
    } else {
      for (let i=0; i<trainer.length; i++){
        this.setState(prevState => ({
          trainers : [...prevState.trainers, trainer[i]]
        }))
      }
    }
  }
  

  render() {
    return (
      <div>
        <UserLogin.Provider value={true}>
          <Router>
            <HeaderComponent />
              <div className='container'>
              <Routes>
              
                <Route path = "all" element={<ListAllTrainer />} />   
                <Route path='/' element={[<MainPageComponent key={Math.random()} onSubmit={this.addTrainer}/>, 
                                          <GenerateAllCards key={Math.random()} trainers={this.state.trainers}/>]} /> 

                <Route path='/add' element={<AddTrainerComponent />} />
              </Routes>
              </div>
            <FooterComponent />
          </Router>
        </UserLogin.Provider>
      </div>
    );
  }
}

export default App;
