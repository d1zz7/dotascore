const axios = require('axios');

export const apiBaseUrl = 'https://api.pandascore.co';

export const request = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer dVJmgS0ZASs0zXC_vMvYG6HAUsy0ytEyB2mcN_G6ADgnyQp-4_s',
  },
});
