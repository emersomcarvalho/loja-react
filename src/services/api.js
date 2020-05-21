import axios from 'axios'

let baseURL = 'http://localhost:3000';

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000'
} else {
  baseURL = ''; 
}

export const api = axios.create({
  baseURL,
})
