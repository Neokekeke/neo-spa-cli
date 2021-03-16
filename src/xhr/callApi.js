import axios from 'axios';

// getX
export const getX = (apiPath, payload) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: apiPath,
            params: payload,
            responseType: 'json',
        }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
};

// postX
export const postX = (apiPath, payload) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: apiPath,
            params: payload.params,
            data: payload.data,
            responseType: 'json',
        }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
};
