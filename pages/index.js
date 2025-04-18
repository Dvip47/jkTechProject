import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // just redirecting
    router.push('/login')
  }, [])

  return null
}
