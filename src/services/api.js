import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://official-joke-api.appspot.com',
})
export default {
  async getRandomJoke() {
    try {
      const response = await apiClient.get('/random_joke') // Ask for a random joke
      return response.data // Return the joke data
    } catch (error) {
      console.error('Error fetching joke:', error)
      return null // Return null if there's an error
    }
  },
}
