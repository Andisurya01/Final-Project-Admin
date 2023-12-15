
const BASH_URL = "https://binar-project-production.up.railway.app";
import axios from 'axios'
import getCookieValue from './getCookie';
const tokenCookie = getCookieValue("token")

export const getCourses = async () => {
    try {
        const response = await axios.get(`${BASH_URL}/courses`);
        return response;
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

export const totalUser = async () => {
    try {
        const response = await axios.get(`${BASH_URL}/users`, {
            headers: {
                'Authorization': `Bearer ${tokenCookie}`,
                'Content-Type': 'application/json',
            }
        });
        return response
    } catch (error) {
        return error
    }
}

export const totalClass = async () => {
    try {
        const response = await axios.get(`${BASH_URL}/courses`, {
            headers: {
                'Authorization': `Bearer ${tokenCookie}`,
                'Content-Type': 'application/json',
            }
        });
        return response
    } catch (error) {
        return error
    }
}

export const orders = async () => {
    try {
        const response = await axios.get(`${BASH_URL}/orders`, {
            headers: {
                'Authorization': `Bearer ${tokenCookie}`,
                'Content-Type': 'application/json',
            }
        });
        return response
    } catch (error) {
        return error
    }
}

export const addCourses = async (payload) => {
    try {
        const response = await axios.post(`${BASH_URL}/courses`, payload, {
            headers: {
                'Authorization': `Bearer ${tokenCookie}`,
                'Content-Type': 'application/json',
            }
        });
        return response
    } catch (error) {
        console.log(error.response);
        return error
    }
}

export const deleteCourseById = async (id) => {
    try {
        const response = await axios.delete(`${BASH_URL}/courses`,{
            headers: {
                'Authorization': `Bearer ${tokenCookie}`,
                'Content-Type': 'application/json',
            }, data : {
                id : id
            }
        })
        return response
    } catch (error) {
        return error
    }
}

export const getCategories = async () => {
    try {
        const response = await axios.get(`${BASH_URL}/categories`, {
            headers: {
                'Authorization': `Bearer ${tokenCookie}`,
                'Content-Type': 'application/json',
            }
        })
        return response
    } catch (error) {
        return error
    }
}

export const getCurretUser = async () => {
    try {
        const response = await axios.get(`${BASH_URL}/auth/current-user`,{
            headers: {
                'Authorization': `Bearer ${tokenCookie}`,
                'Content-Type': 'application/json',
            }
        })
        return response
    } catch (error) {
        return error
    }
}

export const putOrderApprove = async (id) => {
    try {
        const response = await axios.put(`${BASH_URL}/orders/approve`,{orderId : id},{
            headers: {
                'Authorization': `Bearer ${tokenCookie}`,
                'Content-Type': 'application/json',
            }
        })
        return response
    } catch (error) {
        return error
    }
}