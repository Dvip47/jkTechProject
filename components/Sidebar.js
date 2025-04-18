import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-60 bg-gray-100 p-4 h-screen">
      <ul className="space-y-4">
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/documents">Documents</Link></li>
        <li><Link href="/ingestion">Ingestion</Link></li>
        <li><Link href="/qa">Q&A</Link></li>
        <li><Link href="/users">Users</Link></li>
      </ul>
    </aside>
  )
}
