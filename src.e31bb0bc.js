// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\fonts\\Raleway-Bold.woff":[["Raleway-Bold.946586da.woff","fonts/Raleway-Bold.woff"],"fonts/Raleway-Bold.woff"],"./..\\images\\mobile-slider-1.jpg":[["mobile-slider-1.d8860e02.jpg","images/mobile-slider-1.jpg"],"images/mobile-slider-1.jpg"],"./..\\images\\mobile-slider-1@2x.jpg":[["mobile-slider-1@2x.69c851b2.jpg","images/mobile-slider-1@2x.jpg"],"images/mobile-slider-1@2x.jpg"],"./..\\images\\tablet-slider-1.jpg":[["tablet-slider-1.73a76a64.jpg","images/tablet-slider-1.jpg"],"images/tablet-slider-1.jpg"],"./..\\images\\tablet-slider-1@2x.jpg":[["tablet-slider-1@2x.4c22fdb2.jpg","images/tablet-slider-1@2x.jpg"],"images/tablet-slider-1@2x.jpg"],"./..\\images\\desktop-slider-1.jpg":[["desktop-slider-1.1459c9d2.jpg","images/desktop-slider-1.jpg"],"images/desktop-slider-1.jpg"],"./..\\images\\desktop-slider-1@2x.jpg":[["desktop-slider-1@2x.617c4db7.jpg","images/desktop-slider-1@2x.jpg"],"images/desktop-slider-1@2x.jpg"],"./..\\images\\mobile-slider-2.jpg":[["mobile-slider-2.9197cc5b.jpg","images/mobile-slider-2.jpg"],"images/mobile-slider-2.jpg"],"./..\\images\\mobile-slider-2@2x.jpg":[["mobile-slider-2@2x.7bbc4375.jpg","images/mobile-slider-2@2x.jpg"],"images/mobile-slider-2@2x.jpg"],"./..\\images\\tablet-slider-2.jpg":[["tablet-slider-2.0fc0d182.jpg","images/tablet-slider-2.jpg"],"images/tablet-slider-2.jpg"],"./..\\images\\tablet-slider-2@2x.jpg":[["tablet-slider-2@2x.f009d727.jpg","images/tablet-slider-2@2x.jpg"],"images/tablet-slider-2@2x.jpg"],"./..\\images\\desktop-slider-2.jpg":[["desktop-slider-2.6fba8bd2.jpg","images/desktop-slider-2.jpg"],"images/desktop-slider-2.jpg"],"./..\\images\\desktop-slider-2@2x.jpg":[["desktop-slider-2@2x.cc9e81eb.jpg","images/desktop-slider-2@2x.jpg"],"images/desktop-slider-2@2x.jpg"],"./..\\images\\mobile-slider-3.jpg":[["mobile-slider-3.9af1ad4b.jpg","images/mobile-slider-3.jpg"],"images/mobile-slider-3.jpg"],"./..\\images\\mobile-slider-3@2x.jpg":[["mobile-slider-3@2x.1bfff821.jpg","images/mobile-slider-3@2x.jpg"],"images/mobile-slider-3@2x.jpg"],"./..\\images\\tablet-slider-3.jpg":[["tablet-slider-3.f5c8c121.jpg","images/tablet-slider-3.jpg"],"images/tablet-slider-3.jpg"],"./..\\images\\tablet-slider-3@2x.jpg":[["tablet-slider-3@2x.90761d04.jpg","images/tablet-slider-3@2x.jpg"],"images/tablet-slider-3@2x.jpg"],"./..\\images\\desktop-slider-3.jpg":[["desktop-slider-3.96e66677.jpg","images/desktop-slider-3.jpg"],"images/desktop-slider-3.jpg"],"./..\\images\\desktop-slider-3@2x.jpg":[["desktop-slider-3@2x.3caca04d.jpg","images/desktop-slider-3@2x.jpg"],"images/desktop-slider-3@2x.jpg"],"./..\\images\\prices-mob.png":[["prices-mob.25af01d2.png","images/prices-mob.png"],"images/prices-mob.png"],"./..\\images\\prices-mob@2x.png":[["prices-mob@2x.ce8499c0.png","images/prices-mob@2x.png"],"images/prices-mob@2x.png"],"./..\\images\\prices-tab.png":[["prices-tab.e194d0bb.png","images/prices-tab.png"],"images/prices-tab.png"],"./..\\images\\prices-tab@2x.png":[["prices-tab@2x.f19dc8ab.png","images/prices-tab@2x.png"],"images/prices-tab@2x.png"],"./..\\images\\prices-desc.png":[["prices-desc.f3df38b1.png","images/prices-desc.png"],"images/prices-desc.png"],"./..\\images\\prices-desc@2x.png":[["prices-desc@2x.5cd90c3a.png","images/prices-desc@2x.png"],"images/prices-desc@2x.png"],"./..\\images\\contacts-m.png":[["contacts-m.ef54a4c7.png","images/contacts-m.png"],"images/contacts-m.png"],"./..\\images\\contacts-m@2x.png":[["contacts-m@2x.5242c3cf.png","images/contacts-m@2x.png"],"images/contacts-m@2x.png"],"./..\\images\\contacts-t.png":[["contacts-t.41faa40f.png","images/contacts-t.png"],"images/contacts-t.png"],"./..\\images\\contacts-t@2x.png":[["contacts-t@2x.95fa739b.png","images/contacts-t@2x.png"],"images/contacts-t@2x.png"],"./..\\images\\contacts-d.png":[["contacts-d.a54515ab.png","images/contacts-d.png"],"images/contacts-d.png"],"./..\\images\\contacts-d@2x.png":[["contacts-d@2x.5b1a758d.png","images/contacts-d@2x.png"],"images/contacts-d@2x.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64324" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map