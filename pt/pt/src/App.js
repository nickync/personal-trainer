import './App.css';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './component/Home';
import TrainerDetails from './component/TrainerDetails';
import TrainerList from './component/TrainerList';
import { useState } from 'react';
import TrainerProfile from './component/TrainerProfile';
import Login from './component/Login';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeLogin = (event) => {
    event.preventDefault()
    isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true)
  }

  return (
    <div>
      <button onClick={changeLogin}>click</button>
      <Router history={History}>
        <Header login={isLoggedIn}/>
        <div className='container'>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/trainers' element={<TrainerList />} />
            <Route path='/details/:username' element={<TrainerDetails />} />
            <Route path='/profile' element={<TrainerProfile />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
