goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__21570){
var map__21571 = p__21570;
var map__21571__$1 = cljs.core.__destructure_map(map__21571);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21571__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21571__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21571__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21571__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5002__auto__ = child_of;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__21576_21617 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__21577_21618 = null;
var count__21578_21619 = (0);
var i__21579_21620 = (0);
while(true){
if((i__21579_21620 < count__21578_21619)){
var vec__21592_21621 = chunk__21577_21618.cljs$core$IIndexed$_nth$arity$2(null, i__21579_21620);
var k_21622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21592_21621,(0),null);
var cb_21623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21592_21621,(1),null);
try{var G__21597_21624 = cljs.core.deref(re_frame.trace.traces);
(cb_21623.cljs$core$IFn$_invoke$arity$1 ? cb_21623.cljs$core$IFn$_invoke$arity$1(G__21597_21624) : cb_21623.call(null, G__21597_21624));
}catch (e21596){var e_21625 = e21596;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_21622,"while storing",cljs.core.deref(re_frame.trace.traces),e_21625], 0));
}

var G__21626 = seq__21576_21617;
var G__21627 = chunk__21577_21618;
var G__21628 = count__21578_21619;
var G__21629 = (i__21579_21620 + (1));
seq__21576_21617 = G__21626;
chunk__21577_21618 = G__21627;
count__21578_21619 = G__21628;
i__21579_21620 = G__21629;
continue;
} else {
var temp__5804__auto___21630 = cljs.core.seq(seq__21576_21617);
if(temp__5804__auto___21630){
var seq__21576_21631__$1 = temp__5804__auto___21630;
if(cljs.core.chunked_seq_QMARK_(seq__21576_21631__$1)){
var c__5525__auto___21632 = cljs.core.chunk_first(seq__21576_21631__$1);
var G__21633 = cljs.core.chunk_rest(seq__21576_21631__$1);
var G__21634 = c__5525__auto___21632;
var G__21635 = cljs.core.count(c__5525__auto___21632);
var G__21636 = (0);
seq__21576_21617 = G__21633;
chunk__21577_21618 = G__21634;
count__21578_21619 = G__21635;
i__21579_21620 = G__21636;
continue;
} else {
var vec__21598_21637 = cljs.core.first(seq__21576_21631__$1);
var k_21638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21598_21637,(0),null);
var cb_21639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21598_21637,(1),null);
try{var G__21603_21640 = cljs.core.deref(re_frame.trace.traces);
(cb_21639.cljs$core$IFn$_invoke$arity$1 ? cb_21639.cljs$core$IFn$_invoke$arity$1(G__21603_21640) : cb_21639.call(null, G__21603_21640));
}catch (e21601){var e_21641 = e21601;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_21638,"while storing",cljs.core.deref(re_frame.trace.traces),e_21641], 0));
}

var G__21643 = cljs.core.next(seq__21576_21631__$1);
var G__21644 = null;
var G__21645 = (0);
var G__21646 = (0);
seq__21576_21617 = G__21643;
chunk__21577_21618 = G__21644;
count__21578_21619 = G__21645;
i__21579_21620 = G__21646;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null, ));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
