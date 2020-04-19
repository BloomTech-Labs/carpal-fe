import React from "react";
import { Route } from "react-router-dom";
import TopNav from "../src/Components/Nav/TopNav";
import Nav from "../src/Components/Nav/Nav";
import Login from "../src/Components/Login-SignUp/Login";
import SignUp from "../src/Components/Login-SignUp/SignUp";
import Logout from "../src/Components/Login-SignUp/Logout";
import Dashboard from "../src/Components/Dashboards/Dashboard";
import ProfilePage from "../src/Components/Profile-Pages/Profile-Pages";
import LandingPage from "../src/Components/Landing-Page/Landing-Page";
import ProtectedRoute from "../src/Utils/ProtectedRoute";

import "./App.scss";

//TODO: update app to include loader if isLoading

function App() {
    return (
        <div className="App" role="App">
            <TopNav />
            <div className="container">
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <ProtectedRoute exact path="/logout" component={Logout} />
                <ProtectedRoute
                    exact
                    path="/profilepage"
                    component={ProfilePage}
                />
                <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                <Route exact path="/" component={LandingPage} />
            </div>
            <Nav />
        </div>
    );
}
export default App;
