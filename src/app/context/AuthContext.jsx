import React, { createContext, useState, useContext } from 'react'

export const AuthContext = createContext()

const INITIAL_USERS = [
  { username: 'student', password: 'pass123', name: 'Alex Johnson', email: 'student@example.com' },
  { username: 'admin',   password: 'admin123', name: 'Admin User',  email: 'admin@example.com' },
]

export const AuthProvider = ({ children }) => {
  const [user, setUser]   = useState(null)
  const [users, setUsers] = useState(INITIAL_USERS)

  // LOGIN
  const login = (username, password) => {
    const found = users.find(u => u.username === username && u.password === password)
    if (found) { setUser(found); return { ok: true } }
    return { ok: false, message: 'Invalid username or password.' }
  }

  // REGISTER
  const register = ({ name, username, email, password }) => {
    if (users.find(u => u.username === username))
      return { ok: false, message: 'Username already taken. Please choose another.' }
    if (users.find(u => u.email === email))
      return { ok: false, message: 'Email already registered. Try logging in.' }
    const newUser = { name, username, email, password }
    setUsers(prev => [...prev, newUser])
    setUser(newUser)
    return { ok: true }
  }

  // FORGOT PASSWORD — simulates sending reset link
  const forgotPassword = (email) => {
    const found = users.find(u => u.email === email)
    if (!found) return { ok: false, message: 'No account found with that email address.' }
    return { ok: true, message: `Reset link sent to ${email}` }
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, register, forgotPassword, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
