import React from "react";
import {NavLink} from "react-router-dom";
function Navbar()
{
    return(
       <React.Fragment>
    

    <nav className="navbar navbar-expand-md ">
      <img src="https://cdn2.webdamdb.com/220th_sm_IGF5lgXAUxW1.png?1565922524" className="nav-brand"/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data target="#collapseibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>  


        <div className="collapse navbar-collapse justify-content-center" id="collasibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link text-success" to="/">Explore</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-success" to="/products">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-success" to="/recipes">Recipes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-success" to="/stories">Stories and Tips</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-success" to="/aboutus">About Us</NavLink>
            </li>
            
          </ul>
        </div>
  </nav>
       </React.Fragment>
       
       );
    }
    export default Navbar;
