require('mocha');
const { expect } = require('chai');
const { getDaySummary, getOrderBook, getTicker, getTrades } = require('../src');

describe('Public Api Tests', () => {
  describe('Test Get Coins Day Summary', () => {
    it('Should return Bitcoin Cash Summary of the day 2019/12/11', done => {
      getDaySummary('BCH', '2019/12/11').then(daySummary => {
        expect(daySummary).to.have.all.keys(
          'date',
          'opening',
          'closing',
          'lowest',
          'highest',
          'volume',
          'quantity',
          'amount',
          'avg_price',
        );
        expect(daySummary.date).to.be.equals('2019-12-11');
        done();
      });
    });
    it('Should return Litcoin Summary of the day 2020/04/04', done => {
      getDaySummary('LTC', '2020/04/04').then(daySummary => {
        expect(daySummary).to.have.all.keys(
          'date',
          'opening',
          'closing',
          'lowest',
          'highest',
          'volume',
          'quantity',
          'amount',
          'avg_price',
        );
        expect(daySummary.date).to.be.equals('2020-04-04');
        done();
      });
    });

    it('Should return Ripple Summary of the day 2018/02/03', done => {
      getDaySummary('XRP', '2019/02/03').then(daySummary => {
        expect(daySummary).to.have.all.keys(
          'date',
          'opening',
          'closing',
          'lowest',
          'highest',
          'volume',
          'quantity',
          'amount',
          'avg_price',
        );
        expect(daySummary.date).to.be.equals('2019-02-03');
        done();
      });
    });
  });

  describe('Test Get Coins Order Book', () => {
    it('Should return Bitcoin Order Book', done => {
      getOrderBook('BTC').then(orderBook => {
        expect(orderBook).to.be.an('object');
        expect(orderBook).to.have.keys('asks', 'bids');
        expect(orderBook.asks).to.be.an('array');
        expect(orderBook.bids).to.be.an('array');
        done();
      });
    });
    it('Should return Litecoin Order Book', done => {
      getOrderBook('LTC').then(orderBook => {
        expect(orderBook).to.be.an('object');
        expect(orderBook).to.have.keys('asks', 'bids');
        expect(orderBook.asks).to.be.an('array');
        expect(orderBook.bids).to.be.an('array');
        done();
      });
    });
    it('Should return Ripple Order Book', done => {
      getOrderBook('XRP').then(orderBook => {
        expect(orderBook).to.be.an('object');
        expect(orderBook).to.have.keys('asks', 'bids');
        expect(orderBook.asks).to.be.an('array');
        expect(orderBook.bids).to.be.an('array');
        done();
      });
    });
  });

  describe('Test Get Coins Ticket', () => {
    it('Should return Bitcoin Ticker', done => {
      getTicker('BTC').then(ticker => {
        expect(ticker).to.have.all.keys('high', 'low', 'vol', 'last', 'buy', 'sell', 'open', 'date');
        done();
      });
    });

    it('Should return Litecoin Ticker', done => {
      getTicker('LTC').then(ticker => {
        expect(ticker).to.have.all.keys('high', 'low', 'vol', 'last', 'buy', 'sell', 'open', 'date');
        done();
      });
    });

    it('Should return Ripple Ticker', done => {
      getTicker('XRP').then(ticker => {
        expect(ticker).to.have.all.keys('high', 'low', 'vol', 'last', 'buy', 'sell', 'open', 'date');
        done();
      });
    });
  });

  describe('Test Get Coins Trades', () => {
    it('Should return Bitcoin Trades', done => {
      getTrades('BTC').then(trades => {
        expect(trades).is.a('array');
        trades.every(trade => expect(trade).to.have.all.keys('amount', 'date', 'price', 'tid', 'type'));
        done();
      });
    });
    it('Should return Bitcoin Cash Trades', done => {
      getTrades('BCH').then(trades => {
        expect(trades).is.a('array');
        trades.every(trade => expect(trade).to.have.all.keys('amount', 'date', 'price', 'tid', 'type'));
        done();
      });
    });
    it('Should return Ethereum Trades', done => {
      getTrades('ETH').then(trades => {
        expect(trades).is.a('array');
        trades.every(trade => expect(trade).to.have.all.keys('amount', 'date', 'price', 'tid', 'type'));
        done();
      });
    });
  });
});
