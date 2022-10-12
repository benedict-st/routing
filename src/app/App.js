import React from "react";
import { Route, Switch } from "react-router-dom";
import Users from "./components/users";
import NavBar from "./components/navBar";
import Login from "./layouts/login";
import Main from "./layouts/main";
function App() {
    return (
        <>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/login" component={Login} />
                    <Route path="/users/:userId?" component={Users} />
                </Switch>
            </div>
        </>
    );

    // return <Users />;
}

export default App;
