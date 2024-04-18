import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './Pages'
import Catalog from './Pages/Catalog'
import Use from './Pages/Use';
import './components/reset.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Index />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='use' element={<Use />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App