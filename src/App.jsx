import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'

export default function App() {
  return (
    <div className="App">

        <NavBar />
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/price/:symbol' element={<Price />} />
            <Route path='/currencies' element={<Currencies />} />
        </Routes>

    </div>
  );
}