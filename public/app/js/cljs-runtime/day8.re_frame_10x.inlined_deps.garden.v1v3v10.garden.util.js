goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util');
/**
 * Formats a string using goog.string.format.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.format = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$format(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12740 = arguments.length;
var i__5727__auto___12741 = (0);
while(true){
if((i__5727__auto___12741 < len__5726__auto___12740)){
args__5732__auto__.push((arguments[i__5727__auto___12741]));

var G__12742 = (i__5727__auto___12741 + (1));
i__5727__auto___12741 = G__12742;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.format.cljs$lang$applyTo = (function (seq12584){
var G__12585 = cljs.core.first(seq12584);
var seq12584__$1 = cljs.core.next(seq12584);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12585,seq12584__$1);
}));


/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.ToString = function(){};

var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$ToString$to_str$dyn_12745 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("ToString.to-str",this$);
}
}
});
/**
 * Convert a value into a string.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$to_str(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$ToString$to_str$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$ToString$to_str$arity$1(this$);
} else {
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$ToString$to_str$dyn_12745(this$);
}
});

(cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.ToString["_"] = true);

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str["_"] = (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.ToString["null"] = true);

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str["null"] = (function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.as_str = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$as_str(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12748 = arguments.length;
var i__5727__auto___12749 = (0);
while(true){
if((i__5727__auto___12749 < len__5726__auto___12748)){
args__5732__auto__.push((arguments[i__5727__auto___12749]));

var G__12750 = (i__5727__auto___12749 + (1));
i__5727__auto___12749 = G__12750;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str,args));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.as_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.as_str.cljs$lang$applyTo = (function (seq12601){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12601));
}));

/**
 * Convert a string to an integer with optional base.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.string__GT_int = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$string__GT_int(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12752 = arguments.length;
var i__5727__auto___12754 = (0);
while(true){
if((i__5727__auto___12754 < len__5726__auto___12752)){
args__5732__auto__.push((arguments[i__5727__auto___12754]));

var G__12755 = (i__5727__auto___12754 + (1));
i__5727__auto___12754 = G__12755;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__12610){
var vec__12611 = p__12610;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12611,(0),null);
var radix__$1 = (function (){var or__5002__auto__ = radix;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.string__GT_int.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.string__GT_int.cljs$lang$applyTo = (function (seq12608){
var G__12609 = cljs.core.first(seq12608);
var seq12608__$1 = cljs.core.next(seq12608);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12609,seq12608__$1);
}));

/**
 * Convert an integer to a string with optional base.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.int__GT_string = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$int__GT_string(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12757 = arguments.length;
var i__5727__auto___12759 = (0);
while(true){
if((i__5727__auto___12759 < len__5726__auto___12757)){
args__5732__auto__.push((arguments[i__5727__auto___12759]));

var G__12760 = (i__5727__auto___12759 + (1));
i__5727__auto___12759 = G__12760;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__12629){
var vec__12630 = p__12629;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12630,(0),null);
var radix__$1 = (function (){var or__5002__auto__ = radix;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.int__GT_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.int__GT_string.cljs$lang$applyTo = (function (seq12619){
var G__12620 = cljs.core.first(seq12619);
var seq12619__$1 = cljs.core.next(seq12619);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12620,seq12619__$1);
}));

/**
 * Return a space separated list of values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.space_join = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$space_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.comma_join = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$comma_join(xs){
var ys = (function (){var iter__5480__auto__ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$comma_join_$_iter__12658(s__12659){
return (new cljs.core.LazySeq(null,(function (){
var s__12659__$1 = s__12659;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12659__$1);
if(temp__5804__auto__){
var s__12659__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12659__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12659__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12663 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12662 = (0);
while(true){
if((i__12662 < size__5479__auto__)){
var x = cljs.core._nth(c__5478__auto__,i__12662);
cljs.core.chunk_append(b__12663,((cljs.core.sequential_QMARK_(x))?day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.space_join(x):day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str(x)));

var G__12761 = (i__12662 + (1));
i__12662 = G__12761;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12663),day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$comma_join_$_iter__12658(cljs.core.chunk_rest(s__12659__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12663),null);
}
} else {
var x = cljs.core.first(s__12659__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.space_join(x):day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str(x)),day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$comma_join_$_iter__12658(cljs.core.rest(s__12659__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.wrap_quotes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$wrap_quotes(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.hash_map_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) && ((!(cljs.core.record_QMARK_(x)))));
});
/**
 * Alias to `vector?`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.declaration_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.hash_map_QMARK_;
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_rule_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$at_rule_QMARK_(x){
return (x instanceof day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_media_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$at_media_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403))));
});
/**
 * True if `x` is a CSS `@supports` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_supports_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$at_supports_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"feature","feature",27242652))));
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_keyframes_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$at_keyframes_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012))));
});
/**
 * True if `x` is a CSS `@import` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_import_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$at_import_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709))));
});
/**
 * Attach a CSS style prefix to s.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.prefix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$prefix(p,s){
var p__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.last(p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.vendor_prefix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$vendor_prefix(p,s){
var p__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.first(p__$1))){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.prefix(p__$1,s);
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.prefix(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.natural_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_(n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.between_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__5090__auto__ = a;
var y__5091__auto__ = b;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var top = (function (){var x__5087__auto__ = a;
var y__5088__auto__ = b;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.clip = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$clip(a,b,n){
var vec__12721 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12721,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12721,(1),null);
var x__5087__auto__ = a__$1;
var y__5088__auto__ = (function (){var x__5090__auto__ = b__$1;
var y__5091__auto__ = n;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
});
/**
 * Return the average of two or more numbers.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.average = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$average(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12767 = arguments.length;
var i__5727__auto___12768 = (0);
while(true){
if((i__5727__auto___12768 < len__5726__auto___12767)){
args__5732__auto__.push((arguments[i__5727__auto___12768]));

var G__12769 = (i__5727__auto___12768 + (1));
i__5727__auto___12768 = G__12769;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count(more)));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.average.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.average.cljs$lang$applyTo = (function (seq12727){
var G__12728 = cljs.core.first(seq12727);
var seq12727__$1 = cljs.core.next(seq12727);
var G__12729 = cljs.core.first(seq12727__$1);
var seq12727__$2 = cljs.core.next(seq12727__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12728,G__12729,seq12727__$2);
}));

/**
 * All the ways to take one item from each sequence.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.cartesian_product = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$cartesian_product(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12773 = arguments.length;
var i__5727__auto___12774 = (0);
while(true){
if((i__5727__auto___12774 < len__5726__auto___12773)){
args__5732__auto__.push((arguments[i__5727__auto___12774]));

var G__12775 = (i__5727__auto___12774 + (1));
i__5727__auto___12774 = G__12775;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$step(v_seqs){
var increment = (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5802__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null, i)));
if(temp__5802__auto__){
var rst = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__12776 = (i - (1));
var G__12777 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null, i)));
i = G__12776;
v_seqs__$2 = G__12777;
continue;
}
}
break;
}
});
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,(function (){
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$step(increment(v_seqs));
}),null,null)));
} else {
return null;
}
});
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,(function (){
return step(v_original_seqs);
}),null,null));
} else {
return null;
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.cartesian_product.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.cartesian_product.cljs$lang$applyTo = (function (seq12735){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12735));
}));


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.js.map
