import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = (username, password) => {
    // just a mock login, should be a real call later
    if (username === 'admin' && password === 'password123') {
      setUser({ username, role: 'admin' })
    }
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
