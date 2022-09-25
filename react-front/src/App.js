import './App.css';
import HeaderComponent from './Component/HeaderComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListAllTrainer from './Component/ListAllTrainer';
import FooterComponent from './Component/FooterComponent';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import MainPageComponent from './Component/MainPageComponent';
import { Component } from 'react';
import GenerateAllCards from './Component/GenerateAllCards';

class App extends Component {
  state = {
     trainers: [],
  }

  addTrainer = (trainer) => {
    this.setState(prevState => ({
      trainers : [...prevState.trainers, trainer]
    }))
    console.log(this.state.trainers.length)
  }
  

  render() {
    
    return (
      <div>
        <Router>
          <HeaderComponent />
            <div className='container'>
            <Routes>
            
              <Route path = "all" element={<ListAllTrainer />} />   
              <Route path='/' element={[<MainPageComponent onSubmit={this.addTrainer}/>, 
                                        <GenerateAllCards key={Math.random()} trainers={this.state.trainers}/>]} /> 
            </Routes>
            </div>
          <FooterComponent />
        </Router>
      </div>
    );
  }
}

export default App;
