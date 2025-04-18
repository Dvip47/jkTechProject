export default function DocumentList({ documents }) {
    if (!documents || documents.length === 0) {
      return <p className="text-gray-500">No documents uploaded yet</p>
    }
  
    return (
      <ul className="space-y-3">
        {documents.map((doc, index) => (
          <li key={index} className="p-3 border rounded bg-white shadow-sm">
            <p className="font-semibold">{doc.name}</p>
            <p className="text-sm text-gray-600">{doc.type || 'Unknown type'}</p>
          </li>
        ))}
      </ul>
    )
  }
  