
const BASH_URL = "https://binar-project-production.up.railway.app";
import axios from 'axios'


export const getCourses = async() => {
    try {
        const response = await axios.get(`${BASH_URL}/courses`);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}

export const postLoginAdmin = async (payload) => {
    try {
        const response = await axios.post(`${BASH_URL}/auth/admin/login`, payload);
        return response
    } catch (error) {
        return error
    }
}
