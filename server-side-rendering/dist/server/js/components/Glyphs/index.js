"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Glyphs = require("./Glyphs");

Object.keys(_Glyphs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Glyphs[key];
    }
  });
});