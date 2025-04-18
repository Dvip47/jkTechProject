import { useState } from 'react'

export default function QAForm({ onSubmit }) {
  const [question, setQuestion] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (question.trim()) {
      onSubmit(question)
      setQuestion('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mt-4">
      <input
        type="text"
        className="border p-2 w-full rounded"
        placeholder="Ask a question..."
        value={question}
        onChange={e => setQuestion(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Ask</button>
    </form>
  )
}
