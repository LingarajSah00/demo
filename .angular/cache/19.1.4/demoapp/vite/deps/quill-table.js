import {
  init_quill,
  quill_exports
} from "./chunk-ZY2PN2AJ.js";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-S35DAJRX.js";

// node_modules/quill-table/dist/quill-table.js
var require_quill_table = __commonJS({
  "node_modules/quill-table/dist/quill-table.js"(exports, module) {
    !function t(e, n) {
      "object" == typeof exports && "object" == typeof module ? module.exports = n((init_quill(), __toCommonJS(quill_exports))) : "function" == typeof define && define.amd ? define(["quill"], n) : "object" == typeof exports ? exports.quillTable = n((init_quill(), __toCommonJS(quill_exports))) : e.quillTable = n(e.quill);
    }(exports, function(t) {
      return function(t2) {
        function e(r) {
          if (n[r]) return n[r].exports;
          var o = n[r] = {
            i: r,
            l: false,
            exports: {}
          };
          return t2[r].call(o.exports, o, o.exports, e), o.l = true, o.exports;
        }
        var n = {};
        return e.m = t2, e.c = n, e.d = function(t3, n2, r) {
          e.o(t3, n2) || Object.defineProperty(t3, n2, {
            configurable: false,
            enumerable: true,
            get: r
          });
        }, e.n = function(t3) {
          var n2 = t3 && t3.__esModule ? function e2() {
            return t3.default;
          } : function e2() {
            return t3;
          };
          return e.d(n2, "a", n2), n2;
        }, e.o = function(t3, e2) {
          return Object.prototype.hasOwnProperty.call(t3, e2);
        }, e.p = "", e(e.s = 57);
      }([function(t2, e) {
        var n = t2.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n);
      }, function(t2, e) {
        var n = t2.exports = {
          version: "2.5.1"
        };
        "number" == typeof __e && (__e = n);
      }, function(t2, e, n) {
        var r = n(0), o = n(1), i = n(42), a = n(9), u = "prototype", l = function(t3, e2, n2) {
          var c = t3 & l.F, s = t3 & l.G, f = t3 & l.S, p = t3 & l.P, d = t3 & l.B, h = t3 & l.W, b = s ? o : o[e2] || (o[e2] = {}), v = b[u], g = s ? r : f ? r[e2] : (r[e2] || {})[u], y, m, _;
          s && (n2 = e2);
          for (y in n2) (m = !c && g && void 0 !== g[y]) && y in b || (_ = m ? g[y] : n2[y], b[y] = s && "function" != typeof g[y] ? n2[y] : d && m ? i(_, r) : h && g[y] == _ ? function(t4) {
            var e3 = function(e4, n3, r2) {
              if (this instanceof t4) {
                switch (arguments.length) {
                  case 0:
                    return new t4();
                  case 1:
                    return new t4(e4);
                  case 2:
                    return new t4(e4, n3);
                }
                return new t4(e4, n3, r2);
              }
              return t4.apply(this, arguments);
            };
            return e3[u] = t4[u], e3;
          }(_) : p && "function" == typeof _ ? i(Function.call, _) : _, p && ((b.virtual || (b.virtual = {}))[y] = _, t3 & l.R && v && !v[y] && a(v, y, _)));
        };
        l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, t2.exports = l;
      }, function(t2, e, n) {
        var r = n(12), o = n(43), i = n(23), a = Object.defineProperty;
        e.f = n(4) ? Object.defineProperty : function t3(e2, n2, u) {
          if (r(e2), n2 = i(n2, true), r(u), o) try {
            return a(e2, n2, u);
          } catch (t4) {
          }
          if ("get" in u || "set" in u) throw TypeError("Accessors not supported!");
          return "value" in u && (e2[n2] = u.value), e2;
        };
      }, function(t2, e, n) {
        t2.exports = !n(10)(function() {
          return 7 != Object.defineProperty({}, "a", {
            get: function() {
              return 7;
            }
          }).a;
        });
      }, function(t2, e) {
        var n = {}.hasOwnProperty;
        t2.exports = function(t3, e2) {
          return n.call(t3, e2);
        };
      }, function(t2, e, n) {
        var r = n(75), o = n(17);
        t2.exports = function(t3) {
          return r(o(t3));
        };
      }, function(t2, e, n) {
        "use strict";
        e.__esModule = true, e.default = function(t3, e2) {
          if (!(t3 instanceof e2)) throw new TypeError("Cannot call a class as a function");
        };
      }, function(e, n) {
        e.exports = t;
      }, function(t2, e, n) {
        var r = n(3), o = n(16);
        t2.exports = n(4) ? function(t3, e2, n2) {
          return r.f(t3, e2, o(1, n2));
        } : function(t3, e2, n2) {
          return t3[e2] = n2, t3;
        };
      }, function(t2, e) {
        t2.exports = function(t3) {
          try {
            return !!t3();
          } catch (t4) {
            return true;
          }
        };
      }, function(t2, e, n) {
        var r = n(25)("wks"), o = n(18), i = n(0).Symbol, a = "function" == typeof i;
        (t2.exports = function(t3) {
          return r[t3] || (r[t3] = a && i[t3] || (a ? i : o)("Symbol." + t3));
        }).store = r;
      }, function(t2, e, n) {
        var r = n(13);
        t2.exports = function(t3) {
          if (!r(t3)) throw TypeError(t3 + " is not an object!");
          return t3;
        };
      }, function(t2, e) {
        t2.exports = function(t3) {
          return "object" == typeof t3 ? null !== t3 : "function" == typeof t3;
        };
      }, function(t2, e, n) {
        t2.exports = {
          default: n(67),
          __esModule: true
        };
      }, function(t2, e, n) {
        "use strict";
        function r(t3) {
          return t3 && t3.__esModule ? t3 : {
            default: t3
          };
        }
        e.__esModule = true;
        var o = n(41), i = r(o);
        e.default = /* @__PURE__ */ function() {
          function t3(t4, e2) {
            for (var n2 = 0; n2 < e2.length; n2++) {
              var r2 = e2[n2];
              r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), (0, i.default)(t4, r2.key, r2);
            }
          }
          return function(e2, n2, r2) {
            return n2 && t3(e2.prototype, n2), r2 && t3(e2, r2), e2;
          };
        }();
      }, function(t2, e) {
        t2.exports = function(t3, e2) {
          return {
            enumerable: !(1 & t3),
            configurable: !(2 & t3),
            writable: !(4 & t3),
            value: e2
          };
        };
      }, function(t2, e) {
        t2.exports = function(t3) {
          if (void 0 == t3) throw TypeError("Can't call method on  " + t3);
          return t3;
        };
      }, function(t2, e) {
        var n = 0, r = Math.random();
        t2.exports = function(t3) {
          return "Symbol(".concat(void 0 === t3 ? "" : t3, ")_", (++n + r).toString(36));
        };
      }, function(t2, e, n) {
        "use strict";
        function r(t3) {
          return t3 && t3.__esModule ? t3 : {
            default: t3
          };
        }
        e.__esModule = true;
        var o = n(48), i = r(o);
        e.default = function(t3, e2) {
          if (!t3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e2 || "object" !== (void 0 === e2 ? "undefined" : (0, i.default)(e2)) && "function" != typeof e2 ? t3 : e2;
        };
      }, function(t2, e, n) {
        "use strict";
        function r(t3) {
          return t3 && t3.__esModule ? t3 : {
            default: t3
          };
        }
        e.__esModule = true;
        var o = n(14), i = r(o), a = n(94), u = r(a);
        e.default = function t3(e2, n2, r2) {
          null === e2 && (e2 = Function.prototype);
          var o2 = (0, u.default)(e2, n2);
          if (void 0 === o2) {
            var a2 = (0, i.default)(e2);
            return null === a2 ? void 0 : t3(a2, n2, r2);
          }
          if ("value" in o2) return o2.value;
          var l = o2.get;
          if (void 0 !== l) return l.call(r2);
        };
      }, function(t2, e, n) {
        "use strict";
        function r(t3) {
          return t3 && t3.__esModule ? t3 : {
            default: t3
          };
        }
        e.__esModule = true;
        var o = n(97), i = r(o), a = n(101), u = r(a), l = n(48), c = r(l);
        e.default = function(t3, e2) {
          if ("function" != typeof e2 && null !== e2) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e2 ? "undefined" : (0, c.default)(e2)));
          t3.prototype = (0, u.default)(e2 && e2.prototype, {
            constructor: {
              value: t3,
              enumerable: false,
              writable: true,
              configurable: true
            }
          }), e2 && (i.default ? (0, i.default)(t3, e2) : t3.__proto__ = e2);
        };
      }, function(t2, e, n) {
        "use strict";
        function r(t3) {
          return t3 && t3.__esModule ? t3 : {
            default: t3
          };
        }
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        var o = n(14), i = r(o), a = n(7), u = r(a), l = n(15), c = r(l), s = n(19), f = r(s), p = n(20), d = r(p), h = n(21), b = r(h), v = n(8), g = r(v), y = g.default.import("blots/container"), m = g.default.import("blots/block"), _ = g.default.import("blots/block/embed"), x = g.default.import("parchment"), A = function(t3) {
          function e2() {
            return (0, u.default)(this, e2), (0, f.default)(this, (e2.__proto__ || (0, i.default)(e2)).apply(this, arguments));
          }
          return (0, b.default)(e2, t3), (0, c.default)(e2, [{
            key: "formats",
            value: function t4(e3) {
              return e3 ? e3.tagName : this.domNode.tagName;
            }
          }], [{
            key: "create",
            value: function t4(n2) {
              return (0, d.default)(e2.__proto__ || (0, i.default)(e2), "create", this).call(this, n2);
            }
          }]), e2;
        }(y);
        A.blotName = "contain", A.tagName = "contain", A.scope = x.Scope.BLOCK_BLOT, A.defaultChild = "block", A.allowedChildren = [m, _, y], e.default = A;
      }, function(t2, e, n) {
        var r = n(13);
        t2.exports = function(t3, e2) {
          if (!r(t3)) return t3;
          var n2, o;
          if (e2 && "function" == typeof (n2 = t3.toString) && !r(o = n2.call(t3))) return o;
          if ("function" == typeof (n2 = t3.valueOf) && !r(o = n2.call(t3))) return o;
          if (!e2 && "function" == typeof (n2 = t3.toString) && !r(o = n2.call(t3))) return o;
          throw TypeError("Can't convert object to primitive value");
        };
      }, function(t2, e, n) {
        var r = n(25)("keys"), o = n(18);
        t2.exports = function(t3) {
          return r[t3] || (r[t3] = o(t3));
        };
      }, function(t2, e, n) {
        var r = n(0), o = "__core-js_shared__", i = r[o] || (r[o] = {});
        t2.exports = function(t3) {
          return i[t3] || (i[t3] = {});
        };
      }, function(t2, e) {
        var n = Math.ceil, r = Math.floor;
        t2.exports = function(t3) {
          return isNaN(t3 = +t3) ? 0 : (t3 > 0 ? r : n)(t3);
        };
      }, function(t2, e) {
        t2.exports = true;
      }, function(t2, e) {
        t2.exports = {};
      }, function(t2, e, n) {
        var r = n(12), o = n(74), i = n(31), a = n(24)("IE_PROTO"), u = function() {
        }, l = "prototype", c = function() {
          var t3 = n(44)("iframe"), e2 = i.length, r2 = "<", o2 = ">", a2;
          for (t3.style.display = "none", n(79).appendChild(t3), t3.src = "javascript:", a2 = t3.contentWindow.document, a2.open(), a2.write("<script>document.F=Object<\/script>"), a2.close(), c = a2.F; e2--; ) delete c[l][i[e2]];
          return c();
        };
        t2.exports = Object.create || function t3(e2, n2) {
          var i2;
          return null !== e2 ? (u[l] = r(e2), i2 = new u(), u[l] = null, i2[a] = e2) : i2 = c(), void 0 === n2 ? i2 : o(i2, n2);
        };
      }, function(t2, e, n) {
        var r = n(51), o = n(31);
        t2.exports = Object.keys || function t3(e2) {
          return r(e2, o);
        };
      }, function(t2, e) {
        t2.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
      }, function(t2, e, n) {
        var r = n(3).f, o = n(5), i = n(11)("toStringTag");
        t2.exports = function(t3, e2, n2) {
          t3 && !o(t3 = n2 ? t3 : t3.prototype, i) && r(t3, i, {
            configurable: true,
            value: e2
          });
        };
      }, function(t2, e, n) {
        e.f = n(11);
      }, function(t2, e, n) {
        var r = n(0), o = n(1), i = n(27), a = n(33), u = n(3).f;
        t2.exports = function(t3) {
          var e2 = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
          "_" == t3.charAt(0) || t3 in e2 || u(e2, t3, {
            value: a.f(t3)
          });
        };
      }, function(t2, e) {
        e.f = {}.propertyIsEnumerable;
      }, function(t2, e, n) {
        var r = n(35), o = n(16), i = n(6), a = n(23), u = n(5), l = n(43), c = Object.getOwnPropertyDescriptor;
        e.f = n(4) ? c : function t3(e2, n2) {
          if (e2 = i(e2), n2 = a(n2, true), l) try {
            return c(e2, n2);
          } catch (t4) {
          }
          if (u(e2, n2)) return o(!r.f.call(e2, n2), e2[n2]);
        };
      }, function(t2, e, n) {
        "use strict";
        function r(t3) {
          return t3 && t3.__esModule ? t3 : {
            default: t3
          };
        }
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        var o = n(104), i = r(o), a = n(7), u = r(a), l = n(15), c = r(l), s = n(8), f = r(s), p = f.default.import("parchment"), d = f.default.import("blots/container"), h = f.default.import("blots/scroll"), b = function() {
          function t3() {
            (0, u.default)(this, t3);
          }
          return (0, c.default)(t3, null, [{
            key: "random_id",
            value: function t4() {
              return Math.random().toString(36).slice(2);
            }
          }, {
            key: "find_td",
            value: function t4(e2) {
              for (var n2 = e2.getLeaf(e2.getSelection().index), r2 = n2[0]; null != r2 && "td" != r2.statics.blotName; ) r2 = r2.parent;
              return r2;
            }
          }, {
            key: "table_handler",
            value: function e2(n2, r2) {
              if (n2.includes("newtable_")) {
                for (var o2 = null, a2 = n2.split("_"), u2 = (0, i.default)(a2[1]), l2 = (0, i.default)(a2[2]), c2 = t3.random_id(), s2 = p.create("table", c2), f2 = 0; f2 < u2; f2++) {
                  var b2 = t3.random_id(), v = p.create("tr", b2);
                  s2.appendChild(v);
                  for (var g = 0; g < l2; g++) {
                    n2 = c2 + "|" + b2 + "|" + t3.random_id();
                    var y = p.create("td", n2);
                    v.appendChild(y);
                    var m = p.create("block");
                    y.appendChild(m);
                    var _ = p.create("break");
                    m.appendChild(_), o2 = m;
                  }
                }
                for (var x = r2.getLeaf(r2.getSelection().index), A = x[0], w = null; null != A && !(A instanceof d || A instanceof h); ) w = A, A = A.parent;
                return A.insertBefore(s2, w), o2;
              }
              if ("append-col" === n2) {
                var k = t3.find_td(r2);
                if (k) {
                  var O = k.parent.parent, j = O.domNode.getAttribute("table_id");
                  O.children.forEach(function(e3) {
                    var n3 = e3.domNode.getAttribute("row_id"), r3 = t3.random_id(), o3 = p.create("td", j + "|" + n3 + "|" + r3);
                    e3.appendChild(o3);
                  });
                }
              } else {
                if ("append-row" !== n2) {
                  for (var S = t3.random_id(), q = p.create("table", S), C = r2.getLeaf(r2.getSelection().index), N = C[0], M = null; null != N && !(N instanceof d || N instanceof h); ) M = N, N = N.parent;
                  return N.insertBefore(q, M), q;
                }
                var E = t3.find_td(r2);
                if (E) {
                  var L = E.parent.children.length, T = E.parent.parent, P = E.parent.clone(), B = T.domNode.getAttribute("table_id"), R = t3.random_id();
                  P.domNode.setAttribute("row_id", R);
                  for (var D = L - 1; D >= 0; D--) {
                    var U = t3.random_id(), I = p.create("td", B + "|" + R + "|" + U);
                    P.appendChild(I);
                    var F = p.create("block");
                    I.appendChild(F);
                    var G = p.create("break");
                    F.appendChild(G);
                  }
                  T.appendChild(P), console.log(P);
                }
              }
            }
          }]), t3;
        }();
        e.default = b;
      }, function(t2, e, n) {
        function r(t3) {
          return null === t3 || void 0 === t3;
        }
        function o(t3) {
          return !(!t3 || "object" != typeof t3 || "number" != typeof t3.length) && "function" == typeof t3.copy && "function" == typeof t3.slice && !(t3.length > 0 && "number" != typeof t3[0]);
        }
        function i(t3, e2, n2) {
          var i2, s;
          if (r(t3) || r(e2)) return false;
          if (t3.prototype !== e2.prototype) return false;
          if (l(t3)) return !!l(e2) && (t3 = a.call(t3), e2 = a.call(e2), c(t3, e2, n2));
          if (o(t3)) {
            if (!o(e2)) return false;
            if (t3.length !== e2.length) return false;
            for (i2 = 0; i2 < t3.length; i2++) if (t3[i2] !== e2[i2]) return false;
            return true;
          }
          try {
            var f = u(t3), p = u(e2);
          } catch (t4) {
            return false;
          }
          if (f.length != p.length) return false;
          for (f.sort(), p.sort(), i2 = f.length - 1; i2 >= 0; i2--) if (f[i2] != p[i2]) return false;
          for (i2 = f.length - 1; i2 >= 0; i2--) if (s = f[i2], !c(t3[s], e2[s], n2)) return false;
          return typeof t3 == typeof e2;
        }
        var a = Array.prototype.slice, u = n(60), l = n(61), c = t2.exports = function(t3, e2, n2) {
          return n2 || (n2 = {}), t3 === e2 || (t3 instanceof Date && e2 instanceof Date ? t3.getTime() === e2.getTime() : !t3 || !e2 || "object" != typeof t3 && "object" != typeof e2 ? n2.strict ? t3 === e2 : t3 == e2 : i(t3, e2, n2));
        };
      }, function(t2, e, n) {
        "use strict";
        var r = Object.prototype.hasOwnProperty, o = Object.prototype.toString, i = function t3(e2) {
          return "function" == typeof Array.isArray ? Array.isArray(e2) : "[object Array]" === o.call(e2);
        }, a = function t3(e2) {
          if (!e2 || "[object Object]" !== o.call(e2)) return false;
          var n2 = r.call(e2, "constructor"), i2 = e2.constructor && e2.constructor.prototype && r.call(e2.constructor.prototype, "isPrototypeOf");
          if (e2.constructor && !n2 && !i2) return false;
          var a2;
          for (a2 in e2) ;
          return void 0 === a2 || r.call(e2, a2);
        };
        t2.exports = function t3() {
          var e2, n2, r2, o2, u, l, c = arguments[0], s = 1, f = arguments.length, p = false;
          for ("boolean" == typeof c && (p = c, c = arguments[1] || {}, s = 2), (null == c || "object" != typeof c && "function" != typeof c) && (c = {}); s < f; ++s) if (null != (e2 = arguments[s])) for (n2 in e2) r2 = c[n2], o2 = e2[n2], c !== o2 && (p && o2 && (a(o2) || (u = i(o2))) ? (u ? (u = false, l = r2 && i(r2) ? r2 : []) : l = r2 && a(r2) ? r2 : {}, c[n2] = t3(p, l, o2)) : void 0 !== o2 && (c[n2] = o2));
          return c;
        };
      }, function(t2, e, n) {
        "use strict";
        function r(t3) {
          return t3 && t3.__esModule ? t3 : {
            default: t3
          };
        }
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        var o = n(63), i = r(o), a = n(14), u = r(a), l = n(7), c = r(l), s = n(15), f = r(s), p = n(19), d = r(p), h = n(20), b = r(h), v = n(21), g = r(v), y = n(8), m = r(y), _ = n(22), x = r(_), A = m.default.import("blots/container"), w = m.default.import("blots/block"), k = m.default.import("blots/block/embed"), O = m.default.import("parchment"), j = function(t3) {
          function e2() {
            return (0, c.default)(this, e2), (0, d.default)(this, (e2.__proto__ || (0, u.default)(e2)).apply(this, arguments));
          }
          return (0, g.default)(e2, t3), (0, f.default)(e2, [{
            key: "format",
            value: function t4() {
              this.getAttribute("id");
            }
          }, {
            key: "formats",
            value: function t4() {
              return (0, i.default)({}, this.statics.blotName, this.domNode.getAttribute("table_id") + "|" + this.domNode.getAttribute("row_id") + "|" + this.domNode.getAttribute("cell_id"));
            }
          }, {
            key: "optimize",
            value: function t4(n2) {
              (0, b.default)(e2.prototype.__proto__ || (0, u.default)(e2.prototype), "optimize", this).call(this, n2);
              var r2 = this.parent;
              if (null != r2) {
                if ("td" === r2.statics.blotName) return this.moveChildren(r2, this), void this.remove();
                if ("tr" != r2.statics.blotName) {
                  var o2 = O.create("block");
                  this.parent.insertBefore(o2, this.next);
                  var i2 = O.create("table", this.domNode.getAttribute("table_id")), a2 = O.create("tr", this.domNode.getAttribute("row_id"));
                  i2.appendChild(a2), a2.appendChild(this), i2.replace(o2);
                }
              }
              var l2 = this.next;
              null != l2 && l2.prev === this && l2.statics.blotName === this.statics.blotName && l2.domNode.tagName === this.domNode.tagName && l2.domNode.getAttribute("cell_id") === this.domNode.getAttribute("cell_id") && (l2.moveChildren(this), l2.remove());
            }
          }, {
            key: "insertBefore",
            value: function t4(n2, r2) {
              if (null != this.statics.allowedChildren && !this.statics.allowedChildren.some(function(t5) {
                return n2 instanceof t5;
              })) {
                var o2 = O.create(this.statics.defaultChild);
                o2.appendChild(n2), n2 = o2;
              }
              (0, b.default)(e2.prototype.__proto__ || (0, u.default)(e2.prototype), "insertBefore", this).call(this, n2, r2);
            }
          }, {
            key: "replace",
            value: function t4(n2) {
              if (n2.statics.blotName !== this.statics.blotName) {
                var r2 = O.create(this.statics.defaultChild);
                n2.moveChildren(r2), this.appendChild(r2);
              }
              null != n2.parent && (0, b.default)(e2.prototype.__proto__ || (0, u.default)(e2.prototype), "replace", this).call(this, n2);
            }
          }, {
            key: "moveChildren",
            value: function t4(e3, n2) {
              this.children.forEach(function(t5) {
                e3.insertBefore(t5, n2);
              });
            }
          }, {
            key: "column",
            value: function t4() {
              return this.parent.children.offset(this);
            }
          }], [{
            key: "create",
            value: function t4(n2) {
              var r2 = "td", o2 = (0, b.default)(e2.__proto__ || (0, u.default)(e2), "create", this).call(this, "td"), i2 = n2.split("|");
              return o2.setAttribute("table_id", i2[0]), o2.setAttribute("row_id", i2[1]), o2.setAttribute("cell_id", i2[2]), o2;
            }
          }]), e2;
        }(x.default);
        j.blotName = "td", j.tagName = "td", j.scope = O.Scope.BLOCK_BLOT, j.defaultChild = "block", j.allowedChildren = [w, k, A], e.default = j;
      }, function(t2, e, n) {
        t2.exports = {
          default: n(64),
          __esModule: true
        };
      }, function(t2, e, n) {
        var r = n(66);
        t2.exports = function(t3, e2, n2) {
          if (r(t3), void 0 === e2) return t3;
          switch (n2) {
            case 1:
              return function(n3) {
                return t3.call(e2, n3);
              };
            case 2:
              return function(n3, r2) {
                return t3.call(e2, n3, r2);
              };
            case 3:
              return function(n3, r2, o) {
                return t3.call(e2, n3, r2, o);
              };
          }
          return function() {
            return t3.apply(e2, arguments);
          };
        };
      }, function(t2, e, n) {
        t2.exports = !n(4) && !n(10)(function() {
          return 7 != Object.defineProperty(n(44)("div"), "a", {
            get: function() {
              return 7;
            }
          }).a;
        });
      }, function(t2, e, n) {
        var r = n(13), o = n(0).document, i = r(o) && r(o.createElement);
        t2.exports = function(t3) {
          return i ? o.createElement(t3) : {};
        };
      }, function(t2, e, n) {
        var r = n(17);
        t2.exports = function(t3) {
          return Object(r(t3));
        };
      }, function(t2, e, n) {
        var r = n(5), o = n(45), i = n(24)("IE_PROTO"), a = Object.prototype;
        t2.exports = Object.getPrototypeOf || function(t3) {
          return t3 = o(t3), r(t3, i) ? t3[i] : "function" == typeof t3.constructor && t3 instanceof t3.constructor ? t3.constructor.prototype : t3 instanceof Object ? a : null;
        };
      }, function(t2, e, n) {
        var r = n(2), o = n(1), i = n(10);
        t2.exports = function(t3, e2) {
          var n2 = (o.Object || {})[t3] || Object[t3], a = {};
          a[t3] = e2(n2), r(r.S + r.F * i(function() {
            n2(1);
          }), "Object", a);
        };
      }, function(t2, e, n) {
        "use strict";
        function r(t3) {
          return t3 && t3.__esModule ? t3 : {
            default: t3
          };
        }
        e.__esModule = true;
        var o = n(69), i = r(o), a = n(84), u = r(a), l = "function" == typeof u.default && "symbol" == typeof i.default ? function(t3) {
          return typeof t3;
        } : function(t3) {
          return t3 && "function" == typeof u.default && t3.constructor === u.default && t3 !== u.default.prototype ? "symbol" : typeof t3;
        };
        e.default = "function" == typeof u.default && "symbol" === l(i.default) ? function(t3) {
          return void 0 === t3 ? "undefined" : l(t3);
        } : function(t3) {
          return t3 && "function" == typeof u.default && t3.constructor === u.default && t3 !== u.default.prototype ? "symbol" : void 0 === t3 ? "undefined" : l(t3);
        };
      }, function(t2, e, n) {
        "use strict";
        var r = n(27), o = n(2), i = n(50), a = n(9), u = n(5), l = n(28), c = n(73), s = n(32), f = n(46), p = n(11)("iterator"), d = !([].keys && "next" in [].keys()), h = "keys", b = "values", v = function() {
          return this;
        };
        t2.exports = function(t3, e2, n2, g, y, m, _) {
          c(n2, e2, g);
          var x = function(t4) {
            if (!d && t4 in O) return O[t4];
            switch (t4) {
              case h:
                return function e3() {
                  return new n2(this, t4);
                };
              case b:
                return function e3() {
                  return new n2(this, t4);
                };
            }
            return function e3() {
              return new n2(this, t4);
            };
          }, A = e2 + " Iterator", w = y == b, k = false, O = t3.prototype, j = O[p] || O["@@iterator"] || y && O[y], S = j || x(y), q = y ? w ? x("entries") : S : void 0, C = "Array" == e2 ? O.entries || j : j, N, M, E;
          if (C && (E = f(C.call(new t3()))) !== Object.prototype && E.next && (s(E, A, true), r || u(E, p) || a(E, p, v)), w && j && j.name !== b && (k = true, S = function t4() {
            return j.call(this);
          }), r && !_ || !d && !k && O[p] || a(O, p, S), l[e2] = S, l[A] = v, y) if (N = {
            values: w ? S : x(b),
            keys: m ? S : x(h),
            entries: q
          }, _) for (M in N) M in O || i(O, M, N[M]);
          else o(o.P + o.F * (d || k), e2, N);
          return N;
        };
      }, function(t2, e, n) {
        t2.exports = n(9);
      }, function(t2, e, n) {
        var r = n(5), o = n(6), i = n(76)(false), a = n(24)("IE_PROTO");
        t2.exports = function(t3, e2) {
          var n2 = o(t3), u = 0, l = [], c;
          for (c in n2) c != a && r(n2, c) && l.push(c);
          for (; e2.length > u; ) r(n2, c = e2[u++]) && (~i(l, c) || l.push(c));
          return l;
        };
      }, function(t2, e) {
        var n = {}.toString;
        t2.exports = function(t3) {
          return n.call(t3).slice(8, -1);
        };
      }, function(t2, e) {
        e.f = Object.getOwnPropertySymbols;
      }, function(t2, e, n) {
        var r = n(51), o = n(31).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function t3(e2) {
          return r(e2, o);
        };
      }, function(t2, e, n) {
        "use strict";
        function r(t3) {
          return t3 && t3.__esModule ? t3 : {
            default: t3
          };
        }
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        var o = n(14), i = r(o), a = n(7), u = r(a), l = n(15), c = r(l), s = n(19), f = r(s), p = n(20), d = r(p), h = n(21), b = r(h), v = n(8), g = r(v), y = n(40), m = r(y), _ = n(22), x = r(_), A = n(37), w = r(A), k = g.default.import("blots/container"), O = g.default.import("parchment"), j = function(t3) {
          function e2() {
            return (0, u.default)(this, e2), (0, f.default)(this, (e2.__proto__ || (0, i.default)(e2)).apply(this, arguments));
          }
          return (0, b.default)(e2, t3), (0, c.default)(e2, [{
            key: "format",
            value: function t4() {
              this.getAttribute("row_id");
            }
          }, {
            key: "optimize",
            value: function t4(e3) {
              if (0 === this.children.length) if (null != this.statics.defaultChild) {
                var n2 = this.createDefaultChild();
                this.appendChild(n2), n2.optimize(e3);
              } else this.remove();
              var r2 = this.next;
              null != r2 && r2.prev === this && r2.statics.blotName === this.statics.blotName && r2.domNode.tagName === this.domNode.tagName && r2.domNode.getAttribute("row_id") === this.domNode.getAttribute("row_id") && (r2.moveChildren(this), r2.remove());
            }
          }, {
            key: "insertBefore",
            value: function t4(n2, r2) {
              if (null != this.statics.allowedChildren && !this.statics.allowedChildren.some(function(t5) {
                return n2 instanceof t5;
              })) {
                var o2 = this.createDefaultChild(r2);
                o2.appendChild(n2), n2 = o2;
              }
              (0, d.default)(e2.prototype.__proto__ || (0, i.default)(e2.prototype), "insertBefore", this).call(this, n2, r2);
            }
          }, {
            key: "replace",
            value: function t4(n2) {
              if (n2.statics.blotName !== this.statics.blotName) {
                var r2 = this.createDefaultChild();
                n2.moveChildren(r2, this), this.appendChild(r2);
              }
              (0, d.default)(e2.prototype.__proto__ || (0, i.default)(e2.prototype), "replace", this).call(this, n2);
            }
          }, {
            key: "createDefaultChild",
            value: function t4(e3) {
              var n2 = null;
              return n2 = e3 ? e3.domNode.getAttribute("table_id") : this.parent ? this.parent.domNode.getAttribute("table_id") : this.domNode.parent.getAttribute("table_id"), O.create(this.statics.defaultChild, [n2, this.domNode.getAttribute("row_id"), w.default.random_id()].join("|"));
            }
          }], [{
            key: "create",
            value: function t4(n2) {
              var r2 = "tr", o2 = (0, d.default)(e2.__proto__ || (0, i.default)(e2), "create", this).call(this, "tr");
              return o2.setAttribute("row_id", n2 || w.default.random_id()), o2;
            }
          }]), e2;
        }(x.default);
        j.blotName = "tr", j.tagName = "tr", j.scope = O.Scope.BLOCK_BLOT, j.defaultChild = "td", j.allowedChildren = [m.default], e.default = j;
      }, function(t2, e) {
        t2.exports = "	\n\v\f\r   ᠎             　\u2028\u2029\uFEFF";
      }, function(t2, e, n) {
        "use strict";
        function r(t3) {
          return t3 && t3.__esModule ? t3 : {
            default: t3
          };
        }
        var o = n(7), i = r(o), a = n(8), u = r(a), l = n(58), c = r(l), s = n(40), f = r(s), p = n(55), d = r(p), h = n(109), b = r(h), v = n(22), g = r(v);
        n(110);
        var y = n(37), m = r(y);
        u.default.import("blots/container").order = ["list", "contain", "td", "tr", "table"];
        var _ = function t3(e2, n2) {
          (0, i.default)(this, t3), e2.getModule("toolbar").addHandler("table", function(t4) {
            return m.default.table_handler(t4, e2);
          });
          var r2 = e2.getModule("clipboard");
          r2.addMatcher("TABLE", function(t4, e3) {
            return e3;
          }), r2.addMatcher("TR", function(t4, e3) {
            return e3;
          }), r2.addMatcher("TD", function(t4, e3) {
            return e3.compose(new c.default().retain(e3.length(), {
              td: t4.getAttribute("table_id") + "|" + t4.getAttribute("row_id") + "|" + t4.getAttribute("cell_id")
            }));
          });
        };
        t2.exports = {
          Table: b.default,
          TableRow: d.default,
          TableCell: f.default,
          Contain: g.default,
          TableModule: _
        };
      }, function(t2, e, n) {
        var r = n(59), o = n(38), i = n(39), a = n(62), u = String.fromCharCode(0), l = function(t3) {
          Array.isArray(t3) ? this.ops = t3 : null != t3 && Array.isArray(t3.ops) ? this.ops = t3.ops : this.ops = [];
        };
        l.prototype.insert = function(t3, e2) {
          var n2 = {};
          return 0 === t3.length ? this : (n2.insert = t3, null != e2 && "object" == typeof e2 && Object.keys(e2).length > 0 && (n2.attributes = e2), this.push(n2));
        }, l.prototype.delete = function(t3) {
          return t3 <= 0 ? this : this.push({
            delete: t3
          });
        }, l.prototype.retain = function(t3, e2) {
          if (t3 <= 0) return this;
          var n2 = {
            retain: t3
          };
          return null != e2 && "object" == typeof e2 && Object.keys(e2).length > 0 && (n2.attributes = e2), this.push(n2);
        }, l.prototype.push = function(t3) {
          var e2 = this.ops.length, n2 = this.ops[e2 - 1];
          if (t3 = i(true, {}, t3), "object" == typeof n2) {
            if ("number" == typeof t3.delete && "number" == typeof n2.delete) return this.ops[e2 - 1] = {
              delete: n2.delete + t3.delete
            }, this;
            if ("number" == typeof n2.delete && null != t3.insert && (e2 -= 1, "object" != typeof (n2 = this.ops[e2 - 1]))) return this.ops.unshift(t3), this;
            if (o(t3.attributes, n2.attributes)) {
              if ("string" == typeof t3.insert && "string" == typeof n2.insert) return this.ops[e2 - 1] = {
                insert: n2.insert + t3.insert
              }, "object" == typeof t3.attributes && (this.ops[e2 - 1].attributes = t3.attributes), this;
              if ("number" == typeof t3.retain && "number" == typeof n2.retain) return this.ops[e2 - 1] = {
                retain: n2.retain + t3.retain
              }, "object" == typeof t3.attributes && (this.ops[e2 - 1].attributes = t3.attributes), this;
            }
          }
          return e2 === this.ops.length ? this.ops.push(t3) : this.ops.splice(e2, 0, t3), this;
        }, l.prototype.chop = function() {
          var t3 = this.ops[this.ops.length - 1];
          return t3 && t3.retain && !t3.attributes && this.ops.pop(), this;
        }, l.prototype.filter = function(t3) {
          return this.ops.filter(t3);
        }, l.prototype.forEach = function(t3) {
          this.ops.forEach(t3);
        }, l.prototype.map = function(t3) {
          return this.ops.map(t3);
        }, l.prototype.partition = function(t3) {
          var e2 = [], n2 = [];
          return this.forEach(function(r2) {
            (t3(r2) ? e2 : n2).push(r2);
          }), [e2, n2];
        }, l.prototype.reduce = function(t3, e2) {
          return this.ops.reduce(t3, e2);
        }, l.prototype.changeLength = function() {
          return this.reduce(function(t3, e2) {
            return e2.insert ? t3 + a.length(e2) : e2.delete ? t3 - e2.delete : t3;
          }, 0);
        }, l.prototype.length = function() {
          return this.reduce(function(t3, e2) {
            return t3 + a.length(e2);
          }, 0);
        }, l.prototype.slice = function(t3, e2) {
          t3 = t3 || 0, "number" != typeof e2 && (e2 = 1 / 0);
          for (var n2 = [], r2 = a.iterator(this.ops), o2 = 0; o2 < e2 && r2.hasNext(); ) {
            var i2;
            o2 < t3 ? i2 = r2.next(t3 - o2) : (i2 = r2.next(e2 - o2), n2.push(i2)), o2 += a.length(i2);
          }
          return new l(n2);
        }, l.prototype.compose = function(t3) {
          for (var e2 = a.iterator(this.ops), n2 = a.iterator(t3.ops), r2 = new l(); e2.hasNext() || n2.hasNext(); ) if ("insert" === n2.peekType()) r2.push(n2.next());
          else if ("delete" === e2.peekType()) r2.push(e2.next());
          else {
            var o2 = Math.min(e2.peekLength(), n2.peekLength()), i2 = e2.next(o2), u2 = n2.next(o2);
            if ("number" == typeof u2.retain) {
              var c = {};
              "number" == typeof i2.retain ? c.retain = o2 : c.insert = i2.insert;
              var s = a.attributes.compose(i2.attributes, u2.attributes, "number" == typeof i2.retain);
              s && (c.attributes = s), r2.push(c);
            } else "number" == typeof u2.delete && "number" == typeof i2.retain && r2.push(u2);
          }
          return r2.chop();
        }, l.prototype.concat = function(t3) {
          var e2 = new l(this.ops.slice());
          return t3.ops.length > 0 && (e2.push(t3.ops[0]), e2.ops = e2.ops.concat(t3.ops.slice(1))), e2;
        }, l.prototype.diff = function(t3, e2) {
          if (this.ops === t3.ops) return new l();
          var n2 = [this, t3].map(function(e3) {
            return e3.map(function(n3) {
              if (null != n3.insert) return "string" == typeof n3.insert ? n3.insert : u;
              var r2 = e3 === t3 ? "on" : "with";
              throw new Error("diff() called " + r2 + " non-document");
            }).join("");
          }), i2 = new l(), c = r(n2[0], n2[1], e2), s = a.iterator(this.ops), f = a.iterator(t3.ops);
          return c.forEach(function(t4) {
            for (var e3 = t4[1].length; e3 > 0; ) {
              var n3 = 0;
              switch (t4[0]) {
                case r.INSERT:
                  n3 = Math.min(f.peekLength(), e3), i2.push(f.next(n3));
                  break;
                case r.DELETE:
                  n3 = Math.min(e3, s.peekLength()), s.next(n3), i2.delete(n3);
                  break;
                case r.EQUAL:
                  n3 = Math.min(s.peekLength(), f.peekLength(), e3);
                  var u2 = s.next(n3), l2 = f.next(n3);
                  o(u2.insert, l2.insert) ? i2.retain(n3, a.attributes.diff(u2.attributes, l2.attributes)) : i2.push(l2).delete(n3);
              }
              e3 -= n3;
            }
          }), i2.chop();
        }, l.prototype.eachLine = function(t3, e2) {
          e2 = e2 || "\n";
          for (var n2 = a.iterator(this.ops), r2 = new l(), o2 = 0; n2.hasNext(); ) {
            if ("insert" !== n2.peekType()) return;
            var i2 = n2.peek(), u2 = a.length(i2) - n2.peekLength(), c = "string" == typeof i2.insert ? i2.insert.indexOf(e2, u2) - u2 : -1;
            if (c < 0) r2.push(n2.next());
            else if (c > 0) r2.push(n2.next(c));
            else {
              if (false === t3(r2, n2.next(1).attributes || {}, o2)) return;
              o2 += 1, r2 = new l();
            }
          }
          r2.length() > 0 && t3(r2, {}, o2);
        }, l.prototype.transform = function(t3, e2) {
          if (e2 = !!e2, "number" == typeof t3) return this.transformPosition(t3, e2);
          for (var n2 = a.iterator(this.ops), r2 = a.iterator(t3.ops), o2 = new l(); n2.hasNext() || r2.hasNext(); ) if ("insert" !== n2.peekType() || !e2 && "insert" === r2.peekType()) {
            if ("insert" === r2.peekType()) o2.push(r2.next());
            else {
              var i2 = Math.min(n2.peekLength(), r2.peekLength()), u2 = n2.next(i2), c = r2.next(i2);
              if (u2.delete) continue;
              c.delete ? o2.push(c) : o2.retain(i2, a.attributes.transform(u2.attributes, c.attributes, e2));
            }
          } else o2.retain(a.length(n2.next()));
          return o2.chop();
        }, l.prototype.transformPosition = function(t3, e2) {
          e2 = !!e2;
          for (var n2 = a.iterator(this.ops), r2 = 0; n2.hasNext() && r2 <= t3; ) {
            var o2 = n2.peekLength(), i2 = n2.peekType();
            n2.next(), "delete" !== i2 ? ("insert" === i2 && (r2 < t3 || !e2) && (t3 += o2), r2 += o2) : t3 -= Math.min(o2, t3 - r2);
          }
          return t3;
        }, t2.exports = l;
      }, function(t2, e) {
        function n(t3, e2, n2) {
          if (t3 == e2) return t3 ? [[v, t3]] : [];
          (n2 < 0 || t3.length < n2) && (n2 = null);
          var o2 = a(t3, e2), i2 = t3.substring(0, o2);
          t3 = t3.substring(o2), e2 = e2.substring(o2), o2 = u(t3, e2);
          var l2 = t3.substring(t3.length - o2);
          t3 = t3.substring(0, t3.length - o2), e2 = e2.substring(0, e2.length - o2);
          var s2 = r(t3, e2);
          return i2 && s2.unshift([v, i2]), l2 && s2.push([v, l2]), c(s2), null != n2 && (s2 = f(s2, n2)), s2 = p(s2);
        }
        function r(t3, e2) {
          var r2;
          if (!t3) return [[b, e2]];
          if (!e2) return [[h, t3]];
          var i2 = t3.length > e2.length ? t3 : e2, a2 = t3.length > e2.length ? e2 : t3, u2 = i2.indexOf(a2);
          if (-1 != u2) return r2 = [[b, i2.substring(0, u2)], [v, a2], [b, i2.substring(u2 + a2.length)]], t3.length > e2.length && (r2[0][0] = r2[2][0] = h), r2;
          if (1 == a2.length) return [[h, t3], [b, e2]];
          var c2 = l(t3, e2);
          if (c2) {
            var s2 = c2[0], f2 = c2[1], p2 = c2[2], d2 = c2[3], g2 = c2[4], y = n(s2, p2), m = n(f2, d2);
            return y.concat([[v, g2]], m);
          }
          return o(t3, e2);
        }
        function o(t3, e2) {
          for (var n2 = t3.length, r2 = e2.length, o2 = Math.ceil((n2 + r2) / 2), a2 = o2, u2 = 2 * o2, l2 = new Array(u2), c2 = new Array(u2), s2 = 0; s2 < u2; s2++) l2[s2] = -1, c2[s2] = -1;
          l2[a2 + 1] = 0, c2[a2 + 1] = 0;
          for (var f2 = n2 - r2, p2 = f2 % 2 != 0, d2 = 0, v2 = 0, g2 = 0, y = 0, m = 0; m < o2; m++) {
            for (var _ = -m + d2; _ <= m - v2; _ += 2) {
              var x = a2 + _, A;
              A = _ == -m || _ != m && l2[x - 1] < l2[x + 1] ? l2[x + 1] : l2[x - 1] + 1;
              for (var w = A - _; A < n2 && w < r2 && t3.charAt(A) == e2.charAt(w); ) A++, w++;
              if (l2[x] = A, A > n2) v2 += 2;
              else if (w > r2) d2 += 2;
              else if (p2) {
                var k = a2 + f2 - _;
                if (k >= 0 && k < u2 && -1 != c2[k]) {
                  var O = n2 - c2[k];
                  if (A >= O) return i(t3, e2, A, w);
                }
              }
            }
            for (var j = -m + g2; j <= m - y; j += 2) {
              var k = a2 + j, O;
              O = j == -m || j != m && c2[k - 1] < c2[k + 1] ? c2[k + 1] : c2[k - 1] + 1;
              for (var S = O - j; O < n2 && S < r2 && t3.charAt(n2 - O - 1) == e2.charAt(r2 - S - 1); ) O++, S++;
              if (c2[k] = O, O > n2) y += 2;
              else if (S > r2) g2 += 2;
              else if (!p2) {
                var x = a2 + f2 - j;
                if (x >= 0 && x < u2 && -1 != l2[x]) {
                  var A = l2[x], w = a2 + A - x;
                  if (O = n2 - O, A >= O) return i(t3, e2, A, w);
                }
              }
            }
          }
          return [[h, t3], [b, e2]];
        }
        function i(t3, e2, r2, o2) {
          var i2 = t3.substring(0, r2), a2 = e2.substring(0, o2), u2 = t3.substring(r2), l2 = e2.substring(o2), c2 = n(i2, a2), s2 = n(u2, l2);
          return c2.concat(s2);
        }
        function a(t3, e2) {
          if (!t3 || !e2 || t3.charAt(0) != e2.charAt(0)) return 0;
          for (var n2 = 0, r2 = Math.min(t3.length, e2.length), o2 = r2, i2 = 0; n2 < o2; ) t3.substring(i2, o2) == e2.substring(i2, o2) ? (n2 = o2, i2 = n2) : r2 = o2, o2 = Math.floor((r2 - n2) / 2 + n2);
          return o2;
        }
        function u(t3, e2) {
          if (!t3 || !e2 || t3.charAt(t3.length - 1) != e2.charAt(e2.length - 1)) return 0;
          for (var n2 = 0, r2 = Math.min(t3.length, e2.length), o2 = r2, i2 = 0; n2 < o2; ) t3.substring(t3.length - o2, t3.length - i2) == e2.substring(e2.length - o2, e2.length - i2) ? (n2 = o2, i2 = n2) : r2 = o2, o2 = Math.floor((r2 - n2) / 2 + n2);
          return o2;
        }
        function l(t3, e2) {
          function n2(t4, e3, n3) {
            for (var r3 = t4.substring(n3, n3 + Math.floor(t4.length / 4)), o3 = -1, i3 = "", l3, c3, s3, f3; -1 != (o3 = e3.indexOf(r3, o3 + 1)); ) {
              var p3 = a(t4.substring(n3), e3.substring(o3)), d3 = u(t4.substring(0, n3), e3.substring(0, o3));
              i3.length < d3 + p3 && (i3 = e3.substring(o3 - d3, o3) + e3.substring(o3, o3 + p3), l3 = t4.substring(0, n3 - d3), c3 = t4.substring(n3 + p3), s3 = e3.substring(0, o3 - d3), f3 = e3.substring(o3 + p3));
            }
            return 2 * i3.length >= t4.length ? [l3, c3, s3, f3, i3] : null;
          }
          var r2 = t3.length > e2.length ? t3 : e2, o2 = t3.length > e2.length ? e2 : t3;
          if (r2.length < 4 || 2 * o2.length < r2.length) return null;
          var i2 = n2(r2, o2, Math.ceil(r2.length / 4)), l2 = n2(r2, o2, Math.ceil(r2.length / 2)), c2;
          if (!i2 && !l2) return null;
          c2 = l2 ? i2 && i2[4].length > l2[4].length ? i2 : l2 : i2;
          var s2, f2, p2, d2;
          return t3.length > e2.length ? (s2 = c2[0], f2 = c2[1], p2 = c2[2], d2 = c2[3]) : (p2 = c2[0], d2 = c2[1], s2 = c2[2], f2 = c2[3]), [s2, f2, p2, d2, c2[4]];
        }
        function c(t3) {
          t3.push([v, ""]);
          for (var e2 = 0, n2 = 0, r2 = 0, o2 = "", i2 = "", l2; e2 < t3.length; ) switch (t3[e2][0]) {
            case b:
              r2++, i2 += t3[e2][1], e2++;
              break;
            case h:
              n2++, o2 += t3[e2][1], e2++;
              break;
            case v:
              n2 + r2 > 1 ? (0 !== n2 && 0 !== r2 && (l2 = a(i2, o2), 0 !== l2 && (e2 - n2 - r2 > 0 && t3[e2 - n2 - r2 - 1][0] == v ? t3[e2 - n2 - r2 - 1][1] += i2.substring(0, l2) : (t3.splice(0, 0, [v, i2.substring(0, l2)]), e2++), i2 = i2.substring(l2), o2 = o2.substring(l2)), 0 !== (l2 = u(i2, o2)) && (t3[e2][1] = i2.substring(i2.length - l2) + t3[e2][1], i2 = i2.substring(0, i2.length - l2), o2 = o2.substring(0, o2.length - l2))), 0 === n2 ? t3.splice(e2 - r2, n2 + r2, [b, i2]) : 0 === r2 ? t3.splice(e2 - n2, n2 + r2, [h, o2]) : t3.splice(e2 - n2 - r2, n2 + r2, [h, o2], [b, i2]), e2 = e2 - n2 - r2 + (n2 ? 1 : 0) + (r2 ? 1 : 0) + 1) : 0 !== e2 && t3[e2 - 1][0] == v ? (t3[e2 - 1][1] += t3[e2][1], t3.splice(e2, 1)) : e2++, r2 = 0, n2 = 0, o2 = "", i2 = "";
          }
          "" === t3[t3.length - 1][1] && t3.pop();
          var s2 = false;
          for (e2 = 1; e2 < t3.length - 1; ) t3[e2 - 1][0] == v && t3[e2 + 1][0] == v && (t3[e2][1].substring(t3[e2][1].length - t3[e2 - 1][1].length) == t3[e2 - 1][1] ? (t3[e2][1] = t3[e2 - 1][1] + t3[e2][1].substring(0, t3[e2][1].length - t3[e2 - 1][1].length), t3[e2 + 1][1] = t3[e2 - 1][1] + t3[e2 + 1][1], t3.splice(e2 - 1, 1), s2 = true) : t3[e2][1].substring(0, t3[e2 + 1][1].length) == t3[e2 + 1][1] && (t3[e2 - 1][1] += t3[e2 + 1][1], t3[e2][1] = t3[e2][1].substring(t3[e2 + 1][1].length) + t3[e2 + 1][1], t3.splice(e2 + 1, 1), s2 = true)), e2++;
          s2 && c(t3);
        }
        function s(t3, e2) {
          if (0 === e2) return [v, t3];
          for (var n2 = 0, r2 = 0; r2 < t3.length; r2++) {
            var o2 = t3[r2];
            if (o2[0] === h || o2[0] === v) {
              var i2 = n2 + o2[1].length;
              if (e2 === i2) return [r2 + 1, t3];
              if (e2 < i2) {
                t3 = t3.slice();
                var a2 = e2 - n2, u2 = [o2[0], o2[1].slice(0, a2)], l2 = [o2[0], o2[1].slice(a2)];
                return t3.splice(r2, 1, u2, l2), [r2 + 1, t3];
              }
              n2 = i2;
            }
          }
          throw new Error("cursor_pos is out of bounds!");
        }
        function f(t3, e2) {
          var n2 = s(t3, e2), r2 = n2[1], o2 = n2[0], i2 = r2[o2], a2 = r2[o2 + 1];
          if (null == i2) return t3;
          if (i2[0] !== v) return t3;
          if (null != a2 && i2[1] + a2[1] === a2[1] + i2[1]) return r2.splice(o2, 2, a2, i2), d(r2, o2, 2);
          if (null != a2 && 0 === a2[1].indexOf(i2[1])) {
            r2.splice(o2, 2, [a2[0], i2[1]], [0, i2[1]]);
            var u2 = a2[1].slice(i2[1].length);
            return u2.length > 0 && r2.splice(o2 + 2, 0, [a2[0], u2]), d(r2, o2, 3);
          }
          return t3;
        }
        function p(t3) {
          for (var e2 = false, n2 = function(t4) {
            return t4.charCodeAt(0) >= 56320 && t4.charCodeAt(0) <= 57343;
          }, r2 = function(t4) {
            return t4.charCodeAt(t4.length - 1) >= 55296 && t4.charCodeAt(t4.length - 1) <= 56319;
          }, o2 = 2; o2 < t3.length; o2 += 1) t3[o2 - 2][0] === v && r2(t3[o2 - 2][1]) && t3[o2 - 1][0] === h && n2(t3[o2 - 1][1]) && t3[o2][0] === b && n2(t3[o2][1]) && (e2 = true, t3[o2 - 1][1] = t3[o2 - 2][1].slice(-1) + t3[o2 - 1][1], t3[o2][1] = t3[o2 - 2][1].slice(-1) + t3[o2][1], t3[o2 - 2][1] = t3[o2 - 2][1].slice(0, -1));
          if (!e2) return t3;
          for (var i2 = [], o2 = 0; o2 < t3.length; o2 += 1) t3[o2][1].length > 0 && i2.push(t3[o2]);
          return i2;
        }
        function d(t3, e2, n2) {
          for (var r2 = e2 + n2 - 1; r2 >= 0 && r2 >= e2 - 1; r2--) if (r2 + 1 < t3.length) {
            var o2 = t3[r2], i2 = t3[r2 + 1];
            o2[0] === i2[1] && t3.splice(r2, 2, [o2[0], o2[1] + i2[1]]);
          }
          return t3;
        }
        var h = -1, b = 1, v = 0, g = n;
        g.INSERT = b, g.DELETE = h, g.EQUAL = v, t2.exports = g;
      }, function(t2, e) {
        function n(t3) {
          var e2 = [];
          for (var n2 in t3) e2.push(n2);
          return e2;
        }
        e = t2.exports = "function" == typeof Object.keys ? Object.keys : n, e.shim = n;
      }, function(t2, e) {
        function n(t3) {
          return "[object Arguments]" == Object.prototype.toString.call(t3);
        }
        function r(t3) {
          return t3 && "object" == typeof t3 && "number" == typeof t3.length && Object.prototype.hasOwnProperty.call(t3, "callee") && !Object.prototype.propertyIsEnumerable.call(t3, "callee") || false;
        }
        var o = "[object Arguments]" == function() {
          return Object.prototype.toString.call(arguments);
        }();
        e = t2.exports = o ? n : r, e.supported = n, e.unsupported = r;
      }, function(t2, e, n) {
        function r(t3) {
          this.ops = t3, this.index = 0, this.offset = 0;
        }
        var o = n(38), i = n(39), a = {
          attributes: {
            compose: function(t3, e2, n2) {
              "object" != typeof t3 && (t3 = {}), "object" != typeof e2 && (e2 = {});
              var r2 = i(true, {}, e2);
              n2 || (r2 = Object.keys(r2).reduce(function(t4, e3) {
                return null != r2[e3] && (t4[e3] = r2[e3]), t4;
              }, {}));
              for (var o2 in t3) void 0 !== t3[o2] && void 0 === e2[o2] && (r2[o2] = t3[o2]);
              return Object.keys(r2).length > 0 ? r2 : void 0;
            },
            diff: function(t3, e2) {
              "object" != typeof t3 && (t3 = {}), "object" != typeof e2 && (e2 = {});
              var n2 = Object.keys(t3).concat(Object.keys(e2)).reduce(function(n3, r2) {
                return o(t3[r2], e2[r2]) || (n3[r2] = void 0 === e2[r2] ? null : e2[r2]), n3;
              }, {});
              return Object.keys(n2).length > 0 ? n2 : void 0;
            },
            transform: function(t3, e2, n2) {
              if ("object" != typeof t3) return e2;
              if ("object" == typeof e2) {
                if (!n2) return e2;
                var r2 = Object.keys(e2).reduce(function(n3, r3) {
                  return void 0 === t3[r3] && (n3[r3] = e2[r3]), n3;
                }, {});
                return Object.keys(r2).length > 0 ? r2 : void 0;
              }
            }
          },
          iterator: function(t3) {
            return new r(t3);
          },
          length: function(t3) {
            return "number" == typeof t3.delete ? t3.delete : "number" == typeof t3.retain ? t3.retain : "string" == typeof t3.insert ? t3.insert.length : 1;
          }
        };
        r.prototype.hasNext = function() {
          return this.peekLength() < 1 / 0;
        }, r.prototype.next = function(t3) {
          t3 || (t3 = 1 / 0);
          var e2 = this.ops[this.index];
          if (e2) {
            var n2 = this.offset, r2 = a.length(e2);
            if (t3 >= r2 - n2 ? (t3 = r2 - n2, this.index += 1, this.offset = 0) : this.offset += t3, "number" == typeof e2.delete) return {
              delete: t3
            };
            var o2 = {};
            return e2.attributes && (o2.attributes = e2.attributes), "number" == typeof e2.retain ? o2.retain = t3 : "string" == typeof e2.insert ? o2.insert = e2.insert.substr(n2, t3) : o2.insert = e2.insert, o2;
          }
          return {
            retain: 1 / 0
          };
        }, r.prototype.peek = function() {
          return this.ops[this.index];
        }, r.prototype.peekLength = function() {
          return this.ops[this.index] ? a.length(this.ops[this.index]) - this.offset : 1 / 0;
        }, r.prototype.peekType = function() {
          return this.ops[this.index] ? "number" == typeof this.ops[this.index].delete ? "delete" : "number" == typeof this.ops[this.index].retain ? "retain" : "insert" : "retain";
        }, t2.exports = a;
      }, function(t2, e, n) {
        "use strict";
        function r(t3) {
          return t3 && t3.__esModule ? t3 : {
            default: t3
          };
        }
        e.__esModule = true;
        var o = n(41), i = r(o);
        e.default = function(t3, e2, n2) {
          return e2 in t3 ? (0, i.default)(t3, e2, {
            value: n2,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t3[e2] = n2, t3;
        };
      }, function(t2, e, n) {
        n(65);
        var r = n(1).Object;
        t2.exports = function t3(e2, n2, o) {
          return r.defineProperty(e2, n2, o);
        };
      }, function(t2, e, n) {
        var r = n(2);
        r(r.S + r.F * !n(4), "Object", {
          defineProperty: n(3).f
        });
      }, function(t2, e) {
        t2.exports = function(t3) {
          if ("function" != typeof t3) throw TypeError(t3 + " is not a function!");
          return t3;
        };
      }, function(t2, e, n) {
        n(68), t2.exports = n(1).Object.getPrototypeOf;
      }, function(t2, e, n) {
        var r = n(45), o = n(46);
        n(47)("getPrototypeOf", function() {
          return function t3(e2) {
            return o(r(e2));
          };
        });
      }, function(t2, e, n) {
        t2.exports = {
          default: n(70),
          __esModule: true
        };
      }, function(t2, e, n) {
        n(71), n(80), t2.exports = n(33).f("iterator");
      }, function(t2, e, n) {
        "use strict";
        var r = n(72)(true);
        n(49)(String, "String", function(t3) {
          this._t = String(t3), this._i = 0;
        }, function() {
          var t3 = this._t, e2 = this._i, n2;
          return e2 >= t3.length ? {
            value: void 0,
            done: true
          } : (n2 = r(t3, e2), this._i += n2.length, {
            value: n2,
            done: false
          });
        });
      }, function(t2, e, n) {
        var r = n(26), o = n(17);
        t2.exports = function(t3) {
          return function(e2, n2) {
            var i = String(o(e2)), a = r(n2), u = i.length, l, c;
            return a < 0 || a >= u ? t3 ? "" : void 0 : (l = i.charCodeAt(a), l < 55296 || l > 56319 || a + 1 === u || (c = i.charCodeAt(a + 1)) < 56320 || c > 57343 ? t3 ? i.charAt(a) : l : t3 ? i.slice(a, a + 2) : c - 56320 + (l - 55296 << 10) + 65536);
          };
        };
      }, function(t2, e, n) {
        "use strict";
        var r = n(29), o = n(16), i = n(32), a = {};
        n(9)(a, n(11)("iterator"), function() {
          return this;
        }), t2.exports = function(t3, e2, n2) {
          t3.prototype = r(a, {
            next: o(1, n2)
          }), i(t3, e2 + " Iterator");
        };
      }, function(t2, e, n) {
        var r = n(3), o = n(12), i = n(30);
        t2.exports = n(4) ? Object.defineProperties : function t3(e2, n2) {
          o(e2);
          for (var a = i(n2), u = a.length, l = 0, c; u > l; ) r.f(e2, c = a[l++], n2[c]);
          return e2;
        };
      }, function(t2, e, n) {
        var r = n(52);
        t2.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t3) {
          return "String" == r(t3) ? t3.split("") : Object(t3);
        };
      }, function(t2, e, n) {
        var r = n(6), o = n(77), i = n(78);
        t2.exports = function(t3) {
          return function(e2, n2, a) {
            var u = r(e2), l = o(u.length), c = i(a, l), s;
            if (t3 && n2 != n2) {
              for (; l > c; ) if ((s = u[c++]) != s) return true;
            } else for (; l > c; c++) if ((t3 || c in u) && u[c] === n2) return t3 || c || 0;
            return !t3 && -1;
          };
        };
      }, function(t2, e, n) {
        var r = n(26), o = Math.min;
        t2.exports = function(t3) {
          return t3 > 0 ? o(r(t3), 9007199254740991) : 0;
        };
      }, function(t2, e, n) {
        var r = n(26), o = Math.max, i = Math.min;
        t2.exports = function(t3, e2) {
          return t3 = r(t3), t3 < 0 ? o(t3 + e2, 0) : i(t3, e2);
        };
      }, function(t2, e, n) {
        var r = n(0).document;
        t2.exports = r && r.documentElement;
      }, function(t2, e, n) {
        n(81);
        for (var r = n(0), o = n(9), i = n(28), a = n(11)("toStringTag"), u = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < u.length; l++) {
          var c = u[l], s = r[c], f = s && s.prototype;
          f && !f[a] && o(f, a, c), i[c] = i.Array;
        }
      }, function(t2, e, n) {
        "use strict";
        var r = n(82), o = n(83), i = n(28), a = n(6);
        t2.exports = n(49)(Array, "Array", function(t3, e2) {
          this._t = a(t3), this._i = 0, this._k = e2;
        }, function() {
          var t3 = this._t, e2 = this._k, n2 = this._i++;
          return !t3 || n2 >= t3.length ? (this._t = void 0, o(1)) : "keys" == e2 ? o(0, n2) : "values" == e2 ? o(0, t3[n2]) : o(0, [n2, t3[n2]]);
        }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries");
      }, function(t2, e) {
        t2.exports = function() {
        };
      }, function(t2, e) {
        t2.exports = function(t3, e2) {
          return {
            value: e2,
            done: !!t3
          };
        };
      }, function(t2, e, n) {
        t2.exports = {
          default: n(85),
          __esModule: true
        };
      }, function(t2, e, n) {
        n(86), n(91), n(92), n(93), t2.exports = n(1).Symbol;
      }, function(t2, e, n) {
        "use strict";
        var r = n(0), o = n(5), i = n(4), a = n(2), u = n(50), l = n(87).KEY, c = n(10), s = n(25), f = n(32), p = n(18), d = n(11), h = n(33), b = n(34), v = n(88), g = n(89), y = n(12), m = n(6), _ = n(23), x = n(16), A = n(29), w = n(90), k = n(36), O = n(3), j = n(30), S = k.f, q = O.f, C = w.f, N = r.Symbol, M = r.JSON, E = M && M.stringify, L = "prototype", T = d("_hidden"), P = d("toPrimitive"), B = {}.propertyIsEnumerable, R = s("symbol-registry"), D = s("symbols"), U = s("op-symbols"), I = Object[L], F = "function" == typeof N, G = r.QObject, Q = !G || !G[L] || !G[L].findChild, z = i && c(function() {
          return 7 != A(q({}, "a", {
            get: function() {
              return q(this, "a", {
                value: 7
              }).a;
            }
          })).a;
        }) ? function(t3, e2, n2) {
          var r2 = S(I, e2);
          r2 && delete I[e2], q(t3, e2, n2), r2 && t3 !== I && q(I, e2, r2);
        } : q, J = function(t3) {
          var e2 = D[t3] = A(N[L]);
          return e2._k = t3, e2;
        }, H = F && "symbol" == typeof N.iterator ? function(t3) {
          return "symbol" == typeof t3;
        } : function(t3) {
          return t3 instanceof N;
        }, V = function t3(e2, n2, r2) {
          return e2 === I && V(U, n2, r2), y(e2), n2 = _(n2, true), y(r2), o(D, n2) ? (r2.enumerable ? (o(e2, T) && e2[T][n2] && (e2[T][n2] = false), r2 = A(r2, {
            enumerable: x(0, false)
          })) : (o(e2, T) || q(e2, T, x(1, {})), e2[T][n2] = true), z(e2, n2, r2)) : q(e2, n2, r2);
        }, Y = function t3(e2, n2) {
          y(e2);
          for (var r2 = v(n2 = m(n2)), o2 = 0, i2 = r2.length, a2; i2 > o2; ) V(e2, a2 = r2[o2++], n2[a2]);
          return e2;
        }, K = function t3(e2, n2) {
          return void 0 === n2 ? A(e2) : Y(A(e2), n2);
        }, Z = function t3(e2) {
          var n2 = B.call(this, e2 = _(e2, true));
          return !(this === I && o(D, e2) && !o(U, e2)) && (!(n2 || !o(this, e2) || !o(D, e2) || o(this, T) && this[T][e2]) || n2);
        }, W = function t3(e2, n2) {
          if (e2 = m(e2), n2 = _(n2, true), e2 !== I || !o(D, n2) || o(U, n2)) {
            var r2 = S(e2, n2);
            return !r2 || !o(D, n2) || o(e2, T) && e2[T][n2] || (r2.enumerable = true), r2;
          }
        }, X = function t3(e2) {
          for (var n2 = C(m(e2)), r2 = [], i2 = 0, a2; n2.length > i2; ) o(D, a2 = n2[i2++]) || a2 == T || a2 == l || r2.push(a2);
          return r2;
        }, $ = function t3(e2) {
          for (var n2 = e2 === I, r2 = C(n2 ? U : m(e2)), i2 = [], a2 = 0, u2; r2.length > a2; ) !o(D, u2 = r2[a2++]) || n2 && !o(I, u2) || i2.push(D[u2]);
          return i2;
        };
        F || (N = function t3() {
          if (this instanceof N) throw TypeError("Symbol is not a constructor!");
          var e2 = p(arguments.length > 0 ? arguments[0] : void 0), n2 = function(t4) {
            this === I && n2.call(U, t4), o(this, T) && o(this[T], e2) && (this[T][e2] = false), z(this, e2, x(1, t4));
          };
          return i && Q && z(I, e2, {
            configurable: true,
            set: n2
          }), J(e2);
        }, u(N[L], "toString", function t3() {
          return this._k;
        }), k.f = W, O.f = V, n(54).f = w.f = X, n(35).f = Z, n(53).f = $, i && !n(27) && u(I, "propertyIsEnumerable", Z, true), h.f = function(t3) {
          return J(d(t3));
        }), a(a.G + a.W + a.F * !F, {
          Symbol: N
        });
        for (var tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), et = 0; tt.length > et; ) d(tt[et++]);
        for (var nt = j(d.store), rt = 0; nt.length > rt; ) b(nt[rt++]);
        a(a.S + a.F * !F, "Symbol", {
          for: function(t3) {
            return o(R, t3 += "") ? R[t3] : R[t3] = N(t3);
          },
          keyFor: function t3(e2) {
            if (!H(e2)) throw TypeError(e2 + " is not a symbol!");
            for (var n2 in R) if (R[n2] === e2) return n2;
          },
          useSetter: function() {
            Q = true;
          },
          useSimple: function() {
            Q = false;
          }
        }), a(a.S + a.F * !F, "Object", {
          create: K,
          defineProperty: V,
          defineProperties: Y,
          getOwnPropertyDescriptor: W,
          getOwnPropertyNames: X,
          getOwnPropertySymbols: $
        }), M && a(a.S + a.F * (!F || c(function() {
          var t3 = N();
          return "[null]" != E([t3]) || "{}" != E({
            a: t3
          }) || "{}" != E(Object(t3));
        })), "JSON", {
          stringify: function t3(e2) {
            if (void 0 !== e2 && !H(e2)) {
              for (var n2 = [e2], r2 = 1, o2, i2; arguments.length > r2; ) n2.push(arguments[r2++]);
              return o2 = n2[1], "function" == typeof o2 && (i2 = o2), !i2 && g(o2) || (o2 = function(t4, e3) {
                if (i2 && (e3 = i2.call(this, t4, e3)), !H(e3)) return e3;
              }), n2[1] = o2, E.apply(M, n2);
            }
          }
        }), N[L][P] || n(9)(N[L], P, N[L].valueOf), f(N, "Symbol"), f(Math, "Math", true), f(r.JSON, "JSON", true);
      }, function(t2, e, n) {
        var r = n(18)("meta"), o = n(13), i = n(5), a = n(3).f, u = 0, l = Object.isExtensible || function() {
          return true;
        }, c = !n(10)(function() {
          return l(Object.preventExtensions({}));
        }), s = function(t3) {
          a(t3, r, {
            value: {
              i: "O" + ++u,
              w: {}
            }
          });
        }, f = function(t3, e2) {
          if (!o(t3)) return "symbol" == typeof t3 ? t3 : ("string" == typeof t3 ? "S" : "P") + t3;
          if (!i(t3, r)) {
            if (!l(t3)) return "F";
            if (!e2) return "E";
            s(t3);
          }
          return t3[r].i;
        }, p = function(t3, e2) {
          if (!i(t3, r)) {
            if (!l(t3)) return true;
            if (!e2) return false;
            s(t3);
          }
          return t3[r].w;
        }, d = function(t3) {
          return c && h.NEED && l(t3) && !i(t3, r) && s(t3), t3;
        }, h = t2.exports = {
          KEY: r,
          NEED: false,
          fastKey: f,
          getWeak: p,
          onFreeze: d
        };
      }, function(t2, e, n) {
        var r = n(30), o = n(53), i = n(35);
        t2.exports = function(t3) {
          var e2 = r(t3), n2 = o.f;
          if (n2) for (var a = n2(t3), u = i.f, l = 0, c; a.length > l; ) u.call(t3, c = a[l++]) && e2.push(c);
          return e2;
        };
      }, function(t2, e, n) {
        var r = n(52);
        t2.exports = Array.isArray || function t3(e2) {
          return "Array" == r(e2);
        };
      }, function(t2, e, n) {
        var r = n(6), o = n(54).f, i = {}.toString, a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], u = function(t3) {
          try {
            return o(t3);
          } catch (t4) {
            return a.slice();
          }
        };
        t2.exports.f = function t3(e2) {
          return a && "[object Window]" == i.call(e2) ? u(e2) : o(r(e2));
        };
      }, function(t2, e) {
      }, function(t2, e, n) {
        n(34)("asyncIterator");
      }, function(t2, e, n) {
        n(34)("observable");
      }, function(t2, e, n) {
        t2.exports = {
          default: n(95),
          __esModule: true
        };
      }, function(t2, e, n) {
        n(96);
        var r = n(1).Object;
        t2.exports = function t3(e2, n2) {
          return r.getOwnPropertyDescriptor(e2, n2);
        };
      }, function(t2, e, n) {
        var r = n(6), o = n(36).f;
        n(47)("getOwnPropertyDescriptor", function() {
          return function t3(e2, n2) {
            return o(r(e2), n2);
          };
        });
      }, function(t2, e, n) {
        t2.exports = {
          default: n(98),
          __esModule: true
        };
      }, function(t2, e, n) {
        n(99), t2.exports = n(1).Object.setPrototypeOf;
      }, function(t2, e, n) {
        var r = n(2);
        r(r.S, "Object", {
          setPrototypeOf: n(100).set
        });
      }, function(t2, e, n) {
        var r = n(13), o = n(12), i = function(t3, e2) {
          if (o(t3), !r(e2) && null !== e2) throw TypeError(e2 + ": can't set as prototype!");
        };
        t2.exports = {
          set: Object.setPrototypeOf || ("__proto__" in {} ? function(t3, e2, r2) {
            try {
              r2 = n(42)(Function.call, n(36).f(Object.prototype, "__proto__").set, 2), r2(t3, []), e2 = !(t3 instanceof Array);
            } catch (t4) {
              e2 = true;
            }
            return function t4(n2, o2) {
              return i(n2, o2), e2 ? n2.__proto__ = o2 : r2(n2, o2), n2;
            };
          }({}, false) : void 0),
          check: i
        };
      }, function(t2, e, n) {
        t2.exports = {
          default: n(102),
          __esModule: true
        };
      }, function(t2, e, n) {
        n(103);
        var r = n(1).Object;
        t2.exports = function t3(e2, n2) {
          return r.create(e2, n2);
        };
      }, function(t2, e, n) {
        var r = n(2);
        r(r.S, "Object", {
          create: n(29)
        });
      }, function(t2, e, n) {
        t2.exports = {
          default: n(105),
          __esModule: true
        };
      }, function(t2, e, n) {
        n(106), t2.exports = parseInt;
      }, function(t2, e, n) {
        var r = n(2), o = n(107);
        r(r.S + r.F * (Number.parseInt != o), "Number", {
          parseInt: o
        });
      }, function(t2, e, n) {
        var r = n(0).parseInt, o = n(108).trim, i = n(56), a = /^[-+]?0[xX]/;
        t2.exports = 8 !== r(i + "08") || 22 !== r(i + "0x16") ? function t3(e2, n2) {
          var i2 = o(String(e2), 3);
          return r(i2, n2 >>> 0 || (a.test(i2) ? 16 : 10));
        } : r;
      }, function(t2, e, n) {
        var r = n(2), o = n(17), i = n(10), a = n(56), u = "[" + a + "]", l = "​", c = RegExp("^" + u + u + "*"), s = RegExp(u + u + "*$"), f = function(t3, e2, n2) {
          var o2 = {}, u2 = i(function() {
            return !!a[t3]() || l[t3]() != l;
          }), c2 = o2[t3] = u2 ? e2(p) : a[t3];
          n2 && (o2[n2] = c2), r(r.P + r.F * u2, "String", o2);
        }, p = f.trim = function(t3, e2) {
          return t3 = String(o(t3)), 1 & e2 && (t3 = t3.replace(c, "")), 2 & e2 && (t3 = t3.replace(s, "")), t3;
        };
        t2.exports = f;
      }, function(t2, e, n) {
        "use strict";
        function r(t3) {
          return t3 && t3.__esModule ? t3 : {
            default: t3
          };
        }
        Object.defineProperty(e, "__esModule", {
          value: true
        });
        var o = n(14), i = r(o), a = n(7), u = r(a), l = n(15), c = r(l), s = n(19), f = r(s), p = n(20), d = r(p), h = n(21), b = r(h), v = n(8), g = r(v), y = n(37), m = r(y), _ = n(55), x = r(_), A = n(22), w = r(A), k = g.default.import("blots/container"), O = g.default.import("parchment"), j = function(t3) {
          function e2() {
            return (0, u.default)(this, e2), (0, f.default)(this, (e2.__proto__ || (0, i.default)(e2)).apply(this, arguments));
          }
          return (0, b.default)(e2, t3), (0, c.default)(e2, [{
            key: "format",
            value: function t4() {
              this.getAttribute("table_id");
            }
          }, {
            key: "optimize",
            value: function t4(n2) {
              (0, d.default)(e2.prototype.__proto__ || (0, i.default)(e2.prototype), "optimize", this).call(this, n2);
              var r2 = this.next;
              null != r2 && r2.prev === this && r2.statics.blotName === this.statics.blotName && r2.domNode.tagName === this.domNode.tagName && r2.domNode.getAttribute("table_id") === this.domNode.getAttribute("table_id") && (r2.moveChildren(this), r2.remove());
            }
          }, {
            key: "insertBefore",
            value: function t4(n2, r2) {
              if (null != this.statics.allowedChildren && !this.statics.allowedChildren.some(function(t5) {
                return n2 instanceof t5;
              })) {
                var o2 = O.create(this.statics.defaultChild, m.default.random_id());
                o2.appendChild(n2), n2 = o2;
              }
              (0, d.default)(e2.prototype.__proto__ || (0, i.default)(e2.prototype), "insertBefore", this).call(this, n2, r2);
            }
          }], [{
            key: "create",
            value: function t4(n2) {
              var r2 = "table", o2 = (0, d.default)(e2.__proto__ || (0, i.default)(e2), "create", this).call(this, "table");
              return o2.setAttribute("table_id", n2), o2;
            }
          }]), e2;
        }(w.default);
        j.blotName = "table", j.tagName = "table", j.scope = O.Scope.BLOCK_BLOT, j.defaultChild = "tr", j.allowedChildren = [x.default], e.default = j;
      }, function(t2, e, n) {
        var r = n(111);
        "string" == typeof r && (r = [[t2.i, r, ""]]);
        var o, i = {
          hmr: true
        };
        i.transform = void 0;
        var a = n(113)(r, i);
        r.locals && (t2.exports = r.locals);
      }, function(t2, e, n) {
        e = t2.exports = n(112)(void 0), e.push([t2.i, `.ql-editor table {
    width: 100%;
    border-collapse: collapse;
}

.ql-editor table td {
    border: 1px solid black;
    padding: 5px;
    height: 25px;
}

.ql-formats button.ql-table::after,
.ql-formats .ql-picker.ql-table .ql-picker-label::before {
    content: " ";
    display: block;
    width: 18px;
    height: 18px;
    background-repeat: no-repeat;
    background-size: contain;
}

.ql-picker.ql-table .ql-picker-label::before {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABcSURBVEhL3YsxDgBACML8/6fvNhd0aGCyCUuBOsULR5hGToStSHl8oB4fqMcH6rtIRZhGToStSHl8oB4fqMcH6rtIRZhGToStSHl8oB4fqMcH6rtIRZhGTk5Q9QFCcv8BMZAsCwAAAABJRU5ErkJggg==');
}

button.ql-table[value="append-row"]::after {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC5SURBVEhL7ZNBCsIwFERzKxceQHGjqLcSFMHzKOpN1BOIe53BDgxJCjbRlX3woJnf/F9KEnq6MIE3+KyUPcYw4QpzG0q8wAQVa2nt0w8QfzpgCU/w0XiEc5ij84ANVC2WtRjVEuKLtoP8cs+EZzO4jbLsReP1ZkEvDeHZ1lR4doADW7PHCH4E/zc3tcHa/f1Yxs8H8LSwiRSe7RmUsoDeTHg2ZVDDGnpDdwW/Ao8iT4suGp+Z9dQSwgttSY+8S9IcOwAAAABJRU5ErkJggg==');
}

button.ql-table[value="append-col"] {
    padding-top: 0;
}

button.ql-table[value="append-col"]::after {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADXSURBVEhL3ZVLCsJADIbnVi48gOJGUW8lqCuPo6g3UU8g7vX/GQMhnUdmUZR+8MGQyaOUlIbBMYMP+K7InCls5g5TDVPeYDNSXMOb1+FvBuzhKB7b8A5Ywwt8fT3DJaziGbCDkmflXRFJzMEn1w0FHVswkMMWWq5QNxN07MRADlto4fsu3fPuGY9pfj6A2yI5Ok/HjgzksIWWFdTNBB2bM5DDFqbYQt1Qu4FFJLEGV5HbIh8az8X1FLwDDnAcj214B3jzOvQ+oPcfDn+DLEw11DJnAgdPCB8kS4+90nxt3AAAAABJRU5ErkJggg==');
}

.ql-table,
.ql-contain {
    width: auto !important;
    margin-right: 0;
}

.ql-picker.ql-table {
    font-size: 11px;
    font-weight: normal;
}

.ql-picker.ql-table svg {
    display: none;
}

.ql-picker.ql-table .ql-picker-label {
    padding: 2px 3px;
}

.ql-picker.ql-table .ql-picker-options {
    width: 178px;
}

.ql-picker.ql-table .ql-picker-item {
    display: block;
    float: left;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    padding: 0px;
    margin: 1px;
}

.ql-picker.ql-table .ql-picker-item {
    border: 1px solid #444;
    color: #444;
}

.ql-picker.ql-table .ql-picker-item:hover {
    border-color: #06c;
}

.ql-picker-item:nth-child(5):before {
    clear: both;
    display: block;
    content: "";
    width: 100%;
}

.ql-picker-item[data-value=newtable_1_1]:before {
    content: "1x1";
}

.ql-picker-item[data-value=newtable_1_2]:before {
    content: "1x2";
}

.ql-picker-item[data-value=newtable_1_3]:before {
    content: "1x3";
}

.ql-picker-item[data-value=newtable_1_4]:before {
    content: "1x4";
}

.ql-picker-item[data-value=newtable_1_5]:before {
    content: "1x5";
}

.ql-picker-item[data-value=newtable_2_1]:before {
    content: "2x1";
}

.ql-picker-item[data-value=newtable_2_2]:before {
    content: "2x2";
}

.ql-picker-item[data-value=newtable_2_3]:before {
    content: "2x3";
}

.ql-picker-item[data-value=newtable_2_4]:before {
    content: "2x4";
}

.ql-picker-item[data-value=newtable_2_5]:before {
    content: "2x5";
}

.ql-picker-item[data-value=newtable_3_1]:before {
    content: "3x1";
}

.ql-picker-item[data-value=newtable_3_2]:before {
    content: "3x2";
}

.ql-picker-item[data-value=newtable_3_3]:before {
    content: "3x3";
}

.ql-picker-item[data-value=newtable_3_4]:before {
    content: "3x4";
}

.ql-picker-item[data-value=newtable_3_5]:before {
    content: "3x5";
}

.ql-picker-item[data-value=newtable_4_1]:before {
    content: "4x1";
}

.ql-picker-item[data-value=newtable_4_2]:before {
    content: "4x2";
}

.ql-picker-item[data-value=newtable_4_3]:before {
    content: "4x3";
}

.ql-picker-item[data-value=newtable_4_4]:before {
    content: "4x4";
}

.ql-picker-item[data-value=newtable_4_5]:before {
    content: "4x5";
}

.ql-picker-item[data-value=newtable_5_1]:before {
    content: "5x1";
}

.ql-picker-item[data-value=newtable_5_2]:before {
    content: "5x2";
}

.ql-picker-item[data-value=newtable_5_3]:before {
    content: "5x3";
}

.ql-picker-item[data-value=newtable_5_4]:before {
    content: "5x4";
}

.ql-picker-item[data-value=newtable_5_5]:before {
    content: "5x5";
}

.ql-picker-item[data-value=newtable_6_1]:before {
    content: "6x1";
}

.ql-picker-item[data-value=newtable_6_2]:before {
    content: "6x2";
}

.ql-picker-item[data-value=newtable_6_3]:before {
    content: "6x3";
}

.ql-picker-item[data-value=newtable_6_4]:before {
    content: "6x4";
}

.ql-picker-item[data-value=newtable_6_5]:before {
    content: "6x5";
}

.ql-picker-item[data-value=newtable_7_1]:before {
    content: "7x1";
}

.ql-picker-item[data-value=newtable_7_2]:before {
    content: "7x2";
}

.ql-picker-item[data-value=newtable_7_3]:before {
    content: "7x3";
}

.ql-picker-item[data-value=newtable_7_4]:before {
    content: "7x4";
}

.ql-picker-item[data-value=newtable_7_5]:before {
    content: "7x5";
}

.ql-picker-item[data-value=newtable_8_1]:before {
    content: "8x1";
}

.ql-picker-item[data-value=newtable_8_2]:before {
    content: "8x2";
}

.ql-picker-item[data-value=newtable_8_3]:before {
    content: "8x3";
}

.ql-picker-item[data-value=newtable_8_4]:before {
    content: "8x4";
}

.ql-picker-item[data-value=newtable_8_5]:before {
    content: "8x5";
}

.ql-picker-item[data-value=newtable_9_1]:before {
    content: "9x1";
}

.ql-picker-item[data-value=newtable_9_2]:before {
    content: "9x2";
}

.ql-picker-item[data-value=newtable_9_3]:before {
    content: "9x3";
}

.ql-picker-item[data-value=newtable_9_4]:before {
    content: "9x4";
}

.ql-picker-item[data-value=newtable_9_5]:before {
    content: "9x5";
}

.ql-picker-item[data-value=newtable_10_1]:before {
    content: "10x1";
}

.ql-picker-item[data-value=newtable_10_2]:before {
    content: "10x2";
}

.ql-picker-item[data-value=newtable_10_3]:before {
    content: "10x3";
}

.ql-picker-item[data-value=newtable_10_4]:before {
    content: "10x4";
}

.ql-picker-item[data-value=newtable_10_5]:before {
    content: "10x5";
}
`, ""]);
      }, function(t2, e) {
        function n(t3, e2) {
          var n2 = t3[1] || "", o = t3[3];
          if (!o) return n2;
          if (e2 && "function" == typeof btoa) {
            var i = r(o);
            return [n2].concat(o.sources.map(function(t4) {
              return "/*# sourceURL=" + o.sourceRoot + t4 + " */";
            })).concat([i]).join("\n");
          }
          return [n2].join("\n");
        }
        function r(t3) {
          return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t3)))) + " */";
        }
        t2.exports = function(t3) {
          var e2 = [];
          return e2.toString = function e3() {
            return this.map(function(e4) {
              var r2 = n(e4, t3);
              return e4[2] ? "@media " + e4[2] + "{" + r2 + "}" : r2;
            }).join("");
          }, e2.i = function(t4, n2) {
            "string" == typeof t4 && (t4 = [[null, t4, ""]]);
            for (var r2 = {}, o = 0; o < this.length; o++) {
              var i = this[o][0];
              "number" == typeof i && (r2[i] = true);
            }
            for (o = 0; o < t4.length; o++) {
              var a = t4[o];
              "number" == typeof a[0] && r2[a[0]] || (n2 && !a[2] ? a[2] = n2 : n2 && (a[2] = "(" + a[2] + ") and (" + n2 + ")"), e2.push(a));
            }
          }, e2;
        };
      }, function(t2, e, n) {
        function r(t3, e2) {
          for (var n2 = 0; n2 < t3.length; n2++) {
            var r2 = t3[n2], o2 = h[r2.id];
            if (o2) {
              o2.refs++;
              for (var i2 = 0; i2 < o2.parts.length; i2++) o2.parts[i2](r2.parts[i2]);
              for (; i2 < r2.parts.length; i2++) o2.parts.push(s(r2.parts[i2], e2));
            } else {
              for (var a2 = [], i2 = 0; i2 < r2.parts.length; i2++) a2.push(s(r2.parts[i2], e2));
              h[r2.id] = {
                id: r2.id,
                refs: 1,
                parts: a2
              };
            }
          }
        }
        function o(t3, e2) {
          for (var n2 = [], r2 = {}, o2 = 0; o2 < t3.length; o2++) {
            var i2 = t3[o2], a2 = e2.base ? i2[0] + e2.base : i2[0], u2 = i2[1], l2 = i2[2], c2 = i2[3], s2 = {
              css: u2,
              media: l2,
              sourceMap: c2
            };
            r2[a2] ? r2[a2].parts.push(s2) : n2.push(r2[a2] = {
              id: a2,
              parts: [s2]
            });
          }
          return n2;
        }
        function i(t3, e2) {
          var n2 = g(t3.insertInto);
          if (!n2) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
          var r2 = _[_.length - 1];
          if ("top" === t3.insertAt) r2 ? r2.nextSibling ? n2.insertBefore(e2, r2.nextSibling) : n2.appendChild(e2) : n2.insertBefore(e2, n2.firstChild), _.push(e2);
          else if ("bottom" === t3.insertAt) n2.appendChild(e2);
          else {
            if ("object" != typeof t3.insertAt || !t3.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o2 = g(t3.insertInto + " " + t3.insertAt.before);
            n2.insertBefore(e2, o2);
          }
        }
        function a(t3) {
          if (null === t3.parentNode) return false;
          t3.parentNode.removeChild(t3);
          var e2 = _.indexOf(t3);
          e2 >= 0 && _.splice(e2, 1);
        }
        function u(t3) {
          var e2 = document.createElement("style");
          return t3.attrs.type = "text/css", c(e2, t3.attrs), i(t3, e2), e2;
        }
        function l(t3) {
          var e2 = document.createElement("link");
          return t3.attrs.type = "text/css", t3.attrs.rel = "stylesheet", c(e2, t3.attrs), i(t3, e2), e2;
        }
        function c(t3, e2) {
          Object.keys(e2).forEach(function(n2) {
            t3.setAttribute(n2, e2[n2]);
          });
        }
        function s(t3, e2) {
          var n2, r2, o2, i2;
          if (e2.transform && t3.css) {
            if (!(i2 = e2.transform(t3.css))) return function() {
            };
            t3.css = i2;
          }
          if (e2.singleton) {
            var c2 = m++;
            n2 = y || (y = u(e2)), r2 = f.bind(null, n2, c2, false), o2 = f.bind(null, n2, c2, true);
          } else t3.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n2 = l(e2), r2 = d.bind(null, n2, e2), o2 = function() {
            a(n2), n2.href && URL.revokeObjectURL(n2.href);
          }) : (n2 = u(e2), r2 = p.bind(null, n2), o2 = function() {
            a(n2);
          });
          return r2(t3), function e3(n3) {
            if (n3) {
              if (n3.css === t3.css && n3.media === t3.media && n3.sourceMap === t3.sourceMap) return;
              r2(t3 = n3);
            } else o2();
          };
        }
        function f(t3, e2, n2, r2) {
          var o2 = n2 ? "" : r2.css;
          if (t3.styleSheet) t3.styleSheet.cssText = A(e2, o2);
          else {
            var i2 = document.createTextNode(o2), a2 = t3.childNodes;
            a2[e2] && t3.removeChild(a2[e2]), a2.length ? t3.insertBefore(i2, a2[e2]) : t3.appendChild(i2);
          }
        }
        function p(t3, e2) {
          var n2 = e2.css, r2 = e2.media;
          if (r2 && t3.setAttribute("media", r2), t3.styleSheet) t3.styleSheet.cssText = n2;
          else {
            for (; t3.firstChild; ) t3.removeChild(t3.firstChild);
            t3.appendChild(document.createTextNode(n2));
          }
        }
        function d(t3, e2, n2) {
          var r2 = n2.css, o2 = n2.sourceMap, i2 = void 0 === e2.convertToAbsoluteUrls && o2;
          (e2.convertToAbsoluteUrls || i2) && (r2 = x(r2)), o2 && (r2 += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o2)))) + " */");
          var a2 = new Blob([r2], {
            type: "text/css"
          }), u2 = t3.href;
          t3.href = URL.createObjectURL(a2), u2 && URL.revokeObjectURL(u2);
        }
        var h = {}, b = function(t3) {
          var e2;
          return function() {
            return void 0 === e2 && (e2 = t3.apply(this, arguments)), e2;
          };
        }, v = b(function() {
          return window && document && document.all && !window.atob;
        }), g = /* @__PURE__ */ function(t3) {
          var e2 = {};
          return function(n2) {
            if (void 0 === e2[n2]) {
              var r2 = t3.call(this, n2);
              if (r2 instanceof window.HTMLIFrameElement) try {
                r2 = r2.contentDocument.head;
              } catch (t4) {
                r2 = null;
              }
              e2[n2] = r2;
            }
            return e2[n2];
          };
        }(function(t3) {
          return document.querySelector(t3);
        }), y = null, m = 0, _ = [], x = n(114);
        t2.exports = function(t3, e2) {
          if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
          e2 = e2 || {}, e2.attrs = "object" == typeof e2.attrs ? e2.attrs : {}, e2.singleton || (e2.singleton = v()), e2.insertInto || (e2.insertInto = "head"), e2.insertAt || (e2.insertAt = "bottom");
          var n2 = o(t3, e2);
          return r(n2, e2), function t4(i2) {
            for (var a2 = [], u2 = 0; u2 < n2.length; u2++) {
              var l2 = n2[u2], c2 = h[l2.id];
              c2.refs--, a2.push(c2);
            }
            if (i2) {
              r(o(i2, e2), e2);
            }
            for (var u2 = 0; u2 < a2.length; u2++) {
              var c2 = a2[u2];
              if (0 === c2.refs) {
                for (var s2 = 0; s2 < c2.parts.length; s2++) c2.parts[s2]();
                delete h[c2.id];
              }
            }
          };
        };
        var A = /* @__PURE__ */ function() {
          var t3 = [];
          return function(e2, n2) {
            return t3[e2] = n2, t3.filter(Boolean).join("\n");
          };
        }();
      }, function(t2, e) {
        t2.exports = function(t3) {
          var e2 = "undefined" != typeof window && window.location;
          if (!e2) throw new Error("fixUrls requires window.location");
          if (!t3 || "string" != typeof t3) return t3;
          var n = e2.protocol + "//" + e2.host, r = n + e2.pathname.replace(/\/[^\/]*$/, "/");
          return t3.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t4, e3) {
            var o = e3.trim().replace(/^"(.*)"$/, function(t5, e4) {
              return e4;
            }).replace(/^'(.*)'$/, function(t5, e4) {
              return e4;
            });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o)) return t4;
            var i;
            return i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")";
          });
        };
      }]);
    });
  }
});
export default require_quill_table();
//# sourceMappingURL=quill-table.js.map
