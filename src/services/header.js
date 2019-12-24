const axios = require('axios');

const getHeaders = async () => {
    return await axios.get('/api/header').then(res =>  {
        return Promise.resolve(res);
    }).catch(err => {
        return Promise.reject(err);
    });
};

export const HeaderService = {
    getHeaders
}
