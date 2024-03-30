import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Home from './components/Home';
import IndiaMap from './components/IndiaMap';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Use 'element' prop instead of 'component' */}
          <Route path="/india-map" element={<IndiaMap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
