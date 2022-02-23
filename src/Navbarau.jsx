import React from "react";
function Navbar()
{
    return(
       <React.Fragment>
           <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <img src="https://www.airforce.gov.au/sites/default/files/raaf-co-branding-logo_0.png" className="nav-brand"/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data target="#collapseibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>  


        <div className="collapse navbar-collapse" id="collasibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">AF 100</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Operations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Our mission</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Our people</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Technology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">News and events</a>
            </li>
          </ul>
        </div>
  </nav>

 <br/> <br/>

 
 
       </React.Fragment>
    );
}
export default Navbar;