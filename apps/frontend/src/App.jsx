import { Route, Routes } from 'react-router'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Directions from './pages/Directions.jsx'
import Beers from './pages/Beers.jsx'
import Menu from './pages/Menu.jsx'
import Photos from './pages/Photos.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="route" element={<Directions />} />
        <Route path="bieren" element={<Beers />} />
        <Route path="aanbod" element={<Menu />} />
        <Route path="fotos" element={<Photos />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      {/* The hidden checkout (kassa) route will be added here later, outside the public Layout. */}
    </Routes>
  )
}
