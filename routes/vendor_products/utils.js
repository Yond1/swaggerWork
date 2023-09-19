import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

export const myAxios = axios.create({
    headers:{
      Authorization: process.env.AUTH_TOKEN
    }
})