import { useState, useEffect } from 'react'

import ToDo from './components/ToDo'

import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {    
  return (
    <div className="App">
      <ToDo />
    </div>
  );
}

export default App;
