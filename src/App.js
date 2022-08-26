import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import Test1 from './components/pages/test1';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Test1' exact component={Test1} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
