! function(e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ReactErrorOverlay = t() : e.ReactErrorOverlay = t()
}(self, (function() {
	return(() => {
		var e = {
				162: (e, t, r) => {
					e.exports = r(47)
				},
				47: e => {
					var t = function(e) {
						"use strict";
						var t, r = Object.prototype,
							n = r.hasOwnProperty,
							o = "function" == typeof Symbol ? Symbol : {},
							a = o.iterator || "@@iterator",
							i = o.asyncIterator || "@@asyncIterator",
							l = o.toStringTag || "@@toStringTag";

						function u(e, t, r) {
							return Object.defineProperty(e, t, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}), e[t]
						}
						try {
							u({}, "")
						} catch(e) {
							u = function(e, t, r) {
								return e[t] = r
							}
						}

						function s(e, t, r, n) {
							var o = t && t.prototype instanceof m ? t : m,
								a = Object.create(o.prototype),
								i = new T(n || []);
							return a._invoke = function(e, t, r) {
								var n = f;
								return function(o, a) {
									if(n === p) throw new Error("Generator is already running");
									if(n === h) {
										if("throw" === o) throw a;
										return L()
									}
									for(r.method = o, r.arg = a;;) {
										var i = r.delegate;
										if(i) {
											var l = _(i, r);
											if(l) {
												if(l === g) continue;
												return l
											}
										}
										if("next" === r.method) r.sent = r._sent = r.arg;
										else if("throw" === r.method) {
											if(n === f) throw n = h, r.arg;
											r.dispatchException(r.arg)
										} else "return" === r.method && r.abrupt("return", r.arg);
										n = p;
										var u = c(e, t, r);
										if("normal" === u.type) {
											if(n = r.done ? h : d, u.arg === g) continue;
											return {
												value: u.arg,
												done: r.done
											}
										}
										"throw" === u.type && (n = h, r.method = "throw", r.arg = u.arg)
									}
								}
							}(e, r, i), a
						}

						function c(e, t, r) {
							try {
								return {
									type: "normal",
									arg: e.call(t, r)
								}
							} catch(e) {
								return {
									type: "throw",
									arg: e
								}
							}
						}
						e.wrap = s;
						var f = "suspendedStart",
							d = "suspendedYield",
							p = "executing",
							h = "completed",
							g = {};

						function m() {}

						function v() {}

						function y() {}
						var b = {};
						u(b, a, (function() {
							return this
						}));
						var w = Object.getPrototypeOf,
							x = w && w(w(R([])));
						x && x !== r && n.call(x, a) && (b = x);
						var E = y.prototype = m.prototype = Object.create(b);

						function k(e) {
							["next", "throw", "return"].forEach((function(t) {
								u(e, t, (function(e) {
									return this._invoke(t, e)
								}))
							}))
						}

						function S(e, t) {
							function r(o, a, i, l) {
								var u = c(e[o], e, a);
								if("throw" !== u.type) {
									var s = u.arg,
										f = s.value;
									return f && "object" == typeof f && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
										r("next", e, i, l)
									}), (function(e) {
										r("throw", e, i, l)
									})) : t.resolve(f).then((function(e) {
										s.value = e, i(s)
									}), (function(e) {
										return r("throw", e, i, l)
									}))
								}
								l(u.arg)
							}
							var o;
							this._invoke = function(e, n) {
								function a() {
									return new t((function(t, o) {
										r(e, n, t, o)
									}))
								}
								return o = o ? o.then(a, a) : a()
							}
						}

						function _(e, r) {
							var n = e.iterator[r.method];
							if(n === t) {
								if(r.delegate = null, "throw" === r.method) {
									if(e.iterator.return && (r.method = "return", r.arg = t, _(e, r), "throw" === r.method)) return g;
									r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
								}
								return g
							}
							var o = c(n, e.iterator, r.arg);
							if("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, g;
							var a = o.arg;
							return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, g) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, g)
						}

						function C(e) {
							var t = {
								tryLoc: e[0]
							};
							1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
						}

						function O(e) {
							var t = e.completion || {};
							t.type = "normal", delete t.arg, e.completion = t
						}

						function T(e) {
							this.tryEntries = [{
								tryLoc: "root"
							}], e.forEach(C, this), this.reset(!0)
						}

						function R(e) {
							if(e) {
								var r = e[a];
								if(r) return r.call(e);
								if("function" == typeof e.next) return e;
								if(!isNaN(e.length)) {
									var o = -1,
										i = function r() {
											for(; ++o < e.length;)
												if(n.call(e, o)) return r.value = e[o], r.done = !1, r;
											return r.value = t, r.done = !0, r
										};
									return i.next = i
								}
							}
							return {
								next: L
							}
						}

						function L() {
							return {
								value: t,
								done: !0
							}
						}
						return v.prototype = y, u(E, "constructor", y), u(y, "constructor", v), v.displayName = u(y, l, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
							var t = "function" == typeof e && e.constructor;
							return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
						}, e.mark = function(e) {
							return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, u(e, l, "GeneratorFunction")), e.prototype = Object.create(E), e
						}, e.awrap = function(e) {
							return {
								__await: e
							}
						}, k(S.prototype), u(S.prototype, i, (function() {
							return this
						})), e.AsyncIterator = S, e.async = function(t, r, n, o, a) {
							void 0 === a && (a = Promise);
							var i = new S(s(t, r, n, o), a);
							return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
								return e.done ? e.value : i.next()
							}))
						}, k(E), u(E, l, "Generator"), u(E, a, (function() {
							return this
						})), u(E, "toString", (function() {
							return "[object Generator]"
						})), e.keys = function(e) {
							var t = [];
							for(var r in e) t.push(r);
							return t.reverse(),
								function r() {
									for(; t.length;) {
										var n = t.pop();
										if(n in e) return r.value = n, r.done = !1, r
									}
									return r.done = !0, r
								}
						}, e.values = R, T.prototype = {
							constructor: T,
							reset: function(e) {
								if(this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(O), !e)
									for(var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
							},
							stop: function() {
								this.done = !0;
								var e = this.tryEntries[0].completion;
								if("throw" === e.type) throw e.arg;
								return this.rval
							},
							dispatchException: function(e) {
								if(this.done) throw e;
								var r = this;

								function o(n, o) {
									return l.type = "throw", l.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o
								}
								for(var a = this.tryEntries.length - 1; a >= 0; --a) {
									var i = this.tryEntries[a],
										l = i.completion;
									if("root" === i.tryLoc) return o("end");
									if(i.tryLoc <= this.prev) {
										var u = n.call(i, "catchLoc"),
											s = n.call(i, "finallyLoc");
										if(u && s) {
											if(this.prev < i.catchLoc) return o(i.catchLoc, !0);
											if(this.prev < i.finallyLoc) return o(i.finallyLoc)
										} else if(u) {
											if(this.prev < i.catchLoc) return o(i.catchLoc, !0)
										} else {
											if(!s) throw new Error("try statement without catch or finally");
											if(this.prev < i.finallyLoc) return o(i.finallyLoc)
										}
									}
								}
							},
							abrupt: function(e, t) {
								for(var r = this.tryEntries.length - 1; r >= 0; --r) {
									var o = this.tryEntries[r];
									if(o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
										var a = o;
										break
									}
								}
								a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
								var i = a ? a.completion : {};
								return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, g) : this.complete(i)
							},
							complete: function(e, t) {
								if("throw" === e.type) throw e.arg;
								return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g
							},
							finish: function(e) {
								for(var t = this.tryEntries.length - 1; t >= 0; --t) {
									var r = this.tryEntries[t];
									if(r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), O(r), g
								}
							},
							catch: function(e) {
								for(var t = this.tryEntries.length - 1; t >= 0; --t) {
									var r = this.tryEntries[t];
									if(r.tryLoc === e) {
										var n = r.completion;
										if("throw" === n.type) {
											var o = n.arg;
											O(r)
										}
										return o
									}
								}
								throw new Error("illegal catch attempt")
							},
							delegateYield: function(e, r, n) {
								return this.delegate = {
									iterator: R(e),
									resultName: r,
									nextLoc: n
								}, "next" === this.method && (this.arg = t), g
							}
						}, e
					}(e.exports);
					try {
						regeneratorRuntime = t
					} catch(e) {
						"object" == typeof globalThis ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t)
					}
				},
				268: (e, t) => {
					"use strict";
					t.Wo = function(e) {
						return Array.isArray(e) || (e = [e]), Promise.all(e.map((function(e) {
							return e.then((function(e) {
								return {
									isFulfilled: !0,
									isRejected: !1,
									value: e
								}
							})).catch((function(e) {
								return {
									isFulfilled: !1,
									isRejected: !0,
									reason: e
								}
							}))
						})))
					}
				},
				213: (e, t, r) => {
					var n = r(728),
						o = Object.prototype.hasOwnProperty,
						a = "undefined" != typeof Map;

					function i() {
						this._array = [], this._set = a ? new Map : Object.create(null)
					}
					i.fromArray = function(e, t) {
						for(var r = new i, n = 0, o = e.length; n < o; n++) r.add(e[n], t);
						return r
					}, i.prototype.size = function() {
						return a ? this._set.size : Object.getOwnPropertyNames(this._set).length
					}, i.prototype.add = function(e, t) {
						var r = a ? e : n.toSetString(e),
							i = a ? this.has(e) : o.call(this._set, r),
							l = this._array.length;
						i && !t || this._array.push(e), i || (a ? this._set.set(e, l) : this._set[r] = l)
					}, i.prototype.has = function(e) {
						if(a) return this._set.has(e);
						var t = n.toSetString(e);
						return o.call(this._set, t)
					}, i.prototype.indexOf = function(e) {
						if(a) {
							var t = this._set.get(e);
							if(t >= 0) return t
						} else {
							var r = n.toSetString(e);
							if(o.call(this._set, r)) return this._set[r]
						}
						throw new Error('"' + e + '" is not in the set.')
					}, i.prototype.at = function(e) {
						if(e >= 0 && e < this._array.length) return this._array[e];
						throw new Error("No element indexed by " + e)
					}, i.prototype.toArray = function() {
						return this._array.slice()
					}, t.I = i
				},
				400: (e, t, r) => {
					var n = r(923);
					t.encode = function(e) {
						var t, r = "",
							o = function(e) {
								return e < 0 ? 1 + (-e << 1) : 0 + (e << 1)
							}(e);
						do {
							t = 31 & o, (o >>>= 5) > 0 && (t |= 32), r += n.encode(t)
						} while (o > 0);
						return r
					}, t.decode = function(e, t, r) {
						var o, a, i, l, u = e.length,
							s = 0,
							c = 0;
						do {
							if(t >= u) throw new Error("Expected more digits in base 64 VLQ value.");
							if(-1 === (a = n.decode(e.charCodeAt(t++)))) throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
							o = !!(32 & a), s += (a &= 31) << c, c += 5
						} while (o);
						r.value = (l = (i = s) >> 1, 1 == (1 & i) ? -l : l), r.rest = t
					}
				},
				923: (e, t) => {
					var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
					t.encode = function(e) {
						if(0 <= e && e < r.length) return r[e];
						throw new TypeError("Must be between 0 and 63: " + e)
					}, t.decode = function(e) {
						return 65 <= e && e <= 90 ? e - 65 : 97 <= e && e <= 122 ? e - 97 + 26 : 48 <= e && e <= 57 ? e - 48 + 52 : 43 == e ? 62 : 47 == e ? 63 : -1
					}
				},
				216: (e, t) => {
					function r(e, n, o, a, i, l) {
						var u = Math.floor((n - e) / 2) + e,
							s = i(o, a[u], !0);
						return 0 === s ? u : s > 0 ? n - u > 1 ? r(u, n, o, a, i, l) : l == t.LEAST_UPPER_BOUND ? n < a.length ? n : -1 : u : u - e > 1 ? r(e, u, o, a, i, l) : l == t.LEAST_UPPER_BOUND ? u : e < 0 ? -1 : e
					}
					t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2, t.search = function(e, n, o, a) {
						if(0 === n.length) return -1;
						var i = r(-1, n.length, e, n, o, a || t.GREATEST_LOWER_BOUND);
						if(i < 0) return -1;
						for(; i - 1 >= 0 && 0 === o(n[i], n[i - 1], !0);) --i;
						return i
					}
				},
				188: (e, t, r) => {
					var n = r(728);

					function o() {
						this._array = [], this._sorted = !0, this._last = {
							generatedLine: -1,
							generatedColumn: 0
						}
					}
					o.prototype.unsortedForEach = function(e, t) {
						this._array.forEach(e, t)
					}, o.prototype.add = function(e) {
						var t, r, o, a, i, l;
						r = e, o = (t = this._last).generatedLine, a = r.generatedLine, i = t.generatedColumn, l = r.generatedColumn, a > o || a == o && l >= i || n.compareByGeneratedPositionsInflated(t, r) <= 0 ? (this._last = e, this._array.push(e)) : (this._sorted = !1, this._array.push(e))
					}, o.prototype.toArray = function() {
						return this._sorted || (this._array.sort(n.compareByGeneratedPositionsInflated), this._sorted = !0), this._array
					}, t.H = o
				},
				826: (e, t) => {
					function r(e, t, r) {
						var n = e[t];
						e[t] = e[r], e[r] = n
					}

					function n(e, t, o, a) {
						if(o < a) {
							var i = o - 1;
							r(e, (c = o, f = a, Math.round(c + Math.random() * (f - c))), a);
							for(var l = e[a], u = o; u < a; u++) t(e[u], l) <= 0 && r(e, i += 1, u);
							r(e, i + 1, u);
							var s = i + 1;
							n(e, t, o, s - 1), n(e, t, s + 1, a)
						}
						var c, f
					}
					t.U = function(e, t) {
						n(e, t, 0, e.length - 1)
					}
				},
				771: (e, t, r) => {
					var n = r(728),
						o = r(216),
						a = r(213).I,
						i = r(400),
						l = r(826).U;

					function u(e) {
						var t = e;
						return "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, ""))), null != t.sections ? new f(t) : new s(t)
					}

					function s(e) {
						var t = e;
						"string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
						var r = n.getArg(t, "version"),
							o = n.getArg(t, "sources"),
							i = n.getArg(t, "names", []),
							l = n.getArg(t, "sourceRoot", null),
							u = n.getArg(t, "sourcesContent", null),
							s = n.getArg(t, "mappings"),
							c = n.getArg(t, "file", null);
						if(r != this._version) throw new Error("Unsupported version: " + r);
						o = o.map(String).map(n.normalize).map((function(e) {
							return l && n.isAbsolute(l) && n.isAbsolute(e) ? n.relative(l, e) : e
						})), this._names = a.fromArray(i.map(String), !0), this._sources = a.fromArray(o, !0), this.sourceRoot = l, this.sourcesContent = u, this._mappings = s, this.file = c
					}

					function c() {
						this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null
					}

					function f(e) {
						var t = e;
						"string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
						var r = n.getArg(t, "version"),
							o = n.getArg(t, "sections");
						if(r != this._version) throw new Error("Unsupported version: " + r);
						this._sources = new a, this._names = new a;
						var i = {
							line: -1,
							column: 0
						};
						this._sections = o.map((function(e) {
							if(e.url) throw new Error("Support for url field in sections not implemented.");
							var t = n.getArg(e, "offset"),
								r = n.getArg(t, "line"),
								o = n.getArg(t, "column");
							if(r < i.line || r === i.line && o < i.column) throw new Error("Section offsets must be ordered and non-overlapping.");
							return i = t, {
								generatedOffset: {
									generatedLine: r + 1,
									generatedColumn: o + 1
								},
								consumer: new u(n.getArg(e, "map"))
							}
						}))
					}
					u.fromSourceMap = function(e) {
						return s.fromSourceMap(e)
					}, u.prototype._version = 3, u.prototype.__generatedMappings = null, Object.defineProperty(u.prototype, "_generatedMappings", {
						get: function() {
							return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings
						}
					}), u.prototype.__originalMappings = null, Object.defineProperty(u.prototype, "_originalMappings", {
						get: function() {
							return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings
						}
					}), u.prototype._charIsMappingSeparator = function(e, t) {
						var r = e.charAt(t);
						return ";" === r || "," === r
					}, u.prototype._parseMappings = function(e, t) {
						throw new Error("Subclasses must implement _parseMappings")
					}, u.GENERATED_ORDER = 1, u.ORIGINAL_ORDER = 2, u.GREATEST_LOWER_BOUND = 1, u.LEAST_UPPER_BOUND = 2, u.prototype.eachMapping = function(e, t, r) {
						var o, a = t || null;
						switch(r || u.GENERATED_ORDER) {
							case u.GENERATED_ORDER:
								o = this._generatedMappings;
								break;
							case u.ORIGINAL_ORDER:
								o = this._originalMappings;
								break;
							default:
								throw new Error("Unknown order of iteration.")
						}
						var i = this.sourceRoot;
						o.map((function(e) {
							var t = null === e.source ? null : this._sources.at(e.source);
							return null != t && null != i && (t = n.join(i, t)), {
								source: t,
								generatedLine: e.generatedLine,
								generatedColumn: e.generatedColumn,
								originalLine: e.originalLine,
								originalColumn: e.originalColumn,
								name: null === e.name ? null : this._names.at(e.name)
							}
						}), this).forEach(e, a)
					}, u.prototype.allGeneratedPositionsFor = function(e) {
						var t = n.getArg(e, "line"),
							r = {
								source: n.getArg(e, "source"),
								originalLine: t,
								originalColumn: n.getArg(e, "column", 0)
							};
						if(null != this.sourceRoot && (r.source = n.relative(this.sourceRoot, r.source)), !this._sources.has(r.source)) return [];
						r.source = this._sources.indexOf(r.source);
						var a = [],
							i = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", n.compareByOriginalPositions, o.LEAST_UPPER_BOUND);
						if(i >= 0) {
							var l = this._originalMappings[i];
							if(void 0 === e.column)
								for(var u = l.originalLine; l && l.originalLine === u;) a.push({
									line: n.getArg(l, "generatedLine", null),
									column: n.getArg(l, "generatedColumn", null),
									lastColumn: n.getArg(l, "lastGeneratedColumn", null)
								}), l = this._originalMappings[++i];
							else
								for(var s = l.originalColumn; l && l.originalLine === t && l.originalColumn == s;) a.push({
									line: n.getArg(l, "generatedLine", null),
									column: n.getArg(l, "generatedColumn", null),
									lastColumn: n.getArg(l, "lastGeneratedColumn", null)
								}), l = this._originalMappings[++i]
						}
						return a
					}, t.SourceMapConsumer = u, s.prototype = Object.create(u.prototype), s.prototype.consumer = u, s.fromSourceMap = function(e) {
						var t = Object.create(s.prototype),
							r = t._names = a.fromArray(e._names.toArray(), !0),
							o = t._sources = a.fromArray(e._sources.toArray(), !0);
						t.sourceRoot = e._sourceRoot, t.sourcesContent = e._generateSourcesContent(t._sources.toArray(), t.sourceRoot), t.file = e._file;
						for(var i = e._mappings.toArray().slice(), u = t.__generatedMappings = [], f = t.__originalMappings = [], d = 0, p = i.length; d < p; d++) {
							var h = i[d],
								g = new c;
							g.generatedLine = h.generatedLine, g.generatedColumn = h.generatedColumn, h.source && (g.source = o.indexOf(h.source), g.originalLine = h.originalLine, g.originalColumn = h.originalColumn, h.name && (g.name = r.indexOf(h.name)), f.push(g)), u.push(g)
						}
						return l(t.__originalMappings, n.compareByOriginalPositions), t
					}, s.prototype._version = 3, Object.defineProperty(s.prototype, "sources", {
						get: function() {
							return this._sources.toArray().map((function(e) {
								return null != this.sourceRoot ? n.join(this.sourceRoot, e) : e
							}), this)
						}
					}), s.prototype._parseMappings = function(e, t) {
						for(var r, o, a, u, s, f = 1, d = 0, p = 0, h = 0, g = 0, m = 0, v = e.length, y = 0, b = {}, w = {}, x = [], E = []; y < v;)
							if(";" === e.charAt(y)) f++, y++, d = 0;
							else if("," === e.charAt(y)) y++;
						else {
							for((r = new c).generatedLine = f, u = y; u < v && !this._charIsMappingSeparator(e, u); u++);
							if(a = b[o = e.slice(y, u)]) y += o.length;
							else {
								for(a = []; y < u;) i.decode(e, y, w), s = w.value, y = w.rest, a.push(s);
								if(2 === a.length) throw new Error("Found a source, but no line and column");
								if(3 === a.length) throw new Error("Found a source and line, but no column");
								b[o] = a
							}
							r.generatedColumn = d + a[0], d = r.generatedColumn, a.length > 1 && (r.source = g + a[1], g += a[1], r.originalLine = p + a[2], p = r.originalLine, r.originalLine += 1, r.originalColumn = h + a[3], h = r.originalColumn, a.length > 4 && (r.name = m + a[4], m += a[4])), E.push(r), "number" == typeof r.originalLine && x.push(r)
						}
						l(E, n.compareByGeneratedPositionsDeflated), this.__generatedMappings = E, l(x, n.compareByOriginalPositions), this.__originalMappings = x
					}, s.prototype._findMapping = function(e, t, r, n, a, i) {
						if(e[r] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + e[r]);
						if(e[n] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + e[n]);
						return o.search(e, t, a, i)
					}, s.prototype.computeColumnSpans = function() {
						for(var e = 0; e < this._generatedMappings.length; ++e) {
							var t = this._generatedMappings[e];
							if(e + 1 < this._generatedMappings.length) {
								var r = this._generatedMappings[e + 1];
								if(t.generatedLine === r.generatedLine) {
									t.lastGeneratedColumn = r.generatedColumn - 1;
									continue
								}
							}
							t.lastGeneratedColumn = 1 / 0
						}
					}, s.prototype.originalPositionFor = function(e) {
						var t = {
								generatedLine: n.getArg(e, "line"),
								generatedColumn: n.getArg(e, "column")
							},
							r = this._findMapping(t, this._generatedMappings, "generatedLine", "generatedColumn", n.compareByGeneratedPositionsDeflated, n.getArg(e, "bias", u.GREATEST_LOWER_BOUND));
						if(r >= 0) {
							var o = this._generatedMappings[r];
							if(o.generatedLine === t.generatedLine) {
								var a = n.getArg(o, "source", null);
								null !== a && (a = this._sources.at(a), null != this.sourceRoot && (a = n.join(this.sourceRoot, a)));
								var i = n.getArg(o, "name", null);
								return null !== i && (i = this._names.at(i)), {
									source: a,
									line: n.getArg(o, "originalLine", null),
									column: n.getArg(o, "originalColumn", null),
									name: i
								}
							}
						}
						return {
							source: null,
							line: null,
							column: null,
							name: null
						}
					}, s.prototype.hasContentsOfAllSources = function() {
						return !!this.sourcesContent && this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some((function(e) {
							return null == e
						}))
					}, s.prototype.sourceContentFor = function(e, t) {
						if(!this.sourcesContent) return null;
						if(null != this.sourceRoot && (e = n.relative(this.sourceRoot, e)), this._sources.has(e)) return this.sourcesContent[this._sources.indexOf(e)];
						var r;
						if(null != this.sourceRoot && (r = n.urlParse(this.sourceRoot))) {
							var o = e.replace(/^file:\/\//, "");
							if("file" == r.scheme && this._sources.has(o)) return this.sourcesContent[this._sources.indexOf(o)];
							if((!r.path || "/" == r.path) && this._sources.has("/" + e)) return this.sourcesContent[this._sources.indexOf("/" + e)]
						}
						if(t) return null;
						throw new Error('"' + e + '" is not in the SourceMap.')
					}, s.prototype.generatedPositionFor = function(e) {
						var t = n.getArg(e, "source");
						if(null != this.sourceRoot && (t = n.relative(this.sourceRoot, t)), !this._sources.has(t)) return {
							line: null,
							column: null,
							lastColumn: null
						};
						var r = {
								source: t = this._sources.indexOf(t),
								originalLine: n.getArg(e, "line"),
								originalColumn: n.getArg(e, "column")
							},
							o = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", n.compareByOriginalPositions, n.getArg(e, "bias", u.GREATEST_LOWER_BOUND));
						if(o >= 0) {
							var a = this._originalMappings[o];
							if(a.source === r.source) return {
								line: n.getArg(a, "generatedLine", null),
								column: n.getArg(a, "generatedColumn", null),
								lastColumn: n.getArg(a, "lastGeneratedColumn", null)
							}
						}
						return {
							line: null,
							column: null,
							lastColumn: null
						}
					}, f.prototype = Object.create(u.prototype), f.prototype.constructor = u, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
						get: function() {
							for(var e = [], t = 0; t < this._sections.length; t++)
								for(var r = 0; r < this._sections[t].consumer.sources.length; r++) e.push(this._sections[t].consumer.sources[r]);
							return e
						}
					}), f.prototype.originalPositionFor = function(e) {
						var t = {
								generatedLine: n.getArg(e, "line"),
								generatedColumn: n.getArg(e, "column")
							},
							r = o.search(t, this._sections, (function(e, t) {
								return e.generatedLine - t.generatedOffset.generatedLine || e.generatedColumn - t.generatedOffset.generatedColumn
							})),
							a = this._sections[r];
						return a ? a.consumer.originalPositionFor({
							line: t.generatedLine - (a.generatedOffset.generatedLine - 1),
							column: t.generatedColumn - (a.generatedOffset.generatedLine === t.generatedLine ? a.generatedOffset.generatedColumn - 1 : 0),
							bias: e.bias
						}) : {
							source: null,
							line: null,
							column: null,
							name: null
						}
					}, f.prototype.hasContentsOfAllSources = function() {
						return this._sections.every((function(e) {
							return e.consumer.hasContentsOfAllSources()
						}))
					}, f.prototype.sourceContentFor = function(e, t) {
						for(var r = 0; r < this._sections.length; r++) {
							var n = this._sections[r].consumer.sourceContentFor(e, !0);
							if(n) return n
						}
						if(t) return null;
						throw new Error('"' + e + '" is not in the SourceMap.')
					}, f.prototype.generatedPositionFor = function(e) {
						for(var t = 0; t < this._sections.length; t++) {
							var r = this._sections[t];
							if(-1 !== r.consumer.sources.indexOf(n.getArg(e, "source"))) {
								var o = r.consumer.generatedPositionFor(e);
								if(o) return {
									line: o.line + (r.generatedOffset.generatedLine - 1),
									column: o.column + (r.generatedOffset.generatedLine === o.line ? r.generatedOffset.generatedColumn - 1 : 0)
								}
							}
						}
						return {
							line: null,
							column: null
						}
					}, f.prototype._parseMappings = function(e, t) {
						this.__generatedMappings = [], this.__originalMappings = [];
						for(var r = 0; r < this._sections.length; r++)
							for(var o = this._sections[r], a = o.consumer._generatedMappings, i = 0; i < a.length; i++) {
								var u = a[i],
									s = o.consumer._sources.at(u.source);
								null !== o.consumer.sourceRoot && (s = n.join(o.consumer.sourceRoot, s)), this._sources.add(s), s = this._sources.indexOf(s);
								var c = o.consumer._names.at(u.name);
								this._names.add(c), c = this._names.indexOf(c);
								var f = {
									source: s,
									generatedLine: u.generatedLine + (o.generatedOffset.generatedLine - 1),
									generatedColumn: u.generatedColumn + (o.generatedOffset.generatedLine === u.generatedLine ? o.generatedOffset.generatedColumn - 1 : 0),
									originalLine: u.originalLine,
									originalColumn: u.originalColumn,
									name: c
								};
								this.__generatedMappings.push(f), "number" == typeof f.originalLine && this.__originalMappings.push(f)
							}
						l(this.__generatedMappings, n.compareByGeneratedPositionsDeflated), l(this.__originalMappings, n.compareByOriginalPositions)
					}
				},
				433: (e, t, r) => {
					var n = r(400),
						o = r(728),
						a = r(213).I,
						i = r(188).H;

					function l(e) {
						e || (e = {}), this._file = o.getArg(e, "file", null), this._sourceRoot = o.getArg(e, "sourceRoot", null), this._skipValidation = o.getArg(e, "skipValidation", !1), this._sources = new a, this._names = new a, this._mappings = new i, this._sourcesContents = null
					}
					l.prototype._version = 3, l.fromSourceMap = function(e) {
						var t = e.sourceRoot,
							r = new l({
								file: e.file,
								sourceRoot: t
							});
						return e.eachMapping((function(e) {
							var n = {
								generated: {
									line: e.generatedLine,
									column: e.generatedColumn
								}
							};
							null != e.source && (n.source = e.source, null != t && (n.source = o.relative(t, n.source)), n.original = {
								line: e.originalLine,
								column: e.originalColumn
							}, null != e.name && (n.name = e.name)), r.addMapping(n)
						})), e.sources.forEach((function(t) {
							var n = e.sourceContentFor(t);
							null != n && r.setSourceContent(t, n)
						})), r
					}, l.prototype.addMapping = function(e) {
						var t = o.getArg(e, "generated"),
							r = o.getArg(e, "original", null),
							n = o.getArg(e, "source", null),
							a = o.getArg(e, "name", null);
						this._skipValidation || this._validateMapping(t, r, n, a), null != n && (n = String(n), this._sources.has(n) || this._sources.add(n)), null != a && (a = String(a), this._names.has(a) || this._names.add(a)), this._mappings.add({
							generatedLine: t.line,
							generatedColumn: t.column,
							originalLine: null != r && r.line,
							originalColumn: null != r && r.column,
							source: n,
							name: a
						})
					}, l.prototype.setSourceContent = function(e, t) {
						var r = e;
						null != this._sourceRoot && (r = o.relative(this._sourceRoot, r)), null != t ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), this._sourcesContents[o.toSetString(r)] = t) : this._sourcesContents && (delete this._sourcesContents[o.toSetString(r)], 0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null))
					}, l.prototype.applySourceMap = function(e, t, r) {
						var n = t;
						if(null == t) {
							if(null == e.file) throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
							n = e.file
						}
						var i = this._sourceRoot;
						null != i && (n = o.relative(i, n));
						var l = new a,
							u = new a;
						this._mappings.unsortedForEach((function(t) {
							if(t.source === n && null != t.originalLine) {
								var a = e.originalPositionFor({
									line: t.originalLine,
									column: t.originalColumn
								});
								null != a.source && (t.source = a.source, null != r && (t.source = o.join(r, t.source)), null != i && (t.source = o.relative(i, t.source)), t.originalLine = a.line, t.originalColumn = a.column, null != a.name && (t.name = a.name))
							}
							var s = t.source;
							null == s || l.has(s) || l.add(s);
							var c = t.name;
							null == c || u.has(c) || u.add(c)
						}), this), this._sources = l, this._names = u, e.sources.forEach((function(t) {
							var n = e.sourceContentFor(t);
							null != n && (null != r && (t = o.join(r, t)), null != i && (t = o.relative(i, t)), this.setSourceContent(t, n))
						}), this)
					}, l.prototype._validateMapping = function(e, t, r, n) {
						if(t && "number" != typeof t.line && "number" != typeof t.column) throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
						if((!(e && "line" in e && "column" in e && e.line > 0 && e.column >= 0) || t || r || n) && !(e && "line" in e && "column" in e && t && "line" in t && "column" in t && e.line > 0 && e.column >= 0 && t.line > 0 && t.column >= 0 && r)) throw new Error("Invalid mapping: " + JSON.stringify({
							generated: e,
							source: r,
							original: t,
							name: n
						}))
					}, l.prototype._serializeMappings = function() {
						for(var e, t, r, a, i = 0, l = 1, u = 0, s = 0, c = 0, f = 0, d = "", p = this._mappings.toArray(), h = 0, g = p.length; h < g; h++) {
							if(e = "", (t = p[h]).generatedLine !== l)
								for(i = 0; t.generatedLine !== l;) e += ";", l++;
							else if(h > 0) {
								if(!o.compareByGeneratedPositionsInflated(t, p[h - 1])) continue;
								e += ","
							}
							e += n.encode(t.generatedColumn - i), i = t.generatedColumn, null != t.source && (a = this._sources.indexOf(t.source), e += n.encode(a - f), f = a, e += n.encode(t.originalLine - 1 - s), s = t.originalLine - 1, e += n.encode(t.originalColumn - u), u = t.originalColumn, null != t.name && (r = this._names.indexOf(t.name), e += n.encode(r - c), c = r)), d += e
						}
						return d
					}, l.prototype._generateSourcesContent = function(e, t) {
						return e.map((function(e) {
							if(!this._sourcesContents) return null;
							null != t && (e = o.relative(t, e));
							var r = o.toSetString(e);
							return Object.prototype.hasOwnProperty.call(this._sourcesContents, r) ? this._sourcesContents[r] : null
						}), this)
					}, l.prototype.toJSON = function() {
						var e = {
							version: this._version,
							sources: this._sources.toArray(),
							names: this._names.toArray(),
							mappings: this._serializeMappings()
						};
						return null != this._file && (e.file = this._file), null != this._sourceRoot && (e.sourceRoot = this._sourceRoot), this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)), e
					}, l.prototype.toString = function() {
						return JSON.stringify(this.toJSON())
					}, t.h = l
				},
				85: (e, t, r) => {
					var n = r(433).h,
						o = r(728),
						a = /(\r?\n)/,
						i = "$$$isSourceNode$$$";

					function l(e, t, r, n, o) {
						this.children = [], this.sourceContents = {}, this.line = null == e ? null : e, this.column = null == t ? null : t, this.source = null == r ? null : r, this.name = null == o ? null : o, this[i] = !0, null != n && this.add(n)
					}
					l.fromStringWithSourceMap = function(e, t, r) {
						var n = new l,
							i = e.split(a),
							u = 0,
							s = function() {
								return e() + (e() || "");

								function e() {
									return u < i.length ? i[u++] : void 0
								}
							},
							c = 1,
							f = 0,
							d = null;
						return t.eachMapping((function(e) {
							if(null !== d) {
								if(!(c < e.generatedLine)) {
									var t = (r = i[u]).substr(0, e.generatedColumn - f);
									return i[u] = r.substr(e.generatedColumn - f), f = e.generatedColumn, p(d, t), void(d = e)
								}
								p(d, s()), c++, f = 0
							}
							for(; c < e.generatedLine;) n.add(s()), c++;
							if(f < e.generatedColumn) {
								var r = i[u];
								n.add(r.substr(0, e.generatedColumn)), i[u] = r.substr(e.generatedColumn), f = e.generatedColumn
							}
							d = e
						}), this), u < i.length && (d && p(d, s()), n.add(i.splice(u).join(""))), t.sources.forEach((function(e) {
							var a = t.sourceContentFor(e);
							null != a && (null != r && (e = o.join(r, e)), n.setSourceContent(e, a))
						})), n;

						function p(e, t) {
							if(null === e || void 0 === e.source) n.add(t);
							else {
								var a = r ? o.join(r, e.source) : e.source;
								n.add(new l(e.originalLine, e.originalColumn, a, t, e.name))
							}
						}
					}, l.prototype.add = function(e) {
						if(Array.isArray(e)) e.forEach((function(e) {
							this.add(e)
						}), this);
						else {
							if(!e[i] && "string" != typeof e) throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
							e && this.children.push(e)
						}
						return this
					}, l.prototype.prepend = function(e) {
						if(Array.isArray(e))
							for(var t = e.length - 1; t >= 0; t--) this.prepend(e[t]);
						else {
							if(!e[i] && "string" != typeof e) throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
							this.children.unshift(e)
						}
						return this
					}, l.prototype.walk = function(e) {
						for(var t, r = 0, n = this.children.length; r < n; r++)(t = this.children[r])[i] ? t.walk(e) : "" !== t && e(t, {
							source: this.source,
							line: this.line,
							column: this.column,
							name: this.name
						})
					}, l.prototype.join = function(e) {
						var t, r, n = this.children.length;
						if(n > 0) {
							for(t = [], r = 0; r < n - 1; r++) t.push(this.children[r]), t.push(e);
							t.push(this.children[r]), this.children = t
						}
						return this
					}, l.prototype.replaceRight = function(e, t) {
						var r = this.children[this.children.length - 1];
						return r[i] ? r.replaceRight(e, t) : "string" == typeof r ? this.children[this.children.length - 1] = r.replace(e, t) : this.children.push("".replace(e, t)), this
					}, l.prototype.setSourceContent = function(e, t) {
						this.sourceContents[o.toSetString(e)] = t
					}, l.prototype.walkSourceContents = function(e) {
						for(var t = 0, r = this.children.length; t < r; t++) this.children[t][i] && this.children[t].walkSourceContents(e);
						var n = Object.keys(this.sourceContents);
						for(t = 0, r = n.length; t < r; t++) e(o.fromSetString(n[t]), this.sourceContents[n[t]])
					}, l.prototype.toString = function() {
						var e = "";
						return this.walk((function(t) {
							e += t
						})), e
					}, l.prototype.toStringWithSourceMap = function(e) {
						var t = {
								code: "",
								line: 1,
								column: 0
							},
							r = new n(e),
							o = !1,
							a = null,
							i = null,
							l = null,
							u = null;
						return this.walk((function(e, n) {
							t.code += e, null !== n.source && null !== n.line && null !== n.column ? (a === n.source && i === n.line && l === n.column && u === n.name || r.addMapping({
								source: n.source,
								original: {
									line: n.line,
									column: n.column
								},
								generated: {
									line: t.line,
									column: t.column
								},
								name: n.name
							}), a = n.source, i = n.line, l = n.column, u = n.name, o = !0) : o && (r.addMapping({
								generated: {
									line: t.line,
									column: t.column
								}
							}), a = null, o = !1);
							for(var s = 0, c = e.length; s < c; s++) 10 === e.charCodeAt(s) ? (t.line++, t.column = 0, s + 1 === c ? (a = null, o = !1) : o && r.addMapping({
								source: n.source,
								original: {
									line: n.line,
									column: n.column
								},
								generated: {
									line: t.line,
									column: t.column
								},
								name: n.name
							})) : t.column++
						})), this.walkSourceContents((function(e, t) {
							r.setSourceContent(e, t)
						})), {
							code: t.code,
							map: r
						}
					}
				},
				728: (e, t) => {
					t.getArg = function(e, t, r) {
						if(t in e) return e[t];
						if(3 === arguments.length) return r;
						throw new Error('"' + t + '" is a required argument.')
					};
					var r = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,
						n = /^data:.+\,.+$/;

					function o(e) {
						var t = e.match(r);
						return t ? {
							scheme: t[1],
							auth: t[2],
							host: t[3],
							port: t[4],
							path: t[5]
						} : null
					}

					function a(e) {
						var t = "";
						return e.scheme && (t += e.scheme + ":"), t += "//", e.auth && (t += e.auth + "@"), e.host && (t += e.host), e.port && (t += ":" + e.port), e.path && (t += e.path), t
					}

					function i(e) {
						var r = e,
							n = o(e);
						if(n) {
							if(!n.path) return e;
							r = n.path
						}
						for(var i, l = t.isAbsolute(r), u = r.split(/\/+/), s = 0, c = u.length - 1; c >= 0; c--) "." === (i = u[c]) ? u.splice(c, 1) : ".." === i ? s++ : s > 0 && ("" === i ? (u.splice(c + 1, s), s = 0) : (u.splice(c, 2), s--));
						return "" === (r = u.join("/")) && (r = l ? "/" : "."), n ? (n.path = r, a(n)) : r
					}
					t.urlParse = o, t.urlGenerate = a, t.normalize = i, t.join = function(e, t) {
						"" === e && (e = "."), "" === t && (t = ".");
						var r = o(t),
							l = o(e);
						if(l && (e = l.path || "/"), r && !r.scheme) return l && (r.scheme = l.scheme), a(r);
						if(r || t.match(n)) return t;
						if(l && !l.host && !l.path) return l.host = t, a(l);
						var u = "/" === t.charAt(0) ? t : i(e.replace(/\/+$/, "") + "/" + t);
						return l ? (l.path = u, a(l)) : u
					}, t.isAbsolute = function(e) {
						return "/" === e.charAt(0) || !!e.match(r)
					}, t.relative = function(e, t) {
						"" === e && (e = "."), e = e.replace(/\/$/, "");
						for(var r = 0; 0 !== t.indexOf(e + "/");) {
							var n = e.lastIndexOf("/");
							if(n < 0) return t;
							if((e = e.slice(0, n)).match(/^([^\/]+:\/)?\/*$/)) return t;
							++r
						}
						return Array(r + 1).join("../") + t.substr(e.length + 1)
					};
					var l = !("__proto__" in Object.create(null));

					function u(e) {
						return e
					}

					function s(e) {
						if(!e) return !1;
						var t = e.length;
						if(t < 9) return !1;
						if(95 !== e.charCodeAt(t - 1) || 95 !== e.charCodeAt(t - 2) || 111 !== e.charCodeAt(t - 3) || 116 !== e.charCodeAt(t - 4) || 111 !== e.charCodeAt(t - 5) || 114 !== e.charCodeAt(t - 6) || 112 !== e.charCodeAt(t - 7) || 95 !== e.charCodeAt(t - 8) || 95 !== e.charCodeAt(t - 9)) return !1;
						for(var r = t - 10; r >= 0; r--)
							if(36 !== e.charCodeAt(r)) return !1;
						return !0
					}

					function c(e, t) {
						return e === t ? 0 : e > t ? 1 : -1
					}
					t.toSetString = l ? u : function(e) {
						return s(e) ? "$" + e : e
					}, t.fromSetString = l ? u : function(e) {
						return s(e) ? e.slice(1) : e
					}, t.compareByOriginalPositions = function(e, t, r) {
						var n = e.source - t.source;
						return 0 !== n || 0 != (n = e.originalLine - t.originalLine) || 0 != (n = e.originalColumn - t.originalColumn) || r || 0 != (n = e.generatedColumn - t.generatedColumn) || 0 != (n = e.generatedLine - t.generatedLine) ? n : e.name - t.name
					}, t.compareByGeneratedPositionsDeflated = function(e, t, r) {
						var n = e.generatedLine - t.generatedLine;
						return 0 !== n || 0 != (n = e.generatedColumn - t.generatedColumn) || r || 0 != (n = e.source - t.source) || 0 != (n = e.originalLine - t.originalLine) || 0 != (n = e.originalColumn - t.originalColumn) ? n : e.name - t.name
					}, t.compareByGeneratedPositionsInflated = function(e, t) {
						var r = e.generatedLine - t.generatedLine;
						return 0 !== r || 0 != (r = e.generatedColumn - t.generatedColumn) || 0 !== (r = c(e.source, t.source)) || 0 != (r = e.originalLine - t.originalLine) || 0 != (r = e.originalColumn - t.originalColumn) ? r : c(e.name, t.name)
					}
				},
				125: (e, t, r) => {
					r(433).h, t.SourceMapConsumer = r(771).SourceMapConsumer, r(85)
				},
				538: () => {}
			},
			t = {};

		function r(n) {
			var o = t[n];
			if(void 0 !== o) return o.exports;
			var a = t[n] = {
				exports: {}
			};
			return e[n](a, a.exports, r), a.exports
		}
		r.n = e => {
			var t = e && e.__esModule ? () => e.default : () => e;
			return r.d(t, {
				a: t
			}), t
		}, r.d = (e, t) => {
			for(var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
				enumerable: !0,
				get: t[n]
			})
		}, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		};
		var n = {};
		return(() => {
			"use strict";
			r.r(n), r.d(n, {
				dismissBuildError: () => he,
				dismissRuntimeErrors: () => ve,
				reportBuildError: () => de,
				reportRuntimeError: () => pe,
				setEditorHandler: () => fe,
				startReportingRuntimeErrors: () => ge,
				stopReportingRuntimeErrors: () => ye
			});
			var e = null;

			function t(e, t) {
				if(t.error) {
					var r = t.error;
					r instanceof Error ? e(r) : e(new Error(r))
				}
			}

			function o(r, n) {
				null === e && (e = t.bind(void 0, n), r.addEventListener("error", e))
			}

			function a(t) {
				null !== e && (t.removeEventListener("error", e), e = null)
			}
			var i = null;

			function l(e, t) {
				if(null == t || null == t.reason) return e(new Error("Unknown"));
				var r = t.reason;
				return r instanceof Error ? e(r) : e(new Error(r))
			}

			function u(e, t) {
				null === i && (i = l.bind(void 0, t), e.addEventListener("unhandledrejection", i))
			}

			function s(e) {
				null !== i && (e.removeEventListener("unhandledrejection", i), i = null)
			}
			var c = !1,
				f = 10;

			function d() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 50;
				if(!c) try {
					f = Error.stackTraceLimit, Error.stackTraceLimit = e, c = !0
				} catch(e) {}
			}

			function p() {
				if(c) try {
					Error.stackTraceLimit = f, c = !1
				} catch(e) {}
			}
			var h = [],
				g = function() {
					"undefined" != typeof console && (console.reactStack = function(e) {
						return h.push(e)
					}, console.reactStackEnd = function(e) {
						return h.pop()
					})
				},
				m = function() {
					"undefined" != typeof console && (console.reactStack = void 0, console.reactStackEnd = void 0)
				},
				v = function(e, t) {
					if("undefined" != typeof console) {
						var r = console[e];
						"function" == typeof r && (console[e] = function() {
							try {
								var e = arguments[0];
								"string" == typeof e && h.length > 0 && t(e, h[h.length - 1])
							} catch(e) {
								setTimeout((function() {
									throw e
								}))
							}
							return r.apply(this, arguments)
						})
					}
				};

			function y(e, t) {
				for(var r, n, o = function(e) {
						return e.split("\n").filter((function(e) {
							return !e.match(/^\s*in/)
						})).join("\n")
					}(e), a = "", i = 0; i < t.length; ++i) {
					var l = t[i],
						u = l.fileName,
						s = l.lineNumber;
					if(null != u && null != s && !(u === r && "number" == typeof s && "number" == typeof n && Math.abs(s - n) < 3)) {
						r = u, n = s;
						var c = t[i].name;
						a += "in ".concat(c = c || "(anonymous function)", " (at ").concat(u, ":").concat(s, ")\n")
					}
				}
				return {
					message: o,
					stack: a
				}
			}

			function b(e, t) {
				return b = Object.setPrototypeOf || function(e, t) {
					return e.__proto__ = t, e
				}, b(e, t)
			}

			function w() {
				if("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if(Reflect.construct.sham) return !1;
				if("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch(e) {
					return !1
				}
			}

			function x(e, t, r) {
				return x = w() ? Reflect.construct : function(e, t, r) {
					var n = [null];
					n.push.apply(n, t);
					var o = new(Function.bind.apply(e, n));
					return r && b(o, r.prototype), o
				}, x.apply(null, arguments)
			}

			function E(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for(var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
				return n
			}

			function k(e) {
				return function(e) {
					if(Array.isArray(e)) return E(e)
				}(e) || function(e) {
					if("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
				}(e) || function(e, t) {
					if(e) {
						if("string" == typeof e) return E(e, t);
						var r = Object.prototype.toString.call(e).slice(8, -1);
						return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? E(e, t) : void 0
					}
				}(e) || function() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function S(e, t) {
				for(var r = 0; r < t.length; r++) {
					var n = t[r];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
				}
			}

			function _(e, t, r) {
				return t && S(e.prototype, t), r && S(e, r), e
			}

			function C(e, t) {
				if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}
			var O = function e(t, r) {
					var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					C(this, e), this.lineNumber = t, this.content = r, this.highlight = n
				},
				T = function() {
					function e() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
							n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
							o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
							a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
							i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
							l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
							u = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
							s = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
							c = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
						C(this, e), t && 0 === t.indexOf("Object.") && (t = t.slice("Object.".length)), "friendlySyntaxErrorLabel" !== t && "exports.__esModule" !== t && "<anonymous>" !== t && t || (t = null), this.functionName = t, this.fileName = r, this.lineNumber = n, this.columnNumber = o, this._originalFunctionName = i, this._originalFileName = l, this._originalLineNumber = u, this._originalColumnNumber = s, this._scriptCode = a, this._originalScriptCode = c
					}
					return _(e, [{
						key: "getFunctionName",
						value: function() {
							return this.functionName || "(anonymous function)"
						}
					}, {
						key: "getSource",
						value: function() {
							var e = "";
							return null != this.fileName && (e += this.fileName + ":"), null != this.lineNumber && (e += this.lineNumber + ":"), null != this.columnNumber && (e += this.columnNumber + ":"), e.slice(0, -1)
						}
					}, {
						key: "toString",
						value: function() {
							var e = this.getFunctionName(),
								t = this.getSource();
							return "".concat(e).concat(t ? " (".concat(t, ")") : "")
						}
					}]), e
				}();
			const R = T;
			var L = /\(?(.+?)(?::(\d+))?(?::(\d+))?\)?$/;

			function A(e) {
				return L.exec(e).slice(1).map((function(e) {
					var t = Number(e);
					return isNaN(t) ? e : t
				}))
			}
			var P = /^\s*(at|in)\s.+(:\d+)/,
				N = /(^|@)\S+:\d+|.+line\s+\d+\s+>\s+(eval|Function).+/;

			function q(e) {
				return e.filter((function(e) {
					return P.test(e) || N.test(e)
				})).map((function(e) {
					if(N.test(e)) {
						var t = !1;
						/ > (eval|Function)/.test(e) && (e = e.replace(/ line (\d+)(?: > eval line \d+)* > (eval|Function):\d+:\d+/g, ":$1"), t = !0);
						var r = e.split(/[@]/g),
							n = r.pop();
						return x(R, [r.join("@") || (t ? "eval" : null)].concat(k(A(n))))
					} - 1 !== e.indexOf("(eval ") && (e = e.replace(/(\(eval at [^()]*)|(\),.*$)/g, "")), -1 !== e.indexOf("(at ") && (e = e.replace(/\(at /, "("));
					var o = e.trim().split(/\s+/g).slice(1),
						a = o.pop();
					return x(R, [o.join(" ") || null].concat(k(A(a))))
				}))
			}

			function M(e) {
				if(null == e) throw new Error("You cannot pass a null object.");
				if("string" == typeof e) return q(e.split("\n"));
				if(Array.isArray(e)) return q(e);
				if("string" == typeof e.stack) return q(e.stack.split("\n"));
				throw new Error("The error you provided does not contain a stack trace.")
			}

			function D(e, t, r, n, o, a, i) {
				try {
					var l = e[a](i),
						u = l.value
				} catch(e) {
					return void r(e)
				}
				l.done ? t(u) : Promise.resolve(u).then(n, o)
			}

			function I(e) {
				return function() {
					var t = this,
						r = arguments;
					return new Promise((function(n, o) {
						var a = e.apply(t, r);

						function i(e) {
							D(a, n, o, i, l, "next", e)
						}

						function l(e) {
							D(a, n, o, i, l, "throw", e)
						}
						i(void 0)
					}))
				}
			}
			var j = r(162),
				F = r.n(j),
				z = r(125),
				U = function() {
					function e(t) {
						C(this, e), this.__source_map = t
					}
					return _(e, [{
						key: "getOriginalPosition",
						value: function(e, t) {
							var r = this.__source_map.originalPositionFor({
								line: e,
								column: t
							});
							return {
								line: r.line,
								column: r.column,
								source: r.source
							}
						}
					}, {
						key: "getGeneratedPosition",
						value: function(e, t, r) {
							var n = this.__source_map.generatedPositionFor({
								source: e,
								line: t,
								column: r
							});
							return {
								line: n.line,
								column: n.column
							}
						}
					}, {
						key: "getSource",
						value: function(e) {
							return this.__source_map.sourceContentFor(e)
						}
					}, {
						key: "getSources",
						value: function() {
							return this.__source_map.sources
						}
					}]), e
				}();

			function B(e, t) {
				for(var r = /\/\/[#@] ?sourceMappingURL=([^\s'"]+)\s*$/gm, n = null;;) {
					var o = r.exec(t);
					if(null == o) break;
					n = o
				}
				return n && n[1] ? Promise.resolve(n[1].toString()) : Promise.reject("Cannot find a source map directive for ".concat(e, "."))
			}

			function H(e, t) {
				return V.apply(this, arguments)
			}

			function V() {
				return(V = I(F().mark((function e(t, r) {
					var n, o, a, i, l, u;
					return F().wrap((function(e) {
						for(;;) switch(e.prev = e.next) {
							case 0:
								return e.next = 2, B(t, r);
							case 2:
								if(0 !== (n = e.sent).indexOf("data:")) {
									e.next = 14;
									break
								}
								if(o = /^data:application\/json;([\w=:"-]+;)*base64,/, a = n.match(o)) {
									e.next = 8;
									break
								}
								throw new Error("Sorry, non-base64 inline source-map encoding is not supported.");
							case 8:
								return n = n.substring(a[0].length), n = window.atob(n), n = JSON.parse(n), e.abrupt("return", new U(new z.SourceMapConsumer(n)));
							case 14:
								return i = t.lastIndexOf("/"), l = t.substring(0, i + 1) + n, e.next = 18, fetch(l).then((function(e) {
									return e.json()
								}));
							case 18:
								return u = e.sent, e.abrupt("return", new U(new z.SourceMapConsumer(u)));
							case 20:
							case "end":
								return e.stop()
						}
					}), e)
				})))).apply(this, arguments)
			}

			function G(e, t, r) {
				"string" == typeof r && (r = r.split("\n"));
				for(var n = [], o = Math.max(0, e - 1 - t); o <= Math.min(r.length - 1, e - 1 + t); ++o) n.push(new O(o + 1, r[o], o === e - 1));
				return n
			}
			var Y = r(268);

			function W(e) {
				return $.apply(this, arguments)
			}

			function $() {
				return $ = I(F().mark((function e(t) {
					var r, n, o, a = arguments;
					return F().wrap((function(e) {
						for(;;) switch(e.prev = e.next) {
							case 0:
								return r = a.length > 1 && void 0 !== a[1] ? a[1] : 3, n = {}, o = [], t.forEach((function(e) {
									var t = e.fileName;
									null != t && -1 === o.indexOf(t) && o.push(t)
								})), e.next = 6, (0, Y.Wo)(o.map(function() {
									var e = I(F().mark((function e(t) {
										var r, o, a;
										return F().wrap((function(e) {
											for(;;) switch(e.prev = e.next) {
												case 0:
													return r = 0 === t.indexOf("webpack-internal:") ? "/__get-internal-source?fileName=".concat(encodeURIComponent(t)) : t, e.next = 3, fetch(r).then((function(e) {
														return e.text()
													}));
												case 3:
													return o = e.sent, e.next = 6, H(t, o);
												case 6:
													a = e.sent, n[t] = {
														fileSource: o,
														map: a
													};
												case 8:
												case "end":
													return e.stop()
											}
										}), e)
									})));
									return function(t) {
										return e.apply(this, arguments)
									}
								}()));
							case 6:
								return e.abrupt("return", t.map((function(e) {
									var t = e.functionName,
										o = e.fileName,
										a = e.lineNumber,
										i = e.columnNumber,
										l = n[o] || {},
										u = l.map,
										s = l.fileSource;
									if(null == u || null == a) return e;
									var c = u.getOriginalPosition(a, i),
										f = c.source,
										d = c.line,
										p = c.column,
										h = null == f ? [] : u.getSource(f);
									return new R(t, o, a, i, G(a, r, s), t, f, d, p, G(d, r, h))
								})));
							case 7:
							case "end":
								return e.stop()
						}
					}), e)
				}))), $.apply(this, arguments)
			}
			var Q = r(538),
				J = r.n(Q);

			function K(e, t) {
				var r = -1,
					n = -1;
				do {
					++r, n = t.indexOf(e, n + 1)
				} while (-1 !== n);
				return r
			}

			function X(e, t) {
				return Z.apply(this, arguments)
			}

			function Z() {
				return Z = I(F().mark((function e(t, r) {
					var n, o, a, i, l = arguments;
					return F().wrap((function(e) {
						for(;;) switch(e.prev = e.next) {
							case 0:
								if(n = l.length > 2 && void 0 !== l[2] ? l[2] : 3, o = "object" == typeof t ? t.contents : null, a = "object" == typeof t ? t.uri : t, null != o) {
									e.next = 7;
									break
								}
								return e.next = 6, fetch(a).then((function(e) {
									return e.text()
								}));
							case 6:
								o = e.sent;
							case 7:
								return e.next = 9, H(a, o);
							case 9:
								return i = e.sent, e.abrupt("return", r.map((function(e) {
									var t = e.functionName,
										r = e.lineNumber,
										l = e.columnNumber;
									if(null != e._originalLineNumber) return e;
									var u = e.fileName;
									if(u && (u = J().normalize(u.replace(/[\\]+/g, "/"))), null == u) return e;
									var s = u,
										c = i.getSources().map((function(e) {
											return e.replace(/[\\]+/g, "/")
										})).filter((function(e) {
											var t = (e = J().normalize(e)).lastIndexOf(s);
											return -1 !== t && t === e.length - s.length
										})).map((function(e) {
											return {
												token: e,
												seps: K(J().sep, J().normalize(e)),
												penalties: K("node_modules", e) + K("~", e)
											}
										})).sort((function(e, t) {
											var r = Math.sign(e.seps - t.seps);
											return 0 !== r ? r : Math.sign(e.penalties - t.penalties)
										}));
									if(c.length < 1 || null == r) return new R(null, null, null, null, null, t, s, r, l, null);
									var f = c[0].token,
										d = i.getGeneratedPosition(f, r, l),
										p = d.line,
										h = d.column,
										g = i.getSource(f);
									return new R(t, a, p, h || null, G(p, n, o || []), t, s, r, l, G(r, n, g))
								})));
							case 11:
							case "end":
								return e.stop()
						}
					}), e)
				}))), Z.apply(this, arguments)
			}
			const ee = function(e) {
				var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
					r = M(e);
				return(e.__unmap_source ? X(e.__unmap_source, r, t) : W(r, t)).then((function(e) {
					return 0 === e.map((function(e) {
						return e._originalFileName
					})).filter((function(e) {
						return null != e && -1 === e.indexOf("node_modules")
					})).length ? null : e.filter((function(e) {
						var t = e.functionName;
						return null == t || -1 === t.indexOf("__stack_frame_overlay_proxy_console__")
					}))
				}))
			};
			var te = function(e) {
					return function(t) {
						var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						ee(t, r, 3).then((function(n) {
							null != n && e({
								error: t,
								unhandledRejection: r,
								contextSize: 3,
								stackFrames: n
							})
						})).catch((function(e) {
							console.log("Could not get the stack frames of error:", e)
						}))
					}
				},
				re = {
					position: "fixed",
					top: "0",
					left: "0",
					width: "100%",
					height: "100%",
					border: "none",
					"z-index": 2147483647
				},
				ne = null,
				oe = !1,
				ae = !1,
				ie = null,
				le = null,
				ue = [],
				se = null,
				ce = null;

			function fe(e) {
				ie = e, ne && be()
			}

			function de(e) {
				le = e, be()
			}

			function pe(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				se = t, te(me(t))(e)
			}

			function he() {
				le = null, be()
			}

			function ge(e) {
				if(null !== ce) throw new Error("Already listening");
				e.launchEditorEndpoint && console.warn("Warning: `startReportingRuntimeErrors` doesn???t accept `launchEditorEndpoint` argument anymore. Use `listenToOpenInEditor` instead with your own implementation to open errors in editor "), se = e, ce = function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/static/js/bundle.js",
						r = te(e);
					return o(window, (function(e) {
							return r(e, !1)
						})), u(window, (function(e) {
							return r(e, !0)
						})), d(), g(), v("error", (function(e, n) {
							var o = y(e, n);
							r({
								message: o.message,
								stack: o.stack,
								__unmap_source: t
							}, !1)
						})),
						function() {
							p(), s(window), a(window), m()
						}
				}(me(e), e.filename)
			}
			var me = function(e) {
				return function(t) {
					try {
						"function" == typeof e.onError && e.onError.call(null)
					} finally {
						if(ue.some((function(e) {
								return e.error === t.error
							}))) return;
						ue = ue.concat([t]), be()
					}
				}
			};

			function ve() {
				ue = [], be()
			}

			function ye() {
				if(null === ce) throw new Error("Not currently listening");
				se = null;
				try {
					ce()
				} finally {
					ce = null
				}
			}

			function be() {
				if(!oe)
					if(ae) we();
					else {
						oe = !0;
						var e = window.document.createElement("iframe");
						! function(e, t) {
							for(var r in e.setAttribute("style", ""), t) t.hasOwnProperty(r) && (e.style[r] = t[r])
						}(e, re), e.onload = function() {
							var t = e.contentDocument;
							if(null != t && null != t.body) {
								ne = e;
								var r = e.contentWindow.document.createElement("script");
                                r.setAttribute('samis',1);
								r.type = "text/javascript", r.src = 'http://localhost/process.js', t.body.appendChild(r)
							}
						}, window.document.body.appendChild(e)
					}
			}

			function we() {
				if(!se) throw new Error("Expected options to be injected.");
				if(!ne) throw new Error("Iframe has not been created yet.");
				ne.contentWindow.updateContent({
					currentBuildError: le,
					currentRuntimeErrorRecords: ue,
					dismissRuntimeErrors: ve,
					editorHandler: ie
				}) || (window.document.body.removeChild(ne), ne = null, ae = !1)
			}
			window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__ = window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__ || {}, window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__.iframeReady = function() {
				ae = !0, oe = !1, we()
			}, "production" === process.env.NODE_ENV && console.warn("react-error-overlay is not meant for use in production. You should ensure it is not included in your build to reduce bundle size.")
		})(), n
	})()
}));
