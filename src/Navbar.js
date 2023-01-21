import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Logo from "./images/logo.png"

export default function Navbar() {
  return (
    <nav className="nav">
      <img src ={Logo} alt={'logo'} ></img>
      <Link to="/" className="site-title">
        IEEE FCRIT
      </Link>
      <ul>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/events">Events</CustomLink>
        <CustomLink to="/membership">Membership</CustomLink>
        <CustomLink to="/magazine">Magazine</CustomLink>
        <CustomLink to="/team">Team</CustomLink>
        <CustomLink to="/contact">Contact Us</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}