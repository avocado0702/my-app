goog.provide('day8.re_frame_10x.panels.traces.events');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","set-draft-query-type","day8.re-frame-10x.panels.traces.events/set-draft-query-type",-996302456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"draft-query-type","draft-query-type",704274790)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v], null),(function (_,p__30684){
var vec__30685 = p__30684;
var draft_query_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30685,(0),null);
return draft_query_type;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","set-draft-query","day8.re-frame-10x.panels.traces.events/set-draft-query",1714953965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"draft-query","draft-query",2104267934)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v], null),(function (_,p__30689,___$1){
var vec__30690 = p__30689;
var draft_query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30690,(0),null);
return draft_query;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","save-draft-query","day8.re-frame-10x.panels.traces.events/save-draft-query",1729629791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004)], null)], 0))], null),(function (p__30701,_){
var map__30703 = p__30701;
var map__30703__$1 = cljs.core.__destructure_map(map__30703);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30703__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__30709 = db;
var map__30709__$1 = cljs.core.__destructure_map(map__30709);
var draft_query_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30709__$1,new cljs.core.Keyword(null,"draft-query-type","draft-query-type",704274790),new cljs.core.Keyword(null,"contains","contains",676899812));
var draft_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30709__$1,new cljs.core.Keyword(null,"draft-query","draft-query",2104267934));
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(draft_query_type,new cljs.core.Keyword(null,"slower-than","slower-than",1137227767));
if(and__5000__auto__){
return isNaN(parseFloat(draft_query));
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"draft-query-error","draft-query-error",2065783078),true)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"draft-query-error","draft-query-error",2065783078),false),new cljs.core.Keyword(null,"draft-query","draft-query",2104267934),""),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","add-query","day8.re-frame-10x.panels.traces.events/add-query",2139116227),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),draft_query_type,new cljs.core.Keyword(null,"query","query",-1288509510),draft_query], null)], null)], null);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","set-queries","day8.re-frame-10x.panels.traces.events/set-queries",1424273266),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"queries","queries",1446291995)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("filter-items")], null),(function (_,p__30715){
var vec__30717 = p__30715;
var filters = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30717,(0),null);
return filters;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","add-query","day8.re-frame-10x.panels.traces.events/add-query",2139116227),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"queries","queries",1446291995)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.unwrap,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("filter-items")], null),(function (filters,p__30724){
var map__30725 = p__30724;
var map__30725__$1 = cljs.core.__destructure_map(map__30725);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30725__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30725__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.truth_(cljs.core.some((function (p1__30721_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(query,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__30721_SHARP_));
}),filters))){
return filters;
} else {
var filters__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slower-than","slower-than",1137227767),type))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__30722_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slower-than","slower-than",1137227767),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__30722_SHARP_));
}),filters):filters);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(filters__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid(),new cljs.core.Keyword(null,"query","query",-1288509510),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"contains","contains",676899812))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"contains-not","contains-not",-698322082)))))?clojure.string.lower_case(query):parseFloat(query)),new cljs.core.Keyword(null,"type","type",1174270348),type], null));
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","remove-query","day8.re-frame-10x.panels.traces.events/remove-query",1784719956),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"queries","queries",1446291995)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.unwrap,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("filter-items")], null),(function (filters,p__30738){
var map__30739 = p__30738;
var map__30739__$1 = cljs.core.__destructure_map(map__30739);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30739__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__30728_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30728_SHARP_),id);
}),filters);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","reset-queries","day8.re-frame-10x.panels.traces.events/reset-queries",823354457),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"queries","queries",1446291995)], null)], 0)),day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("filter-items")], null),(function (_,___$1){
return cljs.core.PersistentVector.EMPTY;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","toggle-categories","day8.re-frame-10x.panels.traces.events/toggle-categories",-389788445),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("categories")], null),(function (old,p__30752){
var vec__30753 = p__30752;
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30753,(0),null);
if(clojure.set.superset_QMARK_(old,new$)){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old,new$);
} else {
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(old,new$);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","set-categories","day8.re-frame-10x.panels.traces.events/set-categories",-494993249),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("categories")], null),(function (_,p__30756){
var vec__30757 = p__30756;
var categories = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30757,(0),null);
return categories;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","set-filter-by-selected-epoch?","day8.re-frame-10x.panels.traces.events/set-filter-by-selected-epoch?",34289483),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-by-selected-epoch?","filter-by-selected-epoch?",1580686425)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("show-epoch-traces?")], null),(function (_,p__30766){
var vec__30767 = p__30766;
var filter_by_selected_epoch_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30767,(0),null);
return filter_by_selected_epoch_QMARK_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","toggle-expansions","day8.re-frame-10x.panels.traces.events/toggle-expansions",505682376),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null)], 0))], null),(function (expansions,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(expansions,new cljs.core.Keyword(null,"overrides","overrides",1738628867),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"show-all?","show-all?",503618702),cljs.core.not);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","toggle-expansion","day8.re-frame-10x.panels.traces.events/toggle-expansion",-1981422943),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v], null),(function (expansions,p__30781){
var vec__30782 = p__30781;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30782,(0),null);
var showing_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overrides","overrides",1738628867),id], null),new cljs.core.Keyword(null,"show-all?","show-all?",503618702).cljs$core$IFn$_invoke$arity$1(expansions));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overrides","overrides",1738628867),id], null),(function (p1__30776_SHARP_){
if(cljs.core.truth_(showing_QMARK_)){
return false;
} else {
return cljs.core.not(p1__30776_SHARP_);
}
}));
}));

//# sourceMappingURL=day8.re_frame_10x.panels.traces.events.js.map
