import { NavLink } from 'react-router-dom'

const Header = () => {


  return (
    <header className="header">
      <h1 className="header-title">HRnet</h1>
      <nav className="header-nav">
        <NavLink 
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Create
        </NavLink>
        <NavLink 
          to="/list"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          List
        </NavLink>
      </nav>
    </header>
  )
}

export default Header