import axios from "axios" 
import { UserInterface } from "../models/interfaces/User"

const api = axios.create({
  baseURL: 'https://acerta-easy-coffee.uc.r.appspot.com/'
})

export default api