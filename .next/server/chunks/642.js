"use strict";
exports.id = 642;
exports.ids = [642];
exports.modules = {

/***/ 2719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ EntriesContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const EntriesContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});


/***/ }),

/***/ 7759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "te": () => (/* reexport */ EntriesContext/* EntriesContext */.t),
  "qj": () => (/* reexport */ EntriesProvider),
  "De": () => (/* reexport */ entriesReducer)
});

// EXTERNAL MODULE: ./context/entries/EntriesContext.tsx
var EntriesContext = __webpack_require__(2719);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./apis/entriesApi.ts

const entriesApi = external_axios_default().create({
    baseURL: '/api'
});
/* harmony default export */ const apis_entriesApi = (entriesApi);

;// CONCATENATED MODULE: ./apis/index.ts


// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__(3142);
;// CONCATENATED MODULE: ./context/entries/EntriesProvider.tsx





const Entries_INITIAL_STATE = {
    entries: []
};
const EntriesProvider = ({ children  })=>{
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(entriesReducer, Entries_INITIAL_STATE);
    const { enqueueSnackbar  } = (0,external_notistack_.useSnackbar)();
    const addNewEntry = async (description)=>{
        // const newEntry: Entry = {
        //     _id: uuidv4(),
        //     description,
        //     createdAt: Date.now(),
        //     status: 'pending'
        // }
        const { data  } = await apis_entriesApi.post('/entries', {
            description
        });
        dispatch({
            type: 'Entry - Add-Entry',
            payload: data
        });
    };
    const updateEntry = async ({ _id , description , status  })=>{
        try {
            const { data  } = await apis_entriesApi.put(`/entries/${_id}`, {
                description,
                status
            });
            dispatch({
                type: 'Entry - Entry-Update',
                payload: data
            });
            enqueueSnackbar('Entrada Actualizada', {
                variant: 'success',
                autoHideDuration: 1000,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            });
        } catch (error) {
            console.log({
                error
            });
        }
    };
    const refreshEntries = async ()=>{
        const { data  } = await apis_entriesApi.get('/entries');
        dispatch({
            type: 'Entry - Refresh-Data',
            payload: data
        });
    };
    (0,external_react_.useEffect)(()=>{
        refreshEntries();
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx(EntriesContext/* EntriesContext.Provider */.t.Provider, {
        value: {
            ...state,
            //Methods
            addNewEntry,
            updateEntry
        },
        children: children
    }));
};

;// CONCATENATED MODULE: ./context/entries/entriesReducer.ts
const entriesReducer = (state, action)=>{
    switch(action.type){
        case 'Entry - Add-Entry':
            return {
                entries: [
                    ...state.entries,
                    action.payload
                ]
            };
        case 'Entry - Entry-Update':
            return {
                ...state,
                entries: state.entries.map((entry)=>{
                    if (entry._id === action.payload._id) {
                        entry.status = action.payload.status;
                        entry.description = action.payload.description;
                    }
                    return entry;
                })
            };
        case 'Entry - Refresh-Data':
            return {
                ...state,
                entries: [
                    ...action.payload
                ]
            };
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./context/entries/index.ts





/***/ }),

/***/ 6715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ UIContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const UIContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});


/***/ }),

/***/ 9241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "QE": () => (/* reexport */ UIContext/* UIContext */.Q),
  "JP": () => (/* reexport */ UIProvider),
  "_3": () => (/* reexport */ uiReducer)
});

// EXTERNAL MODULE: ./context/ui/UIContext.tsx
var UIContext = __webpack_require__(6715);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./context/ui/UIProvider.tsx



const UI_INITIAL_STATE = {
    sidemenuOpen: false,
    isAddingEntry: false,
    isDragging: false
};
const UIProvider = ({ children  })=>{
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(uiReducer, UI_INITIAL_STATE);
    const openSideMenu = ()=>{
        dispatch({
            type: 'Ui - Open sidebar'
        });
    };
    const closeSideMenu = ()=>{
        dispatch({
            type: 'Ui - Close sidebar'
        });
    };
    const setIsAddingEntry = (isAdding)=>{
        dispatch({
            type: 'Ui - Set isAddingEntry',
            payload: isAdding
        });
    };
    const startDragging = ()=>{
        dispatch({
            type: 'Ui - Sart Dragging'
        });
    };
    const endDragging = ()=>{
        dispatch({
            type: 'Ui - End Dragging'
        });
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(UIContext/* UIContext.Provider */.Q.Provider, {
        value: {
            ...state,
            //Methods
            openSideMenu,
            closeSideMenu,
            setIsAddingEntry,
            startDragging,
            endDragging
        },
        children: children
    }));
};

;// CONCATENATED MODULE: ./context/ui/uiReducer.ts
const uiReducer = (state, action)=>{
    switch(action.type){
        case 'Ui - Open sidebar':
            return {
                ...state,
                sidemenuOpen: true
            };
        case 'Ui - Close sidebar':
            return {
                ...state,
                sidemenuOpen: false
            };
        case 'Ui - Set isAddingEntry':
            return {
                ...state,
                isAddingEntry: action.payload
            };
        case 'Ui - Sart Dragging':
            return {
                ...state,
                isDragging: true
            };
        case 'Ui - End Dragging':
            return {
                ...state,
                isDragging: false
            };
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./context/ui/index.ts





/***/ })

};
;