"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RouteWithData = require("./RouteWithData");

Object.keys(_RouteWithData).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _RouteWithData[key];
    }
  });
});