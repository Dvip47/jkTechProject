export default function IngestionStatus({ status }) {
    return (
      <div className="mt-4 p-4 bg-gray-50 border rounded">
        <h3 className="font-semibold mb-2">Ingestion Status</h3>
        <p>Status: <span className={`font-bold ${status === 'completed' ? 'text-green-600' : 'text-yellow-500'}`}>{status}</span></p>
      </div>
    )
  }
  