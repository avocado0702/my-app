goog.provide('sci.impl.resolve');
sci.impl.resolve.throw_error_with_location = (function sci$impl$resolve$throw_error_with_location(msg,node){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),"analysis"], null));
});
sci.impl.resolve.mark_resolve_sym = (function sci$impl$resolve$mark_resolve_sym(sym){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(sym,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"resolve-sym","resolve-sym",-1193683260));
}));
});
sci.impl.resolve.check_permission_BANG_ = (function sci$impl$resolve$check_permission_BANG_(ctx,sym,p__31448){
var vec__31455 = p__31448;
var check_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31455,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31455,(1),null);
var or__5002__auto__ = (sci.impl.utils.allowed_loop === sym);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (sci.impl.utils.allowed_recur === sym);
if(or__5002__auto____$1){
return or__5002__auto____$1;
} else {
var check_sym__$1 = sci.impl.utils.strip_core_ns(check_sym);
var allow = new cljs.core.Keyword(null,"allow","allow",-1857325745).cljs$core$IFn$_invoke$arity$1(ctx);
if((cljs.core.truth_(allow)?((((sci.impl.vars.var_QMARK_(v)) && (cljs.core.not(new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))))) || (cljs.core.contains_QMARK_(allow,check_sym__$1))):true)){
} else {
sci.impl.resolve.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," is not allowed!"].join(''),sym);
}

var deny = new cljs.core.Keyword(null,"deny","deny",1589338523).cljs$core$IFn$_invoke$arity$1(ctx);
if((cljs.core.truth_(deny)?cljs.core.contains_QMARK_(deny,check_sym__$1):false)){
return sci.impl.resolve.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," is not allowed!"].join(''),sym);
} else {
return null;
}
}
}
});
sci.impl.resolve.lookup_STAR_ = (function sci$impl$resolve$lookup_STAR_(var_args){
var G__31475 = arguments.length;
switch (G__31475) {
case 3:
return sci.impl.resolve.lookup_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.resolve.lookup_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.resolve.lookup_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (ctx,sym,call_QMARK_){
return sci.impl.resolve.lookup_STAR_.cljs$core$IFn$_invoke$arity$4(ctx,sym,call_QMARK_,false);
}));

(sci.impl.resolve.lookup_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (ctx,sym,call_QMARK_,only_var_QMARK_){
var sym_ns = (function (){var G__31484 = cljs.core.namespace(sym);
if((G__31484 == null)){
return null;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__31484);
}
})();
var sym_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));
var env = ctx.get(new cljs.core.Keyword(null,"env","env",-1815813235));
var env__$1 = cljs.core.deref(env);
var cnn = sci.impl.vars.current_ns_name();
var the_current_ns = (function (){var G__31488 = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env__$1);
return (cnn.cljs$core$IFn$_invoke$arity$1 ? cnn.cljs$core$IFn$_invoke$arity$1(G__31488) : cnn.call(null, G__31488));
})();
var sym_ns__$1 = (cljs.core.truth_(sym_ns)?(function (){var or__5002__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),sym_ns], null));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return sym_ns;
}
})():null);
if(cljs.core.truth_(sym_ns__$1)){
var or__5002__auto__ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym_ns__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym_ns__$1,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)))))?(function (){var or__5002__auto__ = (function (){var G__31497 = env__$1;
var G__31497__$1 = (((G__31497 == null))?null:new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(G__31497));
var G__31497__$2 = (((G__31497__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__31497__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null)));
if((G__31497__$2 == null)){
return null;
} else {
return cljs.core.find(G__31497__$2,sym_name);
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var temp__5804__auto__ = (cljs.core.truth_(call_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.utils.ana_macros,sym_name):null);
if(cljs.core.truth_(temp__5804__auto__)){
var v = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,v], null);
} else {
return null;
}
}
})():null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (function (){var G__31504 = env__$1;
var G__31504__$1 = (((G__31504 == null))?null:new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(G__31504));
var G__31504__$2 = (((G__31504__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__31504__$1,sym_ns__$1));
if((G__31504__$2 == null)){
return null;
} else {
return cljs.core.find(G__31504__$2,sym_name);
}
})();
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
if(cljs.core.truth_(only_var_QMARK_)){
return null;
} else {
var temp__5804__auto__ = sci.impl.interop.resolve_class(ctx,sym_ns__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var clazz = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,(cljs.core.truth_(call_QMARK_)?cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clazz,sym_name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl.analyzer","static-access","sci.impl.analyzer/static-access",-79014000),true], null)):sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (_ctx,_bindings){
return sci.impl.interop.get_static_field(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clazz,sym_name], null));
}),null,sym,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(sym),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns)], 0))))], null);
} else {
return null;
}
}
}
}
} else {
var or__5002__auto__ = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
if(cljs.core.truth_(temp__5804__auto__)){
var refers = temp__5804__auto__;
return cljs.core.find(refers,sym_name);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core.find(the_current_ns,sym);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = (function (){var kv = (function (){var G__31512 = env__$1;
var G__31512__$1 = (((G__31512 == null))?null:new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(G__31512));
var G__31512__$2 = (((G__31512__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__31512__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null)));
if((G__31512__$2 == null)){
return null;
} else {
return cljs.core.find(G__31512__$2,sym_name);
}
})();
if(cljs.core.truth_((function (){var G__31514 = the_current_ns;
var G__31514__$1 = (((G__31514 == null))?null:new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(G__31514));
var G__31514__$2 = (((G__31514__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__31514__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null)));
var G__31514__$3 = (((G__31514__$2 == null))?null:new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(G__31514__$2));
if((G__31514__$3 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__31514__$3,sym_name);
}
})())){
return null;
} else {
return kv;
}
})();
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = (cljs.core.truth_((cljs.core.truth_(call_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.utils.ana_macros,sym):null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,sym], null):null);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
if(cljs.core.truth_(only_var_QMARK_)){
return null;
} else {
var or__5002__auto____$4 = (function (){var temp__5804__auto__ = sci.impl.interop.resolve_class(ctx,sym);
if(cljs.core.truth_(temp__5804__auto__)){
var c = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,c], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto____$4)){
return or__5002__auto____$4;
} else {
var temp__5804__auto__ = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$2(ctx,sym);
if(cljs.core.truth_(temp__5804__auto__)){
var x = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,x], null);
} else {
return null;
}
}
}
}
}
}
}
}
}));

(sci.impl.resolve.lookup_STAR_.cljs$lang$maxFixedArity = 4);

sci.impl.resolve.lookup = (function sci$impl$resolve$lookup(var_args){
var G__31524 = arguments.length;
switch (G__31524) {
case 3:
return sci.impl.resolve.lookup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.resolve.lookup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.resolve.lookup.cljs$core$IFn$_invoke$arity$3 = (function (ctx,sym,call_QMARK_){
return sci.impl.resolve.lookup.cljs$core$IFn$_invoke$arity$4(ctx,sym,call_QMARK_,null);
}));

(sci.impl.resolve.lookup.cljs$core$IFn$_invoke$arity$4 = (function (ctx,sym,call_QMARK_,tag){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var or__5002__auto__ = (function (){var temp__5804__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__31538 = temp__5804__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31538,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31538,(1),null);
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.analyzer","self-ref","sci.impl.analyzer/self-ref",-976932794),v) : sci.impl.utils.kw_identical_QMARK_.call(null, new cljs.core.Keyword("sci.impl.analyzer","self-ref","sci.impl.analyzer/self-ref",-976932794),v)))){
cljs.core.vreset_BANG_(new cljs.core.Keyword(null,"self-ref","self-ref",1760385189).cljs$core$IFn$_invoke$arity$1(ctx),true);

var temp__5804__auto___31708__$1 = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5804__auto___31708__$1)){
var cb_31709 = temp__5804__auto___31708__$1;
cljs.core._vreset_BANG_(cb_31709,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(cb_31709),sym));
} else {
}

if(cljs.core.truth_(call_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$3((function (_ctx,bindings__$1){
return cljs.core.deref(bindings__$1.get(k));
}),null,null)], null);
}
} else {
var _ = (function (){var temp__5804__auto____$1 = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5804__auto____$1)){
var cb = temp__5804__auto____$1;
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"param-map","param-map",-514769759).cljs$core$IFn$_invoke$arity$1(ctx),sym)){
return null;
} else {
return cljs.core._vreset_BANG_(cb,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(cb),sym));
}
} else {
return null;
}
})();
var v__$1 = (cljs.core.truth_(call_QMARK_)?sci.impl.resolve.mark_resolve_sym(k):(function (){var v__$1 = sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$3((function (_ctx,bindings__$1){
return bindings__$1.get(k);
}),null,(cljs.core.truth_(tag)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(k,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag):k));
return v__$1;
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$1], null);
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var temp__5804__auto__ = sci.impl.resolve.lookup_STAR_.cljs$core$IFn$_invoke$arity$3(ctx,sym,call_QMARK_);
if(cljs.core.truth_(temp__5804__auto__)){
var kv = temp__5804__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"check-permissions","check-permissions",669054317).cljs$core$IFn$_invoke$arity$1(ctx))){
sci.impl.resolve.check_permission_BANG_(ctx,sym,kv);
} else {
}

return kv;
} else {
return null;
}
}
}));

(sci.impl.resolve.lookup.cljs$lang$maxFixedArity = 4);

cljs.core.vreset_BANG_(sci.impl.utils.lookup,sci.impl.resolve.lookup);
sci.impl.resolve.resolve_symbol = (function sci$impl$resolve$resolve_symbol(var_args){
var G__31578 = arguments.length;
switch (G__31578) {
case 2:
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2 = (function (ctx,sym){
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$4(ctx,sym,false,null);
}));

(sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3 = (function (ctx,sym,call_QMARK_){
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$4(ctx,sym,call_QMARK_,null);
}));

(sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$4 = (function (ctx,sym,call_QMARK_,tag){
var res = cljs.core.second((function (){var or__5002__auto__ = sci.impl.resolve.lookup.cljs$core$IFn$_invoke$arity$4(ctx,sym,call_QMARK_,tag);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var n = cljs.core.name(sym);
if(cljs.core.truth_((function (){var and__5000__auto__ = call_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return ((clojure.string.starts_with_QMARK_(n,".")) && ((((n).length) > (1))));
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null)], null);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = call_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return ((clojure.string.ends_with_QMARK_(n,".")) && ((((n).length) > (1))));
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null)], null);
} else {
return sci.impl.resolve.throw_error_with_location(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),sym);

}
}
}
})());
return res;
}));

(sci.impl.resolve.resolve_symbol.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=sci.impl.resolve.js.map
