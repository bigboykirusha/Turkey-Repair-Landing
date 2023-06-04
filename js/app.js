(() => {
  "use strict";
  let e = !0,
    t = (t = 500) => {
      let s = document.querySelector("body");
      if (e) {
        let i = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < i.length; e++) {
            i[e].style.paddingRight = "0px";
          }
          (s.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, t),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    },
    s = (t = 500) => {
      let s = document.querySelector("body");
      if (e) {
        let i = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < i.length; e++) {
          i[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (s.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    };
  function i(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function n(e = {}, t = {}) {
    Object.keys(t).forEach((s) => {
      void 0 === e[s]
        ? (e[s] = t[s])
        : i(t[s]) && i(e[s]) && Object.keys(t[s]).length > 0 && n(e[s], t[s]);
    });
  }
  const r = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function a() {
    const e = "undefined" != typeof document ? document : {};
    return n(e, r), e;
  }
  const o = {
    document: r,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function l() {
    const e = "undefined" != typeof window ? window : {};
    return n(e, o), e;
  }
  function c(e, t = 0) {
    return setTimeout(e, t);
  }
  function d() {
    return Date.now();
  }
  function u(e, t = "x") {
    const s = l();
    let i, n, r;
    const a = (function (e) {
      const t = l();
      let s;
      return (
        t.getComputedStyle && (s = t.getComputedStyle(e, null)),
        !s && e.currentStyle && (s = e.currentStyle),
        s || (s = e.style),
        s
      );
    })(e);
    return (
      s.WebKitCSSMatrix
        ? ((n = a.transform || a.webkitTransform),
          n.split(",").length > 6 &&
            (n = n
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (r = new s.WebKitCSSMatrix("none" === n ? "" : n)))
        : ((r =
            a.MozTransform ||
            a.OTransform ||
            a.MsTransform ||
            a.msTransform ||
            a.transform ||
            a
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = r.toString().split(","))),
      "x" === t &&
        (n = s.WebKitCSSMatrix
          ? r.m41
          : 16 === i.length
          ? parseFloat(i[12])
          : parseFloat(i[4])),
      "y" === t &&
        (n = s.WebKitCSSMatrix
          ? r.m42
          : 16 === i.length
          ? parseFloat(i[13])
          : parseFloat(i[5])),
      n || 0
    );
  }
  function p(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function f(...e) {
    const t = Object(e[0]),
      s = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < e.length; n += 1) {
      const r = e[n];
      if (
        null != r &&
        ((i = r),
        !("undefined" != typeof window && void 0 !== window.HTMLElement
          ? i instanceof HTMLElement
          : i && (1 === i.nodeType || 11 === i.nodeType)))
      ) {
        const e = Object.keys(Object(r)).filter((e) => s.indexOf(e) < 0);
        for (let s = 0, i = e.length; s < i; s += 1) {
          const i = e[s],
            n = Object.getOwnPropertyDescriptor(r, i);
          void 0 !== n &&
            n.enumerable &&
            (p(t[i]) && p(r[i])
              ? r[i].__swiper__
                ? (t[i] = r[i])
                : f(t[i], r[i])
              : !p(t[i]) && p(r[i])
              ? ((t[i] = {}), r[i].__swiper__ ? (t[i] = r[i]) : f(t[i], r[i]))
              : (t[i] = r[i]));
        }
      }
    }
    var i;
    return t;
  }
  function h(e, t, s) {
    e.style.setProperty(t, s);
  }
  function m({ swiper: e, targetPosition: t, side: s }) {
    const i = l(),
      n = -e.translate;
    let r,
      a = null;
    const o = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      i.cancelAnimationFrame(e.cssModeFrameID);
    const c = t > n ? "next" : "prev",
      d = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
      u = () => {
        (r = new Date().getTime()), null === a && (a = r);
        const l = Math.max(Math.min((r - a) / o, 1), 0),
          c = 0.5 - Math.cos(l * Math.PI) / 2;
        let p = n + c * (t - n);
        if ((d(p, t) && (p = t), e.wrapperEl.scrollTo({ [s]: p }), d(p, t)))
          return (
            (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [s]: p });
            }),
            void i.cancelAnimationFrame(e.cssModeFrameID)
          );
        e.cssModeFrameID = i.requestAnimationFrame(u);
      };
    u();
  }
  function g(e, t = "") {
    return [...e.children].filter((e) => e.matches(t));
  }
  function v(e, t = []) {
    const s = document.createElement(e);
    return s.classList.add(...(Array.isArray(t) ? t : [t])), s;
  }
  function b(e, t) {
    return l().getComputedStyle(e, null).getPropertyValue(t);
  }
  function w(e) {
    let t,
      s = e;
    if (s) {
      for (t = 0; null !== (s = s.previousSibling); )
        1 === s.nodeType && (t += 1);
      return t;
    }
  }
  function y(e, t) {
    const s = [];
    let i = e.parentElement;
    for (; i; )
      t ? i.matches(t) && s.push(i) : s.push(i), (i = i.parentElement);
    return s;
  }
  function S(e, t, s) {
    const i = l();
    return s
      ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
          parseFloat(
            i
              .getComputedStyle(e, null)
              .getPropertyValue("width" === t ? "margin-right" : "margin-top")
          ) +
          parseFloat(
            i
              .getComputedStyle(e, null)
              .getPropertyValue("width" === t ? "margin-left" : "margin-bottom")
          )
      : e.offsetWidth;
  }
  let E, T, x;
  function C() {
    return (
      E ||
        (E = (function () {
          const e = l(),
            t = a();
          return {
            smoothScroll:
              t.documentElement &&
              t.documentElement.style &&
              "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
          };
        })()),
      E
    );
  }
  function O(e = {}) {
    return (
      T ||
        (T = (function ({ userAgent: e } = {}) {
          const t = C(),
            s = l(),
            i = s.navigator.platform,
            n = e || s.navigator.userAgent,
            r = { ios: !1, android: !1 },
            a = s.screen.width,
            o = s.screen.height,
            c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
          let d = n.match(/(iPad).*OS\s([\d_]+)/);
          const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
            p = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            f = "Win32" === i;
          let h = "MacIntel" === i;
          return (
            !d &&
              h &&
              t.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${a}x${o}`) >= 0 &&
              ((d = n.match(/(Version)\/([\d.]+)/)),
              d || (d = [0, 1, "13_0_0"]),
              (h = !1)),
            c && !f && ((r.os = "android"), (r.android = !0)),
            (d || p || u) && ((r.os = "ios"), (r.ios = !0)),
            r
          );
        })(e)),
      T
    );
  }
  function P() {
    return (
      x ||
        (x = (function () {
          const e = l();
          let t = !1;
          function s() {
            const t = e.navigator.userAgent.toLowerCase();
            return (
              t.indexOf("safari") >= 0 &&
              t.indexOf("chrome") < 0 &&
              t.indexOf("android") < 0
            );
          }
          if (s()) {
            const s = String(e.navigator.userAgent);
            if (s.includes("Version/")) {
              const [e, i] = s
                .split("Version/")[1]
                .split(" ")[0]
                .split(".")
                .map((e) => Number(e));
              t = e < 16 || (16 === e && i < 2);
            }
          }
          return {
            isSafari: t || s(),
            needPerspectiveFix: t,
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      x
    );
  }
  const A = {
    on(e, t, s) {
      const i = this;
      if (!i.eventsListeners || i.destroyed) return i;
      if ("function" != typeof t) return i;
      const n = s ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          i.eventsListeners[e] || (i.eventsListeners[e] = []),
            i.eventsListeners[e][n](t);
        }),
        i
      );
    },
    once(e, t, s) {
      const i = this;
      if (!i.eventsListeners || i.destroyed) return i;
      if ("function" != typeof t) return i;
      function n(...s) {
        i.off(e, n), n.__emitterProxy && delete n.__emitterProxy, t.apply(i, s);
      }
      return (n.__emitterProxy = t), i.on(e, n, s);
    },
    onAny(e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof e) return s;
      const i = t ? "unshift" : "push";
      return (
        s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return !s.eventsListeners || s.destroyed
        ? s
        : s.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (s.eventsListeners[e] = [])
              : s.eventsListeners[e] &&
                s.eventsListeners[e].forEach((i, n) => {
                  (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                    s.eventsListeners[e].splice(n, 1);
                });
          }),
          s)
        : s;
    },
    emit(...e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsListeners) return t;
      let s, i, n;
      "string" == typeof e[0] || Array.isArray(e[0])
        ? ((s = e[0]), (i = e.slice(1, e.length)), (n = t))
        : ((s = e[0].events), (i = e[0].data), (n = e[0].context || t)),
        i.unshift(n);
      return (
        (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
          t.eventsAnyListeners &&
            t.eventsAnyListeners.length &&
            t.eventsAnyListeners.forEach((t) => {
              t.apply(n, [e, ...i]);
            }),
            t.eventsListeners &&
              t.eventsListeners[e] &&
              t.eventsListeners[e].forEach((e) => {
                e.apply(n, i);
              });
        }),
        t
      );
    },
  };
  const L = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const s = t.closest(
        e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
      );
      if (s) {
        const t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
        t && t.remove();
      }
    },
    M = (e, t) => {
      if (!e.slides[t]) return;
      const s = e.slides[t].querySelector('[loading="lazy"]');
      s && s.removeAttribute("loading");
    },
    k = (e) => {
      if (!e || e.destroyed || !e.params) return;
      let t = e.params.lazyPreloadPrevNext;
      const s = e.slides.length;
      if (!s || !t || t < 0) return;
      t = Math.min(t, s);
      const i =
          "auto" === e.params.slidesPerView
            ? e.slidesPerViewDynamic()
            : Math.ceil(e.params.slidesPerView),
        n = e.activeIndex,
        r = n + i - 1;
      if (e.params.rewind)
        for (let i = n - t; i <= r + t; i += 1) {
          const t = ((i % s) + s) % s;
          t !== n && t > r && M(e, t);
        }
      else
        for (let i = Math.max(r - t, 0); i <= Math.min(r + t, s - 1); i += 1)
          i !== n && i > r && M(e, i);
    };
  const z = {
    updateSize: function () {
      const e = this;
      let t, s;
      const i = e.el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : i.clientWidth),
        (s =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : i.clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === s && e.isVertical()) ||
          ((t =
            t -
            parseInt(b(i, "padding-left") || 0, 10) -
            parseInt(b(i, "padding-right") || 0, 10)),
          (s =
            s -
            parseInt(b(i, "padding-top") || 0, 10) -
            parseInt(b(i, "padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(s) && (s = 0),
          Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[t];
      }
      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }
      const i = e.params,
        {
          wrapperEl: n,
          slidesEl: r,
          size: a,
          rtlTranslate: o,
          wrongRTL: l,
        } = e,
        c = e.virtual && i.virtual.enabled,
        d = c ? e.virtual.slides.length : e.slides.length,
        u = g(r, `.${e.params.slideClass}, swiper-slide`),
        p = c ? e.virtual.slides.length : u.length;
      let f = [];
      const m = [],
        v = [];
      let w = i.slidesOffsetBefore;
      "function" == typeof w && (w = i.slidesOffsetBefore.call(e));
      let y = i.slidesOffsetAfter;
      "function" == typeof y && (y = i.slidesOffsetAfter.call(e));
      const E = e.snapGrid.length,
        T = e.slidesGrid.length;
      let x = i.spaceBetween,
        C = -w,
        O = 0,
        P = 0;
      if (void 0 === a) return;
      "string" == typeof x && x.indexOf("%") >= 0
        ? (x = (parseFloat(x.replace("%", "")) / 100) * a)
        : "string" == typeof x && (x = parseFloat(x)),
        (e.virtualSize = -x),
        u.forEach((e) => {
          o ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
            (e.style.marginBottom = ""),
            (e.style.marginTop = "");
        }),
        i.centeredSlides &&
          i.cssMode &&
          (h(n, "--swiper-centered-offset-before", ""),
          h(n, "--swiper-centered-offset-after", ""));
      const A = i.grid && i.grid.rows > 1 && e.grid;
      let L;
      A && e.grid.initSlides(p);
      const M =
        "auto" === i.slidesPerView &&
        i.breakpoints &&
        Object.keys(i.breakpoints).filter(
          (e) => void 0 !== i.breakpoints[e].slidesPerView
        ).length > 0;
      for (let n = 0; n < p; n += 1) {
        let r;
        if (
          ((L = 0),
          u[n] && (r = u[n]),
          A && e.grid.updateSlide(n, r, p, t),
          !u[n] || "none" !== b(r, "display"))
        ) {
          if ("auto" === i.slidesPerView) {
            M && (u[n].style[t("width")] = "");
            const a = getComputedStyle(r),
              o = r.style.transform,
              l = r.style.webkitTransform;
            if (
              (o && (r.style.transform = "none"),
              l && (r.style.webkitTransform = "none"),
              i.roundLengths)
            )
              L = e.isHorizontal() ? S(r, "width", !0) : S(r, "height", !0);
            else {
              const e = s(a, "width"),
                t = s(a, "padding-left"),
                i = s(a, "padding-right"),
                n = s(a, "margin-left"),
                o = s(a, "margin-right"),
                l = a.getPropertyValue("box-sizing");
              if (l && "border-box" === l) L = e + n + o;
              else {
                const { clientWidth: s, offsetWidth: a } = r;
                L = e + t + i + n + o + (a - s);
              }
            }
            o && (r.style.transform = o),
              l && (r.style.webkitTransform = l),
              i.roundLengths && (L = Math.floor(L));
          } else
            (L = (a - (i.slidesPerView - 1) * x) / i.slidesPerView),
              i.roundLengths && (L = Math.floor(L)),
              u[n] && (u[n].style[t("width")] = `${L}px`);
          u[n] && (u[n].swiperSlideSize = L),
            v.push(L),
            i.centeredSlides
              ? ((C = C + L / 2 + O / 2 + x),
                0 === O && 0 !== n && (C = C - a / 2 - x),
                0 === n && (C = C - a / 2 - x),
                Math.abs(C) < 0.001 && (C = 0),
                i.roundLengths && (C = Math.floor(C)),
                P % i.slidesPerGroup == 0 && f.push(C),
                m.push(C))
              : (i.roundLengths && (C = Math.floor(C)),
                (P - Math.min(e.params.slidesPerGroupSkip, P)) %
                  e.params.slidesPerGroup ==
                  0 && f.push(C),
                m.push(C),
                (C = C + L + x)),
            (e.virtualSize += L + x),
            (O = L),
            (P += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, a) + y),
        o &&
          l &&
          ("slide" === i.effect || "coverflow" === i.effect) &&
          (n.style.width = `${e.virtualSize + x}px`),
        i.setWrapperSize && (n.style[t("width")] = `${e.virtualSize + x}px`),
        A && e.grid.updateWrapperSize(L, f, t),
        !i.centeredSlides)
      ) {
        const t = [];
        for (let s = 0; s < f.length; s += 1) {
          let n = f[s];
          i.roundLengths && (n = Math.floor(n)),
            f[s] <= e.virtualSize - a && t.push(n);
        }
        (f = t),
          Math.floor(e.virtualSize - a) - Math.floor(f[f.length - 1]) > 1 &&
            f.push(e.virtualSize - a);
      }
      if (c && i.loop) {
        const t = v[0] + x;
        if (i.slidesPerGroup > 1) {
          const s = Math.ceil(
              (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                i.slidesPerGroup
            ),
            n = t * i.slidesPerGroup;
          for (let e = 0; e < s; e += 1) f.push(f[f.length - 1] + n);
        }
        for (
          let s = 0;
          s < e.virtual.slidesBefore + e.virtual.slidesAfter;
          s += 1
        )
          1 === i.slidesPerGroup && f.push(f[f.length - 1] + t),
            m.push(m[m.length - 1] + t),
            (e.virtualSize += t);
      }
      if ((0 === f.length && (f = [0]), 0 !== x)) {
        const s = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
        u.filter(
          (e, t) => !(i.cssMode && !i.loop) || t !== u.length - 1
        ).forEach((e) => {
          e.style[s] = `${x}px`;
        });
      }
      if (i.centeredSlides && i.centeredSlidesBounds) {
        let e = 0;
        v.forEach((t) => {
          e += t + (x || 0);
        }),
          (e -= x);
        const t = e - a;
        f = f.map((e) => (e < 0 ? -w : e > t ? t + y : e));
      }
      if (i.centerInsufficientSlides) {
        let e = 0;
        if (
          (v.forEach((t) => {
            e += t + (x || 0);
          }),
          (e -= x),
          e < a)
        ) {
          const t = (a - e) / 2;
          f.forEach((e, s) => {
            f[s] = e - t;
          }),
            m.forEach((e, s) => {
              m[s] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: u,
          snapGrid: f,
          slidesGrid: m,
          slidesSizesGrid: v,
        }),
        i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
      ) {
        h(n, "--swiper-centered-offset-before", -f[0] + "px"),
          h(
            n,
            "--swiper-centered-offset-after",
            e.size / 2 - v[v.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + s));
      }
      if (
        (p !== d && e.emit("slidesLengthChange"),
        f.length !== E &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        m.length !== T && e.emit("slidesGridLengthChange"),
        i.watchSlidesProgress && e.updateSlidesOffset(),
        !(c || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
      ) {
        const t = `${i.containerModifierClass}backface-hidden`,
          s = e.el.classList.contains(t);
        p <= i.maxBackfaceHiddenSlides
          ? s || e.el.classList.add(t)
          : s && e.el.classList.remove(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        i = t.virtual && t.params.virtual.enabled;
      let n,
        r = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const a = (e) => (i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          (t.visibleSlides || []).forEach((e) => {
            s.push(e);
          });
        else
          for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
            const e = t.activeIndex + n;
            if (e > t.slides.length && !i) break;
            s.push(a(e));
          }
      else s.push(a(t.activeIndex));
      for (n = 0; n < s.length; n += 1)
        if (void 0 !== s[n]) {
          const e = s[n].offsetHeight;
          r = e > r ? e : r;
        }
      (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides,
        s = e.isElement
          ? e.isHorizontal()
            ? e.wrapperEl.offsetLeft
            : e.wrapperEl.offsetTop
          : 0;
      for (let i = 0; i < t.length; i += 1)
        t[i].swiperSlideOffset =
          (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
          s -
          e.cssOverflowAdjustment();
    },
    updateSlidesProgress: function (e = (this && this.translate) || 0) {
      const t = this,
        s = t.params,
        { slides: i, rtlTranslate: n, snapGrid: r } = t;
      if (0 === i.length) return;
      void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
      let a = -e;
      n && (a = e),
        i.forEach((e) => {
          e.classList.remove(s.slideVisibleClass);
        }),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      let o = s.spaceBetween;
      "string" == typeof o && o.indexOf("%") >= 0
        ? (o = (parseFloat(o.replace("%", "")) / 100) * t.size)
        : "string" == typeof o && (o = parseFloat(o));
      for (let e = 0; e < i.length; e += 1) {
        const l = i[e];
        let c = l.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (c -= i[0].swiperSlideOffset);
        const d =
            (a + (s.centeredSlides ? t.minTranslate() : 0) - c) /
            (l.swiperSlideSize + o),
          u =
            (a - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - c) /
            (l.swiperSlideSize + o),
          p = -(a - c),
          f = p + t.slidesSizesGrid[e];
        ((p >= 0 && p < t.size - 1) ||
          (f > 1 && f <= t.size) ||
          (p <= 0 && f >= t.size)) &&
          (t.visibleSlides.push(l),
          t.visibleSlidesIndexes.push(e),
          i[e].classList.add(s.slideVisibleClass)),
          (l.progress = n ? -d : d),
          (l.originalProgress = n ? -u : u);
      }
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * s) || 0;
      }
      const s = t.params,
        i = t.maxTranslate() - t.minTranslate();
      let { progress: n, isBeginning: r, isEnd: a, progressLoop: o } = t;
      const l = r,
        c = a;
      if (0 === i) (n = 0), (r = !0), (a = !0);
      else {
        n = (e - t.minTranslate()) / i;
        const s = Math.abs(e - t.minTranslate()) < 1,
          o = Math.abs(e - t.maxTranslate()) < 1;
        (r = s || n <= 0), (a = o || n >= 1), s && (n = 0), o && (n = 1);
      }
      if (s.loop) {
        const s = t.getSlideIndexByData(0),
          i = t.getSlideIndexByData(t.slides.length - 1),
          n = t.slidesGrid[s],
          r = t.slidesGrid[i],
          a = t.slidesGrid[t.slidesGrid.length - 1],
          l = Math.abs(e);
        (o = l >= n ? (l - n) / a : (l + a - r) / a), o > 1 && (o -= 1);
      }
      Object.assign(t, {
        progress: n,
        progressLoop: o,
        isBeginning: r,
        isEnd: a,
      }),
        (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
          t.updateSlidesProgress(e),
        r && !l && t.emit("reachBeginning toEdge"),
        a && !c && t.emit("reachEnd toEdge"),
        ((l && !r) || (c && !a)) && t.emit("fromEdge"),
        t.emit("progress", n);
    },
    updateSlidesClasses: function () {
      const e = this,
        { slides: t, params: s, slidesEl: i, activeIndex: n } = e,
        r = e.virtual && s.virtual.enabled,
        a = (e) => g(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
      let o;
      if (
        (t.forEach((e) => {
          e.classList.remove(
            s.slideActiveClass,
            s.slideNextClass,
            s.slidePrevClass
          );
        }),
        r)
      )
        if (s.loop) {
          let t = n - e.virtual.slidesBefore;
          t < 0 && (t = e.virtual.slides.length + t),
            t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
            (o = a(`[data-swiper-slide-index="${t}"]`));
        } else o = a(`[data-swiper-slide-index="${n}"]`);
      else o = t[n];
      if (o) {
        o.classList.add(s.slideActiveClass);
        let e = (function (e, t) {
          const s = [];
          for (; e.nextElementSibling; ) {
            const i = e.nextElementSibling;
            t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
          }
          return s;
        })(o, `.${s.slideClass}, swiper-slide`)[0];
        s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass);
        let i = (function (e, t) {
          const s = [];
          for (; e.previousElementSibling; ) {
            const i = e.previousElementSibling;
            t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
          }
          return s;
        })(o, `.${s.slideClass}, swiper-slide`)[0];
        s.loop && 0 === !i && (i = t[t.length - 1]),
          i && i.classList.add(s.slidePrevClass);
      }
      e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
          snapGrid: i,
          params: n,
          activeIndex: r,
          realIndex: a,
          snapIndex: o,
        } = t;
      let l,
        c = e;
      const d = (e) => {
        let s = e - t.virtual.slidesBefore;
        return (
          s < 0 && (s = t.virtual.slides.length + s),
          s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
          s
        );
      };
      if (
        (void 0 === c &&
          (c = (function (e) {
            const { slidesGrid: t, params: s } = e,
              i = e.rtlTranslate ? e.translate : -e.translate;
            let n;
            for (let e = 0; e < t.length; e += 1)
              void 0 !== t[e + 1]
                ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                  ? (n = e)
                  : i >= t[e] && i < t[e + 1] && (n = e + 1)
                : i >= t[e] && (n = e);
            return (
              s.normalizeSlideIndex && (n < 0 || void 0 === n) && (n = 0), n
            );
          })(t)),
        i.indexOf(s) >= 0)
      )
        l = i.indexOf(s);
      else {
        const e = Math.min(n.slidesPerGroupSkip, c);
        l = e + Math.floor((c - e) / n.slidesPerGroup);
      }
      if ((l >= i.length && (l = i.length - 1), c === r))
        return (
          l !== o && ((t.snapIndex = l), t.emit("snapIndexChange")),
          void (
            t.params.loop &&
            t.virtual &&
            t.params.virtual.enabled &&
            (t.realIndex = d(c))
          )
        );
      let u;
      (u =
        t.virtual && n.virtual.enabled && n.loop
          ? d(c)
          : t.slides[c]
          ? parseInt(
              t.slides[c].getAttribute("data-swiper-slide-index") || c,
              10
            )
          : c),
        Object.assign(t, {
          previousSnapIndex: o,
          snapIndex: l,
          previousRealIndex: a,
          realIndex: u,
          previousIndex: r,
          activeIndex: c,
        }),
        t.initialized && k(t),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        a !== u && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        s = t.params,
        i = e.closest(`.${s.slideClass}, swiper-slide`);
      let n,
        r = !1;
      if (i)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === i) {
            (r = !0), (n = e);
            break;
          }
      if (!i || !r)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = i),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              i.getAttribute("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = n),
        s.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  const j = {
    getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
      const { params: t, rtlTranslate: s, translate: i, wrapperEl: n } = this;
      if (t.virtualTranslate) return s ? -i : i;
      if (t.cssMode) return i;
      let r = u(n, e);
      return (r += this.cssOverflowAdjustment()), s && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
        { rtlTranslate: i, params: n, wrapperEl: r, progress: a } = s;
      let o,
        l = 0,
        c = 0;
      s.isHorizontal() ? (l = i ? -e : e) : (c = e),
        n.roundLengths && ((l = Math.floor(l)), (c = Math.floor(c))),
        (s.previousTranslate = s.translate),
        (s.translate = s.isHorizontal() ? l : c),
        n.cssMode
          ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
              ? -l
              : -c)
          : n.virtualTranslate ||
            (s.isHorizontal()
              ? (l -= s.cssOverflowAdjustment())
              : (c -= s.cssOverflowAdjustment()),
            (r.style.transform = `translate3d(${l}px, ${c}px, 0px)`));
      const d = s.maxTranslate() - s.minTranslate();
      (o = 0 === d ? 0 : (e - s.minTranslate()) / d),
        o !== a && s.updateProgress(e),
        s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e = 0, t = this.params.speed, s = !0, i = !0, n) {
      const r = this,
        { params: a, wrapperEl: o } = r;
      if (r.animating && a.preventInteractionOnTransition) return !1;
      const l = r.minTranslate(),
        c = r.maxTranslate();
      let d;
      if (
        ((d = i && e > l ? l : i && e < c ? c : e),
        r.updateProgress(d),
        a.cssMode)
      ) {
        const e = r.isHorizontal();
        if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -d;
        else {
          if (!r.support.smoothScroll)
            return (
              m({ swiper: r, targetPosition: -d, side: e ? "left" : "top" }), !0
            );
          o.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (r.setTransition(0),
            r.setTranslate(d),
            s &&
              (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd")))
          : (r.setTransition(t),
            r.setTranslate(d),
            s &&
              (r.emit("beforeTransitionStart", t, n),
              r.emit("transitionStart")),
            r.animating ||
              ((r.animating = !0),
              r.onTranslateToWrapperTransitionEnd ||
                (r.onTranslateToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.wrapperEl.removeEventListener(
                      "transitionend",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    (r.onTranslateToWrapperTransitionEnd = null),
                    delete r.onTranslateToWrapperTransitionEnd,
                    s && r.emit("transitionEnd"));
                }),
              r.wrapperEl.addEventListener(
                "transitionend",
                r.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function I({ swiper: e, runCallbacks: t, direction: s, step: i }) {
    const { activeIndex: n, previousIndex: r } = e;
    let a = s;
    if (
      (a || (a = n > r ? "next" : n < r ? "prev" : "reset"),
      e.emit(`transition${i}`),
      t && n !== r)
    ) {
      if ("reset" === a) return void e.emit(`slideResetTransition${i}`);
      e.emit(`slideChangeTransition${i}`),
        "next" === a
          ? e.emit(`slideNextTransition${i}`)
          : e.emit(`slidePrevTransition${i}`);
    }
  }
  const R = {
    slideTo: function (e = 0, t = this.params.speed, s = !0, i, n) {
      "string" == typeof e && (e = parseInt(e, 10));
      const r = this;
      let a = e;
      a < 0 && (a = 0);
      const {
        params: o,
        snapGrid: l,
        slidesGrid: c,
        previousIndex: d,
        activeIndex: u,
        rtlTranslate: p,
        wrapperEl: f,
        enabled: h,
      } = r;
      if ((r.animating && o.preventInteractionOnTransition) || (!h && !i && !n))
        return !1;
      const g = Math.min(r.params.slidesPerGroupSkip, a);
      let v = g + Math.floor((a - g) / r.params.slidesPerGroup);
      v >= l.length && (v = l.length - 1);
      const b = -l[v];
      if (o.normalizeSlideIndex)
        for (let e = 0; e < c.length; e += 1) {
          const t = -Math.floor(100 * b),
            s = Math.floor(100 * c[e]),
            i = Math.floor(100 * c[e + 1]);
          void 0 !== c[e + 1]
            ? t >= s && t < i - (i - s) / 2
              ? (a = e)
              : t >= s && t < i && (a = e + 1)
            : t >= s && (a = e);
        }
      if (r.initialized && a !== u) {
        if (!r.allowSlideNext && b < r.translate && b < r.minTranslate())
          return !1;
        if (
          !r.allowSlidePrev &&
          b > r.translate &&
          b > r.maxTranslate() &&
          (u || 0) !== a
        )
          return !1;
      }
      let w;
      if (
        (a !== (d || 0) && s && r.emit("beforeSlideChangeStart"),
        r.updateProgress(b),
        (w = a > u ? "next" : a < u ? "prev" : "reset"),
        (p && -b === r.translate) || (!p && b === r.translate))
      )
        return (
          r.updateActiveIndex(a),
          o.autoHeight && r.updateAutoHeight(),
          r.updateSlidesClasses(),
          "slide" !== o.effect && r.setTranslate(b),
          "reset" !== w && (r.transitionStart(s, w), r.transitionEnd(s, w)),
          !1
        );
      if (o.cssMode) {
        const e = r.isHorizontal(),
          s = p ? b : -b;
        if (0 === t) {
          const t = r.virtual && r.params.virtual.enabled;
          t &&
            ((r.wrapperEl.style.scrollSnapType = "none"),
            (r._immediateVirtual = !0)),
            t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
              ? ((r._cssModeVirtualInitialSet = !0),
                requestAnimationFrame(() => {
                  f[e ? "scrollLeft" : "scrollTop"] = s;
                }))
              : (f[e ? "scrollLeft" : "scrollTop"] = s),
            t &&
              requestAnimationFrame(() => {
                (r.wrapperEl.style.scrollSnapType = ""),
                  (r._immediateVirtual = !1);
              });
        } else {
          if (!r.support.smoothScroll)
            return (
              m({ swiper: r, targetPosition: s, side: e ? "left" : "top" }), !0
            );
          f.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
        }
        return !0;
      }
      return (
        r.setTransition(t),
        r.setTranslate(b),
        r.updateActiveIndex(a),
        r.updateSlidesClasses(),
        r.emit("beforeTransitionStart", t, i),
        r.transitionStart(s, w),
        0 === t
          ? r.transitionEnd(s, w)
          : r.animating ||
            ((r.animating = !0),
            r.onSlideToWrapperTransitionEnd ||
              (r.onSlideToWrapperTransitionEnd = function (e) {
                r &&
                  !r.destroyed &&
                  e.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  (r.onSlideToWrapperTransitionEnd = null),
                  delete r.onSlideToWrapperTransitionEnd,
                  r.transitionEnd(s, w));
              }),
            r.wrapperEl.addEventListener(
              "transitionend",
              r.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
      if ("string" == typeof e) {
        e = parseInt(e, 10);
      }
      const n = this;
      let r = e;
      return (
        n.params.loop &&
          (n.virtual && n.params.virtual.enabled
            ? (r += n.virtual.slidesBefore)
            : (r = n.getSlideIndexByData(r))),
        n.slideTo(r, t, s, i)
      );
    },
    slideNext: function (e = this.params.speed, t = !0, s) {
      const i = this,
        { enabled: n, params: r, animating: a } = i;
      if (!n) return i;
      let o = r.slidesPerGroup;
      "auto" === r.slidesPerView &&
        1 === r.slidesPerGroup &&
        r.slidesPerGroupAuto &&
        (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
      const l = i.activeIndex < r.slidesPerGroupSkip ? 1 : o,
        c = i.virtual && r.virtual.enabled;
      if (r.loop) {
        if (a && !c && r.loopPreventsSliding) return !1;
        i.loopFix({ direction: "next" }),
          (i._clientLeft = i.wrapperEl.clientLeft);
      }
      return r.rewind && i.isEnd
        ? i.slideTo(0, e, t, s)
        : i.slideTo(i.activeIndex + l, e, t, s);
    },
    slidePrev: function (e = this.params.speed, t = !0, s) {
      const i = this,
        {
          params: n,
          snapGrid: r,
          slidesGrid: a,
          rtlTranslate: o,
          enabled: l,
          animating: c,
        } = i;
      if (!l) return i;
      const d = i.virtual && n.virtual.enabled;
      if (n.loop) {
        if (c && !d && n.loopPreventsSliding) return !1;
        i.loopFix({ direction: "prev" }),
          (i._clientLeft = i.wrapperEl.clientLeft);
      }
      function u(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const p = u(o ? i.translate : -i.translate),
        f = r.map((e) => u(e));
      let h = r[f.indexOf(p) - 1];
      if (void 0 === h && n.cssMode) {
        let e;
        r.forEach((t, s) => {
          p >= t && (e = s);
        }),
          void 0 !== e && (h = r[e > 0 ? e - 1 : e]);
      }
      let m = 0;
      if (
        (void 0 !== h &&
          ((m = a.indexOf(h)),
          m < 0 && (m = i.activeIndex - 1),
          "auto" === n.slidesPerView &&
            1 === n.slidesPerGroup &&
            n.slidesPerGroupAuto &&
            ((m = m - i.slidesPerViewDynamic("previous", !0) + 1),
            (m = Math.max(m, 0)))),
        n.rewind && i.isBeginning)
      ) {
        const n =
          i.params.virtual && i.params.virtual.enabled && i.virtual
            ? i.virtual.slides.length - 1
            : i.slides.length - 1;
        return i.slideTo(n, e, t, s);
      }
      return i.slideTo(m, e, t, s);
    },
    slideReset: function (e = this.params.speed, t = !0, s) {
      return this.slideTo(this.activeIndex, e, t, s);
    },
    slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
      const n = this;
      let r = n.activeIndex;
      const a = Math.min(n.params.slidesPerGroupSkip, r),
        o = a + Math.floor((r - a) / n.params.slidesPerGroup),
        l = n.rtlTranslate ? n.translate : -n.translate;
      if (l >= n.snapGrid[o]) {
        const e = n.snapGrid[o];
        l - e > (n.snapGrid[o + 1] - e) * i && (r += n.params.slidesPerGroup);
      } else {
        const e = n.snapGrid[o - 1];
        l - e <= (n.snapGrid[o] - e) * i && (r -= n.params.slidesPerGroup);
      }
      return (
        (r = Math.max(r, 0)),
        (r = Math.min(r, n.slidesGrid.length - 1)),
        n.slideTo(r, e, t, s)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, slidesEl: s } = e,
        i =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let n,
        r = e.clickedIndex;
      const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
      if (t.loop) {
        if (e.animating) return;
        (n = parseInt(
          e.clickedSlide.getAttribute("data-swiper-slide-index"),
          10
        )),
          t.centeredSlides
            ? r < e.loopedSlides - i / 2 ||
              r > e.slides.length - e.loopedSlides + i / 2
              ? (e.loopFix(),
                (r = e.getSlideIndex(
                  g(s, `${a}[data-swiper-slide-index="${n}"]`)[0]
                )),
                c(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r)
            : r > e.slides.length - i
            ? (e.loopFix(),
              (r = e.getSlideIndex(
                g(s, `${a}[data-swiper-slide-index="${n}"]`)[0]
              )),
              c(() => {
                e.slideTo(r);
              }))
            : e.slideTo(r);
      } else e.slideTo(r);
    },
  };
  const _ = {
    loopCreate: function (e) {
      const t = this,
        { params: s, slidesEl: i } = t;
      if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
      g(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
        e.setAttribute("data-swiper-slide-index", t);
      }),
        t.loopFix({
          slideRealIndex: e,
          direction: s.centeredSlides ? void 0 : "next",
        });
    },
    loopFix: function ({
      slideRealIndex: e,
      slideTo: t = !0,
      direction: s,
      setTranslate: i,
      activeSlideIndex: n,
      byController: r,
      byMousewheel: a,
    } = {}) {
      const o = this;
      if (!o.params.loop) return;
      o.emit("beforeLoopFix");
      const {
        slides: l,
        allowSlidePrev: c,
        allowSlideNext: d,
        slidesEl: u,
        params: p,
      } = o;
      if (
        ((o.allowSlidePrev = !0),
        (o.allowSlideNext = !0),
        o.virtual && p.virtual.enabled)
      )
        return (
          t &&
            (p.centeredSlides || 0 !== o.snapIndex
              ? p.centeredSlides && o.snapIndex < p.slidesPerView
                ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
                : o.snapIndex === o.snapGrid.length - 1 &&
                  o.slideTo(o.virtual.slidesBefore, 0, !1, !0)
              : o.slideTo(o.virtual.slides.length, 0, !1, !0)),
          (o.allowSlidePrev = c),
          (o.allowSlideNext = d),
          void o.emit("loopFix")
        );
      const f =
        "auto" === p.slidesPerView
          ? o.slidesPerViewDynamic()
          : Math.ceil(parseFloat(p.slidesPerView, 10));
      let h = p.loopedSlides || f;
      h % p.slidesPerGroup != 0 &&
        (h += p.slidesPerGroup - (h % p.slidesPerGroup)),
        (o.loopedSlides = h);
      const m = [],
        g = [];
      let v = o.activeIndex;
      void 0 === n
        ? (n = o.getSlideIndex(
            o.slides.filter((e) => e.classList.contains(p.slideActiveClass))[0]
          ))
        : (v = n);
      const b = "next" === s || !s,
        w = "prev" === s || !s;
      let y = 0,
        S = 0;
      if (n < h) {
        y = Math.max(h - n, p.slidesPerGroup);
        for (let e = 0; e < h - n; e += 1) {
          const t = e - Math.floor(e / l.length) * l.length;
          m.push(l.length - t - 1);
        }
      } else if (n > o.slides.length - 2 * h) {
        S = Math.max(n - (o.slides.length - 2 * h), p.slidesPerGroup);
        for (let e = 0; e < S; e += 1) {
          const t = e - Math.floor(e / l.length) * l.length;
          g.push(t);
        }
      }
      if (
        (w &&
          m.forEach((e) => {
            (o.slides[e].swiperLoopMoveDOM = !0),
              u.prepend(o.slides[e]),
              (o.slides[e].swiperLoopMoveDOM = !1);
          }),
        b &&
          g.forEach((e) => {
            (o.slides[e].swiperLoopMoveDOM = !0),
              u.append(o.slides[e]),
              (o.slides[e].swiperLoopMoveDOM = !1);
          }),
        o.recalcSlides(),
        "auto" === p.slidesPerView && o.updateSlides(),
        p.watchSlidesProgress && o.updateSlidesOffset(),
        t)
      )
        if (m.length > 0 && w)
          if (void 0 === e) {
            const e = o.slidesGrid[v],
              t = o.slidesGrid[v + y] - e;
            a
              ? o.setTranslate(o.translate - t)
              : (o.slideTo(v + y, 0, !1, !0),
                i && (o.touches[o.isHorizontal() ? "startX" : "startY"] += t));
          } else i && o.slideToLoop(e, 0, !1, !0);
        else if (g.length > 0 && b)
          if (void 0 === e) {
            const e = o.slidesGrid[v],
              t = o.slidesGrid[v - S] - e;
            a
              ? o.setTranslate(o.translate - t)
              : (o.slideTo(v - S, 0, !1, !0),
                i && (o.touches[o.isHorizontal() ? "startX" : "startY"] += t));
          } else o.slideToLoop(e, 0, !1, !0);
      if (
        ((o.allowSlidePrev = c),
        (o.allowSlideNext = d),
        o.controller && o.controller.control && !r)
      ) {
        const t = {
          slideRealIndex: e,
          slideTo: !1,
          direction: s,
          setTranslate: i,
          activeSlideIndex: n,
          byController: !0,
        };
        Array.isArray(o.controller.control)
          ? o.controller.control.forEach((e) => {
              !e.destroyed && e.params.loop && e.loopFix(t);
            })
          : o.controller.control instanceof o.constructor &&
            o.controller.control.params.loop &&
            o.controller.control.loopFix(t);
      }
      o.emit("loopFix");
    },
    loopDestroy: function () {
      const e = this,
        { params: t, slidesEl: s } = e;
      if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
      e.recalcSlides();
      const i = [];
      e.slides.forEach((e) => {
        const t =
          void 0 === e.swiperSlideIndex
            ? 1 * e.getAttribute("data-swiper-slide-index")
            : e.swiperSlideIndex;
        i[t] = e;
      }),
        e.slides.forEach((e) => {
          e.removeAttribute("data-swiper-slide-index");
        }),
        i.forEach((e) => {
          s.append(e);
        }),
        e.recalcSlides(),
        e.slideTo(e.realIndex, 0);
    },
  };
  function B(e) {
    const t = this,
      s = a(),
      i = l(),
      n = t.touchEventsData;
    n.evCache.push(e);
    const { params: r, touches: o, enabled: c } = t;
    if (!c) return;
    if (!r.simulateTouch && "mouse" === e.pointerType) return;
    if (t.animating && r.preventInteractionOnTransition) return;
    !t.animating && r.cssMode && r.loop && t.loopFix();
    let u = e;
    u.originalEvent && (u = u.originalEvent);
    let p = u.target;
    if ("wrapper" === r.touchEventsTarget && !t.wrapperEl.contains(p)) return;
    if ("which" in u && 3 === u.which) return;
    if ("button" in u && u.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    const f = !!r.noSwipingClass && "" !== r.noSwipingClass,
      h = e.composedPath ? e.composedPath() : e.path;
    f && u.target && u.target.shadowRoot && h && (p = h[0]);
    const m = r.noSwipingSelector
        ? r.noSwipingSelector
        : `.${r.noSwipingClass}`,
      g = !(!u.target || !u.target.shadowRoot);
    if (
      r.noSwiping &&
      (g
        ? (function (e, t = this) {
            return (function t(s) {
              if (!s || s === a() || s === l()) return null;
              s.assignedSlot && (s = s.assignedSlot);
              const i = s.closest(e);
              return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
            })(t);
          })(m, p)
        : p.closest(m))
    )
      return void (t.allowClick = !0);
    if (r.swipeHandler && !p.closest(r.swipeHandler)) return;
    (o.currentX = u.pageX), (o.currentY = u.pageY);
    const v = o.currentX,
      b = o.currentY,
      w = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
      y = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
    if (w && (v <= y || v >= i.innerWidth - y)) {
      if ("prevent" !== w) return;
      e.preventDefault();
    }
    Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (o.startX = v),
      (o.startY = b),
      (n.touchStartTime = d()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      r.threshold > 0 && (n.allowThresholdMove = !1);
    let S = !0;
    p.matches(n.focusableElements) &&
      ((S = !1), "SELECT" === p.nodeName && (n.isTouched = !1)),
      s.activeElement &&
        s.activeElement.matches(n.focusableElements) &&
        s.activeElement !== p &&
        s.activeElement.blur();
    const E = S && t.allowTouchMove && r.touchStartPreventDefault;
    (!r.touchStartForcePreventDefault && !E) ||
      p.isContentEditable ||
      u.preventDefault(),
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !r.cssMode &&
        t.freeMode.onTouchStart(),
      t.emit("touchStart", u);
  }
  function N(e) {
    const t = a(),
      s = this,
      i = s.touchEventsData,
      { params: n, touches: r, rtlTranslate: o, enabled: l } = s;
    if (!l) return;
    if (!n.simulateTouch && "mouse" === e.pointerType) return;
    let c = e;
    if ((c.originalEvent && (c = c.originalEvent), !i.isTouched))
      return void (
        i.startMoving &&
        i.isScrolling &&
        s.emit("touchMoveOpposite", c)
      );
    const u = i.evCache.findIndex((e) => e.pointerId === c.pointerId);
    u >= 0 && (i.evCache[u] = c);
    const p = i.evCache.length > 1 ? i.evCache[0] : c,
      f = p.pageX,
      h = p.pageY;
    if (c.preventedByNestedSwiper) return (r.startX = f), void (r.startY = h);
    if (!s.allowTouchMove)
      return (
        c.target.matches(i.focusableElements) || (s.allowClick = !1),
        void (
          i.isTouched &&
          (Object.assign(r, {
            startX: f,
            startY: h,
            prevX: s.touches.currentX,
            prevY: s.touches.currentY,
            currentX: f,
            currentY: h,
          }),
          (i.touchStartTime = d()))
        )
      );
    if (n.touchReleaseOnEdges && !n.loop)
      if (s.isVertical()) {
        if (
          (h < r.startY && s.translate <= s.maxTranslate()) ||
          (h > r.startY && s.translate >= s.minTranslate())
        )
          return (i.isTouched = !1), void (i.isMoved = !1);
      } else if (
        (f < r.startX && s.translate <= s.maxTranslate()) ||
        (f > r.startX && s.translate >= s.minTranslate())
      )
        return;
    if (
      t.activeElement &&
      c.target === t.activeElement &&
      c.target.matches(i.focusableElements)
    )
      return (i.isMoved = !0), void (s.allowClick = !1);
    if (
      (i.allowTouchCallbacks && s.emit("touchMove", c),
      c.targetTouches && c.targetTouches.length > 1)
    )
      return;
    (r.currentX = f), (r.currentY = h);
    const m = r.currentX - r.startX,
      g = r.currentY - r.startY;
    if (s.params.threshold && Math.sqrt(m ** 2 + g ** 2) < s.params.threshold)
      return;
    if (void 0 === i.isScrolling) {
      let e;
      (s.isHorizontal() && r.currentY === r.startY) ||
      (s.isVertical() && r.currentX === r.startX)
        ? (i.isScrolling = !1)
        : m * m + g * g >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(g), Math.abs(m))) / Math.PI),
          (i.isScrolling = s.isHorizontal()
            ? e > n.touchAngle
            : 90 - e > n.touchAngle));
    }
    if (
      (i.isScrolling && s.emit("touchMoveOpposite", c),
      void 0 === i.startMoving &&
        ((r.currentX === r.startX && r.currentY === r.startY) ||
          (i.startMoving = !0)),
      i.isScrolling ||
        (s.zoom &&
          s.params.zoom &&
          s.params.zoom.enabled &&
          i.evCache.length > 1))
    )
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    (s.allowClick = !1),
      !n.cssMode && c.cancelable && c.preventDefault(),
      n.touchMoveStopPropagation && !n.nested && c.stopPropagation();
    let v = s.isHorizontal() ? m : g,
      b = s.isHorizontal()
        ? r.currentX - r.previousX
        : r.currentY - r.previousY;
    n.oneWayMovement &&
      ((v = Math.abs(v) * (o ? 1 : -1)), (b = Math.abs(b) * (o ? 1 : -1))),
      (r.diff = v),
      (v *= n.touchRatio),
      o && ((v = -v), (b = -b));
    const w = s.touchesDirection;
    (s.swipeDirection = v > 0 ? "prev" : "next"),
      (s.touchesDirection = b > 0 ? "prev" : "next");
    const y = s.params.loop && !n.cssMode;
    if (!i.isMoved) {
      if (
        (y && s.loopFix({ direction: s.swipeDirection }),
        (i.startTranslate = s.getTranslate()),
        s.setTransition(0),
        s.animating)
      ) {
        const e = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
        });
        s.wrapperEl.dispatchEvent(e);
      }
      (i.allowMomentumBounce = !1),
        !n.grabCursor ||
          (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
          s.setGrabCursor(!0),
        s.emit("sliderFirstMove", c);
    }
    let S;
    i.isMoved &&
      w !== s.touchesDirection &&
      y &&
      Math.abs(v) >= 1 &&
      (s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }), (S = !0)),
      s.emit("sliderMove", c),
      (i.isMoved = !0),
      (i.currentTranslate = v + i.startTranslate);
    let E = !0,
      T = n.resistanceRatio;
    if (
      (n.touchReleaseOnEdges && (T = 0),
      v > 0
        ? (y &&
            !S &&
            i.currentTranslate >
              (n.centeredSlides
                ? s.minTranslate() - s.size / 2
                : s.minTranslate()) &&
            s.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          i.currentTranslate > s.minTranslate() &&
            ((E = !1),
            n.resistance &&
              (i.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + i.startTranslate + v) ** T)))
        : v < 0 &&
          (y &&
            !S &&
            i.currentTranslate <
              (n.centeredSlides
                ? s.maxTranslate() + s.size / 2
                : s.maxTranslate()) &&
            s.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                s.slides.length -
                ("auto" === n.slidesPerView
                  ? s.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(n.slidesPerView, 10))),
            }),
          i.currentTranslate < s.maxTranslate() &&
            ((E = !1),
            n.resistance &&
              (i.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - i.startTranslate - v) ** T))),
      E && (c.preventedByNestedSwiper = !0),
      !s.allowSlideNext &&
        "next" === s.swipeDirection &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev &&
        "prev" === s.swipeDirection &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      s.allowSlidePrev ||
        s.allowSlideNext ||
        (i.currentTranslate = i.startTranslate),
      n.threshold > 0)
    ) {
      if (!(Math.abs(v) > n.threshold || i.allowThresholdMove))
        return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (i.currentTranslate = i.startTranslate),
          void (r.diff = s.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY)
        );
    }
    n.followFinger &&
      !n.cssMode &&
      (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
        n.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
      s.params.freeMode &&
        n.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
      s.updateProgress(i.currentTranslate),
      s.setTranslate(i.currentTranslate));
  }
  function D(e) {
    const t = this,
      s = t.touchEventsData,
      i = s.evCache.findIndex((t) => t.pointerId === e.pointerId);
    if (
      (i >= 0 && s.evCache.splice(i, 1),
      ["pointercancel", "pointerout", "pointerleave"].includes(e.type))
    ) {
      if (
        !(
          "pointercancel" === e.type &&
          (t.browser.isSafari || t.browser.isWebView)
        )
      )
        return;
    }
    const {
      params: n,
      touches: r,
      rtlTranslate: a,
      slidesGrid: o,
      enabled: l,
    } = t;
    if (!l) return;
    if (!n.simulateTouch && "mouse" === e.pointerType) return;
    let u = e;
    if (
      (u.originalEvent && (u = u.originalEvent),
      s.allowTouchCallbacks && t.emit("touchEnd", u),
      (s.allowTouchCallbacks = !1),
      !s.isTouched)
    )
      return (
        s.isMoved && n.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        void (s.startMoving = !1)
      );
    n.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const p = d(),
      f = p - s.touchStartTime;
    if (t.allowClick) {
      const e = u.path || (u.composedPath && u.composedPath());
      t.updateClickedSlide((e && e[0]) || u.target),
        t.emit("tap click", u),
        f < 300 &&
          p - s.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", u);
    }
    if (
      ((s.lastClickTime = d()),
      c(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        0 === r.diff ||
        s.currentTranslate === s.startTranslate)
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let h;
    if (
      ((s.isTouched = !1),
      (s.isMoved = !1),
      (s.startMoving = !1),
      (h = n.followFinger
        ? a
          ? t.translate
          : -t.translate
        : -s.currentTranslate),
      n.cssMode)
    )
      return;
    if (t.params.freeMode && n.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: h });
    let m = 0,
      g = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < o.length;
      e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
    ) {
      const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      void 0 !== o[e + t]
        ? h >= o[e] && h < o[e + t] && ((m = e), (g = o[e + t] - o[e]))
        : h >= o[e] && ((m = e), (g = o[o.length - 1] - o[o.length - 2]));
    }
    let v = null,
      b = null;
    n.rewind &&
      (t.isBeginning
        ? (b =
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (v = 0));
    const w = (h - o[m]) / g,
      y = m < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    if (f > n.longSwipesMs) {
      if (!n.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (w >= n.longSwipesRatio
          ? t.slideTo(n.rewind && t.isEnd ? v : m + y)
          : t.slideTo(m)),
        "prev" === t.swipeDirection &&
          (w > 1 - n.longSwipesRatio
            ? t.slideTo(m + y)
            : null !== b && w < 0 && Math.abs(w) > n.longSwipesRatio
            ? t.slideTo(b)
            : t.slideTo(m));
    } else {
      if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (u.target === t.navigation.nextEl || u.target === t.navigation.prevEl)
        ? u.target === t.navigation.nextEl
          ? t.slideTo(m + y)
          : t.slideTo(m)
        : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : m + y),
          "prev" === t.swipeDirection && t.slideTo(null !== b ? b : m));
    }
  }
  function F() {
    const e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: n, snapGrid: r } = e,
      a = e.virtual && e.params.virtual.enabled;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses();
    const o = a && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
    !e.isEnd ||
    e.isBeginning ||
    e.params.centeredSlides ||
    o
      ? e.params.loop && !a
        ? e.slideToLoop(e.realIndex, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0)
      : e.slideTo(e.slides.length - 1, 0, !1, !0),
      e.autoplay &&
        e.autoplay.running &&
        e.autoplay.paused &&
        (clearTimeout(e.autoplay.resizeTimeout),
        (e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.resume();
        }, 500))),
      (e.allowSlidePrev = n),
      (e.allowSlideNext = i),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function G(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function $() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
    if (!i) return;
    let n;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
      n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  function q(e) {
    const t = this;
    L(t, e.target),
      t.params.cssMode ||
        ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
        t.update();
  }
  let H = !1;
  function V() {}
  const U = (e, t) => {
    const s = a(),
      { params: i, el: n, wrapperEl: r, device: o } = e,
      l = !!i.nested,
      c = "on" === t ? "addEventListener" : "removeEventListener",
      d = t;
    n[c]("pointerdown", e.onTouchStart, { passive: !1 }),
      s[c]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
      s[c]("pointerup", e.onTouchEnd, { passive: !0 }),
      s[c]("pointercancel", e.onTouchEnd, { passive: !0 }),
      s[c]("pointerout", e.onTouchEnd, { passive: !0 }),
      s[c]("pointerleave", e.onTouchEnd, { passive: !0 }),
      (i.preventClicks || i.preventClicksPropagation) &&
        n[c]("click", e.onClick, !0),
      i.cssMode && r[c]("scroll", e.onScroll),
      i.updateOnWindowResize
        ? e[d](
            o.ios || o.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            F,
            !0
          )
        : e[d]("observerUpdate", F, !0),
      n[c]("load", e.onLoad, { capture: !0 });
  };
  const W = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  const X = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function Y(e, t) {
    return function (s = {}) {
      const i = Object.keys(s)[0],
        n = s[i];
      "object" == typeof n && null !== n
        ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
            !0 === e[i] &&
            (e[i] = { auto: !0 }),
          i in e && "enabled" in n
            ? (!0 === e[i] && (e[i] = { enabled: !0 }),
              "object" != typeof e[i] ||
                "enabled" in e[i] ||
                (e[i].enabled = !0),
              e[i] || (e[i] = { enabled: !1 }),
              f(t, s))
            : f(t, s))
        : f(t, s);
    };
  }
  const J = {
      eventsEmitter: A,
      update: z,
      translate: j,
      transition: {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`),
            s.emit("setTransition", e, t);
        },
        transitionStart: function (e = !0, t) {
          const s = this,
            { params: i } = s;
          i.cssMode ||
            (i.autoHeight && s.updateAutoHeight(),
            I({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e = !0, t) {
          const s = this,
            { params: i } = s;
          (s.animating = !1),
            i.cssMode ||
              (s.setTransition(0),
              I({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: R,
      loop: _,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const s =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          t.isElement && (t.__preventObserver__ = !0),
            (s.style.cursor = "move"),
            (s.style.cursor = e ? "grabbing" : "grab"),
            t.isElement &&
              requestAnimationFrame(() => {
                t.__preventObserver__ = !1;
              });
        },
        unsetGrabCursor: function () {
          const e = this;
          (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e.isElement && (e.__preventObserver__ = !0),
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = ""),
            e.isElement &&
              requestAnimationFrame(() => {
                e.__preventObserver__ = !1;
              }));
        },
      },
      events: {
        attachEvents: function () {
          const e = this,
            t = a(),
            { params: s } = e;
          (e.onTouchStart = B.bind(e)),
            (e.onTouchMove = N.bind(e)),
            (e.onTouchEnd = D.bind(e)),
            s.cssMode && (e.onScroll = $.bind(e)),
            (e.onClick = G.bind(e)),
            (e.onLoad = q.bind(e)),
            H || (t.addEventListener("touchstart", V), (H = !0)),
            U(e, "on");
        },
        detachEvents: function () {
          U(this, "off");
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          const e = this,
            { realIndex: t, initialized: s, params: i, el: n } = e,
            r = i.breakpoints;
          if (!r || (r && 0 === Object.keys(r).length)) return;
          const a = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
          if (!a || e.currentBreakpoint === a) return;
          const o = (a in r ? r[a] : void 0) || e.originalParams,
            l = W(e, i),
            c = W(e, o),
            d = i.enabled;
          l && !c
            ? (n.classList.remove(
                `${i.containerModifierClass}grid`,
                `${i.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !l &&
              c &&
              (n.classList.add(`${i.containerModifierClass}grid`),
              ((o.grid.fill && "column" === o.grid.fill) ||
                (!o.grid.fill && "column" === i.grid.fill)) &&
                n.classList.add(`${i.containerModifierClass}grid-column`),
              e.emitContainerClasses()),
            ["navigation", "pagination", "scrollbar"].forEach((t) => {
              const s = i[t] && i[t].enabled,
                n = o[t] && o[t].enabled;
              s && !n && e[t].disable(), !s && n && e[t].enable();
            });
          const u = o.direction && o.direction !== i.direction,
            p = i.loop && (o.slidesPerView !== i.slidesPerView || u);
          u && s && e.changeDirection(), f(e.params, o);
          const h = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            d && !h ? e.disable() : !d && h && e.enable(),
            (e.currentBreakpoint = a),
            e.emit("_beforeBreakpoint", o),
            p && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
            e.emit("breakpoint", o);
        },
        getBreakpoint: function (e, t = "window", s) {
          if (!e || ("container" === t && !s)) return;
          let i = !1;
          const n = l(),
            r = "window" === t ? n.innerHeight : s.clientHeight,
            a = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: r * t, point: e };
              }
              return { value: e, point: e };
            });
          a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < a.length; e += 1) {
            const { point: r, value: o } = a[e];
            "window" === t
              ? n.matchMedia(`(min-width: ${o}px)`).matches && (i = r)
              : o <= s.clientWidth && (i = r);
          }
          return i || "max";
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: s } = e,
            { slidesOffsetBefore: i } = s;
          if (i) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: {
        addClasses: function () {
          const e = this,
            { classNames: t, params: s, rtl: i, el: n, device: r } = e,
            a = (function (e, t) {
              const s = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((i) => {
                        e[i] && s.push(t + i);
                      })
                    : "string" == typeof e && s.push(t + e);
                }),
                s
              );
            })(
              [
                "initialized",
                s.direction,
                { "free-mode": e.params.freeMode && s.freeMode.enabled },
                { autoheight: s.autoHeight },
                { rtl: i },
                { grid: s.grid && s.grid.rows > 1 },
                {
                  "grid-column":
                    s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                },
                { android: r.android },
                { ios: r.ios },
                { "css-mode": s.cssMode },
                { centered: s.cssMode && s.centeredSlides },
                { "watch-progress": s.watchSlidesProgress },
              ],
              s.containerModifierClass
            );
          t.push(...a), n.classList.add(...t), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { el: e, classNames: t } = this;
          e.classList.remove(...t), this.emitContainerClasses();
        },
      },
    },
    K = {};
  class Q {
    constructor(...e) {
      let t, s;
      1 === e.length &&
      e[0].constructor &&
      "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
        ? (s = e[0])
        : ([t, s] = e),
        s || (s = {}),
        (s = f({}, s)),
        t && !s.el && (s.el = t);
      const i = a();
      if (
        s.el &&
        "string" == typeof s.el &&
        i.querySelectorAll(s.el).length > 1
      ) {
        const e = [];
        return (
          i.querySelectorAll(s.el).forEach((t) => {
            const i = f({}, s, { el: t });
            e.push(new Q(i));
          }),
          e
        );
      }
      const n = this;
      (n.__swiper__ = !0),
        (n.support = C()),
        (n.device = O({ userAgent: s.userAgent })),
        (n.browser = P()),
        (n.eventsListeners = {}),
        (n.eventsAnyListeners = []),
        (n.modules = [...n.__modules__]),
        s.modules && Array.isArray(s.modules) && n.modules.push(...s.modules);
      const r = {};
      n.modules.forEach((e) => {
        e({
          params: s,
          swiper: n,
          extendParams: Y(s, r),
          on: n.on.bind(n),
          once: n.once.bind(n),
          off: n.off.bind(n),
          emit: n.emit.bind(n),
        });
      });
      const o = f({}, X, r);
      return (
        (n.params = f({}, o, K, s)),
        (n.originalParams = f({}, n.params)),
        (n.passedParams = f({}, s)),
        n.params &&
          n.params.on &&
          Object.keys(n.params.on).forEach((e) => {
            n.on(e, n.params.on[e]);
          }),
        n.params && n.params.onAny && n.onAny(n.params.onAny),
        Object.assign(n, {
          enabled: n.params.enabled,
          el: t,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === n.params.direction,
          isVertical: () => "vertical" === n.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: n.params.allowSlideNext,
          allowSlidePrev: n.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: n.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            evCache: [],
          },
          allowClick: !0,
          allowTouchMove: n.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        n.emit("_swiper"),
        n.params.init && n.init(),
        n
      );
    }
    getSlideIndex(e) {
      const { slidesEl: t, params: s } = this,
        i = w(g(t, `.${s.slideClass}, swiper-slide`)[0]);
      return w(e) - i;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(
        this.slides.filter(
          (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
        )[0]
      );
    }
    recalcSlides() {
      const { slidesEl: e, params: t } = this;
      this.slides = g(e, `.${t.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const i = s.minTranslate(),
        n = (s.maxTranslate() - i) * e + i;
      s.translateTo(n, void 0 === t ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((s) => {
        const i = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e = "current", t = !1) {
      const {
        params: s,
        slides: i,
        slidesGrid: n,
        slidesSizesGrid: r,
        size: a,
        activeIndex: o,
      } = this;
      let l = 1;
      if (s.centeredSlides) {
        let e,
          t = i[o].swiperSlideSize;
        for (let s = o + 1; s < i.length; s += 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (l += 1), t > a && (e = !0));
        for (let s = o - 1; s >= 0; s -= 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (l += 1), t > a && (e = !0));
      } else if ("current" === e)
        for (let e = o + 1; e < i.length; e += 1) {
          (t ? n[e] + r[e] - n[o] < a : n[e] - n[o] < a) && (l += 1);
        }
      else
        for (let e = o - 1; e >= 0; e -= 1) {
          n[o] - n[e] < a && (l += 1);
        }
      return l;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;
      function i() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let n;
      if (
        (s.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
          t.complete && L(e, t);
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled)
      )
        i(), e.params.autoHeight && e.updateAutoHeight();
      else {
        if (
          ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) &&
          e.isEnd &&
          !e.params.centeredSlides
        ) {
          const t =
            e.virtual && e.params.virtual.enabled ? e.virtual.slides : e.slides;
          n = e.slideTo(t.length - 1, 0, !1, !0);
        } else n = e.slideTo(e.activeIndex, 0, !1, !0);
        n || i();
      }
      s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t = !0) {
      const s = this,
        i = s.params.direction;
      return (
        e || (e = "horizontal" === i ? "vertical" : "horizontal"),
        e === i ||
          ("horizontal" !== e && "vertical" !== e) ||
          (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
          s.el.classList.add(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.forEach((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          s.emit("changeDirection"),
          t && s.update()),
        s
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && "rtl" === e) ||
        (!t.rtl && "ltr" === e) ||
        ((t.rtl = "rtl" === e),
        (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
        t.rtl
          ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "rtl"))
          : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let s = e || t.params.el;
      if (("string" == typeof s && (s = document.querySelector(s)), !s))
        return !1;
      (s.swiper = t), s.shadowEl && (t.isElement = !0);
      const i = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let n = (() => {
        if (s && s.shadowRoot && s.shadowRoot.querySelector) {
          return s.shadowRoot.querySelector(i());
        }
        return g(s, i())[0];
      })();
      return (
        !n &&
          t.params.createElements &&
          ((n = v("div", t.params.wrapperClass)),
          s.append(n),
          g(s, `.${t.params.slideClass}`).forEach((e) => {
            n.append(e);
          })),
        Object.assign(t, {
          el: s,
          wrapperEl: n,
          slidesEl: t.isElement ? s : n,
          mounted: !0,
          rtl: "rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction")),
          wrongRTL: "-webkit-box" === b(n, "display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.loop && t.virtual && t.params.virtual.enabled
            ? t.slideTo(
                t.params.initialSlide + t.virtual.slidesBefore,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.params.loop && t.loopCreate(),
          t.attachEvents(),
          [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
            e.complete
              ? L(t, e)
              : e.addEventListener("load", (e) => {
                  L(t, e.target);
                });
          }),
          k(t),
          (t.initialized = !0),
          k(t),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e = !0, t = !0) {
      const s = this,
        { params: i, el: n, wrapperEl: r, slides: a } = s;
      return (
        void 0 === s.params ||
          s.destroyed ||
          (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          i.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            n.removeAttribute("style"),
            r.removeAttribute("style"),
            a &&
              a.length &&
              a.forEach((e) => {
                e.classList.remove(
                  i.slideVisibleClass,
                  i.slideActiveClass,
                  i.slideNextClass,
                  i.slidePrevClass
                ),
                  e.removeAttribute("style"),
                  e.removeAttribute("data-swiper-slide-index");
              })),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
            ((s.el.swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      f(K, e);
    }
    static get extendedDefaults() {
      return K;
    }
    static get defaults() {
      return X;
    }
    static installModule(e) {
      Q.prototype.__modules__ || (Q.prototype.__modules__ = []);
      const t = Q.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => Q.installModule(e)), Q)
        : (Q.installModule(e), Q);
    }
  }
  Object.keys(J).forEach((e) => {
    Object.keys(J[e]).forEach((t) => {
      Q.prototype[t] = J[e][t];
    });
  }),
    Q.use([
      function ({ swiper: e, on: t, emit: s }) {
        const i = l();
        let n = null,
          r = null;
        const a = () => {
            e &&
              !e.destroyed &&
              e.initialized &&
              (s("beforeResize"), s("resize"));
          },
          o = () => {
            e && !e.destroyed && e.initialized && s("orientationchange");
          };
        t("init", () => {
          e.params.resizeObserver && void 0 !== i.ResizeObserver
            ? e &&
              !e.destroyed &&
              e.initialized &&
              ((n = new ResizeObserver((t) => {
                r = i.requestAnimationFrame(() => {
                  const { width: s, height: i } = e;
                  let n = s,
                    r = i;
                  t.forEach(
                    ({ contentBoxSize: t, contentRect: s, target: i }) => {
                      (i && i !== e.el) ||
                        ((n = s ? s.width : (t[0] || t).inlineSize),
                        (r = s ? s.height : (t[0] || t).blockSize));
                    }
                  ),
                    (n === s && r === i) || a();
                });
              })),
              n.observe(e.el))
            : (i.addEventListener("resize", a),
              i.addEventListener("orientationchange", o));
        }),
          t("destroy", () => {
            r && i.cancelAnimationFrame(r),
              n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)),
              i.removeEventListener("resize", a),
              i.removeEventListener("orientationchange", o);
          });
      },
      function ({ swiper: e, extendParams: t, on: s, emit: i }) {
        const n = [],
          r = l(),
          a = (t, s = {}) => {
            const a = new (r.MutationObserver || r.WebkitMutationObserver)(
              (t) => {
                if (e.__preventObserver__) return;
                if (1 === t.length) return void i("observerUpdate", t[0]);
                const s = function () {
                  i("observerUpdate", t[0]);
                };
                r.requestAnimationFrame
                  ? r.requestAnimationFrame(s)
                  : r.setTimeout(s, 0);
              }
            );
            a.observe(t, {
              attributes: void 0 === s.attributes || s.attributes,
              childList: void 0 === s.childList || s.childList,
              characterData: void 0 === s.characterData || s.characterData,
            }),
              n.push(a);
          };
        t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          s("init", () => {
            if (e.params.observer) {
              if (e.params.observeParents) {
                const t = y(e.el);
                for (let e = 0; e < t.length; e += 1) a(t[e]);
              }
              a(e.el, { childList: e.params.observeSlideChildren }),
                a(e.wrapperEl, { attributes: !1 });
            }
          }),
          s("destroy", () => {
            n.forEach((e) => {
              e.disconnect();
            }),
              n.splice(0, n.length);
          });
      },
    ]);
  const Z = Q;
  function ee(e, t, s, i) {
    return (
      e.params.createElements &&
        Object.keys(i).forEach((n) => {
          if (!s[n] && !0 === s.auto) {
            let r = g(e.el, `.${i[n]}`)[0];
            r || ((r = v("div", i[n])), (r.className = i[n]), e.el.append(r)),
              (s[n] = r),
              (t[n] = r);
          }
        }),
      s
    );
  }
  function te({ swiper: e, extendParams: t, on: s, emit: i }) {
    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled",
      },
    }),
      (e.navigation = { nextEl: null, prevEl: null });
    const n = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
    function r(t) {
      let s;
      return t &&
        "string" == typeof t &&
        e.isElement &&
        ((s = e.el.shadowRoot.querySelector(t)), s)
        ? s
        : (t &&
            ("string" == typeof t && (s = [...document.querySelectorAll(t)]),
            e.params.uniqueNavElements &&
              "string" == typeof t &&
              s.length > 1 &&
              1 === e.el.querySelectorAll(t).length &&
              (s = e.el.querySelector(t))),
          t && !s ? t : s);
    }
    function a(t, s) {
      const i = e.params.navigation;
      (t = n(t)).forEach((t) => {
        t &&
          (t.classList[s ? "add" : "remove"](...i.disabledClass.split(" ")),
          "BUTTON" === t.tagName && (t.disabled = s),
          e.params.watchOverflow &&
            e.enabled &&
            t.classList[e.isLocked ? "add" : "remove"](i.lockClass));
      });
    }
    function o() {
      const { nextEl: t, prevEl: s } = e.navigation;
      if (e.params.loop) return a(s, !1), void a(t, !1);
      a(s, e.isBeginning && !e.params.rewind),
        a(t, e.isEnd && !e.params.rewind);
    }
    function l(t) {
      t.preventDefault(),
        (!e.isBeginning || e.params.loop || e.params.rewind) &&
          (e.slidePrev(), i("navigationPrev"));
    }
    function c(t) {
      t.preventDefault(),
        (!e.isEnd || e.params.loop || e.params.rewind) &&
          (e.slideNext(), i("navigationNext"));
    }
    function d() {
      const t = e.params.navigation;
      if (
        ((e.params.navigation = ee(
          e,
          e.originalParams.navigation,
          e.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !t.nextEl && !t.prevEl)
      )
        return;
      let s = r(t.nextEl),
        i = r(t.prevEl);
      Object.assign(e.navigation, { nextEl: s, prevEl: i }),
        (s = n(s)),
        (i = n(i));
      const a = (s, i) => {
        s && s.addEventListener("click", "next" === i ? c : l),
          !e.enabled && s && s.classList.add(...t.lockClass.split(" "));
      };
      s.forEach((e) => a(e, "next")), i.forEach((e) => a(e, "prev"));
    }
    function u() {
      let { nextEl: t, prevEl: s } = e.navigation;
      (t = n(t)), (s = n(s));
      const i = (t, s) => {
        t.removeEventListener("click", "next" === s ? c : l),
          t.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      t.forEach((e) => i(e, "next")), s.forEach((e) => i(e, "prev"));
    }
    s("init", () => {
      !1 === e.params.navigation.enabled ? p() : (d(), o());
    }),
      s("toEdge fromEdge lock unlock", () => {
        o();
      }),
      s("destroy", () => {
        u();
      }),
      s("enable disable", () => {
        let { nextEl: t, prevEl: s } = e.navigation;
        (t = n(t)),
          (s = n(s)),
          [...t, ...s]
            .filter((e) => !!e)
            .forEach((t) =>
              t.classList[e.enabled ? "remove" : "add"](
                e.params.navigation.lockClass
              )
            );
      }),
      s("click", (t, s) => {
        let { nextEl: r, prevEl: a } = e.navigation;
        (r = n(r)), (a = n(a));
        const o = s.target;
        if (
          e.params.navigation.hideOnClick &&
          !a.includes(o) &&
          !r.includes(o)
        ) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === o || e.pagination.el.contains(o))
          )
            return;
          let t;
          r.length
            ? (t = r[0].classList.contains(e.params.navigation.hiddenClass))
            : a.length &&
              (t = a[0].classList.contains(e.params.navigation.hiddenClass)),
            i(!0 === t ? "navigationShow" : "navigationHide"),
            [...r, ...a]
              .filter((e) => !!e)
              .forEach((t) =>
                t.classList.toggle(e.params.navigation.hiddenClass)
              );
        }
      });
    const p = () => {
      e.el.classList.add(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        u();
    };
    Object.assign(e.navigation, {
      enable: () => {
        e.el.classList.remove(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          d(),
          o();
      },
      disable: p,
      update: o,
      init: d,
      destroy: u,
    });
  }
  function se(e = "") {
    return `.${e
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`;
  }
  function ie({ swiper: e, extendParams: t, on: s, emit: i }) {
    const n = "swiper-pagination";
    let r;
    t({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: (e) => e,
        formatFractionTotal: (e) => e,
        bulletClass: `${n}-bullet`,
        bulletActiveClass: `${n}-bullet-active`,
        modifierClass: `${n}-`,
        currentClass: `${n}-current`,
        totalClass: `${n}-total`,
        hiddenClass: `${n}-hidden`,
        progressbarFillClass: `${n}-progressbar-fill`,
        progressbarOppositeClass: `${n}-progressbar-opposite`,
        clickableClass: `${n}-clickable`,
        lockClass: `${n}-lock`,
        horizontalClass: `${n}-horizontal`,
        verticalClass: `${n}-vertical`,
        paginationDisabledClass: `${n}-disabled`,
      },
    }),
      (e.pagination = { el: null, bullets: [] });
    let a = 0;
    const o = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
    function l() {
      return (
        !e.params.pagination.el ||
        !e.pagination.el ||
        (Array.isArray(e.pagination.el) && 0 === e.pagination.el.length)
      );
    }
    function c(t, s) {
      const { bulletActiveClass: i } = e.params.pagination;
      t &&
        (t = t[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
        (t.classList.add(`${i}-${s}`),
        (t = t[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
          t.classList.add(`${i}-${s}-${s}`));
    }
    function d(t) {
      const s = t.target.closest(se(e.params.pagination.bulletClass));
      if (!s) return;
      t.preventDefault();
      const i = w(s) * e.params.slidesPerGroup;
      if (e.params.loop) {
        if (e.realIndex === i) return;
        const t = e.getSlideIndexByData(i),
          s = e.getSlideIndexByData(e.realIndex);
        t > e.slides.length - e.loopedSlides &&
          e.loopFix({
            direction: t > s ? "next" : "prev",
            activeSlideIndex: t,
            slideTo: !1,
          }),
          e.slideToLoop(i);
      } else e.slideTo(i);
    }
    function u() {
      const t = e.rtl,
        s = e.params.pagination;
      if (l()) return;
      let n,
        d,
        u = e.pagination.el;
      u = o(u);
      const p =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        f = e.params.loop
          ? Math.ceil(p / e.params.slidesPerGroup)
          : e.snapGrid.length;
      if (
        (e.params.loop
          ? ((d = e.previousRealIndex || 0),
            (n =
              e.params.slidesPerGroup > 1
                ? Math.floor(e.realIndex / e.params.slidesPerGroup)
                : e.realIndex))
          : void 0 !== e.snapIndex
          ? ((n = e.snapIndex), (d = e.previousSnapIndex))
          : ((d = e.previousIndex || 0), (n = e.activeIndex || 0)),
        "bullets" === s.type &&
          e.pagination.bullets &&
          e.pagination.bullets.length > 0)
      ) {
        const i = e.pagination.bullets;
        let o, l, p;
        if (
          (s.dynamicBullets &&
            ((r = S(i[0], e.isHorizontal() ? "width" : "height", !0)),
            u.forEach((t) => {
              t.style[e.isHorizontal() ? "width" : "height"] =
                r * (s.dynamicMainBullets + 4) + "px";
            }),
            s.dynamicMainBullets > 1 &&
              void 0 !== d &&
              ((a += n - (d || 0)),
              a > s.dynamicMainBullets - 1
                ? (a = s.dynamicMainBullets - 1)
                : a < 0 && (a = 0)),
            (o = Math.max(n - a, 0)),
            (l = o + (Math.min(i.length, s.dynamicMainBullets) - 1)),
            (p = (l + o) / 2)),
          i.forEach((e) => {
            const t = [
              ...[
                "",
                "-next",
                "-next-next",
                "-prev",
                "-prev-prev",
                "-main",
              ].map((e) => `${s.bulletActiveClass}${e}`),
            ]
              .map((e) =>
                "string" == typeof e && e.includes(" ") ? e.split(" ") : e
              )
              .flat();
            e.classList.remove(...t);
          }),
          u.length > 1)
        )
          i.forEach((e) => {
            const t = w(e);
            t === n && e.classList.add(...s.bulletActiveClass.split(" ")),
              s.dynamicBullets &&
                (t >= o &&
                  t <= l &&
                  e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")),
                t === o && c(e, "prev"),
                t === l && c(e, "next"));
          });
        else {
          const e = i[n];
          if (
            (e && e.classList.add(...s.bulletActiveClass.split(" ")),
            s.dynamicBullets)
          ) {
            const e = i[o],
              t = i[l];
            for (let e = o; e <= l; e += 1)
              i[e] &&
                i[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
            c(e, "prev"), c(t, "next");
          }
        }
        if (s.dynamicBullets) {
          const n = Math.min(i.length, s.dynamicMainBullets + 4),
            a = (r * n - r) / 2 - p * r,
            o = t ? "right" : "left";
          i.forEach((t) => {
            t.style[e.isHorizontal() ? o : "top"] = `${a}px`;
          });
        }
      }
      u.forEach((t, r) => {
        if (
          ("fraction" === s.type &&
            (t.querySelectorAll(se(s.currentClass)).forEach((e) => {
              e.textContent = s.formatFractionCurrent(n + 1);
            }),
            t.querySelectorAll(se(s.totalClass)).forEach((e) => {
              e.textContent = s.formatFractionTotal(f);
            })),
          "progressbar" === s.type)
        ) {
          let i;
          i = s.progressbarOpposite
            ? e.isHorizontal()
              ? "vertical"
              : "horizontal"
            : e.isHorizontal()
            ? "horizontal"
            : "vertical";
          const r = (n + 1) / f;
          let a = 1,
            o = 1;
          "horizontal" === i ? (a = r) : (o = r),
            t.querySelectorAll(se(s.progressbarFillClass)).forEach((t) => {
              (t.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${o})`),
                (t.style.transitionDuration = `${e.params.speed}ms`);
            });
        }
        "custom" === s.type && s.renderCustom
          ? ((t.innerHTML = s.renderCustom(e, n + 1, f)),
            0 === r && i("paginationRender", t))
          : (0 === r && i("paginationRender", t), i("paginationUpdate", t)),
          e.params.watchOverflow &&
            e.enabled &&
            t.classList[e.isLocked ? "add" : "remove"](s.lockClass);
      });
    }
    function p() {
      const t = e.params.pagination;
      if (l()) return;
      const s =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length;
      let n = e.pagination.el;
      n = o(n);
      let r = "";
      if ("bullets" === t.type) {
        let i = e.params.loop
          ? Math.ceil(s / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && i > s && (i = s);
        for (let s = 0; s < i; s += 1)
          t.renderBullet
            ? (r += t.renderBullet.call(e, s, t.bulletClass))
            : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
      }
      "fraction" === t.type &&
        (r = t.renderFraction
          ? t.renderFraction.call(e, t.currentClass, t.totalClass)
          : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
        "progressbar" === t.type &&
          (r = t.renderProgressbar
            ? t.renderProgressbar.call(e, t.progressbarFillClass)
            : `<span class="${t.progressbarFillClass}"></span>`),
        (e.pagination.bullets = []),
        n.forEach((s) => {
          "custom" !== t.type && (s.innerHTML = r || ""),
            "bullets" === t.type &&
              e.pagination.bullets.push(
                ...s.querySelectorAll(se(t.bulletClass))
              );
        }),
        "custom" !== t.type && i("paginationRender", n[0]);
    }
    function f() {
      e.params.pagination = ee(
        e,
        e.originalParams.pagination,
        e.params.pagination,
        { el: "swiper-pagination" }
      );
      const t = e.params.pagination;
      if (!t.el) return;
      let s;
      "string" == typeof t.el &&
        e.isElement &&
        (s = e.el.shadowRoot.querySelector(t.el)),
        s ||
          "string" != typeof t.el ||
          (s = [...document.querySelectorAll(t.el)]),
        s || (s = t.el),
        s &&
          0 !== s.length &&
          (e.params.uniqueNavElements &&
            "string" == typeof t.el &&
            Array.isArray(s) &&
            s.length > 1 &&
            ((s = [...e.el.querySelectorAll(t.el)]),
            s.length > 1 &&
              (s = s.filter((t) => y(t, ".swiper")[0] === e.el)[0])),
          Array.isArray(s) && 1 === s.length && (s = s[0]),
          Object.assign(e.pagination, { el: s }),
          (s = o(s)),
          s.forEach((s) => {
            "bullets" === t.type &&
              t.clickable &&
              s.classList.add(t.clickableClass),
              s.classList.add(t.modifierClass + t.type),
              s.classList.add(
                e.isHorizontal() ? t.horizontalClass : t.verticalClass
              ),
              "bullets" === t.type &&
                t.dynamicBullets &&
                (s.classList.add(`${t.modifierClass}${t.type}-dynamic`),
                (a = 0),
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
              "progressbar" === t.type &&
                t.progressbarOpposite &&
                s.classList.add(t.progressbarOppositeClass),
              t.clickable && s.addEventListener("click", d),
              e.enabled || s.classList.add(t.lockClass);
          }));
    }
    function h() {
      const t = e.params.pagination;
      if (l()) return;
      let s = e.pagination.el;
      s &&
        ((s = o(s)),
        s.forEach((s) => {
          s.classList.remove(t.hiddenClass),
            s.classList.remove(t.modifierClass + t.type),
            s.classList.remove(
              e.isHorizontal() ? t.horizontalClass : t.verticalClass
            ),
            t.clickable && s.removeEventListener("click", d);
        })),
        e.pagination.bullets &&
          e.pagination.bullets.forEach((e) =>
            e.classList.remove(...t.bulletActiveClass.split(" "))
          );
    }
    s("changeDirection", () => {
      if (!e.pagination || !e.pagination.el) return;
      const t = e.params.pagination;
      let { el: s } = e.pagination;
      (s = o(s)),
        s.forEach((s) => {
          s.classList.remove(t.horizontalClass, t.verticalClass),
            s.classList.add(
              e.isHorizontal() ? t.horizontalClass : t.verticalClass
            );
        });
    }),
      s("init", () => {
        !1 === e.params.pagination.enabled ? m() : (f(), p(), u());
      }),
      s("activeIndexChange", () => {
        void 0 === e.snapIndex && u();
      }),
      s("snapIndexChange", () => {
        u();
      }),
      s("snapGridLengthChange", () => {
        p(), u();
      }),
      s("destroy", () => {
        h();
      }),
      s("enable disable", () => {
        let { el: t } = e.pagination;
        t &&
          ((t = o(t)),
          t.forEach((t) =>
            t.classList[e.enabled ? "remove" : "add"](
              e.params.pagination.lockClass
            )
          ));
      }),
      s("lock unlock", () => {
        u();
      }),
      s("click", (t, s) => {
        const n = s.target;
        let { el: r } = e.pagination;
        if (
          (Array.isArray(r) || (r = [r].filter((e) => !!e)),
          e.params.pagination.el &&
            e.params.pagination.hideOnClick &&
            r &&
            r.length > 0 &&
            !n.classList.contains(e.params.pagination.bulletClass))
        ) {
          if (
            e.navigation &&
            ((e.navigation.nextEl && n === e.navigation.nextEl) ||
              (e.navigation.prevEl && n === e.navigation.prevEl))
          )
            return;
          const t = r[0].classList.contains(e.params.pagination.hiddenClass);
          i(!0 === t ? "paginationShow" : "paginationHide"),
            r.forEach((t) =>
              t.classList.toggle(e.params.pagination.hiddenClass)
            );
        }
      });
    const m = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let { el: t } = e.pagination;
      t &&
        ((t = o(t)),
        t.forEach((t) =>
          t.classList.add(e.params.pagination.paginationDisabledClass)
        )),
        h();
    };
    Object.assign(e.pagination, {
      enable: () => {
        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
        let { el: t } = e.pagination;
        t &&
          ((t = o(t)),
          t.forEach((t) =>
            t.classList.remove(e.params.pagination.paginationDisabledClass)
          )),
          f(),
          p(),
          u();
      },
      disable: m,
      render: p,
      update: u,
      init: f,
      destroy: h,
    });
  }
  function ne(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  const { toString: re } = Object.prototype,
    { getPrototypeOf: ae } = Object,
    oe =
      ((le = Object.create(null)),
      (e) => {
        const t = re.call(e);
        return le[t] || (le[t] = t.slice(8, -1).toLowerCase());
      });
  var le;
  const ce = (e) => ((e = e.toLowerCase()), (t) => oe(t) === e),
    de = (e) => (t) => typeof t === e,
    { isArray: ue } = Array,
    pe = de("undefined");
  const fe = ce("ArrayBuffer");
  const he = de("string"),
    me = de("function"),
    ge = de("number"),
    ve = (e) => null !== e && "object" == typeof e,
    be = (e) => {
      if ("object" !== oe(e)) return !1;
      const t = ae(e);
      return !(
        (null !== t &&
          t !== Object.prototype &&
          null !== Object.getPrototypeOf(t)) ||
        Symbol.toStringTag in e ||
        Symbol.iterator in e
      );
    },
    we = ce("Date"),
    ye = ce("File"),
    Se = ce("Blob"),
    Ee = ce("FileList"),
    Te = ce("URLSearchParams");
  function xe(e, t, { allOwnKeys: s = !1 } = {}) {
    if (null == e) return;
    let i, n;
    if (("object" != typeof e && (e = [e]), ue(e)))
      for (i = 0, n = e.length; i < n; i++) t.call(null, e[i], i, e);
    else {
      const n = s ? Object.getOwnPropertyNames(e) : Object.keys(e),
        r = n.length;
      let a;
      for (i = 0; i < r; i++) (a = n[i]), t.call(null, e[a], a, e);
    }
  }
  function Ce(e, t) {
    t = t.toLowerCase();
    const s = Object.keys(e);
    let i,
      n = s.length;
    for (; n-- > 0; ) if (((i = s[n]), t === i.toLowerCase())) return i;
    return null;
  }
  const Oe =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : global,
    Pe = (e) => !pe(e) && e !== Oe;
  const Ae =
    ((Le = "undefined" != typeof Uint8Array && ae(Uint8Array)),
    (e) => Le && e instanceof Le);
  var Le;
  const Me = ce("HTMLFormElement"),
    ke = (
      ({ hasOwnProperty: e }) =>
      (t, s) =>
        e.call(t, s)
    )(Object.prototype),
    ze = ce("RegExp"),
    je = (e, t) => {
      const s = Object.getOwnPropertyDescriptors(e),
        i = {};
      xe(s, (s, n) => {
        !1 !== t(s, n, e) && (i[n] = s);
      }),
        Object.defineProperties(e, i);
    },
    Ie = "abcdefghijklmnopqrstuvwxyz",
    Re = "0123456789",
    _e = { DIGIT: Re, ALPHA: Ie, ALPHA_DIGIT: Ie + Ie.toUpperCase() + Re };
  const Be = ce("AsyncFunction"),
    Ne = {
      isArray: ue,
      isArrayBuffer: fe,
      isBuffer: function (e) {
        return (
          null !== e &&
          !pe(e) &&
          null !== e.constructor &&
          !pe(e.constructor) &&
          me(e.constructor.isBuffer) &&
          e.constructor.isBuffer(e)
        );
      },
      isFormData: (e) => {
        let t;
        return (
          e &&
          (("function" == typeof FormData && e instanceof FormData) ||
            (me(e.append) &&
              ("formdata" === (t = oe(e)) ||
                ("object" === t &&
                  me(e.toString) &&
                  "[object FormData]" === e.toString()))))
        );
      },
      isArrayBufferView: function (e) {
        let t;
        return (
          (t =
            "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && fe(e.buffer)),
          t
        );
      },
      isString: he,
      isNumber: ge,
      isBoolean: (e) => !0 === e || !1 === e,
      isObject: ve,
      isPlainObject: be,
      isUndefined: pe,
      isDate: we,
      isFile: ye,
      isBlob: Se,
      isRegExp: ze,
      isFunction: me,
      isStream: (e) => ve(e) && me(e.pipe),
      isURLSearchParams: Te,
      isTypedArray: Ae,
      isFileList: Ee,
      forEach: xe,
      merge: function e() {
        const { caseless: t } = (Pe(this) && this) || {},
          s = {},
          i = (i, n) => {
            const r = (t && Ce(s, n)) || n;
            be(s[r]) && be(i)
              ? (s[r] = e(s[r], i))
              : be(i)
              ? (s[r] = e({}, i))
              : ue(i)
              ? (s[r] = i.slice())
              : (s[r] = i);
          };
        for (let e = 0, t = arguments.length; e < t; e++)
          arguments[e] && xe(arguments[e], i);
        return s;
      },
      extend: (e, t, s, { allOwnKeys: i } = {}) => (
        xe(
          t,
          (t, i) => {
            s && me(t) ? (e[i] = ne(t, s)) : (e[i] = t);
          },
          { allOwnKeys: i }
        ),
        e
      ),
      trim: (e) =>
        e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
      stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
      inherits: (e, t, s, i) => {
        (e.prototype = Object.create(t.prototype, i)),
          (e.prototype.constructor = e),
          Object.defineProperty(e, "super", { value: t.prototype }),
          s && Object.assign(e.prototype, s);
      },
      toFlatObject: (e, t, s, i) => {
        let n, r, a;
        const o = {};
        if (((t = t || {}), null == e)) return t;
        do {
          for (n = Object.getOwnPropertyNames(e), r = n.length; r-- > 0; )
            (a = n[r]),
              (i && !i(a, e, t)) || o[a] || ((t[a] = e[a]), (o[a] = !0));
          e = !1 !== s && ae(e);
        } while (e && (!s || s(e, t)) && e !== Object.prototype);
        return t;
      },
      kindOf: oe,
      kindOfTest: ce,
      endsWith: (e, t, s) => {
        (e = String(e)),
          (void 0 === s || s > e.length) && (s = e.length),
          (s -= t.length);
        const i = e.indexOf(t, s);
        return -1 !== i && i === s;
      },
      toArray: (e) => {
        if (!e) return null;
        if (ue(e)) return e;
        let t = e.length;
        if (!ge(t)) return null;
        const s = new Array(t);
        for (; t-- > 0; ) s[t] = e[t];
        return s;
      },
      forEachEntry: (e, t) => {
        const s = (e && e[Symbol.iterator]).call(e);
        let i;
        for (; (i = s.next()) && !i.done; ) {
          const s = i.value;
          t.call(e, s[0], s[1]);
        }
      },
      matchAll: (e, t) => {
        let s;
        const i = [];
        for (; null !== (s = e.exec(t)); ) i.push(s);
        return i;
      },
      isHTMLForm: Me,
      hasOwnProperty: ke,
      hasOwnProp: ke,
      reduceDescriptors: je,
      freezeMethods: (e) => {
        je(e, (t, s) => {
          if (me(e) && -1 !== ["arguments", "caller", "callee"].indexOf(s))
            return !1;
          const i = e[s];
          me(i) &&
            ((t.enumerable = !1),
            "writable" in t
              ? (t.writable = !1)
              : t.set ||
                (t.set = () => {
                  throw Error("Can not rewrite read-only method '" + s + "'");
                }));
        });
      },
      toObjectSet: (e, t) => {
        const s = {},
          i = (e) => {
            e.forEach((e) => {
              s[e] = !0;
            });
          };
        return ue(e) ? i(e) : i(String(e).split(t)), s;
      },
      toCamelCase: (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, s) {
          return t.toUpperCase() + s;
        }),
      noop: () => {},
      toFiniteNumber: (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
      findKey: Ce,
      global: Oe,
      isContextDefined: Pe,
      ALPHABET: _e,
      generateString: (e = 16, t = _e.ALPHA_DIGIT) => {
        let s = "";
        const { length: i } = t;
        for (; e--; ) s += t[(Math.random() * i) | 0];
        return s;
      },
      isSpecCompliantForm: function (e) {
        return !!(
          e &&
          me(e.append) &&
          "FormData" === e[Symbol.toStringTag] &&
          e[Symbol.iterator]
        );
      },
      toJSONObject: (e) => {
        const t = new Array(10),
          s = (e, i) => {
            if (ve(e)) {
              if (t.indexOf(e) >= 0) return;
              if (!("toJSON" in e)) {
                t[i] = e;
                const n = ue(e) ? [] : {};
                return (
                  xe(e, (e, t) => {
                    const r = s(e, i + 1);
                    !pe(r) && (n[t] = r);
                  }),
                  (t[i] = void 0),
                  n
                );
              }
            }
            return e;
          };
        return s(e, 0);
      },
      isAsyncFn: Be,
      isThenable: (e) => e && (ve(e) || me(e)) && me(e.then) && me(e.catch),
    };
  function De(e, t, s, i, n) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = "AxiosError"),
      t && (this.code = t),
      s && (this.config = s),
      i && (this.request = i),
      n && (this.response = n);
  }
  Ne.inherits(De, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: Ne.toJSONObject(this.config),
        code: this.code,
        status:
          this.response && this.response.status ? this.response.status : null,
      };
    },
  });
  const Fe = De.prototype,
    Ge = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
  ].forEach((e) => {
    Ge[e] = { value: e };
  }),
    Object.defineProperties(De, Ge),
    Object.defineProperty(Fe, "isAxiosError", { value: !0 }),
    (De.from = (e, t, s, i, n, r) => {
      const a = Object.create(Fe);
      return (
        Ne.toFlatObject(
          e,
          a,
          function (e) {
            return e !== Error.prototype;
          },
          (e) => "isAxiosError" !== e
        ),
        De.call(a, e.message, t, s, i, n),
        (a.cause = e),
        (a.name = e.name),
        r && Object.assign(a, r),
        a
      );
    });
  const $e = De;
  function qe(e) {
    return Ne.isPlainObject(e) || Ne.isArray(e);
  }
  function He(e) {
    return Ne.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function Ve(e, t, s) {
    return e
      ? e
          .concat(t)
          .map(function (e, t) {
            return (e = He(e)), !s && t ? "[" + e + "]" : e;
          })
          .join(s ? "." : "")
      : t;
  }
  const Ue = Ne.toFlatObject(Ne, {}, null, function (e) {
    return /^is[A-Z]/.test(e);
  });
  const We = function (e, t, s) {
    if (!Ne.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData();
    const i = (s = Ne.toFlatObject(
        s,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (e, t) {
          return !Ne.isUndefined(t[e]);
        }
      )).metaTokens,
      n = s.visitor || c,
      r = s.dots,
      a = s.indexes,
      o =
        (s.Blob || ("undefined" != typeof Blob && Blob)) &&
        Ne.isSpecCompliantForm(t);
    if (!Ne.isFunction(n)) throw new TypeError("visitor must be a function");
    function l(e) {
      if (null === e) return "";
      if (Ne.isDate(e)) return e.toISOString();
      if (!o && Ne.isBlob(e))
        throw new $e("Blob is not supported. Use a Buffer instead.");
      return Ne.isArrayBuffer(e) || Ne.isTypedArray(e)
        ? o && "function" == typeof Blob
          ? new Blob([e])
          : Buffer.from(e)
        : e;
    }
    function c(e, s, n) {
      let o = e;
      if (e && !n && "object" == typeof e)
        if (Ne.endsWith(s, "{}"))
          (s = i ? s : s.slice(0, -2)), (e = JSON.stringify(e));
        else if (
          (Ne.isArray(e) &&
            (function (e) {
              return Ne.isArray(e) && !e.some(qe);
            })(e)) ||
          ((Ne.isFileList(e) || Ne.endsWith(s, "[]")) && (o = Ne.toArray(e)))
        )
          return (
            (s = He(s)),
            o.forEach(function (e, i) {
              !Ne.isUndefined(e) &&
                null !== e &&
                t.append(
                  !0 === a ? Ve([s], i, r) : null === a ? s : s + "[]",
                  l(e)
                );
            }),
            !1
          );
      return !!qe(e) || (t.append(Ve(n, s, r), l(e)), !1);
    }
    const d = [],
      u = Object.assign(Ue, {
        defaultVisitor: c,
        convertValue: l,
        isVisitable: qe,
      });
    if (!Ne.isObject(e)) throw new TypeError("data must be an object");
    return (
      (function e(s, i) {
        if (!Ne.isUndefined(s)) {
          if (-1 !== d.indexOf(s))
            throw Error("Circular reference detected in " + i.join("."));
          d.push(s),
            Ne.forEach(s, function (s, r) {
              !0 ===
                (!(Ne.isUndefined(s) || null === s) &&
                  n.call(t, s, Ne.isString(r) ? r.trim() : r, i, u)) &&
                e(s, i ? i.concat(r) : [r]);
            }),
            d.pop();
        }
      })(e),
      t
    );
  };
  function Xe(e) {
    const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
      return t[e];
    });
  }
  function Ye(e, t) {
    (this._pairs = []), e && We(e, this, t);
  }
  const Je = Ye.prototype;
  (Je.append = function (e, t) {
    this._pairs.push([e, t]);
  }),
    (Je.toString = function (e) {
      const t = e
        ? function (t) {
            return e.call(this, t, Xe);
          }
        : Xe;
      return this._pairs
        .map(function (e) {
          return t(e[0]) + "=" + t(e[1]);
        }, "")
        .join("&");
    });
  const Ke = Ye;
  function Qe(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function Ze(e, t, s) {
    if (!t) return e;
    const i = (s && s.encode) || Qe,
      n = s && s.serialize;
    let r;
    if (
      ((r = n
        ? n(t, s)
        : Ne.isURLSearchParams(t)
        ? t.toString()
        : new Ke(t, s).toString(i)),
      r)
    ) {
      const t = e.indexOf("#");
      -1 !== t && (e = e.slice(0, t)),
        (e += (-1 === e.indexOf("?") ? "?" : "&") + r);
    }
    return e;
  }
  const et = class {
      constructor() {
        this.handlers = [];
      }
      use(e, t, s) {
        return (
          this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!s && s.synchronous,
            runWhen: s ? s.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }
      eject(e) {
        this.handlers[e] && (this.handlers[e] = null);
      }
      clear() {
        this.handlers && (this.handlers = []);
      }
      forEach(e) {
        Ne.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }
    },
    tt = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    st = {
      isBrowser: !0,
      classes: {
        URLSearchParams:
          "undefined" != typeof URLSearchParams ? URLSearchParams : Ke,
        FormData: "undefined" != typeof FormData ? FormData : null,
        Blob: "undefined" != typeof Blob ? Blob : null,
      },
      isStandardBrowserEnv: (() => {
        let e;
        return (
          ("undefined" == typeof navigator ||
            ("ReactNative" !== (e = navigator.product) &&
              "NativeScript" !== e &&
              "NS" !== e)) &&
          "undefined" != typeof window &&
          "undefined" != typeof document
        );
      })(),
      isStandardBrowserWebWorkerEnv:
        "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope &&
        "function" == typeof self.importScripts,
      protocols: ["http", "https", "file", "blob", "url", "data"],
    };
  const it = function (e) {
      function t(e, s, i, n) {
        let r = e[n++];
        const a = Number.isFinite(+r),
          o = n >= e.length;
        if (((r = !r && Ne.isArray(i) ? i.length : r), o))
          return Ne.hasOwnProp(i, r) ? (i[r] = [i[r], s]) : (i[r] = s), !a;
        (i[r] && Ne.isObject(i[r])) || (i[r] = []);
        return (
          t(e, s, i[r], n) &&
            Ne.isArray(i[r]) &&
            (i[r] = (function (e) {
              const t = {},
                s = Object.keys(e);
              let i;
              const n = s.length;
              let r;
              for (i = 0; i < n; i++) (r = s[i]), (t[r] = e[r]);
              return t;
            })(i[r])),
          !a
        );
      }
      if (Ne.isFormData(e) && Ne.isFunction(e.entries)) {
        const s = {};
        return (
          Ne.forEachEntry(e, (e, i) => {
            t(
              (function (e) {
                return Ne.matchAll(/\w+|\[(\w*)]/g, e).map((e) =>
                  "[]" === e[0] ? "" : e[1] || e[0]
                );
              })(e),
              i,
              s,
              0
            );
          }),
          s
        );
      }
      return null;
    },
    nt = { "Content-Type": void 0 };
  const rt = {
    transitional: tt,
    adapter: ["xhr", "http"],
    transformRequest: [
      function (e, t) {
        const s = t.getContentType() || "",
          i = s.indexOf("application/json") > -1,
          n = Ne.isObject(e);
        n && Ne.isHTMLForm(e) && (e = new FormData(e));
        if (Ne.isFormData(e)) return i && i ? JSON.stringify(it(e)) : e;
        if (
          Ne.isArrayBuffer(e) ||
          Ne.isBuffer(e) ||
          Ne.isStream(e) ||
          Ne.isFile(e) ||
          Ne.isBlob(e)
        )
          return e;
        if (Ne.isArrayBufferView(e)) return e.buffer;
        if (Ne.isURLSearchParams(e))
          return (
            t.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1
            ),
            e.toString()
          );
        let r;
        if (n) {
          if (s.indexOf("application/x-www-form-urlencoded") > -1)
            return (function (e, t) {
              return We(
                e,
                new st.classes.URLSearchParams(),
                Object.assign(
                  {
                    visitor: function (e, t, s, i) {
                      return st.isNode && Ne.isBuffer(e)
                        ? (this.append(t, e.toString("base64")), !1)
                        : i.defaultVisitor.apply(this, arguments);
                    },
                  },
                  t
                )
              );
            })(e, this.formSerializer).toString();
          if ((r = Ne.isFileList(e)) || s.indexOf("multipart/form-data") > -1) {
            const t = this.env && this.env.FormData;
            return We(
              r ? { "files[]": e } : e,
              t && new t(),
              this.formSerializer
            );
          }
        }
        return n || i
          ? (t.setContentType("application/json", !1),
            (function (e, t, s) {
              if (Ne.isString(e))
                try {
                  return (t || JSON.parse)(e), Ne.trim(e);
                } catch (e) {
                  if ("SyntaxError" !== e.name) throw e;
                }
              return (s || JSON.stringify)(e);
            })(e))
          : e;
      },
    ],
    transformResponse: [
      function (e) {
        const t = this.transitional || rt.transitional,
          s = t && t.forcedJSONParsing,
          i = "json" === this.responseType;
        if (e && Ne.isString(e) && ((s && !this.responseType) || i)) {
          const s = !(t && t.silentJSONParsing) && i;
          try {
            return JSON.parse(e);
          } catch (e) {
            if (s) {
              if ("SyntaxError" === e.name)
                throw $e.from(
                  e,
                  $e.ERR_BAD_RESPONSE,
                  this,
                  null,
                  this.response
                );
              throw e;
            }
          }
        }
        return e;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: st.classes.FormData, Blob: st.classes.Blob },
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
    headers: { common: { Accept: "application/json, text/plain, */*" } },
  };
  Ne.forEach(["delete", "get", "head"], function (e) {
    rt.headers[e] = {};
  }),
    Ne.forEach(["post", "put", "patch"], function (e) {
      rt.headers[e] = Ne.merge(nt);
    });
  const at = rt,
    ot = Ne.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    lt = Symbol("internals");
  function ct(e) {
    return e && String(e).trim().toLowerCase();
  }
  function dt(e) {
    return !1 === e || null == e ? e : Ne.isArray(e) ? e.map(dt) : String(e);
  }
  function ut(e, t, s, i, n) {
    return Ne.isFunction(i)
      ? i.call(this, t, s)
      : (n && (t = s),
        Ne.isString(t)
          ? Ne.isString(i)
            ? -1 !== t.indexOf(i)
            : Ne.isRegExp(i)
            ? i.test(t)
            : void 0
          : void 0);
  }
  class pt {
    constructor(e) {
      e && this.set(e);
    }
    set(e, t, s) {
      const i = this;
      function n(e, t, s) {
        const n = ct(t);
        if (!n) throw new Error("header name must be a non-empty string");
        const r = Ne.findKey(i, n);
        (!r || void 0 === i[r] || !0 === s || (void 0 === s && !1 !== i[r])) &&
          (i[r || t] = dt(e));
      }
      const r = (e, t) => Ne.forEach(e, (e, s) => n(e, s, t));
      return (
        Ne.isPlainObject(e) || e instanceof this.constructor
          ? r(e, t)
          : Ne.isString(e) &&
            (e = e.trim()) &&
            !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
          ? r(
              ((e) => {
                const t = {};
                let s, i, n;
                return (
                  e &&
                    e.split("\n").forEach(function (e) {
                      (n = e.indexOf(":")),
                        (s = e.substring(0, n).trim().toLowerCase()),
                        (i = e.substring(n + 1).trim()),
                        !s ||
                          (t[s] && ot[s]) ||
                          ("set-cookie" === s
                            ? t[s]
                              ? t[s].push(i)
                              : (t[s] = [i])
                            : (t[s] = t[s] ? t[s] + ", " + i : i));
                    }),
                  t
                );
              })(e),
              t
            )
          : null != e && n(t, e, s),
        this
      );
    }
    get(e, t) {
      if ((e = ct(e))) {
        const s = Ne.findKey(this, e);
        if (s) {
          const e = this[s];
          if (!t) return e;
          if (!0 === t)
            return (function (e) {
              const t = Object.create(null),
                s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
              let i;
              for (; (i = s.exec(e)); ) t[i[1]] = i[2];
              return t;
            })(e);
          if (Ne.isFunction(t)) return t.call(this, e, s);
          if (Ne.isRegExp(t)) return t.exec(e);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(e, t) {
      if ((e = ct(e))) {
        const s = Ne.findKey(this, e);
        return !(!s || void 0 === this[s] || (t && !ut(0, this[s], s, t)));
      }
      return !1;
    }
    delete(e, t) {
      const s = this;
      let i = !1;
      function n(e) {
        if ((e = ct(e))) {
          const n = Ne.findKey(s, e);
          !n || (t && !ut(0, s[n], n, t)) || (delete s[n], (i = !0));
        }
      }
      return Ne.isArray(e) ? e.forEach(n) : n(e), i;
    }
    clear(e) {
      const t = Object.keys(this);
      let s = t.length,
        i = !1;
      for (; s--; ) {
        const n = t[s];
        (e && !ut(0, this[n], n, e, !0)) || (delete this[n], (i = !0));
      }
      return i;
    }
    normalize(e) {
      const t = this,
        s = {};
      return (
        Ne.forEach(this, (i, n) => {
          const r = Ne.findKey(s, n);
          if (r) return (t[r] = dt(i)), void delete t[n];
          const a = e
            ? (function (e) {
                return e
                  .trim()
                  .toLowerCase()
                  .replace(/([a-z\d])(\w*)/g, (e, t, s) => t.toUpperCase() + s);
              })(n)
            : String(n).trim();
          a !== n && delete t[n], (t[a] = dt(i)), (s[a] = !0);
        }),
        this
      );
    }
    concat(...e) {
      return this.constructor.concat(this, ...e);
    }
    toJSON(e) {
      const t = Object.create(null);
      return (
        Ne.forEach(this, (s, i) => {
          null != s &&
            !1 !== s &&
            (t[i] = e && Ne.isArray(s) ? s.join(", ") : s);
        }),
        t
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON())
        .map(([e, t]) => e + ": " + t)
        .join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(e) {
      return e instanceof this ? e : new this(e);
    }
    static concat(e, ...t) {
      const s = new this(e);
      return t.forEach((e) => s.set(e)), s;
    }
    static accessor(e) {
      const t = (this[lt] = this[lt] = { accessors: {} }).accessors,
        s = this.prototype;
      function i(e) {
        const i = ct(e);
        t[i] ||
          (!(function (e, t) {
            const s = Ne.toCamelCase(" " + t);
            ["get", "set", "has"].forEach((i) => {
              Object.defineProperty(e, i + s, {
                value: function (e, s, n) {
                  return this[i].call(this, t, e, s, n);
                },
                configurable: !0,
              });
            });
          })(s, e),
          (t[i] = !0));
      }
      return Ne.isArray(e) ? e.forEach(i) : i(e), this;
    }
  }
  pt.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]),
    Ne.freezeMethods(pt.prototype),
    Ne.freezeMethods(pt);
  const ft = pt;
  function ht(e, t) {
    const s = this || at,
      i = t || s,
      n = ft.from(i.headers);
    let r = i.data;
    return (
      Ne.forEach(e, function (e) {
        r = e.call(s, r, n.normalize(), t ? t.status : void 0);
      }),
      n.normalize(),
      r
    );
  }
  function mt(e) {
    return !(!e || !e.__CANCEL__);
  }
  function gt(e, t, s) {
    $e.call(this, null == e ? "canceled" : e, $e.ERR_CANCELED, t, s),
      (this.name = "CanceledError");
  }
  Ne.inherits(gt, $e, { __CANCEL__: !0 });
  const vt = gt;
  const bt = st.isStandardBrowserEnv
    ? {
        write: function (e, t, s, i, n, r) {
          const a = [];
          a.push(e + "=" + encodeURIComponent(t)),
            Ne.isNumber(s) && a.push("expires=" + new Date(s).toGMTString()),
            Ne.isString(i) && a.push("path=" + i),
            Ne.isString(n) && a.push("domain=" + n),
            !0 === r && a.push("secure"),
            (document.cookie = a.join("; "));
        },
        read: function (e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove: function (e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
  function wt(e, t) {
    return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
      ? (function (e, t) {
          return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
        })(e, t)
      : t;
  }
  const yt = st.isStandardBrowserEnv
    ? (function () {
        const e = /(msie|trident)/i.test(navigator.userAgent),
          t = document.createElement("a");
        let s;
        function i(s) {
          let i = s;
          return (
            e && (t.setAttribute("href", i), (i = t.href)),
            t.setAttribute("href", i),
            {
              href: t.href,
              protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
              host: t.host,
              search: t.search ? t.search.replace(/^\?/, "") : "",
              hash: t.hash ? t.hash.replace(/^#/, "") : "",
              hostname: t.hostname,
              port: t.port,
              pathname:
                "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname,
            }
          );
        }
        return (
          (s = i(window.location.href)),
          function (e) {
            const t = Ne.isString(e) ? i(e) : e;
            return t.protocol === s.protocol && t.host === s.host;
          }
        );
      })()
    : function () {
        return !0;
      };
  const St = function (e, t) {
    e = e || 10;
    const s = new Array(e),
      i = new Array(e);
    let n,
      r = 0,
      a = 0;
    return (
      (t = void 0 !== t ? t : 1e3),
      function (o) {
        const l = Date.now(),
          c = i[a];
        n || (n = l), (s[r] = o), (i[r] = l);
        let d = a,
          u = 0;
        for (; d !== r; ) (u += s[d++]), (d %= e);
        if (((r = (r + 1) % e), r === a && (a = (a + 1) % e), l - n < t))
          return;
        const p = c && l - c;
        return p ? Math.round((1e3 * u) / p) : void 0;
      }
    );
  };
  function Et(e, t) {
    let s = 0;
    const i = St(50, 250);
    return (n) => {
      const r = n.loaded,
        a = n.lengthComputable ? n.total : void 0,
        o = r - s,
        l = i(o);
      s = r;
      const c = {
        loaded: r,
        total: a,
        progress: a ? r / a : void 0,
        bytes: o,
        rate: l || void 0,
        estimated: l && a && r <= a ? (a - r) / l : void 0,
        event: n,
      };
      (c[t ? "download" : "upload"] = !0), e(c);
    };
  }
  const Tt = {
    http: null,
    xhr:
      "undefined" != typeof XMLHttpRequest &&
      function (e) {
        return new Promise(function (t, s) {
          let i = e.data;
          const n = ft.from(e.headers).normalize(),
            r = e.responseType;
          let a;
          function o() {
            e.cancelToken && e.cancelToken.unsubscribe(a),
              e.signal && e.signal.removeEventListener("abort", a);
          }
          Ne.isFormData(i) &&
            (st.isStandardBrowserEnv || st.isStandardBrowserWebWorkerEnv
              ? n.setContentType(!1)
              : n.setContentType("multipart/form-data;", !1));
          let l = new XMLHttpRequest();
          if (e.auth) {
            const t = e.auth.username || "",
              s = e.auth.password
                ? unescape(encodeURIComponent(e.auth.password))
                : "";
            n.set("Authorization", "Basic " + btoa(t + ":" + s));
          }
          const c = wt(e.baseURL, e.url);
          function d() {
            if (!l) return;
            const i = ft.from(
              "getAllResponseHeaders" in l && l.getAllResponseHeaders()
            );
            !(function (e, t, s) {
              const i = s.config.validateStatus;
              s.status && i && !i(s.status)
                ? t(
                    new $e(
                      "Request failed with status code " + s.status,
                      [$e.ERR_BAD_REQUEST, $e.ERR_BAD_RESPONSE][
                        Math.floor(s.status / 100) - 4
                      ],
                      s.config,
                      s.request,
                      s
                    )
                  )
                : e(s);
            })(
              function (e) {
                t(e), o();
              },
              function (e) {
                s(e), o();
              },
              {
                data:
                  r && "text" !== r && "json" !== r
                    ? l.response
                    : l.responseText,
                status: l.status,
                statusText: l.statusText,
                headers: i,
                config: e,
                request: l,
              }
            ),
              (l = null);
          }
          if (
            (l.open(
              e.method.toUpperCase(),
              Ze(c, e.params, e.paramsSerializer),
              !0
            ),
            (l.timeout = e.timeout),
            "onloadend" in l
              ? (l.onloadend = d)
              : (l.onreadystatechange = function () {
                  l &&
                    4 === l.readyState &&
                    (0 !== l.status ||
                      (l.responseURL &&
                        0 === l.responseURL.indexOf("file:"))) &&
                    setTimeout(d);
                }),
            (l.onabort = function () {
              l &&
                (s(new $e("Request aborted", $e.ECONNABORTED, e, l)),
                (l = null));
            }),
            (l.onerror = function () {
              s(new $e("Network Error", $e.ERR_NETWORK, e, l)), (l = null);
            }),
            (l.ontimeout = function () {
              let t = e.timeout
                ? "timeout of " + e.timeout + "ms exceeded"
                : "timeout exceeded";
              const i = e.transitional || tt;
              e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                s(
                  new $e(
                    t,
                    i.clarifyTimeoutError ? $e.ETIMEDOUT : $e.ECONNABORTED,
                    e,
                    l
                  )
                ),
                (l = null);
            }),
            st.isStandardBrowserEnv)
          ) {
            const t =
              (e.withCredentials || yt(c)) &&
              e.xsrfCookieName &&
              bt.read(e.xsrfCookieName);
            t && n.set(e.xsrfHeaderName, t);
          }
          void 0 === i && n.setContentType(null),
            "setRequestHeader" in l &&
              Ne.forEach(n.toJSON(), function (e, t) {
                l.setRequestHeader(t, e);
              }),
            Ne.isUndefined(e.withCredentials) ||
              (l.withCredentials = !!e.withCredentials),
            r && "json" !== r && (l.responseType = e.responseType),
            "function" == typeof e.onDownloadProgress &&
              l.addEventListener("progress", Et(e.onDownloadProgress, !0)),
            "function" == typeof e.onUploadProgress &&
              l.upload &&
              l.upload.addEventListener("progress", Et(e.onUploadProgress)),
            (e.cancelToken || e.signal) &&
              ((a = (t) => {
                l &&
                  (s(!t || t.type ? new vt(null, e, l) : t),
                  l.abort(),
                  (l = null));
              }),
              e.cancelToken && e.cancelToken.subscribe(a),
              e.signal &&
                (e.signal.aborted
                  ? a()
                  : e.signal.addEventListener("abort", a)));
          const u = (function (e) {
            const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
            return (t && t[1]) || "";
          })(c);
          u && -1 === st.protocols.indexOf(u)
            ? s(
                new $e("Unsupported protocol " + u + ":", $e.ERR_BAD_REQUEST, e)
              )
            : l.send(i || null);
        });
      },
  };
  Ne.forEach(Tt, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", { value: t });
      } catch (e) {}
      Object.defineProperty(e, "adapterName", { value: t });
    }
  });
  const xt = (e) => {
    e = Ne.isArray(e) ? e : [e];
    const { length: t } = e;
    let s, i;
    for (
      let n = 0;
      n < t && ((s = e[n]), !(i = Ne.isString(s) ? Tt[s.toLowerCase()] : s));
      n++
    );
    if (!i) {
      if (!1 === i)
        throw new $e(
          `Adapter ${s} is not supported by the environment`,
          "ERR_NOT_SUPPORT"
        );
      throw new Error(
        Ne.hasOwnProp(Tt, s)
          ? `Adapter '${s}' is not available in the build`
          : `Unknown adapter '${s}'`
      );
    }
    if (!Ne.isFunction(i)) throw new TypeError("adapter is not a function");
    return i;
  };
  function Ct(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new vt(null, e);
  }
  function Ot(e) {
    Ct(e),
      (e.headers = ft.from(e.headers)),
      (e.data = ht.call(e, e.transformRequest)),
      -1 !== ["post", "put", "patch"].indexOf(e.method) &&
        e.headers.setContentType("application/x-www-form-urlencoded", !1);
    return xt(e.adapter || at.adapter)(e).then(
      function (t) {
        return (
          Ct(e),
          (t.data = ht.call(e, e.transformResponse, t)),
          (t.headers = ft.from(t.headers)),
          t
        );
      },
      function (t) {
        return (
          mt(t) ||
            (Ct(e),
            t &&
              t.response &&
              ((t.response.data = ht.call(e, e.transformResponse, t.response)),
              (t.response.headers = ft.from(t.response.headers)))),
          Promise.reject(t)
        );
      }
    );
  }
  const Pt = (e) => (e instanceof ft ? e.toJSON() : e);
  function At(e, t) {
    t = t || {};
    const s = {};
    function i(e, t, s) {
      return Ne.isPlainObject(e) && Ne.isPlainObject(t)
        ? Ne.merge.call({ caseless: s }, e, t)
        : Ne.isPlainObject(t)
        ? Ne.merge({}, t)
        : Ne.isArray(t)
        ? t.slice()
        : t;
    }
    function n(e, t, s) {
      return Ne.isUndefined(t)
        ? Ne.isUndefined(e)
          ? void 0
          : i(void 0, e, s)
        : i(e, t, s);
    }
    function r(e, t) {
      if (!Ne.isUndefined(t)) return i(void 0, t);
    }
    function a(e, t) {
      return Ne.isUndefined(t)
        ? Ne.isUndefined(e)
          ? void 0
          : i(void 0, e)
        : i(void 0, t);
    }
    function o(s, n, r) {
      return r in t ? i(s, n) : r in e ? i(void 0, s) : void 0;
    }
    const l = {
      url: r,
      method: r,
      data: r,
      baseURL: a,
      transformRequest: a,
      transformResponse: a,
      paramsSerializer: a,
      timeout: a,
      timeoutMessage: a,
      withCredentials: a,
      adapter: a,
      responseType: a,
      xsrfCookieName: a,
      xsrfHeaderName: a,
      onUploadProgress: a,
      onDownloadProgress: a,
      decompress: a,
      maxContentLength: a,
      maxBodyLength: a,
      beforeRedirect: a,
      transport: a,
      httpAgent: a,
      httpsAgent: a,
      cancelToken: a,
      socketPath: a,
      responseEncoding: a,
      validateStatus: o,
      headers: (e, t) => n(Pt(e), Pt(t), !0),
    };
    return (
      Ne.forEach(Object.keys(Object.assign({}, e, t)), function (i) {
        const r = l[i] || n,
          a = r(e[i], t[i], i);
        (Ne.isUndefined(a) && r !== o) || (s[i] = a);
      }),
      s
    );
  }
  const Lt = "1.4.0",
    Mt = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
      Mt[e] = function (s) {
        return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
      };
    }
  );
  const kt = {};
  Mt.transitional = function (e, t, s) {
    function i(e, t) {
      return (
        "[Axios v1.4.0] Transitional option '" +
        e +
        "'" +
        t +
        (s ? ". " + s : "")
      );
    }
    return (s, n, r) => {
      if (!1 === e)
        throw new $e(
          i(n, " has been removed" + (t ? " in " + t : "")),
          $e.ERR_DEPRECATED
        );
      return (
        t &&
          !kt[n] &&
          ((kt[n] = !0),
          console.warn(
            i(
              n,
              " has been deprecated since v" +
                t +
                " and will be removed in the near future"
            )
          )),
        !e || e(s, n, r)
      );
    };
  };
  const zt = {
      assertOptions: function (e, t, s) {
        if ("object" != typeof e)
          throw new $e("options must be an object", $e.ERR_BAD_OPTION_VALUE);
        const i = Object.keys(e);
        let n = i.length;
        for (; n-- > 0; ) {
          const r = i[n],
            a = t[r];
          if (a) {
            const t = e[r],
              s = void 0 === t || a(t, r, e);
            if (!0 !== s)
              throw new $e(
                "option " + r + " must be " + s,
                $e.ERR_BAD_OPTION_VALUE
              );
          } else if (!0 !== s)
            throw new $e("Unknown option " + r, $e.ERR_BAD_OPTION);
        }
      },
      validators: Mt,
    },
    jt = zt.validators;
  class It {
    constructor(e) {
      (this.defaults = e),
        (this.interceptors = { request: new et(), response: new et() });
    }
    request(e, t) {
      "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
        (t = At(this.defaults, t));
      const { transitional: s, paramsSerializer: i, headers: n } = t;
      let r;
      void 0 !== s &&
        zt.assertOptions(
          s,
          {
            silentJSONParsing: jt.transitional(jt.boolean),
            forcedJSONParsing: jt.transitional(jt.boolean),
            clarifyTimeoutError: jt.transitional(jt.boolean),
          },
          !1
        ),
        null != i &&
          (Ne.isFunction(i)
            ? (t.paramsSerializer = { serialize: i })
            : zt.assertOptions(
                i,
                { encode: jt.function, serialize: jt.function },
                !0
              )),
        (t.method = (t.method || this.defaults.method || "get").toLowerCase()),
        (r = n && Ne.merge(n.common, n[t.method])),
        r &&
          Ne.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            (e) => {
              delete n[e];
            }
          ),
        (t.headers = ft.concat(r, n));
      const a = [];
      let o = !0;
      this.interceptors.request.forEach(function (e) {
        ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
          ((o = o && e.synchronous), a.unshift(e.fulfilled, e.rejected));
      });
      const l = [];
      let c;
      this.interceptors.response.forEach(function (e) {
        l.push(e.fulfilled, e.rejected);
      });
      let d,
        u = 0;
      if (!o) {
        const e = [Ot.bind(this), void 0];
        for (
          e.unshift.apply(e, a),
            e.push.apply(e, l),
            d = e.length,
            c = Promise.resolve(t);
          u < d;

        )
          c = c.then(e[u++], e[u++]);
        return c;
      }
      d = a.length;
      let p = t;
      for (u = 0; u < d; ) {
        const e = a[u++],
          t = a[u++];
        try {
          p = e(p);
        } catch (e) {
          t.call(this, e);
          break;
        }
      }
      try {
        c = Ot.call(this, p);
      } catch (e) {
        return Promise.reject(e);
      }
      for (u = 0, d = l.length; u < d; ) c = c.then(l[u++], l[u++]);
      return c;
    }
    getUri(e) {
      return Ze(
        wt((e = At(this.defaults, e)).baseURL, e.url),
        e.params,
        e.paramsSerializer
      );
    }
  }
  Ne.forEach(["delete", "get", "head", "options"], function (e) {
    It.prototype[e] = function (t, s) {
      return this.request(
        At(s || {}, { method: e, url: t, data: (s || {}).data })
      );
    };
  }),
    Ne.forEach(["post", "put", "patch"], function (e) {
      function t(t) {
        return function (s, i, n) {
          return this.request(
            At(n || {}, {
              method: e,
              headers: t ? { "Content-Type": "multipart/form-data" } : {},
              url: s,
              data: i,
            })
          );
        };
      }
      (It.prototype[e] = t()), (It.prototype[e + "Form"] = t(!0));
    });
  const Rt = It;
  class _t {
    constructor(e) {
      if ("function" != typeof e)
        throw new TypeError("executor must be a function.");
      let t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      const s = this;
      this.promise.then((e) => {
        if (!s._listeners) return;
        let t = s._listeners.length;
        for (; t-- > 0; ) s._listeners[t](e);
        s._listeners = null;
      }),
        (this.promise.then = (e) => {
          let t;
          const i = new Promise((e) => {
            s.subscribe(e), (t = e);
          }).then(e);
          return (
            (i.cancel = function () {
              s.unsubscribe(t);
            }),
            i
          );
        }),
        e(function (e, i, n) {
          s.reason || ((s.reason = new vt(e, i, n)), t(s.reason));
        });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(e) {
      this.reason
        ? e(this.reason)
        : this._listeners
        ? this._listeners.push(e)
        : (this._listeners = [e]);
    }
    unsubscribe(e) {
      if (!this._listeners) return;
      const t = this._listeners.indexOf(e);
      -1 !== t && this._listeners.splice(t, 1);
    }
    static source() {
      let e;
      return {
        token: new _t(function (t) {
          e = t;
        }),
        cancel: e,
      };
    }
  }
  const Bt = _t;
  const Nt = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };
  Object.entries(Nt).forEach(([e, t]) => {
    Nt[t] = e;
  });
  const Dt = Nt;
  const Ft = (function e(t) {
    const s = new Rt(t),
      i = ne(Rt.prototype.request, s);
    return (
      Ne.extend(i, Rt.prototype, s, { allOwnKeys: !0 }),
      Ne.extend(i, s, null, { allOwnKeys: !0 }),
      (i.create = function (s) {
        return e(At(t, s));
      }),
      i
    );
  })(at);
  (Ft.Axios = Rt),
    (Ft.CanceledError = vt),
    (Ft.CancelToken = Bt),
    (Ft.isCancel = mt),
    (Ft.VERSION = Lt),
    (Ft.toFormData = We),
    (Ft.AxiosError = $e),
    (Ft.Cancel = Ft.CanceledError),
    (Ft.all = function (e) {
      return Promise.all(e);
    }),
    (Ft.spread = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    }),
    (Ft.isAxiosError = function (e) {
      return Ne.isObject(e) && !0 === e.isAxiosError;
    }),
    (Ft.mergeConfig = At),
    (Ft.AxiosHeaders = ft),
    (Ft.formToJSON = (e) => it(Ne.isHTMLForm(e) ? new FormData(e) : e)),
    (Ft.HttpStatusCode = Dt),
    (Ft.default = Ft);
  const Gt = Ft;
  window.addEventListener("load", function (e) {
    !(async function () {
      if (document.querySelector(".swiper")) {
        const e = new Z(".swiper", {
            modules: [te, ie],
            observer: !0,
            observeParents: !0,
            slidesPerView: 1,
            spaceBetween: 30,
            autoHeight: !0,
            speed: 1e3,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            on: {},
          }),
          t = document.querySelector(".projects__button-next");
        document
          .querySelector(".projects__button-prev")
          .addEventListener("click", function () {
            e.slidePrev();
          }),
          t.addEventListener("click", function () {
            e.slideNext();
          });
        const s = document.querySelectorAll(".projects__type"),
          i = await Gt.get(
            "https://645590daa74f994b335ca976.mockapi.io/repair"
          ).then((e) => e.data);
        let n = document.querySelectorAll(".item__subtitle");
        function r() {
          const t = e.realIndex;
          for (let e = 0; e < s.length; e++)
            (s[e].style.color = "rgba(255,255,255,0.3)"),
              (n[e].textContent = i[t][e]);
          s[t].style.color = "#E3B873";
        }
        for (let a = 0; a < s.length; a++)
          s[a].addEventListener("click", () => {
            e.slideTo(a), r();
          });
        e.on("slideChange", function () {
          const t = e.realIndex;
          for (let e = 0; e < s.length; e++)
            (s[e].style.color = "rgba(255,255,255,0.3)"),
              (n[e].textContent = i[t][e]);
          s[t].style.color = "#E3B873";
        });
      }
      document.querySelector(".swiper-second") &&
        new Z(".swiper-second", {
          modules: [te],
          observer: !0,
          observeParents: !0,
          slidesPerView: 1,
          spaceBetween: 30,
          autoHeight: !0,
          speed: 1e3,
          navigation: {
            nextEl: ".realize__button-next",
            prevEl: ".realize__button-prev",
          },
          on: {},
        });
    })();
  }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      let i = document.querySelector(".icon-menu");
      i &&
        i.addEventListener("click", function (i) {
          e &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? t(e) : s(e);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })();
  const $t = document.querySelector(".control__video-button"),
    qt = document.querySelector(".control__layout"),
    Ht = document.querySelector(".control__play");
  Ht.addEventListener("click", function () {
    qt.classList.remove("video-active"),
      $t.classList.remove("video-active"),
      Ht.pause();
  }),
    $t.addEventListener("click", function () {
      qt.classList.add("video-active"),
        $t.classList.add("video-active"),
        Ht.play();
    });
  const Vt = document.querySelectorAll(".realize__item");
  let Ut = document.querySelectorAll(".realize__image"),
    Wt = [
      [
        "img/realize1.jpg",
        "img/realize2.jpg",
        "img/realize4.jpg",
        "img/realize3.jpg",
      ],
      [
        "./img/realize3.jpg",
        "./img/realize4.jpg",
        "./img/realize1.jpg",
        "./img/realize2.jpg",
      ],
      [
        "./img/realize1.jpg",
        "./img/realize2.jpg",
        "./img/realize4.jpg",
        "./img/realize3.jpg",
      ],
      [
        "./img/realize3.jpg",
        "./img/realize4.jpg",
        "./img/realize1.jpg",
        "./img/realize2.jpg",
      ],
      [
        "./img/realize1.jpg",
        "./img/realize2.jpg",
        "./img/realize4.jpg",
        "./img/realize3.jpg",
      ],
      [
        "./img/realize3.jpg",
        "./img/realize4.jpg",
        "./img/realize1.jpg",
        "./img/realize2.jpg",
      ],
      [
        "./img/realize1.jpg",
        "./img/realize2.jpg",
        "./img/realize4.jpg",
        "./img/realize3.jpg",
      ],
      [
        "./img/realize2.jpg",
        "./img/realize4.jpg",
        "./img/realize1.jpg",
        "./img/realize2.jpg",
      ],
      [
        "./img/realize3.jpg",
        "./img/realize4.jpg",
        "./img/realize1.jpg",
        "./img/realize2.jpg",
      ],
      [
        "./img/realize1.jpg",
        "./img/realize2.jpg",
        "./img/realize4.jpg",
        "./img/realize3.jpg",
      ],
      [
        "./img/realize2.jpg",
        "./img/realize4.jpg",
        "./img/realize1.jpg",
        "./img/realize2.jpg",
      ],
    ];
  function Xt(e) {
    for (let e = 0; e < Vt.length; e++) Vt[e].style.color = "#FFFFFF";
    Vt[e].style.color = "#E3B873";
    for (let t = 0; t < Ut.length; t++) Ut[t].setAttribute("src", Wt[e][t]);
  }
  for (let e = 0; e < Vt.length; e++)
    Vt[e].addEventListener("click", () => {
      Xt(e);
    });
})();
