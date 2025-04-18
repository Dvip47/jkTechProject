import { useState } from 'react'
import BackButton from '../utils/backToHome'

export default function Ingestion() {
  const [status, setStatus] = useState('idle')

  const handleIngest = async () => {
    setStatus('processing')
    // simulate api
    await new Promise(r => setTimeout(r, 1200))
    setStatus('done')
  }

  return (
    <div className="centered-container">
      <div className="ingestion-box">
      <BackButton className="back-button" />
      <h1 className="text-xl mb-4">Ingestion Manager</h1>

        <button
          onClick={handleIngest}
          className="ingestion-button"
        >
          Start Ingestion
        </button>

        <p className="ingestion-status">
          Status: <strong>{status}</strong>
        </p>
      </div>
    </div>
  )
}
