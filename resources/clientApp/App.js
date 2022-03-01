import React, {Component, Fragment} from 'react';
import NavBar from "./components/NavBar";
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./routes/AppRoute";

class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <NavBar/>
                    <AppRoute/>
                </BrowserRouter>

            </>
        );
    }
}

export default App;
