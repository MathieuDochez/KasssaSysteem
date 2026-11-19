import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import './Layout.css'

export default function Layout() {
  const { pathname } = useLocation()

  // Start every page at the top, like a normal page load would.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="layout">
      <a className="skip-link" href="#main">
        Naar inhoud
      </a>
      <Header />
      <main id="main" className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
