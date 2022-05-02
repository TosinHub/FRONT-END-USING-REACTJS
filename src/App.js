import React from "react";
import {Container } from '@material-ui/core'
import { BrowserRouter,Route, Switch } from "react-router-dom";
import Navbar from "./component/NavBar/NavBar";
import Home from "./component/Home/Home";
import Auth from "./component/Auth/Auth";




const App = () =>{
    return (
        <BrowserRouter>
      <Container maxWidth="lg">
         <Navbar /> 
         <Switch>
             <Route path="/" exact component={Home} />
             <Route path="/auth" component={Auth} />
         </Switch>
      
      </Container>
      </BrowserRouter>
    )
}


export default App;