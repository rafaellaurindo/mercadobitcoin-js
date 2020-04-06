const { VALID_COINS } = require("../constants");

/**
 * Check if Coin is a Valid Coin
 *
 * @param {string} coin
 * @returns {boolean} - Is valid coin
 */
const isValidCoin = coin => {
  return typeof coin === "string" && VALID_COINS.includes(coin.toUpperCase());
};

module.exports = isValidCoin;
