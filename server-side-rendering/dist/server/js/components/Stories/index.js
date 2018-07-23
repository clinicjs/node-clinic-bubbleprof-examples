"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Stories = require("./Stories");

Object.keys(_Stories).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Stories[key];
    }
  });
});