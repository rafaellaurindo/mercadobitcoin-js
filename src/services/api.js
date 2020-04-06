const axios = require('axios');

const isValidCoin = require('../utils/is-valid-coin');
const { API_BASE_URL } = require('../constants');

axios.default.interceptors.request.use(config => {
  config.headers = { Accept: 'application/json' };
  config.baseURL = API_BASE_URL;
  return config;
});

/**
 * Default Mercado Bitcoin API Wrapper Requests
 *
 * @param {string} method - API Mercado Bitcoin Method
 * @param {string} coin - Acronym for the digital currency: BCH, BTC, ETH, LTC, XRP.
 * @param {string} optionals - Optionals Request Data
 * @returns {Object}
 *
 * @throws {Error} If coin parameter is not a valid Acronym or the digital currency
 */
const api = async (method = '', coin = '', optionals = '') => {
  if (!isValidCoin(coin)) {
    throw new Error(`${coin} is not a valid coin!`);
  }

  const requestUrl = `${coin}/${method}/${optionals}`;
  const { data: response } = await axios.get(requestUrl);

  return response;
};

module.exports = api;
