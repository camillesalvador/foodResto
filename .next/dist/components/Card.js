"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var style = {
    background: props.imgLink,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover"
  };
  return _react2.default.createElement("div", { className: "card" }, _react2.default.createElement("div", { className: "image", style: style }), _react2.default.createElement("h2", null, props.title), _react2.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."));
};