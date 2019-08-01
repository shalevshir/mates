import axios from 'axios'


export default axios.create({
    baseURL:'https://flat-d00f8.firebaseio.com/users'
})