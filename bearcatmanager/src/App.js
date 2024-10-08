import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import CreateEvent from './CreateEvent';
import Navbar from './Navbar';
import Container from './Container';
function App() {
  return (
      <>
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/CreateEvent" element={<CreateEvent />} />
        </Routes>
      </div>
    </Router>
    <hr />
       <Container />
       </>
  );
}
 
export default App;
