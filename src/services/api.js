const fetch = require("node-fetch");

const { API_BASE_URL } = require("../constants");
const isValidCoin = require("../utils/is-valid-coin");

/**
 * @const {string} HEADERS request headers.
 */
const HEADERS = { Accept: "application/json" };

/**
 * Default Mercado Bitcoin API Wrapper Requests
 *
 * @param {string} method - API Mercado Bitcoin Method
 * @param {string} coin - Acronym for the digital currency: BCH, BTC, ETH, LTC, XRP.
 * @param {string} optionals - Optionals Request Data
 * @returns {Object}
 *
 * @throws {Error} If coin parameter is not a valid Acronym or the digital currency.
 */
const api = async (method = "", coin = "", optionals = "") => {
  if (!isValidCoin(coin)) {
    throw new Error(`${coin} is not a valid coin!`);
  }

  return new Promise((resolve, reject) => {
    fetch(`${API_BASE_URL}/${coin}/${method}/${optionals}`, {
      headers: HEADERS,
      method: "GET"
    })
      .then(response => resolve(response.json()))
      .catch(reject);
  });
};

module.exports = api;
