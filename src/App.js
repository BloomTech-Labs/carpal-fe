import React from "react";
import { Route } from "react-router-dom";
import TopNav from '../src/Components/Nav/TopNav';
import Nav from '../src/Components/Nav/Nav';
import Login from "../src/Components/Login-SignUp/Login";
import SignUp from "../src/Components/Login-SignUp/SignUp";
import Dashboard from "../src/Components/Dashboards/Dashboard"

function App() {
    return (
        <div className="App" role="App">
            <TopNav />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={Dashboard} /> 
            <Nav />
            
        </div>
    );
}

export default App;
