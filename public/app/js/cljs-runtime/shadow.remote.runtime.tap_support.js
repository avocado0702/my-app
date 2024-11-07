goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__22063,p__22064){
var map__22065 = p__22063;
var map__22065__$1 = cljs.core.__destructure_map(map__22065);
var svc = map__22065__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22065__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22065__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22065__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__22066 = p__22064;
var map__22066__$1 = cljs.core.__destructure_map(map__22066);
var msg = map__22066__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22066__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22066__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22066__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22066__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__22072,p__22073){
var map__22074 = p__22072;
var map__22074__$1 = cljs.core.__destructure_map(map__22074);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22074__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__22075 = p__22073;
var map__22075__$1 = cljs.core.__destructure_map(map__22075);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22075__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__22079,p__22080){
var map__22081 = p__22079;
var map__22081__$1 = cljs.core.__destructure_map(map__22081);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22081__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22081__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__22082 = p__22080;
var map__22082__$1 = cljs.core.__destructure_map(map__22082);
var msg = map__22082__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22082__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__22086,tid){
var map__22087 = p__22086;
var map__22087__$1 = cljs.core.__destructure_map(map__22087);
var svc = map__22087__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22087__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__22097 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__22098 = null;
var count__22099 = (0);
var i__22100 = (0);
while(true){
if((i__22100 < count__22099)){
var vec__22111 = chunk__22098.cljs$core$IIndexed$_nth$arity$2(null, i__22100);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22111,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22111,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__22153 = seq__22097;
var G__22154 = chunk__22098;
var G__22155 = count__22099;
var G__22156 = (i__22100 + (1));
seq__22097 = G__22153;
chunk__22098 = G__22154;
count__22099 = G__22155;
i__22100 = G__22156;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22097);
if(temp__5804__auto__){
var seq__22097__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22097__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22097__$1);
var G__22159 = cljs.core.chunk_rest(seq__22097__$1);
var G__22160 = c__5525__auto__;
var G__22161 = cljs.core.count(c__5525__auto__);
var G__22162 = (0);
seq__22097 = G__22159;
chunk__22098 = G__22160;
count__22099 = G__22161;
i__22100 = G__22162;
continue;
} else {
var vec__22115 = cljs.core.first(seq__22097__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22115,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22115,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__22163 = cljs.core.next(seq__22097__$1);
var G__22164 = null;
var G__22165 = (0);
var G__22166 = (0);
seq__22097 = G__22163;
chunk__22098 = G__22164;
count__22099 = G__22165;
i__22100 = G__22166;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__22090_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__22090_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__22091_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__22091_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__22092_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__22092_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__22093_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__22093_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__22122){
var map__22125 = p__22122;
var map__22125__$1 = cljs.core.__destructure_map(map__22125);
var svc = map__22125__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22125__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22125__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
