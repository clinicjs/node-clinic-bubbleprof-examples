"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Glyphs = require("./Glyphs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders NearFormLogo correctly', () => {
  const test = (0, _enzyme.render)(_react.default.createElement(_Glyphs.NearFormLogo, null));
  expect(test).toMatchSnapshot();
});
it('renders HumburgerIcon correctly', () => {
  const test = (0, _enzyme.render)(_react.default.createElement(_Glyphs.HumburgerIcon, null));
  expect(test).toMatchSnapshot();
});
it('renders CloseIcon correctly', () => {
  const test = (0, _enzyme.render)(_react.default.createElement(_Glyphs.CloseIcon, null));
  expect(test).toMatchSnapshot();
});