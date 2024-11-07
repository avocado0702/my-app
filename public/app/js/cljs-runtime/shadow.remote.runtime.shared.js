goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13982){
var map__13985 = p__13982;
var map__13985__$1 = cljs.core.__destructure_map(map__13985);
var runtime = map__13985__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13985__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14145 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14145)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13997 = runtime;
var G__13998 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14145);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13997,G__13998) : shadow.remote.runtime.shared.process.call(null, G__13997,G__13998));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13999,res){
var map__14000 = p__13999;
var map__14000__$1 = cljs.core.__destructure_map(map__14000);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14000__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14000__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14001 = res;
var G__14001__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14001,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14001);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14001__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14001__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14007 = arguments.length;
switch (G__14007) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14011,msg,handlers,timeout_after_ms){
var map__14012 = p__14011;
var map__14012__$1 = cljs.core.__destructure_map(map__14012);
var runtime = map__14012__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14012__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14152 = arguments.length;
var i__5727__auto___14153 = (0);
while(true){
if((i__5727__auto___14153 < len__5726__auto___14152)){
args__5732__auto__.push((arguments[i__5727__auto___14153]));

var G__14157 = (i__5727__auto___14153 + (1));
i__5727__auto___14153 = G__14157;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14022,ev,args){
var map__14023 = p__14022;
var map__14023__$1 = cljs.core.__destructure_map(map__14023);
var runtime = map__14023__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14023__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14025 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14028 = null;
var count__14029 = (0);
var i__14030 = (0);
while(true){
if((i__14030 < count__14029)){
var ext = chunk__14028.cljs$core$IIndexed$_nth$arity$2(null, i__14030);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14158 = seq__14025;
var G__14159 = chunk__14028;
var G__14160 = count__14029;
var G__14161 = (i__14030 + (1));
seq__14025 = G__14158;
chunk__14028 = G__14159;
count__14029 = G__14160;
i__14030 = G__14161;
continue;
} else {
var G__14162 = seq__14025;
var G__14163 = chunk__14028;
var G__14164 = count__14029;
var G__14165 = (i__14030 + (1));
seq__14025 = G__14162;
chunk__14028 = G__14163;
count__14029 = G__14164;
i__14030 = G__14165;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14025);
if(temp__5804__auto__){
var seq__14025__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14025__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14025__$1);
var G__14166 = cljs.core.chunk_rest(seq__14025__$1);
var G__14167 = c__5525__auto__;
var G__14168 = cljs.core.count(c__5525__auto__);
var G__14169 = (0);
seq__14025 = G__14166;
chunk__14028 = G__14167;
count__14029 = G__14168;
i__14030 = G__14169;
continue;
} else {
var ext = cljs.core.first(seq__14025__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14174 = cljs.core.next(seq__14025__$1);
var G__14175 = null;
var G__14176 = (0);
var G__14177 = (0);
seq__14025 = G__14174;
chunk__14028 = G__14175;
count__14029 = G__14176;
i__14030 = G__14177;
continue;
} else {
var G__14178 = cljs.core.next(seq__14025__$1);
var G__14179 = null;
var G__14180 = (0);
var G__14181 = (0);
seq__14025 = G__14178;
chunk__14028 = G__14179;
count__14029 = G__14180;
i__14030 = G__14181;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14014){
var G__14015 = cljs.core.first(seq14014);
var seq14014__$1 = cljs.core.next(seq14014);
var G__14016 = cljs.core.first(seq14014__$1);
var seq14014__$2 = cljs.core.next(seq14014__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14015,G__14016,seq14014__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14045,p__14046){
var map__14047 = p__14045;
var map__14047__$1 = cljs.core.__destructure_map(map__14047);
var runtime = map__14047__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14047__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14048 = p__14046;
var map__14048__$1 = cljs.core.__destructure_map(map__14048);
var msg = map__14048__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14048__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14050 = cljs.core.deref(state_ref);
var map__14050__$1 = cljs.core.__destructure_map(map__14050);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14050__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14050__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14059,msg){
var map__14060 = p__14059;
var map__14060__$1 = cljs.core.__destructure_map(map__14060);
var runtime = map__14060__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14060__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14064,key,p__14065){
var map__14067 = p__14064;
var map__14067__$1 = cljs.core.__destructure_map(map__14067);
var state = map__14067__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14067__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14068 = p__14065;
var map__14068__$1 = cljs.core.__destructure_map(map__14068);
var spec = map__14068__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14068__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14068__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14072,key,spec){
var map__14074 = p__14072;
var map__14074__$1 = cljs.core.__destructure_map(map__14074);
var runtime = map__14074__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14074__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___14200 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___14200 == null)){
} else {
var on_welcome_14201 = temp__5808__auto___14200;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14201.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14201.cljs$core$IFn$_invoke$arity$0() : on_welcome_14201.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14082_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14082_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14083_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14083_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14084_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14084_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14085_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14085_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14086_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14086_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14092,key){
var map__14093 = p__14092;
var map__14093__$1 = cljs.core.__destructure_map(map__14093);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14093__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14098,msg){
var map__14099 = p__14098;
var map__14099__$1 = cljs.core.__destructure_map(map__14099);
var runtime = map__14099__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14099__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14104,p__14105){
var map__14106 = p__14104;
var map__14106__$1 = cljs.core.__destructure_map(map__14106);
var runtime = map__14106__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14106__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14107 = p__14105;
var map__14107__$1 = cljs.core.__destructure_map(map__14107);
var msg = map__14107__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14107__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14107__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14118 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14120 = null;
var count__14121 = (0);
var i__14122 = (0);
while(true){
if((i__14122 < count__14121)){
var map__14136 = chunk__14120.cljs$core$IIndexed$_nth$arity$2(null, i__14122);
var map__14136__$1 = cljs.core.__destructure_map(map__14136);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14136__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14245 = seq__14118;
var G__14246 = chunk__14120;
var G__14247 = count__14121;
var G__14248 = (i__14122 + (1));
seq__14118 = G__14245;
chunk__14120 = G__14246;
count__14121 = G__14247;
i__14122 = G__14248;
continue;
} else {
var G__14250 = seq__14118;
var G__14251 = chunk__14120;
var G__14252 = count__14121;
var G__14253 = (i__14122 + (1));
seq__14118 = G__14250;
chunk__14120 = G__14251;
count__14121 = G__14252;
i__14122 = G__14253;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14118);
if(temp__5804__auto__){
var seq__14118__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14118__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14118__$1);
var G__14254 = cljs.core.chunk_rest(seq__14118__$1);
var G__14255 = c__5525__auto__;
var G__14256 = cljs.core.count(c__5525__auto__);
var G__14257 = (0);
seq__14118 = G__14254;
chunk__14120 = G__14255;
count__14121 = G__14256;
i__14122 = G__14257;
continue;
} else {
var map__14141 = cljs.core.first(seq__14118__$1);
var map__14141__$1 = cljs.core.__destructure_map(map__14141);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14141__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14260 = cljs.core.next(seq__14118__$1);
var G__14261 = null;
var G__14262 = (0);
var G__14263 = (0);
seq__14118 = G__14260;
chunk__14120 = G__14261;
count__14121 = G__14262;
i__14122 = G__14263;
continue;
} else {
var G__14264 = cljs.core.next(seq__14118__$1);
var G__14265 = null;
var G__14266 = (0);
var G__14267 = (0);
seq__14118 = G__14264;
chunk__14120 = G__14265;
count__14121 = G__14266;
i__14122 = G__14267;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
