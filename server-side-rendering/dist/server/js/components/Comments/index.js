"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Comments = require("./Comments");

Object.keys(_Comments).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Comments[key];
    }
  });
});