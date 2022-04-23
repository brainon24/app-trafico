"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "@mui/material/colors"
const colors_namespaceObject = require("@mui/material/colors");
;// CONCATENATED MODULE: ./themes/dark-theme.ts


const darkTheme = (0,material_.createTheme)({
    palette: {
        mode: 'dark',
        secondary: {
            main: '#19857b'
        },
        error: {
            main: colors_namespaceObject.red.A400
        }
    },
    components: {
        MuiAppBar: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    backgroundColor: '#4a148c'
                }
            }
        }
    }
});

;// CONCATENATED MODULE: ./themes/light-theme.ts


const lightTheme = (0,material_.createTheme)({
    palette: {
        mode: 'light',
        background: {
            default: colors_namespaceObject.grey[300]
        },
        primary: {
            main: '#0a91ab' //#4a148c
        },
        secondary: {
            main: '#19857b'
        },
        error: {
            main: colors_namespaceObject.red.A400
        }
    },
    components: {
        MuiAppBar: {
            defaultProps: {},
            styleOverrides: {
                root: {}
            }
        }
    }
});

;// CONCATENATED MODULE: ./themes/index.ts



// EXTERNAL MODULE: ./context/ui/index.ts + 2 modules
var ui = __webpack_require__(9241);
// EXTERNAL MODULE: ./context/entries/index.ts + 4 modules
var entries = __webpack_require__(7759);
// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__(3142);
;// CONCATENATED MODULE: ./pages/_app.tsx







function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_notistack_.SnackbarProvider, {
        maxSnack: 3,
        children: /*#__PURE__*/ jsx_runtime_.jsx(entries/* EntriesProvider */.qj, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(ui/* UIProvider */.JP, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ThemeProvider, {
                    theme: lightTheme,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.CssBaseline, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    ]
                })
            })
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3142:
/***/ ((module) => {

module.exports = require("notistack");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [642], () => (__webpack_exec__(7259)));
module.exports = __webpack_exports__;

})();