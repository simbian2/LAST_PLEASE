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
      console.log(action.payload, "============");
      var payloadLength = Object.entries(action.payload);
      console.log(payloadLength);

      for (var i = 0; i < payloadLength.length; i++) {
        console.log(payloadLength[i][i]);
      } // []


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vU3RvcmUvcmVkdWNlci5qc3giXSwibmFtZXMiOlsicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJRdWVzdGlvbiIsIkFuc3dlciIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkTGVuZ3RoIiwiT2JqZWN0IiwiZW50cmllcyIsImkiLCJsZW5ndGgiLCJGQVEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFPQyxNQUFQLEVBQWtCO0FBQzlCLFVBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNJLFNBQUssU0FBTDtBQUFBLDRCQUUwQkQsTUFBTSxDQUFDRSxPQUZqQztBQUFBLFVBRU9DLFFBRlAsbUJBRU9BLFFBRlA7QUFBQSxVQUVnQkMsTUFGaEIsbUJBRWdCQSxNQUZoQjtBQUdBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWU4sTUFBTSxDQUFDRSxPQUFuQixFQUEyQixjQUEzQjtBQUVBLFVBQU1LLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxPQUFQLENBQWVULE1BQU0sQ0FBQ0UsT0FBdEIsQ0FBdEI7QUFDQUcsYUFBTyxDQUFDQyxHQUFSLENBQVlDLGFBQVo7O0FBRUEsV0FBSSxJQUFJRyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUNILGFBQWEsQ0FBQ0ksTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsRUFBeUM7QUFDckNMLGVBQU8sQ0FBQ0MsR0FBUixDQUFZQyxhQUFhLENBQUNHLENBQUQsQ0FBYixDQUFpQkEsQ0FBakIsQ0FBWjtBQUNILE9BVkQsQ0FXQTs7O0FBQ0ksNkNBQ09YLEtBRFA7QUFFSWEsV0FBRyx3SkFDSWIsS0FBSyxDQUFDYSxHQURWLElBRUM7QUFBQ1Qsa0JBQVEsRUFBQ0gsTUFBTSxDQUFDRSxPQUFQLENBQWVDO0FBQXpCLFNBRkQ7QUFGUDs7QUFPSjtBQUNJLGFBQU9KLEtBQVA7QUFyQlI7QUF1QkgsQ0F4QkQ7O0FBMEJBLCtEQUFlRCxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYTdiNGU5MDQ3YTE5NWU0ZTExYzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgXCJGQVFfR0VUXCI6IFxyXG4gICAgXHJcbiAgICAgICAgY29uc3Qge1F1ZXN0aW9uLEFuc3dlcn0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkLFwiPT09PT09PT09PT09XCIpXHJcblxyXG4gICAgICAgIGNvbnN0IHBheWxvYWRMZW5ndGggPSBPYmplY3QuZW50cmllcyhhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICBjb25zb2xlLmxvZyhwYXlsb2FkTGVuZ3RoKVxyXG5cclxuICAgICAgICBmb3IobGV0IGk9MDsgaTxwYXlsb2FkTGVuZ3RoLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocGF5bG9hZExlbmd0aFtpXVtpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gW11cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgRkFROltcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5GQVEsXHJcbiAgICAgICAgICAgICAgICAgICAge1F1ZXN0aW9uOmFjdGlvbi5wYXlsb2FkLlF1ZXN0aW9ufVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIgIl0sInNvdXJjZVJvb3QiOiIifQ==