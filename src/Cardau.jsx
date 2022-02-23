import React from "react";
function Navbar()
{
    return(
       <React.Fragment>

<div class="card-group">

          <div class="card bg-light">
            <div class="card-body text-center">
              <h2>Our People</h2>
              <h4>Professionalism, mastery and continuous improvement in everything we do.</h4>
            </div>
          </div>
          
          <div class="card bg-light">
            <div class="card-body text-center">
              <h2>Our Mission</h2>
              <h4>Capability focussed, operationally ready and driven to succeed.</h4>
            </div>
          </div>
          
          <div class="card bg-light">
            <div class="card-body text-center">
              <h2>Technology</h2>
              <h4>Aircraft, Surveillance, Command and Control, and Combat Support Capability.</h4>
            </div>
          </div>
          
          <div class="card bg-light">
            <div class="card-body text-center">
              <h2>Respected</h2>
              <h4>Air Force Newspaper, Air Shows, Exercises and Air Force 2021.</h4>
            </div>
          </div>
        </div>

        <div class="card-deck">
          <div class="card"> 
             <div class="card-body text-center">
               <img src="https://www.airforce.gov.au/sites/default/files/styles/img-600x500/public/news/hero-img/20210628raaf8540638_0147.jpg?itok=ArozE_DK" height="400" width="750"  />
             </div>
           </div>  
          
           <div class="card">
             <div class="card-body text-center">
               <h1 class="card-text"><b> Americans return for Exercise Teak Action</b></h1>
               <h4>Up to four Royal Australian Air Force Hawk 127 lead-in fighter from Number 79 Squadron will conduct a flypast in support of Number 264 ADF Pilots Course Graduation Parade on Friday 10 December 2021.</h4>
             </div>
           </div>
        </div>

        <div class="card-deck">
          <div class="card"> 
             <div class="card-body text-center">
               <img src="https://www.airforce.gov.au/sites/default/files/styles/img-1200x600/public/news/hero-img/20210406ran8109938_0270.jpg?itok=ZjRwVIRV" height="400" width="750"  />
             </div>
           </div>  

           <div class="card">
             <div class="card-body text-center">
               <h1 class="card-text"><b>Air Force flypast for Australia Day -WA</b></h1>
               <h4>Royal Australian Air Force aircraft will conduct a flying display and a number of flypasts over Subiaco and Perth, Western Australia, in support of Australia Day celebrations.</h4>
             </div>
           </div>
        </div>

<br/><br/><br/> 

        <div class="card-deck">
          <div class="card">
             <div class="card-body text-center">
               <h1 class="card-text"><b>Air Force flying display for Australia Day - Vic</b></h1>
               <h4>Royal Australian Air Force aircraft will conduct a flying display in the skies above Melbourne in support of Australia Day celebrations.</h4>
             </div>
           </div>

          <div class="card"> 
             <div class="card-body text-center">
               <img src="https://www.airforce.gov.au/sites/default/files/styles/img-1200x600/public/news/hero-img/20210331adf8209508_236.jpg?itok=JR8KP3Se" height="400" width="750"  />
             </div>
           </div>  
        </div>

<br/><br/><br/> 
        </React.Fragment>
        );
    }
    export default Navbar;