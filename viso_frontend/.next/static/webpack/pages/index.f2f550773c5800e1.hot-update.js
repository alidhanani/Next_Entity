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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _lib_apolloClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/apolloClient */ \"./src/lib/apolloClient.ts\");\n/* harmony import */ var _service_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/service/store */ \"./src/service/store.ts\");\n/* harmony import */ var _forms_insert_EntityForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms/insert/EntityForm */ \"./src/components/forms/insert/EntityForm.tsx\");\n/* harmony import */ var _forms_insert_EntityInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms/insert/EntityInput */ \"./src/components/forms/insert/EntityInput.tsx\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/graphql/queries */ \"./src/graphql/queries.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst AddEntityModal = (param)=>{\n    let { isOpen, onClose } = param;\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        phone: \"\",\n        industry: \"\",\n        contactEmail: \"\"\n    });\n    const [entityType, setEntityType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"CONTACT\");\n    const setDataListStore = (0,_service_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((state)=>state.setDidAdd);\n    const dataList = (0,_service_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((state)=>state.allData);\n    const [addEntity] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(_graphql_queries__WEBPACK_IMPORTED_MODULE_6__.ADD_ENTITY, {\n        client: _lib_apolloClient__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    });\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Check if the provided information already exists in dataList\n        const existingEntry = dataList.find((entry)=>{\n            if (entityType === \"CONTACT\") {\n                return entry.name === formData.name && entry.email === formData.email && entry.phone === formData.phone;\n            } else if (entityType === \"COMPANY\") {\n                return entry.name === formData.name && entry.industry === formData.industry && entry.contactEmail === formData.contactEmail;\n            }\n            return false;\n        });\n        if (existingEntry) {\n            // Show error message\n            alert(\"This entity already exists!\");\n            return;\n        }\n        try {\n            const { data } = await addEntity({\n                variables: {\n                    input: {\n                        ...formData,\n                        entityType\n                    }\n                }\n            });\n            console.log(\"Entity added:\", data.createEntity);\n            setDataListStore();\n            onClose();\n        } catch (error) {\n            console.error(\"Error adding entity:\", error);\n        }\n    };\n    return isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-8 rounded shadow-lg max-w-md w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center mb-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-xl font-semibold text-gray-800\",\n                            children: \"Add Entity\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-gray-500 hover:text-gray-600\",\n                            onClick: onClose,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                className: \"h-6 w-6\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                stroke: \"currentColor\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    strokeWidth: \"2\",\n                                    d: \"M6 18L18 6M6 6l12 12\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_forms_insert_EntityInput__WEBPACK_IMPORTED_MODULE_5__.EntityInput, {\n                            label: \"Name\",\n                            value: formData.name,\n                            onChange: (value)=>setFormData({\n                                    ...formData,\n                                    name: value\n                                })\n                        }, void 0, false, {\n                            fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"entityType\",\n                                    className: \"block text-sm font-medium text-gray-700\",\n                                    children: \"Entity Type\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    id: \"entityType\",\n                                    value: entityType,\n                                    onChange: (e)=>setEntityType(e.target.value),\n                                    className: \"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"CONTACT\",\n                                            children: \"Contact\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                                            lineNumber: 114,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"COMPANY\",\n                                            children: \"Company\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                                            lineNumber: 115,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_forms_insert_EntityForm__WEBPACK_IMPORTED_MODULE_4__.EntityForm, {\n                            entityType: entityType,\n                            formData: formData,\n                            onChange: (key, value)=>setFormData({\n                                    ...formData,\n                                    [key]: value\n                                })\n                        }, void 0, false, {\n                            fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600\",\n                                children: \"Add\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n            lineNumber: 72,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alidhanani/Desktop/Project/VisoFrontend/viso_project/src/components/AddEntityModal.tsx\",\n        lineNumber: 71,\n        columnNumber: 7\n    }, undefined);\n};\n_s(AddEntityModal, \"Zg9SseSY6rmLgFwfF5UOA0ZF3us=\", false, function() {\n    return [\n        _service_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _service_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation\n    ];\n});\n_c = AddEntityModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddEntityModal);\nvar _c;\n$RefreshReg$(_c, \"AddEntityModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T3hDO29DQUNQeUMsVUFBVSxDQUFDaEMsSUFBTVIsY0FBY1EsRUFBRW9DLE1BQU0sQ0FBQ0wsS0FBSztvQ0FDN0NqQixXQUFVOztzREFFViw4REFBQ3VCOzRDQUFPTixPQUFNO3NEQUFVOzs7Ozs7c0RBQ3hCLDhEQUFDTTs0Q0FBT04sT0FBTTtzREFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUc1Qiw4REFBQ3JELGdFQUFVQTs0QkFDVGEsWUFBWUE7NEJBQ1pQLFVBQVVBOzRCQUNWZ0QsVUFBVSxDQUFDTSxLQUFLUCxRQUNkOUMsWUFBWTtvQ0FBRSxHQUFHRCxRQUFRO29DQUFFLENBQUNzRCxJQUFJLEVBQUVQO2dDQUFNOzs7Ozs7c0NBRzVDLDhEQUFDbEI7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNFO2dDQUNDdUIsTUFBSztnQ0FDTHpCLFdBQVU7MENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTZjtHQWpJTWpDOztRQVNxQkosc0RBQVlBO1FBQ3BCQSxzREFBWUE7UUFFVEYsdURBQVdBOzs7S0FaM0JNO0FBbUlOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FkZEVudGl0eU1vZGFsLnRzeD9iZWFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCJAL2xpYi9hcG9sbG9DbGllbnRcIjtcbmltcG9ydCB1c2VVc2VyU3RvcmUgZnJvbSBcIkAvc2VydmljZS9zdG9yZVwiO1xuaW1wb3J0IHsgRW50aXR5Rm9ybSB9IGZyb20gXCIuL2Zvcm1zL2luc2VydC9FbnRpdHlGb3JtXCI7XG5pbXBvcnQgeyBFbnRpdHlJbnB1dCB9IGZyb20gXCIuL2Zvcm1zL2luc2VydC9FbnRpdHlJbnB1dFwiO1xuaW1wb3J0IHsgQUREX0VOVElUWSB9IGZyb20gXCJAL2dyYXBocWwvcXVlcmllc1wiO1xuXG5jb25zdCBBZGRFbnRpdHlNb2RhbCA9ICh7IGlzT3Blbiwgb25DbG9zZSB9KSA9PiB7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgZW1haWw6IFwiXCIsXG4gICAgcGhvbmU6IFwiXCIsXG4gICAgaW5kdXN0cnk6IFwiXCIsXG4gICAgY29udGFjdEVtYWlsOiBcIlwiXG4gIH0pO1xuICBjb25zdCBbZW50aXR5VHlwZSwgc2V0RW50aXR5VHlwZV0gPSB1c2VTdGF0ZShcIkNPTlRBQ1RcIik7XG4gIGNvbnN0IHNldERhdGFMaXN0U3RvcmUgPSB1c2VVc2VyU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5zZXREaWRBZGQpO1xuICBjb25zdCBkYXRhTGlzdCA9IHVzZVVzZXJTdG9yZSgoc3RhdGUpID0+IHN0YXRlLmFsbERhdGEpO1xuXG4gIGNvbnN0IFthZGRFbnRpdHldID0gdXNlTXV0YXRpb24oQUREX0VOVElUWSwge1xuICAgIGNsaWVudDogY2xpZW50XG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHByb3ZpZGVkIGluZm9ybWF0aW9uIGFscmVhZHkgZXhpc3RzIGluIGRhdGFMaXN0XG4gICAgY29uc3QgZXhpc3RpbmdFbnRyeSA9IGRhdGFMaXN0LmZpbmQoKGVudHJ5KSA9PiB7XG4gICAgICBpZiAoZW50aXR5VHlwZSA9PT0gXCJDT05UQUNUXCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBlbnRyeS5uYW1lID09PSBmb3JtRGF0YS5uYW1lICYmXG4gICAgICAgICAgZW50cnkuZW1haWwgPT09IGZvcm1EYXRhLmVtYWlsICYmXG4gICAgICAgICAgZW50cnkucGhvbmUgPT09IGZvcm1EYXRhLnBob25lXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGVudGl0eVR5cGUgPT09IFwiQ09NUEFOWVwiKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgZW50cnkubmFtZSA9PT0gZm9ybURhdGEubmFtZSAmJlxuICAgICAgICAgIGVudHJ5LmluZHVzdHJ5ID09PSBmb3JtRGF0YS5pbmR1c3RyeSAmJlxuICAgICAgICAgIGVudHJ5LmNvbnRhY3RFbWFpbCA9PT0gZm9ybURhdGEuY29udGFjdEVtYWlsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdFbnRyeSkge1xuICAgICAgLy8gU2hvdyBlcnJvciBtZXNzYWdlXG4gICAgICBhbGVydChcIlRoaXMgZW50aXR5IGFscmVhZHkgZXhpc3RzIVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhZGRFbnRpdHkoe1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgICAgICBlbnRpdHlUeXBlIC8vIFBhc3MgdGhlIGVudGl0eVR5cGUgdG8gdGhlIG11dGF0aW9uXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiRW50aXR5IGFkZGVkOlwiLCBkYXRhLmNyZWF0ZUVudGl0eSk7XG4gICAgICBzZXREYXRhTGlzdFN0b3JlKCk7XG4gICAgICBvbkNsb3NlKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZW50aXR5OlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgaXNPcGVuICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTkwMCBiZy1vcGFjaXR5LTUwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC04IHJvdW5kZWQgc2hhZG93LWxnIG1heC13LW1kIHctZnVsbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTZcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTgwMFwiPkFkZCBFbnRpdHk8L2gyPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS02MDBcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxFbnRpdHlJbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgbmFtZTogdmFsdWUgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJlbnRpdHlUeXBlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRW50aXR5IFR5cGVcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgIGlkPVwiZW50aXR5VHlwZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VudGl0eVR5cGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbnRpdHlUeXBlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci1ncmF5LTMwMCBzaGFkb3ctc20gZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGZvY3VzOnJpbmcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpyaW5nLW9wYWNpdHktNTBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNPTlRBQ1RcIj5Db250YWN0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNPTVBBTllcIj5Db21wYW55PC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8RW50aXR5Rm9ybVxuICAgICAgICAgICAgICBlbnRpdHlUeXBlPXtlbnRpdHlUeXBlfVxuICAgICAgICAgICAgICBmb3JtRGF0YT17Zm9ybURhdGF9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoa2V5LCB2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBba2V5XTogdmFsdWUgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC02IHB5LTMgcm91bmRlZCBob3ZlcjpiZy1ibHVlLTYwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkRW50aXR5TW9kYWw7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VNdXRhdGlvbiIsImNsaWVudCIsInVzZVVzZXJTdG9yZSIsIkVudGl0eUZvcm0iLCJFbnRpdHlJbnB1dCIsIkFERF9FTlRJVFkiLCJBZGRFbnRpdHlNb2RhbCIsImlzT3BlbiIsIm9uQ2xvc2UiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJpbmR1c3RyeSIsImNvbnRhY3RFbWFpbCIsImVudGl0eVR5cGUiLCJzZXRFbnRpdHlUeXBlIiwic2V0RGF0YUxpc3RTdG9yZSIsInN0YXRlIiwic2V0RGlkQWRkIiwiZGF0YUxpc3QiLCJhbGxEYXRhIiwiYWRkRW50aXR5IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZXhpc3RpbmdFbnRyeSIsImZpbmQiLCJlbnRyeSIsImFsZXJ0IiwiZGF0YSIsInZhcmlhYmxlcyIsImlucHV0IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVudGl0eSIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsInZhbHVlIiwib25DaGFuZ2UiLCJodG1sRm9yIiwic2VsZWN0IiwiaWQiLCJ0YXJnZXQiLCJvcHRpb24iLCJrZXkiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AddEntityModal.tsx\n"));

/***/ })

});