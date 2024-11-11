goog.provide('day8.re_frame_10x.tools.string');
/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.tools.string.pluralize = (function day8$re_frame_10x$tools$string$pluralize(var_args){
var args__5732__auto__ = [];
var len__5726__auto___31490 = arguments.length;
var i__5727__auto___31491 = (0);
while(true){
if((i__5727__auto___31491 < len__5726__auto___31490)){
args__5732__auto__.push((arguments[i__5727__auto___31491]));

var G__31496 = (i__5727__auto___31491 + (1));
i__5727__auto___31491 = G__31496;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__31446){
var vec__31449 = p__31446;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31449,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__5002__auto__ = plural;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.tools.string.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq31430){
var G__31433 = cljs.core.first(seq31430);
var seq31430__$1 = cljs.core.next(seq31430);
var G__31434 = cljs.core.first(seq31430__$1);
var seq31430__$2 = cljs.core.next(seq31430__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31433,G__31434,seq31430__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___31499 = arguments.length;
var i__5727__auto___31500 = (0);
while(true){
if((i__5727__auto___31500 < len__5726__auto___31499)){
args__5732__auto__.push((arguments[i__5727__auto___31500]));

var G__31501 = (i__5727__auto___31500 + (1));
i__5727__auto___31500 = G__31501;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__31474){
var vec__31477 = p__31474;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31477,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__5002__auto__ = plural;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq31466){
var G__31467 = cljs.core.first(seq31466);
var seq31466__$1 = cljs.core.next(seq31466);
var G__31468 = cljs.core.first(seq31466__$1);
var seq31466__$2 = cljs.core.next(seq31466__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31467,G__31468,seq31466__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
