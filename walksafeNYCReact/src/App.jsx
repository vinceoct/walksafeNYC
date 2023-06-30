import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <Header />
      </header>  
      <main className="app-main">
        <Main />
      </main>
      <footer className="app-footer">
        <Footer />
      </footer>
    </div>
  )
}

export default App
