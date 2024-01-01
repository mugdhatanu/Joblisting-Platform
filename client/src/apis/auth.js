import axios from 'axios'
import toast from 'react-hot-toast'
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const toastSuccess = (msg) => {
    toast.success(`User successfully ${msg}`, {
        duration: 4000,
        position: 'top-right',
        iconTheme: {
            primary: 'rgb(16, 211, 16)',
            secondary: '#fff',
        },
    style: {
        padding: "1rem"
    }});
}

export const toastError = (msg) => {
    toast.error(`${msg}`, {
        duration: 4000,
        position: 'top-right',
        iconTheme: {
            primary: 'rgb(248, 63, 63)',
            secondary: '#fff',
        },
    style: {
        padding: "1rem"
    }})
}


export const login = async (user) => {
    try {
        const res = await axios.post(`${backendUrl}/login`,user);
        toastSuccess('logged in');
        return res.data;
    } catch(err) {
        throw new Error('Error logging in user',err);
    }
}

export const _register = async (user) => {
    try {
        const res = await axios.post(`${backendUrl}/register`,user);
        toastSuccess('registered');
        return res.data;
    } catch(err) {
        throw new Error('Error registering user',err);
    }
}