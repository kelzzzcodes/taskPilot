import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="p-6 border-b-2 border-gray-500 flex justify-between items-center fixed top-0 z-50 w-full bg-slate-100">
      <Link to="/">
        <img src="./logo.png" className="w-14 rounded-full" />
      </Link>
    </nav>
  )
}
