import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import License from './pages/License';
import Contact from './pages/Contact';
import AppDownload from './pages/appDownload';
import { useState } from 'react';
import Login from './components/loginPopUp/Login';
import Navbar from './components/navbar/Navbar';
function App() {

  const[showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <Navbar setShowLogin={setShowLogin} />
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/license" element={<License />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/download" element={<AppDownload />} />
      </Routes>
    </div>
    </>
  );
}

export default App;