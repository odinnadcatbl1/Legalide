/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("window.addEventListener('DOMContentLoaded', () => {\r\n    const header = document.querySelector('.header');\r\n    const headerHeight = header.offsetHeight;\r\n    let scrollPos = window.pageYOffset;\r\n    \r\n    window.addEventListener('scroll', () => {\r\n        scrollPos = window.pageYOffset;\r\n        if (scrollPos > headerHeight && window.innerWidth > 767) {\r\n            header.style.backgroundColor = '#F6F6F6';\r\n            header.style.borderBottom = 'solid 1px #252B4240';\r\n        } else if (scrollPos < headerHeight && window.innerWidth > 767) {\r\n            header.style.backgroundColor = 'transparent';\r\n            header.style.borderBottom = 'none';\r\n        }\r\n    })\r\n\r\n    const burger = document.querySelectorAll('.burger');\r\n    const mobileNav = document.querySelector('.mobile__nav');\r\n    burger[1].addEventListener('click', e => {\r\n        console.log(1);\r\n        if (mobileNav.style.display === 'none') {\r\n            mobileNav.style.display = 'block';\r\n        } else {\r\n            mobileNav.style.display = 'none'\r\n        }\r\n    })\r\n});\n\n//# sourceURL=webpack://Salavat/./src/assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	
/******/ })()
;