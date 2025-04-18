import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'

export default function Header() {
  const { user, logout } = useAuth()

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">SnapTyle</h1>

      <nav className="space-x-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/documents">Documents</Link>
        <Link href="/ingestion">Ingestion</Link>
        <Link href="/qa">Q&A</Link>
        {user && (
          <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
            Logout
          </button>
        )}
      </nav>
    </header>
  )
}
