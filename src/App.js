import logo from './logo192.png';
import './App.css';
import AllLivre from './allLivres'
import AllGenres from './AllGenres'
import Commandes from './Commandes'
import Livres from './components/livre.comp'
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './Login'
import Dashboared from './DashboaredAdmin'
import AddLivre from './components/livre.add.comp'
import DataLivre from './components/livre.data.comp'
import jwt from 'jwt-decode'
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import AllLivres from './allLivres';

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const userr = null;
  useEffect(() => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    var decoded = jwt_decode(userToken);

    setToken(decoded)
    // console.log(token)

  }, [])


  if (!token) {
    return <Login setToken={setToken} />
  }


  const logout = async e => {
    setToken(null)
  }

  // setUser(decoded)
  if (token.role[0] === "ROLE_ADMIN") {

    return (
      <div className="wrapper">
        <h1>My Books</h1>



        <Router>
          <div className="App">
            <nav>
              <ul>
                <li>

                  <Link to="/"> <span class="material-icons-outlined"> Home </span></Link>
                </li>
                <li>
                  <Link to="/Commandes"><span class="material-icons-outlined"> Commandes </span></Link>
                </li>
                <li>
                  <Link to="/Genres"><span class="material-icons-outlined"> Genres </span></Link>
                </li>

                <li>
                  <Link to="/Livres"><span class="material-icons-outlined"> Livres </span></Link>
                </li>

                <li className='ima'>
                  <img src={logo} class="profile" />
                  <ul>
                    <li class="sub-item">
                      <span class="material-icons-outlined">  </span>
                      <p>USER INFORMATION</p>


                    </li>
                    <li class="sub-item">

                      <span class="material-icons-outlined">  </span>
                      <p>{token.name} </p>
                      <p>|| </p>
                      <p>{token.role[0]}</p>

                    </li>

                    <li class="sub-item">
                      <span class="material-icons-outlined">  </span>
                      <p>Update My profil</p>
                    </li>
                    <li class="sub-item" onClick={logout}>
                      <span class="material-icons-outlined">  </span>
                      <p>Logout</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <br></br>
            <Routes>
              <Route exact path='/' element={< Dashboared />}></Route>
              <Route exact path='/Livres' element={< Livres />}></Route>
              <Route exact path='/Commandes' element={< Commandes />}></Route>
              <Route exact path='/Genres' element={<AllGenres />}></Route>

            </Routes> </div>
        </Router>

      </div >
    );
  }
  if (token.role[0] === "ROLE_USER") {
    return (<div>
      <div className="wrapper">
        <h1>My Books</h1>



        <Router>
          <div className="App">
            <nav className='nav'>
              <ul className='data'>
                <li>

                  <Link  className="linki"to="/"> <span class="material-icons-outlined"> Home </span></Link>
                </li>

                <li>
                  <Link to="/Genres"><span class="material-icons-outlined"> Genres </span></Link>
                </li>
                <li>
                  <Link to="/Livres"><span class="material-icons-outlined"> Livres </span></Link>
                </li>
                <li >

                  <Link to="/add-livre"><span class="material-icons-outlined"> add new book </span></Link>
                </li>



                <li className='ima'>
                  <img src={logo} class="profile" />
                  <ul>
                    <li class="sub-item">
                      <span class="material-icons-outlined">  </span>
                      <p>USER INFORMATION</p>


                    </li>
                    <li class="sub-item">

                      <span class="material-icons-outlined">  </span>
                      <p>{token.name} </p>
                      <p>|| </p>
                      <p>{token.role[0]}</p>

                    </li>

                    <li class="sub-item">
                      <span class="material-icons-outlined">  </span>
                      <p>Update My profil</p>
                    </li>
                    <li class="sub-item" onClick={logout}>
                      <span class="material-icons-outlined">  </span>
                      <p>Logout</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <br></br>
            <Routes>
              <Route exact path='/' element={< Dashboared />}></Route>
              <Route exact path='/livres' element={< AllLivres />}></Route>
              <Route exact path='/add-livre' element={< AddLivre />}></Route>

              <Route exact path='/Commandes' element={< Commandes />}></Route>
              <Route exact path='/Genres' element={<AllGenres />}></Route>

            </Routes> </div>
        </Router>

      </div >
    </div>)
  }
}

export default App;
