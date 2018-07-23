"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppShell = AppShell;

var _react = _interopRequireWildcard(require("react"));

var _reactRouter = require("react-router");

var _reactRouterDom = require("react-router-dom");

var _routes = require("../routes");

var _Header = _interopRequireDefault(require("./components/Header"));

var _RouteWithData = require("./components/RouteWithData");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function AppShell({
  history,
  ssrPreloading
}) {
  const routesConfig = Object.entries(_routes.routes).reduce((accu, [path, component]) => {
    return accu.concat({
      path: path || '/',
      component,
      ssrPreloading,
      exact: true
    }, {
      path: `${path}/page/:page`,
      component,
      ssrPreloading,
      exact: true
    });
  }, []);

  const Contents = ({
    location
  }) => {
    return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_Header.default, {
      location: location
    }), _react.default.createElement(_reactRouter.Switch, {
      location: location
    }, routesConfig.map((routeProps, i) => _react.default.createElement(_RouteWithData.RouteWithData, _extends({
      key: i
    }, routeProps)))));
  };

  const SelectedRouter = typeof window === 'undefined' ? _reactRouter.Router : _reactRouterDom.BrowserRouter;
  return _react.default.createElement(SelectedRouter, {
    history: history
  }, _react.default.createElement(_reactRouterDom.Route, {
    render: ({
      location
    }) => _react.default.createElement(Contents, {
      location: location
    })
  }));
}