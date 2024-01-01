const BASH_URL = import.meta.env.VITE_REACT_APP_BASE_URL;
import axios from 'axios'
import getCookieValue from './getCookie';
const tokenCookie = getCookieValue("token")

export const consumeOrderApi = {
    getOrder : async () => {
        try {
            const res = await axios.get(`${BASH_URL}/orders`, {
                headers: {
                    'Authorization': `Bearer ${tokenCookie}`,
                    'Content-Type': 'application/json',
                }
            });
    
            return res.data;
        } catch (error) {
            return error
        }
    },
}