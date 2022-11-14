import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Reports from './components/Reports';
import BillValidation from './components/BillValidation';
import CostForecast from './components/CostForecast';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FunctionComponent = () => {
  
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/' element={<Dashboard />} />
          <Route path='/reports' element={<Reports />} />            
          <Route path='/billvalidation' element={<BillValidation />} />    
          <Route path='/costforecast' element={<CostForecast />} />
        </Switch>
      </Router> 
    </>
  )
}

export default App;
