import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="p-6 border-b-2 border-gray-500 flex justify-between items-center">
      <Link to="/">
        <img src="./logo.png" className="w-14 rounded-full" />
      </Link>

      <div>
        <input type="search" placeholder="search" />
        {/* icon  */}
      </div>
    </nav>
  )
}
