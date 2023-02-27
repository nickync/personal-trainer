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
import ErrorComponent from './component/ErrorComponent';
import ManageClientComponent from './component/ManageClientComponent';
import TrainingPlanComponent from './component/TrainingPlanComponent';
import MessagingComponent from './component/MessagingComponent';
import EditTrainerComponent from './component/EditTrainerComponent';
import EditCustomerComponent from './component/EditCustomerComponent';

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
          <Route path='/error' element = {<ErrorComponent />} />
          <Route path='/trainers/manageclient' element = {
            <AuthenticatedRoute>
              <ManageClientComponent />
            </AuthenticatedRoute>
          }/>
          
          <Route path='/customers/trainingplan' element = {
            <AuthenticatedRoute>
              <TrainingPlanComponent />
            </AuthenticatedRoute>
          } />

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

          <Route path='/messaging' element = {
            <AuthenticatedRoute>
              {<MessagingComponent />}
            </AuthenticatedRoute>
          } />

          <Route path='/trainer/edit' element = {
            <AuthenticatedRoute>
              {<EditTrainerComponent />}
            </AuthenticatedRoute>
          } />
          <Route path='/customer/edit' element = {
            <AuthenticatedRoute>
              {<EditCustomerComponent />}
            </AuthenticatedRoute>
          } />

          <Route path='*' element = {<ErrorComponent />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
