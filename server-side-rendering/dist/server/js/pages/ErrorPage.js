"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorPage = ErrorPage;

var _react = _interopRequireDefault(require("react"));

var _common = require("../styles/common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ErrorPage(props) {
  return _react.default.createElement("div", {
    className: _common.messageText
  }, _react.default.createElement("h2", null, "Woops, something went wrong"), _react.default.createElement("h4", null, "Error: ", props.error.message), _react.default.createElement("h6", null, "Requested page: ", props.location.pathname));
}