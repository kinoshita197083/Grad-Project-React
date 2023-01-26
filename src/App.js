import React, { } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import HorizontalNonLinearStepper from './components/pages/prevention_page/prevention_page';
import SymptomPage from './components/pages/symptom_indicator_page/symptom_indicator_page';
import { MonkeypoxPage } from './components/pages/monkeypox_page/monkeypox_page';
import { Game } from './components/pages/game_page/game';
import { Prediction_page } from './components/pages/prediction_page/prediction_page';
import { SymptomChecklist } from './components/pages/symptom_form_page/symptom_form';


function App() {
  return (
    <div className='app-container'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Prevention' element={<HorizontalNonLinearStepper />} />
          <Route path='/Symptom_Indicators' element={<SymptomPage />} />
          <Route path='/Monkeypox' element={<MonkeypoxPage />} />
          <Route path='/Game' element={<Game />} />
          <Route path='/Prediction' element={<Prediction_page />} />
          <Route path='/Checklist' element={<SymptomChecklist />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )

}

export default App;