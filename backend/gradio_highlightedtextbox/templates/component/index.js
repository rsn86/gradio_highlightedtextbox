const {
  SvelteComponent: qn,
  append: re,
  attr: J,
  create_slot: kn,
  destroy_each: Sn,
  detach: fe,
  element: he,
  empty: yn,
  ensure_array_like: lt,
  get_all_dirty_from_scope: Tn,
  get_slot_changes: Ln,
  init: Nn,
  insert: ce,
  safe_not_equal: Mn,
  set_data: Qe,
  space: He,
  text: xe,
  toggle_class: F,
  transition_in: jn,
  transition_out: En,
  update_slot_base: Hn
} = window.__gradio__svelte__internal;
function it(n, e, t) {
  const o = n.slice();
  return o[8] = e[t][0], o[9] = e[t][1], o[11] = t, o;
}
function st(n) {
  let e, t, o, l, i, s, _ = lt(Object.entries(
    /*_color_map*/
    n[4]
  )), r = [];
  for (let a = 0; a < _.length; a += 1)
    r[a] = at(it(n, _, a));
  return {
    c() {
      e = he("span"), e.textContent = "·", t = He(), o = he("div"), l = he("span"), i = xe(
        /*legend_label*/
        n[3]
      ), s = He();
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      J(e, "class", "legend-separator svelte-vm3q5z"), F(e, "hide", !/*show_legend*/
      n[1] || !/*show_label*/
      n[0]), F(
        e,
        "has-info",
        /*info*/
        n[5] != null
      ), J(l, "class", "svelte-vm3q5z"), F(l, "hide", !/*show_legend_label*/
      n[2]), F(
        l,
        "has-info",
        /*info*/
        n[5] != null
      ), J(o, "class", "category-legend svelte-vm3q5z"), J(o, "data-testid", "highlighted-text:category-legend"), F(o, "hide", !/*show_legend*/
      n[1]);
    },
    m(a, f) {
      ce(a, e, f), ce(a, t, f), ce(a, o, f), re(o, l), re(l, i), re(o, s);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(o, null);
    },
    p(a, f) {
      if (f & /*show_legend, show_label*/
      3 && F(e, "hide", !/*show_legend*/
      a[1] || !/*show_label*/
      a[0]), f & /*info*/
      32 && F(
        e,
        "has-info",
        /*info*/
        a[5] != null
      ), f & /*legend_label*/
      8 && Qe(
        i,
        /*legend_label*/
        a[3]
      ), f & /*show_legend_label*/
      4 && F(l, "hide", !/*show_legend_label*/
      a[2]), f & /*info*/
      32 && F(
        l,
        "has-info",
        /*info*/
        a[5] != null
      ), f & /*Object, _color_map, info*/
      48) {
        _ = lt(Object.entries(
          /*_color_map*/
          a[4]
        ));
        let c;
        for (c = 0; c < _.length; c += 1) {
          const u = it(a, _, c);
          r[c] ? r[c].p(u, f) : (r[c] = at(u), r[c].c(), r[c].m(o, null));
        }
        for (; c < r.length; c += 1)
          r[c].d(1);
        r.length = _.length;
      }
      f & /*show_legend*/
      2 && F(o, "hide", !/*show_legend*/
      a[1]);
    },
    d(a) {
      a && (fe(e), fe(t), fe(o)), Sn(r, a);
    }
  };
}
function at(n) {
  let e, t = (
    /*category*/
    n[8] + ""
  ), o, l, i;
  return {
    c() {
      e = he("div"), o = xe(t), l = He(), J(e, "class", "category-label svelte-vm3q5z"), J(e, "style", i = "background-color:" + /*color*/
      n[9].secondary), F(
        e,
        "has-info",
        /*info*/
        n[5] != null
      );
    },
    m(s, _) {
      ce(s, e, _), re(e, o), re(e, l);
    },
    p(s, _) {
      _ & /*_color_map*/
      16 && t !== (t = /*category*/
      s[8] + "") && Qe(o, t), _ & /*_color_map*/
      16 && i !== (i = "background-color:" + /*color*/
      s[9].secondary) && J(e, "style", i), _ & /*info*/
      32 && F(
        e,
        "has-info",
        /*info*/
        s[5] != null
      );
    },
    d(s) {
      s && fe(e);
    }
  };
}
function _t(n) {
  let e, t;
  return {
    c() {
      e = he("div"), t = xe(
        /*info*/
        n[5]
      ), J(e, "class", "title-with-highlights-info svelte-vm3q5z");
    },
    m(o, l) {
      ce(o, e, l), re(e, t);
    },
    p(o, l) {
      l & /*info*/
      32 && Qe(
        t,
        /*info*/
        o[5]
      );
    },
    d(o) {
      o && fe(e);
    }
  };
}
function Fn(n) {
  let e, t, o, l = Object.keys(
    /*_color_map*/
    n[4]
  ).length !== 0, i, s, _;
  const r = (
    /*#slots*/
    n[7].default
  ), a = kn(
    r,
    n,
    /*$$scope*/
    n[6],
    null
  );
  let f = l && st(n), c = (
    /*info*/
    n[5] && _t(n)
  );
  return {
    c() {
      e = he("div"), t = he("span"), a && a.c(), o = He(), f && f.c(), i = He(), c && c.c(), s = yn(), J(t, "data-testid", "block-info"), J(t, "class", "svelte-vm3q5z"), F(t, "sr-only", !/*show_label*/
      n[0]), F(t, "hide", !/*show_label*/
      n[0]), F(
        t,
        "has-info",
        /*info*/
        n[5] != null
      ), J(e, "class", "title-container svelte-vm3q5z");
    },
    m(u, m) {
      ce(u, e, m), re(e, t), a && a.m(t, null), re(e, o), f && f.m(e, null), ce(u, i, m), c && c.m(u, m), ce(u, s, m), _ = !0;
    },
    p(u, [m]) {
      a && a.p && (!_ || m & /*$$scope*/
      64) && Hn(
        a,
        r,
        u,
        /*$$scope*/
        u[6],
        _ ? Ln(
          r,
          /*$$scope*/
          u[6],
          m,
          null
        ) : Tn(
          /*$$scope*/
          u[6]
        ),
        null
      ), (!_ || m & /*show_label*/
      1) && F(t, "sr-only", !/*show_label*/
      u[0]), (!_ || m & /*show_label*/
      1) && F(t, "hide", !/*show_label*/
      u[0]), (!_ || m & /*info*/
      32) && F(
        t,
        "has-info",
        /*info*/
        u[5] != null
      ), m & /*_color_map*/
      16 && (l = Object.keys(
        /*_color_map*/
        u[4]
      ).length !== 0), l ? f ? f.p(u, m) : (f = st(u), f.c(), f.m(e, null)) : f && (f.d(1), f = null), /*info*/
      u[5] ? c ? c.p(u, m) : (c = _t(u), c.c(), c.m(s.parentNode, s)) : c && (c.d(1), c = null);
    },
    i(u) {
      _ || (jn(a, u), _ = !0);
    },
    o(u) {
      En(a, u), _ = !1;
    },
    d(u) {
      u && (fe(e), fe(i), fe(s)), a && a.d(u), f && f.d(), c && c.d(u);
    }
  };
}
function Vn(n, e, t) {
  let { $$slots: o = {}, $$scope: l } = e, { show_label: i = !0 } = e, { show_legend: s = !0 } = e, { show_legend_label: _ = !0 } = e, { legend_label: r = "Highlights:" } = e, { _color_map: a = {} } = e, { info: f = void 0 } = e;
  return n.$$set = (c) => {
    "show_label" in c && t(0, i = c.show_label), "show_legend" in c && t(1, s = c.show_legend), "show_legend_label" in c && t(2, _ = c.show_legend_label), "legend_label" in c && t(3, r = c.legend_label), "_color_map" in c && t(4, a = c._color_map), "info" in c && t(5, f = c.info), "$$scope" in c && t(6, l = c.$$scope);
  }, [
    i,
    s,
    _,
    r,
    a,
    f,
    l,
    o
  ];
}
class Dn extends qn {
  constructor(e) {
    super(), Nn(this, e, Vn, Fn, Mn, {
      show_label: 0,
      show_legend: 1,
      show_legend_label: 2,
      legend_label: 3,
      _color_map: 4,
      info: 5
    });
  }
}
function ze() {
}
const zn = (n) => n;
function Rn(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
const ln = typeof window < "u";
let rt = ln ? () => window.performance.now() : () => Date.now(), sn = ln ? (n) => requestAnimationFrame(n) : ze;
const Se = /* @__PURE__ */ new Set();
function an(n) {
  Se.forEach((e) => {
    e.c(n) || (Se.delete(e), e.f());
  }), Se.size !== 0 && sn(an);
}
function On(n) {
  let e;
  return Se.size === 0 && sn(an), {
    promise: new Promise((t) => {
      Se.add(e = { c: n, f: t });
    }),
    abort() {
      Se.delete(e);
    }
  };
}
function ft(n, { delay: e = 0, duration: t = 400, easing: o = zn } = {}) {
  const l = +getComputedStyle(n).opacity;
  return {
    delay: e,
    duration: t,
    easing: o,
    css: (i) => `opacity: ${i * l}`
  };
}
const $e = [];
function Zn(n, e = ze) {
  let t;
  const o = /* @__PURE__ */ new Set();
  function l(_) {
    if (Rn(n, _) && (n = _, t)) {
      const r = !$e.length;
      for (const a of o)
        a[1](), $e.push(a, n);
      if (r) {
        for (let a = 0; a < $e.length; a += 2)
          $e[a][0]($e[a + 1]);
        $e.length = 0;
      }
    }
  }
  function i(_) {
    l(_(n));
  }
  function s(_, r = ze) {
    const a = [_, r];
    return o.add(a), o.size === 1 && (t = e(l, i) || ze), _(n), () => {
      o.delete(a), o.size === 0 && t && (t(), t = null);
    };
  }
  return { set: l, update: i, subscribe: s };
}
function ct(n) {
  return Object.prototype.toString.call(n) === "[object Date]";
}
function Je(n, e, t, o) {
  if (typeof t == "number" || ct(t)) {
    const l = o - t, i = (t - e) / (n.dt || 1 / 60), s = n.opts.stiffness * l, _ = n.opts.damping * i, r = (s - _) * n.inv_mass, a = (i + r) * n.dt;
    return Math.abs(a) < n.opts.precision && Math.abs(l) < n.opts.precision ? o : (n.settled = !1, ct(t) ? new Date(t.getTime() + a) : t + a);
  } else {
    if (Array.isArray(t))
      return t.map(
        (l, i) => Je(n, e[i], t[i], o[i])
      );
    if (typeof t == "object") {
      const l = {};
      for (const i in t)
        l[i] = Je(n, e[i], t[i], o[i]);
      return l;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function ut(n, e = {}) {
  const t = Zn(n), { stiffness: o = 0.15, damping: l = 0.8, precision: i = 0.01 } = e;
  let s, _, r, a = n, f = n, c = 1, u = 0, m = !1;
  function b(y, T = {}) {
    f = y;
    const w = r = {};
    return n == null || T.hard || k.stiffness >= 1 && k.damping >= 1 ? (m = !0, s = rt(), a = y, t.set(n = f), Promise.resolve()) : (T.soft && (u = 1 / ((T.soft === !0 ? 0.5 : +T.soft) * 60), c = 0), _ || (s = rt(), m = !1, _ = On((d) => {
      if (m)
        return m = !1, _ = null, !1;
      c = Math.min(c + u, 1);
      const q = {
        inv_mass: c,
        opts: k,
        settled: !0,
        dt: (d - s) * 60 / 1e3
      }, N = Je(q, a, n, f);
      return s = d, a = n, t.set(n = N), q.settled && (_ = null), !q.settled;
    })), new Promise((d) => {
      _.promise.then(() => {
        w === r && d();
      });
    }));
  }
  const k = {
    set: b,
    update: (y, T) => b(y(f, n), T),
    subscribe: t.subscribe,
    stiffness: o,
    damping: l,
    precision: i
  };
  return k;
}
const {
  SvelteComponent: qi,
  append: ki,
  attr: Si,
  detach: yi,
  init: Ti,
  insert: Li,
  noop: Ni,
  safe_not_equal: Mi,
  svg_element: ji
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ei,
  append: Hi,
  attr: Fi,
  detach: Vi,
  init: Di,
  insert: zi,
  noop: Ri,
  safe_not_equal: Oi,
  svg_element: Zi
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ai,
  append: Bi,
  attr: Ii,
  detach: Pi,
  init: Wi,
  insert: Xi,
  noop: Gi,
  safe_not_equal: Ui,
  svg_element: Yi
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ji,
  append: Ki,
  attr: Qi,
  detach: xi,
  init: es,
  insert: ts,
  noop: ns,
  safe_not_equal: os,
  svg_element: ls
} = window.__gradio__svelte__internal, {
  SvelteComponent: is,
  append: ss,
  attr: as,
  detach: _s,
  init: rs,
  insert: fs,
  noop: cs,
  safe_not_equal: us,
  svg_element: ds
} = window.__gradio__svelte__internal, {
  SvelteComponent: ms,
  append: ps,
  attr: gs,
  detach: hs,
  init: vs,
  insert: bs,
  noop: ws,
  safe_not_equal: $s,
  svg_element: Cs
} = window.__gradio__svelte__internal, {
  SvelteComponent: An,
  append: Bn,
  attr: ie,
  detach: In,
  init: Pn,
  insert: Wn,
  noop: We,
  safe_not_equal: Xn,
  svg_element: dt
} = window.__gradio__svelte__internal;
function Gn(n) {
  let e, t;
  return {
    c() {
      e = dt("svg"), t = dt("polyline"), ie(t, "points", "20 6 9 17 4 12"), ie(e, "xmlns", "http://www.w3.org/2000/svg"), ie(e, "viewBox", "2 0 20 20"), ie(e, "fill", "none"), ie(e, "stroke", "currentColor"), ie(e, "stroke-width", "3"), ie(e, "stroke-linecap", "round"), ie(e, "stroke-linejoin", "round");
    },
    m(o, l) {
      Wn(o, e, l), Bn(e, t);
    },
    p: We,
    i: We,
    o: We,
    d(o) {
      o && In(e);
    }
  };
}
class Un extends An {
  constructor(e) {
    super(), Pn(this, e, null, Gn, Xn, {});
  }
}
const {
  SvelteComponent: qs,
  append: ks,
  attr: Ss,
  detach: ys,
  init: Ts,
  insert: Ls,
  noop: Ns,
  safe_not_equal: Ms,
  svg_element: js
} = window.__gradio__svelte__internal, {
  SvelteComponent: Es,
  append: Hs,
  attr: Fs,
  detach: Vs,
  init: Ds,
  insert: zs,
  noop: Rs,
  safe_not_equal: Os,
  set_style: Zs,
  svg_element: As
} = window.__gradio__svelte__internal, {
  SvelteComponent: Bs,
  append: Is,
  attr: Ps,
  detach: Ws,
  init: Xs,
  insert: Gs,
  noop: Us,
  safe_not_equal: Ys,
  svg_element: Js
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ks,
  append: Qs,
  attr: xs,
  detach: ea,
  init: ta,
  insert: na,
  noop: oa,
  safe_not_equal: la,
  svg_element: ia
} = window.__gradio__svelte__internal, {
  SvelteComponent: sa,
  append: aa,
  attr: _a,
  detach: ra,
  init: fa,
  insert: ca,
  noop: ua,
  safe_not_equal: da,
  svg_element: ma
} = window.__gradio__svelte__internal, {
  SvelteComponent: Yn,
  append: mt,
  attr: me,
  detach: Jn,
  init: Kn,
  insert: Qn,
  noop: Xe,
  safe_not_equal: xn,
  svg_element: Ge
} = window.__gradio__svelte__internal;
function eo(n) {
  let e, t, o;
  return {
    c() {
      e = Ge("svg"), t = Ge("path"), o = Ge("path"), me(t, "fill", "currentColor"), me(t, "d", "M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"), me(o, "fill", "currentColor"), me(o, "d", "M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z"), me(e, "xmlns", "http://www.w3.org/2000/svg"), me(e, "viewBox", "0 0 33 33"), me(e, "color", "currentColor");
    },
    m(l, i) {
      Qn(l, e, i), mt(e, t), mt(e, o);
    },
    p: Xe,
    i: Xe,
    o: Xe,
    d(l) {
      l && Jn(e);
    }
  };
}
class to extends Yn {
  constructor(e) {
    super(), Kn(this, e, null, eo, xn, {});
  }
}
const {
  SvelteComponent: pa,
  append: ga,
  attr: ha,
  detach: va,
  init: ba,
  insert: wa,
  noop: $a,
  safe_not_equal: Ca,
  svg_element: qa
} = window.__gradio__svelte__internal, {
  SvelteComponent: ka,
  append: Sa,
  attr: ya,
  detach: Ta,
  init: La,
  insert: Na,
  noop: Ma,
  safe_not_equal: ja,
  svg_element: Ea
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ha,
  append: Fa,
  attr: Va,
  detach: Da,
  init: za,
  insert: Ra,
  noop: Oa,
  safe_not_equal: Za,
  svg_element: Aa
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ba,
  append: Ia,
  attr: Pa,
  detach: Wa,
  init: Xa,
  insert: Ga,
  noop: Ua,
  safe_not_equal: Ya,
  svg_element: Ja
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ka,
  append: Qa,
  attr: xa,
  detach: e_,
  init: t_,
  insert: n_,
  noop: o_,
  safe_not_equal: l_,
  svg_element: i_
} = window.__gradio__svelte__internal, {
  SvelteComponent: s_,
  append: a_,
  attr: __,
  detach: r_,
  init: f_,
  insert: c_,
  noop: u_,
  safe_not_equal: d_,
  svg_element: m_
} = window.__gradio__svelte__internal, {
  SvelteComponent: p_,
  append: g_,
  attr: h_,
  detach: v_,
  init: b_,
  insert: w_,
  noop: $_,
  safe_not_equal: C_,
  svg_element: q_
} = window.__gradio__svelte__internal, {
  SvelteComponent: k_,
  append: S_,
  attr: y_,
  detach: T_,
  init: L_,
  insert: N_,
  noop: M_,
  safe_not_equal: j_,
  svg_element: E_
} = window.__gradio__svelte__internal, {
  SvelteComponent: H_,
  append: F_,
  attr: V_,
  detach: D_,
  init: z_,
  insert: R_,
  noop: O_,
  safe_not_equal: Z_,
  svg_element: A_
} = window.__gradio__svelte__internal, {
  SvelteComponent: B_,
  append: I_,
  attr: P_,
  detach: W_,
  init: X_,
  insert: G_,
  noop: U_,
  safe_not_equal: Y_,
  svg_element: J_
} = window.__gradio__svelte__internal, {
  SvelteComponent: K_,
  append: Q_,
  attr: x_,
  detach: er,
  init: tr,
  insert: nr,
  noop: or,
  safe_not_equal: lr,
  svg_element: ir
} = window.__gradio__svelte__internal, {
  SvelteComponent: sr,
  append: ar,
  attr: _r,
  detach: rr,
  init: fr,
  insert: cr,
  noop: ur,
  safe_not_equal: dr,
  svg_element: mr
} = window.__gradio__svelte__internal, {
  SvelteComponent: pr,
  append: gr,
  attr: hr,
  detach: vr,
  init: br,
  insert: wr,
  noop: $r,
  safe_not_equal: Cr,
  svg_element: qr
} = window.__gradio__svelte__internal, {
  SvelteComponent: kr,
  append: Sr,
  attr: yr,
  detach: Tr,
  init: Lr,
  insert: Nr,
  noop: Mr,
  safe_not_equal: jr,
  svg_element: Er
} = window.__gradio__svelte__internal, {
  SvelteComponent: Hr,
  append: Fr,
  attr: Vr,
  detach: Dr,
  init: zr,
  insert: Rr,
  noop: Or,
  safe_not_equal: Zr,
  svg_element: Ar
} = window.__gradio__svelte__internal, {
  SvelteComponent: Br,
  append: Ir,
  attr: Pr,
  detach: Wr,
  init: Xr,
  insert: Gr,
  noop: Ur,
  safe_not_equal: Yr,
  svg_element: Jr
} = window.__gradio__svelte__internal, {
  SvelteComponent: Kr,
  append: Qr,
  attr: xr,
  detach: ef,
  init: tf,
  insert: nf,
  noop: of,
  safe_not_equal: lf,
  svg_element: sf
} = window.__gradio__svelte__internal, {
  SvelteComponent: af,
  append: _f,
  attr: rf,
  detach: ff,
  init: cf,
  insert: uf,
  noop: df,
  safe_not_equal: mf,
  svg_element: pf
} = window.__gradio__svelte__internal, {
  SvelteComponent: gf,
  append: hf,
  attr: vf,
  detach: bf,
  init: wf,
  insert: $f,
  noop: Cf,
  safe_not_equal: qf,
  svg_element: kf
} = window.__gradio__svelte__internal, {
  SvelteComponent: Sf,
  append: yf,
  attr: Tf,
  detach: Lf,
  init: Nf,
  insert: Mf,
  noop: jf,
  safe_not_equal: Ef,
  svg_element: Hf
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ff,
  append: Vf,
  attr: Df,
  detach: zf,
  init: Rf,
  insert: Of,
  noop: Zf,
  safe_not_equal: Af,
  svg_element: Bf
} = window.__gradio__svelte__internal, {
  SvelteComponent: If,
  append: Pf,
  attr: Wf,
  detach: Xf,
  init: Gf,
  insert: Uf,
  noop: Yf,
  safe_not_equal: Jf,
  svg_element: Kf
} = window.__gradio__svelte__internal, {
  SvelteComponent: Qf,
  append: xf,
  attr: ec,
  detach: tc,
  init: nc,
  insert: oc,
  noop: lc,
  safe_not_equal: ic,
  svg_element: sc
} = window.__gradio__svelte__internal, {
  SvelteComponent: ac,
  append: _c,
  attr: rc,
  detach: fc,
  init: cc,
  insert: uc,
  noop: dc,
  safe_not_equal: mc,
  set_style: pc,
  svg_element: gc
} = window.__gradio__svelte__internal, {
  SvelteComponent: hc,
  append: vc,
  attr: bc,
  detach: wc,
  init: $c,
  insert: Cc,
  noop: qc,
  safe_not_equal: kc,
  svg_element: Sc
} = window.__gradio__svelte__internal, {
  SvelteComponent: yc,
  append: Tc,
  attr: Lc,
  detach: Nc,
  init: Mc,
  insert: jc,
  noop: Ec,
  safe_not_equal: Hc,
  svg_element: Fc
} = window.__gradio__svelte__internal, {
  SvelteComponent: Vc,
  append: Dc,
  attr: zc,
  detach: Rc,
  init: Oc,
  insert: Zc,
  noop: Ac,
  safe_not_equal: Bc,
  svg_element: Ic
} = window.__gradio__svelte__internal, {
  SvelteComponent: Pc,
  append: Wc,
  attr: Xc,
  detach: Gc,
  init: Uc,
  insert: Yc,
  noop: Jc,
  safe_not_equal: Kc,
  svg_element: Qc
} = window.__gradio__svelte__internal, {
  SvelteComponent: xc,
  append: eu,
  attr: tu,
  detach: nu,
  init: ou,
  insert: lu,
  noop: iu,
  safe_not_equal: su,
  svg_element: au
} = window.__gradio__svelte__internal, {
  SvelteComponent: _u,
  append: ru,
  attr: fu,
  detach: cu,
  init: uu,
  insert: du,
  noop: mu,
  safe_not_equal: pu,
  svg_element: gu
} = window.__gradio__svelte__internal, {
  SvelteComponent: hu,
  append: vu,
  attr: bu,
  detach: wu,
  init: $u,
  insert: Cu,
  noop: qu,
  safe_not_equal: ku,
  svg_element: Su
} = window.__gradio__svelte__internal, {
  SvelteComponent: yu,
  append: Tu,
  attr: Lu,
  detach: Nu,
  init: Mu,
  insert: ju,
  noop: Eu,
  safe_not_equal: Hu,
  svg_element: Fu,
  text: Vu
} = window.__gradio__svelte__internal, {
  SvelteComponent: Du,
  append: zu,
  attr: Ru,
  detach: Ou,
  init: Zu,
  insert: Au,
  noop: Bu,
  safe_not_equal: Iu,
  svg_element: Pu
} = window.__gradio__svelte__internal, {
  SvelteComponent: Wu,
  append: Xu,
  attr: Gu,
  detach: Uu,
  init: Yu,
  insert: Ju,
  noop: Ku,
  safe_not_equal: Qu,
  svg_element: xu
} = window.__gradio__svelte__internal, {
  SvelteComponent: ed,
  append: td,
  attr: nd,
  detach: od,
  init: ld,
  insert: id,
  noop: sd,
  safe_not_equal: ad,
  svg_element: _d
} = window.__gradio__svelte__internal, {
  SvelteComponent: rd,
  append: fd,
  attr: cd,
  detach: ud,
  init: dd,
  insert: md,
  noop: pd,
  safe_not_equal: gd,
  svg_element: hd
} = window.__gradio__svelte__internal, {
  SvelteComponent: vd,
  append: bd,
  attr: wd,
  detach: $d,
  init: Cd,
  insert: qd,
  noop: kd,
  safe_not_equal: Sd,
  svg_element: yd
} = window.__gradio__svelte__internal, {
  SvelteComponent: Td,
  append: Ld,
  attr: Nd,
  detach: Md,
  init: jd,
  insert: Ed,
  noop: Hd,
  safe_not_equal: Fd,
  svg_element: Vd,
  text: Dd
} = window.__gradio__svelte__internal, {
  SvelteComponent: zd,
  append: Rd,
  attr: Od,
  detach: Zd,
  init: Ad,
  insert: Bd,
  noop: Id,
  safe_not_equal: Pd,
  svg_element: Wd,
  text: Xd
} = window.__gradio__svelte__internal, {
  SvelteComponent: Gd,
  append: Ud,
  attr: Yd,
  detach: Jd,
  init: Kd,
  insert: Qd,
  noop: xd,
  safe_not_equal: e0,
  svg_element: t0,
  text: n0
} = window.__gradio__svelte__internal, {
  SvelteComponent: o0,
  append: l0,
  attr: i0,
  detach: s0,
  init: a0,
  insert: _0,
  noop: r0,
  safe_not_equal: f0,
  svg_element: c0
} = window.__gradio__svelte__internal, {
  SvelteComponent: u0,
  append: d0,
  attr: m0,
  detach: p0,
  init: g0,
  insert: h0,
  noop: v0,
  safe_not_equal: b0,
  svg_element: w0
} = window.__gradio__svelte__internal, {
  SvelteComponent: no,
  add_render_callback: oo,
  append: lo,
  attr: pe,
  check_outros: io,
  create_bidirectional_transition: pt,
  create_component: _n,
  destroy_component: rn,
  detach: fn,
  element: cn,
  group_outros: so,
  init: ao,
  insert: un,
  listen: _o,
  mount_component: dn,
  safe_not_equal: ro,
  space: fo,
  toggle_class: gt,
  transition_in: je,
  transition_out: Re
} = window.__gradio__svelte__internal, { onDestroy: co } = window.__gradio__svelte__internal;
function ht(n) {
  let e, t, o, l;
  return t = new Un({}), {
    c() {
      e = cn("span"), _n(t.$$.fragment), pe(e, "class", "check svelte-qjb524"), pe(e, "aria-roledescription", "Value copied"), pe(e, "aria-label", "Copied");
    },
    m(i, s) {
      un(i, e, s), dn(t, e, null), l = !0;
    },
    i(i) {
      l || (je(t.$$.fragment, i), i && oo(() => {
        l && (o || (o = pt(e, ft, {}, !0)), o.run(1));
      }), l = !0);
    },
    o(i) {
      Re(t.$$.fragment, i), i && (o || (o = pt(e, ft, {}, !1)), o.run(0)), l = !1;
    },
    d(i) {
      i && fn(e), rn(t), i && o && o.end();
    }
  };
}
function uo(n) {
  let e, t, o, l, i, s;
  t = new to({});
  let _ = (
    /*copied*/
    n[0] && ht()
  );
  return {
    c() {
      e = cn("button"), _n(t.$$.fragment), o = fo(), _ && _.c(), pe(e, "title", "Copy text to clipboard"), pe(e, "aria-roledescription", "Copy value"), pe(e, "aria-label", "Copy"), pe(e, "class", "svelte-qjb524"), gt(
        e,
        "copied",
        /*copied*/
        n[0]
      );
    },
    m(r, a) {
      un(r, e, a), dn(t, e, null), lo(e, o), _ && _.m(e, null), l = !0, i || (s = _o(
        e,
        "click",
        /*handle_copy*/
        n[1]
      ), i = !0);
    },
    p(r, [a]) {
      /*copied*/
      r[0] ? _ ? a & /*copied*/
      1 && je(_, 1) : (_ = ht(), _.c(), je(_, 1), _.m(e, null)) : _ && (so(), Re(_, 1, 1, () => {
        _ = null;
      }), io()), (!l || a & /*copied*/
      1) && gt(
        e,
        "copied",
        /*copied*/
        r[0]
      );
    },
    i(r) {
      l || (je(t.$$.fragment, r), je(_), l = !0);
    },
    o(r) {
      Re(t.$$.fragment, r), Re(_), l = !1;
    },
    d(r) {
      r && fn(e), rn(t), _ && _.d(), i = !1, s();
    }
  };
}
function mo(n, e, t) {
  var o = this && this.__awaiter || function(a, f, c, u) {
    function m(b) {
      return b instanceof c ? b : new c(function(k) {
        k(b);
      });
    }
    return new (c || (c = Promise))(function(b, k) {
      function y(d) {
        try {
          w(u.next(d));
        } catch (q) {
          k(q);
        }
      }
      function T(d) {
        try {
          w(u.throw(d));
        } catch (q) {
          k(q);
        }
      }
      function w(d) {
        d.done ? b(d.value) : m(d.value).then(y, T);
      }
      w((u = u.apply(a, f || [])).next());
    });
  };
  let l = !1, { value: i } = e, s;
  function _() {
    t(0, l = !0), s && clearTimeout(s), s = setTimeout(
      () => {
        t(0, l = !1);
      },
      2e3
    );
  }
  function r() {
    return o(this, void 0, void 0, function* () {
      "clipboard" in navigator && (yield navigator.clipboard.writeText(i), _());
    });
  }
  return co(() => {
    s && clearTimeout(s);
  }), n.$$set = (a) => {
    "value" in a && t(2, i = a.value);
  }, [l, r, i];
}
class po extends no {
  constructor(e) {
    super(), ao(this, e, mo, uo, ro, { value: 2 });
  }
}
const {
  SvelteComponent: go,
  attr: Fe,
  detach: ho,
  element: vo,
  init: bo,
  insert: wo,
  listen: $o,
  noop: Ue,
  safe_not_equal: Co
} = window.__gradio__svelte__internal, { createEventDispatcher: qo } = window.__gradio__svelte__internal;
function ko(n) {
  let e, t, o;
  return {
    c() {
      e = vo("button"), e.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 0 20 20" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>', Fe(e, "title", "Remove highlights"), Fe(e, "aria-roledescription", "Remove highlights"), Fe(e, "aria-label", "Remove highlights"), Fe(e, "class", "svelte-1ga0gmr");
    },
    m(l, i) {
      wo(l, e, i), t || (o = $o(
        e,
        "click",
        /*click_handler*/
        n[1]
      ), t = !0);
    },
    p: Ue,
    i: Ue,
    o: Ue,
    d(l) {
      l && ho(e), t = !1, o();
    }
  };
}
function So(n) {
  const e = qo();
  return [e, () => e("clear")];
}
class yo extends go {
  constructor(e) {
    super(), bo(this, e, So, ko, Co, {});
  }
}
const {
  SvelteComponent: To,
  append: Lo,
  attr: No,
  check_outros: vt,
  create_component: mn,
  destroy_component: pn,
  detach: Mo,
  element: jo,
  group_outros: bt,
  init: Eo,
  insert: Ho,
  mount_component: gn,
  noop: Fo,
  safe_not_equal: Vo,
  space: Do,
  transition_in: ae,
  transition_out: Ce
} = window.__gradio__svelte__internal, { createEventDispatcher: zo } = window.__gradio__svelte__internal;
function wt(n) {
  let e, t;
  return e = new yo({}), e.$on(
    "clear",
    /*clear_handler*/
    n[4]
  ), {
    c() {
      mn(e.$$.fragment);
    },
    m(o, l) {
      gn(e, o, l), t = !0;
    },
    p: Fo,
    i(o) {
      t || (ae(e.$$.fragment, o), t = !0);
    },
    o(o) {
      Ce(e.$$.fragment, o), t = !1;
    },
    d(o) {
      pn(e, o);
    }
  };
}
function $t(n) {
  let e, t;
  return e = new po({ props: { value: (
    /*value*/
    n[0]
  ) } }), {
    c() {
      mn(e.$$.fragment);
    },
    m(o, l) {
      gn(e, o, l), t = !0;
    },
    p(o, l) {
      const i = {};
      l & /*value*/
      1 && (i.value = /*value*/
      o[0]), e.$set(i);
    },
    i(o) {
      t || (ae(e.$$.fragment, o), t = !0);
    },
    o(o) {
      Ce(e.$$.fragment, o), t = !1;
    },
    d(o) {
      pn(e, o);
    }
  };
}
function Ro(n) {
  let e, t, o, l = (
    /*show_remove_tags_button*/
    n[2] && wt(n)
  ), i = (
    /*show_copy_button*/
    n[1] && $t(n)
  );
  return {
    c() {
      e = jo("div"), l && l.c(), t = Do(), i && i.c(), No(e, "class", "svelte-1bqqv16");
    },
    m(s, _) {
      Ho(s, e, _), l && l.m(e, null), Lo(e, t), i && i.m(e, null), o = !0;
    },
    p(s, [_]) {
      /*show_remove_tags_button*/
      s[2] ? l ? (l.p(s, _), _ & /*show_remove_tags_button*/
      4 && ae(l, 1)) : (l = wt(s), l.c(), ae(l, 1), l.m(e, t)) : l && (bt(), Ce(l, 1, 1, () => {
        l = null;
      }), vt()), /*show_copy_button*/
      s[1] ? i ? (i.p(s, _), _ & /*show_copy_button*/
      2 && ae(i, 1)) : (i = $t(s), i.c(), ae(i, 1), i.m(e, null)) : i && (bt(), Ce(i, 1, 1, () => {
        i = null;
      }), vt());
    },
    i(s) {
      o || (ae(l), ae(i), o = !0);
    },
    o(s) {
      Ce(l), Ce(i), o = !1;
    },
    d(s) {
      s && Mo(e), l && l.d(), i && i.d();
    }
  };
}
function Oo(n, e, t) {
  let { value: o } = e, { show_copy_button: l = !1 } = e, { show_remove_tags_button: i = !1 } = e;
  const s = zo(), _ = () => s("clear");
  return n.$$set = (r) => {
    "value" in r && t(0, o = r.value), "show_copy_button" in r && t(1, l = r.show_copy_button), "show_remove_tags_button" in r && t(2, i = r.show_remove_tags_button);
  }, [o, l, i, s, _];
}
class Zo extends To {
  constructor(e) {
    super(), Eo(this, e, Oo, Ro, Vo, {
      value: 0,
      show_copy_button: 1,
      show_remove_tags_button: 2
    });
  }
}
const Ct = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "teal",
  "orange",
  "cyan",
  "lime",
  "pink"
], Ao = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], qt = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
}, kt = Ao.reduce(
  (n, { color: e, primary: t, secondary: o }) => ({
    ...n,
    [e]: {
      primary: qt[e][t],
      secondary: qt[e][o]
    }
  }),
  {}
), Bo = (n) => Ct[n % Ct.length];
function St(n, e, t) {
  if (!t) {
    var o = document.createElement("canvas");
    t = o.getContext("2d");
  }
  t.fillStyle = n, t.fillRect(0, 0, 1, 1);
  const [l, i, s] = t.getImageData(0, 0, 1, 1).data;
  return t.clearRect(0, 0, 1, 1), `rgba(${l}, ${i}, ${s}, ${255 / e})`;
}
function Io(n, e, t) {
  var o = {};
  for (const l in n) {
    const i = n[l].trim();
    i in kt ? o[l] = kt[i] : o[l] = {
      primary: e ? St(n[l], 1, t) : n[l],
      secondary: e ? St(n[l], 0.5, t) : n[l]
    };
  }
  return o;
}
function Po(n, e) {
  let t = [], o = null, l = null;
  for (const [i, s] of n)
    l === s ? o = o ? o + i : i : (o !== null && t.push([o, l]), o = i, l = s);
  return o !== null && t.push([o, l]), t;
}
function Wo(n) {
  const e = window.getSelection();
  if (e.rangeCount > 0) {
    const t = document.createRange();
    return t.setStart(n, 0), e.anchorNode !== null && t.setEnd(e.anchorNode, e.anchorOffset), t.toString().length;
  }
  return -1;
}
function Xo(n, e) {
  var t = document.createTreeWalker(n, NodeFilter.SHOW_TEXT), o = t.nextNode();
  if (!o || !o.textContent)
    return null;
  for (var l = o.textContent.length; l < e; )
    if (o = t.nextNode(), o && o.textContent)
      l += o.textContent.length;
    else
      return null;
  var i = o.textContent.length - (l - e);
  return { node: o, offset: i };
}
const {
  SvelteComponent: Go,
  add_render_callback: hn,
  append: yt,
  attr: Q,
  binding_callbacks: Tt,
  bubble: Me,
  create_component: Lt,
  destroy_component: Nt,
  detach: Ze,
  element: et,
  init: Uo,
  insert: Ae,
  listen: oe,
  mount_component: Mt,
  run_all: Yo,
  safe_not_equal: Jo,
  set_data: Ko,
  space: jt,
  text: Qo,
  toggle_class: Et,
  transition_in: Ht,
  transition_out: Ft
} = window.__gradio__svelte__internal, { beforeUpdate: xo, afterUpdate: el, createEventDispatcher: tl } = window.__gradio__svelte__internal;
function nl(n) {
  let e;
  return {
    c() {
      e = Qo(
        /*label*/
        n[0]
      );
    },
    m(t, o) {
      Ae(t, e, o);
    },
    p(t, o) {
      o[0] & /*label*/
      1 && Ko(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && Ze(e);
    }
  };
}
function ol(n) {
  let e, t, o;
  return {
    c() {
      e = et("div"), Q(e, "class", "textfield svelte-1atky07"), Q(e, "data-testid", "highlighted-textbox"), Q(e, "contenteditable", "true"), Q(e, "role", "textbox"), Q(e, "tabindex", "0"), /*el_text*/
      (n[11] === void 0 || /*marked_el_text*/
      n[12] === void 0) && hn(() => (
        /*div_input_handler_1*/
        n[29].call(e)
      ));
    },
    m(l, i) {
      Ae(l, e, i), n[28](e), /*el_text*/
      n[11] !== void 0 && (e.textContent = /*el_text*/
      n[11]), /*marked_el_text*/
      n[12] !== void 0 && (e.innerHTML = /*marked_el_text*/
      n[12]), t || (o = [
        oe(
          e,
          "input",
          /*div_input_handler_1*/
          n[29]
        ),
        oe(
          e,
          "blur",
          /*blur_handler*/
          n[21]
        ),
        oe(
          e,
          "keypress",
          /*keypress_handler*/
          n[22]
        ),
        oe(
          e,
          "select",
          /*select_handler*/
          n[23]
        ),
        oe(
          e,
          "scroll",
          /*scroll_handler*/
          n[24]
        ),
        oe(
          e,
          "input",
          /*handle_change*/
          n[16]
        ),
        oe(
          e,
          "focus",
          /*focus_handler*/
          n[25]
        ),
        oe(
          e,
          "change",
          /*handle_change*/
          n[16]
        )
      ], t = !0);
    },
    p(l, i) {
      i[0] & /*el_text*/
      2048 && /*el_text*/
      l[11] !== e.textContent && (e.textContent = /*el_text*/
      l[11]), i[0] & /*marked_el_text*/
      4096 && /*marked_el_text*/
      l[12] !== e.innerHTML && (e.innerHTML = /*marked_el_text*/
      l[12]);
    },
    d(l) {
      l && Ze(e), n[28](null), t = !1, Yo(o);
    }
  };
}
function ll(n) {
  let e, t, o;
  return {
    c() {
      e = et("div"), Q(e, "class", "textfield svelte-1atky07"), Q(e, "data-testid", "highlighted-textbox"), Q(e, "contenteditable", "false"), /*el_text*/
      (n[11] === void 0 || /*marked_el_text*/
      n[12] === void 0) && hn(() => (
        /*div_input_handler*/
        n[27].call(e)
      ));
    },
    m(l, i) {
      Ae(l, e, i), n[26](e), /*el_text*/
      n[11] !== void 0 && (e.textContent = /*el_text*/
      n[11]), /*marked_el_text*/
      n[12] !== void 0 && (e.innerHTML = /*marked_el_text*/
      n[12]), t || (o = oe(
        e,
        "input",
        /*div_input_handler*/
        n[27]
      ), t = !0);
    },
    p(l, i) {
      i[0] & /*el_text*/
      2048 && /*el_text*/
      l[11] !== e.textContent && (e.textContent = /*el_text*/
      l[11]), i[0] & /*marked_el_text*/
      4096 && /*marked_el_text*/
      l[12] !== e.innerHTML && (e.innerHTML = /*marked_el_text*/
      l[12]);
    },
    d(l) {
      l && Ze(e), n[26](null), t = !1, o();
    }
  };
}
function il(n) {
  let e, t, o, l, i, s;
  t = new Dn({
    props: {
      show_label: (
        /*show_label*/
        n[3]
      ),
      show_legend: (
        /*show_legend*/
        n[4]
      ),
      show_legend_label: (
        /*show_legend_label*/
        n[5]
      ),
      legend_label: (
        /*legend_label*/
        n[1]
      ),
      _color_map: (
        /*_color_map*/
        n[13]
      ),
      info: (
        /*info*/
        n[2]
      ),
      $$slots: { default: [nl] },
      $$scope: { ctx: n }
    }
  }), l = new Zo({
    props: {
      show_copy_button: (
        /*show_copy_button*/
        n[7]
      ),
      show_remove_tags_button: (
        /*show_remove_tags_button*/
        n[8] && !/*tags_removed*/
        n[14]
      ),
      value: (
        /*tagged_text*/
        n[15]
      )
    }
  }), l.$on(
    "clear",
    /*handle_remove_tags*/
    n[17]
  );
  function _(f, c) {
    return (
      /*disabled*/
      f[9] ? ll : ol
    );
  }
  let r = _(n), a = r(n);
  return {
    c() {
      e = et("label"), Lt(t.$$.fragment), o = jt(), Lt(l.$$.fragment), i = jt(), a.c(), Q(e, "for", "highlighted-textbox"), Q(e, "class", "svelte-1atky07"), Et(
        e,
        "container",
        /*container*/
        n[6]
      );
    },
    m(f, c) {
      Ae(f, e, c), Mt(t, e, null), yt(e, o), Mt(l, e, null), yt(e, i), a.m(e, null), s = !0;
    },
    p(f, c) {
      const u = {};
      c[0] & /*show_label*/
      8 && (u.show_label = /*show_label*/
      f[3]), c[0] & /*show_legend*/
      16 && (u.show_legend = /*show_legend*/
      f[4]), c[0] & /*show_legend_label*/
      32 && (u.show_legend_label = /*show_legend_label*/
      f[5]), c[0] & /*legend_label*/
      2 && (u.legend_label = /*legend_label*/
      f[1]), c[0] & /*_color_map*/
      8192 && (u._color_map = /*_color_map*/
      f[13]), c[0] & /*info*/
      4 && (u.info = /*info*/
      f[2]), c[0] & /*label*/
      1 | c[1] & /*$$scope*/
      512 && (u.$$scope = { dirty: c, ctx: f }), t.$set(u);
      const m = {};
      c[0] & /*show_copy_button*/
      128 && (m.show_copy_button = /*show_copy_button*/
      f[7]), c[0] & /*show_remove_tags_button, tags_removed*/
      16640 && (m.show_remove_tags_button = /*show_remove_tags_button*/
      f[8] && !/*tags_removed*/
      f[14]), c[0] & /*tagged_text*/
      32768 && (m.value = /*tagged_text*/
      f[15]), l.$set(m), r === (r = _(f)) && a ? a.p(f, c) : (a.d(1), a = r(f), a && (a.c(), a.m(e, null))), (!s || c[0] & /*container*/
      64) && Et(
        e,
        "container",
        /*container*/
        f[6]
      );
    },
    i(f) {
      s || (Ht(t.$$.fragment, f), Ht(l.$$.fragment, f), s = !0);
    },
    o(f) {
      Ft(t.$$.fragment, f), Ft(l.$$.fragment, f), s = !1;
    },
    d(f) {
      f && Ze(e), Nt(t), Nt(l), a.d();
    }
  };
}
function sl(n) {
  const e = document.createElement("div");
  return e.textContent = n, e.innerHTML;
}
function al(n, e, t) {
  const o = typeof document < "u";
  let { value: l = [] } = e, { value_is_output: i = !1 } = e, { label: s } = e, { legend_label: _ } = e, { info: r = void 0 } = e, { show_label: a = !0 } = e, { show_legend: f = !1 } = e, { show_legend_label: c = !1 } = e, { container: u = !0 } = e, { color_map: m = {} } = e, { show_copy_button: b = !1 } = e, { show_remove_tags_button: k = !1 } = e, { disabled: y } = e, T, w = "", d = "", q, N, g = {}, H = !1, z = "";
  function Z() {
    N = !m || Object.keys(m).length === 0 ? {} : m;
    for (let p in N)
      l.map(([L, M]) => M).includes(p) || delete N[p];
    if (l.length > 0) {
      for (let [p, L] of l)
        if (L !== null && !(L in N)) {
          let M = Bo(Object.keys(N).length);
          N[L] = M;
        }
    }
    t(13, g = Io(N, o, q));
  }
  function X(p) {
    l.length > 0 && p && (t(11, w = l.map(([L, M]) => L).join("")), t(12, d = l.map(([L, M]) => {
      const V = sl(L);
      return M !== null ? `<mark class="hl ${M}" style="background-color:${g[M].secondary}">${V}</mark>` : V;
    }).join("")), t(15, z = l.map(([L, M]) => M !== null ? `<${M}>${L}</${M}>` : L).join("")));
  }
  const A = tl();
  xo(() => {
    T && T.offsetHeight + T.scrollTop > T.scrollHeight - 100;
  });
  function ue() {
    B(), G(), A("change", l), i || A("input", l);
  }
  el(() => {
    Z(), X(i), t(19, i = !1);
  });
  function G() {
    let p = [], L = "", M = null;
    const V = document.createElement("div");
    V.innerHTML = d;
    function K(I) {
      if (I.nodeType === Node.TEXT_NODE)
        L += I.textContent || "";
      else if (I.nodeType === Node.ELEMENT_NODE) {
        const ne = I;
        if (ne.tagName.toLowerCase() === "mark") {
          L && (p.push([L, M]), L = "");
          const D = ne.className.split(" "), R = D.indexOf("hl");
          M = R >= 0 && R + 1 < D.length ? D[R + 1] : null;
          for (let de of ne.childNodes)
            K(de);
          L && (p.push([L, M]), L = "", M = null);
        } else
          for (let D of ne.childNodes)
            K(D);
      }
    }
    for (let I of V.childNodes)
      K(I);
    L && p.push([L, M]), t(18, l = p);
  }
  function te() {
    t(12, d = w), ue(), t(14, H = !0), A("clear");
  }
  function B() {
    const p = window.getSelection(), L = p.anchorOffset;
    if (p.rangeCount > 0) {
      var M = p.getRangeAt(0).commonAncestorContainer.parentElement;
      if (M && M.tagName.toLowerCase() === "mark") {
        const R = M.textContent;
        var V = M.parentElement, K = document.createTextNode(R);
        V.replaceChild(K, M), t(12, d = V.innerHTML);
        var I = document.createRange(), ne = window.getSelection();
        const de = L + Wo(V);
        var D = Xo(V, de);
        I.setStart(D.node, D.offset), I.setEnd(D.node, D.offset), ne.removeAllRanges(), ne.addRange(I);
      }
    }
  }
  function ve(p) {
    Me.call(this, n, p);
  }
  function Ne(p) {
    Me.call(this, n, p);
  }
  function be(p) {
    Me.call(this, n, p);
  }
  function h(p) {
    Me.call(this, n, p);
  }
  function we(p) {
    Me.call(this, n, p);
  }
  function Be(p) {
    Tt[p ? "unshift" : "push"](() => {
      T = p, t(10, T);
    });
  }
  function Ie() {
    w = this.textContent, d = this.innerHTML, t(11, w), t(12, d);
  }
  function v(p) {
    Tt[p ? "unshift" : "push"](() => {
      T = p, t(10, T);
    });
  }
  function Pe() {
    w = this.textContent, d = this.innerHTML, t(11, w), t(12, d);
  }
  return n.$$set = (p) => {
    "value" in p && t(18, l = p.value), "value_is_output" in p && t(19, i = p.value_is_output), "label" in p && t(0, s = p.label), "legend_label" in p && t(1, _ = p.legend_label), "info" in p && t(2, r = p.info), "show_label" in p && t(3, a = p.show_label), "show_legend" in p && t(4, f = p.show_legend), "show_legend_label" in p && t(5, c = p.show_legend_label), "container" in p && t(6, u = p.container), "color_map" in p && t(20, m = p.color_map), "show_copy_button" in p && t(7, b = p.show_copy_button), "show_remove_tags_button" in p && t(8, k = p.show_remove_tags_button), "disabled" in p && t(9, y = p.disabled);
  }, Z(), X(!0), [
    s,
    _,
    r,
    a,
    f,
    c,
    u,
    b,
    k,
    y,
    T,
    w,
    d,
    g,
    H,
    z,
    ue,
    te,
    l,
    i,
    m,
    ve,
    Ne,
    be,
    h,
    we,
    Be,
    Ie,
    v,
    Pe
  ];
}
class _l extends Go {
  constructor(e) {
    super(), Uo(
      this,
      e,
      al,
      il,
      Jo,
      {
        value: 18,
        value_is_output: 19,
        label: 0,
        legend_label: 1,
        info: 2,
        show_label: 3,
        show_legend: 4,
        show_legend_label: 5,
        container: 6,
        color_map: 20,
        show_copy_button: 7,
        show_remove_tags_button: 8,
        disabled: 9
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: rl,
  assign: fl,
  create_slot: cl,
  detach: ul,
  element: dl,
  get_all_dirty_from_scope: ml,
  get_slot_changes: pl,
  get_spread_update: gl,
  init: hl,
  insert: vl,
  safe_not_equal: bl,
  set_dynamic_element_data: Vt,
  set_style: O,
  toggle_class: se,
  transition_in: vn,
  transition_out: bn,
  update_slot_base: wl
} = window.__gradio__svelte__internal;
function $l(n) {
  let e, t, o;
  const l = (
    /*#slots*/
    n[18].default
  ), i = cl(
    l,
    n,
    /*$$scope*/
    n[17],
    null
  );
  let s = [
    { "data-testid": (
      /*test_id*/
      n[7]
    ) },
    { id: (
      /*elem_id*/
      n[2]
    ) },
    {
      class: t = "block " + /*elem_classes*/
      n[3].join(" ") + " svelte-1t38q2d"
    }
  ], _ = {};
  for (let r = 0; r < s.length; r += 1)
    _ = fl(_, s[r]);
  return {
    c() {
      e = dl(
        /*tag*/
        n[14]
      ), i && i.c(), Vt(
        /*tag*/
        n[14]
      )(e, _), se(
        e,
        "hidden",
        /*visible*/
        n[10] === !1
      ), se(
        e,
        "padded",
        /*padding*/
        n[6]
      ), se(
        e,
        "border_focus",
        /*border_mode*/
        n[5] === "focus"
      ), se(e, "hide-container", !/*explicit_call*/
      n[8] && !/*container*/
      n[9]), O(
        e,
        "height",
        /*get_dimension*/
        n[15](
          /*height*/
          n[0]
        )
      ), O(e, "width", typeof /*width*/
      n[1] == "number" ? `calc(min(${/*width*/
      n[1]}px, 100%))` : (
        /*get_dimension*/
        n[15](
          /*width*/
          n[1]
        )
      )), O(
        e,
        "border-style",
        /*variant*/
        n[4]
      ), O(
        e,
        "overflow",
        /*allow_overflow*/
        n[11] ? "visible" : "hidden"
      ), O(
        e,
        "flex-grow",
        /*scale*/
        n[12]
      ), O(e, "min-width", `calc(min(${/*min_width*/
      n[13]}px, 100%))`), O(e, "border-width", "var(--block-border-width)");
    },
    m(r, a) {
      vl(r, e, a), i && i.m(e, null), o = !0;
    },
    p(r, a) {
      i && i.p && (!o || a & /*$$scope*/
      131072) && wl(
        i,
        l,
        r,
        /*$$scope*/
        r[17],
        o ? pl(
          l,
          /*$$scope*/
          r[17],
          a,
          null
        ) : ml(
          /*$$scope*/
          r[17]
        ),
        null
      ), Vt(
        /*tag*/
        r[14]
      )(e, _ = gl(s, [
        (!o || a & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          r[7]
        ) },
        (!o || a & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          r[2]
        ) },
        (!o || a & /*elem_classes*/
        8 && t !== (t = "block " + /*elem_classes*/
        r[3].join(" ") + " svelte-1t38q2d")) && { class: t }
      ])), se(
        e,
        "hidden",
        /*visible*/
        r[10] === !1
      ), se(
        e,
        "padded",
        /*padding*/
        r[6]
      ), se(
        e,
        "border_focus",
        /*border_mode*/
        r[5] === "focus"
      ), se(e, "hide-container", !/*explicit_call*/
      r[8] && !/*container*/
      r[9]), a & /*height*/
      1 && O(
        e,
        "height",
        /*get_dimension*/
        r[15](
          /*height*/
          r[0]
        )
      ), a & /*width*/
      2 && O(e, "width", typeof /*width*/
      r[1] == "number" ? `calc(min(${/*width*/
      r[1]}px, 100%))` : (
        /*get_dimension*/
        r[15](
          /*width*/
          r[1]
        )
      )), a & /*variant*/
      16 && O(
        e,
        "border-style",
        /*variant*/
        r[4]
      ), a & /*allow_overflow*/
      2048 && O(
        e,
        "overflow",
        /*allow_overflow*/
        r[11] ? "visible" : "hidden"
      ), a & /*scale*/
      4096 && O(
        e,
        "flex-grow",
        /*scale*/
        r[12]
      ), a & /*min_width*/
      8192 && O(e, "min-width", `calc(min(${/*min_width*/
      r[13]}px, 100%))`);
    },
    i(r) {
      o || (vn(i, r), o = !0);
    },
    o(r) {
      bn(i, r), o = !1;
    },
    d(r) {
      r && ul(e), i && i.d(r);
    }
  };
}
function Cl(n) {
  let e, t = (
    /*tag*/
    n[14] && $l(n)
  );
  return {
    c() {
      t && t.c();
    },
    m(o, l) {
      t && t.m(o, l), e = !0;
    },
    p(o, [l]) {
      /*tag*/
      o[14] && t.p(o, l);
    },
    i(o) {
      e || (vn(t, o), e = !0);
    },
    o(o) {
      bn(t, o), e = !1;
    },
    d(o) {
      t && t.d(o);
    }
  };
}
function ql(n, e, t) {
  let { $$slots: o = {}, $$scope: l } = e, { height: i = void 0 } = e, { width: s = void 0 } = e, { elem_id: _ = "" } = e, { elem_classes: r = [] } = e, { variant: a = "solid" } = e, { border_mode: f = "base" } = e, { padding: c = !0 } = e, { type: u = "normal" } = e, { test_id: m = void 0 } = e, { explicit_call: b = !1 } = e, { container: k = !0 } = e, { visible: y = !0 } = e, { allow_overflow: T = !0 } = e, { scale: w = null } = e, { min_width: d = 0 } = e, q = u === "fieldset" ? "fieldset" : "div";
  const N = (g) => {
    if (g !== void 0) {
      if (typeof g == "number")
        return g + "px";
      if (typeof g == "string")
        return g;
    }
  };
  return n.$$set = (g) => {
    "height" in g && t(0, i = g.height), "width" in g && t(1, s = g.width), "elem_id" in g && t(2, _ = g.elem_id), "elem_classes" in g && t(3, r = g.elem_classes), "variant" in g && t(4, a = g.variant), "border_mode" in g && t(5, f = g.border_mode), "padding" in g && t(6, c = g.padding), "type" in g && t(16, u = g.type), "test_id" in g && t(7, m = g.test_id), "explicit_call" in g && t(8, b = g.explicit_call), "container" in g && t(9, k = g.container), "visible" in g && t(10, y = g.visible), "allow_overflow" in g && t(11, T = g.allow_overflow), "scale" in g && t(12, w = g.scale), "min_width" in g && t(13, d = g.min_width), "$$scope" in g && t(17, l = g.$$scope);
  }, [
    i,
    s,
    _,
    r,
    a,
    f,
    c,
    m,
    b,
    k,
    y,
    T,
    w,
    d,
    q,
    N,
    u,
    l,
    o
  ];
}
class kl extends rl {
  constructor(e) {
    super(), hl(this, e, ql, Cl, bl, {
      height: 0,
      width: 1,
      elem_id: 2,
      elem_classes: 3,
      variant: 4,
      border_mode: 5,
      padding: 6,
      type: 16,
      test_id: 7,
      explicit_call: 8,
      container: 9,
      visible: 10,
      allow_overflow: 11,
      scale: 12,
      min_width: 13
    });
  }
}
const {
  SvelteComponent: $0,
  attr: C0,
  create_slot: q0,
  detach: k0,
  element: S0,
  get_all_dirty_from_scope: y0,
  get_slot_changes: T0,
  init: L0,
  insert: N0,
  safe_not_equal: M0,
  transition_in: j0,
  transition_out: E0,
  update_slot_base: H0
} = window.__gradio__svelte__internal, {
  SvelteComponent: F0,
  attr: V0,
  check_outros: D0,
  create_component: z0,
  create_slot: R0,
  destroy_component: O0,
  detach: Z0,
  element: A0,
  empty: B0,
  get_all_dirty_from_scope: I0,
  get_slot_changes: P0,
  group_outros: W0,
  init: X0,
  insert: G0,
  mount_component: U0,
  safe_not_equal: Y0,
  set_data: J0,
  space: K0,
  text: Q0,
  toggle_class: x0,
  transition_in: em,
  transition_out: tm,
  update_slot_base: nm
} = window.__gradio__svelte__internal, {
  SvelteComponent: om,
  append: lm,
  attr: im,
  create_component: sm,
  destroy_component: am,
  detach: _m,
  element: rm,
  init: fm,
  insert: cm,
  mount_component: um,
  safe_not_equal: dm,
  set_data: mm,
  space: pm,
  text: gm,
  toggle_class: hm,
  transition_in: vm,
  transition_out: bm
} = window.__gradio__svelte__internal, {
  SvelteComponent: wm,
  append: $m,
  attr: Cm,
  bubble: qm,
  create_component: km,
  destroy_component: Sm,
  detach: ym,
  element: Tm,
  init: Lm,
  insert: Nm,
  listen: Mm,
  mount_component: jm,
  safe_not_equal: Em,
  set_data: Hm,
  set_style: Fm,
  space: Vm,
  text: Dm,
  toggle_class: zm,
  transition_in: Rm,
  transition_out: Om
} = window.__gradio__svelte__internal, {
  SvelteComponent: Zm,
  append: Am,
  attr: Bm,
  binding_callbacks: Im,
  create_slot: Pm,
  detach: Wm,
  element: Xm,
  get_all_dirty_from_scope: Gm,
  get_slot_changes: Um,
  init: Ym,
  insert: Jm,
  safe_not_equal: Km,
  toggle_class: Qm,
  transition_in: xm,
  transition_out: e1,
  update_slot_base: t1
} = window.__gradio__svelte__internal, {
  SvelteComponent: n1,
  create_component: o1,
  destroy_component: l1,
  init: i1,
  mount_component: s1,
  safe_not_equal: a1,
  transition_in: _1,
  transition_out: r1
} = window.__gradio__svelte__internal, { createEventDispatcher: f1 } = window.__gradio__svelte__internal, {
  SvelteComponent: c1,
  append: u1,
  attr: d1,
  check_outros: m1,
  create_component: p1,
  destroy_component: g1,
  detach: h1,
  element: v1,
  group_outros: b1,
  init: w1,
  insert: $1,
  mount_component: C1,
  safe_not_equal: q1,
  set_data: k1,
  space: S1,
  text: y1,
  toggle_class: T1,
  transition_in: L1,
  transition_out: N1
} = window.__gradio__svelte__internal, {
  SvelteComponent: M1,
  attr: j1,
  create_slot: E1,
  detach: H1,
  element: F1,
  get_all_dirty_from_scope: V1,
  get_slot_changes: D1,
  init: z1,
  insert: R1,
  safe_not_equal: O1,
  toggle_class: Z1,
  transition_in: A1,
  transition_out: B1,
  update_slot_base: I1
} = window.__gradio__svelte__internal, {
  SvelteComponent: P1,
  append: W1,
  attr: X1,
  check_outros: G1,
  create_component: U1,
  destroy_component: Y1,
  detach: J1,
  element: K1,
  empty: Q1,
  group_outros: x1,
  init: ep,
  insert: tp,
  listen: np,
  mount_component: op,
  safe_not_equal: lp,
  space: ip,
  toggle_class: sp,
  transition_in: ap,
  transition_out: _p
} = window.__gradio__svelte__internal;
function qe(n) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; n > 1e3 && t < e.length - 1; )
    n /= 1e3, t++;
  let o = e[t];
  return (Number.isInteger(n) ? n : n.toFixed(1)) + o;
}
const {
  SvelteComponent: Sl,
  append: U,
  attr: S,
  component_subscribe: Dt,
  detach: yl,
  element: Tl,
  init: Ll,
  insert: Nl,
  noop: zt,
  safe_not_equal: Ml,
  set_style: Ve,
  svg_element: Y,
  toggle_class: Rt
} = window.__gradio__svelte__internal, { onMount: jl } = window.__gradio__svelte__internal;
function El(n) {
  let e, t, o, l, i, s, _, r, a, f, c, u;
  return {
    c() {
      e = Tl("div"), t = Y("svg"), o = Y("g"), l = Y("path"), i = Y("path"), s = Y("path"), _ = Y("path"), r = Y("g"), a = Y("path"), f = Y("path"), c = Y("path"), u = Y("path"), S(l, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), S(l, "fill", "#FF7C00"), S(l, "fill-opacity", "0.4"), S(l, "class", "svelte-43sxxs"), S(i, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), S(i, "fill", "#FF7C00"), S(i, "class", "svelte-43sxxs"), S(s, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), S(s, "fill", "#FF7C00"), S(s, "fill-opacity", "0.4"), S(s, "class", "svelte-43sxxs"), S(_, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), S(_, "fill", "#FF7C00"), S(_, "class", "svelte-43sxxs"), Ve(o, "transform", "translate(" + /*$top*/
      n[1][0] + "px, " + /*$top*/
      n[1][1] + "px)"), S(a, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), S(a, "fill", "#FF7C00"), S(a, "fill-opacity", "0.4"), S(a, "class", "svelte-43sxxs"), S(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), S(f, "fill", "#FF7C00"), S(f, "class", "svelte-43sxxs"), S(c, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), S(c, "fill", "#FF7C00"), S(c, "fill-opacity", "0.4"), S(c, "class", "svelte-43sxxs"), S(u, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), S(u, "fill", "#FF7C00"), S(u, "class", "svelte-43sxxs"), Ve(r, "transform", "translate(" + /*$bottom*/
      n[2][0] + "px, " + /*$bottom*/
      n[2][1] + "px)"), S(t, "viewBox", "-1200 -1200 3000 3000"), S(t, "fill", "none"), S(t, "xmlns", "http://www.w3.org/2000/svg"), S(t, "class", "svelte-43sxxs"), S(e, "class", "svelte-43sxxs"), Rt(
        e,
        "margin",
        /*margin*/
        n[0]
      );
    },
    m(m, b) {
      Nl(m, e, b), U(e, t), U(t, o), U(o, l), U(o, i), U(o, s), U(o, _), U(t, r), U(r, a), U(r, f), U(r, c), U(r, u);
    },
    p(m, [b]) {
      b & /*$top*/
      2 && Ve(o, "transform", "translate(" + /*$top*/
      m[1][0] + "px, " + /*$top*/
      m[1][1] + "px)"), b & /*$bottom*/
      4 && Ve(r, "transform", "translate(" + /*$bottom*/
      m[2][0] + "px, " + /*$bottom*/
      m[2][1] + "px)"), b & /*margin*/
      1 && Rt(
        e,
        "margin",
        /*margin*/
        m[0]
      );
    },
    i: zt,
    o: zt,
    d(m) {
      m && yl(e);
    }
  };
}
function Hl(n, e, t) {
  let o, l;
  var i = this && this.__awaiter || function(m, b, k, y) {
    function T(w) {
      return w instanceof k ? w : new k(function(d) {
        d(w);
      });
    }
    return new (k || (k = Promise))(function(w, d) {
      function q(H) {
        try {
          g(y.next(H));
        } catch (z) {
          d(z);
        }
      }
      function N(H) {
        try {
          g(y.throw(H));
        } catch (z) {
          d(z);
        }
      }
      function g(H) {
        H.done ? w(H.value) : T(H.value).then(q, N);
      }
      g((y = y.apply(m, b || [])).next());
    });
  };
  let { margin: s = !0 } = e;
  const _ = ut([0, 0]);
  Dt(n, _, (m) => t(1, o = m));
  const r = ut([0, 0]);
  Dt(n, r, (m) => t(2, l = m));
  let a;
  function f() {
    return i(this, void 0, void 0, function* () {
      yield Promise.all([_.set([125, 140]), r.set([-125, -140])]), yield Promise.all([_.set([-125, 140]), r.set([125, -140])]), yield Promise.all([_.set([-125, 0]), r.set([125, -0])]), yield Promise.all([_.set([125, 0]), r.set([-125, 0])]);
    });
  }
  function c() {
    return i(this, void 0, void 0, function* () {
      yield f(), a || c();
    });
  }
  function u() {
    return i(this, void 0, void 0, function* () {
      yield Promise.all([_.set([125, 0]), r.set([-125, 0])]), c();
    });
  }
  return jl(() => (u(), () => a = !0)), n.$$set = (m) => {
    "margin" in m && t(0, s = m.margin);
  }, [s, o, l, _, r];
}
class Fl extends Sl {
  constructor(e) {
    super(), Ll(this, e, Hl, El, Ml, { margin: 0 });
  }
}
const {
  SvelteComponent: Vl,
  append: ge,
  attr: x,
  binding_callbacks: Ot,
  check_outros: wn,
  create_component: Dl,
  create_slot: zl,
  destroy_component: Rl,
  destroy_each: $n,
  detach: $,
  element: le,
  empty: Le,
  ensure_array_like: Oe,
  get_all_dirty_from_scope: Ol,
  get_slot_changes: Zl,
  group_outros: Cn,
  init: Al,
  insert: C,
  mount_component: Bl,
  noop: Ke,
  safe_not_equal: Il,
  set_data: W,
  set_style: _e,
  space: ee,
  text: j,
  toggle_class: P,
  transition_in: ye,
  transition_out: Te,
  update_slot_base: Pl
} = window.__gradio__svelte__internal, { tick: Wl } = window.__gradio__svelte__internal, { onDestroy: Xl } = window.__gradio__svelte__internal, Gl = (n) => ({}), Zt = (n) => ({});
function At(n, e, t) {
  const o = n.slice();
  return o[39] = e[t], o[41] = t, o;
}
function Bt(n, e, t) {
  const o = n.slice();
  return o[39] = e[t], o;
}
function Ul(n) {
  let e, t = (
    /*i18n*/
    n[1]("common.error") + ""
  ), o, l, i;
  const s = (
    /*#slots*/
    n[29].error
  ), _ = zl(
    s,
    n,
    /*$$scope*/
    n[28],
    Zt
  );
  return {
    c() {
      e = le("span"), o = j(t), l = ee(), _ && _.c(), x(e, "class", "error svelte-1txqlrd");
    },
    m(r, a) {
      C(r, e, a), ge(e, o), C(r, l, a), _ && _.m(r, a), i = !0;
    },
    p(r, a) {
      (!i || a[0] & /*i18n*/
      2) && t !== (t = /*i18n*/
      r[1]("common.error") + "") && W(o, t), _ && _.p && (!i || a[0] & /*$$scope*/
      268435456) && Pl(
        _,
        s,
        r,
        /*$$scope*/
        r[28],
        i ? Zl(
          s,
          /*$$scope*/
          r[28],
          a,
          Gl
        ) : Ol(
          /*$$scope*/
          r[28]
        ),
        Zt
      );
    },
    i(r) {
      i || (ye(_, r), i = !0);
    },
    o(r) {
      Te(_, r), i = !1;
    },
    d(r) {
      r && ($(e), $(l)), _ && _.d(r);
    }
  };
}
function Yl(n) {
  let e, t, o, l, i, s, _, r, a, f = (
    /*variant*/
    n[8] === "default" && /*show_eta_bar*/
    n[18] && /*show_progress*/
    n[6] === "full" && It(n)
  );
  function c(d, q) {
    if (
      /*progress*/
      d[7]
    ) return Ql;
    if (
      /*queue_position*/
      d[2] !== null && /*queue_size*/
      d[3] !== void 0 && /*queue_position*/
      d[2] >= 0
    ) return Kl;
    if (
      /*queue_position*/
      d[2] === 0
    ) return Jl;
  }
  let u = c(n), m = u && u(n), b = (
    /*timer*/
    n[5] && Xt(n)
  );
  const k = [ni, ti], y = [];
  function T(d, q) {
    return (
      /*last_progress_level*/
      d[15] != null ? 0 : (
        /*show_progress*/
        d[6] === "full" ? 1 : -1
      )
    );
  }
  ~(i = T(n)) && (s = y[i] = k[i](n));
  let w = !/*timer*/
  n[5] && xt(n);
  return {
    c() {
      f && f.c(), e = ee(), t = le("div"), m && m.c(), o = ee(), b && b.c(), l = ee(), s && s.c(), _ = ee(), w && w.c(), r = Le(), x(t, "class", "progress-text svelte-1txqlrd"), P(
        t,
        "meta-text-center",
        /*variant*/
        n[8] === "center"
      ), P(
        t,
        "meta-text",
        /*variant*/
        n[8] === "default"
      );
    },
    m(d, q) {
      f && f.m(d, q), C(d, e, q), C(d, t, q), m && m.m(t, null), ge(t, o), b && b.m(t, null), C(d, l, q), ~i && y[i].m(d, q), C(d, _, q), w && w.m(d, q), C(d, r, q), a = !0;
    },
    p(d, q) {
      /*variant*/
      d[8] === "default" && /*show_eta_bar*/
      d[18] && /*show_progress*/
      d[6] === "full" ? f ? f.p(d, q) : (f = It(d), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null), u === (u = c(d)) && m ? m.p(d, q) : (m && m.d(1), m = u && u(d), m && (m.c(), m.m(t, o))), /*timer*/
      d[5] ? b ? b.p(d, q) : (b = Xt(d), b.c(), b.m(t, null)) : b && (b.d(1), b = null), (!a || q[0] & /*variant*/
      256) && P(
        t,
        "meta-text-center",
        /*variant*/
        d[8] === "center"
      ), (!a || q[0] & /*variant*/
      256) && P(
        t,
        "meta-text",
        /*variant*/
        d[8] === "default"
      );
      let N = i;
      i = T(d), i === N ? ~i && y[i].p(d, q) : (s && (Cn(), Te(y[N], 1, 1, () => {
        y[N] = null;
      }), wn()), ~i ? (s = y[i], s ? s.p(d, q) : (s = y[i] = k[i](d), s.c()), ye(s, 1), s.m(_.parentNode, _)) : s = null), /*timer*/
      d[5] ? w && (w.d(1), w = null) : w ? w.p(d, q) : (w = xt(d), w.c(), w.m(r.parentNode, r));
    },
    i(d) {
      a || (ye(s), a = !0);
    },
    o(d) {
      Te(s), a = !1;
    },
    d(d) {
      d && ($(e), $(t), $(l), $(_), $(r)), f && f.d(d), m && m.d(), b && b.d(), ~i && y[i].d(d), w && w.d(d);
    }
  };
}
function It(n) {
  let e, t = `translateX(${/*eta_level*/
  (n[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = le("div"), x(e, "class", "eta-bar svelte-1txqlrd"), _e(e, "transform", t);
    },
    m(o, l) {
      C(o, e, l);
    },
    p(o, l) {
      l[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (o[17] || 0) * 100 - 100}%)`) && _e(e, "transform", t);
    },
    d(o) {
      o && $(e);
    }
  };
}
function Jl(n) {
  let e;
  return {
    c() {
      e = j("processing |");
    },
    m(t, o) {
      C(t, e, o);
    },
    p: Ke,
    d(t) {
      t && $(e);
    }
  };
}
function Kl(n) {
  let e, t = (
    /*queue_position*/
    n[2] + 1 + ""
  ), o, l, i, s;
  return {
    c() {
      e = j("queue: "), o = j(t), l = j("/"), i = j(
        /*queue_size*/
        n[3]
      ), s = j(" |");
    },
    m(_, r) {
      C(_, e, r), C(_, o, r), C(_, l, r), C(_, i, r), C(_, s, r);
    },
    p(_, r) {
      r[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      _[2] + 1 + "") && W(o, t), r[0] & /*queue_size*/
      8 && W(
        i,
        /*queue_size*/
        _[3]
      );
    },
    d(_) {
      _ && ($(e), $(o), $(l), $(i), $(s));
    }
  };
}
function Ql(n) {
  let e, t = Oe(
    /*progress*/
    n[7]
  ), o = [];
  for (let l = 0; l < t.length; l += 1)
    o[l] = Wt(Bt(n, t, l));
  return {
    c() {
      for (let l = 0; l < o.length; l += 1)
        o[l].c();
      e = Le();
    },
    m(l, i) {
      for (let s = 0; s < o.length; s += 1)
        o[s] && o[s].m(l, i);
      C(l, e, i);
    },
    p(l, i) {
      if (i[0] & /*progress*/
      128) {
        t = Oe(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const _ = Bt(l, t, s);
          o[s] ? o[s].p(_, i) : (o[s] = Wt(_), o[s].c(), o[s].m(e.parentNode, e));
        }
        for (; s < o.length; s += 1)
          o[s].d(1);
        o.length = t.length;
      }
    },
    d(l) {
      l && $(e), $n(o, l);
    }
  };
}
function Pt(n) {
  let e, t = (
    /*p*/
    n[39].unit + ""
  ), o, l, i = " ", s;
  function _(f, c) {
    return (
      /*p*/
      f[39].length != null ? ei : xl
    );
  }
  let r = _(n), a = r(n);
  return {
    c() {
      a.c(), e = ee(), o = j(t), l = j(" | "), s = j(i);
    },
    m(f, c) {
      a.m(f, c), C(f, e, c), C(f, o, c), C(f, l, c), C(f, s, c);
    },
    p(f, c) {
      r === (r = _(f)) && a ? a.p(f, c) : (a.d(1), a = r(f), a && (a.c(), a.m(e.parentNode, e))), c[0] & /*progress*/
      128 && t !== (t = /*p*/
      f[39].unit + "") && W(o, t);
    },
    d(f) {
      f && ($(e), $(o), $(l), $(s)), a.d(f);
    }
  };
}
function xl(n) {
  let e = qe(
    /*p*/
    n[39].index || 0
  ) + "", t;
  return {
    c() {
      t = j(e);
    },
    m(o, l) {
      C(o, t, l);
    },
    p(o, l) {
      l[0] & /*progress*/
      128 && e !== (e = qe(
        /*p*/
        o[39].index || 0
      ) + "") && W(t, e);
    },
    d(o) {
      o && $(t);
    }
  };
}
function ei(n) {
  let e = qe(
    /*p*/
    n[39].index || 0
  ) + "", t, o, l = qe(
    /*p*/
    n[39].length
  ) + "", i;
  return {
    c() {
      t = j(e), o = j("/"), i = j(l);
    },
    m(s, _) {
      C(s, t, _), C(s, o, _), C(s, i, _);
    },
    p(s, _) {
      _[0] & /*progress*/
      128 && e !== (e = qe(
        /*p*/
        s[39].index || 0
      ) + "") && W(t, e), _[0] & /*progress*/
      128 && l !== (l = qe(
        /*p*/
        s[39].length
      ) + "") && W(i, l);
    },
    d(s) {
      s && ($(t), $(o), $(i));
    }
  };
}
function Wt(n) {
  let e, t = (
    /*p*/
    n[39].index != null && Pt(n)
  );
  return {
    c() {
      t && t.c(), e = Le();
    },
    m(o, l) {
      t && t.m(o, l), C(o, e, l);
    },
    p(o, l) {
      /*p*/
      o[39].index != null ? t ? t.p(o, l) : (t = Pt(o), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(o) {
      o && $(e), t && t.d(o);
    }
  };
}
function Xt(n) {
  let e, t = (
    /*eta*/
    n[0] ? `/${/*formatted_eta*/
    n[19]}` : ""
  ), o, l;
  return {
    c() {
      e = j(
        /*formatted_timer*/
        n[20]
      ), o = j(t), l = j("s");
    },
    m(i, s) {
      C(i, e, s), C(i, o, s), C(i, l, s);
    },
    p(i, s) {
      s[0] & /*formatted_timer*/
      1048576 && W(
        e,
        /*formatted_timer*/
        i[20]
      ), s[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      i[0] ? `/${/*formatted_eta*/
      i[19]}` : "") && W(o, t);
    },
    d(i) {
      i && ($(e), $(o), $(l));
    }
  };
}
function ti(n) {
  let e, t;
  return e = new Fl({
    props: { margin: (
      /*variant*/
      n[8] === "default"
    ) }
  }), {
    c() {
      Dl(e.$$.fragment);
    },
    m(o, l) {
      Bl(e, o, l), t = !0;
    },
    p(o, l) {
      const i = {};
      l[0] & /*variant*/
      256 && (i.margin = /*variant*/
      o[8] === "default"), e.$set(i);
    },
    i(o) {
      t || (ye(e.$$.fragment, o), t = !0);
    },
    o(o) {
      Te(e.$$.fragment, o), t = !1;
    },
    d(o) {
      Rl(e, o);
    }
  };
}
function ni(n) {
  let e, t, o, l, i, s = `${/*last_progress_level*/
  n[15] * 100}%`, _ = (
    /*progress*/
    n[7] != null && Gt(n)
  );
  return {
    c() {
      e = le("div"), t = le("div"), _ && _.c(), o = ee(), l = le("div"), i = le("div"), x(t, "class", "progress-level-inner svelte-1txqlrd"), x(i, "class", "progress-bar svelte-1txqlrd"), _e(i, "width", s), x(l, "class", "progress-bar-wrap svelte-1txqlrd"), x(e, "class", "progress-level svelte-1txqlrd");
    },
    m(r, a) {
      C(r, e, a), ge(e, t), _ && _.m(t, null), ge(e, o), ge(e, l), ge(l, i), n[30](i);
    },
    p(r, a) {
      /*progress*/
      r[7] != null ? _ ? _.p(r, a) : (_ = Gt(r), _.c(), _.m(t, null)) : _ && (_.d(1), _ = null), a[0] & /*last_progress_level*/
      32768 && s !== (s = `${/*last_progress_level*/
      r[15] * 100}%`) && _e(i, "width", s);
    },
    i: Ke,
    o: Ke,
    d(r) {
      r && $(e), _ && _.d(), n[30](null);
    }
  };
}
function Gt(n) {
  let e, t = Oe(
    /*progress*/
    n[7]
  ), o = [];
  for (let l = 0; l < t.length; l += 1)
    o[l] = Qt(At(n, t, l));
  return {
    c() {
      for (let l = 0; l < o.length; l += 1)
        o[l].c();
      e = Le();
    },
    m(l, i) {
      for (let s = 0; s < o.length; s += 1)
        o[s] && o[s].m(l, i);
      C(l, e, i);
    },
    p(l, i) {
      if (i[0] & /*progress_level, progress*/
      16512) {
        t = Oe(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const _ = At(l, t, s);
          o[s] ? o[s].p(_, i) : (o[s] = Qt(_), o[s].c(), o[s].m(e.parentNode, e));
        }
        for (; s < o.length; s += 1)
          o[s].d(1);
        o.length = t.length;
      }
    },
    d(l) {
      l && $(e), $n(o, l);
    }
  };
}
function Ut(n) {
  let e, t, o, l, i = (
    /*i*/
    n[41] !== 0 && oi()
  ), s = (
    /*p*/
    n[39].desc != null && Yt(n)
  ), _ = (
    /*p*/
    n[39].desc != null && /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[41]
    ] != null && Jt()
  ), r = (
    /*progress_level*/
    n[14] != null && Kt(n)
  );
  return {
    c() {
      i && i.c(), e = ee(), s && s.c(), t = ee(), _ && _.c(), o = ee(), r && r.c(), l = Le();
    },
    m(a, f) {
      i && i.m(a, f), C(a, e, f), s && s.m(a, f), C(a, t, f), _ && _.m(a, f), C(a, o, f), r && r.m(a, f), C(a, l, f);
    },
    p(a, f) {
      /*p*/
      a[39].desc != null ? s ? s.p(a, f) : (s = Yt(a), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), /*p*/
      a[39].desc != null && /*progress_level*/
      a[14] && /*progress_level*/
      a[14][
        /*i*/
        a[41]
      ] != null ? _ || (_ = Jt(), _.c(), _.m(o.parentNode, o)) : _ && (_.d(1), _ = null), /*progress_level*/
      a[14] != null ? r ? r.p(a, f) : (r = Kt(a), r.c(), r.m(l.parentNode, l)) : r && (r.d(1), r = null);
    },
    d(a) {
      a && ($(e), $(t), $(o), $(l)), i && i.d(a), s && s.d(a), _ && _.d(a), r && r.d(a);
    }
  };
}
function oi(n) {
  let e;
  return {
    c() {
      e = j(" /");
    },
    m(t, o) {
      C(t, e, o);
    },
    d(t) {
      t && $(e);
    }
  };
}
function Yt(n) {
  let e = (
    /*p*/
    n[39].desc + ""
  ), t;
  return {
    c() {
      t = j(e);
    },
    m(o, l) {
      C(o, t, l);
    },
    p(o, l) {
      l[0] & /*progress*/
      128 && e !== (e = /*p*/
      o[39].desc + "") && W(t, e);
    },
    d(o) {
      o && $(t);
    }
  };
}
function Jt(n) {
  let e;
  return {
    c() {
      e = j("-");
    },
    m(t, o) {
      C(t, e, o);
    },
    d(t) {
      t && $(e);
    }
  };
}
function Kt(n) {
  let e = (100 * /*progress_level*/
  (n[14][
    /*i*/
    n[41]
  ] || 0)).toFixed(1) + "", t, o;
  return {
    c() {
      t = j(e), o = j("%");
    },
    m(l, i) {
      C(l, t, i), C(l, o, i);
    },
    p(l, i) {
      i[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (l[14][
        /*i*/
        l[41]
      ] || 0)).toFixed(1) + "") && W(t, e);
    },
    d(l) {
      l && ($(t), $(o));
    }
  };
}
function Qt(n) {
  let e, t = (
    /*p*/
    (n[39].desc != null || /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[41]
    ] != null) && Ut(n)
  );
  return {
    c() {
      t && t.c(), e = Le();
    },
    m(o, l) {
      t && t.m(o, l), C(o, e, l);
    },
    p(o, l) {
      /*p*/
      o[39].desc != null || /*progress_level*/
      o[14] && /*progress_level*/
      o[14][
        /*i*/
        o[41]
      ] != null ? t ? t.p(o, l) : (t = Ut(o), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(o) {
      o && $(e), t && t.d(o);
    }
  };
}
function xt(n) {
  let e, t;
  return {
    c() {
      e = le("p"), t = j(
        /*loading_text*/
        n[9]
      ), x(e, "class", "loading svelte-1txqlrd");
    },
    m(o, l) {
      C(o, e, l), ge(e, t);
    },
    p(o, l) {
      l[0] & /*loading_text*/
      512 && W(
        t,
        /*loading_text*/
        o[9]
      );
    },
    d(o) {
      o && $(e);
    }
  };
}
function li(n) {
  let e, t, o, l, i;
  const s = [Yl, Ul], _ = [];
  function r(a, f) {
    return (
      /*status*/
      a[4] === "pending" ? 0 : (
        /*status*/
        a[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = r(n)) && (o = _[t] = s[t](n)), {
    c() {
      e = le("div"), o && o.c(), x(e, "class", l = "wrap " + /*variant*/
      n[8] + " " + /*show_progress*/
      n[6] + " svelte-1txqlrd"), P(e, "hide", !/*status*/
      n[4] || /*status*/
      n[4] === "complete" || /*show_progress*/
      n[6] === "hidden"), P(
        e,
        "translucent",
        /*variant*/
        n[8] === "center" && /*status*/
        (n[4] === "pending" || /*status*/
        n[4] === "error") || /*translucent*/
        n[11] || /*show_progress*/
        n[6] === "minimal"
      ), P(
        e,
        "generating",
        /*status*/
        n[4] === "generating"
      ), P(
        e,
        "border",
        /*border*/
        n[12]
      ), _e(
        e,
        "position",
        /*absolute*/
        n[10] ? "absolute" : "static"
      ), _e(
        e,
        "padding",
        /*absolute*/
        n[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(a, f) {
      C(a, e, f), ~t && _[t].m(e, null), n[31](e), i = !0;
    },
    p(a, f) {
      let c = t;
      t = r(a), t === c ? ~t && _[t].p(a, f) : (o && (Cn(), Te(_[c], 1, 1, () => {
        _[c] = null;
      }), wn()), ~t ? (o = _[t], o ? o.p(a, f) : (o = _[t] = s[t](a), o.c()), ye(o, 1), o.m(e, null)) : o = null), (!i || f[0] & /*variant, show_progress*/
      320 && l !== (l = "wrap " + /*variant*/
      a[8] + " " + /*show_progress*/
      a[6] + " svelte-1txqlrd")) && x(e, "class", l), (!i || f[0] & /*variant, show_progress, status, show_progress*/
      336) && P(e, "hide", !/*status*/
      a[4] || /*status*/
      a[4] === "complete" || /*show_progress*/
      a[6] === "hidden"), (!i || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && P(
        e,
        "translucent",
        /*variant*/
        a[8] === "center" && /*status*/
        (a[4] === "pending" || /*status*/
        a[4] === "error") || /*translucent*/
        a[11] || /*show_progress*/
        a[6] === "minimal"
      ), (!i || f[0] & /*variant, show_progress, status*/
      336) && P(
        e,
        "generating",
        /*status*/
        a[4] === "generating"
      ), (!i || f[0] & /*variant, show_progress, border*/
      4416) && P(
        e,
        "border",
        /*border*/
        a[12]
      ), f[0] & /*absolute*/
      1024 && _e(
        e,
        "position",
        /*absolute*/
        a[10] ? "absolute" : "static"
      ), f[0] & /*absolute*/
      1024 && _e(
        e,
        "padding",
        /*absolute*/
        a[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(a) {
      i || (ye(o), i = !0);
    },
    o(a) {
      Te(o), i = !1;
    },
    d(a) {
      a && $(e), ~t && _[t].d(), n[31](null);
    }
  };
}
var ii = function(n, e, t, o) {
  function l(i) {
    return i instanceof t ? i : new t(function(s) {
      s(i);
    });
  }
  return new (t || (t = Promise))(function(i, s) {
    function _(f) {
      try {
        a(o.next(f));
      } catch (c) {
        s(c);
      }
    }
    function r(f) {
      try {
        a(o.throw(f));
      } catch (c) {
        s(c);
      }
    }
    function a(f) {
      f.done ? i(f.value) : l(f.value).then(_, r);
    }
    a((o = o.apply(n, e || [])).next());
  });
};
let De = [], Ye = !1;
function si(n) {
  return ii(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (De.push(e), !Ye) Ye = !0;
      else return;
      yield Wl(), requestAnimationFrame(() => {
        let o = [0, 0];
        for (let l = 0; l < De.length; l++) {
          const s = De[l].getBoundingClientRect();
          (l === 0 || s.top + window.scrollY <= o[0]) && (o[0] = s.top + window.scrollY, o[1] = l);
        }
        window.scrollTo({ top: o[0] - 20, behavior: "smooth" }), Ye = !1, De = [];
      });
    }
  });
}
function ai(n, e, t) {
  let o, { $$slots: l = {}, $$scope: i } = e;
  this && this.__awaiter;
  let { i18n: s } = e, { eta: _ = null } = e, { queue_position: r } = e, { queue_size: a } = e, { status: f } = e, { scroll_to_output: c = !1 } = e, { timer: u = !0 } = e, { show_progress: m = "full" } = e, { message: b = null } = e, { progress: k = null } = e, { variant: y = "default" } = e, { loading_text: T = "Loading..." } = e, { absolute: w = !0 } = e, { translucent: d = !1 } = e, { border: q = !1 } = e, { autoscroll: N } = e, g, H = !1, z = 0, Z = 0, X = null, A = null, ue = 0, G = null, te, B = null, ve = !0;
  const Ne = () => {
    t(0, _ = t(26, X = t(19, we = null))), t(24, z = performance.now()), t(25, Z = 0), H = !0, be();
  };
  function be() {
    requestAnimationFrame(() => {
      t(25, Z = (performance.now() - z) / 1e3), H && be();
    });
  }
  function h() {
    t(25, Z = 0), t(0, _ = t(26, X = t(19, we = null))), H && (H = !1);
  }
  Xl(() => {
    H && h();
  });
  let we = null;
  function Be(v) {
    Ot[v ? "unshift" : "push"](() => {
      B = v, t(16, B), t(7, k), t(14, G), t(15, te);
    });
  }
  function Ie(v) {
    Ot[v ? "unshift" : "push"](() => {
      g = v, t(13, g);
    });
  }
  return n.$$set = (v) => {
    "i18n" in v && t(1, s = v.i18n), "eta" in v && t(0, _ = v.eta), "queue_position" in v && t(2, r = v.queue_position), "queue_size" in v && t(3, a = v.queue_size), "status" in v && t(4, f = v.status), "scroll_to_output" in v && t(21, c = v.scroll_to_output), "timer" in v && t(5, u = v.timer), "show_progress" in v && t(6, m = v.show_progress), "message" in v && t(22, b = v.message), "progress" in v && t(7, k = v.progress), "variant" in v && t(8, y = v.variant), "loading_text" in v && t(9, T = v.loading_text), "absolute" in v && t(10, w = v.absolute), "translucent" in v && t(11, d = v.translucent), "border" in v && t(12, q = v.border), "autoscroll" in v && t(23, N = v.autoscroll), "$$scope" in v && t(28, i = v.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    218103809 && (_ === null && t(0, _ = X), _ != null && X !== _ && (t(27, A = (performance.now() - z) / 1e3 + _), t(19, we = A.toFixed(1)), t(26, X = _))), n.$$.dirty[0] & /*eta_from_start, timer_diff*/
    167772160 && t(17, ue = A === null || A <= 0 || !Z ? null : Math.min(Z / A, 1)), n.$$.dirty[0] & /*progress*/
    128 && k != null && t(18, ve = !1), n.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (k != null ? t(14, G = k.map((v) => {
      if (v.index != null && v.length != null)
        return v.index / v.length;
      if (v.progress != null)
        return v.progress;
    })) : t(14, G = null), G ? (t(15, te = G[G.length - 1]), B && (te === 0 ? t(16, B.style.transition = "0", B) : t(16, B.style.transition = "150ms", B))) : t(15, te = void 0)), n.$$.dirty[0] & /*status*/
    16 && (f === "pending" ? Ne() : h()), n.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    10493968 && g && c && (f === "pending" || f === "complete") && si(g, N), n.$$.dirty[0] & /*status, message*/
    4194320, n.$$.dirty[0] & /*timer_diff*/
    33554432 && t(20, o = Z.toFixed(1));
  }, [
    _,
    s,
    r,
    a,
    f,
    u,
    m,
    k,
    y,
    T,
    w,
    d,
    q,
    g,
    G,
    te,
    B,
    ue,
    ve,
    we,
    o,
    c,
    b,
    N,
    z,
    Z,
    X,
    A,
    i,
    l,
    Be,
    Ie
  ];
}
class _i extends Vl {
  constructor(e) {
    super(), Al(
      this,
      e,
      ai,
      li,
      Il,
      {
        i18n: 1,
        eta: 0,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 21,
        timer: 5,
        show_progress: 6,
        message: 22,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 23
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: rp,
  add_render_callback: fp,
  append: cp,
  attr: up,
  bubble: dp,
  check_outros: mp,
  create_component: pp,
  create_in_transition: gp,
  create_out_transition: hp,
  destroy_component: vp,
  detach: bp,
  element: wp,
  group_outros: $p,
  init: Cp,
  insert: qp,
  listen: kp,
  mount_component: Sp,
  run_all: yp,
  safe_not_equal: Tp,
  set_data: Lp,
  space: Np,
  stop_propagation: Mp,
  text: jp,
  transition_in: Ep,
  transition_out: Hp
} = window.__gradio__svelte__internal, { createEventDispatcher: Fp, onMount: Vp } = window.__gradio__svelte__internal, {
  SvelteComponent: Dp,
  append: zp,
  attr: Rp,
  bubble: Op,
  check_outros: Zp,
  create_animation: Ap,
  create_component: Bp,
  destroy_component: Ip,
  detach: Pp,
  element: Wp,
  ensure_array_like: Xp,
  fix_and_outro_and_destroy_block: Gp,
  fix_position: Up,
  group_outros: Yp,
  init: Jp,
  insert: Kp,
  mount_component: Qp,
  noop: xp,
  safe_not_equal: eg,
  set_style: tg,
  space: ng,
  transition_in: og,
  transition_out: lg,
  update_keyed_each: ig
} = window.__gradio__svelte__internal, {
  SvelteComponent: ri,
  add_flush_callback: en,
  assign: fi,
  bind: tn,
  binding_callbacks: nn,
  check_outros: ci,
  create_component: tt,
  destroy_component: nt,
  detach: ui,
  flush: E,
  get_spread_object: di,
  get_spread_update: mi,
  group_outros: pi,
  init: gi,
  insert: hi,
  mount_component: ot,
  safe_not_equal: vi,
  space: bi,
  transition_in: ke,
  transition_out: Ee
} = window.__gradio__svelte__internal;
function on(n) {
  let e, t;
  const o = [
    { autoscroll: (
      /*gradio*/
      n[3].autoscroll
    ) },
    { i18n: (
      /*gradio*/
      n[3].i18n
    ) },
    /*loading_status*/
    n[18]
  ];
  let l = {};
  for (let i = 0; i < o.length; i += 1)
    l = fi(l, o[i]);
  return e = new _i({ props: l }), {
    c() {
      tt(e.$$.fragment);
    },
    m(i, s) {
      ot(e, i, s), t = !0;
    },
    p(i, s) {
      const _ = s[0] & /*gradio, loading_status*/
      262152 ? mi(o, [
        s[0] & /*gradio*/
        8 && { autoscroll: (
          /*gradio*/
          i[3].autoscroll
        ) },
        s[0] & /*gradio*/
        8 && { i18n: (
          /*gradio*/
          i[3].i18n
        ) },
        s[0] & /*loading_status*/
        262144 && di(
          /*loading_status*/
          i[18]
        )
      ]) : {};
      e.$set(_);
    },
    i(i) {
      t || (ke(e.$$.fragment, i), t = !0);
    },
    o(i) {
      Ee(e.$$.fragment, i), t = !1;
    },
    d(i) {
      nt(e, i);
    }
  };
}
function wi(n) {
  let e, t, o, l, i, s = (
    /*loading_status*/
    n[18] && on(n)
  );
  function _(f) {
    n[23](f);
  }
  function r(f) {
    n[24](f);
  }
  let a = {
    label: (
      /*label*/
      n[4]
    ),
    info: (
      /*info*/
      n[6]
    ),
    show_label: (
      /*show_label*/
      n[10]
    ),
    show_legend: (
      /*show_legend*/
      n[11]
    ),
    show_legend_label: (
      /*show_legend_label*/
      n[12]
    ),
    legend_label: (
      /*legend_label*/
      n[5]
    ),
    color_map: (
      /*color_map*/
      n[1]
    ),
    show_copy_button: (
      /*show_copy_button*/
      n[16]
    ),
    show_remove_tags_button: (
      /*show_remove_tags_button*/
      n[17]
    ),
    container: (
      /*container*/
      n[13]
    ),
    disabled: !/*interactive*/
    n[19]
  };
  return (
    /*value*/
    n[0] !== void 0 && (a.value = /*value*/
    n[0]), /*value_is_output*/
    n[2] !== void 0 && (a.value_is_output = /*value_is_output*/
    n[2]), t = new _l({ props: a }), nn.push(() => tn(t, "value", _)), nn.push(() => tn(t, "value_is_output", r)), t.$on(
      "change",
      /*change_handler*/
      n[25]
    ), t.$on(
      "input",
      /*input_handler*/
      n[26]
    ), t.$on(
      "submit",
      /*submit_handler*/
      n[27]
    ), t.$on(
      "blur",
      /*blur_handler*/
      n[28]
    ), t.$on(
      "select",
      /*select_handler*/
      n[29]
    ), t.$on(
      "focus",
      /*focus_handler*/
      n[30]
    ), t.$on(
      "clear",
      /*clear_handler*/
      n[31]
    ), {
      c() {
        s && s.c(), e = bi(), tt(t.$$.fragment);
      },
      m(f, c) {
        s && s.m(f, c), hi(f, e, c), ot(t, f, c), i = !0;
      },
      p(f, c) {
        /*loading_status*/
        f[18] ? s ? (s.p(f, c), c[0] & /*loading_status*/
        262144 && ke(s, 1)) : (s = on(f), s.c(), ke(s, 1), s.m(e.parentNode, e)) : s && (pi(), Ee(s, 1, 1, () => {
          s = null;
        }), ci());
        const u = {};
        c[0] & /*label*/
        16 && (u.label = /*label*/
        f[4]), c[0] & /*info*/
        64 && (u.info = /*info*/
        f[6]), c[0] & /*show_label*/
        1024 && (u.show_label = /*show_label*/
        f[10]), c[0] & /*show_legend*/
        2048 && (u.show_legend = /*show_legend*/
        f[11]), c[0] & /*show_legend_label*/
        4096 && (u.show_legend_label = /*show_legend_label*/
        f[12]), c[0] & /*legend_label*/
        32 && (u.legend_label = /*legend_label*/
        f[5]), c[0] & /*color_map*/
        2 && (u.color_map = /*color_map*/
        f[1]), c[0] & /*show_copy_button*/
        65536 && (u.show_copy_button = /*show_copy_button*/
        f[16]), c[0] & /*show_remove_tags_button*/
        131072 && (u.show_remove_tags_button = /*show_remove_tags_button*/
        f[17]), c[0] & /*container*/
        8192 && (u.container = /*container*/
        f[13]), c[0] & /*interactive*/
        524288 && (u.disabled = !/*interactive*/
        f[19]), !o && c[0] & /*value*/
        1 && (o = !0, u.value = /*value*/
        f[0], en(() => o = !1)), !l && c[0] & /*value_is_output*/
        4 && (l = !0, u.value_is_output = /*value_is_output*/
        f[2], en(() => l = !1)), t.$set(u);
      },
      i(f) {
        i || (ke(s), ke(t.$$.fragment, f), i = !0);
      },
      o(f) {
        Ee(s), Ee(t.$$.fragment, f), i = !1;
      },
      d(f) {
        f && ui(e), s && s.d(f), nt(t, f);
      }
    }
  );
}
function $i(n) {
  let e, t;
  return e = new kl({
    props: {
      visible: (
        /*visible*/
        n[9]
      ),
      elem_id: (
        /*elem_id*/
        n[7]
      ),
      elem_classes: (
        /*elem_classes*/
        n[8]
      ),
      scale: (
        /*scale*/
        n[14]
      ),
      min_width: (
        /*min_width*/
        n[15]
      ),
      allow_overflow: !1,
      padding: (
        /*container*/
        n[13]
      ),
      $$slots: { default: [wi] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      tt(e.$$.fragment);
    },
    m(o, l) {
      ot(e, o, l), t = !0;
    },
    p(o, l) {
      const i = {};
      l[0] & /*visible*/
      512 && (i.visible = /*visible*/
      o[9]), l[0] & /*elem_id*/
      128 && (i.elem_id = /*elem_id*/
      o[7]), l[0] & /*elem_classes*/
      256 && (i.elem_classes = /*elem_classes*/
      o[8]), l[0] & /*scale*/
      16384 && (i.scale = /*scale*/
      o[14]), l[0] & /*min_width*/
      32768 && (i.min_width = /*min_width*/
      o[15]), l[0] & /*container*/
      8192 && (i.padding = /*container*/
      o[13]), l[0] & /*label, info, show_label, show_legend, show_legend_label, legend_label, color_map, show_copy_button, show_remove_tags_button, container, interactive, value, value_is_output, gradio, loading_status*/
      998527 | l[1] & /*$$scope*/
      2 && (i.$$scope = { dirty: l, ctx: o }), e.$set(i);
    },
    i(o) {
      t || (ke(e.$$.fragment, o), t = !0);
    },
    o(o) {
      Ee(e.$$.fragment, o), t = !1;
    },
    d(o) {
      nt(e, o);
    }
  };
}
function Ci(n, e, t) {
  let { gradio: o } = e, { label: l = "Highlighted Textbox" } = e, { legend_label: i = "Highlights:" } = e, { info: s = void 0 } = e, { elem_id: _ = "" } = e, { elem_classes: r = [] } = e, { visible: a = !0 } = e, { value: f } = e, { show_label: c } = e, { show_legend: u } = e, { show_legend_label: m } = e, { color_map: b = {} } = e, { container: k = !0 } = e, { scale: y = null } = e, { min_width: T = void 0 } = e, { show_copy_button: w = !1 } = e, { show_remove_tags_button: d = !1 } = e, { loading_status: q = void 0 } = e, { value_is_output: N = !1 } = e, { combine_adjacent: g = !1 } = e, { interactive: H = !0 } = e;
  const z = !1, Z = !0;
  function X(h) {
    f = h, t(0, f), t(20, g);
  }
  function A(h) {
    N = h, t(2, N);
  }
  const ue = () => o.dispatch("change"), G = () => o.dispatch("input"), te = () => o.dispatch("submit"), B = () => o.dispatch("blur"), ve = (h) => o.dispatch("select", h.detail), Ne = () => o.dispatch("focus"), be = function() {
    console.log("test"), o.dispatch("clear");
  };
  return n.$$set = (h) => {
    "gradio" in h && t(3, o = h.gradio), "label" in h && t(4, l = h.label), "legend_label" in h && t(5, i = h.legend_label), "info" in h && t(6, s = h.info), "elem_id" in h && t(7, _ = h.elem_id), "elem_classes" in h && t(8, r = h.elem_classes), "visible" in h && t(9, a = h.visible), "value" in h && t(0, f = h.value), "show_label" in h && t(10, c = h.show_label), "show_legend" in h && t(11, u = h.show_legend), "show_legend_label" in h && t(12, m = h.show_legend_label), "color_map" in h && t(1, b = h.color_map), "container" in h && t(13, k = h.container), "scale" in h && t(14, y = h.scale), "min_width" in h && t(15, T = h.min_width), "show_copy_button" in h && t(16, w = h.show_copy_button), "show_remove_tags_button" in h && t(17, d = h.show_remove_tags_button), "loading_status" in h && t(18, q = h.loading_status), "value_is_output" in h && t(2, N = h.value_is_output), "combine_adjacent" in h && t(20, g = h.combine_adjacent), "interactive" in h && t(19, H = h.interactive);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*color_map*/
    2 && !b && Object.keys(b).length && t(1, b), n.$$.dirty[0] & /*value, combine_adjacent*/
    1048577 && f && g && t(0, f = Po(f));
  }, [
    f,
    b,
    N,
    o,
    l,
    i,
    s,
    _,
    r,
    a,
    c,
    u,
    m,
    k,
    y,
    T,
    w,
    d,
    q,
    H,
    g,
    z,
    Z,
    X,
    A,
    ue,
    G,
    te,
    B,
    ve,
    Ne,
    be
  ];
}
class sg extends ri {
  constructor(e) {
    super(), gi(
      this,
      e,
      Ci,
      $i,
      vi,
      {
        gradio: 3,
        label: 4,
        legend_label: 5,
        info: 6,
        elem_id: 7,
        elem_classes: 8,
        visible: 9,
        value: 0,
        show_label: 10,
        show_legend: 11,
        show_legend_label: 12,
        color_map: 1,
        container: 13,
        scale: 14,
        min_width: 15,
        show_copy_button: 16,
        show_remove_tags_button: 17,
        loading_status: 18,
        value_is_output: 2,
        combine_adjacent: 20,
        interactive: 19,
        autofocus: 21,
        autoscroll: 22
      },
      null,
      [-1, -1]
    );
  }
  get gradio() {
    return this.$$.ctx[3];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), E();
  }
  get label() {
    return this.$$.ctx[4];
  }
  set label(e) {
    this.$$set({ label: e }), E();
  }
  get legend_label() {
    return this.$$.ctx[5];
  }
  set legend_label(e) {
    this.$$set({ legend_label: e }), E();
  }
  get info() {
    return this.$$.ctx[6];
  }
  set info(e) {
    this.$$set({ info: e }), E();
  }
  get elem_id() {
    return this.$$.ctx[7];
  }
  set elem_id(e) {
    this.$$set({ elem_id: e }), E();
  }
  get elem_classes() {
    return this.$$.ctx[8];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), E();
  }
  get visible() {
    return this.$$.ctx[9];
  }
  set visible(e) {
    this.$$set({ visible: e }), E();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), E();
  }
  get show_label() {
    return this.$$.ctx[10];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), E();
  }
  get show_legend() {
    return this.$$.ctx[11];
  }
  set show_legend(e) {
    this.$$set({ show_legend: e }), E();
  }
  get show_legend_label() {
    return this.$$.ctx[12];
  }
  set show_legend_label(e) {
    this.$$set({ show_legend_label: e }), E();
  }
  get color_map() {
    return this.$$.ctx[1];
  }
  set color_map(e) {
    this.$$set({ color_map: e }), E();
  }
  get container() {
    return this.$$.ctx[13];
  }
  set container(e) {
    this.$$set({ container: e }), E();
  }
  get scale() {
    return this.$$.ctx[14];
  }
  set scale(e) {
    this.$$set({ scale: e }), E();
  }
  get min_width() {
    return this.$$.ctx[15];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), E();
  }
  get show_copy_button() {
    return this.$$.ctx[16];
  }
  set show_copy_button(e) {
    this.$$set({ show_copy_button: e }), E();
  }
  get show_remove_tags_button() {
    return this.$$.ctx[17];
  }
  set show_remove_tags_button(e) {
    this.$$set({ show_remove_tags_button: e }), E();
  }
  get loading_status() {
    return this.$$.ctx[18];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), E();
  }
  get value_is_output() {
    return this.$$.ctx[2];
  }
  set value_is_output(e) {
    this.$$set({ value_is_output: e }), E();
  }
  get combine_adjacent() {
    return this.$$.ctx[20];
  }
  set combine_adjacent(e) {
    this.$$set({ combine_adjacent: e }), E();
  }
  get interactive() {
    return this.$$.ctx[19];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), E();
  }
  get autofocus() {
    return this.$$.ctx[21];
  }
  get autoscroll() {
    return this.$$.ctx[22];
  }
}
export {
  sg as default
};
