import axios from 'axios'

const entriesApi = axios.create({
    baseURL: 'https://app-trafico.vercel.app/api',
})

export default entriesApi;