"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = exports.API_TOKEN = exports.API_URL = void 0;

var _prismicJavascript = _interopRequireDefault(require("prismic-javascript"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API_URL = 'https://monogramnextjsprismic.prismic.io/api/v2';
exports.API_URL = API_URL;
var API_TOKEN = process.env.PRISMIC_ACCESS_TOKEN;
exports.API_TOKEN = API_TOKEN;

var client = _prismicJavascript["default"].client(API_URL, {
  accessToken: API_TOKEN
});

exports.client = client;