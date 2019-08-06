import axios from 'axios'

const axios_flat = axios.create({
    baseURL: 'https://flat-d00f8.firebaseio.com/'
})


export default axios_flat