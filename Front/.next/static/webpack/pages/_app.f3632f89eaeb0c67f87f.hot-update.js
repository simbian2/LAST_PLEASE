self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./Store/reducer.jsx":
/*!***************************!*\
  !*** ./Store/reducer.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_KGA_20_TEAM_COM_AllAboutSHT_Front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_KGA_20_TEAM_COM_AllAboutSHT_Front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var reducer = function reducer(state, action) {
  switch (action.type) {
    case "FAQ_GET":
      var _action$payload = action.payload,
          Question = _action$payload.Question,
          Answer = _action$payload.Answer;
      var payloadLength = Object.entries(action.payload);
      var result = [];

      for (var i = 0; i < payloadLength.length; i++) {
        result.push(payloadLength[i][1]);
      }

      var rst = result.map(function (v) {
        return {
          Question: v.Question,
          Answer: v.Answer
        };
      }); // []

      return _objectSpread(_objectSpread({}, state), {}, {
        FAQ: state.FAQ
      }, rst);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vU3RvcmUvcmVkdWNlci5qc3giXSwibmFtZXMiOlsicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJRdWVzdGlvbiIsIkFuc3dlciIsInBheWxvYWRMZW5ndGgiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsInB1c2giLCJyc3QiLCJtYXAiLCJ2IiwiRkFRIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQU9DLE1BQVAsRUFBa0I7QUFDOUIsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBSyxTQUFMO0FBQUEsNEJBRTBCRCxNQUFNLENBQUNFLE9BRmpDO0FBQUEsVUFFT0MsUUFGUCxtQkFFT0EsUUFGUDtBQUFBLFVBRWdCQyxNQUZoQixtQkFFZ0JBLE1BRmhCO0FBSUEsVUFBTUMsYUFBYSxHQUFHQyxNQUFNLENBQUNDLE9BQVAsQ0FBZVAsTUFBTSxDQUFDRSxPQUF0QixDQUF0QjtBQUVBLFVBQU1NLE1BQU0sR0FBRyxFQUFmOztBQUNBLFdBQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDSixhQUFhLENBQUNLLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQXlDO0FBQ3JDRCxjQUFNLENBQUNHLElBQVAsQ0FBWU4sYUFBYSxDQUFDSSxDQUFELENBQWIsQ0FBaUIsQ0FBakIsQ0FBWjtBQUNIOztBQUVELFVBQU1HLEdBQUcsR0FBR0osTUFBTSxDQUFDSyxHQUFQLENBQVcsVUFBQUMsQ0FBQyxFQUFFO0FBQ3RCLGVBQU87QUFBQ1gsa0JBQVEsRUFBQ1csQ0FBQyxDQUFDWCxRQUFaO0FBQXFCQyxnQkFBTSxFQUFDVSxDQUFDLENBQUNWO0FBQTlCLFNBQVA7QUFDSCxPQUZXLENBQVosQ0FYQSxDQWNBOztBQUNJLDZDQUNPTCxLQURQO0FBRUlnQixXQUFHLEVBQUVoQixLQUFLLENBQUNnQjtBQUZmLFNBRXVCSCxHQUZ2Qjs7QUFNSjtBQUNJLGFBQU9iLEtBQVA7QUF2QlI7QUF5QkgsQ0ExQkQ7O0FBNEJBLCtEQUFlRCxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjM2MzJmODllYWViMGM2N2Y4N2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgXCJGQVFfR0VUXCI6IFxyXG4gICAgXHJcbiAgICAgICAgY29uc3Qge1F1ZXN0aW9uLEFuc3dlcn0gPSBhY3Rpb24ucGF5bG9hZFxyXG5cclxuICAgICAgICBjb25zdCBwYXlsb2FkTGVuZ3RoID0gT2JqZWN0LmVudHJpZXMoYWN0aW9uLnBheWxvYWQpXHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHBheWxvYWRMZW5ndGgubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXlsb2FkTGVuZ3RoW2ldWzFdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByc3QgPSByZXN1bHQubWFwKHY9PntcclxuICAgICAgICAgICAgcmV0dXJuIHtRdWVzdGlvbjp2LlF1ZXN0aW9uLEFuc3dlcjp2LkFuc3dlcn1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIFtdXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIEZBUTogc3RhdGUuRkFRLCAuLi5yc3RcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyICJdLCJzb3VyY2VSb290IjoiIn0=