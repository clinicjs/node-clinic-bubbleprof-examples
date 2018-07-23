"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderPage = renderPage;

var _history = require("history");

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _typestyle = require("typestyle");

var _AppShell = require("./js/AppShell");

var _common = require("./js/styles/common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const globalStyles = (0, _typestyle.createTypeStyle)(); // Instantiate a different typestyle sheet since global styles won't be regenerated from the client

globalStyles.cssRule('*', {
  lineHeight: 1.4
}); // This sets the value of 1rem

globalStyles.cssRule('html, body', {
  fontSize: '16px',
  padding: 0,
  margin: 0
});
globalStyles.cssRule('body', {
  color: _common.colors.NEARFORM_BRAND_ACCENT_2,
  fontFamily: 'Verdana, Geneva, sans-serif'
});
globalStyles.cssRule('a', {
  textDecoration: 'none',
  $nest: {
    '&:hover, &:visited': {
      transition: 'color .1s ease-out'
    }
  }
});
globalStyles.cssRule('.active', {
  fontWeight: '600'
});

async function renderPage(request, reply) {
  // Prepare the history
  const history = (0, _history.createMemoryHistory)({
    initialEntries: [request.req.url]
  }); // Preload component data, if anything is defined
  let ssrPreloading = {};

  try {
    if (reply.context.config.component && typeof reply.context.config.component.dataFetcher === 'function') {
      ssrPreloading = {
        success: true,
        payload: await reply.context.config.component.dataFetcher(request.params, request.query)
      };
    }
  } catch (e) {
    ssrPreloading = {
      success: false,
      payload: e
    };
  } // Render the application separately in order to support typestyle

  const app = (0, _server.renderToString)(_react.default.createElement(_AppShell.AppShell, {
    history: history,
    ssrPreloading: ssrPreloading
  })); // Return the rendered page

  reply.type('text/html');
  return (0, _server.renderToString)(_react.default.createElement("html", {
    lang: "en"
  }, _react.default.createElement("head", null, _react.default.createElement("title", null, "Hacker News"), _react.default.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge"
  }), _react.default.createElement("meta", {
    charSet: "utf8"
  }), _react.default.createElement("meta", {
    name: "description",
    content: "Hacker News PWA"
  }), _react.default.createElement("meta", {
    name: "keywords",
    content: "hackernews, pwa"
  }), _react.default.createElement("meta", {
    name: "author",
    content: "nearForm"
  }), _react.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), _react.default.createElement("meta", {
    name: "apple-mobile-web-app-capable",
    content: "yes"
  }), _react.default.createElement("meta", {
    name: "theme-color",
    content: _common.colors.NEARFORM_BRAND_MAIN
  }), _react.default.createElement("link", {
    rel: "icon",
    href: "/images/favicon.ico",
    sizes: "32x32"
  }), _react.default.createElement("link", {
    rel: "shortcut icon",
    href: "images/favicon.ico",
    sizes: "196x196"
  }), _react.default.createElement("link", {
    rel: "manifest",
    href: "/manifest.json"
  }), _react.default.createElement("style", null, globalStyles.getStyles()), _react.default.createElement("style", null, (0, _typestyle.getStyles)())), _react.default.createElement("body", null, _react.default.createElement("div", {
    id: "root",
    dangerouslySetInnerHTML: {
      __html: app
    }
  }), _react.default.createElement("script", {
    defer: true,
    type: "text/javascript",
    dangerouslySetInnerHTML: {
      __html: `window.__ssrPreloading = ${JSON.stringify(ssrPreloading)}`
    }
  }), _react.default.createElement("script", {
    defer: true,
    type: "text/javascript",
    src: "/app.js"
  }))));
}