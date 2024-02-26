import {axiosInstance} from "./Axios";

axiosInstance.interceptors.request.use(async (config) => {
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
