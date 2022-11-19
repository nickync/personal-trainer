import './App.css';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router history={History}>
        <Header />
        <div className='container'>
          <Routes>
          
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
