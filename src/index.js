const api = require('./services/api');

module.exports = {
  /**
   * Get the daily summary of trades made.
   *
   * @param {string} coin Acronym for the digital currency: BCH, BTC, ETH, LTC, XRP.
   * @param {string} day Day in format: YYYY/MM/DD. Eg.: 2020/04/05. Defaults: today
   * @returns {Promise}
   */
  getDaySummary: async (coin, day = '') => {
    if (!day) {
      day = new Date()
        .toLocaleDateString('pt-BR')
        .split('/')
        .reverse()
        .join('/');
    }
    return await api('day-summary', coin, day);
  },

  /**
   * Get order book of a cryptocurrency.
   *
   * @param {string} coin Acronym for the digital currency: BCH, BTC, ETH, LTC, XRP.
   * @returns {Promise}
   */
  getOrderBook: async coin => await api('orderbook', coin),

  /**
   * Get information with the last 24 hours of trading of a cryptocurrency.
   *
   * @param {string} coin Acronym for the digital currency: BCH, BTC, ETH, LTC, XRP.
   * @returns {Promise} ticker
   */
  getTicker: async coin => {
    const { ticker } = await api('ticker', coin);
    return ticker;
  },

  /**
   * Get History of negotiations of a cryptocurrency.
   *
   * @param {string} coin Acronym for the digital currency: BCH, BTC, ETH, LTC, XRP.
   * @returns {Promise}
   */
  getTrades: async coin => await api('trades', coin),
};
