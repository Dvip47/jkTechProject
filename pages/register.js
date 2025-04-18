import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleRegister = async (e) => {
    e.preventDefault()

    try {
      // fake api call
      await new Promise((res) => setTimeout(res, 500))
      router.push('/login')
    } catch (err) {
      console.log('Register failed')
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h1 className="text-xl font-semibold mb-4">Register</h1>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="mb-3 border w-full p-2"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>setPassword(e.target.value)}
          value={password}
          className="mb-3 border w-full p-2"
        />

        <button type="submit" className="bg-green-600 text-white w-full py-2">Register</button>
      </form>
    </div>
  )
}
