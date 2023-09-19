import axios from 'axios'

export const myAxios = axios.create({
    headers:{
      Authorization: process.env.AUTH_TOKEN
    }
})