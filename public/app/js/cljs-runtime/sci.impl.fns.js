goog.provide('sci.impl.fns');
sci.impl.fns.throw_arity = (function sci$impl$fns$throw_arity(ctx,nsm,fn_name,macro_QMARK_,args){
if(cljs.core.truth_(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206).cljs$core$IFn$_invoke$arity$1(ctx))){
return null;
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(cljs.core.count(args) - (2)):cljs.core.count(args));
return ["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count),") passed to: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nsm),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)].join('')].join('');
})()));
}
});

/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.fns.Recur = (function (val){
this.val = val;
});
(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(sci.impl.fns.Recur.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(sci.impl.fns.Recur.cljs$lang$type = true);

(sci.impl.fns.Recur.cljs$lang$ctorStr = "sci.impl.fns/Recur");

(sci.impl.fns.Recur.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"sci.impl.fns/Recur");
}));

/**
 * Positional factory function for sci.impl.fns/Recur.
 */
sci.impl.fns.__GT_Recur = (function sci$impl$fns$__GT_Recur(val){
return (new sci.impl.fns.Recur(val));
});

sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,bindings,fn_body,fn_name,macro_QMARK_){
var bindings_fn = new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951).cljs$core$IFn$_invoke$arity$1(fn_body);
var bindings__$1 = (bindings_fn.cljs$core$IFn$_invoke$arity$1 ? bindings_fn.cljs$core$IFn$_invoke$arity$1(bindings) : bindings_fn.call(null, bindings));
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_body);
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body);
var nsm = sci.impl.vars.current_ns_name();
var disable_arity_checks_QMARK_ = ctx.get(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206));
var f = ((cljs.core.not(var_arg_name))?(function (){var G__31498 = (fixed_arity | (0));
switch (G__31498) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
while(true){
var ret = sci.impl.evaluator.eval(ctx,bindings__$1,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
continue;
} else {
return ret;
}
break;
}
});

break;
case (1):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31503 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__31502){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31503,G__31502);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__32963 = cljs.core._nth(recur_val,(0));
G__31502 = G__32963;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
} else {
var G__31529 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__31528){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31529,G__31528);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__32965 = cljs.core._nth(recur_val,(0));
G__31528 = G__32965;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
}

break;
case (2):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31544 = cljs.core._nth(params,(0));
var G__31545 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__31542,G__31543){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31544,G__31542);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31545,G__31543);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$3,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__32970 = cljs.core._nth(recur_val,(0));
var G__32971 = cljs.core._nth(recur_val,(1));
G__31542 = G__32970;
G__31543 = G__32971;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
} else {
var G__31553 = cljs.core._nth(params,(0));
var G__31554 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__31551,G__31552){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31553,G__31551);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31554,G__31552);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$3,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__32975 = cljs.core._nth(recur_val,(0));
var G__32976 = cljs.core._nth(recur_val,(1));
G__31551 = G__32975;
G__31552 = G__32976;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
}

break;
case (3):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31573 = cljs.core._nth(params,(0));
var G__31574 = cljs.core._nth(params,(1));
var G__31575 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__31570,G__31571,G__31572){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31573,G__31570);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31574,G__31571);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31575,G__31572);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$4,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__32978 = cljs.core._nth(recur_val,(0));
var G__32979 = cljs.core._nth(recur_val,(1));
var G__32980 = cljs.core._nth(recur_val,(2));
G__31570 = G__32978;
G__31571 = G__32979;
G__31572 = G__32980;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
} else {
var G__31584 = cljs.core._nth(params,(0));
var G__31585 = cljs.core._nth(params,(1));
var G__31586 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__31581,G__31582,G__31583){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31584,G__31581);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31585,G__31582);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31586,G__31583);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$4,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__32983 = cljs.core._nth(recur_val,(0));
var G__32984 = cljs.core._nth(recur_val,(1));
var G__32985 = cljs.core._nth(recur_val,(2));
G__31581 = G__32983;
G__31582 = G__32984;
G__31583 = G__32985;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
}

break;
case (4):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31612 = cljs.core._nth(params,(0));
var G__31613 = cljs.core._nth(params,(1));
var G__31614 = cljs.core._nth(params,(2));
var G__31615 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__31608,G__31609,G__31610,G__31611){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31612,G__31608);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31613,G__31609);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31614,G__31610);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31615,G__31611);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$5,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__32989 = cljs.core._nth(recur_val,(0));
var G__32990 = cljs.core._nth(recur_val,(1));
var G__32991 = cljs.core._nth(recur_val,(2));
var G__32992 = cljs.core._nth(recur_val,(3));
G__31608 = G__32989;
G__31609 = G__32990;
G__31610 = G__32991;
G__31611 = G__32992;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
} else {
var G__31622 = cljs.core._nth(params,(0));
var G__31623 = cljs.core._nth(params,(1));
var G__31624 = cljs.core._nth(params,(2));
var G__31625 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__31618,G__31619,G__31620,G__31621){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31622,G__31618);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31623,G__31619);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31624,G__31620);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31625,G__31621);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$5,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__32993 = cljs.core._nth(recur_val,(0));
var G__32994 = cljs.core._nth(recur_val,(1));
var G__32995 = cljs.core._nth(recur_val,(2));
var G__32996 = cljs.core._nth(recur_val,(3));
G__31618 = G__32993;
G__31619 = G__32994;
G__31620 = G__32995;
G__31621 = G__32996;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
}

break;
case (5):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31656 = cljs.core._nth(params,(0));
var G__31657 = cljs.core._nth(params,(1));
var G__31658 = cljs.core._nth(params,(2));
var G__31659 = cljs.core._nth(params,(3));
var G__31660 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__31651,G__31652,G__31653,G__31654,G__31655){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31656,G__31651);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31657,G__31652);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31658,G__31653);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31659,G__31654);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31660,G__31655);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$6,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__32999 = cljs.core._nth(recur_val,(0));
var G__33000 = cljs.core._nth(recur_val,(1));
var G__33001 = cljs.core._nth(recur_val,(2));
var G__33002 = cljs.core._nth(recur_val,(3));
var G__33003 = cljs.core._nth(recur_val,(4));
G__31651 = G__32999;
G__31652 = G__33000;
G__31653 = G__33001;
G__31654 = G__33002;
G__31655 = G__33003;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
} else {
var G__31672 = cljs.core._nth(params,(0));
var G__31673 = cljs.core._nth(params,(1));
var G__31674 = cljs.core._nth(params,(2));
var G__31675 = cljs.core._nth(params,(3));
var G__31676 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__31667,G__31668,G__31669,G__31670,G__31671){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31672,G__31667);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31673,G__31668);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31674,G__31669);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31675,G__31670);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31676,G__31671);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$6,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33014 = cljs.core._nth(recur_val,(0));
var G__33015 = cljs.core._nth(recur_val,(1));
var G__33016 = cljs.core._nth(recur_val,(2));
var G__33017 = cljs.core._nth(recur_val,(3));
var G__33018 = cljs.core._nth(recur_val,(4));
G__31667 = G__33014;
G__31668 = G__33015;
G__31669 = G__33016;
G__31670 = G__33017;
G__31671 = G__33018;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
}

break;
case (6):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31702 = cljs.core._nth(params,(0));
var G__31703 = cljs.core._nth(params,(1));
var G__31704 = cljs.core._nth(params,(2));
var G__31705 = cljs.core._nth(params,(3));
var G__31706 = cljs.core._nth(params,(4));
var G__31707 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__31696,G__31697,G__31698,G__31699,G__31700,G__31701){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31702,G__31696);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31703,G__31697);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31704,G__31698);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31705,G__31699);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31706,G__31700);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31707,G__31701);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$7,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33027 = cljs.core._nth(recur_val,(0));
var G__33028 = cljs.core._nth(recur_val,(1));
var G__33029 = cljs.core._nth(recur_val,(2));
var G__33030 = cljs.core._nth(recur_val,(3));
var G__33031 = cljs.core._nth(recur_val,(4));
var G__33032 = cljs.core._nth(recur_val,(5));
G__31696 = G__33027;
G__31697 = G__33028;
G__31698 = G__33029;
G__31699 = G__33030;
G__31700 = G__33031;
G__31701 = G__33032;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
} else {
var G__31726 = cljs.core._nth(params,(0));
var G__31727 = cljs.core._nth(params,(1));
var G__31728 = cljs.core._nth(params,(2));
var G__31729 = cljs.core._nth(params,(3));
var G__31730 = cljs.core._nth(params,(4));
var G__31731 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__31720,G__31721,G__31722,G__31723,G__31724,G__31725){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31726,G__31720);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31727,G__31721);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31728,G__31722);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31729,G__31723);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31730,G__31724);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31731,G__31725);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$7,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33041 = cljs.core._nth(recur_val,(0));
var G__33042 = cljs.core._nth(recur_val,(1));
var G__33043 = cljs.core._nth(recur_val,(2));
var G__33044 = cljs.core._nth(recur_val,(3));
var G__33045 = cljs.core._nth(recur_val,(4));
var G__33046 = cljs.core._nth(recur_val,(5));
G__31720 = G__33041;
G__31721 = G__33042;
G__31722 = G__33043;
G__31723 = G__33044;
G__31724 = G__33045;
G__31725 = G__33046;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
}

break;
case (7):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31759 = cljs.core._nth(params,(0));
var G__31760 = cljs.core._nth(params,(1));
var G__31761 = cljs.core._nth(params,(2));
var G__31762 = cljs.core._nth(params,(3));
var G__31763 = cljs.core._nth(params,(4));
var G__31764 = cljs.core._nth(params,(5));
var G__31765 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__31752,G__31753,G__31754,G__31755,G__31756,G__31757,G__31758){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31759,G__31752);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31760,G__31753);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31761,G__31754);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31762,G__31755);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31763,G__31756);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31764,G__31757);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31765,G__31758);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$8,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33050 = cljs.core._nth(recur_val,(0));
var G__33051 = cljs.core._nth(recur_val,(1));
var G__33052 = cljs.core._nth(recur_val,(2));
var G__33053 = cljs.core._nth(recur_val,(3));
var G__33054 = cljs.core._nth(recur_val,(4));
var G__33055 = cljs.core._nth(recur_val,(5));
var G__33056 = cljs.core._nth(recur_val,(6));
G__31752 = G__33050;
G__31753 = G__33051;
G__31754 = G__33052;
G__31755 = G__33053;
G__31756 = G__33054;
G__31757 = G__33055;
G__31758 = G__33056;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
} else {
var G__31780 = cljs.core._nth(params,(0));
var G__31781 = cljs.core._nth(params,(1));
var G__31782 = cljs.core._nth(params,(2));
var G__31783 = cljs.core._nth(params,(3));
var G__31784 = cljs.core._nth(params,(4));
var G__31785 = cljs.core._nth(params,(5));
var G__31786 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__31773,G__31774,G__31775,G__31776,G__31777,G__31778,G__31779){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31780,G__31773);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31781,G__31774);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31782,G__31775);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31783,G__31776);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31784,G__31777);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31785,G__31778);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31786,G__31779);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$8,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33058 = cljs.core._nth(recur_val,(0));
var G__33059 = cljs.core._nth(recur_val,(1));
var G__33060 = cljs.core._nth(recur_val,(2));
var G__33061 = cljs.core._nth(recur_val,(3));
var G__33062 = cljs.core._nth(recur_val,(4));
var G__33063 = cljs.core._nth(recur_val,(5));
var G__33064 = cljs.core._nth(recur_val,(6));
G__31773 = G__33058;
G__31774 = G__33059;
G__31775 = G__33060;
G__31776 = G__33061;
G__31777 = G__33062;
G__31778 = G__33063;
G__31779 = G__33064;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
}

break;
case (8):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31811 = cljs.core._nth(params,(0));
var G__31812 = cljs.core._nth(params,(1));
var G__31813 = cljs.core._nth(params,(2));
var G__31814 = cljs.core._nth(params,(3));
var G__31815 = cljs.core._nth(params,(4));
var G__31816 = cljs.core._nth(params,(5));
var G__31817 = cljs.core._nth(params,(6));
var G__31818 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__31803,G__31804,G__31805,G__31806,G__31807,G__31808,G__31809,G__31810){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31811,G__31803);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31812,G__31804);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31813,G__31805);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31814,G__31806);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31815,G__31807);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31816,G__31808);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31817,G__31809);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31818,G__31810);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$9,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33068 = cljs.core._nth(recur_val,(0));
var G__33069 = cljs.core._nth(recur_val,(1));
var G__33070 = cljs.core._nth(recur_val,(2));
var G__33071 = cljs.core._nth(recur_val,(3));
var G__33072 = cljs.core._nth(recur_val,(4));
var G__33073 = cljs.core._nth(recur_val,(5));
var G__33074 = cljs.core._nth(recur_val,(6));
var G__33075 = cljs.core._nth(recur_val,(7));
G__31803 = G__33068;
G__31804 = G__33069;
G__31805 = G__33070;
G__31806 = G__33071;
G__31807 = G__33072;
G__31808 = G__33073;
G__31809 = G__33074;
G__31810 = G__33075;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
} else {
var G__31841 = cljs.core._nth(params,(0));
var G__31842 = cljs.core._nth(params,(1));
var G__31843 = cljs.core._nth(params,(2));
var G__31844 = cljs.core._nth(params,(3));
var G__31845 = cljs.core._nth(params,(4));
var G__31846 = cljs.core._nth(params,(5));
var G__31847 = cljs.core._nth(params,(6));
var G__31848 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__31833,G__31834,G__31835,G__31836,G__31837,G__31838,G__31839,G__31840){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31841,G__31833);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31842,G__31834);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31843,G__31835);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31844,G__31836);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31845,G__31837);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31846,G__31838);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31847,G__31839);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31848,G__31840);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$9,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33080 = cljs.core._nth(recur_val,(0));
var G__33081 = cljs.core._nth(recur_val,(1));
var G__33082 = cljs.core._nth(recur_val,(2));
var G__33083 = cljs.core._nth(recur_val,(3));
var G__33084 = cljs.core._nth(recur_val,(4));
var G__33085 = cljs.core._nth(recur_val,(5));
var G__33086 = cljs.core._nth(recur_val,(6));
var G__33087 = cljs.core._nth(recur_val,(7));
G__31833 = G__33080;
G__31834 = G__33081;
G__31835 = G__33082;
G__31836 = G__33083;
G__31837 = G__33084;
G__31838 = G__33085;
G__31839 = G__33086;
G__31840 = G__33087;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
}

break;
case (9):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31865 = cljs.core._nth(params,(0));
var G__31868 = cljs.core._nth(params,(1));
var G__31869 = cljs.core._nth(params,(2));
var G__31870 = cljs.core._nth(params,(3));
var G__31871 = cljs.core._nth(params,(4));
var G__31872 = cljs.core._nth(params,(5));
var G__31873 = cljs.core._nth(params,(6));
var G__31874 = cljs.core._nth(params,(7));
var G__31875 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__31854,G__31856,G__31857,G__31858,G__31859,G__31860,G__31861,G__31862,G__31863){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31865,G__31854);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31868,G__31856);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31869,G__31857);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31870,G__31858);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31871,G__31859);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31872,G__31860);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31873,G__31861);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31874,G__31862);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31875,G__31863);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$10,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33091 = cljs.core._nth(recur_val,(0));
var G__33092 = cljs.core._nth(recur_val,(1));
var G__33093 = cljs.core._nth(recur_val,(2));
var G__33094 = cljs.core._nth(recur_val,(3));
var G__33095 = cljs.core._nth(recur_val,(4));
var G__33096 = cljs.core._nth(recur_val,(5));
var G__33097 = cljs.core._nth(recur_val,(6));
var G__33098 = cljs.core._nth(recur_val,(7));
var G__33099 = cljs.core._nth(recur_val,(8));
G__31854 = G__33091;
G__31856 = G__33092;
G__31857 = G__33093;
G__31858 = G__33094;
G__31859 = G__33095;
G__31860 = G__33096;
G__31861 = G__33097;
G__31862 = G__33098;
G__31863 = G__33099;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
} else {
var G__31891 = cljs.core._nth(params,(0));
var G__31892 = cljs.core._nth(params,(1));
var G__31893 = cljs.core._nth(params,(2));
var G__31894 = cljs.core._nth(params,(3));
var G__31895 = cljs.core._nth(params,(4));
var G__31896 = cljs.core._nth(params,(5));
var G__31897 = cljs.core._nth(params,(6));
var G__31898 = cljs.core._nth(params,(7));
var G__31899 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__31882,G__31883,G__31884,G__31885,G__31886,G__31887,G__31888,G__31889,G__31890){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31891,G__31882);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31892,G__31883);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31893,G__31884);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31894,G__31885);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31895,G__31886);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31896,G__31887);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31897,G__31888);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31898,G__31889);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31899,G__31890);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$10,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33101 = cljs.core._nth(recur_val,(0));
var G__33102 = cljs.core._nth(recur_val,(1));
var G__33103 = cljs.core._nth(recur_val,(2));
var G__33104 = cljs.core._nth(recur_val,(3));
var G__33105 = cljs.core._nth(recur_val,(4));
var G__33106 = cljs.core._nth(recur_val,(5));
var G__33107 = cljs.core._nth(recur_val,(6));
var G__33108 = cljs.core._nth(recur_val,(7));
var G__33109 = cljs.core._nth(recur_val,(8));
G__31882 = G__33101;
G__31883 = G__33102;
G__31884 = G__33103;
G__31885 = G__33104;
G__31886 = G__33105;
G__31887 = G__33106;
G__31888 = G__33107;
G__31889 = G__33108;
G__31890 = G__33109;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
}

break;
case (10):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31927 = cljs.core._nth(params,(0));
var G__31928 = cljs.core._nth(params,(1));
var G__31929 = cljs.core._nth(params,(2));
var G__31930 = cljs.core._nth(params,(3));
var G__31931 = cljs.core._nth(params,(4));
var G__31932 = cljs.core._nth(params,(5));
var G__31933 = cljs.core._nth(params,(6));
var G__31934 = cljs.core._nth(params,(7));
var G__31935 = cljs.core._nth(params,(8));
var G__31936 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__31917,G__31918,G__31919,G__31920,G__31921,G__31922,G__31923,G__31924,G__31925,G__31926){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31927,G__31917);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31928,G__31918);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31929,G__31919);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31930,G__31920);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31931,G__31921);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31932,G__31922);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31933,G__31923);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31934,G__31924);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31935,G__31925);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31936,G__31926);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$11,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33113 = cljs.core._nth(recur_val,(0));
var G__33114 = cljs.core._nth(recur_val,(1));
var G__33115 = cljs.core._nth(recur_val,(2));
var G__33116 = cljs.core._nth(recur_val,(3));
var G__33117 = cljs.core._nth(recur_val,(4));
var G__33118 = cljs.core._nth(recur_val,(5));
var G__33119 = cljs.core._nth(recur_val,(6));
var G__33120 = cljs.core._nth(recur_val,(7));
var G__33121 = cljs.core._nth(recur_val,(8));
var G__33122 = cljs.core._nth(recur_val,(9));
G__31917 = G__33113;
G__31918 = G__33114;
G__31919 = G__33115;
G__31920 = G__33116;
G__31921 = G__33117;
G__31922 = G__33118;
G__31923 = G__33119;
G__31924 = G__33120;
G__31925 = G__33121;
G__31926 = G__33122;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
} else {
var G__31964 = cljs.core._nth(params,(0));
var G__31965 = cljs.core._nth(params,(1));
var G__31966 = cljs.core._nth(params,(2));
var G__31967 = cljs.core._nth(params,(3));
var G__31968 = cljs.core._nth(params,(4));
var G__31969 = cljs.core._nth(params,(5));
var G__31970 = cljs.core._nth(params,(6));
var G__31971 = cljs.core._nth(params,(7));
var G__31972 = cljs.core._nth(params,(8));
var G__31973 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__31954,G__31955,G__31956,G__31957,G__31958,G__31959,G__31960,G__31961,G__31962,G__31963){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((10),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31964,G__31954);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31965,G__31955);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31966,G__31956);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31967,G__31957);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31968,G__31958);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31969,G__31959);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31970,G__31960);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31971,G__31961);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31972,G__31962);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31973,G__31963);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$11,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33126 = cljs.core._nth(recur_val,(0));
var G__33127 = cljs.core._nth(recur_val,(1));
var G__33128 = cljs.core._nth(recur_val,(2));
var G__33129 = cljs.core._nth(recur_val,(3));
var G__33130 = cljs.core._nth(recur_val,(4));
var G__33131 = cljs.core._nth(recur_val,(5));
var G__33132 = cljs.core._nth(recur_val,(6));
var G__33133 = cljs.core._nth(recur_val,(7));
var G__33134 = cljs.core._nth(recur_val,(8));
var G__33135 = cljs.core._nth(recur_val,(9));
G__31954 = G__33126;
G__31955 = G__33127;
G__31956 = G__33128;
G__31957 = G__33129;
G__31958 = G__33130;
G__31959 = G__33131;
G__31960 = G__33132;
G__31961 = G__33133;
G__31962 = G__33134;
G__31963 = G__33135;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
}

break;
case (11):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__32002 = cljs.core._nth(params,(0));
var G__32003 = cljs.core._nth(params,(1));
var G__32004 = cljs.core._nth(params,(2));
var G__32005 = cljs.core._nth(params,(3));
var G__32006 = cljs.core._nth(params,(4));
var G__32007 = cljs.core._nth(params,(5));
var G__32008 = cljs.core._nth(params,(6));
var G__32009 = cljs.core._nth(params,(7));
var G__32010 = cljs.core._nth(params,(8));
var G__32011 = cljs.core._nth(params,(9));
var G__32012 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__31991,G__31992,G__31993,G__31994,G__31995,G__31996,G__31997,G__31998,G__31999,G__32000,G__32001){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__32002,G__31991);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32003,G__31992);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32004,G__31993);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32005,G__31994);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32006,G__31995);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32007,G__31996);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32008,G__31997);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32009,G__31998);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32010,G__31999);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32011,G__32000);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32012,G__32001);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$12,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33139 = cljs.core._nth(recur_val,(0));
var G__33140 = cljs.core._nth(recur_val,(1));
var G__33141 = cljs.core._nth(recur_val,(2));
var G__33142 = cljs.core._nth(recur_val,(3));
var G__33143 = cljs.core._nth(recur_val,(4));
var G__33144 = cljs.core._nth(recur_val,(5));
var G__33145 = cljs.core._nth(recur_val,(6));
var G__33146 = cljs.core._nth(recur_val,(7));
var G__33147 = cljs.core._nth(recur_val,(8));
var G__33148 = cljs.core._nth(recur_val,(9));
var G__33149 = cljs.core._nth(recur_val,(10));
G__31991 = G__33139;
G__31992 = G__33140;
G__31993 = G__33141;
G__31994 = G__33142;
G__31995 = G__33143;
G__31996 = G__33144;
G__31997 = G__33145;
G__31998 = G__33146;
G__31999 = G__33147;
G__32000 = G__33148;
G__32001 = G__33149;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
} else {
var G__32029 = cljs.core._nth(params,(0));
var G__32030 = cljs.core._nth(params,(1));
var G__32031 = cljs.core._nth(params,(2));
var G__32032 = cljs.core._nth(params,(3));
var G__32033 = cljs.core._nth(params,(4));
var G__32034 = cljs.core._nth(params,(5));
var G__32035 = cljs.core._nth(params,(6));
var G__32036 = cljs.core._nth(params,(7));
var G__32037 = cljs.core._nth(params,(8));
var G__32038 = cljs.core._nth(params,(9));
var G__32039 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__32018,G__32019,G__32020,G__32021,G__32022,G__32023,G__32024,G__32025,G__32026,G__32027,G__32028){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((11),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__32029,G__32018);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32030,G__32019);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32031,G__32020);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32032,G__32021);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32033,G__32022);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32034,G__32023);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32035,G__32024);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32036,G__32025);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32037,G__32026);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32038,G__32027);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32039,G__32028);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$12,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33158 = cljs.core._nth(recur_val,(0));
var G__33159 = cljs.core._nth(recur_val,(1));
var G__33160 = cljs.core._nth(recur_val,(2));
var G__33161 = cljs.core._nth(recur_val,(3));
var G__33162 = cljs.core._nth(recur_val,(4));
var G__33163 = cljs.core._nth(recur_val,(5));
var G__33164 = cljs.core._nth(recur_val,(6));
var G__33165 = cljs.core._nth(recur_val,(7));
var G__33166 = cljs.core._nth(recur_val,(8));
var G__33167 = cljs.core._nth(recur_val,(9));
var G__33168 = cljs.core._nth(recur_val,(10));
G__32018 = G__33158;
G__32019 = G__33159;
G__32020 = G__33160;
G__32021 = G__33161;
G__32022 = G__33162;
G__32023 = G__33163;
G__32024 = G__33164;
G__32025 = G__33165;
G__32026 = G__33166;
G__32027 = G__33167;
G__32028 = G__33168;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
}

break;
case (12):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__32068 = cljs.core._nth(params,(0));
var G__32069 = cljs.core._nth(params,(1));
var G__32070 = cljs.core._nth(params,(2));
var G__32071 = cljs.core._nth(params,(3));
var G__32072 = cljs.core._nth(params,(4));
var G__32073 = cljs.core._nth(params,(5));
var G__32074 = cljs.core._nth(params,(6));
var G__32075 = cljs.core._nth(params,(7));
var G__32076 = cljs.core._nth(params,(8));
var G__32077 = cljs.core._nth(params,(9));
var G__32078 = cljs.core._nth(params,(10));
var G__32079 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__32056,G__32057,G__32058,G__32059,G__32060,G__32061,G__32062,G__32063,G__32064,G__32065,G__32066,G__32067){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__32068,G__32056);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32069,G__32057);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32070,G__32058);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32071,G__32059);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32072,G__32060);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32073,G__32061);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32074,G__32062);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32075,G__32063);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32076,G__32064);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32077,G__32065);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32078,G__32066);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32079,G__32067);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$13,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33171 = cljs.core._nth(recur_val,(0));
var G__33172 = cljs.core._nth(recur_val,(1));
var G__33173 = cljs.core._nth(recur_val,(2));
var G__33174 = cljs.core._nth(recur_val,(3));
var G__33175 = cljs.core._nth(recur_val,(4));
var G__33176 = cljs.core._nth(recur_val,(5));
var G__33177 = cljs.core._nth(recur_val,(6));
var G__33178 = cljs.core._nth(recur_val,(7));
var G__33179 = cljs.core._nth(recur_val,(8));
var G__33180 = cljs.core._nth(recur_val,(9));
var G__33181 = cljs.core._nth(recur_val,(10));
var G__33182 = cljs.core._nth(recur_val,(11));
G__32056 = G__33171;
G__32057 = G__33172;
G__32058 = G__33173;
G__32059 = G__33174;
G__32060 = G__33175;
G__32061 = G__33176;
G__32062 = G__33177;
G__32063 = G__33178;
G__32064 = G__33179;
G__32065 = G__33180;
G__32066 = G__33181;
G__32067 = G__33182;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
} else {
var G__32105 = cljs.core._nth(params,(0));
var G__32109 = cljs.core._nth(params,(1));
var G__32110 = cljs.core._nth(params,(2));
var G__32111 = cljs.core._nth(params,(3));
var G__32112 = cljs.core._nth(params,(4));
var G__32113 = cljs.core._nth(params,(5));
var G__32114 = cljs.core._nth(params,(6));
var G__32115 = cljs.core._nth(params,(7));
var G__32116 = cljs.core._nth(params,(8));
var G__32117 = cljs.core._nth(params,(9));
var G__32118 = cljs.core._nth(params,(10));
var G__32119 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__32093,G__32094,G__32095,G__32096,G__32097,G__32098,G__32099,G__32100,G__32101,G__32102,G__32103,G__32104){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((12),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__32105,G__32093);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32109,G__32094);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32110,G__32095);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32111,G__32096);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32112,G__32097);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32113,G__32098);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32114,G__32099);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32115,G__32100);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32116,G__32101);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32117,G__32102);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32118,G__32103);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32119,G__32104);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$13,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33184 = cljs.core._nth(recur_val,(0));
var G__33185 = cljs.core._nth(recur_val,(1));
var G__33186 = cljs.core._nth(recur_val,(2));
var G__33187 = cljs.core._nth(recur_val,(3));
var G__33188 = cljs.core._nth(recur_val,(4));
var G__33189 = cljs.core._nth(recur_val,(5));
var G__33190 = cljs.core._nth(recur_val,(6));
var G__33191 = cljs.core._nth(recur_val,(7));
var G__33192 = cljs.core._nth(recur_val,(8));
var G__33193 = cljs.core._nth(recur_val,(9));
var G__33194 = cljs.core._nth(recur_val,(10));
var G__33195 = cljs.core._nth(recur_val,(11));
G__32093 = G__33184;
G__32094 = G__33185;
G__32095 = G__33186;
G__32096 = G__33187;
G__32097 = G__33188;
G__32098 = G__33189;
G__32099 = G__33190;
G__32100 = G__33191;
G__32101 = G__33192;
G__32102 = G__33193;
G__32103 = G__33194;
G__32104 = G__33195;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
}

break;
case (13):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__32152 = cljs.core._nth(params,(0));
var G__32153 = cljs.core._nth(params,(1));
var G__32154 = cljs.core._nth(params,(2));
var G__32155 = cljs.core._nth(params,(3));
var G__32156 = cljs.core._nth(params,(4));
var G__32157 = cljs.core._nth(params,(5));
var G__32158 = cljs.core._nth(params,(6));
var G__32159 = cljs.core._nth(params,(7));
var G__32160 = cljs.core._nth(params,(8));
var G__32161 = cljs.core._nth(params,(9));
var G__32162 = cljs.core._nth(params,(10));
var G__32163 = cljs.core._nth(params,(11));
var G__32164 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__32139,G__32140,G__32141,G__32142,G__32143,G__32144,G__32145,G__32146,G__32147,G__32148,G__32149,G__32150,G__32151){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__32152,G__32139);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32153,G__32140);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32154,G__32141);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32155,G__32142);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32156,G__32143);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32157,G__32144);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32158,G__32145);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32159,G__32146);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32160,G__32147);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32161,G__32148);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32162,G__32149);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32163,G__32150);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32164,G__32151);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$14,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33199 = cljs.core._nth(recur_val,(0));
var G__33200 = cljs.core._nth(recur_val,(1));
var G__33201 = cljs.core._nth(recur_val,(2));
var G__33202 = cljs.core._nth(recur_val,(3));
var G__33203 = cljs.core._nth(recur_val,(4));
var G__33204 = cljs.core._nth(recur_val,(5));
var G__33205 = cljs.core._nth(recur_val,(6));
var G__33206 = cljs.core._nth(recur_val,(7));
var G__33207 = cljs.core._nth(recur_val,(8));
var G__33208 = cljs.core._nth(recur_val,(9));
var G__33209 = cljs.core._nth(recur_val,(10));
var G__33210 = cljs.core._nth(recur_val,(11));
var G__33211 = cljs.core._nth(recur_val,(12));
G__32139 = G__33199;
G__32140 = G__33200;
G__32141 = G__33201;
G__32142 = G__33202;
G__32143 = G__33203;
G__32144 = G__33204;
G__32145 = G__33205;
G__32146 = G__33206;
G__32147 = G__33207;
G__32148 = G__33208;
G__32149 = G__33209;
G__32150 = G__33210;
G__32151 = G__33211;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
} else {
var G__32188 = cljs.core._nth(params,(0));
var G__32189 = cljs.core._nth(params,(1));
var G__32190 = cljs.core._nth(params,(2));
var G__32191 = cljs.core._nth(params,(3));
var G__32192 = cljs.core._nth(params,(4));
var G__32193 = cljs.core._nth(params,(5));
var G__32194 = cljs.core._nth(params,(6));
var G__32195 = cljs.core._nth(params,(7));
var G__32196 = cljs.core._nth(params,(8));
var G__32197 = cljs.core._nth(params,(9));
var G__32198 = cljs.core._nth(params,(10));
var G__32199 = cljs.core._nth(params,(11));
var G__32200 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__32175,G__32176,G__32177,G__32178,G__32179,G__32180,G__32181,G__32182,G__32183,G__32184,G__32185,G__32186,G__32187){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__32188,G__32175);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32189,G__32176);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32190,G__32177);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32191,G__32178);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32192,G__32179);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32193,G__32180);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32194,G__32181);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32195,G__32182);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32196,G__32183);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32197,G__32184);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32198,G__32185);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32199,G__32186);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32200,G__32187);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$14,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33216 = cljs.core._nth(recur_val,(0));
var G__33217 = cljs.core._nth(recur_val,(1));
var G__33218 = cljs.core._nth(recur_val,(2));
var G__33219 = cljs.core._nth(recur_val,(3));
var G__33220 = cljs.core._nth(recur_val,(4));
var G__33221 = cljs.core._nth(recur_val,(5));
var G__33222 = cljs.core._nth(recur_val,(6));
var G__33223 = cljs.core._nth(recur_val,(7));
var G__33224 = cljs.core._nth(recur_val,(8));
var G__33225 = cljs.core._nth(recur_val,(9));
var G__33226 = cljs.core._nth(recur_val,(10));
var G__33227 = cljs.core._nth(recur_val,(11));
var G__33228 = cljs.core._nth(recur_val,(12));
G__32175 = G__33216;
G__32176 = G__33217;
G__32177 = G__33218;
G__32178 = G__33219;
G__32179 = G__33220;
G__32180 = G__33221;
G__32181 = G__33222;
G__32182 = G__33223;
G__32183 = G__33224;
G__32184 = G__33225;
G__32185 = G__33226;
G__32186 = G__33227;
G__32187 = G__33228;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
}

break;
case (14):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__32229 = cljs.core._nth(params,(0));
var G__32231 = cljs.core._nth(params,(1));
var G__32232 = cljs.core._nth(params,(2));
var G__32233 = cljs.core._nth(params,(3));
var G__32234 = cljs.core._nth(params,(4));
var G__32235 = cljs.core._nth(params,(5));
var G__32236 = cljs.core._nth(params,(6));
var G__32237 = cljs.core._nth(params,(7));
var G__32238 = cljs.core._nth(params,(8));
var G__32239 = cljs.core._nth(params,(9));
var G__32240 = cljs.core._nth(params,(10));
var G__32241 = cljs.core._nth(params,(11));
var G__32242 = cljs.core._nth(params,(12));
var G__32243 = cljs.core._nth(params,(13));
var G__32244 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__32214,G__32215,G__32216,G__32217,G__32218,G__32219,G__32220,G__32221,G__32222,G__32223,G__32224,G__32225,G__32226,G__32227,G__32228){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__32229,G__32214);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32231,G__32215);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32232,G__32216);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32233,G__32217);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32234,G__32218);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32235,G__32219);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32236,G__32220);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32237,G__32221);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32238,G__32222);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32239,G__32223);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32240,G__32224);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32241,G__32225);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32242,G__32226);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32243,G__32227);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32244,G__32228);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33233 = cljs.core._nth(recur_val,(0));
var G__33234 = cljs.core._nth(recur_val,(1));
var G__33235 = cljs.core._nth(recur_val,(2));
var G__33236 = cljs.core._nth(recur_val,(3));
var G__33237 = cljs.core._nth(recur_val,(4));
var G__33238 = cljs.core._nth(recur_val,(5));
var G__33239 = cljs.core._nth(recur_val,(6));
var G__33240 = cljs.core._nth(recur_val,(7));
var G__33241 = cljs.core._nth(recur_val,(8));
var G__33242 = cljs.core._nth(recur_val,(9));
var G__33243 = cljs.core._nth(recur_val,(10));
var G__33244 = cljs.core._nth(recur_val,(11));
var G__33245 = cljs.core._nth(recur_val,(12));
var G__33246 = cljs.core._nth(recur_val,(13));
var G__33247 = cljs.core._nth(recur_val,(14));
G__32214 = G__33233;
G__32215 = G__33234;
G__32216 = G__33235;
G__32217 = G__33236;
G__32218 = G__33237;
G__32219 = G__33238;
G__32220 = G__33239;
G__32221 = G__33240;
G__32222 = G__33241;
G__32223 = G__33242;
G__32224 = G__33243;
G__32225 = G__33244;
G__32226 = G__33245;
G__32227 = G__33246;
G__32228 = G__33247;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
} else {
var G__32281 = cljs.core._nth(params,(0));
var G__32282 = cljs.core._nth(params,(1));
var G__32283 = cljs.core._nth(params,(2));
var G__32284 = cljs.core._nth(params,(3));
var G__32285 = cljs.core._nth(params,(4));
var G__32286 = cljs.core._nth(params,(5));
var G__32287 = cljs.core._nth(params,(6));
var G__32288 = cljs.core._nth(params,(7));
var G__32289 = cljs.core._nth(params,(8));
var G__32290 = cljs.core._nth(params,(9));
var G__32291 = cljs.core._nth(params,(10));
var G__32292 = cljs.core._nth(params,(11));
var G__32293 = cljs.core._nth(params,(12));
var G__32294 = cljs.core._nth(params,(13));
var G__32295 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__32266,G__32267,G__32268,G__32269,G__32270,G__32271,G__32272,G__32273,G__32274,G__32275,G__32276,G__32277,G__32278,G__32279,G__32280){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__32281,G__32266);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32282,G__32267);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32283,G__32268);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32284,G__32269);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32285,G__32270);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32286,G__32271);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32287,G__32272);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32288,G__32273);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32289,G__32274);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32290,G__32275);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32291,G__32276);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32292,G__32277);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32293,G__32278);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32294,G__32279);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32295,G__32280);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33251 = cljs.core._nth(recur_val,(0));
var G__33252 = cljs.core._nth(recur_val,(1));
var G__33253 = cljs.core._nth(recur_val,(2));
var G__33254 = cljs.core._nth(recur_val,(3));
var G__33255 = cljs.core._nth(recur_val,(4));
var G__33256 = cljs.core._nth(recur_val,(5));
var G__33257 = cljs.core._nth(recur_val,(6));
var G__33258 = cljs.core._nth(recur_val,(7));
var G__33259 = cljs.core._nth(recur_val,(8));
var G__33260 = cljs.core._nth(recur_val,(9));
var G__33261 = cljs.core._nth(recur_val,(10));
var G__33262 = cljs.core._nth(recur_val,(11));
var G__33263 = cljs.core._nth(recur_val,(12));
var G__33264 = cljs.core._nth(recur_val,(13));
var G__33265 = cljs.core._nth(recur_val,(14));
G__32266 = G__33251;
G__32267 = G__33252;
G__32268 = G__33253;
G__32269 = G__33254;
G__32270 = G__33255;
G__32271 = G__33256;
G__32272 = G__33257;
G__32273 = G__33258;
G__32274 = G__33259;
G__32275 = G__33260;
G__32276 = G__33261;
G__32277 = G__33262;
G__32278 = G__33263;
G__32279 = G__33264;
G__32280 = G__33265;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
}

break;
case (15):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__32330 = cljs.core._nth(params,(0));
var G__32331 = cljs.core._nth(params,(1));
var G__32332 = cljs.core._nth(params,(2));
var G__32333 = cljs.core._nth(params,(3));
var G__32334 = cljs.core._nth(params,(4));
var G__32335 = cljs.core._nth(params,(5));
var G__32336 = cljs.core._nth(params,(6));
var G__32337 = cljs.core._nth(params,(7));
var G__32338 = cljs.core._nth(params,(8));
var G__32339 = cljs.core._nth(params,(9));
var G__32340 = cljs.core._nth(params,(10));
var G__32341 = cljs.core._nth(params,(11));
var G__32342 = cljs.core._nth(params,(12));
var G__32343 = cljs.core._nth(params,(13));
var G__32344 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__32315,G__32316,G__32317,G__32318,G__32319,G__32320,G__32321,G__32322,G__32323,G__32324,G__32325,G__32326,G__32327,G__32328,G__32329){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__32330,G__32315);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32331,G__32316);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32332,G__32317);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32333,G__32318);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32334,G__32319);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32335,G__32320);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32336,G__32321);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32337,G__32322);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32338,G__32323);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32339,G__32324);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32340,G__32325);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32341,G__32326);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32342,G__32327);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32343,G__32328);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32344,G__32329);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33270 = cljs.core._nth(recur_val,(0));
var G__33271 = cljs.core._nth(recur_val,(1));
var G__33272 = cljs.core._nth(recur_val,(2));
var G__33273 = cljs.core._nth(recur_val,(3));
var G__33274 = cljs.core._nth(recur_val,(4));
var G__33275 = cljs.core._nth(recur_val,(5));
var G__33276 = cljs.core._nth(recur_val,(6));
var G__33277 = cljs.core._nth(recur_val,(7));
var G__33278 = cljs.core._nth(recur_val,(8));
var G__33279 = cljs.core._nth(recur_val,(9));
var G__33280 = cljs.core._nth(recur_val,(10));
var G__33281 = cljs.core._nth(recur_val,(11));
var G__33282 = cljs.core._nth(recur_val,(12));
var G__33283 = cljs.core._nth(recur_val,(13));
var G__33284 = cljs.core._nth(recur_val,(14));
G__32315 = G__33270;
G__32316 = G__33271;
G__32317 = G__33272;
G__32318 = G__33273;
G__32319 = G__33274;
G__32320 = G__33275;
G__32321 = G__33276;
G__32322 = G__33277;
G__32323 = G__33278;
G__32324 = G__33279;
G__32325 = G__33280;
G__32326 = G__33281;
G__32327 = G__33282;
G__32328 = G__33283;
G__32329 = G__33284;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
} else {
var G__32377 = cljs.core._nth(params,(0));
var G__32378 = cljs.core._nth(params,(1));
var G__32379 = cljs.core._nth(params,(2));
var G__32380 = cljs.core._nth(params,(3));
var G__32381 = cljs.core._nth(params,(4));
var G__32382 = cljs.core._nth(params,(5));
var G__32383 = cljs.core._nth(params,(6));
var G__32384 = cljs.core._nth(params,(7));
var G__32385 = cljs.core._nth(params,(8));
var G__32386 = cljs.core._nth(params,(9));
var G__32387 = cljs.core._nth(params,(10));
var G__32388 = cljs.core._nth(params,(11));
var G__32389 = cljs.core._nth(params,(12));
var G__32390 = cljs.core._nth(params,(13));
var G__32391 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__32362,G__32363,G__32364,G__32365,G__32366,G__32367,G__32368,G__32369,G__32370,G__32371,G__32372,G__32373,G__32374,G__32375,G__32376){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__32377,G__32362);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32378,G__32363);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32379,G__32364);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32380,G__32365);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32381,G__32366);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32382,G__32367);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32383,G__32368);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32384,G__32369);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32385,G__32370);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32386,G__32371);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32387,G__32372);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32388,G__32373);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32389,G__32374);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32390,G__32375);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32391,G__32376);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33290 = cljs.core._nth(recur_val,(0));
var G__33291 = cljs.core._nth(recur_val,(1));
var G__33292 = cljs.core._nth(recur_val,(2));
var G__33293 = cljs.core._nth(recur_val,(3));
var G__33294 = cljs.core._nth(recur_val,(4));
var G__33295 = cljs.core._nth(recur_val,(5));
var G__33296 = cljs.core._nth(recur_val,(6));
var G__33297 = cljs.core._nth(recur_val,(7));
var G__33298 = cljs.core._nth(recur_val,(8));
var G__33299 = cljs.core._nth(recur_val,(9));
var G__33300 = cljs.core._nth(recur_val,(10));
var G__33301 = cljs.core._nth(recur_val,(11));
var G__33302 = cljs.core._nth(recur_val,(12));
var G__33303 = cljs.core._nth(recur_val,(13));
var G__33304 = cljs.core._nth(recur_val,(14));
G__32362 = G__33290;
G__32363 = G__33291;
G__32364 = G__33292;
G__32365 = G__33293;
G__32366 = G__33294;
G__32367 = G__33295;
G__32368 = G__33296;
G__32369 = G__33297;
G__32370 = G__33298;
G__32371 = G__33299;
G__32372 = G__33300;
G__32373 = G__33301;
G__32374 = G__33302;
G__32375 = G__33303;
G__32376 = G__33304;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
}

break;
case (16):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__32415 = cljs.core._nth(params,(0));
var G__32416 = cljs.core._nth(params,(1));
var G__32417 = cljs.core._nth(params,(2));
var G__32418 = cljs.core._nth(params,(3));
var G__32419 = cljs.core._nth(params,(4));
var G__32420 = cljs.core._nth(params,(5));
var G__32421 = cljs.core._nth(params,(6));
var G__32422 = cljs.core._nth(params,(7));
var G__32423 = cljs.core._nth(params,(8));
var G__32424 = cljs.core._nth(params,(9));
var G__32425 = cljs.core._nth(params,(10));
var G__32426 = cljs.core._nth(params,(11));
var G__32427 = cljs.core._nth(params,(12));
var G__32428 = cljs.core._nth(params,(13));
var G__32429 = cljs.core._nth(params,(14));
var G__32430 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__32399,G__32400,G__32401,G__32402,G__32403,G__32404,G__32405,G__32406,G__32407,G__32408,G__32409,G__32410,G__32411,G__32412,G__32413,G__32414){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__32415,G__32399);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32416,G__32400);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32417,G__32401);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32418,G__32402);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32419,G__32403);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32420,G__32404);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32421,G__32405);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32422,G__32406);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32423,G__32407);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32424,G__32408);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32425,G__32409);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32426,G__32410);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32427,G__32411);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32428,G__32412);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32429,G__32413);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__32430,G__32414);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$17,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33318 = cljs.core._nth(recur_val,(0));
var G__33319 = cljs.core._nth(recur_val,(1));
var G__33320 = cljs.core._nth(recur_val,(2));
var G__33321 = cljs.core._nth(recur_val,(3));
var G__33322 = cljs.core._nth(recur_val,(4));
var G__33323 = cljs.core._nth(recur_val,(5));
var G__33324 = cljs.core._nth(recur_val,(6));
var G__33325 = cljs.core._nth(recur_val,(7));
var G__33326 = cljs.core._nth(recur_val,(8));
var G__33327 = cljs.core._nth(recur_val,(9));
var G__33328 = cljs.core._nth(recur_val,(10));
var G__33329 = cljs.core._nth(recur_val,(11));
var G__33330 = cljs.core._nth(recur_val,(12));
var G__33331 = cljs.core._nth(recur_val,(13));
var G__33332 = cljs.core._nth(recur_val,(14));
var G__33333 = cljs.core._nth(recur_val,(15));
G__32399 = G__33318;
G__32400 = G__33319;
G__32401 = G__33320;
G__32402 = G__33321;
G__32403 = G__33322;
G__32404 = G__33323;
G__32405 = G__33324;
G__32406 = G__33325;
G__32407 = G__33326;
G__32408 = G__33327;
G__32409 = G__33328;
G__32410 = G__33329;
G__32411 = G__33330;
G__32412 = G__33331;
G__32413 = G__33332;
G__32414 = G__33333;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
} else {
var G__32452 = cljs.core._nth(params,(0));
var G__32453 = cljs.core._nth(params,(1));
var G__32454 = cljs.core._nth(params,(2));
var G__32455 = cljs.core._nth(params,(3));
var G__32456 = cljs.core._nth(params,(4));
var G__32457 = cljs.core._nth(params,(5));
var G__32458 = cljs.core._nth(params,(6));
var G__32459 = cljs.core._nth(params,(7));
var G__32460 = cljs.core._nth(params,(8));
var G__32461 = cljs.core._nth(params,(9));
var G__32462 = cljs.core._nth(params,(10));
var G__32463 = cljs.core._nth(params,(11));
var G__32464 = cljs.core._nth(params,(12));
var G__32465 = cljs.core._nth(params,(13));
var G__32466 = cljs.core._nth(params,(14));
var G__32467 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__32436,G__32437,G__32438,G__32439,G__32440,G__32441,G__32442,G__32443,G__32444,G__32445,G__32446,G__32447,G__32448,G__32449,G__32450,G__32451){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((16),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__32452,G__32436);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32453,G__32437);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32454,G__32438);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32455,G__32439);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32456,G__32440);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32457,G__32441);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32458,G__32442);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32459,G__32443);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32460,G__32444);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32461,G__32445);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32462,G__32446);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32463,G__32447);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32464,G__32448);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32465,G__32449);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32466,G__32450);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__32467,G__32451);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$17,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33336 = cljs.core._nth(recur_val,(0));
var G__33337 = cljs.core._nth(recur_val,(1));
var G__33338 = cljs.core._nth(recur_val,(2));
var G__33339 = cljs.core._nth(recur_val,(3));
var G__33340 = cljs.core._nth(recur_val,(4));
var G__33341 = cljs.core._nth(recur_val,(5));
var G__33342 = cljs.core._nth(recur_val,(6));
var G__33343 = cljs.core._nth(recur_val,(7));
var G__33344 = cljs.core._nth(recur_val,(8));
var G__33345 = cljs.core._nth(recur_val,(9));
var G__33346 = cljs.core._nth(recur_val,(10));
var G__33347 = cljs.core._nth(recur_val,(11));
var G__33348 = cljs.core._nth(recur_val,(12));
var G__33349 = cljs.core._nth(recur_val,(13));
var G__33350 = cljs.core._nth(recur_val,(14));
var G__33351 = cljs.core._nth(recur_val,(15));
G__32436 = G__33336;
G__32437 = G__33337;
G__32438 = G__33338;
G__32439 = G__33339;
G__32440 = G__33340;
G__32441 = G__33341;
G__32442 = G__33342;
G__32443 = G__33343;
G__32444 = G__33344;
G__32445 = G__33345;
G__32446 = G__33346;
G__32447 = G__33347;
G__32448 = G__33348;
G__32449 = G__33349;
G__32450 = G__33350;
G__32451 = G__33351;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
}

break;
case (17):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__32496 = cljs.core._nth(params,(0));
var G__32497 = cljs.core._nth(params,(1));
var G__32498 = cljs.core._nth(params,(2));
var G__32499 = cljs.core._nth(params,(3));
var G__32500 = cljs.core._nth(params,(4));
var G__32501 = cljs.core._nth(params,(5));
var G__32502 = cljs.core._nth(params,(6));
var G__32503 = cljs.core._nth(params,(7));
var G__32504 = cljs.core._nth(params,(8));
var G__32505 = cljs.core._nth(params,(9));
var G__32506 = cljs.core._nth(params,(10));
var G__32507 = cljs.core._nth(params,(11));
var G__32508 = cljs.core._nth(params,(12));
var G__32509 = cljs.core._nth(params,(13));
var G__32510 = cljs.core._nth(params,(14));
var G__32511 = cljs.core._nth(params,(15));
var G__32512 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__32479,G__32480,G__32481,G__32482,G__32483,G__32484,G__32485,G__32486,G__32487,G__32488,G__32489,G__32490,G__32491,G__32492,G__32493,G__32494,G__32495){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__32496,G__32479);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32497,G__32480);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32498,G__32481);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32499,G__32482);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32500,G__32483);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32501,G__32484);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32502,G__32485);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32503,G__32486);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32504,G__32487);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32505,G__32488);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32506,G__32489);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32507,G__32490);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32508,G__32491);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32509,G__32492);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32510,G__32493);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__32511,G__32494);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__32512,G__32495);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$18,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33353 = cljs.core._nth(recur_val,(0));
var G__33354 = cljs.core._nth(recur_val,(1));
var G__33355 = cljs.core._nth(recur_val,(2));
var G__33356 = cljs.core._nth(recur_val,(3));
var G__33357 = cljs.core._nth(recur_val,(4));
var G__33358 = cljs.core._nth(recur_val,(5));
var G__33359 = cljs.core._nth(recur_val,(6));
var G__33360 = cljs.core._nth(recur_val,(7));
var G__33361 = cljs.core._nth(recur_val,(8));
var G__33362 = cljs.core._nth(recur_val,(9));
var G__33363 = cljs.core._nth(recur_val,(10));
var G__33364 = cljs.core._nth(recur_val,(11));
var G__33365 = cljs.core._nth(recur_val,(12));
var G__33366 = cljs.core._nth(recur_val,(13));
var G__33367 = cljs.core._nth(recur_val,(14));
var G__33368 = cljs.core._nth(recur_val,(15));
var G__33369 = cljs.core._nth(recur_val,(16));
G__32479 = G__33353;
G__32480 = G__33354;
G__32481 = G__33355;
G__32482 = G__33356;
G__32483 = G__33357;
G__32484 = G__33358;
G__32485 = G__33359;
G__32486 = G__33360;
G__32487 = G__33361;
G__32488 = G__33362;
G__32489 = G__33363;
G__32490 = G__33364;
G__32491 = G__33365;
G__32492 = G__33366;
G__32493 = G__33367;
G__32494 = G__33368;
G__32495 = G__33369;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
} else {
var G__32541 = cljs.core._nth(params,(0));
var G__32542 = cljs.core._nth(params,(1));
var G__32543 = cljs.core._nth(params,(2));
var G__32544 = cljs.core._nth(params,(3));
var G__32545 = cljs.core._nth(params,(4));
var G__32546 = cljs.core._nth(params,(5));
var G__32547 = cljs.core._nth(params,(6));
var G__32548 = cljs.core._nth(params,(7));
var G__32549 = cljs.core._nth(params,(8));
var G__32550 = cljs.core._nth(params,(9));
var G__32551 = cljs.core._nth(params,(10));
var G__32552 = cljs.core._nth(params,(11));
var G__32553 = cljs.core._nth(params,(12));
var G__32554 = cljs.core._nth(params,(13));
var G__32555 = cljs.core._nth(params,(14));
var G__32556 = cljs.core._nth(params,(15));
var G__32557 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__32524,G__32525,G__32526,G__32527,G__32528,G__32529,G__32530,G__32531,G__32532,G__32533,G__32534,G__32535,G__32536,G__32537,G__32538,G__32539,G__32540){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((17),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__32541,G__32524);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32542,G__32525);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32543,G__32526);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32544,G__32527);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32545,G__32528);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32546,G__32529);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32547,G__32530);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32548,G__32531);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32549,G__32532);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32550,G__32533);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32551,G__32534);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32552,G__32535);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32553,G__32536);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32554,G__32537);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32555,G__32538);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__32556,G__32539);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__32557,G__32540);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$18,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33376 = cljs.core._nth(recur_val,(0));
var G__33377 = cljs.core._nth(recur_val,(1));
var G__33378 = cljs.core._nth(recur_val,(2));
var G__33379 = cljs.core._nth(recur_val,(3));
var G__33380 = cljs.core._nth(recur_val,(4));
var G__33381 = cljs.core._nth(recur_val,(5));
var G__33382 = cljs.core._nth(recur_val,(6));
var G__33383 = cljs.core._nth(recur_val,(7));
var G__33384 = cljs.core._nth(recur_val,(8));
var G__33385 = cljs.core._nth(recur_val,(9));
var G__33386 = cljs.core._nth(recur_val,(10));
var G__33387 = cljs.core._nth(recur_val,(11));
var G__33388 = cljs.core._nth(recur_val,(12));
var G__33389 = cljs.core._nth(recur_val,(13));
var G__33390 = cljs.core._nth(recur_val,(14));
var G__33391 = cljs.core._nth(recur_val,(15));
var G__33392 = cljs.core._nth(recur_val,(16));
G__32524 = G__33376;
G__32525 = G__33377;
G__32526 = G__33378;
G__32527 = G__33379;
G__32528 = G__33380;
G__32529 = G__33381;
G__32530 = G__33382;
G__32531 = G__33383;
G__32532 = G__33384;
G__32533 = G__33385;
G__32534 = G__33386;
G__32535 = G__33387;
G__32536 = G__33388;
G__32537 = G__33389;
G__32538 = G__33390;
G__32539 = G__33391;
G__32540 = G__33392;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
}

break;
case (18):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__32608 = cljs.core._nth(params,(0));
var G__32609 = cljs.core._nth(params,(1));
var G__32610 = cljs.core._nth(params,(2));
var G__32611 = cljs.core._nth(params,(3));
var G__32612 = cljs.core._nth(params,(4));
var G__32613 = cljs.core._nth(params,(5));
var G__32614 = cljs.core._nth(params,(6));
var G__32615 = cljs.core._nth(params,(7));
var G__32616 = cljs.core._nth(params,(8));
var G__32617 = cljs.core._nth(params,(9));
var G__32618 = cljs.core._nth(params,(10));
var G__32619 = cljs.core._nth(params,(11));
var G__32620 = cljs.core._nth(params,(12));
var G__32621 = cljs.core._nth(params,(13));
var G__32622 = cljs.core._nth(params,(14));
var G__32623 = cljs.core._nth(params,(15));
var G__32624 = cljs.core._nth(params,(16));
var G__32625 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__32590,G__32591,G__32592,G__32593,G__32594,G__32595,G__32596,G__32597,G__32598,G__32599,G__32600,G__32601,G__32602,G__32603,G__32604,G__32605,G__32606,G__32607){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__32608,G__32590);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32609,G__32591);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32610,G__32592);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32611,G__32593);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32612,G__32594);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32613,G__32595);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32614,G__32596);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32615,G__32597);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32616,G__32598);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32617,G__32599);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32618,G__32600);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32619,G__32601);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32620,G__32602);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32621,G__32603);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32622,G__32604);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__32623,G__32605);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__32624,G__32606);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__32625,G__32607);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$19,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33398 = cljs.core._nth(recur_val,(0));
var G__33399 = cljs.core._nth(recur_val,(1));
var G__33400 = cljs.core._nth(recur_val,(2));
var G__33401 = cljs.core._nth(recur_val,(3));
var G__33402 = cljs.core._nth(recur_val,(4));
var G__33403 = cljs.core._nth(recur_val,(5));
var G__33404 = cljs.core._nth(recur_val,(6));
var G__33405 = cljs.core._nth(recur_val,(7));
var G__33406 = cljs.core._nth(recur_val,(8));
var G__33407 = cljs.core._nth(recur_val,(9));
var G__33408 = cljs.core._nth(recur_val,(10));
var G__33409 = cljs.core._nth(recur_val,(11));
var G__33410 = cljs.core._nth(recur_val,(12));
var G__33411 = cljs.core._nth(recur_val,(13));
var G__33412 = cljs.core._nth(recur_val,(14));
var G__33413 = cljs.core._nth(recur_val,(15));
var G__33414 = cljs.core._nth(recur_val,(16));
var G__33415 = cljs.core._nth(recur_val,(17));
G__32590 = G__33398;
G__32591 = G__33399;
G__32592 = G__33400;
G__32593 = G__33401;
G__32594 = G__33402;
G__32595 = G__33403;
G__32596 = G__33404;
G__32597 = G__33405;
G__32598 = G__33406;
G__32599 = G__33407;
G__32600 = G__33408;
G__32601 = G__33409;
G__32602 = G__33410;
G__32603 = G__33411;
G__32604 = G__33412;
G__32605 = G__33413;
G__32606 = G__33414;
G__32607 = G__33415;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
} else {
var G__32660 = cljs.core._nth(params,(0));
var G__32661 = cljs.core._nth(params,(1));
var G__32662 = cljs.core._nth(params,(2));
var G__32663 = cljs.core._nth(params,(3));
var G__32664 = cljs.core._nth(params,(4));
var G__32665 = cljs.core._nth(params,(5));
var G__32666 = cljs.core._nth(params,(6));
var G__32667 = cljs.core._nth(params,(7));
var G__32668 = cljs.core._nth(params,(8));
var G__32669 = cljs.core._nth(params,(9));
var G__32670 = cljs.core._nth(params,(10));
var G__32671 = cljs.core._nth(params,(11));
var G__32672 = cljs.core._nth(params,(12));
var G__32673 = cljs.core._nth(params,(13));
var G__32674 = cljs.core._nth(params,(14));
var G__32675 = cljs.core._nth(params,(15));
var G__32676 = cljs.core._nth(params,(16));
var G__32677 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__32642,G__32643,G__32644,G__32645,G__32646,G__32647,G__32648,G__32649,G__32650,G__32651,G__32652,G__32653,G__32654,G__32655,G__32656,G__32657,G__32658,G__32659){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((18),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__32660,G__32642);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32661,G__32643);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32662,G__32644);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32663,G__32645);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32664,G__32646);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32665,G__32647);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32666,G__32648);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32667,G__32649);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32668,G__32650);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32669,G__32651);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32670,G__32652);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32671,G__32653);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32672,G__32654);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32673,G__32655);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32674,G__32656);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__32675,G__32657);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__32676,G__32658);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__32677,G__32659);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$19,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33422 = cljs.core._nth(recur_val,(0));
var G__33423 = cljs.core._nth(recur_val,(1));
var G__33424 = cljs.core._nth(recur_val,(2));
var G__33425 = cljs.core._nth(recur_val,(3));
var G__33426 = cljs.core._nth(recur_val,(4));
var G__33427 = cljs.core._nth(recur_val,(5));
var G__33428 = cljs.core._nth(recur_val,(6));
var G__33429 = cljs.core._nth(recur_val,(7));
var G__33430 = cljs.core._nth(recur_val,(8));
var G__33431 = cljs.core._nth(recur_val,(9));
var G__33432 = cljs.core._nth(recur_val,(10));
var G__33433 = cljs.core._nth(recur_val,(11));
var G__33434 = cljs.core._nth(recur_val,(12));
var G__33435 = cljs.core._nth(recur_val,(13));
var G__33436 = cljs.core._nth(recur_val,(14));
var G__33437 = cljs.core._nth(recur_val,(15));
var G__33438 = cljs.core._nth(recur_val,(16));
var G__33439 = cljs.core._nth(recur_val,(17));
G__32642 = G__33422;
G__32643 = G__33423;
G__32644 = G__33424;
G__32645 = G__33425;
G__32646 = G__33426;
G__32647 = G__33427;
G__32648 = G__33428;
G__32649 = G__33429;
G__32650 = G__33430;
G__32651 = G__33431;
G__32652 = G__33432;
G__32653 = G__33433;
G__32654 = G__33434;
G__32655 = G__33435;
G__32656 = G__33436;
G__32657 = G__33437;
G__32658 = G__33438;
G__32659 = G__33439;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
}

break;
case (19):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__32725 = cljs.core._nth(params,(0));
var G__32729 = cljs.core._nth(params,(1));
var G__32730 = cljs.core._nth(params,(2));
var G__32731 = cljs.core._nth(params,(3));
var G__32732 = cljs.core._nth(params,(4));
var G__32733 = cljs.core._nth(params,(5));
var G__32734 = cljs.core._nth(params,(6));
var G__32735 = cljs.core._nth(params,(7));
var G__32736 = cljs.core._nth(params,(8));
var G__32737 = cljs.core._nth(params,(9));
var G__32738 = cljs.core._nth(params,(10));
var G__32739 = cljs.core._nth(params,(11));
var G__32740 = cljs.core._nth(params,(12));
var G__32741 = cljs.core._nth(params,(13));
var G__32742 = cljs.core._nth(params,(14));
var G__32743 = cljs.core._nth(params,(15));
var G__32744 = cljs.core._nth(params,(16));
var G__32745 = cljs.core._nth(params,(17));
var G__32746 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__32706,G__32707,G__32708,G__32709,G__32710,G__32711,G__32712,G__32713,G__32714,G__32715,G__32716,G__32717,G__32718,G__32719,G__32720,G__32721,G__32722,G__32723,G__32724){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__32725,G__32706);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32729,G__32707);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32730,G__32708);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32731,G__32709);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32732,G__32710);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32733,G__32711);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32734,G__32712);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32735,G__32713);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32736,G__32714);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32737,G__32715);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32738,G__32716);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32739,G__32717);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32740,G__32718);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32741,G__32719);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32742,G__32720);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__32743,G__32721);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__32744,G__32722);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__32745,G__32723);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__32746,G__32724);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$20,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33446 = cljs.core._nth(recur_val,(0));
var G__33447 = cljs.core._nth(recur_val,(1));
var G__33448 = cljs.core._nth(recur_val,(2));
var G__33449 = cljs.core._nth(recur_val,(3));
var G__33450 = cljs.core._nth(recur_val,(4));
var G__33451 = cljs.core._nth(recur_val,(5));
var G__33452 = cljs.core._nth(recur_val,(6));
var G__33453 = cljs.core._nth(recur_val,(7));
var G__33454 = cljs.core._nth(recur_val,(8));
var G__33455 = cljs.core._nth(recur_val,(9));
var G__33456 = cljs.core._nth(recur_val,(10));
var G__33457 = cljs.core._nth(recur_val,(11));
var G__33458 = cljs.core._nth(recur_val,(12));
var G__33459 = cljs.core._nth(recur_val,(13));
var G__33460 = cljs.core._nth(recur_val,(14));
var G__33461 = cljs.core._nth(recur_val,(15));
var G__33462 = cljs.core._nth(recur_val,(16));
var G__33463 = cljs.core._nth(recur_val,(17));
var G__33464 = cljs.core._nth(recur_val,(18));
G__32706 = G__33446;
G__32707 = G__33447;
G__32708 = G__33448;
G__32709 = G__33449;
G__32710 = G__33450;
G__32711 = G__33451;
G__32712 = G__33452;
G__32713 = G__33453;
G__32714 = G__33454;
G__32715 = G__33455;
G__32716 = G__33456;
G__32717 = G__33457;
G__32718 = G__33458;
G__32719 = G__33459;
G__32720 = G__33460;
G__32721 = G__33461;
G__32722 = G__33462;
G__32723 = G__33463;
G__32724 = G__33464;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
} else {
var G__32780 = cljs.core._nth(params,(0));
var G__32781 = cljs.core._nth(params,(1));
var G__32782 = cljs.core._nth(params,(2));
var G__32783 = cljs.core._nth(params,(3));
var G__32784 = cljs.core._nth(params,(4));
var G__32785 = cljs.core._nth(params,(5));
var G__32786 = cljs.core._nth(params,(6));
var G__32787 = cljs.core._nth(params,(7));
var G__32788 = cljs.core._nth(params,(8));
var G__32789 = cljs.core._nth(params,(9));
var G__32790 = cljs.core._nth(params,(10));
var G__32791 = cljs.core._nth(params,(11));
var G__32792 = cljs.core._nth(params,(12));
var G__32793 = cljs.core._nth(params,(13));
var G__32794 = cljs.core._nth(params,(14));
var G__32795 = cljs.core._nth(params,(15));
var G__32796 = cljs.core._nth(params,(16));
var G__32797 = cljs.core._nth(params,(17));
var G__32798 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__32761,G__32762,G__32763,G__32764,G__32765,G__32766,G__32767,G__32768,G__32769,G__32770,G__32771,G__32772,G__32773,G__32774,G__32775,G__32776,G__32777,G__32778,G__32779){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((19),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__32780,G__32761);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32781,G__32762);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32782,G__32763);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32783,G__32764);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32784,G__32765);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32785,G__32766);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32786,G__32767);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32787,G__32768);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32788,G__32769);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32789,G__32770);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32790,G__32771);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32791,G__32772);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32792,G__32773);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32793,G__32774);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32794,G__32775);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__32795,G__32776);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__32796,G__32777);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__32797,G__32778);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__32798,G__32779);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$20,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33469 = cljs.core._nth(recur_val,(0));
var G__33470 = cljs.core._nth(recur_val,(1));
var G__33471 = cljs.core._nth(recur_val,(2));
var G__33472 = cljs.core._nth(recur_val,(3));
var G__33473 = cljs.core._nth(recur_val,(4));
var G__33474 = cljs.core._nth(recur_val,(5));
var G__33475 = cljs.core._nth(recur_val,(6));
var G__33476 = cljs.core._nth(recur_val,(7));
var G__33477 = cljs.core._nth(recur_val,(8));
var G__33478 = cljs.core._nth(recur_val,(9));
var G__33479 = cljs.core._nth(recur_val,(10));
var G__33480 = cljs.core._nth(recur_val,(11));
var G__33481 = cljs.core._nth(recur_val,(12));
var G__33482 = cljs.core._nth(recur_val,(13));
var G__33483 = cljs.core._nth(recur_val,(14));
var G__33484 = cljs.core._nth(recur_val,(15));
var G__33485 = cljs.core._nth(recur_val,(16));
var G__33486 = cljs.core._nth(recur_val,(17));
var G__33487 = cljs.core._nth(recur_val,(18));
G__32761 = G__33469;
G__32762 = G__33470;
G__32763 = G__33471;
G__32764 = G__33472;
G__32765 = G__33473;
G__32766 = G__33474;
G__32767 = G__33475;
G__32768 = G__33476;
G__32769 = G__33477;
G__32770 = G__33478;
G__32771 = G__33479;
G__32772 = G__33480;
G__32773 = G__33481;
G__32774 = G__33482;
G__32775 = G__33483;
G__32776 = G__33484;
G__32777 = G__33485;
G__32778 = G__33486;
G__32779 = G__33487;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
}

break;
case (20):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__32839 = cljs.core._nth(params,(0));
var G__32840 = cljs.core._nth(params,(1));
var G__32841 = cljs.core._nth(params,(2));
var G__32842 = cljs.core._nth(params,(3));
var G__32843 = cljs.core._nth(params,(4));
var G__32844 = cljs.core._nth(params,(5));
var G__32845 = cljs.core._nth(params,(6));
var G__32846 = cljs.core._nth(params,(7));
var G__32847 = cljs.core._nth(params,(8));
var G__32848 = cljs.core._nth(params,(9));
var G__32849 = cljs.core._nth(params,(10));
var G__32850 = cljs.core._nth(params,(11));
var G__32851 = cljs.core._nth(params,(12));
var G__32852 = cljs.core._nth(params,(13));
var G__32853 = cljs.core._nth(params,(14));
var G__32854 = cljs.core._nth(params,(15));
var G__32855 = cljs.core._nth(params,(16));
var G__32856 = cljs.core._nth(params,(17));
var G__32857 = cljs.core._nth(params,(18));
var G__32858 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__32819,G__32820,G__32821,G__32822,G__32823,G__32824,G__32825,G__32826,G__32827,G__32828,G__32829,G__32830,G__32831,G__32832,G__32833,G__32834,G__32835,G__32836,G__32837,G__32838){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__32839,G__32819);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32840,G__32820);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32841,G__32821);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32842,G__32822);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32843,G__32823);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32844,G__32824);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32845,G__32825);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32846,G__32826);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32847,G__32827);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32848,G__32828);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32849,G__32829);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32850,G__32830);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32851,G__32831);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32852,G__32832);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32853,G__32833);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__32854,G__32834);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__32855,G__32835);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__32856,G__32836);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__32857,G__32837);
var bindings__$21 = cljs.core._assoc(bindings__$20,G__32858,G__32838);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$21,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33494 = cljs.core._nth(recur_val,(0));
var G__33495 = cljs.core._nth(recur_val,(1));
var G__33496 = cljs.core._nth(recur_val,(2));
var G__33497 = cljs.core._nth(recur_val,(3));
var G__33498 = cljs.core._nth(recur_val,(4));
var G__33499 = cljs.core._nth(recur_val,(5));
var G__33500 = cljs.core._nth(recur_val,(6));
var G__33501 = cljs.core._nth(recur_val,(7));
var G__33502 = cljs.core._nth(recur_val,(8));
var G__33503 = cljs.core._nth(recur_val,(9));
var G__33504 = cljs.core._nth(recur_val,(10));
var G__33505 = cljs.core._nth(recur_val,(11));
var G__33506 = cljs.core._nth(recur_val,(12));
var G__33507 = cljs.core._nth(recur_val,(13));
var G__33508 = cljs.core._nth(recur_val,(14));
var G__33509 = cljs.core._nth(recur_val,(15));
var G__33510 = cljs.core._nth(recur_val,(16));
var G__33511 = cljs.core._nth(recur_val,(17));
var G__33512 = cljs.core._nth(recur_val,(18));
var G__33513 = cljs.core._nth(recur_val,(19));
G__32819 = G__33494;
G__32820 = G__33495;
G__32821 = G__33496;
G__32822 = G__33497;
G__32823 = G__33498;
G__32824 = G__33499;
G__32825 = G__33500;
G__32826 = G__33501;
G__32827 = G__33502;
G__32828 = G__33503;
G__32829 = G__33504;
G__32830 = G__33505;
G__32831 = G__33506;
G__32832 = G__33507;
G__32833 = G__33508;
G__32834 = G__33509;
G__32835 = G__33510;
G__32836 = G__33511;
G__32837 = G__33512;
G__32838 = G__33513;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
} else {
var G__32893 = cljs.core._nth(params,(0));
var G__32894 = cljs.core._nth(params,(1));
var G__32895 = cljs.core._nth(params,(2));
var G__32896 = cljs.core._nth(params,(3));
var G__32897 = cljs.core._nth(params,(4));
var G__32898 = cljs.core._nth(params,(5));
var G__32899 = cljs.core._nth(params,(6));
var G__32900 = cljs.core._nth(params,(7));
var G__32901 = cljs.core._nth(params,(8));
var G__32902 = cljs.core._nth(params,(9));
var G__32903 = cljs.core._nth(params,(10));
var G__32904 = cljs.core._nth(params,(11));
var G__32905 = cljs.core._nth(params,(12));
var G__32906 = cljs.core._nth(params,(13));
var G__32907 = cljs.core._nth(params,(14));
var G__32908 = cljs.core._nth(params,(15));
var G__32909 = cljs.core._nth(params,(16));
var G__32910 = cljs.core._nth(params,(17));
var G__32911 = cljs.core._nth(params,(18));
var G__32912 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__32873,G__32874,G__32875,G__32876,G__32877,G__32878,G__32879,G__32880,G__32881,G__32882,G__32883,G__32884,G__32885,G__32886,G__32887,G__32888,G__32889,G__32890,G__32891,G__32892){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__32893,G__32873);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32894,G__32874);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32895,G__32875);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32896,G__32876);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32897,G__32877);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32898,G__32878);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32899,G__32879);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32900,G__32880);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32901,G__32881);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32902,G__32882);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32903,G__32883);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32904,G__32884);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32905,G__32885);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32906,G__32886);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32907,G__32887);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__32908,G__32888);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__32909,G__32889);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__32910,G__32890);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__32911,G__32891);
var bindings__$21 = cljs.core._assoc(bindings__$20,G__32912,G__32892);
var ret__30800__auto__ = sci.impl.evaluator.eval(ctx,bindings__$21,body);
var recur_QMARK___30801__auto__ = (ret__30800__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30801__auto__){
var recur_val = sci.impl.types.getVal(ret__30800__auto__);
var G__33522 = cljs.core._nth(recur_val,(0));
var G__33523 = cljs.core._nth(recur_val,(1));
var G__33524 = cljs.core._nth(recur_val,(2));
var G__33525 = cljs.core._nth(recur_val,(3));
var G__33526 = cljs.core._nth(recur_val,(4));
var G__33527 = cljs.core._nth(recur_val,(5));
var G__33528 = cljs.core._nth(recur_val,(6));
var G__33529 = cljs.core._nth(recur_val,(7));
var G__33530 = cljs.core._nth(recur_val,(8));
var G__33531 = cljs.core._nth(recur_val,(9));
var G__33532 = cljs.core._nth(recur_val,(10));
var G__33533 = cljs.core._nth(recur_val,(11));
var G__33534 = cljs.core._nth(recur_val,(12));
var G__33535 = cljs.core._nth(recur_val,(13));
var G__33536 = cljs.core._nth(recur_val,(14));
var G__33537 = cljs.core._nth(recur_val,(15));
var G__33538 = cljs.core._nth(recur_val,(16));
var G__33539 = cljs.core._nth(recur_val,(17));
var G__33540 = cljs.core._nth(recur_val,(18));
var G__33541 = cljs.core._nth(recur_val,(19));
G__32873 = G__33522;
G__32874 = G__33523;
G__32875 = G__33524;
G__32876 = G__33525;
G__32877 = G__33526;
G__32878 = G__33527;
G__32879 = G__33528;
G__32880 = G__33529;
G__32881 = G__33530;
G__32882 = G__33531;
G__32883 = G__33532;
G__32884 = G__33533;
G__32885 = G__33534;
G__32886 = G__33535;
G__32887 = G__33536;
G__32888 = G__33537;
G__32889 = G__33538;
G__32890 = G__33539;
G__32891 = G__33540;
G__32892 = G__33541;
continue;
} else {
return ret__30800__auto__;
}
break;
}
});
}

break;
default:
return (function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings__$2 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings__$1;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
}

var G__33553 = cljs.core.next(args_STAR_);
var G__33554 = cljs.core.next(params__$1);
var G__33555 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__33553;
params__$1 = G__33554;
ret = G__33555;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ret = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_(min_var_args_arity)){
var vec__32917 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32917,(0),null);
var vec__32920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32917,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32920,(0),null);
var G__33557 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__33557;
continue;
} else {
var G__33558 = recur_val;
args = G__33558;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33559__i = 0, G__33559__a = new Array(arguments.length -  0);
while (G__33559__i < G__33559__a.length) {G__33559__a[G__33559__i] = arguments[G__33559__i + 0]; ++G__33559__i;}
  args = new cljs.core.IndexedSeq(G__33559__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__33560){
var args = cljs.core.seq(arglist__33560);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
;

}
})():(function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings__$2 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings__$1;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
}

var G__33561 = cljs.core.next(args_STAR_);
var G__33562 = cljs.core.next(params__$1);
var G__33563 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__33561;
params__$1 = G__33562;
ret = G__33563;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ret = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_(min_var_args_arity)){
var vec__32925 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32925,(0),null);
var vec__32928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32925,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32928,(0),null);
var G__33565 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__33565;
continue;
} else {
var G__33566 = recur_val;
args = G__33566;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33567__i = 0, G__33567__a = new Array(arguments.length -  0);
while (G__33567__i < G__33567__a.length) {G__33567__a[G__33567__i] = arguments[G__33567__i + 0]; ++G__33567__i;}
  args = new cljs.core.IndexedSeq(G__33567__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__33568){
var args = cljs.core.seq(arglist__33568);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
);
return f;
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,bindings,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun(ctx,bindings,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref){
var self_ref__$1 = (cljs.core.truth_(self_ref)?cljs.core.volatile_BANG_(null):null);
var bindings__$1 = (cljs.core.truth_(self_ref__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings,fn_name,self_ref__$1):bindings);
var f = (cljs.core.truth_(single_arity)?sci.impl.fns.fun(ctx,bindings__$1,single_arity,fn_name,macro_QMARK_):(function (){var arities = sci.impl.fns.fn_arity_map(ctx,bindings__$1,fn_name,macro_QMARK_,fn_bodies);
return (function() { 
var G__33570__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5802__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__33570 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33571__i = 0, G__33571__a = new Array(arguments.length -  0);
while (G__33571__i < G__33571__a.length) {G__33571__a[G__33571__i] = arguments[G__33571__i + 0]; ++G__33571__i;}
  args = new cljs.core.IndexedSeq(G__33571__a,0,null);
} 
return G__33570__delegate.call(this,args);};
G__33570.cljs$lang$maxFixedArity = 0;
G__33570.cljs$lang$applyTo = (function (arglist__33572){
var args = cljs.core.seq(arglist__33572);
return G__33570__delegate(args);
});
G__33570.cljs$core$IFn$_invoke$arity$variadic = G__33570__delegate;
return G__33570;
})()
;
})());
var f__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f,(function (p1__32936_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32936_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_);
})):f);
if(cljs.core.truth_(self_ref__$1)){
cljs.core.vreset_BANG_(self_ref__$1,f__$1);
} else {
}

return f__$1;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
