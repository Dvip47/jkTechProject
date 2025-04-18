import { postData } from '../mocks/handlers'

// Login function
export const login = async (username, password) => {
  try {
    const response = await postData('/login', { username, password })
    if (response.success) {
      return response.user
    }
    throw new Error(response.error || 'Login failed')
  } catch (error) {
    console.log('Error during login:', error)
    throw error
  }
}

// Logout function
export const logout = () => {
  console.log('Logging out...')
  // Additional logout logic can go here
}

// Fetch user data for admin or users
export const fetchUserData = async () => {
  try {
    const response = await fetchData('/users')
    return response
  } catch (error) {
    console.log('Error fetching user data:', error)
    throw error
  }
}
