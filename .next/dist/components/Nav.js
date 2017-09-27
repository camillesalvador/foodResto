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

var Nav = function Nav() {
  return _react2.default.createElement('nav', null, _react2.default.createElement('div', { className: 'nav-logo' }, _react2.default.createElement('img', { className: 'hero-logo', src: '../static/images/logo.gif', alt: 'Gratia Restaurant Logo' }), _react2.default.createElement('h3', null, 'Gratia')), _react2.default.createElement('div', { className: 'nav-links' }, _react2.default.createElement(_link2.default, { href: '/../' }, _react2.default.createElement('a', null, 'Home')), _react2.default.createElement(_link2.default, { href: '/../about/' }, _react2.default.createElement('a', null, 'About')), _react2.default.createElement(_link2.default, { href: '/../menu/' }, _react2.default.createElement('a', null, 'Menu')), _react2.default.createElement(_link2.default, { href: '/../contact/' }, _react2.default.createElement('a', null, 'Contact'))), _react2.default.createElement(_reactFontawesome2.default, { name: 'bars fa-2x' }));
};

exports.default = Nav;