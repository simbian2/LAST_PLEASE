self["webpackHotUpdate_N_E"]("pages/faqs/[faq]",{

/***/ "./pages/faqs/faq_pages/Income.jsx":
/*!*****************************************!*\
  !*** ./pages/faqs/faq_pages/Income.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_KGA_20_TEAM_COM_AllAboutSHT_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_KGA_20_TEAM_COM_AllAboutSHT_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_KGA_20_TEAM_COM_AllAboutSHT_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_KGA_20_TEAM_COM_AllAboutSHT_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/api */ "./api/api.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\KGA_20\\TEAM_COM\\AllAboutSHT\\Front\\pages\\faqs\\faq_pages\\Income.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var IncomeContents = [{
  id: '0',
  title: 'Question',
  contents: 'react cham djfuqek djfudnj'
}, {
  id: '1',
  title: 'hello Income 1',
  contents: 'react cham djfuqek djfudnj1'
}];

var Income = function Income() {
  _s();

  //http://localhost:4000/getFAQIncome
  var _useEffect = (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)( /*#__PURE__*/(0,C_Users_KGA_20_TEAM_COM_AllAboutSHT_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_KGA_20_TEAM_COM_AllAboutSHT_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var response, data;
    return C_Users_KGA_20_TEAM_COM_AllAboutSHT_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('http://localhost:4000/getFAQIncome');

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            data = _context.sent;

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []),
      state = _useEffect.state,
      dispatch = _useEffect.dispatch; // console.log(result)


  var IncomeList = IncomeContents.map(function (v) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: v.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: v.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 35
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, _this)]
    }, v.id, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      className: "FaqTable",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "No."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "FAQ"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: IncomeList
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(Income, "y8K4PAay6h1H26kVT2atSxSW64A=");

_c = Income;
/* harmony default export */ __webpack_exports__["default"] = (Income);

var _c;

$RefreshReg$(_c, "Income");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmFxcy9mYXFfcGFnZXMvSW5jb21lLmpzeCJdLCJuYW1lcyI6WyJJbmNvbWVDb250ZW50cyIsImlkIiwidGl0bGUiLCJjb250ZW50cyIsIkluY29tZSIsInVzZUVmZmVjdCIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN0YXRlIiwiZGlzcGF0Y2giLCJJbmNvbWVMaXN0IiwibWFwIiwidiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxjQUFjLEdBQUcsQ0FDbkI7QUFDSUMsSUFBRSxFQUFFLEdBRFI7QUFFSUMsT0FBSyxFQUFFLFVBRlg7QUFHSUMsVUFBUSxFQUFFO0FBSGQsQ0FEbUIsRUFLaEI7QUFDQ0YsSUFBRSxFQUFFLEdBREw7QUFFQ0MsT0FBSyxFQUFFLGdCQUZSO0FBR0NDLFVBQVEsRUFBRTtBQUhYLENBTGdCLENBQXZCOztBQWFBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDakI7QUFEaUIsbUJBS2pCQyxnREFBUyxxU0FBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNnQkMsS0FBSyxDQUFDLG9DQUFELENBRHJCOztBQUFBO0FBQ0RDLG9CQURDO0FBQUE7QUFBQSxtQkFFWUEsUUFBUSxDQUFDQyxJQUFULEVBRlo7O0FBQUE7QUFFREMsZ0JBRkM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRixJQUlQLEVBSk8sQ0FMUTtBQUFBLE1BR1ZDLEtBSFUsY0FHVkEsS0FIVTtBQUFBLE1BR0pDLFFBSEksY0FHSkEsUUFISSxFQVVqQjs7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHWixjQUFjLENBQUNhLEdBQWYsQ0FBbUIsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3pDLHdCQUNJO0FBQUEsOEJBQ0k7QUFBQSxrQkFBS0EsQ0FBQyxDQUFDYjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUEsK0JBQUksOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsRUFBWDtBQUFBLGlDQUFjO0FBQUEsc0JBQUlhLENBQUMsQ0FBQ1o7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBLE9BQVNZLENBQUMsQ0FBQ2IsRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFNSCxHQVBrQixDQUFuQjtBQVNBLHNCQUNJO0FBQUEsMkJBQ0k7QUFBTyxlQUFTLEVBQUMsVUFBakI7QUFBQSw4QkFDSTtBQUFBLCtCQUNJO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFPSTtBQUFBLGtCQUNLVztBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQWVILENBbkNEOztHQUFNUixNOztLQUFBQSxNO0FBcUNOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZhcXMvW2ZhcV0uODY1OWQ4ZjdkMDlhZWIyYzdiM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Z2V0RkFRSW5jb21lfSBmcm9tICcuLi8uLi8uLi9hcGkvYXBpJ1xyXG5pbXBvcnQge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcblxyXG5jb25zdCBJbmNvbWVDb250ZW50cyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogJzAnLFxyXG4gICAgICAgIHRpdGxlOiAnUXVlc3Rpb24nLFxyXG4gICAgICAgIGNvbnRlbnRzOiAncmVhY3QgY2hhbSBkamZ1cWVrIGRqZnVkbmonXHJcbiAgICB9LCB7XHJcbiAgICAgICAgaWQ6ICcxJyxcclxuICAgICAgICB0aXRsZTogJ2hlbGxvIEluY29tZSAxJyxcclxuICAgICAgICBjb250ZW50czogJ3JlYWN0IGNoYW0gZGpmdXFlayBkamZ1ZG5qMSdcclxuICAgIH1cclxuXVxyXG5cclxuXHJcbmNvbnN0IEluY29tZSA9ICgpID0+IHtcclxuICAgIC8vaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dldEZBUUluY29tZVxyXG5cclxuICAgIGNvbnN0IHtzdGF0ZSxkaXNwYXRjaH0gPSBcclxuXHJcbiAgICB1c2VFZmZlY3QoIGFzeW5jICgpPT57XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dldEZBUUluY29tZScpXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIFxyXG4gICAgfSxbXSlcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgIGNvbnN0IEluY29tZUxpc3QgPSBJbmNvbWVDb250ZW50cy5tYXAoKHYpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dHIga2V5PXt2LmlkfT5cclxuICAgICAgICAgICAgICAgIDx0ZD57di5pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPjxMaW5rIGhyZWY9XCJcIj48YT57di50aXRsZX08L2E+PC9MaW5rPjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJGYXFUYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5vLjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GQVE8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtJbmNvbWVMaXN0fVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5jb21lIl0sInNvdXJjZVJvb3QiOiIifQ==