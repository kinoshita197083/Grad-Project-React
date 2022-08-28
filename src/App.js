import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import Test1 from './components/pages/test1';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import Test2 from './components/pages/test2';
import HorizontalNonLinearStepper from './components/pages/stepper'
import Test3 from './components/pages/test3';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Test1' element={<Test1 />} />
          <Route path='/Stepper' element={<HorizontalNonLinearStepper />} />
          <Route path='/Data' element={<Test3 />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
