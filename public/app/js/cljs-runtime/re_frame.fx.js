goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null, re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__22132 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__22133 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__22133);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___22293 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___22293)){
var new_db_22294 = temp__5804__auto___22293;
var fexpr__22141_22295 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__22141_22295.cljs$core$IFn$_invoke$arity$1 ? fexpr__22141_22295.cljs$core$IFn$_invoke$arity$1(new_db_22294) : fexpr__22141_22295.call(null, new_db_22294));
} else {
}

var seq__22144 = cljs.core.seq(effects_without_db);
var chunk__22145 = null;
var count__22146 = (0);
var i__22147 = (0);
while(true){
if((i__22147 < count__22146)){
var vec__22177 = chunk__22145.cljs$core$IIndexed$_nth$arity$2(null, i__22147);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22177,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22177,(1),null);
var temp__5802__auto___22296 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22296)){
var effect_fn_22298 = temp__5802__auto___22296;
(effect_fn_22298.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22298.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22298.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__22299 = seq__22144;
var G__22300 = chunk__22145;
var G__22301 = count__22146;
var G__22302 = (i__22147 + (1));
seq__22144 = G__22299;
chunk__22145 = G__22300;
count__22146 = G__22301;
i__22147 = G__22302;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22144);
if(temp__5804__auto__){
var seq__22144__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22144__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22144__$1);
var G__22304 = cljs.core.chunk_rest(seq__22144__$1);
var G__22305 = c__5525__auto__;
var G__22306 = cljs.core.count(c__5525__auto__);
var G__22307 = (0);
seq__22144 = G__22304;
chunk__22145 = G__22305;
count__22146 = G__22306;
i__22147 = G__22307;
continue;
} else {
var vec__22181 = cljs.core.first(seq__22144__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22181,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22181,(1),null);
var temp__5802__auto___22309 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22309)){
var effect_fn_22310 = temp__5802__auto___22309;
(effect_fn_22310.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22310.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22310.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__22311 = cljs.core.next(seq__22144__$1);
var G__22312 = null;
var G__22313 = (0);
var G__22314 = (0);
seq__22144 = G__22311;
chunk__22145 = G__22312;
count__22146 = G__22313;
i__22147 = G__22314;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__21544__auto___22315 = re_frame.interop.now();
var duration__21545__auto___22316 = (end__21544__auto___22315 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21545__auto___22316,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__21544__auto___22315);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__22132);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___22317 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___22317)){
var new_db_22318 = temp__5804__auto___22317;
var fexpr__22184_22319 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__22184_22319.cljs$core$IFn$_invoke$arity$1 ? fexpr__22184_22319.cljs$core$IFn$_invoke$arity$1(new_db_22318) : fexpr__22184_22319.call(null, new_db_22318));
} else {
}

var seq__22185 = cljs.core.seq(effects_without_db);
var chunk__22186 = null;
var count__22187 = (0);
var i__22188 = (0);
while(true){
if((i__22188 < count__22187)){
var vec__22200 = chunk__22186.cljs$core$IIndexed$_nth$arity$2(null, i__22188);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22200,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22200,(1),null);
var temp__5802__auto___22320 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22320)){
var effect_fn_22321 = temp__5802__auto___22320;
(effect_fn_22321.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22321.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22321.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__22322 = seq__22185;
var G__22323 = chunk__22186;
var G__22324 = count__22187;
var G__22325 = (i__22188 + (1));
seq__22185 = G__22322;
chunk__22186 = G__22323;
count__22187 = G__22324;
i__22188 = G__22325;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22185);
if(temp__5804__auto__){
var seq__22185__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22185__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22185__$1);
var G__22326 = cljs.core.chunk_rest(seq__22185__$1);
var G__22327 = c__5525__auto__;
var G__22328 = cljs.core.count(c__5525__auto__);
var G__22329 = (0);
seq__22185 = G__22326;
chunk__22186 = G__22327;
count__22187 = G__22328;
i__22188 = G__22329;
continue;
} else {
var vec__22207 = cljs.core.first(seq__22185__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22207,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22207,(1),null);
var temp__5802__auto___22330 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22330)){
var effect_fn_22331 = temp__5802__auto___22330;
(effect_fn_22331.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22331.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22331.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__22332 = cljs.core.next(seq__22185__$1);
var G__22333 = null;
var G__22334 = (0);
var G__22335 = (0);
seq__22185 = G__22332;
chunk__22186 = G__22333;
count__22187 = G__22334;
i__22188 = G__22335;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__22211){
var map__22212 = p__22211;
var map__22212__$1 = cljs.core.__destructure_map(map__22212);
var effect = map__22212__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22212__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22212__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__22221 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__22222 = null;
var count__22223 = (0);
var i__22224 = (0);
while(true){
if((i__22224 < count__22223)){
var effect = chunk__22222.cljs$core$IIndexed$_nth$arity$2(null, i__22224);
re_frame.fx.dispatch_later(effect);


var G__22337 = seq__22221;
var G__22338 = chunk__22222;
var G__22339 = count__22223;
var G__22340 = (i__22224 + (1));
seq__22221 = G__22337;
chunk__22222 = G__22338;
count__22223 = G__22339;
i__22224 = G__22340;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22221);
if(temp__5804__auto__){
var seq__22221__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22221__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22221__$1);
var G__22341 = cljs.core.chunk_rest(seq__22221__$1);
var G__22342 = c__5525__auto__;
var G__22343 = cljs.core.count(c__5525__auto__);
var G__22344 = (0);
seq__22221 = G__22341;
chunk__22222 = G__22342;
count__22223 = G__22343;
i__22224 = G__22344;
continue;
} else {
var effect = cljs.core.first(seq__22221__$1);
re_frame.fx.dispatch_later(effect);


var G__22345 = cljs.core.next(seq__22221__$1);
var G__22346 = null;
var G__22347 = (0);
var G__22348 = (0);
seq__22221 = G__22345;
chunk__22222 = G__22346;
count__22223 = G__22347;
i__22224 = G__22348;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__22229 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__22230 = null;
var count__22231 = (0);
var i__22232 = (0);
while(true){
if((i__22232 < count__22231)){
var vec__22245 = chunk__22230.cljs$core$IIndexed$_nth$arity$2(null, i__22232);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22245,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22245,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___22349 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22349)){
var effect_fn_22350 = temp__5802__auto___22349;
(effect_fn_22350.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22350.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22350.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__22353 = seq__22229;
var G__22354 = chunk__22230;
var G__22355 = count__22231;
var G__22356 = (i__22232 + (1));
seq__22229 = G__22353;
chunk__22230 = G__22354;
count__22231 = G__22355;
i__22232 = G__22356;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22229);
if(temp__5804__auto__){
var seq__22229__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22229__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22229__$1);
var G__22359 = cljs.core.chunk_rest(seq__22229__$1);
var G__22360 = c__5525__auto__;
var G__22361 = cljs.core.count(c__5525__auto__);
var G__22362 = (0);
seq__22229 = G__22359;
chunk__22230 = G__22360;
count__22231 = G__22361;
i__22232 = G__22362;
continue;
} else {
var vec__22249 = cljs.core.first(seq__22229__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22249,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22249,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___22363 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22363)){
var effect_fn_22365 = temp__5802__auto___22363;
(effect_fn_22365.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22365.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22365.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__22368 = cljs.core.next(seq__22229__$1);
var G__22369 = null;
var G__22370 = (0);
var G__22371 = (0);
seq__22229 = G__22368;
chunk__22230 = G__22369;
count__22231 = G__22370;
i__22232 = G__22371;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__22258 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__22259 = null;
var count__22260 = (0);
var i__22261 = (0);
while(true){
if((i__22261 < count__22260)){
var event = chunk__22259.cljs$core$IIndexed$_nth$arity$2(null, i__22261);
re_frame.router.dispatch(event);


var G__22375 = seq__22258;
var G__22376 = chunk__22259;
var G__22377 = count__22260;
var G__22378 = (i__22261 + (1));
seq__22258 = G__22375;
chunk__22259 = G__22376;
count__22260 = G__22377;
i__22261 = G__22378;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22258);
if(temp__5804__auto__){
var seq__22258__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22258__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22258__$1);
var G__22379 = cljs.core.chunk_rest(seq__22258__$1);
var G__22380 = c__5525__auto__;
var G__22381 = cljs.core.count(c__5525__auto__);
var G__22382 = (0);
seq__22258 = G__22379;
chunk__22259 = G__22380;
count__22260 = G__22381;
i__22261 = G__22382;
continue;
} else {
var event = cljs.core.first(seq__22258__$1);
re_frame.router.dispatch(event);


var G__22383 = cljs.core.next(seq__22258__$1);
var G__22384 = null;
var G__22385 = (0);
var G__22386 = (0);
seq__22258 = G__22383;
chunk__22259 = G__22384;
count__22260 = G__22385;
i__22261 = G__22386;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__22280 = cljs.core.seq(value);
var chunk__22281 = null;
var count__22282 = (0);
var i__22283 = (0);
while(true){
if((i__22283 < count__22282)){
var event = chunk__22281.cljs$core$IIndexed$_nth$arity$2(null, i__22283);
clear_event(event);


var G__22388 = seq__22280;
var G__22389 = chunk__22281;
var G__22390 = count__22282;
var G__22391 = (i__22283 + (1));
seq__22280 = G__22388;
chunk__22281 = G__22389;
count__22282 = G__22390;
i__22283 = G__22391;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22280);
if(temp__5804__auto__){
var seq__22280__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22280__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22280__$1);
var G__22392 = cljs.core.chunk_rest(seq__22280__$1);
var G__22393 = c__5525__auto__;
var G__22394 = cljs.core.count(c__5525__auto__);
var G__22395 = (0);
seq__22280 = G__22392;
chunk__22281 = G__22393;
count__22282 = G__22394;
i__22283 = G__22395;
continue;
} else {
var event = cljs.core.first(seq__22280__$1);
clear_event(event);


var G__22397 = cljs.core.next(seq__22280__$1);
var G__22398 = null;
var G__22399 = (0);
var G__22400 = (0);
seq__22280 = G__22397;
chunk__22281 = G__22398;
count__22282 = G__22399;
i__22283 = G__22400;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
