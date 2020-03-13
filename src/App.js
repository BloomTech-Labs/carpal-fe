import React from "react";
import { Route } from "react-router-dom";
import Login from "../src/Components/Login-SignUp/Login";
import SignUp from "../src/Components/Login-SignUp/SignUp";

function App() {
    return (
        <div className="App">
            <h1>CarPal</h1>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
        </div>
    );
}

export default App;
