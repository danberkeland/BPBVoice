import React, { useEffect, useContext } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Ordering } from './Ordering/Ordering'

function AppRoutes() {


  return (
    <Router>
      
      <div className="bigPicture">
        <Routes>
        <Route path="/" element={<Ordering />} />
        <Route path="/Ordering" element={<Ordering />} />
        </Routes>
          
         
      </div>
    </Router>        
  );
}

export default AppRoutes;
