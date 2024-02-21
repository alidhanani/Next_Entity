"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _lib_apolloClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/apolloClient */ \"./src/lib/apolloClient.ts\");\n/* harmony import */ var _components_AddEntityModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/AddEntityModal */ \"./src/components/AddEntityModal.tsx\");\n/* harmony import */ var _components_UpdateEntityModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/UpdateEntityModal */ \"./src/components/UpdateEntityModal.tsx\");\n/* harmony import */ var _service_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/service/store */ \"./src/service/store.ts\");\n/* harmony import */ var _components_CompanyTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/CompanyTable */ \"./src/components/CompanyTable.tsx\");\n/* harmony import */ var _components_ContactTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/ContactTable */ \"./src/components/ContactTable.tsx\");\n/* harmony import */ var _barrel_optimize_names_Tab_headlessui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Tab!=!@headlessui/react */ \"__barrel_optimize__?names=Tab!=!./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  query {\\n    getEntities {\\n      id\\n      name\\n      ... on Contact {\\n        email\\n        phone\\n      }\\n      ... on Company {\\n        industry\\n        contactEmail\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst GET_ENTITIES = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.gql)(_templateObject());\nconst Home = ()=>{\n    _s();\n    const { loading, error, data, refetch } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery)(GET_ENTITIES, {\n        client: _lib_apolloClient__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    });\n    const dataList = (0,_service_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((state)=>state.setDataList);\n    const allDataList = (0,_service_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((state)=>state.setAllData);\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isUpdateModalOpen, setIsUpdateModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [updateData, setUpdateData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const didUpdate = (0,_service_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((state)=>state.didAdd);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (data) {\n            allDataList(data.getEntities);\n        }\n        console.log(data);\n        if (didUpdate) {\n            refetch(); // Trigger a refetch when didUpdate changes\n        }\n    }, [\n        didUpdate\n    ]);\n    const openModal = ()=>{\n        setIsModalOpen(true);\n    };\n    const openModalUpdate = (data)=>{\n        dataList(data);\n        setIsUpdateModalOpen(true);\n    };\n    const closeModal = ()=>{\n        setIsModalOpen(false);\n    };\n    const closeModalUpdate = ()=>{\n        setIsUpdateModalOpen(false);\n    };\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/pages/index.tsx\",\n        lineNumber: 68,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/pages/index.tsx\",\n        lineNumber: 69,\n        columnNumber: 21\n    }, undefined);\n    const companies = data.getEntities.filter((entity)=>entity.__typename === \"Company\");\n    const contacts = data.getEntities.filter((entity)=>entity.__typename === \"Contact\");\n    const tabs = [\n        \"Company\",\n        \"Contact\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-4 py-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold mb-8\",\n                children: \"Entities\"\n            }, void 0, false, {\n                fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/pages/index.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                className: \"bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 mb-8\",\n                onClick: openModal,\n                children: \"Add Entity\"\n            }, void 0, false, {\n                fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/pages/index.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_Tab_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.Group, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_Tab_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.List, {\n                        className: \"flex space-x-1 rounded-xl bg-blue-900/20 p-1\",\n                        children: tabs.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_Tab_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab, {\n                                className: (param)=>{\n                                    let { selected } = param;\n                                    return classNames(\"w-full rounded-lg py-2.5 text-sm font-medium leading-5\", \"ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2\", selected ? \"bg-white text-blue-700 shadow\" : \"text-blue-100 hover:bg-white/[0.12] hover:text-white\");\n                                },\n                                children: data\n                            }, data, false, {\n                                fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/pages/index.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/pages/index.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_Tab_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.Panels, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_Tab_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.Panel, {\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_CompanyTable__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        companies: companies,\n                                        openModalUpdate: openModalUpdate\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/pages/index.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/pages/index.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_barrel_optimize_names_Tab_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.Panel, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ContactTable__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    contacts: contacts,\n                                    openModalUpdate: openModalUpdate\n                                }, void 0, false, {\n                                    fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/pages/index.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/pages/index.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/pages/index.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/pages/index.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_AddEntityModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                isOpen: isModalOpen,\n                onClose: closeModal\n            }, void 0, false, {\n                fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/pages/index.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UpdateEntityModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                isOpen: isUpdateModalOpen,\n                onClose: closeModalUpdate\n            }, void 0, false, {\n                fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/pages/index.tsx\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/pages/index.tsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"YcGGfl1wMoQcWWSgal+US7uhF9U=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery,\n        _service_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _service_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _service_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNvRCxRQUFRbkM7Z0JBQWFvQyxTQUFTdkI7Ozs7OzswQkFDOUMsOERBQUM3QixxRUFBaUJBO2dCQUNoQm1ELFFBQVFqQztnQkFDUmtDLFNBQVN0Qjs7Ozs7Ozs7Ozs7O0FBSWpCO0dBeEdNeEI7O1FBQ3NDVCxvREFBUUE7UUFJakNJLHNEQUFZQTtRQUNUQSxzREFBWUE7UUFJZEEsc0RBQVlBOzs7S0FWMUJLO0FBMEdOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vbGliL2Fwb2xsb0NsaWVudFwiO1xuaW1wb3J0IEFkZEVudGl0eU1vZGFsIGZyb20gXCJAL2NvbXBvbmVudHMvQWRkRW50aXR5TW9kYWxcIjtcbmltcG9ydCBVcGRhdGVFbnRpdHlNb2RhbCBmcm9tIFwiQC9jb21wb25lbnRzL1VwZGF0ZUVudGl0eU1vZGFsXCI7XG5pbXBvcnQgdXNlVXNlclN0b3JlIGZyb20gXCJAL3NlcnZpY2Uvc3RvcmVcIjtcbmltcG9ydCBDb21wYW55VGFibGUgZnJvbSBcIkAvY29tcG9uZW50cy9Db21wYW55VGFibGVcIjtcbmltcG9ydCBDb250YWN0VGFibGUgZnJvbSBcIkAvY29tcG9uZW50cy9Db250YWN0VGFibGVcIjtcbmltcG9ydCB7IFRhYiB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xuXG5jb25zdCBHRVRfRU5USVRJRVMgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICBnZXRFbnRpdGllcyB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgLi4uIG9uIENvbnRhY3Qge1xuICAgICAgICBlbWFpbFxuICAgICAgICBwaG9uZVxuICAgICAgfVxuICAgICAgLi4uIG9uIENvbXBhbnkge1xuICAgICAgICBpbmR1c3RyeVxuICAgICAgICBjb250YWN0RW1haWxcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEsIHJlZmV0Y2ggfSA9IHVzZVF1ZXJ5KEdFVF9FTlRJVElFUywge1xuICAgIGNsaWVudDogY2xpZW50XG4gIH0pO1xuXG4gIGNvbnN0IGRhdGFMaXN0ID0gdXNlVXNlclN0b3JlKChzdGF0ZSkgPT4gc3RhdGUuc2V0RGF0YUxpc3QpO1xuICBjb25zdCBhbGxEYXRhTGlzdCA9IHVzZVVzZXJTdG9yZSgoc3RhdGUpID0+IHN0YXRlLnNldEFsbERhdGEpO1xuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzVXBkYXRlTW9kYWxPcGVuLCBzZXRJc1VwZGF0ZU1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1cGRhdGVEYXRhLCBzZXRVcGRhdGVEYXRhXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBkaWRVcGRhdGUgPSB1c2VVc2VyU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5kaWRBZGQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGFsbERhdGFMaXN0KGRhdGEuZ2V0RW50aXRpZXMpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgIGlmIChkaWRVcGRhdGUpIHtcbiAgICAgIHJlZmV0Y2goKTsgLy8gVHJpZ2dlciBhIHJlZmV0Y2ggd2hlbiBkaWRVcGRhdGUgY2hhbmdlc1xuICAgIH1cbiAgfSwgW2RpZFVwZGF0ZV0pO1xuXG4gIGNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgICBzZXRJc01vZGFsT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBvcGVuTW9kYWxVcGRhdGUgPSAoZGF0YSkgPT4ge1xuICAgIGRhdGFMaXN0KGRhdGEpO1xuICAgIHNldElzVXBkYXRlTW9kYWxPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0SXNNb2RhbE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlTW9kYWxVcGRhdGUgPSAoKSA9PiB7XG4gICAgc2V0SXNVcGRhdGVNb2RhbE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xuXG4gIGNvbnN0IGNvbXBhbmllcyA9IGRhdGEuZ2V0RW50aXRpZXMuZmlsdGVyKFxuICAgIChlbnRpdHkpID0+IGVudGl0eS5fX3R5cGVuYW1lID09PSBcIkNvbXBhbnlcIlxuICApO1xuICBjb25zdCBjb250YWN0cyA9IGRhdGEuZ2V0RW50aXRpZXMuZmlsdGVyKFxuICAgIChlbnRpdHkpID0+IGVudGl0eS5fX3R5cGVuYW1lID09PSBcIkNvbnRhY3RcIlxuICApO1xuXG4gIGNvbnN0IHRhYnMgPSBbXCJDb21wYW55XCIsIFwiQ29udGFjdFwiXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS04XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLThcIj5FbnRpdGllczwvaDE+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNiBweS0zIHJvdW5kZWQgaG92ZXI6YmctYmx1ZS02MDAgbWItOFwiXG4gICAgICAgIG9uQ2xpY2s9e29wZW5Nb2RhbH1cbiAgICAgID5cbiAgICAgICAgQWRkIEVudGl0eVxuICAgICAgPC9idXR0b24+XG4gICAgICA8VGFiLkdyb3VwPlxuICAgICAgICA8VGFiLkxpc3QgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTEgcm91bmRlZC14bCBiZy1ibHVlLTkwMC8yMCBwLTFcIj5cbiAgICAgICAgICB7dGFicy5tYXAoKGRhdGEpID0+IChcbiAgICAgICAgICAgIDxUYWJcbiAgICAgICAgICAgICAga2V5PXtkYXRhfSAvLyBVc2UgZGF0YSBhcyB0aGUga2V5LCBhc3N1bWluZyBpdCB1bmlxdWVseSBpZGVudGlmaWVzIGVhY2ggdGFiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgc2VsZWN0ZWQgfSkgPT5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgICAgXCJ3LWZ1bGwgcm91bmRlZC1sZyBweS0yLjUgdGV4dC1zbSBmb250LW1lZGl1bSBsZWFkaW5nLTVcIixcbiAgICAgICAgICAgICAgICAgIFwicmluZy13aGl0ZS82MCByaW5nLW9mZnNldC0yIHJpbmctb2Zmc2V0LWJsdWUtNDAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTJcIixcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgID8gXCJiZy13aGl0ZSB0ZXh0LWJsdWUtNzAwIHNoYWRvd1wiXG4gICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWJsdWUtMTAwIGhvdmVyOmJnLXdoaXRlL1swLjEyXSBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2RhdGF9XG4gICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9UYWIuTGlzdD5cbiAgICAgICAgPFRhYi5QYW5lbHM+XG4gICAgICAgICAgPFRhYi5QYW5lbD5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIDxDb21wYW55VGFibGVcbiAgICAgICAgICAgICAgY29tcGFuaWVzPXtjb21wYW5pZXN9XG4gICAgICAgICAgICAgIG9wZW5Nb2RhbFVwZGF0ZT17b3Blbk1vZGFsVXBkYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1RhYi5QYW5lbD5cbiAgICAgICAgICA8VGFiLlBhbmVsPlxuICAgICAgICAgICAgPENvbnRhY3RUYWJsZVxuICAgICAgICAgICAgICBjb250YWN0cz17Y29udGFjdHN9XG4gICAgICAgICAgICAgIG9wZW5Nb2RhbFVwZGF0ZT17b3Blbk1vZGFsVXBkYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1RhYi5QYW5lbD5cbiAgICAgICAgPC9UYWIuUGFuZWxzPlxuICAgICAgPC9UYWIuR3JvdXA+XG5cbiAgICAgIDxBZGRFbnRpdHlNb2RhbCBpc09wZW49e2lzTW9kYWxPcGVufSBvbkNsb3NlPXtjbG9zZU1vZGFsfSAvPlxuICAgICAgPFVwZGF0ZUVudGl0eU1vZGFsXG4gICAgICAgIGlzT3Blbj17aXNVcGRhdGVNb2RhbE9wZW59XG4gICAgICAgIG9uQ2xvc2U9e2Nsb3NlTW9kYWxVcGRhdGV9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ3FsIiwidXNlUXVlcnkiLCJjbGllbnQiLCJBZGRFbnRpdHlNb2RhbCIsIlVwZGF0ZUVudGl0eU1vZGFsIiwidXNlVXNlclN0b3JlIiwiQ29tcGFueVRhYmxlIiwiQ29udGFjdFRhYmxlIiwiVGFiIiwiR0VUX0VOVElUSUVTIiwiSG9tZSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJyZWZldGNoIiwiZGF0YUxpc3QiLCJzdGF0ZSIsInNldERhdGFMaXN0IiwiYWxsRGF0YUxpc3QiLCJzZXRBbGxEYXRhIiwiaXNNb2RhbE9wZW4iLCJzZXRJc01vZGFsT3BlbiIsImlzVXBkYXRlTW9kYWxPcGVuIiwic2V0SXNVcGRhdGVNb2RhbE9wZW4iLCJ1cGRhdGVEYXRhIiwic2V0VXBkYXRlRGF0YSIsImRpZFVwZGF0ZSIsImRpZEFkZCIsImdldEVudGl0aWVzIiwiY29uc29sZSIsImxvZyIsIm9wZW5Nb2RhbCIsIm9wZW5Nb2RhbFVwZGF0ZSIsImNsb3NlTW9kYWwiLCJjbG9zZU1vZGFsVXBkYXRlIiwicCIsIm1lc3NhZ2UiLCJjb21wYW5pZXMiLCJmaWx0ZXIiLCJlbnRpdHkiLCJfX3R5cGVuYW1lIiwiY29udGFjdHMiLCJ0YWJzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiR3JvdXAiLCJMaXN0IiwibWFwIiwic2VsZWN0ZWQiLCJjbGFzc05hbWVzIiwiUGFuZWxzIiwiUGFuZWwiLCJpc09wZW4iLCJvbkNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});