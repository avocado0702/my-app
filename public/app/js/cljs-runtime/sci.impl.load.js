goog.provide('sci.impl.load');
sci.impl.load.handle_refer_all = (function sci$impl$load$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__21875){
var vec__21876 = p__21875;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21876,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21876,(1),null);
if(cljs.core.truth_((function (){var and__5000__auto__ = (k instanceof cljs.core.Symbol);
if(and__5000__auto__){
var and__5000__auto____$1 = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null, k));
if(cljs.core.truth_(and__5000__auto____$1)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null, k)),v);
} else {
return ns;
}
}),referred,the_loaded_ns);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
});
sci.impl.load.handle_require_libspec_env = (function sci$impl$load$handle_require_libspec_env(ctx,env,current_ns,the_loaded_ns,lib_name,p__21903){
var map__21904 = p__21903;
var map__21904__$1 = cljs.core.__destructure_map(map__21904);
var _parsed_libspec = map__21904__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21904__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21904__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21904__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21904__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21904__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21904__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__5002__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null, sym));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__5002__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),refer) : sci.impl.utils.kw_identical_QMARK_.call(null, new cljs.core.Keyword(null,"all","all",892129742),refer));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return use;
}
})())?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?(function (){var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns__$1);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null, sym)),(function (){var temp__5802__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__21938 = temp__5802__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21938,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21938,(1),null);
return v;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"uberscript","uberscript",701571092).cljs$core$IFn$_invoke$arity$1(ctx))){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
}
})());
} else {
return ns;
}
}),referred,refer);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns__$1,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
})():(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use)?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
var temp__5804__auto___22423 = (function (){var G__21964 = the_loaded_ns;
var G__21964__$1 = (((G__21964 == null))?null:new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__21964));
var G__21964__$2 = (((G__21964__$1 == null))?null:cljs.core.meta(G__21964__$1));
if((G__21964__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","required-fn","sci.impl/required-fn",2082701278).cljs$core$IFn$_invoke$arity$1(G__21964__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto___22423)){
var on_loaded_22427 = temp__5804__auto___22423;
var G__21970_22428 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_22427.cljs$core$IFn$_invoke$arity$1 ? on_loaded_22427.cljs$core$IFn$_invoke$arity$1(G__21970_22428) : on_loaded_22427.call(null, G__21970_22428));
} else {
}

return env__$1;
});
sci.impl.load.add_loaded_lib = (function sci$impl$load$add_loaded_lib(env,lib){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.update,new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652),(function (loaded_libs){
if((loaded_libs == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([lib]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loaded_libs,lib);
}
}));

return null;
});
sci.impl.load.handle_require_libspec = (function sci$impl$load$handle_require_libspec(ctx,lib,opts){
var map__21997 = opts;
var map__21997__$1 = cljs.core.__destructure_map(map__21997);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21997__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reload_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21997__$1,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var uberscript = new cljs.core.Keyword(null,"uberscript","uberscript",701571092).cljs$core$IFn$_invoke$arity$1(ctx);
var reload_STAR_ = (function (){var or__5002__auto__ = reload;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = reload_all;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
return uberscript;
}
}
}
})();
var temp__5802__auto___22434 = (cljs.core.truth_(reload_STAR_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib));
if(cljs.core.truth_(temp__5802__auto___22434)){
var the_loaded_ns_22435 = temp__5802__auto___22434;
var loading_22437 = new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__5000__auto__ = loading_22437;
if(cljs.core.truth_(and__5000__auto__)){
return (((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652).cljs$core$IFn$_invoke$arity$1(env),lib)))) && (cljs.core.nat_int_QMARK_(loading_22437.indexOf(lib))));
} else {
return and__5000__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((function (){var lib_emphasized = ["[ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)," ]"].join('');
var loading__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading_22437,lib);
var loading__$2 = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([lib,lib_emphasized]),loading__$1);
return ["Cyclic load dependency: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("->",loading__$2)].join('');
})(),lib);
} else {
cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns_22435,lib,opts));
}
} else {
var temp__5802__auto___22441__$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5802__auto___22441__$1)){
var load_fn_22442 = temp__5802__auto___22441__$1;
var temp__5802__auto___22443__$2 = (function (){var G__22029 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib,new cljs.core.Keyword(null,"reload","reload",863702807),(function (){var or__5002__auto__ = reload;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return reload_all;
}
})()], null);
return (load_fn_22442.cljs$core$IFn$_invoke$arity$1 ? load_fn_22442.cljs$core$IFn$_invoke$arity$1(G__22029) : load_fn_22442.call(null, G__22029));
})();
if(cljs.core.truth_(temp__5802__auto___22443__$2)){
var map__22035_22449 = temp__5802__auto___22443__$2;
var map__22035_22450__$1 = cljs.core.__destructure_map(map__22035_22449);
var file_22451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22035_22450__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source_22452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22035_22450__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var ctx_22453__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload_all),new cljs.core.Keyword(null,"loading","loading",-737050189),(function (loading){
if((loading == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading,lib);
}
}));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file_22451]));

try{var fexpr__22053_22456 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__22053_22456.cljs$core$IFn$_invoke$arity$2 ? fexpr__22053_22456.cljs$core$IFn$_invoke$arity$2(ctx_22453__$1,source_22452) : fexpr__22053_22456.call(null, ctx_22453__$1,source_22452));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e22045){if((e22045 instanceof Error)){
var e_22457 = e22045;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib], 0));

throw e_22457;
} else {
throw e22045;

}
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib);
return sci.impl.load.handle_require_libspec_env(ctx,env__$1,cnn,the_loaded_ns,lib,opts);
}));
} else {
var or__5002__auto___22458 = (cljs.core.truth_(reload_STAR_)?(function (){var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib);
if(cljs.core.truth_(temp__5804__auto__)){
var the_loaded_ns = temp__5804__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib,opts));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__5002__auto___22458)){
} else {
throw (new Error(["Could not find namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}
} else {
throw (new Error(["Could not find namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}

sci.impl.load.add_loaded_lib(env_STAR_,lib);

return null;
});
sci.impl.load.load_lib = (function sci$impl$load$load_lib(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22459 = arguments.length;
var i__5727__auto___22460 = (0);
while(true){
if((i__5727__auto___22460 < len__5726__auto___22459)){
args__5732__auto__.push((arguments[i__5727__auto___22460]));

var G__22462 = (i__5727__auto___22460 + (1));
i__5727__auto___22460 = G__22462;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,prefix,lib,options){
if(cljs.core.truth_((function (){var and__5000__auto__ = prefix;
if(cljs.core.truth_(and__5000__auto__)){
return (cljs.core.name(lib).indexOf(".") > (0));
} else {
return and__5000__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Found lib name '",cljs.core.name(lib),"' containing period with prefix '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"'.  lib names inside prefix lists must not contain periods"].join(''),lib);
} else {
}

var lib__$1 = (cljs.core.truth_(prefix)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join('')):lib);
var opts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options);
return sci.impl.load.handle_require_libspec(ctx,lib__$1,opts);
}));

(sci.impl.load.load_lib.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.load.load_lib.cljs$lang$applyTo = (function (seq22073){
var G__22074 = cljs.core.first(seq22073);
var seq22073__$1 = cljs.core.next(seq22073);
var G__22075 = cljs.core.first(seq22073__$1);
var seq22073__$2 = cljs.core.next(seq22073__$1);
var G__22076 = cljs.core.first(seq22073__$2);
var seq22073__$3 = cljs.core.next(seq22073__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22074,G__22075,G__22076,seq22073__$3);
}));

/**
 * Prepends a symbol or a seq to coll
 */
sci.impl.load.prependss = (function sci$impl$load$prependss(x,coll){
if((x instanceof cljs.core.Symbol)){
return cljs.core.cons(x,coll);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,coll);
}
});
/**
 * Returns true if x is a libspec
 */
sci.impl.load.libspec_QMARK_ = (function sci$impl$load$libspec_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) || (((cljs.core.vector_QMARK_(x)) && ((((cljs.core.second(x) == null)) || ((cljs.core.second(x) instanceof cljs.core.Keyword)))))));
});
/**
 * Loads libs, evaling libspecs, prefix lists, and flags for
 *   forwarding to load-lib
 */
sci.impl.load.load_libs = (function sci$impl$load$load_libs(ctx,kw,args){
var args_STAR_ = cljs.core.cons(kw,args);
var flags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,args_STAR_);
var opts = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
var args_STAR___$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.keyword_QMARK_),args_STAR_);
var supported_22470 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"verbose","verbose",1694226060),null,new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null);
var unsupported_22471 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_22470,flags));
if(unsupported_22471){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_22471)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__22129 = cljs.core.seq(args_STAR___$1);
var chunk__22130 = null;
var count__22131 = (0);
var i__22132 = (0);
while(true){
if((i__22132 < count__22131)){
var arg = chunk__22130.cljs$core$IIndexed$_nth$arity$2(null, i__22132);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__22234_22474 = arg;
var seq__22235_22475 = cljs.core.seq(vec__22234_22474);
var first__22236_22476 = cljs.core.first(seq__22235_22475);
var seq__22235_22477__$1 = cljs.core.next(seq__22235_22475);
var prefix_22478 = first__22236_22476;
var args_STAR__22479__$2 = seq__22235_22477__$1;
if((prefix_22478 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__22238_22481 = cljs.core.seq(args_STAR__22479__$2);
var chunk__22239_22482 = null;
var count__22240_22483 = (0);
var i__22241_22484 = (0);
while(true){
if((i__22241_22484 < count__22240_22483)){
var arg_22485__$1 = chunk__22239_22482.cljs$core$IIndexed$_nth$arity$2(null, i__22241_22484);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_22478,sci.impl.load.prependss(arg_22485__$1,opts));


var G__22489 = seq__22238_22481;
var G__22490 = chunk__22239_22482;
var G__22491 = count__22240_22483;
var G__22492 = (i__22241_22484 + (1));
seq__22238_22481 = G__22489;
chunk__22239_22482 = G__22490;
count__22240_22483 = G__22491;
i__22241_22484 = G__22492;
continue;
} else {
var temp__5804__auto___22493 = cljs.core.seq(seq__22238_22481);
if(temp__5804__auto___22493){
var seq__22238_22494__$1 = temp__5804__auto___22493;
if(cljs.core.chunked_seq_QMARK_(seq__22238_22494__$1)){
var c__5525__auto___22495 = cljs.core.chunk_first(seq__22238_22494__$1);
var G__22497 = cljs.core.chunk_rest(seq__22238_22494__$1);
var G__22498 = c__5525__auto___22495;
var G__22499 = cljs.core.count(c__5525__auto___22495);
var G__22500 = (0);
seq__22238_22481 = G__22497;
chunk__22239_22482 = G__22498;
count__22240_22483 = G__22499;
i__22241_22484 = G__22500;
continue;
} else {
var arg_22504__$1 = cljs.core.first(seq__22238_22494__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_22478,sci.impl.load.prependss(arg_22504__$1,opts));


var G__22505 = cljs.core.next(seq__22238_22494__$1);
var G__22506 = null;
var G__22507 = (0);
var G__22508 = (0);
seq__22238_22481 = G__22505;
chunk__22239_22482 = G__22506;
count__22240_22483 = G__22507;
i__22241_22484 = G__22508;
continue;
}
} else {
}
}
break;
}
}


var G__22509 = seq__22129;
var G__22510 = chunk__22130;
var G__22511 = count__22131;
var G__22512 = (i__22132 + (1));
seq__22129 = G__22509;
chunk__22130 = G__22510;
count__22131 = G__22511;
i__22132 = G__22512;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22129);
if(temp__5804__auto__){
var seq__22129__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22129__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22129__$1);
var G__22513 = cljs.core.chunk_rest(seq__22129__$1);
var G__22514 = c__5525__auto__;
var G__22515 = cljs.core.count(c__5525__auto__);
var G__22516 = (0);
seq__22129 = G__22513;
chunk__22130 = G__22514;
count__22131 = G__22515;
i__22132 = G__22516;
continue;
} else {
var arg = cljs.core.first(seq__22129__$1);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__22258_22519 = arg;
var seq__22259_22521 = cljs.core.seq(vec__22258_22519);
var first__22260_22524 = cljs.core.first(seq__22259_22521);
var seq__22259_22525__$1 = cljs.core.next(seq__22259_22521);
var prefix_22526 = first__22260_22524;
var args_STAR__22527__$2 = seq__22259_22525__$1;
if((prefix_22526 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__22267_22528 = cljs.core.seq(args_STAR__22527__$2);
var chunk__22268_22529 = null;
var count__22269_22530 = (0);
var i__22270_22531 = (0);
while(true){
if((i__22270_22531 < count__22269_22530)){
var arg_22533__$1 = chunk__22268_22529.cljs$core$IIndexed$_nth$arity$2(null, i__22270_22531);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_22526,sci.impl.load.prependss(arg_22533__$1,opts));


var G__22534 = seq__22267_22528;
var G__22535 = chunk__22268_22529;
var G__22536 = count__22269_22530;
var G__22537 = (i__22270_22531 + (1));
seq__22267_22528 = G__22534;
chunk__22268_22529 = G__22535;
count__22269_22530 = G__22536;
i__22270_22531 = G__22537;
continue;
} else {
var temp__5804__auto___22538__$1 = cljs.core.seq(seq__22267_22528);
if(temp__5804__auto___22538__$1){
var seq__22267_22540__$1 = temp__5804__auto___22538__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22267_22540__$1)){
var c__5525__auto___22541 = cljs.core.chunk_first(seq__22267_22540__$1);
var G__22543 = cljs.core.chunk_rest(seq__22267_22540__$1);
var G__22544 = c__5525__auto___22541;
var G__22545 = cljs.core.count(c__5525__auto___22541);
var G__22546 = (0);
seq__22267_22528 = G__22543;
chunk__22268_22529 = G__22544;
count__22269_22530 = G__22545;
i__22270_22531 = G__22546;
continue;
} else {
var arg_22547__$1 = cljs.core.first(seq__22267_22540__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_22526,sci.impl.load.prependss(arg_22547__$1,opts));


var G__22549 = cljs.core.next(seq__22267_22540__$1);
var G__22550 = null;
var G__22551 = (0);
var G__22552 = (0);
seq__22267_22528 = G__22549;
chunk__22268_22529 = G__22550;
count__22269_22530 = G__22551;
i__22270_22531 = G__22552;
continue;
}
} else {
}
}
break;
}
}


var G__22553 = cljs.core.next(seq__22129__$1);
var G__22554 = null;
var G__22555 = (0);
var G__22556 = (0);
seq__22129 = G__22553;
chunk__22130 = G__22554;
count__22131 = G__22555;
i__22132 = G__22556;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.load.eval_require = (function sci$impl$load$eval_require(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22557 = arguments.length;
var i__5727__auto___22558 = (0);
while(true){
if((i__5727__auto___22558 < len__5726__auto___22557)){
args__5732__auto__.push((arguments[i__5727__auto___22558]));

var G__22560 = (i__5727__auto___22558 + (1));
i__5727__auto___22558 = G__22560;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"require","require",-468001333),args);
}));

(sci.impl.load.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_require.cljs$lang$applyTo = (function (seq22285){
var G__22286 = cljs.core.first(seq22285);
var seq22285__$1 = cljs.core.next(seq22285);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22286,seq22285__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.load.eval_require);
sci.impl.load.eval_use = (function sci$impl$load$eval_use(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22562 = arguments.length;
var i__5727__auto___22564 = (0);
while(true){
if((i__5727__auto___22564 < len__5726__auto___22562)){
args__5732__auto__.push((arguments[i__5727__auto___22564]));

var G__22565 = (i__5727__auto___22564 + (1));
i__5727__auto___22564 = G__22565;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"use","use",-1846382424),args);
}));

(sci.impl.load.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_use.cljs$lang$applyTo = (function (seq22310){
var G__22311 = cljs.core.first(seq22310);
var seq22310__$1 = cljs.core.next(seq22310);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22311,seq22310__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.load.eval_use);
sci.impl.load.eval_refer_clojure = (function sci$impl$load$eval_refer_clojure(ctx,exprs){
var ns_sym = new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null);
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__22335 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22335,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22335,(1),null);
var G__22338_22566 = k;
var G__22338_22567__$1 = (((G__22338_22566 instanceof cljs.core.Keyword))?G__22338_22566.fqn:null);
switch (G__22338_22567__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__22338_22566,G__22338_22567__$1,vec__22335,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__22338_22566,G__22338_22567__$1,vec__22335,k,v,ns_sym))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__22338_22566,G__22338_22567__$1,vec__22335,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__22338_22566,G__22338_22567__$1,vec__22335,k,v,ns_sym))
);

break;
case "rename":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__22338_22566,G__22338_22567__$1,vec__22335,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var the_current_ns__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__22338_22566,G__22338_22567__$1,vec__22335,k,v,ns_sym){
return (function (acc,p__22358){
var vec__22359 = p__22358;
var original_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22359,(0),null);
var new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22359,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refers","refers",158076809),new_name], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(other_ns,original_name)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),original_name);
});})(exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__22338_22566,G__22338_22567__$1,vec__22335,k,v,ns_sym))
,the_current_ns,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});})(exprs__$1,G__22338_22566,G__22338_22567__$1,vec__22335,k,v,ns_sym))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22338_22567__$1)].join('')));

}

var G__22578 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__22578;
continue;
} else {
return null;
}
break;
}
});
sci.impl.load.eval_refer_STAR_ = (function sci$impl$load$eval_refer_STAR_(env,ns_sym,filters){

var cnn = sci.impl.vars.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var ns = (function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,ns_sym);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw (new Error(["No namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym)].join('')));
}
})();
var fs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,filters);
var public_keys = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.keys(ns));
var rename = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"rename","rename",1508157613).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var exclude = cljs.core.set(new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(fs));
var to_do = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs)))?public_keys:(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return public_keys;
}
}
})());
var _ = (cljs.core.truth_((function (){var and__5000__auto__ = to_do;
if(cljs.core.truth_(and__5000__auto__)){
return (!(cljs.core.sequential_QMARK_(to_do)));
} else {
return and__5000__auto__;
}
})())?(function(){throw (new Error(":only/:refer value must be a sequential collection of symbols"))})():null);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (referred__$1,sym){
if(cljs.core.not((exclude.cljs$core$IFn$_invoke$arity$1 ? exclude.cljs$core$IFn$_invoke$arity$1(sym) : exclude.call(null, sym)))){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns,sym);
if(cljs.core.truth_(v)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')
));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(referred__$1,(function (){var or__5002__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null, sym));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return sym;
}
})(),v);
} else {
return referred__$1;
}
}),referred,to_do);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
var namespaces__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(namespaces,cnn,the_current_ns__$1);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1);
return env__$1;
});
/**
 * The function equivalent of :refer is handled differently than what we
 *   did before (this is more like what Clojure itself does.) For
 *   referring clojure.core we still use the old code.
 */
sci.impl.load.eval_refer = (function sci$impl$load$eval_refer(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22588 = arguments.length;
var i__5727__auto___22589 = (0);
while(true){
if((i__5727__auto___22589 < len__5726__auto___22588)){
args__5732__auto__.push((arguments[i__5727__auto___22589]));

var G__22591 = (i__5727__auto___22589 + (1));
i__5727__auto___22589 = G__22591;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,filters){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),ns_sym)){
sci.impl.load.eval_refer_clojure(ctx,filters);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),sci.impl.load.eval_refer_STAR_,ns_sym,filters);
}

return null;
}));

(sci.impl.load.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.load.eval_refer.cljs$lang$applyTo = (function (seq22383){
var G__22384 = cljs.core.first(seq22383);
var seq22383__$1 = cljs.core.next(seq22383);
var G__22385 = cljs.core.first(seq22383__$1);
var seq22383__$2 = cljs.core.next(seq22383__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22384,G__22385,seq22383__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.load.eval_refer);

//# sourceMappingURL=sci.impl.load.js.map
