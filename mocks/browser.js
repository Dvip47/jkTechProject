import { setupWorker } from 'msw'
import { handlers } from './handlers'

// Setting up mock service worker
export const worker = setupWorker(...handlers)

worker.start() // Starting the mock worker for intercepting requests
