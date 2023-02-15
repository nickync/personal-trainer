import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import NavBarComponent from './component/NavBarComponent';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import TrainerComponent from './component/TrainerComponent';

function App() {
  return (
    <Router>
      <NavBarComponent/>
      <Routes>
        <Route path='/' element = {<Home /> } />
        <Route path='/trainers' element = {<TrainerComponent /> } />
      </Routes>
    </Router>
  );
}

export default App;
