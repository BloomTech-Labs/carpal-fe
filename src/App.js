import React from "react";
import { Route } from "react-router-dom";
import TopNav from "../src/Components/Nav/TopNav";
import Nav from "../src/Components/Nav/Nav";
import Login from "../src/Components/Login-SignUp/Login";
import SignUp from "../src/Components/Login-SignUp/SignUp";
import Dashboard from "../src/Components/Dashboards/Dashboard";
import ProfilePage from "../src/Components/Profile-Pages/Profile-Pages";
import LandingPage from "../src/Components/Landing-Page/Landing-Page";

//TODO: update app to include loader if isLoading

function App() {
    return (
        <div className="App" role="App">
            <TopNav />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/profilepage" component={ProfilePage} />
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/" component={LandingPage} />
            <Nav />
        </div>
    );
}
export default App;
