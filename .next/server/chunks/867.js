exports.id = 867;
exports.ids = [867];
exports.modules = {

/***/ 8920:
/***/ ((module) => {

// Exports
module.exports = {
	"dragging": "EntryList_dragging__vKEe7"
};


/***/ }),

/***/ 867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* reexport */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(7986);
// EXTERNAL MODULE: ./components/ui/index.ts + 5 modules
var ui = __webpack_require__(2927);
;// CONCATENATED MODULE: ./components/layouts/Layout.tsx




const Layout = ({ title ='Traffic Task' , children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(system_.Box, {
        sx: {
            flexFlow: 1
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ui/* Navbar */.wp, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(ui/* Sidebar */.YE, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(system_.Box, {
                sx: {
                    padding: '10px 20px'
                },
                children: children
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/layouts/index.ts



/***/ }),

/***/ 2927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fT": () => (/* reexport */ EntryList),
  "wp": () => (/* reexport */ Navbar),
  "Tk": () => (/* reexport */ NewEntry),
  "YE": () => (/* reexport */ Sidebar)
});

// UNUSED EXPORTS: EntryCard

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/icons-material/MenuOutlined"
var MenuOutlined_ = __webpack_require__(6248);
var MenuOutlined_default = /*#__PURE__*/__webpack_require__.n(MenuOutlined_);
// EXTERNAL MODULE: ./context/ui/index.ts + 2 modules
var ui = __webpack_require__(9241);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/ui/Navbar.tsx







const Navbar = ()=>{
    const { openSideMenu  } = (0,external_react_.useContext)(ui/* UIContext */.QE);
    const router = (0,router_.useRouter)();
    // let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // const currentDateTime = new Date();
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.AppBar, {
        position: "sticky",
        elevation: 8,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Toolbar, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                    size: "large",
                    edge: "start",
                    onClick: openSideMenu,
                    sx: {
                        color: '#fff'
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((MenuOutlined_default()), {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                            underline: "none",
                            color: "white",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                variant: "h6",
                                children: "brainon24 Tasks - DDH"
                            })
                        })
                    })
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: external "@mui/icons-material/InboxOutlined"
var InboxOutlined_ = __webpack_require__(8409);
var InboxOutlined_default = /*#__PURE__*/__webpack_require__.n(InboxOutlined_);
// EXTERNAL MODULE: external "@mui/icons-material/EmailOutlined"
var EmailOutlined_ = __webpack_require__(5386);
var EmailOutlined_default = /*#__PURE__*/__webpack_require__.n(EmailOutlined_);
;// CONCATENATED MODULE: ./components/ui/Sidebar.tsx






const menuItems = [
    'Inbox',
    'Starred',
    'Send Email',
    'Drafts'
];
const Sidebar = ()=>{
    const { sidemenuOpen , closeSideMenu  } = (0,external_react_.useContext)(ui/* UIContext */.QE);
    const currentYear = new Date();
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Drawer, {
        anchor: "left",
        open: sidemenuOpen,
        onClose: closeSideMenu,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
            sx: {
                width: 250
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        padding: '50px 0px 10px 0px'
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                        style: {
                            margin: 'auto'
                        },
                        src: "../../public/logo.png",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.List, {
                    children: menuItems.map((text, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItem, {
                            button: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemIcon, {
                                    children: index % 2 ? /*#__PURE__*/ jsx_runtime_.jsx((InboxOutlined_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((EmailOutlined_default()), {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemText, {
                                    primary: text
                                })
                            ]
                        }, text)
                    )
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.List, {
                    children: menuItems.map((text, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItem, {
                            button: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemIcon, {
                                    children: index % 2 ? /*#__PURE__*/ jsx_runtime_.jsx((InboxOutlined_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((EmailOutlined_default()), {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemText, {
                                    primary: text
                                })
                            ]
                        }, text)
                    )
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        margin: '40px 0px 10px 0px'
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            variant: "h6",
                            style: {
                                textAlign: 'center',
                                margin: '0px 10px'
                            },
                            children: " Powered By: Ing. David Diaz H. para brainon24"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                            variant: "body1",
                            style: {
                                textAlign: 'center'
                            },
                            children: [
                                currentYear.getFullYear(),
                                "."
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ./utils/index.ts + 1 modules
var utils = __webpack_require__(6906);
// EXTERNAL MODULE: ./context/ui/UIContext.tsx
var UIContext = __webpack_require__(6715);
;// CONCATENATED MODULE: ./components/ui/EntryCard.tsx






const EntryCard = ({ entry  })=>{
    const { startDragging , endDragging  } = (0,external_react_.useContext)(UIContext/* UIContext */.Q);
    const router = (0,router_.useRouter)();
    const onDragStart = (event)=>{
        event.dataTransfer.setData('text', entry._id);
        startDragging();
    };
    const onDragEnd = ()=>{
        endDragging();
    };
    const onClick = ()=>{
        router.push(`/entries/${entry._id}`);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Card, {
        sx: {
            marginBotom: 1,
            margin: '10px 0px',
            boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'
        },
        //Eventos Drag And Drop
        draggable: true,
        onDragStart: onDragStart,
        onDragEnd: onDragEnd,
        onClick: onClick,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.CardActionArea, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.CardContent, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        sx: {
                            whiteSpace: 'pre-line'
                        },
                        children: entry.description.length > 60 ? entry.description.substring(0, 60) + '...' : entry.description
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.CardActions, {
                    sx: {
                        display: 'flex',
                        justifyContent: 'end',
                        paddingRight: 2
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        variant: "body2",
                        children: `${utils/* dateFunctions.getFortmatDistanceToNow */.P.getFortmatDistanceToNow(entry.createdAt)}`
                    })
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ./context/entries/index.ts + 4 modules
var entries = __webpack_require__(7759);
// EXTERNAL MODULE: ./components/ui/EntryList.module.css
var EntryList_module = __webpack_require__(8920);
var EntryList_module_default = /*#__PURE__*/__webpack_require__.n(EntryList_module);
;// CONCATENATED MODULE: ./components/ui/EntryList.tsx








const EntryList = ({ status  })=>{
    const { entries: entries1 , updateEntry  } = (0,external_react_.useContext)(entries/* EntriesContext */.te);
    const { isDragging , endDragging  } = (0,external_react_.useContext)(ui/* UIContext */.QE);
    const entriesByStatus = (0,external_react_.useMemo)(()=>entries1.filter((entries)=>entries.status === status
        )
    , [
        entries1
    ]);
    const allowDrop = (event)=>{
        event.preventDefault();
    };
    const onDropEntry = (event)=>{
        const id = event.dataTransfer.getData('text');
        const entry = entries1.find((e)=>e._id === id
        );
        entry.status = status;
        updateEntry(entry);
        endDragging();
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        onDrop: onDropEntry,
        onDragOver: allowDrop,
        className: isDragging ? (EntryList_module_default()).dragging : '',
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Paper, {
            sx: {
                height: 'calc(100vh - 180px)',
                overflow: 'scroll',
                backgroundColor: 'transparent',
                padding: '5px 10px'
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.List, {
                sx: {
                    opacity: isDragging ? 0.2 : 1,
                    transition: 'all 0.3s'
                },
                children: entriesByStatus.map((entry)=>/*#__PURE__*/ jsx_runtime_.jsx(EntryCard, {
                        entry: entry
                    }, entry._id)
                )
            })
        })
    }));
};

// EXTERNAL MODULE: external "@mui/icons-material/SaveOutlined"
var SaveOutlined_ = __webpack_require__(8333);
var SaveOutlined_default = /*#__PURE__*/__webpack_require__.n(SaveOutlined_);
// EXTERNAL MODULE: external "@mui/icons-material/AddCircleOutlineOutlined"
var AddCircleOutlineOutlined_ = __webpack_require__(3982);
var AddCircleOutlineOutlined_default = /*#__PURE__*/__webpack_require__.n(AddCircleOutlineOutlined_);
// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(7986);
// EXTERNAL MODULE: ./context/entries/EntriesContext.tsx
var EntriesContext = __webpack_require__(2719);
;// CONCATENATED MODULE: ./components/ui/NewEntry.tsx








const NewEntry = ()=>{
    const { addNewEntry  } = (0,external_react_.useContext)(EntriesContext/* EntriesContext */.t);
    const { isAddingEntry , setIsAddingEntry  } = (0,external_react_.useContext)(ui/* UIContext */.QE);
    const { 0: inputValue , 1: setInputValue  } = (0,external_react_.useState)('');
    const { 0: touched , 1: setTouched  } = (0,external_react_.useState)(false);
    const onTextFieldChanged = (event)=>{
        setInputValue(event.target.value);
    };
    const onSave = ()=>{
        if (inputValue.length === 0) return;
        console.log(inputValue);
        addNewEntry(inputValue);
        setIsAddingEntry(false);
        setTouched(false);
        setInputValue('');
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(system_.Box, {
        sx: {
            marginBottom: 2,
            paddingX: 2
        },
        children: isAddingEntry ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                    fullWidth: true,
                    sx: {
                        marginTop: 2,
                        marginBottom: 1
                    },
                    //placeholder='Nueva Entrada'
                    autoFocus: true,
                    multiline: true,
                    label: "Nueva Tarea",
                    helperText: inputValue.length <= 1 && touched && 'Ingrese un valor',
                    error: inputValue.length <= 1 && touched,
                    value: inputValue,
                    onChange: onTextFieldChanged,
                    onBlur: ()=>setTouched(true)
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(system_.Box, {
                    display: "flex",
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                            variant: "text",
                            onClick: ()=>setIsAddingEntry(false)
                            ,
                            color: "error",
                            children: "Cancelar"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                            variant: "outlined",
                            color: "secondary",
                            endIcon: /*#__PURE__*/ jsx_runtime_.jsx((SaveOutlined_default()), {}),
                            onClick: onSave,
                            children: "Guardar"
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
            startIcon: /*#__PURE__*/ jsx_runtime_.jsx((AddCircleOutlineOutlined_default()), {}),
            fullWidth: true,
            variant: "outlined",
            onClick: ()=>setIsAddingEntry(true)
            ,
            children: "Agregar Tarea"
        })
    }));
};

;// CONCATENATED MODULE: ./components/ui/index.ts







/***/ }),

/***/ 6906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* reexport */ dateFunctions_namespaceObject)
});

// UNUSED EXPORTS: dateComplet

// NAMESPACE OBJECT: ./utils/dateFunctions.ts
var dateFunctions_namespaceObject = {};
__webpack_require__.r(dateFunctions_namespaceObject);
__webpack_require__.d(dateFunctions_namespaceObject, {
  "getFortmatDistanceToNow": () => (getFortmatDistanceToNow)
});

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
// EXTERNAL MODULE: external "date-fns/locale"
var locale_ = __webpack_require__(5564);
;// CONCATENATED MODULE: ./utils/dateFunctions.ts


const getFortmatDistanceToNow = (date)=>{
    const fromNow = (0,external_date_fns_.formatDistanceToNow)(date, {
        locale: locale_.es
    });
    return `Hace ${fromNow}`;
};

;// CONCATENATED MODULE: ./utils/index.ts






/***/ })

};
;