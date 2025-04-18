import { postData } from '../mocks/handlers'

// Trigger document ingestion process
export const startIngestion = async () => {
  try {
    const response = await postData('/ingest', {})
    return response
  } catch (error) {
    console.log('Error starting ingestion:', error)
    throw error
  }
}

// Get ingestion status
export const getIngestionStatus = async () => {
  try {
    const response = await fetchData('/ingestion-status')
    return response
  } catch (error) {
    console.log('Error getting ingestion status:', error)
    throw error
  }
}
