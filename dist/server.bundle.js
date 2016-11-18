/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("babel-register");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("babel-polyfill");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(5);

	var _reactRouter = __webpack_require__(6);

	var _router = __webpack_require__(7);

	var _router2 = _interopRequireDefault(_router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	var koa = __webpack_require__(14);
	var app = new koa();
	var views = __webpack_require__(15);
	var server = __webpack_require__(16);
	var logger = __webpack_require__(17);
	//var router=require('./routes/router');
	var bodyparse = __webpack_require__(18);
	var path = __webpack_require__(19);

	app.use(logger());
	app.use(bodyparse());

	console.log('path:----', path.resolve(__dirname, '../'));
	console.log(path.resolve(__dirname, '../app'));

	app.use(server(path.resolve(__dirname, '../')));

	/*app.use(views(__dirname + '/views', {
	  map: {
	    html: 'ejs'
	  }
	}));

	app.use(router.routes())
		.use(router.allowedMethods());*/

	app.use(function () {
		var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							(0, _reactRouter.match)({ routes: _router2.default, location: ctx.url }, function (error, redirectLocation, renderProps) {
								if (error) {
									ctx.status = 500;
								} else if (redirectLocation) {

									ctx.redirect(302, redirectLocation.pathname + redirectLocation.search);
								} else if (renderProps) {
									ctx.status = 200;
									var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, renderProps));

									ctx.body = renderPage(appHtml);
								} else {
									ctx.status = 404;
								}
							});

							_context.next = 3;
							return next();

						case 3:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined);
		}));

		return function (_x, _x2) {
			return _ref.apply(this, arguments);
		};
	}());

	function renderPage(appHtml) {
		return '\n    <!doctype html public="storage">\n    <html>\n    <meta charset=utf-8/>\n    <title>My First React Router App</title>\n    <div id=root>' + appHtml + '</div>\n    <script src="/js/bundle.js"></script>\n   ';
	}

	/*app.use(async (ctx,next)=>{
		ctx.body = 'Hello World';
	});*/

	app.listen(3000, function () {
		console.log('server start 3000');
	});
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	var _header = __webpack_require__(8);

	var _header2 = _interopRequireDefault(_header);

	var _App = __webpack_require__(10);

	var _App2 = _interopRequireDefault(_App);

	var _About = __webpack_require__(11);

	var _About2 = _interopRequireDefault(_About);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ACTIVE = { color: 'red' };

	var Index = function Index(_ref) {
		var children = _ref.children;
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'h1',
				null,
				'Index'
			),
			_react2.default.createElement(
				'ul',
				null,
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/', activeStyle: ACTIVE },
						'/'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.IndexLink,
						{ to: '/', activeStyle: ACTIVE },
						'/ IndexLink'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/about', activeStyle: ACTIVE },
						'/about'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/header', activeStyle: ACTIVE },
						'/header'
					)
				)
			),
			children
		);
	};

	/*export default (
	    <Route path="/" component={Index}>
	      <IndexRoute component={App}/>
	      <Route path="/about" component={About}/>
	      <Route path="/header" component={Header}/>
	    </Route>
	)*/

	exports.default = _react2.default.createElement(
		_reactRouter.Router,
		{ history: _reactRouter.browserHistory },
		_react2.default.createElement(
			_reactRouter.Route,
			{ path: '/', component: Index },
			_react2.default.createElement(_reactRouter.IndexRoute, { component: _App2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: '/header', component: _header2.default })
		)
	);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_React$Component) {
		_inherits(Header, _React$Component);

		function Header(props) {
			_classCallCheck(this, Header);

			return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
		}

		_createClass(Header, [{
			key: 'render',
			value: function render() {
				var img = __webpack_require__(9);
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h1',
						null,
						'Hello , React'
					),
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement('img', { src: img })
					)
				);
			}
		}]);

		return Header;
	}(_react2.default.Component);

	exports.default = Header;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./image/57e275b.png";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = function App() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'h2',
	      null,
	      'Index!!!'
	    )
	  );
	};

	exports.default = App;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _jquery = __webpack_require__(12);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var About = function (_React$Component) {
		_inherits(About, _React$Component);

		function About(props) {
			_classCallCheck(this, About);

			var _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));

			_this.state = { dataList: [] };
			return _this;
		}

		_createClass(About, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				_jquery2.default.ajax({
					url: 'http://localhost:9001/name',
					method: 'get',
					success: function (data) {
						//console.log(data);
						//this.props.list=data;
						this.setState({ dataList: data.list });
					}.bind(this),
					error: function error() {}
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var img = __webpack_require__(13);
				var rows = [];

				this.state.dataList.forEach(function (v, k) {
					rows.push(_react2.default.createElement(Rowli, { key: k, content: v.id }));
				});

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h1',
						null,
						'Hello , React1'
					),
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement('img', { src: img })
					),
					_react2.default.createElement(
						'ul',
						null,
						rows
					),
					_react2.default.createElement(
						'a',
						{ href: 'javascript:;', onClick: this.click },
						'click this'
					)
				);
			}
		}, {
			key: 'click',
			value: function click(e) {
				e.preventDefault();
				alert('hello react');
			}
		}]);

		return About;
	}(_react2.default.Component);

	var Rowli = function (_React$Component2) {
		_inherits(Rowli, _React$Component2);

		function Rowli() {
			_classCallCheck(this, Rowli);

			return _possibleConstructorReturn(this, (Rowli.__proto__ || Object.getPrototypeOf(Rowli)).apply(this, arguments));
		}

		_createClass(Rowli, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'li',
					null,
					this.props.content
				);
			}
		}]);

		return Rowli;
	}(_react2.default.Component);

	exports.default = About;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./image/57e275b.png";

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("koa");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("koa-views");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("koa-static");

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("koa-logger");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("koa-bodyparser");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ }
/******/ ]);