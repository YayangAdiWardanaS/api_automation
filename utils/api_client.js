const axios = require('axios');
require('dotenv').config();

const apiClient = axios.create({
  baseURL: process.env.base_url,
  headers: {
    'Content-Type': 'application/json'
  }
});

module.exports = apiClient;