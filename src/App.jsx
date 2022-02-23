import React from "react";
import Products from "./Products"
import Recipes from "./Recipes"
import Stories from "./Stories";
import Aboutus from "./Aboutus";
import { Switch,Route } from "react-router-dom";
import Explore from "./Explore";
function App()
{
    return(
      <>

        <Switch>
          <Route exact path="/" component={Explore}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/recipes" component={Recipes}/>
          <Route exact path="/stories" component={Stories}/>
          <Route exact path="/aboutus" component={Aboutus}/> 
          <Route component={Explore}/>
        </Switch>
      </>
    );
}
export default App