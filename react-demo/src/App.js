import './App.css';
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Invoice from './pages/Invoice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/invoice" element={<Invoice />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
