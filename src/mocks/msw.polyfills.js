// This file is necessary for Mock Service Worker to work,
// since React Native lacks some web standards MSW depends on,
// and official support for React Native is under development.

import 'fast-text-encoding';
import 'react-native-url-polyfill/auto';

// Polyfill for Event if not available
if (!global.Event) {
  global.Event = class Event {
    constructor(type, eventInitDict = {}) {
      this.type = type;
      this.bubbles = eventInitDict.bubbles || false;
      this.cancelable = eventInitDict.cancelable || false;
      this.composed = eventInitDict.composed || false;
      this.currentTarget = null;
      this.defaultPrevented = false;
      this.eventPhase = 0;
      this.target = null;
      this.timeStamp = Date.now();
      this.isTrusted = false;
    }

    preventDefault() {
      this.defaultPrevented = true;
    }

    stopPropagation() { }
    stopImmediatePropagation() { }
  };
}

// Polyfill for MessageEvent if not available
if (!global.MessageEvent) {
  global.MessageEvent = class MessageEvent extends global.Event {
    constructor(type, eventInitDict = {}) {
      super(type, eventInitDict);
      this.data = eventInitDict.data;
      this.origin = eventInitDict.origin || '';
      this.lastEventId = eventInitDict.lastEventId || '';
      this.source = eventInitDict.source || null;
      this.ports = eventInitDict.ports || [];
    }
  };
}

// Polyfill for EventTarget if not available
if (!global.EventTarget) {
  global.EventTarget = class EventTarget {
    constructor() {
      this.listeners = {};
    }

    addEventListener(type, listener, options) {
      if (!this.listeners[type]) {
        this.listeners[type] = [];
      }
      this.listeners[type].push({ listener, options });
    }

    removeEventListener(type, listener) {
      if (!this.listeners[type]) return;
      this.listeners[type] = this.listeners[type].filter(l => l.listener !== listener);
    }

    dispatchEvent(event) {
      if (!this.listeners[event.type]) return true;
      this.listeners[event.type].forEach(({ listener }) => {
        if (typeof listener === 'function') {
          listener(event);
        } else if (listener && typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        }
      });
      return true;
    }
  };
}

// Polyfill for CustomEvent if not available
if (!global.CustomEvent) {
  global.CustomEvent = class CustomEvent extends global.Event {
    constructor(type, eventInitDict = {}) {
      super(type, eventInitDict);
      this.detail = eventInitDict.detail;
    }
  };
}

// Polyfill for AbortController if not available
if (!global.AbortController) {
  global.AbortController = class AbortController {
    constructor() {
      this.signal = {
        aborted: false,
        addEventListener: () => { },
        removeEventListener: () => { },
        dispatchEvent: () => true,
      };
    }

    abort() {
      this.signal.aborted = true;
    }
  };
}
