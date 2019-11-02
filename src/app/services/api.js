import axios from 'axios';
import { access_token } from '../utils/security';


export const URL= `https://pokeapi.co/api/v2/pokemon`; 

export const _axios = axios.create({
  baseURL: URL,
})