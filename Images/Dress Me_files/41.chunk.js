(this["webpackJsonpblank"] = this["webpackJsonpblank"] || []).push([[41],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-backdrop.entry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-backdrop.entry.js ***!
  \*********************************************************************/
/*! exports provided: ion_backdrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_backdrop", function() { return Backdrop; });
/* harmony import */ var _index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-44bf8136.js */ "./node_modules/@ionic/core/dist/esm-es5/index-44bf8136.js");
/* harmony import */ var _ionic_global_837be8f3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-837be8f3.js */ "./node_modules/@ionic/core/dist/esm-es5/ionic-global-837be8f3.js");
/* harmony import */ var _gesture_controller_89173521_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gesture-controller-89173521.js */ "./node_modules/@ionic/core/dist/esm-es5/gesture-controller-89173521.js");



var backdropIosCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";
var backdropMdCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";

var Backdrop =
/** @class */
function () {
  function Backdrop(hostRef) {
    Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.ionBackdropTap = Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionBackdropTap", 7);
    this.blocker = _gesture_controller_89173521_js__WEBPACK_IMPORTED_MODULE_2__["G"].createBlocker({
      disableScroll: true
    });
    /**
     * If `true`, the backdrop will be visible.
     */

    this.visible = true;
    /**
     * If `true`, the backdrop will can be clicked and will emit the `ionBackdropTap` event.
     */

    this.tappable = true;
    /**
     * If `true`, the backdrop will stop propagation on tap.
     */

    this.stopPropagation = true;
  }

  Backdrop.prototype.connectedCallback = function () {
    if (this.stopPropagation) {
      this.blocker.block();
    }
  };

  Backdrop.prototype.disconnectedCallback = function () {
    this.blocker.unblock();
  };

  Backdrop.prototype.onMouseDown = function (ev) {
    this.emitTap(ev);
  };

  Backdrop.prototype.emitTap = function (ev) {
    if (this.stopPropagation) {
      ev.preventDefault();
      ev.stopPropagation();
    }

    if (this.tappable) {
      this.ionBackdropTap.emit();
    }
  };

  Backdrop.prototype.render = function () {
    var _a;

    var mode = Object(_ionic_global_837be8f3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
    return Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
      tabindex: "-1",
      class: (_a = {}, _a[mode] = true, _a['backdrop-hide'] = !this.visible, _a['backdrop-no-tappable'] = !this.tappable, _a)
    });
  };

  return Backdrop;
}();

Backdrop.style = {
  ios: backdropIosCss,
  md: backdropMdCss
};


/***/ })

}]);
//# sourceMappingURL=41.chunk.js.map