import { useState } from 'react'
import './index.css'
import Main from './components/Main'
import Footer from './components/Footer'
import Header from './components/Header'

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
