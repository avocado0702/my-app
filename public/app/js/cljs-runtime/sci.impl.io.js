goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__21879 = arguments.length;
switch (G__21879) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.vars.clojure_core_ns], null));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 2);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__21900 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__21902 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__21902);

try{var G__21911 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__21911);

return G__21911;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__21900);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__21916 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__21917 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__21917);

try{var G__21921 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__21921);

return G__21921;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__21916);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__21930 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__21931 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__21931);

try{var G__21932 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__21932);

return G__21932;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__21930);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__21934 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__21935 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__21935);

try{var G__21937 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__21937);

return G__21937;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__21934);
}})();
sci.impl.io.print_meta = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null));
sci.impl.io.print_level = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null));
sci.impl.io.print_namespace_maps = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.flush_on_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),cljs.core._STAR_flush_on_newline_STAR_);
sci.impl.io.print_readably = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),cljs.core._STAR_print_readably_STAR_);
sci.impl.io.print_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),cljs.core._STAR_print_newline_STAR_);
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__21968 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__21969 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21969);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21968);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22276 = arguments.length;
var i__5727__auto___22277 = (0);
while(true){
if((i__5727__auto___22277 < len__5726__auto___22276)){
args__5732__auto__.push((arguments[i__5727__auto___22277]));

var G__22279 = (i__5727__auto___22277 + (1));
i__5727__auto___22277 = G__22279;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__21982 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__21983 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__21984 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__21985 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__21986 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__21987 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__21988 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__21989 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__21990 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__21991 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__21992 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__21993 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__21994 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__21995 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21989);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__21990);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__21991);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__21992);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__21993);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__21994);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21995);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21988);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__21987);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__21986);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__21985);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__21984);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__21983);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21982);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq21979){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21979));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__22005 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__22006 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22006);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22005);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22288 = arguments.length;
var i__5727__auto___22289 = (0);
while(true){
if((i__5727__auto___22289 < len__5726__auto___22288)){
args__5732__auto__.push((arguments[i__5727__auto___22289]));

var G__22290 = (i__5727__auto___22289 + (1));
i__5727__auto___22289 = G__22290;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__22014 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__22015 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__22016 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__22017 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__22018 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__22019 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__22020 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__22021 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__22022 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__22023 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__22024 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__22025 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__22020);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__22021);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__22022);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__22023);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__22024);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22025);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22019);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__22018);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__22017);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__22016);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__22015);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__22014);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq22007){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22007));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22299 = arguments.length;
var i__5727__auto___22300 = (0);
while(true){
if((i__5727__auto___22300 < len__5726__auto___22299)){
args__5732__auto__.push((arguments[i__5727__auto___22300]));

var G__22301 = (i__5727__auto___22300 + (1));
i__5727__auto___22300 = G__22301;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__22059 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__22060 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__22061 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__22062 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__22063 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__22064 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__22065 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__22066 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__22067 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__22068 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__22069 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__22070 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__22071 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__22072 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22066);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__22067);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__22068);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__22069);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__22070);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__22071);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22072);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22065);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__22064);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__22063);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__22062);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__22061);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__22060);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22059);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq22052){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22052));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22312 = arguments.length;
var i__5727__auto___22313 = (0);
while(true){
if((i__5727__auto___22313 < len__5726__auto___22312)){
args__5732__auto__.push((arguments[i__5727__auto___22313]));

var G__22318 = (i__5727__auto___22313 + (1));
i__5727__auto___22313 = G__22318;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__22084 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__22085 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__22086 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__22087 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__22088 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__22089 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__22090 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__22091 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__22092 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__22093 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__22094 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__22095 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__22090);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__22091);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__22092);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__22093);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__22094);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22095);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22089);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__22088);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__22087);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__22086);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__22085);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__22084);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq22077){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22077));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22322 = arguments.length;
var i__5727__auto___22323 = (0);
while(true){
if((i__5727__auto___22323 < len__5726__auto___22322)){
args__5732__auto__.push((arguments[i__5727__auto___22323]));

var G__22324 = (i__5727__auto___22323 + (1));
i__5727__auto___22323 = G__22324;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__22103 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__22104 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__22105 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__22106 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__22107 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__22108 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__22109 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__22110 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__22111 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__22112 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__22113 = null;
var _STAR_print_newline_STAR__temp_val__22114 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22109);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__22110);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__22111);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__22112);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__22113);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22114);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22108);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__22107);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__22106);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__22105);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__22104);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22103);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq22101){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22101));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22331 = arguments.length;
var i__5727__auto___22332 = (0);
while(true){
if((i__5727__auto___22332 < len__5726__auto___22331)){
args__5732__auto__.push((arguments[i__5727__auto___22332]));

var G__22333 = (i__5727__auto___22332 + (1));
i__5727__auto___22332 = G__22333;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__22149 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__22150 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__22151 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__22152 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__22153 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__22154 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__22155 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__22156 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__22157 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__22158 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__22159 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__22160 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__22155);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__22156);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__22157);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__22158);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__22159);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22160);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22154);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__22153);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__22152);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__22151);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__22150);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__22149);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq22122){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22122));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22339 = arguments.length;
var i__5727__auto___22340 = (0);
while(true){
if((i__5727__auto___22340 < len__5726__auto___22339)){
args__5732__auto__.push((arguments[i__5727__auto___22340]));

var G__22341 = (i__5727__auto___22340 + (1));
i__5727__auto___22340 = G__22341;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__22190 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__22191 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__22192 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__22193 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__22194 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__22195 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__22196 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__22197 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__22198 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__22199 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__22200 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__22201 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__22202 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__22203 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22197);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__22198);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__22199);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__22200);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__22201);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__22202);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22203);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22196);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__22195);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__22194);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__22193);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__22192);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__22191);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22190);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq22175){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22175));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22345 = arguments.length;
var i__5727__auto___22346 = (0);
while(true){
if((i__5727__auto___22346 < len__5726__auto___22345)){
args__5732__auto__.push((arguments[i__5727__auto___22346]));

var G__22347 = (i__5727__auto___22346 + (1));
i__5727__auto___22346 = G__22347;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__22220__auto__","s__22220__auto__",-644909168,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__22221__auto__","x__22221__auto__",1088900780,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__22220__auto__","s__22220__auto__",-644909168,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__22221__auto__","x__22221__auto__",1088900780,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__22220__auto__","s__22220__auto__",-644909168,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq22222){
var G__22223 = cljs.core.first(seq22222);
var seq22222__$1 = cljs.core.next(seq22222);
var G__22227 = cljs.core.first(seq22222__$1);
var seq22222__$2 = cljs.core.next(seq22222__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22223,G__22227,seq22222__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
