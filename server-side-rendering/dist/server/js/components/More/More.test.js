"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _reactRouterDom = require("react-router-dom");

var _More = require("./More");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders correctly when location is "/"', () => {
  const props = {
    location: {
      pathname: '/'
    },
    data: Array(30)
  };
  const test = (0, _enzyme.render)(_react.default.createElement(_reactRouterDom.MemoryRouter, {
    initialEntries: [props.location.pathname]
  }, _react.default.createElement(_More.More, props)));
  expect(test).toMatchSnapshot();
});
it('renders correctly when location is "/page/5"', () => {
  const props = {
    location: {
      pathname: '/page/5'
    },
    data: Array(30)
  };
  const test = (0, _enzyme.render)(_react.default.createElement(_reactRouterDom.MemoryRouter, {
    initialEntries: [props.location.pathname]
  }, _react.default.createElement(_More.More, props)));
  expect(test).toMatchSnapshot();
});
it('renders correctly when location is "/newcomments"', () => {
  const props = {
    location: {
      pathname: '/newcomments'
    },
    data: Array(30)
  };
  const test = (0, _enzyme.render)(_react.default.createElement(_reactRouterDom.MemoryRouter, {
    initialEntries: [props.location.pathname]
  }, _react.default.createElement(_More.More, props)));
  expect(test).toMatchSnapshot();
});
it('renders correctly when location is "/newcomments/page/2"', () => {
  const props = {
    location: {
      pathname: '/newcomments/page/2'
    },
    data: Array(30)
  };
  const test = (0, _enzyme.render)(_react.default.createElement(_reactRouterDom.MemoryRouter, {
    initialEntries: [props.location.pathname]
  }, _react.default.createElement(_More.More, props)));
  expect(test).toMatchSnapshot();
});
it('renders correctly when end of list reached', () => {
  const props = {
    location: {
      pathname: '/newcomments/page/2'
    },
    data: Array(29)
  };
  const test = (0, _enzyme.render)(_react.default.createElement(_reactRouterDom.MemoryRouter, {
    initialEntries: [props.location.pathname]
  }, _react.default.createElement(_More.More, props)));
  expect(test).toMatchSnapshot();
});