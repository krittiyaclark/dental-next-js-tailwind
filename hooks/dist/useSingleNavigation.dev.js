"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useSingleNavigation;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useSingleNavigation() {
  // Initially state will be loading.
  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      toggleIsLoading = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      navigation = _useState6[0],
      setNavigation = _useState6[1];

  (0, _react.useEffect)(function () {
    function fetchSingleNavigation() {
      var res, _navigation;

      return regeneratorRuntime.async(function fetchSingleNavigation$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(fetch('/api/singleNav'));

            case 3:
              res = _context.sent;
              _context.next = 6;
              return regeneratorRuntime.awrap(res.json());

            case 6:
              _navigation = _context.sent;
              setNavigation(_navigation);
              console.log(_navigation);
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              setErrors(_context.t0);

            case 14:
              _context.prev = 14;
              toggleIsLoading(false);
              return _context.finish(14);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 11, 14, 17]]);
    }

    fetchSingleNavigation();
  }, []);
  return {
    isLoading: isLoading,
    errors: errors,
    navigation: navigation
  };
}