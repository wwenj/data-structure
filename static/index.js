!(function (e, t) {
  typeof exports === 'object' && typeof module === 'object' ? module.exports = t() : typeof define === 'function' && define.amd ? define([], t) : typeof exports === 'object' ? exports.waterMark = t() : e.waterMark = t()
}(window, function () {
  return (function (e) {
    var t = {}

    function n(o) {
      if (t[o]) {
        return t[o].exports
      }
      var r = t[o] = {
        i: o,
        l: !1,
        exports: {}
      }
      return e[o].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    return n.m = e,
      n.c = t,
      n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: o
        })
      },
      n.r = function (e) {
        Object.defineProperty(e, '__esModule', {
          value: !0
        })
      },
      n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
          } :
          function () {
            return e
          }

        return n.d(t, 'a', t),
          t
      },
      n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      },
      n.p = '',
      n(n.s = 21)
  }([function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', {
          value: !0
        }),
        t.uuidv4 = t.isIPhone = t.getTextWidth = t.debounce = t.extend = t.renderUrl = t.isOpenConsole = t.getSelectionHtml = t.createCookie = t.readCookie = t.myLocalStorage = t.stopEvent = t.isCanvasSupported = t.sendData = t.SAVE_END_HASH_KEY = t.SAVE_KEY = void 0
      var o = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) {
          return typeof e
        } :
        function (e) {
          return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
        }

      t.disableCopy = function (e) {
          e.addEventListener('copy', function (e) {
              return e.preventDefault && e.preventDefault(),
                e.stopPropagation && e.stopPropagation(),
                !1
            }),
            e.addEventListener('keydown', function (e) {
              var t = e.keyCode,
                n = e.ctrlKey || e.metaKey
              return !((!n || !e.altKey) && (n && t === 67 ? (b(e),
                1) : n && t === 88 && (b(e),
                1)))
            })
        },
        t.disableContextMenu = function () {
          document.addEventListener('contextmenu', function (e) {
            return b(e),
              !1
          })
        },
        t.addStyleToHead = x,
        t.disableSelectElFn = function (e) {
          x('\n        .noselect {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n        }'),
            e.style.userSelect = 'none',
            e.className += e.className + ' noselect'
        },
        t.getFormateDate = _,
        t.getNewUserHash = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _(),
            n = arguments[2]
          try {
            var o = t + '-' + e + '-' + (n || (0,
              p.default)())
            return E.set(h, o),
              o
          } catch (o) {
            return t + '-' + e + '-exception-' + (n || (0,
              p.default)())
          }
        },
        t.updateUserHash = function (e, t) {
          E.set(h, e),
            E.set(g, t)
        }

      var r = v(n(5)),
        i = v(n(3)),
        a = v(n(2)),
        d = v(n(18)),
        s = v(n(17)),
        u = v(n(16)),
        l = v(n(15)),
        c = v(n(14)),
        f = v(n(13)),
        m = v(n(12)),
        p = v(n(11))

      function v(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var y, h = t.SAVE_KEY = '__hash__wa',
        g = t.SAVE_END_HASH_KEY = '__hash__cache',
        b = (t.sendData = function (e, t, n, i) {
            (void 0 === t ? 'undefined' : o(t)) === 'object' && (t = (0,
              u.default)(t)),
            (0,
              r.default)(e + '?' + t, 'callback', n, i)
          },
          t.isCanvasSupported = !(!(y = document.createElement('canvas')).getContext || !y.getContext('2d')),
          t.stopEvent = function (e) {
            e.preventDefault && e.preventDefault(),
              e.stopImmediatePropagation && e.stopImmediatePropagation()
          }
        )

      function x(e) {
        var t = document.head || document.getElementsByTagName('head')[0],
          n = document.createElement('style')
        n.type = 'text/css',
          'styleSheet' in n ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e)),
          t.appendChild(n)
      }

      function _() {
        var e = new Date(),
          t = e.getUTCMonth() + 1,
          n = e.getUTCDate()
        return '' + e.getUTCFullYear() + (t = t < 10 ? '0' + t : t) + (n < 10 ? '0' + n : n)
      }
      var E = t.myLocalStorage = {
        get: function (e) {
          try {
            var t = localStorage.getItem(e)
            if (t) {
              return t
            }
            var n = (0,
              i.default)(e)
            return n && localStorage.setItem(e, n),
              n
          } catch (e) {
            return ''
          }
        },
        set: function (e, t) {
          try {
            localStorage.setItem(e, t),
              (0,
                a.default)(e, t, 360)
          } catch (n) {
            try {
              (0,
                a.default)(e, t, 360)
            } catch (e) {}
          }
        }
      }
      t.readCookie = i.default,
        t.createCookie = a.default,
        t.getSelectionHtml = d.default,
        t.isOpenConsole = s.default,
        t.renderUrl = u.default,
        t.extend = l.default,
        t.debounce = c.default,
        t.getTextWidth = f.default,
        t.isIPhone = m.default,
        t.uuidv4 = p.default
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', {
        value: !0
      })
      var o, r = '//shuiyin.sec.xiaojukeji.com/'
      t.IFRAME_SRC = o = '//sec-aegisfe.didistatic.com/static/aegisfe/save-hash-iframe.html',
        t.COLLECTION_URL = r + 'data_upload',
        t.GET_UID_URL = r + 'get_uid',
        t.RULES_UPLOAD_URL = r + 'rules_upload'
      var i = t.BRAZIL_URLS = [/99taxis\.mobi/],
        a = (t.IS_BRAZIL = (function () {
            var e = window.location.href,
              t = !0,
              n = !1,
              o = void 0
            try {
              for (var r, a = i[Symbol.iterator](); !(t = (r = a.next()).done); t = !0) {
                if (r.value.test(e)) {
                  return !0
                }
              }
            } catch (e) {
              n = !0,
                o = e
            } finally {
              try {
                !t && a.return && a.return()
              } finally {
                if (n) {
                  throw o
                }
              }
            }
            return !1
          }()),
          t.CUT_LEN = 100,
          t.LCA_PORTS = [18988, 18788, 18888],
          t.textConfig = {
            textFont: '24px Times New Roman',
            textshadowColor: 'rgba(0, 0, 0, 0)',
            textshadowBlur: 0,
            textRotate: 30
          },
          t.actionMap = {
            removePrintLayer: 'remove-print-layer',
            modifyPrintLayer: 'modify-print-layer',
            removeBodyUserSelect: 'remove-body-userSelect',
            openConsole: 'open-console',
            onbeforeprint: 'onbeforeprint',
            onafterprint: 'onafterprint',
            getEventListeners: 'getEventListeners',
            removeWaterMark: 'remove-water-mark',
            modifyWaterMark: 'modify-water-mark',
            disableWaterMark: 'disable-water-mark',
            replaceBody: 'replace-body',
            copy: 'copy',
            heart: 'heart-beat'
          }, {
            systemId: '',
            userId: '',
            timestamp: '',
            containerEl: document.body,
            data: {},
            imgWidth: 0,
            imgHeight: 0,
            imgWidthDis: 50,
            imgHeightDis: 50,
            textStyle: 'rgba(0, 0, 0, 0.15)',
            zIndex: 1e4,
            time: 2500,
            disableContextMenu: !1,
            disableSelect: !1,
            disableCopy: !1,
            listernerCopy: !0,
            disableGetEventListeners: !0,
            disablePrint: !1,
            elCount: 50,
            printColor: 'rgba(0, 0, 0, 0.15)',
            printCssText: 'font-size: 24px;line-height: 100px; width:200px;color:{printColor}',
            printConCssText: 'pointer-events: none; transform: rotate(30deg); display: flex; flex-wrap: wrap; flex-direction: row; width: 100%; height: 100%; top: 0; left: 0; position: fixed; z-index: 1000; opacity:0;'
          })
      // t.ANIMATE_CSS = '\n    .water-animated {\n        animation-duration: .5s;\n        animation-fill-mode: both;\n    }\n    @keyframes water-fadeIn {\n        from {\n            opacity: 0;\n        }\n\n        to {\n            opacity: 1;\n        }\n    }\n\n    .water-fadeIn {\n            animation-name: water-fadeIn;\n    }\n',
      t.ANIMATE_CSS = '',
        t.DISABLE_WATER_MSG = '检测到你的水印显示异常，请谨慎操作！请联系xiongjian@didichuxing.com',
        t.WATER_VERSION = '3.5.7',
        t.FP_CANVAS_NAME = 'user-fingerprint-water-mark',
        t.IFRAME_SRC = o,
        t.default = a
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', {
          value: !0
        }),
        t.default = function (e, t, n) {
          var o = ''
          if (n) {
            var r = new Date()
            r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3),
              o = '; expires=' + r.toUTCString()
          }
          document.cookie = e + '=' + t + o + '; path=/'
        }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', {
          value: !0
        }),
        t.default = function (e) {
          for (var t = e + '=', n = document.cookie.split(';'), o = 0; o < n.length; o++) {
            for (var r = n[o]; r.charAt(0) === ' ';) {
              r = r.substring(1, r.length)
            }
            if (r.indexOf(t) === 0) {
              return r.substring(t.length, r.length)
            }
          }
          return null
        }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', {
          value: !0
        }),
        t.default = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () {},
            d = void 0
          if (n = Object.assign({
              action: r.actionMap[t] || ''
            }, n),
            e.url && !(i && +new Date() - i < 3e5)) {
            var s = Object.assign({
              currentUrl: location.href,
              systemId: e.systemId,
              userId: e.userId,
              version: r.WATER_VERSION,
              timestamp: e.timestamp || ''
            }, n)
            d = e.data && Object.keys(e.data).length > 0 ? (0,
                o.extend)(e.data || {}, s) : s,
              (0,
                o.sendData)(e.url, d, function () {
                i = null,
                  a()
              }, function () {
                i = +new Date()
              })
          }
        }

      var o = n(0),
        r = n(1),
        i = void 0
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', {
        value: !0
      })
      var o = function e(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'callback',
          o = arguments[2],
          r = arguments[3],
          i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 30,
          a = void 0,
          d = '__getjsonpdata' + e.timer++
        t = t + (/\?/.test(t) ? '&' : '?') + n + '=' + d
        var s = window
        s[d] = function (e) {
          try {
            o(e)
          } finally {
            l()
          }
        }

        var u = document.createElement('script')
        u.type = 'text/javascript',
          u.charset = 'utf-8',
          u.src = t,
          u.async = !0
        var l = function () {
            window.clearTimeout(a),
              u.parentNode.removeChild(u),
              delete s[d]
          },
          c = function () {
            l(),
              r()
          }
        u.onerror = c,
          a = window.setTimeout(c, 1e3 * i),
          (document.head || document.getElementsByTagName('head')[0]).appendChild(u)
      }
      o.timer = 1,
        t.default = o
    }, ,
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', {
        value: !0
      })
      var o = window
      t.default = o.MutationObserver || o.WebKitMutationObserver || o.MozMutationObserver
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', {
          value: !0
        }),
        t.default = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {},
            n = document.createElement('iframe'),
            i = document.createElement('a')
          i.href = o.IFRAME_SRC,
            window.addEventListener('message', function (o) {
              var a = o.data,
                d = void 0 === a ? {} : a,
                s = o.origin
              if (s === 'http://' + i.host || s === 'https://' + i.host) {
                var u = d.userHash,
                  l = d.oldEndHash,
                  c = {}
                l && l !== 'undefined' || (l = c.oldEndHash = (0,
                    r.uuidv4)()),
                  u && u !== 'undefined' || (u = (0,
                      r.getNewUserHash)(e.systemId + '-' + e.userId, e.timestamp, l),
                    c.userHash = u),
                  e.data = (0,
                    r.extend)(e.data || {}, {
                    fp_canvas: u
                  }),
                  Object.keys(c).length && n.contentWindow.postMessage(c, '*'),
                  (0,
                    r.updateUserHash)(u, l),
                  t(),
                  setTimeout(function () {
                    try {
                      n.parentNode.removeChild(n)
                    } catch (e) {}
                  }, 2e3)
              }
            }, !1),
            n.setAttribute('id', 'js-watermark-iframe'),
            n.setAttribute('src', o.IFRAME_SRC),
            n.style.width = '0',
            n.style.height = '0',
            n.style.visibility = 'hidden',
            document.body.appendChild(n)
        }

      var o = n(1),
        r = n(0)
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', {
        value: !0
      })
      var o = n(0),
        r = n(1),
        i = d(n(4)),
        a = d(n(8))

      function d(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      t.default = function (e, t) {
        var n = (0,
          o.extend)(e, {
          version: r.WATER_VERSION
        })
        n.containerEl && (n.containerEl = String(e.containerEl))
        var d = void 0,
          s = !1,
          u = function () {
            var a
            clearTimeout(d),
              s || (e.data && e.data.fp_canvas && (a = e.data.fp_canvas,
                  (0,
                    o.readCookie)(r.FP_CANVAS_NAME) !== a && (0,
                    o.createCookie)(r.FP_CANVAS_NAME, a, 360),
                  t(e.data.fp_canvas)),
                s = !0,
                (0,
                  i.default)(Object.assign({}, e, {
                  url: r.RULES_UPLOAD_URL
                }), '', n))
          }
        d = setTimeout(u, 5e3),
          (0,
            a.default)(e, u)
      }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', {
        value: !0
      })
      t.default = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18e5,
          n = !0,
          o = (new Date()).getTime(),
          r = void 0,
          i = document

        function a(i) {
          i && (o = (new Date()).getTime(),
              e()),
            clearTimeout(r)
          var d = (new Date()).getTime()
          n && d - o >= t && (o = (new Date()).getTime(),
              e()),
            r = setTimeout(a, t)
        }

        function d() {
          n = !0,
            a(!0)
        }

        function s() {
          n = !1,
            clearTimeout(r)
        }
        var u = 'hidden',
          l = void 0
        u in document ? l = 'visibilitychange' : (u = 'mozHidden') in document ? l = 'mozvisibilitychange' : (u = 'webkitHidden') in document ? l = 'webkitvisibilitychange' : (u = 'msHidden') in document && (l = 'msvisibilitychange'),
          void 0 === i[u] ? (window.onfocus = d,
            window.onblur = s) : document.addEventListener(l, function () {
            return i[u] ? s() : d()
          }, !1),
          a(!0)
      }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', {
          value: !0
        }),
        t.default = function () {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
            var t = 16 * Math.random() | 0
            return (e === 'x' ? t : 3 & t | 8).toString(16)
          })
        }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', {
        value: !0
      })
      var o = !!navigator.userAgent.match(/iPhone/i)
      t.default = o
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', {
          value: !0
        }),
        t.default = function (e, t) {
          var n = document.createElement('canvas'),
            o = n.getContext('2d')
          return o.font = t,
            n = null,
            o.measureText(e).width
        }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', {
          value: !0
        }),
        t.default = function (e, t) {
          var n = void 0,
            o = void 0,
            r = void 0,
            i = void 0,
            a = void 0,
            d = void 0,
            s = function s() {
              (d = +new Date() - i) < t && d >= 0 ? n = setTimeout(s, t - d) : (n = null,
                a = e.apply(r, o),
                n || (r = o = null))
            }
          return function () {
            return r = this,
              o = arguments,
              i = +new Date(),
              n || (n = setTimeout(s, t)),
              a
          }
        }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', {
          value: !0
        }),
        t.default = function () {
          for (var e = {}, t = Object.prototype.toString, n = arguments.length, o = Array(n), r = 0; r < n; r++) {
            o[r] = arguments[r]
          }
          var i = function (n) {
              n !== null && t.call(n) === '[object Object]' && Object.keys(n).forEach(function (t) {
                e[t] = n[t]
              })
            },
            a = !0,
            d = !1,
            s = void 0
          try {
            for (var u, l = o[Symbol.iterator](); !(a = (u = l.next()).done); a = !0) {
              i(u.value)
            }
          } catch (e) {
            d = !0,
              s = e
          } finally {
            try {
              !a && l.return && l.return()
            } finally {
              if (d) {
                throw s
              }
            }
          }
          return e
        }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', {
        value: !0
      })
      var o = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) {
          return typeof e
        } :
        function (e) {
          return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
        }

      t.default = function (e) {
        var t = ''
        if ((void 0 === e ? 'undefined' : o(e)) === 'object') {
          for (var n in e) {
            t += encodeURIComponent(n) + '=' + encodeURIComponent(e[n]) + '&'
          }
          t = t.replace(/&$/, '')
        }
        return t
      }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', {
          value: !0
        }),
        t.default = function () {
          var e = window.outerWidth - window.innerWidth > 200,
            t = window.outerHeight - window.innerHeight > 200,
            n = window
          if (t && e || !(n.Firebug && n.Firebug.chrome && n.Firebug.chrome.isInitialized || e || t)) {
            if (o) {
              return o = !1
            }
          } else if (!o) {
            return o = !0
          }
          return !1
        }

      var o = !1
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', {
          value: !0
        }),
        t.default = function () {
          var e = ''
          if (void 0 !== window.getSelection) {
            var t = window.getSelection()
            if (t.rangeCount) {
              for (var n = document.createElement('div'), o = 0, r = t.rangeCount; o < r; ++o) {
                n.appendChild(t.getRangeAt(o).cloneContents())
              }
              e = n.innerText
            }
          } else if ('selection' in document) {
            var i = document
            i.selection.type === 'Text' && (e = i.selection.createRange().htmlText)
          }
          return e
        }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', {
        value: !0
      })
      var o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n]
              o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n),
              o && e(t, o),
              t
          }
        }()),
        r = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
              }
            }(this, e)),
            this.monitors = [],
              this.timmer = null,
              this.time = t || 2e3,
              this.isStop = !1
          }
          return o(e, [{
              key: 'addMonitor',
              value: function (e) {
                return this.monitors.push(e),
                  this
              }
            }, {
              key: 'done',
              value: function () {
                return this.isStop ? (clearTimeout(this.timmer),
                  this) : (this.monitors.forEach(function (e) {
                    e()
                  }),
                  this.timmer = setTimeout(this.done.bind(this), this.time),
                  this)
              }
            }, {
              key: 'start',
              value: function () {
                return this.timmer = setTimeout(this.done.bind(this), this.time),
                  this.isStop = !1,
                  this
              }
            }, {
              key: 'stop',
              value: function () {
                return this.isStop = !0,
                  clearTimeout(this.timmer),
                  this
              }
            }]),
            e
        }())
      t.default = r
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', {
        value: !0
      })
      var o = {
        method: 'GET',
        url: '',
        data: {},
        success: function () {},
        error: function () {}
      }
      t.default = function (e) {
        var t = Object.assign(o, e),
          n = void 0
        n = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
        var r = []
        for (var i in t.data) {
          t.data.hasOwnProperty(i) && r.push(i + '=' + t.data[i])
        }
        var a = r.join('&')
        t.method.toUpperCase() === 'GET' ? (n.open(e.method, e.url + '?' + a, !0),
            n.send(null)) : e.method.toUpperCase() === 'POST' && (n.open(e.method, e.url, !0),
            n.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            n.send(a)),
          n.onreadystatechange = function () {
            n.readyState == 4 && (n.status >= 200 && n.status < 300 || n.status == 304 ? e.success(n.responseText) : e.error(n.status, n.statusText, n.responseText))
          }
      }
    },
    function (e, t, n) {
      'use strict'
      var o = n(1),
        r = m(o),
        i = m(n(20)),
        a = m(n(5)),
        d = m(n(19)),
        s = m(n(4)),
        u = m(n(10)),
        l = n(0),
        c = m(n(9)),
        f = m(n(7))

      function m(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function p(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) {
            n[t] = e[t]
          }
          return n
        }
        return Array.from(e)
      }
      var v = !1,
        y = void 0,
        h = {
          AgentUuid: '',
          LocalUserAccount: ''
        }!(function () {
          for (var e = void 0, t = 0, n = o.LCA_PORTS.length; t < n; t++) {
            e = r(o.LCA_PORTS[t], e)
          }

          function r(e, t) {
            return function () {
              (0,
                i.default)({
                url: 'http://127.0.0.1:' + e + '/lcainfo',
                method: 'GET',
                success: function (e) {
                  try {
                    h = JSON.parse(e)
                  } catch (e) {
                    h = {
                      AgentUuid: '',
                      LocalUserAccount: ''
                    }
                  }
                },
                error: function () {
                  t && t()
                }
              })
            }
          }
          e()
        }())
      var g = {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
          attributeOldValue: !0,
          characterDataOldValue: !0
        },
        b = window,
        x = function (e) {
          /^\d+$/.test(e.text) && (e.text = parseInt(e.uid, 10).toString(32) + parseInt('' + e.timestamp, 10).toString(32)),
            o.IS_BRAZIL && (e.text += 'z')
        },
        _ = function (e, t, n) {
          if ((0,
              u.default)(function () {
              var e = h,
                t = e.AgentUuid,
                o = e.LocalUserAccount
              n('heart', {
                AgentUuid: t,
                LocalUserAccount: o
              })
            }),
            (e.disableSelect || e.disableSelectEl) && (e.disableSelectEl = e.disableSelectEl || document.body,
              (0,
                l.disableSelectElFn)(e.disableSelectEl)),
            e.disableContextMenu && (0,
              l.disableContextMenu)(),
            (e.disableCopy || e.disableCopyEl) && ((0,
                l.disableCopy)(e.disableCopyEl || document.body),
              e.disableSelect || e.disableSelectEl || (e.disableSelectEl = e.disableSelectEl || document.body,
                (0,
                  l.disableSelectElFn)(e.disableSelectEl))),
            e.disablePrint) {
            var r = void 0
            e.printCssText = e.printCssText.replace('{printColor}', e.printColor)
            var i = function () {
              for (var t = document.createDocumentFragment(), n = e.elCount, o = void 0; n--;) {
                (o = document.createElement('span')).style.cssText = e.printCssText,
                  o.innerHTML = e.text,
                  t.appendChild(o)
              }
              var i = document.createElement('div')
              i.style.cssText = e.printConCssText,
                i.setAttribute('id', 'js-print-con'),
                i.appendChild(t),
                document.body.appendChild(i),
                r = i.outerHTML.replace(/\s*(opacity):\s*0;/, '')
            }
            i(),
              t.addMonitor(function () {
                var e = document.getElementById('js-print-con')
                e ? e.outerHTML.replace(/\s*(opacity):\s*0;/, '') !== r && (n('modifyPrintLayer'),
                  e.parentNode.removeChild(e),
                  i()) : (n('removePrintLayer'),
                  i())
              })
          }
          e.listernerCopy && document.addEventListener('copy', function () {
              var e = ((0,
                l.getSelectionHtml)() || '').trim().replace(/[\s|\r|\t]+/gm, '')
              e.length > o.CUT_LEN && (e = e.slice(0, o.CUT_LEN / 2) + '--前后拼接--' + e.slice(-o.CUT_LEN / 2)),
                e && n('copy', {
                  copyText: e,
                  copyTextLen: e.length
                })
            }),
            (e.disableSelect || e.disableSelectEl || e.disableCopy) && t.addMonitor(function () {
              (e.disableSelect || e.disableSelectEl) && e.disableSelectEl.style.userSelect !== 'none' && (e.disableSelectEl.style.userSelect = 'none',
                n('removeBodyUserSelect'))
            })
          var a = b.matchMedia('print')
          a && a.addListener(function (e) {
              var t = document.getElementById('js-print-con')
              t && (t.style.opacity = e.matches ? '1' : '0'),
                e.matches ? n('onbeforeprint') : n('onafterprint')
            }),
            e.disableGetEventListeners && (b.getEventListeners = function () {
              return n('getEventListeners'), {}
            })
          var d = function () {
            (0,
              l.isOpenConsole)() && n('openConsole')
          }
          b.addEventListener('resize', (0,
              l.debounce)(d, 2e3), !1),
            d()
        },
        E = function (e) {
          var t = void 0,
            n = void 0,
            r = void 0,
            i = 1
          e.__id = e.id
          var a = function () {
              n.disconnect(),
                y.stop()
            },
            d = function () {
              r(e),
                y.start()
            }
          if (r = function (e) {
              e.id = e.__id + i,
                i++
              var r = document.createElement('canvas'),
                u = (0,
                  l.getTextWidth)(e.text, o.textConfig.textFont)
              r.width = e.imgWidth ? parseInt('' + e.imgWidth, 10) : u + 2 - u / 20 + e.imgWidthDis,
                r.height = e.imgHeight ? parseInt('' + e.imgHeight, 10) : (u + 30) * Math.sin(Math.PI / 6) + e.imgHeightDis
              var c = r.getContext('2d')
              c.shadowOffsetX = 0,
                c.shadowOffsetY = 0,
                c.shadowBlur = o.textConfig.textshadowBlur,
                c.shadowColor = o.textConfig.textshadowColor,
                c.font = e.textFont,
                c.fillStyle = e.textStyle,
                c.rotate(o.textConfig.textRotate * Math.PI / 180),
                c.textAlign = 'left',
                c.fillText(e.text, 15, 7)
              var m = document.createElement('div')
              m.setAttribute('id', e.id)
              var v = 'pointer-events: none;width:100%;height:100%;top:' + (e.top || 0) + ';left:0;position:absolute;z-index:' + e.zIndex + ';opacity:1;'
              e.containerEl.tagName === 'BODY' && (v = v.replace('absolute', 'fixed')),
                m.style.cssText = v
              var y = r.toDataURL('image/png')
              if (typeof y !== 'boolean' || !1 !== y) {
                m.style.background = 'url(' + y + ') top left repeat',
                  m.className = 'water-animated water-fadeIn',
                  e.containerEl.tagName !== 'BODY' && b.getComputedStyle(e.containerEl).position === 'static' && (e.containerEl.style.position = 'relative'),
                  e.containerEl.appendChild(m),
                  r = null
                var h = document.getElementById(e.id)
                t = h.outerHTML,
                  f.default && (n && (n.disconnect(),
                      n = null),
                    (n = new f.default(function (t) {
                      t.forEach(function (t) {
                        var n = t.oldValue,
                          o = t.target,
                          r = o
                        switch (t.type) {
                          case 'attributes':
                            if (n === r.style.cssText) {
                              return
                            }
                            a(),
                              l.isIPhone || (0,
                                s.default)(e, 'modifyWaterMark', {
                                'modify-style-props': (function (e, t) {
                                  var n = /;\s+/,
                                    o = e.replace(/;$/, '').split(n),
                                    r = t.style.cssText.replace(/;$/, '').split(n),
                                    i = r.filter(function (e) {
                                      return o.indexOf(e) === -1
                                    }),
                                    a = o.filter(function (e) {
                                      return r.indexOf(e) === -1
                                    }),
                                    d = [].concat(p(i), p(a)),
                                    s = d.map(function (e) {
                                      return e.split(':')[0]
                                    }).join('-')
                                  return d.length ? s : ''
                                }(n, r))
                              }),
                              o.parentNode.removeChild(o),
                              d()
                        }
                      })
                    })).observe(h, g))
              } else {
                (0,
                  s.default)(e, 'disableWaterMark', {}, function () {
                  return alert(o.DISABLE_WATER_MSG)
                })
              }
            },
            d(),
            e.__id === 'js-wartermark') {
            var u = document.body
            y.addMonitor(function () {
              var t
              document.body !== u && (e.containerEl = u = document.body,
                (0,
                  s.default)(e, 'replaceBody', {
                  'body-replace': 'body-replace to stop MutationObserver'
                }),
                a(),
                (t = document.getElementById(e.id)).parentNode.removeChild(t),
                d())
            })
          }
          var c = f.default ? function () {
              document.getElementById(e.id) || (r(e),
                (0,
                  s.default)(e, 'removeWaterMark'))
            } :
            function () {
              var n = document.getElementById(e.id)
              n ? n.outerHTML !== t && (n.remove(),
                r(e),
                l.isIPhone || (0,
                  s.default)(e, 'modifyWaterMark')) : (r(e),
                (0,
                  s.default)(e, 'removeWaterMark'))
            }

          y.addMonitor(c)
        }

      function S(e) {
        v ? console.warn('repeat init watermark') : (v = !0,
          e.url = o.COLLECTION_URL,
          y = new d.default(e.time),
          (0,
            l.addStyleToHead)(o.ANIMATE_CSS),
          (0,
            c.default)(e, function (t) {
            (e = (0,
              l.extend)(r.default, e)).data.fp_canvas = t
            var n = function (t, n, o) {
              (0,
                s.default)(e, t, n, o)
            }
            _(e, y, n),
              l.isCanvasSupported ? (x(e),
                E((0,
                  l.extend)(e, {
                  id: 'js-wartermark',
                  textFont: o.textConfig.textFont
                })),
                E((0,
                  l.extend)(e, {
                  id: 'js-wartermarkhd',
                  textFont: o.textConfig.textFont,
                  textStyle: 'rgba(255, 0, 0, 0.01)',
                  containerEl: document.body,
                  top: '30px',
                  imgWidthDis: 10,
                  imgHeightDis: 10
                }))) : n('disableWaterMark', {}, function () {
                return alert(o.DISABLE_WATER_MSG)
              })
          }))
      }

      function w(e) {
        e.timestamp = (0,
            l.getFormateDate)(),
          e.containerEl = e.containerEl || document.body
        var t = o.GET_UID_URL + '?system_id=' + e.systemId + '&user_id=' + e.userId + '&fp_canvas=' + l.myLocalStorage.get(l.SAVE_KEY);
        (0,
          a.default)(t, 'callback', function () {
          var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          n.errno === 0 && n.data && n.data.uid ? (e.timestamp = n.data.timestamp || e.timestamp,
              e.text = n.data.uid + e.timestamp,
              e.uid = n.data.uid) : (console.error(t + ' error\n errmsg:' + n.errmsg),
              e.text = e.systemId + e.userId + e.timestamp),
            S(e)
        }, function () {
          console.error(t + ' error'),
            e.text = e.systemId + e.userId + e.timestamp,
            S(e)
        }, 10)
      }
      var C = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          systemId: '',
          userId: ''
        }
        if (e.systemId && e.userId) {
          if (v) {
            return console.warn('repeat init'),
              '不要反复初始话'
          }
          var t = function t() {
            document.removeEventListener('DOMContentLoaded', t, !1),
              b.removeEventListener('load', t, !1),
              w(e)
          }
          document.readyState === 'complete' ? setTimeout(function () {
            return w(e)
          }) : (document.addEventListener('DOMContentLoaded', t, !1),
            b.addEventListener('load', t, !1))
        } else {
          console.warn('必须指定： systemId userId ')
        }
      }
      C.version = o.WATER_VERSION,
        e.exports = C
    }
  ]))
}))
