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

/***/ "./src/components/AddEntityModal.tsx":
/*!*******************************************!*\
  !*** ./src/components/AddEntityModal.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _lib_apolloClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/apolloClient */ \"./src/lib/apolloClient.ts\");\n/* harmony import */ var _service_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/service/store */ \"./src/service/store.ts\");\n/* harmony import */ var _forms_insert_EntityForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms/insert/EntityForm */ \"./src/components/forms/insert/EntityForm.tsx\");\n/* harmony import */ var _forms_insert_EntityInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms/insert/EntityInput */ \"./src/components/forms/insert/EntityInput.tsx\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/graphql/queries */ \"./src/graphql/queries.ts\");\n/* harmony import */ var _barrel_optimize_names_Listbox_headlessui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Listbox!=!@headlessui/react */ \"__barrel_optimize__?names=Listbox!=!./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst AddEntityModal = (param)=>{\n    let { isOpen, onClose } = param;\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        phone: \"\",\n        industry: \"\",\n        contactEmail: \"\"\n    });\n    const setDataListStore = (0,_service_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((state)=>state.setDidAdd);\n    const dataList = (0,_service_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((state)=>state.allData);\n    const entity = [\n        {\n            id: 1,\n            name: \"CONTACT\"\n        },\n        {\n            id: 2,\n            name: \"COMPANY\"\n        }\n    ];\n    const [entityType, setEntityType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(entity[0]);\n    const [addEntity] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(_graphql_queries__WEBPACK_IMPORTED_MODULE_6__.ADD_ENTITY, {\n        client: _lib_apolloClient__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    });\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Check if the provided information already exists in dataList\n        const existingEntry = dataList.find((entry)=>{\n            if (entityType.name === \"CONTACT\") {\n                return entry.name === formData.name && entry.email === formData.email && entry.phone === formData.phone;\n            } else if (entityType.name === \"COMPANY\") {\n                return entry.name === formData.name && entry.industry === formData.industry && entry.contactEmail === formData.contactEmail;\n            }\n            return false;\n        });\n        if (existingEntry) {\n            // Show error message\n            alert(\"This entity already exists!\");\n            return;\n        }\n        try {\n            const { data } = await addEntity({\n                variables: {\n                    input: {\n                        ...formData,\n                        entityType\n                    }\n                }\n            });\n            console.log(\"Entity added:\", data.createEntity);\n            setDataListStore();\n            onClose();\n        } catch (error) {\n            console.error(\"Error adding entity:\", error);\n        }\n    };\n    return isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-8 rounded shadow-lg max-w-md w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center mb-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-xl font-semibold text-gray-800\",\n                            children: \"Add Entity\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-gray-500 hover:text-gray-600\",\n                            onClick: onClose,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                className: \"h-6 w-6\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                stroke: \"currentColor\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    strokeWidth: \"2\",\n                                    d: \"M6 18L18 6M6 6l12 12\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_forms_insert_EntityInput__WEBPACK_IMPORTED_MODULE_5__.EntityInput, {\n                            label: \"Name\",\n                            value: formData.name,\n                            onChange: (value)=>setFormData({\n                                    ...formData,\n                                    name: value\n                                })\n                        }, void 0, false, {\n                            fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"entityType\",\n                                    className: \"block text-sm font-medium text-gray-700\",\n                                    children: \"Entity Type\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Listbox_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Listbox, {\n                                    value: entityType,\n                                    onChange: setEntityType,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Listbox_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Listbox.Button, {\n                                            children: entityType ? entityType.name : \"Select Entity\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                                            lineNumber: 113,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Listbox_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Listbox.Options, {\n                                            children: entity.map((entity)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Listbox_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Listbox.Option, {\n                                                    value: entity,\n                                                    as: Fragment,\n                                                    children: (param)=>{\n                                                        let { active, selected } = param;\n                                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                            className: \"\".concat(active ? \"bg-blue-500 text-white\" : \"bg-white text-black\"),\n                                                            children: [\n                                                                selected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CheckIcon, {}, void 0, false, {\n                                                                    fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                                                                    lineNumber: 131,\n                                                                    columnNumber: 40\n                                                                }, undefined),\n                                                                person.name\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                                                            lineNumber: 124,\n                                                            columnNumber: 25\n                                                        }, undefined);\n                                                    }\n                                                }, entity.id, false, {\n                                                    fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                                                    lineNumber: 118,\n                                                    columnNumber: 21\n                                                }, undefined))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                                            lineNumber: 116,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_forms_insert_EntityForm__WEBPACK_IMPORTED_MODULE_4__.EntityForm, {\n                            entityType: entityType.name,\n                            formData: formData,\n                            onChange: (key, value)=>setFormData({\n                                    ...formData,\n                                    [key]: value\n                                })\n                        }, void 0, false, {\n                            fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                            lineNumber: 140,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600\",\n                                children: \"Add\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                                lineNumber: 148,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                            lineNumber: 147,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n            lineNumber: 76,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n        lineNumber: 75,\n        columnNumber: 7\n    }, undefined);\n};\n_s(AddEntityModal, \"7DP3HjffNWz2JfR6akQBjCfygo8=\", false, function() {\n    return [\n        _service_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _service_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation\n    ];\n});\n_c = AddEntityModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddEntityModal);\nvar _c;\n$RefreshReg$(_c, \"AddEntityModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b25lbnRzL0FkZEVudGl0eU1vZGFsLnRzeD9iZWFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCJAL2xpYi9hcG9sbG9DbGllbnRcIjtcbmltcG9ydCB1c2VVc2VyU3RvcmUgZnJvbSBcIkAvc2VydmljZS9zdG9yZVwiO1xuaW1wb3J0IHsgRW50aXR5Rm9ybSB9IGZyb20gXCIuL2Zvcm1zL2luc2VydC9FbnRpdHlGb3JtXCI7XG5pbXBvcnQgeyBFbnRpdHlJbnB1dCB9IGZyb20gXCIuL2Zvcm1zL2luc2VydC9FbnRpdHlJbnB1dFwiO1xuaW1wb3J0IHsgQUREX0VOVElUWSB9IGZyb20gXCJAL2dyYXBocWwvcXVlcmllc1wiO1xuaW1wb3J0IHsgTGlzdGJveCB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xuXG5jb25zdCBBZGRFbnRpdHlNb2RhbCA9ICh7IGlzT3Blbiwgb25DbG9zZSB9KSA9PiB7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgZW1haWw6IFwiXCIsXG4gICAgcGhvbmU6IFwiXCIsXG4gICAgaW5kdXN0cnk6IFwiXCIsXG4gICAgY29udGFjdEVtYWlsOiBcIlwiXG4gIH0pO1xuICBjb25zdCBzZXREYXRhTGlzdFN0b3JlID0gdXNlVXNlclN0b3JlKChzdGF0ZSkgPT4gc3RhdGUuc2V0RGlkQWRkKTtcbiAgY29uc3QgZGF0YUxpc3QgPSB1c2VVc2VyU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5hbGxEYXRhKTtcbiAgY29uc3QgZW50aXR5ID0gW1xuICAgIHsgaWQ6IDEsIG5hbWU6IFwiQ09OVEFDVFwiIH0sXG4gICAgeyBpZDogMiwgbmFtZTogXCJDT01QQU5ZXCIgfVxuICBdO1xuICBjb25zdCBbZW50aXR5VHlwZSwgc2V0RW50aXR5VHlwZV0gPSB1c2VTdGF0ZShlbnRpdHlbMF0pO1xuICBjb25zdCBbYWRkRW50aXR5XSA9IHVzZU11dGF0aW9uKEFERF9FTlRJVFksIHtcbiAgICBjbGllbnQ6IGNsaWVudFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBwcm92aWRlZCBpbmZvcm1hdGlvbiBhbHJlYWR5IGV4aXN0cyBpbiBkYXRhTGlzdFxuICAgIGNvbnN0IGV4aXN0aW5nRW50cnkgPSBkYXRhTGlzdC5maW5kKChlbnRyeSkgPT4ge1xuICAgICAgaWYgKGVudGl0eVR5cGUubmFtZSA9PT0gXCJDT05UQUNUXCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBlbnRyeS5uYW1lID09PSBmb3JtRGF0YS5uYW1lICYmXG4gICAgICAgICAgZW50cnkuZW1haWwgPT09IGZvcm1EYXRhLmVtYWlsICYmXG4gICAgICAgICAgZW50cnkucGhvbmUgPT09IGZvcm1EYXRhLnBob25lXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGVudGl0eVR5cGUubmFtZSA9PT0gXCJDT01QQU5ZXCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBlbnRyeS5uYW1lID09PSBmb3JtRGF0YS5uYW1lICYmXG4gICAgICAgICAgZW50cnkuaW5kdXN0cnkgPT09IGZvcm1EYXRhLmluZHVzdHJ5ICYmXG4gICAgICAgICAgZW50cnkuY29udGFjdEVtYWlsID09PSBmb3JtRGF0YS5jb250YWN0RW1haWxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIGlmIChleGlzdGluZ0VudHJ5KSB7XG4gICAgICAvLyBTaG93IGVycm9yIG1lc3NhZ2VcbiAgICAgIGFsZXJ0KFwiVGhpcyBlbnRpdHkgYWxyZWFkeSBleGlzdHMhXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFkZEVudGl0eSh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgICAgIGVudGl0eVR5cGUgLy8gUGFzcyB0aGUgZW50aXR5VHlwZSB0byB0aGUgbXV0YXRpb25cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJFbnRpdHkgYWRkZWQ6XCIsIGRhdGEuY3JlYXRlRW50aXR5KTtcbiAgICAgIHNldERhdGFMaXN0U3RvcmUoKTtcbiAgICAgIG9uQ2xvc2UoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBlbnRpdHk6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICBpc09wZW4gJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYXktOTAwIGJnLW9wYWNpdHktNTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTggcm91bmRlZCBzaGFkb3ctbGcgbWF4LXctbWQgdy1mdWxsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItNlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktODAwXCI+QWRkIEVudGl0eTwvaDI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPEVudGl0eUlucHV0XG4gICAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5uYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBuYW1lOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgaHRtbEZvcj1cImVudGl0eVR5cGVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBFbnRpdHkgVHlwZVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8TGlzdGJveCB2YWx1ZT17ZW50aXR5VHlwZX0gb25DaGFuZ2U9e3NldEVudGl0eVR5cGV9PlxuICAgICAgICAgICAgICAgIDxMaXN0Ym94LkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIHtlbnRpdHlUeXBlID8gZW50aXR5VHlwZS5uYW1lIDogXCJTZWxlY3QgRW50aXR5XCJ9XG4gICAgICAgICAgICAgICAgPC9MaXN0Ym94LkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8TGlzdGJveC5PcHRpb25zPlxuICAgICAgICAgICAgICAgICAge2VudGl0eS5tYXAoKGVudGl0eSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8TGlzdGJveC5PcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VudGl0eS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW50aXR5fVxuICAgICAgICAgICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHsoeyBhY3RpdmUsIHNlbGVjdGVkIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJnLWJsdWUtNTAwIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJnLXdoaXRlIHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkICYmIDxDaGVja0ljb24gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJzb24ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Ym94Lk9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvTGlzdGJveC5PcHRpb25zPlxuICAgICAgICAgICAgICA8L0xpc3Rib3g+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxFbnRpdHlGb3JtXG4gICAgICAgICAgICAgIGVudGl0eVR5cGU9e2VudGl0eVR5cGUubmFtZX1cbiAgICAgICAgICAgICAgZm9ybURhdGE9e2Zvcm1EYXRhfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGtleSwgdmFsdWUpID0+XG4gICAgICAgICAgICAgICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW2tleV06IHZhbHVlIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNiBweS0zIHJvdW5kZWQgaG92ZXI6YmctYmx1ZS02MDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZEVudGl0eU1vZGFsO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlTXV0YXRpb24iLCJjbGllbnQiLCJ1c2VVc2VyU3RvcmUiLCJFbnRpdHlGb3JtIiwiRW50aXR5SW5wdXQiLCJBRERfRU5USVRZIiwiTGlzdGJveCIsIkFkZEVudGl0eU1vZGFsIiwiaXNPcGVuIiwib25DbG9zZSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJuYW1lIiwiZW1haWwiLCJwaG9uZSIsImluZHVzdHJ5IiwiY29udGFjdEVtYWlsIiwic2V0RGF0YUxpc3RTdG9yZSIsInN0YXRlIiwic2V0RGlkQWRkIiwiZGF0YUxpc3QiLCJhbGxEYXRhIiwiZW50aXR5IiwiaWQiLCJlbnRpdHlUeXBlIiwic2V0RW50aXR5VHlwZSIsImFkZEVudGl0eSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImV4aXN0aW5nRW50cnkiLCJmaW5kIiwiZW50cnkiLCJhbGVydCIsImRhdGEiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbnRpdHkiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiYnV0dG9uIiwib25DbGljayIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiaHRtbEZvciIsIkJ1dHRvbiIsIk9wdGlvbnMiLCJtYXAiLCJPcHRpb24iLCJhcyIsIkZyYWdtZW50IiwiYWN0aXZlIiwic2VsZWN0ZWQiLCJsaSIsIkNoZWNrSWNvbiIsInBlcnNvbiIsImtleSIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AddEntityModal.tsx\n"));

/***/ })

});