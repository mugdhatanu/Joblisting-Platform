import toast from 'react-hot-toast';
import axios from 'axios'
import getFromLocalStorage from '../utils/localstorage/getFromLocal';
const backendUrl = import.meta.env.VITE_BACKEND_URL;


export const toastSuccess = (msg) => {
    toast.success(`${msg}`, {
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


export const getAllJobs = async() => {
    try {
        const res = await axios.get(`${backendUrl}/jobs`);
        return res.data;
    } catch(err) {
        throw new Error('Error fetching jobs',err)
    }
}

export const getJobDetails = async(id) => {
    try {
        const res = await axios.get(`${backendUrl}/job/${id}`);
        return res.data;
    } catch(err) {
        throw new Error('Error fetching job details',err)
    }
}

export const createJob = async(job) => {
    const options = {
        headers: {
            Authorization: "Bearer " + getFromLocalStorage()
        }
    }
    try {
        const res = await axios.post(`${backendUrl}/create`,job,options);
        return res.data;
    } catch(err) {
        throw new Error('Error creating job',err)
    }
}

export const editJob = async(job) => {
    const options = {
        headers: {
            Authorization: "Bearer " + getFromLocalStorage()
        }
    }
    try {
        const res = await axios.put(`${backendUrl}/edit`,job,options);
        return res.data;
    } catch(err) {
        throw new Error('Error editing job',err)
    }
}


