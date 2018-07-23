"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OfflinePage = OfflinePage;

var _react = _interopRequireDefault(require("react"));

var _common = require("../styles/common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OfflinePage() {
  return _react.default.createElement("div", {
    className: _common.messageText
  }, "It looks like you're offine.");
}