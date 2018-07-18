/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shipClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipClass */ \"./src/shipClass.js\");\n// import { shipFactory } from './ships';\n\n\n\"use strict\";\n\n// let sunkenShips = 0;\n// console.log(sunkenShips);\n\nlet ship1 = new _shipClass__WEBPACK_IMPORTED_MODULE_0__[\"Ship\"](\"ship1\", {x: 0, y: 0}, {x: 0, y: 4});\n// let ship2 = new Ship(\"ship2\", {x: 1, y: 0}, {x: 1, y: 3});\n// let ship3 = new Ship(\"ship3\", {x: 2, y: 0}, {x: 2, y: 2});\n// let ship4 = new Ship(\"ship4\", {x: 3, y: 0}, {x: 3, y: 2});\n// let ship5 = new Ship(\"ship5\", {x: 4, y: 0}, {x: 4, y: 1});\n\n\nconsole.log(ship1);            //<-----   ALL HITS SHOULD BE \"FALSE\"\nship1.applyHit({x:0, y:0});\nship1.applyHit({x:0, y:1});\nship1.applyHit({x:0, y:2});\nship1.applyHit({x:0, y:3});\nconsole.log(ship1);            //<----- ONLY 4 HITS SHOULD BE \"TRUE\"\nship1.applyHit({x:0, y:4});\nconsole.log(ship1);            //<----- ALL 5 HITS SHOULD BE\n\n// if (ship1.sunk) {\n//   sunkenShips++;\n// }\n//\n//\n// console.log(sunkenShips);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/shipClass.js":
/*!**************************!*\
  !*** ./src/shipClass.js ***!
  \**************************/
/*! exports provided: Ship */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ship\", function() { return Ship; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n// class Rabbit {\n//   constructor(type) {\n//     this.type = type;\n//   }\n//   speak(line) {\n//     console.log(`The ${this.type} rabbit says '${line}'`);\n//   }\n// }\n//\n// let killerRabbit = new Rabbit(\"killer\");\n// let blackRabbit = new Rabbit(\"black\");\n\n\n\n\nclass Ship {\n  constructor(name, start, end) {\n    this.name = name;\n    this.sunk = false;\n\n    this.spots = [];\n    if (start.y == end.y) {\n      for (let i = start.x; i <= end.x; i++) {\n        this.spots.push({x: i, y: start.y, hit: false});\n      }\n    } else {\n      for (let i = start.y; i <= end.y; i++) {\n        this.spots.push({x: start.x, y: i, hit: false})\n      }\n    }\n  }\n  applyHit(target) {\n    let index = this.spots.indexOf(this.spots.find((spot) => spot.x == target.x && spot.y == target.y))\n    this.spots[index].hit = true;\n\n    if (this.spots.every(spot => spot.hit == true)) {\n      this.sunk = true;\n    }\n  }\n}\n\n// let ship1 = new Ship({x: 0, y: 0}, {x: 0, y: 4});\n// let ship2 = new Ship({x: 1, y: 0}, {x: 1, y: 3});\n\n\n\n\n// const shipFactory = (start, end) => {\n//   let spots = [];\n//\n//   if (start.y == end.y) {\n//     for (let i = start.x; i <= end.x; i++) {\n//       spots.push({x: i, y: start.y, hit: false});\n//     }\n//   } else {\n//     for (let i = start.y; i <= end.y; i++) {\n//       spots.push({x: start.x, y: i, hit: false})\n//     }\n//   }\n\n//  // let sunk = false;\n\n  // const applyHit = target => {\n  //   let index = spots.indexOf(spots.find((spot) => spot.x == target.x && spot.y == target.y))\n  //   spots[index].hit = true;\n  // }\n\n//   const isSunk = () => {\n//     if (spots.every(spot => spot.hit == true)) {\n//       console.log('sunk');\n//       // sunk = true;\n//       return true;\n//     }\n//     return false;\n//   }\n//\n//   return { start, end, spots, applyHit, isSunk };\n// };\n\n\n\n\n//# sourceURL=webpack:///./src/shipClass.js?");

/***/ })

/******/ });