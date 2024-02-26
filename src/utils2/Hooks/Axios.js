import axios from "axios";

export const axiosInstance= axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const axiosLocalInstance= axios.create({
    baseURL: process.env.LOCAL_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});
