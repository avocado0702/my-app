goog.provide('day8.re_frame_10x.navigation.epochs.subs');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","root","day8.re-frame-10x.navigation.epochs.subs/root",-254601515),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__15370,_){
var map__15373 = p__15370;
var map__15373__$1 = cljs.core.__destructure_map(map__15373);
var epochs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15373__$1,new cljs.core.Keyword(null,"epochs","epochs",1796936425));
return epochs;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","filter-str","day8.re-frame-10x.navigation.epochs.subs/filter-str",1529309743),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","root","day8.re-frame-10x.navigation.epochs.subs/root",-254601515)], null),(function (p__15375,_){
var map__15377 = p__15375;
var map__15377__$1 = cljs.core.__destructure_map(map__15377);
var filter_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15377__$1,new cljs.core.Keyword(null,"filter-str","filter-str",1974484789));
return filter_str;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","matches-by-id","day8.re-frame-10x.navigation.epochs.subs/matches-by-id",-1680432408),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","root","day8.re-frame-10x.navigation.epochs.subs/root",-254601515)], null),(function (p__15382,_){
var map__15384 = p__15382;
var map__15384__$1 = cljs.core.__destructure_map(map__15384);
var matches_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15384__$1,new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562));
return matches_by_id;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","events-by-id","day8.re-frame-10x.navigation.epochs.subs/events-by-id",-1071313616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","matches-by-id","day8.re-frame-10x.navigation.epochs.subs/matches-by-id",-1680432408)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","filter-str","day8.re-frame-10x.navigation.epochs.subs/filter-str",1529309743)], null),(function (p__15389,_){
var vec__15390 = p__15389;
var matches_by_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15390,(0),null);
var filter_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15390,(1),null);
var matches_by_id__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"tags","tags",1771418977),day8.re_frame_10x.tools.metamorphic.matched_event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"match-info","match-info",666319879),cljs.core.val], 0))),matches_by_id);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.first,cljs.core._GT_,((cljs.core.seq(filter_str))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (match){
var reg_ex = (function (){try{return cljs.core.re_pattern(filter_str);
}catch (e15393){if((e15393 instanceof Error)){
var e = e15393;
console.error(e);

return (new RegExp(""));
} else {
throw e15393;

}
}})();
var match_string = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(match));
return cljs.core.re_find(reg_ex,match_string);
}),matches_by_id__$1):matches_by_id__$1));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-epoch-id","day8.re-frame-10x.navigation.epochs.subs/selected-epoch-id",279200032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","root","day8.re-frame-10x.navigation.epochs.subs/root",-254601515)], null),(function (p__15394,_){
var map__15395 = p__15394;
var map__15395__$1 = cljs.core.__destructure_map(map__15395);
var selected_epoch_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15395__$1,new cljs.core.Keyword(null,"selected-epoch-id","selected-epoch-id",70601778));
return selected_epoch_id;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","match-ids","day8.re-frame-10x.navigation.epochs.subs/match-ids",846227063),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","root","day8.re-frame-10x.navigation.epochs.subs/root",-254601515)], null),(function (p__15399,_){
var map__15400 = p__15399;
var map__15400__$1 = cljs.core.__destructure_map(map__15400);
var match_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15400__$1,new cljs.core.Keyword(null,"match-ids","match-ids",752973161));
return match_ids;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","matches","day8.re-frame-10x.navigation.epochs.subs/matches",793764100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","root","day8.re-frame-10x.navigation.epochs.subs/root",-254601515)], null),(function (p__15405,_){
var map__15406 = p__15405;
var map__15406__$1 = cljs.core.__destructure_map(map__15406);
var matches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15406__$1,new cljs.core.Keyword(null,"matches","matches",635497998));
return matches;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-match-state","day8.re-frame-10x.navigation.epochs.subs/selected-match-state",-726131883),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","match-ids","day8.re-frame-10x.navigation.epochs.subs/match-ids",846227063)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","matches","day8.re-frame-10x.navigation.epochs.subs/matches",793764100)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","matches-by-id","day8.re-frame-10x.navigation.epochs.subs/matches-by-id",-1680432408)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-epoch-id","day8.re-frame-10x.navigation.epochs.subs/selected-epoch-id",279200032)], null),(function (p__15407,_){
var vec__15408 = p__15407;
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15408,(0),null);
var matches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15408,(1),null);
var matches_by_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15408,(2),null);
var selected_epoch_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15408,(3),null);
if((selected_epoch_id == null)){
return cljs.core.last(matches);
} else {
if((selected_epoch_id < cljs.core.first(match_ids))){
return cljs.core.first(matches);
} else {
if((selected_epoch_id > cljs.core.last(match_ids))){
return cljs.core.last(matches);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(matches_by_id,selected_epoch_id);

}
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-match","day8.re-frame-10x.navigation.epochs.subs/selected-match",1964592032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-match-state","day8.re-frame-10x.navigation.epochs.subs/selected-match-state",-726131883)], null),(function (p__15414,_){
var map__15415 = p__15414;
var map__15415__$1 = cljs.core.__destructure_map(map__15415);
var match_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15415__$1,new cljs.core.Keyword(null,"match-info","match-info",666319879));
return match_info;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-event-trace","day8.re-frame-10x.navigation.epochs.subs/selected-event-trace",-430284654),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-match","day8.re-frame-10x.navigation.epochs.subs/selected-match",1964592032)], null),(function (match,_){
return day8.re_frame_10x.tools.metamorphic.matched_event(match);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-event","day8.re-frame-10x.navigation.epochs.subs/selected-event",16118072),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-event-trace","day8.re-frame-10x.navigation.epochs.subs/selected-event-trace",-430284654)], null),(function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","number-of-matches","day8.re-frame-10x.navigation.epochs.subs/number-of-matches",-1857513637),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","matches","day8.re-frame-10x.navigation.epochs.subs/matches",793764100)], null),(function (matches,_){
return cljs.core.count(matches);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-event-index","day8.re-frame-10x.navigation.epochs.subs/selected-event-index",1528642882),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","root","day8.re-frame-10x.navigation.epochs.subs/root",-254601515)], null),(function (p__15420,_){
var map__15421 = p__15420;
var map__15421__$1 = cljs.core.__destructure_map(map__15421);
var selected_epoch_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15421__$1,new cljs.core.Keyword(null,"selected-epoch-index","selected-epoch-index",1788553164));
return selected_epoch_index;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","beginning-trace-id","day8.re-frame-10x.navigation.epochs.subs/beginning-trace-id",1547666129),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-match","day8.re-frame-10x.navigation.epochs.subs/selected-match",1964592032)], null),(function (match,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","ending-trace-id","day8.re-frame-10x.navigation.epochs.subs/ending-trace-id",-392642523),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-match","day8.re-frame-10x.navigation.epochs.subs/selected-match",1964592032)], null),(function (match,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","older-epochs-available?","day8.re-frame-10x.navigation.epochs.subs/older-epochs-available?",1764549111),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-epoch-id","day8.re-frame-10x.navigation.epochs.subs/selected-epoch-id",279200032)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","match-ids","day8.re-frame-10x.navigation.epochs.subs/match-ids",846227063)], null),(function (p__15424,_){
var vec__15425 = p__15424;
var selected_epoch_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15425,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15425,(1),null);
return ((((1) < cljs.core.count(match_ids))) && ((((selected_epoch_id == null)) || ((selected_epoch_id > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(match_ids,(0)))))));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","newer-epochs-available?","day8.re-frame-10x.navigation.epochs.subs/newer-epochs-available?",214739263),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-epoch-id","day8.re-frame-10x.navigation.epochs.subs/selected-epoch-id",279200032)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","match-ids","day8.re-frame-10x.navigation.epochs.subs/match-ids",846227063)], null),(function (p__15432,_){
var vec__15433 = p__15432;
var selected_epoch_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15433,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15433,(1),null);
return ((((1) < cljs.core.count(match_ids))) && ((((!((selected_epoch_id == null)))) && ((selected_epoch_id < day8.re_frame_10x.tools.coll.last_in_vec(match_ids))))));
})], 0));

//# sourceMappingURL=day8.re_frame_10x.navigation.epochs.subs.js.map
