import axios from 'axios'
import { BASE_URL } from './url'

export const apiConnection = {
  get : async (PATH:string) => {
    const getResponse = await axios.get(BASE_URL+PATH)
    return getResponse
  },
  post : async (PATH:string, data:any) => {
    const postResponse = await axios.post(BASE_URL+PATH, data)
    return postResponse
  },
  put : async (PATH:string, data:any) => {
    const postResponse = await axios.put(BASE_URL+PATH, data)
    return postResponse
  },
  delete : async (PATH:string) => {
    const postResponse = await axios.delete(BASE_URL+PATH)
    return postResponse
  }
}