"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouteWithData = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _ErrorPage = require("../../pages/ErrorPage");

var _OfflinePage = require("../../pages/OfflinePage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RouteWithData extends _reactRouter.Route {
  constructor(props, context) {
    super(props, context); // Gather errors pages

    this.placeholdersPages = Object.assign({
      error: _ErrorPage.ErrorPage,
      offline: _OfflinePage.OfflinePage
    }, this.props.component.placeholdersPages || {});
  }

  componentDidMount() {
    // Once the data has been used, mark it as used - This is done here since the method is not called on the server
    delete this.props.ssrPreloading.payload;
  }

  componentWillReceiveProps(nextProps, nextContext) {
    super.componentWillReceiveProps(nextProps, nextContext);
    this.setState(() => ({
      data: null,
      error: null
    }));
  }

  async loadData() {
    try {
      const data = await this.props.component.dataFetcher(this.state.match.params);
      this.setState(() => ({
        data
      }));
    } catch (error) {
      this.setState(() => ({
        error
      }));
    }
  }

  renderPreloaded() {
    // Gather the properties we're going to forward
    const {
      ssrPreloading: {
        success,
        payload
      }
    } = this.props; // Render the appropriate component - Note that on SSR there is no Loading or Offline case here, obviously

    if (!success) return this.renderComponent(this.placeholdersPages.error, {
      error: payload
    });
    return this.renderComponent(this.props.component, {
      data: payload
    });
  }

  renderComponent(component, additionalProps = {}) {
    const {
      history,
      route,
      staticContext
    } = this.context.router;
    const location = this.props.location || route.location;
    const props = Object.assign({
      match: this.state.match,
      location,
      history,
      staticContext
    }, additionalProps); // Render

    return _react.default.createElement(component, props);
  }

  render() {
    // There is no match, nothing to worry about
    if (!this.state.match) return null; // If we preloaded the data, render it

    if (this.props.ssrPreloading && this.props.ssrPreloading.hasOwnProperty('payload')) return this.renderPreloaded();

    if (this.state.error) {
      // If we have an error, show it - Show the offline page if needed
      return this.renderComponent(this.placeholdersPages[window.navigator.onLine ? 'error' : 'offline'], {
        error: this.state.error
      });
    } else if (!this.state.data) {
      // If no data loaded yet, trigger data loading and show the loading page
      this.loadData();
      return this.renderComponent(this.props.component, {
        data: this.state.data
      });
    }

    return this.renderComponent(this.props.component, {
      data: this.state.data
    });
  }

}

exports.RouteWithData = RouteWithData;