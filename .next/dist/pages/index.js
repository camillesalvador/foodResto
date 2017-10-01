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

var _styles = require('../static/css/styles.scss');

var _styles2 = _interopRequireDefault(_styles);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _styles2.default } }), _react2.default.createElement('header', {
    'data-jsx': 3872969106
  }, _react2.default.createElement('div', { className: 'tagline-div', 'data-jsx': 3872969106
  }, _react2.default.createElement('p', { className: 'tagline', 'data-jsx': 3872969106
  }, 'and perfection is not a detail'), _react2.default.createElement('a', { href: '#', 'data-jsx': 3872969106
  }, _react2.default.createElement(_reactFontawesome2.default, { name: 'long-arrow-down' }))), _react2.default.createElement('a', { className: 'book-now', href: '#', 'data-jsx': 3872969106
  }, 'Book a table')), _react2.default.createElement('section', { className: 'perfection', 'data-jsx': 3872969106
  }, _react2.default.createElement('span', {
    'data-jsx': 3872969106
  }, 'Gratia'), _react2.default.createElement('div', { className: 'top', 'data-jsx': 3872969106
  }, _react2.default.createElement('h2', {
    'data-jsx': 3872969106
  }, 'Perfection'), _react2.default.createElement('p', {
    'data-jsx': 3872969106
  }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.')), _react2.default.createElement('div', { className: 'food-card', 'data-jsx': 3872969106
  }, _react2.default.createElement('div', { className: 'desserts', 'data-jsx': 3872969106
  }, _react2.default.createElement('img', { alt: 'An image of a desserts', src: './static/images/desserts.png', 'data-jsx': 3872969106
  })), _react2.default.createElement('div', { className: 'smoothie', 'data-jsx': 3872969106
  }, _react2.default.createElement('img', { alt: 'An image of a smootie', src: './static/images/smoothie.png', 'data-jsx': 3872969106
  })), _react2.default.createElement('div', { className: 'breakfast', 'data-jsx': 3872969106
  }, _react2.default.createElement('img', { alt: 'An image of a breakfast', src: './static/images/breakfast.png', 'data-jsx': 3872969106
  })))), _react2.default.createElement('section', { className: 'detail', 'data-jsx': 3872969106
  }, _react2.default.createElement('a', { href: '#', 'data-jsx': 3872969106
  }, 'Check other offers'), _react2.default.createElement('div', { className: 'detail-box', 'data-jsx': 3872969106
  }, _react2.default.createElement('div', { className: 'wrap', 'data-jsx': 3872969106
  }, _react2.default.createElement('div', { className: 'box', 'data-jsx': 3872969106
  }, _react2.default.createElement('h3', {
    'data-jsx': 3872969106
  }, 'Details'), _react2.default.createElement('p', {
    'data-jsx': 3872969106
  }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'), _react2.default.createElement('a', { href: '#', 'data-jsx': 3872969106
  }, 'Preparation of out dishes'))))), _react2.default.createElement('section', { className: 'reach', 'data-jsx': 3872969106
  }, _react2.default.createElement('span', {
    'data-jsx': 3872969106
  }, 'Gratia'), _react2.default.createElement('div', { className: 'top', 'data-jsx': 3872969106
  }, _react2.default.createElement('h2', {
    'data-jsx': 3872969106
  }, 'How we reach this?'), _react2.default.createElement('p', {
    'data-jsx': 3872969106
  }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.')), _react2.default.createElement('div', { className: 'info', 'data-jsx': 3872969106
  }, _react2.default.createElement('div', { className: 'location', 'data-jsx': 3872969106
  }, _react2.default.createElement('span', {
    'data-jsx': 3872969106
  }, '4'), _react2.default.createElement('div', { className: 'top', 'data-jsx': 3872969106
  }, _react2.default.createElement('h3', {
    'data-jsx': 3872969106
  }, 'Different Locations'), _react2.default.createElement('p', {
    'data-jsx': 3872969106
  }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'))), _react2.default.createElement('div', { className: 'product', 'data-jsx': 3872969106
  }, _react2.default.createElement('span', {
    'data-jsx': 3872969106
  }, '532'), _react2.default.createElement('div', { className: 'top', 'data-jsx': 3872969106
  }, _react2.default.createElement('h3', {
    'data-jsx': 3872969106
  }, 'Fresh Products'), _react2.default.createElement('p', {
    'data-jsx': 3872969106
  }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'))), _react2.default.createElement('div', { className: 'best', 'data-jsx': 3872969106
  }, _react2.default.createElement('span', {
    'data-jsx': 3872969106
  }, '16'), _react2.default.createElement('div', { className: 'top', 'data-jsx': 3872969106
  }, _react2.default.createElement('h3', {
    'data-jsx': 3872969106
  }, 'The best from the beginning'), _react2.default.createElement('p', {
    'data-jsx': 3872969106
  }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'))))), _react2.default.createElement(_style2.default, {
    styleId: 3872969106,
    css: 'nav{background-color:rgb(21,27,40)}nav h3,nav a,.fa-bars{color:#fff}header{background:url("./static/images/hero-img.png") no-repeat center bottom;background-size:cover}.detail-box{background-image:url(\'./static/images/detail-bg.png\')}'
  }));
};