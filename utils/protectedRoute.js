import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return <div>Loading...</div>
}

  return children;
 }

export default ProtectedRoute
