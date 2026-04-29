"use strict";
(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var r;
  var o;
  var e;
  var f;
  var c;
  var s;
  var a;
  var h;
  var p;
  var v;
  var y;
  var d = {};
  var w = [];
  var _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var g = Array.isArray;
  function m(n3, l5) {
    for (var u5 in l5) n3[u5] = l5[u5];
    return n3;
  }
  function b(n3) {
    n3 && n3.parentNode && n3.parentNode.removeChild(n3);
  }
  function k(l5, u5, t4) {
    var i5, r4, o4, e4 = {};
    for (o4 in u5) "key" == o4 ? i5 = u5[o4] : "ref" == o4 ? r4 = u5[o4] : e4[o4] = u5[o4];
    if (arguments.length > 2 && (e4.children = arguments.length > 3 ? n.call(arguments, 2) : t4), "function" == typeof l5 && null != l5.defaultProps) for (o4 in l5.defaultProps) void 0 === e4[o4] && (e4[o4] = l5.defaultProps[o4]);
    return x(l5, e4, i5, r4, null);
  }
  function x(n3, t4, i5, r4, o4) {
    var e4 = { type: n3, props: t4, key: i5, ref: r4, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o4 ? ++u : o4, __i: -1, __u: 0 };
    return null == o4 && null != l.vnode && l.vnode(e4), e4;
  }
  function S(n3) {
    return n3.children;
  }
  function C(n3, l5) {
    this.props = n3, this.context = l5;
  }
  function $(n3, l5) {
    if (null == l5) return n3.__ ? $(n3.__, n3.__i + 1) : null;
    for (var u5; l5 < n3.__k.length; l5++) if (null != (u5 = n3.__k[l5]) && null != u5.__e) return u5.__e;
    return "function" == typeof n3.type ? $(n3) : null;
  }
  function I(n3) {
    if (n3.__P && n3.__d) {
      var u5 = n3.__v, t4 = u5.__e, i5 = [], r4 = [], o4 = m({}, u5);
      o4.__v = u5.__v + 1, l.vnode && l.vnode(o4), q(n3.__P, o4, u5, n3.__n, n3.__P.namespaceURI, 32 & u5.__u ? [t4] : null, i5, null == t4 ? $(u5) : t4, !!(32 & u5.__u), r4), o4.__v = u5.__v, o4.__.__k[o4.__i] = o4, D(i5, o4, r4), u5.__e = u5.__ = null, o4.__e != t4 && P(o4);
    }
  }
  function P(n3) {
    if (null != (n3 = n3.__) && null != n3.__c) return n3.__e = n3.__c.base = null, n3.__k.some(function(l5) {
      if (null != l5 && null != l5.__e) return n3.__e = n3.__c.base = l5.__e;
    }), P(n3);
  }
  function A(n3) {
    (!n3.__d && (n3.__d = true) && i.push(n3) && !H.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(H);
  }
  function H() {
    try {
      for (var n3, l5 = 1; i.length; ) i.length > l5 && i.sort(e), n3 = i.shift(), l5 = i.length, I(n3);
    } finally {
      i.length = H.__r = 0;
    }
  }
  function L(n3, l5, u5, t4, i5, r4, o4, e4, f5, c4, s4) {
    var a4, h5, p5, v4, y5, _4, g4, m5 = t4 && t4.__k || w, b4 = l5.length;
    for (f5 = T(u5, l5, m5, f5, b4), a4 = 0; a4 < b4; a4++) null != (p5 = u5.__k[a4]) && (h5 = -1 != p5.__i && m5[p5.__i] || d, p5.__i = a4, _4 = q(n3, p5, h5, i5, r4, o4, e4, f5, c4, s4), v4 = p5.__e, p5.ref && h5.ref != p5.ref && (h5.ref && J(h5.ref, null, p5), s4.push(p5.ref, p5.__c || v4, p5)), null == y5 && null != v4 && (y5 = v4), (g4 = !!(4 & p5.__u)) || h5.__k === p5.__k ? (f5 = j(p5, f5, n3, g4), g4 && h5.__e && (h5.__e = null)) : "function" == typeof p5.type && void 0 !== _4 ? f5 = _4 : v4 && (f5 = v4.nextSibling), p5.__u &= -7);
    return u5.__e = y5, f5;
  }
  function T(n3, l5, u5, t4, i5) {
    var r4, o4, e4, f5, c4, s4 = u5.length, a4 = s4, h5 = 0;
    for (n3.__k = new Array(i5), r4 = 0; r4 < i5; r4++) null != (o4 = l5[r4]) && "boolean" != typeof o4 && "function" != typeof o4 ? ("string" == typeof o4 || "number" == typeof o4 || "bigint" == typeof o4 || o4.constructor == String ? o4 = n3.__k[r4] = x(null, o4, null, null, null) : g(o4) ? o4 = n3.__k[r4] = x(S, { children: o4 }, null, null, null) : void 0 === o4.constructor && o4.__b > 0 ? o4 = n3.__k[r4] = x(o4.type, o4.props, o4.key, o4.ref ? o4.ref : null, o4.__v) : n3.__k[r4] = o4, f5 = r4 + h5, o4.__ = n3, o4.__b = n3.__b + 1, e4 = null, -1 != (c4 = o4.__i = O(o4, u5, f5, a4)) && (a4--, (e4 = u5[c4]) && (e4.__u |= 2)), null == e4 || null == e4.__v ? (-1 == c4 && (i5 > s4 ? h5-- : i5 < s4 && h5++), "function" != typeof o4.type && (o4.__u |= 4)) : c4 != f5 && (c4 == f5 - 1 ? h5-- : c4 == f5 + 1 ? h5++ : (c4 > f5 ? h5-- : h5++, o4.__u |= 4))) : n3.__k[r4] = null;
    if (a4) for (r4 = 0; r4 < s4; r4++) null != (e4 = u5[r4]) && 0 == (2 & e4.__u) && (e4.__e == t4 && (t4 = $(e4)), K(e4, e4));
    return t4;
  }
  function j(n3, l5, u5, t4) {
    var i5, r4;
    if ("function" == typeof n3.type) {
      for (i5 = n3.__k, r4 = 0; i5 && r4 < i5.length; r4++) i5[r4] && (i5[r4].__ = n3, l5 = j(i5[r4], l5, u5, t4));
      return l5;
    }
    n3.__e != l5 && (t4 && (l5 && n3.type && !l5.parentNode && (l5 = $(n3)), u5.insertBefore(n3.__e, l5 || null)), l5 = n3.__e);
    do {
      l5 = l5 && l5.nextSibling;
    } while (null != l5 && 8 == l5.nodeType);
    return l5;
  }
  function O(n3, l5, u5, t4) {
    var i5, r4, o4, e4 = n3.key, f5 = n3.type, c4 = l5[u5], s4 = null != c4 && 0 == (2 & c4.__u);
    if (null === c4 && null == e4 || s4 && e4 == c4.key && f5 == c4.type) return u5;
    if (t4 > (s4 ? 1 : 0)) {
      for (i5 = u5 - 1, r4 = u5 + 1; i5 >= 0 || r4 < l5.length; ) if (null != (c4 = l5[o4 = i5 >= 0 ? i5-- : r4++]) && 0 == (2 & c4.__u) && e4 == c4.key && f5 == c4.type) return o4;
    }
    return -1;
  }
  function z(n3, l5, u5) {
    "-" == l5[0] ? n3.setProperty(l5, null == u5 ? "" : u5) : n3[l5] = null == u5 ? "" : "number" != typeof u5 || _.test(l5) ? u5 : u5 + "px";
  }
  function N(n3, l5, u5, t4, i5) {
    var r4, o4;
    n: if ("style" == l5) if ("string" == typeof u5) n3.style.cssText = u5;
    else {
      if ("string" == typeof t4 && (n3.style.cssText = t4 = ""), t4) for (l5 in t4) u5 && l5 in u5 || z(n3.style, l5, "");
      if (u5) for (l5 in u5) t4 && u5[l5] == t4[l5] || z(n3.style, l5, u5[l5]);
    }
    else if ("o" == l5[0] && "n" == l5[1]) r4 = l5 != (l5 = l5.replace(a, "$1")), o4 = l5.toLowerCase(), l5 = o4 in n3 || "onFocusOut" == l5 || "onFocusIn" == l5 ? o4.slice(2) : l5.slice(2), n3.l || (n3.l = {}), n3.l[l5 + r4] = u5, u5 ? t4 ? u5[s] = t4[s] : (u5[s] = h, n3.addEventListener(l5, r4 ? v : p, r4)) : n3.removeEventListener(l5, r4 ? v : p, r4);
    else {
      if ("http://www.w3.org/2000/svg" == i5) l5 = l5.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l5 && "height" != l5 && "href" != l5 && "list" != l5 && "form" != l5 && "tabIndex" != l5 && "download" != l5 && "rowSpan" != l5 && "colSpan" != l5 && "role" != l5 && "popover" != l5 && l5 in n3) try {
        n3[l5] = null == u5 ? "" : u5;
        break n;
      } catch (n4) {
      }
      "function" == typeof u5 || (null == u5 || false === u5 && "-" != l5[4] ? n3.removeAttribute(l5) : n3.setAttribute(l5, "popover" == l5 && 1 == u5 ? "" : u5));
    }
  }
  function V(n3) {
    return function(u5) {
      if (this.l) {
        var t4 = this.l[u5.type + n3];
        if (null == u5[c]) u5[c] = h++;
        else if (u5[c] < t4[s]) return;
        return t4(l.event ? l.event(u5) : u5);
      }
    };
  }
  function q(n3, u5, t4, i5, r4, o4, e4, f5, c4, s4) {
    var a4, h5, p5, v4, y5, d4, _4, k4, x3, M2, $2, I2, P2, A4, H2, T3 = u5.type;
    if (void 0 !== u5.constructor) return null;
    128 & t4.__u && (c4 = !!(32 & t4.__u), o4 = [f5 = u5.__e = t4.__e]), (a4 = l.__b) && a4(u5);
    n: if ("function" == typeof T3) try {
      if (k4 = u5.props, x3 = T3.prototype && T3.prototype.render, M2 = (a4 = T3.contextType) && i5[a4.__c], $2 = a4 ? M2 ? M2.props.value : a4.__ : i5, t4.__c ? _4 = (h5 = u5.__c = t4.__c).__ = h5.__E : (x3 ? u5.__c = h5 = new T3(k4, $2) : (u5.__c = h5 = new C(k4, $2), h5.constructor = T3, h5.render = Q), M2 && M2.sub(h5), h5.state || (h5.state = {}), h5.__n = i5, p5 = h5.__d = true, h5.__h = [], h5._sb = []), x3 && null == h5.__s && (h5.__s = h5.state), x3 && null != T3.getDerivedStateFromProps && (h5.__s == h5.state && (h5.__s = m({}, h5.__s)), m(h5.__s, T3.getDerivedStateFromProps(k4, h5.__s))), v4 = h5.props, y5 = h5.state, h5.__v = u5, p5) x3 && null == T3.getDerivedStateFromProps && null != h5.componentWillMount && h5.componentWillMount(), x3 && null != h5.componentDidMount && h5.__h.push(h5.componentDidMount);
      else {
        if (x3 && null == T3.getDerivedStateFromProps && k4 !== v4 && null != h5.componentWillReceiveProps && h5.componentWillReceiveProps(k4, $2), u5.__v == t4.__v || !h5.__e && null != h5.shouldComponentUpdate && false === h5.shouldComponentUpdate(k4, h5.__s, $2)) {
          u5.__v != t4.__v && (h5.props = k4, h5.state = h5.__s, h5.__d = false), u5.__e = t4.__e, u5.__k = t4.__k, u5.__k.some(function(n4) {
            n4 && (n4.__ = u5);
          }), w.push.apply(h5.__h, h5._sb), h5._sb = [], h5.__h.length && e4.push(h5);
          break n;
        }
        null != h5.componentWillUpdate && h5.componentWillUpdate(k4, h5.__s, $2), x3 && null != h5.componentDidUpdate && h5.__h.push(function() {
          h5.componentDidUpdate(v4, y5, d4);
        });
      }
      if (h5.context = $2, h5.props = k4, h5.__P = n3, h5.__e = false, I2 = l.__r, P2 = 0, x3) h5.state = h5.__s, h5.__d = false, I2 && I2(u5), a4 = h5.render(h5.props, h5.state, h5.context), w.push.apply(h5.__h, h5._sb), h5._sb = [];
      else do {
        h5.__d = false, I2 && I2(u5), a4 = h5.render(h5.props, h5.state, h5.context), h5.state = h5.__s;
      } while (h5.__d && ++P2 < 25);
      h5.state = h5.__s, null != h5.getChildContext && (i5 = m(m({}, i5), h5.getChildContext())), x3 && !p5 && null != h5.getSnapshotBeforeUpdate && (d4 = h5.getSnapshotBeforeUpdate(v4, y5)), A4 = null != a4 && a4.type === S && null == a4.key ? E(a4.props.children) : a4, f5 = L(n3, g(A4) ? A4 : [A4], u5, t4, i5, r4, o4, e4, f5, c4, s4), h5.base = u5.__e, u5.__u &= -161, h5.__h.length && e4.push(h5), _4 && (h5.__E = h5.__ = null);
    } catch (n4) {
      if (u5.__v = null, c4 || null != o4) if (n4.then) {
        for (u5.__u |= c4 ? 160 : 128; f5 && 8 == f5.nodeType && f5.nextSibling; ) f5 = f5.nextSibling;
        o4[o4.indexOf(f5)] = null, u5.__e = f5;
      } else {
        for (H2 = o4.length; H2--; ) b(o4[H2]);
        B(u5);
      }
      else u5.__e = t4.__e, u5.__k = t4.__k, n4.then || B(u5);
      l.__e(n4, u5, t4);
    }
    else null == o4 && u5.__v == t4.__v ? (u5.__k = t4.__k, u5.__e = t4.__e) : f5 = u5.__e = G(t4.__e, u5, t4, i5, r4, o4, e4, c4, s4);
    return (a4 = l.diffed) && a4(u5), 128 & u5.__u ? void 0 : f5;
  }
  function B(n3) {
    n3 && (n3.__c && (n3.__c.__e = true), n3.__k && n3.__k.some(B));
  }
  function D(n3, u5, t4) {
    for (var i5 = 0; i5 < t4.length; i5++) J(t4[i5], t4[++i5], t4[++i5]);
    l.__c && l.__c(u5, n3), n3.some(function(u6) {
      try {
        n3 = u6.__h, u6.__h = [], n3.some(function(n4) {
          n4.call(u6);
        });
      } catch (n4) {
        l.__e(n4, u6.__v);
      }
    });
  }
  function E(n3) {
    return "object" != typeof n3 || null == n3 || n3.__b > 0 ? n3 : g(n3) ? n3.map(E) : m({}, n3);
  }
  function G(u5, t4, i5, r4, o4, e4, f5, c4, s4) {
    var a4, h5, p5, v4, y5, w4, _4, m5 = i5.props || d, k4 = t4.props, x3 = t4.type;
    if ("svg" == x3 ? o4 = "http://www.w3.org/2000/svg" : "math" == x3 ? o4 = "http://www.w3.org/1998/Math/MathML" : o4 || (o4 = "http://www.w3.org/1999/xhtml"), null != e4) {
      for (a4 = 0; a4 < e4.length; a4++) if ((y5 = e4[a4]) && "setAttribute" in y5 == !!x3 && (x3 ? y5.localName == x3 : 3 == y5.nodeType)) {
        u5 = y5, e4[a4] = null;
        break;
      }
    }
    if (null == u5) {
      if (null == x3) return document.createTextNode(k4);
      u5 = document.createElementNS(o4, x3, k4.is && k4), c4 && (l.__m && l.__m(t4, e4), c4 = false), e4 = null;
    }
    if (null == x3) m5 === k4 || c4 && u5.data == k4 || (u5.data = k4);
    else {
      if (e4 = e4 && n.call(u5.childNodes), !c4 && null != e4) for (m5 = {}, a4 = 0; a4 < u5.attributes.length; a4++) m5[(y5 = u5.attributes[a4]).name] = y5.value;
      for (a4 in m5) y5 = m5[a4], "dangerouslySetInnerHTML" == a4 ? p5 = y5 : "children" == a4 || a4 in k4 || "value" == a4 && "defaultValue" in k4 || "checked" == a4 && "defaultChecked" in k4 || N(u5, a4, null, y5, o4);
      for (a4 in k4) y5 = k4[a4], "children" == a4 ? v4 = y5 : "dangerouslySetInnerHTML" == a4 ? h5 = y5 : "value" == a4 ? w4 = y5 : "checked" == a4 ? _4 = y5 : c4 && "function" != typeof y5 || m5[a4] === y5 || N(u5, a4, y5, m5[a4], o4);
      if (h5) c4 || p5 && (h5.__html == p5.__html || h5.__html == u5.innerHTML) || (u5.innerHTML = h5.__html), t4.__k = [];
      else if (p5 && (u5.innerHTML = ""), L("template" == t4.type ? u5.content : u5, g(v4) ? v4 : [v4], t4, i5, r4, "foreignObject" == x3 ? "http://www.w3.org/1999/xhtml" : o4, e4, f5, e4 ? e4[0] : i5.__k && $(i5, 0), c4, s4), null != e4) for (a4 = e4.length; a4--; ) b(e4[a4]);
      c4 || (a4 = "value", "progress" == x3 && null == w4 ? u5.removeAttribute("value") : null != w4 && (w4 !== u5[a4] || "progress" == x3 && !w4 || "option" == x3 && w4 != m5[a4]) && N(u5, a4, w4, m5[a4], o4), a4 = "checked", null != _4 && _4 != u5[a4] && N(u5, a4, _4, m5[a4], o4));
    }
    return u5;
  }
  function J(n3, u5, t4) {
    try {
      if ("function" == typeof n3) {
        var i5 = "function" == typeof n3.__u;
        i5 && n3.__u(), i5 && null == u5 || (n3.__u = n3(u5));
      } else n3.current = u5;
    } catch (n4) {
      l.__e(n4, t4);
    }
  }
  function K(n3, u5, t4) {
    var i5, r4;
    if (l.unmount && l.unmount(n3), (i5 = n3.ref) && (i5.current && i5.current != n3.__e || J(i5, null, u5)), null != (i5 = n3.__c)) {
      if (i5.componentWillUnmount) try {
        i5.componentWillUnmount();
      } catch (n4) {
        l.__e(n4, u5);
      }
      i5.base = i5.__P = null;
    }
    if (i5 = n3.__k) for (r4 = 0; r4 < i5.length; r4++) i5[r4] && K(i5[r4], u5, t4 || "function" != typeof n3.type);
    t4 || b(n3.__e), n3.__c = n3.__ = n3.__e = void 0;
  }
  function Q(n3, l5, u5) {
    return this.constructor(n3, u5);
  }
  function R(u5, t4, i5) {
    var r4, o4, e4, f5;
    t4 == document && (t4 = document.documentElement), l.__ && l.__(u5, t4), o4 = (r4 = "function" == typeof i5) ? null : i5 && i5.__k || t4.__k, e4 = [], f5 = [], q(t4, u5 = (!r4 && i5 || t4).__k = k(S, null, [u5]), o4 || d, d, t4.namespaceURI, !r4 && i5 ? [i5] : o4 ? null : t4.firstChild ? n.call(t4.childNodes) : null, e4, !r4 && i5 ? i5 : o4 ? o4.__e : t4.firstChild, r4, f5), D(e4, u5, f5);
  }
  n = w.slice, l = { __e: function(n3, l5, u5, t4) {
    for (var i5, r4, o4; l5 = l5.__; ) if ((i5 = l5.__c) && !i5.__) try {
      if ((r4 = i5.constructor) && null != r4.getDerivedStateFromError && (i5.setState(r4.getDerivedStateFromError(n3)), o4 = i5.__d), null != i5.componentDidCatch && (i5.componentDidCatch(n3, t4 || {}), o4 = i5.__d), o4) return i5.__E = i5;
    } catch (l6) {
      n3 = l6;
    }
    throw n3;
  } }, u = 0, t = function(n3) {
    return null != n3 && void 0 === n3.constructor;
  }, C.prototype.setState = function(n3, l5) {
    var u5;
    u5 = null != this.__s && this.__s != this.state ? this.__s : this.__s = m({}, this.state), "function" == typeof n3 && (n3 = n3(m({}, u5), this.props)), n3 && m(u5, n3), null != n3 && this.__v && (l5 && this._sb.push(l5), A(this));
  }, C.prototype.forceUpdate = function(n3) {
    this.__v && (this.__e = true, n3 && this.__h.push(n3), A(this));
  }, C.prototype.render = S, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n3, l5) {
    return n3.__v.__b - l5.__v.__b;
  }, H.__r = 0, f = Math.random().toString(8), c = "__d" + f, s = "__a" + f, a = /(PointerCapture)$|Capture$/i, h = 0, p = V(false), v = V(true), y = 0;

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i2;
  var o2 = 0;
  var f2 = [];
  var c2 = l;
  var e2 = c2.__b;
  var a2 = c2.__r;
  var v2 = c2.diffed;
  var l2 = c2.__c;
  var m2 = c2.unmount;
  var s2 = c2.__;
  function p2(n3, t4) {
    c2.__h && c2.__h(r2, n3, o2 || t4), o2 = 0;
    var u5 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n3 >= u5.__.length && u5.__.push({}), u5.__[n3];
  }
  function d2(n3) {
    return o2 = 1, h2(D2, n3);
  }
  function h2(n3, u5, i5) {
    var o4 = p2(t2++, 2);
    if (o4.t = n3, !o4.__c && (o4.__ = [i5 ? i5(u5) : D2(void 0, u5), function(n4) {
      var t4 = o4.__N ? o4.__N[0] : o4.__[0], r4 = o4.t(t4, n4);
      t4 !== r4 && (o4.__N = [r4, o4.__[1]], o4.__c.setState({}));
    }], o4.__c = r2, !r2.__f)) {
      var f5 = function(n4, t4, r4) {
        if (!o4.__c.__H) return true;
        var u6 = o4.__c.__H.__.filter(function(n5) {
          return n5.__c;
        });
        if (u6.every(function(n5) {
          return !n5.__N;
        })) return !c4 || c4.call(this, n4, t4, r4);
        var i6 = o4.__c.props !== n4;
        return u6.some(function(n5) {
          if (n5.__N) {
            var t5 = n5.__[0];
            n5.__ = n5.__N, n5.__N = void 0, t5 !== n5.__[0] && (i6 = true);
          }
        }), c4 && c4.call(this, n4, t4, r4) || i6;
      };
      r2.__f = true;
      var c4 = r2.shouldComponentUpdate, e4 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n4, t4, r4) {
        if (this.__e) {
          var u6 = c4;
          c4 = void 0, f5(n4, t4, r4), c4 = u6;
        }
        e4 && e4.call(this, n4, t4, r4);
      }, r2.shouldComponentUpdate = f5;
    }
    return o4.__N || o4.__;
  }
  function y2(n3, u5) {
    var i5 = p2(t2++, 3);
    !c2.__s && C2(i5.__H, u5) && (i5.__ = n3, i5.u = u5, r2.__H.__h.push(i5));
  }
  function A2(n3) {
    return o2 = 5, T2(function() {
      return { current: n3 };
    }, []);
  }
  function T2(n3, r4) {
    var u5 = p2(t2++, 7);
    return C2(u5.__H, r4) && (u5.__ = n3(), u5.__H = r4, u5.__h = n3), u5.__;
  }
  function j2() {
    for (var n3; n3 = f2.shift(); ) {
      var t4 = n3.__H;
      if (n3.__P && t4) try {
        t4.__h.some(z2), t4.__h.some(B2), t4.__h = [];
      } catch (r4) {
        t4.__h = [], c2.__e(r4, n3.__v);
      }
    }
  }
  c2.__b = function(n3) {
    r2 = null, e2 && e2(n3);
  }, c2.__ = function(n3, t4) {
    n3 && t4.__k && t4.__k.__m && (n3.__m = t4.__k.__m), s2 && s2(n3, t4);
  }, c2.__r = function(n3) {
    a2 && a2(n3), t2 = 0;
    var i5 = (r2 = n3.__c).__H;
    i5 && (u2 === r2 ? (i5.__h = [], r2.__h = [], i5.__.some(function(n4) {
      n4.__N && (n4.__ = n4.__N), n4.u = n4.__N = void 0;
    })) : (i5.__h.some(z2), i5.__h.some(B2), i5.__h = [], t2 = 0)), u2 = r2;
  }, c2.diffed = function(n3) {
    v2 && v2(n3);
    var t4 = n3.__c;
    t4 && t4.__H && (t4.__H.__h.length && (1 !== f2.push(t4) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t4.__H.__.some(function(n4) {
      n4.u && (n4.__H = n4.u), n4.u = void 0;
    })), u2 = r2 = null;
  }, c2.__c = function(n3, t4) {
    t4.some(function(n4) {
      try {
        n4.__h.some(z2), n4.__h = n4.__h.filter(function(n5) {
          return !n5.__ || B2(n5);
        });
      } catch (r4) {
        t4.some(function(n5) {
          n5.__h && (n5.__h = []);
        }), t4 = [], c2.__e(r4, n4.__v);
      }
    }), l2 && l2(n3, t4);
  }, c2.unmount = function(n3) {
    m2 && m2(n3);
    var t4, r4 = n3.__c;
    r4 && r4.__H && (r4.__H.__.some(function(n4) {
      try {
        z2(n4);
      } catch (n5) {
        t4 = n5;
      }
    }), r4.__H = void 0, t4 && c2.__e(t4, r4.__v));
  };
  var k2 = "function" == typeof requestAnimationFrame;
  function w2(n3) {
    var t4, r4 = function() {
      clearTimeout(u5), k2 && cancelAnimationFrame(t4), setTimeout(n3);
    }, u5 = setTimeout(r4, 35);
    k2 && (t4 = requestAnimationFrame(r4));
  }
  function z2(n3) {
    var t4 = r2, u5 = n3.__c;
    "function" == typeof u5 && (n3.__c = void 0, u5()), r2 = t4;
  }
  function B2(n3) {
    var t4 = r2;
    n3.__c = n3.__(), r2 = t4;
  }
  function C2(n3, t4) {
    return !n3 || n3.length !== t4.length || t4.some(function(t5, r4) {
      return t5 !== n3[r4];
    });
  }
  function D2(n3, t4) {
    return "function" == typeof t4 ? t4(n3) : t4;
  }

  // node_modules/@preact/signals-core/dist/signals-core.module.js
  var i3 = Symbol.for("preact-signals");
  function t3() {
    if (!(s3 > 1)) {
      var i5, t4 = false;
      !function() {
        var i6 = c3;
        c3 = void 0;
        while (void 0 !== i6) {
          if (i6.S.v === i6.v) i6.S.i = i6.i;
          i6 = i6.o;
        }
      }();
      while (void 0 !== h3) {
        var n3 = h3;
        h3 = void 0;
        v3++;
        while (void 0 !== n3) {
          var r4 = n3.u;
          n3.u = void 0;
          n3.f &= -3;
          if (!(8 & n3.f) && w3(n3)) try {
            n3.c();
          } catch (n4) {
            if (!t4) {
              i5 = n4;
              t4 = true;
            }
          }
          n3 = r4;
        }
      }
      v3 = 0;
      s3--;
      if (t4) throw i5;
    } else s3--;
  }
  function n2(i5) {
    if (s3 > 0) return i5();
    e3 = ++u3;
    s3++;
    try {
      return i5();
    } finally {
      t3();
    }
  }
  var r3 = void 0;
  function o3(i5) {
    var t4 = r3;
    r3 = void 0;
    try {
      return i5();
    } finally {
      r3 = t4;
    }
  }
  var f3;
  var h3 = void 0;
  var s3 = 0;
  var v3 = 0;
  var u3 = 0;
  var e3 = 0;
  var c3 = void 0;
  var d3 = 0;
  function a3(i5) {
    if (void 0 !== r3) {
      var t4 = i5.n;
      if (void 0 === t4 || t4.t !== r3) {
        t4 = { i: 0, S: i5, p: r3.s, n: void 0, t: r3, e: void 0, x: void 0, r: t4 };
        if (void 0 !== r3.s) r3.s.n = t4;
        r3.s = t4;
        i5.n = t4;
        if (32 & r3.f) i5.S(t4);
        return t4;
      } else if (-1 === t4.i) {
        t4.i = 0;
        if (void 0 !== t4.n) {
          t4.n.p = t4.p;
          if (void 0 !== t4.p) t4.p.n = t4.n;
          t4.p = r3.s;
          t4.n = void 0;
          r3.s.n = t4;
          r3.s = t4;
        }
        return t4;
      }
    }
  }
  function l3(i5, t4) {
    this.v = i5;
    this.i = 0;
    this.n = void 0;
    this.t = void 0;
    this.l = 0;
    this.W = null == t4 ? void 0 : t4.watched;
    this.Z = null == t4 ? void 0 : t4.unwatched;
    this.name = null == t4 ? void 0 : t4.name;
  }
  l3.prototype.brand = i3;
  l3.prototype.h = function() {
    return true;
  };
  l3.prototype.S = function(i5) {
    var t4 = this, n3 = this.t;
    if (n3 !== i5 && void 0 === i5.e) {
      i5.x = n3;
      this.t = i5;
      if (void 0 !== n3) n3.e = i5;
      else o3(function() {
        var i6;
        null == (i6 = t4.W) || i6.call(t4);
      });
    }
  };
  l3.prototype.U = function(i5) {
    var t4 = this;
    if (void 0 !== this.t) {
      var n3 = i5.e, r4 = i5.x;
      if (void 0 !== n3) {
        n3.x = r4;
        i5.e = void 0;
      }
      if (void 0 !== r4) {
        r4.e = n3;
        i5.x = void 0;
      }
      if (i5 === this.t) {
        this.t = r4;
        if (void 0 === r4) o3(function() {
          var i6;
          null == (i6 = t4.Z) || i6.call(t4);
        });
      }
    }
  };
  l3.prototype.subscribe = function(i5) {
    var t4 = this;
    return j3(function() {
      var n3 = t4.value, o4 = r3;
      r3 = void 0;
      try {
        i5(n3);
      } finally {
        r3 = o4;
      }
    }, { name: "sub" });
  };
  l3.prototype.valueOf = function() {
    return this.value;
  };
  l3.prototype.toString = function() {
    return this.value + "";
  };
  l3.prototype.toJSON = function() {
    return this.value;
  };
  l3.prototype.peek = function() {
    var i5 = r3;
    r3 = void 0;
    try {
      return this.value;
    } finally {
      r3 = i5;
    }
  };
  Object.defineProperty(l3.prototype, "value", { get: function() {
    var i5 = a3(this);
    if (void 0 !== i5) i5.i = this.i;
    return this.v;
  }, set: function(i5) {
    if (i5 !== this.v) {
      if (v3 > 100) throw new Error("Cycle detected");
      !function(i6) {
        if (0 !== s3 && 0 === v3) {
          if (i6.l !== e3) {
            i6.l = e3;
            c3 = { S: i6, v: i6.v, i: i6.i, o: c3 };
          }
        }
      }(this);
      this.v = i5;
      this.i++;
      d3++;
      s3++;
      try {
        for (var n3 = this.t; void 0 !== n3; n3 = n3.x) n3.t.N();
      } finally {
        t3();
      }
    }
  } });
  function y3(i5, t4) {
    return new l3(i5, t4);
  }
  function w3(i5) {
    for (var t4 = i5.s; void 0 !== t4; t4 = t4.n) if (t4.S.i !== t4.i || !t4.S.h() || t4.S.i !== t4.i) return true;
    return false;
  }
  function _2(i5) {
    for (var t4 = i5.s; void 0 !== t4; t4 = t4.n) {
      var n3 = t4.S.n;
      if (void 0 !== n3) t4.r = n3;
      t4.S.n = t4;
      t4.i = -1;
      if (void 0 === t4.n) {
        i5.s = t4;
        break;
      }
    }
  }
  function b2(i5) {
    var t4 = i5.s, n3 = void 0;
    while (void 0 !== t4) {
      var r4 = t4.p;
      if (-1 === t4.i) {
        t4.S.U(t4);
        if (void 0 !== r4) r4.n = t4.n;
        if (void 0 !== t4.n) t4.n.p = r4;
      } else n3 = t4;
      t4.S.n = t4.r;
      if (void 0 !== t4.r) t4.r = void 0;
      t4 = r4;
    }
    i5.s = n3;
  }
  function p3(i5, t4) {
    l3.call(this, void 0);
    this.x = i5;
    this.s = void 0;
    this.g = d3 - 1;
    this.f = 4;
    this.W = null == t4 ? void 0 : t4.watched;
    this.Z = null == t4 ? void 0 : t4.unwatched;
    this.name = null == t4 ? void 0 : t4.name;
  }
  p3.prototype = new l3();
  p3.prototype.h = function() {
    this.f &= -3;
    if (1 & this.f) return false;
    if (32 == (36 & this.f)) return true;
    this.f &= -5;
    if (this.g === d3) return true;
    this.g = d3;
    this.f |= 1;
    if (this.i > 0 && !w3(this)) {
      this.f &= -2;
      return true;
    }
    var i5 = r3;
    try {
      _2(this);
      r3 = this;
      var t4 = this.x();
      if (16 & this.f || this.v !== t4 || 0 === this.i) {
        this.v = t4;
        this.f &= -17;
        this.i++;
      }
    } catch (i6) {
      this.v = i6;
      this.f |= 16;
      this.i++;
    }
    r3 = i5;
    b2(this);
    this.f &= -2;
    return true;
  };
  p3.prototype.S = function(i5) {
    if (void 0 === this.t) {
      this.f |= 36;
      for (var t4 = this.s; void 0 !== t4; t4 = t4.n) t4.S.S(t4);
    }
    l3.prototype.S.call(this, i5);
  };
  p3.prototype.U = function(i5) {
    if (void 0 !== this.t) {
      l3.prototype.U.call(this, i5);
      if (void 0 === this.t) {
        this.f &= -33;
        for (var t4 = this.s; void 0 !== t4; t4 = t4.n) t4.S.U(t4);
      }
    }
  };
  p3.prototype.N = function() {
    if (!(2 & this.f)) {
      this.f |= 6;
      for (var i5 = this.t; void 0 !== i5; i5 = i5.x) i5.t.N();
    }
  };
  Object.defineProperty(p3.prototype, "value", { get: function() {
    if (1 & this.f) throw new Error("Cycle detected");
    var i5 = a3(this);
    this.h();
    if (void 0 !== i5) i5.i = this.i;
    if (16 & this.f) throw this.v;
    return this.v;
  } });
  function g2(i5, t4) {
    return new p3(i5, t4);
  }
  function S2(i5) {
    var n3 = i5.m;
    i5.m = void 0;
    if ("function" == typeof n3) {
      s3++;
      var o4 = r3;
      r3 = void 0;
      try {
        n3();
      } catch (t4) {
        i5.f &= -2;
        i5.f |= 8;
        m3(i5);
        throw t4;
      } finally {
        r3 = o4;
        t3();
      }
    }
  }
  function m3(i5) {
    for (var t4 = i5.s; void 0 !== t4; t4 = t4.n) t4.S.U(t4);
    i5.x = void 0;
    i5.s = void 0;
    S2(i5);
  }
  function x2(i5) {
    if (r3 !== this) throw new Error("Out-of-order effect");
    b2(this);
    r3 = i5;
    this.f &= -2;
    if (8 & this.f) m3(this);
    t3();
  }
  function E2(i5, t4) {
    this.x = i5;
    this.m = void 0;
    this.s = void 0;
    this.u = void 0;
    this.f = 32;
    this.name = null == t4 ? void 0 : t4.name;
    if (f3) f3.push(this);
  }
  E2.prototype.c = function() {
    var i5 = this.S();
    try {
      if (8 & this.f) return;
      if (void 0 === this.x) return;
      var t4 = this.x();
      if ("function" == typeof t4) this.m = t4;
    } finally {
      i5();
    }
  };
  E2.prototype.S = function() {
    if (1 & this.f) throw new Error("Cycle detected");
    this.f |= 1;
    this.f &= -9;
    S2(this);
    _2(this);
    s3++;
    var i5 = r3;
    r3 = this;
    return x2.bind(this, i5);
  };
  E2.prototype.N = function() {
    if (!(2 & this.f)) {
      this.f |= 2;
      this.u = h3;
      h3 = this;
    }
  };
  E2.prototype.d = function() {
    this.f |= 8;
    if (!(1 & this.f)) m3(this);
  };
  E2.prototype.dispose = function() {
    this.d();
  };
  function j3(i5, t4) {
    var n3 = new E2(i5, t4);
    try {
      n3.c();
    } catch (i6) {
      n3.d();
      throw i6;
    }
    var r4 = n3.d.bind(n3);
    r4[Symbol.dispose] = r4;
    return r4;
  }

  // node_modules/@preact/signals/dist/signals.module.js
  var h4;
  var l4;
  var p4;
  var m4 = "undefined" != typeof window && !!window.__PREACT_SIGNALS_DEVTOOLS__;
  var _3 = [];
  j3(function() {
    h4 = this.N;
  })();
  function g3(i5, t4) {
    l[i5] = t4.bind(null, l[i5] || function() {
    });
  }
  function y4(i5) {
    if (p4) p4();
    p4 = i5 && i5.S();
  }
  function b3(i5) {
    var n3 = this, r4 = i5.data, o4 = useSignal(r4);
    o4.value = r4;
    var e4 = T2(function() {
      var i6 = n3, r5 = n3.__v;
      while (r5 = r5.__) if (r5.__c) {
        r5.__c.__$f |= 4;
        break;
      }
      var f5 = g2(function() {
        var i7 = o4.value.value;
        return 0 === i7 ? 0 : true === i7 ? "" : i7 || "";
      }), e5 = g2(function() {
        return !Array.isArray(f5.value) && !t(f5.value);
      }), u6 = j3(function() {
        this.N = M;
        if (e5.value) {
          var n4 = f5.value;
          if (i6.__v && i6.__v.__e && 3 === i6.__v.__e.nodeType) i6.__v.__e.data = n4;
        }
      }), c5 = n3.__$u.d;
      n3.__$u.d = function() {
        u6();
        c5.call(this);
      };
      return [e5, f5];
    }, []), u5 = e4[0], c4 = e4[1];
    return u5.value ? c4.peek() : c4.value;
  }
  b3.displayName = "ReactiveTextNode";
  Object.defineProperties(l3.prototype, { constructor: { configurable: true, value: void 0 }, type: { configurable: true, value: b3 }, props: { configurable: true, get: function() {
    return { data: this };
  } }, __b: { configurable: true, value: 1 } });
  g3("__b", function(i5, n3) {
    if (m4 && "function" == typeof n3.type) window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent();
    if ("string" == typeof n3.type) {
      var t4, r4 = n3.props;
      for (var f5 in r4) if ("children" !== f5) {
        var o4 = r4[f5];
        if (o4 instanceof l3) {
          if (!t4) n3.__np = t4 = {};
          t4[f5] = o4;
          r4[f5] = o4.peek();
        }
      }
    }
    i5(n3);
  });
  g3("__r", function(i5, n3) {
    if (m4 && "function" == typeof n3.type) window.__PREACT_SIGNALS_DEVTOOLS__.enterComponent(n3);
    if (n3.type !== S) {
      y4();
      var t4, f5 = n3.__c;
      if (f5) {
        f5.__$f &= -2;
        if (void 0 === (t4 = f5.__$u)) f5.__$u = t4 = function(i6) {
          var n4;
          j3(function() {
            n4 = this;
          });
          n4.c = function() {
            f5.__$f |= 1;
            f5.setState({});
          };
          return n4;
        }();
      }
      l4 = f5;
      y4(t4);
    }
    i5(n3);
  });
  g3("__e", function(i5, n3, t4, r4) {
    if (m4) window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent();
    y4();
    l4 = void 0;
    i5(n3, t4, r4);
  });
  g3("diffed", function(i5, n3) {
    if (m4 && "function" == typeof n3.type) window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent();
    y4();
    l4 = void 0;
    var t4;
    if ("string" == typeof n3.type && (t4 = n3.__e)) {
      var r4 = n3.__np, f5 = n3.props;
      if (r4) {
        var o4 = t4.U;
        if (o4) for (var e4 in o4) {
          var u5 = o4[e4];
          if (void 0 !== u5 && !(e4 in r4)) {
            u5.d();
            o4[e4] = void 0;
          }
        }
        else {
          o4 = {};
          t4.U = o4;
        }
        for (var a4 in r4) {
          var c4 = o4[a4], v4 = r4[a4];
          if (void 0 === c4) {
            c4 = k3(t4, a4, v4, f5);
            o4[a4] = c4;
          } else c4.o(v4, f5);
        }
      }
    }
    i5(n3);
  });
  function k3(i5, n3, t4, r4) {
    var f5 = n3 in i5 && void 0 === i5.ownerSVGElement, o4 = y3(t4);
    return { o: function(i6, n4) {
      o4.value = i6;
      r4 = n4;
    }, d: j3(function() {
      this.N = M;
      var t5 = o4.value.value;
      if (r4[n3] !== t5) {
        r4[n3] = t5;
        if (f5) i5[n3] = t5;
        else if (null != t5 && (false !== t5 || "-" === n3[4])) i5.setAttribute(n3, t5);
        else i5.removeAttribute(n3);
      }
    }) };
  }
  g3("unmount", function(i5, n3) {
    if ("string" == typeof n3.type) {
      var t4 = n3.__e;
      if (t4) {
        var r4 = t4.U;
        if (r4) {
          t4.U = void 0;
          for (var f5 in r4) {
            var o4 = r4[f5];
            if (o4) o4.d();
          }
        }
      }
    } else {
      var e4 = n3.__c;
      if (e4) {
        var u5 = e4.__$u;
        if (u5) {
          e4.__$u = void 0;
          u5.d();
        }
      }
    }
    i5(n3);
  });
  g3("__h", function(i5, n3, t4, r4) {
    if (r4 < 3 || 9 === r4) n3.__$f |= 2;
    i5(n3, t4, r4);
  });
  C.prototype.shouldComponentUpdate = function(i5, n3) {
    var t4 = this.__$u, r4 = t4 && void 0 !== t4.s;
    for (var f5 in n3) return true;
    if (this.__f || "boolean" == typeof this.u && true === this.u) {
      var o4 = 2 & this.__$f;
      if (!(r4 || o4 || 4 & this.__$f)) return true;
      if (1 & this.__$f) return true;
    } else {
      if (!(r4 || 4 & this.__$f)) return true;
      if (3 & this.__$f) return true;
    }
    for (var e4 in i5) if ("__source" !== e4 && i5[e4] !== this.props[e4]) return true;
    for (var u5 in this.props) if (!(u5 in i5)) return true;
    return false;
  };
  function useSignal(i5, n3) {
    return d2(function() {
      return y3(i5, n3);
    })[0];
  }
  var A3 = function(i5) {
    queueMicrotask(function() {
      queueMicrotask(i5);
    });
  };
  function F() {
    n2(function() {
      var i5;
      while (i5 = _3.shift()) h4.call(i5);
    });
  }
  function M() {
    if (1 === _3.push(this)) (l.requestAnimationFrame || A3)(F);
  }

  // runtime/web/frontend/src/api/websocket.ts
  var DEFAULT_MAX_RECONNECT_DELAY_MS = 3e4;
  var DEFAULT_INITIAL_RECONNECT_DELAY_MS = 1e3;
  function resolveWebSocketUrl(path = "/ws") {
    if (typeof window !== "undefined" && window.location) {
      const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
      return `${protocol}//${window.location.host}${path}`;
    }
    return `ws://localhost${path}`;
  }
  var WebSocketManager = class {
    constructor(url = resolveWebSocketUrl(), initialReconnectDelayMs = DEFAULT_INITIAL_RECONNECT_DELAY_MS, maxReconnectDelayMs = DEFAULT_MAX_RECONNECT_DELAY_MS) {
      this.url = url;
      this.initialReconnectDelayMs = initialReconnectDelayMs;
      this.maxReconnectDelayMs = maxReconnectDelayMs;
    }
    socket = null;
    reconnectTimer = null;
    reconnectAttempts = 0;
    shouldReconnect = true;
    messageHandlers = /* @__PURE__ */ new Set();
    statusHandlers = /* @__PURE__ */ new Set();
    connect() {
      this.clearReconnectTimer();
      if (this.socket && (this.socket.readyState === WebSocket.OPEN || this.socket.readyState === WebSocket.CONNECTING)) {
        return;
      }
      try {
        this.socket = new WebSocket(this.url);
        this.emitStatus("disconnected");
        this.attachSocketListeners(this.socket);
      } catch {
        this.emitStatus("disconnected");
        this.scheduleReconnect();
      }
    }
    disconnect() {
      this.shouldReconnect = false;
      this.clearReconnectTimer();
      if (this.socket) {
        this.socket.close();
        this.socket = null;
      }
      this.emitStatus("disconnected");
    }
    onMessage(handler) {
      this.messageHandlers.add(handler);
      return () => this.messageHandlers.delete(handler);
    }
    onStatusChange(handler) {
      this.statusHandlers.add(handler);
      return () => this.statusHandlers.delete(handler);
    }
    send(data) {
      if (this.socket?.readyState === WebSocket.OPEN) {
        this.socket.send(data);
      }
    }
    attachSocketListeners(socket) {
      socket.onopen = () => {
        this.reconnectAttempts = 0;
        this.emitStatus("connected");
      };
      socket.onmessage = (event) => {
        for (const handler of this.messageHandlers) {
          handler(event);
        }
      };
      socket.onclose = () => {
        this.emitStatus("disconnected");
        this.socket = null;
        if (this.shouldReconnect) {
          this.scheduleReconnect();
        }
      };
      socket.onerror = () => {
        this.emitStatus("disconnected");
      };
    }
    scheduleReconnect() {
      if (!this.shouldReconnect || this.reconnectTimer) {
        return;
      }
      const delay = Math.min(this.maxReconnectDelayMs, this.initialReconnectDelayMs * 2 ** this.reconnectAttempts);
      this.reconnectAttempts += 1;
      this.reconnectTimer = setTimeout(() => {
        this.reconnectTimer = null;
        this.connect();
      }, delay);
    }
    clearReconnectTimer() {
      if (this.reconnectTimer) {
        clearTimeout(this.reconnectTimer);
        this.reconnectTimer = null;
      }
    }
    emitStatus(status) {
      for (const handler of this.statusHandlers) {
        handler(status);
      }
    }
  };

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f4 = 0;
  var i4 = Array.isArray;
  function u4(e4, t4, n3, o4, i5, u5) {
    t4 || (t4 = {});
    var a4, c4, p5 = t4;
    if ("ref" in p5) for (c4 in p5 = {}, t4) "ref" == c4 ? a4 = t4[c4] : p5[c4] = t4[c4];
    var l5 = { type: e4, props: p5, key: n3, ref: a4, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f4, __i: -1, __u: 0, __source: i5, __self: u5 };
    if ("function" == typeof e4 && (a4 = e4.defaultProps)) for (c4 in a4) void 0 === p5[c4] && (p5[c4] = a4[c4]);
    return l.vnode && l.vnode(l5), l5;
  }

  // runtime/web/frontend/src/components/Icon.tsx
  function Icon({ name, size = 16, className = "" }) {
    return /* @__PURE__ */ u4(
      "i",
      {
        className: `codicon codicon-${name} ${className}`,
        style: { fontSize: `${size}px` }
      }
    );
  }

  // runtime/web/frontend/src/components/ActivityBar.tsx
  var PANELS = [
    { id: "explorer", icon: "files", label: "Explorer" },
    { id: "search", icon: "search", label: "Search" },
    { id: "extensions", icon: "extensions", label: "Extensions" },
    { id: "agent", icon: "hubot", label: "Agent" },
    { id: "settings", icon: "gear", label: "Settings", alignBottom: true }
  ];
  function ActivityBar({ activePanel, onPanelChange }) {
    return /* @__PURE__ */ u4("nav", { className: "activity-bar", "aria-label": "Activity bar", children: PANELS.map((panel) => {
      const active = panel.id === activePanel;
      return /* @__PURE__ */ u4(
        "button",
        {
          type: "button",
          className: `activity-bar__button ${active ? "is-active" : ""} ${"alignBottom" in panel && panel.alignBottom ? "is-bottom" : ""}`,
          title: panel.label,
          "aria-label": panel.label,
          "aria-pressed": active,
          onClick: () => onPanelChange(panel.id),
          children: /* @__PURE__ */ u4(Icon, { name: panel.icon, size: 24, className: "activity-bar__icon" })
        },
        panel.id
      );
    }) });
  }

  // runtime/web/frontend/src/components/Sidebar.tsx
  function Sidebar({ title, actions = [], children, onCollapse }) {
    const [collapsed, setCollapsed] = d2(false);
    const handleCollapse = () => {
      setCollapsed(!collapsed);
      onCollapse?.();
    };
    if (collapsed) {
      return null;
    }
    return /* @__PURE__ */ u4("aside", { className: "sidebar", style: { minWidth: "200px" }, children: [
      /* @__PURE__ */ u4("header", { className: "sidebar__header", children: [
        /* @__PURE__ */ u4("h2", { className: "sidebar__title", children: title }),
        /* @__PURE__ */ u4("div", { className: "sidebar__actions", children: [
          actions.map((action) => /* @__PURE__ */ u4(
            "button",
            {
              type: "button",
              className: "sidebar__action-btn",
              title: action.label,
              "aria-label": action.label,
              onClick: action.onClick,
              children: /* @__PURE__ */ u4(Icon, { name: action.icon, size: 16 })
            },
            action.label
          )),
          /* @__PURE__ */ u4(
            "button",
            {
              type: "button",
              className: "sidebar__action-btn",
              title: "Collapse sidebar",
              "aria-label": "Collapse sidebar",
              onClick: handleCollapse,
              children: /* @__PURE__ */ u4(Icon, { name: "chevron-left", size: 16 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ u4("div", { className: "sidebar__content", children })
    ] });
  }

  // runtime/web/frontend/src/services/CommandRegistry.ts
  var CommandRegistry = class {
    commands = /* @__PURE__ */ new Map();
    register(cmd) {
      this.commands.set(cmd.id, cmd);
    }
    unregister(id) {
      this.commands.delete(id);
    }
    search(query) {
      const normalizedQuery = query.trim().toLowerCase();
      if (!normalizedQuery) {
        return this.getAll();
      }
      return this.getAll().filter((command) => command.label.toLowerCase().includes(normalizedQuery));
    }
    execute(id) {
      const command = this.commands.get(id);
      if (!command) {
        return;
      }
      command.handler();
    }
    getAll() {
      return Array.from(this.commands.values());
    }
  };
  var commandRegistry = new CommandRegistry();

  // runtime/web/frontend/src/components/CommandPalette.tsx
  function CommandPalette({ visible, onClose }) {
    const [query, setQuery] = d2("");
    const [selectedIndex, setSelectedIndex] = d2(0);
    const inputRef = A2(null);
    const results = T2(() => commandRegistry.search(query), [query]);
    y2(() => {
      if (!visible) {
        return;
      }
      setQuery("");
      setSelectedIndex(0);
      const timer = window.setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
      return () => window.clearTimeout(timer);
    }, [visible]);
    y2(() => {
      setSelectedIndex((current) => {
        if (results.length === 0) {
          return 0;
        }
        return Math.min(current, results.length - 1);
      });
    }, [results]);
    if (!visible) {
      return null;
    }
    const executeSelected = () => {
      const command = results[selectedIndex];
      if (!command) {
        return;
      }
      commandRegistry.execute(command.id);
      onClose();
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setSelectedIndex((current) => {
          if (results.length === 0) {
            return 0;
          }
          return (current + 1) % results.length;
        });
        return;
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelectedIndex((current) => {
          if (results.length === 0) {
            return 0;
          }
          return (current - 1 + results.length) % results.length;
        });
        return;
      }
      if (event.key === "Enter") {
        event.preventDefault();
        executeSelected();
      }
    };
    return /* @__PURE__ */ u4("div", { className: "command-palette-backdrop", onClick: onClose, children: /* @__PURE__ */ u4("div", { className: "command-palette", onClick: (event) => event.stopPropagation(), children: [
      /* @__PURE__ */ u4(
        "input",
        {
          ref: inputRef,
          className: "command-palette__input",
          placeholder: "Type a command...",
          value: query,
          onInput: (event) => setQuery(event.target.value),
          onKeyDown: handleKeyDown
        }
      ),
      /* @__PURE__ */ u4("ul", { className: "command-palette__results", role: "listbox", "aria-label": "Commands", children: [
        results.map((command, index) => /* @__PURE__ */ u4(
          "li",
          {
            className: `command-palette__row ${index === selectedIndex ? "is-active" : ""}`,
            onMouseDown: (event) => event.preventDefault(),
            onClick: () => {
              commandRegistry.execute(command.id);
              onClose();
            },
            children: [
              /* @__PURE__ */ u4("span", { className: "command-palette__label", children: command.label }),
              /* @__PURE__ */ u4("span", { className: "command-palette__keybinding", children: command.keybinding ?? "" })
            ]
          },
          command.id
        )),
        results.length === 0 && /* @__PURE__ */ u4("li", { className: "command-palette__empty", children: "No matching commands" })
      ] })
    ] }) });
  }

  // runtime/web/frontend/src/components/SplitPane.tsx
  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
  function SplitPane({
    direction,
    initialSize,
    minSize,
    maxSize,
    minSecondSize = 0,
    collapseSecond = false,
    children,
    onResize
  }) {
    const normalizedInitialSize = T2(() => clamp(initialSize, minSize, maxSize), [initialSize, minSize, maxSize]);
    const [firstSize, setFirstSize] = d2(normalizedInitialSize);
    const [isCollapsed, setIsCollapsed] = d2(false);
    const [isDragging, setIsDragging] = d2(false);
    const rootRef = A2(null);
    const dragStartPositionRef = A2(0);
    const dragStartSizeRef = A2(normalizedInitialSize);
    const restoreSizeRef = A2(normalizedInitialSize);
    const [firstChild, secondChild] = children;
    y2(() => {
      if (!isDragging) return;
      const axis = direction === "horizontal" ? "clientX" : "clientY";
      const handleMouseMove = (event) => {
        const currentPosition = event[axis];
        const delta = currentPosition - dragStartPositionRef.current;
        const containerSize = direction === "horizontal" ? rootRef.current?.getBoundingClientRect().width ?? 0 : rootRef.current?.getBoundingClientRect().height ?? 0;
        const maxAllowedFirst = containerSize > 0 ? Math.max(minSize, containerSize - minSecondSize) : maxSize;
        const nextSize = clamp(dragStartSizeRef.current + delta, 0, Math.min(maxSize, maxAllowedFirst));
        if (nextSize < minSize / 2) {
          setFirstSize(0);
          setIsCollapsed(true);
          onResize?.(0);
        } else {
          const clamped = clamp(nextSize, minSize, Math.min(maxSize, maxAllowedFirst));
          setFirstSize(clamped);
          setIsCollapsed(false);
          if (clamped > 0) restoreSizeRef.current = clamped;
          onResize?.(clamped);
        }
      };
      const handleMouseUp = () => setIsDragging(false);
      const previousUserSelect = document.body.style.userSelect;
      const previousCursor = document.body.style.cursor;
      document.body.style.userSelect = "none";
      document.body.style.cursor = direction === "horizontal" ? "col-resize" : "row-resize";
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.body.style.userSelect = previousUserSelect;
        document.body.style.cursor = previousCursor;
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }, [direction, isDragging, maxSize, minSecondSize, minSize, onResize]);
    const handleMouseDown = (event) => {
      event.preventDefault();
      const axis = direction === "horizontal" ? "clientX" : "clientY";
      dragStartPositionRef.current = event[axis];
      dragStartSizeRef.current = isCollapsed ? 0 : firstSize;
      setIsDragging(true);
    };
    const handleDoubleClick = () => {
      if (isCollapsed) {
        const restored = clamp(restoreSizeRef.current || normalizedInitialSize, minSize, maxSize);
        setFirstSize(restored);
        setIsCollapsed(false);
        onResize?.(restored);
      } else {
        if (firstSize > 0) restoreSizeRef.current = firstSize;
        setFirstSize(0);
        setIsCollapsed(true);
        onResize?.(0);
      }
    };
    const displaySize = isCollapsed ? 0 : firstSize;
    const firstPaneStyle = collapseSecond ? void 0 : direction === "horizontal" ? { width: `${displaySize}px`, minWidth: `${displaySize}px`, maxWidth: `${displaySize}px`, overflow: "hidden" } : { height: `${displaySize}px`, minHeight: `${displaySize}px`, maxHeight: `${displaySize}px`, overflow: "hidden" };
    return /* @__PURE__ */ u4("div", { ref: rootRef, className: `split-pane split-pane--${direction} ${isCollapsed ? "is-collapsed" : ""}`, children: [
      /* @__PURE__ */ u4("div", { className: "split-pane__first", style: firstPaneStyle, children: firstChild }),
      /* @__PURE__ */ u4(
        "div",
        {
          className: `split-handle split-handle--${direction} ${isCollapsed ? "split-handle--collapsed" : ""}`,
          onMouseDown: handleMouseDown,
          onDblClick: handleDoubleClick,
          role: "separator",
          "aria-orientation": direction === "horizontal" ? "vertical" : "horizontal",
          "aria-label": isCollapsed ? "Double-click or drag to restore panel" : "Resize panels"
        }
      ),
      /* @__PURE__ */ u4("div", { className: "split-pane__second", children: secondChild })
    ] });
  }

  // runtime/web/frontend/src/panels/PanelRouter.tsx
  var PANEL_CONTENT = {
    explorer: {
      title: "\u{1F4C1} Explorer Panel",
      description: "Coming soon..."
    },
    files: {
      title: "\u{1F4C1} Explorer Panel",
      description: "Coming soon..."
    },
    search: {
      title: "\u{1F50D} Search Panel",
      description: "Coming soon..."
    },
    extensions: {
      title: "\u{1F9E9} Extensions Panel",
      description: "Coming soon..."
    },
    agent: {
      title: "\u{1F916} Agent Panel",
      description: "Coming soon..."
    },
    settings: {
      title: "\u2699\uFE0F Settings Panel",
      description: "Coming soon..."
    }
  };
  var FALLBACK_PANEL = {
    title: "\u{1F916} Agent Panel",
    description: "Coming soon..."
  };
  function PanelRouter({ activePanel }) {
    const panel = PANEL_CONTENT[activePanel] ?? FALLBACK_PANEL;
    return /* @__PURE__ */ u4("section", { className: "shell-panel-placeholder", "aria-live": "polite", children: /* @__PURE__ */ u4("div", { className: "shell-panel-placeholder__content", children: [
      /* @__PURE__ */ u4("h1", { className: "shell-panel-placeholder__title", children: panel.title }),
      /* @__PURE__ */ u4("p", { className: "shell-panel-placeholder__description", children: panel.description })
    ] }) });
  }

  // runtime/web/frontend/src/App.tsx
  function App() {
    const connectionStatus = useSignal("disconnected");
    const activePanel = useSignal("agent");
    const paletteVisible = useSignal(false);
    const terminalVisible = useSignal(false);
    const websocket = T2(() => new WebSocketManager(), []);
    y2(() => {
      const unsubscribe = websocket.onStatusChange((status) => {
        connectionStatus.value = status;
      });
      websocket.connect();
      return () => {
        unsubscribe();
        websocket.disconnect();
      };
    }, [connectionStatus, websocket]);
    y2(() => {
      const handleWindowKeyDown = (event) => {
        if (event.ctrlKey && event.code === "Backquote") {
          event.preventDefault();
          terminalVisible.value = !terminalVisible.value;
          return;
        }
        if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "p") {
          event.preventDefault();
          paletteVisible.value = !paletteVisible.value;
        }
      };
      window.addEventListener("keydown", handleWindowKeyDown);
      return () => {
        window.removeEventListener("keydown", handleWindowKeyDown);
      };
    }, [paletteVisible]);
    y2(() => {
      const commands = [
        {
          id: "navigation.show-explorer",
          label: "Show Explorer",
          category: "navigation",
          keybinding: "Ctrl+Shift+E",
          handler: () => {
            activePanel.value = "explorer";
          }
        },
        {
          id: "navigation.show-agent",
          label: "Show Agent",
          category: "navigation",
          keybinding: "Ctrl+Shift+A",
          handler: () => {
            activePanel.value = "agent";
          }
        },
        {
          id: "terminal.toggle",
          label: "Toggle Terminal",
          category: "terminal",
          keybinding: "Ctrl+`",
          handler: () => {
            terminalVisible.value = !terminalVisible.value;
            console.log(`[command] terminal ${terminalVisible.value ? "shown" : "hidden"}`);
          }
        }
      ];
      commands.forEach((command) => commandRegistry.register(command));
      return () => {
        commands.forEach((command) => commandRegistry.unregister(command.id));
      };
    }, [activePanel, terminalVisible]);
    const connected = connectionStatus.value === "connected";
    return /* @__PURE__ */ u4("div", { className: "shell-root", children: [
      /* @__PURE__ */ u4(
        ActivityBar,
        {
          activePanel: activePanel.value,
          onPanelChange: (id) => {
            activePanel.value = id;
          }
        }
      ),
      /* @__PURE__ */ u4("main", { className: "shell-content", children: [
        /* @__PURE__ */ u4("header", { className: "shell-status", children: [
          /* @__PURE__ */ u4(
            "span",
            {
              className: `shell-status__dot ${connected ? "is-connected" : "is-disconnected"}`,
              "aria-label": connected ? "connected" : "disconnected",
              title: connected ? "Connected" : "Disconnected"
            }
          ),
          /* @__PURE__ */ u4("span", { className: "shell-status__text", children: connected ? "Connected" : "Disconnected" })
        ] }),
        /* @__PURE__ */ u4("div", { className: "shell-main-layout", children: /* @__PURE__ */ u4(SplitPane, { direction: "horizontal", initialSize: 250, minSize: 150, maxSize: 400, children: [
          /* @__PURE__ */ u4(Sidebar, { title: activePanel.value }),
          /* @__PURE__ */ u4(PanelRouter, { activePanel: activePanel.value })
        ] }) })
      ] }),
      /* @__PURE__ */ u4(
        CommandPalette,
        {
          visible: paletteVisible.value,
          onClose: () => {
            paletteVisible.value = false;
          }
        }
      )
    ] });
  }

  // runtime/web/frontend/src/index.tsx
  var root = document.getElementById("app");
  if (!root) {
    throw new Error("Missing #app root element");
  }
  R(/* @__PURE__ */ u4(App, {}), root);
})();
//# sourceMappingURL=app.bundle.js.map
