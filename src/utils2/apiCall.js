import useApiAuth from './Hooks/UseApiAuth';
import useApiAuthLocal from './Hooks/UseApiAuthLocal';

function removeTrailingSlash(string) {
    if (typeof string !== 'string' || string === '') {
        return '';
    }
    return string.replace(/\/$/, "");
}

export  async function apiCall(axiosConfig, additionalData = {}) {
    try {
        axiosConfig.url = removeTrailingSlash(axiosConfig.url);
        if (additionalData.hasOwnProperty('params')) {
            axiosConfig.url = axiosConfig.url + '?' + additionalData.params;
        }
        const response = await useApiAuth.request(axiosConfig);
        return response.data;
    } catch (err) {
        return err;
    }
}

export  async function apiCallLocal(axiosConfig, additionalData = {}) {
    try {
        axiosConfig.url = removeTrailingSlash(axiosConfig.url);
        if (additionalData.hasOwnProperty('params')) {
            axiosConfig.url = axiosConfig.url + '?' + additionalData.params;
        }
        const response = await useApiAuthLocal.request(axiosConfig);
        return response.data;
    } catch (err) {
        return err;
    }
}
