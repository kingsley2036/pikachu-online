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
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n<style>\n\n#html{\n background: #ffe600;\n \n}\n\n.pikachu {\n    position: relative;\n      \n}\n\n.nose {\n    border: 10px solid black;\n    width: 0px;\n    height: 0px;\n    position: relative;\n    top: 145px;\n    left: 50%;\n    margin-left: -10px;\n    border-color: black transparent transparent;\n    border-bottom: none;\n    z-index: 10;\n}\n@keyframes wave{\n    0%{\n        transform: rotate(0);\n    }\n    33%{\n        transform: rotate(15deg); \n    }\n    66%{\n        transform: rotate(-15deg); \n    }\n    100%{\n        transform: rotate(0); \n    }\n}\n.nose:hover{\nanimation: wave 300ms infinite linear;\ntransform-origin: center bottom;\n}\n\n.yuan {\n    border: 1px solid black;\n    width: 20px;\n    height: 5px;\n    position: absolute;\n    margin-left: -10px;\n    top: -15px;\n    border-radius: 10px 10px 0 0;\n    background: black;\n\n}\n\n.eye {\n    width: 64px;\n    height: 64px;\n    /* border: 1px solid red; */\n    position: absolute;\n    left: 50%;\n    margin-left: -32px;\n    top: 100px;\n    border-radius: 50%;\n    background: #2e2e2e;\n}\n\n.eye::after {\n    content: \"\";\n    display: block;\n    width: 31px;\n    height: 31px;\n    border: 1px solid #000;\n    border-radius: 50%;\n    position: absolute;\n    top: 4px;\n    left: 10px;\n    background: #fff;\n\n}\n\n.eye.left {\n    transform: translateX(-100px);\n}\n\n.eye.right {\n    transform: translateX(100px);\n}\n\n.mouth {\n    position: absolute;\n    width: 150px;\n    height: 150px;\n    left: 50%;\n    margin-left: -75px;\n    top: 170px;\n}\n\n.mouth .up {\n    position: relative;\n   \n    top: -20px;\n    z-index: 1;\n}\n\n.mouth .up .lip {\n    border: 2px solid black;\n    height: 30px;\n    width: 100px;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    border-left-color: transparent;\n    position: relative;\n    left: 50%;\n    margin-left: -50px;\n    background: #ffe600;\n}\n\n.mouth .up .lip.left {\n    border-radius: 0 0 0 50px;\n    transform: rotate(-15deg) translateX(-53px);\n}\n\n.mouth .up .lip.left::before {\n\n    content: \"\";\n    display: block;\n    height: 30px;\n    width: 5px;\n    right: -3px;\n    background: #ffe600;\n    bottom: 0;\n    position: absolute;\n}\n\n.mouth .up .lip.right {\n    border-radius: 0 0 50px 0;\n   \n    top: -29px;\n    transform: rotate(15deg) translateX(53px);\n}\n\n.mouth .up .lip.right::before {\n\n    content: \"\";\n    display: block;\n    height: 30px;\n    width: 5px;\n    left: -3px;\n    background: #ffe600;\n    bottom: 0;\n    position: absolute;\n}\n\n.mouth .down {\n    /* border: 1px solid green; */\n    height: 200px;\n    width: 100%;\n    position: absolute;\n    top: 10px;\n    overflow: hidden;\n\n}\n\n.mouth .down .yuan1 {\n    border: 1px solid red;\n    width: 150px;\n    height: 1000px;\n    position: absolute;\n    bottom: 50px;\n    border-radius: 75PX/300PX;\n    background: #9b000a;\n    overflow: hidden;\n}\n.mouth .down .yuan1 .yuan2 {\n    content: \"\";\n  \n    width: 200px;\n    height: 300px;\n    position: absolute;\n    bottom: -190px;\n    margin-left: -100px;\n    left: 50%;\n    background: #ff485f;\n    border-radius:100px;\n}\n.face{\n     border: 3px solid red;\n     width: 88px;\n     height: 88px;\n     position: absolute;\n     left: 50%;\n     margin-left: -44px; \n     top: 230px;\n     z-index: 3; \n     border-radius: 50%;  \n     background: #ff0000;\n}\n.face.left{\n    transform: translateX(-170px);\n}\n.face.right{\n    transform: translateX(170px);\n}\n.face img{\n    height: 100px;\n    width: 100px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n   \n}\n\n.face.left img{\n    transform: rotatey(180deg);\n    left:-70%;\n}\n</style>\n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 1;
var time = 10;
demo.innerText = _css.default.substr(0, n);
demo2.innerHTML = _css.default.substr(0, n);

var draw = function draw() {
  n += 1;

  if (n > _css.default.length) {
    window.clearInterval(id);
    return;
  }

  demo.innerText = _css.default.substr(0, n);
  demo2.innerHTML = _css.default.substr(0, n); // demo.scrollTop=scrollHeight;

  demo.scrollTop = 10000;
};

var play = function play() {
  return setInterval(draw, time);
};

var pause = function pause() {
  window.clearInterval(id);
};

var id = play();

btnPause.onclick = function () {
  pause();
};

btnPlay.onclick = function () {
  id = play();
};

btnSlow.onclick = function () {
  pause();
  time = 300;
  id = play();
};

btnNormal.onclick = function () {
  pause();
  time = 10;
  id = play();
};

btnFast.onclick = function () {
  pause();
  time = 0;
  id = play();
};
},{"./css":"css.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "11851" + '/');

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
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map