"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _typestyle = require("typestyle");

var _common = require("../../styles/common");

var _Logo = require("../Logo");

var _Glyphs = require("../Glyphs");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = (0, _typestyle.stylesheet)({
  navigation: _objectSpread({
    zIndex: 1,
    // set stacking context for child side menu
    padding: '1em 1em 0 1em',
    display: 'grid',
    gridTemplateColumns: `65px auto 48px`,
    background: _common.colors.LIGHTEST_GRAY,
    position: 'sticky',
    top: 0,
    alignItems: 'center'
  }, (0, _typestyle.media)({
    minWidth: _common.ergonomics.LAP.BEGINNING
  }, {
    gridTemplateColumns: '65px 170px auto'
  })),
  navigationLogo: {
    gridColumnStart: '1',
    gridColumnEnd: '2',
    fontWeight: 300,
    fontSize: '1.33em',
    color: _common.colors.NEARFORM_BRAND_MAIN
  },
  navigationNav: {
    gridColumnStart: '3',
    gridColumnEnd: '4',
    textAlign: 'right'
  },
  navigationHamburger: _objectSpread({
    gridColumnStart: '3',
    gridColumnEnd: '4',
    cursor: 'pointer'
  }, (0, _typestyle.media)({
    minWidth: _common.ergonomics.LAP.BEGINNING
  }, {
    display: 'none'
  })),
  navigationClose: {
    gridColumnStart: '2',
    gridColumnEnd: '3',
    cursor: 'pointer'
  },
  navigationSide: {
    display: 'grid',
    gridTemplateColumns: 'auto 57px',
    height: '100%',
    width: '0',
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: _common.colors.NEARFORM_BRAND_ACCENT_1,
    background: `linear-gradient(
      142.5deg,
      ${_common.colors.NEARFORM_BRAND_ACCENT_1} 0%,
      ${_common.colors.NEARFORM_BRAND_ACCENT_1} 50%,
      ${_common.colors.NEARFORM_BRAND_ACCENT_2} 50%,
      ${_common.colors.NEARFORM_BRAND_ACCENT_2} 100%
    )`,
    overflowX: 'hidden',
    transition: 'all .3s cubic-bezier(.25, .8, .25, 1)',
    paddingTop: '1.35em'
  },
  navigationSideVisible: {
    width: '100%'
  },
  navigationItem: _objectSpread({
    fontSize: '1.25em',
    marginBottom: '2.5em',
    whiteSpace: 'nowrap'
  }, (0, _typestyle.media)({
    minWidth: _common.ergonomics.LAP.BEGINNING
  }, {
    padding: '.5em',
    fontSize: '1em',
    color: 'black'
  }), {
    a: {
      color: 'white'
    }
  }),
  navigationMobile: {
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '1',
    listStyleType: 'none'
  },
  navigationDesktop: _objectSpread({
    textAlign: 'right'
  }, (0, _typestyle.media)({
    minWidth: _common.ergonomics.PALM.BEGINNING,
    maxWidth: _common.ergonomics.PALM.END
  }, {
    display: 'none'
  })),
  nearFormLogo: {
    width: '170px'
  }
});

function checkRootRouteActive(match, location) {
  return location.pathname === '/' || location.pathname.split('/')[1] === 'page';
}

class Navigation extends _react.Component {
  constructor(props) {
    super(props);
    this.toggleNavigation = this.toggleNavigation.bind(this);
    this.state = {
      navigationVisible: false
    };
  }

  toggleNavigation() {
    this.setState(() => {
      return {
        navigationVisible: !this.state.navigationVisible
      };
    });
  }

  render() {
    const {
      navigationVisible
    } = this.state;
    return _react.default.createElement("heading", {
      className: styles.navigation
    }, _react.default.createElement(_reactRouterDom.Link, {
      to: "/",
      className: styles.navigationLogo
    }, _react.default.createElement(_Logo.Logo, null)), _react.default.createElement("a", {
      "aria-label": "nearForm Website",
      className: styles.nearFormLogo,
      href: "https://www.nearform.com/blog"
    }, _react.default.createElement(_Glyphs.NearFormLogo, null)), _react.default.createElement("div", {
      className: styles.navigationHamburger,
      onClick: this.toggleNavigation,
      "data-auto": "navigationHamburger"
    }, _react.default.createElement(_Glyphs.HumburgerIcon, null)), _react.default.createElement("div", {
      className: navigationVisible ? (0, _typestyle.classes)(styles.navigationSide, styles.navigationSideVisible) : styles.navigationSide
    }, _react.default.createElement("div", {
      className: styles.navigationClose,
      onClick: this.toggleNavigation,
      "data-auto": "navigationClose"
    }, _react.default.createElement(_Glyphs.CloseIcon, null)), _react.default.createElement("ul", {
      className: styles.navigationMobile
    }, _react.default.createElement("li", {
      className: styles.navigationItem,
      "data-auto": "mobileTopStoriesLink"
    }, _react.default.createElement(_reactRouterDom.NavLink, {
      onClick: this.toggleNavigation,
      to: "/",
      isActive: checkRootRouteActive
    }, "Top Stories")), _react.default.createElement("li", {
      className: styles.navigationItem
    }, _react.default.createElement(_reactRouterDom.NavLink, {
      onClick: this.toggleNavigation,
      to: "/newest"
    }, "New Stories")), _react.default.createElement("li", {
      className: styles.navigationItem
    }, _react.default.createElement(_reactRouterDom.NavLink, {
      onClick: this.toggleNavigation,
      to: "/newcomments"
    }, "Comments")), _react.default.createElement("li", {
      className: styles.navigationItem
    }, _react.default.createElement(_reactRouterDom.NavLink, {
      onClick: this.toggleNavigation,
      to: "/show"
    }, "Show")), _react.default.createElement("li", {
      className: styles.navigationItem
    }, _react.default.createElement(_reactRouterDom.NavLink, {
      onClick: this.toggleNavigation,
      to: "/ask"
    }, "Ask")), _react.default.createElement("li", {
      className: styles.navigationItem
    }, _react.default.createElement(_reactRouterDom.NavLink, {
      onClick: this.toggleNavigation,
      to: "/jobs"
    }, "Jobs")), _react.default.createElement("li", {
      className: styles.navigationItem
    }, _react.default.createElement("a", {
      href: "https://www.nearform.com/blog"
    }, "About nearForm")))), _react.default.createElement("nav", {
      className: styles.navigationDesktop
    }, _react.default.createElement(_reactRouterDom.NavLink, {
      className: styles.navigationItem,
      to: "/",
      isActive: checkRootRouteActive
    }, "Top Stories"), _react.default.createElement(_reactRouterDom.NavLink, {
      className: styles.navigationItem,
      to: "/newest"
    }, "New Stories"), _react.default.createElement(_reactRouterDom.NavLink, {
      className: styles.navigationItem,
      to: "/newcomments"
    }, "Comments"), _react.default.createElement(_reactRouterDom.NavLink, {
      className: styles.navigationItem,
      to: "/show"
    }, "Show"), _react.default.createElement(_reactRouterDom.NavLink, {
      className: styles.navigationItem,
      to: "/ask"
    }, "Ask"), _react.default.createElement(_reactRouterDom.NavLink, {
      className: styles.navigationItem,
      to: "/jobs"
    }, "Jobs")));
  }

}

var _default = Navigation;
exports.default = _default;