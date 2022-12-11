import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from '../../../redux/actions/authAction'
import { useDispatch } from 'react-redux'

const LogIn = () => {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  const dispatch = useDispatch()

  const handleChangeInput = e => {
      const {name, value} = e.target
      setUserData({...userData, [name]:value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(userData)
    dispatch(login(userData)) 
  }

  return (

    <form onSubmit={handleSubmit}>
      <h3>UniTea</h3>

      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={handleChangeInput}
          value = {email}
          name = "email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={handleChangeInput}
          value={password}
          name = "password"
        />
      </div>
      <button type="submit" className="btn btn-dark" disabled={email && password ? false : true}>
        Login
      </button>

      <p className="my-2">
        Dont have an account? <Link to="/register">Register Now</Link>
      </p>
    </form>
  );
};


export default LogIn;
