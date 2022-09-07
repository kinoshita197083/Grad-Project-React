import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './navbar_iter_1/Navbar_iter_1';
import SymptomPage_iter_1 from './pages_iter_1/test3_iter_1';
import HorizontalNonLinearStepper_iter_1 from './pages_iter_1/stepper_iter_1';
import Footer from './Footer_iter_1';
import Home_iter_1 from './pages_iter_1/home_iter_1';


function Iteration1Router() {
    return (
        <div>
            <p>Hi</p>
            {/* <Router>
                <Navbar />
                <Routes>
                    <Route path='/iteration1/' element={<Home_iter_1 />} />
                    <Route path='/iteration1/Stepper' element={<HorizontalNonLinearStepper_iter_1 />} />
                    <Route path='/iteration1/Data' element={<SymptomPage_iter_1 />} />
                </Routes>
            </Router>
            <Footer /> */}


            <Router>
                <Navbar />
                <Routes>
                    <Route path='/iteration1' element={<Home_iter_1 />} />
                    <Route path='/iteration1/Stepper' element={<HorizontalNonLinearStepper_iter_1 />} />
                    <Route path='/iteration1/Data' element={<SymptomPage_iter_1 />} />
                </Routes>
            </Router>
            <Outlet />
        </div>
    )
}

export default Iteration1Router;


{/* <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    /> */}