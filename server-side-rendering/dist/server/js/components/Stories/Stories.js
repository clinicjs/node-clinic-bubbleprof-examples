"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stories = Stories;

var _react = _interopRequireDefault(require("react"));

var _typestyle = require("typestyle");

var _common = require("../../styles/common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const calculateStartingNumber = pathname => {
  let currentPage = parseInt(pathname.split('page/')[1]);
  if (!Number.isInteger(currentPage)) return 1;
  return (currentPage - 1) * 30 + 1;
};

const styles = (0, _typestyle.stylesheet)({
  storiesList: _objectSpread({
    display: 'grid',
    gridTemplateColumns: '100%',
    listStyleType: 'none',
    margin: 0,
    padding: 0
  }, (0, _typestyle.media)({
    minWidth: _common.ergonomics.LAP.BEGINNING,
    maxWidth: _common.ergonomics.LAP.END
  }, {
    gridTemplateColumns: 'repeat(2, 50%)'
  }).$nest, (0, _typestyle.media)({
    minWidth: _common.ergonomics.DESK.BEGINNING
  }, {
    gridTemplateColumns: 'repeat(3, 33.333%)'
  }).$nest),
  storiesListItem: _objectSpread({
    padding: '1em 0 0 0',
    display: 'grid',
    gridRowGap: '.5em',
    gridTemplateColumns: '53px',
    backgroundImage: `linear-gradient(0deg, white 97%, ${_common.colors.LIGHT_GRAY} 100%)`
  }, (0, _typestyle.media)({
    minWidth: _common.ergonomics.LAP.BEGINNING
  }, {
    borderRight: `1px solid ${_common.colors.LIGHT_GRAY}`
  })),
  storiesListIndex: {
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '1',
    gridRowEnd: '3',
    background: _common.colors.NEARFORM_BRAND_MAIN,
    height: 40,
    textAlign: 'center',
    paddingTop: '1em',
    color: 'white'
  },
  storiesListTitle: {
    padding: '0 1em 1em 1em',
    gridColumnStart: '2',
    gridColumnEnd: '3',
    gridRowStart: '1',
    height: '4em',
    gridRowEnd: '2',
    $nest: {
      a: {
        color: 'black'
      }
    }
  },
  storiesListTitlePlaceholder: {
    width: '66%'
  },
  storiesListByLine: {
    padding: '.5em .5em .5em 1.5em',
    gridColumnStart: '1',
    gridColumnEnd: '3',
    gridRowStart: '2',
    gridRowEnd: '3',
    margin: '2em 0 0 0',
    background: _common.colors.LIGHTEST_GRAY
  },
  noStories: {
    padding: '1em',
    textAlign: 'center'
  }
});

function Stories({
  data: stories,
  location
}) {
  if (stories) {
    if (stories.length === 0) {
      return _react.default.createElement("div", {
        className: styles.noStories
      }, "No further items to display.");
    }

    const startingNumber = calculateStartingNumber(location.pathname);
    return _react.default.createElement("ol", {
      className: styles.storiesList,
      start: startingNumber
    }, stories.filter(Boolean).map((story, index) => {
      const count = index === 0 ? startingNumber : index + startingNumber;
      return _react.default.createElement("li", {
        className: styles.storiesListItem,
        key: story.id
      }, _react.default.createElement("div", {
        className: styles.storiesListIndex
      }, count), _react.default.createElement("div", {
        className: styles.storiesListTitle
      }, _react.default.createElement("a", {
        href: story.url
      }, story.title)), _react.default.createElement("div", {
        className: styles.storiesListByLine,
        suppressHydrationWarning: true
      }, story.score, " points by ", story.by.id));
    }));
  }

  return _react.default.createElement("ol", {
    className: styles.storiesList
  }, Array(20).fill({}).map((_, index) => _react.default.createElement("li", {
    className: (0, _typestyle.classes)(styles.storiesListItem, _common.loadingAnimation),
    key: index
  }, _react.default.createElement("div", {
    className: (0, _typestyle.classes)(styles.storiesListIndex, _common.placeholder)
  }, index + 1), _react.default.createElement("div", {
    className: (0, _typestyle.classes)(styles.storiesListTitle, styles.storiesListTitlePlaceholder)
  }, _react.default.createElement("p", {
    className: _common.placeholder
  }, "placeholder title")), _react.default.createElement("div", {
    className: styles.storiesListByLine
  }, _react.default.createElement("p", {
    className: _common.placeholder
  }, "n points by placeholder")))));
}