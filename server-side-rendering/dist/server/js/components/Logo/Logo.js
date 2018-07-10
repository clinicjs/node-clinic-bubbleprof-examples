"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logo = Logo;

var _react = _interopRequireDefault(require("react"));

var _typestyle = require("typestyle");

var _common = require("../../styles/common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = (0, _typestyle.stylesheet)({
  logo: {
    border: `2px solid ${_common.colors.NEARFORM_BRAND_ACCENT_2}`,
    width: 30,
    padding: '.5em',
    color: _common.colors.NEARFORM_BRAND_ACCENT_2
  }
});

function Logo() {
  return _react.default.createElement("div", {
    className: styles.logo
  }, "HN");
}