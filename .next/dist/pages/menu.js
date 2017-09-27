'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Card = require('../components/Card');

var _Card2 = _interopRequireDefault(_Card);

var _styles = require('../static/css/styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _styles2.default } }), _react2.default.createElement('main', { className: 'menu-container', 'data-jsx': 459337684
  }, _react2.default.createElement('div', { className: 'menu-title', 'data-jsx': 459337684
  }, _react2.default.createElement('span', {
    'data-jsx': 459337684
  }, 'Gratia'), _react2.default.createElement('div', { className: 'top', 'data-jsx': 459337684
  }, _react2.default.createElement('h2', {
    'data-jsx': 459337684
  }, 'Menu'), _react2.default.createElement('p', {
    'data-jsx': 459337684
  }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'))), _react2.default.createElement('div', { className: 'card-container', 'data-jsx': 459337684
  }, _react2.default.createElement(_Card2.default, { imgLink: 'url(./static/images/main-dishes.png)', title: 'Main Dishes' }), _react2.default.createElement(_Card2.default, { imgLink: 'url(./static/images/soups.png)', title: 'Soups' }), _react2.default.createElement(_Card2.default, { imgLink: 'url(./static/images/hamburgers.png)', title: 'Hamburgers' }), _react2.default.createElement(_Card2.default, { imgLink: 'url(./static/images/cupcakes.png)', title: 'desserts' }), _react2.default.createElement(_Card2.default, { imgLink: 'url(./static/images/barbecue.png)', title: 'barbecue' }), _react2.default.createElement(_Card2.default, { imgLink: 'url(../static/images/salads.png)', title: 'salad' }))), _react2.default.createElement(_style2.default, {
    styleId: 459337684,
    css: 'nav{background-color:rgb(255,255,255)}nav h3,nav a{color:#000}'
  }));
};