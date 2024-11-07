goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22964 = arguments.length;
var i__5727__auto___22965 = (0);
while(true){
if((i__5727__auto___22965 < len__5726__auto___22964)){
args__5732__auto__.push((arguments[i__5727__auto___22965]));

var G__22966 = (i__5727__auto___22965 + (1));
i__5727__auto___22965 = G__22966;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22679){
var G__22680 = cljs.core.first(seq22679);
var seq22679__$1 = cljs.core.next(seq22679);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22680,seq22679__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22681 = cljs.core.seq(sources);
var chunk__22682 = null;
var count__22683 = (0);
var i__22684 = (0);
while(true){
if((i__22684 < count__22683)){
var map__22692 = chunk__22682.cljs$core$IIndexed$_nth$arity$2(null, i__22684);
var map__22692__$1 = cljs.core.__destructure_map(map__22692);
var src = map__22692__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22692__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22692__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22692__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22692__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22693){var e_22967 = e22693;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22967);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22967.message)].join('')));
}

var G__22968 = seq__22681;
var G__22969 = chunk__22682;
var G__22970 = count__22683;
var G__22971 = (i__22684 + (1));
seq__22681 = G__22968;
chunk__22682 = G__22969;
count__22683 = G__22970;
i__22684 = G__22971;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22681);
if(temp__5804__auto__){
var seq__22681__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22681__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22681__$1);
var G__22972 = cljs.core.chunk_rest(seq__22681__$1);
var G__22973 = c__5525__auto__;
var G__22974 = cljs.core.count(c__5525__auto__);
var G__22975 = (0);
seq__22681 = G__22972;
chunk__22682 = G__22973;
count__22683 = G__22974;
i__22684 = G__22975;
continue;
} else {
var map__22694 = cljs.core.first(seq__22681__$1);
var map__22694__$1 = cljs.core.__destructure_map(map__22694);
var src = map__22694__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22694__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22694__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22694__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22694__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22695){var e_22976 = e22695;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22976);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22976.message)].join('')));
}

var G__22977 = cljs.core.next(seq__22681__$1);
var G__22978 = null;
var G__22979 = (0);
var G__22980 = (0);
seq__22681 = G__22977;
chunk__22682 = G__22978;
count__22683 = G__22979;
i__22684 = G__22980;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22698 = cljs.core.seq(js_requires);
var chunk__22699 = null;
var count__22700 = (0);
var i__22701 = (0);
while(true){
if((i__22701 < count__22700)){
var js_ns = chunk__22699.cljs$core$IIndexed$_nth$arity$2(null, i__22701);
var require_str_22981 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22981);


var G__22982 = seq__22698;
var G__22983 = chunk__22699;
var G__22984 = count__22700;
var G__22985 = (i__22701 + (1));
seq__22698 = G__22982;
chunk__22699 = G__22983;
count__22700 = G__22984;
i__22701 = G__22985;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22698);
if(temp__5804__auto__){
var seq__22698__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22698__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22698__$1);
var G__22986 = cljs.core.chunk_rest(seq__22698__$1);
var G__22987 = c__5525__auto__;
var G__22988 = cljs.core.count(c__5525__auto__);
var G__22989 = (0);
seq__22698 = G__22986;
chunk__22699 = G__22987;
count__22700 = G__22988;
i__22701 = G__22989;
continue;
} else {
var js_ns = cljs.core.first(seq__22698__$1);
var require_str_22990 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22990);


var G__22991 = cljs.core.next(seq__22698__$1);
var G__22992 = null;
var G__22993 = (0);
var G__22994 = (0);
seq__22698 = G__22991;
chunk__22699 = G__22992;
count__22700 = G__22993;
i__22701 = G__22994;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22705){
var map__22706 = p__22705;
var map__22706__$1 = cljs.core.__destructure_map(map__22706);
var msg = map__22706__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22706__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22706__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22707(s__22708){
return (new cljs.core.LazySeq(null,(function (){
var s__22708__$1 = s__22708;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22708__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22713 = cljs.core.first(xs__6360__auto__);
var map__22713__$1 = cljs.core.__destructure_map(map__22713);
var src = map__22713__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22713__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22713__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__22708__$1,map__22713,map__22713__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22706,map__22706__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22707_$_iter__22709(s__22710){
return (new cljs.core.LazySeq(null,((function (s__22708__$1,map__22713,map__22713__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22706,map__22706__$1,msg,info,reload_info){
return (function (){
var s__22710__$1 = s__22710;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22710__$1);
if(temp__5804__auto____$1){
var s__22710__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22710__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22710__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22712 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22711 = (0);
while(true){
if((i__22711 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__22711);
cljs.core.chunk_append(b__22712,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22995 = (i__22711 + (1));
i__22711 = G__22995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22712),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22707_$_iter__22709(cljs.core.chunk_rest(s__22710__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22712),null);
}
} else {
var warning = cljs.core.first(s__22710__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22707_$_iter__22709(cljs.core.rest(s__22710__$2)));
}
} else {
return null;
}
break;
}
});})(s__22708__$1,map__22713,map__22713__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22706,map__22706__$1,msg,info,reload_info))
,null,null));
});})(s__22708__$1,map__22713,map__22713__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22706,map__22706__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22707(cljs.core.rest(s__22708__$1)));
} else {
var G__22996 = cljs.core.rest(s__22708__$1);
s__22708__$1 = G__22996;
continue;
}
} else {
var G__22997 = cljs.core.rest(s__22708__$1);
s__22708__$1 = G__22997;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22714_22998 = cljs.core.seq(warnings);
var chunk__22715_22999 = null;
var count__22716_23000 = (0);
var i__22717_23001 = (0);
while(true){
if((i__22717_23001 < count__22716_23000)){
var map__22720_23002 = chunk__22715_22999.cljs$core$IIndexed$_nth$arity$2(null, i__22717_23001);
var map__22720_23003__$1 = cljs.core.__destructure_map(map__22720_23002);
var w_23004 = map__22720_23003__$1;
var msg_23005__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22720_23003__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22720_23003__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22720_23003__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22720_23003__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23008)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23006),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23007),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23005__$1)].join(''));


var G__23009 = seq__22714_22998;
var G__23010 = chunk__22715_22999;
var G__23011 = count__22716_23000;
var G__23012 = (i__22717_23001 + (1));
seq__22714_22998 = G__23009;
chunk__22715_22999 = G__23010;
count__22716_23000 = G__23011;
i__22717_23001 = G__23012;
continue;
} else {
var temp__5804__auto___23013 = cljs.core.seq(seq__22714_22998);
if(temp__5804__auto___23013){
var seq__22714_23014__$1 = temp__5804__auto___23013;
if(cljs.core.chunked_seq_QMARK_(seq__22714_23014__$1)){
var c__5525__auto___23015 = cljs.core.chunk_first(seq__22714_23014__$1);
var G__23016 = cljs.core.chunk_rest(seq__22714_23014__$1);
var G__23017 = c__5525__auto___23015;
var G__23018 = cljs.core.count(c__5525__auto___23015);
var G__23019 = (0);
seq__22714_22998 = G__23016;
chunk__22715_22999 = G__23017;
count__22716_23000 = G__23018;
i__22717_23001 = G__23019;
continue;
} else {
var map__22721_23020 = cljs.core.first(seq__22714_23014__$1);
var map__22721_23021__$1 = cljs.core.__destructure_map(map__22721_23020);
var w_23022 = map__22721_23021__$1;
var msg_23023__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22721_23021__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22721_23021__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22721_23021__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22721_23021__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23026)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23024),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23025),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23023__$1)].join(''));


var G__23027 = cljs.core.next(seq__22714_23014__$1);
var G__23028 = null;
var G__23029 = (0);
var G__23030 = (0);
seq__22714_22998 = G__23027;
chunk__22715_22999 = G__23028;
count__22716_23000 = G__23029;
i__22717_23001 = G__23030;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22703_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22703_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22722){
var map__22723 = p__22722;
var map__22723__$1 = cljs.core.__destructure_map(map__22723);
var msg = map__22723__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22723__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22723__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22724 = cljs.core.seq(updates);
var chunk__22726 = null;
var count__22727 = (0);
var i__22728 = (0);
while(true){
if((i__22728 < count__22727)){
var path = chunk__22726.cljs$core$IIndexed$_nth$arity$2(null, i__22728);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22838_23031 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22842_23032 = null;
var count__22843_23033 = (0);
var i__22844_23034 = (0);
while(true){
if((i__22844_23034 < count__22843_23033)){
var node_23035 = chunk__22842_23032.cljs$core$IIndexed$_nth$arity$2(null, i__22844_23034);
if(cljs.core.not(node_23035.shadow$old)){
var path_match_23036 = shadow.cljs.devtools.client.browser.match_paths(node_23035.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23036)){
var new_link_23037 = (function (){var G__22870 = node_23035.cloneNode(true);
G__22870.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23036),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22870;
})();
(node_23035.shadow$old = true);

(new_link_23037.onload = ((function (seq__22838_23031,chunk__22842_23032,count__22843_23033,i__22844_23034,seq__22724,chunk__22726,count__22727,i__22728,new_link_23037,path_match_23036,node_23035,path,map__22723,map__22723__$1,msg,updates,reload_info){
return (function (e){
var seq__22871_23038 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22873_23039 = null;
var count__22874_23040 = (0);
var i__22875_23041 = (0);
while(true){
if((i__22875_23041 < count__22874_23040)){
var map__22879_23042 = chunk__22873_23039.cljs$core$IIndexed$_nth$arity$2(null, i__22875_23041);
var map__22879_23043__$1 = cljs.core.__destructure_map(map__22879_23042);
var task_23044 = map__22879_23043__$1;
var fn_str_23045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22879_23043__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22879_23043__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23047 = goog.getObjectByName(fn_str_23045,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23046)].join(''));

(fn_obj_23047.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23047.cljs$core$IFn$_invoke$arity$2(path,new_link_23037) : fn_obj_23047.call(null, path,new_link_23037));


var G__23048 = seq__22871_23038;
var G__23049 = chunk__22873_23039;
var G__23050 = count__22874_23040;
var G__23051 = (i__22875_23041 + (1));
seq__22871_23038 = G__23048;
chunk__22873_23039 = G__23049;
count__22874_23040 = G__23050;
i__22875_23041 = G__23051;
continue;
} else {
var temp__5804__auto___23052 = cljs.core.seq(seq__22871_23038);
if(temp__5804__auto___23052){
var seq__22871_23053__$1 = temp__5804__auto___23052;
if(cljs.core.chunked_seq_QMARK_(seq__22871_23053__$1)){
var c__5525__auto___23054 = cljs.core.chunk_first(seq__22871_23053__$1);
var G__23055 = cljs.core.chunk_rest(seq__22871_23053__$1);
var G__23056 = c__5525__auto___23054;
var G__23057 = cljs.core.count(c__5525__auto___23054);
var G__23058 = (0);
seq__22871_23038 = G__23055;
chunk__22873_23039 = G__23056;
count__22874_23040 = G__23057;
i__22875_23041 = G__23058;
continue;
} else {
var map__22880_23059 = cljs.core.first(seq__22871_23053__$1);
var map__22880_23060__$1 = cljs.core.__destructure_map(map__22880_23059);
var task_23061 = map__22880_23060__$1;
var fn_str_23062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22880_23060__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22880_23060__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23064 = goog.getObjectByName(fn_str_23062,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23063)].join(''));

(fn_obj_23064.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23064.cljs$core$IFn$_invoke$arity$2(path,new_link_23037) : fn_obj_23064.call(null, path,new_link_23037));


var G__23065 = cljs.core.next(seq__22871_23053__$1);
var G__23066 = null;
var G__23067 = (0);
var G__23068 = (0);
seq__22871_23038 = G__23065;
chunk__22873_23039 = G__23066;
count__22874_23040 = G__23067;
i__22875_23041 = G__23068;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23035);
});})(seq__22838_23031,chunk__22842_23032,count__22843_23033,i__22844_23034,seq__22724,chunk__22726,count__22727,i__22728,new_link_23037,path_match_23036,node_23035,path,map__22723,map__22723__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23036], 0));

goog.dom.insertSiblingAfter(new_link_23037,node_23035);


var G__23069 = seq__22838_23031;
var G__23070 = chunk__22842_23032;
var G__23071 = count__22843_23033;
var G__23072 = (i__22844_23034 + (1));
seq__22838_23031 = G__23069;
chunk__22842_23032 = G__23070;
count__22843_23033 = G__23071;
i__22844_23034 = G__23072;
continue;
} else {
var G__23073 = seq__22838_23031;
var G__23074 = chunk__22842_23032;
var G__23075 = count__22843_23033;
var G__23076 = (i__22844_23034 + (1));
seq__22838_23031 = G__23073;
chunk__22842_23032 = G__23074;
count__22843_23033 = G__23075;
i__22844_23034 = G__23076;
continue;
}
} else {
var G__23077 = seq__22838_23031;
var G__23078 = chunk__22842_23032;
var G__23079 = count__22843_23033;
var G__23080 = (i__22844_23034 + (1));
seq__22838_23031 = G__23077;
chunk__22842_23032 = G__23078;
count__22843_23033 = G__23079;
i__22844_23034 = G__23080;
continue;
}
} else {
var temp__5804__auto___23081 = cljs.core.seq(seq__22838_23031);
if(temp__5804__auto___23081){
var seq__22838_23082__$1 = temp__5804__auto___23081;
if(cljs.core.chunked_seq_QMARK_(seq__22838_23082__$1)){
var c__5525__auto___23083 = cljs.core.chunk_first(seq__22838_23082__$1);
var G__23084 = cljs.core.chunk_rest(seq__22838_23082__$1);
var G__23085 = c__5525__auto___23083;
var G__23086 = cljs.core.count(c__5525__auto___23083);
var G__23087 = (0);
seq__22838_23031 = G__23084;
chunk__22842_23032 = G__23085;
count__22843_23033 = G__23086;
i__22844_23034 = G__23087;
continue;
} else {
var node_23088 = cljs.core.first(seq__22838_23082__$1);
if(cljs.core.not(node_23088.shadow$old)){
var path_match_23089 = shadow.cljs.devtools.client.browser.match_paths(node_23088.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23089)){
var new_link_23090 = (function (){var G__22881 = node_23088.cloneNode(true);
G__22881.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23089),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22881;
})();
(node_23088.shadow$old = true);

(new_link_23090.onload = ((function (seq__22838_23031,chunk__22842_23032,count__22843_23033,i__22844_23034,seq__22724,chunk__22726,count__22727,i__22728,new_link_23090,path_match_23089,node_23088,seq__22838_23082__$1,temp__5804__auto___23081,path,map__22723,map__22723__$1,msg,updates,reload_info){
return (function (e){
var seq__22882_23091 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22884_23092 = null;
var count__22885_23093 = (0);
var i__22886_23094 = (0);
while(true){
if((i__22886_23094 < count__22885_23093)){
var map__22890_23095 = chunk__22884_23092.cljs$core$IIndexed$_nth$arity$2(null, i__22886_23094);
var map__22890_23096__$1 = cljs.core.__destructure_map(map__22890_23095);
var task_23097 = map__22890_23096__$1;
var fn_str_23098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22890_23096__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22890_23096__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23100 = goog.getObjectByName(fn_str_23098,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23099)].join(''));

(fn_obj_23100.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23100.cljs$core$IFn$_invoke$arity$2(path,new_link_23090) : fn_obj_23100.call(null, path,new_link_23090));


var G__23101 = seq__22882_23091;
var G__23102 = chunk__22884_23092;
var G__23103 = count__22885_23093;
var G__23104 = (i__22886_23094 + (1));
seq__22882_23091 = G__23101;
chunk__22884_23092 = G__23102;
count__22885_23093 = G__23103;
i__22886_23094 = G__23104;
continue;
} else {
var temp__5804__auto___23105__$1 = cljs.core.seq(seq__22882_23091);
if(temp__5804__auto___23105__$1){
var seq__22882_23106__$1 = temp__5804__auto___23105__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22882_23106__$1)){
var c__5525__auto___23107 = cljs.core.chunk_first(seq__22882_23106__$1);
var G__23108 = cljs.core.chunk_rest(seq__22882_23106__$1);
var G__23109 = c__5525__auto___23107;
var G__23110 = cljs.core.count(c__5525__auto___23107);
var G__23111 = (0);
seq__22882_23091 = G__23108;
chunk__22884_23092 = G__23109;
count__22885_23093 = G__23110;
i__22886_23094 = G__23111;
continue;
} else {
var map__22891_23112 = cljs.core.first(seq__22882_23106__$1);
var map__22891_23113__$1 = cljs.core.__destructure_map(map__22891_23112);
var task_23114 = map__22891_23113__$1;
var fn_str_23115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22891_23113__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22891_23113__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23117 = goog.getObjectByName(fn_str_23115,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23116)].join(''));

(fn_obj_23117.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23117.cljs$core$IFn$_invoke$arity$2(path,new_link_23090) : fn_obj_23117.call(null, path,new_link_23090));


var G__23118 = cljs.core.next(seq__22882_23106__$1);
var G__23119 = null;
var G__23120 = (0);
var G__23121 = (0);
seq__22882_23091 = G__23118;
chunk__22884_23092 = G__23119;
count__22885_23093 = G__23120;
i__22886_23094 = G__23121;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23088);
});})(seq__22838_23031,chunk__22842_23032,count__22843_23033,i__22844_23034,seq__22724,chunk__22726,count__22727,i__22728,new_link_23090,path_match_23089,node_23088,seq__22838_23082__$1,temp__5804__auto___23081,path,map__22723,map__22723__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23089], 0));

goog.dom.insertSiblingAfter(new_link_23090,node_23088);


var G__23122 = cljs.core.next(seq__22838_23082__$1);
var G__23123 = null;
var G__23124 = (0);
var G__23125 = (0);
seq__22838_23031 = G__23122;
chunk__22842_23032 = G__23123;
count__22843_23033 = G__23124;
i__22844_23034 = G__23125;
continue;
} else {
var G__23126 = cljs.core.next(seq__22838_23082__$1);
var G__23127 = null;
var G__23128 = (0);
var G__23129 = (0);
seq__22838_23031 = G__23126;
chunk__22842_23032 = G__23127;
count__22843_23033 = G__23128;
i__22844_23034 = G__23129;
continue;
}
} else {
var G__23130 = cljs.core.next(seq__22838_23082__$1);
var G__23131 = null;
var G__23132 = (0);
var G__23133 = (0);
seq__22838_23031 = G__23130;
chunk__22842_23032 = G__23131;
count__22843_23033 = G__23132;
i__22844_23034 = G__23133;
continue;
}
}
} else {
}
}
break;
}


var G__23134 = seq__22724;
var G__23135 = chunk__22726;
var G__23136 = count__22727;
var G__23137 = (i__22728 + (1));
seq__22724 = G__23134;
chunk__22726 = G__23135;
count__22727 = G__23136;
i__22728 = G__23137;
continue;
} else {
var G__23138 = seq__22724;
var G__23139 = chunk__22726;
var G__23140 = count__22727;
var G__23141 = (i__22728 + (1));
seq__22724 = G__23138;
chunk__22726 = G__23139;
count__22727 = G__23140;
i__22728 = G__23141;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22724);
if(temp__5804__auto__){
var seq__22724__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22724__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22724__$1);
var G__23142 = cljs.core.chunk_rest(seq__22724__$1);
var G__23143 = c__5525__auto__;
var G__23144 = cljs.core.count(c__5525__auto__);
var G__23145 = (0);
seq__22724 = G__23142;
chunk__22726 = G__23143;
count__22727 = G__23144;
i__22728 = G__23145;
continue;
} else {
var path = cljs.core.first(seq__22724__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22892_23146 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22896_23147 = null;
var count__22897_23148 = (0);
var i__22898_23149 = (0);
while(true){
if((i__22898_23149 < count__22897_23148)){
var node_23150 = chunk__22896_23147.cljs$core$IIndexed$_nth$arity$2(null, i__22898_23149);
if(cljs.core.not(node_23150.shadow$old)){
var path_match_23151 = shadow.cljs.devtools.client.browser.match_paths(node_23150.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23151)){
var new_link_23152 = (function (){var G__22924 = node_23150.cloneNode(true);
G__22924.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23151),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22924;
})();
(node_23150.shadow$old = true);

(new_link_23152.onload = ((function (seq__22892_23146,chunk__22896_23147,count__22897_23148,i__22898_23149,seq__22724,chunk__22726,count__22727,i__22728,new_link_23152,path_match_23151,node_23150,path,seq__22724__$1,temp__5804__auto__,map__22723,map__22723__$1,msg,updates,reload_info){
return (function (e){
var seq__22925_23153 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22927_23154 = null;
var count__22928_23155 = (0);
var i__22929_23156 = (0);
while(true){
if((i__22929_23156 < count__22928_23155)){
var map__22933_23157 = chunk__22927_23154.cljs$core$IIndexed$_nth$arity$2(null, i__22929_23156);
var map__22933_23158__$1 = cljs.core.__destructure_map(map__22933_23157);
var task_23159 = map__22933_23158__$1;
var fn_str_23160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22933_23158__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22933_23158__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23162 = goog.getObjectByName(fn_str_23160,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23161)].join(''));

(fn_obj_23162.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23162.cljs$core$IFn$_invoke$arity$2(path,new_link_23152) : fn_obj_23162.call(null, path,new_link_23152));


var G__23163 = seq__22925_23153;
var G__23164 = chunk__22927_23154;
var G__23165 = count__22928_23155;
var G__23166 = (i__22929_23156 + (1));
seq__22925_23153 = G__23163;
chunk__22927_23154 = G__23164;
count__22928_23155 = G__23165;
i__22929_23156 = G__23166;
continue;
} else {
var temp__5804__auto___23167__$1 = cljs.core.seq(seq__22925_23153);
if(temp__5804__auto___23167__$1){
var seq__22925_23168__$1 = temp__5804__auto___23167__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22925_23168__$1)){
var c__5525__auto___23169 = cljs.core.chunk_first(seq__22925_23168__$1);
var G__23170 = cljs.core.chunk_rest(seq__22925_23168__$1);
var G__23171 = c__5525__auto___23169;
var G__23172 = cljs.core.count(c__5525__auto___23169);
var G__23173 = (0);
seq__22925_23153 = G__23170;
chunk__22927_23154 = G__23171;
count__22928_23155 = G__23172;
i__22929_23156 = G__23173;
continue;
} else {
var map__22934_23174 = cljs.core.first(seq__22925_23168__$1);
var map__22934_23175__$1 = cljs.core.__destructure_map(map__22934_23174);
var task_23176 = map__22934_23175__$1;
var fn_str_23177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22934_23175__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22934_23175__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23179 = goog.getObjectByName(fn_str_23177,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23178)].join(''));

(fn_obj_23179.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23179.cljs$core$IFn$_invoke$arity$2(path,new_link_23152) : fn_obj_23179.call(null, path,new_link_23152));


var G__23180 = cljs.core.next(seq__22925_23168__$1);
var G__23181 = null;
var G__23182 = (0);
var G__23183 = (0);
seq__22925_23153 = G__23180;
chunk__22927_23154 = G__23181;
count__22928_23155 = G__23182;
i__22929_23156 = G__23183;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23150);
});})(seq__22892_23146,chunk__22896_23147,count__22897_23148,i__22898_23149,seq__22724,chunk__22726,count__22727,i__22728,new_link_23152,path_match_23151,node_23150,path,seq__22724__$1,temp__5804__auto__,map__22723,map__22723__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23151], 0));

goog.dom.insertSiblingAfter(new_link_23152,node_23150);


var G__23184 = seq__22892_23146;
var G__23185 = chunk__22896_23147;
var G__23186 = count__22897_23148;
var G__23187 = (i__22898_23149 + (1));
seq__22892_23146 = G__23184;
chunk__22896_23147 = G__23185;
count__22897_23148 = G__23186;
i__22898_23149 = G__23187;
continue;
} else {
var G__23188 = seq__22892_23146;
var G__23189 = chunk__22896_23147;
var G__23190 = count__22897_23148;
var G__23191 = (i__22898_23149 + (1));
seq__22892_23146 = G__23188;
chunk__22896_23147 = G__23189;
count__22897_23148 = G__23190;
i__22898_23149 = G__23191;
continue;
}
} else {
var G__23192 = seq__22892_23146;
var G__23193 = chunk__22896_23147;
var G__23194 = count__22897_23148;
var G__23195 = (i__22898_23149 + (1));
seq__22892_23146 = G__23192;
chunk__22896_23147 = G__23193;
count__22897_23148 = G__23194;
i__22898_23149 = G__23195;
continue;
}
} else {
var temp__5804__auto___23196__$1 = cljs.core.seq(seq__22892_23146);
if(temp__5804__auto___23196__$1){
var seq__22892_23197__$1 = temp__5804__auto___23196__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22892_23197__$1)){
var c__5525__auto___23198 = cljs.core.chunk_first(seq__22892_23197__$1);
var G__23199 = cljs.core.chunk_rest(seq__22892_23197__$1);
var G__23200 = c__5525__auto___23198;
var G__23201 = cljs.core.count(c__5525__auto___23198);
var G__23202 = (0);
seq__22892_23146 = G__23199;
chunk__22896_23147 = G__23200;
count__22897_23148 = G__23201;
i__22898_23149 = G__23202;
continue;
} else {
var node_23203 = cljs.core.first(seq__22892_23197__$1);
if(cljs.core.not(node_23203.shadow$old)){
var path_match_23204 = shadow.cljs.devtools.client.browser.match_paths(node_23203.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23204)){
var new_link_23205 = (function (){var G__22935 = node_23203.cloneNode(true);
G__22935.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23204),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22935;
})();
(node_23203.shadow$old = true);

(new_link_23205.onload = ((function (seq__22892_23146,chunk__22896_23147,count__22897_23148,i__22898_23149,seq__22724,chunk__22726,count__22727,i__22728,new_link_23205,path_match_23204,node_23203,seq__22892_23197__$1,temp__5804__auto___23196__$1,path,seq__22724__$1,temp__5804__auto__,map__22723,map__22723__$1,msg,updates,reload_info){
return (function (e){
var seq__22936_23206 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22938_23207 = null;
var count__22939_23208 = (0);
var i__22940_23209 = (0);
while(true){
if((i__22940_23209 < count__22939_23208)){
var map__22944_23210 = chunk__22938_23207.cljs$core$IIndexed$_nth$arity$2(null, i__22940_23209);
var map__22944_23211__$1 = cljs.core.__destructure_map(map__22944_23210);
var task_23212 = map__22944_23211__$1;
var fn_str_23213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22944_23211__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22944_23211__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23215 = goog.getObjectByName(fn_str_23213,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23214)].join(''));

(fn_obj_23215.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23215.cljs$core$IFn$_invoke$arity$2(path,new_link_23205) : fn_obj_23215.call(null, path,new_link_23205));


var G__23216 = seq__22936_23206;
var G__23217 = chunk__22938_23207;
var G__23218 = count__22939_23208;
var G__23219 = (i__22940_23209 + (1));
seq__22936_23206 = G__23216;
chunk__22938_23207 = G__23217;
count__22939_23208 = G__23218;
i__22940_23209 = G__23219;
continue;
} else {
var temp__5804__auto___23220__$2 = cljs.core.seq(seq__22936_23206);
if(temp__5804__auto___23220__$2){
var seq__22936_23221__$1 = temp__5804__auto___23220__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22936_23221__$1)){
var c__5525__auto___23222 = cljs.core.chunk_first(seq__22936_23221__$1);
var G__23223 = cljs.core.chunk_rest(seq__22936_23221__$1);
var G__23224 = c__5525__auto___23222;
var G__23225 = cljs.core.count(c__5525__auto___23222);
var G__23226 = (0);
seq__22936_23206 = G__23223;
chunk__22938_23207 = G__23224;
count__22939_23208 = G__23225;
i__22940_23209 = G__23226;
continue;
} else {
var map__22945_23227 = cljs.core.first(seq__22936_23221__$1);
var map__22945_23228__$1 = cljs.core.__destructure_map(map__22945_23227);
var task_23229 = map__22945_23228__$1;
var fn_str_23230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22945_23228__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22945_23228__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23232 = goog.getObjectByName(fn_str_23230,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23231)].join(''));

(fn_obj_23232.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23232.cljs$core$IFn$_invoke$arity$2(path,new_link_23205) : fn_obj_23232.call(null, path,new_link_23205));


var G__23233 = cljs.core.next(seq__22936_23221__$1);
var G__23234 = null;
var G__23235 = (0);
var G__23236 = (0);
seq__22936_23206 = G__23233;
chunk__22938_23207 = G__23234;
count__22939_23208 = G__23235;
i__22940_23209 = G__23236;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23203);
});})(seq__22892_23146,chunk__22896_23147,count__22897_23148,i__22898_23149,seq__22724,chunk__22726,count__22727,i__22728,new_link_23205,path_match_23204,node_23203,seq__22892_23197__$1,temp__5804__auto___23196__$1,path,seq__22724__$1,temp__5804__auto__,map__22723,map__22723__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23204], 0));

goog.dom.insertSiblingAfter(new_link_23205,node_23203);


var G__23237 = cljs.core.next(seq__22892_23197__$1);
var G__23238 = null;
var G__23239 = (0);
var G__23240 = (0);
seq__22892_23146 = G__23237;
chunk__22896_23147 = G__23238;
count__22897_23148 = G__23239;
i__22898_23149 = G__23240;
continue;
} else {
var G__23241 = cljs.core.next(seq__22892_23197__$1);
var G__23242 = null;
var G__23243 = (0);
var G__23244 = (0);
seq__22892_23146 = G__23241;
chunk__22896_23147 = G__23242;
count__22897_23148 = G__23243;
i__22898_23149 = G__23244;
continue;
}
} else {
var G__23245 = cljs.core.next(seq__22892_23197__$1);
var G__23246 = null;
var G__23247 = (0);
var G__23248 = (0);
seq__22892_23146 = G__23245;
chunk__22896_23147 = G__23246;
count__22897_23148 = G__23247;
i__22898_23149 = G__23248;
continue;
}
}
} else {
}
}
break;
}


var G__23249 = cljs.core.next(seq__22724__$1);
var G__23250 = null;
var G__23251 = (0);
var G__23252 = (0);
seq__22724 = G__23249;
chunk__22726 = G__23250;
count__22727 = G__23251;
i__22728 = G__23252;
continue;
} else {
var G__23253 = cljs.core.next(seq__22724__$1);
var G__23254 = null;
var G__23255 = (0);
var G__23256 = (0);
seq__22724 = G__23253;
chunk__22726 = G__23254;
count__22727 = G__23255;
i__22728 = G__23256;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__22946){
var map__22947 = p__22946;
var map__22947__$1 = cljs.core.__destructure_map(map__22947);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22947__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22948,done,error){
var map__22949 = p__22948;
var map__22949__$1 = cljs.core.__destructure_map(map__22949);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22949__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22950,done,error){
var map__22951 = p__22950;
var map__22951__$1 = cljs.core.__destructure_map(map__22951);
var msg = map__22951__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22951__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22951__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22951__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22952){
var map__22953 = p__22952;
var map__22953__$1 = cljs.core.__destructure_map(map__22953);
var src = map__22953__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22953__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22954 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22954) : done.call(null, G__22954));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22955){
var map__22956 = p__22955;
var map__22956__$1 = cljs.core.__destructure_map(map__22956);
var msg__$1 = map__22956__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22956__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e22957){var ex = e22957;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22958){
var map__22959 = p__22958;
var map__22959__$1 = cljs.core.__destructure_map(map__22959);
var env = map__22959__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22959__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22960){
var map__22961 = p__22960;
var map__22961__$1 = cljs.core.__destructure_map(map__22961);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22961__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22961__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__22962){
var map__22963 = p__22962;
var map__22963__$1 = cljs.core.__destructure_map(map__22963);
var svc = map__22963__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22963__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
