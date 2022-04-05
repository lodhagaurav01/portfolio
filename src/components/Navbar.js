
import React from 'react'


export default function Navbar() {
  return (
   
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark " style={{position: 'absolute'}} >
  <div className="container">
    <a className="navbar-brand" href="/">Gaurav Lodha</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#asd">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Academics</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/">Skills</a>
        </li>

        {/* <li className="nav-item">
          <a className="nav-link" href="/">Skills</a>
        </li> */}

        
        {/* <li className="nav-item  ">
          <a className="nav-link text-white bg-primary" href="/"><i className="d-flex fa fa-linkedin" ></i></a>
        </li> */}
              
        
      </ul>
    </div>
  </div>
</nav>
    
  )
}
// 