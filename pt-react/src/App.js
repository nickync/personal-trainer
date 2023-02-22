import './App.css';
import Home from './component/Home';
import NavBarComponent from './component/NavBarComponent';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import TrainerComponent from './component/TrainerComponent';
import LoginComponent from './component/LoginComponent';
import AuthProvider from './component/AuthContext';
import SignupComponent from './component/SignupComponent';
import CustomerDetails from './component/CustomerDetails';
import TrainerDetails from './component/TrainerDetails';
import { Navigate } from 'react-router-dom';
import { useAuth } from './component/AuthContext';
import TrainerInformation from './component/TrainerInfomation';

function AuthenticatedRoute({ children }){
  const authContext = useAuth()
  
  if (authContext.isAuthenticated){
      return children
  }
  return <Navigate to='/' />
}


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
          <Route path='/trainer/information/:id' element= {<TrainerInformation />} /> 
          <Route path='/customer/details' element = {
            <AuthenticatedRoute>
              {<CustomerDetails />}
            </AuthenticatedRoute>
          } />
          <Route path='/trainer/details' element = {
            <AuthenticatedRoute>
              {<TrainerDetails />}
            </AuthenticatedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
