"use strict";
exports.id = 188;
exports.ids = [188];
exports.modules = {

/***/ 3188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "db": () => (/* reexport */ db_namespaceObject),
  "W": () => (/* reexport */ seedData)
});

// UNUSED EXPORTS: dbEntries

// NAMESPACE OBJECT: ./database/db.ts
var db_namespaceObject = {};
__webpack_require__.r(db_namespaceObject);
__webpack_require__.d(db_namespaceObject, {
  "connect": () => (connect),
  "disconnect": () => (disconnect)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
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

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./models/index.ts + 1 modules
var models = __webpack_require__(2091);
;// CONCATENATED MODULE: ./database/dbEntries.ts




const getEntryById = async (id)=>{
    if (!isValidObjectId(id)) return null;
    await db.connect();
    const entry = await Entry.findById(id).lean();
    await db.disconnect();
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







/***/ }),

/***/ 2091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": () => (/* reexport */ Entry)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./models/Entry.ts

const entrySchema = new external_mongoose_.Schema({
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



/***/ })

};
;