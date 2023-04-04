import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Acerca from  './components/acerca/Acerca';
import Home from  './components/home/Home';

function App() {
  return (
    <div className="App">
    <Sidebar/>
    <Acerca/>
    <Home/>
    </div>
  )
}
export default App
