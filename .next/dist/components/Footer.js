'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement('footer', null, _react2.default.createElement('div', null, _react2.default.createElement('img', { src: '../static/images/logo.gif', alt: 'Gratia Restaurant Logo' }), _react2.default.createElement('hr', null)), _react2.default.createElement('div', { className: 'rights' }, _react2.default.createElement('h4', null, 'Gratia Restaurant'), _react2.default.createElement('p', null, 'Gratia Restaurant | 2017')), _react2.default.createElement('div', { 'class': 'social' }, _react2.default.createElement(_link2.default, { href: '#' }, _react2.default.createElement('a', null, _react2.default.createElement(_reactFontawesome2.default, { name: 'facebook fa-lg' }))), _react2.default.createElement(_link2.default, { href: '#' }, _react2.default.createElement('a', null, _react2.default.createElement(_reactFontawesome2.default, { name: 'twitter fa-lg' }))), _react2.default.createElement(_link2.default, { href: '#' }, _react2.default.createElement('a', null, _react2.default.createElement(_reactFontawesome2.default, { name: 'youtube fa-lg' })))));
};

exports.default = Footer;