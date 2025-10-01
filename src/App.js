import React, { useState } from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Transaction from './Pages/Transaction';
import Report from './Pages/Report';
import Navbar from './Components/Navbar';
function App() {
 return (
  <BrowserRouter>
<div> 
 <Navbar/>
  <Routes>
<Route path="/" element={<Dashboard/>} />
<Route path="/transaction" element={<Transaction/>} />
<Route path="/report" element={<Report/>} />
  </Routes>
</div>
  </BrowserRouter>
);
}
export default App;