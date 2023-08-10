/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadContact() {
    const container = document.querySelector('.container');

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const phoneNum = document.createElement('p');
    const email = document.createElement('p');
    phoneNum.textContent = '111-222-333';
    email.textContent = 'contact@scoopfuldelights.com';

    contactInfo.appendChild(phoneNum);
    contactInfo.appendChild(email);

    container.appendChild(contactInfo);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadHome() {
    const container = document.querySelector('.container');

    const slogan = document.createElement('h2');
    slogan.setAttribute('id', 'slogan');
    slogan.textContent = 'Where every bite is a sweet symphony!';

    const restaurantDescription = document.createElement('p');
    restaurantDescription.setAttribute('id', 'restaurant-description');
    restaurantDescription.textContent = "Welcome to Scoopful Delights, a charming haven for ice cream aficionados seeking a delectable escape into frozen wonderland. Nestled in the heart of the city, we craft tiny batches of frozen joy that pack an explosion of flavor in every bite. Our passion for the perfect scoop drives us to create small, but undeniably mouthwatering creations that dance on your taste buds.";

    const orderTodayText = document.createElement('p');
    orderTodayText.classList.add('call-to-action');
    orderTodayText.textContent = 'Order Today!';

    container.appendChild(slogan);
    container.appendChild(restaurantDescription);
    container.appendChild(orderTodayText);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadMenu() {
    const container = document.querySelector('.container');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    menuContainer.appendChild(createMenuItem('Chocolate'));
    menuContainer.appendChild(createMenuItem('Vanilla'));
    menuContainer.appendChild(createMenuItem('Blueberry'));
    menuContainer.appendChild(createMenuItem('Cherry'));
    menuContainer.appendChild(createMenuItem('Raspberry'));
    menuContainer.appendChild(createMenuItem('Pistachio'));
    menuContainer.appendChild(createMenuItem('Mango'));
    menuContainer.appendChild(createMenuItem('Coconut'));

    container.appendChild(menuContainer);
}

function createMenuItem(text) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    const menuItemText = document.createElement('p');
    menuItemText.textContent = text;
    menuItem.appendChild(menuItemText);

    return menuItem;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    const restaurantHeaderTitle = document.createElement('h1');
    restaurantHeaderTitle.classList.add('header-title');
    restaurantHeaderTitle.textContent = 'Scoopful Delights';

    const navButtons = document.createElement('ul');
    navButtons.classList.add('page-buttons-list');

    const homeButton = document.createElement('a');
    const menuButton = document.createElement('a');
    const contactButton = document.createElement('a');
    homeButton.classList.add('home-button');
    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    contactButton.textContent = 'Contact';
    homeButton.setAttribute('href', '#');
    menuButton.setAttribute('href', '#');
    contactButton.setAttribute('href', '#');

    homeButton.addEventListener('click', (e) => {
        setActiveButton(homeButton);
        (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    })

    menuButton.addEventListener('click', (e) => {
        setActiveButton(menuButton);
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
    })

    contactButton.addEventListener('click', (e) => {
        setActiveButton(contactButton);
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
    })

    navButtons.appendChild(homeButton);
    navButtons.appendChild(menuButton);
    navButtons.appendChild(contactButton);

    header.appendChild(restaurantHeaderTitle);
    header.appendChild(navButtons);

    return header;
}

function createMain() {
    const mainBody = document.createElement('div');
    mainBody.classList.add('main-body');

    const container = document.createElement('div');
    container.classList.add('container');

    mainBody.appendChild(container);

    return mainBody;
}

function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const footerText = document.createElement('p');
    footerText.textContent = 'Copyright © 2023 TylerMommsen';

    footer.appendChild(footerText);

    return footer;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".page-buttons-list");
  
    buttons.forEach(function(button) {
        button.classList.remove("active");
    });
    
    clearPage();
    button.classList.add("active");
}

function clearPage() {
    const container = document.querySelector('.container');

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function initializeWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector('.home-button'));
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/website.js");


(0,_website__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7QUNqQjFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUNwQnZCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Qk87QUFDQTtBQUNNOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsaURBQVE7QUFDaEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsUUFBUSxpREFBUTtBQUNoQixLQUFLOztBQUVMO0FBQ0E7QUFDQSxRQUFRLG9EQUFXO0FBQ25CLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxpREFBUTtBQUNaOztBQUVBLGlFQUFlLGlCQUFpQjs7Ozs7O1VDekdoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjBDOztBQUUxQyxvREFBaUIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy93ZWJzaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaW5mbycpO1xuXG4gICAgY29uc3QgcGhvbmVOdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmVOdW0udGV4dENvbnRlbnQgPSAnMTExLTIyMi0zMzMnO1xuICAgIGVtYWlsLnRleHRDb250ZW50ID0gJ2NvbnRhY3RAc2Nvb3BmdWxkZWxpZ2h0cy5jb20nO1xuXG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQocGhvbmVOdW0pO1xuICAgIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGVtYWlsKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0SW5mbyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0OyIsImZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuICAgIGNvbnN0IHNsb2dhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgc2xvZ2FuLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2xvZ2FuJyk7XG4gICAgc2xvZ2FuLnRleHRDb250ZW50ID0gJ1doZXJlIGV2ZXJ5IGJpdGUgaXMgYSBzd2VldCBzeW1waG9ueSEnO1xuXG4gICAgY29uc3QgcmVzdGF1cmFudERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Jlc3RhdXJhbnQtZGVzY3JpcHRpb24nKTtcbiAgICByZXN0YXVyYW50RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gU2Nvb3BmdWwgRGVsaWdodHMsIGEgY2hhcm1pbmcgaGF2ZW4gZm9yIGljZSBjcmVhbSBhZmljaW9uYWRvcyBzZWVraW5nIGEgZGVsZWN0YWJsZSBlc2NhcGUgaW50byBmcm96ZW4gd29uZGVybGFuZC4gTmVzdGxlZCBpbiB0aGUgaGVhcnQgb2YgdGhlIGNpdHksIHdlIGNyYWZ0IHRpbnkgYmF0Y2hlcyBvZiBmcm96ZW4gam95IHRoYXQgcGFjayBhbiBleHBsb3Npb24gb2YgZmxhdm9yIGluIGV2ZXJ5IGJpdGUuIE91ciBwYXNzaW9uIGZvciB0aGUgcGVyZmVjdCBzY29vcCBkcml2ZXMgdXMgdG8gY3JlYXRlIHNtYWxsLCBidXQgdW5kZW5pYWJseSBtb3V0aHdhdGVyaW5nIGNyZWF0aW9ucyB0aGF0IGRhbmNlIG9uIHlvdXIgdGFzdGUgYnVkcy5cIjtcblxuICAgIGNvbnN0IG9yZGVyVG9kYXlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG9yZGVyVG9kYXlUZXh0LmNsYXNzTGlzdC5hZGQoJ2NhbGwtdG8tYWN0aW9uJyk7XG4gICAgb3JkZXJUb2RheVRleHQudGV4dENvbnRlbnQgPSAnT3JkZXIgVG9kYXkhJztcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzbG9nYW4pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50RGVzY3JpcHRpb24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvcmRlclRvZGF5VGV4dCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lOyIsImZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG5cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdDaG9jb2xhdGUnKSk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnVmFuaWxsYScpKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdCbHVlYmVycnknKSk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnQ2hlcnJ5JykpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ1Jhc3BiZXJyeScpKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdQaXN0YWNoaW8nKSk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnTWFuZ28nKSk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnQ29jb251dCcpKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0odGV4dCkge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgY29uc3QgbWVudUl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lbnVJdGVtVGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1UZXh0KTtcblxuICAgIHJldHVybiBtZW51SXRlbTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7IiwiaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gICAgY29uc3QgcmVzdGF1cmFudEhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICByZXN0YXVyYW50SGVhZGVyVGl0bGUuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLXRpdGxlJyk7XG4gICAgcmVzdGF1cmFudEhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gJ1Njb29wZnVsIERlbGlnaHRzJztcblxuICAgIGNvbnN0IG5hdkJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIG5hdkJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgncGFnZS1idXR0b25zLWxpc3QnKTtcblxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnaG9tZS1idXR0b24nKTtcbiAgICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICBob21lQnV0dG9uLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyk7XG4gICAgbWVudUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycpO1xuICAgIGNvbnRhY3RCdXR0b24uc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcblxuICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24oaG9tZUJ1dHRvbik7XG4gICAgICAgIGxvYWRIb21lKCk7XG4gICAgfSlcblxuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24obWVudUJ1dHRvbik7XG4gICAgICAgIGxvYWRNZW51KCk7XG4gICAgfSlcblxuICAgIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24oY29udGFjdEJ1dHRvbik7XG4gICAgICAgIGxvYWRDb250YWN0KCk7XG4gICAgfSlcblxuICAgIG5hdkJ1dHRvbnMuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gICAgbmF2QnV0dG9ucy5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgICBuYXZCdXR0b25zLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRIZWFkZXJUaXRsZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkJ1dHRvbnMpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Cb2R5LmNsYXNzTGlzdC5hZGQoJ21haW4tYm9keScpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIHJldHVybiBtYWluQm9keTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICAgIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9ICdDb3B5cmlnaHQgwqkgMjAyMyBUeWxlck1vbW1zZW4nO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuXG4gICAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlQnV0dG9uKGJ1dHRvbikge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBhZ2UtYnV0dG9ucy1saXN0XCIpO1xuICBcbiAgICBidXR0b25zLmZvckVhY2goZnVuY3Rpb24oYnV0dG9uKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICAgIFxuICAgIGNsZWFyUGFnZSgpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhclBhZ2UoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG4gICAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplV2Vic2l0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICAgIHNldEFjdGl2ZUJ1dHRvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1idXR0b24nKSk7XG4gICAgbG9hZEhvbWUoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVdlYnNpdGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhbGl6ZVdlYnNpdGUgZnJvbSBcIi4vd2Vic2l0ZVwiO1xuXG5pbml0aWFsaXplV2Vic2l0ZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==