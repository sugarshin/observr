(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Observr = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/*!
 * @license observr
 * (c) sugarshin
 * License: MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Observr = (function () {
  function Observr() {
    _classCallCheck(this, Observr);

    this._events = {};
  }

  _createClass(Observr, [{
    key: 'on',
    value: function on(event, handler) {
      this._events = this._events || {};

      if (typeof handler !== 'function') {
        throw new Error('`.on()` only accepts instances of Function.');
      }

      this._events[event] = this._events[event] || [];
      this._events[event].push(handler);

      return this;
    }
  }, {
    key: 'once',
    value: function once(event, handler) {
      this._events = this._events || {};

      if (typeof handler !== 'function') {
        throw new Error('`.once()` only accepts instances of Function.');
      }

      this.on(event, (function (_this) {
        return function _handler() {
          _this.off(event, _handler);
          handler.apply(_this, arguments);
        };
      })(this));

      return this;
    }
  }, {
    key: 'off',
    value: function off(event, handler) {
      if (!event || !this._events[event]) {
        this._events = this._events || {};
        return this;
      }

      if (handler) {
        this._events[event] = this._events[event].filter(function (cb) {
          return cb !== handler;
        });
      } else {
        delete this._events[event];
      }

      return this;
    }
  }, {
    key: 'emit',
    value: function emit() {
      var _this2 = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var event = args.shift();

      if (!this._events[event]) {
        return this;
      }

      this._events[event].forEach(function (handler) {
        handler.apply(_this2, args);
      });

      return this;
    }
  }, {
    key: 'addListener',

    // Alias
    value: function addListener(event, handler) {
      this.on(event, handler);
    }
  }, {
    key: 'one',
    value: function one(event, handler) {
      this.once(event, handler);
    }
  }, {
    key: 'removeListener',
    value: function removeListener(event, handler) {
      this.off(event, handler);
    }
  }, {
    key: 'rmListener',
    value: function rmListener(event, handler) {
      this.off(event, handler);
    }
  }, {
    key: 'trigger',
    value: function trigger() {
      this.emit.apply(this, arguments);
    }
  }]);

  return Observr;
})();

exports['default'] = Observr;
module.exports = exports['default'];

},{}]},{},[1])(1)
});
