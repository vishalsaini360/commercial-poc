import {axiosLocalInstance} from "./Axios";

axiosLocalInstance.interceptors.request.use(async (config) => {
    return config;
});

axiosLocalInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        return Promise.reject(error);
    }
);

export default axiosLocalInstance;
