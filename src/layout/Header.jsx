import { Link } from "react-router-dom"

export default function Header() {
  return (
    <nav className="h-12 flex flex-row justify-between items-center px-5">
      <div>
        AWS WEEK 8
      </div>
      <ul className="flex flex-row justify-between w-1/6">
        <li className="hover:underline"><Link to="/login">Log In</Link></li>
        <li className="hover:underline"><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  )
}