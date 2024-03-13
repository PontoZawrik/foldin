import React from 'react'
import './App.css'
import Header from './components/Header'
import Marketing from './components/Marketing'
import LinkCatalog from './components/LinkCatalog'
import Statistics from './components/Statistics'
import Slider from './components/Slider'
import Sale from './components/Sale'
import './components/reset.css'

function App() {

  return (
    <>
      <Header />
      <Marketing />
      <LinkCatalog />
      <Statistics />
      <Slider />
      <Sale />
    </>
  )
}

export default App