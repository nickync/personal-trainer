import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import NavBarComponent from './component/NavBarComponent';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import TrainerComponent from './component/TrainerComponent';
import LoginComponent from './component/LoginComponent';

function App() {
  return (
    <Router>
      <NavBarComponent/>
      <Routes>
        <Route path='/' element = {<Home /> } />
        <Route path='/trainers' element = {<TrainerComponent /> } />
        <Route path='/login' element = {<LoginComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
