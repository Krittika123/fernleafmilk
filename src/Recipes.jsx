import React from "react";
import Navbarfnmi from "./Navbarfnmi";
function Recipes()
{
    return(
       <React.Fragment>
         <Navbarfnmi/>
        <center>
          <img src="https://cdn1.foodviva.com/static-content/food-images/pudding-recipes/milk-pudding/milk-pudding.jpg" height="600" width="1400" /> 
          <br/><br/>

          <h1 class="text-danger">
              <b>
              Recipes
              </b> 
          </h1>

          <div class="card-deck">

            <div class="card"> 
              <div class="card">"
                <img class="rounded-circle" src="https://cdn2.webdamdb.com/md_QWYe6u3rA355.png?1565906227" alt="" />
               </div>
            </div>  

            <div class="card">
              <div class="card">
                <img class="rounded-circle" src="https://cdn2.webdamdb.com/md_kzkbEX6AJgW4.png?1565906161" alt="" />
              </div>
            </div>

            <div class="card">
              <div class="card">
                <img class="rounded-circle" src="https://cdn2.webdamdb.com/md_EUVPtkuspBo5.png?1565906260" alt="" />
              </div>
            </div>

            <div class="card">
              <div class="card">
                <img class="rounded-circle" src="https://cdn2.webdamdb.com/md_ICQ80MdhK2S1.png?1565906200" alt="" />
              </div>
            </div>

        </div>   

<br/><br/><br/>
        </center>  
       </React.Fragment>
       
       );
    }
    export default Recipes;