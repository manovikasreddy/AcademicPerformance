import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../app/context/AuthContext'

function Navbar() {
  const { user, logout } = useAuth()
  return (
    <nav>
      <span className="brand">📚 CoursePlanner</span>
      <div className="nav-links">
        <Link to="/">Courses</Link>
        <Link to="/planner">Planner</Link>
        <Link to="/summary">Summary</Link>
        {user && <span style={{ color: '#a0aec0', fontSize: '.85rem' }}>Hi, {user.name}</span>}
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  )
}

export default Navbar
