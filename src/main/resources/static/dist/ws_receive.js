(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/interactjs/dist/interact.min.js
  var require_interact_min = __commonJS({
    "node_modules/interactjs/dist/interact.min.js"(exports, module) {
      !function(t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).interact = t();
      }(function() {
        var t = {};
        Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0, t.default = function(t2) {
          return !(!t2 || !t2.Window) && t2 instanceof t2.Window;
        };
        var e = {};
        Object.defineProperty(e, "__esModule", { value: true }), e.getWindow = function(e2) {
          return (0, t.default)(e2) ? e2 : (e2.ownerDocument || e2).defaultView || r.window;
        }, e.init = o, e.window = e.realWindow = void 0;
        var n = void 0;
        e.realWindow = n;
        var r = void 0;
        function o(t2) {
          e.realWindow = n = t2;
          var o2 = t2.document.createTextNode("");
          o2.ownerDocument !== t2.document && "function" == typeof t2.wrap && t2.wrap(o2) === o2 && (t2 = t2.wrap(t2)), e.window = r = t2;
        }
        e.window = r, "undefined" != typeof window && window && o(window);
        var i = {};
        function a(t2) {
          return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          }, a(t2);
        }
        Object.defineProperty(i, "__esModule", { value: true }), i.default = void 0;
        var s = function(t2) {
          return !!t2 && "object" === a(t2);
        }, l = function(t2) {
          return "function" == typeof t2;
        }, u = { window: function(n2) {
          return n2 === e.window || (0, t.default)(n2);
        }, docFrag: function(t2) {
          return s(t2) && 11 === t2.nodeType;
        }, object: s, func: l, number: function(t2) {
          return "number" == typeof t2;
        }, bool: function(t2) {
          return "boolean" == typeof t2;
        }, string: function(t2) {
          return "string" == typeof t2;
        }, element: function(t2) {
          if (!t2 || "object" !== a(t2))
            return false;
          var n2 = e.getWindow(t2) || e.window;
          return /object|function/.test("undefined" == typeof Element ? "undefined" : a(Element)) ? t2 instanceof Element || t2 instanceof n2.Element : 1 === t2.nodeType && "string" == typeof t2.nodeName;
        }, plainObject: function(t2) {
          return s(t2) && !!t2.constructor && /function Object\b/.test(t2.constructor.toString());
        }, array: function(t2) {
          return s(t2) && void 0 !== t2.length && l(t2.splice);
        } };
        i.default = u;
        var c = {};
        function f(t2) {
          var e2 = t2.interaction;
          if ("drag" === e2.prepared.name) {
            var n2 = e2.prepared.axis;
            "x" === n2 ? (e2.coords.cur.page.y = e2.coords.start.page.y, e2.coords.cur.client.y = e2.coords.start.client.y, e2.coords.velocity.client.y = 0, e2.coords.velocity.page.y = 0) : "y" === n2 && (e2.coords.cur.page.x = e2.coords.start.page.x, e2.coords.cur.client.x = e2.coords.start.client.x, e2.coords.velocity.client.x = 0, e2.coords.velocity.page.x = 0);
          }
        }
        function d(t2) {
          var e2 = t2.iEvent, n2 = t2.interaction;
          if ("drag" === n2.prepared.name) {
            var r2 = n2.prepared.axis;
            if ("x" === r2 || "y" === r2) {
              var o2 = "x" === r2 ? "y" : "x";
              e2.page[o2] = n2.coords.start.page[o2], e2.client[o2] = n2.coords.start.client[o2], e2.delta[o2] = 0;
            }
          }
        }
        Object.defineProperty(c, "__esModule", { value: true }), c.default = void 0;
        var p = { id: "actions/drag", install: function(t2) {
          var e2 = t2.actions, n2 = t2.Interactable, r2 = t2.defaults;
          n2.prototype.draggable = p.draggable, e2.map.drag = p, e2.methodDict.drag = "draggable", r2.actions.drag = p.defaults;
        }, listeners: { "interactions:before-action-move": f, "interactions:action-resume": f, "interactions:action-move": d, "auto-start:check": function(t2) {
          var e2 = t2.interaction, n2 = t2.interactable, r2 = t2.buttons, o2 = n2.options.drag;
          if (o2 && o2.enabled && (!e2.pointerIsDown || !/mouse|pointer/.test(e2.pointerType) || 0 != (r2 & n2.options.drag.mouseButtons)))
            return t2.action = { name: "drag", axis: "start" === o2.lockAxis ? o2.startAxis : o2.lockAxis }, false;
        } }, draggable: function(t2) {
          return i.default.object(t2) ? (this.options.drag.enabled = false !== t2.enabled, this.setPerAction("drag", t2), this.setOnEvents("drag", t2), /^(xy|x|y|start)$/.test(t2.lockAxis) && (this.options.drag.lockAxis = t2.lockAxis), /^(xy|x|y)$/.test(t2.startAxis) && (this.options.drag.startAxis = t2.startAxis), this) : i.default.bool(t2) ? (this.options.drag.enabled = t2, this) : this.options.drag;
        }, beforeMove: f, move: d, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
          return "move";
        } }, v = p;
        c.default = v;
        var h = {};
        Object.defineProperty(h, "__esModule", { value: true }), h.default = void 0;
        var g = { init: function(t2) {
          var e2 = t2;
          g.document = e2.document, g.DocumentFragment = e2.DocumentFragment || y, g.SVGElement = e2.SVGElement || y, g.SVGSVGElement = e2.SVGSVGElement || y, g.SVGElementInstance = e2.SVGElementInstance || y, g.Element = e2.Element || y, g.HTMLElement = e2.HTMLElement || g.Element, g.Event = e2.Event, g.Touch = e2.Touch || y, g.PointerEvent = e2.PointerEvent || e2.MSPointerEvent;
        }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
        function y() {
        }
        var m = g;
        h.default = m;
        var b = {};
        Object.defineProperty(b, "__esModule", { value: true }), b.default = void 0;
        var x = { init: function(t2) {
          var e2 = h.default.Element, n2 = t2.navigator || {};
          x.supportsTouch = "ontouchstart" in t2 || i.default.func(t2.DocumentTouch) && h.default.document instanceof t2.DocumentTouch, x.supportsPointerEvent = false !== n2.pointerEnabled && !!h.default.PointerEvent, x.isIOS = /iP(hone|od|ad)/.test(n2.platform), x.isIOS7 = /iP(hone|od|ad)/.test(n2.platform) && /OS 7[^\d]/.test(n2.appVersion), x.isIe9 = /MSIE 9/.test(n2.userAgent), x.isOperaMobile = "Opera" === n2.appName && x.supportsTouch && /Presto/.test(n2.userAgent), x.prefixedMatchesSelector = "matches" in e2.prototype ? "matches" : "webkitMatchesSelector" in e2.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in e2.prototype ? "mozMatchesSelector" : "oMatchesSelector" in e2.prototype ? "oMatchesSelector" : "msMatchesSelector", x.pEventTypes = x.supportsPointerEvent ? h.default.PointerEvent === t2.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, x.wheelEvent = h.default.document && "onmousewheel" in h.default.document ? "mousewheel" : "wheel";
        }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, w = x;
        b.default = w;
        var _ = {};
        function P(t2) {
          var e2 = t2.parentNode;
          if (i.default.docFrag(e2)) {
            for (; (e2 = e2.host) && i.default.docFrag(e2); )
              ;
            return e2;
          }
          return e2;
        }
        function O(t2, n2) {
          return e.window !== e.realWindow && (n2 = n2.replace(/\/deep\//g, " ")), t2[b.default.prefixedMatchesSelector](n2);
        }
        Object.defineProperty(_, "__esModule", { value: true }), _.closest = function(t2, e2) {
          for (; i.default.element(t2); ) {
            if (O(t2, e2))
              return t2;
            t2 = P(t2);
          }
          return null;
        }, _.getActualElement = function(t2) {
          return t2.correspondingUseElement || t2;
        }, _.getElementClientRect = j, _.getElementRect = function(t2) {
          var n2 = j(t2);
          if (!b.default.isIOS7 && n2) {
            var r2 = T(e.getWindow(t2));
            n2.left += r2.x, n2.right += r2.x, n2.top += r2.y, n2.bottom += r2.y;
          }
          return n2;
        }, _.getPath = function(t2) {
          for (var e2 = []; t2; )
            e2.push(t2), t2 = P(t2);
          return e2;
        }, _.getScrollXY = T, _.indexOfDeepestElement = function(t2) {
          for (var n2, r2 = [], o2 = 0; o2 < t2.length; o2++) {
            var i2 = t2[o2], a2 = t2[n2];
            if (i2 && o2 !== n2)
              if (a2) {
                var s2 = E(i2), l2 = E(a2);
                if (s2 !== i2.ownerDocument)
                  if (l2 !== i2.ownerDocument)
                    if (s2 !== l2) {
                      r2 = r2.length ? r2 : S(a2);
                      var u2 = void 0;
                      if (a2 instanceof h.default.HTMLElement && i2 instanceof h.default.SVGElement && !(i2 instanceof h.default.SVGSVGElement)) {
                        if (i2 === l2)
                          continue;
                        u2 = i2.ownerSVGElement;
                      } else
                        u2 = i2;
                      for (var c2 = S(u2, a2.ownerDocument), f2 = 0; c2[f2] && c2[f2] === r2[f2]; )
                        f2++;
                      var d2 = [c2[f2 - 1], c2[f2], r2[f2]];
                      if (d2[0])
                        for (var p2 = d2[0].lastChild; p2; ) {
                          if (p2 === d2[1]) {
                            n2 = o2, r2 = c2;
                            break;
                          }
                          if (p2 === d2[2])
                            break;
                          p2 = p2.previousSibling;
                        }
                    } else
                      v2 = i2, g2 = a2, void 0, void 0, (parseInt(e.getWindow(v2).getComputedStyle(v2).zIndex, 10) || 0) >= (parseInt(e.getWindow(g2).getComputedStyle(g2).zIndex, 10) || 0) && (n2 = o2);
                  else
                    n2 = o2;
              } else
                n2 = o2;
          }
          var v2, g2;
          return n2;
        }, _.matchesSelector = O, _.matchesUpTo = function(t2, e2, n2) {
          for (; i.default.element(t2); ) {
            if (O(t2, e2))
              return true;
            if ((t2 = P(t2)) === n2)
              return O(t2, e2);
          }
          return false;
        }, _.nodeContains = function(t2, e2) {
          if (t2.contains)
            return t2.contains(e2);
          for (; e2; ) {
            if (e2 === t2)
              return true;
            e2 = e2.parentNode;
          }
          return false;
        }, _.parentNode = P, _.trySelector = function(t2) {
          return !!i.default.string(t2) && (h.default.document.querySelector(t2), true);
        };
        var E = function(t2) {
          return t2.parentNode || t2.host;
        };
        function S(t2, e2) {
          for (var n2, r2 = [], o2 = t2; (n2 = E(o2)) && o2 !== e2 && n2 !== o2.ownerDocument; )
            r2.unshift(o2), o2 = n2;
          return r2;
        }
        function T(t2) {
          return { x: (t2 = t2 || e.window).scrollX || t2.document.documentElement.scrollLeft, y: t2.scrollY || t2.document.documentElement.scrollTop };
        }
        function j(t2) {
          var e2 = t2 instanceof h.default.SVGElement ? t2.getBoundingClientRect() : t2.getClientRects()[0];
          return e2 && { left: e2.left, right: e2.right, top: e2.top, bottom: e2.bottom, width: e2.width || e2.right - e2.left, height: e2.height || e2.bottom - e2.top };
        }
        var M = {};
        Object.defineProperty(M, "__esModule", { value: true }), M.default = function(t2, e2) {
          for (var n2 in e2)
            t2[n2] = e2[n2];
          return t2;
        };
        var k = {};
        function I(t2, e2) {
          (null == e2 || e2 > t2.length) && (e2 = t2.length);
          for (var n2 = 0, r2 = Array(e2); n2 < e2; n2++)
            r2[n2] = t2[n2];
          return r2;
        }
        function D(t2, e2, n2) {
          return "parent" === t2 ? (0, _.parentNode)(n2) : "self" === t2 ? e2.getRect(n2) : (0, _.closest)(n2, t2);
        }
        Object.defineProperty(k, "__esModule", { value: true }), k.addEdges = function(t2, e2, n2) {
          t2.left && (e2.left += n2.x), t2.right && (e2.right += n2.x), t2.top && (e2.top += n2.y), t2.bottom && (e2.bottom += n2.y), e2.width = e2.right - e2.left, e2.height = e2.bottom - e2.top;
        }, k.getStringOptionResult = D, k.rectToXY = function(t2) {
          return t2 && { x: "x" in t2 ? t2.x : t2.left, y: "y" in t2 ? t2.y : t2.top };
        }, k.resolveRectLike = function(t2, e2, n2, r2) {
          var o2, a2 = t2;
          return i.default.string(a2) ? a2 = D(a2, e2, n2) : i.default.func(a2) && (a2 = a2.apply(void 0, function(t3) {
            if (Array.isArray(t3))
              return I(t3);
          }(o2 = r2) || function(t3) {
            if ("undefined" != typeof Symbol && null != t3[Symbol.iterator] || null != t3["@@iterator"])
              return Array.from(t3);
          }(o2) || function(t3, e3) {
            if (t3) {
              if ("string" == typeof t3)
                return I(t3, e3);
              var n3 = Object.prototype.toString.call(t3).slice(8, -1);
              return "Object" === n3 && t3.constructor && (n3 = t3.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(t3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? I(t3, e3) : void 0;
            }
          }(o2) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }())), i.default.element(a2) && (a2 = (0, _.getElementRect)(a2)), a2;
        }, k.tlbrToXywh = function(t2) {
          return !t2 || "x" in t2 && "y" in t2 || ((t2 = (0, M.default)({}, t2)).x = t2.left || 0, t2.y = t2.top || 0, t2.width = t2.width || (t2.right || 0) - t2.x, t2.height = t2.height || (t2.bottom || 0) - t2.y), t2;
        }, k.xywhToTlbr = function(t2) {
          return !t2 || "left" in t2 && "top" in t2 || ((t2 = (0, M.default)({}, t2)).left = t2.x || 0, t2.top = t2.y || 0, t2.right = t2.right || t2.left + t2.width, t2.bottom = t2.bottom || t2.top + t2.height), t2;
        };
        var A = {};
        Object.defineProperty(A, "__esModule", { value: true }), A.default = function(t2, e2, n2) {
          var r2 = t2.options[n2], o2 = r2 && r2.origin || t2.options.origin, i2 = (0, k.resolveRectLike)(o2, t2, e2, [t2 && e2]);
          return (0, k.rectToXY)(i2) || { x: 0, y: 0 };
        };
        var z = {};
        function C(t2) {
          return t2.trim().split(/ +/);
        }
        Object.defineProperty(z, "__esModule", { value: true }), z.default = function t2(e2, n2, r2) {
          if (r2 = r2 || {}, i.default.string(e2) && -1 !== e2.search(" ") && (e2 = C(e2)), i.default.array(e2))
            return e2.reduce(function(e3, o3) {
              return (0, M.default)(e3, t2(o3, n2, r2));
            }, r2);
          if (i.default.object(e2) && (n2 = e2, e2 = ""), i.default.func(n2))
            r2[e2] = r2[e2] || [], r2[e2].push(n2);
          else if (i.default.array(n2))
            for (var o2 = 0; o2 < n2.length; o2++) {
              var a2;
              a2 = n2[o2], t2(e2, a2, r2);
            }
          else if (i.default.object(n2))
            for (var s2 in n2) {
              var l2 = C(s2).map(function(t3) {
                return "".concat(e2).concat(t3);
              });
              t2(l2, n2[s2], r2);
            }
          return r2;
        };
        var R = {};
        Object.defineProperty(R, "__esModule", { value: true }), R.default = void 0, R.default = function(t2, e2) {
          return Math.sqrt(t2 * t2 + e2 * e2);
        };
        var F = {};
        Object.defineProperty(F, "__esModule", { value: true }), F.default = function(t2, e2) {
          t2.__set || (t2.__set = {});
          var n2 = function(n3) {
            "function" != typeof t2[n3] && "__set" !== n3 && Object.defineProperty(t2, n3, { get: function() {
              return n3 in t2.__set ? t2.__set[n3] : t2.__set[n3] = e2[n3];
            }, set: function(e3) {
              t2.__set[n3] = e3;
            }, configurable: true });
          };
          for (var r2 in e2)
            n2(r2);
          return t2;
        };
        var X = {};
        function B(t2) {
          return t2 instanceof h.default.Event || t2 instanceof h.default.Touch;
        }
        function Y(t2, e2, n2) {
          return t2 = t2 || "page", (n2 = n2 || {}).x = e2[t2 + "X"], n2.y = e2[t2 + "Y"], n2;
        }
        function W(t2, e2) {
          return e2 = e2 || { x: 0, y: 0 }, b.default.isOperaMobile && B(t2) ? (Y("screen", t2, e2), e2.x += window.scrollX, e2.y += window.scrollY) : Y("page", t2, e2), e2;
        }
        function L(t2, e2) {
          return e2 = e2 || {}, b.default.isOperaMobile && B(t2) ? Y("screen", t2, e2) : Y("client", t2, e2), e2;
        }
        function U(t2) {
          var e2 = [];
          return i.default.array(t2) ? (e2[0] = t2[0], e2[1] = t2[1]) : "touchend" === t2.type ? 1 === t2.touches.length ? (e2[0] = t2.touches[0], e2[1] = t2.changedTouches[0]) : 0 === t2.touches.length && (e2[0] = t2.changedTouches[0], e2[1] = t2.changedTouches[1]) : (e2[0] = t2.touches[0], e2[1] = t2.touches[1]), e2;
        }
        function V(t2) {
          for (var e2 = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, n2 = 0; n2 < t2.length; n2++) {
            var r2 = t2[n2];
            for (var o2 in e2)
              e2[o2] += r2[o2];
          }
          for (var i2 in e2)
            e2[i2] /= t2.length;
          return e2;
        }
        Object.defineProperty(X, "__esModule", { value: true }), X.coordsToEvent = function(t2) {
          return { coords: t2, get page() {
            return this.coords.page;
          }, get client() {
            return this.coords.client;
          }, get timeStamp() {
            return this.coords.timeStamp;
          }, get pageX() {
            return this.coords.page.x;
          }, get pageY() {
            return this.coords.page.y;
          }, get clientX() {
            return this.coords.client.x;
          }, get clientY() {
            return this.coords.client.y;
          }, get pointerId() {
            return this.coords.pointerId;
          }, get target() {
            return this.coords.target;
          }, get type() {
            return this.coords.type;
          }, get pointerType() {
            return this.coords.pointerType;
          }, get buttons() {
            return this.coords.buttons;
          }, preventDefault: function() {
          } };
        }, X.copyCoords = function(t2, e2) {
          t2.page = t2.page || {}, t2.page.x = e2.page.x, t2.page.y = e2.page.y, t2.client = t2.client || {}, t2.client.x = e2.client.x, t2.client.y = e2.client.y, t2.timeStamp = e2.timeStamp;
        }, X.getClientXY = L, X.getEventTargets = function(t2) {
          var e2 = i.default.func(t2.composedPath) ? t2.composedPath() : t2.path;
          return [_.getActualElement(e2 ? e2[0] : t2.target), _.getActualElement(t2.currentTarget)];
        }, X.getPageXY = W, X.getPointerId = function(t2) {
          return i.default.number(t2.pointerId) ? t2.pointerId : t2.identifier;
        }, X.getPointerType = function(t2) {
          return i.default.string(t2.pointerType) ? t2.pointerType : i.default.number(t2.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][t2.pointerType] : /touch/.test(t2.type || "") || t2 instanceof h.default.Touch ? "touch" : "mouse";
        }, X.getTouchPair = U, X.getXY = Y, X.isNativePointer = B, X.newCoords = function() {
          return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
        }, X.pointerAverage = V, Object.defineProperty(X, "pointerExtend", { enumerable: true, get: function() {
          return F.default;
        } }), X.setCoordDeltas = function(t2, e2, n2) {
          t2.page.x = n2.page.x - e2.page.x, t2.page.y = n2.page.y - e2.page.y, t2.client.x = n2.client.x - e2.client.x, t2.client.y = n2.client.y - e2.client.y, t2.timeStamp = n2.timeStamp - e2.timeStamp;
        }, X.setCoordVelocity = function(t2, e2) {
          var n2 = Math.max(e2.timeStamp / 1e3, 1e-3);
          t2.page.x = e2.page.x / n2, t2.page.y = e2.page.y / n2, t2.client.x = e2.client.x / n2, t2.client.y = e2.client.y / n2, t2.timeStamp = n2;
        }, X.setCoords = function(t2, e2, n2) {
          var r2 = e2.length > 1 ? V(e2) : e2[0];
          W(r2, t2.page), L(r2, t2.client), t2.timeStamp = n2;
        }, X.setZeroCoords = function(t2) {
          t2.page.x = 0, t2.page.y = 0, t2.client.x = 0, t2.client.y = 0;
        }, X.touchAngle = function(t2, e2) {
          var n2 = e2 + "X", r2 = e2 + "Y", o2 = U(t2), i2 = o2[1][n2] - o2[0][n2], a2 = o2[1][r2] - o2[0][r2];
          return 180 * Math.atan2(a2, i2) / Math.PI;
        }, X.touchBBox = function(t2) {
          if (!t2.length)
            return null;
          var e2 = U(t2), n2 = Math.min(e2[0].pageX, e2[1].pageX), r2 = Math.min(e2[0].pageY, e2[1].pageY), o2 = Math.max(e2[0].pageX, e2[1].pageX), i2 = Math.max(e2[0].pageY, e2[1].pageY);
          return { x: n2, y: r2, left: n2, top: r2, right: o2, bottom: i2, width: o2 - n2, height: i2 - r2 };
        }, X.touchDistance = function(t2, e2) {
          var n2 = e2 + "X", r2 = e2 + "Y", o2 = U(t2), i2 = o2[0][n2] - o2[1][n2], a2 = o2[0][r2] - o2[1][r2];
          return (0, R.default)(i2, a2);
        };
        var N = {};
        function q(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function G(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        Object.defineProperty(N, "__esModule", { value: true }), N.BaseEvent = void 0;
        var $ = function() {
          function t2(e3) {
            !function(t3, e4) {
              if (!(t3 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t2), G(this, "immediatePropagationStopped", false), G(this, "propagationStopped", false), this._interaction = e3;
          }
          var e2, n2;
          return e2 = t2, (n2 = [{ key: "preventDefault", value: function() {
          } }, { key: "stopPropagation", value: function() {
            this.propagationStopped = true;
          } }, { key: "stopImmediatePropagation", value: function() {
            this.immediatePropagationStopped = this.propagationStopped = true;
          } }]) && q(e2.prototype, n2), Object.defineProperty(e2, "prototype", { writable: false }), t2;
        }();
        N.BaseEvent = $, Object.defineProperty($.prototype, "interaction", { get: function() {
          return this._interaction._proxy;
        }, set: function() {
        } });
        var H = {};
        Object.defineProperty(H, "__esModule", { value: true }), H.remove = H.merge = H.from = H.findIndex = H.find = H.contains = void 0, H.contains = function(t2, e2) {
          return -1 !== t2.indexOf(e2);
        }, H.remove = function(t2, e2) {
          return t2.splice(t2.indexOf(e2), 1);
        };
        var K = function(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            t2.push(r2);
          }
          return t2;
        };
        H.merge = K, H.from = function(t2) {
          return K([], t2);
        };
        var Z = function(t2, e2) {
          for (var n2 = 0; n2 < t2.length; n2++)
            if (e2(t2[n2], n2, t2))
              return n2;
          return -1;
        };
        H.findIndex = Z, H.find = function(t2, e2) {
          return t2[Z(t2, e2)];
        };
        var J = {};
        function Q(t2) {
          return Q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          }, Q(t2);
        }
        function tt(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function et(t2, e2) {
          return et = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
            return t3.__proto__ = e3, t3;
          }, et(t2, e2);
        }
        function nt(t2, e2) {
          if (e2 && ("object" === Q(e2) || "function" == typeof e2))
            return e2;
          if (void 0 !== e2)
            throw new TypeError("Derived constructors may only return object or undefined");
          return rt(t2);
        }
        function rt(t2) {
          if (void 0 === t2)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t2;
        }
        function ot(t2) {
          return ot = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
            return t3.__proto__ || Object.getPrototypeOf(t3);
          }, ot(t2);
        }
        function it(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        Object.defineProperty(J, "__esModule", { value: true }), J.DropEvent = void 0;
        var at = function(t2) {
          !function(t3, e3) {
            if ("function" != typeof e3 && null !== e3)
              throw new TypeError("Super expression must either be null or a function");
            t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, writable: true, configurable: true } }), Object.defineProperty(t3, "prototype", { writable: false }), e3 && et(t3, e3);
          }(a2, t2);
          var e2, n2, r2, o2, i2 = (r2 = a2, o2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }(), function() {
            var t3, e3 = ot(r2);
            if (o2) {
              var n3 = ot(this).constructor;
              t3 = Reflect.construct(e3, arguments, n3);
            } else
              t3 = e3.apply(this, arguments);
            return nt(this, t3);
          });
          function a2(t3, e3, n3) {
            var r3;
            !function(t4, e4) {
              if (!(t4 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, a2), it(rt(r3 = i2.call(this, e3._interaction)), "dropzone", void 0), it(rt(r3), "dragEvent", void 0), it(rt(r3), "relatedTarget", void 0), it(rt(r3), "draggable", void 0), it(rt(r3), "propagationStopped", false), it(rt(r3), "immediatePropagationStopped", false);
            var o3 = "dragleave" === n3 ? t3.prev : t3.cur, s2 = o3.element, l2 = o3.dropzone;
            return r3.type = n3, r3.target = s2, r3.currentTarget = s2, r3.dropzone = l2, r3.dragEvent = e3, r3.relatedTarget = e3.target, r3.draggable = e3.interactable, r3.timeStamp = e3.timeStamp, r3;
          }
          return e2 = a2, (n2 = [{ key: "reject", value: function() {
            var t3 = this, e3 = this._interaction.dropState;
            if ("dropactivate" === this.type || this.dropzone && e3.cur.dropzone === this.dropzone && e3.cur.element === this.target)
              if (e3.prev.dropzone = this.dropzone, e3.prev.element = this.target, e3.rejected = true, e3.events.enter = null, this.stopImmediatePropagation(), "dropactivate" === this.type) {
                var n3 = e3.activeDrops, r3 = H.findIndex(n3, function(e4) {
                  var n4 = e4.dropzone, r4 = e4.element;
                  return n4 === t3.dropzone && r4 === t3.target;
                });
                e3.activeDrops.splice(r3, 1);
                var o3 = new a2(e3, this.dragEvent, "dropdeactivate");
                o3.dropzone = this.dropzone, o3.target = this.target, this.dropzone.fire(o3);
              } else
                this.dropzone.fire(new a2(e3, this.dragEvent, "dragleave"));
          } }, { key: "preventDefault", value: function() {
          } }, { key: "stopPropagation", value: function() {
            this.propagationStopped = true;
          } }, { key: "stopImmediatePropagation", value: function() {
            this.immediatePropagationStopped = this.propagationStopped = true;
          } }]) && tt(e2.prototype, n2), Object.defineProperty(e2, "prototype", { writable: false }), a2;
        }(N.BaseEvent);
        J.DropEvent = at;
        var st = {};
        function lt(t2, e2) {
          for (var n2 = 0; n2 < t2.slice().length; n2++) {
            var r2 = t2.slice()[n2], o2 = r2.dropzone, i2 = r2.element;
            e2.dropzone = o2, e2.target = i2, o2.fire(e2), e2.propagationStopped = e2.immediatePropagationStopped = false;
          }
        }
        function ut(t2, e2) {
          for (var n2 = function(t3, e3) {
            for (var n3 = t3.interactables, r3 = [], o3 = 0; o3 < n3.list.length; o3++) {
              var a2 = n3.list[o3];
              if (a2.options.drop.enabled) {
                var s2 = a2.options.drop.accept;
                if (!(i.default.element(s2) && s2 !== e3 || i.default.string(s2) && !_.matchesSelector(e3, s2) || i.default.func(s2) && !s2({ dropzone: a2, draggableElement: e3 })))
                  for (var l2 = i.default.string(a2.target) ? a2._context.querySelectorAll(a2.target) : i.default.array(a2.target) ? a2.target : [a2.target], u2 = 0; u2 < l2.length; u2++) {
                    var c2 = l2[u2];
                    c2 !== e3 && r3.push({ dropzone: a2, element: c2, rect: a2.getRect(c2) });
                  }
              }
            }
            return r3;
          }(t2, e2), r2 = 0; r2 < n2.length; r2++) {
            var o2 = n2[r2];
            o2.rect = o2.dropzone.getRect(o2.element);
          }
          return n2;
        }
        function ct(t2, e2, n2) {
          for (var r2 = t2.dropState, o2 = t2.interactable, i2 = t2.element, a2 = [], s2 = 0; s2 < r2.activeDrops.length; s2++) {
            var l2 = r2.activeDrops[s2], u2 = l2.dropzone, c2 = l2.element, f2 = l2.rect;
            a2.push(u2.dropCheck(e2, n2, o2, i2, c2, f2) ? c2 : null);
          }
          var d2 = _.indexOfDeepestElement(a2);
          return r2.activeDrops[d2] || null;
        }
        function ft(t2, e2, n2) {
          var r2 = t2.dropState, o2 = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
          return "dragstart" === n2.type && (o2.activate = new J.DropEvent(r2, n2, "dropactivate"), o2.activate.target = null, o2.activate.dropzone = null), "dragend" === n2.type && (o2.deactivate = new J.DropEvent(r2, n2, "dropdeactivate"), o2.deactivate.target = null, o2.deactivate.dropzone = null), r2.rejected || (r2.cur.element !== r2.prev.element && (r2.prev.dropzone && (o2.leave = new J.DropEvent(r2, n2, "dragleave"), n2.dragLeave = o2.leave.target = r2.prev.element, n2.prevDropzone = o2.leave.dropzone = r2.prev.dropzone), r2.cur.dropzone && (o2.enter = new J.DropEvent(r2, n2, "dragenter"), n2.dragEnter = r2.cur.element, n2.dropzone = r2.cur.dropzone)), "dragend" === n2.type && r2.cur.dropzone && (o2.drop = new J.DropEvent(r2, n2, "drop"), n2.dropzone = r2.cur.dropzone, n2.relatedTarget = r2.cur.element), "dragmove" === n2.type && r2.cur.dropzone && (o2.move = new J.DropEvent(r2, n2, "dropmove"), o2.move.dragmove = n2, n2.dropzone = r2.cur.dropzone)), o2;
        }
        function dt(t2, e2) {
          var n2 = t2.dropState, r2 = n2.activeDrops, o2 = n2.cur, i2 = n2.prev;
          e2.leave && i2.dropzone.fire(e2.leave), e2.enter && o2.dropzone.fire(e2.enter), e2.move && o2.dropzone.fire(e2.move), e2.drop && o2.dropzone.fire(e2.drop), e2.deactivate && lt(r2, e2.deactivate), n2.prev.dropzone = o2.dropzone, n2.prev.element = o2.element;
        }
        function pt(t2, e2) {
          var n2 = t2.interaction, r2 = t2.iEvent, o2 = t2.event;
          if ("dragmove" === r2.type || "dragend" === r2.type) {
            var i2 = n2.dropState;
            e2.dynamicDrop && (i2.activeDrops = ut(e2, n2.element));
            var a2 = r2, s2 = ct(n2, a2, o2);
            i2.rejected = i2.rejected && !!s2 && s2.dropzone === i2.cur.dropzone && s2.element === i2.cur.element, i2.cur.dropzone = s2 && s2.dropzone, i2.cur.element = s2 && s2.element, i2.events = ft(n2, 0, a2);
          }
        }
        Object.defineProperty(st, "__esModule", { value: true }), st.default = void 0;
        var vt = { id: "actions/drop", install: function(t2) {
          var e2 = t2.actions, n2 = t2.interactStatic, r2 = t2.Interactable, o2 = t2.defaults;
          t2.usePlugin(c.default), r2.prototype.dropzone = function(t3) {
            return function(t4, e3) {
              if (i.default.object(e3)) {
                if (t4.options.drop.enabled = false !== e3.enabled, e3.listeners) {
                  var n3 = (0, z.default)(e3.listeners), r3 = Object.keys(n3).reduce(function(t5, e4) {
                    return t5[/^(enter|leave)/.test(e4) ? "drag".concat(e4) : /^(activate|deactivate|move)/.test(e4) ? "drop".concat(e4) : e4] = n3[e4], t5;
                  }, {});
                  t4.off(t4.options.drop.listeners), t4.on(r3), t4.options.drop.listeners = r3;
                }
                return i.default.func(e3.ondrop) && t4.on("drop", e3.ondrop), i.default.func(e3.ondropactivate) && t4.on("dropactivate", e3.ondropactivate), i.default.func(e3.ondropdeactivate) && t4.on("dropdeactivate", e3.ondropdeactivate), i.default.func(e3.ondragenter) && t4.on("dragenter", e3.ondragenter), i.default.func(e3.ondragleave) && t4.on("dragleave", e3.ondragleave), i.default.func(e3.ondropmove) && t4.on("dropmove", e3.ondropmove), /^(pointer|center)$/.test(e3.overlap) ? t4.options.drop.overlap = e3.overlap : i.default.number(e3.overlap) && (t4.options.drop.overlap = Math.max(Math.min(1, e3.overlap), 0)), "accept" in e3 && (t4.options.drop.accept = e3.accept), "checker" in e3 && (t4.options.drop.checker = e3.checker), t4;
              }
              return i.default.bool(e3) ? (t4.options.drop.enabled = e3, t4) : t4.options.drop;
            }(this, t3);
          }, r2.prototype.dropCheck = function(t3, e3, n3, r3, o3, a2) {
            return function(t4, e4, n4, r4, o4, a3, s2) {
              var l2 = false;
              if (!(s2 = s2 || t4.getRect(a3)))
                return !!t4.options.drop.checker && t4.options.drop.checker(e4, n4, l2, t4, a3, r4, o4);
              var u2 = t4.options.drop.overlap;
              if ("pointer" === u2) {
                var c2 = (0, A.default)(r4, o4, "drag"), f2 = X.getPageXY(e4);
                f2.x += c2.x, f2.y += c2.y;
                var d2 = f2.x > s2.left && f2.x < s2.right, p2 = f2.y > s2.top && f2.y < s2.bottom;
                l2 = d2 && p2;
              }
              var v2 = r4.getRect(o4);
              if (v2 && "center" === u2) {
                var h2 = v2.left + v2.width / 2, g2 = v2.top + v2.height / 2;
                l2 = h2 >= s2.left && h2 <= s2.right && g2 >= s2.top && g2 <= s2.bottom;
              }
              return v2 && i.default.number(u2) && (l2 = Math.max(0, Math.min(s2.right, v2.right) - Math.max(s2.left, v2.left)) * Math.max(0, Math.min(s2.bottom, v2.bottom) - Math.max(s2.top, v2.top)) / (v2.width * v2.height) >= u2), t4.options.drop.checker && (l2 = t4.options.drop.checker(e4, n4, l2, t4, a3, r4, o4)), l2;
            }(this, t3, e3, n3, r3, o3, a2);
          }, n2.dynamicDrop = function(e3) {
            return i.default.bool(e3) ? (t2.dynamicDrop = e3, n2) : t2.dynamicDrop;
          }, (0, M.default)(e2.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), e2.methodDict.drop = "dropzone", t2.dynamicDrop = false, o2.actions.drop = vt.defaults;
        }, listeners: { "interactions:before-action-start": function(t2) {
          var e2 = t2.interaction;
          "drag" === e2.prepared.name && (e2.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
        }, "interactions:after-action-start": function(t2, e2) {
          var n2 = t2.interaction, r2 = (t2.event, t2.iEvent);
          if ("drag" === n2.prepared.name) {
            var o2 = n2.dropState;
            o2.activeDrops = null, o2.events = null, o2.activeDrops = ut(e2, n2.element), o2.events = ft(n2, 0, r2), o2.events.activate && (lt(o2.activeDrops, o2.events.activate), e2.fire("actions/drop:start", { interaction: n2, dragEvent: r2 }));
          }
        }, "interactions:action-move": pt, "interactions:after-action-move": function(t2, e2) {
          var n2 = t2.interaction, r2 = t2.iEvent;
          "drag" === n2.prepared.name && (dt(n2, n2.dropState.events), e2.fire("actions/drop:move", { interaction: n2, dragEvent: r2 }), n2.dropState.events = {});
        }, "interactions:action-end": function(t2, e2) {
          if ("drag" === t2.interaction.prepared.name) {
            var n2 = t2.interaction, r2 = t2.iEvent;
            pt(t2, e2), dt(n2, n2.dropState.events), e2.fire("actions/drop:end", { interaction: n2, dragEvent: r2 });
          }
        }, "interactions:stop": function(t2) {
          var e2 = t2.interaction;
          if ("drag" === e2.prepared.name) {
            var n2 = e2.dropState;
            n2 && (n2.activeDrops = null, n2.events = null, n2.cur.dropzone = null, n2.cur.element = null, n2.prev.dropzone = null, n2.prev.element = null, n2.rejected = false);
          }
        } }, getActiveDrops: ut, getDrop: ct, getDropEvents: ft, fireDropEvents: dt, defaults: { enabled: false, accept: null, overlap: "pointer" } }, ht = vt;
        st.default = ht;
        var gt = {};
        function yt(t2) {
          var e2 = t2.interaction, n2 = t2.iEvent, r2 = t2.phase;
          if ("gesture" === e2.prepared.name) {
            var o2 = e2.pointers.map(function(t3) {
              return t3.pointer;
            }), a2 = "start" === r2, s2 = "end" === r2, l2 = e2.interactable.options.deltaSource;
            if (n2.touches = [o2[0], o2[1]], a2)
              n2.distance = X.touchDistance(o2, l2), n2.box = X.touchBBox(o2), n2.scale = 1, n2.ds = 0, n2.angle = X.touchAngle(o2, l2), n2.da = 0, e2.gesture.startDistance = n2.distance, e2.gesture.startAngle = n2.angle;
            else if (s2) {
              var u2 = e2.prevEvent;
              n2.distance = u2.distance, n2.box = u2.box, n2.scale = u2.scale, n2.ds = 0, n2.angle = u2.angle, n2.da = 0;
            } else
              n2.distance = X.touchDistance(o2, l2), n2.box = X.touchBBox(o2), n2.scale = n2.distance / e2.gesture.startDistance, n2.angle = X.touchAngle(o2, l2), n2.ds = n2.scale - e2.gesture.scale, n2.da = n2.angle - e2.gesture.angle;
            e2.gesture.distance = n2.distance, e2.gesture.angle = n2.angle, i.default.number(n2.scale) && n2.scale !== 1 / 0 && !isNaN(n2.scale) && (e2.gesture.scale = n2.scale);
          }
        }
        Object.defineProperty(gt, "__esModule", { value: true }), gt.default = void 0;
        var mt = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(t2) {
          var e2 = t2.actions, n2 = t2.Interactable, r2 = t2.defaults;
          n2.prototype.gesturable = function(t3) {
            return i.default.object(t3) ? (this.options.gesture.enabled = false !== t3.enabled, this.setPerAction("gesture", t3), this.setOnEvents("gesture", t3), this) : i.default.bool(t3) ? (this.options.gesture.enabled = t3, this) : this.options.gesture;
          }, e2.map.gesture = mt, e2.methodDict.gesture = "gesturable", r2.actions.gesture = mt.defaults;
        }, listeners: { "interactions:action-start": yt, "interactions:action-move": yt, "interactions:action-end": yt, "interactions:new": function(t2) {
          t2.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
        }, "auto-start:check": function(t2) {
          if (!(t2.interaction.pointers.length < 2)) {
            var e2 = t2.interactable.options.gesture;
            if (e2 && e2.enabled)
              return t2.action = { name: "gesture" }, false;
          }
        } }, defaults: {}, getCursor: function() {
          return "";
        } }, bt = mt;
        gt.default = bt;
        var xt = {};
        function wt(t2, e2, n2, r2, o2, a2, s2) {
          if (!e2)
            return false;
          if (true === e2) {
            var l2 = i.default.number(a2.width) ? a2.width : a2.right - a2.left, u2 = i.default.number(a2.height) ? a2.height : a2.bottom - a2.top;
            if (s2 = Math.min(s2, Math.abs(("left" === t2 || "right" === t2 ? l2 : u2) / 2)), l2 < 0 && ("left" === t2 ? t2 = "right" : "right" === t2 && (t2 = "left")), u2 < 0 && ("top" === t2 ? t2 = "bottom" : "bottom" === t2 && (t2 = "top")), "left" === t2) {
              var c2 = l2 >= 0 ? a2.left : a2.right;
              return n2.x < c2 + s2;
            }
            if ("top" === t2) {
              var f2 = u2 >= 0 ? a2.top : a2.bottom;
              return n2.y < f2 + s2;
            }
            if ("right" === t2)
              return n2.x > (l2 >= 0 ? a2.right : a2.left) - s2;
            if ("bottom" === t2)
              return n2.y > (u2 >= 0 ? a2.bottom : a2.top) - s2;
          }
          return !!i.default.element(r2) && (i.default.element(e2) ? e2 === r2 : _.matchesUpTo(r2, e2, o2));
        }
        function _t(t2) {
          var e2 = t2.iEvent, n2 = t2.interaction;
          if ("resize" === n2.prepared.name && n2.resizeAxes) {
            var r2 = e2;
            n2.interactable.options.resize.square ? ("y" === n2.resizeAxes ? r2.delta.x = r2.delta.y : r2.delta.y = r2.delta.x, r2.axes = "xy") : (r2.axes = n2.resizeAxes, "x" === n2.resizeAxes ? r2.delta.y = 0 : "y" === n2.resizeAxes && (r2.delta.x = 0));
          }
        }
        Object.defineProperty(xt, "__esModule", { value: true }), xt.default = void 0;
        var Pt = { id: "actions/resize", before: ["actions/drag"], install: function(t2) {
          var e2 = t2.actions, n2 = t2.browser, r2 = t2.Interactable, o2 = t2.defaults;
          Pt.cursors = function(t3) {
            return t3.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
          }(n2), Pt.defaultMargin = n2.supportsTouch || n2.supportsPointerEvent ? 20 : 10, r2.prototype.resizable = function(e3) {
            return function(t3, e4, n3) {
              return i.default.object(e4) ? (t3.options.resize.enabled = false !== e4.enabled, t3.setPerAction("resize", e4), t3.setOnEvents("resize", e4), i.default.string(e4.axis) && /^x$|^y$|^xy$/.test(e4.axis) ? t3.options.resize.axis = e4.axis : null === e4.axis && (t3.options.resize.axis = n3.defaults.actions.resize.axis), i.default.bool(e4.preserveAspectRatio) ? t3.options.resize.preserveAspectRatio = e4.preserveAspectRatio : i.default.bool(e4.square) && (t3.options.resize.square = e4.square), t3) : i.default.bool(e4) ? (t3.options.resize.enabled = e4, t3) : t3.options.resize;
            }(this, e3, t2);
          }, e2.map.resize = Pt, e2.methodDict.resize = "resizable", o2.actions.resize = Pt.defaults;
        }, listeners: { "interactions:new": function(t2) {
          t2.interaction.resizeAxes = "xy";
        }, "interactions:action-start": function(t2) {
          !function(t3) {
            var e2 = t3.iEvent, n2 = t3.interaction;
            if ("resize" === n2.prepared.name && n2.prepared.edges) {
              var r2 = e2, o2 = n2.rect;
              n2._rects = { start: (0, M.default)({}, o2), corrected: (0, M.default)({}, o2), previous: (0, M.default)({}, o2), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, r2.edges = n2.prepared.edges, r2.rect = n2._rects.corrected, r2.deltaRect = n2._rects.delta;
            }
          }(t2), _t(t2);
        }, "interactions:action-move": function(t2) {
          !function(t3) {
            var e2 = t3.iEvent, n2 = t3.interaction;
            if ("resize" === n2.prepared.name && n2.prepared.edges) {
              var r2 = e2, o2 = n2.interactable.options.resize.invert, i2 = "reposition" === o2 || "negate" === o2, a2 = n2.rect, s2 = n2._rects, l2 = s2.start, u2 = s2.corrected, c2 = s2.delta, f2 = s2.previous;
              if ((0, M.default)(f2, u2), i2) {
                if ((0, M.default)(u2, a2), "reposition" === o2) {
                  if (u2.top > u2.bottom) {
                    var d2 = u2.top;
                    u2.top = u2.bottom, u2.bottom = d2;
                  }
                  if (u2.left > u2.right) {
                    var p2 = u2.left;
                    u2.left = u2.right, u2.right = p2;
                  }
                }
              } else
                u2.top = Math.min(a2.top, l2.bottom), u2.bottom = Math.max(a2.bottom, l2.top), u2.left = Math.min(a2.left, l2.right), u2.right = Math.max(a2.right, l2.left);
              for (var v2 in u2.width = u2.right - u2.left, u2.height = u2.bottom - u2.top, u2)
                c2[v2] = u2[v2] - f2[v2];
              r2.edges = n2.prepared.edges, r2.rect = u2, r2.deltaRect = c2;
            }
          }(t2), _t(t2);
        }, "interactions:action-end": function(t2) {
          var e2 = t2.iEvent, n2 = t2.interaction;
          if ("resize" === n2.prepared.name && n2.prepared.edges) {
            var r2 = e2;
            r2.edges = n2.prepared.edges, r2.rect = n2._rects.corrected, r2.deltaRect = n2._rects.delta;
          }
        }, "auto-start:check": function(t2) {
          var e2 = t2.interaction, n2 = t2.interactable, r2 = t2.element, o2 = t2.rect, a2 = t2.buttons;
          if (o2) {
            var s2 = (0, M.default)({}, e2.coords.cur.page), l2 = n2.options.resize;
            if (l2 && l2.enabled && (!e2.pointerIsDown || !/mouse|pointer/.test(e2.pointerType) || 0 != (a2 & l2.mouseButtons))) {
              if (i.default.object(l2.edges)) {
                var u2 = { left: false, right: false, top: false, bottom: false };
                for (var c2 in u2)
                  u2[c2] = wt(c2, l2.edges[c2], s2, e2._latestPointer.eventTarget, r2, o2, l2.margin || Pt.defaultMargin);
                u2.left = u2.left && !u2.right, u2.top = u2.top && !u2.bottom, (u2.left || u2.right || u2.top || u2.bottom) && (t2.action = { name: "resize", edges: u2 });
              } else {
                var f2 = "y" !== l2.axis && s2.x > o2.right - Pt.defaultMargin, d2 = "x" !== l2.axis && s2.y > o2.bottom - Pt.defaultMargin;
                (f2 || d2) && (t2.action = { name: "resize", axes: (f2 ? "x" : "") + (d2 ? "y" : "") });
              }
              return !t2.action && void 0;
            }
          }
        } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(t2) {
          var e2 = t2.edges, n2 = t2.axis, r2 = t2.name, o2 = Pt.cursors, i2 = null;
          if (n2)
            i2 = o2[r2 + n2];
          else if (e2) {
            for (var a2 = "", s2 = ["top", "bottom", "left", "right"], l2 = 0; l2 < s2.length; l2++) {
              var u2 = s2[l2];
              e2[u2] && (a2 += u2);
            }
            i2 = o2[a2];
          }
          return i2;
        }, defaultMargin: null }, Ot = Pt;
        xt.default = Ot;
        var Et = {};
        Object.defineProperty(Et, "__esModule", { value: true }), Et.default = void 0;
        var St = { id: "actions", install: function(t2) {
          t2.usePlugin(gt.default), t2.usePlugin(xt.default), t2.usePlugin(c.default), t2.usePlugin(st.default);
        } };
        Et.default = St;
        var Tt = {};
        Object.defineProperty(Tt, "__esModule", { value: true }), Tt.default = void 0;
        var jt, Mt, kt = 0, It = { request: function(t2) {
          return jt(t2);
        }, cancel: function(t2) {
          return Mt(t2);
        }, init: function(t2) {
          if (jt = t2.requestAnimationFrame, Mt = t2.cancelAnimationFrame, !jt)
            for (var e2 = ["ms", "moz", "webkit", "o"], n2 = 0; n2 < e2.length; n2++) {
              var r2 = e2[n2];
              jt = t2["".concat(r2, "RequestAnimationFrame")], Mt = t2["".concat(r2, "CancelAnimationFrame")] || t2["".concat(r2, "CancelRequestAnimationFrame")];
            }
          jt = jt && jt.bind(t2), Mt = Mt && Mt.bind(t2), jt || (jt = function(e3) {
            var n3 = Date.now(), r3 = Math.max(0, 16 - (n3 - kt)), o2 = t2.setTimeout(function() {
              e3(n3 + r3);
            }, r3);
            return kt = n3 + r3, o2;
          }, Mt = function(t3) {
            return clearTimeout(t3);
          });
        } };
        Tt.default = It;
        var Dt = {};
        Object.defineProperty(Dt, "__esModule", { value: true }), Dt.default = void 0, Dt.getContainer = zt, Dt.getScroll = Ct, Dt.getScrollSize = function(t2) {
          return i.default.window(t2) && (t2 = window.document.body), { x: t2.scrollWidth, y: t2.scrollHeight };
        }, Dt.getScrollSizeDelta = function(t2, e2) {
          var n2 = t2.interaction, r2 = t2.element, o2 = n2 && n2.interactable.options[n2.prepared.name].autoScroll;
          if (!o2 || !o2.enabled)
            return e2(), { x: 0, y: 0 };
          var i2 = zt(o2.container, n2.interactable, r2), a2 = Ct(i2);
          e2();
          var s2 = Ct(i2);
          return { x: s2.x - a2.x, y: s2.y - a2.y };
        };
        var At = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(t2) {
          At.isScrolling = true, Tt.default.cancel(At.i), t2.autoScroll = At, At.interaction = t2, At.prevTime = At.now(), At.i = Tt.default.request(At.scroll);
        }, stop: function() {
          At.isScrolling = false, At.interaction && (At.interaction.autoScroll = null), Tt.default.cancel(At.i);
        }, scroll: function() {
          var t2 = At.interaction, e2 = t2.interactable, n2 = t2.element, r2 = t2.prepared.name, o2 = e2.options[r2].autoScroll, a2 = zt(o2.container, e2, n2), s2 = At.now(), l2 = (s2 - At.prevTime) / 1e3, u2 = o2.speed * l2;
          if (u2 >= 1) {
            var c2 = { x: At.x * u2, y: At.y * u2 };
            if (c2.x || c2.y) {
              var f2 = Ct(a2);
              i.default.window(a2) ? a2.scrollBy(c2.x, c2.y) : a2 && (a2.scrollLeft += c2.x, a2.scrollTop += c2.y);
              var d2 = Ct(a2), p2 = { x: d2.x - f2.x, y: d2.y - f2.y };
              (p2.x || p2.y) && e2.fire({ type: "autoscroll", target: n2, interactable: e2, delta: p2, interaction: t2, container: a2 });
            }
            At.prevTime = s2;
          }
          At.isScrolling && (Tt.default.cancel(At.i), At.i = Tt.default.request(At.scroll));
        }, check: function(t2, e2) {
          var n2;
          return null == (n2 = t2.options[e2].autoScroll) ? void 0 : n2.enabled;
        }, onInteractionMove: function(t2) {
          var e2 = t2.interaction, n2 = t2.pointer;
          if (e2.interacting() && At.check(e2.interactable, e2.prepared.name))
            if (e2.simulation)
              At.x = At.y = 0;
            else {
              var r2, o2, a2, s2, l2 = e2.interactable, u2 = e2.element, c2 = e2.prepared.name, f2 = l2.options[c2].autoScroll, d2 = zt(f2.container, l2, u2);
              if (i.default.window(d2))
                s2 = n2.clientX < At.margin, r2 = n2.clientY < At.margin, o2 = n2.clientX > d2.innerWidth - At.margin, a2 = n2.clientY > d2.innerHeight - At.margin;
              else {
                var p2 = _.getElementClientRect(d2);
                s2 = n2.clientX < p2.left + At.margin, r2 = n2.clientY < p2.top + At.margin, o2 = n2.clientX > p2.right - At.margin, a2 = n2.clientY > p2.bottom - At.margin;
              }
              At.x = o2 ? 1 : s2 ? -1 : 0, At.y = a2 ? 1 : r2 ? -1 : 0, At.isScrolling || (At.margin = f2.margin, At.speed = f2.speed, At.start(e2));
            }
        } };
        function zt(t2, n2, r2) {
          return (i.default.string(t2) ? (0, k.getStringOptionResult)(t2, n2, r2) : t2) || (0, e.getWindow)(r2);
        }
        function Ct(t2) {
          return i.default.window(t2) && (t2 = window.document.body), { x: t2.scrollLeft, y: t2.scrollTop };
        }
        var Rt = { id: "auto-scroll", install: function(t2) {
          var e2 = t2.defaults, n2 = t2.actions;
          t2.autoScroll = At, At.now = function() {
            return t2.now();
          }, n2.phaselessTypes.autoscroll = true, e2.perAction.autoScroll = At.defaults;
        }, listeners: { "interactions:new": function(t2) {
          t2.interaction.autoScroll = null;
        }, "interactions:destroy": function(t2) {
          t2.interaction.autoScroll = null, At.stop(), At.interaction && (At.interaction = null);
        }, "interactions:stop": At.stop, "interactions:action-move": function(t2) {
          return At.onInteractionMove(t2);
        } } }, Ft = Rt;
        Dt.default = Ft;
        var Xt = {};
        Object.defineProperty(Xt, "__esModule", { value: true }), Xt.copyAction = function(t2, e2) {
          return t2.name = e2.name, t2.axis = e2.axis, t2.edges = e2.edges, t2;
        }, Xt.sign = void 0, Xt.warnOnce = function(t2, n2) {
          var r2 = false;
          return function() {
            return r2 || (e.window.console.warn(n2), r2 = true), t2.apply(this, arguments);
          };
        }, Xt.sign = function(t2) {
          return t2 >= 0 ? 1 : -1;
        };
        var Bt = {};
        function Yt(t2) {
          return i.default.bool(t2) ? (this.options.styleCursor = t2, this) : null === t2 ? (delete this.options.styleCursor, this) : this.options.styleCursor;
        }
        function Wt(t2) {
          return i.default.func(t2) ? (this.options.actionChecker = t2, this) : null === t2 ? (delete this.options.actionChecker, this) : this.options.actionChecker;
        }
        Object.defineProperty(Bt, "__esModule", { value: true }), Bt.default = void 0;
        var Lt = { id: "auto-start/interactableMethods", install: function(t2) {
          var e2 = t2.Interactable;
          e2.prototype.getAction = function(e3, n2, r2, o2) {
            var i2 = function(t3, e4, n3, r3, o3) {
              var i3 = t3.getRect(r3), a2 = { action: null, interactable: t3, interaction: n3, element: r3, rect: i3, buttons: e4.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[e4.button] };
              return o3.fire("auto-start:check", a2), a2.action;
            }(this, n2, r2, o2, t2);
            return this.options.actionChecker ? this.options.actionChecker(e3, n2, i2, this, o2, r2) : i2;
          }, e2.prototype.ignoreFrom = (0, Xt.warnOnce)(function(t3) {
            return this._backCompatOption("ignoreFrom", t3);
          }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), e2.prototype.allowFrom = (0, Xt.warnOnce)(function(t3) {
            return this._backCompatOption("allowFrom", t3);
          }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), e2.prototype.actionChecker = Wt, e2.prototype.styleCursor = Yt;
        } };
        Bt.default = Lt;
        var Ut = {};
        function Vt(t2, e2, n2, r2, o2) {
          return e2.testIgnoreAllow(e2.options[t2.name], n2, r2) && e2.options[t2.name].enabled && $t(e2, n2, t2, o2) ? t2 : null;
        }
        function Nt(t2, e2, n2, r2, o2, i2, a2) {
          for (var s2 = 0, l2 = r2.length; s2 < l2; s2++) {
            var u2 = r2[s2], c2 = o2[s2], f2 = u2.getAction(e2, n2, t2, c2);
            if (f2) {
              var d2 = Vt(f2, u2, c2, i2, a2);
              if (d2)
                return { action: d2, interactable: u2, element: c2 };
            }
          }
          return { action: null, interactable: null, element: null };
        }
        function qt(t2, e2, n2, r2, o2) {
          var a2 = [], s2 = [], l2 = r2;
          function u2(t3) {
            a2.push(t3), s2.push(l2);
          }
          for (; i.default.element(l2); ) {
            a2 = [], s2 = [], o2.interactables.forEachMatch(l2, u2);
            var c2 = Nt(t2, e2, n2, a2, s2, r2, o2);
            if (c2.action && !c2.interactable.options[c2.action.name].manualStart)
              return c2;
            l2 = _.parentNode(l2);
          }
          return { action: null, interactable: null, element: null };
        }
        function Gt(t2, e2, n2) {
          var r2 = e2.action, o2 = e2.interactable, i2 = e2.element;
          r2 = r2 || { name: null }, t2.interactable = o2, t2.element = i2, (0, Xt.copyAction)(t2.prepared, r2), t2.rect = o2 && r2.name ? o2.getRect(i2) : null, Zt(t2, n2), n2.fire("autoStart:prepared", { interaction: t2 });
        }
        function $t(t2, e2, n2, r2) {
          var o2 = t2.options, i2 = o2[n2.name].max, a2 = o2[n2.name].maxPerElement, s2 = r2.autoStart.maxInteractions, l2 = 0, u2 = 0, c2 = 0;
          if (!(i2 && a2 && s2))
            return false;
          for (var f2 = 0; f2 < r2.interactions.list.length; f2++) {
            var d2 = r2.interactions.list[f2], p2 = d2.prepared.name;
            if (d2.interacting()) {
              if (++l2 >= s2)
                return false;
              if (d2.interactable === t2) {
                if ((u2 += p2 === n2.name ? 1 : 0) >= i2)
                  return false;
                if (d2.element === e2 && (c2++, p2 === n2.name && c2 >= a2))
                  return false;
              }
            }
          }
          return s2 > 0;
        }
        function Ht(t2, e2) {
          return i.default.number(t2) ? (e2.autoStart.maxInteractions = t2, this) : e2.autoStart.maxInteractions;
        }
        function Kt(t2, e2, n2) {
          var r2 = n2.autoStart.cursorElement;
          r2 && r2 !== t2 && (r2.style.cursor = ""), t2.ownerDocument.documentElement.style.cursor = e2, t2.style.cursor = e2, n2.autoStart.cursorElement = e2 ? t2 : null;
        }
        function Zt(t2, e2) {
          var n2 = t2.interactable, r2 = t2.element, o2 = t2.prepared;
          if ("mouse" === t2.pointerType && n2 && n2.options.styleCursor) {
            var a2 = "";
            if (o2.name) {
              var s2 = n2.options[o2.name].cursorChecker;
              a2 = i.default.func(s2) ? s2(o2, n2, r2, t2._interacting) : e2.actions.map[o2.name].getCursor(o2);
            }
            Kt(t2.element, a2 || "", e2);
          } else
            e2.autoStart.cursorElement && Kt(e2.autoStart.cursorElement, "", e2);
        }
        Object.defineProperty(Ut, "__esModule", { value: true }), Ut.default = void 0;
        var Jt = { id: "auto-start/base", before: ["actions"], install: function(t2) {
          var e2 = t2.interactStatic, n2 = t2.defaults;
          t2.usePlugin(Bt.default), n2.base.actionChecker = null, n2.base.styleCursor = true, (0, M.default)(n2.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), e2.maxInteractions = function(e3) {
            return Ht(e3, t2);
          }, t2.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: $t, cursorElement: null };
        }, listeners: { "interactions:down": function(t2, e2) {
          var n2 = t2.interaction, r2 = t2.pointer, o2 = t2.event, i2 = t2.eventTarget;
          n2.interacting() || Gt(n2, qt(n2, r2, o2, i2, e2), e2);
        }, "interactions:move": function(t2, e2) {
          !function(t3, e3) {
            var n2 = t3.interaction, r2 = t3.pointer, o2 = t3.event, i2 = t3.eventTarget;
            "mouse" !== n2.pointerType || n2.pointerIsDown || n2.interacting() || Gt(n2, qt(n2, r2, o2, i2, e3), e3);
          }(t2, e2), function(t3, e3) {
            var n2 = t3.interaction;
            if (n2.pointerIsDown && !n2.interacting() && n2.pointerWasMoved && n2.prepared.name) {
              e3.fire("autoStart:before-start", t3);
              var r2 = n2.interactable, o2 = n2.prepared.name;
              o2 && r2 && (r2.options[o2].manualStart || !$t(r2, n2.element, n2.prepared, e3) ? n2.stop() : (n2.start(n2.prepared, r2, n2.element), Zt(n2, e3)));
            }
          }(t2, e2);
        }, "interactions:stop": function(t2, e2) {
          var n2 = t2.interaction, r2 = n2.interactable;
          r2 && r2.options.styleCursor && Kt(n2.element, "", e2);
        } }, maxInteractions: Ht, withinInteractionLimit: $t, validateAction: Vt }, Qt = Jt;
        Ut.default = Qt;
        var te = {};
        Object.defineProperty(te, "__esModule", { value: true }), te.default = void 0;
        var ee = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(t2, e2) {
          var n2 = t2.interaction, r2 = t2.eventTarget, o2 = t2.dx, a2 = t2.dy;
          if ("drag" === n2.prepared.name) {
            var s2 = Math.abs(o2), l2 = Math.abs(a2), u2 = n2.interactable.options.drag, c2 = u2.startAxis, f2 = s2 > l2 ? "x" : s2 < l2 ? "y" : "xy";
            if (n2.prepared.axis = "start" === u2.lockAxis ? f2[0] : u2.lockAxis, "xy" !== f2 && "xy" !== c2 && c2 !== f2) {
              n2.prepared.name = null;
              for (var d2 = r2, p2 = function(t3) {
                if (t3 !== n2.interactable) {
                  var o3 = n2.interactable.options.drag;
                  if (!o3.manualStart && t3.testIgnoreAllow(o3, d2, r2)) {
                    var i2 = t3.getAction(n2.downPointer, n2.downEvent, n2, d2);
                    if (i2 && "drag" === i2.name && function(t4, e3) {
                      if (!e3)
                        return false;
                      var n3 = e3.options.drag.startAxis;
                      return "xy" === t4 || "xy" === n3 || n3 === t4;
                    }(f2, t3) && Ut.default.validateAction(i2, t3, d2, r2, e2))
                      return t3;
                  }
                }
              }; i.default.element(d2); ) {
                var v2 = e2.interactables.forEachMatch(d2, p2);
                if (v2) {
                  n2.prepared.name = "drag", n2.interactable = v2, n2.element = d2;
                  break;
                }
                d2 = (0, _.parentNode)(d2);
              }
            }
          }
        } } };
        te.default = ee;
        var ne = {};
        function re(t2) {
          var e2 = t2.prepared && t2.prepared.name;
          if (!e2)
            return null;
          var n2 = t2.interactable.options;
          return n2[e2].hold || n2[e2].delay;
        }
        Object.defineProperty(ne, "__esModule", { value: true }), ne.default = void 0;
        var oe = { id: "auto-start/hold", install: function(t2) {
          var e2 = t2.defaults;
          t2.usePlugin(Ut.default), e2.perAction.hold = 0, e2.perAction.delay = 0;
        }, listeners: { "interactions:new": function(t2) {
          t2.interaction.autoStartHoldTimer = null;
        }, "autoStart:prepared": function(t2) {
          var e2 = t2.interaction, n2 = re(e2);
          n2 > 0 && (e2.autoStartHoldTimer = setTimeout(function() {
            e2.start(e2.prepared, e2.interactable, e2.element);
          }, n2));
        }, "interactions:move": function(t2) {
          var e2 = t2.interaction, n2 = t2.duplicate;
          e2.autoStartHoldTimer && e2.pointerWasMoved && !n2 && (clearTimeout(e2.autoStartHoldTimer), e2.autoStartHoldTimer = null);
        }, "autoStart:before-start": function(t2) {
          var e2 = t2.interaction;
          re(e2) > 0 && (e2.prepared.name = null);
        } }, getHoldDuration: re }, ie = oe;
        ne.default = ie;
        var ae = {};
        Object.defineProperty(ae, "__esModule", { value: true }), ae.default = void 0;
        var se = { id: "auto-start", install: function(t2) {
          t2.usePlugin(Ut.default), t2.usePlugin(ne.default), t2.usePlugin(te.default);
        } };
        ae.default = se;
        var le = {};
        function ue(t2) {
          return /^(always|never|auto)$/.test(t2) ? (this.options.preventDefault = t2, this) : i.default.bool(t2) ? (this.options.preventDefault = t2 ? "always" : "never", this) : this.options.preventDefault;
        }
        function ce(t2) {
          var e2 = t2.interaction, n2 = t2.event;
          e2.interactable && e2.interactable.checkAndPreventDefault(n2);
        }
        function fe(t2) {
          var n2 = t2.Interactable;
          n2.prototype.preventDefault = ue, n2.prototype.checkAndPreventDefault = function(n3) {
            return function(t3, n4, r2) {
              var o2 = t3.options.preventDefault;
              if ("never" !== o2)
                if ("always" !== o2) {
                  if (n4.events.supportsPassive && /^touch(start|move)$/.test(r2.type)) {
                    var a2 = (0, e.getWindow)(r2.target).document, s2 = n4.getDocOptions(a2);
                    if (!s2 || !s2.events || false !== s2.events.passive)
                      return;
                  }
                  /^(mouse|pointer|touch)*(down|start)/i.test(r2.type) || i.default.element(r2.target) && (0, _.matchesSelector)(r2.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || r2.preventDefault();
                } else
                  r2.preventDefault();
            }(this, t2, n3);
          }, t2.interactions.docEvents.push({ type: "dragstart", listener: function(e2) {
            for (var n3 = 0; n3 < t2.interactions.list.length; n3++) {
              var r2 = t2.interactions.list[n3];
              if (r2.element && (r2.element === e2.target || (0, _.nodeContains)(r2.element, e2.target)))
                return void r2.interactable.checkAndPreventDefault(e2);
            }
          } });
        }
        Object.defineProperty(le, "__esModule", { value: true }), le.default = void 0, le.install = fe;
        var de = { id: "core/interactablePreventDefault", install: fe, listeners: ["down", "move", "up", "cancel"].reduce(function(t2, e2) {
          return t2["interactions:".concat(e2)] = ce, t2;
        }, {}) };
        le.default = de;
        var pe = {};
        Object.defineProperty(pe, "__esModule", { value: true }), pe.default = void 0, pe.default = {};
        var ve, he = {};
        Object.defineProperty(he, "__esModule", { value: true }), he.default = void 0, function(t2) {
          t2.touchAction = "touchAction", t2.boxSizing = "boxSizing", t2.noListeners = "noListeners";
        }(ve || (ve = {}));
        ve.touchAction, ve.boxSizing, ve.noListeners;
        var ge = { id: "dev-tools", install: function() {
        } };
        he.default = ge;
        var ye = {};
        Object.defineProperty(ye, "__esModule", { value: true }), ye.default = function t2(e2) {
          var n2 = {};
          for (var r2 in e2) {
            var o2 = e2[r2];
            i.default.plainObject(o2) ? n2[r2] = t2(o2) : i.default.array(o2) ? n2[r2] = H.from(o2) : n2[r2] = o2;
          }
          return n2;
        };
        var me = {};
        function be(t2, e2) {
          return function(t3) {
            if (Array.isArray(t3))
              return t3;
          }(t2) || function(t3, e3) {
            var n2 = null == t3 ? null : "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
            if (null != n2) {
              var r2, o2, i2 = [], a2 = true, s2 = false;
              try {
                for (n2 = n2.call(t3); !(a2 = (r2 = n2.next()).done) && (i2.push(r2.value), !e3 || i2.length !== e3); a2 = true)
                  ;
              } catch (t4) {
                s2 = true, o2 = t4;
              } finally {
                try {
                  a2 || null == n2.return || n2.return();
                } finally {
                  if (s2)
                    throw o2;
                }
              }
              return i2;
            }
          }(t2, e2) || function(t3, e3) {
            if (t3) {
              if ("string" == typeof t3)
                return xe(t3, e3);
              var n2 = Object.prototype.toString.call(t3).slice(8, -1);
              return "Object" === n2 && t3.constructor && (n2 = t3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(t3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? xe(t3, e3) : void 0;
            }
          }(t2, e2) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function xe(t2, e2) {
          (null == e2 || e2 > t2.length) && (e2 = t2.length);
          for (var n2 = 0, r2 = Array(e2); n2 < e2; n2++)
            r2[n2] = t2[n2];
          return r2;
        }
        function we(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function _e(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        Object.defineProperty(me, "__esModule", { value: true }), me.default = void 0, me.getRectOffset = Ee;
        var Pe = function() {
          function t2(e3) {
            !function(t3, e4) {
              if (!(t3 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t2), _e(this, "states", []), _e(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), _e(this, "startDelta", void 0), _e(this, "result", void 0), _e(this, "endResult", void 0), _e(this, "edges", void 0), _e(this, "interaction", void 0), this.interaction = e3, this.result = Oe();
          }
          var e2, n2;
          return e2 = t2, (n2 = [{ key: "start", value: function(t3, e3) {
            var n3 = t3.phase, r2 = this.interaction, o2 = function(t4) {
              var e4 = t4.interactable.options[t4.prepared.name], n4 = e4.modifiers;
              return n4 && n4.length ? n4 : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(t5) {
                var n5 = e4[t5];
                return n5 && n5.enabled && { options: n5, methods: n5._methods };
              }).filter(function(t5) {
                return !!t5;
              });
            }(r2);
            this.prepareStates(o2), this.edges = (0, M.default)({}, r2.edges), this.startOffset = Ee(r2.rect, e3), this.startDelta = { x: 0, y: 0 };
            var i2 = this.fillArg({ phase: n3, pageCoords: e3, preEnd: false });
            return this.result = Oe(), this.startAll(i2), this.result = this.setAll(i2);
          } }, { key: "fillArg", value: function(t3) {
            var e3 = this.interaction;
            return t3.interaction = e3, t3.interactable = e3.interactable, t3.element = e3.element, t3.rect = t3.rect || e3.rect, t3.edges = this.edges, t3.startOffset = this.startOffset, t3;
          } }, { key: "startAll", value: function(t3) {
            for (var e3 = 0; e3 < this.states.length; e3++) {
              var n3 = this.states[e3];
              n3.methods.start && (t3.state = n3, n3.methods.start(t3));
            }
          } }, { key: "setAll", value: function(t3) {
            var e3 = t3.phase, n3 = t3.preEnd, r2 = t3.skipModifiers, o2 = t3.rect;
            t3.coords = (0, M.default)({}, t3.pageCoords), t3.rect = (0, M.default)({}, o2);
            for (var i2 = r2 ? this.states.slice(r2) : this.states, a2 = Oe(t3.coords, t3.rect), s2 = 0; s2 < i2.length; s2++) {
              var l2, u2 = i2[s2], c2 = u2.options, f2 = (0, M.default)({}, t3.coords), d2 = null;
              null != (l2 = u2.methods) && l2.set && this.shouldDo(c2, n3, e3) && (t3.state = u2, d2 = u2.methods.set(t3), k.addEdges(this.interaction.edges, t3.rect, { x: t3.coords.x - f2.x, y: t3.coords.y - f2.y })), a2.eventProps.push(d2);
            }
            a2.delta.x = t3.coords.x - t3.pageCoords.x, a2.delta.y = t3.coords.y - t3.pageCoords.y, a2.rectDelta.left = t3.rect.left - o2.left, a2.rectDelta.right = t3.rect.right - o2.right, a2.rectDelta.top = t3.rect.top - o2.top, a2.rectDelta.bottom = t3.rect.bottom - o2.bottom;
            var p2 = this.result.coords, v2 = this.result.rect;
            if (p2 && v2) {
              var h2 = a2.rect.left !== v2.left || a2.rect.right !== v2.right || a2.rect.top !== v2.top || a2.rect.bottom !== v2.bottom;
              a2.changed = h2 || p2.x !== a2.coords.x || p2.y !== a2.coords.y;
            }
            return a2;
          } }, { key: "applyToInteraction", value: function(t3) {
            var e3 = this.interaction, n3 = t3.phase, r2 = e3.coords.cur, o2 = e3.coords.start, i2 = this.result, a2 = this.startDelta, s2 = i2.delta;
            "start" === n3 && (0, M.default)(this.startDelta, i2.delta);
            for (var l2 = 0; l2 < [[o2, a2], [r2, s2]].length; l2++) {
              var u2 = be([[o2, a2], [r2, s2]][l2], 2), c2 = u2[0], f2 = u2[1];
              c2.page.x += f2.x, c2.page.y += f2.y, c2.client.x += f2.x, c2.client.y += f2.y;
            }
            var d2 = this.result.rectDelta, p2 = t3.rect || e3.rect;
            p2.left += d2.left, p2.right += d2.right, p2.top += d2.top, p2.bottom += d2.bottom, p2.width = p2.right - p2.left, p2.height = p2.bottom - p2.top;
          } }, { key: "setAndApply", value: function(t3) {
            var e3 = this.interaction, n3 = t3.phase, r2 = t3.preEnd, o2 = t3.skipModifiers, i2 = this.setAll(this.fillArg({ preEnd: r2, phase: n3, pageCoords: t3.modifiedCoords || e3.coords.cur.page }));
            if (this.result = i2, !i2.changed && (!o2 || o2 < this.states.length) && e3.interacting())
              return false;
            if (t3.modifiedCoords) {
              var a2 = e3.coords.cur.page, s2 = { x: t3.modifiedCoords.x - a2.x, y: t3.modifiedCoords.y - a2.y };
              i2.coords.x += s2.x, i2.coords.y += s2.y, i2.delta.x += s2.x, i2.delta.y += s2.y;
            }
            this.applyToInteraction(t3);
          } }, { key: "beforeEnd", value: function(t3) {
            var e3 = t3.interaction, n3 = t3.event, r2 = this.states;
            if (r2 && r2.length) {
              for (var o2 = false, i2 = 0; i2 < r2.length; i2++) {
                var a2 = r2[i2];
                t3.state = a2;
                var s2 = a2.options, l2 = a2.methods, u2 = l2.beforeEnd && l2.beforeEnd(t3);
                if (u2)
                  return this.endResult = u2, false;
                o2 = o2 || !o2 && this.shouldDo(s2, true, t3.phase, true);
              }
              o2 && e3.move({ event: n3, preEnd: true });
            }
          } }, { key: "stop", value: function(t3) {
            var e3 = t3.interaction;
            if (this.states && this.states.length) {
              var n3 = (0, M.default)({ states: this.states, interactable: e3.interactable, element: e3.element, rect: null }, t3);
              this.fillArg(n3);
              for (var r2 = 0; r2 < this.states.length; r2++) {
                var o2 = this.states[r2];
                n3.state = o2, o2.methods.stop && o2.methods.stop(n3);
              }
              this.states = null, this.endResult = null;
            }
          } }, { key: "prepareStates", value: function(t3) {
            this.states = [];
            for (var e3 = 0; e3 < t3.length; e3++) {
              var n3 = t3[e3], r2 = n3.options, o2 = n3.methods, i2 = n3.name;
              this.states.push({ options: r2, methods: o2, index: e3, name: i2 });
            }
            return this.states;
          } }, { key: "restoreInteractionCoords", value: function(t3) {
            var e3 = t3.interaction, n3 = e3.coords, r2 = e3.rect, o2 = e3.modification;
            if (o2.result) {
              for (var i2 = o2.startDelta, a2 = o2.result, s2 = a2.delta, l2 = a2.rectDelta, u2 = [[n3.start, i2], [n3.cur, s2]], c2 = 0; c2 < u2.length; c2++) {
                var f2 = be(u2[c2], 2), d2 = f2[0], p2 = f2[1];
                d2.page.x -= p2.x, d2.page.y -= p2.y, d2.client.x -= p2.x, d2.client.y -= p2.y;
              }
              r2.left -= l2.left, r2.right -= l2.right, r2.top -= l2.top, r2.bottom -= l2.bottom;
            }
          } }, { key: "shouldDo", value: function(t3, e3, n3, r2) {
            return !(!t3 || false === t3.enabled || r2 && !t3.endOnly || t3.endOnly && !e3 || "start" === n3 && !t3.setStart);
          } }, { key: "copyFrom", value: function(t3) {
            this.startOffset = t3.startOffset, this.startDelta = t3.startDelta, this.edges = t3.edges, this.states = t3.states.map(function(t4) {
              return (0, ye.default)(t4);
            }), this.result = Oe((0, M.default)({}, t3.result.coords), (0, M.default)({}, t3.result.rect));
          } }, { key: "destroy", value: function() {
            for (var t3 in this)
              this[t3] = null;
          } }]) && we(e2.prototype, n2), Object.defineProperty(e2, "prototype", { writable: false }), t2;
        }();
        function Oe(t2, e2) {
          return { rect: e2, coords: t2, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
        }
        function Ee(t2, e2) {
          return t2 ? { left: e2.x - t2.left, top: e2.y - t2.top, right: t2.right - e2.x, bottom: t2.bottom - e2.y } : { left: 0, top: 0, right: 0, bottom: 0 };
        }
        me.default = Pe;
        var Se = {};
        function Te(t2) {
          var e2 = t2.iEvent, n2 = t2.interaction.modification.result;
          n2 && (e2.modifiers = n2.eventProps);
        }
        Object.defineProperty(Se, "__esModule", { value: true }), Se.addEventModifiers = Te, Se.default = void 0, Se.makeModifier = function(t2, e2) {
          var n2 = t2.defaults, r2 = { start: t2.start, set: t2.set, beforeEnd: t2.beforeEnd, stop: t2.stop }, o2 = function(t3) {
            var o3 = t3 || {};
            for (var i2 in o3.enabled = false !== o3.enabled, n2)
              i2 in o3 || (o3[i2] = n2[i2]);
            var a2 = { options: o3, methods: r2, name: e2, enable: function() {
              return o3.enabled = true, a2;
            }, disable: function() {
              return o3.enabled = false, a2;
            } };
            return a2;
          };
          return e2 && "string" == typeof e2 && (o2._defaults = n2, o2._methods = r2), o2;
        };
        var je = { id: "modifiers/base", before: ["actions"], install: function(t2) {
          t2.defaults.perAction.modifiers = [];
        }, listeners: { "interactions:new": function(t2) {
          var e2 = t2.interaction;
          e2.modification = new me.default(e2);
        }, "interactions:before-action-start": function(t2) {
          var e2 = t2.interaction.modification;
          e2.start(t2, t2.interaction.coords.start.page), t2.interaction.edges = e2.edges, e2.applyToInteraction(t2);
        }, "interactions:before-action-move": function(t2) {
          return t2.interaction.modification.setAndApply(t2);
        }, "interactions:before-action-end": function(t2) {
          return t2.interaction.modification.beforeEnd(t2);
        }, "interactions:action-start": Te, "interactions:action-move": Te, "interactions:action-end": Te, "interactions:after-action-start": function(t2) {
          return t2.interaction.modification.restoreInteractionCoords(t2);
        }, "interactions:after-action-move": function(t2) {
          return t2.interaction.modification.restoreInteractionCoords(t2);
        }, "interactions:stop": function(t2) {
          return t2.interaction.modification.stop(t2);
        } } }, Me = je;
        Se.default = Me;
        var ke = {};
        Object.defineProperty(ke, "__esModule", { value: true }), ke.defaults = void 0, ke.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
        var Ie = {};
        function De(t2) {
          return De = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          }, De(t2);
        }
        function Ae(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function ze(t2, e2) {
          return ze = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
            return t3.__proto__ = e3, t3;
          }, ze(t2, e2);
        }
        function Ce(t2, e2) {
          if (e2 && ("object" === De(e2) || "function" == typeof e2))
            return e2;
          if (void 0 !== e2)
            throw new TypeError("Derived constructors may only return object or undefined");
          return Re(t2);
        }
        function Re(t2) {
          if (void 0 === t2)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t2;
        }
        function Fe(t2) {
          return Fe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
            return t3.__proto__ || Object.getPrototypeOf(t3);
          }, Fe(t2);
        }
        function Xe(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        Object.defineProperty(Ie, "__esModule", { value: true }), Ie.InteractEvent = void 0;
        var Be = function(t2) {
          !function(t3, e3) {
            if ("function" != typeof e3 && null !== e3)
              throw new TypeError("Super expression must either be null or a function");
            t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, writable: true, configurable: true } }), Object.defineProperty(t3, "prototype", { writable: false }), e3 && ze(t3, e3);
          }(a2, t2);
          var e2, n2, r2, o2, i2 = (r2 = a2, o2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }(), function() {
            var t3, e3 = Fe(r2);
            if (o2) {
              var n3 = Fe(this).constructor;
              t3 = Reflect.construct(e3, arguments, n3);
            } else
              t3 = e3.apply(this, arguments);
            return Ce(this, t3);
          });
          function a2(t3, e3, n3, r3, o3, s2, l2) {
            var u2;
            !function(t4, e4) {
              if (!(t4 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, a2), Xe(Re(u2 = i2.call(this, t3)), "relatedTarget", null), Xe(Re(u2), "screenX", void 0), Xe(Re(u2), "screenY", void 0), Xe(Re(u2), "button", void 0), Xe(Re(u2), "buttons", void 0), Xe(Re(u2), "ctrlKey", void 0), Xe(Re(u2), "shiftKey", void 0), Xe(Re(u2), "altKey", void 0), Xe(Re(u2), "metaKey", void 0), Xe(Re(u2), "page", void 0), Xe(Re(u2), "client", void 0), Xe(Re(u2), "delta", void 0), Xe(Re(u2), "rect", void 0), Xe(Re(u2), "x0", void 0), Xe(Re(u2), "y0", void 0), Xe(Re(u2), "t0", void 0), Xe(Re(u2), "dt", void 0), Xe(Re(u2), "duration", void 0), Xe(Re(u2), "clientX0", void 0), Xe(Re(u2), "clientY0", void 0), Xe(Re(u2), "velocity", void 0), Xe(Re(u2), "speed", void 0), Xe(Re(u2), "swipe", void 0), Xe(Re(u2), "axes", void 0), Xe(Re(u2), "preEnd", void 0), o3 = o3 || t3.element;
            var c2 = t3.interactable, f2 = (c2 && c2.options || ke.defaults).deltaSource, d2 = (0, A.default)(c2, o3, n3), p2 = "start" === r3, v2 = "end" === r3, h2 = p2 ? Re(u2) : t3.prevEvent, g2 = p2 ? t3.coords.start : v2 ? { page: h2.page, client: h2.client, timeStamp: t3.coords.cur.timeStamp } : t3.coords.cur;
            return u2.page = (0, M.default)({}, g2.page), u2.client = (0, M.default)({}, g2.client), u2.rect = (0, M.default)({}, t3.rect), u2.timeStamp = g2.timeStamp, v2 || (u2.page.x -= d2.x, u2.page.y -= d2.y, u2.client.x -= d2.x, u2.client.y -= d2.y), u2.ctrlKey = e3.ctrlKey, u2.altKey = e3.altKey, u2.shiftKey = e3.shiftKey, u2.metaKey = e3.metaKey, u2.button = e3.button, u2.buttons = e3.buttons, u2.target = o3, u2.currentTarget = o3, u2.preEnd = s2, u2.type = l2 || n3 + (r3 || ""), u2.interactable = c2, u2.t0 = p2 ? t3.pointers[t3.pointers.length - 1].downTime : h2.t0, u2.x0 = t3.coords.start.page.x - d2.x, u2.y0 = t3.coords.start.page.y - d2.y, u2.clientX0 = t3.coords.start.client.x - d2.x, u2.clientY0 = t3.coords.start.client.y - d2.y, u2.delta = p2 || v2 ? { x: 0, y: 0 } : { x: u2[f2].x - h2[f2].x, y: u2[f2].y - h2[f2].y }, u2.dt = t3.coords.delta.timeStamp, u2.duration = u2.timeStamp - u2.t0, u2.velocity = (0, M.default)({}, t3.coords.velocity[f2]), u2.speed = (0, R.default)(u2.velocity.x, u2.velocity.y), u2.swipe = v2 || "inertiastart" === r3 ? u2.getSwipe() : null, u2;
          }
          return e2 = a2, (n2 = [{ key: "getSwipe", value: function() {
            var t3 = this._interaction;
            if (t3.prevEvent.speed < 600 || this.timeStamp - t3.prevEvent.timeStamp > 150)
              return null;
            var e3 = 180 * Math.atan2(t3.prevEvent.velocityY, t3.prevEvent.velocityX) / Math.PI;
            e3 < 0 && (e3 += 360);
            var n3 = 112.5 <= e3 && e3 < 247.5, r3 = 202.5 <= e3 && e3 < 337.5;
            return { up: r3, down: !r3 && 22.5 <= e3 && e3 < 157.5, left: n3, right: !n3 && (292.5 <= e3 || e3 < 67.5), angle: e3, speed: t3.prevEvent.speed, velocity: { x: t3.prevEvent.velocityX, y: t3.prevEvent.velocityY } };
          } }, { key: "preventDefault", value: function() {
          } }, { key: "stopImmediatePropagation", value: function() {
            this.immediatePropagationStopped = this.propagationStopped = true;
          } }, { key: "stopPropagation", value: function() {
            this.propagationStopped = true;
          } }]) && Ae(e2.prototype, n2), Object.defineProperty(e2, "prototype", { writable: false }), a2;
        }(N.BaseEvent);
        Ie.InteractEvent = Be, Object.defineProperties(Be.prototype, { pageX: { get: function() {
          return this.page.x;
        }, set: function(t2) {
          this.page.x = t2;
        } }, pageY: { get: function() {
          return this.page.y;
        }, set: function(t2) {
          this.page.y = t2;
        } }, clientX: { get: function() {
          return this.client.x;
        }, set: function(t2) {
          this.client.x = t2;
        } }, clientY: { get: function() {
          return this.client.y;
        }, set: function(t2) {
          this.client.y = t2;
        } }, dx: { get: function() {
          return this.delta.x;
        }, set: function(t2) {
          this.delta.x = t2;
        } }, dy: { get: function() {
          return this.delta.y;
        }, set: function(t2) {
          this.delta.y = t2;
        } }, velocityX: { get: function() {
          return this.velocity.x;
        }, set: function(t2) {
          this.velocity.x = t2;
        } }, velocityY: { get: function() {
          return this.velocity.y;
        }, set: function(t2) {
          this.velocity.y = t2;
        } } });
        var Ye = {};
        function We(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function Le(t2, e2, n2) {
          return e2 && We(t2.prototype, e2), n2 && We(t2, n2), Object.defineProperty(t2, "prototype", { writable: false }), t2;
        }
        function Ue(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        Object.defineProperty(Ye, "__esModule", { value: true }), Ye.PointerInfo = void 0;
        var Ve = Le(function t2(e2, n2, r2, o2, i2) {
          !function(t3, e3) {
            if (!(t3 instanceof e3))
              throw new TypeError("Cannot call a class as a function");
          }(this, t2), Ue(this, "id", void 0), Ue(this, "pointer", void 0), Ue(this, "event", void 0), Ue(this, "downTime", void 0), Ue(this, "downTarget", void 0), this.id = e2, this.pointer = n2, this.event = r2, this.downTime = o2, this.downTarget = i2;
        });
        Ye.PointerInfo = Ve;
        var Ne, qe, Ge = {};
        function $e(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function He(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        Object.defineProperty(Ge, "__esModule", { value: true }), Ge.Interaction = void 0, Object.defineProperty(Ge, "PointerInfo", { enumerable: true, get: function() {
          return Ye.PointerInfo;
        } }), Ge.default = Ge._ProxyValues = Ge._ProxyMethods = void 0, Ge._ProxyValues = Ne, function(t2) {
          t2.interactable = "", t2.element = "", t2.prepared = "", t2.pointerIsDown = "", t2.pointerWasMoved = "", t2._proxy = "";
        }(Ne || (Ge._ProxyValues = Ne = {})), Ge._ProxyMethods = qe, function(t2) {
          t2.start = "", t2.move = "", t2.end = "", t2.stop = "", t2.interacting = "";
        }(qe || (Ge._ProxyMethods = qe = {}));
        var Ke = 0, Ze = function() {
          function t2(e3) {
            var n3 = this, r2 = e3.pointerType, o2 = e3.scopeFire;
            !function(t3, e4) {
              if (!(t3 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t2), He(this, "interactable", null), He(this, "element", null), He(this, "rect", null), He(this, "_rects", void 0), He(this, "edges", null), He(this, "_scopeFire", void 0), He(this, "prepared", { name: null, axis: null, edges: null }), He(this, "pointerType", void 0), He(this, "pointers", []), He(this, "downEvent", null), He(this, "downPointer", {}), He(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), He(this, "prevEvent", null), He(this, "pointerIsDown", false), He(this, "pointerWasMoved", false), He(this, "_interacting", false), He(this, "_ending", false), He(this, "_stopped", true), He(this, "_proxy", null), He(this, "simulation", null), He(this, "doMove", (0, Xt.warnOnce)(function(t3) {
              this.move(t3);
            }, "The interaction.doMove() method has been renamed to interaction.move()")), He(this, "coords", { start: X.newCoords(), prev: X.newCoords(), cur: X.newCoords(), delta: X.newCoords(), velocity: X.newCoords() }), He(this, "_id", Ke++), this._scopeFire = o2, this.pointerType = r2;
            var i2 = this;
            this._proxy = {};
            var a2 = function(t3) {
              Object.defineProperty(n3._proxy, t3, { get: function() {
                return i2[t3];
              } });
            };
            for (var s2 in Ne)
              a2(s2);
            var l2 = function(t3) {
              Object.defineProperty(n3._proxy, t3, { value: function() {
                return i2[t3].apply(i2, arguments);
              } });
            };
            for (var u2 in qe)
              l2(u2);
            this._scopeFire("interactions:new", { interaction: this });
          }
          var e2, n2;
          return e2 = t2, n2 = [{ key: "pointerMoveTolerance", get: function() {
            return 1;
          } }, { key: "pointerDown", value: function(t3, e3, n3) {
            var r2 = this.updatePointer(t3, e3, n3, true), o2 = this.pointers[r2];
            this._scopeFire("interactions:down", { pointer: t3, event: e3, eventTarget: n3, pointerIndex: r2, pointerInfo: o2, type: "down", interaction: this });
          } }, { key: "start", value: function(t3, e3, n3) {
            return !(this.interacting() || !this.pointerIsDown || this.pointers.length < ("gesture" === t3.name ? 2 : 1) || !e3.options[t3.name].enabled) && ((0, Xt.copyAction)(this.prepared, t3), this.interactable = e3, this.element = n3, this.rect = e3.getRect(n3), this.edges = this.prepared.edges ? (0, M.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
          } }, { key: "pointerMove", value: function(t3, e3, n3) {
            this.simulation || this.modification && this.modification.endResult || this.updatePointer(t3, e3, n3, false);
            var r2, o2, i2 = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
            this.pointerIsDown && !this.pointerWasMoved && (r2 = this.coords.cur.client.x - this.coords.start.client.x, o2 = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, R.default)(r2, o2) > this.pointerMoveTolerance);
            var a2 = this.getPointerIndex(t3), s2 = { pointer: t3, pointerIndex: a2, pointerInfo: this.pointers[a2], event: e3, type: "move", eventTarget: n3, dx: r2, dy: o2, duplicate: i2, interaction: this };
            i2 || X.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", s2), i2 || this.simulation || (this.interacting() && (s2.type = null, this.move(s2)), this.pointerWasMoved && X.copyCoords(this.coords.prev, this.coords.cur));
          } }, { key: "move", value: function(t3) {
            t3 && t3.event || X.setZeroCoords(this.coords.delta), (t3 = (0, M.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, t3 || {})).phase = "move", this._doPhase(t3);
          } }, { key: "pointerUp", value: function(t3, e3, n3, r2) {
            var o2 = this.getPointerIndex(t3);
            -1 === o2 && (o2 = this.updatePointer(t3, e3, n3, false));
            var i2 = /cancel$/i.test(e3.type) ? "cancel" : "up";
            this._scopeFire("interactions:".concat(i2), { pointer: t3, pointerIndex: o2, pointerInfo: this.pointers[o2], event: e3, eventTarget: n3, type: i2, curEventTarget: r2, interaction: this }), this.simulation || this.end(e3), this.removePointer(t3, e3);
          } }, { key: "documentBlur", value: function(t3) {
            this.end(t3), this._scopeFire("interactions:blur", { event: t3, type: "blur", interaction: this });
          } }, { key: "end", value: function(t3) {
            var e3;
            this._ending = true, t3 = t3 || this._latestPointer.event, this.interacting() && (e3 = this._doPhase({ event: t3, interaction: this, phase: "end" })), this._ending = false, true === e3 && this.stop();
          } }, { key: "currentAction", value: function() {
            return this._interacting ? this.prepared.name : null;
          } }, { key: "interacting", value: function() {
            return this._interacting;
          } }, { key: "stop", value: function() {
            this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = false, this._stopped = true, this.prepared.name = this.prevEvent = null;
          } }, { key: "getPointerIndex", value: function(t3) {
            var e3 = X.getPointerId(t3);
            return "mouse" === this.pointerType || "pen" === this.pointerType ? this.pointers.length - 1 : H.findIndex(this.pointers, function(t4) {
              return t4.id === e3;
            });
          } }, { key: "getPointerInfo", value: function(t3) {
            return this.pointers[this.getPointerIndex(t3)];
          } }, { key: "updatePointer", value: function(t3, e3, n3, r2) {
            var o2 = X.getPointerId(t3), i2 = this.getPointerIndex(t3), a2 = this.pointers[i2];
            return r2 = false !== r2 && (r2 || /(down|start)$/i.test(e3.type)), a2 ? a2.pointer = t3 : (a2 = new Ye.PointerInfo(o2, t3, e3, null, null), i2 = this.pointers.length, this.pointers.push(a2)), X.setCoords(this.coords.cur, this.pointers.map(function(t4) {
              return t4.pointer;
            }), this._now()), X.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), r2 && (this.pointerIsDown = true, a2.downTime = this.coords.cur.timeStamp, a2.downTarget = n3, X.pointerExtend(this.downPointer, t3), this.interacting() || (X.copyCoords(this.coords.start, this.coords.cur), X.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = e3, this.pointerWasMoved = false)), this._updateLatestPointer(t3, e3, n3), this._scopeFire("interactions:update-pointer", { pointer: t3, event: e3, eventTarget: n3, down: r2, pointerInfo: a2, pointerIndex: i2, interaction: this }), i2;
          } }, { key: "removePointer", value: function(t3, e3) {
            var n3 = this.getPointerIndex(t3);
            if (-1 !== n3) {
              var r2 = this.pointers[n3];
              this._scopeFire("interactions:remove-pointer", { pointer: t3, event: e3, eventTarget: null, pointerIndex: n3, pointerInfo: r2, interaction: this }), this.pointers.splice(n3, 1), this.pointerIsDown = false;
            }
          } }, { key: "_updateLatestPointer", value: function(t3, e3, n3) {
            this._latestPointer.pointer = t3, this._latestPointer.event = e3, this._latestPointer.eventTarget = n3;
          } }, { key: "destroy", value: function() {
            this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
          } }, { key: "_createPreparedEvent", value: function(t3, e3, n3, r2) {
            return new Ie.InteractEvent(this, t3, this.prepared.name, e3, this.element, n3, r2);
          } }, { key: "_fireEvent", value: function(t3) {
            var e3;
            null == (e3 = this.interactable) || e3.fire(t3), (!this.prevEvent || t3.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = t3);
          } }, { key: "_doPhase", value: function(t3) {
            var e3 = t3.event, n3 = t3.phase, r2 = t3.preEnd, o2 = t3.type, i2 = this.rect;
            if (i2 && "move" === n3 && (k.addEdges(this.edges, i2, this.coords.delta[this.interactable.options.deltaSource]), i2.width = i2.right - i2.left, i2.height = i2.bottom - i2.top), false === this._scopeFire("interactions:before-action-".concat(n3), t3))
              return false;
            var a2 = t3.iEvent = this._createPreparedEvent(e3, n3, r2, o2);
            return this._scopeFire("interactions:action-".concat(n3), t3), "start" === n3 && (this.prevEvent = a2), this._fireEvent(a2), this._scopeFire("interactions:after-action-".concat(n3), t3), true;
          } }, { key: "_now", value: function() {
            return Date.now();
          } }], n2 && $e(e2.prototype, n2), Object.defineProperty(e2, "prototype", { writable: false }), t2;
        }();
        Ge.Interaction = Ze;
        var Je = Ze;
        Ge.default = Je;
        var Qe = {};
        function tn(t2) {
          t2.pointerIsDown && (on(t2.coords.cur, t2.offset.total), t2.offset.pending.x = 0, t2.offset.pending.y = 0);
        }
        function en(t2) {
          nn(t2.interaction);
        }
        function nn(t2) {
          if (!function(t3) {
            return !(!t3.offset.pending.x && !t3.offset.pending.y);
          }(t2))
            return false;
          var e2 = t2.offset.pending;
          return on(t2.coords.cur, e2), on(t2.coords.delta, e2), k.addEdges(t2.edges, t2.rect, e2), e2.x = 0, e2.y = 0, true;
        }
        function rn(t2) {
          var e2 = t2.x, n2 = t2.y;
          this.offset.pending.x += e2, this.offset.pending.y += n2, this.offset.total.x += e2, this.offset.total.y += n2;
        }
        function on(t2, e2) {
          var n2 = t2.page, r2 = t2.client, o2 = e2.x, i2 = e2.y;
          n2.x += o2, n2.y += i2, r2.x += o2, r2.y += i2;
        }
        Object.defineProperty(Qe, "__esModule", { value: true }), Qe.addTotal = tn, Qe.applyPending = nn, Qe.default = void 0, Ge._ProxyMethods.offsetBy = "";
        var an = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(t2) {
          t2.Interaction.prototype.offsetBy = rn;
        }, listeners: { "interactions:new": function(t2) {
          t2.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
        }, "interactions:update-pointer": function(t2) {
          return tn(t2.interaction);
        }, "interactions:before-action-start": en, "interactions:before-action-move": en, "interactions:before-action-end": function(t2) {
          var e2 = t2.interaction;
          if (nn(e2))
            return e2.move({ offset: true }), e2.end(), false;
        }, "interactions:stop": function(t2) {
          var e2 = t2.interaction;
          e2.offset.total.x = 0, e2.offset.total.y = 0, e2.offset.pending.x = 0, e2.offset.pending.y = 0;
        } } }, sn = an;
        Qe.default = sn;
        var ln = {};
        function un(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function cn(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        Object.defineProperty(ln, "__esModule", { value: true }), ln.default = ln.InertiaState = void 0;
        var fn = function() {
          function t2(e3) {
            !function(t3, e4) {
              if (!(t3 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t2), cn(this, "active", false), cn(this, "isModified", false), cn(this, "smoothEnd", false), cn(this, "allowResume", false), cn(this, "modification", void 0), cn(this, "modifierCount", 0), cn(this, "modifierArg", void 0), cn(this, "startCoords", void 0), cn(this, "t0", 0), cn(this, "v0", 0), cn(this, "te", 0), cn(this, "targetOffset", void 0), cn(this, "modifiedOffset", void 0), cn(this, "currentOffset", void 0), cn(this, "lambda_v0", 0), cn(this, "one_ve_v0", 0), cn(this, "timeout", void 0), cn(this, "interaction", void 0), this.interaction = e3;
          }
          var e2, n2;
          return e2 = t2, (n2 = [{ key: "start", value: function(t3) {
            var e3 = this.interaction, n3 = dn(e3);
            if (!n3 || !n3.enabled)
              return false;
            var r2 = e3.coords.velocity.client, o2 = (0, R.default)(r2.x, r2.y), i2 = this.modification || (this.modification = new me.default(e3));
            if (i2.copyFrom(e3.modification), this.t0 = e3._now(), this.allowResume = n3.allowResume, this.v0 = o2, this.currentOffset = { x: 0, y: 0 }, this.startCoords = e3.coords.cur.page, this.modifierArg = i2.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - e3.coords.cur.timeStamp < 50 && o2 > n3.minSpeed && o2 > n3.endSpeed)
              this.startInertia();
            else {
              if (i2.result = i2.setAll(this.modifierArg), !i2.result.changed)
                return false;
              this.startSmoothEnd();
            }
            return e3.modification.result.rect = null, e3.offsetBy(this.targetOffset), e3._doPhase({ interaction: e3, event: t3, phase: "inertiastart" }), e3.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), e3.modification.result.rect = null, this.active = true, e3.simulation = this, true;
          } }, { key: "startInertia", value: function() {
            var t3 = this, e3 = this.interaction.coords.velocity.client, n3 = dn(this.interaction), r2 = n3.resistance, o2 = -Math.log(n3.endSpeed / this.v0) / r2;
            this.targetOffset = { x: (e3.x - o2) / r2, y: (e3.y - o2) / r2 }, this.te = o2, this.lambda_v0 = r2 / this.v0, this.one_ve_v0 = 1 - n3.endSpeed / this.v0;
            var i2 = this.modification, a2 = this.modifierArg;
            a2.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, i2.result = i2.setAll(a2), i2.result.changed && (this.isModified = true, this.modifiedOffset = { x: this.targetOffset.x + i2.result.delta.x, y: this.targetOffset.y + i2.result.delta.y }), this.onNextFrame(function() {
              return t3.inertiaTick();
            });
          } }, { key: "startSmoothEnd", value: function() {
            var t3 = this;
            this.smoothEnd = true, this.isModified = true, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
              return t3.smoothEndTick();
            });
          } }, { key: "onNextFrame", value: function(t3) {
            var e3 = this;
            this.timeout = Tt.default.request(function() {
              e3.active && t3();
            });
          } }, { key: "inertiaTick", value: function() {
            var t3, e3, n3, r2, o2, i2 = this, a2 = this.interaction, s2 = dn(a2).resistance, l2 = (a2._now() - this.t0) / 1e3;
            if (l2 < this.te) {
              var u2, c2 = 1 - (Math.exp(-s2 * l2) - this.lambda_v0) / this.one_ve_v0;
              this.isModified ? (0, 0, t3 = this.targetOffset.x, e3 = this.targetOffset.y, n3 = this.modifiedOffset.x, r2 = this.modifiedOffset.y, u2 = { x: vn(o2 = c2, 0, t3, n3), y: vn(o2, 0, e3, r2) }) : u2 = { x: this.targetOffset.x * c2, y: this.targetOffset.y * c2 };
              var f2 = { x: u2.x - this.currentOffset.x, y: u2.y - this.currentOffset.y };
              this.currentOffset.x += f2.x, this.currentOffset.y += f2.y, a2.offsetBy(f2), a2.move(), this.onNextFrame(function() {
                return i2.inertiaTick();
              });
            } else
              a2.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
          } }, { key: "smoothEndTick", value: function() {
            var t3 = this, e3 = this.interaction, n3 = e3._now() - this.t0, r2 = dn(e3).smoothEndDuration;
            if (n3 < r2) {
              var o2 = { x: hn(n3, 0, this.targetOffset.x, r2), y: hn(n3, 0, this.targetOffset.y, r2) }, i2 = { x: o2.x - this.currentOffset.x, y: o2.y - this.currentOffset.y };
              this.currentOffset.x += i2.x, this.currentOffset.y += i2.y, e3.offsetBy(i2), e3.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
                return t3.smoothEndTick();
              });
            } else
              e3.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
          } }, { key: "resume", value: function(t3) {
            var e3 = t3.pointer, n3 = t3.event, r2 = t3.eventTarget, o2 = this.interaction;
            o2.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), o2.updatePointer(e3, n3, r2, true), o2._doPhase({ interaction: o2, event: n3, phase: "resume" }), (0, X.copyCoords)(o2.coords.prev, o2.coords.cur), this.stop();
          } }, { key: "end", value: function() {
            this.interaction.move(), this.interaction.end(), this.stop();
          } }, { key: "stop", value: function() {
            this.active = this.smoothEnd = false, this.interaction.simulation = null, Tt.default.cancel(this.timeout);
          } }]) && un(e2.prototype, n2), Object.defineProperty(e2, "prototype", { writable: false }), t2;
        }();
        function dn(t2) {
          var e2 = t2.interactable, n2 = t2.prepared;
          return e2 && e2.options && n2.name && e2.options[n2.name].inertia;
        }
        ln.InertiaState = fn;
        var pn = { id: "inertia", before: ["modifiers", "actions"], install: function(t2) {
          var e2 = t2.defaults;
          t2.usePlugin(Qe.default), t2.usePlugin(Se.default), t2.actions.phases.inertiastart = true, t2.actions.phases.resume = true, e2.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
        }, listeners: { "interactions:new": function(t2) {
          var e2 = t2.interaction;
          e2.inertia = new fn(e2);
        }, "interactions:before-action-end": function(t2) {
          var e2 = t2.interaction, n2 = t2.event;
          return (!e2._interacting || e2.simulation || !e2.inertia.start(n2)) && null;
        }, "interactions:down": function(t2) {
          var e2 = t2.interaction, n2 = t2.eventTarget, r2 = e2.inertia;
          if (r2.active)
            for (var o2 = n2; i.default.element(o2); ) {
              if (o2 === e2.element) {
                r2.resume(t2);
                break;
              }
              o2 = _.parentNode(o2);
            }
        }, "interactions:stop": function(t2) {
          var e2 = t2.interaction.inertia;
          e2.active && e2.stop();
        }, "interactions:before-action-resume": function(t2) {
          var e2 = t2.interaction.modification;
          e2.stop(t2), e2.start(t2, t2.interaction.coords.cur.page), e2.applyToInteraction(t2);
        }, "interactions:before-action-inertiastart": function(t2) {
          return t2.interaction.modification.setAndApply(t2);
        }, "interactions:action-resume": Se.addEventModifiers, "interactions:action-inertiastart": Se.addEventModifiers, "interactions:after-action-inertiastart": function(t2) {
          return t2.interaction.modification.restoreInteractionCoords(t2);
        }, "interactions:after-action-resume": function(t2) {
          return t2.interaction.modification.restoreInteractionCoords(t2);
        } } };
        function vn(t2, e2, n2, r2) {
          var o2 = 1 - t2;
          return o2 * o2 * e2 + 2 * o2 * t2 * n2 + t2 * t2 * r2;
        }
        function hn(t2, e2, n2, r2) {
          return -n2 * (t2 /= r2) * (t2 - 2) + e2;
        }
        var gn = pn;
        ln.default = gn;
        var yn = {};
        function mn(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function bn(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        function xn(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            if (t2.immediatePropagationStopped)
              break;
            r2(t2);
          }
        }
        Object.defineProperty(yn, "__esModule", { value: true }), yn.Eventable = void 0;
        var wn = function() {
          function t2(e3) {
            !function(t3, e4) {
              if (!(t3 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t2), bn(this, "options", void 0), bn(this, "types", {}), bn(this, "propagationStopped", false), bn(this, "immediatePropagationStopped", false), bn(this, "global", void 0), this.options = (0, M.default)({}, e3 || {});
          }
          var e2, n2;
          return e2 = t2, (n2 = [{ key: "fire", value: function(t3) {
            var e3, n3 = this.global;
            (e3 = this.types[t3.type]) && xn(t3, e3), !t3.propagationStopped && n3 && (e3 = n3[t3.type]) && xn(t3, e3);
          } }, { key: "on", value: function(t3, e3) {
            var n3 = (0, z.default)(t3, e3);
            for (t3 in n3)
              this.types[t3] = H.merge(this.types[t3] || [], n3[t3]);
          } }, { key: "off", value: function(t3, e3) {
            var n3 = (0, z.default)(t3, e3);
            for (t3 in n3) {
              var r2 = this.types[t3];
              if (r2 && r2.length)
                for (var o2 = 0; o2 < n3[t3].length; o2++) {
                  var i2 = n3[t3][o2], a2 = r2.indexOf(i2);
                  -1 !== a2 && r2.splice(a2, 1);
                }
            }
          } }, { key: "getRect", value: function(t3) {
            return null;
          } }]) && mn(e2.prototype, n2), Object.defineProperty(e2, "prototype", { writable: false }), t2;
        }();
        yn.Eventable = wn;
        var _n = {};
        Object.defineProperty(_n, "__esModule", { value: true }), _n.default = function(t2, e2) {
          if (e2.phaselessTypes[t2])
            return true;
          for (var n2 in e2.map)
            if (0 === t2.indexOf(n2) && t2.substr(n2.length) in e2.phases)
              return true;
          return false;
        };
        var Pn = {};
        Object.defineProperty(Pn, "__esModule", { value: true }), Pn.createInteractStatic = function(t2) {
          var e2 = function e3(n2, r2) {
            var o2 = t2.interactables.get(n2, r2);
            return o2 || ((o2 = t2.interactables.new(n2, r2)).events.global = e3.globalEvents), o2;
          };
          return e2.getPointerAverage = X.pointerAverage, e2.getTouchBBox = X.touchBBox, e2.getTouchDistance = X.touchDistance, e2.getTouchAngle = X.touchAngle, e2.getElementRect = _.getElementRect, e2.getElementClientRect = _.getElementClientRect, e2.matchesSelector = _.matchesSelector, e2.closest = _.closest, e2.globalEvents = {}, e2.version = "1.10.17", e2.scope = t2, e2.use = function(t3, e3) {
            return this.scope.usePlugin(t3, e3), this;
          }, e2.isSet = function(t3, e3) {
            return !!this.scope.interactables.get(t3, e3 && e3.context);
          }, e2.on = (0, Xt.warnOnce)(function(t3, e3, n2) {
            if (i.default.string(t3) && -1 !== t3.search(" ") && (t3 = t3.trim().split(/ +/)), i.default.array(t3)) {
              for (var r2 = 0; r2 < t3.length; r2++) {
                var o2 = t3[r2];
                this.on(o2, e3, n2);
              }
              return this;
            }
            if (i.default.object(t3)) {
              for (var a2 in t3)
                this.on(a2, t3[a2], e3);
              return this;
            }
            return (0, _n.default)(t3, this.scope.actions) ? this.globalEvents[t3] ? this.globalEvents[t3].push(e3) : this.globalEvents[t3] = [e3] : this.scope.events.add(this.scope.document, t3, e3, { options: n2 }), this;
          }, "The interact.on() method is being deprecated"), e2.off = (0, Xt.warnOnce)(function(t3, e3, n2) {
            if (i.default.string(t3) && -1 !== t3.search(" ") && (t3 = t3.trim().split(/ +/)), i.default.array(t3)) {
              for (var r2 = 0; r2 < t3.length; r2++) {
                var o2 = t3[r2];
                this.off(o2, e3, n2);
              }
              return this;
            }
            if (i.default.object(t3)) {
              for (var a2 in t3)
                this.off(a2, t3[a2], e3);
              return this;
            }
            var s2;
            return (0, _n.default)(t3, this.scope.actions) ? t3 in this.globalEvents && -1 !== (s2 = this.globalEvents[t3].indexOf(e3)) && this.globalEvents[t3].splice(s2, 1) : this.scope.events.remove(this.scope.document, t3, e3, n2), this;
          }, "The interact.off() method is being deprecated"), e2.debug = function() {
            return this.scope;
          }, e2.supportsTouch = function() {
            return b.default.supportsTouch;
          }, e2.supportsPointerEvent = function() {
            return b.default.supportsPointerEvent;
          }, e2.stop = function() {
            for (var t3 = 0; t3 < this.scope.interactions.list.length; t3++)
              this.scope.interactions.list[t3].stop();
            return this;
          }, e2.pointerMoveTolerance = function(t3) {
            return i.default.number(t3) ? (this.scope.interactions.pointerMoveTolerance = t3, this) : this.scope.interactions.pointerMoveTolerance;
          }, e2.addDocument = function(t3, e3) {
            this.scope.addDocument(t3, e3);
          }, e2.removeDocument = function(t3) {
            this.scope.removeDocument(t3);
          }, e2;
        };
        var On = {};
        function En(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function Sn(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        Object.defineProperty(On, "__esModule", { value: true }), On.Interactable = void 0;
        var Tn = function() {
          function t2(n3, r3, o2, i2) {
            !function(t3, e2) {
              if (!(t3 instanceof e2))
                throw new TypeError("Cannot call a class as a function");
            }(this, t2), Sn(this, "options", void 0), Sn(this, "_actions", void 0), Sn(this, "target", void 0), Sn(this, "events", new yn.Eventable()), Sn(this, "_context", void 0), Sn(this, "_win", void 0), Sn(this, "_doc", void 0), Sn(this, "_scopeEvents", void 0), Sn(this, "_rectChecker", void 0), this._actions = r3.actions, this.target = n3, this._context = r3.context || o2, this._win = (0, e.getWindow)((0, _.trySelector)(n3) ? this._context : n3), this._doc = this._win.document, this._scopeEvents = i2, this.set(r3);
          }
          var n2, r2;
          return n2 = t2, (r2 = [{ key: "_defaults", get: function() {
            return { base: {}, perAction: {}, actions: {} };
          } }, { key: "setOnEvents", value: function(t3, e2) {
            return i.default.func(e2.onstart) && this.on("".concat(t3, "start"), e2.onstart), i.default.func(e2.onmove) && this.on("".concat(t3, "move"), e2.onmove), i.default.func(e2.onend) && this.on("".concat(t3, "end"), e2.onend), i.default.func(e2.oninertiastart) && this.on("".concat(t3, "inertiastart"), e2.oninertiastart), this;
          } }, { key: "updatePerActionListeners", value: function(t3, e2, n3) {
            (i.default.array(e2) || i.default.object(e2)) && this.off(t3, e2), (i.default.array(n3) || i.default.object(n3)) && this.on(t3, n3);
          } }, { key: "setPerAction", value: function(t3, e2) {
            var n3 = this._defaults;
            for (var r3 in e2) {
              var o2 = r3, a2 = this.options[t3], s2 = e2[o2];
              "listeners" === o2 && this.updatePerActionListeners(t3, a2.listeners, s2), i.default.array(s2) ? a2[o2] = H.from(s2) : i.default.plainObject(s2) ? (a2[o2] = (0, M.default)(a2[o2] || {}, (0, ye.default)(s2)), i.default.object(n3.perAction[o2]) && "enabled" in n3.perAction[o2] && (a2[o2].enabled = false !== s2.enabled)) : i.default.bool(s2) && i.default.object(n3.perAction[o2]) ? a2[o2].enabled = s2 : a2[o2] = s2;
            }
          } }, { key: "getRect", value: function(t3) {
            return t3 = t3 || (i.default.element(this.target) ? this.target : null), i.default.string(this.target) && (t3 = t3 || this._context.querySelector(this.target)), (0, _.getElementRect)(t3);
          } }, { key: "rectChecker", value: function(t3) {
            var e2 = this;
            return i.default.func(t3) ? (this._rectChecker = t3, this.getRect = function(t4) {
              var n3 = (0, M.default)({}, e2._rectChecker(t4));
              return "width" in n3 || (n3.width = n3.right - n3.left, n3.height = n3.bottom - n3.top), n3;
            }, this) : null === t3 ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
          } }, { key: "_backCompatOption", value: function(t3, e2) {
            if ((0, _.trySelector)(e2) || i.default.object(e2)) {
              for (var n3 in this.options[t3] = e2, this._actions.map)
                this.options[n3][t3] = e2;
              return this;
            }
            return this.options[t3];
          } }, { key: "origin", value: function(t3) {
            return this._backCompatOption("origin", t3);
          } }, { key: "deltaSource", value: function(t3) {
            return "page" === t3 || "client" === t3 ? (this.options.deltaSource = t3, this) : this.options.deltaSource;
          } }, { key: "context", value: function() {
            return this._context;
          } }, { key: "inContext", value: function(t3) {
            return this._context === t3.ownerDocument || (0, _.nodeContains)(this._context, t3);
          } }, { key: "testIgnoreAllow", value: function(t3, e2, n3) {
            return !this.testIgnore(t3.ignoreFrom, e2, n3) && this.testAllow(t3.allowFrom, e2, n3);
          } }, { key: "testAllow", value: function(t3, e2, n3) {
            return !t3 || !!i.default.element(n3) && (i.default.string(t3) ? (0, _.matchesUpTo)(n3, t3, e2) : !!i.default.element(t3) && (0, _.nodeContains)(t3, n3));
          } }, { key: "testIgnore", value: function(t3, e2, n3) {
            return !(!t3 || !i.default.element(n3)) && (i.default.string(t3) ? (0, _.matchesUpTo)(n3, t3, e2) : !!i.default.element(t3) && (0, _.nodeContains)(t3, n3));
          } }, { key: "fire", value: function(t3) {
            return this.events.fire(t3), this;
          } }, { key: "_onOff", value: function(t3, e2, n3, r3) {
            i.default.object(e2) && !i.default.array(e2) && (r3 = n3, n3 = null);
            var o2 = "on" === t3 ? "add" : "remove", a2 = (0, z.default)(e2, n3);
            for (var s2 in a2) {
              "wheel" === s2 && (s2 = b.default.wheelEvent);
              for (var l2 = 0; l2 < a2[s2].length; l2++) {
                var u2 = a2[s2][l2];
                (0, _n.default)(s2, this._actions) ? this.events[t3](s2, u2) : i.default.string(this.target) ? this._scopeEvents["".concat(o2, "Delegate")](this.target, this._context, s2, u2, r3) : this._scopeEvents[o2](this.target, s2, u2, r3);
              }
            }
            return this;
          } }, { key: "on", value: function(t3, e2, n3) {
            return this._onOff("on", t3, e2, n3);
          } }, { key: "off", value: function(t3, e2, n3) {
            return this._onOff("off", t3, e2, n3);
          } }, { key: "set", value: function(t3) {
            var e2 = this._defaults;
            for (var n3 in i.default.object(t3) || (t3 = {}), this.options = (0, ye.default)(e2.base), this._actions.methodDict) {
              var r3 = n3, o2 = this._actions.methodDict[r3];
              this.options[r3] = {}, this.setPerAction(r3, (0, M.default)((0, M.default)({}, e2.perAction), e2.actions[r3])), this[o2](t3[r3]);
            }
            for (var a2 in t3)
              i.default.func(this[a2]) && this[a2](t3[a2]);
            return this;
          } }, { key: "unset", value: function() {
            if (i.default.string(this.target))
              for (var t3 in this._scopeEvents.delegatedEvents)
                for (var e2 = this._scopeEvents.delegatedEvents[t3], n3 = e2.length - 1; n3 >= 0; n3--) {
                  var r3 = e2[n3], o2 = r3.selector, a2 = r3.context, s2 = r3.listeners;
                  o2 === this.target && a2 === this._context && e2.splice(n3, 1);
                  for (var l2 = s2.length - 1; l2 >= 0; l2--)
                    this._scopeEvents.removeDelegate(this.target, this._context, t3, s2[l2][0], s2[l2][1]);
                }
            else
              this._scopeEvents.remove(this.target, "all");
          } }]) && En(n2.prototype, r2), Object.defineProperty(n2, "prototype", { writable: false }), t2;
        }();
        On.Interactable = Tn;
        var jn = {};
        function Mn(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function kn(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        Object.defineProperty(jn, "__esModule", { value: true }), jn.InteractableSet = void 0;
        var In = function() {
          function t2(e3) {
            var n3 = this;
            !function(t3, e4) {
              if (!(t3 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t2), kn(this, "list", []), kn(this, "selectorMap", {}), kn(this, "scope", void 0), this.scope = e3, e3.addListeners({ "interactable:unset": function(t3) {
              var e4 = t3.interactable, r2 = e4.target, o2 = e4._context, a2 = i.default.string(r2) ? n3.selectorMap[r2] : r2[n3.scope.id], s2 = H.findIndex(a2, function(t4) {
                return t4.context === o2;
              });
              a2[s2] && (a2[s2].context = null, a2[s2].interactable = null), a2.splice(s2, 1);
            } });
          }
          var e2, n2;
          return e2 = t2, (n2 = [{ key: "new", value: function(t3, e3) {
            e3 = (0, M.default)(e3 || {}, { actions: this.scope.actions });
            var n3 = new this.scope.Interactable(t3, e3, this.scope.document, this.scope.events), r2 = { context: n3._context, interactable: n3 };
            return this.scope.addDocument(n3._doc), this.list.push(n3), i.default.string(t3) ? (this.selectorMap[t3] || (this.selectorMap[t3] = []), this.selectorMap[t3].push(r2)) : (n3.target[this.scope.id] || Object.defineProperty(t3, this.scope.id, { value: [], configurable: true }), t3[this.scope.id].push(r2)), this.scope.fire("interactable:new", { target: t3, options: e3, interactable: n3, win: this.scope._win }), n3;
          } }, { key: "get", value: function(t3, e3) {
            var n3 = e3 && e3.context || this.scope.document, r2 = i.default.string(t3), o2 = r2 ? this.selectorMap[t3] : t3[this.scope.id];
            if (!o2)
              return null;
            var a2 = H.find(o2, function(e4) {
              return e4.context === n3 && (r2 || e4.interactable.inContext(t3));
            });
            return a2 && a2.interactable;
          } }, { key: "forEachMatch", value: function(t3, e3) {
            for (var n3 = 0; n3 < this.list.length; n3++) {
              var r2 = this.list[n3], o2 = void 0;
              if ((i.default.string(r2.target) ? i.default.element(t3) && _.matchesSelector(t3, r2.target) : t3 === r2.target) && r2.inContext(t3) && (o2 = e3(r2)), void 0 !== o2)
                return o2;
            }
          } }]) && Mn(e2.prototype, n2), Object.defineProperty(e2, "prototype", { writable: false }), t2;
        }();
        jn.InteractableSet = In;
        var Dn = {};
        function An(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function zn(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        function Cn(t2, e2) {
          return function(t3) {
            if (Array.isArray(t3))
              return t3;
          }(t2) || function(t3, e3) {
            var n2 = null == t3 ? null : "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
            if (null != n2) {
              var r2, o2, i2 = [], a2 = true, s2 = false;
              try {
                for (n2 = n2.call(t3); !(a2 = (r2 = n2.next()).done) && (i2.push(r2.value), !e3 || i2.length !== e3); a2 = true)
                  ;
              } catch (t4) {
                s2 = true, o2 = t4;
              } finally {
                try {
                  a2 || null == n2.return || n2.return();
                } finally {
                  if (s2)
                    throw o2;
                }
              }
              return i2;
            }
          }(t2, e2) || function(t3, e3) {
            if (t3) {
              if ("string" == typeof t3)
                return Rn(t3, e3);
              var n2 = Object.prototype.toString.call(t3).slice(8, -1);
              return "Object" === n2 && t3.constructor && (n2 = t3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(t3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Rn(t3, e3) : void 0;
            }
          }(t2, e2) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function Rn(t2, e2) {
          (null == e2 || e2 > t2.length) && (e2 = t2.length);
          for (var n2 = 0, r2 = Array(e2); n2 < e2; n2++)
            r2[n2] = t2[n2];
          return r2;
        }
        Object.defineProperty(Dn, "__esModule", { value: true }), Dn.default = void 0;
        var Fn = function() {
          function t2(e3) {
            !function(t3, e4) {
              if (!(t3 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t2), zn(this, "currentTarget", void 0), zn(this, "originalEvent", void 0), zn(this, "type", void 0), this.originalEvent = e3, (0, F.default)(this, e3);
          }
          var e2, n2;
          return e2 = t2, (n2 = [{ key: "preventOriginalDefault", value: function() {
            this.originalEvent.preventDefault();
          } }, { key: "stopPropagation", value: function() {
            this.originalEvent.stopPropagation();
          } }, { key: "stopImmediatePropagation", value: function() {
            this.originalEvent.stopImmediatePropagation();
          } }]) && An(e2.prototype, n2), Object.defineProperty(e2, "prototype", { writable: false }), t2;
        }();
        function Xn(t2) {
          if (!i.default.object(t2))
            return { capture: !!t2, passive: false };
          var e2 = (0, M.default)({}, t2);
          return e2.capture = !!t2.capture, e2.passive = !!t2.passive, e2;
        }
        var Bn = { id: "events", install: function(t2) {
          var e2, n2 = [], r2 = {}, o2 = [], a2 = { add: s2, remove: l2, addDelegate: function(t3, e3, n3, i2, a3) {
            var l3 = Xn(a3);
            if (!r2[n3]) {
              r2[n3] = [];
              for (var f2 = 0; f2 < o2.length; f2++) {
                var d2 = o2[f2];
                s2(d2, n3, u2), s2(d2, n3, c2, true);
              }
            }
            var p2 = r2[n3], v2 = H.find(p2, function(n4) {
              return n4.selector === t3 && n4.context === e3;
            });
            v2 || (v2 = { selector: t3, context: e3, listeners: [] }, p2.push(v2)), v2.listeners.push([i2, l3]);
          }, removeDelegate: function(t3, e3, n3, o3, i2) {
            var a3, s3 = Xn(i2), f2 = r2[n3], d2 = false;
            if (f2)
              for (a3 = f2.length - 1; a3 >= 0; a3--) {
                var p2 = f2[a3];
                if (p2.selector === t3 && p2.context === e3) {
                  for (var v2 = p2.listeners, h2 = v2.length - 1; h2 >= 0; h2--) {
                    var g2 = Cn(v2[h2], 2), y2 = g2[0], m2 = g2[1], b2 = m2.capture, x2 = m2.passive;
                    if (y2 === o3 && b2 === s3.capture && x2 === s3.passive) {
                      v2.splice(h2, 1), v2.length || (f2.splice(a3, 1), l2(e3, n3, u2), l2(e3, n3, c2, true)), d2 = true;
                      break;
                    }
                  }
                  if (d2)
                    break;
                }
              }
          }, delegateListener: u2, delegateUseCapture: c2, delegatedEvents: r2, documents: o2, targets: n2, supportsOptions: false, supportsPassive: false };
          function s2(t3, e3, r3, o3) {
            var i2 = Xn(o3), s3 = H.find(n2, function(e4) {
              return e4.eventTarget === t3;
            });
            s3 || (s3 = { eventTarget: t3, events: {} }, n2.push(s3)), s3.events[e3] || (s3.events[e3] = []), t3.addEventListener && !H.contains(s3.events[e3], r3) && (t3.addEventListener(e3, r3, a2.supportsOptions ? i2 : i2.capture), s3.events[e3].push(r3));
          }
          function l2(t3, e3, r3, o3) {
            var i2 = Xn(o3), s3 = H.findIndex(n2, function(e4) {
              return e4.eventTarget === t3;
            }), u3 = n2[s3];
            if (u3 && u3.events)
              if ("all" !== e3) {
                var c3 = false, f2 = u3.events[e3];
                if (f2) {
                  if ("all" === r3) {
                    for (var d2 = f2.length - 1; d2 >= 0; d2--)
                      l2(t3, e3, f2[d2], i2);
                    return;
                  }
                  for (var p2 = 0; p2 < f2.length; p2++)
                    if (f2[p2] === r3) {
                      t3.removeEventListener(e3, r3, a2.supportsOptions ? i2 : i2.capture), f2.splice(p2, 1), 0 === f2.length && (delete u3.events[e3], c3 = true);
                      break;
                    }
                }
                c3 && !Object.keys(u3.events).length && n2.splice(s3, 1);
              } else
                for (e3 in u3.events)
                  u3.events.hasOwnProperty(e3) && l2(t3, e3, "all");
          }
          function u2(t3, e3) {
            for (var n3 = Xn(e3), o3 = new Fn(t3), a3 = r2[t3.type], s3 = Cn(X.getEventTargets(t3), 1)[0], l3 = s3; i.default.element(l3); ) {
              for (var u3 = 0; u3 < a3.length; u3++) {
                var c3 = a3[u3], f2 = c3.selector, d2 = c3.context;
                if (_.matchesSelector(l3, f2) && _.nodeContains(d2, s3) && _.nodeContains(d2, l3)) {
                  var p2 = c3.listeners;
                  o3.currentTarget = l3;
                  for (var v2 = 0; v2 < p2.length; v2++) {
                    var h2 = Cn(p2[v2], 2), g2 = h2[0], y2 = h2[1], m2 = y2.capture, b2 = y2.passive;
                    m2 === n3.capture && b2 === n3.passive && g2(o3);
                  }
                }
              }
              l3 = _.parentNode(l3);
            }
          }
          function c2(t3) {
            return u2(t3, true);
          }
          return null == (e2 = t2.document) || e2.createElement("div").addEventListener("test", null, { get capture() {
            return a2.supportsOptions = true;
          }, get passive() {
            return a2.supportsPassive = true;
          } }), t2.events = a2, a2;
        } };
        Dn.default = Bn;
        var Yn = {};
        Object.defineProperty(Yn, "__esModule", { value: true }), Yn.default = void 0;
        var Wn = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(t2) {
          for (var e2 = 0; e2 < Wn.methodOrder.length; e2++) {
            var n2;
            n2 = Wn.methodOrder[e2];
            var r2 = Wn[n2](t2);
            if (r2)
              return r2;
          }
          return null;
        }, simulationResume: function(t2) {
          var e2 = t2.pointerType, n2 = t2.eventType, r2 = t2.eventTarget, o2 = t2.scope;
          if (!/down|start/i.test(n2))
            return null;
          for (var i2 = 0; i2 < o2.interactions.list.length; i2++) {
            var a2 = o2.interactions.list[i2], s2 = r2;
            if (a2.simulation && a2.simulation.allowResume && a2.pointerType === e2)
              for (; s2; ) {
                if (s2 === a2.element)
                  return a2;
                s2 = _.parentNode(s2);
              }
          }
          return null;
        }, mouseOrPen: function(t2) {
          var e2, n2 = t2.pointerId, r2 = t2.pointerType, o2 = t2.eventType, i2 = t2.scope;
          if ("mouse" !== r2 && "pen" !== r2)
            return null;
          for (var a2 = 0; a2 < i2.interactions.list.length; a2++) {
            var s2 = i2.interactions.list[a2];
            if (s2.pointerType === r2) {
              if (s2.simulation && !Ln(s2, n2))
                continue;
              if (s2.interacting())
                return s2;
              e2 || (e2 = s2);
            }
          }
          if (e2)
            return e2;
          for (var l2 = 0; l2 < i2.interactions.list.length; l2++) {
            var u2 = i2.interactions.list[l2];
            if (!(u2.pointerType !== r2 || /down/i.test(o2) && u2.simulation))
              return u2;
          }
          return null;
        }, hasPointer: function(t2) {
          for (var e2 = t2.pointerId, n2 = t2.scope, r2 = 0; r2 < n2.interactions.list.length; r2++) {
            var o2 = n2.interactions.list[r2];
            if (Ln(o2, e2))
              return o2;
          }
          return null;
        }, idle: function(t2) {
          for (var e2 = t2.pointerType, n2 = t2.scope, r2 = 0; r2 < n2.interactions.list.length; r2++) {
            var o2 = n2.interactions.list[r2];
            if (1 === o2.pointers.length) {
              var i2 = o2.interactable;
              if (i2 && (!i2.options.gesture || !i2.options.gesture.enabled))
                continue;
            } else if (o2.pointers.length >= 2)
              continue;
            if (!o2.interacting() && e2 === o2.pointerType)
              return o2;
          }
          return null;
        } };
        function Ln(t2, e2) {
          return t2.pointers.some(function(t3) {
            return t3.id === e2;
          });
        }
        var Un = Wn;
        Yn.default = Un;
        var Vn = {};
        function Nn(t2) {
          return Nn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          }, Nn(t2);
        }
        function qn(t2, e2) {
          return function(t3) {
            if (Array.isArray(t3))
              return t3;
          }(t2) || function(t3, e3) {
            var n2 = null == t3 ? null : "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
            if (null != n2) {
              var r2, o2, i2 = [], a2 = true, s2 = false;
              try {
                for (n2 = n2.call(t3); !(a2 = (r2 = n2.next()).done) && (i2.push(r2.value), !e3 || i2.length !== e3); a2 = true)
                  ;
              } catch (t4) {
                s2 = true, o2 = t4;
              } finally {
                try {
                  a2 || null == n2.return || n2.return();
                } finally {
                  if (s2)
                    throw o2;
                }
              }
              return i2;
            }
          }(t2, e2) || function(t3, e3) {
            if (t3) {
              if ("string" == typeof t3)
                return Gn(t3, e3);
              var n2 = Object.prototype.toString.call(t3).slice(8, -1);
              return "Object" === n2 && t3.constructor && (n2 = t3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(t3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Gn(t3, e3) : void 0;
            }
          }(t2, e2) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function Gn(t2, e2) {
          (null == e2 || e2 > t2.length) && (e2 = t2.length);
          for (var n2 = 0, r2 = Array(e2); n2 < e2; n2++)
            r2[n2] = t2[n2];
          return r2;
        }
        function $n(t2, e2) {
          if (!(t2 instanceof e2))
            throw new TypeError("Cannot call a class as a function");
        }
        function Hn(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function Kn(t2, e2) {
          return Kn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
            return t3.__proto__ = e3, t3;
          }, Kn(t2, e2);
        }
        function Zn(t2, e2) {
          if (e2 && ("object" === Nn(e2) || "function" == typeof e2))
            return e2;
          if (void 0 !== e2)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t3) {
            if (void 0 === t3)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t3;
          }(t2);
        }
        function Jn(t2) {
          return Jn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
            return t3.__proto__ || Object.getPrototypeOf(t3);
          }, Jn(t2);
        }
        Object.defineProperty(Vn, "__esModule", { value: true }), Vn.default = void 0;
        var Qn = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
        function tr(t2, e2) {
          return function(n2) {
            var r2 = e2.interactions.list, o2 = X.getPointerType(n2), i2 = qn(X.getEventTargets(n2), 2), a2 = i2[0], s2 = i2[1], l2 = [];
            if (/^touch/.test(n2.type)) {
              e2.prevTouchTime = e2.now();
              for (var u2 = 0; u2 < n2.changedTouches.length; u2++) {
                var c2 = n2.changedTouches[u2], f2 = { pointer: c2, pointerId: X.getPointerId(c2), pointerType: o2, eventType: n2.type, eventTarget: a2, curEventTarget: s2, scope: e2 }, d2 = er(f2);
                l2.push([f2.pointer, f2.eventTarget, f2.curEventTarget, d2]);
              }
            } else {
              var p2 = false;
              if (!b.default.supportsPointerEvent && /mouse/.test(n2.type)) {
                for (var v2 = 0; v2 < r2.length && !p2; v2++)
                  p2 = "mouse" !== r2[v2].pointerType && r2[v2].pointerIsDown;
                p2 = p2 || e2.now() - e2.prevTouchTime < 500 || 0 === n2.timeStamp;
              }
              if (!p2) {
                var h2 = { pointer: n2, pointerId: X.getPointerId(n2), pointerType: o2, eventType: n2.type, curEventTarget: s2, eventTarget: a2, scope: e2 }, g2 = er(h2);
                l2.push([h2.pointer, h2.eventTarget, h2.curEventTarget, g2]);
              }
            }
            for (var y2 = 0; y2 < l2.length; y2++) {
              var m2 = qn(l2[y2], 4), x2 = m2[0], w2 = m2[1], _2 = m2[2];
              m2[3][t2](x2, n2, w2, _2);
            }
          };
        }
        function er(t2) {
          var e2 = t2.pointerType, n2 = t2.scope, r2 = { interaction: Yn.default.search(t2), searchDetails: t2 };
          return n2.fire("interactions:find", r2), r2.interaction || n2.interactions.new({ pointerType: e2 });
        }
        function nr(t2, e2) {
          var n2 = t2.doc, r2 = t2.scope, o2 = t2.options, i2 = r2.interactions.docEvents, a2 = r2.events, s2 = a2[e2];
          for (var l2 in r2.browser.isIOS && !o2.events && (o2.events = { passive: false }), a2.delegatedEvents)
            s2(n2, l2, a2.delegateListener), s2(n2, l2, a2.delegateUseCapture, true);
          for (var u2 = o2 && o2.events, c2 = 0; c2 < i2.length; c2++) {
            var f2 = i2[c2];
            s2(n2, f2.type, f2.listener, u2);
          }
        }
        var rr = { id: "core/interactions", install: function(t2) {
          for (var e2 = {}, n2 = 0; n2 < Qn.length; n2++) {
            var r2 = Qn[n2];
            e2[r2] = tr(r2, t2);
          }
          var o2, i2 = b.default.pEventTypes;
          function a2() {
            for (var e3 = 0; e3 < t2.interactions.list.length; e3++) {
              var n3 = t2.interactions.list[e3];
              if (n3.pointerIsDown && "touch" === n3.pointerType && !n3._interacting)
                for (var r3 = function() {
                  var e4 = n3.pointers[o3];
                  t2.documents.some(function(t3) {
                    var n4 = t3.doc;
                    return (0, _.nodeContains)(n4, e4.downTarget);
                  }) || n3.removePointer(e4.pointer, e4.event);
                }, o3 = 0; o3 < n3.pointers.length; o3++)
                  r3();
            }
          }
          (o2 = h.default.PointerEvent ? [{ type: i2.down, listener: a2 }, { type: i2.down, listener: e2.pointerDown }, { type: i2.move, listener: e2.pointerMove }, { type: i2.up, listener: e2.pointerUp }, { type: i2.cancel, listener: e2.pointerUp }] : [{ type: "mousedown", listener: e2.pointerDown }, { type: "mousemove", listener: e2.pointerMove }, { type: "mouseup", listener: e2.pointerUp }, { type: "touchstart", listener: a2 }, { type: "touchstart", listener: e2.pointerDown }, { type: "touchmove", listener: e2.pointerMove }, { type: "touchend", listener: e2.pointerUp }, { type: "touchcancel", listener: e2.pointerUp }]).push({ type: "blur", listener: function(e3) {
            for (var n3 = 0; n3 < t2.interactions.list.length; n3++)
              t2.interactions.list[n3].documentBlur(e3);
          } }), t2.prevTouchTime = 0, t2.Interaction = function(e3) {
            !function(t3, e4) {
              if ("function" != typeof e4 && null !== e4)
                throw new TypeError("Super expression must either be null or a function");
              t3.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t3, writable: true, configurable: true } }), Object.defineProperty(t3, "prototype", { writable: false }), e4 && Kn(t3, e4);
            }(s2, e3);
            var n3, r3, o3, i3, a3 = (o3 = s2, i3 = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                })), true;
              } catch (t3) {
                return false;
              }
            }(), function() {
              var t3, e4 = Jn(o3);
              if (i3) {
                var n4 = Jn(this).constructor;
                t3 = Reflect.construct(e4, arguments, n4);
              } else
                t3 = e4.apply(this, arguments);
              return Zn(this, t3);
            });
            function s2() {
              return $n(this, s2), a3.apply(this, arguments);
            }
            return n3 = s2, (r3 = [{ key: "pointerMoveTolerance", get: function() {
              return t2.interactions.pointerMoveTolerance;
            }, set: function(e4) {
              t2.interactions.pointerMoveTolerance = e4;
            } }, { key: "_now", value: function() {
              return t2.now();
            } }]) && Hn(n3.prototype, r3), Object.defineProperty(n3, "prototype", { writable: false }), s2;
          }(Ge.default), t2.interactions = { list: [], new: function(e3) {
            e3.scopeFire = function(e4, n4) {
              return t2.fire(e4, n4);
            };
            var n3 = new t2.Interaction(e3);
            return t2.interactions.list.push(n3), n3;
          }, listeners: e2, docEvents: o2, pointerMoveTolerance: 1 }, t2.usePlugin(le.default);
        }, listeners: { "scope:add-document": function(t2) {
          return nr(t2, "add");
        }, "scope:remove-document": function(t2) {
          return nr(t2, "remove");
        }, "interactable:unset": function(t2, e2) {
          for (var n2 = t2.interactable, r2 = e2.interactions.list.length - 1; r2 >= 0; r2--) {
            var o2 = e2.interactions.list[r2];
            o2.interactable === n2 && (o2.stop(), e2.fire("interactions:destroy", { interaction: o2 }), o2.destroy(), e2.interactions.list.length > 2 && e2.interactions.list.splice(r2, 1));
          }
        } }, onDocSignal: nr, doOnInteractions: tr, methodNames: Qn }, or = rr;
        Vn.default = or;
        var ir = {};
        function ar(t2) {
          return ar = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          }, ar(t2);
        }
        function sr() {
          return sr = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t2, e2, n2) {
            var r2 = lr(t2, e2);
            if (r2) {
              var o2 = Object.getOwnPropertyDescriptor(r2, e2);
              return o2.get ? o2.get.call(arguments.length < 3 ? t2 : n2) : o2.value;
            }
          }, sr.apply(this, arguments);
        }
        function lr(t2, e2) {
          for (; !Object.prototype.hasOwnProperty.call(t2, e2) && null !== (t2 = fr(t2)); )
            ;
          return t2;
        }
        function ur(t2, e2) {
          return ur = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
            return t3.__proto__ = e3, t3;
          }, ur(t2, e2);
        }
        function cr(t2, e2) {
          if (e2 && ("object" === ar(e2) || "function" == typeof e2))
            return e2;
          if (void 0 !== e2)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t3) {
            if (void 0 === t3)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t3;
          }(t2);
        }
        function fr(t2) {
          return fr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
            return t3.__proto__ || Object.getPrototypeOf(t3);
          }, fr(t2);
        }
        function dr(t2, e2) {
          if (!(t2 instanceof e2))
            throw new TypeError("Cannot call a class as a function");
        }
        function pr(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function vr(t2, e2, n2) {
          return e2 && pr(t2.prototype, e2), n2 && pr(t2, n2), Object.defineProperty(t2, "prototype", { writable: false }), t2;
        }
        function hr(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        Object.defineProperty(ir, "__esModule", { value: true }), ir.Scope = void 0, ir.initScope = yr;
        var gr = function() {
          function t2() {
            var e2 = this;
            dr(this, t2), hr(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), hr(this, "isInitialized", false), hr(this, "listenerMaps", []), hr(this, "browser", b.default), hr(this, "defaults", (0, ye.default)(ke.defaults)), hr(this, "Eventable", yn.Eventable), hr(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), hr(this, "interactStatic", (0, Pn.createInteractStatic)(this)), hr(this, "InteractEvent", Ie.InteractEvent), hr(this, "Interactable", void 0), hr(this, "interactables", new jn.InteractableSet(this)), hr(this, "_win", void 0), hr(this, "document", void 0), hr(this, "window", void 0), hr(this, "documents", []), hr(this, "_plugins", { list: [], map: {} }), hr(this, "onWindowUnload", function(t3) {
              return e2.removeDocument(t3.target);
            });
            var n2 = this;
            this.Interactable = function(t3) {
              !function(t4, e4) {
                if ("function" != typeof e4 && null !== e4)
                  throw new TypeError("Super expression must either be null or a function");
                t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && ur(t4, e4);
              }(i2, t3);
              var e3, r2, o2 = (e3 = i2, r2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (t4) {
                  return false;
                }
              }(), function() {
                var t4, n3 = fr(e3);
                if (r2) {
                  var o3 = fr(this).constructor;
                  t4 = Reflect.construct(n3, arguments, o3);
                } else
                  t4 = n3.apply(this, arguments);
                return cr(this, t4);
              });
              function i2() {
                return dr(this, i2), o2.apply(this, arguments);
              }
              return vr(i2, [{ key: "_defaults", get: function() {
                return n2.defaults;
              } }, { key: "set", value: function(t4) {
                return sr(fr(i2.prototype), "set", this).call(this, t4), n2.fire("interactable:set", { options: t4, interactable: this }), this;
              } }, { key: "unset", value: function() {
                sr(fr(i2.prototype), "unset", this).call(this);
                var t4 = n2.interactables.list.indexOf(this);
                t4 < 0 || (sr(fr(i2.prototype), "unset", this).call(this), n2.interactables.list.splice(t4, 1), n2.fire("interactable:unset", { interactable: this }));
              } }]), i2;
            }(On.Interactable);
          }
          return vr(t2, [{ key: "addListeners", value: function(t3, e2) {
            this.listenerMaps.push({ id: e2, map: t3 });
          } }, { key: "fire", value: function(t3, e2) {
            for (var n2 = 0; n2 < this.listenerMaps.length; n2++) {
              var r2 = this.listenerMaps[n2].map[t3];
              if (r2 && false === r2(e2, this, t3))
                return false;
            }
          } }, { key: "init", value: function(t3) {
            return this.isInitialized ? this : yr(this, t3);
          } }, { key: "pluginIsInstalled", value: function(t3) {
            return this._plugins.map[t3.id] || -1 !== this._plugins.list.indexOf(t3);
          } }, { key: "usePlugin", value: function(t3, e2) {
            if (!this.isInitialized)
              return this;
            if (this.pluginIsInstalled(t3))
              return this;
            if (t3.id && (this._plugins.map[t3.id] = t3), this._plugins.list.push(t3), t3.install && t3.install(this, e2), t3.listeners && t3.before) {
              for (var n2 = 0, r2 = this.listenerMaps.length, o2 = t3.before.reduce(function(t4, e3) {
                return t4[e3] = true, t4[mr(e3)] = true, t4;
              }, {}); n2 < r2; n2++) {
                var i2 = this.listenerMaps[n2].id;
                if (o2[i2] || o2[mr(i2)])
                  break;
              }
              this.listenerMaps.splice(n2, 0, { id: t3.id, map: t3.listeners });
            } else
              t3.listeners && this.listenerMaps.push({ id: t3.id, map: t3.listeners });
            return this;
          } }, { key: "addDocument", value: function(t3, n2) {
            if (-1 !== this.getDocIndex(t3))
              return false;
            var r2 = e.getWindow(t3);
            n2 = n2 ? (0, M.default)({}, n2) : {}, this.documents.push({ doc: t3, options: n2 }), this.events.documents.push(t3), t3 !== this.document && this.events.add(r2, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: t3, window: r2, scope: this, options: n2 });
          } }, { key: "removeDocument", value: function(t3) {
            var n2 = this.getDocIndex(t3), r2 = e.getWindow(t3), o2 = this.documents[n2].options;
            this.events.remove(r2, "unload", this.onWindowUnload), this.documents.splice(n2, 1), this.events.documents.splice(n2, 1), this.fire("scope:remove-document", { doc: t3, window: r2, scope: this, options: o2 });
          } }, { key: "getDocIndex", value: function(t3) {
            for (var e2 = 0; e2 < this.documents.length; e2++)
              if (this.documents[e2].doc === t3)
                return e2;
            return -1;
          } }, { key: "getDocOptions", value: function(t3) {
            var e2 = this.getDocIndex(t3);
            return -1 === e2 ? null : this.documents[e2].options;
          } }, { key: "now", value: function() {
            return (this.window.Date || Date).now();
          } }]), t2;
        }();
        function yr(t2, n2) {
          return t2.isInitialized = true, i.default.window(n2) && e.init(n2), h.default.init(n2), b.default.init(n2), Tt.default.init(n2), t2.window = n2, t2.document = n2.document, t2.usePlugin(Vn.default), t2.usePlugin(Dn.default), t2;
        }
        function mr(t2) {
          return t2 && t2.replace(/\/.*$/, "");
        }
        ir.Scope = gr;
        var br = {};
        Object.defineProperty(br, "__esModule", { value: true }), br.default = void 0;
        var xr = new ir.Scope(), wr = xr.interactStatic;
        br.default = wr;
        var _r = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0;
        xr.init(_r);
        var Pr = {};
        Object.defineProperty(Pr, "__esModule", { value: true }), Pr.default = void 0, Pr.default = function() {
        };
        var Or = {};
        Object.defineProperty(Or, "__esModule", { value: true }), Or.default = void 0, Or.default = function() {
        };
        var Er = {};
        function Sr(t2, e2) {
          return function(t3) {
            if (Array.isArray(t3))
              return t3;
          }(t2) || function(t3, e3) {
            var n2 = null == t3 ? null : "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
            if (null != n2) {
              var r2, o2, i2 = [], a2 = true, s2 = false;
              try {
                for (n2 = n2.call(t3); !(a2 = (r2 = n2.next()).done) && (i2.push(r2.value), !e3 || i2.length !== e3); a2 = true)
                  ;
              } catch (t4) {
                s2 = true, o2 = t4;
              } finally {
                try {
                  a2 || null == n2.return || n2.return();
                } finally {
                  if (s2)
                    throw o2;
                }
              }
              return i2;
            }
          }(t2, e2) || function(t3, e3) {
            if (t3) {
              if ("string" == typeof t3)
                return Tr(t3, e3);
              var n2 = Object.prototype.toString.call(t3).slice(8, -1);
              return "Object" === n2 && t3.constructor && (n2 = t3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(t3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Tr(t3, e3) : void 0;
            }
          }(t2, e2) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function Tr(t2, e2) {
          (null == e2 || e2 > t2.length) && (e2 = t2.length);
          for (var n2 = 0, r2 = Array(e2); n2 < e2; n2++)
            r2[n2] = t2[n2];
          return r2;
        }
        Object.defineProperty(Er, "__esModule", { value: true }), Er.default = void 0, Er.default = function(t2) {
          var e2 = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(e3) {
            var n3 = Sr(e3, 2), r2 = n3[0], o2 = n3[1];
            return r2 in t2 || o2 in t2;
          }), n2 = function(n3, r2) {
            for (var o2 = t2.range, i2 = t2.limits, a2 = void 0 === i2 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : i2, s2 = t2.offset, l2 = void 0 === s2 ? { x: 0, y: 0 } : s2, u2 = { range: o2, grid: t2, x: null, y: null }, c2 = 0; c2 < e2.length; c2++) {
              var f2 = Sr(e2[c2], 2), d2 = f2[0], p2 = f2[1], v2 = Math.round((n3 - l2.x) / t2[d2]), h2 = Math.round((r2 - l2.y) / t2[p2]);
              u2[d2] = Math.max(a2.left, Math.min(a2.right, v2 * t2[d2] + l2.x)), u2[p2] = Math.max(a2.top, Math.min(a2.bottom, h2 * t2[p2] + l2.y));
            }
            return u2;
          };
          return n2.grid = t2, n2.coordFields = e2, n2;
        };
        var jr = {};
        Object.defineProperty(jr, "__esModule", { value: true }), Object.defineProperty(jr, "edgeTarget", { enumerable: true, get: function() {
          return Pr.default;
        } }), Object.defineProperty(jr, "elements", { enumerable: true, get: function() {
          return Or.default;
        } }), Object.defineProperty(jr, "grid", { enumerable: true, get: function() {
          return Er.default;
        } });
        var Mr = {};
        Object.defineProperty(Mr, "__esModule", { value: true }), Mr.default = void 0;
        var kr = { id: "snappers", install: function(t2) {
          var e2 = t2.interactStatic;
          e2.snappers = (0, M.default)(e2.snappers || {}, jr), e2.createSnapGrid = e2.snappers.grid;
        } }, Ir = kr;
        Mr.default = Ir;
        var Dr = {};
        function Ar(t2, e2) {
          var n2 = Object.keys(t2);
          if (Object.getOwnPropertySymbols) {
            var r2 = Object.getOwnPropertySymbols(t2);
            e2 && (r2 = r2.filter(function(e3) {
              return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
            })), n2.push.apply(n2, r2);
          }
          return n2;
        }
        function zr(t2) {
          for (var e2 = 1; e2 < arguments.length; e2++) {
            var n2 = null != arguments[e2] ? arguments[e2] : {};
            e2 % 2 ? Ar(Object(n2), true).forEach(function(e3) {
              Cr(t2, e3, n2[e3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(n2)) : Ar(Object(n2)).forEach(function(e3) {
              Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(n2, e3));
            });
          }
          return t2;
        }
        function Cr(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        Object.defineProperty(Dr, "__esModule", { value: true }), Dr.default = Dr.aspectRatio = void 0;
        var Rr = { start: function(t2) {
          var e2 = t2.state, n2 = t2.rect, r2 = t2.edges, o2 = t2.pageCoords, i2 = e2.options.ratio, a2 = e2.options, s2 = a2.equalDelta, l2 = a2.modifiers;
          "preserve" === i2 && (i2 = n2.width / n2.height), e2.startCoords = (0, M.default)({}, o2), e2.startRect = (0, M.default)({}, n2), e2.ratio = i2, e2.equalDelta = s2;
          var u2 = e2.linkedEdges = { top: r2.top || r2.left && !r2.bottom, left: r2.left || r2.top && !r2.right, bottom: r2.bottom || r2.right && !r2.top, right: r2.right || r2.bottom && !r2.left };
          if (e2.xIsPrimaryAxis = !(!r2.left && !r2.right), e2.equalDelta) {
            var c2 = (u2.left ? 1 : -1) * (u2.top ? 1 : -1);
            e2.edgeSign = { x: c2, y: c2 };
          } else
            e2.edgeSign = { x: u2.left ? -1 : 1, y: u2.top ? -1 : 1 };
          if ((0, M.default)(t2.edges, u2), l2 && l2.length) {
            var f2 = new me.default(t2.interaction);
            f2.copyFrom(t2.interaction.modification), f2.prepareStates(l2), e2.subModification = f2, f2.startAll(zr({}, t2));
          }
        }, set: function(t2) {
          var e2 = t2.state, n2 = t2.rect, r2 = t2.coords, o2 = (0, M.default)({}, r2), i2 = e2.equalDelta ? Fr : Xr;
          if (i2(e2, e2.xIsPrimaryAxis, r2, n2), !e2.subModification)
            return null;
          var a2 = (0, M.default)({}, n2);
          (0, k.addEdges)(e2.linkedEdges, a2, { x: r2.x - o2.x, y: r2.y - o2.y });
          var s2 = e2.subModification.setAll(zr(zr({}, t2), {}, { rect: a2, edges: e2.linkedEdges, pageCoords: r2, prevCoords: r2, prevRect: a2 })), l2 = s2.delta;
          return s2.changed && (i2(e2, Math.abs(l2.x) > Math.abs(l2.y), s2.coords, s2.rect), (0, M.default)(r2, s2.coords)), s2.eventProps;
        }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
        function Fr(t2, e2, n2) {
          var r2 = t2.startCoords, o2 = t2.edgeSign;
          e2 ? n2.y = r2.y + (n2.x - r2.x) * o2.y : n2.x = r2.x + (n2.y - r2.y) * o2.x;
        }
        function Xr(t2, e2, n2, r2) {
          var o2 = t2.startRect, i2 = t2.startCoords, a2 = t2.ratio, s2 = t2.edgeSign;
          if (e2) {
            var l2 = r2.width / a2;
            n2.y = i2.y + (l2 - o2.height) * s2.y;
          } else {
            var u2 = r2.height * a2;
            n2.x = i2.x + (u2 - o2.width) * s2.x;
          }
        }
        Dr.aspectRatio = Rr;
        var Br = (0, Se.makeModifier)(Rr, "aspectRatio");
        Dr.default = Br;
        var Yr = {};
        Object.defineProperty(Yr, "__esModule", { value: true }), Yr.default = void 0;
        var Wr = function() {
        };
        Wr._defaults = {};
        var Lr = Wr;
        Yr.default = Lr;
        var Ur = {};
        Object.defineProperty(Ur, "__esModule", { value: true }), Object.defineProperty(Ur, "default", { enumerable: true, get: function() {
          return Yr.default;
        } });
        var Vr = {};
        function Nr(t2, e2, n2) {
          return i.default.func(t2) ? k.resolveRectLike(t2, e2.interactable, e2.element, [n2.x, n2.y, e2]) : k.resolveRectLike(t2, e2.interactable, e2.element);
        }
        Object.defineProperty(Vr, "__esModule", { value: true }), Vr.default = void 0, Vr.getRestrictionRect = Nr, Vr.restrict = void 0;
        var qr = { start: function(t2) {
          var e2 = t2.rect, n2 = t2.startOffset, r2 = t2.state, o2 = t2.interaction, i2 = t2.pageCoords, a2 = r2.options, s2 = a2.elementRect, l2 = (0, M.default)({ left: 0, top: 0, right: 0, bottom: 0 }, a2.offset || {});
          if (e2 && s2) {
            var u2 = Nr(a2.restriction, o2, i2);
            if (u2) {
              var c2 = u2.right - u2.left - e2.width, f2 = u2.bottom - u2.top - e2.height;
              c2 < 0 && (l2.left += c2, l2.right += c2), f2 < 0 && (l2.top += f2, l2.bottom += f2);
            }
            l2.left += n2.left - e2.width * s2.left, l2.top += n2.top - e2.height * s2.top, l2.right += n2.right - e2.width * (1 - s2.right), l2.bottom += n2.bottom - e2.height * (1 - s2.bottom);
          }
          r2.offset = l2;
        }, set: function(t2) {
          var e2 = t2.coords, n2 = t2.interaction, r2 = t2.state, o2 = r2.options, i2 = r2.offset, a2 = Nr(o2.restriction, n2, e2);
          if (a2) {
            var s2 = k.xywhToTlbr(a2);
            e2.x = Math.max(Math.min(s2.right - i2.right, e2.x), s2.left + i2.left), e2.y = Math.max(Math.min(s2.bottom - i2.bottom, e2.y), s2.top + i2.top);
          }
        }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
        Vr.restrict = qr;
        var Gr = (0, Se.makeModifier)(qr, "restrict");
        Vr.default = Gr;
        var $r = {};
        Object.defineProperty($r, "__esModule", { value: true }), $r.restrictEdges = $r.default = void 0;
        var Hr = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, Kr = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
        function Zr(t2, e2) {
          for (var n2 = ["top", "left", "bottom", "right"], r2 = 0; r2 < n2.length; r2++) {
            var o2 = n2[r2];
            o2 in t2 || (t2[o2] = e2[o2]);
          }
          return t2;
        }
        var Jr = { noInner: Hr, noOuter: Kr, start: function(t2) {
          var e2, n2 = t2.interaction, r2 = t2.startOffset, o2 = t2.state, i2 = o2.options;
          if (i2) {
            var a2 = (0, Vr.getRestrictionRect)(i2.offset, n2, n2.coords.start.page);
            e2 = k.rectToXY(a2);
          }
          e2 = e2 || { x: 0, y: 0 }, o2.offset = { top: e2.y + r2.top, left: e2.x + r2.left, bottom: e2.y - r2.bottom, right: e2.x - r2.right };
        }, set: function(t2) {
          var e2 = t2.coords, n2 = t2.edges, r2 = t2.interaction, o2 = t2.state, i2 = o2.offset, a2 = o2.options;
          if (n2) {
            var s2 = (0, M.default)({}, e2), l2 = (0, Vr.getRestrictionRect)(a2.inner, r2, s2) || {}, u2 = (0, Vr.getRestrictionRect)(a2.outer, r2, s2) || {};
            Zr(l2, Hr), Zr(u2, Kr), n2.top ? e2.y = Math.min(Math.max(u2.top + i2.top, s2.y), l2.top + i2.top) : n2.bottom && (e2.y = Math.max(Math.min(u2.bottom + i2.bottom, s2.y), l2.bottom + i2.bottom)), n2.left ? e2.x = Math.min(Math.max(u2.left + i2.left, s2.x), l2.left + i2.left) : n2.right && (e2.x = Math.max(Math.min(u2.right + i2.right, s2.x), l2.right + i2.right));
          }
        }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
        $r.restrictEdges = Jr;
        var Qr = (0, Se.makeModifier)(Jr, "restrictEdges");
        $r.default = Qr;
        var to = {};
        Object.defineProperty(to, "__esModule", { value: true }), to.restrictRect = to.default = void 0;
        var eo = (0, M.default)({ get elementRect() {
          return { top: 0, left: 0, bottom: 1, right: 1 };
        }, set elementRect(t2) {
        } }, Vr.restrict.defaults), no = { start: Vr.restrict.start, set: Vr.restrict.set, defaults: eo };
        to.restrictRect = no;
        var ro = (0, Se.makeModifier)(no, "restrictRect");
        to.default = ro;
        var oo = {};
        Object.defineProperty(oo, "__esModule", { value: true }), oo.restrictSize = oo.default = void 0;
        var io = { width: -1 / 0, height: -1 / 0 }, ao = { width: 1 / 0, height: 1 / 0 }, so = { start: function(t2) {
          return $r.restrictEdges.start(t2);
        }, set: function(t2) {
          var e2 = t2.interaction, n2 = t2.state, r2 = t2.rect, o2 = t2.edges, i2 = n2.options;
          if (o2) {
            var a2 = k.tlbrToXywh((0, Vr.getRestrictionRect)(i2.min, e2, t2.coords)) || io, s2 = k.tlbrToXywh((0, Vr.getRestrictionRect)(i2.max, e2, t2.coords)) || ao;
            n2.options = { endOnly: i2.endOnly, inner: (0, M.default)({}, $r.restrictEdges.noInner), outer: (0, M.default)({}, $r.restrictEdges.noOuter) }, o2.top ? (n2.options.inner.top = r2.bottom - a2.height, n2.options.outer.top = r2.bottom - s2.height) : o2.bottom && (n2.options.inner.bottom = r2.top + a2.height, n2.options.outer.bottom = r2.top + s2.height), o2.left ? (n2.options.inner.left = r2.right - a2.width, n2.options.outer.left = r2.right - s2.width) : o2.right && (n2.options.inner.right = r2.left + a2.width, n2.options.outer.right = r2.left + s2.width), $r.restrictEdges.set(t2), n2.options = i2;
          }
        }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
        oo.restrictSize = so;
        var lo = (0, Se.makeModifier)(so, "restrictSize");
        oo.default = lo;
        var uo = {};
        Object.defineProperty(uo, "__esModule", { value: true }), Object.defineProperty(uo, "default", { enumerable: true, get: function() {
          return Yr.default;
        } });
        var co = {};
        Object.defineProperty(co, "__esModule", { value: true }), co.snap = co.default = void 0;
        var fo = { start: function(t2) {
          var e2, n2 = t2.interaction, r2 = t2.interactable, o2 = t2.element, i2 = t2.rect, a2 = t2.state, s2 = t2.startOffset, l2 = a2.options, u2 = l2.offsetWithOrigin ? function(t3) {
            var e3 = t3.interaction.element;
            return (0, k.rectToXY)((0, k.resolveRectLike)(t3.state.options.origin, null, null, [e3])) || (0, A.default)(t3.interactable, e3, t3.interaction.prepared.name);
          }(t2) : { x: 0, y: 0 };
          if ("startCoords" === l2.offset)
            e2 = { x: n2.coords.start.page.x, y: n2.coords.start.page.y };
          else {
            var c2 = (0, k.resolveRectLike)(l2.offset, r2, o2, [n2]);
            (e2 = (0, k.rectToXY)(c2) || { x: 0, y: 0 }).x += u2.x, e2.y += u2.y;
          }
          var f2 = l2.relativePoints;
          a2.offsets = i2 && f2 && f2.length ? f2.map(function(t3, n3) {
            return { index: n3, relativePoint: t3, x: s2.left - i2.width * t3.x + e2.x, y: s2.top - i2.height * t3.y + e2.y };
          }) : [{ index: 0, relativePoint: null, x: e2.x, y: e2.y }];
        }, set: function(t2) {
          var e2 = t2.interaction, n2 = t2.coords, r2 = t2.state, o2 = r2.options, a2 = r2.offsets, s2 = (0, A.default)(e2.interactable, e2.element, e2.prepared.name), l2 = (0, M.default)({}, n2), u2 = [];
          o2.offsetWithOrigin || (l2.x -= s2.x, l2.y -= s2.y);
          for (var c2 = 0; c2 < a2.length; c2++)
            for (var f2 = a2[c2], d2 = l2.x - f2.x, p2 = l2.y - f2.y, v2 = 0, h2 = o2.targets.length; v2 < h2; v2++) {
              var g2, y2 = o2.targets[v2];
              (g2 = i.default.func(y2) ? y2(d2, p2, e2._proxy, f2, v2) : y2) && u2.push({ x: (i.default.number(g2.x) ? g2.x : d2) + f2.x, y: (i.default.number(g2.y) ? g2.y : p2) + f2.y, range: i.default.number(g2.range) ? g2.range : o2.range, source: y2, index: v2, offset: f2 });
            }
          for (var m2 = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, b2 = 0; b2 < u2.length; b2++) {
            var x2 = u2[b2], w2 = x2.range, _2 = x2.x - l2.x, P2 = x2.y - l2.y, O2 = (0, R.default)(_2, P2), E2 = O2 <= w2;
            w2 === 1 / 0 && m2.inRange && m2.range !== 1 / 0 && (E2 = false), m2.target && !(E2 ? m2.inRange && w2 !== 1 / 0 ? O2 / w2 < m2.distance / m2.range : w2 === 1 / 0 && m2.range !== 1 / 0 || O2 < m2.distance : !m2.inRange && O2 < m2.distance) || (m2.target = x2, m2.distance = O2, m2.range = w2, m2.inRange = E2, m2.delta.x = _2, m2.delta.y = P2);
          }
          return m2.inRange && (n2.x = m2.target.x, n2.y = m2.target.y), r2.closest = m2, m2;
        }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
        co.snap = fo;
        var po = (0, Se.makeModifier)(fo, "snap");
        co.default = po;
        var vo = {};
        function ho(t2, e2) {
          (null == e2 || e2 > t2.length) && (e2 = t2.length);
          for (var n2 = 0, r2 = Array(e2); n2 < e2; n2++)
            r2[n2] = t2[n2];
          return r2;
        }
        Object.defineProperty(vo, "__esModule", { value: true }), vo.snapSize = vo.default = void 0;
        var go = { start: function(t2) {
          var e2 = t2.state, n2 = t2.edges, r2 = e2.options;
          if (!n2)
            return null;
          t2.state = { options: { targets: null, relativePoints: [{ x: n2.left ? 0 : 1, y: n2.top ? 0 : 1 }], offset: r2.offset || "self", origin: { x: 0, y: 0 }, range: r2.range } }, e2.targetFields = e2.targetFields || [["width", "height"], ["x", "y"]], co.snap.start(t2), e2.offsets = t2.state.offsets, t2.state = e2;
        }, set: function(t2) {
          var e2, n2, r2 = t2.interaction, o2 = t2.state, a2 = t2.coords, s2 = o2.options, l2 = o2.offsets, u2 = { x: a2.x - l2[0].x, y: a2.y - l2[0].y };
          o2.options = (0, M.default)({}, s2), o2.options.targets = [];
          for (var c2 = 0; c2 < (s2.targets || []).length; c2++) {
            var f2 = (s2.targets || [])[c2], d2 = void 0;
            if (d2 = i.default.func(f2) ? f2(u2.x, u2.y, r2) : f2) {
              for (var p2 = 0; p2 < o2.targetFields.length; p2++) {
                var v2 = (e2 = o2.targetFields[p2], n2 = 2, function(t3) {
                  if (Array.isArray(t3))
                    return t3;
                }(e2) || function(t3, e3) {
                  var n3 = null == t3 ? null : "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
                  if (null != n3) {
                    var r3, o3, i2 = [], a3 = true, s3 = false;
                    try {
                      for (n3 = n3.call(t3); !(a3 = (r3 = n3.next()).done) && (i2.push(r3.value), !e3 || i2.length !== e3); a3 = true)
                        ;
                    } catch (t4) {
                      s3 = true, o3 = t4;
                    } finally {
                      try {
                        a3 || null == n3.return || n3.return();
                      } finally {
                        if (s3)
                          throw o3;
                      }
                    }
                    return i2;
                  }
                }(e2, n2) || function(t3, e3) {
                  if (t3) {
                    if ("string" == typeof t3)
                      return ho(t3, e3);
                    var n3 = Object.prototype.toString.call(t3).slice(8, -1);
                    return "Object" === n3 && t3.constructor && (n3 = t3.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(t3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? ho(t3, e3) : void 0;
                  }
                }(e2, n2) || function() {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }()), h2 = v2[0], g2 = v2[1];
                if (h2 in d2 || g2 in d2) {
                  d2.x = d2[h2], d2.y = d2[g2];
                  break;
                }
              }
              o2.options.targets.push(d2);
            }
          }
          var y2 = co.snap.set(t2);
          return o2.options = s2, y2;
        }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
        vo.snapSize = go;
        var yo = (0, Se.makeModifier)(go, "snapSize");
        vo.default = yo;
        var mo = {};
        Object.defineProperty(mo, "__esModule", { value: true }), mo.snapEdges = mo.default = void 0;
        var bo = { start: function(t2) {
          var e2 = t2.edges;
          return e2 ? (t2.state.targetFields = t2.state.targetFields || [[e2.left ? "left" : "right", e2.top ? "top" : "bottom"]], vo.snapSize.start(t2)) : null;
        }, set: vo.snapSize.set, defaults: (0, M.default)((0, ye.default)(vo.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
        mo.snapEdges = bo;
        var xo = (0, Se.makeModifier)(bo, "snapEdges");
        mo.default = xo;
        var wo = {};
        Object.defineProperty(wo, "__esModule", { value: true }), Object.defineProperty(wo, "default", { enumerable: true, get: function() {
          return Yr.default;
        } });
        var _o = {};
        Object.defineProperty(_o, "__esModule", { value: true }), Object.defineProperty(_o, "default", { enumerable: true, get: function() {
          return Yr.default;
        } });
        var Po = {};
        Object.defineProperty(Po, "__esModule", { value: true }), Po.default = void 0;
        var Oo = { aspectRatio: Dr.default, restrictEdges: $r.default, restrict: Vr.default, restrictRect: to.default, restrictSize: oo.default, snapEdges: mo.default, snap: co.default, snapSize: vo.default, spring: wo.default, avoid: Ur.default, transform: _o.default, rubberband: uo.default };
        Po.default = Oo;
        var Eo = {};
        Object.defineProperty(Eo, "__esModule", { value: true }), Eo.default = void 0;
        var So = { id: "modifiers", install: function(t2) {
          var e2 = t2.interactStatic;
          for (var n2 in t2.usePlugin(Se.default), t2.usePlugin(Mr.default), e2.modifiers = Po.default, Po.default) {
            var r2 = Po.default[n2], o2 = r2._defaults, i2 = r2._methods;
            o2._methods = i2, t2.defaults.perAction[n2] = o2;
          }
        } }, To = So;
        Eo.default = To;
        var jo = {};
        function Mo(t2) {
          return Mo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          }, Mo(t2);
        }
        function ko(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function Io(t2, e2) {
          return Io = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
            return t3.__proto__ = e3, t3;
          }, Io(t2, e2);
        }
        function Do(t2, e2) {
          if (e2 && ("object" === Mo(e2) || "function" == typeof e2))
            return e2;
          if (void 0 !== e2)
            throw new TypeError("Derived constructors may only return object or undefined");
          return Ao(t2);
        }
        function Ao(t2) {
          if (void 0 === t2)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t2;
        }
        function zo(t2) {
          return zo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
            return t3.__proto__ || Object.getPrototypeOf(t3);
          }, zo(t2);
        }
        Object.defineProperty(jo, "__esModule", { value: true }), jo.default = jo.PointerEvent = void 0;
        var Co = function(t2) {
          !function(t3, e3) {
            if ("function" != typeof e3 && null !== e3)
              throw new TypeError("Super expression must either be null or a function");
            t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, writable: true, configurable: true } }), Object.defineProperty(t3, "prototype", { writable: false }), e3 && Io(t3, e3);
          }(a2, t2);
          var e2, n2, r2, o2, i2 = (r2 = a2, o2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }(), function() {
            var t3, e3 = zo(r2);
            if (o2) {
              var n3 = zo(this).constructor;
              t3 = Reflect.construct(e3, arguments, n3);
            } else
              t3 = e3.apply(this, arguments);
            return Do(this, t3);
          });
          function a2(t3, e3, n3, r3, o3, s2) {
            var l2;
            if (function(t4, e4) {
              if (!(t4 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, a2), l2 = i2.call(this, o3), X.pointerExtend(Ao(l2), n3), n3 !== e3 && X.pointerExtend(Ao(l2), e3), l2.timeStamp = s2, l2.originalEvent = n3, l2.type = t3, l2.pointerId = X.getPointerId(e3), l2.pointerType = X.getPointerType(e3), l2.target = r3, l2.currentTarget = null, "tap" === t3) {
              var u2 = o3.getPointerIndex(e3);
              l2.dt = l2.timeStamp - o3.pointers[u2].downTime;
              var c2 = l2.timeStamp - o3.tapTime;
              l2.double = !!o3.prevTap && "doubletap" !== o3.prevTap.type && o3.prevTap.target === l2.target && c2 < 500;
            } else
              "doubletap" === t3 && (l2.dt = e3.timeStamp - o3.tapTime, l2.double = true);
            return l2;
          }
          return e2 = a2, (n2 = [{ key: "_subtractOrigin", value: function(t3) {
            var e3 = t3.x, n3 = t3.y;
            return this.pageX -= e3, this.pageY -= n3, this.clientX -= e3, this.clientY -= n3, this;
          } }, { key: "_addOrigin", value: function(t3) {
            var e3 = t3.x, n3 = t3.y;
            return this.pageX += e3, this.pageY += n3, this.clientX += e3, this.clientY += n3, this;
          } }, { key: "preventDefault", value: function() {
            this.originalEvent.preventDefault();
          } }]) && ko(e2.prototype, n2), Object.defineProperty(e2, "prototype", { writable: false }), a2;
        }(N.BaseEvent);
        jo.PointerEvent = jo.default = Co;
        var Ro = {};
        Object.defineProperty(Ro, "__esModule", { value: true }), Ro.default = void 0;
        var Fo = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(t2) {
          t2.pointerEvents = Fo, t2.defaults.actions.pointerEvents = Fo.defaults, (0, M.default)(t2.actions.phaselessTypes, Fo.types);
        }, listeners: { "interactions:new": function(t2) {
          var e2 = t2.interaction;
          e2.prevTap = null, e2.tapTime = 0;
        }, "interactions:update-pointer": function(t2) {
          var e2 = t2.down, n2 = t2.pointerInfo;
          !e2 && n2.hold || (n2.hold = { duration: 1 / 0, timeout: null });
        }, "interactions:move": function(t2, e2) {
          var n2 = t2.interaction, r2 = t2.pointer, o2 = t2.event, i2 = t2.eventTarget;
          t2.duplicate || n2.pointerIsDown && !n2.pointerWasMoved || (n2.pointerIsDown && Yo(t2), Xo({ interaction: n2, pointer: r2, event: o2, eventTarget: i2, type: "move" }, e2));
        }, "interactions:down": function(t2, e2) {
          !function(t3, e3) {
            for (var n2 = t3.interaction, r2 = t3.pointer, o2 = t3.event, i2 = t3.eventTarget, a2 = t3.pointerIndex, s2 = n2.pointers[a2].hold, l2 = _.getPath(i2), u2 = { interaction: n2, pointer: r2, event: o2, eventTarget: i2, type: "hold", targets: [], path: l2, node: null }, c2 = 0; c2 < l2.length; c2++) {
              var f2 = l2[c2];
              u2.node = f2, e3.fire("pointerEvents:collect-targets", u2);
            }
            if (u2.targets.length) {
              for (var d2 = 1 / 0, p2 = 0; p2 < u2.targets.length; p2++) {
                var v2 = u2.targets[p2].eventable.options.holdDuration;
                v2 < d2 && (d2 = v2);
              }
              s2.duration = d2, s2.timeout = setTimeout(function() {
                Xo({ interaction: n2, eventTarget: i2, pointer: r2, event: o2, type: "hold" }, e3);
              }, d2);
            }
          }(t2, e2), Xo(t2, e2);
        }, "interactions:up": function(t2, e2) {
          Yo(t2), Xo(t2, e2), function(t3, e3) {
            var n2 = t3.interaction, r2 = t3.pointer, o2 = t3.event, i2 = t3.eventTarget;
            n2.pointerWasMoved || Xo({ interaction: n2, eventTarget: i2, pointer: r2, event: o2, type: "tap" }, e3);
          }(t2, e2);
        }, "interactions:cancel": function(t2, e2) {
          Yo(t2), Xo(t2, e2);
        } }, PointerEvent: jo.PointerEvent, fire: Xo, collectEventTargets: Bo, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
        function Xo(t2, e2) {
          var n2 = t2.interaction, r2 = t2.pointer, o2 = t2.event, i2 = t2.eventTarget, a2 = t2.type, s2 = t2.targets, l2 = void 0 === s2 ? Bo(t2, e2) : s2, u2 = new jo.PointerEvent(a2, r2, o2, i2, n2, e2.now());
          e2.fire("pointerEvents:new", { pointerEvent: u2 });
          for (var c2 = { interaction: n2, pointer: r2, event: o2, eventTarget: i2, targets: l2, type: a2, pointerEvent: u2 }, f2 = 0; f2 < l2.length; f2++) {
            var d2 = l2[f2];
            for (var p2 in d2.props || {})
              u2[p2] = d2.props[p2];
            var v2 = (0, A.default)(d2.eventable, d2.node);
            if (u2._subtractOrigin(v2), u2.eventable = d2.eventable, u2.currentTarget = d2.node, d2.eventable.fire(u2), u2._addOrigin(v2), u2.immediatePropagationStopped || u2.propagationStopped && f2 + 1 < l2.length && l2[f2 + 1].node !== u2.currentTarget)
              break;
          }
          if (e2.fire("pointerEvents:fired", c2), "tap" === a2) {
            var h2 = u2.double ? Xo({ interaction: n2, pointer: r2, event: o2, eventTarget: i2, type: "doubletap" }, e2) : u2;
            n2.prevTap = h2, n2.tapTime = h2.timeStamp;
          }
          return u2;
        }
        function Bo(t2, e2) {
          var n2 = t2.interaction, r2 = t2.pointer, o2 = t2.event, i2 = t2.eventTarget, a2 = t2.type, s2 = n2.getPointerIndex(r2), l2 = n2.pointers[s2];
          if ("tap" === a2 && (n2.pointerWasMoved || !l2 || l2.downTarget !== i2))
            return [];
          for (var u2 = _.getPath(i2), c2 = { interaction: n2, pointer: r2, event: o2, eventTarget: i2, type: a2, path: u2, targets: [], node: null }, f2 = 0; f2 < u2.length; f2++) {
            var d2 = u2[f2];
            c2.node = d2, e2.fire("pointerEvents:collect-targets", c2);
          }
          return "hold" === a2 && (c2.targets = c2.targets.filter(function(t3) {
            var e3;
            return t3.eventable.options.holdDuration === (null == (e3 = n2.pointers[s2]) ? void 0 : e3.hold.duration);
          })), c2.targets;
        }
        function Yo(t2) {
          var e2 = t2.interaction, n2 = t2.pointerIndex, r2 = e2.pointers[n2].hold;
          r2 && r2.timeout && (clearTimeout(r2.timeout), r2.timeout = null);
        }
        var Wo = Fo;
        Ro.default = Wo;
        var Lo = {};
        function Uo(t2) {
          var e2 = t2.interaction;
          e2.holdIntervalHandle && (clearInterval(e2.holdIntervalHandle), e2.holdIntervalHandle = null);
        }
        Object.defineProperty(Lo, "__esModule", { value: true }), Lo.default = void 0;
        var Vo = { id: "pointer-events/holdRepeat", install: function(t2) {
          t2.usePlugin(Ro.default);
          var e2 = t2.pointerEvents;
          e2.defaults.holdRepeatInterval = 0, e2.types.holdrepeat = t2.actions.phaselessTypes.holdrepeat = true;
        }, listeners: ["move", "up", "cancel", "endall"].reduce(function(t2, e2) {
          return t2["pointerEvents:".concat(e2)] = Uo, t2;
        }, { "pointerEvents:new": function(t2) {
          var e2 = t2.pointerEvent;
          "hold" === e2.type && (e2.count = (e2.count || 0) + 1);
        }, "pointerEvents:fired": function(t2, e2) {
          var n2 = t2.interaction, r2 = t2.pointerEvent, o2 = t2.eventTarget, i2 = t2.targets;
          if ("hold" === r2.type && i2.length) {
            var a2 = i2[0].eventable.options.holdRepeatInterval;
            a2 <= 0 || (n2.holdIntervalHandle = setTimeout(function() {
              e2.pointerEvents.fire({ interaction: n2, eventTarget: o2, type: "hold", pointer: r2, event: r2 }, e2);
            }, a2));
          }
        } }) }, No = Vo;
        Lo.default = No;
        var qo = {};
        function Go(t2) {
          return (0, M.default)(this.events.options, t2), this;
        }
        Object.defineProperty(qo, "__esModule", { value: true }), qo.default = void 0;
        var $o = { id: "pointer-events/interactableTargets", install: function(t2) {
          var e2 = t2.Interactable;
          e2.prototype.pointerEvents = Go;
          var n2 = e2.prototype._backCompatOption;
          e2.prototype._backCompatOption = function(t3, e3) {
            var r2 = n2.call(this, t3, e3);
            return r2 === this && (this.events.options[t3] = e3), r2;
          };
        }, listeners: { "pointerEvents:collect-targets": function(t2, e2) {
          var n2 = t2.targets, r2 = t2.node, o2 = t2.type, i2 = t2.eventTarget;
          e2.interactables.forEachMatch(r2, function(t3) {
            var e3 = t3.events, a2 = e3.options;
            e3.types[o2] && e3.types[o2].length && t3.testIgnoreAllow(a2, r2, i2) && n2.push({ node: r2, eventable: e3, props: { interactable: t3 } });
          });
        }, "interactable:new": function(t2) {
          var e2 = t2.interactable;
          e2.events.getRect = function(t3) {
            return e2.getRect(t3);
          };
        }, "interactable:set": function(t2, e2) {
          var n2 = t2.interactable, r2 = t2.options;
          (0, M.default)(n2.events.options, e2.pointerEvents.defaults), (0, M.default)(n2.events.options, r2.pointerEvents || {});
        } } }, Ho = $o;
        qo.default = Ho;
        var Ko = {};
        Object.defineProperty(Ko, "__esModule", { value: true }), Ko.default = void 0;
        var Zo = { id: "pointer-events", install: function(t2) {
          t2.usePlugin(Ro), t2.usePlugin(Lo.default), t2.usePlugin(qo.default);
        } }, Jo = Zo;
        Ko.default = Jo;
        var Qo = {};
        function ti(t2) {
          var e2 = t2.Interactable;
          t2.actions.phases.reflow = true, e2.prototype.reflow = function(e3) {
            return function(t3, e4, n2) {
              for (var r2 = i.default.string(t3.target) ? H.from(t3._context.querySelectorAll(t3.target)) : [t3.target], o2 = n2.window.Promise, a2 = o2 ? [] : null, s2 = function() {
                var i2 = r2[l2], s3 = t3.getRect(i2);
                if (!s3)
                  return "break";
                var u2 = H.find(n2.interactions.list, function(n3) {
                  return n3.interacting() && n3.interactable === t3 && n3.element === i2 && n3.prepared.name === e4.name;
                }), c2 = void 0;
                if (u2)
                  u2.move(), a2 && (c2 = u2._reflowPromise || new o2(function(t4) {
                    u2._reflowResolve = t4;
                  }));
                else {
                  var f2 = (0, k.tlbrToXywh)(s3), d2 = { page: { x: f2.x, y: f2.y }, client: { x: f2.x, y: f2.y }, timeStamp: n2.now() }, p2 = X.coordsToEvent(d2);
                  c2 = function(t4, e5, n3, r3, o3) {
                    var i3 = t4.interactions.new({ pointerType: "reflow" }), a3 = { interaction: i3, event: o3, pointer: o3, eventTarget: n3, phase: "reflow" };
                    i3.interactable = e5, i3.element = n3, i3.prevEvent = o3, i3.updatePointer(o3, o3, n3, true), X.setZeroCoords(i3.coords.delta), (0, Xt.copyAction)(i3.prepared, r3), i3._doPhase(a3);
                    var s4 = t4.window.Promise, l3 = s4 ? new s4(function(t5) {
                      i3._reflowResolve = t5;
                    }) : void 0;
                    return i3._reflowPromise = l3, i3.start(r3, e5, n3), i3._interacting ? (i3.move(a3), i3.end(o3)) : (i3.stop(), i3._reflowResolve()), i3.removePointer(o3, o3), l3;
                  }(n2, t3, i2, e4, p2);
                }
                a2 && a2.push(c2);
              }, l2 = 0; l2 < r2.length && "break" !== s2(); l2++)
                ;
              return a2 && o2.all(a2).then(function() {
                return t3;
              });
            }(this, e3, t2);
          };
        }
        Object.defineProperty(Qo, "__esModule", { value: true }), Qo.default = void 0, Qo.install = ti;
        var ei = { id: "reflow", install: ti, listeners: { "interactions:stop": function(t2, e2) {
          var n2 = t2.interaction;
          "reflow" === n2.pointerType && (n2._reflowResolve && n2._reflowResolve(), H.remove(e2.interactions.list, n2));
        } } }, ni = ei;
        Qo.default = ni;
        var ri = { exports: {} };
        function oi(t2) {
          return oi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          }, oi(t2);
        }
        Object.defineProperty(ri.exports, "__esModule", { value: true }), ri.exports.default = void 0, br.default.use(le.default), br.default.use(Qe.default), br.default.use(Ko.default), br.default.use(ln.default), br.default.use(Eo.default), br.default.use(ae.default), br.default.use(Et.default), br.default.use(Dt.default), br.default.use(Qo.default);
        var ii = br.default;
        if (ri.exports.default = ii, "object" === oi(ri) && ri)
          try {
            ri.exports = br.default;
          } catch (t2) {
          }
        br.default.default = br.default, Et.default, Dt.default, ae.default, le.default, he.default, ln.default, br.default, Eo.default, Qe.default, Ko.default, Qo.default, ri = ri.exports;
        var ai = { exports: {} };
        function si(t2) {
          return si = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          }, si(t2);
        }
        Object.defineProperty(ai.exports, "__esModule", { value: true }), ai.exports.default = void 0;
        var li = ri.default;
        if (ai.exports.default = li, "object" === si(ai) && ai)
          try {
            ai.exports = ri.default;
          } catch (t2) {
          }
        return ri.default.default = ri.default, ai.exports;
      });
    }
  });

  // js/util/nifi/parse.js
  function DecodeBinary(binary) {
    return JSON.parse(decodeURIComponent(escape(window.atob(String.fromCharCode.apply(null, binary)))));
  }
  function JsonToBinary(json) {
    return new TextEncoder().encode(JSON.stringify(json));
  }

  // js/business/ws_receive.js
  var import_interactjs = __toESM(require_interact_min());
  var data = { token: "\uD55C\uAE00\uC785\uB2C8\uB2E4.", type: "subscribe", topic: "nifi" };
  document.addEventListener("DOMContentLoaded", async () => {
    const nifiSocket = new WebSocket(`wss://${window.location.hostname}/nws/aiPoint`);
    nifiSocket.binaryType = "arraybuffer";
    nifiSocket.onopen = () => {
      setTimeout(() => {
        nifiSocket.send(JsonToBinary(data));
      }, 1e3);
      console.log("nifi \uC5F0\uACB0 \uC131\uACF5");
    };
    nifiSocket.onmessage = (event) => {
      console.log(event.data);
      console.log(DecodeBinary(event.data));
    };
    nifiSocket.onerror = (error) => {
      console.log(error);
    };
    nifiSocket.onclose = () => {
      console.log("nifi \uC5F0\uACB0 \uC885\uB8CC");
    };
    drawPolygon(document.getElementById("canvas"));
    var element = document.getElementById("grid-snap");
    var element2 = document.getElementById("grid-snap2");
    test(element);
  });
  function test(element) {
    var x = 0;
    var y = 0;
    (0, import_interactjs.default)(element).draggable({
      x: 364,
      y: 300,
      modifiers: [
        import_interactjs.default.modifiers.snap({
          targets: [import_interactjs.default.snappers.grid({ x: 20, y: 20 })],
          range: Infinity,
          relativePoints: [{ x: 0, y: 0 }]
        }),
        import_interactjs.default.modifiers.restrict({
          restriction: element.parentNode,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
          endOnly: true
        })
      ],
      inertia: true
    }).on("dragmove", function(event) {
      x += event.dx;
      y += event.dy;
      console.log(x, y);
      event.target.style.transform = "translate(" + x + "px, " + y + "px)";
    });
  }
  function drawPolygon(canvas, callback) {
    let points = [];
    let apiPoints = [];
    let isDraw = true;
    let ctx = canvas.getContext("2d");
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    canvas.addEventListener("click", function(e) {
      if (isDraw) {
        let x = e.offsetX;
        let y = e.offsetY;
        const x1 = parseInt(x * 7.8);
        const y1 = parseInt(y * 10.4);
        apiPoints.push({ x: x1, y: y1 });
        points.push({ x, y });
        if (points.length > 1) {
          ctx.beginPath();
          ctx.moveTo(points[points.length - 2].x, points[points.length - 2].y);
          ctx.lineTo(x, y);
          ctx.stroke();
        }
        if (points.length > 2) {
          let x12 = points[0].x;
          let y12 = points[0].y;
          let x2 = points[points.length - 1].x;
          let y2 = points[points.length - 1].y;
          let distance = Math.sqrt(Math.pow(x12 - x2, 2) + Math.pow(y12 - y2, 2));
          if (distance < 20) {
            ctx.beginPath();
            ctx.moveTo(x12, y12);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            isDraw = false;
            apiPoints.push({ x: x12, y: y12 });
            getPolygonInfo(canvas);
            console.log(apiPoints);
          }
        }
      }
    });
  }
  function getPolygonInfo(canvas) {
    let ctx = canvas.getContext("2d");
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data2 = imageData.data;
    console.log(data2);
  }
})();
//# sourceMappingURL=ws_receive.js.map
