goog.provide('sci.impl.evaluator');

sci.impl.evaluator.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core. Note: and is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_and = (function sci$impl$evaluator$eval_and(ctx,bindings,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,x) : sci.impl.evaluator.eval.call(null, ctx,bindings,x));
if(cljs.core.truth_(v)){
var xs = cljs.core.next(args__$2);
if(xs){
var G__24680 = xs;
args__$2 = G__24680;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core. Note: or is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_or = (function sci$impl$evaluator$eval_or(ctx,bindings,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,x) : sci.impl.evaluator.eval.call(null, ctx,bindings,x));
if(cljs.core.truth_(v)){
return v;
} else {
var xs = cljs.core.next(args__$2);
if(xs){
var G__24681 = xs;
args__$2 = G__24681;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.evaluator.eval_let = (function sci$impl$evaluator$eval_let(ctx,bindings,let_bindings,exprs){
var vec__23325 = (function (){var ctx__$1 = ctx;
var bindings__$1 = bindings;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx__$1,bindings__$1,let_val) : sci.impl.evaluator.eval.call(null, ctx__$1,bindings__$1,let_val));
var bindings__$2 = cljs.core._assoc(bindings__$1,let_name,v);
if(cljs.core.not(rest_let_bindings)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx__$1,bindings__$2], null);
} else {
var G__24682 = ctx__$1;
var G__24683 = bindings__$2;
var G__24684 = rest_let_bindings;
ctx__$1 = G__24682;
bindings__$1 = G__24683;
let_bindings__$1 = G__24684;
continue;
}
break;
}
})();
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23325,(0),null);
var bindings__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23325,(1),null);
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx__$1,bindings__$1,e) : sci.impl.evaluator.eval.call(null, ctx__$1,bindings__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__24685 = nexprs;
exprs__$1 = G__24685;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
});
sci.impl.evaluator.handle_meta = (function sci$impl$evaluator$handle_meta(ctx,bindings,m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var temp__5802__auto__ = cljs.core.meta(m);
if(cljs.core.truth_(temp__5802__auto__)){
var mm = temp__5802__auto__;
if(cljs.core.truth_((cljs.core.truth_(mm)?mm.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null))){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,m) : sci.impl.evaluator.eval.call(null, ctx,bindings,m));
} else {
return m;
}
} else {
return m;
}
})(),new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978));
});
sci.impl.evaluator.eval_map = (function sci$impl$evaluator$eval_map(ctx,bindings,expr){
var temp__5802__auto__ = cljs.core.meta(expr);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
if(cljs.core.truth_((function (){var G__23345 = new cljs.core.Keyword(null,"eval","eval",-1103567905);
var G__23346 = new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(m);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23345,G__23346) : sci.impl.utils.kw_identical_QMARK_.call(null, G__23345,G__23346));
})())){
return cljs.core.with_meta(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23341_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__23341_SHARP_) : sci.impl.evaluator.eval.call(null, ctx,bindings,p1__23341_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23342_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__23342_SHARP_) : sci.impl.evaluator.eval.call(null, ctx,bindings,p1__23342_SHARP_));
}),cljs.core.vals(expr))),sci.impl.evaluator.handle_meta(ctx,bindings,m));
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.evaluator.eval_def = (function sci$impl$evaluator$eval_def(ctx,bindings,var_name,init,m){
var init__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,init) : sci.impl.evaluator.eval.call(null, ctx,bindings,init));
var m__$1 = (function (){var or__5002__auto__ = m;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.meta(var_name);
}
})();
var m__$2 = sci.impl.evaluator.eval_map(ctx,bindings,m__$1);
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$2));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn);
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev),false):prev);
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null, new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__23362 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23362,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$2], 0));

return G__23362;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$2], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn),var_name);
});
sci.impl.evaluator.eval_case = (function sci$impl$evaluator$eval_case(var_args){
var G__23367 = arguments.length;
switch (G__23367) {
case 4:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,case_map,case_val){
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_val) : sci.impl.evaluator.eval.call(null, ctx,bindings,case_val));
var temp__5802__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__23371 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23371,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23371,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,found) : sci.impl.evaluator.eval.call(null, ctx,bindings,found));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}));

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5 = (function (ctx,bindings,case_map,case_val,case_default){
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_val) : sci.impl.evaluator.eval.call(null, ctx,bindings,case_val));
var temp__5802__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__23378 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23378,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23378,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,found) : sci.impl.evaluator.eval.call(null, ctx,bindings,found));
} else {
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_default) : sci.impl.evaluator.eval.call(null, ctx,bindings,case_default));
}
}));

(sci.impl.evaluator.eval_case.cljs$lang$maxFixedArity = 5);

sci.impl.evaluator.eval_try = (function sci$impl$evaluator$eval_try(ctx,bindings,body,catches,finally$){
try{var _STAR_in_try_STAR__orig_val__23394 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__23395 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__23395);

try{return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,body) : sci.impl.evaluator.eval.call(null, ctx,bindings,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__23394);
}}catch (e23383){if((e23383 instanceof Error)){
var e = e23383;
var temp__5802__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_((function (){var or__5002__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),clazz) : sci.impl.utils.kw_identical_QMARK_.call(null, new cljs.core.Keyword(null,"default","default",-1987822328),clazz));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if((clazz instanceof sci.impl.types.EvalFn)){
var c__5035__auto__ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,clazz) : sci.impl.evaluator.eval.call(null, ctx,bindings,clazz));
var x__5036__auto__ = e;
return (x__5036__auto__ instanceof c__5035__auto__);
} else {
return (e instanceof clazz);
}
}
})())){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.evaluator","try-result","sci.impl.evaluator/try-result",-1394897780),(function (){var G__23386 = ctx;
var G__23387 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings,new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c),e);
var G__23388 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23386,G__23387,G__23388) : sci.impl.evaluator.eval.call(null, G__23386,G__23387,G__23388));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__23391 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23391,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23391,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,body);
}
} else {
throw e23383;

}
}finally {(sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,finally$) : sci.impl.evaluator.eval.call(null, ctx,bindings,finally$));
}});
sci.impl.evaluator.eval_static_method_invocation = (function sci$impl$evaluator$eval_static_method_invocation(ctx,bindings,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23399_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__23399_SHARP_) : sci.impl.evaluator.eval.call(null, ctx,bindings,p1__23399_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.evaluator.eval_instance_method_invocation = (function sci$impl$evaluator$eval_instance_method_invocation(ctx,bindings,instance_expr,method_str,field_access,args,allowed){
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,instance_expr) : sci.impl.evaluator.eval.call(null, ctx,bindings,instance_expr));
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.map_QMARK_(instance_expr_STAR_);
if(and__5000__auto__){
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(instance_expr_STAR_));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instance_expr_STAR_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_str));
} else {
var instance_class = (function (){var or__5002__auto__ = tag_class;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var class__GT_opts = new cljs.core.Keyword(null,"class->opts","class->opts",2061906477).cljs$core$IFn$_invoke$arity$1(ctx);
var allowed_QMARK_ = (function (){var or__5002__auto__ = allowed;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = (function (){var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
})();
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
return console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str));
}
}
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null, instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(allowed_QMARK_)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

if(cljs.core.truth_(field_access)){
return sci.impl.interop.invoke_instance_field(instance_expr_STAR_,target_class,method_str);
} else {
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23406_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__23406_SHARP_) : sci.impl.evaluator.eval.call(null, ctx,bindings,p1__23406_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
}
});
sci.impl.evaluator.eval_resolve = (function sci$impl$evaluator$eval_resolve(var_args){
var G__23561 = arguments.length;
switch (G__23561) {
case 3:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,bindings,sym){
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4(ctx,bindings,null,sym);
}));

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,env,sym){
if(((cljs.core.not(env)) || ((!(cljs.core.contains_QMARK_(env,sym)))))){
var sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,sym) : sci.impl.evaluator.eval.call(null, ctx,bindings,sym));
var res = cljs.core.second((function (){var fexpr__23576 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__23576.cljs$core$IFn$_invoke$arity$3 ? fexpr__23576.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__23576.call(null, ctx,sym__$1,false));
})());
if((res instanceof sci.impl.types.EvalFn)){
return null;
} else {
return res;
}
} else {
return null;
}
}));

(sci.impl.evaluator.eval_resolve.cljs$lang$maxFixedArity = 4);

cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.evaluator.eval_resolve);
sci.impl.evaluator.eval_import = (function sci$impl$evaluator$eval_import(var_args){
var args__5732__auto__ = [];
var len__5726__auto___24716 = arguments.length;
var i__5727__auto___24719 = (0);
while(true){
if((i__5727__auto___24719 < len__5726__auto___24716)){
args__5732__auto__.push((arguments[i__5727__auto___24719]));

var G__24720 = (i__5727__auto___24719 + (1));
i__5727__auto___24719 = G__24720;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23578_SHARP_){
if(((cljs.core.seq_QMARK_(p1__23578_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__23578_SHARP_))))){
return cljs.core.second(p1__23578_SHARP_);
} else {
return p1__23578_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,spec){
var vec__23585 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23585,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23585,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (___$1,class$){
var fq_class_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
var temp__5802__auto__ = sci.impl.interop.resolve_class(ctx,fq_class_name);
if(cljs.core.truth_(temp__5802__auto__)){
var clazz = temp__5802__auto__;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name);

return clazz;
} else {
var temp__5802__auto____$1 = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5802__auto____$1)){
var rec = temp__5802__auto____$1;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,class$], null),rec);

return rec;
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name)].join('')));
}
}
}),null,classes);
}),null,specs);
}));

(sci.impl.evaluator.eval_import.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq23579){
var G__23580 = cljs.core.first(seq23579);
var seq23579__$1 = cljs.core.next(seq23579);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23580,seq23579__$1);
}));

/**
 * Note: various arities of do have already been unrolled in the analyzer.
 */
sci.impl.evaluator.eval_do = (function sci$impl$evaluator$eval_do(ctx,bindings,exprs){
var exprs__$1 = cljs.core.seq(exprs);
var exprs__$2 = exprs__$1;
while(true){
if(exprs__$2){
var ret = (function (){var G__23596 = ctx;
var G__23597 = bindings;
var G__23598 = cljs.core.first(exprs__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23596,G__23597,G__23598) : sci.impl.evaluator.eval.call(null, G__23596,G__23597,G__23598));
})();
var temp__5802__auto__ = cljs.core.next(exprs__$2);
if(temp__5802__auto__){
var exprs__$3 = temp__5802__auto__;
var G__24730 = exprs__$3;
exprs__$2 = G__24730;
continue;
} else {
return ret;
}
} else {
return null;
}
break;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_do_STAR_,sci.impl.evaluator.eval_do);
sci.impl.evaluator.fn_call = (function sci$impl$evaluator$fn_call(ctx,bindings,f,args){
var G__23801 = cljs.core.count(args);
switch (G__23801) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

break;
case (1):
var arg23608 = (function (){var G__23811 = ctx;
var G__23812 = bindings;
var G__23813 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23811,G__23812,G__23813) : sci.impl.evaluator.eval.call(null, G__23811,G__23812,G__23813));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg23608) : f.call(null, arg23608));

break;
case (2):
var arg23609 = (function (){var G__23816 = ctx;
var G__23817 = bindings;
var G__23818 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23816,G__23817,G__23818) : sci.impl.evaluator.eval.call(null, G__23816,G__23817,G__23818));
})();
var args__$1 = cljs.core.rest(args);
var arg23610 = (function (){var G__23819 = ctx;
var G__23820 = bindings;
var G__23821 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23819,G__23820,G__23821) : sci.impl.evaluator.eval.call(null, G__23819,G__23820,G__23821));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg23609,arg23610) : f.call(null, arg23609,arg23610));

break;
case (3):
var arg23611 = (function (){var G__23823 = ctx;
var G__23824 = bindings;
var G__23825 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23823,G__23824,G__23825) : sci.impl.evaluator.eval.call(null, G__23823,G__23824,G__23825));
})();
var args__$1 = cljs.core.rest(args);
var arg23612 = (function (){var G__23826 = ctx;
var G__23827 = bindings;
var G__23828 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23826,G__23827,G__23828) : sci.impl.evaluator.eval.call(null, G__23826,G__23827,G__23828));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg23613 = (function (){var G__23831 = ctx;
var G__23832 = bindings;
var G__23833 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23831,G__23832,G__23833) : sci.impl.evaluator.eval.call(null, G__23831,G__23832,G__23833));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg23611,arg23612,arg23613) : f.call(null, arg23611,arg23612,arg23613));

break;
case (4):
var arg23614 = (function (){var G__23834 = ctx;
var G__23835 = bindings;
var G__23836 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23834,G__23835,G__23836) : sci.impl.evaluator.eval.call(null, G__23834,G__23835,G__23836));
})();
var args__$1 = cljs.core.rest(args);
var arg23615 = (function (){var G__23840 = ctx;
var G__23841 = bindings;
var G__23842 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23840,G__23841,G__23842) : sci.impl.evaluator.eval.call(null, G__23840,G__23841,G__23842));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg23616 = (function (){var G__23843 = ctx;
var G__23844 = bindings;
var G__23845 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23843,G__23844,G__23845) : sci.impl.evaluator.eval.call(null, G__23843,G__23844,G__23845));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg23617 = (function (){var G__23846 = ctx;
var G__23847 = bindings;
var G__23848 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23846,G__23847,G__23848) : sci.impl.evaluator.eval.call(null, G__23846,G__23847,G__23848));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg23614,arg23615,arg23616,arg23617) : f.call(null, arg23614,arg23615,arg23616,arg23617));

break;
case (5):
var arg23618 = (function (){var G__23850 = ctx;
var G__23851 = bindings;
var G__23852 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23850,G__23851,G__23852) : sci.impl.evaluator.eval.call(null, G__23850,G__23851,G__23852));
})();
var args__$1 = cljs.core.rest(args);
var arg23619 = (function (){var G__23853 = ctx;
var G__23854 = bindings;
var G__23855 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23853,G__23854,G__23855) : sci.impl.evaluator.eval.call(null, G__23853,G__23854,G__23855));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg23620 = (function (){var G__23857 = ctx;
var G__23858 = bindings;
var G__23859 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23857,G__23858,G__23859) : sci.impl.evaluator.eval.call(null, G__23857,G__23858,G__23859));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg23621 = (function (){var G__23862 = ctx;
var G__23863 = bindings;
var G__23864 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23862,G__23863,G__23864) : sci.impl.evaluator.eval.call(null, G__23862,G__23863,G__23864));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg23622 = (function (){var G__23865 = ctx;
var G__23866 = bindings;
var G__23867 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23865,G__23866,G__23867) : sci.impl.evaluator.eval.call(null, G__23865,G__23866,G__23867));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg23618,arg23619,arg23620,arg23621,arg23622) : f.call(null, arg23618,arg23619,arg23620,arg23621,arg23622));

break;
case (6):
var arg23623 = (function (){var G__23870 = ctx;
var G__23871 = bindings;
var G__23872 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23870,G__23871,G__23872) : sci.impl.evaluator.eval.call(null, G__23870,G__23871,G__23872));
})();
var args__$1 = cljs.core.rest(args);
var arg23624 = (function (){var G__23874 = ctx;
var G__23875 = bindings;
var G__23876 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23874,G__23875,G__23876) : sci.impl.evaluator.eval.call(null, G__23874,G__23875,G__23876));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg23625 = (function (){var G__23877 = ctx;
var G__23878 = bindings;
var G__23879 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23877,G__23878,G__23879) : sci.impl.evaluator.eval.call(null, G__23877,G__23878,G__23879));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg23626 = (function (){var G__23880 = ctx;
var G__23881 = bindings;
var G__23882 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23880,G__23881,G__23882) : sci.impl.evaluator.eval.call(null, G__23880,G__23881,G__23882));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg23627 = (function (){var G__23884 = ctx;
var G__23885 = bindings;
var G__23886 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23884,G__23885,G__23886) : sci.impl.evaluator.eval.call(null, G__23884,G__23885,G__23886));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg23628 = (function (){var G__23888 = ctx;
var G__23889 = bindings;
var G__23890 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23888,G__23889,G__23890) : sci.impl.evaluator.eval.call(null, G__23888,G__23889,G__23890));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg23623,arg23624,arg23625,arg23626,arg23627,arg23628) : f.call(null, arg23623,arg23624,arg23625,arg23626,arg23627,arg23628));

break;
case (7):
var arg23629 = (function (){var G__23891 = ctx;
var G__23892 = bindings;
var G__23893 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23891,G__23892,G__23893) : sci.impl.evaluator.eval.call(null, G__23891,G__23892,G__23893));
})();
var args__$1 = cljs.core.rest(args);
var arg23630 = (function (){var G__23898 = ctx;
var G__23899 = bindings;
var G__23900 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23898,G__23899,G__23900) : sci.impl.evaluator.eval.call(null, G__23898,G__23899,G__23900));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg23631 = (function (){var G__23901 = ctx;
var G__23902 = bindings;
var G__23903 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23901,G__23902,G__23903) : sci.impl.evaluator.eval.call(null, G__23901,G__23902,G__23903));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg23632 = (function (){var G__23905 = ctx;
var G__23906 = bindings;
var G__23907 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23905,G__23906,G__23907) : sci.impl.evaluator.eval.call(null, G__23905,G__23906,G__23907));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg23633 = (function (){var G__23908 = ctx;
var G__23909 = bindings;
var G__23910 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23908,G__23909,G__23910) : sci.impl.evaluator.eval.call(null, G__23908,G__23909,G__23910));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg23634 = (function (){var G__23911 = ctx;
var G__23912 = bindings;
var G__23913 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23911,G__23912,G__23913) : sci.impl.evaluator.eval.call(null, G__23911,G__23912,G__23913));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg23635 = (function (){var G__23917 = ctx;
var G__23918 = bindings;
var G__23919 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23917,G__23918,G__23919) : sci.impl.evaluator.eval.call(null, G__23917,G__23918,G__23919));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg23629,arg23630,arg23631,arg23632,arg23633,arg23634,arg23635) : f.call(null, arg23629,arg23630,arg23631,arg23632,arg23633,arg23634,arg23635));

break;
case (8):
var arg23636 = (function (){var G__23920 = ctx;
var G__23921 = bindings;
var G__23922 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23920,G__23921,G__23922) : sci.impl.evaluator.eval.call(null, G__23920,G__23921,G__23922));
})();
var args__$1 = cljs.core.rest(args);
var arg23637 = (function (){var G__23923 = ctx;
var G__23924 = bindings;
var G__23925 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23923,G__23924,G__23925) : sci.impl.evaluator.eval.call(null, G__23923,G__23924,G__23925));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg23638 = (function (){var G__23926 = ctx;
var G__23927 = bindings;
var G__23928 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23926,G__23927,G__23928) : sci.impl.evaluator.eval.call(null, G__23926,G__23927,G__23928));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg23639 = (function (){var G__23934 = ctx;
var G__23935 = bindings;
var G__23936 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23934,G__23935,G__23936) : sci.impl.evaluator.eval.call(null, G__23934,G__23935,G__23936));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg23640 = (function (){var G__23940 = ctx;
var G__23941 = bindings;
var G__23942 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23940,G__23941,G__23942) : sci.impl.evaluator.eval.call(null, G__23940,G__23941,G__23942));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg23641 = (function (){var G__23948 = ctx;
var G__23949 = bindings;
var G__23950 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23948,G__23949,G__23950) : sci.impl.evaluator.eval.call(null, G__23948,G__23949,G__23950));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg23642 = (function (){var G__23952 = ctx;
var G__23953 = bindings;
var G__23954 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23952,G__23953,G__23954) : sci.impl.evaluator.eval.call(null, G__23952,G__23953,G__23954));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg23643 = (function (){var G__23955 = ctx;
var G__23956 = bindings;
var G__23957 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23955,G__23956,G__23957) : sci.impl.evaluator.eval.call(null, G__23955,G__23956,G__23957));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg23636,arg23637,arg23638,arg23639,arg23640,arg23641,arg23642,arg23643) : f.call(null, arg23636,arg23637,arg23638,arg23639,arg23640,arg23641,arg23642,arg23643));

break;
case (9):
var arg23644 = (function (){var G__23964 = ctx;
var G__23965 = bindings;
var G__23966 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23964,G__23965,G__23966) : sci.impl.evaluator.eval.call(null, G__23964,G__23965,G__23966));
})();
var args__$1 = cljs.core.rest(args);
var arg23645 = (function (){var G__23967 = ctx;
var G__23968 = bindings;
var G__23969 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23967,G__23968,G__23969) : sci.impl.evaluator.eval.call(null, G__23967,G__23968,G__23969));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg23646 = (function (){var G__23978 = ctx;
var G__23979 = bindings;
var G__23980 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23978,G__23979,G__23980) : sci.impl.evaluator.eval.call(null, G__23978,G__23979,G__23980));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg23647 = (function (){var G__23989 = ctx;
var G__23990 = bindings;
var G__23991 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23989,G__23990,G__23991) : sci.impl.evaluator.eval.call(null, G__23989,G__23990,G__23991));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg23648 = (function (){var G__23993 = ctx;
var G__23994 = bindings;
var G__23995 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23993,G__23994,G__23995) : sci.impl.evaluator.eval.call(null, G__23993,G__23994,G__23995));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg23649 = (function (){var G__23997 = ctx;
var G__23998 = bindings;
var G__23999 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__23997,G__23998,G__23999) : sci.impl.evaluator.eval.call(null, G__23997,G__23998,G__23999));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg23650 = (function (){var G__24000 = ctx;
var G__24001 = bindings;
var G__24002 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24000,G__24001,G__24002) : sci.impl.evaluator.eval.call(null, G__24000,G__24001,G__24002));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg23651 = (function (){var G__24003 = ctx;
var G__24004 = bindings;
var G__24005 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24003,G__24004,G__24005) : sci.impl.evaluator.eval.call(null, G__24003,G__24004,G__24005));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg23652 = (function (){var G__24009 = ctx;
var G__24010 = bindings;
var G__24011 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24009,G__24010,G__24011) : sci.impl.evaluator.eval.call(null, G__24009,G__24010,G__24011));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg23644,arg23645,arg23646,arg23647,arg23648,arg23649,arg23650,arg23651,arg23652) : f.call(null, arg23644,arg23645,arg23646,arg23647,arg23648,arg23649,arg23650,arg23651,arg23652));

break;
case (10):
var arg23653 = (function (){var G__24022 = ctx;
var G__24023 = bindings;
var G__24024 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24022,G__24023,G__24024) : sci.impl.evaluator.eval.call(null, G__24022,G__24023,G__24024));
})();
var args__$1 = cljs.core.rest(args);
var arg23654 = (function (){var G__24026 = ctx;
var G__24027 = bindings;
var G__24028 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24026,G__24027,G__24028) : sci.impl.evaluator.eval.call(null, G__24026,G__24027,G__24028));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg23655 = (function (){var G__24031 = ctx;
var G__24032 = bindings;
var G__24033 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24031,G__24032,G__24033) : sci.impl.evaluator.eval.call(null, G__24031,G__24032,G__24033));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg23656 = (function (){var G__24035 = ctx;
var G__24036 = bindings;
var G__24037 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24035,G__24036,G__24037) : sci.impl.evaluator.eval.call(null, G__24035,G__24036,G__24037));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg23657 = (function (){var G__24040 = ctx;
var G__24041 = bindings;
var G__24042 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24040,G__24041,G__24042) : sci.impl.evaluator.eval.call(null, G__24040,G__24041,G__24042));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg23658 = (function (){var G__24044 = ctx;
var G__24045 = bindings;
var G__24046 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24044,G__24045,G__24046) : sci.impl.evaluator.eval.call(null, G__24044,G__24045,G__24046));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg23659 = (function (){var G__24047 = ctx;
var G__24048 = bindings;
var G__24049 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24047,G__24048,G__24049) : sci.impl.evaluator.eval.call(null, G__24047,G__24048,G__24049));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg23660 = (function (){var G__24051 = ctx;
var G__24052 = bindings;
var G__24053 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24051,G__24052,G__24053) : sci.impl.evaluator.eval.call(null, G__24051,G__24052,G__24053));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg23661 = (function (){var G__24057 = ctx;
var G__24058 = bindings;
var G__24059 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24057,G__24058,G__24059) : sci.impl.evaluator.eval.call(null, G__24057,G__24058,G__24059));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg23662 = (function (){var G__24061 = ctx;
var G__24062 = bindings;
var G__24063 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24061,G__24062,G__24063) : sci.impl.evaluator.eval.call(null, G__24061,G__24062,G__24063));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg23653,arg23654,arg23655,arg23656,arg23657,arg23658,arg23659,arg23660,arg23661,arg23662) : f.call(null, arg23653,arg23654,arg23655,arg23656,arg23657,arg23658,arg23659,arg23660,arg23661,arg23662));

break;
case (11):
var arg23663 = (function (){var G__24065 = ctx;
var G__24066 = bindings;
var G__24067 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24065,G__24066,G__24067) : sci.impl.evaluator.eval.call(null, G__24065,G__24066,G__24067));
})();
var args__$1 = cljs.core.rest(args);
var arg23664 = (function (){var G__24069 = ctx;
var G__24070 = bindings;
var G__24071 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24069,G__24070,G__24071) : sci.impl.evaluator.eval.call(null, G__24069,G__24070,G__24071));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg23665 = (function (){var G__24072 = ctx;
var G__24073 = bindings;
var G__24074 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24072,G__24073,G__24074) : sci.impl.evaluator.eval.call(null, G__24072,G__24073,G__24074));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg23666 = (function (){var G__24075 = ctx;
var G__24076 = bindings;
var G__24077 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24075,G__24076,G__24077) : sci.impl.evaluator.eval.call(null, G__24075,G__24076,G__24077));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg23667 = (function (){var G__24079 = ctx;
var G__24080 = bindings;
var G__24081 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24079,G__24080,G__24081) : sci.impl.evaluator.eval.call(null, G__24079,G__24080,G__24081));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg23668 = (function (){var G__24087 = ctx;
var G__24088 = bindings;
var G__24089 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24087,G__24088,G__24089) : sci.impl.evaluator.eval.call(null, G__24087,G__24088,G__24089));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg23669 = (function (){var G__24090 = ctx;
var G__24091 = bindings;
var G__24092 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24090,G__24091,G__24092) : sci.impl.evaluator.eval.call(null, G__24090,G__24091,G__24092));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg23670 = (function (){var G__24093 = ctx;
var G__24094 = bindings;
var G__24095 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24093,G__24094,G__24095) : sci.impl.evaluator.eval.call(null, G__24093,G__24094,G__24095));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg23671 = (function (){var G__24096 = ctx;
var G__24097 = bindings;
var G__24098 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24096,G__24097,G__24098) : sci.impl.evaluator.eval.call(null, G__24096,G__24097,G__24098));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg23672 = (function (){var G__24099 = ctx;
var G__24100 = bindings;
var G__24101 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24099,G__24100,G__24101) : sci.impl.evaluator.eval.call(null, G__24099,G__24100,G__24101));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg23673 = (function (){var G__24109 = ctx;
var G__24110 = bindings;
var G__24111 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24109,G__24110,G__24111) : sci.impl.evaluator.eval.call(null, G__24109,G__24110,G__24111));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg23663,arg23664,arg23665,arg23666,arg23667,arg23668,arg23669,arg23670,arg23671,arg23672,arg23673) : f.call(null, arg23663,arg23664,arg23665,arg23666,arg23667,arg23668,arg23669,arg23670,arg23671,arg23672,arg23673));

break;
case (12):
var arg23674 = (function (){var G__24112 = ctx;
var G__24113 = bindings;
var G__24114 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24112,G__24113,G__24114) : sci.impl.evaluator.eval.call(null, G__24112,G__24113,G__24114));
})();
var args__$1 = cljs.core.rest(args);
var arg23675 = (function (){var G__24116 = ctx;
var G__24117 = bindings;
var G__24118 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24116,G__24117,G__24118) : sci.impl.evaluator.eval.call(null, G__24116,G__24117,G__24118));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg23676 = (function (){var G__24120 = ctx;
var G__24121 = bindings;
var G__24122 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24120,G__24121,G__24122) : sci.impl.evaluator.eval.call(null, G__24120,G__24121,G__24122));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg23677 = (function (){var G__24127 = ctx;
var G__24129 = bindings;
var G__24130 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24127,G__24129,G__24130) : sci.impl.evaluator.eval.call(null, G__24127,G__24129,G__24130));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg23678 = (function (){var G__24135 = ctx;
var G__24136 = bindings;
var G__24137 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24135,G__24136,G__24137) : sci.impl.evaluator.eval.call(null, G__24135,G__24136,G__24137));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg23679 = (function (){var G__24138 = ctx;
var G__24139 = bindings;
var G__24140 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24138,G__24139,G__24140) : sci.impl.evaluator.eval.call(null, G__24138,G__24139,G__24140));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg23680 = (function (){var G__24141 = ctx;
var G__24142 = bindings;
var G__24143 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24141,G__24142,G__24143) : sci.impl.evaluator.eval.call(null, G__24141,G__24142,G__24143));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg23681 = (function (){var G__24144 = ctx;
var G__24145 = bindings;
var G__24146 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24144,G__24145,G__24146) : sci.impl.evaluator.eval.call(null, G__24144,G__24145,G__24146));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg23682 = (function (){var G__24147 = ctx;
var G__24148 = bindings;
var G__24149 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24147,G__24148,G__24149) : sci.impl.evaluator.eval.call(null, G__24147,G__24148,G__24149));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg23683 = (function (){var G__24150 = ctx;
var G__24151 = bindings;
var G__24152 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24150,G__24151,G__24152) : sci.impl.evaluator.eval.call(null, G__24150,G__24151,G__24152));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg23684 = (function (){var G__24153 = ctx;
var G__24154 = bindings;
var G__24155 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24153,G__24154,G__24155) : sci.impl.evaluator.eval.call(null, G__24153,G__24154,G__24155));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg23685 = (function (){var G__24156 = ctx;
var G__24157 = bindings;
var G__24158 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24156,G__24157,G__24158) : sci.impl.evaluator.eval.call(null, G__24156,G__24157,G__24158));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg23674,arg23675,arg23676,arg23677,arg23678,arg23679,arg23680,arg23681,arg23682,arg23683,arg23684,arg23685) : f.call(null, arg23674,arg23675,arg23676,arg23677,arg23678,arg23679,arg23680,arg23681,arg23682,arg23683,arg23684,arg23685));

break;
case (13):
var arg23686 = (function (){var G__24161 = ctx;
var G__24162 = bindings;
var G__24163 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24161,G__24162,G__24163) : sci.impl.evaluator.eval.call(null, G__24161,G__24162,G__24163));
})();
var args__$1 = cljs.core.rest(args);
var arg23687 = (function (){var G__24170 = ctx;
var G__24171 = bindings;
var G__24172 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24170,G__24171,G__24172) : sci.impl.evaluator.eval.call(null, G__24170,G__24171,G__24172));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg23688 = (function (){var G__24174 = ctx;
var G__24175 = bindings;
var G__24176 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24174,G__24175,G__24176) : sci.impl.evaluator.eval.call(null, G__24174,G__24175,G__24176));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg23689 = (function (){var G__24178 = ctx;
var G__24179 = bindings;
var G__24180 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24178,G__24179,G__24180) : sci.impl.evaluator.eval.call(null, G__24178,G__24179,G__24180));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg23690 = (function (){var G__24182 = ctx;
var G__24183 = bindings;
var G__24184 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24182,G__24183,G__24184) : sci.impl.evaluator.eval.call(null, G__24182,G__24183,G__24184));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg23691 = (function (){var G__24186 = ctx;
var G__24187 = bindings;
var G__24188 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24186,G__24187,G__24188) : sci.impl.evaluator.eval.call(null, G__24186,G__24187,G__24188));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg23692 = (function (){var G__24189 = ctx;
var G__24190 = bindings;
var G__24191 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24189,G__24190,G__24191) : sci.impl.evaluator.eval.call(null, G__24189,G__24190,G__24191));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg23693 = (function (){var G__24193 = ctx;
var G__24194 = bindings;
var G__24195 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24193,G__24194,G__24195) : sci.impl.evaluator.eval.call(null, G__24193,G__24194,G__24195));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg23694 = (function (){var G__24197 = ctx;
var G__24198 = bindings;
var G__24199 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24197,G__24198,G__24199) : sci.impl.evaluator.eval.call(null, G__24197,G__24198,G__24199));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg23695 = (function (){var G__24200 = ctx;
var G__24201 = bindings;
var G__24202 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24200,G__24201,G__24202) : sci.impl.evaluator.eval.call(null, G__24200,G__24201,G__24202));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg23696 = (function (){var G__24203 = ctx;
var G__24204 = bindings;
var G__24205 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24203,G__24204,G__24205) : sci.impl.evaluator.eval.call(null, G__24203,G__24204,G__24205));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg23697 = (function (){var G__24206 = ctx;
var G__24207 = bindings;
var G__24208 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24206,G__24207,G__24208) : sci.impl.evaluator.eval.call(null, G__24206,G__24207,G__24208));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg23698 = (function (){var G__24215 = ctx;
var G__24216 = bindings;
var G__24217 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24215,G__24216,G__24217) : sci.impl.evaluator.eval.call(null, G__24215,G__24216,G__24217));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg23686,arg23687,arg23688,arg23689,arg23690,arg23691,arg23692,arg23693,arg23694,arg23695,arg23696,arg23697,arg23698) : f.call(null, arg23686,arg23687,arg23688,arg23689,arg23690,arg23691,arg23692,arg23693,arg23694,arg23695,arg23696,arg23697,arg23698));

break;
case (14):
var arg23699 = (function (){var G__24224 = ctx;
var G__24225 = bindings;
var G__24226 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24224,G__24225,G__24226) : sci.impl.evaluator.eval.call(null, G__24224,G__24225,G__24226));
})();
var args__$1 = cljs.core.rest(args);
var arg23700 = (function (){var G__24227 = ctx;
var G__24228 = bindings;
var G__24229 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24227,G__24228,G__24229) : sci.impl.evaluator.eval.call(null, G__24227,G__24228,G__24229));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg23701 = (function (){var G__24230 = ctx;
var G__24231 = bindings;
var G__24232 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24230,G__24231,G__24232) : sci.impl.evaluator.eval.call(null, G__24230,G__24231,G__24232));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg23702 = (function (){var G__24235 = ctx;
var G__24236 = bindings;
var G__24237 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24235,G__24236,G__24237) : sci.impl.evaluator.eval.call(null, G__24235,G__24236,G__24237));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg23703 = (function (){var G__24238 = ctx;
var G__24239 = bindings;
var G__24240 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24238,G__24239,G__24240) : sci.impl.evaluator.eval.call(null, G__24238,G__24239,G__24240));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg23704 = (function (){var G__24241 = ctx;
var G__24242 = bindings;
var G__24243 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24241,G__24242,G__24243) : sci.impl.evaluator.eval.call(null, G__24241,G__24242,G__24243));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg23705 = (function (){var G__24244 = ctx;
var G__24245 = bindings;
var G__24246 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24244,G__24245,G__24246) : sci.impl.evaluator.eval.call(null, G__24244,G__24245,G__24246));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg23706 = (function (){var G__24247 = ctx;
var G__24248 = bindings;
var G__24249 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24247,G__24248,G__24249) : sci.impl.evaluator.eval.call(null, G__24247,G__24248,G__24249));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg23707 = (function (){var G__24251 = ctx;
var G__24252 = bindings;
var G__24253 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24251,G__24252,G__24253) : sci.impl.evaluator.eval.call(null, G__24251,G__24252,G__24253));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg23708 = (function (){var G__24255 = ctx;
var G__24256 = bindings;
var G__24257 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24255,G__24256,G__24257) : sci.impl.evaluator.eval.call(null, G__24255,G__24256,G__24257));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg23709 = (function (){var G__24262 = ctx;
var G__24263 = bindings;
var G__24264 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24262,G__24263,G__24264) : sci.impl.evaluator.eval.call(null, G__24262,G__24263,G__24264));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg23710 = (function (){var G__24265 = ctx;
var G__24266 = bindings;
var G__24267 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24265,G__24266,G__24267) : sci.impl.evaluator.eval.call(null, G__24265,G__24266,G__24267));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg23711 = (function (){var G__24277 = ctx;
var G__24278 = bindings;
var G__24279 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24277,G__24278,G__24279) : sci.impl.evaluator.eval.call(null, G__24277,G__24278,G__24279));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg23712 = (function (){var G__24281 = ctx;
var G__24283 = bindings;
var G__24285 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24281,G__24283,G__24285) : sci.impl.evaluator.eval.call(null, G__24281,G__24283,G__24285));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg23699,arg23700,arg23701,arg23702,arg23703,arg23704,arg23705,arg23706,arg23707,arg23708,arg23709,arg23710,arg23711,arg23712) : f.call(null, arg23699,arg23700,arg23701,arg23702,arg23703,arg23704,arg23705,arg23706,arg23707,arg23708,arg23709,arg23710,arg23711,arg23712));

break;
case (15):
var arg23713 = (function (){var G__24288 = ctx;
var G__24289 = bindings;
var G__24290 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24288,G__24289,G__24290) : sci.impl.evaluator.eval.call(null, G__24288,G__24289,G__24290));
})();
var args__$1 = cljs.core.rest(args);
var arg23714 = (function (){var G__24291 = ctx;
var G__24292 = bindings;
var G__24293 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24291,G__24292,G__24293) : sci.impl.evaluator.eval.call(null, G__24291,G__24292,G__24293));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg23715 = (function (){var G__24295 = ctx;
var G__24296 = bindings;
var G__24297 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24295,G__24296,G__24297) : sci.impl.evaluator.eval.call(null, G__24295,G__24296,G__24297));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg23716 = (function (){var G__24299 = ctx;
var G__24300 = bindings;
var G__24301 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24299,G__24300,G__24301) : sci.impl.evaluator.eval.call(null, G__24299,G__24300,G__24301));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg23717 = (function (){var G__24302 = ctx;
var G__24303 = bindings;
var G__24304 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24302,G__24303,G__24304) : sci.impl.evaluator.eval.call(null, G__24302,G__24303,G__24304));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg23718 = (function (){var G__24306 = ctx;
var G__24307 = bindings;
var G__24308 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24306,G__24307,G__24308) : sci.impl.evaluator.eval.call(null, G__24306,G__24307,G__24308));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg23719 = (function (){var G__24311 = ctx;
var G__24312 = bindings;
var G__24313 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24311,G__24312,G__24313) : sci.impl.evaluator.eval.call(null, G__24311,G__24312,G__24313));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg23720 = (function (){var G__24314 = ctx;
var G__24315 = bindings;
var G__24316 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24314,G__24315,G__24316) : sci.impl.evaluator.eval.call(null, G__24314,G__24315,G__24316));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg23721 = (function (){var G__24326 = ctx;
var G__24327 = bindings;
var G__24328 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24326,G__24327,G__24328) : sci.impl.evaluator.eval.call(null, G__24326,G__24327,G__24328));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg23722 = (function (){var G__24331 = ctx;
var G__24332 = bindings;
var G__24333 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24331,G__24332,G__24333) : sci.impl.evaluator.eval.call(null, G__24331,G__24332,G__24333));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg23723 = (function (){var G__24334 = ctx;
var G__24335 = bindings;
var G__24336 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24334,G__24335,G__24336) : sci.impl.evaluator.eval.call(null, G__24334,G__24335,G__24336));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg23724 = (function (){var G__24337 = ctx;
var G__24338 = bindings;
var G__24339 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24337,G__24338,G__24339) : sci.impl.evaluator.eval.call(null, G__24337,G__24338,G__24339));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg23725 = (function (){var G__24341 = ctx;
var G__24342 = bindings;
var G__24343 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24341,G__24342,G__24343) : sci.impl.evaluator.eval.call(null, G__24341,G__24342,G__24343));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg23726 = (function (){var G__24345 = ctx;
var G__24346 = bindings;
var G__24347 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24345,G__24346,G__24347) : sci.impl.evaluator.eval.call(null, G__24345,G__24346,G__24347));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg23727 = (function (){var G__24348 = ctx;
var G__24349 = bindings;
var G__24350 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24348,G__24349,G__24350) : sci.impl.evaluator.eval.call(null, G__24348,G__24349,G__24350));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg23713,arg23714,arg23715,arg23716,arg23717,arg23718,arg23719,arg23720,arg23721,arg23722,arg23723,arg23724,arg23725,arg23726,arg23727) : f.call(null, arg23713,arg23714,arg23715,arg23716,arg23717,arg23718,arg23719,arg23720,arg23721,arg23722,arg23723,arg23724,arg23725,arg23726,arg23727));

break;
case (16):
var arg23728 = (function (){var G__24353 = ctx;
var G__24354 = bindings;
var G__24355 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24353,G__24354,G__24355) : sci.impl.evaluator.eval.call(null, G__24353,G__24354,G__24355));
})();
var args__$1 = cljs.core.rest(args);
var arg23729 = (function (){var G__24360 = ctx;
var G__24361 = bindings;
var G__24362 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24360,G__24361,G__24362) : sci.impl.evaluator.eval.call(null, G__24360,G__24361,G__24362));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg23730 = (function (){var G__24366 = ctx;
var G__24367 = bindings;
var G__24368 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24366,G__24367,G__24368) : sci.impl.evaluator.eval.call(null, G__24366,G__24367,G__24368));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg23731 = (function (){var G__24372 = ctx;
var G__24373 = bindings;
var G__24374 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24372,G__24373,G__24374) : sci.impl.evaluator.eval.call(null, G__24372,G__24373,G__24374));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg23732 = (function (){var G__24377 = ctx;
var G__24378 = bindings;
var G__24379 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24377,G__24378,G__24379) : sci.impl.evaluator.eval.call(null, G__24377,G__24378,G__24379));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg23733 = (function (){var G__24380 = ctx;
var G__24381 = bindings;
var G__24382 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24380,G__24381,G__24382) : sci.impl.evaluator.eval.call(null, G__24380,G__24381,G__24382));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg23734 = (function (){var G__24383 = ctx;
var G__24384 = bindings;
var G__24385 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24383,G__24384,G__24385) : sci.impl.evaluator.eval.call(null, G__24383,G__24384,G__24385));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg23735 = (function (){var G__24386 = ctx;
var G__24387 = bindings;
var G__24388 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24386,G__24387,G__24388) : sci.impl.evaluator.eval.call(null, G__24386,G__24387,G__24388));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg23736 = (function (){var G__24389 = ctx;
var G__24390 = bindings;
var G__24391 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24389,G__24390,G__24391) : sci.impl.evaluator.eval.call(null, G__24389,G__24390,G__24391));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg23737 = (function (){var G__24395 = ctx;
var G__24396 = bindings;
var G__24397 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24395,G__24396,G__24397) : sci.impl.evaluator.eval.call(null, G__24395,G__24396,G__24397));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg23738 = (function (){var G__24400 = ctx;
var G__24401 = bindings;
var G__24402 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24400,G__24401,G__24402) : sci.impl.evaluator.eval.call(null, G__24400,G__24401,G__24402));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg23739 = (function (){var G__24403 = ctx;
var G__24404 = bindings;
var G__24405 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24403,G__24404,G__24405) : sci.impl.evaluator.eval.call(null, G__24403,G__24404,G__24405));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg23740 = (function (){var G__24410 = ctx;
var G__24411 = bindings;
var G__24412 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24410,G__24411,G__24412) : sci.impl.evaluator.eval.call(null, G__24410,G__24411,G__24412));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg23741 = (function (){var G__24413 = ctx;
var G__24414 = bindings;
var G__24415 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24413,G__24414,G__24415) : sci.impl.evaluator.eval.call(null, G__24413,G__24414,G__24415));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg23742 = (function (){var G__24416 = ctx;
var G__24418 = bindings;
var G__24419 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24416,G__24418,G__24419) : sci.impl.evaluator.eval.call(null, G__24416,G__24418,G__24419));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg23743 = (function (){var G__24421 = ctx;
var G__24422 = bindings;
var G__24423 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24421,G__24422,G__24423) : sci.impl.evaluator.eval.call(null, G__24421,G__24422,G__24423));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg23728,arg23729,arg23730,arg23731,arg23732,arg23733,arg23734,arg23735,arg23736,arg23737,arg23738,arg23739,arg23740,arg23741,arg23742,arg23743) : f.call(null, arg23728,arg23729,arg23730,arg23731,arg23732,arg23733,arg23734,arg23735,arg23736,arg23737,arg23738,arg23739,arg23740,arg23741,arg23742,arg23743));

break;
case (17):
var arg23745 = (function (){var G__24426 = ctx;
var G__24427 = bindings;
var G__24428 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24426,G__24427,G__24428) : sci.impl.evaluator.eval.call(null, G__24426,G__24427,G__24428));
})();
var args__$1 = cljs.core.rest(args);
var arg23746 = (function (){var G__24429 = ctx;
var G__24430 = bindings;
var G__24431 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24429,G__24430,G__24431) : sci.impl.evaluator.eval.call(null, G__24429,G__24430,G__24431));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg23747 = (function (){var G__24432 = ctx;
var G__24433 = bindings;
var G__24434 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24432,G__24433,G__24434) : sci.impl.evaluator.eval.call(null, G__24432,G__24433,G__24434));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg23748 = (function (){var G__24440 = ctx;
var G__24442 = bindings;
var G__24445 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24440,G__24442,G__24445) : sci.impl.evaluator.eval.call(null, G__24440,G__24442,G__24445));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg23749 = (function (){var G__24452 = ctx;
var G__24453 = bindings;
var G__24454 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24452,G__24453,G__24454) : sci.impl.evaluator.eval.call(null, G__24452,G__24453,G__24454));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg23750 = (function (){var G__24456 = ctx;
var G__24457 = bindings;
var G__24458 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24456,G__24457,G__24458) : sci.impl.evaluator.eval.call(null, G__24456,G__24457,G__24458));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg23751 = (function (){var G__24463 = ctx;
var G__24464 = bindings;
var G__24465 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24463,G__24464,G__24465) : sci.impl.evaluator.eval.call(null, G__24463,G__24464,G__24465));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg23752 = (function (){var G__24466 = ctx;
var G__24467 = bindings;
var G__24468 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24466,G__24467,G__24468) : sci.impl.evaluator.eval.call(null, G__24466,G__24467,G__24468));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg23753 = (function (){var G__24469 = ctx;
var G__24470 = bindings;
var G__24471 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24469,G__24470,G__24471) : sci.impl.evaluator.eval.call(null, G__24469,G__24470,G__24471));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg23754 = (function (){var G__24473 = ctx;
var G__24474 = bindings;
var G__24475 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24473,G__24474,G__24475) : sci.impl.evaluator.eval.call(null, G__24473,G__24474,G__24475));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg23755 = (function (){var G__24477 = ctx;
var G__24478 = bindings;
var G__24479 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24477,G__24478,G__24479) : sci.impl.evaluator.eval.call(null, G__24477,G__24478,G__24479));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg23756 = (function (){var G__24480 = ctx;
var G__24481 = bindings;
var G__24482 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24480,G__24481,G__24482) : sci.impl.evaluator.eval.call(null, G__24480,G__24481,G__24482));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg23757 = (function (){var G__24483 = ctx;
var G__24484 = bindings;
var G__24485 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24483,G__24484,G__24485) : sci.impl.evaluator.eval.call(null, G__24483,G__24484,G__24485));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg23758 = (function (){var G__24486 = ctx;
var G__24487 = bindings;
var G__24488 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24486,G__24487,G__24488) : sci.impl.evaluator.eval.call(null, G__24486,G__24487,G__24488));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg23759 = (function (){var G__24489 = ctx;
var G__24490 = bindings;
var G__24491 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24489,G__24490,G__24491) : sci.impl.evaluator.eval.call(null, G__24489,G__24490,G__24491));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg23760 = (function (){var G__24492 = ctx;
var G__24493 = bindings;
var G__24494 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24492,G__24493,G__24494) : sci.impl.evaluator.eval.call(null, G__24492,G__24493,G__24494));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg23761 = (function (){var G__24495 = ctx;
var G__24496 = bindings;
var G__24497 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24495,G__24496,G__24497) : sci.impl.evaluator.eval.call(null, G__24495,G__24496,G__24497));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg23745,arg23746,arg23747,arg23748,arg23749,arg23750,arg23751,arg23752,arg23753,arg23754,arg23755,arg23756,arg23757,arg23758,arg23759,arg23760,arg23761) : f.call(null, arg23745,arg23746,arg23747,arg23748,arg23749,arg23750,arg23751,arg23752,arg23753,arg23754,arg23755,arg23756,arg23757,arg23758,arg23759,arg23760,arg23761));

break;
case (18):
var arg23763 = (function (){var G__24501 = ctx;
var G__24502 = bindings;
var G__24503 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24501,G__24502,G__24503) : sci.impl.evaluator.eval.call(null, G__24501,G__24502,G__24503));
})();
var args__$1 = cljs.core.rest(args);
var arg23764 = (function (){var G__24504 = ctx;
var G__24505 = bindings;
var G__24506 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24504,G__24505,G__24506) : sci.impl.evaluator.eval.call(null, G__24504,G__24505,G__24506));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg23765 = (function (){var G__24507 = ctx;
var G__24508 = bindings;
var G__24509 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24507,G__24508,G__24509) : sci.impl.evaluator.eval.call(null, G__24507,G__24508,G__24509));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg23766 = (function (){var G__24510 = ctx;
var G__24511 = bindings;
var G__24512 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24510,G__24511,G__24512) : sci.impl.evaluator.eval.call(null, G__24510,G__24511,G__24512));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg23767 = (function (){var G__24518 = ctx;
var G__24519 = bindings;
var G__24520 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24518,G__24519,G__24520) : sci.impl.evaluator.eval.call(null, G__24518,G__24519,G__24520));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg23768 = (function (){var G__24521 = ctx;
var G__24522 = bindings;
var G__24523 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24521,G__24522,G__24523) : sci.impl.evaluator.eval.call(null, G__24521,G__24522,G__24523));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg23769 = (function (){var G__24527 = ctx;
var G__24529 = bindings;
var G__24530 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24527,G__24529,G__24530) : sci.impl.evaluator.eval.call(null, G__24527,G__24529,G__24530));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg23770 = (function (){var G__24531 = ctx;
var G__24532 = bindings;
var G__24533 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24531,G__24532,G__24533) : sci.impl.evaluator.eval.call(null, G__24531,G__24532,G__24533));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg23771 = (function (){var G__24538 = ctx;
var G__24539 = bindings;
var G__24540 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24538,G__24539,G__24540) : sci.impl.evaluator.eval.call(null, G__24538,G__24539,G__24540));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg23772 = (function (){var G__24543 = ctx;
var G__24544 = bindings;
var G__24545 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24543,G__24544,G__24545) : sci.impl.evaluator.eval.call(null, G__24543,G__24544,G__24545));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg23773 = (function (){var G__24546 = ctx;
var G__24547 = bindings;
var G__24548 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24546,G__24547,G__24548) : sci.impl.evaluator.eval.call(null, G__24546,G__24547,G__24548));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg23774 = (function (){var G__24549 = ctx;
var G__24550 = bindings;
var G__24551 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24549,G__24550,G__24551) : sci.impl.evaluator.eval.call(null, G__24549,G__24550,G__24551));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg23775 = (function (){var G__24558 = ctx;
var G__24559 = bindings;
var G__24560 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24558,G__24559,G__24560) : sci.impl.evaluator.eval.call(null, G__24558,G__24559,G__24560));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg23776 = (function (){var G__24562 = ctx;
var G__24563 = bindings;
var G__24564 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24562,G__24563,G__24564) : sci.impl.evaluator.eval.call(null, G__24562,G__24563,G__24564));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg23777 = (function (){var G__24566 = ctx;
var G__24567 = bindings;
var G__24568 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24566,G__24567,G__24568) : sci.impl.evaluator.eval.call(null, G__24566,G__24567,G__24568));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg23778 = (function (){var G__24570 = ctx;
var G__24571 = bindings;
var G__24572 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24570,G__24571,G__24572) : sci.impl.evaluator.eval.call(null, G__24570,G__24571,G__24572));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg23779 = (function (){var G__24574 = ctx;
var G__24575 = bindings;
var G__24576 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24574,G__24575,G__24576) : sci.impl.evaluator.eval.call(null, G__24574,G__24575,G__24576));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg23780 = (function (){var G__24577 = ctx;
var G__24578 = bindings;
var G__24579 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24577,G__24578,G__24579) : sci.impl.evaluator.eval.call(null, G__24577,G__24578,G__24579));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg23763,arg23764,arg23765,arg23766,arg23767,arg23768,arg23769,arg23770,arg23771,arg23772,arg23773,arg23774,arg23775,arg23776,arg23777,arg23778,arg23779,arg23780) : f.call(null, arg23763,arg23764,arg23765,arg23766,arg23767,arg23768,arg23769,arg23770,arg23771,arg23772,arg23773,arg23774,arg23775,arg23776,arg23777,arg23778,arg23779,arg23780));

break;
case (19):
var arg23781 = (function (){var G__24581 = ctx;
var G__24582 = bindings;
var G__24583 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24581,G__24582,G__24583) : sci.impl.evaluator.eval.call(null, G__24581,G__24582,G__24583));
})();
var args__$1 = cljs.core.rest(args);
var arg23782 = (function (){var G__24586 = ctx;
var G__24587 = bindings;
var G__24588 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24586,G__24587,G__24588) : sci.impl.evaluator.eval.call(null, G__24586,G__24587,G__24588));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg23783 = (function (){var G__24592 = ctx;
var G__24593 = bindings;
var G__24594 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24592,G__24593,G__24594) : sci.impl.evaluator.eval.call(null, G__24592,G__24593,G__24594));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg23784 = (function (){var G__24595 = ctx;
var G__24596 = bindings;
var G__24597 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24595,G__24596,G__24597) : sci.impl.evaluator.eval.call(null, G__24595,G__24596,G__24597));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg23785 = (function (){var G__24600 = ctx;
var G__24601 = bindings;
var G__24602 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24600,G__24601,G__24602) : sci.impl.evaluator.eval.call(null, G__24600,G__24601,G__24602));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg23786 = (function (){var G__24604 = ctx;
var G__24605 = bindings;
var G__24606 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24604,G__24605,G__24606) : sci.impl.evaluator.eval.call(null, G__24604,G__24605,G__24606));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg23787 = (function (){var G__24609 = ctx;
var G__24610 = bindings;
var G__24611 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24609,G__24610,G__24611) : sci.impl.evaluator.eval.call(null, G__24609,G__24610,G__24611));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg23788 = (function (){var G__24613 = ctx;
var G__24614 = bindings;
var G__24615 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24613,G__24614,G__24615) : sci.impl.evaluator.eval.call(null, G__24613,G__24614,G__24615));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg23789 = (function (){var G__24616 = ctx;
var G__24617 = bindings;
var G__24618 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24616,G__24617,G__24618) : sci.impl.evaluator.eval.call(null, G__24616,G__24617,G__24618));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg23790 = (function (){var G__24619 = ctx;
var G__24620 = bindings;
var G__24621 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24619,G__24620,G__24621) : sci.impl.evaluator.eval.call(null, G__24619,G__24620,G__24621));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg23791 = (function (){var G__24626 = ctx;
var G__24627 = bindings;
var G__24628 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24626,G__24627,G__24628) : sci.impl.evaluator.eval.call(null, G__24626,G__24627,G__24628));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg23792 = (function (){var G__24629 = ctx;
var G__24630 = bindings;
var G__24631 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24629,G__24630,G__24631) : sci.impl.evaluator.eval.call(null, G__24629,G__24630,G__24631));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg23793 = (function (){var G__24634 = ctx;
var G__24635 = bindings;
var G__24636 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24634,G__24635,G__24636) : sci.impl.evaluator.eval.call(null, G__24634,G__24635,G__24636));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg23794 = (function (){var G__24639 = ctx;
var G__24640 = bindings;
var G__24641 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24639,G__24640,G__24641) : sci.impl.evaluator.eval.call(null, G__24639,G__24640,G__24641));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg23795 = (function (){var G__24642 = ctx;
var G__24643 = bindings;
var G__24644 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24642,G__24643,G__24644) : sci.impl.evaluator.eval.call(null, G__24642,G__24643,G__24644));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg23796 = (function (){var G__24645 = ctx;
var G__24646 = bindings;
var G__24647 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24645,G__24646,G__24647) : sci.impl.evaluator.eval.call(null, G__24645,G__24646,G__24647));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg23797 = (function (){var G__24649 = ctx;
var G__24650 = bindings;
var G__24651 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24649,G__24650,G__24651) : sci.impl.evaluator.eval.call(null, G__24649,G__24650,G__24651));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg23798 = (function (){var G__24653 = ctx;
var G__24654 = bindings;
var G__24655 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24653,G__24654,G__24655) : sci.impl.evaluator.eval.call(null, G__24653,G__24654,G__24655));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg23799 = (function (){var G__24658 = ctx;
var G__24659 = bindings;
var G__24660 = cljs.core.first(args__$18);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__24658,G__24659,G__24660) : sci.impl.evaluator.eval.call(null, G__24658,G__24659,G__24660));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg23781,arg23782,arg23783,arg23784,arg23785,arg23786,arg23787,arg23788,arg23789,arg23790,arg23791,arg23792,arg23793,arg23794,arg23795,arg23796,arg23797,arg23798,arg23799) : f.call(null, arg23781,arg23782,arg23783,arg23784,arg23785,arg23786,arg23787,arg23788,arg23789,arg23790,arg23791,arg23792,arg23793,arg23794,arg23795,arg23796,arg23797,arg23798,arg23799));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__23106_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__23106_SHARP_) : sci.impl.evaluator.eval.call(null, ctx,bindings,p1__23106_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.evaluator.eval = (function sci$impl$evaluator$eval(ctx,bindings,expr){
try{if((expr instanceof sci.impl.types.EvalFn)){
var f = expr.f;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(ctx,bindings) : f.call(null, ctx,bindings));
} else {
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.v;
return cljs.core._deref(v);
} else {
if((((expr == null))?false:(((!((expr == null))))?(((((expr.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === expr.cljs$core$IMap$))))?true:(((!expr.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,expr):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,expr)))){
return sci.impl.evaluator.eval_map(ctx,bindings,expr);
} else {
return expr;

}
}
}
}catch (e24669){if((e24669 instanceof Error)){
var e = e24669;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,expr);
} else {
throw e24669;

}
}});
cljs.core.vreset_BANG_(sci.impl.utils.eval_STAR_,sci.impl.evaluator.eval);

//# sourceMappingURL=sci.impl.evaluator.js.map
