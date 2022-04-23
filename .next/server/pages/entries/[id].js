"use strict";
(() => {
var exports = {};
exports.id = 809;
exports.ids = [809];
exports.modules = {

/***/ 7179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "EntryPage": () => (/* binding */ EntryPage),
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "mongoose"
const external_mongoose_namespaceObject = require("mongoose");
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_namespaceObject);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/icons-material/SaveOutlined"
var SaveOutlined_ = __webpack_require__(8333);
var SaveOutlined_default = /*#__PURE__*/__webpack_require__.n(SaveOutlined_);
// EXTERNAL MODULE: ./components/layouts/index.ts + 1 modules
var layouts = __webpack_require__(867);
;// CONCATENATED MODULE: ./database/db.ts

/** STATUS OF CONNECTIONS
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */ const mongoConnection = {
    isConnected: 0
};
const connect = async ()=>{
    if (mongoConnection.isConnected === 1) {
        console.log('Ya estamos conectados');
        return;
    }
    if ((external_mongoose_default()).connections.length > 0) {
        mongoConnection.isConnected = (external_mongoose_default()).connections[0].readyState;
        if (mongoConnection.isConnected === 1) {
            console.log('Usando conexi\xf3n anterior');
            return;
        }
        await external_mongoose_default().disconnect();
    }
    await external_mongoose_default().connect(process.env.MONGO_URL || '');
    mongoConnection.isConnected = 1;
    console.log('Conectado a MongoDB:', process.env.MONGO_URL);
};
const disconnect = async ()=>{
    if (false) {}
    await external_mongoose_default().disconnect();
    if (mongoConnection.isConnected === 0) return;
    console.log('Desconectado de MongoDB');
};

;// CONCATENATED MODULE: ./models/Entry.ts

const entrySchema = new external_mongoose_namespaceObject.Schema({
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Number
    },
    status: {
        type: String,
        enum: {
            values: [
                'pending',
                'in-progress',
                'finished'
            ],
            message: '{VALUE} no es un estado permitido'
        },
        default: 'pending'
    }
});
const EntryModel = (external_mongoose_default()).models.Entry || external_mongoose_default().model('Entry', entrySchema);
/* harmony default export */ const Entry = (EntryModel);

;// CONCATENATED MODULE: ./models/index.ts


;// CONCATENATED MODULE: ./database/dbEntries.ts




const getEntryById = async (id)=>{
    if (!(0,external_mongoose_namespaceObject.isValidObjectId)(id)) return null;
    await connect();
    const entry = await Entry.findById(id).lean();
    await disconnect();
    return JSON.parse(JSON.stringify(entry));
};

;// CONCATENATED MODULE: ./database/seed-data.ts
const seedData = {
    entries: [
        {
            description: 'Pendiente: Lorem ipsum, dior dolor duis elit sumit ui laborum',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            description: 'En Progreso: Lorem ipsum, dior dolor duis elit sumit ui laborum',
            status: 'in-progress',
            createdAt: Date.now()
        },
        {
            description: 'Terminado: Lorem ipsum, dior dolor duis elit sumit ui laborum',
            status: 'finished',
            createdAt: Date.now()
        }, 
    ]
};

;// CONCATENATED MODULE: ./database/index.ts






// EXTERNAL MODULE: ./context/entries/EntriesContext.tsx
var EntriesContext = __webpack_require__(2719);
// EXTERNAL MODULE: ./utils/index.ts + 1 modules
var utils = __webpack_require__(6906);
;// CONCATENATED MODULE: ./pages/entries/[id].tsx









const validStatus = [
    'pending',
    'in-progress',
    'finished'
];
const EntryPage = ({ entry  })=>{
    const { updateEntry  } = (0,external_react_.useContext)(EntriesContext/* EntriesContext */.t);
    const { 0: inputValue , 1: setInputValue  } = (0,external_react_.useState)(entry.description);
    const { 0: status , 1: setStatus  } = (0,external_react_.useState)(entry.status);
    const { 0: touched , 1: setTouched  } = (0,external_react_.useState)(false);
    const isNotValid = (0,external_react_.useMemo)(()=>inputValue.length <= 0 && touched
    , [
        inputValue,
        touched
    ]);
    const onInputValueChanged = (event)=>{
        setInputValue(event.target.value);
    };
    const onStatusChanged = (event)=>{
        console.log(event.target.value);
        setStatus(event.target.value);
    };
    const onSave = ()=>{
        if (inputValue.trim().length === 0) return;
        const updatedEntry = {
            ...entry,
            status,
            description: inputValue
        };
        updateEntry(updatedEntry);
    };
    // const onDeleted = async ({ _id, description, status }: Entry) => {
    //     const { data } = await entriesApi.delete(`/entries/${_id}`)
    // }
    return(/*#__PURE__*/ jsx_runtime_.jsx(layouts/* Layout */.A, {
        title: inputValue.substring(0, 25) + '...',
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
            container: true,
            justifyContent: "center",
            sx: {
                marginTop: 2
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                item: true,
                xs: 12,
                sm: 8,
                md: 6,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Card, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Card, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.CardHeader, {
                                title: `Tarea:`,
                                subheader: `${utils/* dateFunctions.getFortmatDistanceToNow */.P.getFortmatDistanceToNow(entry.createdAt)}`
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.CardContent, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                    sx: {
                                        marginTop: 2,
                                        marginBottom: 1
                                    },
                                    fullWidth: true,
                                    placeholder: "Nueva entrada",
                                    autoFocus: true,
                                    multiline: true,
                                    label: "Nueva Entrada",
                                    value: inputValue,
                                    onChange: onInputValueChanged,
                                    onBlur: ()=>setTouched(true)
                                    ,
                                    helperText: isNotValid && 'Ingrese un valor',
                                    error: isNotValid
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.FormControl, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.FormLabel, {
                                            children: "Estado:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.RadioGroup, {
                                            row: true,
                                            value: status,
                                            onChange: onStatusChanged,
                                            children: validStatus.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.FormControlLabel, {
                                                    value: option,
                                                    control: /*#__PURE__*/ jsx_runtime_.jsx(material_.Radio, {}),
                                                    label: (0,material_.capitalize)(option)
                                                }, option)
                                            )
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.CardActions, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx((SaveOutlined_default()), {}),
                                variant: "contained",
                                fullWidth: true,
                                onClick: onSave,
                                disabled: inputValue.length <= 0,
                                children: "Save"
                            })
                        })
                    ]
                })
            })
        })
    }));
};
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
const getServerSideProps = async ({ params  })=>{
    const { id  } = params;
    const entry = await getEntryById(id);
    if (!(0,external_mongoose_namespaceObject.isValidObjectId)(id)) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        };
    }
    return {
        props: {
            entry
        }
    };
};
/* harmony default export */ const _id_ = (EntryPage);


/***/ }),

/***/ 3982:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AddCircleOutlineOutlined");

/***/ }),

/***/ 5386:
/***/ ((module) => {

module.exports = require("@mui/icons-material/EmailOutlined");

/***/ }),

/***/ 8409:
/***/ ((module) => {

module.exports = require("@mui/icons-material/InboxOutlined");

/***/ }),

/***/ 6248:
/***/ ((module) => {

module.exports = require("@mui/icons-material/MenuOutlined");

/***/ }),

/***/ 8333:
/***/ ((module) => {

module.exports = require("@mui/icons-material/SaveOutlined");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 7986:
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 5564:
/***/ ((module) => {

module.exports = require("date-fns/locale");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,642,867], () => (__webpack_exec__(7179)));
module.exports = __webpack_exports__;

})();