const axios = required('axios');
const { APP_TIMEOUT } = process.env;

module.exports = (baseUrl) => {
  return axios.create({
    baseURL: baseURL,
    timeout: APP_TIMEOUT
  });
}
