import axios from 'axios'

// apiClient is the single Axios instance for our app
const apiClient = axios.create({
  // baseURL: 'https://my-json-server.typicode.com/sebastienmanolios/vuemasteryapp/',
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events') // /events is added to the based URL
  },
  getEvent(id) {
    return apiClient.get('/events/' + id) 
  },
  postEvent(event) {
    return apiClient.post('/events', event)
  }
}