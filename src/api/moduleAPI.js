const BASH_URL = import.meta.env.VITE_REACT_APP_BASE_URL;
import axios from 'axios'
import getCookieValue from './getCookie';
const tokenCookie = getCookieValue("token")

export const getModules = async () => {
    try {
        const response = await axios.get(`${BASH_URL}/modules`, {
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

export const getModuleById = async (id) => {
    try {
        const response = await axios.post(`${BASH_URL}/modules/search`, { id }, {
            headers: {
                'Authorization': `Bearer ${tokenCookie}`,
                'Content-Type': 'application/json',
            }, data: {
                id
            }
        })
        return response
    } catch (error) {
        return error
    }
}

export const postModule = async (payload) => {
    try {
        const response = await axios.post(`${BASH_URL}/modules`, payload, {
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

export const putModule = async (payload) => {
    try {
        const response = await axios.put(`${BASH_URL}/modules`, payload, {
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


export const deleteModule = async (id) => {
    try {
        const response = await axios.delete(`${BASH_URL}/modules`, {
            headers: {
                'Authorization': `Bearer ${tokenCookie}`,
                'Content-Type': 'application/json',
            },
            data: {
                id
            }
        })
        return response
    } catch (error) {
        return error
    }
}

export const putModuleById = async (payload) => {
    try {
        const response = await axios.put(`${BASH_URL}/modules`, payload, {
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