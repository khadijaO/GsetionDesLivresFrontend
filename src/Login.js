import React from 'react'
import './Login.css';
import PropTypes from 'prop-types';
import  { useState, useEffect } from 'react'
import axios from "axios"


export default function Login({setToken ,setUser}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async e => {
        e.preventDefault();
       
        axios.post('http://localhost:8080/api/auth/signin', {
            name: username,
            password: password
          })
          .then(function (response) {
            console.log(response);
            console.log("----------------"+response.data.accessToken)
            localStorage.setItem('token', JSON.stringify(response.data.accessToken));

          })
          .catch(function (error) {
            console.log(error);
          });
      }
    
   


    return(
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)}/>
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)}/>
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
  
  Login.propTypes = {
    setToken: PropTypes.func.isRequired,
  };