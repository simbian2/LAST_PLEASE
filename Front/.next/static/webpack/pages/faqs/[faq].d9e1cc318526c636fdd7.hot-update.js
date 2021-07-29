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
              type: 'FAQ_GET',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmFxcy9mYXFfcGFnZXMvSW5jb21lLmpzeCJdLCJuYW1lcyI6WyJJbmNvbWVDb250ZW50cyIsImlkIiwidGl0bGUiLCJjb250ZW50cyIsIkluY29tZSIsInVzZUNvbnRleHQiLCJTdG9yZSIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJ0eXBlIiwicGF5bG9hZCIsIkluY29tZUxpc3QiLCJtYXAiLCJ2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLGNBQWMsR0FBRyxDQUNuQjtBQUNJQyxJQUFFLEVBQUUsR0FEUjtBQUVJQyxPQUFLLEVBQUUsVUFGWDtBQUdJQyxVQUFRLEVBQUU7QUFIZCxDQURtQixFQUtoQjtBQUNDRixJQUFFLEVBQUUsR0FETDtBQUVDQyxPQUFLLEVBQUUsZ0JBRlI7QUFHQ0MsVUFBUSxFQUFFO0FBSFgsQ0FMZ0IsQ0FBdkI7O0FBYUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNqQjtBQURpQixvQkFHUUMsaURBQVUsQ0FBQ0MsbURBQUQsQ0FIbEI7QUFBQSxNQUdWQyxLQUhVLGVBR1ZBLEtBSFU7QUFBQSxNQUdKQyxRQUhJLGVBR0pBLFFBSEk7O0FBS2pCQyxrREFBUyxxU0FBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNnQkMsS0FBSyxDQUFDLG9DQUFELENBRHJCOztBQUFBO0FBQ0RDLG9CQURDO0FBQUE7QUFBQSxtQkFFWUEsUUFBUSxDQUFDQyxJQUFULEVBRlo7O0FBQUE7QUFFREMsZ0JBRkM7QUFHUEwsb0JBQVEsQ0FBQztBQUFDTSxrQkFBSSxFQUFDLFNBQU47QUFBZ0JDLHFCQUFPLEVBQUNGO0FBQXhCLGFBQUQsQ0FBUjs7QUFITztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFGLElBS1AsRUFMTyxDQUFULENBTGlCLENBV2pCOztBQUNBLE1BQU1HLFVBQVUsR0FBR2hCLGNBQWMsQ0FBQ2lCLEdBQWYsQ0FBbUIsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3pDLHdCQUNJO0FBQUEsOEJBQ0k7QUFBQSxrQkFBS0EsQ0FBQyxDQUFDakI7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFBLCtCQUFJLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLEVBQVg7QUFBQSxpQ0FBYztBQUFBLHNCQUFJaUIsQ0FBQyxDQUFDaEI7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBLE9BQVNnQixDQUFDLENBQUNqQixFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQU1ILEdBUGtCLENBQW5CO0FBU0Esc0JBQ0k7QUFBQSwyQkFDSTtBQUFPLGVBQVMsRUFBQyxVQUFqQjtBQUFBLDhCQUNJO0FBQUEsK0JBQ0k7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQU9JO0FBQUEsa0JBQ0tlO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBZUgsQ0FwQ0Q7O0dBQU1aLE07O0tBQUFBLE07QUFzQ04sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmFxcy9bZmFxXS5kOWUxY2MzMTg1MjZjNjM2ZmRkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtnZXRGQVFJbmNvbWV9IGZyb20gJy4uLy4uLy4uL2FwaS9hcGknXHJcbmltcG9ydCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdG9yZSBmcm9tICcuLi8uLi8uLi9TdG9yZS9jb250ZXh0J1xyXG5cclxuXHJcbmNvbnN0IEluY29tZUNvbnRlbnRzID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMCcsXHJcbiAgICAgICAgdGl0bGU6ICdRdWVzdGlvbicsXHJcbiAgICAgICAgY29udGVudHM6ICdyZWFjdCBjaGFtIGRqZnVxZWsgZGpmdWRuaidcclxuICAgIH0sIHtcclxuICAgICAgICBpZDogJzEnLFxyXG4gICAgICAgIHRpdGxlOiAnaGVsbG8gSW5jb21lIDEnLFxyXG4gICAgICAgIGNvbnRlbnRzOiAncmVhY3QgY2hhbSBkamZ1cWVrIGRqZnVkbmoxJ1xyXG4gICAgfVxyXG5dXHJcblxyXG5cclxuY29uc3QgSW5jb21lID0gKCkgPT4ge1xyXG4gICAgLy9odHRwOi8vbG9jYWxob3N0OjQwMDAvZ2V0RkFRSW5jb21lXHJcblxyXG4gICAgY29uc3Qge3N0YXRlLGRpc3BhdGNofSA9IHVzZUNvbnRleHQoU3RvcmUpXHJcblxyXG4gICAgdXNlRWZmZWN0KCBhc3luYyAoKT0+e1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9nZXRGQVFJbmNvbWUnKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTonRkFRX0dFVCcscGF5bG9hZDpkYXRhfSlcclxuICAgICAgICBcclxuICAgIH0sW10pXHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICBjb25zdCBJbmNvbWVMaXN0ID0gSW5jb21lQ29udGVudHMubWFwKCh2KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRyIGtleT17di5pZH0+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3YuaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD48TGluayBocmVmPVwiXCI+PGE+e3YudGl0bGV9PC9hPjwvTGluaz48L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiRmFxVGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Oby48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+RkFRPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7SW5jb21lTGlzdH1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluY29tZSJdLCJzb3VyY2VSb290IjoiIn0=