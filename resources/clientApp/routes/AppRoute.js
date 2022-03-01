import React, {Component} from 'react';
import {Routes,Route} from "react-router-dom";
import HomePage from './../pages/HomePage'
import CoursePlanPage from './../pages/CoursePlanPage'
import RegistrationPage from './../pages/RegistrationPage'
import FreeClassPage from './../pages/FreeClassPage'

class AppRoute extends Component {
    render() {
        return (
            <>
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/courseplan" element={<CoursePlanPage/>} />
                        <Route path="/registration" element={<RegistrationPage/>} />
                        <Route path="/freeclass" element={<FreeClassPage/>} />
                    </Routes>
            </>
        );
    }
}

export default AppRoute;
