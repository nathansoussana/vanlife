
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

import Vans from './pages/vans/Vans.jsx'
import VanDetail from './pages/vans/VanDetail.jsx'

import HostLayout from './components/layout/HostLayout.jsx'
import Dashboard from './pages/host/Dashboard.jsx'
import Income from './pages/host/Income.jsx'
import HostVans from './pages/host/HostVans.jsx'
import HostVanDetail from './pages/host/HostVanDetail.jsx'
import Reviews from './pages/host/Reviews.jsx'

import '../server.js'

export default function App() {
  return (
    <div className="global_container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
 
            <Route path="host" element={<HostLayout />}>
              <Route index end element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}