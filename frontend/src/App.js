import  Navbar  from './components/layout/Navbar/Navbar';
import  Landing  from './components/pages/Landing/Landing';
import  LogIn  from './components/pages/LogIn/LogIn';
import  SignUp  from './components/pages/SignUp/SignUp';
import  Feed  from './components/pages/Feed/Feed';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PrivateRoutes from './components/routing/PrivateRoutes';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route exact path='/logIn' element={<LogIn />} />
            <Route exact path='/signUp' element={<SignUp />} />
            <Route exact path='/feed' element={<Feed />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
