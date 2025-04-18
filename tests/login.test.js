import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Login from '../pages/login'

test('renders login form', () => {
  render(<Login />)
  
  expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  expect(screen.getByText(/login/i)).toBeInTheDocument()
})

test('submitting login form with correct data', () => {
  render(<Login />)
  
  fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } })
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'testpassword' } })
  fireEvent.click(screen.getByText(/login/i))

  // You would replace this with an actual mock of the login function
  expect(screen.getByText(/welcome/i)).toBeInTheDocument() // Example assumption of success
})

test('submitting login form with incorrect data', () => {
  render(<Login />)
  
  fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'wronguser' } })
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'wrongpassword' } })
  fireEvent.click(screen.getByText(/login/i))

  expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument() // Example assumption of failure
})
