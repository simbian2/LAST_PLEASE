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
/* harmony import */ var _Store_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Store/context */ "./Store/context.jsx");
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
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_Store_context__WEBPACK_IMPORTED_MODULE_6__.default),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)( /*#__PURE__*/(0,C_Users_KGA_20_TEAM_COM_AllAboutSHT_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_KGA_20_TEAM_COM_AllAboutSHT_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
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
            dispatch({
              type: '',
              payload: data
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []); // console.log(result)

  var IncomeList = IncomeContents.map(function (v) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: v.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: v.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 35
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, _this)]
    }, v.id, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
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
            lineNumber: 47,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "FAQ"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: IncomeList
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(Income, "dpx1dZ+fpbVPFL0IiQAXgIhW0zY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmFxcy9mYXFfcGFnZXMvSW5jb21lLmpzeCJdLCJuYW1lcyI6WyJJbmNvbWVDb250ZW50cyIsImlkIiwidGl0bGUiLCJjb250ZW50cyIsIkluY29tZSIsInVzZUNvbnRleHQiLCJTdG9yZSIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJ0eXBlIiwicGF5bG9hZCIsIkluY29tZUxpc3QiLCJtYXAiLCJ2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLGNBQWMsR0FBRyxDQUNuQjtBQUNJQyxJQUFFLEVBQUUsR0FEUjtBQUVJQyxPQUFLLEVBQUUsVUFGWDtBQUdJQyxVQUFRLEVBQUU7QUFIZCxDQURtQixFQUtoQjtBQUNDRixJQUFFLEVBQUUsR0FETDtBQUVDQyxPQUFLLEVBQUUsZ0JBRlI7QUFHQ0MsVUFBUSxFQUFFO0FBSFgsQ0FMZ0IsQ0FBdkI7O0FBYUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNqQjtBQURpQixvQkFHUUMsaURBQVUsQ0FBQ0MsbURBQUQsQ0FIbEI7QUFBQSxNQUdWQyxLQUhVLGVBR1ZBLEtBSFU7QUFBQSxNQUdKQyxRQUhJLGVBR0pBLFFBSEk7O0FBS2pCQyxrREFBUyxxU0FBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNnQkMsS0FBSyxDQUFDLG9DQUFELENBRHJCOztBQUFBO0FBQ0RDLG9CQURDO0FBQUE7QUFBQSxtQkFFWUEsUUFBUSxDQUFDQyxJQUFULEVBRlo7O0FBQUE7QUFFREMsZ0JBRkM7QUFHUEwsb0JBQVEsQ0FBQztBQUFDTSxrQkFBSSxFQUFDLEVBQU47QUFBU0MscUJBQU8sRUFBQ0Y7QUFBakIsYUFBRCxDQUFSOztBQUhPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUYsSUFLUCxFQUxPLENBQVQsQ0FMaUIsQ0FXakI7O0FBQ0EsTUFBTUcsVUFBVSxHQUFHaEIsY0FBYyxDQUFDaUIsR0FBZixDQUFtQixVQUFDQyxDQUFELEVBQU87QUFDekMsd0JBQ0k7QUFBQSw4QkFDSTtBQUFBLGtCQUFLQSxDQUFDLENBQUNqQjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUEsK0JBQUksOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsRUFBWDtBQUFBLGlDQUFjO0FBQUEsc0JBQUlpQixDQUFDLENBQUNoQjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUEsT0FBU2dCLENBQUMsQ0FBQ2pCLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBTUgsR0FQa0IsQ0FBbkI7QUFTQSxzQkFDSTtBQUFBLDJCQUNJO0FBQU8sZUFBUyxFQUFDLFVBQWpCO0FBQUEsOEJBQ0k7QUFBQSwrQkFDSTtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBT0k7QUFBQSxrQkFDS2U7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFlSCxDQXBDRDs7R0FBTVosTTs7S0FBQUEsTTtBQXNDTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mYXFzL1tmYXFdLjg5NmMzMTUxNmI5MWY4ZjQ2YWQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2dldEZBUUluY29tZX0gZnJvbSAnLi4vLi4vLi4vYXBpL2FwaSdcclxuaW1wb3J0IHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0b3JlIGZyb20gJy4uLy4uLy4uL1N0b3JlL2NvbnRleHQnXHJcblxyXG5cclxuY29uc3QgSW5jb21lQ29udGVudHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICcwJyxcclxuICAgICAgICB0aXRsZTogJ1F1ZXN0aW9uJyxcclxuICAgICAgICBjb250ZW50czogJ3JlYWN0IGNoYW0gZGpmdXFlayBkamZ1ZG5qJ1xyXG4gICAgfSwge1xyXG4gICAgICAgIGlkOiAnMScsXHJcbiAgICAgICAgdGl0bGU6ICdoZWxsbyBJbmNvbWUgMScsXHJcbiAgICAgICAgY29udGVudHM6ICdyZWFjdCBjaGFtIGRqZnVxZWsgZGpmdWRuajEnXHJcbiAgICB9XHJcbl1cclxuXHJcblxyXG5jb25zdCBJbmNvbWUgPSAoKSA9PiB7XHJcbiAgICAvL2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9nZXRGQVFJbmNvbWVcclxuXHJcbiAgICBjb25zdCB7c3RhdGUsZGlzcGF0Y2h9ID0gdXNlQ29udGV4dChTdG9yZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoIGFzeW5jICgpPT57XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dldEZBUUluY29tZScpXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOicnLHBheWxvYWQ6ZGF0YX0pXHJcbiAgICAgICAgXHJcbiAgICB9LFtdKVxyXG4gICAgLy8gY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgY29uc3QgSW5jb21lTGlzdCA9IEluY29tZUNvbnRlbnRzLm1hcCgodikgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e3YuaWR9PlxyXG4gICAgICAgICAgICAgICAgPHRkPnt2LmlkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PExpbmsgaHJlZj1cIlwiPjxhPnt2LnRpdGxlfTwvYT48L0xpbms+PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIkZhcVRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+Tm8uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZBUTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge0luY29tZUxpc3R9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmNvbWUiXSwic291cmNlUm9vdCI6IiJ9