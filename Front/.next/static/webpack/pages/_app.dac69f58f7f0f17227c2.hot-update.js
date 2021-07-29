self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./Store/reducer.jsx":
/*!***************************!*\
  !*** ./Store/reducer.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_KGA_20_TEAM_COM_AllAboutSHT_Front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_KGA_20_TEAM_COM_AllAboutSHT_Front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_KGA_20_TEAM_COM_AllAboutSHT_Front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var reducer = function reducer(state, action) {
  switch (action.type) {
    case "FAQ_GET":
      var _action$payload = action.payload,
          Question = _action$payload.Question,
          Answer = _action$payload.Answer;
      var payloadLength = Object.entries(action.payload);
      var result = [];

      for (var i = 0; i < payloadLength.length; i++) {
        result.push(payloadLength[i]);
      }

      console.log(result); // []

      return _objectSpread(_objectSpread({}, state), {}, {
        FAQ: [].concat((0,C_Users_KGA_20_TEAM_COM_AllAboutSHT_Front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state.FAQ), [{
          Question: action.payload.Question
        }])
      });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vU3RvcmUvcmVkdWNlci5qc3giXSwibmFtZXMiOlsicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJRdWVzdGlvbiIsIkFuc3dlciIsInBheWxvYWRMZW5ndGgiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiRkFRIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBT0MsTUFBUCxFQUFrQjtBQUM5QixVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLLFNBQUw7QUFBQSw0QkFFMEJELE1BQU0sQ0FBQ0UsT0FGakM7QUFBQSxVQUVPQyxRQUZQLG1CQUVPQSxRQUZQO0FBQUEsVUFFZ0JDLE1BRmhCLG1CQUVnQkEsTUFGaEI7QUFJQSxVQUFNQyxhQUFhLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlUCxNQUFNLENBQUNFLE9BQXRCLENBQXRCO0FBRUEsVUFBTU0sTUFBTSxHQUFHLEVBQWY7O0FBQ0EsV0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUNKLGFBQWEsQ0FBQ0ssTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsRUFBeUM7QUFDckNELGNBQU0sQ0FBQ0csSUFBUCxDQUFZTixhQUFhLENBQUNJLENBQUQsQ0FBekI7QUFDSDs7QUFDREcsYUFBTyxDQUFDQyxHQUFSLENBQVlMLE1BQVosRUFWQSxDQVdBOztBQUNJLDZDQUNPVCxLQURQO0FBRUllLFdBQUcsd0pBQ0lmLEtBQUssQ0FBQ2UsR0FEVixJQUVDO0FBQUNYLGtCQUFRLEVBQUNILE1BQU0sQ0FBQ0UsT0FBUCxDQUFlQztBQUF6QixTQUZEO0FBRlA7O0FBT0o7QUFDSSxhQUFPSixLQUFQO0FBckJSO0FBdUJILENBeEJEOztBQTBCQSwrREFBZUQsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmRhYzY5ZjU4ZjdmMGYxNzIyN2MyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZWR1Y2VyID0gKHN0YXRlLGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIFwiRkFRX0dFVFwiOiBcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHtRdWVzdGlvbixBbnN3ZXJ9ID0gYWN0aW9uLnBheWxvYWRcclxuXHJcbiAgICAgICAgY29uc3QgcGF5bG9hZExlbmd0aCA9IE9iamVjdC5lbnRyaWVzKGFjdGlvbi5wYXlsb2FkKVxyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTxwYXlsb2FkTGVuZ3RoLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF5bG9hZExlbmd0aFtpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgIC8vIFtdXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIEZBUTpbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuRkFRLFxyXG4gICAgICAgICAgICAgICAgICAgIHtRdWVzdGlvbjphY3Rpb24ucGF5bG9hZC5RdWVzdGlvbn1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyICJdLCJzb3VyY2VSb290IjoiIn0=