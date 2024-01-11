
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

import Vans from './pages/vans/Vans.jsx'
import VanDetail from './pages/vans/VanDetail.jsx'

import HostLayout from './components/layout/HostLayout.jsx'
import Dashboard from './pages/host/Dashboard.jsx'
import Income from './pages/host/Income.jsx'
import Reviews from './pages/host/Reviews.jsx'

import HostVans from './pages/host/HostVans.jsx'
import HostVanInfo from './pages/host/HostVanInfo.jsx'
import HostVanPricing from './pages/host/HostVanPricing.jsx'
import HostVanPhotos from './pages/host/HostVanPhotos.jsx'

import HostVanDetail from './pages/host/HostVanDetail.jsx'

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
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />

              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}