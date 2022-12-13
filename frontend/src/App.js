import { useEffect } from 'react'
import  Navbar  from './components/layout/navbar/navbar';
import  Landing  from './components/pages/Landing/Landing';
import  LogIn  from './components/pages/LogIn/LogIn';
import  SignUp  from './components/pages/SignUp/SignUp';
import  Feed  from './components/pages/Feed/Feed';
import Profile from './components/pages/Profile/[id]';
import Notify from './components/notify/Notify'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { refreshToken } from './redux/actions/authAction';

import PrivateRoutes from './components/routing/PrivateRoutes';

import './App.css';

function App() {
  const { auth } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshToken())
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Notify/>
        <div className='content'>
          <Routes>
            <Route exact path='/' element={auth.token ? <Feed/> : <Landing/>} />
            <Route exact path='/signUp' element={auth.token ? <Feed/> : <SignUp />} />
            <Route exact path='/logIn' element={auth.token ? <Feed/> : <LogIn />} />
            <Route exact path='/profile:id' element={auth.token ? <Profile /> : <Landing />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;