# Mercado Bitcoin JS :currency_exchange:

> Promise-based wrapper for Mercado Bitcoin API.

[![GitHub issues][issues-image]][issues-url]
[![NPM Version][npm-version]][npm-url]
[![License][license-image]][license-url]

Promise-based wrapper to easily make [Mercado Bitcoin](https://www.mercadobitcoin.com.br/) API requests.

## Features

- Supports all methods from [Mercado Bitcoin Data API](https://www.mercadobitcoin.com.br/api-doc/)
- Supports the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API

## Installation

Using npm:

```bash
yarn add mercadobitcoin-js
```

Using npm:

```bash
npm install mercadobitcoin-js
```

## Running Tests

Using yarn:

```bash
yarn test
```

## Usage

```javascript
const mercadoBitcoin = require("mercadobitcoin-js");

// Get information with the last 24 hours of Bitcoin trading in Mercado Bitcoin.
const btcTicker = await mercadoBitcoin.getTicker("BTC");

// Get order book of Litecoin in Mercado Bitcoin.
const ltcOrderBook = await mercadoBitcoin.getOrderBook("LTC");

// Get history of Ripple Trades in Mercado Bitcoin.
const xrpTrades = await mercadoBitcoin.getTrades("XRP");

// Get the daily summary of Ethereum trades made in Mercado Bitcoin.
const ethDaySummary = await mercadoBitcoin.getDaySummary("ETH", "2020/04/05");
```

## Usage examples

### Get Ethereum Ticker

```javascript
const { getTicker } = require("mercadobitcoin-js");

(async () => {
  const ethereumTicker = await getTicker("ETH");
  console.log(ethereumTicker);
})();
```

Output:

```javascript
{
  high: '754.00000000',
  low: '747.42038000',
  vol: '196.18673392',
  last: '751.01320000',
  buy: '751.01385000',
  sell: '753.73999000',
  open: '752.79999000',
  date: 1586145601
}
```

### Get Bitcoin Trades

```javascript
const { getTrades } = require("mercadobitcoin-js");

(async () => {
  const bitcoinTrades = await getTrades("BTC");
  console.log(bitcoinTrades);
})();
```

Output:

```javascript
[
    {
      tid: 5956493,
      date: 1586117823,
      type: 'buy',
      price: 35589.98,
      amount: 0.01023184
    },
    {
      tid: 5956494,
      date: 1586117823,
      type: 'buy',
      price: 35590,
      amount: 0.00931522
    },
    ...
];
```

## Release History

- 1.0.1:
  - Syntax changes.
- 1.0.0:
  - Supports Promise and async/await
  - Supports all Mercado Bitcoin Data API methods

## Meta

Rafael Laurindo – [@rafaellaurindo](https://linkedin.com/in/rafaellaurindo) – eu@rafaellaurindo.dev

Distributed under the MIT license. See [LICENSE](https://github.com/rafaellaurindo/mercadobitcoin-js/blob/master/LICENSE) for more information.

[https://rafaellaurindo.dev](https://rafaellaurindo.dev)

## Donations are welcome!

If this project have helped you in any way, consider buying me a :coffee:

With Paypal:

<a href='https://ko-fi.com/M4M61SK64' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi3.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

Or with Bitcoin: 1McMwihX3D2gwQqo3F9ez9namd2AB7U53B

## Contributing

1. Fork it (<https://github.com/rafaellaurindo/mercadobitcoin-js/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

[issues-image]: https://img.shields.io/github/issues/rafaellaurindo/mercadobitcoin-js.svg
[issues-url]: https://github.com/rafaellaurindo/mercadobitcoin-js/issues
[npm-version]: https://img.shields.io/npm/v/mercadobitcoin-js.svg
[npm-url]: https://npmjs.org/package/mercadobitcoin-js
[license-image]: https://img.shields.io/github/license/rafaellaurindo/mercadobitcoin-js.svg
[license-url]: https://github.com/rafaellaurindo/mercadobitcoin-js/blob/master/LICENSE
