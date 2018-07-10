"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Logo = require("./Logo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders Logo correctly', () => {
  const test = (0, _enzyme.render)(_react.default.createElement(_Logo.Logo, null));
  expect(test).toMatchSnapshot();
});