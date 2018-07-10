"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Comments = require("./Comments");

var _comments = require("./comments.mock");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('react-timeago', () => () => _react.default.createElement("time", null, "'MOCK_TIME_AGO'"));
it('renders correctly when no data provided', () => {
  const props = {
    data: null
  };
  const test = (0, _enzyme.render)(_react.default.createElement(_Comments.Comments, props));
  expect(test).toMatchSnapshot();
});
it('renders correctly when empty data provided', () => {
  const props = {
    data: []
  };
  const test = (0, _enzyme.render)(_react.default.createElement(_Comments.Comments, props));
  expect(test).toMatchSnapshot();
});
it('renders correctly when data provided', () => {
  const props = {
    data: _comments.commentsMock
  };
  const test = (0, _enzyme.render)(_react.default.createElement(_Comments.Comments, props));
  expect(test).toMatchSnapshot();
});