!
function(t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return t[i].call(o.exports, o, o.exports, e),
        o.loaded = !0,
        o.exports
    }
    var n = {};
    return e.m = t,
    e.c = n,
    e.p = "//imgcache.qq.com/qcloud/main/scripts/",
    e(0)
} ({
    0 : function(t, e, n) {
        "use strict";
        function i() {
            o.init();
            var t = $(window);
            t.on("resize",
            function() {
                h.handleResize()
            }),
            h.handleResize(!0); [new r({
                $root: $("#productWrapper")
            }), new a({
                $root: $("#solutionWrapper")
            }), new s({
                $root: $("#customerWrapper")
            }), new c({
                $root: $("#marketWrapper")
            }), new u({
                $root: $("#regionWrapper")
            }), new l({
                $root: $("#certWrapper")
            })];
            t.trigger("scroll")
        }
        var o = n("+V/N"),
        r = n("9n8x"),
        a = n("qcm8"),
        s = n("DzxX"),
        c = n("xnl8"),
        u = n("70lU"),
        l = n("eSCn"),
        h = n("TN2A");
        i()
    },
    TN2A: function(t, e, n) {
        "use strict";
        var i = n("51LH"),
        o = i.getResponsiveMode,
        r = i.getClientWidth,
        a = n("+V/N"),
        s = a.handleResponsive,
        c = r(),
        u = {
            handleResize: function(t) {
                var e = r();
                if (t || e !== c) {
                    var n = o();
                    this[n + "Render"](),
                    c = e
                }
            },
            mobileRender: function() {
                s("mbg")
            },
            padRender: function() {
                s("bg")
            },
            pcRender: function() {
                s("bg")
            }
        };
        t.exports = u
    },
    qI2I: function(t, e, n) {
        "use strict";
        function i(t, e) {
            return b ? e ? b + t.charAt(0).toUpperCase() + t.substr(1) : ["-", b, "-", t].join("") : t
        }
        function o(t) {
            return m + t.charAt(0).toUpperCase() + t.substr(1)
        }
        function r(t, e, n) {
            return n === p ? d.defaultView.getComputedStyle(t, null)[i(e, !0)] : void(t.style[i(e, !0)] = n)
        }
        function a() {
            var t = 0,
            e = 0;
            return f.screen.deviceXDPI !== p ? (t = f.screen.deviceXDPI, e = f.screen.deviceYDPI) : (y.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden", d.body.appendChild(y), t = parseInt(y.offsetWidth), e = parseInt(y.offsetHeight), y.parentNode.removeChild(y)),
            {
                X: t,
                Y: e
            }
        }
        function s(t) {
            var e = {
                transformProperty: "translateX",
                nextRatio: .4,
                speedThreshold: 4,
                disableBoundaryMove: !1,
                boundaryAnimationName: "",
                disableTouch: !1,
                touchArea: d.documentElement,
                autoAnimationDuration: 200,
                slideRatio: 2 / 3,
                lockOnAnimating: !0,
                preventDefault: "auto",
                autoRunTimeSpan: 1e3
            };
            return t && (t.transformProperty !== p && (e.transformProperty = t.transformProperty), t.disableTouch !== p && (e.disableTouch = t.disableTouch), t.touchArea !== p && (e.touchArea = t.touchArea), t.disableBoundaryMove !== p && (e.disableBoundaryMove = t.disableBoundaryMove), t.boundaryAnimationName !== p && (e.boundaryAnimationName = t.boundaryAnimationName), t.nextRatio !== p && (e.nextRatio = t.nextRatio), t.speedThreshold !== p && (e.speedThreshold = t.speedThreshold), t.autoAnimationDuration !== p && (e.autoAnimationDuration = t.autoAnimationDuration), t.slideRatio !== p && (e.slideRatio = t.slideRatio), t.lockOnAnimating !== p && (e.lockOnAnimating = t.lockOnAnimating), t.preventDefault !== p && (e.preventDefault = t.preventDefault)),
            e
        }
        function c(t, e, n, i) {
            this.enableTransform = i.enableTransform,
            this.dom = t,
            this.banners = i.banners,
            this.step = parseInt(e) || 0,
            this.count = parseInt(n) || 0,
            this.itemIndex = 0,
            this.curDistance = 0,
            this.distance = 0,
            this.preDistance = 0,
            this.handlers = {},
            this.status = w.READY,
            this.enableSwitch = !0,
            this.option = s(i),
            this.autoRunTimer = [],
            this._init()
        }
        var u, l = n("51LH"),
        h = l.getResponsiveMode,
        d = document,
        f = window,
        p = void 0,
        m = "",
        b = "",
        v = ["webkit", "ms", "o", "moz"],
        y = d.createElement("div"),
        w = {
            READY: 1,
            TOUCH_START: 2,
            TOUCH_MOVE: 3,
            TOUCH_END: 4,
            ANIMATING: 5
        },
        g = {
            X: "X",
            Y: "Y"
        },
        T = y.style,
        _ = "transform";
        u = _.charAt(0).toUpperCase() + _.substr(1);
        for (var I, x, A = 0; I = v[A]; A++) if (x = I + u, x in T) {
            b = I;
            break
        }
        _ in T || (m = b);
        var P = function() {
            return f.requestAnimationFrame || f.webkitRequestAnimationFrame || f.mozRequestAnimationFrame || f.oRequestAnimationFrame || f.msRequestAnimationFrame ||
            function(t) {
                f.setTimeout(t, 1e3 / 60)
            }
        } ();
        c.prototype = {
            link: function(t) {
                t instanceof c && (this.on("touchmove",
                function(e, n) {
                    t.move(n)
                }), this.on("locate",
                function(e) {
                    t.locate(e)
                }), this.on("animationinterrupt",
                function() {
                    t.animationInterrupt()
                }))
            },
            locate: function() {
                var t, e, n = !0,
                i = 0,
                o = this;
                if ("boolean" == typeof arguments[0] && (n = arguments[0], i++), t = arguments[i], e = arguments[i + 1], t === p && (t = this.itemIndex), t = parseInt(t) || 0, this._isCircleLayout || (t < 0 && (t = 0), t > this.count - 1 && (t = this.count - 1)), this.lastDistance = this.curDistance, this.curDistance = 0 - this.step * t, this.banners.css("zIndex", 0), this.enableTransform) if (n) {
                    if ("ms" == b) return $(this.dom).stop(!0, !0).animate({
                        marginLeft: this.curDistance
                    },
                    300,
                    function() {
                        e && e(t),
                        o._emit("locateEnd", [t]),
                        o.loopStartOrEnd()
                    }),
                    o.itemIndex = t,
                    void o._emit("locate", [t]);
                    this._animate(this._makeTransformValue(this.curDistance),
                    function() {
                        e && e(t),
                        o._emit("locateEnd", [t])
                    })
                } else {
                    if ("ms" == b) return $(this.dom).css("marginLeft", this.curDistance),
                    o.itemIndex = t,
                    void o._emit("locate", [t]);
                    this._transform(this._makeTransformValue(this.curDistance))
                } else {
                    if (n) return this.status = w.ANIMATING,
                    o._emit("locate", [t]),
                    void this.banners.eq(t).animate({
                        opacity: 1
                    },
                    "slow",
                    function() {
                        e && e(t),
                        o.itemIndex = t,
                        $(this).css("zIndex", 0),
                        o._emit("locateEnd", [t]),
                        o.loopStartOrEnd(),
                        o.status = w.READY
                    }).siblings().animate({
                        opacity: 0
                    },
                    "fast",
                    function() {
                        $(this).css("zIndex", -1)
                    });
                    this.banners.eq(t).css({
                        opacity: 1,
                        zIndex: 0
                    }).siblings().css({
                        opacity: 0,
                        zIndex: -1
                    })
                }
                this.itemIndex = t,
                this._emit("locate", [t])
            },
            next: function() {
                this.locate(this.itemIndex + 1)
            },
            prev: function() {
                this.locate(this.itemIndex - 1)
            },
            disable: function() {
                this.enableSwitch = !1
            },
            enable: function() {
                this.enableSwitch = !0
            },
            move: function(t) {
                var e, n = 0;
                t = parseFloat(t),
                e = Math.abs(t),
                e >= 1 ? n = t: e > 0 && (n = parseInt(this.step * t) || 0),
                n && this._move(function() {
                    this._transform(this._makeTransformValue(this.curDistance + n / 2)),
                    n = p
                })
            },
            updateStep: function(t) {
                t = parseInt(t),
                "ms" == b && $(this.dom).css("marginLeft", 0),
                t && (this.step = t, this.locate(!1))
            },
            animationInterrupt: function() {
                var t = this._getCurrentDistance();
                return this._transform(this._makeTransformValue(t)),
                this._animateEnd(),
                t
            },
            on: function(t, e) {
                this.handlers[t] || (this.handlers[t] = []),
                this.handlers[t].push(e)
            },
            _emit: function(t, e) {
                var n = this.handlers[t];
                if (n && n.length) for (var i, o = 0; i = n[o]; o++) i.apply && i.apply(this, e || [])
            },
            _init: function() {
                this._initTransformProperty(),
                this.option.disableTouch || this._initAnimation();
                var t = this,
                e = this.option.touchArea,
                n = function() {
                    t.areaDistance = t.direction == g.Y ? e.offsetHeight: e.offsetWidth,
                    t.areaDistance || (t.areaDistance = t.direction == g.Y ? f.innerHeight: f.innerWidth)
                };
                f.addEventListener("resize", n, !1),
                n()
            },
            _initAnimation: function() {
                var t = this,
                e = this.option.touchArea;
                $(e).on("click", ".pre",
                function(e) {
                    return (!t.option.autoAnimationDuration || t.status != w.ANIMATING) && (t.preAutoRun(), void t.prev())
                }),
                $(e).on("click", ".next",
                function(e) {
                    return (!t.option.autoAnimationDuration || t.status != w.ANIMATING) && (t.preAutoRun(), void t.next())
                }),
                $(e).find(".hero-tab a").on("click",
                function() {
                    if (t.option.autoAnimationDuration && t.status == w.ANIMATING) return ! 1;
                    t.preAutoRun();
                    var e = parseInt($(this).attr("ix"), 10) + 1;
                    e !== t.itemIndex && t.locate(!0, e)
                }),
                $(e).on("mouseenter",
                function() {
                    t.stopAutoRun()
                }),
                $(e).on("mouseleave",
                function() {
                    t.preAutoRun()
                }),
                f.navigator.msPointerEnabled ? (e.addEventListener("MSPointerDown",
                function(e) {
                    e.pointerType == e.MSPOINTER_TYPE_TOUCH && t._touchStart(e, e)
                },
                !1), e.addEventListener("MSPointerMove",
                function(e) {
                    e.pointerType == e.MSPOINTER_TYPE_TOUCH && t._touchMove(e, e)
                },
                !1), e.addEventListener("MSPointerUp",
                function(e) {
                    e.pointerType == e.MSPOINTER_TYPE_TOUCH && t._touchEnd(e)
                },
                !1)) : (e.addEventListener("touchstart",
                function(e) {
                    t._touchStart(e, e.targetTouches[0])
                },
                !1), e.addEventListener("touchmove",
                function(e) {
                    t._touchMove(e, e.targetTouches[0])
                },
                !1), e.addEventListener("touchend",
                function(e) {
                    t._touchEnd(e)
                },
                !1))
            },
            _initTransformProperty: function() {
                var t, e, n = this.option.transformProperty,
                i = g.X,
                o = !0,
                s = this,
                c = function(t) {
                    var e = (s.curDistance + s.lastDistance) / 2,
                    n = e % 360;
                    n > 180 ? n -= 360 : n < -180 && (n += 360);
                    var i = t - n;
                    return e + i
                };
                switch (n) {
                default:
                case "translateX":
                    n = "translate3d",
                    t = "{val}px,0,0",
                    e = function(t) {
                        return 6 == t.length ? parseInt(t[4]) : 16 == t.length ? parseInt(t[12]) : void 0
                    };
                    break;
                case "translateY":
                    n = "translate3d",
                    t = "0,{val}px,0",
                    i = g.Y,
                    e = function(t) {
                        return 6 == t.length ? parseInt(t[5]) : 16 == t.length ? parseInt(t[13]) : void 0
                    };
                    break;
                case "translateZ":
                    n = "translate3d",
                    t = "0,0,{val}px",
                    e = function(t) {
                        return parseInt(t[14])
                    };
                    break;
                case "rotateX":
                    t = "{val}deg",
                    i = g.Y,
                    o = !0,
                    e = function(t) {
                        var e = parseFloat(t[5]).toFixed(2),
                        n = parseFloat(t[6]),
                        i = Math.acos(e) / Math.PI * 180,
                        o = n >= 0 ? i: 0 - i;
                        return c(o)
                    };
                    break;
                case "rotateY":
                    t = "{val}deg",
                    o = !0,
                    e = function(t) {
                        var e = parseFloat(t[0]).toFixed(2),
                        n = parseFloat(t[8]),
                        i = Math.acos(e) / Math.PI * 180,
                        o = n >= 0 ? i: 0 - i;
                        return c(o)
                    };
                    break;
                case "rotateZ":
                    t = "{val}deg",
                    o = !0,
                    e = function(t) {
                        var e = 0,
                        n = 0;
                        6 == t.length ? (e = parseFloat(t[0]).toFixed(2), n = parseFloat(t[1])) : 16 == t.length;
                        var i = Math.acos(e) / Math.PI * 180,
                        o = n >= 0 ? i: 0 - i;
                        return c(o)
                    }
                }
                this._makeTransformValue = function(e) {
                    var i = {};
                    return i[n] = t.replace("{val}", e),
                    i
                },
                this._getCurrentDistance = function() {
                    var t = r(this.dom, "transform");
                    t = t.replace(/^matrix(?:3d)?\((.+)\)$/, "$1");
                    var n = t.split(",") || [];
                    return e(n)
                },
                this.DPI = a()[i],
                this.direction = i,
                this._isCircleLayout = o
            },
            _transform: function(t) {
                this._curTransformObj || (this._curTransformObj = {});
                for (var e in t) this._curTransformObj[e] = t[e];
                var n = [];
                for (var i in this._curTransformObj) n.push(i, "(", this._curTransformObj[i], ")");
                n.length && r(this.dom, "transform", n.join(""))
            },
            _parseDistance: function(t) {
                return parseInt(parseFloat(t) / this.areaDistance * this.step)
            },
            _touchStart: function(t, e) {
                if (this.enableSwitch) {
                    var n = this.curDistance;
                    if (this.status == w.ANIMATING) {
                        if (this.boundaryMode || this.option.lockOnAnimating) return;
                        n = this.animationInterrupt(),
                        this._emit("animationinterrupt")
                    }
                    this.oriDistance = 0,
                    this.distance = 0,
                    this.preDistance = n - this.curDistance,
                    this.status = w.TOUCH_START,
                    this.startTime = new Date,
                    this.motionable = !0,
                    this.touchDirection = 0,
                    this.startPos = {
                        X: e.pageX,
                        Y: e.pageY
                    },
                    this.startValue = this.startPos[this.direction],
                    this._emit("touchstart", [t])
                }
            },
            _touchMove: function(t, e) {
                if (this.enableSwitch) {
                    if ("auto" === this.option.preventDefault) {
                        if (!this.touchDirection) {
                            var n = Math.abs(e.pageX - this.startPos.X),
                            i = Math.abs(e.pageY - this.startPos.Y);
                            0 == n && 0 == i || (this.touchDirection = n > i ? g.X: g.Y)
                        }
                        if (this.touchDirection != this.direction) return;
                        t.preventDefault()
                    } else this.option.preventDefault === !0 && t.preventDefault();
                    if (this.motionable) {
                        var o = e["page" + this.direction];
                        this.oriDistance = o - this.startValue,
                        this.status != w.TOUCH_START && this.status != w.TOUCH_MOVE || this.oriDistance && (this.distance = this._parseDistance(this.oriDistance) + this.preDistance / this.option.slideRatio, this.timeSpan = new Date - this.startTime, this._move(function() {
                            var t = !0;
                            if (0 === this.itemIndex && this.distance > 0 || this.itemIndex == this.count - 1 && this.distance < 0) if (this.option.disableBoundaryMove) t = !1;
                            else {
                                var e = c.ext.boundaryAnimation[this.option.boundaryAnimationName];
                                e && e.touchMove && (this.boundaryMode = !0, e.touchMove.call(this), t = !1)
                            }
                            t && (this.boundaryMode = !1, this.option.slideRatio && (this.status = w.TOUCH_MOVE, this._transform(this._makeTransformValue(this.curDistance + this.distance * this.option.slideRatio))))
                        }), this._emit("touchmove", [t, this.distance]))
                    }
                }
            },
            _touchEnd: function(t) {
                if (this.enableSwitch && this.motionable) {
                    if (this.motionable = !1, this.boundaryMode) {
                        var e = c.ext.boundaryAnimation[this.option.boundaryAnimationName];
                        e && e.touchEnd && e.touchEnd.call(this)
                    } else if (0 !== this.distance || 0 !== this.preDistance) {
                        var n = this.itemIndex;
                        this.oriDistance && (Math.abs(this.oriDistance / this.DPI) / this.timeSpan * 1e3 > this.option.speedThreshold || Math.abs(this.oriDistance) > this.areaDistance * this.option.nextRatio) && (this.oriDistance < 0 ? n++:n--),
                        this.locate(n)
                    } else this.status == w.READY;
                    this._emit("touchend", [t]),
                    this.preAutoRun()
                }
            },
            _move: function(t) {
                if (this._curFrameFn = t, !this.moveFrameFilled) {
                    this.moveFrameFilled = !0;
                    var e = this;
                    P(function() {
                        e.moveFrameFilled = !1,
                        e.status != w.ANIMATING && e._curFrameFn && e._curFrameFn.call(e),
                        e._curFrameFn = p
                    })
                }
            },
            _animate: function(t, e) {
                this.status = w.ANIMATING,
                this.option.autoAnimationDuration = "mobile" == h() ? 200 : 500,
                r(this.dom, "transition", [i("transform"), " ", this.option.autoAnimationDuration, "ms ease-out"].join(""));
                var n = this,
                a = this.dom.endFn = function(t) {
                    t && t.target !== n.dom || (n._animateEnd(), t && t.stopPropagation(), e && e())
                };
                this.dom.addEventListener("transitionEnd", a, !1),
                this.dom.addEventListener(o("transitionEnd"), a, !1),
                this.dom.animationTimer = setTimeout(a, this.option.autoAnimationDuration + 50),
                this._transform(t)
            },
            _animateEnd: function() {
                this.status = w.READY,
                r(this.dom, "transition", ""),
                this.dom.removeEventListener("transitionEnd", this.dom.endFn, !1),
                this.dom.removeEventListener(o("transitionEnd", !0), this.dom.endFn, !1),
                clearTimeout(this.dom.animationTimer),
                this.dom.endFn = null,
                this.loopStartOrEnd()
            },
            transformSwitch: function(t) {
                this.enableTransform = !!t,
                t || $(this.dom).css("transform", "none")
            },
            loopStartOrEnd: function() {
                if (!this._isCircleLayout) return ! 1;
                var t = this.itemIndex;
                t > this.count ? t = 1 : t < 1 && (t = this.count),
                t !== this.itemIndex && this.locate(!1, t),
                this.itemIndex = t
            },
            preAutoRun: function() {
                var t = this;
                t.stopAutoRun(),
                t.autoRunTimer.push(setTimeout(function() {
                    t.autoRun()
                },
                1 * t.option.autoRunTimeSpan))
            },
            autoRun: function() {
                var t = this;
                t.autoRunTimer.push(setInterval(function() {
                    t.next()
                },
                5 * t.option.autoRunTimeSpan))
            },
            stopAutoRun: function() {
                for (var t = 0; t < this.autoRunTimer.length; t++) clearTimeout(this.autoRunTimer[t]);
                this.autoRunTimer = []
            }
        },
        c.prototype.constructor = c,
        c.ext = {},
        c.ext.boundaryAnimation = {},
        t.exports = c
    },
    "51LH": function(t, e) {
        "use strict";
        var n = function() {
            return document.documentElement.clientWidth
        };
        t.exports = {
            getClientWidth: n,
            getResponsiveMode: function() {
                var t = n();
                return t <= 414 ? "mobile": t > 414 && t <= 768 ? "pad": t > 768 ? "pc": void 0
            },
            isPhone: function() {
                var t = navigator.userAgent;
                return ! (!/AppleWebKit.*Mobile/i.test(t) && !/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(t) || /iPad/i.test(t))
            },
            getWindowWidth: function() {
                return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
            }
        }
    },
    "9n8x": function(t, e, n) {
        "use strict";
        function i(t, e) {
            if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! e || "object" != typeof e && "function" != typeof e ? t: e
        }
        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n),
                i && t(e, i),
                e
            }
        } (),
        s = n("Sawl"),
        c = n("dwAR"),
        u = "actived",
        l = function(t) {
            function e() {
                return i(this, e),
                o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t),
            a(e, [{
                key: "onInit",
                value: function() {
                    this.$tabs = this.$(".J-pdTab"),
                    this.$mTabs = this.$(".J-pdMTab"),
                    this.$tabGroups = this.$(".home-product-tab"),
                    this.$tabPanels = this.$(".J-pdTabPanel"),
                    this.$tabContents = this.$(".J-pdTabContent"),
                    this.expanded = !1,
                    this.renderView(),
                    this.bindEvents()
                }
            },
            {
                key: "onResize",
                value: function() {
                    "wide" === this.getScreenMode() && this._renderTab()
                }
            },
            {
                key: "onNarrow",
                value: function() {
                    this._renderNarrowView()
                }
            },
            {
                key: "onWiden",
                value: function() {
                    this._renderWideView()
                }
            },
            {
                key: "renderView",
                value: function() {
                    this._renderTab(),
                    "wide" === this.getScreenMode() ? this._renderWideView() : this._renderNarrowView()
                }
            },
            {
                key: "_renderTab",
                value: function() {
                    var t = this,
                    e = $(window);
                    e.width();
                    t.currTab = t.currTab || t.$(".J-pdTab").data("target");
                    var n = t.$tabs.filter('[data-target="' + t.currTab + '"]'),
                    i = t.$mTabs.filter('[data-target="' + t.currTab + '"]');
                    n.closest("ul").next();
                    t.$tabs.removeClass(u),
                    t.$mTabs.removeClass(u),
                    n.addClass(u),
                    i.addClass(u),
                    this._renderUnderline(n, !0)
                }
            },
            {
                key: "_renderUnderline",
                value: function(t, e) {
                    var n = t.closest("ul").next(),
                    i = t.index() * t.width();
                    e ? n.css({
                        "-webkit-transition-property": "none",
                        "transition-property": "none"
                    }) : n.css({
                        "-webkit-transition-property": "",
                        "transition-property": ""
                    }),
                    this.$(".J-pdUnderline").css("visibility", "hidden"),
                    n.css({
                        visibility: "visible",
                        left: i,
                        width: t.width()
                    })
                }
            },
            {
                key: "_renderWideView",
                value: function() {
                    var t = this,
                    e = t.$('.J-pdTabContent[data-id="' + t.currTab + '"]'),
                    n = e.closest(".J-pdTabPanel");
                    t.$tabPanels.hide(),
                    n.show(),
                    e.show().siblings().hide(),
                    this.$tabPanels.find("ul").show(),
                    t.$tabGroups.show()
                }
            },
            {
                key: "_renderNarrowView",
                value: function() {
                    var t = this,
                    e = t.$('.J-pdTabContent[data-id="' + t.currTab + '"]');
                    e.closest(".J-pdTabPanel");
                    t.$tabPanels.css({
                        height: "initial"
                    }).show(),
                    t.$tabContents.show(),
                    t.$tabContents.children("ul").hide(),
                    e.children("ul").show(),
                    t.$tabGroups.filter(".J-pdMHiddenContent").toggle(t.expanded)
                }
            },
            {
                key: "bindEvents",
                value: function() {
                    var t = this;
                    $(window);
                    this.$root.on("click", ".J-pdTab",
                    function() {
                        var e = $(this),
                        n = t.currTab,
                        i = e.data("target");
                        t.currTab = i,
                        t.$tabs.removeClass(u),
                        e.addClass(u),
                        t.performWideModeAnimation(n, i)
                    }),
                    this.$root.on("click", ".J-pdMTab",
                    function() {
                        var e = $(this),
                        n = t.currTab,
                        i = e.data("target");
                        t.$mTabs.removeClass(u),
                        n == i ? t.currTab = "": (t.currTab = i, e.addClass(u)),
                        t.performNarrowModeAnimation(n, i)
                    }),
                    this.$root.on("click", ".J-pdTrigger",
                    function() {
                        var e = $(this);
                        t.expanded = !t.expanded,
                        e.toggleClass("show", t.expanded).text(t.expanded ? "\u6536\u8d77": "\u5c55\u5f00"),
                        t.$tabGroups.filter(".J-pdMHiddenContent").toggle(t.expanded)
                    })
                }
            },
            {
                key: "performWideModeAnimation",
                value: function(t, e) {
                    if (t !== e) {
                        var n = this,
                        i = (n.$tabs.filter('[data-target="' + t + '"]'), n.$('.J-pdTabContent[data-id="' + t + '"]')),
                        o = i.closest(".J-pdTabPanel"),
                        r = i.height();
                        if (t !== e) {
                            var a = n.$tabs.filter('[data-target="' + e + '"]'),
                            s = n.$('.J-pdTabContent[data-id="' + e + '"]'),
                            c = s.closest(".J-pdTabPanel"),
                            u = void 0,
                            l = n.userHeightAnimation() && !1;
                            if (o[0] == c[0]) n._renderUnderline(a),
                            l ? (o.height(r), i.stop(!0, !0).fadeOut("fast",
                            function() {
                                s.css("opacity", 0).show(),
                                u = s.height(),
                                s.stop(!0, !0).animate({
                                    opacity: 1
                                },
                                "fast"),
                                o.animate({
                                    height: u
                                },
                                300)
                            })) : i.stop(!0, !0).fadeOut("fast",
                            function() {
                                s.fadeIn()
                            });
                            else if (n._renderUnderline(a, !0), s.show().siblings().hide(), l) {
                                var h = $.Deferred();
                                o.slideUp("fast",
                                function() {
                                    h.resolve()
                                }).css({
                                    height: "initial"
                                });
                                var d = $.Deferred();
                                c.css({
                                    height: "initial"
                                }).slideDown("fast",
                                function() {
                                    d.resolve()
                                }),
                                $.when(h, d).done(function() {
                                    n.ensureTabInView(a)
                                })
                            } else o.hide(),
                            c.show(),
                            n.ensureTabInView(a)
                        }
                    }
                }
            },
            {
                key: "ensureTabInView",
                value: function(t) {
                    var e = Math.max(document.documentElement.scrollTop, document.body.scrollTop),
                    n = t.offset().top;
                    n < e && window.scrollTo(0, n)
                }
            },
            {
                key: "performNarrowModeAnimation",
                value: function(t, e) {
                    var n = self.$('.J-pdTabContent[data-id="' + t + '"]'),
                    i = (n.closest(".J-pdTabPanel"), n.find("ul"));
                    if (t === e) return void i.slideToggle("fast");
                    var o = self.$('.J-pdTabContent[data-id="' + e + '"]'),
                    r = (o.closest(".J-pdTabPanel"), o.find("ul"));
                    i.hide(),
                    r.show(),
                    $("html, body").not(":animated").animate({
                        scrollTop: o.offset().top
                    },
                    "fast")
                }
            },
            {
                key: "userHeightAnimation",
                value: function() {
                    return ! ("safari" === s.getBrowserType() && !/iPad/i.test(navigator.userAgent))
                }
            }]),
            e
        } (c);
        t.exports = l
    },
    Sawl: function(t, e) {
        "use strict";
        t.exports = {
            getWindowWidth: function() {
                return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
            },
            loadImage: function(t, e) {
                var n = _.extend({
                    loader: "pureImage"
                },
                e);
                "pureImage" === n.loader && ((new Image).srcUrl = t),
                "bgImage" === n.loader && $("<div>").css({
                    width: 0,
                    height: 0,
                    overflow: "hidden",
                    "background-image": "url(" + t + ")"
                }).appendTo("body")
            },
            isPhone: function() {
                var t = navigator.userAgent;
                return ! (!/AppleWebKit.*Mobile/i.test(t) && !/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(t) || /iPad/i.test(t))
            },
            getBrowserType: function() {
                var t = navigator.userAgent;
                return t.indexOf("Opera") > -1 ? "opera": t.indexOf("Firefox") > -1 ? "firefox": t.indexOf("Chrome") > -1 ? "chrome": t.indexOf("Safari") > -1 ? "safari": t.indexOf("compatible") > -1 && t.indexOf("MSIE") > -1 ? "ie": "unknown"
            }
        }
    },
    dwAR: function(t, e, n) {
        "use strict";
        function i(t, e) {
            if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n),
                i && t(e, i),
                e
            }
        } (),
        r = n("Sawl"),
        a = 600,
        s = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i(this, t),
                this.$root = e.$root,
                this.screenMode = this.getScreenMode(),
                this._bindBaseEvents(),
                this.onInit(),
                this.onReady()
            }
            return o(t, [{
                key: "_bindBaseEvents",
                value: function() {
                    var t = this,
                    e = this,
                    n = $(window);
                    n.on("resize", _.throttle(function() {
                        t.onResize();
                        var e = r.getWindowWidth();
                        e <= a && "wide" === t.screenMode && (t.screenMode = "narrow", t.onNarrow()),
                        e > a && "narrow" === t.screenMode && (t.screenMode = "wide", t.onWiden())
                    },
                    100)),
                    n.on("scroll", _.throttle(function() {
                        t.onScroll(),
                        t.isBeforeScrollIntoView() && e.onBeforeScrollIntoView()
                    },
                    100))
                }
            },
            {
                key: "getScreenMode",
                value: function() {
                    return r.getWindowWidth() < a ? "narrow": "wide"
                }
            },
            {
                key: "onInit",
                value: function() {}
            },
            {
                key: "onReady",
                value: function() {}
            },
            {
                key: "onResize",
                value: function() {}
            },
            {
                key: "onNarrow",
                value: function() {}
            },
            {
                key: "onWiden",
                value: function() {}
            },
            {
                key: "onScroll",
                value: function() {}
            },
            {
                key: "isBeforeScrollIntoView",
                value: function() {
                    if (!this.$root || !this.$root.length) return ! 1;
                    var t = $(window),
                    e = t.height(),
                    n = t.scrollTop(),
                    i = this.$root.offset().top,
                    o = "wide" === this.getScreenMode() ? .6 : 1,
                    r = n + (1 + o) * e;
                    return r > i
                }
            },
            {
                key: "onBeforeScrollIntoView",
                value: function() {}
            },
            {
                key: "onIntoView",
                value: function() {}
            },
            {
                key: "$",
                value: function(t) {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e.toString = function() {
                        return t.toString()
                    },
                    e
                } (function(t) {
                    return this.$root ? this.$root.find(t) : $(t)
                })
            }]),
            t
        } ();
        t.exports = s
    },
    "+V/N": function(t, e, n) {
        "use strict";
        function i(t) {
            var e = $("#heroBanner").width(),
            n = $(".J-hero-img"),
            i = "";
            return i = "pc" == t ? e + "px": e * n.length + "px",
            n.each(function() {
                var n = $(this);
                n.css({
                    width: e + "px",
                    display: "inline-block"
                }),
                "pc" == t ? n.css({
                    opacity: 1,
                    position: "absolute",
                    top: 0,
                    left: 0
                }) : n.css({
                    opacity: 1,
                    position: "relative"
                })
            }),
            $(".hero-img").css("width", i),
            e
        }
        function o() {
            var t = $(".J-hero-img"),
            e = $("#heroBanner"),
            n = t.length;
            t.on("click",
            function() {
                window.open($(this).data("href"))
            }),
            t.on("mouseenter", "a.hero-btn",
            function() {
                $(this).css("color", $(this).closest(".J-hero-img").attr("data-bgcolor"))
            }).on("mouseleave", "a.hero-btn",
            function() {
                $(this).css("color", "#fff")
            });
            var o = t.first(),
            r = t.last(),
            s = o.clone(!0),
            u = r.clone(!0);
            u.insertBefore(o),
            t.parent().append(s);
            var l = c(),
            h = i(l),
            d = new a($(".hero-img")[0], h, n, {
                touchArea: $(".hero-inner")[0],
                banners: $(".J-hero-img"),
                enableTransform: "pc" != l
            });
            d.locate(!1, 1),
            d.preAutoRun();
            var f = 0,
            p = $(".hero-tab li"),
            m = p.length;
            d.on("locate",
            function(n) {
                n -= 1,
                n < 0 ? f = m - 1 : n > m - 1 && (f = 0),
                p.removeClass("selected"),
                p.eq(n).addClass("selected"),
                f = n;
                var i = $(t[f]);
                e.css({
                    "background-color": i.data("bgcolor")
                })
            }),
            $(window).on("resize",
            function(t) {
                var e = c();
                d.transformSwitch("pc" != e),
                d.updateStep(i(e))
            })
        }
        function r(t) {
            $(".J-hero-img").each(function() {
                $(this).css("background-image", "url(" + $(this).data(t) + ")")
            })
        }
        var a = n("qI2I"),
        s = n("51LH"),
        c = s.getResponsiveMode;
        t.exports = {
            init: o,
            handleResponsive: r
        }
    },
    1 : function(t, e) {
        t.exports = _
    },
    DzxX: function(t, e, n) {
        "use strict";
        function i(t, e) {
            if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! e || "object" != typeof e && "function" != typeof e ? t: e
        }
        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n),
                i && t(e, i),
                e
            }
        } (),
        s = n("Sawl"),
        c = n("dwAR"),
        u = "actived",
        l = function(t) {
            function e() {
                return i(this, e),
                o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t),
            a(e, [{
                key: "onInit",
                value: function() {
                    this.$tabs = this.$(".J-customerTab"),
                    this.$tabsWrapper = this.$tabs.parent(),
                    this.$panel = this.$(".J-customerPanel"),
                    this.$contents = this.$(".J-customerContent"),
                    this.$underline = this.$(".J-customerUnderline"),
                    this.preload = !1,
                    this.renderView(),
                    this.bindEvents()
                }
            },
            {
                key: "onBeforeScrollIntoView",
                value: function() {
                    this.preload || (this.preload = !0, this.doPreloadImage())
                }
            },
            {
                key: "renderView",
                value: function() {
                    this.renderUnderline(!0)
                }
            },
            {
                key: "renderUnderline",
                value: function(t) {
                    var e = this.$tabs.filter("." + u);
                    t ? this.$underline.css({
                        "-webkit-transition-property": "none",
                        "transition-property": "none"
                    }) : this.$underline.css({
                        "-webkit-transition-property": "",
                        "transition-property": ""
                    }),
                    this.$underline.css({
                        visibility: "visible",
                        left: e.offset().left - this.$tabsWrapper.offset().left,
                        width: e.width()
                    })
                }
            },
            {
                key: "bindEvents",
                value: function() {
                    var t = this;
                    $(window);
                    this.$root.on("click", ".J-customerTab",
                    function() {
                        var e = $(this),
                        n = e.data("target"),
                        i = t.$contents.filter(":visible"),
                        o = t.$contents.filter('[data-id="' + n + '"]');
                        e.addClass(u).siblings().removeClass(u),
                        i.fadeOut("fast",
                        function() {
                            o.fadeIn("fast")
                        }),
                        t.renderUnderline()
                    })
                }
            },
            {
                key: "doPreloadImage",
                value: function() {
                    var t = this;
                    t.$("img").each(function() {
                        var t = $(this);
                        t.prop("src") || !t.data("p-src") && !t.data("m-src") || (s.isPhone() ? t.prop("src", t.data("m-src")) : t.prop("src", t.data("p-src")))
                    })
                }
            },
            {
                key: "onResize",
                value: function() {
                    this.renderView()
                }
            }]),
            e
        } (c);
        t.exports = l
    },
    xnl8: function(t, e, n) {
        "use strict";
        function i(t, e) {
            if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! e || "object" != typeof e && "function" != typeof e ? t: e
        }
        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        var a = n("dwAR"),
        s = function(t) {
            function e() {
                return i(this, e),
                o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t),
            e
        } (a);
        t.exports = s
    },
    "70lU": function(t, e, n) {
        "use strict";
        function i(t, e) {
            if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! e || "object" != typeof e && "function" != typeof e ? t: e
        }
        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n),
                i && t(e, i),
                e
            }
        } (),
        s = n("dwAR"),
        c = function(t) {
            function e() {
                return i(this, e),
                o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t),
            a(e, [{
                key: "onInit",
                value: function() {
                    this.wPreload = !1,
                    this.nPreload = !1
                }
            },
            {
                key: "onBeforeScrollIntoView",
                value: function() {
                    "wide" !== this.getScreenMode() || this.wPreload || (this.wPreload = !0, this.doPreloadImage()),
                    "narrow" !== this.getScreenMode() || this.mPreload || (this.mPreload = !0, this.doPreloadImage())
                }
            },
            {
                key: "doPreloadImage",
                value: function() {
                    var t = this;
                    t.$("img").each(function() {
                        var e = $(this),
                        n = e.data("load") || "";
                        "narrow" == t.getScreenMode() ? !e.prop("src") && "narrow" === n && e.data("src") && e.prop("src", e.data("src")) : !e.prop("src") && e.data("src") && e.prop("src", e.data("src"))
                    })
                }
            }]),
            e
        } (s);
        t.exports = c
    },
    eSCn: function(t, e, n) {
        "use strict";
        function i(t, e) {
            if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! e || "object" != typeof e && "function" != typeof e ? t: e
        }
        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n),
                i && t(e, i),
                e
            }
        } (),
        s = n("dwAR"),
        c = function(t) {
            function e() {
                return i(this, e),
                o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t),
            a(e, [{
                key: "onInit",
                value: function() {
                    this.preload = !1
                }
            },
            {
                key: "onBeforeScrollIntoView",
                value: function() {
                    this.preload || (this.preload = !0, this.doPreloadImage())
                }
            },
            {
                key: "doPreloadImage",
                value: function() {
                    var t = this;
                    t.$("img").each(function() {
                        var t = $(this); ! t.prop("src") && t.data("src") && t.prop("src", t.data("src")).css("visibility", "visible")
                    })
                }
            }]),
            e
        } (s);
        t.exports = c
    },
    qcm8: function(t, e, n) {
        "use strict";
        function i(t, e) {
            if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! e || "object" != typeof e && "function" != typeof e ? t: e
        }
        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n),
                i && t(e, i),
                e
            }
        } (),
        s = n("dwAR"),
        c = (n(1), n("Sawl")),
        u = "actived",
        l = function(t) {
            function e() {
                return i(this, e),
                o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t),
            a(e, [{
                key: "onInit",
                value: function() {
                    this.$wWrapper = this.$(".J-sltWideWrapper"),
                    this.$nWrapper = this.$(".J-sltNarrowWrapper"),
                    this.$tabs = this.$(".J-sltTab"),
                    this.$sltBackground = $(".J-sltBackground"),
                    this.$mItems = this.$(".J-sltMItem"),
                    this.wPreload = !1,
                    this.nPreload = !1,
                    this.currTab = this.$tabs.eq(0).data("target"),
                    this.nextTab,
                    this.bindEvents()
                }
            },
            {
                key: "bindEvents",
                value: function() {
                    var t = this,
                    e = ($(window), void 0),
                    n = $(".J-sltTab").closest(".J-sltTabGroup");
                    t.$wWrapper.on("click", ".J-sltTab",
                    function() {
                        var n = $(this).data("target");
                        clearTimeout(e),
                        t.currTab != n && (t.currTab = n, t.performTransaction($(this)))
                    }),
                    t.$wWrapper.on("mouseenter", ".J-sltTab",
                    function() {
                        var n = this,
                        i = $(this).data("target");
                        this.nextTab = i,
                        clearTimeout(e),
                        e = setTimeout(function() {
                            n.nextTab != t.currTab && i == n.nextTab && (t.currTab = i, t.performTransaction($(n)))
                        },
                        200)
                    }),
                    n.on("mouseleave",
                    function() {
                        clearTimeout(e)
                    }),
                    t.$nWrapper.on("click", ".J-sltMItemTitle",
                    function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = $(this),
                        o = i.closest(".J-sltMItem"),
                        r = i.next(".J-sltMItemCont");
                        return "expand" != n.action && i.hasClass(u) ? (i.removeClass(u), void r.slideUp("fast")) : (t.currTab = i.data("target"), t.$(".J-sltMItemTitle").removeClass(u), t.$(".J-sltMItemCont").hide(), i.addClass(u), r.show(), void(n.noScrollToTop || $("html, body").not(":animated").animate({
                            scrollTop: o.offset().top
                        },
                        "fast")))
                    })
                }
            },
            {
                key: "performTransaction",
                value: function(t) {
                    var e = this,
                    n = this,
                    i = this.currTab = t.data("target"),
                    o = n.$(".J-sltTabContent:visible"),
                    r = n.$('.J-sltTabContent[data-id="' + i + '"]'),
                    a = t.data("img");
                    t.addClass(u).siblings().removeClass(u),
                    o.stop(!0, !0).fadeOut("fast",
                    function() {
                        i == e.currTab && (n.$(".J-sltTabContent").hide(), r.stop(!0, !0).fadeIn(300))
                    }),
                    n.$sltBackground.css({
                        "background-image": "url(" + a + ")"
                    })
                }
            },
            {
                key: "onNarrow",
                value: function() {
                    var t = this;
                    t.$nWrapper.find('.J-sltMItemTitle[data-target="' + t.currTab + '"]').trigger("click", {
                        action: "expand",
                        noScrollToTop: !0
                    })
                }
            },
            {
                key: "onWiden",
                value: function() {
                    var t = this;
                    t.performTransaction(t.$wWrapper.find('.J-sltTab[data-target="' + t.currTab + '"]'))
                }
            },
            {
                key: "onBeforeScrollIntoView",
                value: function() {
                    var t = this,
                    e = t.getScreenMode();
                    "wide" !== e || t.wPreload || (t.wPreload = !0, t.doPreloadWideImage(), t.nPreload = !0, t.doPreloadNarrowImage()),
                    "narrow" !== e || t.nPreload || (t.nPreload = !0, t.doPreloadNarrowImage())
                }
            },
            {
                key: "doPreloadWideImage",
                value: function() {
                    var t = this;
                    t.$tabs.each(function() {
                        var e = $(this),
                        n = e.data("img"),
                        i = e.data("target");
                        t.$('.J-sltTabContent[data-id="' + i + '"]');
                        c.loadImage(n, {
                            loader: "bgImage"
                        }),
                        t.$("img").each(function() {
                            var t = $(this); ! t.prop("src") && t.data("src") && t.prop("src", t.data("src"))
                        })
                    })
                }
            },
            {
                key: "doPreloadNarrowImage",
                value: function() {
                    var t = this;
                    t.$nWrapper.find("img").each(function() {
                        var t = $(this); ! t.prop("src") && t.data("src") && t.prop("src", t.data("src"))
                    })
                }
            }]),
            e
        } (s);
        t.exports = l
    }
});