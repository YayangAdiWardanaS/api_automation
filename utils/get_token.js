const apiClient = require('./api_client');

async function getToken() {
    const response = await apiClient.post('/auth', {
      username: process.env.auth_user,
      password: process.env.auth_pass
    });
    return response.data.token;
}

module.exports = getToken;