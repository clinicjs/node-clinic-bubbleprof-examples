"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Stories = require("./Stories");

var _stories = require("./stories.mock");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders correctly when no data provided', () => {
  const props = {
    data: null,
    location: {
      pathname: '/'
    }
  };
  const test = (0, _enzyme.render)(_react.default.createElement(_Stories.Stories, props));
  expect(test).toMatchSnapshot();
});
it('renders correctly when empty data provided', () => {
  const props = {
    data: [],
    location: {
      pathname: '/'
    }
  };
  const test = (0, _enzyme.render)(_react.default.createElement(_Stories.Stories, props));
  expect(test).toMatchSnapshot();
});
it('renders correctly when data provided', () => {
  const props = {
    data: _stories.storiesMock,
    location: {
      pathname: '/'
    }
  };
  const test = (0, _enzyme.render)(_react.default.createElement(_Stories.Stories, props));
  expect(test).toMatchSnapshot();
});
it('renders correctly when data and page provided', () => {
  const props = {
    data: _stories.storiesMock,
    location: {
      pathname: '/foo/page/2'
    }
  };
  const test = (0, _enzyme.render)(_react.default.createElement(_Stories.Stories, props));
  expect(test).toMatchSnapshot();
});