import React, { useState } from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Transaction from './Pages/Transaction';
import Report from './Pages/Report';
import Navbar from './Components/Navbar';
import NotFound from './Pages/NotFound';
function App() {
 return (
  <BrowserRouter>
<div> 
 <Navbar/>
  <Routes>
<Route path="/" element={<Dashboard/>} />
<Route path="/transaction" element={<Transaction/>} />
<Route path="/report" element={<Report/>} />
<Route path="*" element={<NotFound/>} />

  </Routes>
</div>
  </BrowserRouter>
);
}
export default App;