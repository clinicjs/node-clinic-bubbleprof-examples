"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _react = _interopRequireDefault(require("react"));

var _Stories = require("./js/components/Stories");

var _fetching = require("./js/data/fetching");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pageFactory(type) {
  function Page(props) {
    return _react.default.createElement("main", null, _react.default.createElement(_Stories.Stories, props));
  }

  Page.dataFetcher = async function (
    { page }, 
    queryString
  ) {
    return (0, _fetching.fetchData)(type, page, queryString);
  };

  return Page;
}

const routes = {
  '': pageFactory('top'),
  '/show': pageFactory('show'),
  '/ask': pageFactory('ask'),
  '/jobs': pageFactory('jobs')
};
exports.routes = routes;