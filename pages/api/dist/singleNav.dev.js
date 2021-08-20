"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSingleNavigation;

var _prismicConfiguration = require("../../prismic-configuration");

// pages/api/getSingleNavigation.js
function getSingleNavigation(req, res) {
  var _navigation, hero;

  return regeneratorRuntime.async(function getSingleNavigation$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_prismicConfiguration.client.getSingle('navigation_bar'));

        case 3:
          _navigation = _context.sent;
          // This will be logged in terminal instead of browser console.
          console.log(_navigation);
          return _context.abrupt("return", res.status(200).json({
            navigation: _navigation
          }));

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).json({
            message: 'Something went wrong.'
          }));

        case 11:
          _context.prev = 11;
          _context.next = 14;
          return regeneratorRuntime.awrap(_prismicConfiguration.client.getSingle('hero'));

        case 14:
          hero = _context.sent;
          // This will be logged in terminal instead of browser console.
          console.log(hero);
          return _context.abrupt("return", res.status(200).json({
            navigation: navigation
          }));

        case 19:
          _context.prev = 19;
          _context.t1 = _context["catch"](11);
          return _context.abrupt("return", res.status(500).json({
            message: 'Something went wrong.'
          }));

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8], [11, 19]]);
}