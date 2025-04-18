import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/router'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("")
  const { login } = useAuth()
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login(email, password)
      router.push('/dashboard')
    } catch (err) {
      console.log("Login failed: ", err)
    }
  }

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <form onSubmit={handleLogin} className="login-form">
          <h1 className="login-title">Welcome Back</h1>

          <label className="login-label">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />

          <label className="login-label">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />

          <button type="submit" className="login-button">Login</button>

        </form>
      </div>
    </div>
  )
}
