import { useState } from 'react'
import BackButton from '../utils/backToHome'

export default function Documents() {
  const [files, setFiles] = useState([])

  const handleFileUpload = (e) => {
    const fileList = Array.from(e.target.files)
    setFiles(fileList)
    console.log("Uploaded:", fileList.map(f => f.name))
  }

  return (
    <div className="centered-container">
      <div className="documents-box">
        <BackButton className="back-button" />
        <h1 className="documents-heading">Upload Documents</h1>

        <input
          type="file"
          multiple
          onChange={handleFileUpload}
          className="documents-file-input"
        />

        <ul className="documents-file-list">
          {files.map((file, i) => (
            <li key={i}>{file.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
