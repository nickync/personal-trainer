import './App.css';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './component/Home';
import TrainerDetails from './component/TrainerDetails';
import TrainerList from './component/TrainerList';

function App() {

  return (
    <div>
      <Router history={History}>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/trainers' element={<TrainerList />} />
            <Route path="/details/:username" element={<TrainerDetails />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
