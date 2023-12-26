import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.sass'

function Home() {
  return (
    <h1>Home</h1>
  )
}

function About() {
  return (
    <h1>About</h1>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
