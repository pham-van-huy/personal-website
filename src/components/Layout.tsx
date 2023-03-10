import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header'

const Layout: React.FC = () => {
  return <>
    <Header />
    <div className="min-h-[100vh] bg-white max-w-5xl px-5 py-16 mx-auto">
      <Outlet />
    </div>
  </>
}

export default Layout
