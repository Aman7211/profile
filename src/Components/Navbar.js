import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function Navbar1() {
  const navigate = useNavigate();

const handlelogout = () =>{
localStorage.removeItem("authToken");
navigate("/login");
}
const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://localhost:4000/api/getuser')
      .then(response => response.json())
      .then(data => {
        setUserData(data.data); // Assuming data.data contains the user data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
    <div className="container-fluid">
      <Link className="navbar-brand fs-1 fst-bold" to="/">ORU PHONES</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2">
          <li className="nav-item">
            <Link className="nav-link active fs-5" aria-current="page" to="/">Dashboard</Link>
          </li>
          {
            (localStorage.getItem("authToken"))?
            <li className='nav-item'>
              <Link className='nav-link active fs-5' aria-current="page" to='/connections'> Connections</Link>
            </li>
          :""}
         
        </ul>
        {(!localStorage.getItem("authToken"))?
           <div className='d-flex'> 
           <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
            <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
            </div> 
            : 
            <div className='d-flex'>

                <span >
                  { <h5 className='btn bg-white text-success mx-3 '>Hello {userData.map(user => <h5>{user.name}</h5>
                   )}</h5>}
                  </span>
            <div className='btn bg-white text-danger my-3 ' onClick={handlelogout}>Logout !!</div>
              </div>
          }
      </div>
    </div>
  </nav>
  )
}
