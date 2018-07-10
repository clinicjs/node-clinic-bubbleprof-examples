"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _reactRouterDom = require("react-router-dom");

var _RouteWithData = require("./RouteWithData");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = {
  history: new _reactRouterDom.MemoryRouter().history,
  route: {
    location: {},
    match: {}
  }
};

const createContext = () => ({
  context: {
    router
  },
  childContextTypes: () => ({
    router: {}
  })
});

const MockComp = ({
  location,
  data
}) => _react.default.createElement("div", null, _react.default.createElement("span", null, "location.pathname: ", location.pathname), _react.default.createElement("span", null, "data: ", data));

beforeEach(() => {
  MockComp.dataFetcher = jest.fn().mockImplementation(() => {
    return Promise.resolve(42);
  });
});
it('renders child correctly', () => {
  const props = {
    component: MockComp,
    ssrPreloading: {
      success: true,
      payload: 'MOCK_PAYLOAD'
    },
    location: {
      pathname: '/'
    }
  };
  const test = (0, _enzyme.render)(_react.default.createElement(_reactRouterDom.MemoryRouter, {
    initialEntries: [props.location.pathname]
  }, _react.default.createElement(_RouteWithData.RouteWithData, props)));
  expect(test).toMatchSnapshot();
});
it('renders error page when preloaded has error', () => {
  const props = {
    component: MockComp,
    ssrPreloading: {
      success: false,
      payload: 'MOCK_PAYLOAD'
    },
    location: {
      pathname: '/'
    }
  };
  const test = (0, _enzyme.render)(_react.default.createElement(_reactRouterDom.MemoryRouter, {
    initialEntries: [props.location.pathname]
  }, _react.default.createElement(_RouteWithData.RouteWithData, props)));
  expect(test).toMatchSnapshot();
});
describe('loadData', () => {
  let test = null;
  beforeEach(() => {
    const props = {
      component: MockComp,
      ssrPreloading: {
        success: true,
        payload: 'MOCK_PAYLOAD'
      },
      location: {
        pathname: '/'
      }
    };
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_reactRouterDom.MemoryRouter, {
      initialEntries: [props.location.pathname]
    }, _react.default.createElement(_RouteWithData.RouteWithData, props)));
    test = wrapper.find(_RouteWithData.RouteWithData);
  });
  it('calls child component\'s dataFetcher', async () => {
    expect(MockComp.dataFetcher).not.toHaveBeenCalled();
    await test.instance().loadData();
    expect(MockComp.dataFetcher).toHaveBeenCalled();
  });
});
it('renders offline page when not online', async () => {
  const onLine = global.navigator.onLine;
  Object.defineProperty(window.navigator, 'onLine', {
    value: false,
    configurable: true
  });
  const props = {
    component: MockComp,
    ssrPreloading: {},
    location: {
      pathname: '/'
    }
  };
  MockComp.dataFetcher = jest.fn().mockImplementation(() => {
    return Promise.reject(new Error('MOCK_ERROR'));
  });
  const test = (0, _enzyme.mount)(_react.default.createElement(_RouteWithData.RouteWithData, props), createContext());
  await test.instance().loadData();
  expect((0, _enzyme.render)(test.instance().render())).toMatchSnapshot();
  Object.defineProperty(window.navigator, 'onLine', {
    value: onLine
  });
});