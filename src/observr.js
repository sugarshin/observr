/*!
 * @license observr
 * (c) sugarshin
 * License: MIT
 */

export default class Observr {

  constructor() {
    this._events = {};
  }

  on(event, handler) {
    if (typeof handler !== 'function') {
      throw new Error(`${handler} is not a function`);
    }

    this._events[event] = this._events[event] || [];
    this._events[event].push(handler);

    return this;
  }

  once(event, handler) {
    if (typeof handler !== 'function') {
      throw new Error(`${handler} is not a function`);
    }

    this.on(event, (function(_this) {
      return function _self(...args) {
        _this.off(event, _self);
        handler.apply(_this, args);
      };
    })(this));

    return this;
  }

  off(event, handler) {
    if (!event || !this._events[event]) {
      return this;
    }

    if (handler) {
      this._events[event] = this._events[event].filter(h => h !== handler);
    } else {
      delete this._events[event];
    }

    return this;
  }

  emit(event, ...args) {
    if (!this._events[event]) {
      return this;
    }

    this._events[event].forEach(handler => {
      handler.apply(this, args);
    });

    return this;
  }

  // Alias
  addListener(event, handler) {
    this.on(event, handler);
  }

  one(event, handler) {
    this.once(event, handler);
  }

  removeListener(event, handler) {
    this.off(event, handler);
  }

  rmListener(event, handler) {
    this.off(event, handler);
  }

  trigger(event, ...args) {
    this.emit(event, ...args);
  }

}
