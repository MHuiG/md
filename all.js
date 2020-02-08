(function(r, l) {
    function $a(a) {
        var b = ka[a] = {},
        c,
        e,
        a = a.split(/\s+/);
        for (c = 0, e = a.length; c < e; c++) b[a[c]] = !0;
        return b
    }
    function la(a, b, d) {
        if (d === l && 1 === a.nodeType) if (d = "data-" + b.replace(ab, "-$1").toLowerCase(), d = a.getAttribute(d), "string" === typeof d) {
            try {
                d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null: c.isNumeric(d) ? parseFloat(d) : bb.test(d) ? c.parseJSON(d) : d
            } catch(e) {}
            c.data(a, b, d)
        } else d = l;
        return d
    }
    function Z(a) {
        for (var b in a) if (! ("data" === b && c.isEmptyObject(a[b])) && "toJSON" !== b) return ! 1;
        return ! 0
    }
    function ma(a, b, d) {
        var e = b + "defer",
        f = b + "queue",
        g = b + "mark",
        h = c._data(a, e);
        h && ("queue" === d || !c._data(a, f)) && ("mark" === d || !c._data(a, g)) && setTimeout(function() { ! c._data(a, f) && !c._data(a, g) && (c.removeData(a, e, !0), h.fire())
        },
        0)
    }
    function G() {
        return ! 1
    }
    function I() {
        return ! 0
    }
    function na(a, b, d) {
        b = b || 0;
        if (c.isFunction(b)) return c.grep(a,
        function(a, c) {
            return !! b.call(a, c, a) === d
        });
        if (b.nodeType) return c.grep(a,
        function(a) {
            return a === b === d
        });
        if ("string" === typeof b) {
            var e = c.grep(a,
            function(a) {
                return 1 === a.nodeType
            });
            if (cb.test(b)) return c.filter(b, e, !d);
            b = c.filter(b, e)
        }
        return c.grep(a,
        function(a) {
            return 0 <= c.inArray(a, b) === d
        })
    }
    function oa(a) {
        var b = pa.split(" "),
        a = a.createDocumentFragment();
        if (a.createElement) for (; b.length;) a.createElement(b.pop());
        return a
    }
    function qa(a, b) {
        if (1 === b.nodeType && c.hasData(a)) {
            var d, e, f;
            e = c._data(a);
            var g = c._data(b, e),
            h = e.events;
            if (h) for (d in delete g.handle, g.events = {},
            h) for (e = 0, f = h[d].length; e < f; e++) c.event.add(b, d + (h[d][e].namespace ? ".": "") + h[d][e].namespace, h[d][e], h[d][e].data);
            g.data && (g.data = c.extend({},
            g.data))
        }
    }
    function ra(a, b) {
        var d;
        if (1 === b.nodeType) {
            b.clearAttributes && b.clearAttributes();
            b.mergeAttributes && b.mergeAttributes(a);
            d = b.nodeName.toLowerCase();
            if ("object" === d) b.outerHTML = a.outerHTML;
            else if ("input" === d && ("checkbox" === a.type || "radio" === a.type)) a.checked && (b.defaultChecked = b.checked = a.checked),
            b.value !== a.value && (b.value = a.value);
            else if ("option" === d) b.selected = a.defaultSelected;
            else if ("input" === d || "textarea" === d) b.defaultValue = a.defaultValue;
            b.removeAttribute(c.expando)
        }
    }
    function P(a) {
        return "undefined" !== typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" !== typeof a.querySelectorAll ? a.querySelectorAll("*") : []
    }
    function sa(a) {
        if ("checkbox" === a.type || "radio" === a.type) a.defaultChecked = a.checked
    }
    function ta(a) {
        var b = (a.nodeName || "").toLowerCase();
        "input" === b ? sa(a) : "script" !== b && "undefined" !== typeof a.getElementsByTagName && c.grep(a.getElementsByTagName("input"), sa)
    }
    function db(a, b) {
        b.src ? c.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : c.globalEval((b.text || b.textContent || b.innerHTML || "").replace(eb, "/*$0*/"));
        b.parentNode && b.parentNode.removeChild(b)
    }
    function ua(a, b, d) {
        var e = "width" === b ? a.offsetWidth: a.offsetHeight,
        f = "width" === b ? fb: gb;
        if (0 < e) return "border" !== d && c.each(f,
        function() {
            d || (e -= parseFloat(c.css(a, "padding" + this)) || 0);
            e = "margin" === d ? e + (parseFloat(c.css(a, d + this)) || 0) : e - (parseFloat(c.css(a, "border" + this + "Width")) || 0)
        }),
        e + "px";
        e = C(a, b, b);
        if (0 > e || null == e) e = a.style[b] || 0;
        e = parseFloat(e) || 0;
        d && c.each(f,
        function() {
            e += parseFloat(c.css(a, "padding" + this)) || 0;
            "padding" !== d && (e += parseFloat(c.css(a, "border" + this + "Width")) || 0);
            "margin" === d && (e += parseFloat(c.css(a, d + this)) || 0)
        });
        return e + "px"
    }
    function va(a) {
        return function(b, d) {
            "string" !== typeof b && (d = b, b = "*");
            if (c.isFunction(d)) for (var e = b.toLowerCase().split(wa), f = 0, g = e.length, h, i; f < g; f++) h = e[f],
            (i = /^\+/.test(h)) && (h = h.substr(1) || "*"),
            h = a[h] = a[h] || [],
            h[i ? "unshift": "push"](d)
        }
    }
    function U(a, b, c, e, f, g) {
        f = f || b.dataTypes[0];
        g = g || {};
        g[f] = !0;
        for (var f = a[f], h = 0, i = f ? f.length: 0, j = a === $, m; h < i && (j || !m); h++) m = f[h](b, c, e),
        "string" === typeof m && (!j || g[m] ? m = l: (b.dataTypes.unshift(m), m = U(a, b, c, e, m, g)));
        if ((j || !m) && !g["*"]) m = U(a, b, c, e, "*", g);
        return m
    }
    function xa(a, b) {
        var d, e, f = c.ajaxSettings.flatOptions || {};
        for (d in b) b[d] !== l && ((f[d] ? a: e || (e = {}))[d] = b[d]);
        e && c.extend(!0, a, e)
    }
    function aa(a, b, d, e) {
        if (c.isArray(b)) c.each(b,
        function(b, f) {
            d || hb.test(a) ? e(a, f) : aa(a + "[" + ("object" === typeof f || c.isArray(f) ? b: "") + "]", f, d, e)
        });
        else if (!d && null != b && "object" === typeof b) for (var f in b) aa(a + "[" + f + "]", b[f], d, e);
        else e(a, b)
    }
    function ya() {
        try {
            return new r.XMLHttpRequest
        } catch(a) {}
    }
    function za() {
        setTimeout(ib, 0);
        return V = c.now()
    }
    function ib() {
        V = l
    }
    function D(a, b) {
        var d = {};
        c.each(Aa.concat.apply([], Aa.slice(0, b)),
        function() {
            d[this] = a
        });
        return d
    }
    function Ba(a) {
        if (!ba[a]) {
            var b = k.body,
            d = c("<" + a + ">").appendTo(b),
            e = d.css("display");
            d.remove();
            if ("none" === e || "" === e) {
                y || (y = k.createElement("iframe"), y.frameBorder = y.width = y.height = 0);
                b.appendChild(y);
                if (!J || !y.createElement) J = (y.contentWindow || y.contentDocument).document,
                J.write(("CSS1Compat" === k.compatMode ? "<!doctype html>": "") + "<html><body>"),
                J.close();
                d = J.createElement(a);
                J.body.appendChild(d);
                e = c.css(d, "display");
                b.removeChild(y)
            }
            ba[a] = e
        }
        return ba[a]
    }
    function ca(a) {
        return c.isWindow(a) ? a: 9 === a.nodeType ? a.defaultView || a.parentWindow: !1
    }
    var k = r.document,
    jb = r.navigator,
    kb = r.location,
    c = function() {
        function a() {
            if (!b.isReady) {
                try {
                    k.documentElement.doScroll("left")
                } catch(c) {
                    setTimeout(a, 1);
                    return
                }
                b.ready()
            }
        }
        var b = function(a, c) {
            return new b.fn.init(a, c, f)
        },
        c = r.jQuery,
        e = r.$,
        f,
        g = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        h = /\S/,
        i = /^\s+/,
        j = /\s+$/,
        m = /\d/,
        t = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        o = /^[\],:{}\s]*$/,
        p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        n = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        lb = /(?:^|:|,)(?:\s*\[)+/g,
        mb = /(webkit)[ \/]([\w.]+)/,
        w = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        u = /(msie) ([\w.]+)/,
        x = /(mozilla)(?:.*? rv:([\w.]+))?/,
        v = /-([a-z]|[0-9])/gi,
        q = /^-ms-/,
        y = function(a, b) {
            return (b + "").toUpperCase()
        },
        s = jb.userAgent,
        K,
        Q,
        nb = Object.prototype.toString,
        da = Object.prototype.hasOwnProperty,
        ea = Array.prototype.push,
        T = Array.prototype.slice,
        Ca = String.prototype.trim,
        Da = Array.prototype.indexOf,
        Ea = {};
        b.fn = b.prototype = {
            constructor: b,
            init: function(a, c, d) {
                var e;
                if (!a) return this;
                if (a.nodeType) return this.context = this[0] = a,
                this.length = 1,
                this;
                if ("body" === a && !c && k.body) return this.context = k,
                this[0] = k.body,
                this.selector = a,
                this.length = 1,
                this;
                if ("string" === typeof a) {
                    if ((e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : g.exec(a)) && (e[1] || !c)) {
                        if (e[1]) return d = (c = c instanceof b ? c[0] : c) ? c.ownerDocument || c: k,
                        (a = t.exec(a)) ? b.isPlainObject(c) ? (a = [k.createElement(a[1])], b.fn.attr.call(a, c, !0)) : a = [d.createElement(a[1])] : (a = b.buildFragment([e[1]], [d]), a = (a.cacheable ? b.clone(a.fragment) : a.fragment).childNodes),
                        b.merge(this, a);
                        if ((c = k.getElementById(e[2])) && c.parentNode) {
                            if (c.id !== e[2]) return d.find(a);
                            this.length = 1;
                            this[0] = c
                        }
                        this.context = k;
                        this.selector = a;
                        return this
                    }
                    return ! c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
                }
                if (b.isFunction(a)) return d.ready(a);
                a.selector !== l && (this.selector = a.selector, this.context = a.context);
                return b.makeArray(a, this)
            },
            selector: "",
            jquery: "1.7",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return T.call(this, 0)
            },
            get: function(a) {
                return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
            },
            pushStack: function(a, c, d) {
                var e = this.constructor();
                b.isArray(a) ? ea.apply(e, a) : b.merge(e, a);
                e.prevObject = this;
                e.context = this.context;
                "find" === c ? e.selector = this.selector + (this.selector ? " ": "") + d: c && (e.selector = this.selector + "." + c + "(" + d + ")");
                return e
            },
            each: function(a, c) {
                return b.each(this, a, c)
            },
            ready: function(a) {
                b.bindReady();
                K.add(a);
                return this
            },
            eq: function(a) {
                return - 1 === a ? this.slice(a) : this.slice(a, +a + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            slice: function() {
                return this.pushStack(T.apply(this, arguments), "slice", T.call(arguments).join(","))
            },
            map: function(a) {
                return this.pushStack(b.map(this,
                function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: ea,
            sort: [].sort,
            splice: [].splice
        };
        b.fn.init.prototype = b.fn;
        b.extend = b.fn.extend = function() {
            var a, c, d, e, f, s = arguments[0] || {},
            g = 1,
            h = arguments.length,
            K = !1;
            "boolean" === typeof s && (K = s, s = arguments[1] || {},
            g = 2);
            "object" !== typeof s && !b.isFunction(s) && (s = {});
            h === g && (s = this, --g);
            for (; g < h; g++) if (null != (a = arguments[g])) for (c in a) d = s[c],
            e = a[c],
            s !== e && (K && e && (b.isPlainObject(e) || (f = b.isArray(e))) ? (f ? (f = !1, d = d && b.isArray(d) ? d: []) : d = d && b.isPlainObject(d) ? d: {},
            s[c] = b.extend(K, d, e)) : e !== l && (s[c] = e));
            return s
        };
        b.extend({
            noConflict: function(a) {
                r.$ === b && (r.$ = e);
                a && r.jQuery === b && (r.jQuery = c);
                return b
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? b.readyWait++:b.ready(!0)
            },
            ready: function(a) {
                if (!0 === a && !--b.readyWait || !0 !== a && !b.isReady) {
                    if (!k.body) return setTimeout(b.ready, 1);
                    b.isReady = !0; ! 0 !== a && 0 < --b.readyWait || (K.fireWith(k, [b]), b.fn.trigger && b(k).trigger("ready").unbind("ready"))
                }
            },
            bindReady: function() {
                if (!K) {
                    K = b.Callbacks("once memory");
                    if ("complete" === k.readyState) return setTimeout(b.ready, 1);
                    if (k.addEventListener) k.addEventListener("DOMContentLoaded", Q, !1),
                    r.addEventListener("load", b.ready, !1);
                    else if (k.attachEvent) {
                        k.attachEvent("onreadystatechange", Q);
                        r.attachEvent("onload", b.ready);
                        var c = !1;
                        try {
                            c = null == r.frameElement
                        } catch(d) {}
                        k.documentElement.doScroll && c && a()
                    }
                }
            },
            isFunction: function(a) {
                return "function" === b.type(a)
            },
            isArray: Array.isArray ||
            function(a) {
                return "array" === b.type(a)
            },
            isWindow: function(a) {
                return a && "object" === typeof a && "setInterval" in a
            },
            isNumeric: function(a) {
                return null != a && m.test(a) && !isNaN(a)
            },
            type: function(a) {
                return null == a ? "" + a: Ea[nb.call(a)] || "object"
            },
            isPlainObject: function(a) {
                if (!a || "object" !== b.type(a) || a.nodeType || b.isWindow(a)) return ! 1;
                try {
                    if (a.constructor && !da.call(a, "constructor") && !da.call(a.constructor.prototype, "isPrototypeOf")) return ! 1
                } catch(c) {
                    return ! 1
                }
                for (var d in a);
                return d === l || da.call(a, d)
            },
            isEmptyObject: function(a) {
                for (var b in a) return ! 1;
                return ! 0
            },
            error: function(a) {
                throw a
            },
            parseJSON: function(a) {
                if ("string" !== typeof a || !a) return null;
                a = b.trim(a);
                if (r.JSON && r.JSON.parse) return r.JSON.parse(a);
                if (o.test(a.replace(p, "@").replace(n, "]").replace(lb, ""))) return new Function("return " + a)();
                b.error("Invalid JSON: " + a)
            },
            parseXML: function(a) {
                var c, d;
                try {
                    r.DOMParser ? (d = new DOMParser, c = d.parseFromString(a, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(a))
                } catch(e) {
                    c = l
                } (!c || !c.documentElement || c.getElementsByTagName("parsererror").length) && b.error("Invalid XML: " + a);
                return c
            },
            noop: function() {},
            globalEval: function(a) {
                a && h.test(a) && (r.execScript ||
                function(a) {
                    r.eval.call(r, a)
                })(a)
            },
            camelCase: function(a) {
                return a.replace(q, "ms-").replace(v, y)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
            },
            each: function(a, c, d) {
                var e, f = 0,
                s = a.length,
                g = s === l || b.isFunction(a);
                if (d) if (g) for (e in a) {
                    if (!1 === c.apply(a[e], d)) break
                } else for (; f < s && !(!1 === c.apply(a[f++], d)););
                else if (g) for (e in a) {
                    if (!1 === c.call(a[e], e, a[e])) break
                } else for (; f < s && !(!1 === c.call(a[f], f, a[f++])););
                return a
            },
            trim: Ca ?
            function(a) {
                return null == a ? "": Ca.call(a)
            }: function(a) {
                return null == a ? "": a.toString().replace(i, "").replace(j, "")
            },
            makeArray: function(a, c) {
                var d = c || [];
                if (null != a) {
                    var e = b.type(a);
                    null == a.length || "string" === e || "function" === e || "regexp" === e || b.isWindow(a) ? ea.call(d, a) : b.merge(d, a)
                }
                return d
            },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if (Da) return Da.call(b, a, c);
                    d = b.length;
                    for (c = c ? 0 > c ? Math.max(0, d + c) : c: 0; c < d; c++) if (c in b && b[c] === a) return c
                }
                return - 1
            },
            merge: function(a, b) {
                var c = a.length,
                d = 0;
                if ("number" === typeof b.length) for (var e = b.length; d < e; d++) a[c++] = b[d];
                else for (; b[d] !== l;) a[c++] = b[d++];
                a.length = c;
                return a
            },
            grep: function(a, b, c) {
                for (var d = [], e, c = !!c, f = 0, s = a.length; f < s; f++) e = !!b(a[f], f),
                c !== e && d.push(a[f]);
                return d
            },
            map: function(a, c, d) {
                var e, f, s = [],
                g = 0,
                h = a.length;
                if (a instanceof b || h !== l && "number" === typeof h && (0 < h && a[0] && a[h - 1] || 0 === h || b.isArray(a))) for (; g < h; g++) e = c(a[g], g, d),
                null != e && (s[s.length] = e);
                else for (f in a) e = c(a[f], f, d),
                null != e && (s[s.length] = e);
                return s.concat.apply([], s)
            },
            guid: 1,
            proxy: function(a, c) {
                if ("string" === typeof c) var d = a[c],
                c = a,
                a = d;
                if (!b.isFunction(a)) return l;
                var e = T.call(arguments, 2),
                d = function() {
                    return a.apply(c, e.concat(T.call(arguments)))
                };
                d.guid = a.guid = a.guid || d.guid || b.guid++;
                return d
            },
            access: function(a, c, d, e, f, s) {
                var g = a.length;
                if ("object" === typeof c) {
                    for (var h in c) b.access(a, h, c[h], e, f, d);
                    return a
                }
                if (d !== l) {
                    e = !s && e && b.isFunction(d);
                    for (h = 0; h < g; h++) f(a[h], c, e ? d.call(a[h], h, f(a[h], c)) : d, s);
                    return a
                }
                return g ? f(a[0], c) : l
            },
            now: function() {
                return (new Date).getTime()
            },
            uaMatch: function(a) {
                a = a.toLowerCase();
                a = mb.exec(a) || w.exec(a) || u.exec(a) || 0 > a.indexOf("compatible") && x.exec(a) || [];
                return {
                    browser: a[1] || "",
                    version: a[2] || "0"
                }
            },
            sub: function() {
                function a(b, c) {
                    return new a.fn.init(b, c)
                }
                b.extend(!0, a, this);
                a.superclass = this;
                a.fn = a.prototype = this();
                a.fn.constructor = a;
                a.sub = this.sub;
                a.fn.init = function(d, e) {
                    e && e instanceof b && !(e instanceof a) && (e = a(e));
                    return b.fn.init.call(this, d, e, c)
                };
                a.fn.init.prototype = a.fn;
                var c = a(k);
                return a
            },
            browser: {}
        });
        b.each("Boolean,Number,String,Function,Array,Date,RegExp,Object".split(","),
        function(a, b) {
            Ea["[object " + b + "]"] = b.toLowerCase()
        });
        s = b.uaMatch(s);
        s.browser && (b.browser[s.browser] = !0, b.browser.version = s.version);
        b.browser.webkit && (b.browser.safari = !0);
        h.test(" ") && (i = /^[\s\xA0]+/, j = /[\s\xA0]+$/);
        f = b(k);
        k.addEventListener ? Q = function() {
            k.removeEventListener("DOMContentLoaded", Q, !1);
            b.ready()
        }: k.attachEvent && (Q = function() {
            "complete" === k.readyState && (k.detachEvent("onreadystatechange", Q), b.ready())
        });
        "function" === typeof define && define.amd && define.amd.jQuery && define("jquery", [],
        function() {
            return b
        });
        return b
    } (),
    ka = {};
    c.Callbacks = function(a) {
        var a = a ? ka[a] || $a(a) : {},
        b = [],
        d = [],
        e,
        f,
        g,
        h,
        i,
        j = function(d) {
            var e, f, g, h;
            for (e = 0, f = d.length; e < f; e++) g = d[e],
            h = c.type(g),
            "array" === h ? j(g) : "function" === h && (!a.unique || !t.has(g)) && b.push(g)
        },
        m = function(c, j) {
            j = j || [];
            e = !a.memory || [c, j];
            f = !0;
            i = g || 0;
            g = 0;
            for (h = b.length; b && i < h; i++) if (!1 === b[i].apply(c, j) && a.stopOnFalse) {
                e = !0;
                break
            }
            f = !1;
            b && (a.once ? !0 === e ? t.disable() : b = [] : d && d.length && (e = d.shift(), t.fireWith(e[0], e[1])))
        },
        t = {
            add: function() {
                if (b) {
                    var a = b.length;
                    j(arguments);
                    f ? h = b.length: e && !0 !== e && (g = a, m(e[0], e[1]))
                }
                return this
            },
            remove: function() {
                if (b) for (var c = arguments,
                d = 0,
                e = c.length; d < e; d++) for (var g = 0; g < b.length && !(c[d] === b[g] && (f && g <= h && (h--, g <= i && i--), b.splice(g--, 1), a.unique)); g++);
                return this
            },
            has: function(a) {
                if (b) for (var c = 0,
                d = b.length; c < d; c++) if (a === b[c]) return ! 0;
                return ! 1
            },
            empty: function() {
                b = [];
                return this
            },
            disable: function() {
                b = d = e = l;
                return this
            },
            disabled: function() {
                return ! b
            },
            lock: function() {
                d = l; (!e || !0 === e) && t.disable();
                return this
            },
            locked: function() {
                return ! d
            },
            fireWith: function(b, c) {
                d && (f ? a.once || d.push([b, c]) : (!a.once || !e) && m(b, c));
                return this
            },
            fire: function() {
                t.fireWith(this, arguments);
                return this
            },
            fired: function() {
                return !! e
            }
        };
        return t
    };
    var fa = [].slice;
    c.extend({
        Deferred: function(a) {
            var b = c.Callbacks("once memory"),
            d = c.Callbacks("once memory"),
            e = c.Callbacks("memory"),
            f = "pending",
            g = {
                resolve: b,
                reject: d,
                notify: e
            },
            h = {
                done: b.add,
                fail: d.add,
                progress: e.add,
                state: function() {
                    return f
                },
                isResolved: b.fired,
                isRejected: d.fired,
                then: function(a, b, c) {
                    i.done(a).fail(b).progress(c);
                    return this
                },
                always: function() {
                    return i.done.apply(i, arguments).fail.apply(i, arguments)
                },
                pipe: function(a, b, d) {
                    return c.Deferred(function(e) {
                        c.each({
                            done: [a, "resolve"],
                            fail: [b, "reject"],
                            progress: [d, "notify"]
                        },
                        function(a, b) {
                            var d = b[0],
                            f = b[1],
                            g;
                            if (c.isFunction(d)) i[a](function() {
                                if ((g = d.apply(this, arguments)) && c.isFunction(g.promise)) g.promise().then(e.resolve, e.reject, e.notify);
                                else e[f + "With"](this === i ? e: this, [g])
                            });
                            else i[a](e[f])
                        })
                    }).promise()
                },
                promise: function(a) {
                    if (null == a) a = h;
                    else for (var b in h) a[b] = h[b];
                    return a
                }
            },
            i = h.promise({}),
            j;
            for (j in g) i[j] = g[j].fire,
            i[j + "With"] = g[j].fireWith;
            i.done(function() {
                f = "resolved"
            },
            d.disable, e.lock).fail(function() {
                f = "rejected"
            },
            b.disable, e.lock);
            a && a.call(i, i);
            return i
        },
        when: function(a) {
            function b(a) {
                return function(b) {
                    e[a] = 1 < arguments.length ? fa.call(arguments, 0) : b; --i || j.resolveWith(j, e)
                }
            }
            function d(a) {
                return function(b) {
                    h[a] = 1 < arguments.length ? fa.call(arguments, 0) : b;
                    j.notifyWith(m, h)
                }
            }
            var e = fa.call(arguments, 0),
            f = 0,
            g = e.length,
            h = Array(g),
            i = g,
            j = 1 >= g && a && c.isFunction(a.promise) ? a: c.Deferred(),
            m = j.promise();
            if (1 < g) {
                for (; f < g; f++) e[f] && e[f].promise && c.isFunction(e[f].promise) ? e[f].promise().then(b(f), j.reject, d(f)) : --i;
                i || j.resolveWith(j, e)
            } else j !== a && j.resolveWith(j, g ? [a] : []);
            return m
        }
    });
    c.support = function() {
        var a = k.createElement("div"),
        b = k.documentElement,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        m;
        a.setAttribute("className", "t");
        a.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/><nav></nav>";
        d = a.getElementsByTagName("*");
        e = a.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) return {};
        f = k.createElement("select");
        g = f.appendChild(k.createElement("option"));
        d = a.getElementsByTagName("input")[0];
        h = {
            leadingWhitespace: 3 === a.firstChild.nodeType,
            tbody: !a.getElementsByTagName("tbody").length,
            htmlSerialize: !!a.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: "/a" === e.getAttribute("href"),
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            unknownElems: !!a.getElementsByTagName("nav").length,
            checkOn: "on" === d.value,
            optSelected: g.selected,
            getSetAttribute: "t" !== a.className,
            enctype: !!k.createElement("form").enctype,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        };
        d.checked = !0;
        h.noCloneChecked = d.cloneNode(!0).checked;
        f.disabled = !0;
        h.optDisabled = !g.disabled;
        try {
            delete a.test
        } catch(l) {
            h.deleteExpando = !1
        } ! a.addEventListener && a.attachEvent && a.fireEvent && (a.attachEvent("onclick",
        function() {
            h.noCloneEvent = !1
        }), a.cloneNode(!0).fireEvent("onclick"));
        d = k.createElement("input");
        d.value = "t";
        d.setAttribute("type", "radio");
        h.radioValue = "t" === d.value;
        d.setAttribute("checked", "checked");
        a.appendChild(d);
        e = k.createDocumentFragment();
        e.appendChild(a.lastChild);
        h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked;
        a.innerHTML = "";
        a.style.width = a.style.paddingLeft = "1px";
        i = k.getElementsByTagName("body")[0];
        j = k.createElement(i ? "div": "body");
        e = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        };
        i && c.extend(e, {
            position: "absolute",
            left: "-999px",
            top: "-999px"
        });
        for (m in e) j.style[m] = e[m];
        j.appendChild(a);
        b = i || b;
        b.insertBefore(j, b.firstChild);
        h.appendChecked = d.checked;
        h.boxModel = 2 === a.offsetWidth;
        "zoom" in a.style && (a.style.display = "inline", a.style.zoom = 1, h.inlineBlockNeedsLayout = 2 === a.offsetWidth, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", h.shrinkWrapBlocks = 2 !== a.offsetWidth);
        a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
        e = a.getElementsByTagName("td");
        d = 0 === e[0].offsetHeight;
        e[0].style.display = "";
        e[1].style.display = "none";
        h.reliableHiddenOffsets = d && 0 === e[0].offsetHeight;
        a.innerHTML = "";
        k.defaultView && k.defaultView.getComputedStyle && (d = k.createElement("div"), d.style.width = "0", d.style.marginRight = "0", a.appendChild(d), h.reliableMarginRight = 0 === (parseInt((k.defaultView.getComputedStyle(d, null) || {
            marginRight: 0
        }).marginRight, 10) || 0));
        if (a.attachEvent) for (m in {
            submit: 1,
            change: 1,
            focusin: 1
        }) e = "on" + m,
        d = e in a,
        d || (a.setAttribute(e, "return;"), d = "function" === typeof a[e]),
        h[m + "Bubbles"] = d;
        c(function() {
            var a, b, d, e;
            if (i = k.getElementsByTagName("body")[0]) a = k.createElement("div"),
            a.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",
            i.insertBefore(a, i.firstChild),
            j = k.createElement("div"),
            j.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;visibility:hidden;border:0;",
            j.innerHTML = "<div style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;'><div></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>",
            a.appendChild(j),
            b = j.firstChild,
            d = b.firstChild,
            e = {
                doesNotAddBorder: 5 !== d.offsetTop,
                doesAddBorderForTableAndCells: 5 === b.nextSibling.firstChild.firstChild.offsetTop
            },
            d.style.position = "fixed",
            d.style.top = "20px",
            e.fixedPosition = 20 === d.offsetTop || 15 === d.offsetTop,
            d.style.position = d.style.top = "",
            b.style.overflow = "hidden",
            b.style.position = "relative",
            e.subtractsBorderForOverflowNotVisible = -5 === d.offsetTop,
            e.doesNotIncludeMarginInBodyOffset = 1 !== i.offsetTop,
            i.removeChild(a),
            j = null,
            c.extend(h, e)
        });
        j.innerHTML = "";
        b.removeChild(j);
        j = e = f = g = i = d = a = d = null;
        return h
    } ();
    c.boxModel = c.support.boxModel;
    var bb = /^(?:\{.*\}|\[.*\])$/,
    ab = /([A-Z])/g;
    c.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (c.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            a = a.nodeType ? c.cache[a[c.expando]] : a[c.expando];
            return !! a && !Z(a)
        },
        data: function(a, b, d, e) {
            if (c.acceptData(a)) {
                var f, g = "string" === typeof b,
                h = (f = a.nodeType) ? c.cache: a,
                i = f ? a[c.expando] : a[c.expando] && c.expando,
                j = "events" === b;
                if (i && h[i] && (j || e || h[i].data) || !(g && d === l)) {
                    i || (f ? a[c.expando] = i = ++c.uuid: i = c.expando);
                    h[i] || (h[i] = {},
                    f || (h[i].toJSON = c.noop));
                    if ("object" === typeof b || "function" === typeof b) e ? h[i] = c.extend(h[i], b) : h[i].data = c.extend(h[i].data, b);
                    f = a = h[i];
                    e || (a.data || (a.data = {}), a = a.data);
                    d !== l && (a[c.camelCase(b)] = d);
                    if (j && !a[b]) return f.events;
                    g ? (d = a[b], null == d && (d = a[c.camelCase(b)])) : d = a;
                    return d
                }
            }
        },
        removeData: function(a, b, d) {
            if (c.acceptData(a)) {
                var e, f, g, h = a.nodeType,
                i = h ? c.cache: a,
                j = h ? a[c.expando] : c.expando;
                if (i[j]) {
                    if (b && (e = d ? i[j] : i[j].data)) {
                        c.isArray(b) || (b in e ? b = [b] : (b = c.camelCase(b), b = b in e ? [b] : b.split(" ")));
                        for (f = 0, g = b.length; f < g; f++) delete e[b[f]];
                        if (! (d ? Z: c.isEmptyObject)(e)) return
                    }
                    if (!d && (delete i[j].data, !Z(i[j]))) return;
                    c.support.deleteExpando || !i.setInterval ? delete i[j] : i[j] = null;
                    h && (c.support.deleteExpando ? delete a[c.expando] : a.removeAttribute ? a.removeAttribute(c.expando) : a[c.expando] = null)
                }
            }
        },
        _data: function(a, b, d) {
            return c.data(a, b, d, !0)
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var b = c.noData[a.nodeName.toLowerCase()];
                if (b) return ! (!0 === b || a.getAttribute("classid") !== b)
            }
            return ! 0
        }
    });
    c.fn.extend({
        data: function(a, b) {
            var d, e, f, g = null;
            if ("undefined" === typeof a) {
                if (this.length && (g = c.data(this[0]), 1 === this[0].nodeType && !c._data(this[0], "parsedAttrs"))) {
                    e = this[0].attributes;
                    for (var h = 0,
                    i = e.length; h < i; h++) f = e[h].name,
                    0 === f.indexOf("data-") && (f = c.camelCase(f.substring(5)), la(this[0], f, g[f]));
                    c._data(this[0], "parsedAttrs", !0)
                }
                return g
            }
            if ("object" === typeof a) return this.each(function() {
                c.data(this, a)
            });
            d = a.split(".");
            d[1] = d[1] ? "." + d[1] : "";
            return b === l ? (g = this.triggerHandler("getData" + d[1] + "!", [d[0]]), g === l && this.length && (g = c.data(this[0], a), g = la(this[0], a, g)), g === l && d[1] ? this.data(d[0]) : g) : this.each(function() {
                var e = c(this),
                f = [d[0], b];
                e.triggerHandler("setData" + d[1] + "!", f);
                c.data(this, a, b);
                e.triggerHandler("changeData" + d[1] + "!", f)
            })
        },
        removeData: function(a) {
            return this.each(function() {
                c.removeData(this, a)
            })
        }
    });
    c.extend({
        _mark: function(a, b) {
            a && (b = (b || "fx") + "mark", c._data(a, b, (c._data(a, b) || 0) + 1))
        },
        _unmark: function(a, b, d) { ! 0 !== a && (d = b, b = a, a = !1);
            if (b) {
                var d = d || "fx",
                e = d + "mark"; (a = a ? 0 : (c._data(b, e) || 1) - 1) ? c._data(b, e, a) : (c.removeData(b, e, !0), ma(b, d, "mark"))
            }
        },
        queue: function(a, b, d) {
            var e;
            if (a) return b = (b || "fx") + "queue",
            e = c._data(a, b),
            d && (!e || c.isArray(d) ? e = c._data(a, b, c.makeArray(d)) : e.push(d)),
            e || []
        },
        dequeue: function(a, b) {
            var b = b || "fx",
            d = c.queue(a, b),
            e = d.shift(),
            f = {};
            "inprogress" === e && (e = d.shift());
            e && ("fx" === b && d.unshift("inprogress"), c._data(a, b + ".run", f), e.call(a,
            function() {
                c.dequeue(a, b)
            },
            f));
            d.length || (c.removeData(a, b + "queue " + b + ".run", !0), ma(a, b, "queue"))
        }
    });
    c.fn.extend({
        queue: function(a, b) {
            "string" !== typeof a && (b = a, a = "fx");
            return b === l ? c.queue(this[0], a) : this.each(function() {
                var d = c.queue(this, a, b);
                "fx" === a && "inprogress" !== d[0] && c.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                c.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            a = c.fx ? c.fx.speeds[a] || a: a;
            return this.queue(b || "fx",
            function(b, c) {
                var f = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(f)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a) {
            function b() {--g || d.resolveWith(e, [e])
            }
            "string" !== typeof a && (a = l);
            for (var a = a || "fx",
            d = c.Deferred(), e = this, f = e.length, g = 1, h = a + "defer", i = a + "queue", a = a + "mark", j; f--;) if (j = c.data(e[f], h, l, !0) || (c.data(e[f], i, l, !0) || c.data(e[f], a, l, !0)) && c.data(e[f], h, c.Callbacks("once memory"), !0)) g++,
            j.add(b);
            b();
            return d.promise()
        }
    });
    var Fa = /[\n\t\r]/g,
    W = /\s+/,
    ob = /\r/g,
    pb = /^(?:button|input)$/i,
    qb = /^(?:button|input|object|select|textarea)$/i,
    rb = /^a(?:rea)?$/i,
    Ga = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    Ha = c.support.getSetAttribute,
    A, Ia, Ja;
    c.fn.extend({
        attr: function(a, b) {
            return c.access(this, a, b, !0, c.attr)
        },
        removeAttr: function(a) {
            return this.each(function() {
                c.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return c.access(this, a, b, !0, c.prop)
        },
        removeProp: function(a) {
            a = c.propFix[a] || a;
            return this.each(function() {
                try {
                    this[a] = l,
                    delete this[a]
                } catch(b) {}
            })
        },
        addClass: function(a) {
            var b, d, e, f, g, h, i;
            if (c.isFunction(a)) return this.each(function(b) {
                c(this).addClass(a.call(this, b, this.className))
            });
            if (a && "string" === typeof a) {
                b = a.split(W);
                for (d = 0, e = this.length; d < e; d++) if (f = this[d], 1 === f.nodeType) if (!f.className && 1 === b.length) f.className = a;
                else {
                    g = " " + f.className + " ";
                    for (h = 0, i = b.length; h < i; h++)~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                    f.className = c.trim(g)
                }
            }
            return this
        },
        removeClass: function(a) {
            var b, d, e, f, g, h, i;
            if (c.isFunction(a)) return this.each(function(b) {
                c(this).removeClass(a.call(this, b, this.className))
            });
            if (a && "string" === typeof a || a === l) {
                b = (a || "").split(W);
                for (d = 0, e = this.length; d < e; d++) if (f = this[d], 1 === f.nodeType && f.className) if (a) {
                    g = (" " + f.className + " ").replace(Fa, " ");
                    for (h = 0, i = b.length; h < i; h++) g = g.replace(" " + b[h] + " ", " ");
                    f.className = c.trim(g)
                } else f.className = ""
            }
            return this
        },
        toggleClass: function(a, b) {
            var d = typeof a,
            e = "boolean" === typeof b;
            return c.isFunction(a) ? this.each(function(d) {
                c(this).toggleClass(a.call(this, d, this.className, b), b)
            }) : this.each(function() {
                if ("string" === d) for (var f, g = 0,
                h = c(this), i = b, j = a.split(W); f = j[g++];) i = e ? i: !h.hasClass(f),
                h[i ? "addClass": "removeClass"](f);
                else if ("undefined" === d || "boolean" === d) this.className && c._data(this, "__className__", this.className),
                this.className = this.className || !1 === a ? "": c._data(this, "__className__") || ""
            })
        },
        hasClass: function(a) {
            for (var a = " " + a + " ",
            b = 0,
            c = this.length; b < c; b++) if (1 === this[b].nodeType && -1 < (" " + this[b].className + " ").replace(Fa, " ").indexOf(a)) return ! 0;
            return ! 1
        },
        val: function(a) {
            var b, d, e, f = this[0];
            if (!arguments.length) {
                if (f) {
                    if ((b = c.valHooks[f.nodeName.toLowerCase()] || c.valHooks[f.type]) && "get" in b && (d = b.get(f, "value")) !== l) return d;
                    d = f.value;
                    return "string" === typeof d ? d.replace(ob, "") : null == d ? "": d
                }
                return l
            }
            e = c.isFunction(a);
            return this.each(function(d) {
                var f = c(this);
                if (1 === this.nodeType && (d = e ? a.call(this, d, f.val()) : a, null == d ? d = "": "number" === typeof d ? d += "": c.isArray(d) && (d = c.map(d,
                function(a) {
                    return null == a ? "": a + ""
                })), b = c.valHooks[this.nodeName.toLowerCase()] || c.valHooks[this.type], !b || !("set" in b) || b.set(this, d, "value") === l)) this.value = d
            })
        }
    });
    c.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return ! b || b.specified ? a.value: a.text
                }
            },
            select: {
                get: function(a) {
                    var b, d, e = a.selectedIndex,
                    f = [],
                    g = a.options,
                    h = "select-one" === a.type;
                    if (0 > e) return null;
                    a = h ? e: 0;
                    for (d = h ? e + 1 : g.length; a < d; a++) if (b = g[a], b.selected && (c.support.optDisabled ? !b.disabled: null === b.getAttribute("disabled")) && (!b.parentNode.disabled || !c.nodeName(b.parentNode, "optgroup"))) {
                        b = c(b).val();
                        if (h) return b;
                        f.push(b)
                    }
                    return h && !f.length && g.length ? c(g[e]).val() : f
                },
                set: function(a, b) {
                    var d = c.makeArray(b);
                    c(a).find("option").each(function() {
                        this.selected = 0 <= c.inArray(c(this).val(), d)
                    });
                    d.length || (a.selectedIndex = -1);
                    return d
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(a, b, d, e) {
            var f, g, h = a.nodeType;
            if (!a || 3 === h || 8 === h || 2 === h) return l;
            if (e && b in c.attrFn) return c(a)[b](d);
            if (! ("getAttribute" in a)) return c.prop(a, b, d);
            if (e = 1 !== h || !c.isXMLDoc(a)) b = b.toLowerCase(),
            g = c.attrHooks[b] || (Ga.test(b) ? Ia: A);
            if (d !== l) {
                if (null === d) return c.removeAttr(a, b),
                l;
                if (g && "set" in g && e && (f = g.set(a, d, b)) !== l) return f;
                a.setAttribute(b, "" + d);
                return d
            }
            if (g && "get" in g && e && null !== (f = g.get(a, b))) return f;
            f = a.getAttribute(b);
            return null === f ? l: f
        },
        removeAttr: function(a, b) {
            var d, e, f, g, h = 0;
            if (1 === a.nodeType) {
                e = (b || "").split(W);
                for (g = e.length; h < g; h++) f = e[h].toLowerCase(),
                d = c.propFix[f] || f,
                c.attr(a, f, ""),
                a.removeAttribute(Ha ? f: d),
                Ga.test(f) && d in a && (a[d] = !1)
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (pb.test(a.nodeName) && a.parentNode) c.error("type property can't be changed");
                    else if (!c.support.radioValue && "radio" === b && c.nodeName(a, "input")) {
                        var d = a.value;
                        a.setAttribute("type", b);
                        d && (a.value = d);
                        return b
                    }
                }
            },
            value: {
                get: function(a, b) {
                    return A && c.nodeName(a, "button") ? A.get(a, b) : b in a ? a.value: null
                },
                set: function(a, b, d) {
                    if (A && c.nodeName(a, "button")) return A.set(a, b, d);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, b, d) {
            var e, f, g = a.nodeType;
            if (!a || 3 === g || 8 === g || 2 === g) return l;
            if (1 !== g || !c.isXMLDoc(a)) b = c.propFix[b] || b,
            f = c.propHooks[b];
            return d !== l ? f && "set" in f && (e = f.set(a, d, b)) !== l ? e: a[b] = d: f && "get" in f && null !== (e = f.get(a, b)) ? e: a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = a.getAttributeNode("tabindex");
                    return b && b.specified ? parseInt(b.value, 10) : qb.test(a.nodeName) || rb.test(a.nodeName) && a.href ? 0 : l
                }
            }
        }
    });
    c.attrHooks.tabindex = c.propHooks.tabIndex;
    Ia = {
        get: function(a, b) {
            var d, e = c.prop(a, b);
            return ! 0 === e || "boolean" !== typeof e && (d = a.getAttributeNode(b)) && !1 !== d.nodeValue ? b.toLowerCase() : l
        },
        set: function(a, b, d) { ! 1 === b ? c.removeAttr(a, d) : (b = c.propFix[d] || d, b in a && (a[b] = !0), a.setAttribute(d, d.toLowerCase()));
            return d
        }
    };
    Ha || (Ja = {
        name: !0,
        id: !0
    },
    A = c.valHooks.button = {
        get: function(a, b) {
            var c;
            return (c = a.getAttributeNode(b)) && (Ja[b] ? "" !== c.nodeValue: c.specified) ? c.nodeValue: l
        },
        set: function(a, b, c) {
            var e = a.getAttributeNode(c);
            e || (e = k.createAttribute(c), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    },
    c.attrHooks.tabindex.set = A.set, c.each(["width", "height"],
    function(a, b) {
        c.attrHooks[b] = c.extend(c.attrHooks[b], {
            set: function(a, c) {
                if ("" === c) return a.setAttribute(b, "auto"),
                c
            }
        })
    }), c.attrHooks.contenteditable = {
        get: A.get,
        set: function(a, b, c) {
            "" === b && (b = "false");
            A.set(a, b, c)
        }
    });
    c.support.hrefNormalized || c.each(["href", "src", "width", "height"],
    function(a, b) {
        c.attrHooks[b] = c.extend(c.attrHooks[b], {
            get: function(a) {
                a = a.getAttribute(b, 2);
                return null === a ? l: a
            }
        })
    });
    c.support.style || (c.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || l
        },
        set: function(a, b) {
            return a.style.cssText = "" + b
        }
    });
    c.support.optSelected || (c.propHooks.selected = c.extend(c.propHooks.selected, {
        get: function(a) {
            if (a = a.parentNode) a.selectedIndex,
            a.parentNode && a.parentNode.selectedIndex;
            return null
        }
    }));
    c.support.enctype || (c.propFix.enctype = "encoding");
    c.support.checkOn || c.each(["radio", "checkbox"],
    function() {
        c.valHooks[this] = {
            get: function(a) {
                return null === a.getAttribute("value") ? "on": a.value
            }
        }
    });
    c.each(["radio", "checkbox"],
    function() {
        c.valHooks[this] = c.extend(c.valHooks[this], {
            set: function(a, b) {
                if (c.isArray(b)) return a.checked = 0 <= c.inArray(c(a).val(), b)
            }
        })
    });
    var ga = /^(?:textarea|input|select)$/i,
    Ka = /^([^\.]*)?(?:\.(.+))?$/,
    sb = /\bhover(\.\S+)?/,
    tb = /^key/,
    ub = /^(?:mouse|contextmenu)|click/,
    vb = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
    wb = function(a) {
        if (a = vb.exec(a)) a[1] = (a[1] || "").toLowerCase(),
        a[3] = a[3] && RegExp("(?:^|\\s)" + a[3] + "(?:\\s|$)");
        return a
    },
    La = function(a) {
        return c.event.special.hover ? a: a.replace(sb, "mouseenter$1 mouseleave$1")
    };
    c.event = {
        add: function(a, b, d, e, f) {
            var g, h, i, j, m, k, o, p, n;
            if (! (3 === a.nodeType || 8 === a.nodeType || !b || !d || !(g = c._data(a)))) {
                d.handler && (o = d, d = o.handler);
                d.guid || (d.guid = c.guid++);
                i = g.events;
                i || (g.events = i = {});
                h = g.handle;
                h || (g.handle = h = function(a) {
                    return "undefined" !== typeof c && (!a || c.event.triggered !== a.type) ? c.event.dispatch.apply(h.elem, arguments) : l
                },
                h.elem = a);
                b = La(b).split(" ");
                for (g = 0; g < b.length; g++) {
                    j = Ka.exec(b[g]) || [];
                    m = j[1];
                    k = (j[2] || "").split(".").sort();
                    n = c.event.special[m] || {};
                    m = (f ? n.delegateType: n.bindType) || m;
                    n = c.event.special[m] || {};
                    j = c.extend({
                        type: m,
                        origType: j[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: f,
                        namespace: k.join(".")
                    },
                    o);
                    f && (j.quick = wb(f), !j.quick && c.expr.match.POS.test(f) && (j.isPositional = !0));
                    p = i[m];
                    if (!p && (p = i[m] = [], p.delegateCount = 0, !n.setup || !1 === n.setup.call(a, e, k, h))) a.addEventListener ? a.addEventListener(m, h, !1) : a.attachEvent && a.attachEvent("on" + m, h);
                    n.add && (n.add.call(a, j), j.handler.guid || (j.handler.guid = d.guid));
                    f ? p.splice(p.delegateCount++, 0, j) : p.push(j);
                    c.event.global[m] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function(a, b, d, e) {
            var f = c.hasData(a) && c._data(a),
            g,
            h,
            i,
            j,
            m,
            l,
            o,
            k,
            n;
            if (f && (l = f.events)) {
                b = La(b || "").split(" ");
                for (g = 0; g < b.length; g++) {
                    h = Ka.exec(b[g]) || [];
                    i = h[1];
                    h = h[2];
                    if (!i) {
                        h = h ? "." + h: "";
                        for (m in l) c.event.remove(a, m + h, d, e);
                        return
                    }
                    o = c.event.special[i] || {};
                    i = (e ? o.delegateType: o.bindType) || i;
                    k = l[i] || [];
                    j = k.length;
                    h = h ? RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    if (d || h || e || o.remove) for (m = 0; m < k.length; m++) {
                        if (n = k[m], !d || d.guid === n.guid) if (!h || h.test(n.namespace)) if (!e || e === n.selector || "**" === e && n.selector) k.splice(m--, 1),
                        n.selector && k.delegateCount--,
                        o.remove && o.remove.call(a, n)
                    } else k.length = 0;
                    0 === k.length && j !== k.length && ((!o.teardown || !1 === o.teardown.call(a, h)) && c.removeEvent(a, i, f.handle), delete l[i])
                }
                if (c.isEmptyObject(l)) {
                    if (b = f.handle) b.elem = null;
                    c.removeData(a, ["events", "handle"], !0)
                }
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(a, b, d, e) {
            if (!d || !(3 === d.nodeType || 8 === d.nodeType)) {
                var f = a.type || a,
                g = [],
                h,
                i,
                j,
                m;
                0 <= f.indexOf("!") && (f = f.slice(0, -1), h = !0);
                0 <= f.indexOf(".") && (g = f.split("."), f = g.shift(), g.sort());
                if (d && !c.event.customEvent[f] || c.event.global[f]) if (a = "object" === typeof a ? a[c.expando] ? a: new c.Event(f, a) : new c.Event(f), a.type = f, a.isTrigger = !0, a.exclusive = h, a.namespace = g.join("."), a.namespace_re = a.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, g = 0 > f.indexOf(":") ? "on" + f: "", (e || !d) && a.preventDefault(), d) {
                    if (a.result = l, a.target || (a.target = d), b = null != b ? c.makeArray(b) : [], b.unshift(a), h = c.event.special[f] || {},
                    !(h.trigger && !1 === h.trigger.apply(d, b))) {
                        m = [[d, h.bindType || f]];
                        if (!e && !h.noBubble && !c.isWindow(d)) {
                            j = h.delegateType || f;
                            i = null;
                            for (e = d.parentNode; e; e = e.parentNode) m.push([e, j]),
                            i = e;
                            i && i === d.ownerDocument && m.push([i.defaultView || i.parentWindow || r, j])
                        }
                        for (i = 0; i < m.length && !(e = m[i][0], a.type = m[i][1], (j = (c._data(e, "events") || {})[a.type] && c._data(e, "handle")) && j.apply(e, b), (j = g && e[g]) && c.acceptData(e) && j.apply(e, b), a.isPropagationStopped()); i++);
                        a.type = f;
                        if (!a.isDefaultPrevented() && (!h._default || !1 === h._default.apply(d.ownerDocument, b)) && !("click" === f && c.nodeName(d, "a")) && c.acceptData(d)) if (g && d[f] && ("focus" !== f && "blur" !== f || 0 !== a.target.offsetWidth) && !c.isWindow(d))(i = d[g]) && (d[g] = null),
                        c.event.triggered = f,
                        d[f](),
                        c.event.triggered = l,
                        i && (d[g] = i);
                        return a.result
                    }
                } else for (i in d = c.cache, d) d[i].events && d[i].events[f] && c.event.trigger(a, b, d[i].handle.elem, !0)
            }
        },
        dispatch: function(a) {
            var a = c.event.fix(a || r.event),
            b = (c._data(this, "events") || {})[a.type] || [],
            d = b.delegateCount,
            e = [].slice.call(arguments, 0),
            f = !a.exclusive && !a.namespace,
            g = (c.event.special[a.type] || {}).handle,
            h = [],
            i,
            j,
            m,
            k,
            o,
            p,
            n;
            e[0] = a;
            a.delegateTarget = this;
            if (d && !a.target.disabled && !(a.button && "click" === a.type)) for (j = a.target; j != this; j = j.parentNode || this) {
                k = {};
                o = [];
                for (i = 0; i < d; i++) m = b[i],
                p = m.selector,
                n = k[p],
                m.isPositional ? n = 0 <= (n || (k[p] = c(p))).index(j) : n === l && (n = k[p] = m.quick ? (!m.quick[1] || j.nodeName.toLowerCase() === m.quick[1]) && (!m.quick[2] || j.id === m.quick[2]) && (!m.quick[3] || m.quick[3].test(j.className)) : c(j).is(p)),
                n && o.push(m);
                o.length && h.push({
                    elem: j,
                    matches: o
                })
            }
            b.length > d && h.push({
                elem: this,
                matches: b.slice(d)
            });
            for (i = 0; i < h.length && !a.isPropagationStopped(); i++) {
                d = h[i];
                a.currentTarget = d.elem;
                for (b = 0; b < d.matches.length && !a.isImmediatePropagationStopped(); b++) if (m = d.matches[b], f || !a.namespace && !m.namespace || a.namespace_re && a.namespace_re.test(m.namespace)) a.data = m.data,
                a.handleObj = m,
                m = (g || m.handler).apply(d.elem, e),
                m !== l && (a.result = m, !1 === m && (a.preventDefault(), a.stopPropagation()))
            }
            return a.result
        },
        props: "attrChange,attrName,relatedNode,srcElement,altKey,bubbles,cancelable,ctrlKey,currentTarget,eventPhase,metaKey,relatedTarget,shiftKey,target,timeStamp,view,which".split(","),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(a, b) {
                null == a.which && (a.which = null != b.charCode ? b.charCode: b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button,buttons,clientX,clientY,fromElement,offsetX,offsetY,pageX,pageY,screenX,screenY,toElement,wheelDelta".split(","),
            filter: function(a, b) {
                var c, e, f = b.button,
                g = b.fromElement;
                null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || k, e = c.documentElement, c = c.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)); ! a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement: g); ! a.which && f !== l && (a.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0);
                return a
            }
        },
        fix: function(a) {
            if (a[c.expando]) return a;
            var b, d, e = a,
            f = c.event.fixHooks[a.type] || {},
            g = f.props ? this.props.concat(f.props) : this.props,
            a = c.Event(e);
            for (b = g.length; b;) d = g[--b],
            a[d] = e[d];
            a.target || (a.target = e.srcElement || k);
            3 === a.target.nodeType && (a.target = a.target.parentNode);
            a.metaKey === l && (a.metaKey = a.ctrlKey);
            return f.filter ? f.filter(a, e) : a
        },
        special: {
            ready: {
                setup: c.bindReady
            },
            focus: {
                delegateType: "focusin",
                noBubble: !0
            },
            blur: {
                delegateType: "focusout",
                noBubble: !0
            },
            beforeunload: {
                setup: function(a, b, d) {
                    c.isWindow(this) && (this.onbeforeunload = d)
                },
                teardown: function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(a, b, d, e) {
            a = c.extend(new c.Event, d, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            e ? c.event.trigger(a, null, b) : c.event.dispatch.call(b, a);
            a.isDefaultPrevented() && d.preventDefault()
        }
    };
    c.event.handle = c.event.dispatch;
    c.removeEvent = k.removeEventListener ?
    function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }: function(a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    };
    c.Event = function(a, b) {
        if (! (this instanceof c.Event)) return new c.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? I: G) : this.type = a;
        b && c.extend(this, b);
        this.timeStamp = a && a.timeStamp || c.now();
        this[c.expando] = !0
    };
    c.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = I;
            var a = this.originalEvent;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = I;
            var a = this.originalEvent;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = I;
            this.stopPropagation()
        },
        isDefaultPrevented: G,
        isPropagationStopped: G,
        isImmediatePropagationStopped: G
    };
    c.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(a, b) {
        c.event.special[a] = c.event.special[b] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var b = a.relatedTarget,
                f = a.handleObj,
                g;
                if (!b || f.origType === a.type || b !== this && !c.contains(this, b)) b = a.type,
                a.type = f.origType,
                g = f.handler.apply(this, arguments),
                a.type = b;
                return g
            }
        }
    });
    c.support.submitBubbles || (c.event.special.submit = {
        setup: function() {
            if (c.nodeName(this, "form")) return ! 1;
            c.event.add(this, "click._submit keypress._submit",
            function(a) {
                a = a.target;
                if ((a = c.nodeName(a, "input") || c.nodeName(a, "button") ? a.form: l) && !a._submit_attached) c.event.add(a, "submit._submit",
                function(a) {
                    this.parentNode && c.event.simulate("submit", this.parentNode, a, !0)
                }),
                a._submit_attached = !0
            })
        },
        teardown: function() {
            if (c.nodeName(this, "form")) return ! 1;
            c.event.remove(this, "._submit")
        }
    });
    c.support.changeBubbles || (c.event.special.change = {
        setup: function() {
            if (ga.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type) c.event.add(this, "propertychange._change",
                function(a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }),
                c.event.add(this, "click._change",
                function(a) {
                    this._just_changed && (this._just_changed = !1, c.event.simulate("change", this, a, !0))
                });
                return ! 1
            }
            c.event.add(this, "beforeactivate._change",
            function(a) {
                a = a.target;
                ga.test(a.nodeName) && !a._change_attached && (c.event.add(a, "change._change",
                function(a) {
                    this.parentNode && !a.isSimulated && c.event.simulate("change", this.parentNode, a, !0)
                }), a._change_attached = !0)
            })
        },
        handle: function(a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type) return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            c.event.remove(this, "._change");
            return ga.test(this.nodeName)
        }
    });
    c.support.focusinBubbles || c.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(a, b) {
        var d = 0,
        e = function(a) {
            c.event.simulate(b, a.target, c.event.fix(a), !0)
        };
        c.event.special[b] = {
            setup: function() {
                0 === d++&&k.addEventListener(a, e, !0)
            },
            teardown: function() {
                0 === --d && k.removeEventListener(a, e, !0)
            }
        }
    });
    c.fn.extend({
        on: function(a, b, d, e, f) {
            var g, h;
            if ("object" === typeof a) {
                "string" !== typeof b && (d = b, b = l);
                for (h in a) this.on(h, b, d, a[h], f);
                return this
            }
            null == d && null == e ? (e = b, d = b = l) : null == e && ("string" === typeof b ? (e = d, d = l) : (e = d, d = b, b = l));
            if (!1 === e) e = G;
            else if (!e) return this;
            1 === f && (g = e, e = function(a) {
                c().off(a);
                return g.apply(this, arguments)
            },
            e.guid = g.guid || (g.guid = c.guid++));
            return this.each(function() {
                c.event.add(this, a, e, d, b)
            })
        },
        one: function(a, b, c, e) {
            return this.on.call(this, a, b, c, e, 1)
        },
        off: function(a, b, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                c(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace: e.type, e.selector, e.handler);
                return this
            }
            if ("object" === typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            if (!1 === b || "function" === typeof b) d = b,
            b = l; ! 1 === d && (d = G);
            return this.each(function() {
                c.event.remove(this, a, d, b)
            })
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        live: function(a, b, d) {
            c(this.context).on(a, this.selector, b, d);
            return this
        },
        die: function(a, b) {
            c(this.context).off(a, this.selector || "**", b);
            return this
        },
        delegate: function(a, b, c, e) {
            return this.on(b, a, c, e)
        },
        undelegate: function(a, b, c) {
            return 1 == arguments.length ? this.off(a, "**") : this.off(b, a, c)
        },
        trigger: function(a, b) {
            return this.each(function() {
                c.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            if (this[0]) return c.event.trigger(a, b, this[0], !0)
        },
        toggle: function(a) {
            var b = arguments,
            d = a.guid || c.guid++,
            e = 0,
            f = function(d) {
                var f = (c._data(this, "lastToggle" + a.guid) || 0) % e;
                c._data(this, "lastToggle" + a.guid, f + 1);
                d.preventDefault();
                return b[f].apply(this, arguments) || !1
            };
            for (f.guid = d; e < b.length;) b[e++].guid = d;
            return this.click(f)
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    c.each("blur,focus,focusin,focusout,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error,contextmenu".split(","),
    function(a, b) {
        c.fn[b] = function(a, c) {
            null == c && (c = a, a = null);
            return 0 < arguments.length ? this.bind(b, a, c) : this.trigger(b)
        };
        c.attrFn && (c.attrFn[b] = !0);
        tb.test(b) && (c.event.fixHooks[b] = c.event.keyHooks);
        ub.test(b) && (c.event.fixHooks[b] = c.event.mouseHooks)
    }); (function() {
        function a(a, b, c, d, f, g) {
            for (var f = 0,
            h = d.length; f < h; f++) {
                var i = d[f];
                if (i) {
                    for (var j = !1,
                    i = i[a]; i;) {
                        if (i[e] === c) {
                            j = d[i.sizset];
                            break
                        }
                        1 === i.nodeType && !g && (i[e] = c, i.sizset = f);
                        if (i.nodeName.toLowerCase() === b) {
                            j = i;
                            break
                        }
                        i = i[a]
                    }
                    d[f] = j
                }
            }
        }
        function b(a, b, c, d, f, g) {
            for (var f = 0,
            h = d.length; f < h; f++) {
                var i = d[f];
                if (i) {
                    for (var j = !1,
                    i = i[a]; i;) {
                        if (i[e] === c) {
                            j = d[i.sizset];
                            break
                        }
                        if (1 === i.nodeType) if (g || (i[e] = c, i.sizset = f), "string" !== typeof b) {
                            if (i === b) {
                                j = !0;
                                break
                            }
                        } else if (0 < o.filter(b, [i]).length) {
                            j = i;
                            break
                        }
                        i = i[a]
                    }
                    d[f] = j
                }
            }
        }
        var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        e = "sizcache" + (Math.random() + "").replace(".", ""),
        f = 0,
        g = Object.prototype.toString,
        h = !1,
        i = !0,
        j = /\\/g,
        m = /\r\n/g,
        t = /\W/; [0, 0].sort(function() {
            i = !1;
            return 0
        });
        var o = function(a, b, c, e) {
            var c = c || [],
            f = b = b || k;
            if (1 !== b.nodeType && 9 !== b.nodeType) return [];
            if (!a || "string" !== typeof a) return c;
            var h, i, j, m, l, t = !0,
            q = o.isXML(b),
            p = [],
            B = a;
            do
            if (d.exec(""), h = d.exec(B)) if (B = h[3], p.push(h[1]), h[2]) {
                m = h[3];
                break
            }
            while (h);
            if (1 < p.length && r.exec(a)) if (2 === p.length && n.relative[p[0]]) i = A(p[0] + p[1], b, e);
            else for (i = n.relative[p[0]] ? [b] : o(p.shift(), b); p.length;) a = p.shift(),
            n.relative[a] && (a += p.shift()),
            i = A(a, i, e);
            else if (!e && 1 < p.length && 9 === b.nodeType && !q && n.match.ID.test(p[0]) && !n.match.ID.test(p[p.length - 1]) && (h = o.find(p.shift(), b, q), b = h.expr ? o.filter(h.expr, h.set)[0] : h.set[0]), b) {
                h = e ? {
                    expr: p.pop(),
                    set: u(e)
                }: o.find(p.pop(), 1 === p.length && ("~" === p[0] || "+" === p[0]) && b.parentNode ? b.parentNode: b, q);
                i = h.expr ? o.filter(h.expr, h.set) : h.set;
                for (0 < p.length ? j = u(i) : t = !1; p.length;) h = l = p.pop(),
                n.relative[l] ? h = p.pop() : l = "",
                null == h && (h = b),
                n.relative[l](j, h, q)
            } else j = [];
            j || (j = i);
            j || o.error(l || a);
            if ("[object Array]" === g.call(j)) if (t) if (b && 1 === b.nodeType) for (a = 0; null != j[a]; a++) j[a] && (!0 === j[a] || 1 === j[a].nodeType && o.contains(b, j[a])) && c.push(i[a]);
            else for (a = 0; null != j[a]; a++) j[a] && 1 === j[a].nodeType && c.push(i[a]);
            else c.push.apply(c, j);
            else u(j, c);
            m && (o(m, f, c, e), o.uniqueSort(c));
            return c
        };
        o.uniqueSort = function(a) {
            if (v && (h = i, a.sort(v), h)) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
            return a
        };
        o.matches = function(a, b) {
            return o(a, null, null, b)
        };
        o.matchesSelector = function(a, b) {
            return 0 < o(b, null, null, [a]).length
        };
        o.find = function(a, b, c) {
            var d, e, f, g, h, i;
            if (!a) return [];
            for (e = 0, f = n.order.length; e < f; e++) if (h = n.order[e], g = n.leftMatch[h].exec(a)) if (i = g[1], g.splice(1, 1), "\\" !== i.substr(i.length - 1) && (g[1] = (g[1] || "").replace(j, ""), d = n.find[h](g, b, c), null != d)) {
                a = a.replace(n.match[h], "");
                break
            }
            d || (d = "undefined" !== typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []);
            return {
                set: d,
                expr: a
            }
        };
        o.filter = function(a, b, c, d) {
            for (var e, f, g, h, i, j, m, k, p = a,
            t = [], q = b, r = b && b[0] && o.isXML(b[0]); a && b.length;) {
                for (g in n.filter) if (null != (e = n.leftMatch[g].exec(a)) && e[2]) if (j = n.filter[g], i = e[1], f = !1, e.splice(1, 1), "\\" !== i.substr(i.length - 1)) {
                    q === t && (t = []);
                    if (n.preFilter[g]) if (e = n.preFilter[g](e, q, c, t, d, r)) {
                        if (!0 === e) continue
                    } else f = h = !0;
                    if (e) for (m = 0; null != (i = q[m]); m++) i && (h = j(i, e, m, q), k = d ^ h, c && null != h ? k ? f = !0 : q[m] = !1 : k && (t.push(i), f = !0));
                    if (h !== l) {
                        c || (q = t);
                        a = a.replace(n.match[g], "");
                        if (!f) return [];
                        break
                    }
                }
                if (a === p) if (null == f) o.error(a);
                else break;
                p = a
            }
            return q
        };
        o.error = function(a) {
            throw "Syntax error, unrecognized expression: " + a
        };
        var p = o.getText = function(a) {
            var b, c;
            b = a.nodeType;
            var d = "";
            if (b) if (1 === b) {
                if ("string" === typeof a.textContent) return a.textContent;
                if ("string" === typeof a.innerText) return a.innerText.replace(m, "");
                for (a = a.firstChild; a; a = a.nextSibling) d += p(a)
            } else {
                if (3 === b || 4 === b) return a.nodeValue
            } else for (b = 0; c = a[b]; b++) 8 !== c.nodeType && (d += p(c));
            return d
        },
        n = o.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(a) {
                    return a.getAttribute("href")
                },
                type: function(a) {
                    return a.getAttribute("type")
                }
            },
            relative: {
                "+": function(a, b) {
                    var c = "string" === typeof b,
                    d = c && !t.test(b),
                    c = c && !d;
                    d && (b = b.toLowerCase());
                    for (var d = 0,
                    e = a.length,
                    f; d < e; d++) if (f = a[d]) {
                        for (; (f = f.previousSibling) && 1 !== f.nodeType;);
                        a[d] = c || f && f.nodeName.toLowerCase() === b ? f || !1 : f === b
                    }
                    c && o.filter(b, a, !0)
                },
                ">": function(a, b) {
                    var c, d = "string" === typeof b,
                    e = 0,
                    f = a.length;
                    if (d && !t.test(b)) for (b = b.toLowerCase(); e < f; e++) {
                        if (c = a[e]) c = c.parentNode,
                        a[e] = c.nodeName.toLowerCase() === b ? c: !1
                    } else {
                        for (; e < f; e++)(c = a[e]) && (a[e] = d ? c.parentNode: c.parentNode === b);
                        d && o.filter(b, a, !0)
                    }
                },
                "": function(c, d, e) {
                    var g, h = f++,
                    i = b;
                    "string" === typeof d && !t.test(d) && (g = d = d.toLowerCase(), i = a);
                    i("parentNode", d, h, c, g, e)
                },
                "~": function(c, d, e) {
                    var g, h = f++,
                    i = b;
                    "string" === typeof d && !t.test(d) && (g = d = d.toLowerCase(), i = a);
                    i("previousSibling", d, h, c, g, e)
                }
            },
            find: {
                ID: function(a, b, c) {
                    if ("undefined" !== typeof b.getElementById && !c) return (a = b.getElementById(a[1])) && a.parentNode ? [a] : []
                },
                NAME: function(a, b) {
                    if ("undefined" !== typeof b.getElementsByName) {
                        for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                        return 0 === c.length ? null: c
                    }
                },
                TAG: function(a, b) {
                    if ("undefined" !== typeof b.getElementsByTagName) return b.getElementsByTagName(a[1])
                }
            },
            preFilter: {
                CLASS: function(a, b, c, d, e, f) {
                    a = " " + a[1].replace(j, "") + " ";
                    if (f) return a;
                    for (var f = 0,
                    g; null != (g = b[f]); f++) g && (e ^ (g.className && 0 <= (" " + g.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a)) ? c || d.push(g) : c && (b[f] = !1));
                    return ! 1
                },
                ID: function(a) {
                    return a[1].replace(j, "")
                },
                TAG: function(a) {
                    return a[1].replace(j, "").toLowerCase()
                },
                CHILD: function(a) {
                    if ("nth" === a[1]) {
                        a[2] || o.error(a[0]);
                        a[2] = a[2].replace(/^\+|\s*/g, "");
                        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = b[1] + (b[2] || 1) - 0;
                        a[3] = b[3] - 0
                    } else a[2] && o.error(a[0]);
                    a[0] = f++;
                    return a
                },
                ATTR: function(a, b, c, d, e, f) {
                    b = a[1] = a[1].replace(j, ""); ! f && n.attrMap[b] && (a[1] = n.attrMap[b]);
                    a[4] = (a[4] || a[5] || "").replace(j, "");
                    "~=" === a[2] && (a[4] = " " + a[4] + " ");
                    return a
                },
                PSEUDO: function(a, b, c, e, f) {
                    if ("not" === a[1]) if (1 < (d.exec(a[3]) || "").length || /^\w/.test(a[3])) a[3] = o(a[3], null, null, b);
                    else return a = o.filter(a[3], b, c, 1 ^ f),
                    c || e.push.apply(e, a),
                    !1;
                    else if (n.match.POS.test(a[0]) || n.match.CHILD.test(a[0])) return ! 0;
                    return a
                },
                POS: function(a) {
                    a.unshift(!0);
                    return a
                }
            },
            filters: {
                enabled: function(a) {
                    return ! 1 === a.disabled && "hidden" !== a.type
                },
                disabled: function(a) {
                    return ! 0 === a.disabled
                },
                checked: function(a) {
                    return ! 0 === a.checked
                },
                selected: function(a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return ! 0 === a.selected
                },
                parent: function(a) {
                    return !! a.firstChild
                },
                empty: function(a) {
                    return ! a.firstChild
                },
                has: function(a, b, c) {
                    return !! o(c[3], a).length
                },
                header: function(a) {
                    return /h\d/i.test(a.nodeName)
                },
                text: function(a) {
                    var b = a.getAttribute("type"),
                    c = a.type;
                    return "input" === a.nodeName.toLowerCase() && "text" === c && (b === c || null === b)
                },
                radio: function(a) {
                    return "input" === a.nodeName.toLowerCase() && "radio" === a.type
                },
                checkbox: function(a) {
                    return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type
                },
                file: function(a) {
                    return "input" === a.nodeName.toLowerCase() && "file" === a.type
                },
                password: function(a) {
                    return "input" === a.nodeName.toLowerCase() && "password" === a.type
                },
                submit: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return ("input" === b || "button" === b) && "submit" === a.type
                },
                image: function(a) {
                    return "input" === a.nodeName.toLowerCase() && "image" === a.type
                },
                reset: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return ("input" === b || "button" === b) && "reset" === a.type
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                input: function(a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                },
                focus: function(a) {
                    return a === a.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function(a, b) {
                    return 0 === b
                },
                last: function(a, b, c, d) {
                    return b === d.length - 1
                },
                even: function(a, b) {
                    return 0 === b % 2
                },
                odd: function(a, b) {
                    return 1 === b % 2
                },
                lt: function(a, b, c) {
                    return b < c[3] - 0
                },
                gt: function(a, b, c) {
                    return b > c[3] - 0
                },
                nth: function(a, b, c) {
                    return c[3] - 0 === b
                },
                eq: function(a, b, c) {
                    return c[3] - 0 === b
                }
            },
            filter: {
                PSEUDO: function(a, b, c, d) {
                    var e = b[1],
                    f = n.filters[e];
                    if (f) return f(a, c, b, d);
                    if ("contains" === e) return 0 <= (a.textContent || a.innerText || p([a]) || "").indexOf(b[3]);
                    if ("not" === e) {
                        b = b[3];
                        c = 0;
                        for (d = b.length; c < d; c++) if (b[c] === a) return ! 1;
                        return ! 0
                    }
                    o.error(e)
                },
                CHILD: function(a, b) {
                    var c, d, f, g, h, i;
                    c = b[1];
                    i = a;
                    switch (c) {
                    case "only":
                    case "first":
                        for (; i = i.previousSibling;) if (1 === i.nodeType) return ! 1;
                        if ("first" === c) return ! 0;
                        i = a;
                    case "last":
                        for (; i = i.nextSibling;) if (1 === i.nodeType) return ! 1;
                        return ! 0;
                    case "nth":
                        c = b[2];
                        d = b[3];
                        if (1 === c && 0 === d) return ! 0;
                        f = b[0];
                        if ((g = a.parentNode) && (g[e] !== f || !a.nodeIndex)) {
                            h = 0;
                            for (i = g.firstChild; i; i = i.nextSibling) 1 === i.nodeType && (i.nodeIndex = ++h);
                            g[e] = f
                        }
                        i = a.nodeIndex - d;
                        return 0 === c ? 0 === i: 0 === i % c && 0 <= i / c
                    }
                },
                ID: function(a, b) {
                    return 1 === a.nodeType && a.getAttribute("id") === b
                },
                TAG: function(a, b) {
                    return "*" === b && 1 === a.nodeType || !!a.nodeName && a.nodeName.toLowerCase() === b
                },
                CLASS: function(a, b) {
                    return - 1 < (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b)
                },
                ATTR: function(a, b) {
                    var c = b[1],
                    c = o.attr ? o.attr(a, c) : n.attrHandle[c] ? n.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c),
                    d = c + "",
                    e = b[2],
                    f = b[4];
                    return null == c ? "!=" === e: !e && o.attr ? null != c: "=" === e ? d === f: "*=" === e ? 0 <= d.indexOf(f) : "~=" === e ? 0 <= (" " + d + " ").indexOf(f) : !f ? d && !1 !== c: "!=" === e ? d !== f: "^=" === e ? 0 === d.indexOf(f) : "$=" === e ? d.substr(d.length - f.length) === f: "|=" === e ? d === f || d.substr(0, f.length + 1) === f + "-": !1
                },
                POS: function(a, b, c, d) {
                    var e = n.setFilters[b[2]];
                    if (e) return e(a, c, b, d)
                }
            }
        },
        r = n.match.POS,
        x = function(a, b) {
            return "\\" + (b - 0 + 1)
        },
        w;
        for (w in n.match) n.match[w] = RegExp(n.match[w].source + /(?![^\[]*\])(?![^\(]*\))/.source),
        n.leftMatch[w] = RegExp(/(^(?:.|\r|\n)*?)/.source + n.match[w].source.replace(/\\(\d+)/g, x));
        var u = function(a, b) {
            a = Array.prototype.slice.call(a, 0);
            return b ? (b.push.apply(b, a), b) : a
        };
        try {
            Array.prototype.slice.call(k.documentElement.childNodes, 0)[0].nodeType
        } catch(y) {
            u = function(a, b) {
                var c = 0,
                d = b || [];
                if ("[object Array]" === g.call(a)) Array.prototype.push.apply(d, a);
                else if ("number" === typeof a.length) for (var e = a.length; c < e; c++) d.push(a[c]);
                else for (; a[c]; c++) d.push(a[c]);
                return d
            }
        }
        var v, q;
        k.documentElement.compareDocumentPosition ? v = function(a, b) {
            return a === b ? (h = !0, 0) : !a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) & 4 ? -1 : 1
        }: (v = function(a, b) {
            if (a === b) return h = !0,
            0;
            if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
            var c, d, e = [],
            f = [];
            c = a.parentNode;
            d = b.parentNode;
            var g = c;
            if (c === d) return q(a, b);
            if (c) {
                if (!d) return 1
            } else return - 1;
            for (; g;) e.unshift(g),
            g = g.parentNode;
            for (g = d; g;) f.unshift(g),
            g = g.parentNode;
            c = e.length;
            d = f.length;
            for (g = 0; g < c && g < d; g++) if (e[g] !== f[g]) return q(e[g], f[g]);
            return g === c ? q(a, f[g], -1) : q(e[g], b, 1)
        },
        q = function(a, b, c) {
            if (a === b) return c;
            for (a = a.nextSibling; a;) {
                if (a === b) return - 1;
                a = a.nextSibling
            }
            return 1
        }); (function() {
            var a = k.createElement("div"),
            b = "script" + (new Date).getTime(),
            c = k.documentElement;
            a.innerHTML = "<a name='" + b + "'/>";
            c.insertBefore(a, c.firstChild);
            k.getElementById(b) && (n.find.ID = function(a, b, c) {
                if ("undefined" !== typeof b.getElementById && !c) return (b = b.getElementById(a[1])) ? b.id === a[1] || "undefined" !== typeof b.getAttributeNode && b.getAttributeNode("id").nodeValue === a[1] ? [b] : l: []
            },
            n.filter.ID = function(a, b) {
                var c = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id");
                return 1 === a.nodeType && c && c.nodeValue === b
            });
            c.removeChild(a);
            c = a = null
        })(); (function() {
            var a = k.createElement("div");
            a.appendChild(k.createComment(""));
            0 < a.getElementsByTagName("*").length && (n.find.TAG = function(a, b) {
                var c = b.getElementsByTagName(a[1]);
                if ("*" === a[1]) {
                    for (var d = [], e = 0; c[e]; e++) 1 === c[e].nodeType && d.push(c[e]);
                    c = d
                }
                return c
            });
            a.innerHTML = "<a href='#'></a>";
            a.firstChild && "undefined" !== typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (n.attrHandle.href = function(a) {
                return a.getAttribute("href", 2)
            });
            a = null
        })();
        k.querySelectorAll &&
        function() {
            var a = o,
            b = k.createElement("div");
            b.innerHTML = "<p class='TEST'></p>";
            if (! (b.querySelectorAll && 0 === b.querySelectorAll(".TEST").length)) {
                o = function(b, c, d, e) {
                    c = c || k;
                    if (!e && !o.isXML(c)) {
                        var f = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (f && (1 === c.nodeType || 9 === c.nodeType)) {
                            if (f[1]) return u(c.getElementsByTagName(b), d);
                            if (f[2] && n.find.CLASS && c.getElementsByClassName) return u(c.getElementsByClassName(f[2]), d)
                        }
                        if (9 === c.nodeType) {
                            if ("body" === b && c.body) return u([c.body], d);
                            if (f && f[3]) {
                                var g = c.getElementById(f[3]);
                                if (g && g.parentNode) {
                                    if (g.id === f[3]) return u([g], d)
                                } else return u([], d)
                            }
                            try {
                                return u(c.querySelectorAll(b), d)
                            } catch(h) {}
                        } else if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                            var f = c,
                            i = (g = c.getAttribute("id")) || "__sizzle__",
                            j = c.parentNode,
                            m = /^\s*[+~]/.test(b);
                            g ? i = i.replace(/'/g, "\\$&") : c.setAttribute("id", i);
                            m && j && (c = c.parentNode);
                            try {
                                if (!m || j) return u(c.querySelectorAll("[id='" + i + "'] " + b), d)
                            } catch(l) {} finally {
                                g || f.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, c, d, e)
                };
                for (var c in a) o[c] = a[c];
                b = null
            }
        } (); (function() {
            var a = k.documentElement,
            b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var c = !b.call(k.createElement("div"), "div"),
                d = !1;
                try {
                    b.call(k.documentElement, "[test!='']:sizzle")
                } catch(e) {
                    d = !0
                }
                o.matchesSelector = function(a, e) {
                    e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!o.isXML(a)) try {
                        if (d || !n.match.PSEUDO.test(e) && !/!=/.test(e)) {
                            var f = b.call(a, e);
                            if (f || !c || a.document && 11 !== a.document.nodeType) return f
                        }
                    } catch(g) {}
                    return 0 < o(e, null, null, [a]).length
                }
            }
        })(); (function() {
            var a = k.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length && (n.order.splice(1, 0, "CLASS"), n.find.CLASS = function(a, b, c) {
                if ("undefined" !== typeof b.getElementsByClassName && !c) return b.getElementsByClassName(a[1])
            },
            a = null))
        })();
        o.contains = k.documentElement.contains ?
        function(a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        }: k.documentElement.compareDocumentPosition ?
        function(a, b) {
            return !! (a.compareDocumentPosition(b) & 16)
        }: function() {
            return ! 1
        };
        o.isXML = function(a) {
            return (a = (a ? a.ownerDocument || a: 0).documentElement) ? "HTML" !== a.nodeName: !1
        };
        var A = function(a, b, c) {
            for (var d, e = [], f = "", b = b.nodeType ? [b] : b; d = n.match.PSEUDO.exec(a);) f += d[0],
            a = a.replace(n.match.PSEUDO, "");
            a = n.relative[a] ? a + "*": a;
            d = 0;
            for (var g = b.length; d < g; d++) o(a, b[d], e, c);
            return o.filter(f, e)
        };
        o.attr = c.attr;
        o.selectors.attrMap = {};
        c.find = o;
        c.expr = o.selectors;
        c.expr[":"] = c.expr.filters;
        c.unique = o.uniqueSort;
        c.text = o.getText;
        c.isXMLDoc = o.isXML;
        c.contains = o.contains
    })();
    var xb = /Until$/,
    yb = /^(?:parents|prevUntil|prevAll)/,
    zb = /,/,
    cb = /^.[^:#\[\.,]*$/,
    Ab = Array.prototype.slice,
    Ma = c.expr.match.POS,
    Bb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    c.fn.extend({
        find: function(a) {
            var b = this,
            d, e;
            if ("string" !== typeof a) return c(a).filter(function() {
                for (d = 0, e = b.length; d < e; d++) if (c.contains(b[d], this)) return ! 0
            });
            var f = this.pushStack("", "find", a),
            g,
            h,
            i;
            for (d = 0, e = this.length; d < e; d++) if (g = f.length, c.find(a, this[d], f), 0 < d) for (h = g; h < f.length; h++) for (i = 0; i < g; i++) if (f[i] === f[h]) {
                f.splice(h--, 1);
                break
            }
            return f
        },
        has: function(a) {
            var b = c(a);
            return this.filter(function() {
                for (var a = 0,
                e = b.length; a < e; a++) if (c.contains(this, b[a])) return ! 0
            })
        },
        not: function(a) {
            return this.pushStack(na(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(na(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !! a && ("string" === typeof a ? Ma.test(a) ? 0 <= c(a, this.context).index(this[0]) : 0 < c.filter(a, this).length: 0 < this.filter(a).length)
        },
        closest: function(a, b) {
            var d = [],
            e,
            f,
            g = this[0];
            if (c.isArray(a)) {
                for (f = 1; g && g.ownerDocument && g !== b;) {
                    for (e = 0; e < a.length; e++) c(g).is(a[e]) && d.push({
                        selector: a[e],
                        elem: g,
                        level: f
                    });
                    g = g.parentNode;
                    f++
                }
                return d
            }
            var h = Ma.test(a) || "string" !== typeof a ? c(a, b || this.context) : 0;
            for (e = 0, f = this.length; e < f; e++) for (g = this[e]; g;) if (h ? -1 < h.index(g) : c.find.matchesSelector(g, a)) {
                d.push(g);
                break
            } else if (g = g.parentNode, !g || !g.ownerDocument || g === b || 11 === g.nodeType) break;
            d = 1 < d.length ? c.unique(d) : d;
            return this.pushStack(d, "closest", a)
        },
        index: function(a) {
            return ! a ? this[0] && this[0].parentNode ? this.prevAll().length: -1 : "string" === typeof a ? c.inArray(this[0], c(a)) : c.inArray(a.jquery ? a[0] : a, this)
        },
        add: function(a, b) {
            var d = "string" === typeof a ? c(a, b) : c.makeArray(a && a.nodeType ? [a] : a),
            e = c.merge(this.get(), d);
            return this.pushStack(!d[0] || !d[0].parentNode || 11 === d[0].parentNode.nodeType || !e[0] || !e[0].parentNode || 11 === e[0].parentNode.nodeType ? e: c.unique(e))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    });
    c.each({
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a: null
        },
        parents: function(a) {
            return c.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, d) {
            return c.dir(a, "parentNode", d)
        },
        next: function(a) {
            return c.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return c.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return c.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return c.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, d) {
            return c.dir(a, "nextSibling", d)
        },
        prevUntil: function(a, b, d) {
            return c.dir(a, "previousSibling", d)
        },
        siblings: function(a) {
            return c.sibling(a.parentNode.firstChild, a)
        },
        children: function(a) {
            return c.sibling(a.firstChild)
        },
        contents: function(a) {
            return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: c.makeArray(a.childNodes)
        }
    },
    function(a, b) {
        c.fn[a] = function(d, e) {
            var f = c.map(this, b, d),
            g = Ab.call(arguments);
            xb.test(a) || (e = d);
            e && "string" === typeof e && (f = c.filter(e, f));
            f = 1 < this.length && !Bb[a] ? c.unique(f) : f;
            if ((1 < this.length || zb.test(e)) && yb.test(a)) f = f.reverse();
            return this.pushStack(f, a, g.join(","))
        }
    });
    c.extend({
        filter: function(a, b, d) {
            d && (a = ":not(" + a + ")");
            return 1 === b.length ? c.find.matchesSelector(b[0], a) ? [b[0]] : [] : c.find.matches(a, b)
        },
        dir: function(a, b, d) {
            for (var e = [], a = a[b]; a && 9 !== a.nodeType && (d === l || 1 !== a.nodeType || !c(a).is(d));) 1 === a.nodeType && e.push(a),
            a = a[b];
            return e
        },
        nth: function(a, b, c) {
            for (var b = b || 1,
            e = 0; a && !(1 === a.nodeType && ++e === b); a = a[c]);
            return a
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var pa = "abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
    Cb = / jQuery\d+="(?:\d+|null)"/g,
    ha = /^\s+/,
    Na = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Oa = /<([\w:]+)/,
    Db = /<tbody/i,
    Eb = /<|&#?\w+;/,
    Fb = /<(?:script|style)/i,
    Gb = /<(?:script|object|embed|option|style)/i,
    Hb = RegExp("<(?:" + pa.replace(" ", "|") + ")", "i"),
    Pa = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ib = /\/(java|ecma)script/i,
    eb = /^\s*<!(?:\[CDATA\[|\-\-)/,
    x = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    },
    Jb = oa(k);
    x.optgroup = x.option;
    x.tbody = x.tfoot = x.colgroup = x.caption = x.thead;
    x.th = x.td;
    c.support.htmlSerialize || (x._default = [1, "div<div>", "</div>"]);
    c.fn.extend({
        text: function(a) {
            return c.isFunction(a) ? this.each(function(b) {
                var d = c(this);
                d.text(a.call(this, b, d.text()))
            }) : "object" !== typeof a && a !== l ? this.empty().append((this[0] && this[0].ownerDocument || k).createTextNode(a)) : c.text(this)
        },
        wrapAll: function(a) {
            if (c.isFunction(a)) return this.each(function(b) {
                c(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = c(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return c.isFunction(a) ? this.each(function(b) {
                c(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = c(this),
                d = b.contents();
                d.length ? d.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            return this.each(function() {
                c(this).wrapAll(a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0,
            function(a) {
                1 === this.nodeType && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0,
            function(a) {
                1 === this.nodeType && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
            function(a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = c(arguments[0]);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
            function(a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, c(arguments[0]).toArray());
                return a
            }
        },
        remove: function(a, b) {
            for (var d = 0,
            e; null != (e = this[d]); d++) if (!a || c.filter(a, [e]).length) ! b && 1 === e.nodeType && (c.cleanData(e.getElementsByTagName("*")), c.cleanData([e])),
            e.parentNode && e.parentNode.removeChild(e);
            return this
        },
        empty: function() {
            for (var a = 0,
            b; null != (b = this[a]); a++) for (1 === b.nodeType && c.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        },
        clone: function(a, b) {
            a = null == a ? !1 : a;
            b = null == b ? a: b;
            return this.map(function() {
                return c.clone(this, a, b)
            })
        },
        html: function(a) {
            if (a === l) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(Cb, "") : null;
            if ("string" === typeof a && !Fb.test(a) && (c.support.leadingWhitespace || !ha.test(a)) && !x[(Oa.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Na, "<$1></$2>");
                try {
                    for (var b = 0,
                    d = this.length; b < d; b++) 1 === this[b].nodeType && (c.cleanData(this[b].getElementsByTagName("*")), this[b].innerHTML = a)
                } catch(e) {
                    this.empty().append(a)
                }
            } else c.isFunction(a) ? this.each(function(b) {
                var d = c(this);
                d.html(a.call(this, b, d.html()))
            }) : this.empty().append(a);
            return this
        },
        replaceWith: function(a) {
            if (this[0] && this[0].parentNode) {
                if (c.isFunction(a)) return this.each(function(b) {
                    var d = c(this),
                    e = d.html();
                    d.replaceWith(a.call(this, b, e))
                });
                "string" !== typeof a && (a = c(a).detach());
                return this.each(function() {
                    var b = this.nextSibling,
                    d = this.parentNode;
                    c(this).remove();
                    b ? c(b).before(a) : c(d).append(a)
                })
            }
            return this.length ? this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b, d) {
            var e, f, g, h = a[0],
            i = [];
            if (!c.support.checkClone && 3 === arguments.length && "string" === typeof h && Pa.test(h)) return this.each(function() {
                c(this).domManip(a, b, d, !0)
            });
            if (c.isFunction(h)) return this.each(function(e) {
                var f = c(this);
                a[0] = h.call(this, e, b ? f.html() : l);
                f.domManip(a, b, d)
            });
            if (this[0]) {
                e = h && h.parentNode;
                e = c.support.parentNode && e && 11 === e.nodeType && e.childNodes.length === this.length ? {
                    fragment: e
                }: c.buildFragment(a, this, i);
                g = e.fragment;
                if (f = 1 === g.childNodes.length ? g = g.firstChild: g.firstChild) {
                    b = b && c.nodeName(f, "tr");
                    f = 0;
                    for (var j = this.length,
                    m = j - 1; f < j; f++) d.call(b ? c.nodeName(this[f], "table") ? this[f].getElementsByTagName("tbody")[0] || this[f].appendChild(this[f].ownerDocument.createElement("tbody")) : this[f] : this[f], e.cacheable || 1 < j && f < m ? c.clone(g, !0, !0) : g)
                }
                i.length && c.each(i, db)
            }
            return this
        }
    });
    c.buildFragment = function(a, b, d) {
        var e, f, g, h, i = a[0];
        b && b[0] && (h = b[0].ownerDocument || b[0]);
        h.createDocumentFragment || (h = k);
        if (1 === a.length && "string" === typeof i && 512 > i.length && h === k && "<" === i.charAt(0) && !Gb.test(i) && (c.support.checkClone || !Pa.test(i)) && !c.support.unknownElems && Hb.test(i)) f = !0,
        (g = c.fragments[i]) && 1 !== g && (e = g);
        e || (e = h.createDocumentFragment(), c.clean(a, h, e, d));
        f && (c.fragments[i] = g ? e: 1);
        return {
            fragment: e,
            cacheable: f
        }
    };
    c.fragments = {};
    c.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(a, b) {
        c.fn[a] = function(d) {
            var e = [],
            d = c(d),
            f = 1 === this.length && this[0].parentNode;
            if (f && 11 === f.nodeType && 1 === f.childNodes.length && 1 === d.length) return d[b](this[0]),
            this;
            for (var f = 0,
            g = d.length; f < g; f++) {
                var h = (0 < f ? this.clone(!0) : this).get();
                c(d[f])[b](h);
                e = e.concat(h)
            }
            return this.pushStack(e, a, d.selector)
        }
    });
    c.extend({
        clone: function(a, b, d) {
            var e = a.cloneNode(!0),
            f,
            g,
            h;
            if ((!c.support.noCloneEvent || !c.support.noCloneChecked) && (1 === a.nodeType || 11 === a.nodeType) && !c.isXMLDoc(a)) {
                ra(a, e);
                f = P(a);
                g = P(e);
                for (h = 0; f[h]; ++h) g[h] && ra(f[h], g[h])
            }
            if (b && (qa(a, e), d)) {
                f = P(a);
                g = P(e);
                for (h = 0; f[h]; ++h) qa(f[h], g[h])
            }
            return e
        },
        clean: function(a, b, d, e) {
            b = b || k;
            "undefined" === typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || k);
            for (var f = [], g, h = 0, i; null != (i = a[h]); h++) if ("number" === typeof i && (i += ""), i) {
                if ("string" === typeof i) if (Eb.test(i)) {
                    i = i.replace(Na, "<$1></$2>");
                    g = (Oa.exec(i) || ["", ""])[1].toLowerCase();
                    var j = x[g] || x._default,
                    m = j[0],
                    l = b.createElement("div");
                    b === k ? Jb.appendChild(l) : oa(b).appendChild(l);
                    for (l.innerHTML = j[1] + i + j[2]; m--;) l = l.lastChild;
                    if (!c.support.tbody) {
                        m = Db.test(i);
                        j = "table" === g && !m ? l.firstChild && l.firstChild.childNodes: "<table>" === j[1] && !m ? l.childNodes: [];
                        for (g = j.length - 1; 0 <= g; --g) c.nodeName(j[g], "tbody") && !j[g].childNodes.length && j[g].parentNode.removeChild(j[g])
                    } ! c.support.leadingWhitespace && ha.test(i) && l.insertBefore(b.createTextNode(ha.exec(i)[0]), l.firstChild);
                    i = l.childNodes
                } else i = b.createTextNode(i);
                var o;
                if (!c.support.appendChecked) if (i[0] && "number" === typeof(o = i.length)) for (g = 0; g < o; g++) ta(i[g]);
                else ta(i);
                i.nodeType ? f.push(i) : f = c.merge(f, i)
            }
            if (d) {
                a = function(a) {
                    return ! a.type || Ib.test(a.type)
                };
                for (h = 0; f[h]; h++) e && c.nodeName(f[h], "script") && (!f[h].type || "text/javascript" === f[h].type.toLowerCase()) ? e.push(f[h].parentNode ? f[h].parentNode.removeChild(f[h]) : f[h]) : (1 === f[h].nodeType && (b = c.grep(f[h].getElementsByTagName("script"), a), f.splice.apply(f, [h + 1, 0].concat(b))), d.appendChild(f[h]))
            }
            return f
        },
        cleanData: function(a) {
            for (var b, d, e = c.cache,
            f = c.event.special,
            g = c.support.deleteExpando,
            h = 0,
            i; null != (i = a[h]); h++) if (!i.nodeName || !c.noData[i.nodeName.toLowerCase()]) if (d = i[c.expando]) {
                if ((b = e[d]) && b.events) {
                    for (var j in b.events) f[j] ? c.event.remove(i, j) : c.removeEvent(i, j, b.handle);
                    b.handle && (b.handle.elem = null)
                }
                g ? delete i[c.expando] : i.removeAttribute && i.removeAttribute(c.expando);
                delete e[d]
            }
        }
    });
    var ia = /alpha\([^)]*\)/i,
    Kb = /opacity=([^)]*)/,
    Lb = /([A-Z]|^ms)/g,
    Qa = /^-?\d+(?:px)?$/i,
    Mb = /^-?\d/,
    Nb = /^([\-+])=([\-+.\de]+)/,
    Ob = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    fb = ["Left", "Right"],
    gb = ["Top", "Bottom"],
    C,
    Ra,
    Sa;
    c.fn.css = function(a, b) {
        return 2 === arguments.length && b === l ? this: c.access(this, a, b, !0,
        function(a, b, f) {
            return f !== l ? c.style(a, b, f) : c.css(a, b)
        })
    };
    c.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = C(a, "opacity", "opacity");
                        return "" === c ? "1": c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": c.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(a, b, d, e) {
            if (a && !(3 === a.nodeType || 8 === a.nodeType || !a.style)) {
                var f, g = c.camelCase(b),
                h = a.style,
                i = c.cssHooks[g],
                b = c.cssProps[g] || g;
                if (d !== l) {
                    e = typeof d;
                    if ("string" === e && (f = Nb.exec(d))) d = +(f[1] + 1) * +f[2] + parseFloat(c.css(a, b)),
                    e = "number";
                    if (! (null == d || "number" === e && isNaN(d))) if ("number" === e && !c.cssNumber[g] && (d += "px"), !i || !("set" in i) || (d = i.set(a, d)) !== l) try {
                        h[b] = d
                    } catch(j) {}
                } else return i && "get" in i && (f = i.get(a, !1, e)) !== l ? f: h[b]
            }
        },
        css: function(a, b, d) {
            var e, f, b = c.camelCase(b);
            f = c.cssHooks[b];
            b = c.cssProps[b] || b;
            "cssFloat" === b && (b = "float");
            if (f && "get" in f && (e = f.get(a, !0, d)) !== l) return e;
            if (C) return C(a, b)
        },
        swap: function(a, b, c) {
            var e = {},
            f;
            for (f in b) e[f] = a.style[f],
            a.style[f] = b[f];
            c.call(a);
            for (f in b) a.style[f] = e[f]
        }
    });
    c.curCSS = c.css;
    c.each(["height", "width"],
    function(a, b) {
        c.cssHooks[b] = {
            get: function(a, e, f) {
                var g;
                if (e) {
                    if (0 !== a.offsetWidth) return ua(a, b, f);
                    c.swap(a, Ob,
                    function() {
                        g = ua(a, b, f)
                    });
                    return g
                }
            },
            set: function(a, b) {
                if (Qa.test(b)) {
                    if (b = parseFloat(b), 0 <= b) return b + "px"
                } else return b
            }
        }
    });
    c.support.opacity || (c.cssHooks.opacity = {
        get: function(a, b) {
            return Kb.test((b && a.currentStyle ? a.currentStyle.filter: a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "": b ? "1": ""
        },
        set: function(a, b) {
            var d = a.style,
            e = a.currentStyle,
            f = c.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")": "",
            g = e && e.filter || d.filter || "";
            d.zoom = 1;
            if (1 <= b && "" === c.trim(g.replace(ia, "")) && (d.removeAttribute("filter"), e && !e.filter)) return;
            d.filter = ia.test(g) ? g.replace(ia, f) : g + " " + f
        }
    });
    c(function() {
        c.support.reliableMarginRight || (c.cssHooks.marginRight = {
            get: function(a, b) {
                var d;
                c.swap(a, {
                    display: "inline-block"
                },
                function() {
                    d = b ? C(a, "margin-right", "marginRight") : a.style.marginRight
                });
                return d
            }
        })
    });
    k.defaultView && k.defaultView.getComputedStyle && (Ra = function(a, b) {
        var d, e, b = b.replace(Lb, "-$1").toLowerCase();
        if (! (e = a.ownerDocument.defaultView)) return l;
        if (e = e.getComputedStyle(a, null)) d = e.getPropertyValue(b),
        "" === d && !c.contains(a.ownerDocument.documentElement, a) && (d = c.style(a, b));
        return d
    });
    k.documentElement.currentStyle && (Sa = function(a, b) {
        var c, e, f = a.currentStyle && a.currentStyle[b],
        g = a.style;
        if (null === f && g && (c = g[b])) f = c;
        if (!Qa.test(f) && Mb.test(f)) {
            c = g.left;
            if (e = a.runtimeStyle && a.runtimeStyle.left) a.runtimeStyle.left = a.currentStyle.left;
            g.left = "fontSize" === b ? "1em": f || 0;
            f = g.pixelLeft + "px";
            g.left = c;
            e && (a.runtimeStyle.left = e)
        }
        return "" === f ? "auto": f
    });
    C = Ra || Sa;
    c.expr && c.expr.filters && (c.expr.filters.hidden = function(a) {
        var b = a.offsetHeight;
        return 0 === a.offsetWidth && 0 === b || !c.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || c.css(a, "display"))
    },
    c.expr.filters.visible = function(a) {
        return ! c.expr.filters.hidden(a)
    });
    var Pb = /%20/g,
    hb = /\[\]$/,
    Ta = /\r?\n/g,
    Qb = /#.*$/,
    Rb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Sb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    Tb = /^(?:GET|HEAD)$/,
    Ub = /^\/\//,
    Ua = /\?/,
    Vb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    Wb = /^(?:select|textarea)/i,
    wa = /\s+/,
    Xb = /([?&])_=[^&]*/,
    Va = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    Wa = c.fn.load,
    $ = {},
    Xa = {},
    H, E, Ya = ["*/"] + ["*"];
    try {
        H = kb.href
    } catch(cc) {
        H = k.createElement("a"),
        H.href = "",
        H = H.href
    }
    E = Va.exec(H.toLowerCase()) || [];
    c.fn.extend({
        load: function(a, b, d) {
            if ("string" !== typeof a && Wa) return Wa.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (0 <= e) var f = a.slice(e, a.length),
            a = a.slice(0, e);
            e = "GET";
            b && (c.isFunction(b) ? (d = b, b = l) : "object" === typeof b && (b = c.param(b, c.ajaxSettings.traditional), e = "POST"));
            var g = this;
            c.ajax({
                url: a,
                type: e,
                dataType: "html",
                data: b,
                complete: function(a, b, e) {
                    e = a.responseText;
                    a.isResolved() && (a.done(function(a) {
                        e = a
                    }), g.html(f ? c("<div>").append(e.replace(Vb, "")).find(f) : e));
                    d && g.each(d, [e, b, a])
                }
            });
            return this
        },
        serialize: function() {
            return c.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? c.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Wb.test(this.nodeName) || Sb.test(this.type))
            }).map(function(a, b) {
                var d = c(this).val();
                return null == d ? null: c.isArray(d) ? c.map(d,
                function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Ta, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: d.replace(Ta, "\r\n")
                }
            }).get()
        }
    });
    c.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),
    function(a, b) {
        c.fn[b] = function(a) {
            return this.bind(b, a)
        }
    });
    c.each(["get", "post"],
    function(a, b) {
        c[b] = function(a, e, f, g) {
            c.isFunction(e) && (g = g || f, f = e, e = l);
            return c.ajax({
                type: b,
                url: a,
                data: e,
                success: f,
                dataType: g
            })
        }
    });
    c.extend({
        getScript: function(a, b) {
            return c.get(a, l, b, "script")
        },
        getJSON: function(a, b, d) {
            return c.get(a, b, d, "json")
        },
        ajaxSetup: function(a, b) {
            b ? xa(a, c.ajaxSettings) : (b = a, a = c.ajaxSettings);
            xa(a, b);
            return a
        },
        ajaxSettings: {
            url: H,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(E[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Ya
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": r.String,
                "text html": !0,
                "text json": c.parseJSON,
                "text xml": c.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: va($),
        ajaxTransport: va(Xa),
        ajax: function(a, b) {
            function d(a, b, d, k) {
                if (2 !== u) {
                    u = 2;
                    x && clearTimeout(x);
                    r = l;
                    p = k || "";
                    q.readyState = 0 < a ? 4 : 0;
                    var o, n, t, k = b;
                    if (d) {
                        var s = e,
                        w = q,
                        A = s.contents,
                        v = s.dataTypes,
                        H = s.responseFields,
                        B, z, L, E;
                        for (z in H) z in d && (w[H[z]] = d[z]);
                        for (;
                        "*" === v[0];) v.shift(),
                        B === l && (B = s.mimeType || w.getResponseHeader("content-type"));
                        if (B) for (z in A) if (A[z] && A[z].test(B)) {
                            v.unshift(z);
                            break
                        }
                        if (v[0] in d) L = v[0];
                        else {
                            for (z in d) {
                                if (!v[0] || s.converters[z + " " + v[0]]) {
                                    L = z;
                                    break
                                }
                                E || (E = z)
                            }
                            L = L || E
                        }
                        L ? (L !== v[0] && v.unshift(L), d = d[L]) : d = void 0
                    } else d = l;
                    if (200 <= a && 300 > a || 304 === a) {
                        if (e.ifModified) {
                            if (B = q.getResponseHeader("Last-Modified")) c.lastModified[m] = B;
                            if (B = q.getResponseHeader("Etag")) c.etag[m] = B
                        }
                        if (304 === a) k = "notmodified",
                        o = !0;
                        else try {
                            B = e;
                            B.dataFilter && (d = B.dataFilter(d, B.dataType));
                            var G = B.dataTypes;
                            z = {};
                            var C, D, J = G.length,
                            F, M = G[0],
                            R,
                            I,
                            N,
                            O,
                            S;
                            for (C = 1; C < J; C++) {
                                if (1 === C) for (D in B.converters)"string" === typeof D && (z[D.toLowerCase()] = B.converters[D]);
                                R = M;
                                M = G[C];
                                if ("*" === M) M = R;
                                else if ("*" !== R && R !== M) {
                                    I = R + " " + M;
                                    N = z[I] || z["* " + M];
                                    if (!N) for (O in S = l, z) if (F = O.split(" "), F[0] === R || "*" === F[0]) if (S = z[F[1] + " " + M]) {
                                        O = z[O]; ! 0 === O ? N = S: !0 === S && (N = O);
                                        break
                                    } ! N && !S && c.error("No conversion from " + I.replace(" ", " to ")); ! 0 !== N && (d = N ? N(d) : S(O(d)))
                                }
                            }
                            n = d;
                            k = "success";
                            o = !0
                        } catch(P) {
                            k = "parsererror",
                            t = P
                        }
                    } else if (t = k, !k || a) k = "error",
                    0 > a && (a = 0);
                    q.status = a;
                    q.statusText = "" + (b || k);
                    o ? h.resolveWith(f, [n, k, q]) : h.rejectWith(f, [q, k, t]);
                    q.statusCode(j);
                    j = l;
                    y && g.trigger("ajax" + (o ? "Success": "Error"), [q, e, o ? n: t]);
                    i.fireWith(f, [q, k]);
                    y && (g.trigger("ajaxComplete", [q, e]), --c.active || c.event.trigger("ajaxStop"))
                }
            }
            "object" === typeof a && (b = a, a = l);
            var b = b || {},
            e = c.ajaxSetup({},
            b),
            f = e.context || e,
            g = f !== e && (f.nodeType || f instanceof c) ? c(f) : c.event,
            h = c.Deferred(),
            i = c.Callbacks("once memory"),
            j = e.statusCode || {},
            m,
            k = {},
            o = {},
            p,
            n,
            r,
            x,
            w,
            u = 0,
            y,
            v,
            q = {
                readyState: 0,
                setRequestHeader: function(a, b) {
                    if (!u) {
                        var c = a.toLowerCase(),
                        a = o[c] = o[c] || a;
                        k[a] = b
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return 2 === u ? p: null
                },
                getResponseHeader: function(a) {
                    var b;
                    if (2 === u) {
                        if (!n) for (n = {}; b = Rb.exec(p);) n[b[1].toLowerCase()] = b[2];
                        b = n[a.toLowerCase()]
                    }
                    return b === l ? null: b
                },
                overrideMimeType: function(a) {
                    u || (e.mimeType = a);
                    return this
                },
                abort: function(a) {
                    a = a || "abort";
                    r && r.abort(a);
                    d(0, a);
                    return this
                }
            };
            h.promise(q);
            q.success = q.done;
            q.error = q.fail;
            q.complete = i.add;
            q.statusCode = function(a) {
                if (a) {
                    var b;
                    if (2 > u) for (b in a) j[b] = [j[b], a[b]];
                    else b = a[q.status],
                    q.then(b, b)
                }
                return this
            };
            e.url = ((a || e.url) + "").replace(Qb, "").replace(Ub, E[1] + "//");
            e.dataTypes = c.trim(e.dataType || "*").toLowerCase().split(wa);
            null == e.crossDomain && (w = Va.exec(e.url.toLowerCase()), e.crossDomain = !(!w || !(w[1] != E[1] || w[2] != E[2] || (w[3] || ("http:" === w[1] ? 80 : 443)) != (E[3] || ("http:" === E[1] ? 80 : 443)))));
            e.data && e.processData && "string" !== typeof e.data && (e.data = c.param(e.data, e.traditional));
            U($, e, b, q);
            if (2 === u) return ! 1;
            y = e.global;
            e.type = e.type.toUpperCase();
            e.hasContent = !Tb.test(e.type);
            y && 0 === c.active++&&c.event.trigger("ajaxStart");
            if (!e.hasContent && (e.data && (e.url += (Ua.test(e.url) ? "&": "?") + e.data, delete e.data), m = e.url, !1 === e.cache)) {
                w = c.now();
                var A = e.url.replace(Xb, "$1_=" + w);
                e.url = A + (A === e.url ? (Ua.test(e.url) ? "&": "?") + "_=" + w: "")
            } (e.data && e.hasContent && !1 !== e.contentType || b.contentType) && q.setRequestHeader("Content-Type", e.contentType);
            e.ifModified && (m = m || e.url, c.lastModified[m] && q.setRequestHeader("If-Modified-Since", c.lastModified[m]), c.etag[m] && q.setRequestHeader("If-None-Match", c.etag[m]));
            q.setRequestHeader("Accept", e.dataTypes[0] && e.accepts[e.dataTypes[0]] ? e.accepts[e.dataTypes[0]] + ("*" !== e.dataTypes[0] ? ", " + Ya + "; q=0.01": "") : e.accepts["*"]);
            for (v in e.headers) q.setRequestHeader(v, e.headers[v]);
            if (e.beforeSend && (!1 === e.beforeSend.call(f, q, e) || 2 === u)) return q.abort(),
            !1;
            for (v in {
                success: 1,
                error: 1,
                complete: 1
            }) q[v](e[v]);
            if (r = U(Xa, e, b, q)) {
                q.readyState = 1;
                y && g.trigger("ajaxSend", [q, e]);
                e.async && 0 < e.timeout && (x = setTimeout(function() {
                    q.abort("timeout")
                },
                e.timeout));
                try {
                    u = 1,
                    r.send(k, d)
                } catch(s) {
                    2 > u ? d( - 1, s) : c.error(s)
                }
            } else d( - 1, "No Transport");
            return q
        },
        param: function(a, b) {
            var d = [],
            e = function(a, b) {
                b = c.isFunction(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            b === l && (b = c.ajaxSettings.traditional);
            if (c.isArray(a) || a.jquery && !c.isPlainObject(a)) c.each(a,
            function() {
                e(this.name, this.value)
            });
            else for (var f in a) aa(f, a[f], b, e);
            return d.join("&").replace(Pb, "+")
        }
    });
    c.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Yb = c.now(),
    X = /(\=)\?(&|$)|\?\?/i;
    c.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return c.expando + "_" + Yb++
        }
    });
    c.ajaxPrefilter("json jsonp",
    function(a, b, d) {
        b = "application/x-www-form-urlencoded" === a.contentType && "string" === typeof a.data;
        if ("jsonp" === a.dataTypes[0] || !1 !== a.jsonp && (X.test(a.url) || b && X.test(a.data))) {
            var e, f = a.jsonpCallback = c.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback,
            g = r[f],
            h = a.url,
            i = a.data,
            j = "$1" + f + "$2"; ! 1 !== a.jsonp && (h = h.replace(X, j), a.url === h && (b && (i = i.replace(X, j)), a.data === i && (h += (/\?/.test(h) ? "&": "?") + a.jsonp + "=" + f)));
            a.url = h;
            a.data = i;
            r[f] = function(a) {
                e = [a]
            };
            d.always(function() {
                r[f] = g;
                if (e && c.isFunction(g)) r[f](e[0])
            });
            a.converters["script json"] = function() {
                e || c.error(f + " was not called");
                return e[0]
            };
            a.dataTypes[0] = "json";
            return "script"
        }
    });
    c.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                c.globalEval(a);
                return a
            }
        }
    });
    c.ajaxPrefilter("script",
    function(a) {
        a.cache === l && (a.cache = !1);
        a.crossDomain && (a.type = "GET", a.global = !1)
    });
    c.ajaxTransport("script",
    function(a) {
        if (a.crossDomain) {
            var b, c = k.head || k.getElementsByTagName("head")[0] || k.documentElement;
            return {
                send: function(e, f) {
                    b = k.createElement("script");
                    b.async = "async";
                    a.scriptCharset && (b.charset = a.scriptCharset);
                    b.src = a.url;
                    b.onload = b.onreadystatechange = function(a, e) {
                        if (e || !b.readyState || /loaded|complete/.test(b.readyState)) b.onload = b.onreadystatechange = null,
                        c && b.parentNode && c.removeChild(b),
                        b = l,
                        e || f(200, "success")
                    };
                    c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    if (b) b.onload(0, 1)
                }
            }
        }
    });
    var ja = r.ActiveXObject ?
    function() {
        for (var a in F) F[a](0, 1)
    }: !1,
    Zb = 0,
    F;
    c.ajaxSettings.xhr = r.ActiveXObject ?
    function() {
        var a;
        if (! (a = !this.isLocal && ya())) a: {
            try {
                a = new r.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch(b) {}
            a = void 0
        }
        return a
    }: ya; (function(a) {
        c.extend(c.support, {
            ajax: !!a,
            cors: !!a && "withCredentials" in a
        })
    })(c.ajaxSettings.xhr());
    c.support.ajax && c.ajaxTransport(function(a) {
        if (!a.crossDomain || c.support.cors) {
            var b;
            return {
                send: function(d, e) {
                    var f = a.xhr(),
                    g,
                    h;
                    a.username ? f.open(a.type, a.url, a.async, a.username, a.password) : f.open(a.type, a.url, a.async);
                    if (a.xhrFields) for (h in a.xhrFields) f[h] = a.xhrFields[h];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType); ! a.crossDomain && !d["X-Requested-With"] && (d["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in d) f.setRequestHeader(h, d[h])
                    } catch(i) {}
                    f.send(a.hasContent && a.data || null);
                    b = function(d, h) {
                        var i, k, p, n, r;
                        try {
                            if (b && (h || 4 === f.readyState)) if (b = l, g && (f.onreadystatechange = c.noop, ja && delete F[g]), h) 4 !== f.readyState && f.abort();
                            else {
                                i = f.status;
                                p = f.getAllResponseHeaders();
                                n = {};
                                if ((r = f.responseXML) && r.documentElement) n.xml = r;
                                n.text = f.responseText;
                                try {
                                    k = f.statusText
                                } catch(x) {
                                    k = ""
                                } ! i && a.isLocal && !a.crossDomain ? i = n.text ? 200 : 404 : 1223 === i && (i = 204)
                            }
                        } catch(w) {
                            h || e( - 1, w)
                        }
                        n && e(i, k, n, p)
                    }; ! a.async || 4 === f.readyState ? b() : (g = ++Zb, ja && (F || (F = {},
                    c(r).unload(ja)), F[g] = b), f.onreadystatechange = b)
                },
                abort: function() {
                    b && b(0, 1)
                }
            }
        }
    });
    var ba = {},
    y, J, $b = /^(?:toggle|show|hide)$/,
    ac = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    Y, Aa = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
    V;
    c.fn.extend({
        show: function(a, b, d) {
            if (a || 0 === a) return this.animate(D("show", 3), a, b, d);
            for (var d = 0,
            e = this.length; d < e; d++) a = this[d],
            a.style && (b = a.style.display, !c._data(a, "olddisplay") && "none" === b && (b = a.style.display = ""), "" === b && "none" === c.css(a, "display") && c._data(a, "olddisplay", Ba(a.nodeName)));
            for (d = 0; d < e; d++) if (a = this[d], a.style && (b = a.style.display, "" === b || "none" === b)) a.style.display = c._data(a, "olddisplay") || "";
            return this
        },
        hide: function(a, b, d) {
            if (a || 0 === a) return this.animate(D("hide", 3), a, b, d);
            for (var d = 0,
            e = this.length; d < e; d++) a = this[d],
            a.style && (b = c.css(a, "display"), "none" !== b && !c._data(a, "olddisplay") && c._data(a, "olddisplay", b));
            for (d = 0; d < e; d++) this[d].style && (this[d].style.display = "none");
            return this
        },
        _toggle: c.fn.toggle,
        toggle: function(a, b, d) {
            var e = "boolean" === typeof a;
            c.isFunction(a) && c.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || e ? this.each(function() {
                var b = e ? a: c(this).is(":hidden");
                c(this)[b ? "show": "hide"]()
            }) : this.animate(D("toggle", 3), a, b, d);
            return this
        },
        fadeTo: function(a, b, c, e) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            },
            a, c, e)
        },
        animate: function(a, b, d, e) {
            function f() { ! 1 === g.queue && c._mark(this);
                var b = c.extend({},
                g),
                d = 1 === this.nodeType,
                e = d && c(this).is(":hidden"),
                f,
                k,
                l,
                p,
                n;
                b.animatedProperties = {};
                for (l in a) {
                    f = c.camelCase(l);
                    l !== f && (a[f] = a[l], delete a[l]);
                    k = a[f];
                    c.isArray(k) ? (b.animatedProperties[f] = k[1], k = a[f] = k[0]) : b.animatedProperties[f] = b.specialEasing && b.specialEasing[f] || b.easing || "swing";
                    if ("hide" === k && e || "show" === k && !e) return b.complete.call(this);
                    if (d && ("height" === f || "width" === f)) b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY],
                    "inline" === c.css(this, "display") && "none" === c.css(this, "float") && (!c.support.inlineBlockNeedsLayout || "inline" === Ba(this.nodeName) ? this.style.display = "inline-block": this.style.zoom = 1)
                }
                null != b.overflow && (this.style.overflow = "hidden");
                for (l in a) if (d = new c.fx(this, b, l), k = a[l], $b.test(k)) if (f = c._data(this, "toggle" + l) || ("toggle" === k ? e ? "show": "hide": 0)) c._data(this, "toggle" + l, "show" === f ? "hide": "show"),
                d[f]();
                else d[k]();
                else f = ac.exec(k),
                p = d.cur(),
                f ? (k = parseFloat(f[2]), n = f[3] || (c.cssNumber[l] ? "": "px"), "px" !== n && (c.style(this, l, (k || 1) + n), p *= (k || 1) / d.cur(), c.style(this, l, p + n)), f[1] && (k = ("-=" === f[1] ? -1 : 1) * k + p), d.custom(p, k, n)) : d.custom(p, k, "");
                return ! 0
            }
            var g = c.speed(b, d, e);
            if (c.isEmptyObject(a)) return this.each(g.complete, [!1]);
            a = c.extend({},
            a);
            return ! 1 === g.queue ? this.each(f) : this.queue(g.queue, f)
        },
        stop: function(a, b, d) {
            "string" !== typeof a && (d = b, b = a, a = l);
            b && !1 !== a && this.queue(a || "fx", []);
            return this.each(function() {
                var b, f = !1,
                g = c.timers,
                h = c._data(this);
                d || c._unmark(!0, this);
                if (null == a) for (b in h) {
                    if (h[b].stop && b.indexOf(".run") === b.length - 4) {
                        var i = h[b];
                        c.removeData(this, b, !0);
                        i.stop(d)
                    }
                } else if (h[b = a + ".run"] && h[b].stop) h = h[b],
                c.removeData(this, b, !0),
                h.stop(d);
                for (b = g.length; b--;) if (g[b].elem === this && (null == a || g[b].queue === a)) {
                    if (d) g[b](!0);
                    else g[b].saveState();
                    f = !0;
                    g.splice(b, 1)
                } (!d || !f) && c.dequeue(this, a)
            })
        }
    });
    c.each({
        slideDown: D("show", 1),
        slideUp: D("hide", 1),
        slideToggle: D("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(a, b) {
        c.fn[a] = function(a, c, f) {
            return this.animate(b, a, c, f)
        }
    });
    c.extend({
        speed: function(a, b, d) {
            var e = a && "object" === typeof a ? c.extend({},
            a) : {
                complete: d || !d && b || c.isFunction(a) && a,
                duration: a,
                easing: d && b || b && !c.isFunction(b) && b
            };
            e.duration = c.fx.off ? 0 : "number" === typeof e.duration ? e.duration: e.duration in c.fx.speeds ? c.fx.speeds[e.duration] : c.fx.speeds._default;
            if (null == e.queue || !0 === e.queue) e.queue = "fx";
            e.old = e.complete;
            e.complete = function(a) {
                c.isFunction(e.old) && e.old.call(this);
                e.queue ? c.dequeue(this, e.queue) : !1 !== a && c._unmark(this)
            };
            return e
        },
        easing: {
            linear: function(a, b, c, e) {
                return c + e * a
            },
            swing: function(a, b, c, e) {
                return ( - Math.cos(a * Math.PI) / 2 + .5) * e + c
            }
        },
        timers: [],
        fx: function(a, b, c) {
            this.options = b;
            this.elem = a;
            this.prop = c;
            b.orig = b.orig || {}
        }
    });
    c.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this); (c.fx.step[this.prop] || c.fx.step._default)(this)
        },
        cur: function() {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
            var a, b = c.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || "auto" === b ? 0 : b: a
        },
        custom: function(a, b, d) {
            function e(a) {
                return f.step(a)
            }
            var f = this,
            g = c.fx;
            this.startTime = V || za();
            this.end = b;
            this.now = this.start = a;
            this.pos = this.state = 0;
            this.unit = d || this.unit || (c.cssNumber[this.prop] ? "": "px");
            e.queue = this.options.queue;
            e.elem = this.elem;
            e.saveState = function() {
                f.options.hide && c._data(f.elem, "fxshow" + f.prop) === l && c._data(f.elem, "fxshow" + f.prop, f.start)
            };
            e() && c.timers.push(e) && !Y && (Y = setInterval(g.tick, g.interval))
        },
        show: function() {
            var a = c._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || c.style(this.elem, this.prop);
            this.options.show = !0;
            a !== l ? this.custom(this.cur(), a) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur());
            c(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = c._data(this.elem, "fxshow" + this.prop) || c.style(this.elem, this.prop);
            this.options.hide = !0;
            this.custom(this.cur(), 0)
        },
        step: function(a) {
            var b, d = V || za(),
            e = !0,
            f = this.elem,
            g = this.options;
            if (a || d >= g.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                g.animatedProperties[this.prop] = !0;
                for (b in g.animatedProperties) ! 0 !== g.animatedProperties[b] && (e = !1);
                if (e) {
                    null != g.overflow && !c.support.shrinkWrapBlocks && c.each(["", "X", "Y"],
                    function(a, b) {
                        f.style["overflow" + b] = g.overflow[a]
                    });
                    g.hide && c(f).hide();
                    if (g.hide || g.show) for (b in g.animatedProperties) c.style(f, b, g.orig[b]),
                    c.removeData(f, "fxshow" + b, !0),
                    c.removeData(f, "toggle" + b, !0);
                    if (a = g.complete) g.complete = !1,
                    a.call(f)
                }
                return ! 1
            }
            Infinity == g.duration ? this.now = d: (a = d - this.startTime, this.state = a / g.duration, this.pos = c.easing[g.animatedProperties[this.prop]](this.state, a, 0, 1, g.duration), this.now = this.start + (this.end - this.start) * this.pos);
            this.update();
            return ! 0
        }
    };
    c.extend(c.fx, {
        tick: function() {
            for (var a, b = c.timers,
            d = 0; d < b.length; d++) a = b[d],
            !a() && b[d] === a && b.splice(d--, 1);
            b.length || c.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(Y);
            Y = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                c.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = a.now + a.unit: a.elem[a.prop] = a.now
            }
        }
    });
    c.each(["width", "height"],
    function(a, b) {
        c.fx.step[b] = function(a) {
            c.style(a.elem, b, Math.max(0, a.now))
        }
    });
    c.expr && c.expr.filters && (c.expr.filters.animated = function(a) {
        return c.grep(c.timers,
        function(b) {
            return a === b.elem
        }).length
    });
    var bc = /^t(?:able|d|h)$/i,
    Za = /^(?:body|html)$/i;
    c.fn.offset = "getBoundingClientRect" in k.documentElement ?
    function(a) {
        var b = this[0],
        d;
        if (a) return this.each(function(b) {
            c.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
        try {
            d = b.getBoundingClientRect()
        } catch(e) {}
        var f = b.ownerDocument,
        g = f.documentElement;
        if (!d || !c.contains(g, b)) return d ? {
            top: d.top,
            left: d.left
        }: {
            top: 0,
            left: 0
        };
        b = f.body;
        f = ca(f);
        return {
            top: d.top + (f.pageYOffset || c.support.boxModel && g.scrollTop || b.scrollTop) - (g.clientTop || b.clientTop || 0),
            left: d.left + (f.pageXOffset || c.support.boxModel && g.scrollLeft || b.scrollLeft) - (g.clientLeft || b.clientLeft || 0)
        }
    }: function(a) {
        var b = this[0];
        if (a) return this.each(function(b) {
            c.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
        var d, e = b.offsetParent,
        f = b.ownerDocument,
        g = f.documentElement,
        h = f.body;
        d = (f = f.defaultView) ? f.getComputedStyle(b, null) : b.currentStyle;
        for (var i = b.offsetTop,
        j = b.offsetLeft; (b = b.parentNode) && b !== h && b !== g && !(c.support.fixedPosition && "fixed" === d.position);) {
            d = f ? f.getComputedStyle(b, null) : b.currentStyle;
            i -= b.scrollTop;
            j -= b.scrollLeft;
            if (b === e) {
                i += b.offsetTop;
                j += b.offsetLeft;
                if (c.support.doesNotAddBorder && (!c.support.doesAddBorderForTableAndCells || !bc.test(b.nodeName))) i += parseFloat(d.borderTopWidth) || 0,
                j += parseFloat(d.borderLeftWidth) || 0;
                e = b.offsetParent
            }
            c.support.subtractsBorderForOverflowNotVisible && "visible" !== d.overflow && (i += parseFloat(d.borderTopWidth) || 0, j += parseFloat(d.borderLeftWidth) || 0)
        }
        if ("relative" === d.position || "static" === d.position) i += h.offsetTop,
        j += h.offsetLeft;
        c.support.fixedPosition && "fixed" === d.position && (i += Math.max(g.scrollTop, h.scrollTop), j += Math.max(g.scrollLeft, h.scrollLeft));
        return {
            top: i,
            left: j
        }
    };
    c.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop,
            d = a.offsetLeft;
            c.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(c.css(a, "marginTop")) || 0, d += parseFloat(c.css(a, "marginLeft")) || 0);
            return {
                top: b,
                left: d
            }
        },
        setOffset: function(a, b, d) {
            var e = c.css(a, "position");
            "static" === e && (a.style.position = "relative");
            var f = c(a),
            g = f.offset(),
            h = c.css(a, "top"),
            i = c.css(a, "left"),
            j = {},
            k = {}; ("absolute" === e || "fixed" === e) && -1 < c.inArray("auto", [h, i]) ? (k = f.position(), e = k.top, i = k.left) : (e = parseFloat(h) || 0, i = parseFloat(i) || 0);
            c.isFunction(b) && (b = b.call(a, d, g));
            null != b.top && (j.top = b.top - g.top + e);
            null != b.left && (j.left = b.left - g.left + i);
            "using" in b ? b.using.call(a, j) : f.css(j)
        }
    };
    c.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var a = this[0],
            b = this.offsetParent(),
            d = this.offset(),
            e = Za.test(b[0].nodeName) ? {
                top: 0,
                left: 0
            }: b.offset();
            d.top -= parseFloat(c.css(a, "marginTop")) || 0;
            d.left -= parseFloat(c.css(a, "marginLeft")) || 0;
            e.top += parseFloat(c.css(b[0], "borderTopWidth")) || 0;
            e.left += parseFloat(c.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: d.top - e.top,
                left: d.left - e.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || k.body; a && !Za.test(a.nodeName) && "static" === c.css(a, "position");) a = a.offsetParent;
                return a
            })
        }
    });
    c.each(["Left", "Top"],
    function(a, b) {
        var d = "scroll" + b;
        c.fn[d] = function(b) {
            var f, g;
            if (b === l) {
                f = this[0];
                return ! f ? null: (g = ca(f)) ? "pageXOffset" in g ? g[a ? "pageYOffset": "pageXOffset"] : c.support.boxModel && g.document.documentElement[d] || g.document.body[d] : f[d]
            }
            return this.each(function() { (g = ca(this)) ? g.scrollTo(!a ? b: c(g).scrollLeft(), a ? b: c(g).scrollTop()) : this[d] = b
            })
        }
    });
    c.each(["Height", "Width"],
    function(a, b) {
        var d = b.toLowerCase();
        c.fn["inner" + b] = function() {
            var a = this[0];
            return a ? a.style ? parseFloat(c.css(a, d, "padding")) : this[d]() : null
        };
        c.fn["outer" + b] = function(a) {
            var b = this[0];
            return b ? b.style ? parseFloat(c.css(b, d, a ? "margin": "border")) : this[d]() : null
        };
        c.fn[d] = function(a) {
            var f = this[0];
            if (!f) return null == a ? null: this;
            if (c.isFunction(a)) return this.each(function(b) {
                var f = c(this);
                f[d](a.call(this, b, f[d]()))
            });
            if (c.isWindow(f)) {
                var g = f.document.documentElement["client" + b],
                h = f.document.body;
                return "CSS1Compat" === f.document.compatMode && g || h && h["client" + b] || g
            }
            if (9 === f.nodeType) return Math.max(f.documentElement["client" + b], f.body["scroll" + b], f.documentElement["scroll" + b], f.body["offset" + b], f.documentElement["offset" + b]);
            return a === l ? (f = c.css(f, d), g = parseFloat(f), c.isNumeric(g) ? g: f) : this.css(d, "string" === typeof a ? a: a + "px")
        }
    });
    r.jQuery = r.$ = c
})(window); (function() {
    function t(a, b) {
        return "!" !== a[0][0] ? '<a href="' + h(b.href) + '"' + (b.title ? ' title="' + h(b.title) + '"': "") + ">" + d.lexer(a[1]) + "</a>": '<img src="' + h(b.href) + '" alt="' + h(a[1]) + '"' + (b.title ? ' title="' + h(b.title) + '"': "") + ">"
    }
    function l() {
        return g = m.pop()
    }
    function o() {
        switch (g.type) {
        case "space":
            return "";
        case "hr":
            return "<hr>\n";
        case "heading":
            return "<h" + g.depth + ">" + d.lexer(g.text) + "</h" + g.depth + ">\n";
        case "code":
            return k.highlight && (g.code = k.highlight(g.text, g.lang), null != g.code && g.code !== g.text && (g.escaped = !0, g.text = g.code)),
            g.escaped || (g.text = h(g.text, !0)),
            "<pre><code" + (g.lang ? ' class="lang-' + g.lang + '"': "") + ">" + g.text + "</code></pre>\n";
        case "blockquote_start":
            for (var a = "";
            "blockquote_end" !== l().type;) a += o();
            return "<blockquote>\n" + a + "</blockquote>\n";
        case "list_start":
            for (var b = g.ordered ? "ol": "ul", a = "";
            "list_end" !== l().type;) a += o();
            return "<" + b + ">\n" + a + "</" + b + ">\n";
        case "list_item_start":
            for (a = "";
            "list_item_end" !== l().type;) a += "text" === g.type ? u() : o();
            return "<li>" + a + "</li>\n";
        case "loose_item_start":
            for (a = "";
            "list_item_end" !== l().type;) a += o();
            return "<li>" + a + "</li>\n";
        case "html":
            return k.sanitize ? d.lexer(g.text) : !g.pre && !k.pedantic ? d.lexer(g.text) : g.text;
        case "paragraph":
            return "<p>" + d.lexer(g.text) + "</p>\n";
        case "text":
            return "<p>" + u() + "</p>\n"
        }
    }
    function u() {
        for (var a = g.text,
        b; (b = m[m.length - 1]) && "text" === b.type;) a += "\n" + l().text;
        return d.lexer(a)
    }
    function v(a) {
        m = a.reverse();
        for (a = ""; l();) a += o();
        g = m = null;
        return a
    }
    function h(a, b) {
        return a.replace(!b ? /&(?!#?\w+;)/g: /&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }
    function r(a) {
        for (var b = "",
        d = a.length,
        e = 0,
        c; e < d; e++) c = a.charCodeAt(e),
        .5 < Math.random() && (c = "x" + c.toString(16)),
        b += "&#" + c + ";";
        return b
    }
    function w() {
        return "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+"
    }
    function n(a, b) {
        a = a.source;
        b = b || "";
        return function s(c, d) {
            if (!c) return RegExp(a, b);
            a = a.replace(c, d.source || d);
            return s
        }
    }
    function p() {}
    function i(a, b) {
        q(b);
        return v(e.lexer(a))
    }
    function q(a) {
        a || (a = x);
        k !== a && (k = a, k.gfm ? (e.fences = e.gfm.fences, e.paragraph = e.gfm.paragraph, d.text = d.gfm.text, d.url = d.gfm.url) : (e.fences = e.normal.fences, e.paragraph = e.normal.paragraph, d.text = d.normal.text, d.url = d.normal.url), k.pedantic ? (d.em = d.pedantic.em, d.strong = d.pedantic.strong) : (d.em = d.normal.em, d.strong = d.normal.strong))
    }
    var e = {
        newline: /^\n+/,
        code: /^( {4}[^\n]+\n*)+/,
        fences: p,
        hr: /^( *[-*_]){3,} *(?:\n+|$)/,
        heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
        lheading: /^([^\n]+)\n *(=|-){3,} *\n*/,
        blockquote: /^( *>[^\n]+(\n[^\n]+)*\n*)+/,
        list: /^( *)(bull) [^\0]+?(?:hr|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
        html: /^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,
        def: /^ *\[([^\]]+)\]: *([^\s]+)(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
        paragraph: /^([^\n]+\n?(?!body))+\n*/,
        text: /^[^\n]+/,
        bullet: /(?:[*+-]|\d+\.)/,
        item: /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/
    };
    e.item = n(e.item, "gm")(/bull/g, e.bullet)();
    e.list = n(e.list)(/bull/g, e.bullet)("hr", /\n+(?=(?: *[-*_]){3,} *(?:\n+|$))/)();
    e.html = n(e.html)("comment", /<\!--[^\0]*?--\>/)("closed", /<(tag)[^\0]+?<\/\1>/)("closing", /<tag(?!:\/|@)\b(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, w())();
    e.paragraph = function() {
        var a = e.paragraph.source,
        b = []; (function s(a) {
            a = e[a] ? e[a].source: a;
            b.push(a.replace(/(^|[^\[])\^/g, "$1"));
            return s
        })("hr")("heading")("lheading")("blockquote")("<" + w())("def");
        return RegExp(a.replace("body", b.join("|")))
    } ();
    e.normal = {
        fences: e.fences,
        paragraph: e.paragraph
    };
    e.gfm = {
        fences: /^ *``` *(\w+)? *\n([^\0]+?)\s*``` *(?:\n+|$)/,
        paragraph: /^/
    };
    e.gfm.paragraph = n(e.paragraph)("(?!", "(?!" + e.gfm.fences.source.replace(/(^|[^\[])\^/g, "$1") + "|")();
    e.lexer = function(a) {
        var b = [];
        b.links = {};
        a = a.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ");
        return e.token(a, b, !0)
    };
    e.token = function(a, b, d) {
        for (var a = a.replace(/^ +$/gm, ""), g, c, f, j, h, i; a;) {
            if (f = e.newline.exec(a)) a = a.substring(f[0].length),
            1 < f[0].length && b.push({
                type: "space"
            });
            if (f = e.code.exec(a)) a = a.substring(f[0].length),
            f = f[0].replace(/^ {4}/gm, ""),
            b.push({
                type: "code",
                text: !k.pedantic ? f.replace(/\n+$/, "") : f
            });
            else if (f = e.fences.exec(a)) a = a.substring(f[0].length),
            b.push({
                type: "code",
                lang: f[1],
                text: f[2]
            });
            else if (f = e.heading.exec(a)) a = a.substring(f[0].length),
            b.push({
                type: "heading",
                depth: f[1].length,
                text: f[2]
            });
            else if (f = e.lheading.exec(a)) a = a.substring(f[0].length),
            b.push({
                type: "heading",
                depth: "=" === f[2] ? 1 : 2,
                text: f[1]
            });
            else if (f = e.hr.exec(a)) a = a.substring(f[0].length),
            b.push({
                type: "hr"
            });
            else if (f = e.blockquote.exec(a)) a = a.substring(f[0].length),
            b.push({
                type: "blockquote_start"
            }),
            f = f[0].replace(/^ *> ?/gm, ""),
            e.token(f, b, d),
            b.push({
                type: "blockquote_end"
            });
            else if (f = e.list.exec(a)) {
                a = a.substring(f[0].length);
                b.push({
                    type: "list_start",
                    ordered: isFinite(f[2])
                });
                f = f[0].match(e.item);
                g = !1;
                i = f.length;
                for (h = 0; h < i; h++) j = f[h],
                c = j.length,
                j = j.replace(/^ *([*+-]|\d+\.) +/, ""),
                ~j.indexOf("\n ") && (c -= j.length, j = !k.pedantic ? j.replace(RegExp("^ {1," + c + "}", "gm"), "") : j.replace(/^ {1,4}/gm, "")),
                c = g || /\n\n(?!\s*$)/.test(j),
                h !== i - 1 && (g = "\n" === j[j.length - 1], c || (c = g)),
                b.push({
                    type: c ? "loose_item_start": "list_item_start"
                }),
                e.token(j, b),
                b.push({
                    type: "list_item_end"
                });
                b.push({
                    type: "list_end"
                })
            } else if (f = e.html.exec(a)) a = a.substring(f[0].length),
            b.push({
                type: "html",
                pre: "pre" === f[1],
                text: f[0]
            });
            else if (d && (f = e.def.exec(a))) a = a.substring(f[0].length),
            b.links[f[1].toLowerCase()] = {
                href: f[2],
                title: f[3]
            };
            else if (d && (f = e.paragraph.exec(a))) a = a.substring(f[0].length),
            b.push({
                type: "paragraph",
                text: f[0]
            });
            else if (f = e.text.exec(a)) a = a.substring(f[0].length),
            b.push({
                type: "text",
                text: f[0]
            })
        }
        return b
    };
    var d = {
        escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
        autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
        url: p,
        tag: /^<\!--[^\0]*?--\>|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
        link: /^!?\[(inside)\]\(href\)/,
        reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
        nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
        strong: /^__([^\0]+?)__(?!_)|^\*\*([^\0]+?)\*\*(?!\*)/,
        em: /^\b_((?:__|[^\0])+?)_\b|^\*((?:\*\*|[^\0])+?)\*(?!\*)/,
        code: /^(`+)([^\0]*?[^`])\1(?!`)/,
        br: /^ {2,}\n(?!\s*$)/,
        text: /^[^\0]+?(?=[\\<!\[_*`]| {2,}\n|$)/,
        _linkInside: /(?:\[[^\]]*\]|[^\]]|\](?=[^\[]*\]))*/,
        _linkHref: /\s*<?([^\s]*?)>?(?:\s+['"]([^\0]*?)['"])?\s*/
    };
    d.link = n(d.link)("inside", d._linkInside)("href", d._linkHref)();
    d.reflink = n(d.reflink)("inside", d._linkInside)();
    d.normal = {
        url: d.url,
        strong: d.strong,
        em: d.em,
        text: d.text
    };
    d.pedantic = {
        strong: /^__(?=\S)([^\0]*?\S)__(?!_)|^\*\*(?=\S)([^\0]*?\S)\*\*(?!\*)/,
        em: /^_(?=\S)([^\0]*?\S)_(?!_)|^\*(?=\S)([^\0]*?\S)\*(?!\*)/
    };
    d.gfm = {
        url: /^(https?:\/\/[^\s]+[^.,:;"')\]\s])/,
        text: /^[^\0]+?(?=[\\<!\[_*`]|https?:\/\/| {2,}\n|$)/
    };
    d.lexer = function(a) {
        for (var b = "",
        e = m.links,
        g, c; a;) if (c = d.escape.exec(a)) a = a.substring(c[0].length),
        b += c[1];
        else if (c = d.autolink.exec(a)) a = a.substring(c[0].length),
        "@" === c[2] ? (g = ":" === c[1][6] ? r(c[1].substring(7)) : r(c[1]), c = r("mailto:") + g) : c = g = h(c[1]),
        b += '<a href="' + c + '">' + g + "</a>";
        else if (c = d.url.exec(a)) a = a.substring(c[0].length),
        c = g = h(c[1]),
        b += '<a href="' + c + '">' + g + "</a>";
        else if (c = d.tag.exec(a)) a = a.substring(c[0].length),
        b += k.sanitize ? h(c[0]) : c[0];
        else if (c = d.link.exec(a)) a = a.substring(c[0].length),
        b += t(c, {
            href: c[2],
            title: c[3]
        });
        else if ((c = d.reflink.exec(a)) || (c = d.nolink.exec(a))) a = a.substring(c[0].length),
        g = (c[2] || c[1]).replace(/\s+/g, " "),
        g = e[g.toLowerCase()],
        !g || !g.href ? (b += c[0][0], a = c[0].substring(1) + a) : b += t(c, g);
        else if (c = d.strong.exec(a)) a = a.substring(c[0].length),
        b += "<strong>" + d.lexer(c[2] || c[1]) + "</strong>";
        else if (c = d.em.exec(a)) a = a.substring(c[0].length),
        b += "<em>" + d.lexer(c[2] || c[1]) + "</em>";
        else if (c = d.code.exec(a)) a = a.substring(c[0].length),
        b += "<code>" + h(c[2], !0) + "</code>";
        else if (c = d.br.exec(a)) a = a.substring(c[0].length),
        b += "<br>";
        else if (c = d.text.exec(a)) a = a.substring(c[0].length),
        b += h(c[0]);
        return b
    };
    var m, g;
    p.exec = p;
    var k, x;
    i.options = i.setOptions = function(a) {
        x = a;
        q(a);
        return i
    };
    i.setOptions({
        gfm: !0,
        pedantic: !1,
        sanitize: !1,
        highlight: null
    });
    i.parser = function(a, b) {
        q(b);
        return v(a)
    };
    i.lexer = function(a, b) {
        q(b);
        return e.lexer(a)
    };
    i.parse = i;
    "undefined" !== typeof module ? module.exports = i: this.marked = i
}).call(function() {
    return this || ("undefined" !== typeof window ? window: global)
} ());
var BlobBuilder = BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder ||
function(b) {
    var j = function(a) {
        return Object.prototype.toString.call(a).match(/^\[object\s(.*)\]$/)[1]
    },
    k = function() {
        this.data = []
    },
    h = function(a, m, b) {
        this.data = a;
        this.size = a.length;
        this.type = m;
        this.encoding = b
    },
    t = k.prototype,
    u = h.prototype,
    r = b.FileReaderSync,
    v = function(a) {
        this.code = this[this.name = a]
    },
    n = "NOT_FOUND_ERR,SECURITY_ERR,ABORT_ERR,NOT_READABLE_ERR,ENCODING_ERR,NO_MODIFICATION_ALLOWED_ERR,INVALID_STATE_ERR,SYNTAX_ERR".split(","),
    o = n.length,
    g = b.URL || b.webkitURL || b,
    p = g,
    l = b.btoa,
    e = b.atob,
    f = !1,
    d = b.ArrayBuffer,
    c = b.Uint8Array;
    for (k.fake = u.fake = !0; o--;) v.prototype[n[o]] = o + 1;
    try {
        c &&
        function(a) {
            f = !a
        }.apply(0, new c(1))
    } catch(w) {}
    g.createObjectURL || (p = b.URL = {});
    p.createObjectURL = function(a) {
        var b = a.type;
        null === b && (b = "application/octet-stream");
        if (a instanceof h) return b = "data:" + b,
        "base64" === a.encoding ? b + ";base64," + a.data: "URI" === a.encoding ? b + "," + decodeURIComponent(a.data) : l ? b + ";base64," + l(a.data) : b + "," + encodeURIComponent(a.data);
        if (real_create_object_url) return real_create_object_url.call(g, a)
    };
    p.revokeObjectURL = function(a) {
        "data:" !== a.substring(0, 5) && real_revoke_object_url && real_revoke_object_url.call(g, a)
    };
    t.append = function(a) {
        var b = this.data;
        if (c && a instanceof d) if (f) b.push(String.fromCharCode.apply(String, new c(a)));
        else for (var b = "",
        a = new c(a), i = 0, g = a.length; i < g; i++) b += String.fromCharCode(a[i]);
        else if ("Blob" === j(a) || "File" === j(a)) if (r) i = new r,
        b.push(i.readAsBinaryString(a));
        else throw new v("NOT_READABLE_ERR");
        else a instanceof h ? "base64" === a.encoding && e ? b.push(e(a.data)) : "URI" === a.encoding ? b.push(decodeURIComponent(a.data)) : "raw" === a.encoding && b.push(a.data) : ("string" !== typeof a && (a += ""), b.push(unescape(encodeURIComponent(a))))
    };
    t.getBlob = function(a) {
        arguments.length || (a = null);
        return new h(this.data.join(""), a, "raw")
    };
    t.toString = function() {
        return "[object BlobBuilder]"
    };
    u.slice = function(a, b, f) {
        var c = arguments.length;
        3 > c && (f = null);
        return new h(this.data.slice(a, 1 < c ? b: this.data.length), f, this.encoding)
    };
    u.toString = function() {
        return "[object Blob]"
    };
    return k
} (self),
saveAs = saveAs ||
function(b) {
    var j = b.document,
    k = b.URL || b.webkitURL || b,
    h = j.createElementNS("http://www.w3.org/1999/xhtml", "a"),
    t = "download" in h,
    u = function(f) {
        var d = j.createEvent("MouseEvents");
        d.initMouseEvent("click", !0, !1, b, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
        return f.dispatchEvent(d)
    },
    r = b.webkitRequestFileSystem,
    v = b.requestFileSystem || r || b.mozRequestFileSystem,
    n = function(f) { (b.setImmediate || b.setTimeout)(function() {
            throw f
        },
        0)
    },
    o = 0,
    g = [],
    p = function(b, d, c) {
        for (var d = [].concat(d), e = d.length; e--;) {
            var a = b["on" + d[e]];
            if ("function" === typeof a) try {
                a.call(b, c || b)
            } catch(g) {
                n(g)
            }
        }
    },
    l = function(f, d) {
        var c = this,
        e = f.type,
        a = !1,
        m, i, j = function() {
            var a = (b.URL || b.webkitURL || b).createObjectURL(f);
            g.push(a);
            return a
        },
        k = function() {
            p(c, ["writestart", "progress", "write", "writeend"])
        },
        q = function() {
            if (a || !m) m = j(f);
            i.location.href = m;
            c.readyState = c.DONE;
            k()
        },
        s = function(a) {
            return function() {
                if (c.readyState !== c.DONE) return a.apply(this, arguments)
            }
        },
        l = {
            create: !0,
            exclusive: !1
        },
        n;
        c.readyState = c.INIT;
        d || (d = "download");
        if (t && (m = j(f), h.href = m, h.download = d, u(h))) {
            c.readyState = c.DONE;
            k();
            return
        }
        b.chrome && e && "application/octet-stream" !== e && (n = f.slice || f.webkitSlice, f = n.call(f, 0, f.size, "application/octet-stream"), a = !0);
        r && "download" !== d && (d += ".download");
        i = "application/octet-stream" === e || r ? b: b.open();
        v ? (o += f.size, v(b.TEMPORARY, o, s(function(a) {
            a.root.getDirectory("saved", l, s(function(a) {
                var b = function() {
                    a.getFile(d, l, s(function(a) {
                        a.createWriter(s(function(b) {
                            b.onwriteend = function(b) {
                                i.location.href = a.toURL();
                                g.push(a);
                                c.readyState = c.DONE;
                                p(c, "writeend", b)
                            };
                            b.onerror = function() {
                                var a = b.error;
                                a.code !== a.ABORT_ERR && q()
                            }; ["writestart", "progress", "write", "abort"].forEach(function(a) {
                                b["on" + a] = c["on" + a]
                            });
                            b.write(f);
                            c.abort = function() {
                                b.abort();
                                c.readyState = c.DONE
                            };
                            c.readyState = c.WRITING
                        }), q)
                    }), q)
                };
                a.getFile(d, {
                    create: !1
                },
                s(function(a) {
                    a.remove();
                    b()
                }), s(function(a) {
                    a.code === a.NOT_FOUND_ERR ? b() : q()
                }))
            }), q)
        }), q)) : q()
    },
    e = l.prototype;
    e.abort = function() {
        this.readyState = this.DONE;
        p(this, "abort")
    };
    e.readyState = e.INIT = 0;
    e.WRITING = 1;
    e.DONE = 2;
    e.error = e.onwritestart = e.onprogress = e.onwrite = e.onabort = e.onerror = e.onwriteend = null;
    b.addEventListener("unload",
    function() {
        for (var b = g.length; b--;) {
            var d = g[b];
            "string" === typeof d ? k.revokeObjectURL(d) : d.remove()
        }
        g.length = 0
    },
    !1);
    return function(b, d) {
        return new l(b, d)
    }
} (self);
$(function() {
    function f(a, b) {
        localStorage && localStorage.setItem("md_" + a, b)
    }
    function d(a, b) {
        return localStorage ? null == localStorage.getItem("md_" + a) ? void 0 != b ? b: null: localStorage.getItem("md_" + a) : void 0 != b ? b: null
    }
    function l() {
        return null == d("sessionNames") ? [] : JSON.parse(d("sessionNames"))
    }
    function s(a) {
        for (var b = l(), c = 0; c < b.length; c++) if (b[c] == a) return ! 1;
        f("sessionNames", JSON.stringify(l().concat([a])));
        return ! 0
    }
    function j(a) {
        return ! h[e] ? null: h[e].buildIn ? h[e].content: d("markContent_" + a)
    }
    function G(a) {
        for (var b = l(), c = 0; c < b.length; c++) if (b[c] == a) {
            b.splice(c, 1);
            break
        }
        f("sessionNames", JSON.stringify(b))
    }
    function t(a) {
        a = prompt((a ? a + "\n": "") + "输入新文档的名字");
        if (null != a) {
            "" == $.trim(a) && (a = "untitled" + (m + 1));
            if (!s(a)) return t("名字重复");
            c.setValue("");
            m++;
            var b = {};
            b[a] = {
                buildIn: !1
            };
            $.extend(h, b);
            n(a);
            $("#md-changeSession").append('<option value="' + a + '" selected>' + a + "</option>");
            c.focus()
        }
    }
    function H(a) {
        h[a].buildIn ? alert("内置的不能删除, 其实不应该让你看到删除滴。。。") : (G(a), localStorage && localStorage.removeItem("markContent_" + a), $("#md-changeSession option").filter(function() {
            return $(this).val() == e
        }).remove(), m--, n("Markdown语法参考"))
    }
    function n(a) {
        e = a;
        f("curSession", e);
        h[e].buildIn ? c.setValue(h[e].content) : c.setValue(j(a));
        u(a)
    }
    function u(a) {
        $("#md-docname").text(a);
        a = $(window).width() - $("#md-docname").outerWidth(!0);
        $("#md-docname").css("left", a / 2)
    }
    function o(a) {
        window.iframeDoc = g;
        $("body", g).html(marked.parse(a));
        h[e].buildIn || f("markContent_" + e, a)
    }
    function v(a) {
        var b;
        b = 0 < $("head style#system", g).size() ? $("head style#system", g) : $('<style id="system" type="text/css">body{}</style>').appendTo($("head", g));
        $.getScript("themes/" + a + ".css.js",
        function() {
            b.text(mdTheme)
        });
        f("curPreviewTheme", a)
    }
    function I() {
        var a;
        a = 0 < $("head style#hibot", g).size() ? $("head style#hibot", g) : $('<style id="hibot" type="text/css"></style>').appendTo($("head", g));
        $.getScript("hibot.css.js",
        function() {
            a.text(hibotCss)
        })
    }
    function w(a) {
        c.setTheme("ace/theme/" + a);
        p = a;
        f("curEditorTheme", a)
    }
    function x(a) {
        a ? (a = ace.require("ace/keyboard/vim").handler, c.setKeyboardHandler(a), f("keyboardBinding", 1)) : (c.setKeyboardHandler(null), f("keyboardBinding", 0))
    }
    function y(a) {
        c.renderer.setShowGutter(a);
        f("lineNum", a)
    }
    function z(a) { (0 < $("head style#custom", g).size() ? $("head style#custom", g) : $('<style id="custom" type="text/css"></style>').appendTo($("head", g))).text(a);
        f("cssContent", a)
    }
    function A(a) {
        if (!q) return ! 1;
        var b = c.getSession().getLine(a.row),
        b = $(marked.parse(b)),
        b = 0 == b.children().size() ? b.text().trim() : b.find("*").filter(function() {
            return 0 == $(this).children().size()
        }).text().trim(),
        b = $.trim(b.replace(/^\**/, "")),
        d = c.renderer.getScrollTop(),
        e = c.renderer.textToScreenCoordinates(a.row, a.column),
        f = c.renderer.textToScreenCoordinates(a.row - 1, a.column),
        f = c.getSession().getLength() * Math.abs(f.pageY - e.pageY);
        if (B !== a.row) {
            B = a.row;
            try {
                var h = $("*:contains(" + b + ")", g).filter(function() {
                    return 0 == $(this).children().size() || 1 == $(this).children().size
                });
                if (0 < h.size()) {
                    var i = (d + e.pageY) / f,
                    j = $("body", g).innerHeight(),
                    k = h.toArray().sort(function(a, b) {
                        var c = $(a).offset().top / j,
                        e = $(b).offset().top / j;
                        return Math.abs(i - c) - Math.abs(i - e)
                    }),
                    l = $(k[0]).offset().top - e.pageY;
                    $(r).scrollTop(l)
                }
            } catch(m) {}
        }
    }
    function J(a) {
        var a = a.originalEvent.dataTransfer.files[0],
        b = new FileReader;
        b.onerror = function(a) {
            alert("Error code: " + a.target.error.code)
        };
        b.onload = function() {
            return function(a) {
                var b = !0;
                "" != $.trim(c.getSession().getValue()) && (b = confirm("编辑器中已经有内容，是否覆盖?"));
                b && c.getSession().setValue(a.target.result)
            }
        } (a);
        b.readAsText(a)
    }
    function C(a) {
        $("#md-dragMask").size() || $('<div id="md-dragMask"></div>').appendTo($("body"));
        $("#md-dragMask").show().css({
            left: 0,
            top: 0,
            width: $(window).width(),
            height: $(window).height(),
            position: "absolute",
            zIndex: 999
        });
        150 < a.pageX && 150 < $(window).innerWidth() - a.pageX && ($("#md-spliter").css("left", a.clientX), window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty())
    }
    function D() {
        $(document).off("mousemove", C);
        $(document).off("mouseup", D);
        $("#md-dragMask").hide();
        var a = $("#md-spliter").css("left");
        $("#md-editor").css("width", a);
        $("#md-result").css("width", $(window).innerWidth() - parseInt(a));
        $("#md-result").css("marginLeft", a);
        f("left", a)
    }
    var c = ace.edit("md-editor");
    c.getSession().setMode("ace/mode/markdown");
    c.renderer.setShowPrintMargin(!1);
    $("#md-content");
    var K = $("#md-result"),
    i = !1,
    e = "",
    L = d("cssContent", ""),
    B = 0,
    E = d("attachInfo", !0),
    k = $('<iframe frameborder="0" marginheight="0" width="100%" src="proxy.html"></iframe>');
    K.append(k);
    var r = k.get(0).contentWindow,
    g = null,
    h = {
        "Markdown语法参考": {
            buildIn: !0,
            content: '#Standard Markdown\n\n##Strong and Emphasize\n```\n*emphasize*   **strong**\n_emphasize_   __strong__\n```\n##Links and Email\nInline:\n```\nAn [example](http://url.com/ "Title")\n```\nReference-style labels (titles are optional):\n```\n\nAn [example][id]. Then, anywhere\nelse in the doc, define the link:\n\n  [id]: http://example.com/  "Title"\n```\nEmail:\n```\nAn email <example@example.com> link.\n```\n\n##Images\nInline (titles are optional):\n```\n![alt text](/path/img.jpg "Title")\n```\nReference-style:\n```\n![alt text][id]\n\n[id]: /url/to/img.jpg "Title"\n```\n##Headers\n```\nSetext-style:\n\nHeader 1\n========\n\nHeader 2\n--------\n```\natx-style (closing #’s are optional):\n```\n# Header 1 #\n\n## Header 2 ##\n\n###### Header 6\n```\n##Lists\nOrdered, without paragraphs:\n```\n1.  Foo\n2.  Bar\n```\nUnordered, with paragraphs:\n```\n*   A list item.\n\n    With multiple paragraphs.\n\n*   Bar\n```\nYou can nest them:\n```\n*   Abacus\n    * answer\n*   Bubbles\n    1.  bunk\n    2.  bupkis\n        * BELITTLER\n    3. burper\n*   Cunning\n```\n##Blockquotes\n```\n> Email-style angle brackets\n> are used for blockquotes.\n\n> > And, they can be nested.\n\n> #### Headers in blockquotes\n> \n> * You can quote a list.\n> * Etc.\n```\n##Inline Code\n```\n`<code>` spans are delimited\nby backticks.\n\nYou can include literal backticks\nlike `` `this` ``.\n```\n##Block Code\nIndent every line of a code block by at least 4 spaces or 1 tab.\n```\nThis is a normal paragraph.\n\n    This is a preformatted\n    code block.\n```\n##Horizontal Rules\nThree or more dashes or asterisks:\n```\n---\n\n* * *\n\n- - - -\n```\n##Hard Line Breaks\nEnd a line with two or more spaces:\n```\nRoses are red,   \nViolets are blue.```'
        }
    },
    m = 0,
    p = d("curEditorTheme", "monokai"),
    q = d("curSyncRoll", 0),
    F = d("curPreviewTheme", "Clearness");
    $("#md-keyboard").prop("checked", parseInt(d("keyboardBinding", 0)));
    x(parseInt(d("keyboardBinding", 0)));
    $("#md-linenum").prop("checked", null !== d("lineNum") ? parseInt(d("lineNum")) : 1);
    y($("#md-linenum").prop("checked") ? 1 : 0);
    $("#md-syncRoll").prop("checked", parseInt(d("curSyncRoll", 0)));
    $("#md-editor").css("width", d("left", "50%"));
    $("#md-result").css("width", d("left") ? $(window).innerWidth() - parseInt(d("left")) : "50%");
    $("#md-result").css("marginLeft", d("left", "50%"));
    $("#md-spliter").css("left", d("left", "50%"));
    w(p);
    $(k).on("load",
    function() {
        g = k.contents();
        r.eval("var s = document.createElement('script'); s.type = 'text/javascript'; s.src='hibot.js'; document.getElementsByTagName('head')[0].appendChild( s );");
        v(F);
        z(d("cssContent", ""));
        o(j(e));
        I();
        setTimeout(function() {
            var a = $(window).height();
            k.height(a);
            setTimeout(arguments.callee, 500)
        },
        250)
    });
    $.each("chrome,clouds,clouds_midnight,cobalt,crimson_editor,dawn,dreamweaver,eclipse,github,idle_fingers,kr_theme,merbivore,merbivore_soft,mono_industrial,monokai,pastel_on_dark,solarized_dark,solarized_light,textmate,tomorrow,tomorrow_night,tomorrow_night_blue,tomorrow_night_bright,tomorrow_night_eighties,twilight,vibrant_ink".split(","),
    function(a, b) {
        $("#md-editorThemes").append('<option value="' + b + '" ' + (b == p ? "selected": "") + ">" + b + "</option>")
    });
    $.each(["Clearness-Dark", "Clearness", "GitHub", "GitHub2"],
    function(a, b) {
        $("#md-previewThemes").append('<option value="' + b + '" ' + (b == F ? "selected": "") + ">" + b + "</option>")
    });
    null == d("curSession") && (f("curSession", "untitled"), s("untitled"), e = "untitled", null == j(e) && f("markContent_" + e, '	'));
    e = d("curSession");
    u(e);
    $.each(l(),
    function(a, b) {
        var c = {};
        c[b] = {
            buildIn: !1
        };
        m++;
        $.extend(h, c)
    });
    $.each(h,
    function(a) {
        $("#md-changeSession").append('<option value="' + a + '" ' + (a == e ? "selected": "") + ">" + a + "</option>")
    });
    $("#md-keyboard").click(function() {
        x($(this).prop("checked"))
    });
    $("#md-linenum").click(function() {
        y($(this).prop("checked") ? 1 : 0)
    });
    $("#md-syncRoll").click(function() {
        q = $(this).prop("checked") ? 1 : 0;
        f("syncRoll", q)
    });
    $("#md-editorThemes").change(function() {
        w(this.value)
    });
    $("#md-changeSession").change(function() {
        n(this.value)
    });
    $("#md-previewThemes").change(function() {
        "custom" == this.value ? showCustomCSSEditor() : v(this.value)
    });
    $("#md-removeSession").click(function() {
        H(e)
    });
    $("#md-toggleMode").click(function() {
        i ? (i = !1, c.getSession().setMode("ace/mode/markdown"), c.getSession().setValue(j(e))) : (i = !0, c.getSession().setMode("ace/mode/css"), c.getSession().setValue(L));
        c.focus();
        f("cssMode", i);
        $(this).val(i ? "回到编辑": "自定义CSS")
    });
    $("#md-attachInfo").click(function() {
        E = $(this).prop("checked")
    });
    $("#md-config").click(function() {
        $("#md-toolbar").slideDown()
    });
    $("#md-closeConfig").click(function() {
        $("#md-toolbar").slideUp()
    });
    $("#md-session").click(function() {
        t()
    });
    $("#md-exportHTML").click(function() {
        var a = prompt("保存的文件名", e),
        b = new BlobBuilder;
        if (a !== null) {
            E && o(c.getSession().getValue() + "\nEdit By [Markdown](https://guides.github.com/features/mastering-markdown/)");
            var d = r.document.documentElement.outerHTML,
            d = d.replace(/<script[^<]*><[^>]*>/gm, "").replace(/<style\s*id="hibot[^>]*>[^<]*<[^>]*>/gm, "");
            b.append(d);
            saveAs(b.getBlob("text/html;charset=utf-8"), (a || e || "untitled") + ".html")
        }
    });
    $("#md-importSource").click(function() {
        alert("请直接把文件拖放到此页面上")
    });
    $("#md-donate").click(function() {
        $("#md-donate-detail").slideDown()
    });
    $("#md-closeDonate").click(function() {
        $("#md-donate-detail").slideUp()
    });
    $(document).on("dragEnter",
    function(a) {
        a.stopPropagation();
        a.preventDefault()
    }).on("dragOver",
    function(a) {
        a.stopPropagation();
        a.preventDefault()
    }).on("dragLeave",
    function(a) {
        a.stopPropagation();
        a.preventDefault()
    }).on("drop",
    function(a) {
        a.stopPropagation();
        a.preventDefault();
        J(a)
    });
    $("#md-spliter").on("mousedown",
    function() {
        $(document).on("mousemove", C);
        $(document).on("mouseup", D);
        return ! 1
    });
    c.getSession().setValue(j(e));
    c.getSession().on("change",
    function() {
        var a = c.getSession().getValue();
        i ? z(a) : o(a)
    });
    c.getSession().selection.on("changeCursor",
    function() {
        var a = c.getCursorPosition();
        A(a)
    });
    c.getSession().on("changeScrollTop",
    function() {
        var a = {
            row: c.renderer.getFirstFullyVisibleRow(),
            column: 0
        };
        A(a)
    });
    c.focus()
});