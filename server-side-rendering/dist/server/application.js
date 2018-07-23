"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _AppShell = require("./js/AppShell");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Require assets so that they are included in the bundle and in the precache
require.context('./images', true);

document.addEventListener('DOMContentLoaded', function () {
  // Rehydrate the application
  (0, _reactDom.hydrate)(_react.default.createElement(_AppShell.AppShell, {
    ssrPreloading: window.__ssrPreloading
  }), document.getElementById('root')); // Install the service worker, if supported

  if (!navigator || !navigator.serviceWorker) return;
  navigator.serviceWorker.register('/sw.js').catch(function (err) {
    console.log(`ServiceWorker registration failed: ${err}`);
  });
});