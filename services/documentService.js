import { fetchData, postData } from '../mocks/handlers'

// Fetch documents from API (mocked)
export const fetchDocuments = async () => {
  try {
    const response = await fetchData('/documents')
    return response
  } catch (error) {
    console.log('Error fetching documents:', error)
    throw error
  }
}

// Upload document
export const uploadDocument = async (document) => {
  try {
    const response = await postData('/documents', document)
    return response
  } catch (error) {
    console.log('Error uploading document:', error)
    throw error
  }
}
