import axios from 'axios';
import Cookies from 'js-cookie'

const token = Cookies.get('job') || null;

export const baseApi = axios.create({
    baseURL:import.meta.env.VITE_BASE_API_URL,
    headers:{
       
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
    },
});