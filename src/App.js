import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import FrontIntro from './Components/FrontIntro';
import Tools from './Components/Tools';
import Footer from './Components/Footer';
import Login from './Components/Login';
import SipCalculator from './Components/SipCalculator';
import Rpdanalysis from './Components/Rpdanalysis';
import RealTime from './Components/RealTime';
import Account from './Components/Account';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />

        <Routes>
           <Route exact path='/' element={<><FrontIntro/>
            <Tools/>
            <Footer/> 
            </>} />

          <Route exact path='/Login' element={<Login />}></Route>
          <Route exact path='/SipCalculator' element={<SipCalculator />}></Route>
          <Route exact path='/rpdanalysis' element={<Rpdanalysis />}></Route>
          <Route exact path='/RealTime' element={<RealTime />}></Route>
          <Route exact path='/Account' element={<Account />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
