import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  return (
   
      <div className="App">
        <main className="app-main">
          <Main />
        </main>
        <Footer />
      </div>
     
  )
}

export default App
