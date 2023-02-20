import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import NavBarComponent from './component/NavBarComponent';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import TrainerComponent from './component/TrainerComponent';
import LoginComponent from './component/LoginComponent';
import AuthProvider from './component/AuthContext';
import SignupComponent from './component/SignupComponent';



function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBarComponent/>
        <Routes>
          <Route path='/' element = {<Home /> } />
          <Route path='/trainers' element = {<TrainerComponent /> } />
          <Route path='/login' element = {<LoginComponent />} />
          <Route path='/sign-up' element = {<SignupComponent />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
