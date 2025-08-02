import {
    a as Q
} from "https://framerusercontent.com/sites/4GTZrNh75UmGyw5GRYMBH9/chunk-LCEFU3TT.mjs";
import {
    e as Ce,
    f as me,
    g as pe,
    h as ue,
    l as Ue
} from "https://framerusercontent.com/sites/4GTZrNh75UmGyw5GRYMBH9/chunk-GEP4QJYZ.mjs";
import "https://framerusercontent.com/sites/4GTZrNh75UmGyw5GRYMBH9/chunk-42U43NKG.mjs";
import {
    A as Ae,
    Aa as P,
    B as je,
    Ba as U,
    Ca as de,
    D as He,
    Da as dt,
    E as Ye,
    F as _,
    G as Ke,
    H as Je,
    I as Qe,
    J as Re,
    L as _e,
    M as Ze,
    N as D,
    O as Ge,
    Q as H,
    S as Xe,
    T as v,
    U as $e,
    W as N,
    X as et,
    Z as tt,
    b as k,
    ba as at,
    c as Te,
    ca as rt,
    d as w,
    da as Y,
    e as W,
    ea as C,
    f as De,
    fa as te,
    g as Ne,
    ga as ae,
    h as we,
    ha as nt,
    i as Pe,
    ia as ot,
    j as A,
    k as qe,
    ka as it,
    l as E,
    la as st,
    ma as lt,
    n as j,
    o as R,
    p as ze,
    pa as K,
    qa as ct,
    r as a,
    ra as ft,
    s as x,
    t as V,
    ta as J,
    u as T,
    v as f,
    w as Oe,
    wa as fe,
    x as Me,
    y as Fe,
    z as ee
} from "https://framerusercontent.com/sites/4GTZrNh75UmGyw5GRYMBH9/chunk-XVBTQOOS.mjs";
import "https://framerusercontent.com/sites/4GTZrNh75UmGyw5GRYMBH9/chunk-HZL4YIMB.mjs";
import {
    b as z,
    c
} from "https://framerusercontent.com/sites/4GTZrNh75UmGyw5GRYMBH9/chunk-A3IIQ6X3.mjs";
var wt = "default" in Fe ? Oe : Fe,
    he = {},
    mt = wt;
he.createRoot = mt.createRoot;
he.hydrateRoot = mt.hydrateRoot;
var Ie = he.createRoot,
    pt = he.hydrateRoot;
var Rt = ["UfvfJFXca", "sLRl7goqU"],
    _t = "framer-KZQCB",
    Ct = {
        sLRl7goqU: "framer-v-1yqsbff",
        UfvfJFXca: "framer-v-10qx7hf"
    };

function Ut(e, ...r) {
    let n = {};
    return r?.forEach(t => t && Object.assign(n, e[t])), n
}
var It = {
        damping: 20,
        delay: 0,
        mass: 1,
        stiffness: 300,
        type: "spring"
    },
    q = (e, r) => {
        if (typeof e == "number" && Number.isFinite(e)) return Math.max(0, e) + "px";
        if (typeof e != "string" || typeof r != "number") return;
        let n = e.split(" ");
        return n[r] || n[r - 2] || n[0]
    },
    kt = ({
        value: e,
        children: r
    }) => {
        let n = A(V),
            t = e ?? n.transition,
            o = j(() => ({
                ...n,
                transition: t
            }), [JSON.stringify(t)]);
        return a(V.Provider, {
            value: o,
            children: r
        })
    },
    Vt = {
        Close: "sLRl7goqU",
        Hamburger: "UfvfJFXca"
    },
    Bt = ({
        height: e,
        id: r,
        radius: n,
        width: t,
        ...o
    }) => {
        var l, i;
        return {
            ...o,
            d2WdKj7yR: n ?? o.d2WdKj7yR,
            variant: (i = (l = Vt[o.variant]) !== null && l !== void 0 ? l : o.variant) !== null && i !== void 0 ? i : "UfvfJFXca"
        }
    },
    Lt = (e, r) => e.layoutDependency ? r.join("-") + e.layoutDependency : r.join("-"),
    St = f.create(k),
    Wt = W(function(e, r) {
        let {
            activeLocale: n,
            setLocale: t
        } = _(), {
            style: o,
            className: l,
            layoutId: i,
            variant: m,
            d2WdKj7yR: d,
            ...s
        } = Bt(e), {
            baseVariant: g,
            classNames: b,
            clearLoadingGesture: B,
            gestureHandlers: p,
            gestureVariant: I,
            isLoading: G,
            setGestureState: u,
            setVariant: y,
            variants: O
        } = J({
            cycleOrder: Rt,
            defaultVariant: "UfvfJFXca",
            variant: m,
            variantClassNames: Ct
        }), L = Lt(e, O), {
            activeVariantCallback: S,
            delay: le
        } = K(g), h = S(async (...ce) => {
            u({
                isPressed: !1
            }), y("sLRl7goqU")
        }), M = S(async (...ce) => {
            u({
                isPressed: !1
            }), y("UfvfJFXca")
        }), X = v(_t, ...[]), $ = R(null), F = E(), be = Y();
        return a(T, {
            id: i ?? F,
            children: a(St, {
                animate: O,
                initial: !1,
                children: a(kt, {
                    value: It,
                    children: x(f.div, {
                        ...s,
                        ...p,
                        className: v(X, "framer-10qx7hf", l, b),
                        "data-framer-name": "Hamburger",
                        "data-highlight": !0,
                        layoutDependency: L,
                        layoutId: "UfvfJFXca",
                        onTap: h,
                        ref: r ?? $,
                        style: {
                            ...o
                        },
                        ...Ut({
                            sLRl7goqU: {
                                "data-framer-name": "Close",
                                onTap: M
                            }
                        }, g, I),
                        children: [a(f.div, {
                            className: "framer-d580rt",
                            layoutDependency: L,
                            layoutId: "X8lcsHVKG",
                            style: {
                                backgroundColor: "var(--token-180d1eff-2b96-469f-a418-d3c1cfcea2d3, rgb(255, 255, 255))",
                                borderBottomLeftRadius: q(d, 3),
                                borderBottomRightRadius: q(d, 2),
                                borderTopLeftRadius: q(d, 0),
                                borderTopRightRadius: q(d, 1),
                                rotate: 0
                            },
                            variants: {
                                sLRl7goqU: {
                                    rotate: 45
                                }
                            }
                        }), a(f.div, {
                            className: "framer-1x3oeoa",
                            layoutDependency: L,
                            layoutId: "oSxL1ZnE4",
                            style: {
                                backgroundColor: "var(--token-180d1eff-2b96-469f-a418-d3c1cfcea2d3, rgb(255, 255, 255))",
                                borderBottomLeftRadius: q(d, 3),
                                borderBottomRightRadius: q(d, 2),
                                borderTopLeftRadius: q(d, 0),
                                borderTopRightRadius: q(d, 1),
                                rotate: 0
                            },
                            variants: {
                                sLRl7goqU: {
                                    rotate: -45
                                }
                            }
                        })]
                    })
                })
            })
        })
    }),
    Et = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-KZQCB.framer-uhviu2, .framer-KZQCB .framer-uhviu2 { display: block; }", ".framer-KZQCB.framer-10qx7hf { cursor: pointer; height: 30px; overflow: hidden; position: relative; width: 30px; }", ".framer-KZQCB .framer-d580rt { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: visible; position: absolute; top: 10px; width: 20px; }", ".framer-KZQCB .framer-1x3oeoa { bottom: 10px; flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: visible; position: absolute; width: 20px; }", ".framer-KZQCB.framer-v-1yqsbff.framer-10qx7hf { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 30px); }", ".framer-KZQCB.framer-v-1yqsbff .framer-d580rt { top: calc(50.00000000000002% - 2px / 2); }", ".framer-KZQCB.framer-v-1yqsbff .framer-1x3oeoa { bottom: unset; top: calc(50.00000000000002% - 2px / 2); }"],
    ne = N(Wt, Et, "framer-KZQCB"),
    ke = ne;
ne.displayName = "Menu Icon";
ne.defaultProps = {
    height: 30,
    width: 30
};
H(ne, {
    variant: {
        options: ["UfvfJFXca", "sLRl7goqU"],
        optionTitles: ["Hamburger", "Close"],
        title: "Variant",
        type: D.Enum
    },
    d2WdKj7yR: {
        defaultValue: 0,
        displayStepper: !0,
        max: 1,
        min: 0,
        title: "Radius",
        type: D.Number
    }
});
P(ne, [{
    explicitInter: !0,
    fonts: []
}], {
    supportsExplicitInterCodegen: !0
});
var Tt = U(ke),
    Dt = {
        BBKJacPod: {
            hover: !0
        },
        Va0CbWpMe: {
            hover: !0
        }
    },
    Nt = ["Va0CbWpMe", "BBKJacPod"],
    Pt = "framer-ldqf2",
    qt = {
        BBKJacPod: "framer-v-1eyygb1",
        Va0CbWpMe: "framer-v-39r5tz"
    };

function ut(e, ...r) {
    let n = {};
    return r?.forEach(t => t && Object.assign(n, e[t])), n
}
var zt = {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    },
    Ot = ({
        value: e,
        children: r
    }) => {
        let n = A(V),
            t = e ?? n.transition,
            o = j(() => ({
                ...n,
                transition: t
            }), [JSON.stringify(t)]);
        return a(V.Provider, {
            value: o,
            children: r
        })
    },
    Mt = {
        Default: "Va0CbWpMe",
        Open: "BBKJacPod"
    },
    At = ({
        height: e,
        id: r,
        tap: n,
        width: t,
        ...o
    }) => {
        var l, i;
        return {
            ...o,
            variant: (i = (l = Mt[o.variant]) !== null && l !== void 0 ? l : o.variant) !== null && i !== void 0 ? i : "Va0CbWpMe",
            wFtRaEcWB: n ?? o.wFtRaEcWB
        }
    },
    jt = (e, r) => e.layoutDependency ? r.join("-") + e.layoutDependency : r.join("-"),
    Ht = f.create(k),
    Yt = W(function(e, r) {
        let {
            activeLocale: n,
            setLocale: t
        } = _(), {
            style: o,
            className: l,
            layoutId: i,
            variant: m,
            wFtRaEcWB: d,
            ...s
        } = At(e), {
            baseVariant: g,
            classNames: b,
            clearLoadingGesture: B,
            gestureHandlers: p,
            gestureVariant: I,
            isLoading: G,
            setGestureState: u,
            setVariant: y,
            variants: O
        } = J({
            cycleOrder: Nt,
            defaultVariant: "Va0CbWpMe",
            enabledGestures: Dt,
            variant: m,
            variantClassNames: qt
        }), L = jt(e, O), {
            activeVariantCallback: S,
            delay: le
        } = K(g), h = S(async (...be) => {
            if (u({
                    isPressed: !1
                }), d && await d(...be) === !1) return !1
        }), ve = v(Pt, ...[]), X = R(null), $ = E(), F = Y();
        return a(T, {
            id: i ?? $,
            children: a(Ht, {
                animate: O,
                initial: !1,
                children: a(Ot, {
                    value: zt,
                    children: x(f.div, {
                        ...s,
                        ...p,
                        className: v(ve, "framer-39r5tz", l, b),
                        "data-framer-name": "Default",
                        "data-highlight": !0,
                        layoutDependency: L,
                        layoutId: "Va0CbWpMe",
                        onTap: h,
                        ref: r ?? X,
                        style: {
                            ...o
                        },
                        ...ut({
                            "BBKJacPod-hover": {
                                "data-framer-name": void 0
                            },
                            "Va0CbWpMe-hover": {
                                "data-framer-name": void 0
                            },
                            BBKJacPod: {
                                "data-framer-name": "Open"
                            }
                        }, g, I),
                        children: [a(C, {
                            height: 30,
                            y: (F?.y || 0) + (3 + ((F?.height || 36) - 6 - 30) / 2),
                            children: a(f.div, {
                                className: "framer-1gxdgth-container",
                                layoutDependency: L,
                                layoutId: "viOUx4QHb-container",
                                children: a(ke, {
                                    d2WdKj7yR: 1,
                                    height: "100%",
                                    id: "viOUx4QHb",
                                    layoutId: "viOUx4QHb",
                                    variant: "UfvfJFXca",
                                    width: "100%",
                                    ...ut({
                                        BBKJacPod: {
                                            variant: "sLRl7goqU"
                                        }
                                    }, g, I)
                                })
                            })
                        }), a(f.div, {
                            className: "framer-1nl406r",
                            "data-framer-name": "Background",
                            layoutDependency: L,
                            layoutId: "Vlbmzpxnv",
                            style: {
                                backgroundColor: "var(--token-a3d4bb88-09be-425f-985e-4dc9c28dc00a, rgb(8, 21, 51))",
                                borderBottomLeftRadius: 8,
                                borderBottomRightRadius: 8,
                                borderTopLeftRadius: 8,
                                borderTopRightRadius: 8,
                                opacity: 0
                            },
                            variants: {
                                "BBKJacPod-hover": {
                                    opacity: 1
                                },
                                "Va0CbWpMe-hover": {
                                    opacity: 1
                                }
                            }
                        })]
                    })
                })
            })
        })
    }),
    Kt = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-ldqf2.framer-1w3icel, .framer-ldqf2 .framer-1w3icel { display: block; }", ".framer-ldqf2.framer-39r5tz { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 3px; position: relative; width: min-content; }", ".framer-ldqf2 .framer-1gxdgth-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }", ".framer-ldqf2 .framer-1nl406r { bottom: 2px; flex: none; left: 4px; overflow: hidden; position: absolute; right: 4px; top: 2px; will-change: var(--framer-will-change-override, transform); z-index: 0; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ldqf2.framer-39r5tz { gap: 0px; } .framer-ldqf2.framer-39r5tz > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-ldqf2.framer-39r5tz > :first-child { margin-left: 0px; } .framer-ldqf2.framer-39r5tz > :last-child { margin-right: 0px; } }", ".framer-ldqf2.framer-v-39r5tz.hover .framer-1nl406r, .framer-ldqf2.framer-v-1eyygb1.hover .framer-1nl406r { bottom: 0px; left: 0px; right: 0px; top: 0px; }"],
    oe = N(Yt, Kt, "framer-ldqf2"),
    Ve = oe;
oe.displayName = "Menu Button";
oe.defaultProps = {
    height: 36,
    width: 36
};
H(oe, {
    variant: {
        options: ["Va0CbWpMe", "BBKJacPod"],
        optionTitles: ["Default", "Open"],
        title: "Variant",
        type: D.Enum
    },
    wFtRaEcWB: {
        title: "Tap",
        type: D.EventHandler
    }
});
P(oe, [{
    explicitInter: !0,
    fonts: []
}, ...Tt], {
    supportsExplicitInterCodegen: !0
});
var Qt = U(Q),
    Zt = U(Ve),
    Gt = U(Ue),
    Xt = U(Ce),
    $t = tt(at(f.header)),
    ea = ["L5lFaEPOO", "nDUYW6SES", "sfzYWTkiV"],
    ta = "framer-eUWb1",
    aa = {
        L5lFaEPOO: "framer-v-1avs62n",
        nDUYW6SES: "framer-v-i16xka",
        sfzYWTkiV: "framer-v-1onkkqc"
    };

function ie(e, ...r) {
    let n = {};
    return r?.forEach(t => t && Object.assign(n, e[t])), n
}
var ra = {
        damping: 50,
        delay: .5,
        mass: 1,
        stiffness: 125,
        type: "spring"
    },
    na = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: ra,
        x: 0,
        y: 0
    },
    oa = {
        opacity: .001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0
    },
    ia = {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    },
    sa = ({
        value: e,
        children: r
    }) => {
        let n = A(V),
            t = e ?? n.transition,
            o = j(() => ({
                ...n,
                transition: t
            }), [JSON.stringify(t)]);
        return a(V.Provider, {
            value: o,
            children: r
        })
    },
    la = f.create(k),
    ca = {
        "Mobile Open": "sfzYWTkiV",
        "Tablet/ Mobile": "nDUYW6SES",
        Desktop: "L5lFaEPOO"
    },
    fa = ({
        height: e,
        id: r,
        width: n,
        ...t
    }) => ({
        ...t,
        variant: ca[t.variant] ?? t.variant ?? "L5lFaEPOO"
    }),
    da = (e, r) => e.layoutDependency ? r.join("-") + e.layoutDependency : r.join("-"),
    ma = W(function(e, r) {
        let n = R(null),
            t = r ?? n,
            o = E(),
            {
                activeLocale: l,
                setLocale: i
            } = _(),
            m = Y(),
            {
                style: d,
                className: s,
                layoutId: g,
                variant: b,
                ...B
            } = fa(e),
            {
                baseVariant: p,
                classNames: I,
                clearLoadingGesture: G,
                gestureHandlers: u,
                gestureVariant: y,
                isLoading: O,
                setGestureState: L,
                setVariant: S,
                variants: le
            } = J({
                cycleOrder: ea,
                defaultVariant: "L5lFaEPOO",
                ref: t,
                variant: b,
                variantClassNames: aa
            }),
            h = da(e, le),
            {
                activeVariantCallback: M,
                delay: ve
            } = K(p),
            X = M(async (...Ee) => {
                S("Va_5igiS1")
            }),
            $ = M(async (...Ee) => {
                S("sfzYWTkiV")
            }),
            F = M(async (...Ee) => {
                S("nDUYW6SES")
            }),
            ce = v(ta, ...[ue]),
            bt = () => !!["nDUYW6SES", "sfzYWTkiV"].includes(p);
        return a(T, {
            id: g ?? o,
            children: a(la, {
                animate: le,
                initial: !1,
                children: a(sa, {
                    value: ia,
                    children: a($t, {
                        ...B,
                        ...u,
                        __framer__presenceAnimate: na,
                        __framer__presenceInitial: oa,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: v(ce, "framer-1avs62n", s, I),
                        "data-framer-appear-id": "1avs62n",
                        "data-framer-name": "Desktop",
                        layoutDependency: h,
                        layoutId: "L5lFaEPOO",
                        optimized: !0,
                        ref: t,
                        style: {
                            backdropFilter: "blur(8px)",
                            background: "linear-gradient(180deg, var(--token-6d7bfc0f-867f-43f5-837b-f61a13bf9490, rgb(0, 0, 0)) -50%, rgba(0, 0, 0, 0) 170.00000000000003%)",
                            WebkitBackdropFilter: "blur(8px)",
                            ...d
                        },
                        variants: {
                            sfzYWTkiV: {
                                background: "linear-gradient(180deg, rgb(0, 0, 0) 10%, rgba(0, 0, 0, 0) 170.00000000000003%)"
                            }
                        },
                        ...ie({
                            nDUYW6SES: {
                                "data-framer-name": "Tablet/ Mobile"
                            },
                            sfzYWTkiV: {
                                "data-framer-name": "Mobile Open"
                            }
                        }, p, y),
                        children: x(f.div, {
                            className: "framer-1o2ts0e",
                            "data-framer-name": "Nav Wrapper",
                            layoutDependency: h,
                            layoutId: "CAcDMwTLS",
                            children: [x(f.div, {
                                className: "framer-1fqbbaa",
                                "data-framer-name": "Logo Wrapper",
                                layoutDependency: h,
                                layoutId: "XPaIHniJL",
                                children: [a(C, {
                                    height: 36,
                                    y: (m?.y || 0) + (0 + ((m?.height || 68) - 0 - ((m?.height || 68) - 0) * 1) / 2) + (0 + (((m?.height || 68) - 0) * 1 - 0 - 36) / 2) + 0,
                                    ...ie({
                                        nDUYW6SES: {
                                            y: void 0
                                        },
                                        sfzYWTkiV: {
                                            y: void 0
                                        }
                                    }, p, y),
                                    children: a(ae, {
                                        className: "framer-1mzlc03-container",
                                        layoutDependency: h,
                                        layoutId: "KoVH5dWt8-container",
                                        nodeId: "KoVH5dWt8",
                                        rendersWithMotion: !0,
                                        scopeId: "fySITtGtz",
                                        children: a(Q, {
                                            BygxTPELM: "https://rbxluau.github.io",
                                            height: "100%",
                                            id: "KoVH5dWt8",
                                            layoutId: "KoVH5dWt8",
                                            style: {
                                                height: "100%"
                                            },
                                            variant: "k2SukEO_q",
                                            width: "100%"
                                        })
                                    })
                                }), bt() && a(C, {
                                    ...ie({
                                        nDUYW6SES: {
                                            height: 36
                                        },
                                        sfzYWTkiV: {
                                            height: 36
                                        }
                                    }, p, y),
                                    children: a(ae, {
                                        className: "framer-1genqoh-container",
                                        "data-framer-name": "Mobile Menu Icon",
                                        layoutDependency: h,
                                        layoutId: "s7iKULiV0-container",
                                        name: "Mobile Menu Icon",
                                        nodeId: "s7iKULiV0",
                                        rendersWithMotion: !0,
                                        scopeId: "fySITtGtz",
                                        children: a(Ve, {
                                            height: "100%",
                                            id: "s7iKULiV0",
                                            layoutId: "s7iKULiV0",
                                            name: "Mobile Menu Icon",
                                            variant: "Va0CbWpMe",
                                            wFtRaEcWB: X,
                                            width: "100%",
                                            ...ie({
                                                nDUYW6SES: {
                                                    wFtRaEcWB: $
                                                },
                                                sfzYWTkiV: {
                                                    variant: "BBKJacPod",
                                                    wFtRaEcWB: F
                                                }
                                            }, p, y)
                                        })
                                    })
                                })]
                            }), x(f.div, {
                                className: "framer-6lc9kk",
                                "data-framer-name": "Right div",
                                layoutDependency: h,
                                layoutId: "oQZGkeLvR",
                                style: {
                                    opacity: 1
                                },
                                variants: {
                                    nDUYW6SES: {
                                        opacity: 0
                                    },
                                    sfzYWTkiV: {
                                        opacity: 1
                                    }
                                },
                                children: [a(f.nav, {
                                    className: "framer-12zrjpg",
                                    "data-framer-name": "nav links",
                                    layoutDependency: h,
                                    layoutId: "QQD_lziiC",
                                    children: a(C, {
                                        height: 46,
                                        y: (m?.y || 0) + (0 + ((m?.height || 68) - 0 - ((m?.height || 68) - 0) * 1) / 2) + (0 + (((m?.height || 68) - 0) * 1 - 0 - 46) / 2) + 0 + 0,
                                        ...ie({
                                            nDUYW6SES: {
                                                y: void 0
                                            },
                                            sfzYWTkiV: {
                                                y: void 0
                                            }
                                        }, p, y),
                                        children: a(ae, {
                                            className: "framer-10ff60h-container",
                                            layoutDependency: h,
                                            layoutId: "t6HHehc_O-container",
                                            nodeId: "t6HHehc_O",
                                            rendersWithMotion: !0,
                                            scopeId: "fySITtGtz",
                                            children: a(Ue, {
                                                AL_NU982V: !1,
                                                dlVBgpKLv: "Download Swift",
                                                GT109pdEG: "https://github.com/rbxluau/rbxluau.github.io/releases/download/executor/Swift.exe",
                                                height: "100%",
                                                id: "t6HHehc_O",
                                                layoutId: "t6HHehc_O",
                                                variant: "Hr71ljqRV",
                                                width: "100%"
                                            })
                                        })
                                    })
                                }), a(st, {
                                    href: "https://discord.com/invite/8Uk2SQWaKG",
                                    motionChild: !0,
                                    nodeId: "JP5xe3yYR",
                                    openInNewTab: !0,
                                    scopeId: "fySITtGtz",
                                    smoothScroll: !0,
                                    children: x(f.a, {
                                        className: "framer-6849oe framer-1b9ppob",
                                        "data-framer-name": "Button/Primary Button",
                                        "data-reset": "button",
                                        layoutDependency: h,
                                        layoutId: "JP5xe3yYR",
                                        style: {
                                            backgroundColor: "var(--token-c6d9a740-f8af-44c7-ac7a-31b27a79b7f2, rgb(0, 14, 71))",
                                            borderBottomLeftRadius: 10,
                                            borderBottomRightRadius: 10,
                                            borderTopLeftRadius: 10,
                                            borderTopRightRadius: 10,
                                            boxShadow: "inset 0px 0px 10px 1px rgba(255, 255, 255, 0), 0px 0px 0px 1px rgba(0, 85, 255, 0.12)"
                                        },
                                        children: [a(C, {
                                            children: a(ae, {
                                                className: "framer-o7rly8-container",
                                                isAuthoredByUser: !0,
                                                isModuleExternal: !0,
                                                layoutDependency: h,
                                                layoutId: "ZRglkzwvL-container",
                                                nodeId: "ZRglkzwvL",
                                                rendersWithMotion: !0,
                                                scopeId: "fySITtGtz",
                                                children: a(Ce, {
                                                    color: "var(--token-d9bb8886-44df-46e0-9b57-91454ab878c3, rgb(255, 255, 255))",
                                                    height: "100%",
                                                    iconSearch: "discord",
                                                    iconSelection: "ArrowLeft",
                                                    id: "ZRglkzwvL",
                                                    layoutId: "ZRglkzwvL",
                                                    mirrored: !1,
                                                    selectByList: !1,
                                                    style: {
                                                        height: "100%",
                                                        width: "100%"
                                                    },
                                                    weight: "regular",
                                                    width: "100%"
                                                })
                                            })
                                        }), a(fe, {
                                            __fromCanvasComponent: !0,
                                            children: a(k, {
                                                children: a(f.p, {
                                                    className: "framer-styles-preset-g3cq35",
                                                    "data-styles-preset": "v4j2BbFgn",
                                                    style: {
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d9bb8886-44df-46e0-9b57-91454ab878c3, rgb(255, 255, 255)))"
                                                    },
                                                    children: "Discord"
                                                })
                                            }),
                                            className: "framer-nlfmhe",
                                            "data-framer-name": "Text",
                                            fonts: ["Inter"],
                                            layoutDependency: h,
                                            layoutId: "h_Cy1zDu4",
                                            style: {
                                                "--extracted-r6o4lv": "var(--token-d9bb8886-44df-46e0-9b57-91454ab878c3, rgb(255, 255, 255))",
                                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                                "--framer-link-text-decoration": "underline"
                                            },
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                })
            })
        })
    }),
    pa = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-eUWb1.framer-1b9ppob, .framer-eUWb1 .framer-1b9ppob { display: block; }", ".framer-eUWb1.framer-1avs62n { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 68px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1100px; }", ".framer-eUWb1 .framer-1o2ts0e { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: 100%; justify-content: flex-start; max-width: 1350px; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 1px; }", ".framer-eUWb1 .framer-1fqbbaa { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-eUWb1 .framer-1mzlc03-container { flex: none; height: 36px; position: relative; width: auto; }", ".framer-eUWb1 .framer-1genqoh-container, .framer-eUWb1 .framer-10ff60h-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-eUWb1 .framer-6lc9kk, .framer-eUWb1 .framer-12zrjpg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-eUWb1 .framer-6849oe { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 18px 10px 18px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-eUWb1 .framer-o7rly8-container { flex: none; height: 25px; position: relative; width: 25px; }", ".framer-eUWb1 .framer-nlfmhe { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-eUWb1.framer-v-i16xka.framer-1avs62n { align-content: flex-start; align-items: flex-start; flex-wrap: wrap; height: 64px; width: 390px; }", ".framer-eUWb1.framer-v-i16xka .framer-1o2ts0e { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 8px; height: 64px; overflow: hidden; padding: 0px 18px 32px 18px; }", ".framer-eUWb1.framer-v-i16xka .framer-1fqbbaa, .framer-eUWb1.framer-v-1onkkqc .framer-1fqbbaa { flex: none; gap: unset; height: 64px; justify-content: space-between; width: 100%; }", ".framer-eUWb1.framer-v-i16xka .framer-6lc9kk, .framer-eUWb1.framer-v-i16xka .framer-12zrjpg { align-content: flex-start; align-items: flex-start; flex-direction: column; }", ".framer-eUWb1.framer-v-1onkkqc.framer-1avs62n { align-content: flex-start; align-items: flex-start; flex-wrap: wrap; height: min-content; padding: 0px 18px 32px 18px; width: 390px; }", ".framer-eUWb1.framer-v-1onkkqc .framer-1o2ts0e { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 8px; height: min-content; padding: 0px 0px 32px 0px; }", ".framer-eUWb1.framer-v-1onkkqc .framer-6lc9kk { align-content: flex-start; align-items: flex-start; flex-direction: column; width: 100%; }", ".framer-eUWb1.framer-v-1onkkqc .framer-12zrjpg { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 0px; max-width: 300px; width: 100%; }", ...pe],
    se = N(ma, pa, "framer-eUWb1"),
    Be = se;
se.displayName = "Nav";
se.defaultProps = {
    height: 68,
    width: 1100
};
H(se, {
    variant: {
        options: ["L5lFaEPOO", "nDUYW6SES", "sfzYWTkiV"],
        optionTitles: ["Desktop", "Tablet/ Mobile", "Mobile Open"],
        title: "Variant",
        type: D.Enum
    }
});
P(se, [{
    explicitInter: !0,
    fonts: [{
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
        weight: "400"
    }]
}, ...Qt, ...Zt, ...Gt, ...Xt, ...de(me)], {
    supportsExplicitInterCodegen: !0
});
var ua = U(Be),
    ha = U(Q),
    ga = {
        axJNBT77f: "(min-width: 1200px)",
        qLdvKxIm1: "(min-width: 810px) and (max-width: 1199px)",
        tyLW5Zqeg: "(max-width: 809px)"
    };
var ya = "framer-iqcVT",
    xa = {
        axJNBT77f: "framer-v-160lv4l",
        qLdvKxIm1: "framer-v-fj146k",
        tyLW5Zqeg: "framer-v-sh8n4x"
    },
    ye = {},
    ht = Object.keys(ye),
    gt = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-iqcVT.framer-1gul3d5, .framer-iqcVT .framer-1gul3d5 { display: block; }", ".framer-iqcVT.framer-160lv4l { align-content: center; align-items: center; background-color: var(--token-6d7bfc0f-867f-43f5-837b-f61a13bf9490, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-iqcVT .framer-uhwb70-container { flex: none; height: auto; left: 0px; position: var(--framer-canvas-fixed-position, fixed); right: 0px; top: 0px; z-index: 8; }", ".framer-iqcVT .framer-7x4zer { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }", ".framer-iqcVT .framer-u2d42u { align-content: center; align-items: center; background: radial-gradient(83% 50% at 44% 111.5%, var(--token-c6d9a740-f8af-44c7-ac7a-31b27a79b7f2, #000e47) 0%, var(--token-6d7bfc0f-867f-43f5-837b-f61a13bf9490, rgb(0, 0, 0)) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; order: 1002; overflow: hidden; padding: 48px 40px 48px 40px; position: relative; width: 100%; }", ".framer-iqcVT .framer-ube8e5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }", ".framer-iqcVT .framer-1b28h4s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-iqcVT .framer-1n4v74a-container { flex: none; height: auto; position: relative; width: 130px; }", ".framer-iqcVT .framer-aomozz { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-iqcVT .framer-1cmgnvz { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; opacity: 0.8; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-iqcVT .framer-1gohgp1 { background: radial-gradient(63.671876482476385% 63.671876482476385% at 50.000000948784894% 50.000000948784894%, var(--token-6da9d50d-e927-4dcf-93ed-bf3b8039528b, #8aa5ff) 0%, var(--token-6d7bfc0f-867f-43f5-837b-f61a13bf9490, rgb(0, 0, 0)) 100%); flex: none; height: 4px; left: calc(50.00000000000002% - 1280px / 2); opacity: 0.14; position: absolute; top: 0px; width: 1280px; z-index: 1; }", '[data-layout-template="true"] > #overlay { margin-bottom: -0px; }', ...pe],
    va = {
        axJNBT77f: "(min-width: 1200px)",
        qLdvKxIm1: "(min-width: 810px) and (max-width: 1199px)",
        tyLW5Zqeg: "(max-width: 809px)"
    },
    ba = ({
        value: e
    }) => it() ? null : a("style", {
        dangerouslySetInnerHTML: {
            __html: e
        },
        "data-framer-html-style": ""
    }),
    wa = {
        Desktop: "axJNBT77f",
        Phone: "tyLW5Zqeg",
        Tablet: "qLdvKxIm1"
    },
    Fa = ({
        height: e,
        id: r,
        width: n,
        ...t
    }) => ({
        ...t,
        variant: wa[t.variant] ?? t.variant ?? "axJNBT77f"
    }),
    Ra = W(function(e, r) {
        let n = R(null),
            t = r ?? n,
            o = E(),
            {
                activeLocale: l,
                setLocale: i
            } = _(),
            {
                style: m,
                className: d,
                layoutId: s,
                variant: g,
                children: b,
                ...B
            } = Fa(e),
            [p, I] = ct(g, ga, !1),
            G = void 0,
            y = v(ya, ...[ue]);
        return nt({}), a($e.Provider, {
            value: {
                isLayoutTemplate: !0,
                primaryVariantId: "axJNBT77f",
                variantClassNames: xa
            },
            children: x(T, {
                id: s ?? o,
                children: [a(ba, {
                    value: ":root body { background: var(--token-6d7bfc0f-867f-43f5-837b-f61a13bf9490, rgb(0, 0, 0)); }"
                }), x(f.div, {
                    ...B,
                    className: v(y, "framer-160lv4l", d),
                    "data-layout-template": !0,
                    ref: t,
                    style: {
                        ...m
                    },
                    children: [a(C, {
                        height: 68,
                        width: "100vw",
                        y: 0,
                        children: a(te, {
                            className: "framer-uhwb70-container",
                            layoutScroll: !0,
                            nodeId: "F2S39VmhN",
                            scopeId: "CqAkB0lYZ",
                            children: a(et, {
                                breakpoint: p,
                                overrides: {
                                    qLdvKxIm1: {
                                        variant: "nDUYW6SES"
                                    },
                                    tyLW5Zqeg: {
                                        variant: "nDUYW6SES"
                                    }
                                },
                                children: a(Be, {
                                    height: "100%",
                                    id: "F2S39VmhN",
                                    layoutId: "F2S39VmhN",
                                    style: {
                                        width: "100%"
                                    },
                                    variant: "L5lFaEPOO",
                                    width: "100%"
                                })
                            })
                        })
                    }), b, a("div", {
                        className: "framer-7x4zer"
                    }), x("footer", {
                        className: "framer-u2d42u",
                        "data-framer-name": "Footer/ footer",
                        children: [x("div", {
                            className: "framer-ube8e5",
                            "data-framer-name": "Container",
                            children: [a("nav", {
                                className: "framer-1b28h4s",
                                "data-framer-name": "footer navigation",
                                children: a(C, {
                                    height: 29,
                                    width: "130px",
                                    children: a(te, {
                                        className: "framer-1n4v74a-container",
                                        nodeId: "QH_JuyD38",
                                        scopeId: "CqAkB0lYZ",
                                        children: a(Q, {
                                            BygxTPELM: "https://rbxluau.github.io",
                                            height: "100%",
                                            id: "QH_JuyD38",
                                            layoutId: "QH_JuyD38",
                                            style: {
                                                width: "100%"
                                            },
                                            variant: "k2SukEO_q",
                                            width: "100%"
                                        })
                                    })
                                })
                            }), a("div", {
                                className: "framer-aomozz",
                                "data-framer-name": "bottom",
                                children: a(fe, {
                                    __fromCanvasComponent: !0,
                                    children: a(k, {
                                        children: a("p", {
                                            className: "framer-styles-preset-g3cq35",
                                            "data-styles-preset": "v4j2BbFgn",
                                            children: "\xA9 2025 - rbxluau.github.io"
                                        })
                                    }),
                                    className: "framer-1cmgnvz",
                                    "data-framer-name": "\xA9 2023 \u2014 Copyright",
                                    fonts: ["Inter"],
                                    verticalAlignment: "bottom",
                                    withExternalLayout: !0
                                })
                            })]
                        }), a("div", {
                            className: "framer-1gohgp1",
                            "data-framer-name": "seperation line"
                        })]
                    })]
                }), a("div", {
                    id: "template-overlay"
                })]
            })
        })
    }),
    _a = e => e === _e.canvas || e === _e.export ? [...gt, ...ht.flatMap(n => {
        let t = ye[n];
        return ye[n].map(o => `${t} {${o}}`)
    })] : [...gt, ...ht.map(n => `@media ${va[n]} { ${ye[n].join(" ")} }`)],
    xe = N(Ra, _a, "framer-iqcVT"),
    yt = xe;
xe.displayName = "Template";
xe.defaultProps = {
    height: 1e3,
    width: 1200
};
P(xe, [{
    explicitInter: !0,
    fonts: [{
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
        weight: "400"
    }]
}, ...ua, ...ha, ...de(me)], {
    supportsExplicitInterCodegen: !0
});
var Z = {
        augiA20Il: {
            elements: {
                A6onQj5iJ: "benefits",
                bzHAaZmbg: "hero",
                dFjG5f0JL: "cta",
                lE_nLsZ01: "insights",
                QDiy2QIy_: "comparison"
            },
            page: ee(() => import("https://framerusercontent.com/sites/4GTZrNh75UmGyw5GRYMBH9/v4fxOEtboyswNCzO88T7a19MG_boEIO3qFPl9OBY-nA.CSVPESHS.mjs")),
            path: "/"
        },
        b4jXLLrNK: {
            elements: {},
            page: ee(() => import("./JzBF73AZ4y36qjZLOhlvMTcKJ1UucmCPXo2riknHH_g.ZNVNOD77.mjs")),
            path: "/404"
        }
    },
    Le = [{
        code: "en",
        id: "default",
        name: "English",
        slug: ""
    }],
    Se = {},
    vt = "b050bc48512f81db9ae3a88605fd9c079167b02758649f8ce76626df8caf4b82";

function Ca({
    routeId: e,
    children: r,
    style: n,
    ...t
}) {
    let l = {} [e] ?? {};
    switch (e) {
        case "augiA20Il":
        case "b4jXLLrNK":
            return w(yt, {
                ...l,
                key: "Template1",
                routeId: e,
                style: n
            }, r(!0));
        default:
            return r(!1)
    }
}

function sr(e) {
    switch (e) {
        case "augiA20Il":
        case "b4jXLLrNK":
            return [{
                hash: "160lv4l",
                mediaQuery: "(min-width: 1200px)"
            }, {
                hash: "fj146k",
                mediaQuery: "(min-width: 810px) and (max-width: 1199px)"
            }, {
                hash: "sh8n4x",
                mediaQuery: "(max-width: 809px)"
            }];
        default:
            return
    }
}
async function Ua({
    routeId: e,
    pathVariables: r,
    localeId: n
}) {
    let t = Z[e].page.preload(),
        o = w(lt, {
            isWebsite: !0,
            routeId: e,
            pathVariables: r,
            routes: Z,
            collectionUtils: Se,
            framerSiteId: vt,
            notFoundPage: ee(() => import("./JzBF73AZ4y36qjZLOhlvMTcKJ1UucmCPXo2riknHH_g.ZNVNOD77.mjs")),
            isReducedMotion: void 0,
            localeId: n,
            locales: Le,
            preserveQueryParams: void 0,
            siteCanonicalURL: "https://tidy-things-986810.framer.app",
            EditorBar: typeof c < "u" ? (() => {
                if (!/bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(z.userAgent)) return ee(async () => {
                    let s = {
                        __version: 1,
                        framer: {
                            useCurrentRoute: je,
                            useLocaleInfo: _,
                            useRouter: Ae
                        },
                        react: {
                            createElement: w,
                            memo: Ne,
                            useCallback: Pe,
                            useEffect: qe,
                            useRef: R,
                            useState: ze
                        },
                        "react-dom": {
                            createPortal: Me
                        }
                    };
                    c.__framer_editorBarDependencies = s;
                    let {
                        createEditorBar: g
                    } = await import("https://edit.framer.com/init.mjs");
                    return {
                        default: g({
                            dependencies: s
                        })
                    }
                })
            })() : void 0,
            LayoutTemplate: Ca
        }),
        l = w(Xe, {
            children: o,
            value: {
                editorBarDisableFrameAncestorsSecurity: !1,
                editorBarOnPageEditing: !1,
                editorBarSimplifiedEntrypointUI: !1,
                motionDivToDiv: !1,
                motionDivToDivBackgroundImage: !0,
                pauseOffscreen: !0,
                replaceNestedLinks: !0,
                yieldOnTap: !1
            }
        }),
        i = w(ot, {
            children: l
        }),
        m = w(Ye, {
            children: i,
            value: {
                global: {
                    enter: {
                        opacity: 0,
                        rotate: 0,
                        rotate3d: !1,
                        rotateX: 0,
                        rotateY: 0,
                        scale: 1,
                        transition: {
                            damping: 30,
                            delay: 0,
                            duration: .2,
                            ease: [.27, 0, .51, 1],
                            mass: 1,
                            stiffness: 400,
                            type: "tween"
                        },
                        x: "0px",
                        y: "0px"
                    }
                },
                routes: {}
            }
        });
    return await t, m
}
var We = typeof document < "u";
if (We) {
    c.__framer_importFromPackage = (r, n) => () => w(Ze, {
        error: 'Package component not supported: "' + n + '" in "' + r + '"'
    }), c.process = {
        ...c.process,
        env: {
            ...c.process ? c.process.env : void 0,
            NODE_ENV: "production"
        }
    }, c.__framer_events = c.__framer_events || [], Ge();
    let e = document.getElementById("main");
    "framerHydrateV2" in e.dataset ? xt(!0, e) : xt(!1, e)
}

function Ia() {
    We && c.__framer_events.push(arguments)
}
async function xt(e, r) {
    function n(t, o, l = !0) {
        if (t.caught || c.__framer_hadFatalError) return;
        let i = o?.componentStack;
        if (l) {
            if (console.warn(`Recoverable error has happened. Please check any custom code or code overrides to fix server/client mismatches:
`, t, i), Math.random() > .01) return
        } else console.error(`Fatal crash has happened. If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/:
`, t, i);
        Ia(l ? "published_site_load_recoverable_error" : "published_site_load_error", {
            message: String(t),
            componentStack: i,
            stack: i ? void 0 : t instanceof Error && typeof t.stack == "string" ? t.stack : null
        })
    }
    try {
        let t, o, l, i;
        if (e) {
            let s = JSON.parse(r.dataset.framerHydrateV2);
            t = s.routeId, o = s.localeId, l = s.pathVariables, i = s.breakpoints, t = Re(Z, t)
        } else {
            Re(Z, void 0);
            let s = Qe(Z, decodeURIComponent(location.pathname), !0, Le);
            t = s.routeId, o = s.localeId, l = s.pathVariables
        }
        let m = Ua({
            routeId: t,
            localeId: o,
            pathVariables: l
        });
        typeof c < "u" && (async () => {
            let s = Z[t],
                g = "default",
                b = Le.find(({
                    id: u
                }) => o ? u === o : u === g).code,
                B = null;
            if (s?.collectionId && Se) {
                let u = await Se[s.collectionId]?.(),
                    [y] = Object.values(l);
                u && typeof y == "string" && (B = await u.getRecordIdBySlug(y, b || void 0) ?? null)
            }
            let p = Intl.DateTimeFormat().resolvedOptions(),
                I = p.timeZone,
                G = p.locale;
            await new Promise(u => {
                document.prerendering ? document.addEventListener("prerenderingchange", u, {
                    once: !0
                }) : u()
            }), c.__framer_events.push(["published_site_pageview", {
                framerSiteId: vt ?? null,
                routePath: s?.path || "/",
                collectionItemId: B,
                framerLocale: b || null,
                webPageId: s?.abTestingVariantId ?? t,
                abTestId: s?.abTestId,
                referrer: document.referrer || null,
                url: c.location.href,
                hostname: c.location.hostname || null,
                pathname: c.location.pathname || null,
                hash: c.location.hash || null,
                search: c.location.search || null,
                timezone: I,
                locale: G
            }, "eager"]), await He({
                priority: "background",
                ensureContinueBeforeUnload: !0,
                continueAfter: "paint"
            }), document.dispatchEvent(new CustomEvent("framer:pageview", {
                detail: {
                    framerLocale: b || null
                }
            }))
        })();
        let d = await m;
        e ? (dt("framer-rewrite-breakpoints", () => {
            ft(i), c.__framer_onRewriteBreakpoints?.(i)
        }), we(() => {
            Je(), Ke(), pt(r, d, {
                onRecoverableError: n
            })
        })) : Ie(r, {
            onRecoverableError: n
        }).render(d)
    } catch (t) {
        throw n(t, void 0, !1), t
    }
}(function() {
    We && we(() => {
        Ie(document.getElementById("__framer-badge-container")).render(w(Te, {}, w(rt(te), {
            className: "__framer-badge",
            __framer__threshold: .5,
            __framer__animateOnce: !0,
            __framer__opacity: 0,
            __framer__targetOpacity: 1,
            __framer__rotate: 0,
            __framer__x: 0,
            __framer__y: 10,
            __framer__scale: 1,
            __framer__transition: {
                type: "spring",
                ease: [.44, 0, .56, 1],
                duration: .3,
                delay: 1,
                stiffness: 350,
                damping: 40,
                mass: 1.5
            },
            __framer__rotateX: 0,
            __framer__rotateY: 0,
            __framer__perspective: 1200
        }, w(De(() => import("./PX9hIOIVM-YLV4FYVY.mjs"))))))
    })
})();
export {
    sr as getLayoutTemplateBreakpoints, Ua as getPageRoot
};
//# sourceMappingURL=script_main.RPYGXNW4.mjs.map