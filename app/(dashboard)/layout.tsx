import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="text-gray-900 font-semibold">Dashboard Navbar</h1>
      {children}
    </div>
  )
}

export default Layout
