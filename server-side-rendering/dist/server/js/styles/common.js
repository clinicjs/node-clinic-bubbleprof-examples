"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debugClassName = debugClassName;
exports.loadingAnimation = exports.placeholder = exports.messageText = exports.ergonomics = exports.colors = void 0;

var _typestyle = require("typestyle");

var _constants = _interopRequireDefault(require("./constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const colors = _constants.default.colors;
exports.colors = colors;
const ergonomics = _constants.default.ergonomics;
exports.ergonomics = ergonomics;

function debugClassName($debugName, force = false) {
  return force === true || process.env.NODE_ENV !== 'production' ? {
    $debugName
  } : {};
}

const messageText = (0, _typestyle.style)(debugClassName('message-text'), {
  padding: '1em',
  textAlign: 'center'
});
exports.messageText = messageText;
const placeholder = (0, _typestyle.style)(debugClassName('placeholder'), {
  margin: 0,
  padding: 0,

  /*
   * the '!important' here is necessary because these styles are used to
   * override already defined styles and we can't rely on the cascade to ensure
   * one class is applied before the other
   */
  color: `${_constants.default.colors.LIGHT_GRAY} !important`,
  background: `${_constants.default.colors.LIGHT_GRAY} !important`
});
exports.placeholder = placeholder;
const loadingAnimation = (0, _typestyle.style)(debugClassName('loading'), {
  $nest: {
    '&::after': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, rgba(0,0,0,0), rgba(255,255,255,0.15), rgba(0,0,0,0))',
      transform: 'translateX(-100%)',
      animationName: (0, _typestyle.keyframes)({
        '100%': {
          transform: 'translateX(100%)'
        }
      }),
      animationDuration: '1.5s',
      animationIterationCount: 'infinite'
    }
  }
});
exports.loadingAnimation = loadingAnimation;