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
    this._events = this._events || {};

    if (typeof handler !== 'function') {
      throw new Error('`.on()` only accepts instances of Function.');
    }

    this._events[event] = this._events[event] || [];
    this._events[event].push(handler);

    return this;
  }

  once(event, handler) {
    this._events = this._events || {};

    if (typeof handler !== 'function') {
      throw new Error('`.once()` only accepts instances of Function.');
    }

    this.on(event, (function(_this) {
      return function _handler() {
        _this.off(event, _handler);
        handler.apply(_this, arguments);
      };
    })(this));

    return this;
  }

  off(event, handler) {
    if (!event || !this._events[event]) {
      this._events = this._events || {};
      return this;
    }

    if (handler) {
      this._events[event] = this._events[event].filter(cb => cb !== handler);
    } else {
      delete this._events[event];
    }

    return this;
  }

  emit(...args) {
    const event = args.shift();

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

  trigger(...args) {
    this.emit(...args);
  }

}
