/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_checkInputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/checkInputs */ \"./modules/checkInputs.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('11 september 2025');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_checkInputs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?\n}");

/***/ }),

/***/ "./modules/checkInputs.js":
/*!********************************!*\
  !*** ./modules/checkInputs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst checkInputs = () => {\r\n    //const calcType = document.querySelector('.calc-type');\r\n    const calcSquare = document.querySelector('.calc-square');\r\n    const calcCount= document.querySelector('.calc-count');\r\n    const calcDay = document.querySelector('.calc-day');\r\n\r\n    const form1 = document.querySelector('#form1');\r\n    const form1Name = document.querySelector('#form1-name');\r\n    const form1Email = document.querySelector('#form1-email');\r\n    const form1Phone = document.querySelector('#form1-phone');\r\n\r\n    const form2 = document.querySelector('#form2');\r\n    const form2Name = document.querySelector('#form2-name');\r\n    const form2Email = document.querySelector('#form2-email');\r\n    const form2Phone = document.querySelector('#form2-phone');\r\n    const form2Message = document.querySelector('#form2-message');\r\n\r\n    const form3 = document.querySelector('#form3');\r\n    const form3Name = document.querySelector('#form3-name');\r\n    const form3Email = document.querySelector('#form3-email');\r\n    const form3Phone = document.querySelector('#form3-phone');\r\n\r\n\r\n    calcSquare.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/\\D+/, '');\r\n    })\r\n\r\n    calcCount.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/\\D+/, '');\r\n    })\r\n\r\n    calcDay.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/\\D+/, '');\r\n    })\r\n\r\n    form1.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        let isError = false;\r\n\r\n        if (!/[^а-яА-Я -]/g.test(form1Name.value) && form1Name.value !== ''){\r\n            alert('В инпуте только кирилица')\r\n        } else {\r\n            isError = true;\r\n        }\r\n\r\n        if (/^[a-zA-Z0-9.!~*'_+-]+@[a-zA-Z0-9.!~*'_+-]+\\.[a-zA-Z]{2,}$/g.test(form1Email.value) && form1Email.value !== ''){\r\n            alert('В инпуте только e-mail')\r\n        } else {\r\n            isError = true;\r\n        }\r\n\r\n        if (/^[0-9()+\\- ]+$/g.test(form1Phone.value) && form1Phone.value !== ''){\r\n            alert('В инпуте только числа')\r\n        } else {\r\n            isError = true;\r\n        }\r\n\r\n        if (!isError){\r\n            alert('Данные отправлены');\r\n\r\n        }\r\n    });\r\n\r\n    form2.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        let isError = false;\r\n\r\n        if (!/[^а-яА-Я -]/g.test(form2Name.value) && form2Name.value !== ''){\r\n            alert('В инпуте только кирилица')\r\n        } else {\r\n            isError = true;\r\n        }\r\n\r\n        if (/^[a-zA-Z0-9.!~*'_+-]+@[a-zA-Z0-9.!~*'_+-]+\\.[a-zA-Z]{2,}$/g.test(form2Email.value) && form2Email.value !== ''){\r\n            alert('В инпуте только e-mail')\r\n        } else {\r\n            isError = true;\r\n        }\r\n\r\n        if (/^[0-9()+\\- ]+$/g.test(form2Phone.value) && form2Phone.value !== ''){\r\n            alert('В инпуте только числа')\r\n        } else {\r\n            isError = true;\r\n        }\r\n\r\n        if (!/[^а-яА-Я -]/g.test(form2Message.value) && form2Message.value !== ''){\r\n            alert('В сообщении только кирилица, дефис и пробел')\r\n        } else {\r\n            isError = true;\r\n        }\r\n\r\n        if (!isError){\r\n            alert('Данные отправлены');\r\n\r\n        }\r\n    });\r\n\r\n    form3.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        let isError = false;\r\n\r\n        if (!/[^а-яА-Я -]/g.test(form3Name.value) && form3Name.value !== ''){\r\n            alert('В инпуте только кирилица')\r\n        } else {\r\n            isError = true;\r\n        }\r\n\r\n        if (/^[a-zA-Z0-9.!~*'_+-]+@[a-zA-Z0-9.!~*'_+-]+\\.[a-zA-Z]{2,}$/g.test(form3Email.value) && form3Email.value !== ''){\r\n            alert('В инпуте только e-mail')\r\n        } else {\r\n            isError = true;\r\n        }\r\n\r\n        if (/^[0-9()+\\- ]+$/g.test(form3Phone.value) && form3Phone.value !== ''){\r\n            alert('В инпуте только числа')\r\n        } else {\r\n            isError = true;\r\n        }\r\n\r\n        if (!isError){\r\n            alert('Данные отправлены');\r\n\r\n        }\r\n    });\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkInputs);\n\n//# sourceURL=webpack:///./modules/checkInputs.js?\n}");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu');\r\n    const menu = document.querySelector('menu');\r\n    const closeBtn = menu.querySelector('.close-btn');\r\n    const menuItems = menu.querySelectorAll('ul>li>a')\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu');\r\n    }\r\n\r\n    menuBtn.addEventListener('click', handleMenu);\r\n    //\r\n    // closeBtn.addEventListener('click', handleMenu);\r\n    //\r\n    // menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))\r\n\r\n    menu.addEventListener('click', (e) => {\r\n        if (e.target.classList.contains('close-btn') || e.target.matches('a')) {\r\n            handleMenu();\r\n        }\r\n    })\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?\n}");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector('.popup');\r\n    const closeBtn = modal.querySelector('.popup-close');\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n\r\n            if (window.innerWidth > 768) {\r\n                modal.style.opacity = '0';\r\n                modal.style.display = 'block';\r\n                let step = 0.1;\r\n\r\n                let interval = setInterval( () =>{\r\n                    if (modal.style.opacity >= 1)\r\n                        clearInterval(interval);\r\n\r\n                    step += 0.05;\r\n                    modal.style.opacity = step.toString();\r\n\r\n                    }, 100);\r\n\r\n            } else {\r\n                modal.style.display = 'block';\r\n            }\r\n\r\n        });\r\n    });\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')){\r\n            modal.style.display = 'none';\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?\n}");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabPanel = document.querySelector('.service-header');\r\n    const tabs = document.querySelectorAll('.service-header-tab');\r\n    const tabContent = document.querySelectorAll('.service-tab');\r\n\r\n    tabPanel.addEventListener('click', (e) => {\r\n        if (e.target.closest('.service-header-tab'))  {\r\n            const tabBtn = e.target.closest('.service-header-tab');\r\n\r\n            tabs.forEach((tab, index) => {\r\n                if(tab === tabBtn) {\r\n                    tab.classList.add('active');\r\n                    tabContent[index].classList.remove('d-none');\r\n                } else {\r\n                    tab.classList.remove('active');\r\n                    tabContent[index].classList.add('d-none');\r\n                }\r\n            })\r\n        }\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?\n}");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timerSeconds = document.getElementById('timer-seconds');\r\n    let idInterval;\r\n\r\nconst getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    let hours = Math.floor(timeRemaining / 60 / 60);\r\n    let minutes = Math.floor(timeRemaining / 60) % 60;\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    return {timeRemaining, hours, minutes, seconds}\r\n}\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n\r\n        // timerHours.textContent = (getTime.hours > 9 ? getTime.hours : '0' + getTime.hours);\r\n        // timerMinutes.textContent = (getTime.minutes > 9 ? getTime.minutes : '0' + getTime.minutes);\r\n        // timerSeconds.textContent = (getTime.seconds > 9) ? getTime.seconds : '0' + getTime.seconds;\r\n\r\n        timerHours.textContent = String(getTime.hours).padStart(2, '0');\r\n        timerMinutes.textContent = String(getTime.minutes).padStart(2, '0');\r\n        timerSeconds.textContent = String(getTime.seconds).padStart(2, '0');\r\n\r\n        if (getTime.timeRemaining <= 0) {\r\n            clearInterval(idInterval);\r\n            timerHours.textContent = '00';\r\n            timerMinutes.textContent = '00';\r\n            timerSeconds.textContent = '00';\r\n        }\r\n    };\r\n\r\n    idInterval = setInterval(updateClock, 1000);\r\n    updateClock(); // первый запуск\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;