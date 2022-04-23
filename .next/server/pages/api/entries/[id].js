"use strict";
(() => {
var exports = {};
exports.id = 78;
exports.ids = [78];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3188);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2091);


function handler(req, res) {
    const { id  } = req.query;
    // if ( !mongoose.isValidObjectId( id ) ){
    //     return res.status(400).json({ message: `El ID ${id} no es valido` })
    // }
    switch(req.method){
        case 'GET':
            return getEntry(req, res);
        case 'PUT':
            return updateEntry(req, res);
        default:
            return res.status(400).json({
                message: 'El METODO no existe'
            });
    }
    res.status(200).json({
        message: 'Example'
    });
};
const getEntry = async (req, res)=>{
    const { id  } = req.query;
    await _database__WEBPACK_IMPORTED_MODULE_0__.db.connect();
    const entryInDB = await _models__WEBPACK_IMPORTED_MODULE_1__/* .Entry.findById */ .k.findById(id);
    await _database__WEBPACK_IMPORTED_MODULE_0__.db.disconnect();
    if (!entryInDB) {
        return res.status(400).json({
            message: `No hay entrada con el ID ${id}`
        });
    }
    return res.status(200).json(entryInDB);
};
const updateEntry = async (req, res)=>{
    const { id  } = req.query;
    await _database__WEBPACK_IMPORTED_MODULE_0__.db.connect();
    const entryToUpdate = await _models__WEBPACK_IMPORTED_MODULE_1__/* .Entry.findById */ .k.findById(id);
    if (!entryToUpdate) {
        return res.status(400).json({
            message: `No hay entrada con el ID ${id}`
        });
    }
    const { description =entryToUpdate.description , status =entryToUpdate.status ,  } = req.body;
    try {
        const updateEntry1 = await _models__WEBPACK_IMPORTED_MODULE_1__/* .Entry.findByIdAndUpdate */ .k.findByIdAndUpdate(id, {
            description,
            status
        }, {
            runValidators: true,
            new: true
        });
        await _database__WEBPACK_IMPORTED_MODULE_0__.db.disconnect();
        return res.status(200).json(updateEntry1);
    } catch (error) {
        console.log(error);
        await _database__WEBPACK_IMPORTED_MODULE_0__.db.disconnect();
        res.status(400).json({
            message: error.errors.status.message
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [188], () => (__webpack_exec__(3865)));
module.exports = __webpack_exports__;

})();