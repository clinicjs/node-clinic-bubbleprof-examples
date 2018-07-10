"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _More = require("./More");

Object.keys(_More).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _More[key];
    }
  });
});