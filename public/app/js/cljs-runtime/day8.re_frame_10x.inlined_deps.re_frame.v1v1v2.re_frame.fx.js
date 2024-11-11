goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null, day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__14621 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__14622 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__14622);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___14771 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___14771)){
var new_db_14772 = temp__5804__auto___14771;
var fexpr__14623_14773 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__14623_14773.cljs$core$IFn$_invoke$arity$1 ? fexpr__14623_14773.cljs$core$IFn$_invoke$arity$1(new_db_14772) : fexpr__14623_14773.call(null, new_db_14772));
} else {
}

var seq__14624 = cljs.core.seq(effects_without_db);
var chunk__14625 = null;
var count__14626 = (0);
var i__14627 = (0);
while(true){
if((i__14627 < count__14626)){
var vec__14639 = chunk__14625.cljs$core$IIndexed$_nth$arity$2(null, i__14627);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14639,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14639,(1),null);
var temp__5802__auto___14774 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14774)){
var effect_fn_14775 = temp__5802__auto___14774;
(effect_fn_14775.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14775.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14775.call(null, effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14777 = seq__14624;
var G__14778 = chunk__14625;
var G__14779 = count__14626;
var G__14780 = (i__14627 + (1));
seq__14624 = G__14777;
chunk__14625 = G__14778;
count__14626 = G__14779;
i__14627 = G__14780;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14624);
if(temp__5804__auto__){
var seq__14624__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14624__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14624__$1);
var G__14784 = cljs.core.chunk_rest(seq__14624__$1);
var G__14785 = c__5525__auto__;
var G__14786 = cljs.core.count(c__5525__auto__);
var G__14787 = (0);
seq__14624 = G__14784;
chunk__14625 = G__14785;
count__14626 = G__14786;
i__14627 = G__14787;
continue;
} else {
var vec__14642 = cljs.core.first(seq__14624__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14642,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14642,(1),null);
var temp__5802__auto___14788 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14788)){
var effect_fn_14791 = temp__5802__auto___14788;
(effect_fn_14791.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14791.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14791.call(null, effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14793 = cljs.core.next(seq__14624__$1);
var G__14794 = null;
var G__14795 = (0);
var G__14796 = (0);
seq__14624 = G__14793;
chunk__14625 = G__14794;
count__14626 = G__14795;
i__14627 = G__14796;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__13244__auto___14797 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__13245__auto___14798 = (end__13244__auto___14797 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13245__auto___14798,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__13244__auto___14797);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__14621);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___14799 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___14799)){
var new_db_14800 = temp__5804__auto___14799;
var fexpr__14647_14801 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__14647_14801.cljs$core$IFn$_invoke$arity$1 ? fexpr__14647_14801.cljs$core$IFn$_invoke$arity$1(new_db_14800) : fexpr__14647_14801.call(null, new_db_14800));
} else {
}

var seq__14648 = cljs.core.seq(effects_without_db);
var chunk__14649 = null;
var count__14650 = (0);
var i__14651 = (0);
while(true){
if((i__14651 < count__14650)){
var vec__14666 = chunk__14649.cljs$core$IIndexed$_nth$arity$2(null, i__14651);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14666,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14666,(1),null);
var temp__5802__auto___14807 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14807)){
var effect_fn_14808 = temp__5802__auto___14807;
(effect_fn_14808.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14808.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14808.call(null, effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14809 = seq__14648;
var G__14810 = chunk__14649;
var G__14811 = count__14650;
var G__14812 = (i__14651 + (1));
seq__14648 = G__14809;
chunk__14649 = G__14810;
count__14650 = G__14811;
i__14651 = G__14812;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14648);
if(temp__5804__auto__){
var seq__14648__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14648__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14648__$1);
var G__14813 = cljs.core.chunk_rest(seq__14648__$1);
var G__14814 = c__5525__auto__;
var G__14815 = cljs.core.count(c__5525__auto__);
var G__14816 = (0);
seq__14648 = G__14813;
chunk__14649 = G__14814;
count__14650 = G__14815;
i__14651 = G__14816;
continue;
} else {
var vec__14671 = cljs.core.first(seq__14648__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14671,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14671,(1),null);
var temp__5802__auto___14817 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14817)){
var effect_fn_14819 = temp__5802__auto___14817;
(effect_fn_14819.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14819.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14819.call(null, effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14821 = cljs.core.next(seq__14648__$1);
var G__14822 = null;
var G__14823 = (0);
var G__14824 = (0);
seq__14648 = G__14821;
chunk__14649 = G__14822;
count__14650 = G__14823;
i__14651 = G__14824;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__14680){
var map__14681 = p__14680;
var map__14681__$1 = cljs.core.__destructure_map(map__14681);
var effect = map__14681__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14681__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14681__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__14695 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__14696 = null;
var count__14697 = (0);
var i__14698 = (0);
while(true){
if((i__14698 < count__14697)){
var effect = chunk__14696.cljs$core$IIndexed$_nth$arity$2(null, i__14698);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__14827 = seq__14695;
var G__14828 = chunk__14696;
var G__14829 = count__14697;
var G__14830 = (i__14698 + (1));
seq__14695 = G__14827;
chunk__14696 = G__14828;
count__14697 = G__14829;
i__14698 = G__14830;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14695);
if(temp__5804__auto__){
var seq__14695__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14695__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14695__$1);
var G__14831 = cljs.core.chunk_rest(seq__14695__$1);
var G__14832 = c__5525__auto__;
var G__14833 = cljs.core.count(c__5525__auto__);
var G__14834 = (0);
seq__14695 = G__14831;
chunk__14696 = G__14832;
count__14697 = G__14833;
i__14698 = G__14834;
continue;
} else {
var effect = cljs.core.first(seq__14695__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__14836 = cljs.core.next(seq__14695__$1);
var G__14837 = null;
var G__14838 = (0);
var G__14839 = (0);
seq__14695 = G__14836;
chunk__14696 = G__14837;
count__14697 = G__14838;
i__14698 = G__14839;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__14706 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__14707 = null;
var count__14708 = (0);
var i__14709 = (0);
while(true){
if((i__14709 < count__14708)){
var vec__14728 = chunk__14707.cljs$core$IIndexed$_nth$arity$2(null, i__14709);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14728,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14728,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___14841 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14841)){
var effect_fn_14842 = temp__5802__auto___14841;
(effect_fn_14842.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14842.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14842.call(null, effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__14843 = seq__14706;
var G__14844 = chunk__14707;
var G__14845 = count__14708;
var G__14846 = (i__14709 + (1));
seq__14706 = G__14843;
chunk__14707 = G__14844;
count__14708 = G__14845;
i__14709 = G__14846;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14706);
if(temp__5804__auto__){
var seq__14706__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14706__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14706__$1);
var G__14847 = cljs.core.chunk_rest(seq__14706__$1);
var G__14848 = c__5525__auto__;
var G__14849 = cljs.core.count(c__5525__auto__);
var G__14850 = (0);
seq__14706 = G__14847;
chunk__14707 = G__14848;
count__14708 = G__14849;
i__14709 = G__14850;
continue;
} else {
var vec__14735 = cljs.core.first(seq__14706__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14735,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14735,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___14856 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14856)){
var effect_fn_14858 = temp__5802__auto___14856;
(effect_fn_14858.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14858.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14858.call(null, effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__14859 = cljs.core.next(seq__14706__$1);
var G__14860 = null;
var G__14861 = (0);
var G__14862 = (0);
seq__14706 = G__14859;
chunk__14707 = G__14860;
count__14708 = G__14861;
i__14709 = G__14862;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__14744 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__14745 = null;
var count__14746 = (0);
var i__14747 = (0);
while(true){
if((i__14747 < count__14746)){
var event = chunk__14745.cljs$core$IIndexed$_nth$arity$2(null, i__14747);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__14863 = seq__14744;
var G__14864 = chunk__14745;
var G__14865 = count__14746;
var G__14866 = (i__14747 + (1));
seq__14744 = G__14863;
chunk__14745 = G__14864;
count__14746 = G__14865;
i__14747 = G__14866;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14744);
if(temp__5804__auto__){
var seq__14744__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14744__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14744__$1);
var G__14867 = cljs.core.chunk_rest(seq__14744__$1);
var G__14868 = c__5525__auto__;
var G__14869 = cljs.core.count(c__5525__auto__);
var G__14870 = (0);
seq__14744 = G__14867;
chunk__14745 = G__14868;
count__14746 = G__14869;
i__14747 = G__14870;
continue;
} else {
var event = cljs.core.first(seq__14744__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__14871 = cljs.core.next(seq__14744__$1);
var G__14872 = null;
var G__14873 = (0);
var G__14874 = (0);
seq__14744 = G__14871;
chunk__14745 = G__14872;
count__14746 = G__14873;
i__14747 = G__14874;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__14758 = cljs.core.seq(value);
var chunk__14759 = null;
var count__14760 = (0);
var i__14761 = (0);
while(true){
if((i__14761 < count__14760)){
var event = chunk__14759.cljs$core$IIndexed$_nth$arity$2(null, i__14761);
clear_event(event);


var G__14875 = seq__14758;
var G__14876 = chunk__14759;
var G__14877 = count__14760;
var G__14878 = (i__14761 + (1));
seq__14758 = G__14875;
chunk__14759 = G__14876;
count__14760 = G__14877;
i__14761 = G__14878;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14758);
if(temp__5804__auto__){
var seq__14758__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14758__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14758__$1);
var G__14879 = cljs.core.chunk_rest(seq__14758__$1);
var G__14880 = c__5525__auto__;
var G__14881 = cljs.core.count(c__5525__auto__);
var G__14882 = (0);
seq__14758 = G__14879;
chunk__14759 = G__14880;
count__14760 = G__14881;
i__14761 = G__14882;
continue;
} else {
var event = cljs.core.first(seq__14758__$1);
clear_event(event);


var G__14883 = cljs.core.next(seq__14758__$1);
var G__14884 = null;
var G__14885 = (0);
var G__14886 = (0);
seq__14758 = G__14883;
chunk__14759 = G__14884;
count__14760 = G__14885;
i__14761 = G__14886;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
