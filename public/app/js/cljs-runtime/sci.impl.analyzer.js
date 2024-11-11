goog.provide('sci.impl.analyzer');
goog.scope(function(){
  sci.impl.analyzer.goog$module$goog$object = goog.module.get('goog.object');
});
sci.impl.analyzer.special_syms = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"finally","finally",-1065347064,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"new","new",-444906321,null),"null",new cljs.core.Symbol(null,"recur","recur",1202958259,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"var","var",870848730,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"catch","catch",-1616370245,null),"null",new cljs.core.Symbol(null,"throw","throw",595905694,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
sci.impl.analyzer.throw_error_with_location = (function sci$impl$analyzer$throw_error_with_location(msg,node){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),"analysis"], null));
});



sci.impl.analyzer.macroexpand_1 = (function sci$impl$analyzer$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
var G__36573 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true);
var G__36574 = expr;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__36573,G__36574) : sci.impl.analyzer.analyze.call(null, G__36573,G__36574));
} else {
var f = (function (){try{return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
}catch (e36575){var _ = e36575;
return new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858);
}})();
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858),f) : sci.impl.utils.kw_identical_QMARK_.call(null, new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858),f)))){
return expr;
} else {
var f__$1 = (cljs.core.truth_((function (){var and__5000__auto__ = sci.impl.vars.var_QMARK_(f);
if(and__5000__auto__){
return sci.impl.vars.isMacro(f);
} else {
return and__5000__auto__;
}
})())?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.utils.macro_QMARK_(f__$1))){
var f__$2 = (((sci.impl.utils.needs_ctx === (function (){var G__36581 = f__$1;
var G__36581__$1 = (((G__36581 == null))?null:cljs.core.meta(G__36581));
if((G__36581__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__36581__$1);
}
})()))?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f__$1,ctx):f__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$2,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.analyzer.macroexpand = (function sci$impl$analyzer$macroexpand(ctx,form){
var ex = sci.impl.analyzer.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.analyzer.macroexpand.call(null, ctx,ex));
}
});
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_STAR_,sci.impl.analyzer.macroexpand);
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_1_STAR_,sci.impl.analyzer.macroexpand_1);
sci.impl.analyzer.return_do = (function sci$impl$analyzer$return_do(expr,analyzed_children){
var G__36595 = cljs.core.count(analyzed_children);
switch (G__36595) {
case (0):
return null;

break;
case (1):
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
sci.impl.evaluator.eval(ctx,bindings,arg0);

return sci.impl.evaluator.eval(ctx,bindings,arg1);
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
sci.impl.evaluator.eval(ctx,bindings,arg0);

sci.impl.evaluator.eval(ctx,bindings,arg1);

return sci.impl.evaluator.eval(ctx,bindings,arg2);
}),expr);

break;
default:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.evaluator.eval_do(ctx,bindings,analyzed_children);
}),expr);

}
});
sci.impl.analyzer.return_or = (function sci$impl$analyzer$return_or(expr,analyzed_children){
var G__36610 = cljs.core.count(analyzed_children);
switch (G__36610) {
case (0):
return null;

break;
case (1):
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5002__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg1);
}
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5002__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg2);
}
}
}),expr);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5002__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg3);
}
}
}
}),expr);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5002__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg4);
}
}
}
}
}),expr);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5002__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
var or__5002__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5002__auto____$4)){
return or__5002__auto____$4;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg5);
}
}
}
}
}
}),expr);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5002__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
var or__5002__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5002__auto____$4)){
return or__5002__auto____$4;
} else {
var or__5002__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5002__auto____$5)){
return or__5002__auto____$5;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg6);
}
}
}
}
}
}
}),expr);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5002__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
var or__5002__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5002__auto____$4)){
return or__5002__auto____$4;
} else {
var or__5002__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5002__auto____$5)){
return or__5002__auto____$5;
} else {
var or__5002__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5002__auto____$6)){
return or__5002__auto____$6;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg7);
}
}
}
}
}
}
}
}),expr);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5002__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
var or__5002__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5002__auto____$4)){
return or__5002__auto____$4;
} else {
var or__5002__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5002__auto____$5)){
return or__5002__auto____$5;
} else {
var or__5002__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5002__auto____$6)){
return or__5002__auto____$6;
} else {
var or__5002__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5002__auto____$7)){
return or__5002__auto____$7;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg8);
}
}
}
}
}
}
}
}
}),expr);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5002__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
var or__5002__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5002__auto____$4)){
return or__5002__auto____$4;
} else {
var or__5002__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5002__auto____$5)){
return or__5002__auto____$5;
} else {
var or__5002__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5002__auto____$6)){
return or__5002__auto____$6;
} else {
var or__5002__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5002__auto____$7)){
return or__5002__auto____$7;
} else {
var or__5002__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5002__auto____$8)){
return or__5002__auto____$8;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg9);
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5002__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
var or__5002__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5002__auto____$4)){
return or__5002__auto____$4;
} else {
var or__5002__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5002__auto____$5)){
return or__5002__auto____$5;
} else {
var or__5002__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5002__auto____$6)){
return or__5002__auto____$6;
} else {
var or__5002__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5002__auto____$7)){
return or__5002__auto____$7;
} else {
var or__5002__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5002__auto____$8)){
return or__5002__auto____$8;
} else {
var or__5002__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5002__auto____$9)){
return or__5002__auto____$9;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg10);
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5002__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
var or__5002__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5002__auto____$4)){
return or__5002__auto____$4;
} else {
var or__5002__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5002__auto____$5)){
return or__5002__auto____$5;
} else {
var or__5002__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5002__auto____$6)){
return or__5002__auto____$6;
} else {
var or__5002__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5002__auto____$7)){
return or__5002__auto____$7;
} else {
var or__5002__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5002__auto____$8)){
return or__5002__auto____$8;
} else {
var or__5002__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5002__auto____$9)){
return or__5002__auto____$9;
} else {
var or__5002__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5002__auto____$10)){
return or__5002__auto____$10;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg11);
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5002__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
var or__5002__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5002__auto____$4)){
return or__5002__auto____$4;
} else {
var or__5002__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5002__auto____$5)){
return or__5002__auto____$5;
} else {
var or__5002__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5002__auto____$6)){
return or__5002__auto____$6;
} else {
var or__5002__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5002__auto____$7)){
return or__5002__auto____$7;
} else {
var or__5002__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5002__auto____$8)){
return or__5002__auto____$8;
} else {
var or__5002__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5002__auto____$9)){
return or__5002__auto____$9;
} else {
var or__5002__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5002__auto____$10)){
return or__5002__auto____$10;
} else {
var or__5002__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5002__auto____$11)){
return or__5002__auto____$11;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg12);
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5002__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
var or__5002__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5002__auto____$4)){
return or__5002__auto____$4;
} else {
var or__5002__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5002__auto____$5)){
return or__5002__auto____$5;
} else {
var or__5002__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5002__auto____$6)){
return or__5002__auto____$6;
} else {
var or__5002__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5002__auto____$7)){
return or__5002__auto____$7;
} else {
var or__5002__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5002__auto____$8)){
return or__5002__auto____$8;
} else {
var or__5002__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5002__auto____$9)){
return or__5002__auto____$9;
} else {
var or__5002__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5002__auto____$10)){
return or__5002__auto____$10;
} else {
var or__5002__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5002__auto____$11)){
return or__5002__auto____$11;
} else {
var or__5002__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__5002__auto____$12)){
return or__5002__auto____$12;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg13);
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5002__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
var or__5002__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5002__auto____$4)){
return or__5002__auto____$4;
} else {
var or__5002__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5002__auto____$5)){
return or__5002__auto____$5;
} else {
var or__5002__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5002__auto____$6)){
return or__5002__auto____$6;
} else {
var or__5002__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5002__auto____$7)){
return or__5002__auto____$7;
} else {
var or__5002__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5002__auto____$8)){
return or__5002__auto____$8;
} else {
var or__5002__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5002__auto____$9)){
return or__5002__auto____$9;
} else {
var or__5002__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5002__auto____$10)){
return or__5002__auto____$10;
} else {
var or__5002__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5002__auto____$11)){
return or__5002__auto____$11;
} else {
var or__5002__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__5002__auto____$12)){
return or__5002__auto____$12;
} else {
var or__5002__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__5002__auto____$13)){
return or__5002__auto____$13;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg14);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5002__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
var or__5002__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5002__auto____$4)){
return or__5002__auto____$4;
} else {
var or__5002__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5002__auto____$5)){
return or__5002__auto____$5;
} else {
var or__5002__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5002__auto____$6)){
return or__5002__auto____$6;
} else {
var or__5002__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5002__auto____$7)){
return or__5002__auto____$7;
} else {
var or__5002__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5002__auto____$8)){
return or__5002__auto____$8;
} else {
var or__5002__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5002__auto____$9)){
return or__5002__auto____$9;
} else {
var or__5002__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5002__auto____$10)){
return or__5002__auto____$10;
} else {
var or__5002__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5002__auto____$11)){
return or__5002__auto____$11;
} else {
var or__5002__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__5002__auto____$12)){
return or__5002__auto____$12;
} else {
var or__5002__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__5002__auto____$13)){
return or__5002__auto____$13;
} else {
var or__5002__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(or__5002__auto____$14)){
return or__5002__auto____$14;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg15);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5002__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
var or__5002__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5002__auto____$4)){
return or__5002__auto____$4;
} else {
var or__5002__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5002__auto____$5)){
return or__5002__auto____$5;
} else {
var or__5002__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5002__auto____$6)){
return or__5002__auto____$6;
} else {
var or__5002__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5002__auto____$7)){
return or__5002__auto____$7;
} else {
var or__5002__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5002__auto____$8)){
return or__5002__auto____$8;
} else {
var or__5002__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5002__auto____$9)){
return or__5002__auto____$9;
} else {
var or__5002__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5002__auto____$10)){
return or__5002__auto____$10;
} else {
var or__5002__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5002__auto____$11)){
return or__5002__auto____$11;
} else {
var or__5002__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__5002__auto____$12)){
return or__5002__auto____$12;
} else {
var or__5002__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__5002__auto____$13)){
return or__5002__auto____$13;
} else {
var or__5002__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(or__5002__auto____$14)){
return or__5002__auto____$14;
} else {
var or__5002__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(or__5002__auto____$15)){
return or__5002__auto____$15;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg16);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5002__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
var or__5002__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5002__auto____$4)){
return or__5002__auto____$4;
} else {
var or__5002__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5002__auto____$5)){
return or__5002__auto____$5;
} else {
var or__5002__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5002__auto____$6)){
return or__5002__auto____$6;
} else {
var or__5002__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5002__auto____$7)){
return or__5002__auto____$7;
} else {
var or__5002__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5002__auto____$8)){
return or__5002__auto____$8;
} else {
var or__5002__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5002__auto____$9)){
return or__5002__auto____$9;
} else {
var or__5002__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5002__auto____$10)){
return or__5002__auto____$10;
} else {
var or__5002__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5002__auto____$11)){
return or__5002__auto____$11;
} else {
var or__5002__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__5002__auto____$12)){
return or__5002__auto____$12;
} else {
var or__5002__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__5002__auto____$13)){
return or__5002__auto____$13;
} else {
var or__5002__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(or__5002__auto____$14)){
return or__5002__auto____$14;
} else {
var or__5002__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(or__5002__auto____$15)){
return or__5002__auto____$15;
} else {
var or__5002__auto____$16 = sci.impl.evaluator.eval(ctx,bindings,arg16);
if(cljs.core.truth_(or__5002__auto____$16)){
return or__5002__auto____$16;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg17);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5002__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
var or__5002__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5002__auto____$4)){
return or__5002__auto____$4;
} else {
var or__5002__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5002__auto____$5)){
return or__5002__auto____$5;
} else {
var or__5002__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5002__auto____$6)){
return or__5002__auto____$6;
} else {
var or__5002__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5002__auto____$7)){
return or__5002__auto____$7;
} else {
var or__5002__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5002__auto____$8)){
return or__5002__auto____$8;
} else {
var or__5002__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5002__auto____$9)){
return or__5002__auto____$9;
} else {
var or__5002__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5002__auto____$10)){
return or__5002__auto____$10;
} else {
var or__5002__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5002__auto____$11)){
return or__5002__auto____$11;
} else {
var or__5002__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__5002__auto____$12)){
return or__5002__auto____$12;
} else {
var or__5002__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__5002__auto____$13)){
return or__5002__auto____$13;
} else {
var or__5002__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(or__5002__auto____$14)){
return or__5002__auto____$14;
} else {
var or__5002__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(or__5002__auto____$15)){
return or__5002__auto____$15;
} else {
var or__5002__auto____$16 = sci.impl.evaluator.eval(ctx,bindings,arg16);
if(cljs.core.truth_(or__5002__auto____$16)){
return or__5002__auto____$16;
} else {
var or__5002__auto____$17 = sci.impl.evaluator.eval(ctx,bindings,arg17);
if(cljs.core.truth_(or__5002__auto____$17)){
return or__5002__auto____$17;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg18);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
default:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.evaluator.eval_or(ctx,bindings,analyzed_children);
}),expr);

}
});
sci.impl.analyzer.return_and = (function sci$impl$analyzer$return_and(expr,analyzed_children){
var G__36699 = cljs.core.count(analyzed_children);
switch (G__36699) {
case (0):
return null;

break;
case (1):
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5000__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5000__auto__)){
return sci.impl.evaluator.eval(ctx,bindings,arg1);
} else {
return and__5000__auto__;
}
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5000__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5000__auto____$1)){
return sci.impl.evaluator.eval(ctx,bindings,arg2);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}),expr);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5000__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5000__auto____$2)){
return sci.impl.evaluator.eval(ctx,bindings,arg3);
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}),expr);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5000__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5000__auto____$2)){
var and__5000__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5000__auto____$3)){
return sci.impl.evaluator.eval(ctx,bindings,arg4);
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}),expr);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5000__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5000__auto____$2)){
var and__5000__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5000__auto____$3)){
var and__5000__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5000__auto____$4)){
return sci.impl.evaluator.eval(ctx,bindings,arg5);
} else {
return and__5000__auto____$4;
}
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}),expr);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5000__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5000__auto____$2)){
var and__5000__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5000__auto____$3)){
var and__5000__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5000__auto____$4)){
var and__5000__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5000__auto____$5)){
return sci.impl.evaluator.eval(ctx,bindings,arg6);
} else {
return and__5000__auto____$5;
}
} else {
return and__5000__auto____$4;
}
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}),expr);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5000__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5000__auto____$2)){
var and__5000__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5000__auto____$3)){
var and__5000__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5000__auto____$4)){
var and__5000__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5000__auto____$5)){
var and__5000__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5000__auto____$6)){
return sci.impl.evaluator.eval(ctx,bindings,arg7);
} else {
return and__5000__auto____$6;
}
} else {
return and__5000__auto____$5;
}
} else {
return and__5000__auto____$4;
}
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}),expr);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5000__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5000__auto____$2)){
var and__5000__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5000__auto____$3)){
var and__5000__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5000__auto____$4)){
var and__5000__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5000__auto____$5)){
var and__5000__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5000__auto____$6)){
var and__5000__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5000__auto____$7)){
return sci.impl.evaluator.eval(ctx,bindings,arg8);
} else {
return and__5000__auto____$7;
}
} else {
return and__5000__auto____$6;
}
} else {
return and__5000__auto____$5;
}
} else {
return and__5000__auto____$4;
}
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}),expr);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5000__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5000__auto____$2)){
var and__5000__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5000__auto____$3)){
var and__5000__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5000__auto____$4)){
var and__5000__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5000__auto____$5)){
var and__5000__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5000__auto____$6)){
var and__5000__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5000__auto____$7)){
var and__5000__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5000__auto____$8)){
return sci.impl.evaluator.eval(ctx,bindings,arg9);
} else {
return and__5000__auto____$8;
}
} else {
return and__5000__auto____$7;
}
} else {
return and__5000__auto____$6;
}
} else {
return and__5000__auto____$5;
}
} else {
return and__5000__auto____$4;
}
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}),expr);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5000__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5000__auto____$2)){
var and__5000__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5000__auto____$3)){
var and__5000__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5000__auto____$4)){
var and__5000__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5000__auto____$5)){
var and__5000__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5000__auto____$6)){
var and__5000__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5000__auto____$7)){
var and__5000__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5000__auto____$8)){
var and__5000__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5000__auto____$9)){
return sci.impl.evaluator.eval(ctx,bindings,arg10);
} else {
return and__5000__auto____$9;
}
} else {
return and__5000__auto____$8;
}
} else {
return and__5000__auto____$7;
}
} else {
return and__5000__auto____$6;
}
} else {
return and__5000__auto____$5;
}
} else {
return and__5000__auto____$4;
}
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}),expr);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5000__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5000__auto____$2)){
var and__5000__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5000__auto____$3)){
var and__5000__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5000__auto____$4)){
var and__5000__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5000__auto____$5)){
var and__5000__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5000__auto____$6)){
var and__5000__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5000__auto____$7)){
var and__5000__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5000__auto____$8)){
var and__5000__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5000__auto____$9)){
var and__5000__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5000__auto____$10)){
return sci.impl.evaluator.eval(ctx,bindings,arg11);
} else {
return and__5000__auto____$10;
}
} else {
return and__5000__auto____$9;
}
} else {
return and__5000__auto____$8;
}
} else {
return and__5000__auto____$7;
}
} else {
return and__5000__auto____$6;
}
} else {
return and__5000__auto____$5;
}
} else {
return and__5000__auto____$4;
}
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}),expr);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5000__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5000__auto____$2)){
var and__5000__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5000__auto____$3)){
var and__5000__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5000__auto____$4)){
var and__5000__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5000__auto____$5)){
var and__5000__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5000__auto____$6)){
var and__5000__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5000__auto____$7)){
var and__5000__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5000__auto____$8)){
var and__5000__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5000__auto____$9)){
var and__5000__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5000__auto____$10)){
var and__5000__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5000__auto____$11)){
return sci.impl.evaluator.eval(ctx,bindings,arg12);
} else {
return and__5000__auto____$11;
}
} else {
return and__5000__auto____$10;
}
} else {
return and__5000__auto____$9;
}
} else {
return and__5000__auto____$8;
}
} else {
return and__5000__auto____$7;
}
} else {
return and__5000__auto____$6;
}
} else {
return and__5000__auto____$5;
}
} else {
return and__5000__auto____$4;
}
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}),expr);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5000__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5000__auto____$2)){
var and__5000__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5000__auto____$3)){
var and__5000__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5000__auto____$4)){
var and__5000__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5000__auto____$5)){
var and__5000__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5000__auto____$6)){
var and__5000__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5000__auto____$7)){
var and__5000__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5000__auto____$8)){
var and__5000__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5000__auto____$9)){
var and__5000__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5000__auto____$10)){
var and__5000__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5000__auto____$11)){
var and__5000__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__5000__auto____$12)){
return sci.impl.evaluator.eval(ctx,bindings,arg13);
} else {
return and__5000__auto____$12;
}
} else {
return and__5000__auto____$11;
}
} else {
return and__5000__auto____$10;
}
} else {
return and__5000__auto____$9;
}
} else {
return and__5000__auto____$8;
}
} else {
return and__5000__auto____$7;
}
} else {
return and__5000__auto____$6;
}
} else {
return and__5000__auto____$5;
}
} else {
return and__5000__auto____$4;
}
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}),expr);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5000__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5000__auto____$2)){
var and__5000__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5000__auto____$3)){
var and__5000__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5000__auto____$4)){
var and__5000__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5000__auto____$5)){
var and__5000__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5000__auto____$6)){
var and__5000__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5000__auto____$7)){
var and__5000__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5000__auto____$8)){
var and__5000__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5000__auto____$9)){
var and__5000__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5000__auto____$10)){
var and__5000__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5000__auto____$11)){
var and__5000__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__5000__auto____$12)){
var and__5000__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__5000__auto____$13)){
return sci.impl.evaluator.eval(ctx,bindings,arg14);
} else {
return and__5000__auto____$13;
}
} else {
return and__5000__auto____$12;
}
} else {
return and__5000__auto____$11;
}
} else {
return and__5000__auto____$10;
}
} else {
return and__5000__auto____$9;
}
} else {
return and__5000__auto____$8;
}
} else {
return and__5000__auto____$7;
}
} else {
return and__5000__auto____$6;
}
} else {
return and__5000__auto____$5;
}
} else {
return and__5000__auto____$4;
}
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}),expr);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5000__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5000__auto____$2)){
var and__5000__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5000__auto____$3)){
var and__5000__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5000__auto____$4)){
var and__5000__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5000__auto____$5)){
var and__5000__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5000__auto____$6)){
var and__5000__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5000__auto____$7)){
var and__5000__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5000__auto____$8)){
var and__5000__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5000__auto____$9)){
var and__5000__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5000__auto____$10)){
var and__5000__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5000__auto____$11)){
var and__5000__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__5000__auto____$12)){
var and__5000__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__5000__auto____$13)){
var and__5000__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(and__5000__auto____$14)){
return sci.impl.evaluator.eval(ctx,bindings,arg15);
} else {
return and__5000__auto____$14;
}
} else {
return and__5000__auto____$13;
}
} else {
return and__5000__auto____$12;
}
} else {
return and__5000__auto____$11;
}
} else {
return and__5000__auto____$10;
}
} else {
return and__5000__auto____$9;
}
} else {
return and__5000__auto____$8;
}
} else {
return and__5000__auto____$7;
}
} else {
return and__5000__auto____$6;
}
} else {
return and__5000__auto____$5;
}
} else {
return and__5000__auto____$4;
}
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}),expr);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5000__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5000__auto____$2)){
var and__5000__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5000__auto____$3)){
var and__5000__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5000__auto____$4)){
var and__5000__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5000__auto____$5)){
var and__5000__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5000__auto____$6)){
var and__5000__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5000__auto____$7)){
var and__5000__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5000__auto____$8)){
var and__5000__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5000__auto____$9)){
var and__5000__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5000__auto____$10)){
var and__5000__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5000__auto____$11)){
var and__5000__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__5000__auto____$12)){
var and__5000__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__5000__auto____$13)){
var and__5000__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(and__5000__auto____$14)){
var and__5000__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(and__5000__auto____$15)){
return sci.impl.evaluator.eval(ctx,bindings,arg16);
} else {
return and__5000__auto____$15;
}
} else {
return and__5000__auto____$14;
}
} else {
return and__5000__auto____$13;
}
} else {
return and__5000__auto____$12;
}
} else {
return and__5000__auto____$11;
}
} else {
return and__5000__auto____$10;
}
} else {
return and__5000__auto____$9;
}
} else {
return and__5000__auto____$8;
}
} else {
return and__5000__auto____$7;
}
} else {
return and__5000__auto____$6;
}
} else {
return and__5000__auto____$5;
}
} else {
return and__5000__auto____$4;
}
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}),expr);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5000__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5000__auto____$2)){
var and__5000__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5000__auto____$3)){
var and__5000__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5000__auto____$4)){
var and__5000__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5000__auto____$5)){
var and__5000__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5000__auto____$6)){
var and__5000__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5000__auto____$7)){
var and__5000__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5000__auto____$8)){
var and__5000__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5000__auto____$9)){
var and__5000__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5000__auto____$10)){
var and__5000__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5000__auto____$11)){
var and__5000__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__5000__auto____$12)){
var and__5000__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__5000__auto____$13)){
var and__5000__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(and__5000__auto____$14)){
var and__5000__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(and__5000__auto____$15)){
var and__5000__auto____$16 = sci.impl.evaluator.eval(ctx,bindings,arg16);
if(cljs.core.truth_(and__5000__auto____$16)){
return sci.impl.evaluator.eval(ctx,bindings,arg17);
} else {
return and__5000__auto____$16;
}
} else {
return and__5000__auto____$15;
}
} else {
return and__5000__auto____$14;
}
} else {
return and__5000__auto____$13;
}
} else {
return and__5000__auto____$12;
}
} else {
return and__5000__auto____$11;
}
} else {
return and__5000__auto____$10;
}
} else {
return and__5000__auto____$9;
}
} else {
return and__5000__auto____$8;
}
} else {
return and__5000__auto____$7;
}
} else {
return and__5000__auto____$6;
}
} else {
return and__5000__auto____$5;
}
} else {
return and__5000__auto____$4;
}
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}),expr);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5000__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5000__auto____$2)){
var and__5000__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5000__auto____$3)){
var and__5000__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5000__auto____$4)){
var and__5000__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5000__auto____$5)){
var and__5000__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5000__auto____$6)){
var and__5000__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5000__auto____$7)){
var and__5000__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5000__auto____$8)){
var and__5000__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5000__auto____$9)){
var and__5000__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5000__auto____$10)){
var and__5000__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5000__auto____$11)){
var and__5000__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__5000__auto____$12)){
var and__5000__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__5000__auto____$13)){
var and__5000__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(and__5000__auto____$14)){
var and__5000__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(and__5000__auto____$15)){
var and__5000__auto____$16 = sci.impl.evaluator.eval(ctx,bindings,arg16);
if(cljs.core.truth_(and__5000__auto____$16)){
var and__5000__auto____$17 = sci.impl.evaluator.eval(ctx,bindings,arg17);
if(cljs.core.truth_(and__5000__auto____$17)){
return sci.impl.evaluator.eval(ctx,bindings,arg18);
} else {
return and__5000__auto____$17;
}
} else {
return and__5000__auto____$16;
}
} else {
return and__5000__auto____$15;
}
} else {
return and__5000__auto____$14;
}
} else {
return and__5000__auto____$13;
}
} else {
return and__5000__auto____$12;
}
} else {
return and__5000__auto____$11;
}
} else {
return and__5000__auto____$10;
}
} else {
return and__5000__auto____$9;
}
} else {
return and__5000__auto____$8;
}
} else {
return and__5000__auto____$7;
}
} else {
return and__5000__auto____$6;
}
} else {
return and__5000__auto____$5;
}
} else {
return and__5000__auto____$4;
}
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}),expr);

break;
default:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.evaluator.eval_and(ctx,bindings,analyzed_children);
}),expr);

}
});
sci.impl.analyzer.recur_0 = sci.impl.fns.__GT_Recur(cljs.core.PersistentVector.EMPTY);
sci.impl.analyzer.return_recur = (function sci$impl$analyzer$return_recur(expr,analyzed_children){
var G__36719 = cljs.core.count(analyzed_children);
switch (G__36719) {
case (0):
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (_,_bindings){
return sci.impl.analyzer.recur_0;
}),expr);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0)], null));
}),expr);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1)], null));
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2)], null));
}),expr);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3)], null));
}),expr);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4)], null));
}),expr);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5)], null));
}),expr);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6)], null));
}),expr);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7)], null));
}),expr);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8)], null));
}),expr);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9)], null));
}),expr);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10)], null));
}),expr);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11)], null));
}),expr);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12)], null));
}),expr);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13)], null));
}),expr);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14)], null));
}),expr);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14),sci.impl.evaluator.eval(ctx,bindings,arg15)], null));
}),expr);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14),sci.impl.evaluator.eval(ctx,bindings,arg15),sci.impl.evaluator.eval(ctx,bindings,arg16)], null));
}),expr);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14),sci.impl.evaluator.eval(ctx,bindings,arg15),sci.impl.evaluator.eval(ctx,bindings,arg16),sci.impl.evaluator.eval(ctx,bindings,arg17)], null));
}),expr);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14),sci.impl.evaluator.eval(ctx,bindings,arg15),sci.impl.evaluator.eval(ctx,bindings,arg16),sci.impl.evaluator.eval(ctx,bindings,arg17),sci.impl.evaluator.eval(ctx,bindings,arg18)], null));
}),expr);

break;
default:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),analyzed_children);
}),expr);

}
});
sci.impl.analyzer.analyze_children = (function sci$impl$analyzer$analyze_children(ctx,children){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36720_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,p1__36720_SHARP_) : sci.impl.analyzer.analyze.call(null, ctx,p1__36720_SHARP_));
}),children);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sci.impl.analyzer.FnBody = (function (params,body,fixed_arity,var_arg_name,bindings_fn,__meta,__extmap,__hash){
this.params = params;
this.body = body;
this.fixed_arity = fixed_arity;
this.var_arg_name = var_arg_name;
this.bindings_fn = bindings_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k36722,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__36726 = k36722;
var G__36726__$1 = (((G__36726 instanceof cljs.core.Keyword))?G__36726.fqn:null);
switch (G__36726__$1) {
case "params":
return self__.params;

break;
case "body":
return self__.body;

break;
case "fixed-arity":
return self__.fixed_arity;

break;
case "var-arg-name":
return self__.var_arg_name;

break;
case "bindings-fn":
return self__.bindings_fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36722,else__5303__auto__);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__36727){
var vec__36728 = p__36727;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36728,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36728,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#sci.impl.analyzer.FnBody{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),self__.fixed_arity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),self__.var_arg_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951),self__.bindings_fn],null))], null),self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36721){
var self__ = this;
var G__36721__$1 = this;
return (new cljs.core.RecordIter((0),G__36721__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,self__.__extmap,self__.__hash));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (1733662014 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36723,other36724){
var self__ = this;
var this36723__$1 = this;
return (((!((other36724 == null)))) && ((((this36723__$1.constructor === other36724.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36723__$1.params,other36724.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36723__$1.body,other36724.body)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36723__$1.fixed_arity,other36724.fixed_arity)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36723__$1.var_arg_name,other36724.var_arg_name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36723__$1.bindings_fn,other36724.bindings_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36723__$1.__extmap,other36724.__extmap)))))))))))))));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),null,new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951),null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k36722){
var self__ = this;
var this__5307__auto____$1 = this;
var G__36731 = k36722;
var G__36731__$1 = (((G__36731 instanceof cljs.core.Keyword))?G__36731.fqn:null);
switch (G__36731__$1) {
case "params":
case "body":
case "fixed-arity":
case "var-arg-name":
case "bindings-fn":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36722);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__36721){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__36732 = cljs.core.keyword_identical_QMARK_;
var expr__36733 = k__5309__auto__;
if(cljs.core.truth_((pred__36732.cljs$core$IFn$_invoke$arity$2 ? pred__36732.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__36733) : pred__36732.call(null, new cljs.core.Keyword(null,"params","params",710516235),expr__36733)))){
return (new sci.impl.analyzer.FnBody(G__36721,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36732.cljs$core$IFn$_invoke$arity$2 ? pred__36732.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669),expr__36733) : pred__36732.call(null, new cljs.core.Keyword(null,"body","body",-2049205669),expr__36733)))){
return (new sci.impl.analyzer.FnBody(self__.params,G__36721,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36732.cljs$core$IFn$_invoke$arity$2 ? pred__36732.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__36733) : pred__36732.call(null, new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__36733)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,G__36721,self__.var_arg_name,self__.bindings_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36732.cljs$core$IFn$_invoke$arity$2 ? pred__36732.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__36733) : pred__36732.call(null, new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__36733)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,G__36721,self__.bindings_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36732.cljs$core$IFn$_invoke$arity$2 ? pred__36732.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951),expr__36733) : pred__36732.call(null, new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951),expr__36733)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,G__36721,self__.__meta,self__.__extmap,null));
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__36721),null));
}
}
}
}
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"body","body",-2049205669),self__.body,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),self__.fixed_arity,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),self__.var_arg_name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951),self__.bindings_fn,null))], null),self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__36721){
var self__ = this;
var this__5299__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,G__36721,self__.__extmap,self__.__hash));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(sci.impl.analyzer.FnBody.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"fixed-arity","fixed-arity",-1067989900,null),new cljs.core.Symbol(null,"var-arg-name","var-arg-name",540506640,null),new cljs.core.Symbol(null,"bindings-fn","bindings-fn",1941331478,null)], null);
}));

(sci.impl.analyzer.FnBody.cljs$lang$type = true);

(sci.impl.analyzer.FnBody.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"sci.impl.analyzer/FnBody",null,(1),null));
}));

(sci.impl.analyzer.FnBody.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"sci.impl.analyzer/FnBody");
}));

/**
 * Positional factory function for sci.impl.analyzer/FnBody.
 */
sci.impl.analyzer.__GT_FnBody = (function sci$impl$analyzer$__GT_FnBody(params,body,fixed_arity,var_arg_name,bindings_fn){
return (new sci.impl.analyzer.FnBody(params,body,fixed_arity,var_arg_name,bindings_fn,null,null,null));
});

/**
 * Factory function for sci.impl.analyzer/FnBody, taking a map of keywords to field values.
 */
sci.impl.analyzer.map__GT_FnBody = (function sci$impl$analyzer$map__GT_FnBody(G__36725){
var extmap__5342__auto__ = (function (){var G__36735 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36725,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951)], 0));
if(cljs.core.record_QMARK_(G__36725)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36735);
} else {
return G__36735;
}
})();
return (new sci.impl.analyzer.FnBody(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__36725),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__36725),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(G__36725),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(G__36725),new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951).cljs$core$IFn$_invoke$arity$1(G__36725),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

sci.impl.analyzer.expand_fn_args_PLUS_body = (function sci$impl$analyzer$expand_fn_args_PLUS_body(p__36739,p__36740,macro_QMARK_){
var map__36741 = p__36739;
var map__36741__$1 = cljs.core.__destructure_map(map__36741);
var ctx = map__36741__$1;
var fn_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36741__$1,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985));
var vec__36742 = p__36740;
var seq__36743 = cljs.core.seq(vec__36742);
var first__36744 = cljs.core.first(seq__36743);
var seq__36743__$1 = cljs.core.next(seq__36743);
var binding_vector = first__36744;
var body_exprs = seq__36743__$1;
if(cljs.core.truth_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",fn_expr);
}

if(cljs.core.vector_QMARK_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration should be a vector",fn_expr);
}

var binding_vector__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",1482799337,null),new cljs.core.Symbol(null,"&env","&env",-919163083,null)], null),binding_vector):binding_vector);
var fixed_args = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__36736_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__36736_SHARP_);
}),binding_vector__$1);
var fixed_arity = cljs.core.count(fixed_args);
var var_arg_name = cljs.core.second(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__36737_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__36737_SHARP_);
}),binding_vector__$1));
var next_body = cljs.core.next(body_exprs);
var conds = ((next_body)?(function (){var e = cljs.core.first(body_exprs);
if(cljs.core.map_QMARK_(e)){
return e;
} else {
return null;
}
})():null);
var body_exprs__$1 = (cljs.core.truth_(conds)?next_body:body_exprs);
var conds__$1 = (function (){var or__5002__auto__ = conds;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.meta(binding_vector__$1);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body_exprs__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body_exprs__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body_exprs__$1))):cljs.core.first(body_exprs__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body_exprs__$1);
var body_exprs__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body_exprs__$2):body_exprs__$2);
var map__36745 = sci.impl.utils.maybe_destructured(binding_vector__$1,body_exprs__$3);
var map__36745__$1 = cljs.core.__destructure_map(map__36745);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36745__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36745__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var param_bindings = cljs.core.zipmap(params,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));
var bindings = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var binding_cnt = cljs.core.count(bindings);
var vec__36746 = (function (){var temp__5802__auto__ = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5802__auto__)){
var cb = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"param-map","param-map",-514769759),param_bindings),cb], null);
} else {
if(cljs.core.empty_QMARK_(bindings)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,null], null);
} else {
var cb = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037),cb,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"param-map","param-map",-514769759),param_bindings], 0)),cb], null);
}
}
})();
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36746,(0),null);
var closure_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36746,(1),null);
var ctx__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bindings,param_bindings], 0)));
var ana_children = sci.impl.analyzer.analyze_children(ctx__$2,body);
var body__$1 = sci.impl.analyzer.return_do(fn_expr,ana_children);
var closure_bindings__$1 = (cljs.core.truth_(closure_bindings)?cljs.core.deref(closure_bindings):null);
var closure_binding_cnt = (cljs.core.truth_(closure_bindings__$1)?cljs.core.count(closure_bindings__$1):null);
var bindings_fn = (cljs.core.truth_(closure_bindings__$1)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding_cnt,closure_binding_cnt))?cljs.core.identity:(function (p1__36738_SHARP_){
return cljs.core.select_keys(p1__36738_SHARP_,closure_bindings__$1);
})):cljs.core.identity);
return sci.impl.analyzer.__GT_FnBody(params,body__$1,fixed_arity,var_arg_name,bindings_fn);
});
sci.impl.analyzer.analyzed_fn_meta = (function sci$impl$analyzer$analyzed_fn_meta(ctx,m){
var meta_needs_eval_QMARK_ = (cljs.core.count(m) > (2));
var m__$1 = ((meta_needs_eval_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__36749 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__36750 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__36749,G__36750) : sci.impl.analyzer.analyze.call(null, G__36749,G__36750));
})(),cljs.core.assoc,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"eval","eval",-1103567905)):m);
return m__$1;
});
sci.impl.analyzer.expand_fn_STAR_ = (function sci$impl$analyzer$expand_fn_STAR_(ctx,p__36751,macro_QMARK_){
var vec__36752 = p__36751;
var seq__36753 = cljs.core.seq(vec__36752);
var first__36754 = cljs.core.first(seq__36753);
var seq__36753__$1 = cljs.core.next(seq__36753);
var _fn = first__36754;
var first__36754__$1 = cljs.core.first(seq__36753__$1);
var seq__36753__$2 = cljs.core.next(seq__36753__$1);
var name_QMARK_ = first__36754__$1;
var body = seq__36753__$2;
var fn_expr = vec__36752;
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985),fn_expr);
var fn_name = (((name_QMARK_ instanceof cljs.core.Symbol))?name_QMARK_:null);
var body__$1 = (cljs.core.truth_(fn_name)?body:cljs.core.cons(name_QMARK_,body));
var bodies = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?body__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body__$1], null));
var self_ref = (cljs.core.truth_(fn_name)?cljs.core.volatile_BANG_(null):null);
var ctx__$2 = (cljs.core.truth_(fn_name)?cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.Keyword(null,"self-ref","self-ref",1760385189),self_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name], null),new cljs.core.Keyword("sci.impl.analyzer","self-ref","sci.impl.analyzer/self-ref",-976932794)):ctx__$1);
var analyzed_bodies = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__36755,body__$2){
var map__36756 = p__36755;
var map__36756__$1 = cljs.core.__destructure_map(map__36756);
var acc = map__36756__$1;
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36756__$1,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124));
var min_varargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36756__$1,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596));
var arglist = cljs.core.first(body__$2);
var body__$3 = sci.impl.analyzer.expand_fn_args_PLUS_body(ctx__$2,body__$2,macro_QMARK_);
var var_arg_name = body__$3.var_arg_name;
var fixed_arity = body__$3.fixed_arity;
var new_min_varargs = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_((function (){var and__5000__auto__ = var_arg_name;
if(cljs.core.truth_(and__5000__auto__)){
return min_varargs;
} else {
return and__5000__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location("Can't have more than 1 variadic overload",fn_expr);
} else {
}

if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not(var_arg_name);
if(and__5000__auto__){
var and__5000__auto____$1 = min_varargs;
if(cljs.core.truth_(and__5000__auto____$1)){
return (fixed_arity > min_varargs);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location("Can't have fixed arity function with more params than variadic function",fn_expr);
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596),new_min_varargs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(function (){var x__5087__auto__ = fixed_arity;
var y__5088__auto__ = max_fixed;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})()], 0)),new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.conj,body__$3),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.conj,arglist);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"min-var-args","min-var-args",-1883389660),null,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(-1)], null),bodies);
var arities = new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var arglists = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var fn_meta = cljs.core.meta(fn_expr);
var ana_fn_meta = sci.impl.analyzer.analyzed_fn_meta(ctx__$2,fn_meta);
var fn_meta__$1 = (((fn_meta === ana_fn_meta))?null:cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(ana_fn_meta,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"end-column","end-column",1425389514)], 0)));
var struct = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661),arities,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name,new cljs.core.Keyword("sci.impl","self-ref","sci.impl/self-ref",-1645822084),(cljs.core.truth_(self_ref)?cljs.core.deref(self_ref):null),new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395),arglists,new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),true,new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639),fn_meta__$1], null);
return struct;
});
sci.impl.analyzer.fn_ctx_fn = (function sci$impl$analyzer$fn_ctx_fn(_ctx,struct,fn_meta){
var fn_name = new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569).cljs$core$IFn$_invoke$arity$1(struct);
var fn_bodies = new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661).cljs$core$IFn$_invoke$arity$1(struct);
var macro_QMARK_ = new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(struct);
var self_ref = new cljs.core.Keyword("sci.impl","self-ref","sci.impl/self-ref",-1645822084).cljs$core$IFn$_invoke$arity$1(struct);
var single_arity = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fn_bodies)))?cljs.core.first(fn_bodies):null);
if(cljs.core.truth_(fn_meta)){
return (function (ctx,bindings){
var fn_meta__$1 = sci.impl.evaluator.handle_meta(ctx,bindings,fn_meta);
var f = sci.impl.fns.eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(f,cljs.core.merge,fn_meta__$1);
});
} else {
return (function (ctx,bindings){
return sci.impl.fns.eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref);
});
}
});
sci.impl.analyzer.expand_fn = (function sci$impl$analyzer$expand_fn(ctx,fn_expr,macro_QMARK_){
var struct = sci.impl.analyzer.expand_fn_STAR_(ctx,fn_expr,macro_QMARK_);
var fn_meta = new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639).cljs$core$IFn$_invoke$arity$1(struct);
var ctxfn = sci.impl.analyzer.fn_ctx_fn(ctx,struct,fn_meta);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4(ctxfn,struct,fn_expr,null);
});
sci.impl.analyzer.expand_let_STAR_ = (function sci$impl$analyzer$expand_let_STAR_(ctx,expr,destructured_let_bindings,exprs){
var vec__36757 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__36760,p__36761){
var vec__36762 = p__36760;
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36762,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36762,(1),null);
var vec__36765 = p__36761;
var binding_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36765,(0),null);
var binding_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36765,(1),null);
var m = cljs.core.meta(binding_value);
var t = (cljs.core.truth_(m)?new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m):null);
var binding_name__$1 = (cljs.core.truth_(t)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(binding_name,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),t):binding_name);
var v = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,binding_value) : sci.impl.analyzer.analyze.call(null, ctx__$1,binding_value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$5(ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.assoc,binding_name__$1,v),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new_let_bindings,binding_name__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),destructured_let_bindings));
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36757,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36757,(1),null);
var body = sci.impl.analyzer.analyze_children(ctx__$1,exprs);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$2,bindings){
return sci.impl.evaluator.eval_let(ctx__$2,bindings,new_let_bindings,body);
}),expr);
});
/**
 * The let macro from clojure.core
 */
sci.impl.analyzer.expand_let = (function sci$impl$analyzer$expand_let(ctx,p__36768){
var vec__36769 = p__36768;
var seq__36770 = cljs.core.seq(vec__36769);
var first__36771 = cljs.core.first(seq__36770);
var seq__36770__$1 = cljs.core.next(seq__36770);
var _let = first__36771;
var first__36771__$1 = cljs.core.first(seq__36770__$1);
var seq__36770__$2 = cljs.core.next(seq__36770__$1);
var let_bindings = first__36771__$1;
var exprs = seq__36770__$2;
var expr = vec__36769;
var let_bindings__$1 = sci.impl.destructure.destructure(let_bindings);
return sci.impl.analyzer.expand_let_STAR_(ctx,expr,let_bindings__$1,exprs);
});
sci.impl.analyzer.expand_def = (function sci$impl$analyzer$expand_def(ctx,expr){
var vec__36772 = expr;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36772,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36772,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36772,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36772,(3),null);
var G__36775_37882 = ctx;
var G__36776_37883 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,var_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__36775_37882,G__36776_37883) : sci.impl.analyzer.expand_declare.call(null, G__36775_37882,G__36776_37883));

if(cljs.core.simple_symbol_QMARK_(var_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

var arg_count = cljs.core.count(expr);
var docstring = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arg_count)) && (typeof _QMARK_docstring === 'string')))?_QMARK_docstring:null);
var expected_arg_count = (cljs.core.truth_(docstring)?(4):(3));
if((arg_count <= expected_arg_count)){
} else {
throw (new Error("Too many arguments to def"));
}

var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arg_count))?new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647):(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.analyzer.analyze.call(null, ctx,init)));
var m = cljs.core.meta(var_name);
var m__$1 = (function (){var G__36777 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__36778 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__36777,G__36778) : sci.impl.analyzer.analyze.call(null, G__36777,G__36778));
})();
var m__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns));
var m__$3 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$2,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m__$2);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.evaluator.eval_def(ctx__$1,bindings,var_name,init__$1,m__$3);
}),expr);
});
sci.impl.analyzer.expand_defn = (function sci$impl$analyzer$expand_defn(ctx,p__36779){
var vec__36780 = p__36779;
var seq__36781 = cljs.core.seq(vec__36780);
var first__36782 = cljs.core.first(seq__36781);
var seq__36781__$1 = cljs.core.next(seq__36781);
var op = first__36782;
var first__36782__$1 = cljs.core.first(seq__36781__$1);
var seq__36781__$2 = cljs.core.next(seq__36781__$1);
var fn_name = first__36782__$1;
var body = seq__36781__$2;
var expr = vec__36780;
if(cljs.core.simple_symbol_QMARK_(fn_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

var G__36783_37889 = ctx;
var G__36784_37890 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,fn_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__36783_37889,G__36784_37890) : sci.impl.analyzer.expand_declare.call(null, G__36783_37889,G__36784_37890));

var macro_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("defmacro",cljs.core.name(op));
var vec__36785 = cljs.core.split_with(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.sequential_QMARK_),body);
var pre_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36785,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36785,(1),null);
var _ = ((cljs.core.empty_QMARK_(body__$1))?sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",expr):null);
var docstring = (function (){var temp__5804__auto__ = cljs.core.first(pre_body);
if(cljs.core.truth_(temp__5804__auto__)){
var ds = temp__5804__auto__;
if(typeof ds === 'string'){
return ds;
} else {
return null;
}
} else {
return null;
}
})();
var meta_map = (function (){var temp__5804__auto__ = cljs.core.last(pre_body);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
if(cljs.core.map_QMARK_(m)){
return m;
} else {
return null;
}
} else {
return null;
}
})();
var vec__36788 = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?(function (){var lb = cljs.core.last(body__$1);
if(cljs.core.map_QMARK_(lb)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lb,cljs.core.butlast(body__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body__$1], null);
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body__$1], null));
var meta_map2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36788,(0),null);
var body__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36788,(1),null);
var meta_map__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(fn_name),cljs.core.meta(expr),meta_map], 0));
var meta_map__$2 = (cljs.core.truth_(meta_map2)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta_map__$1,meta_map2], 0)):meta_map__$1);
var meta_map__$3 = (function (){var G__36791 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__36792 = meta_map__$2;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__36791,G__36792) : sci.impl.analyzer.analyze.call(null, G__36791,G__36792));
})();
var fn_body = cljs.core.with_meta(cljs.core.cons(new cljs.core.Symbol(null,"fn","fn",465265323,null),body__$2),cljs.core.meta(expr));
var f = sci.impl.analyzer.expand_fn_STAR_(ctx,fn_body,macro_QMARK_);
var arglists = cljs.core.seq(new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395).cljs$core$IFn$_invoke$arity$1(f));
var meta_map__$4 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(meta_map__$3,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists], 0));
var meta_map__$5 = (function (){var G__36793 = meta_map__$4;
var G__36793__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36793,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):G__36793);
if(macro_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36793__$1,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
return G__36793__$1;
}
})();
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name,new cljs.core.Keyword("sci.impl","defn","sci.impl/defn",1087257818),true], 0));
var fn_meta = new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639).cljs$core$IFn$_invoke$arity$1(f__$1);
var ctxfn = sci.impl.analyzer.fn_ctx_fn(ctx,f__$1,fn_meta);
var f__$2 = sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$3(ctxfn,f__$1,f__$1);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.evaluator.eval_def(ctx__$1,bindings,fn_name,f__$2,meta_map__$5);
}),expr);
});
sci.impl.analyzer.expand_loop = (function sci$impl$analyzer$expand_loop(ctx,expr){
var bv = cljs.core.second(expr);
var arg_names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bv);
var init_vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(bv));
var vec__36794 = ((cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,arg_names))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bv,arg_names], null):(function (){var syms = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_names),(function (){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}));
var bv1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,syms,init_vals);
var bv2 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,arg_names,syms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bv1,bv2)),syms], null);
})());
var bv__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36794,(0),null);
var syms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36794,(1),null);
var body = cljs.core.nnext(expr);
var expansion = (new cljs.core.List(null,new cljs.core.Symbol(null,"let","let",358118826,null),(new cljs.core.List(null,bv__$1,(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(arg_names),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),syms),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,expansion) : sci.impl.analyzer.analyze.call(null, ctx,expansion));
});
sci.impl.analyzer.analyze_lazy_seq = (function sci$impl$analyzer$analyze_lazy_seq(ctx,expr){
var body = cljs.core.rest(expr);
var ana = (function (){var G__36797 = ctx;
var G__36798 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__36797,G__36798) : sci.impl.analyzer.analyze.call(null, G__36797,G__36798));
})();
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return (new cljs.core.LazySeq(null,(function (){
return sci.impl.evaluator.eval(ctx__$1,bindings,ana);
}),null,null));
}),expr);
});
sci.impl.analyzer.return_if = (function sci$impl$analyzer$return_if(ctx,expr){
var exprs = cljs.core.rest(expr);
var children = sci.impl.analyzer.analyze_children(ctx,exprs);
var G__36799 = cljs.core.count(children);
switch (G__36799) {
case (0):
case (1):
return sci.impl.analyzer.throw_error_with_location("Too few arguments to if",expr);

break;
case (2):
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
if(cljs.core.not(condition)){
return null;
} else {
if(sci.impl.utils.constant_QMARK_(condition)){
return then;
} else {
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$1,bindings){
if(cljs.core.truth_(sci.impl.evaluator.eval(ctx__$1,bindings,condition))){
return sci.impl.evaluator.eval(ctx__$1,bindings,then);
} else {
return null;
}
}),null,expr,null);

}
}

break;
case (3):
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(2));
if(cljs.core.not(condition)){
return else$;
} else {
if(sci.impl.utils.constant_QMARK_(condition)){
return then;
} else {
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$1,bindings){
if(cljs.core.truth_(sci.impl.evaluator.eval(ctx__$1,bindings,condition))){
return sci.impl.evaluator.eval(ctx__$1,bindings,then);
} else {
return sci.impl.evaluator.eval(ctx__$1,bindings,else$);
}
}),null,expr,null);

}
}

break;
default:
return sci.impl.analyzer.throw_error_with_location("Too many arguments to if",expr);

}
});
sci.impl.analyzer.analyze_case = (function sci$impl$analyzer$analyze_case(ctx,expr){
var case_val = (function (){var G__36803 = ctx;
var G__36804 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__36803,G__36804) : sci.impl.analyzer.analyze.call(null, G__36803,G__36804));
})();
var clauses = cljs.core.nnext(expr);
var match_clauses = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),clauses);
var result_clauses = sci.impl.analyzer.analyze_children(ctx,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(clauses)));
var vec__36800 = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,(function (){var G__36805 = ctx;
var G__36806 = cljs.core.last(clauses);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__36805,G__36806) : sci.impl.analyzer.analyze.call(null, G__36805,G__36806));
})()], null):null);
var default_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36800,(0),null);
var case_default = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36800,(1),null);
var cases = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(match_clauses,result_clauses);
var assoc_new = (function (m,k,v){
if((!(cljs.core.contains_QMARK_(m,k)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return sci.impl.analyzer.throw_error_with_location(["Duplicate case test constant ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),expr);
}
});
var case_map = (function (){var cases__$1 = cljs.core.seq(cases);
var ret_map = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cases__$1){
var vec__36810 = cases__$1;
var seq__36811 = cljs.core.seq(vec__36810);
var first__36812 = cljs.core.first(seq__36811);
var seq__36811__$1 = cljs.core.next(seq__36811);
var k = first__36812;
var first__36812__$1 = cljs.core.first(seq__36811__$1);
var seq__36811__$2 = cljs.core.next(seq__36811__$1);
var v = first__36812__$1;
var cases__$2 = seq__36811__$2;
if(cljs.core.seq_QMARK_(k)){
var G__37920 = cases__$2;
var G__37921 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cases__$1,ret_map,vec__36810,seq__36811,first__36812,seq__36811__$1,k,first__36812__$1,seq__36811__$2,v,cases__$2,case_val,clauses,match_clauses,result_clauses,vec__36800,default_QMARK_,case_default,cases,assoc_new){
return (function (acc,k__$1){
return assoc_new(acc,k__$1,v);
});})(cases__$1,ret_map,vec__36810,seq__36811,first__36812,seq__36811__$1,k,first__36812__$1,seq__36811__$2,v,cases__$2,case_val,clauses,match_clauses,result_clauses,vec__36800,default_QMARK_,case_default,cases,assoc_new))
,ret_map,k);
cases__$1 = G__37920;
ret_map = G__37921;
continue;
} else {
var G__37922 = cases__$2;
var G__37923 = assoc_new(ret_map,k,v);
cases__$1 = G__37922;
ret_map = G__37923;
continue;
}
} else {
return ret_map;
}
break;
}
})();
var f = (cljs.core.truth_(default_QMARK_)?(function (ctx__$1,bindings){
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5(ctx__$1,bindings,case_map,case_val,case_default);
}):(function (ctx__$1,bindings){
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4(ctx__$1,bindings,case_map,case_val);
}));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4(f,null,expr,null);
});
sci.impl.analyzer.analyze_try = (function sci$impl$analyzer$analyze_try(ctx,expr){
var body = cljs.core.next(expr);
var vec__36813 = (function (){var exprs = body;
var body_exprs = cljs.core.PersistentVector.EMPTY;
var catch_exprs = cljs.core.PersistentVector.EMPTY;
var finally_expr = null;
while(true){
if(exprs){
var expr__$1 = cljs.core.first(exprs);
var exprs__$1 = cljs.core.next(exprs);
if(((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),cljs.core.first(expr__$1))))){
var G__37927 = exprs__$1;
var G__37928 = body_exprs;
var G__37929 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(catch_exprs,expr__$1);
var G__37930 = finally_expr;
exprs = G__37927;
body_exprs = G__37928;
catch_exprs = G__37929;
finally_expr = G__37930;
continue;
} else {
if(((cljs.core.not(exprs__$1)) && (((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"finally","finally",-1065347064,null),cljs.core.first(expr__$1))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,expr__$1], null);
} else {
var G__37931 = exprs__$1;
var G__37932 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body_exprs,expr__$1);
var G__37933 = catch_exprs;
var G__37934 = finally_expr;
exprs = G__37931;
body_exprs = G__37932;
catch_exprs = G__37933;
finally_expr = G__37934;
continue;

}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,finally_expr], null);
}
break;
}
})();
var body_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36813,(0),null);
var catches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36813,(1),null);
var finally$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36813,(2),null);
var body__$1 = (function (){var G__36816 = ctx;
var G__36817 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body_exprs);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__36816,G__36817) : sci.impl.analyzer.analyze.call(null, G__36816,G__36817));
})();
var catches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
var vec__36818 = c;
var seq__36819 = cljs.core.seq(vec__36818);
var first__36820 = cljs.core.first(seq__36819);
var seq__36819__$1 = cljs.core.next(seq__36819);
var _ = first__36820;
var first__36820__$1 = cljs.core.first(seq__36819__$1);
var seq__36819__$2 = cljs.core.next(seq__36819__$1);
var ex = first__36820__$1;
var first__36820__$2 = cljs.core.first(seq__36819__$2);
var seq__36819__$3 = cljs.core.next(seq__36819__$2);
var binding = first__36820__$2;
var body__$2 = seq__36819__$3;
var temp__5802__auto__ = (function (){var G__36821 = ex;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),G__36821)){
return Error;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Object","js/Object",61215323,null),G__36821)){
return Object;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__36821)){
return new cljs.core.Keyword(null,"default","default",-1987822328);
} else {
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.analyzer.analyze.call(null, ctx,ex));

}
}
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var clazz = temp__5802__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),clazz,new cljs.core.Keyword(null,"binding","binding",539932593),binding,new cljs.core.Keyword(null,"body","body",-2049205669),(function (){var G__36822 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),binding], null),null);
var G__36823 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body__$2);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__36822,G__36823) : sci.impl.analyzer.analyze.call(null, G__36822,G__36823));
})()], null);
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex)].join(''),ex);
}
}),catches);
var finally$__$1 = (cljs.core.truth_(finally$)?(function (){var G__36824 = ctx;
var G__36825 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.rest(finally$));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__36824,G__36825) : sci.impl.analyzer.analyze.call(null, G__36824,G__36825));
})():null);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.evaluator.eval_try(ctx__$1,bindings,body__$1,catches__$1,finally$__$1);
}),expr);
});
sci.impl.analyzer.analyze_throw = (function sci$impl$analyzer$analyze_throw(ctx,p__36826){
var vec__36827 = p__36826;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36827,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36827,(1),null);
var expr = vec__36827;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(expr))){
} else {
sci.impl.analyzer.throw_error_with_location("Too many arguments to throw",expr);
}

var ana = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.analyzer.analyze.call(null, ctx,ex));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$1,bindings){
throw sci.impl.evaluator.eval(ctx__$1,bindings,ana);
}),expr,null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword(null,"special","special",-1125941630),true], 0)));
});
sci.impl.analyzer.expand_declare = (function sci$impl$analyzer$expand_declare(ctx,p__36830){
var vec__36831 = p__36830;
var seq__36832 = cljs.core.seq(vec__36831);
var first__36833 = cljs.core.first(seq__36832);
var seq__36832__$1 = cljs.core.next(seq__36832);
var _declare = first__36833;
var names = seq__36832__$1;
var expr = vec__36831;
var cnn_37941 = sci.impl.vars.current_ns_name();
var env_37942 = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var the_current_ns_37943 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(env_37942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_37941], null));
var refers_37944 = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns_37943);
var the_current_ns_37945__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,name){
var temp__5802__auto__ = (function (){var and__5000__auto__ = refers_37944;
if(cljs.core.truth_(and__5000__auto__)){
return refers_37944.get(name);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var x = temp__5802__auto__;
return sci.impl.analyzer.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," already refers to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_37941)].join(''),expr);
} else {
if(cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns_37943,name))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,name,(function (){var G__36834 = sci.impl.vars.__GT_SciVar(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_37941),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(name),new cljs.core.Keyword(null,"name","name",1843675177),name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)),false);
G__36834.sci$impl$vars$IVar$unbind$arity$1(null, );

return G__36834;
})());
} else {
return the_current_ns_37943;
}
}
}),the_current_ns_37943,names);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_37942,(function (env__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.assoc,cnn_37941,the_current_ns_37945__$1);
}));

return null;
});
sci.impl.analyzer.expand_dot = (function sci$impl$analyzer$expand_dot(ctx,p__36835){
var vec__36836 = p__36835;
var seq__36837 = cljs.core.seq(vec__36836);
var first__36838 = cljs.core.first(seq__36837);
var seq__36837__$1 = cljs.core.next(seq__36837);
var _dot = first__36838;
var first__36838__$1 = cljs.core.first(seq__36837__$1);
var seq__36837__$2 = cljs.core.next(seq__36837__$1);
var instance_expr = first__36838__$1;
var first__36838__$2 = cljs.core.first(seq__36837__$2);
var seq__36837__$3 = cljs.core.next(seq__36837__$2);
var method_expr = first__36838__$2;
var args = seq__36837__$3;
var expr = vec__36836;
var vec__36839 = ((cljs.core.seq_QMARK_(method_expr))?method_expr:cljs.core.cons(method_expr,args));
var seq__36840 = cljs.core.seq(vec__36839);
var first__36841 = cljs.core.first(seq__36840);
var seq__36840__$1 = cljs.core.next(seq__36840);
var method_expr__$1 = first__36841;
var args__$1 = seq__36840__$1;
var instance_expr__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.analyzer.analyze.call(null, ctx,instance_expr));
var instance_expr__$2 = sci.impl.utils.vary_meta_STAR_(instance_expr__$1,(function (m){
var temp__5802__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5802__auto__)){
var t = temp__5802__auto__;
var clazz = (function (){var or__5002__auto__ = sci.impl.interop.resolve_class(ctx,t);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = sci.impl.records.resolve_record_class(ctx,t);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''),t);
}
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"tag-class","tag-class",714967874),clazz);
} else {
return m;
}
}));
var method_name = cljs.core.name(method_expr__$1);
var args__$2 = ((args__$1)?sci.impl.analyzer.analyze_children(ctx,args__$1):null);
var res = (function (){var field_access = clojure.string.starts_with_QMARK_(method_name,"-");
var meth_name = ((field_access)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_name,(1)):method_name);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (){var allowed_QMARK_ = (method_expr__$1 === sci.impl.utils.allowed_append);
return (function (ctx__$1,bindings){
return sci.impl.evaluator.eval_instance_method_invocation(ctx__$1,bindings,instance_expr__$2,meth_name,field_access,args__$2,allowed_QMARK_);
});
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("sci.impl.analyzer","instance-expr","sci.impl.analyzer/instance-expr",629338719),instance_expr__$2,new cljs.core.Keyword("sci.impl.analyzer","method-name","sci.impl.analyzer/method-name",-842600667),method_name], null),expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)));
})();
return res;
});
/**
 * Expands (. x method)
 */
sci.impl.analyzer.expand_dot_STAR__STAR_ = (function sci$impl$analyzer$expand_dot_STAR__STAR_(ctx,expr){
if((cljs.core.count(expr) < (3))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.expand_dot(ctx,expr);
});
/**
 * Expands (.foo x)
 */
sci.impl.analyzer.expand_dot_STAR_ = (function sci$impl$analyzer$expand_dot_STAR_(ctx,p__36842){
var vec__36843 = p__36842;
var seq__36844 = cljs.core.seq(vec__36843);
var first__36845 = cljs.core.first(seq__36844);
var seq__36844__$1 = cljs.core.next(seq__36844);
var method_name = first__36845;
var first__36845__$1 = cljs.core.first(seq__36844__$1);
var seq__36844__$2 = cljs.core.next(seq__36844__$1);
var obj = first__36845__$1;
var args = seq__36844__$2;
var expr = vec__36843;
if((cljs.core.count(expr) < (2))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.expand_dot(ctx,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),(new cljs.core.List(null,obj,(new cljs.core.List(null,cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(method_name),(1))),args),null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.analyze_new = (function sci$impl$analyzer$analyze_new(ctx,p__36850){
var vec__36851 = p__36850;
var seq__36852 = cljs.core.seq(vec__36851);
var first__36853 = cljs.core.first(seq__36852);
var seq__36852__$1 = cljs.core.next(seq__36852);
var _new = first__36853;
var first__36853__$1 = cljs.core.first(seq__36852__$1);
var seq__36852__$2 = cljs.core.next(seq__36852__$1);
var class_sym = first__36853__$1;
var args = seq__36852__$2;
var expr = vec__36851;
var temp__5802__auto__ = (function (){var or__5002__auto__ = (function (){var temp__5804__auto__ = (function (){var temp__5804__auto__ = sci.impl.interop.resolve_class_opts(ctx,class_sym);
if(cljs.core.truth_(temp__5804__auto__)){
var opts = temp__5804__auto__;
var or__5002__auto__ = new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts);
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var clazz = temp__5804__auto__;
return clazz;
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,class_sym) : sci.impl.analyzer.analyze.call(null, ctx,class_sym));
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var class$ = temp__5802__auto__;
var var_QMARK_ = (class$ instanceof sci.impl.types.EvalVar);
var maybe_var = ((var_QMARK_)?sci.impl.types.getVal(class$):null);
var maybe_record = ((var_QMARK_)?cljs.core.deref(maybe_var):(((class$ instanceof cljs.core.Symbol))?class$:null));
var maybe_record_constructor = (cljs.core.truth_(maybe_record)?new cljs.core.Keyword("sci.impl.record","constructor","sci.impl.record/constructor",-2025684209).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(maybe_record)):null);
var args__$1 = sci.impl.analyzer.analyze_children(ctx,args);
if(cljs.core.truth_(maybe_record_constructor)){
var G__36854 = ctx;
var G__36855 = expr;
var G__36856 = maybe_record_constructor;
var G__36857 = args__$1;
var G__36858 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0));
var G__36859 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__36854,G__36855,G__36856,G__36857,G__36858,G__36859) : sci.impl.analyzer.return_call.call(null, G__36854,G__36855,G__36856,G__36857,G__36858,G__36859));
} else {
if(var_QMARK_){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.interop.invoke_constructor(cljs.core.deref(maybe_var),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36847_SHARP_){
return sci.impl.evaluator.eval(ctx__$1,bindings,p1__36847_SHARP_);
}),args__$1));
}),expr);
} else {
if((class$ instanceof sci.impl.types.EvalFn)){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.interop.invoke_constructor(sci.impl.evaluator.eval(ctx__$1,bindings,class$),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36848_SHARP_){
return sci.impl.evaluator.eval(ctx__$1,bindings,p1__36848_SHARP_);
}),args__$1));
}),expr);
} else {
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.interop.invoke_constructor(class$,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36849_SHARP_){
return sci.impl.evaluator.eval(ctx__$1,bindings,p1__36849_SHARP_);
}),args__$1));
}),expr);

}
}
}
} else {
var temp__5802__auto____$1 = sci.impl.records.resolve_record_class(ctx,class_sym);
if(cljs.core.truth_(temp__5802__auto____$1)){
var record = temp__5802__auto____$1;
var args__$1 = sci.impl.analyzer.analyze_children(ctx,args);
var G__36860 = ctx;
var G__36861 = expr;
var G__36862 = new cljs.core.Keyword("sci.impl.record","constructor","sci.impl.record/constructor",-2025684209).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(record));
var G__36863 = args__$1;
var G__36864 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0));
var G__36865 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__36860,G__36861,G__36862,G__36863,G__36864,G__36865) : sci.impl.analyzer.return_call.call(null, G__36860,G__36861,G__36862,G__36863,G__36864,G__36865));
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_sym)].join(''),class_sym);
}
}
});
sci.impl.analyzer.expand_constructor = (function sci$impl$analyzer$expand_constructor(ctx,p__36866){
var vec__36867 = p__36866;
var seq__36868 = cljs.core.seq(vec__36867);
var first__36869 = cljs.core.first(seq__36868);
var seq__36868__$1 = cljs.core.next(seq__36868);
var constructor_sym = first__36869;
var args = seq__36868__$1;
var constructor_name = cljs.core.name(constructor_sym);
var class_sym = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(constructor_name,(0),(((constructor_name).length) - (1)))),cljs.core.meta(constructor_sym));
return sci.impl.analyzer.analyze_new(ctx,cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),class_sym,args),cljs.core.meta(constructor_sym)));
});
sci.impl.analyzer.return_ns_op = (function sci$impl$analyzer$return_ns_op(_ctx,f,expr,analyzed_args){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx,_bindings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,ctx,analyzed_args);
}),expr,null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns)], 0)));
});
sci.impl.analyzer.analyze_ns_form = (function sci$impl$analyzer$analyze_ns_form(ctx,p__36870){
var vec__36871 = p__36870;
var seq__36872 = cljs.core.seq(vec__36871);
var first__36873 = cljs.core.first(seq__36872);
var seq__36872__$1 = cljs.core.next(seq__36872);
var _ns = first__36873;
var first__36873__$1 = cljs.core.first(seq__36872__$1);
var seq__36872__$2 = cljs.core.next(seq__36872__$1);
var ns_name = first__36873__$1;
var exprs = seq__36872__$2;
var expr = vec__36871;
if((ns_name instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Namespace name must be symbol, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_name], 0))].join('')));
}

var vec__36874 = (function (){var fexpr = cljs.core.first(exprs);
if(typeof fexpr === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr,cljs.core.next(exprs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36874,(0),null);
var exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36874,(1),null);
var vec__36877 = (function (){var m = cljs.core.first(exprs__$1);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.next(exprs__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs__$1], null);
}
})();
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36877,(0),null);
var exprs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36877,(1),null);
var attr_map__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_map,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr_map);
sci.impl.utils.set_namespace_BANG_(ctx,ns_name,attr_map__$1);

var exprs__$3 = exprs__$2;
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(exprs__$3)){
var vec__36885 = cljs.core.first(exprs__$3);
var seq__36886 = cljs.core.seq(vec__36885);
var first__36887 = cljs.core.first(seq__36886);
var seq__36886__$1 = cljs.core.next(seq__36886);
var k = first__36887;
var args = seq__36886__$1;
var expr__$1 = vec__36885;
var G__36888 = k;
var G__36888__$1 = (((G__36888 instanceof cljs.core.Keyword))?G__36888.fqn:null);
switch (G__36888__$1) {
case "require":
case "use":
case "import":
case "refer-clojure":
var G__37960 = cljs.core.next(exprs__$3);
var G__37961 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.analyzer.return_ns_op(ctx,(function (){var G__36889 = k;
var G__36889__$1 = (((G__36889 instanceof cljs.core.Keyword))?G__36889.fqn:null);
switch (G__36889__$1) {
case "require":
return sci.impl.load.eval_require;

break;
case "use":
return sci.impl.load.eval_use;

break;
case "import":
return sci.impl.evaluator.eval_import;

break;
case "refer-clojure":
return ((function (exprs__$3,ret,G__36889,G__36889__$1,G__36888,G__36888__$1,vec__36885,seq__36886,first__36887,seq__36886__$1,k,args,expr__$1,vec__36874,docstring,exprs__$1,vec__36877,attr_map,exprs__$2,attr_map__$1,vec__36871,seq__36872,first__36873,seq__36872__$1,_ns,first__36873__$1,seq__36872__$2,ns_name,exprs,expr){
return (function() { 
var G__37965__delegate = function (ctx__$1,args__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.eval_refer,ctx__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),args__$1);
};
var G__37965 = function (ctx__$1,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__37966__i = 0, G__37966__a = new Array(arguments.length -  1);
while (G__37966__i < G__37966__a.length) {G__37966__a[G__37966__i] = arguments[G__37966__i + 1]; ++G__37966__i;}
  args__$1 = new cljs.core.IndexedSeq(G__37966__a,0,null);
} 
return G__37965__delegate.call(this,ctx__$1,args__$1);};
G__37965.cljs$lang$maxFixedArity = 1;
G__37965.cljs$lang$applyTo = (function (arglist__37967){
var ctx__$1 = cljs.core.first(arglist__37967);
var args__$1 = cljs.core.rest(arglist__37967);
return G__37965__delegate(ctx__$1,args__$1);
});
G__37965.cljs$core$IFn$_invoke$arity$variadic = G__37965__delegate;
return G__37965;
})()
;
;})(exprs__$3,ret,G__36889,G__36889__$1,G__36888,G__36888__$1,vec__36885,seq__36886,first__36887,seq__36886__$1,k,args,expr__$1,vec__36874,docstring,exprs__$1,vec__36877,attr_map,exprs__$2,attr_map__$1,vec__36871,seq__36872,first__36873,seq__36872__$1,_ns,first__36873__$1,seq__36872__$2,ns_name,exprs,expr))

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36889__$1)].join('')));

}
})(),expr__$1,args));
exprs__$3 = G__37960;
ret = G__37961;
continue;

break;
case "gen-class":
var G__37968 = cljs.core.next(exprs__$3);
var G__37969 = ret;
exprs__$3 = G__37968;
ret = G__37969;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36888__$1)].join('')));

}
} else {
return sci.impl.analyzer.return_do(expr,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2(((function (exprs__$3,ret,vec__36874,docstring,exprs__$1,vec__36877,attr_map,exprs__$2,attr_map__$1,vec__36871,seq__36872,first__36873,seq__36872__$1,_ns,first__36873__$1,seq__36872__$2,ns_name,exprs,expr){
return (function (ctx__$1,_bindings){
sci.impl.load.add_loaded_lib(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx__$1),ns_name);

return null;
});})(exprs__$3,ret,vec__36874,docstring,exprs__$1,vec__36877,attr_map,exprs__$2,attr_map__$1,vec__36871,seq__36872,first__36873,seq__36872__$1,_ns,first__36873__$1,seq__36872__$2,ns_name,exprs,expr))
,null)));
}
break;
}
});
sci.impl.analyzer.analyze_var = (function sci$impl$analyzer$analyze_var(ctx,p__36890){
var vec__36891 = p__36890;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36891,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36891,(1),null);
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,var_name);
});
sci.impl.analyzer.analyze_set_BANG_ = (function sci$impl$analyzer$analyze_set_BANG_(ctx,p__36894){
var vec__36895 = p__36894;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36895,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36895,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36895,(2),null);
var expr = vec__36895;
if((obj instanceof cljs.core.Symbol)){
var obj__$1 = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,obj);
var ___$1 = ((sci.impl.vars.var_QMARK_(obj__$1))?null:sci.impl.analyzer.throw_error_with_location("Invalid assignment target",expr));
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null, ctx,v));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var v__$2 = sci.impl.evaluator.eval(ctx__$1,bindings,v__$1);
return sci.impl.types.setVal(obj__$1,v__$2);
}),expr);
} else {
if(cljs.core.seq_QMARK_(obj)){
var obj__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.analyzer.analyze.call(null, ctx,obj));
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null, ctx,v));
var obj__$2 = sci.impl.types.info(obj__$1);
var k = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.analyzer","method-name","sci.impl.analyzer/method-name",-842600667).cljs$core$IFn$_invoke$arity$1(obj__$2),(1));
var obj__$3 = new cljs.core.Keyword("sci.impl.analyzer","instance-expr","sci.impl.analyzer/instance-expr",629338719).cljs$core$IFn$_invoke$arity$1(obj__$2);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var obj__$4 = sci.impl.evaluator.eval(ctx__$1,bindings,obj__$3);
var v__$2 = sci.impl.evaluator.eval(ctx__$1,bindings,v__$1);
return sci.impl.analyzer.goog$module$goog$object.set(obj__$4,k,v__$2);
}),expr);
} else {
return sci.impl.analyzer.throw_error_with_location("Invalid assignment target",expr);

}
}
});
sci.impl.analyzer.return_binding_call = (function sci$impl$analyzer$return_binding_call(_ctx,expr,f,analyzed_children,stack){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (){var G__36898 = cljs.core.count(analyzed_children);
switch (G__36898) {
case (0):
return (function (ctx,bindings){
var fexpr__36899 = bindings.get(f);
return (fexpr__36899.cljs$core$IFn$_invoke$arity$0 ? fexpr__36899.cljs$core$IFn$_invoke$arity$0() : fexpr__36899.call(null, ));
});

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return (function (ctx,bindings){
var G__36901 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var fexpr__36900 = bindings.get(f);
return (fexpr__36900.cljs$core$IFn$_invoke$arity$1 ? fexpr__36900.cljs$core$IFn$_invoke$arity$1(G__36901) : fexpr__36900.call(null, G__36901));
});

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return (function (ctx,bindings){
var G__36903 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__36904 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var fexpr__36902 = bindings.get(f);
return (fexpr__36902.cljs$core$IFn$_invoke$arity$2 ? fexpr__36902.cljs$core$IFn$_invoke$arity$2(G__36903,G__36904) : fexpr__36902.call(null, G__36903,G__36904));
});

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return (function (ctx,bindings){
var G__36906 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__36907 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__36908 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var fexpr__36905 = bindings.get(f);
return (fexpr__36905.cljs$core$IFn$_invoke$arity$3 ? fexpr__36905.cljs$core$IFn$_invoke$arity$3(G__36906,G__36907,G__36908) : fexpr__36905.call(null, G__36906,G__36907,G__36908));
});

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return (function (ctx,bindings){
var G__36910 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__36911 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__36912 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__36913 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var fexpr__36909 = bindings.get(f);
return (fexpr__36909.cljs$core$IFn$_invoke$arity$4 ? fexpr__36909.cljs$core$IFn$_invoke$arity$4(G__36910,G__36911,G__36912,G__36913) : fexpr__36909.call(null, G__36910,G__36911,G__36912,G__36913));
});

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return (function (ctx,bindings){
var G__36915 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__36916 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__36917 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__36918 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__36919 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var fexpr__36914 = bindings.get(f);
return (fexpr__36914.cljs$core$IFn$_invoke$arity$5 ? fexpr__36914.cljs$core$IFn$_invoke$arity$5(G__36915,G__36916,G__36917,G__36918,G__36919) : fexpr__36914.call(null, G__36915,G__36916,G__36917,G__36918,G__36919));
});

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return (function (ctx,bindings){
var G__36921 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__36922 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__36923 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__36924 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__36925 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__36926 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var fexpr__36920 = bindings.get(f);
return (fexpr__36920.cljs$core$IFn$_invoke$arity$6 ? fexpr__36920.cljs$core$IFn$_invoke$arity$6(G__36921,G__36922,G__36923,G__36924,G__36925,G__36926) : fexpr__36920.call(null, G__36921,G__36922,G__36923,G__36924,G__36925,G__36926));
});

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return (function (ctx,bindings){
var G__36928 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__36929 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__36930 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__36931 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__36932 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__36933 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__36934 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var fexpr__36927 = bindings.get(f);
return (fexpr__36927.cljs$core$IFn$_invoke$arity$7 ? fexpr__36927.cljs$core$IFn$_invoke$arity$7(G__36928,G__36929,G__36930,G__36931,G__36932,G__36933,G__36934) : fexpr__36927.call(null, G__36928,G__36929,G__36930,G__36931,G__36932,G__36933,G__36934));
});

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return (function (ctx,bindings){
var G__36936 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__36937 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__36938 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__36939 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__36940 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__36941 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__36942 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__36943 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var fexpr__36935 = bindings.get(f);
return (fexpr__36935.cljs$core$IFn$_invoke$arity$8 ? fexpr__36935.cljs$core$IFn$_invoke$arity$8(G__36936,G__36937,G__36938,G__36939,G__36940,G__36941,G__36942,G__36943) : fexpr__36935.call(null, G__36936,G__36937,G__36938,G__36939,G__36940,G__36941,G__36942,G__36943));
});

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return (function (ctx,bindings){
var G__36945 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__36946 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__36947 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__36948 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__36949 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__36950 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__36951 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__36952 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__36953 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var fexpr__36944 = bindings.get(f);
return (fexpr__36944.cljs$core$IFn$_invoke$arity$9 ? fexpr__36944.cljs$core$IFn$_invoke$arity$9(G__36945,G__36946,G__36947,G__36948,G__36949,G__36950,G__36951,G__36952,G__36953) : fexpr__36944.call(null, G__36945,G__36946,G__36947,G__36948,G__36949,G__36950,G__36951,G__36952,G__36953));
});

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return (function (ctx,bindings){
var G__36955 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__36956 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__36957 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__36958 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__36959 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__36960 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__36961 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__36962 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__36963 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__36964 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var fexpr__36954 = bindings.get(f);
return (fexpr__36954.cljs$core$IFn$_invoke$arity$10 ? fexpr__36954.cljs$core$IFn$_invoke$arity$10(G__36955,G__36956,G__36957,G__36958,G__36959,G__36960,G__36961,G__36962,G__36963,G__36964) : fexpr__36954.call(null, G__36955,G__36956,G__36957,G__36958,G__36959,G__36960,G__36961,G__36962,G__36963,G__36964));
});

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return (function (ctx,bindings){
var G__36966 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__36967 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__36968 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__36969 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__36970 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__36971 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__36972 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__36973 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__36974 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__36975 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__36976 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var fexpr__36965 = bindings.get(f);
return (fexpr__36965.cljs$core$IFn$_invoke$arity$11 ? fexpr__36965.cljs$core$IFn$_invoke$arity$11(G__36966,G__36967,G__36968,G__36969,G__36970,G__36971,G__36972,G__36973,G__36974,G__36975,G__36976) : fexpr__36965.call(null, G__36966,G__36967,G__36968,G__36969,G__36970,G__36971,G__36972,G__36973,G__36974,G__36975,G__36976));
});

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return (function (ctx,bindings){
var G__36978 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__36979 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__36980 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__36981 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__36982 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__36983 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__36984 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__36985 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__36986 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__36987 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__36988 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__36989 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var fexpr__36977 = bindings.get(f);
return (fexpr__36977.cljs$core$IFn$_invoke$arity$12 ? fexpr__36977.cljs$core$IFn$_invoke$arity$12(G__36978,G__36979,G__36980,G__36981,G__36982,G__36983,G__36984,G__36985,G__36986,G__36987,G__36988,G__36989) : fexpr__36977.call(null, G__36978,G__36979,G__36980,G__36981,G__36982,G__36983,G__36984,G__36985,G__36986,G__36987,G__36988,G__36989));
});

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return (function (ctx,bindings){
var G__36991 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__36992 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__36993 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__36994 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__36995 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__36996 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__36997 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__36998 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__36999 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37000 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37001 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37002 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37003 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var fexpr__36990 = bindings.get(f);
return (fexpr__36990.cljs$core$IFn$_invoke$arity$13 ? fexpr__36990.cljs$core$IFn$_invoke$arity$13(G__36991,G__36992,G__36993,G__36994,G__36995,G__36996,G__36997,G__36998,G__36999,G__37000,G__37001,G__37002,G__37003) : fexpr__36990.call(null, G__36991,G__36992,G__36993,G__36994,G__36995,G__36996,G__36997,G__36998,G__36999,G__37000,G__37001,G__37002,G__37003));
});

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return (function (ctx,bindings){
var G__37005 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37006 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37007 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37008 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37009 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37010 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37011 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37012 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37013 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37014 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37015 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37016 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37017 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__37018 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var fexpr__37004 = bindings.get(f);
return (fexpr__37004.cljs$core$IFn$_invoke$arity$14 ? fexpr__37004.cljs$core$IFn$_invoke$arity$14(G__37005,G__37006,G__37007,G__37008,G__37009,G__37010,G__37011,G__37012,G__37013,G__37014,G__37015,G__37016,G__37017,G__37018) : fexpr__37004.call(null, G__37005,G__37006,G__37007,G__37008,G__37009,G__37010,G__37011,G__37012,G__37013,G__37014,G__37015,G__37016,G__37017,G__37018));
});

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return (function (ctx,bindings){
var G__37020 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37021 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37022 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37023 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37024 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37025 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37026 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37027 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37028 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37029 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37030 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37031 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37032 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__37033 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__37034 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var fexpr__37019 = bindings.get(f);
return (fexpr__37019.cljs$core$IFn$_invoke$arity$15 ? fexpr__37019.cljs$core$IFn$_invoke$arity$15(G__37020,G__37021,G__37022,G__37023,G__37024,G__37025,G__37026,G__37027,G__37028,G__37029,G__37030,G__37031,G__37032,G__37033,G__37034) : fexpr__37019.call(null, G__37020,G__37021,G__37022,G__37023,G__37024,G__37025,G__37026,G__37027,G__37028,G__37029,G__37030,G__37031,G__37032,G__37033,G__37034));
});

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return (function (ctx,bindings){
var G__37036 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37037 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37038 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37039 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37040 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37041 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37042 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37043 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37044 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37045 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37046 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37047 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37048 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__37049 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__37050 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__37051 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var fexpr__37035 = bindings.get(f);
return (fexpr__37035.cljs$core$IFn$_invoke$arity$16 ? fexpr__37035.cljs$core$IFn$_invoke$arity$16(G__37036,G__37037,G__37038,G__37039,G__37040,G__37041,G__37042,G__37043,G__37044,G__37045,G__37046,G__37047,G__37048,G__37049,G__37050,G__37051) : fexpr__37035.call(null, G__37036,G__37037,G__37038,G__37039,G__37040,G__37041,G__37042,G__37043,G__37044,G__37045,G__37046,G__37047,G__37048,G__37049,G__37050,G__37051));
});

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return (function (ctx,bindings){
var G__37053 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37054 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37055 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37056 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37057 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37058 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37059 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37060 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37061 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37062 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37063 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37064 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37065 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__37066 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__37067 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__37068 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__37069 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var fexpr__37052 = bindings.get(f);
return (fexpr__37052.cljs$core$IFn$_invoke$arity$17 ? fexpr__37052.cljs$core$IFn$_invoke$arity$17(G__37053,G__37054,G__37055,G__37056,G__37057,G__37058,G__37059,G__37060,G__37061,G__37062,G__37063,G__37064,G__37065,G__37066,G__37067,G__37068,G__37069) : fexpr__37052.call(null, G__37053,G__37054,G__37055,G__37056,G__37057,G__37058,G__37059,G__37060,G__37061,G__37062,G__37063,G__37064,G__37065,G__37066,G__37067,G__37068,G__37069));
});

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return (function (ctx,bindings){
var G__37071 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37072 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37073 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37074 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37075 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37076 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37077 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37078 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37079 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37080 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37081 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37082 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37083 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__37084 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__37085 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__37086 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__37087 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__37088 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var fexpr__37070 = bindings.get(f);
return (fexpr__37070.cljs$core$IFn$_invoke$arity$18 ? fexpr__37070.cljs$core$IFn$_invoke$arity$18(G__37071,G__37072,G__37073,G__37074,G__37075,G__37076,G__37077,G__37078,G__37079,G__37080,G__37081,G__37082,G__37083,G__37084,G__37085,G__37086,G__37087,G__37088) : fexpr__37070.call(null, G__37071,G__37072,G__37073,G__37074,G__37075,G__37076,G__37077,G__37078,G__37079,G__37080,G__37081,G__37082,G__37083,G__37084,G__37085,G__37086,G__37087,G__37088));
});

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return (function (ctx,bindings){
var G__37090 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37091 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37092 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37093 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37094 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37095 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37096 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37097 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37098 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37099 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37100 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37101 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37102 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__37103 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__37104 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__37105 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__37106 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__37107 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var G__37108 = sci.impl.evaluator.eval(ctx,bindings,arg18);
var fexpr__37089 = bindings.get(f);
return (fexpr__37089.cljs$core$IFn$_invoke$arity$19 ? fexpr__37089.cljs$core$IFn$_invoke$arity$19(G__37090,G__37091,G__37092,G__37093,G__37094,G__37095,G__37096,G__37097,G__37098,G__37099,G__37100,G__37101,G__37102,G__37103,G__37104,G__37105,G__37106,G__37107,G__37108) : fexpr__37089.call(null, G__37090,G__37091,G__37092,G__37093,G__37094,G__37095,G__37096,G__37097,G__37098,G__37099,G__37100,G__37101,G__37102,G__37103,G__37104,G__37105,G__37106,G__37107,G__37108));
});

break;
default:
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,bindings.get(f),analyzed_children);
});

}
})(),null,expr,stack);
});
sci.impl.analyzer.return_needs_ctx_call = (function sci$impl$analyzer$return_needs_ctx_call(_ctx,expr,f,analyzed_children){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (){var G__37109 = cljs.core.count(analyzed_children);
switch (G__37109) {
case (0):
return (function (ctx,bindings){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(ctx) : f.call(null, ctx));
});

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return (function (ctx,bindings){
var G__37110 = ctx;
var G__37111 = sci.impl.evaluator.eval(ctx,bindings,arg0);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__37110,G__37111) : f.call(null, G__37110,G__37111));
});

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return (function (ctx,bindings){
var G__37112 = ctx;
var G__37113 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37114 = sci.impl.evaluator.eval(ctx,bindings,arg1);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__37112,G__37113,G__37114) : f.call(null, G__37112,G__37113,G__37114));
});

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return (function (ctx,bindings){
var G__37115 = ctx;
var G__37116 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37117 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37118 = sci.impl.evaluator.eval(ctx,bindings,arg2);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__37115,G__37116,G__37117,G__37118) : f.call(null, G__37115,G__37116,G__37117,G__37118));
});

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return (function (ctx,bindings){
var G__37119 = ctx;
var G__37120 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37121 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37122 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37123 = sci.impl.evaluator.eval(ctx,bindings,arg3);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__37119,G__37120,G__37121,G__37122,G__37123) : f.call(null, G__37119,G__37120,G__37121,G__37122,G__37123));
});

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return (function (ctx,bindings){
var G__37124 = ctx;
var G__37125 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37126 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37127 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37128 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37129 = sci.impl.evaluator.eval(ctx,bindings,arg4);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__37124,G__37125,G__37126,G__37127,G__37128,G__37129) : f.call(null, G__37124,G__37125,G__37126,G__37127,G__37128,G__37129));
});

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return (function (ctx,bindings){
var G__37130 = ctx;
var G__37131 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37132 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37133 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37134 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37135 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37136 = sci.impl.evaluator.eval(ctx,bindings,arg5);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__37130,G__37131,G__37132,G__37133,G__37134,G__37135,G__37136) : f.call(null, G__37130,G__37131,G__37132,G__37133,G__37134,G__37135,G__37136));
});

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return (function (ctx,bindings){
var G__37137 = ctx;
var G__37138 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37139 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37140 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37141 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37142 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37143 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37144 = sci.impl.evaluator.eval(ctx,bindings,arg6);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__37137,G__37138,G__37139,G__37140,G__37141,G__37142,G__37143,G__37144) : f.call(null, G__37137,G__37138,G__37139,G__37140,G__37141,G__37142,G__37143,G__37144));
});

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return (function (ctx,bindings){
var G__37145 = ctx;
var G__37146 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37147 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37148 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37149 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37150 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37151 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37152 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37153 = sci.impl.evaluator.eval(ctx,bindings,arg7);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__37145,G__37146,G__37147,G__37148,G__37149,G__37150,G__37151,G__37152,G__37153) : f.call(null, G__37145,G__37146,G__37147,G__37148,G__37149,G__37150,G__37151,G__37152,G__37153));
});

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return (function (ctx,bindings){
var G__37154 = ctx;
var G__37155 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37156 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37157 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37158 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37159 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37160 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37161 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37162 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37163 = sci.impl.evaluator.eval(ctx,bindings,arg8);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__37154,G__37155,G__37156,G__37157,G__37158,G__37159,G__37160,G__37161,G__37162,G__37163) : f.call(null, G__37154,G__37155,G__37156,G__37157,G__37158,G__37159,G__37160,G__37161,G__37162,G__37163));
});

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return (function (ctx,bindings){
var G__37164 = ctx;
var G__37165 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37166 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37167 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37168 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37169 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37170 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37171 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37172 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37173 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37174 = sci.impl.evaluator.eval(ctx,bindings,arg9);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__37164,G__37165,G__37166,G__37167,G__37168,G__37169,G__37170,G__37171,G__37172,G__37173,G__37174) : f.call(null, G__37164,G__37165,G__37166,G__37167,G__37168,G__37169,G__37170,G__37171,G__37172,G__37173,G__37174));
});

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return (function (ctx,bindings){
var G__37175 = ctx;
var G__37176 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37177 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37178 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37179 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37180 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37181 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37182 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37183 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37184 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37185 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37186 = sci.impl.evaluator.eval(ctx,bindings,arg10);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__37175,G__37176,G__37177,G__37178,G__37179,G__37180,G__37181,G__37182,G__37183,G__37184,G__37185,G__37186) : f.call(null, G__37175,G__37176,G__37177,G__37178,G__37179,G__37180,G__37181,G__37182,G__37183,G__37184,G__37185,G__37186));
});

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return (function (ctx,bindings){
var G__37187 = ctx;
var G__37188 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37189 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37190 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37191 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37192 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37193 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37194 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37195 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37196 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37197 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37198 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37199 = sci.impl.evaluator.eval(ctx,bindings,arg11);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__37187,G__37188,G__37189,G__37190,G__37191,G__37192,G__37193,G__37194,G__37195,G__37196,G__37197,G__37198,G__37199) : f.call(null, G__37187,G__37188,G__37189,G__37190,G__37191,G__37192,G__37193,G__37194,G__37195,G__37196,G__37197,G__37198,G__37199));
});

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return (function (ctx,bindings){
var G__37200 = ctx;
var G__37201 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37202 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37203 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37204 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37205 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37206 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37207 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37208 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37209 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37210 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37211 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37212 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37213 = sci.impl.evaluator.eval(ctx,bindings,arg12);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__37200,G__37201,G__37202,G__37203,G__37204,G__37205,G__37206,G__37207,G__37208,G__37209,G__37210,G__37211,G__37212,G__37213) : f.call(null, G__37200,G__37201,G__37202,G__37203,G__37204,G__37205,G__37206,G__37207,G__37208,G__37209,G__37210,G__37211,G__37212,G__37213));
});

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return (function (ctx,bindings){
var G__37214 = ctx;
var G__37215 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37216 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37217 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37218 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37219 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37220 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37221 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37222 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37223 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37224 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37225 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37226 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37227 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__37228 = sci.impl.evaluator.eval(ctx,bindings,arg13);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__37214,G__37215,G__37216,G__37217,G__37218,G__37219,G__37220,G__37221,G__37222,G__37223,G__37224,G__37225,G__37226,G__37227,G__37228) : f.call(null, G__37214,G__37215,G__37216,G__37217,G__37218,G__37219,G__37220,G__37221,G__37222,G__37223,G__37224,G__37225,G__37226,G__37227,G__37228));
});

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return (function (ctx,bindings){
var G__37229 = ctx;
var G__37230 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37231 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37232 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37233 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37234 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37235 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37236 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37237 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37238 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37239 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37240 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37241 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37242 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__37243 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__37244 = sci.impl.evaluator.eval(ctx,bindings,arg14);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__37229,G__37230,G__37231,G__37232,G__37233,G__37234,G__37235,G__37236,G__37237,G__37238,G__37239,G__37240,G__37241,G__37242,G__37243,G__37244) : f.call(null, G__37229,G__37230,G__37231,G__37232,G__37233,G__37234,G__37235,G__37236,G__37237,G__37238,G__37239,G__37240,G__37241,G__37242,G__37243,G__37244));
});

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return (function (ctx,bindings){
var G__37245 = ctx;
var G__37246 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37247 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37248 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37249 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37250 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37251 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37252 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37253 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37254 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37255 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37256 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37257 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37258 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__37259 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__37260 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__37261 = sci.impl.evaluator.eval(ctx,bindings,arg15);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__37245,G__37246,G__37247,G__37248,G__37249,G__37250,G__37251,G__37252,G__37253,G__37254,G__37255,G__37256,G__37257,G__37258,G__37259,G__37260,G__37261) : f.call(null, G__37245,G__37246,G__37247,G__37248,G__37249,G__37250,G__37251,G__37252,G__37253,G__37254,G__37255,G__37256,G__37257,G__37258,G__37259,G__37260,G__37261));
});

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return (function (ctx,bindings){
var G__37262 = ctx;
var G__37263 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37264 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37265 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37266 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37267 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37268 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37269 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37270 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37271 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37272 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37273 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37274 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37275 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__37276 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__37277 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__37278 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__37279 = sci.impl.evaluator.eval(ctx,bindings,arg16);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__37262,G__37263,G__37264,G__37265,G__37266,G__37267,G__37268,G__37269,G__37270,G__37271,G__37272,G__37273,G__37274,G__37275,G__37276,G__37277,G__37278,G__37279) : f.call(null, G__37262,G__37263,G__37264,G__37265,G__37266,G__37267,G__37268,G__37269,G__37270,G__37271,G__37272,G__37273,G__37274,G__37275,G__37276,G__37277,G__37278,G__37279));
});

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return (function (ctx,bindings){
var G__37280 = ctx;
var G__37281 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37282 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37283 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37284 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37285 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37286 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37287 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37288 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37289 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37290 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37291 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37292 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37293 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__37294 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__37295 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__37296 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__37297 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__37298 = sci.impl.evaluator.eval(ctx,bindings,arg17);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__37280,G__37281,G__37282,G__37283,G__37284,G__37285,G__37286,G__37287,G__37288,G__37289,G__37290,G__37291,G__37292,G__37293,G__37294,G__37295,G__37296,G__37297,G__37298) : f.call(null, G__37280,G__37281,G__37282,G__37283,G__37284,G__37285,G__37286,G__37287,G__37288,G__37289,G__37290,G__37291,G__37292,G__37293,G__37294,G__37295,G__37296,G__37297,G__37298));
});

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return (function (ctx,bindings){
var G__37299 = ctx;
var G__37300 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37301 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37302 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37303 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37304 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37305 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37306 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37307 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37308 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37309 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37310 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37311 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37312 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__37313 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__37314 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__37315 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__37316 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__37317 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var G__37318 = sci.impl.evaluator.eval(ctx,bindings,arg18);
return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__37299,G__37300,G__37301,G__37302,G__37303,G__37304,G__37305,G__37306,G__37307,G__37308,G__37309,G__37310,G__37311,G__37312,G__37313,G__37314,G__37315,G__37316,G__37317,G__37318) : f.call(null, G__37299,G__37300,G__37301,G__37302,G__37303,G__37304,G__37305,G__37306,G__37307,G__37308,G__37309,G__37310,G__37311,G__37312,G__37313,G__37314,G__37315,G__37316,G__37317,G__37318));
});

break;
default:
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,f,cljs.core.cons(ctx,analyzed_children));
});

}
})(),expr);
});
sci.impl.analyzer.return_call = (function sci$impl$analyzer$return_call(_ctx,expr,f,analyzed_children,stack,wrap){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (){var G__37319 = cljs.core.count(analyzed_children);
switch (G__37319) {
case (0):
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var fexpr__37320 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null, bindings,f));
return (fexpr__37320.cljs$core$IFn$_invoke$arity$0 ? fexpr__37320.cljs$core$IFn$_invoke$arity$0() : fexpr__37320.call(null, ));
});
} else {
return (function (ctx,bindings){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
});
}

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__37322 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var fexpr__37321 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null, bindings,f));
return (fexpr__37321.cljs$core$IFn$_invoke$arity$1 ? fexpr__37321.cljs$core$IFn$_invoke$arity$1(G__37322) : fexpr__37321.call(null, G__37322));
});
} else {
return (function (ctx,bindings){
var G__37323 = sci.impl.evaluator.eval(ctx,bindings,arg0);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__37323) : f.call(null, G__37323));
});
}

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__37325 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37326 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var fexpr__37324 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null, bindings,f));
return (fexpr__37324.cljs$core$IFn$_invoke$arity$2 ? fexpr__37324.cljs$core$IFn$_invoke$arity$2(G__37325,G__37326) : fexpr__37324.call(null, G__37325,G__37326));
});
} else {
return (function (ctx,bindings){
var G__37327 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37328 = sci.impl.evaluator.eval(ctx,bindings,arg1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__37327,G__37328) : f.call(null, G__37327,G__37328));
});
}

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__37330 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37331 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37332 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var fexpr__37329 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null, bindings,f));
return (fexpr__37329.cljs$core$IFn$_invoke$arity$3 ? fexpr__37329.cljs$core$IFn$_invoke$arity$3(G__37330,G__37331,G__37332) : fexpr__37329.call(null, G__37330,G__37331,G__37332));
});
} else {
return (function (ctx,bindings){
var G__37333 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37334 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37335 = sci.impl.evaluator.eval(ctx,bindings,arg2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__37333,G__37334,G__37335) : f.call(null, G__37333,G__37334,G__37335));
});
}

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__37337 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37338 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37339 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37340 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var fexpr__37336 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null, bindings,f));
return (fexpr__37336.cljs$core$IFn$_invoke$arity$4 ? fexpr__37336.cljs$core$IFn$_invoke$arity$4(G__37337,G__37338,G__37339,G__37340) : fexpr__37336.call(null, G__37337,G__37338,G__37339,G__37340));
});
} else {
return (function (ctx,bindings){
var G__37341 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37342 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37343 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37344 = sci.impl.evaluator.eval(ctx,bindings,arg3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__37341,G__37342,G__37343,G__37344) : f.call(null, G__37341,G__37342,G__37343,G__37344));
});
}

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__37346 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37347 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37348 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37349 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37350 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var fexpr__37345 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null, bindings,f));
return (fexpr__37345.cljs$core$IFn$_invoke$arity$5 ? fexpr__37345.cljs$core$IFn$_invoke$arity$5(G__37346,G__37347,G__37348,G__37349,G__37350) : fexpr__37345.call(null, G__37346,G__37347,G__37348,G__37349,G__37350));
});
} else {
return (function (ctx,bindings){
var G__37351 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37352 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37353 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37354 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37355 = sci.impl.evaluator.eval(ctx,bindings,arg4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__37351,G__37352,G__37353,G__37354,G__37355) : f.call(null, G__37351,G__37352,G__37353,G__37354,G__37355));
});
}

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__37357 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37358 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37359 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37360 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37361 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37362 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var fexpr__37356 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null, bindings,f));
return (fexpr__37356.cljs$core$IFn$_invoke$arity$6 ? fexpr__37356.cljs$core$IFn$_invoke$arity$6(G__37357,G__37358,G__37359,G__37360,G__37361,G__37362) : fexpr__37356.call(null, G__37357,G__37358,G__37359,G__37360,G__37361,G__37362));
});
} else {
return (function (ctx,bindings){
var G__37363 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37364 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37365 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37366 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37367 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37368 = sci.impl.evaluator.eval(ctx,bindings,arg5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__37363,G__37364,G__37365,G__37366,G__37367,G__37368) : f.call(null, G__37363,G__37364,G__37365,G__37366,G__37367,G__37368));
});
}

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__37370 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37371 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37372 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37373 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37374 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37375 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37376 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var fexpr__37369 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null, bindings,f));
return (fexpr__37369.cljs$core$IFn$_invoke$arity$7 ? fexpr__37369.cljs$core$IFn$_invoke$arity$7(G__37370,G__37371,G__37372,G__37373,G__37374,G__37375,G__37376) : fexpr__37369.call(null, G__37370,G__37371,G__37372,G__37373,G__37374,G__37375,G__37376));
});
} else {
return (function (ctx,bindings){
var G__37377 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37378 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37379 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37380 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37381 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37382 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37383 = sci.impl.evaluator.eval(ctx,bindings,arg6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__37377,G__37378,G__37379,G__37380,G__37381,G__37382,G__37383) : f.call(null, G__37377,G__37378,G__37379,G__37380,G__37381,G__37382,G__37383));
});
}

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__37385 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37386 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37387 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37388 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37389 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37390 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37391 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37392 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var fexpr__37384 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null, bindings,f));
return (fexpr__37384.cljs$core$IFn$_invoke$arity$8 ? fexpr__37384.cljs$core$IFn$_invoke$arity$8(G__37385,G__37386,G__37387,G__37388,G__37389,G__37390,G__37391,G__37392) : fexpr__37384.call(null, G__37385,G__37386,G__37387,G__37388,G__37389,G__37390,G__37391,G__37392));
});
} else {
return (function (ctx,bindings){
var G__37393 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37394 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37395 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37396 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37397 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37398 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37399 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37400 = sci.impl.evaluator.eval(ctx,bindings,arg7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__37393,G__37394,G__37395,G__37396,G__37397,G__37398,G__37399,G__37400) : f.call(null, G__37393,G__37394,G__37395,G__37396,G__37397,G__37398,G__37399,G__37400));
});
}

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__37402 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37403 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37404 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37405 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37406 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37407 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37408 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37409 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37410 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var fexpr__37401 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null, bindings,f));
return (fexpr__37401.cljs$core$IFn$_invoke$arity$9 ? fexpr__37401.cljs$core$IFn$_invoke$arity$9(G__37402,G__37403,G__37404,G__37405,G__37406,G__37407,G__37408,G__37409,G__37410) : fexpr__37401.call(null, G__37402,G__37403,G__37404,G__37405,G__37406,G__37407,G__37408,G__37409,G__37410));
});
} else {
return (function (ctx,bindings){
var G__37411 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37412 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37413 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37414 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37415 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37416 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37417 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37418 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37419 = sci.impl.evaluator.eval(ctx,bindings,arg8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__37411,G__37412,G__37413,G__37414,G__37415,G__37416,G__37417,G__37418,G__37419) : f.call(null, G__37411,G__37412,G__37413,G__37414,G__37415,G__37416,G__37417,G__37418,G__37419));
});
}

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__37421 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37422 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37423 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37424 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37425 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37426 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37427 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37428 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37429 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37430 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var fexpr__37420 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null, bindings,f));
return (fexpr__37420.cljs$core$IFn$_invoke$arity$10 ? fexpr__37420.cljs$core$IFn$_invoke$arity$10(G__37421,G__37422,G__37423,G__37424,G__37425,G__37426,G__37427,G__37428,G__37429,G__37430) : fexpr__37420.call(null, G__37421,G__37422,G__37423,G__37424,G__37425,G__37426,G__37427,G__37428,G__37429,G__37430));
});
} else {
return (function (ctx,bindings){
var G__37431 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37432 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37433 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37434 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37435 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37436 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37437 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37438 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37439 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37440 = sci.impl.evaluator.eval(ctx,bindings,arg9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__37431,G__37432,G__37433,G__37434,G__37435,G__37436,G__37437,G__37438,G__37439,G__37440) : f.call(null, G__37431,G__37432,G__37433,G__37434,G__37435,G__37436,G__37437,G__37438,G__37439,G__37440));
});
}

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__37442 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37443 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37444 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37445 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37446 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37447 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37448 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37449 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37450 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37451 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37452 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var fexpr__37441 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null, bindings,f));
return (fexpr__37441.cljs$core$IFn$_invoke$arity$11 ? fexpr__37441.cljs$core$IFn$_invoke$arity$11(G__37442,G__37443,G__37444,G__37445,G__37446,G__37447,G__37448,G__37449,G__37450,G__37451,G__37452) : fexpr__37441.call(null, G__37442,G__37443,G__37444,G__37445,G__37446,G__37447,G__37448,G__37449,G__37450,G__37451,G__37452));
});
} else {
return (function (ctx,bindings){
var G__37453 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37454 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37455 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37456 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37457 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37458 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37459 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37460 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37461 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37462 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37463 = sci.impl.evaluator.eval(ctx,bindings,arg10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__37453,G__37454,G__37455,G__37456,G__37457,G__37458,G__37459,G__37460,G__37461,G__37462,G__37463) : f.call(null, G__37453,G__37454,G__37455,G__37456,G__37457,G__37458,G__37459,G__37460,G__37461,G__37462,G__37463));
});
}

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__37465 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37466 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37467 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37468 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37469 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37470 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37471 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37472 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37473 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37474 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37475 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37476 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var fexpr__37464 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null, bindings,f));
return (fexpr__37464.cljs$core$IFn$_invoke$arity$12 ? fexpr__37464.cljs$core$IFn$_invoke$arity$12(G__37465,G__37466,G__37467,G__37468,G__37469,G__37470,G__37471,G__37472,G__37473,G__37474,G__37475,G__37476) : fexpr__37464.call(null, G__37465,G__37466,G__37467,G__37468,G__37469,G__37470,G__37471,G__37472,G__37473,G__37474,G__37475,G__37476));
});
} else {
return (function (ctx,bindings){
var G__37477 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37478 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37479 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37480 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37481 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37482 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37483 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37484 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37485 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37486 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37487 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37488 = sci.impl.evaluator.eval(ctx,bindings,arg11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__37477,G__37478,G__37479,G__37480,G__37481,G__37482,G__37483,G__37484,G__37485,G__37486,G__37487,G__37488) : f.call(null, G__37477,G__37478,G__37479,G__37480,G__37481,G__37482,G__37483,G__37484,G__37485,G__37486,G__37487,G__37488));
});
}

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__37490 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37491 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37492 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37493 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37494 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37495 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37496 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37497 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37498 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37499 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37500 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37501 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37502 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var fexpr__37489 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null, bindings,f));
return (fexpr__37489.cljs$core$IFn$_invoke$arity$13 ? fexpr__37489.cljs$core$IFn$_invoke$arity$13(G__37490,G__37491,G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499,G__37500,G__37501,G__37502) : fexpr__37489.call(null, G__37490,G__37491,G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499,G__37500,G__37501,G__37502));
});
} else {
return (function (ctx,bindings){
var G__37503 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37504 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37505 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37506 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37507 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37508 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37509 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37510 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37511 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37512 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37513 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37514 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37515 = sci.impl.evaluator.eval(ctx,bindings,arg12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__37503,G__37504,G__37505,G__37506,G__37507,G__37508,G__37509,G__37510,G__37511,G__37512,G__37513,G__37514,G__37515) : f.call(null, G__37503,G__37504,G__37505,G__37506,G__37507,G__37508,G__37509,G__37510,G__37511,G__37512,G__37513,G__37514,G__37515));
});
}

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__37517 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37518 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37519 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37520 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37521 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37522 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37523 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37524 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37525 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37526 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37527 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37528 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37529 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__37530 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var fexpr__37516 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null, bindings,f));
return (fexpr__37516.cljs$core$IFn$_invoke$arity$14 ? fexpr__37516.cljs$core$IFn$_invoke$arity$14(G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524,G__37525,G__37526,G__37527,G__37528,G__37529,G__37530) : fexpr__37516.call(null, G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524,G__37525,G__37526,G__37527,G__37528,G__37529,G__37530));
});
} else {
return (function (ctx,bindings){
var G__37531 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37532 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37533 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37534 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37535 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37536 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37537 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37538 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37539 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37540 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37541 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37542 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37543 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__37544 = sci.impl.evaluator.eval(ctx,bindings,arg13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541,G__37542,G__37543,G__37544) : f.call(null, G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541,G__37542,G__37543,G__37544));
});
}

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__37546 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37547 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37548 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37549 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37550 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37551 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37552 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37553 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37554 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37555 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37556 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37557 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37558 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__37559 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__37560 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var fexpr__37545 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null, bindings,f));
return (fexpr__37545.cljs$core$IFn$_invoke$arity$15 ? fexpr__37545.cljs$core$IFn$_invoke$arity$15(G__37546,G__37547,G__37548,G__37549,G__37550,G__37551,G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560) : fexpr__37545.call(null, G__37546,G__37547,G__37548,G__37549,G__37550,G__37551,G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560));
});
} else {
return (function (ctx,bindings){
var G__37561 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37562 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37563 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37564 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37565 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37566 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37567 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37568 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37569 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37570 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37571 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37572 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37573 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__37574 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__37575 = sci.impl.evaluator.eval(ctx,bindings,arg14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567,G__37568,G__37569,G__37570,G__37571,G__37572,G__37573,G__37574,G__37575) : f.call(null, G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567,G__37568,G__37569,G__37570,G__37571,G__37572,G__37573,G__37574,G__37575));
});
}

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__37577 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37578 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37579 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37580 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37581 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37582 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37583 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37584 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37585 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37586 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37587 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37588 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37589 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__37590 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__37591 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__37592 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var fexpr__37576 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null, bindings,f));
return (fexpr__37576.cljs$core$IFn$_invoke$arity$16 ? fexpr__37576.cljs$core$IFn$_invoke$arity$16(G__37577,G__37578,G__37579,G__37580,G__37581,G__37582,G__37583,G__37584,G__37585,G__37586,G__37587,G__37588,G__37589,G__37590,G__37591,G__37592) : fexpr__37576.call(null, G__37577,G__37578,G__37579,G__37580,G__37581,G__37582,G__37583,G__37584,G__37585,G__37586,G__37587,G__37588,G__37589,G__37590,G__37591,G__37592));
});
} else {
return (function (ctx,bindings){
var G__37593 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37594 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37595 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37596 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37597 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37598 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37599 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37600 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37601 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37602 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37603 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37604 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37605 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__37606 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__37607 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__37608 = sci.impl.evaluator.eval(ctx,bindings,arg15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__37593,G__37594,G__37595,G__37596,G__37597,G__37598,G__37599,G__37600,G__37601,G__37602,G__37603,G__37604,G__37605,G__37606,G__37607,G__37608) : f.call(null, G__37593,G__37594,G__37595,G__37596,G__37597,G__37598,G__37599,G__37600,G__37601,G__37602,G__37603,G__37604,G__37605,G__37606,G__37607,G__37608));
});
}

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__37610 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37611 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37612 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37613 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37614 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37615 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37616 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37617 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37618 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37619 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37620 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37621 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37622 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__37623 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__37624 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__37625 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__37626 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var fexpr__37609 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null, bindings,f));
return (fexpr__37609.cljs$core$IFn$_invoke$arity$17 ? fexpr__37609.cljs$core$IFn$_invoke$arity$17(G__37610,G__37611,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621,G__37622,G__37623,G__37624,G__37625,G__37626) : fexpr__37609.call(null, G__37610,G__37611,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621,G__37622,G__37623,G__37624,G__37625,G__37626));
});
} else {
return (function (ctx,bindings){
var G__37627 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37628 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37629 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37630 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37631 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37632 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37633 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37634 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37635 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37636 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37637 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37638 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37639 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__37640 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__37641 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__37642 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__37643 = sci.impl.evaluator.eval(ctx,bindings,arg16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__37627,G__37628,G__37629,G__37630,G__37631,G__37632,G__37633,G__37634,G__37635,G__37636,G__37637,G__37638,G__37639,G__37640,G__37641,G__37642,G__37643) : f.call(null, G__37627,G__37628,G__37629,G__37630,G__37631,G__37632,G__37633,G__37634,G__37635,G__37636,G__37637,G__37638,G__37639,G__37640,G__37641,G__37642,G__37643));
});
}

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__37645 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37646 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37647 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37648 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37649 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37650 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37651 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37652 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37653 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37654 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37655 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37656 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37657 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__37658 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__37659 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__37660 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__37661 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__37662 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var fexpr__37644 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null, bindings,f));
return (fexpr__37644.cljs$core$IFn$_invoke$arity$18 ? fexpr__37644.cljs$core$IFn$_invoke$arity$18(G__37645,G__37646,G__37647,G__37648,G__37649,G__37650,G__37651,G__37652,G__37653,G__37654,G__37655,G__37656,G__37657,G__37658,G__37659,G__37660,G__37661,G__37662) : fexpr__37644.call(null, G__37645,G__37646,G__37647,G__37648,G__37649,G__37650,G__37651,G__37652,G__37653,G__37654,G__37655,G__37656,G__37657,G__37658,G__37659,G__37660,G__37661,G__37662));
});
} else {
return (function (ctx,bindings){
var G__37663 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37664 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37665 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37666 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37667 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37668 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37669 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37670 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37671 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37672 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37673 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37674 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37675 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__37676 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__37677 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__37678 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__37679 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__37680 = sci.impl.evaluator.eval(ctx,bindings,arg17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__37663,G__37664,G__37665,G__37666,G__37667,G__37668,G__37669,G__37670,G__37671,G__37672,G__37673,G__37674,G__37675,G__37676,G__37677,G__37678,G__37679,G__37680) : f.call(null, G__37663,G__37664,G__37665,G__37666,G__37667,G__37668,G__37669,G__37670,G__37671,G__37672,G__37673,G__37674,G__37675,G__37676,G__37677,G__37678,G__37679,G__37680));
});
}

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__37682 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37683 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37684 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37685 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37686 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37687 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37688 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37689 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37690 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37691 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37692 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37693 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37694 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__37695 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__37696 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__37697 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__37698 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__37699 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var G__37700 = sci.impl.evaluator.eval(ctx,bindings,arg18);
var fexpr__37681 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null, bindings,f));
return (fexpr__37681.cljs$core$IFn$_invoke$arity$19 ? fexpr__37681.cljs$core$IFn$_invoke$arity$19(G__37682,G__37683,G__37684,G__37685,G__37686,G__37687,G__37688,G__37689,G__37690,G__37691,G__37692,G__37693,G__37694,G__37695,G__37696,G__37697,G__37698,G__37699,G__37700) : fexpr__37681.call(null, G__37682,G__37683,G__37684,G__37685,G__37686,G__37687,G__37688,G__37689,G__37690,G__37691,G__37692,G__37693,G__37694,G__37695,G__37696,G__37697,G__37698,G__37699,G__37700));
});
} else {
return (function (ctx,bindings){
var G__37701 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__37702 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__37703 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__37704 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__37705 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__37706 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__37707 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__37708 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__37709 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__37710 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__37711 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__37712 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__37713 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__37714 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__37715 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__37716 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__37717 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__37718 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var G__37719 = sci.impl.evaluator.eval(ctx,bindings,arg18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__37701,G__37702,G__37703,G__37704,G__37705,G__37706,G__37707,G__37708,G__37709,G__37710,G__37711,G__37712,G__37713,G__37714,G__37715,G__37716,G__37717,G__37718,G__37719) : f.call(null, G__37701,G__37702,G__37703,G__37704,G__37705,G__37706,G__37707,G__37708,G__37709,G__37710,G__37711,G__37712,G__37713,G__37714,G__37715,G__37716,G__37717,G__37718,G__37719));
});
}

break;
default:
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,(wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null, bindings,f)),analyzed_children);
});
} else {
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,f,analyzed_children);
});
}

}
})(),null,expr,stack);
});
sci.impl.analyzer.analyze_quote = (function sci$impl$analyzer$analyze_quote(_ctx,expr){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(expr))){
} else {
sci.impl.analyzer.throw_error_with_location("Wrong number of args (0) passed to quote",expr);
}

var snd = cljs.core.second(expr);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (_ctx__$1,_bindings){
return snd;
}),expr);
});
sci.impl.analyzer.analyze_in_ns = (function sci$impl$analyzer$analyze_in_ns(ctx,expr){
var ns_expr = (function (){var G__37720 = ctx;
var G__37721 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37720,G__37721) : sci.impl.analyzer.analyze.call(null, G__37720,G__37721));
})();
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var ns_sym = sci.impl.evaluator.eval(ctx__$1,bindings,ns_expr);
sci.impl.utils.set_namespace_BANG_(ctx__$1,ns_sym,null);

return null;
}),expr);
});
sci.impl.analyzer.analyze_import = (function sci$impl$analyzer$analyze_import(_ctx,expr){
var args = cljs.core.rest(expr);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx,_bindings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_import,ctx,args);
}),null,expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)));
});
sci.impl.analyzer.analyze_call = (function sci$impl$analyzer$analyze_call(ctx,expr,m,top_level_QMARK_){
var eval_file = new cljs.core.Keyword("clojure.core","eval-file","clojure.core/eval-file",801420726).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(eval_file)){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_file,eval_file]));
} else {
}

try{var f = cljs.core.first(expr);
if((f instanceof cljs.core.Symbol)){
var fsym = f;
var special_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,f);
var _ = (cljs.core.truth_((function (){var and__5000__auto__ = special_sym;
if(cljs.core.truth_(and__5000__auto__)){
return new cljs.core.Keyword(null,"check-permissions","check-permissions",669054317).cljs$core$IFn$_invoke$arity$1(ctx);
} else {
return and__5000__auto__;
}
})())?sci.impl.resolve.check_permission_BANG_(ctx,f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_sym,null], null)):null);
var f__$1 = (function (){var or__5002__auto__ = special_sym;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,f,true);
}
})();
var f_meta = cljs.core.meta(f__$1);
var eval_QMARK_ = (function (){var and__5000__auto__ = f_meta;
if(cljs.core.truth_(and__5000__auto__)){
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5000__auto__ = f_meta;
if(cljs.core.truth_(and__5000__auto__)){
return new cljs.core.Keyword("sci.impl.analyzer","static-access","sci.impl.analyzer/static-access",-79014000).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__5000__auto__;
}
})())){
var vec__37722 = f__$1;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37722,(0),null);
var method_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37722,(1),null);
var method_name__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name);
var len = method_name__$1.length;
var idx = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(method_name__$1,".");
var f__$2 = (cljs.core.truth_((function (){var and__5000__auto__ = idx;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((len - (1)),idx);
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.analyzer.goog$module$goog$object.getValueByKeys(class$,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(method_name__$1,(0),idx).split("."))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_name__$1,(idx + (1)))], null):f__$1);
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.evaluator.eval_static_method_invocation(ctx__$1,bindings,cljs.core.cons(f__$2,children));
}),expr);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not(eval_QMARK_);
if(and__5000__auto__){
var or__5002__auto__ = special_sym;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.contains_QMARK_(sci.impl.utils.ana_macros,f__$1);
}
} else {
return and__5000__auto__;
}
})())){
var G__37725 = f__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__37725)){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__37725)){
return sci.impl.analyzer.return_and(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__37725)){
return sci.impl.analyzer.analyze_import(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__37725)){
return sci.impl.analyzer.analyze_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),G__37725)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__37725)){
return sci.impl.analyzer.return_if(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),G__37725)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defn","defn",-126010802,null),G__37725)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__37725)){
return sci.impl.analyzer.return_do(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"loop","loop",1244978678,null),G__37725)){
return sci.impl.analyzer.expand_loop(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),G__37725)){
return sci.impl.analyzer.expand_constructor(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__37725)){
return sci.impl.analyzer.expand_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"declare","declare",654042991,null),G__37725)){
return sci.impl.analyzer.expand_declare(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__37725)){
return sci.impl.analyzer.analyze_quote(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),G__37725)){
return sci.impl.analyzer.expand_dot_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),G__37725)){
return sci.impl.analyzer.analyze_ns_form(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__37725)){
return sci.impl.analyzer.expand_let(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn","fn",465265323,null),G__37725)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__37725)){
return sci.impl.analyzer.analyze_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__37725)){
return sci.impl.analyzer.analyze_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__37725)){
return sci.impl.analyzer.return_recur(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__37725)){
return sci.impl.analyzer.analyze_new(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),G__37725)){
return sci.impl.analyzer.analyze_var(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__37725)){
return sci.impl.analyzer.analyze_lazy_seq(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__37725)){
return sci.impl.analyzer.analyze_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__37725)){
return sci.impl.analyzer.analyze_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__37725)){
return sci.impl.analyzer.return_or(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37725)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
} else {
try{if(cljs.core.truth_(sci.impl.utils.macro_QMARK_(f__$1))){
var needs_ctx_QMARK_ = (sci.impl.utils.needs_ctx === new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1)));
var f__$2 = ((sci.impl.vars.var_QMARK_(f__$1))?cljs.core.deref(f__$1):f__$1);
var v = ((needs_ctx_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$2,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),ctx,cljs.core.rest(expr)):cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$2,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr)));
var expanded = (cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))?v:(cljs.core.truth_((function (){var and__5000__auto__ = top_level_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return ((cljs.core.seq_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(v))));
} else {
return and__5000__auto__;
}
})())?sci.impl.types.__GT_EvalForm(v):(function (){var v__$1 = (cljs.core.truth_(m)?(((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.with_meta(v,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,cljs.core.meta(v)], 0))):v):v);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v__$1) : sci.impl.analyzer.analyze.call(null, ctx,v__$1));
})()
));
return expanded;
} else {
var temp__5802__auto__ = new cljs.core.Keyword("sci.impl","inlined","sci.impl/inlined",-478453593).cljs$core$IFn$_invoke$arity$1(f_meta);
if(cljs.core.truth_(temp__5802__auto__)){
var f__$2 = temp__5802__auto__;
return sci.impl.analyzer.return_call(ctx,expr,f__$2,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);
} else {
var temp__5802__auto____$1 = new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1));
if(cljs.core.truth_(temp__5802__auto____$1)){
var op = temp__5802__auto____$1;
var G__37728 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"needs-ctx","needs-ctx",1605017124,null),G__37728)){
if((sci.impl.utils.needs_ctx === op)){
return sci.impl.analyzer.return_needs_ctx_call(ctx,expr,f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resolve-sym","resolve-sym",-1193683260),G__37728)){
return sci.impl.analyzer.return_binding_call(ctx,expr,f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);

}
}
} else {
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.analyzer","self-ref","sci.impl.analyzer/self-ref",-976932794),f__$1) : sci.impl.utils.kw_identical_QMARK_.call(null, new cljs.core.Keyword("sci.impl.analyzer","self-ref","sci.impl.analyzer/self-ref",-976932794),f__$1)))){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),(function (bindings,___$1){
return cljs.core.deref(bindings.get(fsym));
}));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),((sci.impl.vars.var_QMARK_(f__$1))?(function (___$1,v){
return cljs.core.deref(v);
}):null));
}
}
}
}
}catch (e37726){if((e37726 instanceof Error)){
var e = e37726;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3(ctx,e,sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4(null,null,expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0))));
} else {
throw e37726;

}
}
}
}
} else {
if((f instanceof cljs.core.Keyword)){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
var ccount = cljs.core.count(children);
var G__37729 = ccount;
switch (G__37729) {
case (1):
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return f.cljs$core$IFn$_invoke$arity$1(sci.impl.evaluator.eval(ctx__$1,bindings,arg));
}),expr);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return f.cljs$core$IFn$_invoke$arity$2(sci.impl.evaluator.eval(ctx__$1,bindings,arg0),sci.impl.evaluator.eval(ctx__$1,bindings,arg1));
}),expr);

break;
default:
return sci.impl.analyzer.throw_error_with_location(["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ccount),") passed to: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''),expr);

}
} else {
var f__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.analyzer.analyze.call(null, ctx,f));
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$1,bindings){
var f__$2 = sci.impl.evaluator.eval(ctx__$1,bindings,f__$1);
if(cljs.core.ifn_QMARK_(f__$2)){
return sci.impl.evaluator.fn_call(ctx__$1,bindings,f__$2,children);
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$2], 0))," as a function."].join('')));
}
}),null,expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)));

}
}
}finally {if(cljs.core.truth_(eval_file)){
sci.impl.vars.pop_thread_bindings();
} else {
}
}});
sci.impl.analyzer.constant_colls = true;
sci.impl.analyzer.return_map = (function sci$impl$analyzer$return_map(ctx,the_map){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,the_map);
var analyzed_children = sci.impl.analyzer.analyze_children(ctx,children);
if((cljs.core.count(analyzed_children) <= (16))){
return sci.impl.analyzer.return_call(ctx,the_map,cljs.core.array_map,analyzed_children,null,null);
} else {
return sci.impl.analyzer.return_call(ctx,the_map,cljs.core.hash_map,analyzed_children,null,null);
}
});
sci.impl.analyzer.analyze_map = (function sci$impl$analyzer$analyze_map(ctx,expr,m){
var ks = cljs.core.keys(expr);
var vs = cljs.core.vals(expr);
var constant_map_QMARK_ = ((true) && (((cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,ks)) && (cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,vs)))));
var analyzed_map = ((constant_map_QMARK_)?expr:((cljs.core.not(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(ctx)))?sci.impl.analyzer.return_map(ctx,expr):cljs.core.zipmap(sci.impl.analyzer.analyze_children(ctx,ks),sci.impl.analyzer.analyze_children(ctx,vs))
));
var analyzed_meta = (cljs.core.truth_(m)?(function (){var G__37730 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__37731 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37730,G__37731) : sci.impl.analyzer.analyze.call(null, G__37730,G__37731));
})():null);
var analyzed_meta__$1 = ((((constant_map_QMARK_) && ((m === analyzed_meta))))?analyzed_meta:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(analyzed_meta,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"eval","eval",-1103567905)));
var ret = (cljs.core.truth_(analyzed_meta__$1)?(((analyzed_map instanceof sci.impl.types.EvalFn))?sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var md = sci.impl.evaluator.handle_meta(ctx__$1,bindings,analyzed_meta__$1);
var coll = sci.impl.evaluator.eval(ctx__$1,bindings,analyzed_map);
return cljs.core.with_meta(coll,md);
}),expr):cljs.core.with_meta(analyzed_map,analyzed_meta__$1)):analyzed_map);
return ret;
});
/**
 * Returns analyzed vector or set
 */
sci.impl.analyzer.analyze_vec_or_set = (function sci$impl$analyzer$analyze_vec_or_set(ctx,_f1,f2,expr,m){
var constant_coll_QMARK_ = ((true) && (cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,expr)));
var analyzed_meta = (cljs.core.truth_(m)?(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.analyzer.analyze.call(null, ctx,m)):null);
var must_eval = (((!(constant_coll_QMARK_))) || ((!((m === analyzed_meta)))));
var analyzed_coll = (((!(must_eval)))?expr:(cljs.core.truth_(m)?(function (){var ef = sci.impl.analyzer.return_call(ctx,expr,f2,sci.impl.analyzer.analyze_children(ctx,expr),null,null);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var md = sci.impl.evaluator.eval(ctx__$1,bindings,analyzed_meta);
var coll = sci.impl.evaluator.eval(ctx__$1,bindings,ef);
return cljs.core.with_meta(coll,md);
}),expr);
})():sci.impl.analyzer.return_call(ctx,expr,f2,sci.impl.analyzer.analyze_children(ctx,expr),null,null)));
return analyzed_coll;
});
sci.impl.analyzer.analyze_js_obj = (function sci$impl$analyzer$analyze_js_obj(ctx,js_val){
var v = js_val.val;
if(cljs.core.map_QMARK_(v)){
var ks = cljs.core.keys(v);
var ks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,ks);
var vs = cljs.core.vals(v);
var vs__$1 = sci.impl.analyzer.analyze_children(ctx,vs);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.js_obj,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(ks__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37732_SHARP_){
return sci.impl.evaluator.eval(ctx__$1,bindings,p1__37732_SHARP_);
}),vs__$1)));
}),js_val);
} else {
var vs = sci.impl.analyzer.analyze_children(ctx,v);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var arr = [];
var seq__37733_38159 = cljs.core.seq(vs);
var chunk__37734_38160 = null;
var count__37735_38161 = (0);
var i__37736_38162 = (0);
while(true){
if((i__37736_38162 < count__37735_38161)){
var x_38163 = chunk__37734_38160.cljs$core$IIndexed$_nth$arity$2(null, i__37736_38162);
arr.push(sci.impl.evaluator.eval(ctx__$1,bindings,x_38163));


var G__38165 = seq__37733_38159;
var G__38166 = chunk__37734_38160;
var G__38167 = count__37735_38161;
var G__38168 = (i__37736_38162 + (1));
seq__37733_38159 = G__38165;
chunk__37734_38160 = G__38166;
count__37735_38161 = G__38167;
i__37736_38162 = G__38168;
continue;
} else {
var temp__5804__auto___38172 = cljs.core.seq(seq__37733_38159);
if(temp__5804__auto___38172){
var seq__37733_38173__$1 = temp__5804__auto___38172;
if(cljs.core.chunked_seq_QMARK_(seq__37733_38173__$1)){
var c__5525__auto___38174 = cljs.core.chunk_first(seq__37733_38173__$1);
var G__38175 = cljs.core.chunk_rest(seq__37733_38173__$1);
var G__38176 = c__5525__auto___38174;
var G__38177 = cljs.core.count(c__5525__auto___38174);
var G__38178 = (0);
seq__37733_38159 = G__38175;
chunk__37734_38160 = G__38176;
count__37735_38161 = G__38177;
i__37736_38162 = G__38178;
continue;
} else {
var x_38179 = cljs.core.first(seq__37733_38173__$1);
arr.push(sci.impl.evaluator.eval(ctx__$1,bindings,x_38179));


var G__38180 = cljs.core.next(seq__37733_38173__$1);
var G__38181 = null;
var G__38182 = (0);
var G__38183 = (0);
seq__37733_38159 = G__38180;
chunk__37734_38160 = G__38181;
count__37735_38161 = G__38182;
i__37736_38162 = G__38183;
continue;
}
} else {
}
}
break;
}

return arr;
}),js_val);
}
});
sci.impl.analyzer.analyze = (function sci$impl$analyzer$analyze(var_args){
var G__37738 = arguments.length;
switch (G__37738) {
case 2:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (ctx,expr){
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx,expr,false);
}));

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (ctx,expr,top_level_QMARK_){
var m = cljs.core.meta(expr);
if(sci.impl.utils.constant_QMARK_(expr)){
return expr;
} else {
if((expr instanceof cljs.core.Symbol)){
var v = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$4(ctx,expr,false,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m));
var mv = cljs.core.meta(v);
if(sci.impl.utils.constant_QMARK_(v)){
return v;
} else {
if((sci.impl.utils.needs_ctx === new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(mv))){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(v,ctx);
} else {
if(sci.impl.vars.var_QMARK_(v)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(mv))){
return cljs.core.deref(v);
} else {
if(cljs.core.truth_(sci.impl.vars.isMacro(v))){
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
} else {
return sci.impl.types.__GT_EvalVar(v);
}
}
} else {
return v;

}
}
}
} else {
if(cljs.core.record_QMARK_(expr)){
return expr;
} else {
if(cljs.core.map_QMARK_(expr)){
return sci.impl.analyzer.analyze_map(ctx,expr,m);
} else {
if((expr instanceof cljs.tagged_literals.JSValue)){
return sci.impl.analyzer.analyze_js_obj(ctx,expr);
} else {
if(cljs.core.vector_QMARK_(expr)){
return sci.impl.analyzer.analyze_vec_or_set(ctx,cljs.core.identity,cljs.core.vector,expr,m);
} else {
if(cljs.core.set_QMARK_(expr)){
return sci.impl.analyzer.analyze_vec_or_set(ctx,cljs.core.set,cljs.core.hash_set,expr,m);
} else {
if(cljs.core.seq_QMARK_(expr)){
if(cljs.core.seq(expr)){
return sci.impl.analyzer.analyze_call(ctx,expr,m,top_level_QMARK_);
} else {
return expr;
}
} else {
return expr;

}
}
}
}
}
}
}
}
}));

(sci.impl.analyzer.analyze.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=sci.impl.analyzer.js.map
