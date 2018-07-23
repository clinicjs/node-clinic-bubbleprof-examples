"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _reactRouterDom = require("react-router-dom");

var _Header = _interopRequireDefault(require("./Header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders correctly when location is "/"', () => {
  const props = {
    location: {
      pathname: '/'
    }
  };
  const test = (0, _enzyme.render)(_react.default.createElement(_reactRouterDom.MemoryRouter, {
    initialEntries: [props.location.pathname]
  }, _react.default.createElement(_Header.default, props)));
  expect(test).toMatchSnapshot();
});
it('renders correctly when location is "/newcomments"', () => {
  const props = {
    location: {
      pathname: '/newcomments'
    }
  };
  const test = (0, _enzyme.render)(_react.default.createElement(_reactRouterDom.MemoryRouter, {
    initialEntries: [props.location.pathname]
  }, _react.default.createElement(_Header.default, props)));
  expect(test).toMatchSnapshot();
});
it('opens and closes mobile nav menu', () => {
  const props = {
    location: {
      pathname: '/'
    }
  };
  const test = (0, _enzyme.shallow)(_react.default.createElement(_Header.default, props));
  const navigationHamburger = test.find('[data-auto="navigationHamburger"]');
  const navigationClose = test.find('[data-auto="navigationClose"]');
  expect(test.state().navigationVisible).toEqual(false);
  navigationHamburger.simulate('click');
  expect(test.state().navigationVisible).toEqual(true);
  navigationClose.simulate('click');
  expect(test.state().navigationVisible).toEqual(false);
});
it('toggles navigation when clicking mobile nav item', () => {
  const props = {
    location: {
      pathname: '/'
    }
  };
  const test = (0, _enzyme.shallow)(_react.default.createElement(_Header.default, props));
  const navigationHamburger = test.find('[data-auto="navigationHamburger"]');
  const mobileTopStoriesLink = test.find('[data-auto="mobileTopStoriesLink"]').find(_reactRouterDom.NavLink);
  expect(test.state().navigationVisible).toEqual(false);
  navigationHamburger.simulate('click');
  expect(test.state().navigationVisible).toEqual(true);
  mobileTopStoriesLink.simulate('click');
  expect(test.state().navigationVisible).toEqual(false);
});