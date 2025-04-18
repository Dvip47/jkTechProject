import { postData } from '../mocks/handlers'

// Ask a question and retrieve answer
export const askQuestion = async (question) => {
  try {
    const response = await postData('/qa', { question })
    return response
  } catch (error) {
    console.log('Error asking question:', error)
    throw error
  }
}

// Fetch the relevant documents for a question
export const fetchRelatedDocuments = async (question) => {
  try {
    const response = await fetchData(`/documents/related?q=${question}`)
    return response
  } catch (error) {
    console.log('Error fetching related documents:', error)
    throw error
  }
}
