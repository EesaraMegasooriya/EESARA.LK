import { useState } from 'react'
import './App.css'
import Header from '../src/components/Header.jsx'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import MyProjects from './components/MyProjects.jsx'
import Footer from './components/Footer.jsx'


function App() {
  

  return (
    <>
      <Header/>
      <Home/>
      <Projects/>
      <MyProjects/>
      <Footer/>
    </>
  )
}

export default App
