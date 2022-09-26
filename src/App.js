import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import Test1 from './components/pages/test1';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import HorizontalNonLinearStepper from './components/pages/stepper'
import Test3 from './components/pages/test3';
import Button from '@mui/material/Button';
import { Dashboard } from './components/dashboard/dashboard';
import { MonkeypoxPage } from './components/pages/monkeypox_page/monkeypox_page';
import { Game } from './components/pages/game_page/game';


function App() {

  const [isLoggedin, setLogin] = useState(false)
  let temp = false;

  function getAccessToken() {
    const url = window.location.href;
    const hash = url.substring(url.indexOf('#') + 1);
    let result = hash.split('&')
    result = result[0].split('=')
    localStorage.setItem('idToken', result)
    // return result[1];
  }

  function trackStatus() {
    localStorage.setItem("idToken", getAccessToken());
    // window.addEventListener("storage", tokenCheck(localStorage.getItem('idToken')));
  }


  return (

    localStorage.getItem("idToken") != null ? //<div>
      <div id='appjs-main-div'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Test1' element={<Test1 />} />
            <Route path='/Stepper' element={<HorizontalNonLinearStepper />} />
            <Route path='/Data' element={<Test3 />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Monkeypox' element={<MonkeypoxPage />} />
            <Route path='/Game' element={<Game />} />
          </Routes>
        </Router>
        <Footer />
      </div>
      // </div> 

      : <div className='wrapper'>
        <div className='typing-demo'>
          <h1>The site is currently unavailable to public</h1>
        </div>
        <div className='login'>
          <Button variant="outlined" href="https://charming-ape.auth.ap-southeast-2.amazoncognito.com/login?client_id=245e8mjh4j8p31qakva6l7jnkv&response_type=code&scope=openid&redirect_uri=https://www.charming-ape.click/" onClick={getAccessToken}>
            Login
          </Button>
        </div>

      </div>
  )
}

export default App;