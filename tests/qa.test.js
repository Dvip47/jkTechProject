import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import QA from '../pages/qa'

test('renders Q&A form', () => {
  render(<QA />)

  expect(screen.getByLabelText(/ask your question/i)).toBeInTheDocument()
  expect(screen.getByText(/submit/i)).toBeInTheDocument()
})

test('submitting question form with valid input', () => {
  render(<QA />)

  fireEvent.change(screen.getByLabelText(/ask your question/i), { target: { value: 'What is React?' } })
  fireEvent.click(screen.getByText(/submit/i))

  expect(screen.getByText(/answer/i)).toBeInTheDocument() // Assuming you show an answer
})

test('submitting question form with empty input', () => {
  render(<QA />)

  fireEvent.change(screen.getByLabelText(/ask your question/i), { target: { value: '' } })
  fireEvent.click(screen.getByText(/submit/i))

  expect(screen.getByText(/please enter a question/i)).toBeInTheDocument() // Error message for empty input
})
