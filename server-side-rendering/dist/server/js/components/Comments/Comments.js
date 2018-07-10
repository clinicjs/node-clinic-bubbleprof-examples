"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comments = Comments;

var _react = _interopRequireDefault(require("react"));

var _reactTimeago = _interopRequireDefault(require("react-timeago"));

var _typestyle = require("typestyle");

var _common = require("../../styles/common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getTitle = title => {
  return (title || '').split('in "').pop().replace(/"/g, '');
};

const styles = (0, _typestyle.stylesheet)({
  commentsList: {
    listStyle: 'none',
    margin: 0,
    padding: '1em',
    overflowX: 'hidden'
  },
  commentsListItem: {
    lineHeight: '10pt'
  },
  commentsListTitle: {
    display: 'block',
    margin: '0 0 1em'
  },
  commentsListContent: {
    color: 'black',
    display: 'block',
    margin: '1em 0 1em 1em',
    $nest: {
      p: {
        margin: `.5em 0`
      }
    }
  },
  noComments: {
    padding: '1em',
    textAlign: 'center'
  }
});

function Comments({
  data: comments
}) {
  if (comments) {
    if (comments.length === 0) {
      return _react.default.createElement("div", {
        className: styles.noComments
      }, "No further comments to display.");
    }

    return _react.default.createElement("ul", {
      className: styles.commentsList
    }, comments.map((comment, index) => _react.default.createElement("li", {
      className: styles.commentsListItem,
      key: `${comment.isoDate}-${index}`
    }, _react.default.createElement("span", {
      className: styles.commentsListTitle
    }, _react.default.createElement(_reactTimeago.default, {
      date: comment.isoDate
    }), " by ", comment.creator, " on ", getTitle(comment.title)), _react.default.createElement("span", {
      className: styles.commentsListContent,
      dangerouslySetInnerHTML: {
        __html: comment.content
      }
    }))));
  }

  return _react.default.createElement("ul", {
    className: styles.commentsList
  }, Array(10).fill({}).map((_, index) => _react.default.createElement("li", {
    className: (0, _typestyle.classes)(styles.commentsListItem, _common.loadingAnimation),
    key: `placeholder-${index}`
  }, _react.default.createElement("span", {
    className: (0, _typestyle.classes)(styles.commentsListTitle, _common.placeholder)
  }, "time ago by placeholder"), _react.default.createElement("span", {
    className: (0, _typestyle.classes)(styles.commentsListContent, _common.placeholder)
  }, "placeholder comments"), _react.default.createElement("span", {
    className: (0, _typestyle.classes)(styles.commentsListContent, _common.placeholder)
  }, "placeholder comments"), _react.default.createElement("span", {
    className: (0, _typestyle.classes)(styles.commentsListContent, _common.placeholder)
  }, "placeholder comments"))));
}