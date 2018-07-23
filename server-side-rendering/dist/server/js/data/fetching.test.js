"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const {
  fetchData
} = require('./fetching');

describe('fetchData', () => {
  let mockedSuccess = true;
  let mockedPayload = {};

  let mockedResponse = _objectSpread({
    ok: mockedSuccess
  }, mockedPayload, {
    json: function () {
      return mockedPayload;
    }
  });

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve(mockedResponse);
    });
  });
  it('returns response json', async () => {
    mockedSuccess = true;
    mockedPayload = {
      foo: 'bar'
    };
    await expect(fetchData()).resolves.toEqual(mockedPayload);
  });
  it('throws if response error', async () => {
    mockedSuccess = false;

    try {
      await expect(fetchData());
    } catch (e) {
      expect(e.code).toEqual('HTTP_ERROR');
    }
  });
  it('calls api with appropriate url', async () => {
    mockedSuccess = true;
    mockedPayload = {
      foo: 'bar'
    };
    await fetchData();
    expect(global.fetch).toHaveBeenCalledWith('/api/stories');
    await fetchData('foo');
    expect(global.fetch).toHaveBeenCalledWith('/api/stories?filter=foo');
    await fetchData('foo', 42);
    expect(global.fetch).toHaveBeenCalledWith('/api/stories?filter=foo&page=42');
    await fetchData('comments');
    expect(global.fetch).toHaveBeenCalledWith('/api/comments');
    await fetchData('comments', 99);
    expect(global.fetch).toHaveBeenCalledWith('/api/comments?page=99');
  });
});