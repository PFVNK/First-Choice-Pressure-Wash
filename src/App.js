import React from 'react';
import Homepage from "./Components/Homepage"
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
