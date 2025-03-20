import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('job') || null;

export const baseApi = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL, // ✅ Check .env for correctness
    headers: {
        "Content-Type": "application/json",
        ...(token && { "Authorization": `Bearer ${token}` }) // ✅ Add Authorization header only if token exists
    },
});
