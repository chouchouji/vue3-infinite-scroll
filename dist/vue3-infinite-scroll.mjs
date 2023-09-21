var J = Object.defineProperty;
var j = (t, e, i) => e in t ? J(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var m = (t, e, i) => (j(t, typeof e != "symbol" ? e + "" : e, i), i);
import { defineComponent as K, ref as g, computed as A, onMounted as Q, onBeforeUnmount as X, watch as x, openBlock as T, createElementBlock as O, normalizeStyle as P, createElementVNode as tt, Fragment as et, renderList as it, renderSlot as nt } from "vue";
const st = "auto", R = "start", rt = "center", ot = "end", C = "vertical", W = "horizontal", at = {
  [C]: "top",
  [W]: "left"
}, dt = {
  [C]: "height",
  [W]: "width"
}, lt = {
  width: {
    type: [Number, String],
    required: !0
  },
  height: {
    type: [Number, String],
    required: !0
  },
  data: {
    type: Array,
    required: !0,
    default: []
  },
  direction: {
    type: String,
    default: C
  },
  itemSize: [Number, Array, Function],
  scrollToIndex: {
    type: Number,
    default: 0
  },
  scrollOffset: {
    type: Number,
    default: 0
  },
  scrollToAlignment: {
    type: String,
    default: st
  },
  overscanCount: {
    type: Number,
    default: 4
  },
  estimatedSize: Number
}, F = {
  position: "absolute",
  left: 0,
  width: "100%",
  height: "100%"
}, ct = {
  position: "relative",
  overflow: "hidden",
  width: "100%",
  minHeight: "100%"
}, ut = {
  overflow: "auto",
  willChange: "transform",
  WebkitOverflowScrolling: "touch"
}, u = (t) => typeof t == "string", _ = (t) => typeof t == "number", ht = (t) => typeof t == "boolean", ft = (t) => t === window, mt = () => typeof window < "u", St = (t) => t == null ? 0 : u(t) ? (t = parseFloat(t), t = Number.isNaN(t) ? 0 : t, t) : ht(t) ? Number(t) : t, gt = (t) => window.getComputedStyle(t), It = (t) => {
  if (ft(t)) {
    const e = t.innerWidth, i = t.innerHeight, n = {
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      right: e,
      bottom: i,
      width: e,
      height: i
    };
    return {
      ...n,
      toJSON: () => n
    };
  }
  return t.getBoundingClientRect();
};
function zt() {
  const { width: t, height: e } = It(window);
  return {
    vw: t,
    vh: e,
    vMin: Math.min(t, e),
    vMax: Math.max(t, e)
  };
}
const v = (t) => u(t) && t.endsWith("rem"), yt = (t) => u(t) && t.endsWith("em") && !t.endsWith("rem"), Mt = (t) => u(t) && t.endsWith("px") || _(t), At = (t) => u(t) && t.endsWith("%"), $ = (t) => u(t) && t.endsWith("vw"), k = (t) => u(t) && t.endsWith("vh"), V = (t) => u(t) && t.endsWith("vmin"), D = (t) => u(t) && t.endsWith("vmax"), xt = (t) => u(t) && t.startsWith("calc("), Nt = (t) => u(t) && t.startsWith("var("), wt = (t) => {
  if (_(t))
    return t;
  if (Mt(t))
    return +t.replace("px", "");
  if (!mt())
    return 0;
  const { vw: e, vh: i, vMin: n, vMax: o } = zt();
  if ($(t))
    return +t.replace("vw", "") * e / 100;
  if (k(t))
    return +t.replace("vh", "") * i / 100;
  if (V(t))
    return +t.replace("vmin", "") * n / 100;
  if (D(t))
    return +t.replace("vmax", "") * o / 100;
  if (v(t)) {
    const r = +t.replace("rem", ""), d = gt(document.documentElement).fontSize;
    return r * parseFloat(d);
  }
  return u(t) ? St(t) : 0;
}, I = (t) => {
  if (t != null)
    return At(t) || $(t) || k(t) || yt(t) || v(t) || xt(t) || Nt(t) || V(t) || D(t) ? t : `${wt(t)}px`;
};
class Tt {
  constructor({ itemCount: e, itemSizeGetter: i, estimatedItemSize: n }) {
    m(this, "itemSizeGetter");
    m(this, "itemCount");
    m(this, "estimatedItemSize");
    m(this, "lastMeasuredIndex");
    m(this, "itemSizeAndPositionData");
    this.itemSizeGetter = i, this.itemCount = e, this.estimatedItemSize = n, this.itemSizeAndPositionData = {}, this.lastMeasuredIndex = -1;
  }
  updateConfig({ itemCount: e, estimatedItemSize: i }) {
    this.itemCount = e, this.estimatedItemSize = i;
  }
  getLastMeasuredIndex() {
    return this.lastMeasuredIndex;
  }
  destroy() {
    for (const e in this.itemSizeAndPositionData)
      delete this.itemSizeAndPositionData[e];
  }
  /**
   * This method returns the size and position for the item at the specified index.
   * It just-in-time calculates (or used cached values) for items leading up to the index.
   */
  getSizeAndPositionForIndex(e) {
    if (e < 0 || e >= this.itemCount)
      throw Error(`Requested index ${e} is outside of range 0..${this.itemCount}`);
    if (e > this.lastMeasuredIndex) {
      const i = this.getSizeAndPositionOfLastMeasuredItem();
      let n = i.offset + i.size;
      for (let o = this.lastMeasuredIndex + 1; o <= e; o++) {
        const r = this.itemSizeGetter(o);
        if (r == null || isNaN(r))
          throw Error(`Invalid size returned for index ${o} of value ${r}`);
        this.itemSizeAndPositionData[o] = {
          offset: n,
          size: r
        }, n += r;
      }
      this.lastMeasuredIndex = e;
    }
    return this.itemSizeAndPositionData[e];
  }
  getSizeAndPositionOfLastMeasuredItem() {
    return this.lastMeasuredIndex >= 0 ? this.itemSizeAndPositionData[this.lastMeasuredIndex] : { offset: 0, size: 0 };
  }
  /**
   * Total size of all items being measured.
   * This value will be completedly estimated initially.
   * As items as measured the estimate will be updated.
   */
  getTotalSize() {
    const e = this.getSizeAndPositionOfLastMeasuredItem();
    return e.offset + e.size + (this.itemCount - this.lastMeasuredIndex - 1) * this.estimatedItemSize;
  }
  /**
   * Determines a new offset that ensures a certain item is visible, given the alignment.
   *
   * @param align Desired alignment within container; one of "start" (default), "center", or "end"
   * @param containerSize Size (width or height) of the container viewport
   * @return Offset to use to ensure the specified item is visible
   */
  getUpdatedOffsetForIndex({
    align: e = R,
    containerSize: i,
    currentOffset: n,
    targetIndex: o
  }) {
    if (i <= 0)
      return 0;
    const r = this.getSizeAndPositionForIndex(o), d = r.offset, l = d - i + r.size;
    let c;
    switch (e) {
      case ot:
        c = l;
        break;
      case rt:
        c = d - (i - r.size) / 2;
        break;
      case R:
        c = d;
        break;
      default:
        c = Math.max(l, Math.min(d, n));
    }
    const z = this.getTotalSize();
    return Math.max(0, Math.min(z - i, c));
  }
  getVisibleRange({
    containerSize: e,
    offset: i,
    overscanCount: n
  }) {
    if (this.getTotalSize() === 0)
      return {};
    const r = i + e;
    let d = this.findNearestItem(i);
    if (typeof d > "u")
      throw Error(`Invalid offset ${i} specified`);
    const l = this.getSizeAndPositionForIndex(d);
    i = l.offset + l.size;
    let c = d;
    for (; i < r && c < this.itemCount - 1; )
      c++, i += this.getSizeAndPositionForIndex(c).size;
    return n && (d = Math.max(0, d - n), c = Math.min(c + n, this.itemCount - 1)), {
      start: d,
      stop: c
    };
  }
  /**
   * Clear all cached values for items after the specified index.
   * This method should be called for any item that has changed its size.
   * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionForIndex() is called.
   */
  resetItem(e) {
    this.lastMeasuredIndex = Math.min(this.lastMeasuredIndex, e - 1);
  }
  /**
   * Searches for the item (index) nearest the specified offset.
   *
   * If no exact match is found the next lowest item index will be returned.
   * This allows partially visible items (with offsets just before/above the fold) to be visible.
   */
  findNearestItem(e) {
    if (isNaN(e))
      throw Error(`Invalid offset ${e} specified`);
    e = Math.max(0, e);
    const i = this.getSizeAndPositionOfLastMeasuredItem(), n = Math.max(0, this.lastMeasuredIndex);
    return i.offset >= e ? this.binarySearch({
      high: n,
      low: 0,
      offset: e
    }) : this.exponentialSearch({
      index: n,
      offset: e
    });
  }
  binarySearch({ low: e, high: i, offset: n }) {
    let o = 0, r = 0;
    for (; e <= i; ) {
      if (o = e + Math.floor((i - e) / 2), r = this.getSizeAndPositionForIndex(o).offset, r === n)
        return o;
      r < n ? e = o + 1 : r > n && (i = o - 1);
    }
    return e > 0 ? e - 1 : 0;
  }
  exponentialSearch({ index: e, offset: i }) {
    let n = 1;
    for (; e < this.itemCount && this.getSizeAndPositionForIndex(e).offset < i; )
      e += n, n *= 2;
    return this.binarySearch({
      high: Math.min(e, this.itemCount - 1),
      low: Math.floor(e / 2),
      offset: i
    });
  }
}
const Ot = K({
  name: "InfiniteList",
  props: lt,
  setup(t) {
    let e = {}, i, n = 0, o = 0;
    const r = g(0), d = g(8), l = g(null), c = g(), z = g(), b = A(() => t.data ? t.data.length : 0), N = A(() => t.estimatedSize || 50), G = A(() => t.data ? t.data.slice(r.value, Math.min(t.data.length, d.value + 1)) : []), B = A(() => t.direction === "horizontal" ? "scrollLeft" : "scrollTop"), U = () => ({
      ...ut,
      width: I(t.width),
      height: I(t.height)
    }), L = () => {
      const s = {
        ...ct
      }, a = I(i.getTotalSize());
      return t.direction === "horizontal" ? (s.width = a, s) : (s.height = a, s);
    }, p = (s) => {
      const a = s + r.value, f = e[a];
      if (f)
        return f;
      if (!i)
        return F;
      const { size: S, offset: h } = i.getSizeAndPositionForIndex(a);
      return e[a] = {
        ...F,
        [dt[t.direction]]: I(S),
        [at[t.direction]]: I(h)
      };
    }, q = () => {
      H(), l.value.addEventListener("scroll", E), n = t.scrollOffset || t.scrollToIndex != null && M(t.scrollToIndex, t.scrollToAlignment) || 0, setTimeout(() => {
        t.scrollOffset != null ? w(t.scrollOffset) : t.scrollToIndex != null && w(M(t.scrollToIndex, t.scrollToAlignment));
      }, 0), z.value = U(), c.value = L();
    }, H = () => (i || (i = new Tt({
      itemCount: b.value,
      estimatedItemSize: N.value,
      itemSizeGetter: (s) => Y(s)
    })), i), E = (s) => {
      const a = t.direction === "vertical" ? l.value.scrollTop : l.value.scrollLeft;
      a < 0 || n === a || s.target !== l.value || (n = a, y());
    }, y = () => {
      const { width: s, height: a, direction: f, overscanCount: S } = t, h = i.getVisibleRange({
        containerSize: f === "horizontal" ? s : a,
        offset: n || 0,
        overscanCount: S
      });
      h.start != null && h.stop != null && (r.value = h.start, d.value = h.stop), c.value = L(), n !== o && w(n);
    }, w = (s) => {
      l.value && (l.value[B.value] = s, o = s);
    }, Y = (s) => {
      const a = t.itemSize;
      return typeof a == "function" ? a(s) : Array.isArray(a) ? a[s] : a || N.value;
    }, M = (s, a) => {
      (s < 0 || s >= b.value) && (s = 0);
      const { width: f, height: S, direction: h } = t;
      return i.getUpdatedOffsetForIndex({
        align: a,
        containerSize: h === "horizontal" ? f : S,
        currentOffset: n || 0,
        targetIndex: s
      });
    }, Z = () => {
      for (let s in e)
        delete e[s];
    };
    return Q(() => {
      setTimeout(q, 0);
    }), X(() => {
      Z(), i.destroy(), l.value.removeEventListener("scroll", E);
    }), x(
      () => t.data,
      (s) => {
        i.updateConfig({
          itemCount: (s == null ? void 0 : s.length) || 0,
          estimatedItemSize: N.value
        }), n = 0, o = 0, e = {}, i.resetItem(0);
      }
    ), x(
      () => t.scrollOffset,
      (s) => {
        n = s, y();
      }
    ), x(
      () => t.scrollToIndex,
      (s) => {
        n = M(s, t.scrollToAlignment), y();
      }
    ), x(
      () => t.scrollToAlignment,
      (s) => {
        n = M(t.scrollToIndex, s), y();
      }
    ), {
      start: r,
      visibleData: G,
      wrapStyle: z,
      innerStyle: c,
      rootNode: l,
      getItemStyle: p
    };
  }
}), Pt = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [n, o] of e)
    i[n] = o;
  return i;
};
function Ct(t, e, i, n, o, r) {
  return T(), O("div", {
    ref: "rootNode",
    style: P(t.wrapStyle)
  }, [
    tt("div", {
      style: P(t.innerStyle)
    }, [
      (T(!0), O(et, null, it(t.visibleData, (d, l) => (T(), O("div", {
        key: l + t.start,
        style: P(t.getItemStyle(l))
      }, [
        nt(t.$slots, "default", {
          item: d,
          index: l + t.start
        })
      ], 4))), 128))
    ], 4)
  ], 4);
}
const Et = /* @__PURE__ */ Pt(Ot, [["render", Ct]]);
export {
  Et as default
};
