import { useAuth } from '@/context/AuthContext'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1 className="dashboard-heading">
          Welcome, {user?.email || 'Guest'}
        </h1>

        <div className="dashboard-grid">
          <a href="/documents" className="dashboard-card">
            <h2 className="dashboard-card-title">Documents</h2>
            <p className="dashboard-card-desc">Manage and view all your documents.</p>
          </a>

          <a href="/ingestion" className="dashboard-card">
            <h2 className="dashboard-card-title">Ingestion</h2>
            <p className="dashboard-card-desc">Upload and process your files here.</p>
          </a>

          <a href="/qa" className="dashboard-card">
            <h2 className="dashboard-card-title">Q & A</h2>
            <p className="dashboard-card-desc">Ask questions and get instant answers.</p>
          </a>
        </div>
      </div>
    </div>
  )
}
