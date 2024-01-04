
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Vans from './pages/vans/Vans.jsx'
import VanDetail from './pages/vans/VanDetail.jsx'
import Dashboard from './pages/host/Dashboard.jsx'
import Income from './pages/host/Income.jsx'
import Reviews from './pages/host/Reviews.jsx'
import '../server.js'

export default function App() {
  return (
    <div className="global_container">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
            {/* Host routes */}
            <Route path="/host" element={<Dashboard />} />
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}