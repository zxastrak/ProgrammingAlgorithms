import React from 'react'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-mono text-sm text-gray-400 tracking-wider">
          Profile Page
        </span>
        <span className="text-sm text-gray-300 font-medium">
          Mochamad Miftahul Huda
        </span>
      </div>
    </nav>
  )
}

export default Navbar
