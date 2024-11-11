goog.provide('sci.impl.core_protocols');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._deref !== 'undefined')){
} else {
sci.impl.core_protocols._deref = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__21707 = cljs.core.get_global_hierarchy;
return (fexpr__21707.cljs$core$IFn$_invoke$arity$0 ? fexpr__21707.cljs$core$IFn$_invoke$arity$0() : fexpr__21707.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__21714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-deref","-deref",-283116853,null));
return (fexpr__21714.cljs$core$IFn$_invoke$arity$1 ? fexpr__21714.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__21714.call(null, ref));
}));
sci.impl.core_protocols.ideref_default = sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref){
return cljs.core.deref(ref);
}));
sci.impl.core_protocols.deref_STAR_ = (function sci$impl$core_protocols$deref_STAR_(x){
return sci.impl.core_protocols._deref.cljs$core$IFn$_invoke$arity$1(x);
});
sci.impl.core_protocols.cljs_core_ns = sci.impl.vars.__GT_SciNamespace(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null);
sci.impl.core_protocols.deref_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IDeref","cljs.core.IDeref",-783543206,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IDeref,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._deref]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._swap_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._swap_BANG_ = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__21730 = cljs.core.get_global_hierarchy;
return (fexpr__21730.cljs$core$IFn$_invoke$arity$0 ? fexpr__21730.cljs$core$IFn$_invoke$arity$0() : fexpr__21730.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-swap!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._reset_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._reset_BANG_ = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__21739 = cljs.core.get_global_hierarchy;
return (fexpr__21739.cljs$core$IFn$_invoke$arity$0 ? fexpr__21739.cljs$core$IFn$_invoke$arity$0() : fexpr__21739.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function() {
var G__21796 = null;
var G__21796__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__21744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__21744.cljs$core$IFn$_invoke$arity$2 ? fexpr__21744.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__21744.call(null, ref,f));
});
var G__21796__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__21746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__21746.cljs$core$IFn$_invoke$arity$3 ? fexpr__21746.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__21746.call(null, ref,f,a1));
});
var G__21796__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__21748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__21748.cljs$core$IFn$_invoke$arity$4 ? fexpr__21748.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__21748.call(null, ref,f,a1,a2));
});
var G__21796__5 = (function() { 
var G__21798__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__21798 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__21801__i = 0, G__21801__a = new Array(arguments.length -  4);
while (G__21801__i < G__21801__a.length) {G__21801__a[G__21801__i] = arguments[G__21801__i + 4]; ++G__21801__i;}
  args = new cljs.core.IndexedSeq(G__21801__a,0,null);
} 
return G__21798__delegate.call(this,ref,f,a1,a2,args);};
G__21798.cljs$lang$maxFixedArity = 4;
G__21798.cljs$lang$applyTo = (function (arglist__21802){
var ref = cljs.core.first(arglist__21802);
arglist__21802 = cljs.core.next(arglist__21802);
var f = cljs.core.first(arglist__21802);
arglist__21802 = cljs.core.next(arglist__21802);
var a1 = cljs.core.first(arglist__21802);
arglist__21802 = cljs.core.next(arglist__21802);
var a2 = cljs.core.first(arglist__21802);
var args = cljs.core.rest(arglist__21802);
return G__21798__delegate(ref,f,a1,a2,args);
});
G__21798.cljs$core$IFn$_invoke$arity$variadic = G__21798__delegate;
return G__21798;
})()
;
G__21796 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__21796__2.call(this,ref,f);
case 3:
return G__21796__3.call(this,ref,f,a1);
case 4:
return G__21796__4.call(this,ref,f,a1,a2);
default:
var G__21803 = null;
if (arguments.length > 4) {
var G__21804__i = 0, G__21804__a = new Array(arguments.length -  4);
while (G__21804__i < G__21804__a.length) {G__21804__a[G__21804__i] = arguments[G__21804__i + 4]; ++G__21804__i;}
G__21803 = new cljs.core.IndexedSeq(G__21804__a,0,null);
}
return G__21796__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__21803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21796.cljs$lang$maxFixedArity = 4;
G__21796.cljs$lang$applyTo = G__21796__5.cljs$lang$applyTo;
G__21796.cljs$core$IFn$_invoke$arity$2 = G__21796__2;
G__21796.cljs$core$IFn$_invoke$arity$3 = G__21796__3;
G__21796.cljs$core$IFn$_invoke$arity$4 = G__21796__4;
G__21796.cljs$core$IFn$_invoke$arity$variadic = G__21796__5.cljs$core$IFn$_invoke$arity$variadic;
return G__21796;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__21757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-reset!","-reset!",1965723739,null));
return (fexpr__21757.cljs$core$IFn$_invoke$arity$2 ? fexpr__21757.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__21757.call(null, ref,v));
}));
sci.impl.core_protocols.iatom_defaults = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__21808__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__21808 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__21810__i = 0, G__21810__a = new Array(arguments.length -  2);
while (G__21810__i < G__21810__a.length) {G__21810__a[G__21810__i] = arguments[G__21810__i + 2]; ++G__21810__i;}
  args = new cljs.core.IndexedSeq(G__21810__a,0,null);
} 
return G__21808__delegate.call(this,ref,f,args);};
G__21808.cljs$lang$maxFixedArity = 2;
G__21808.cljs$lang$applyTo = (function (arglist__21811){
var ref = cljs.core.first(arglist__21811);
arglist__21811 = cljs.core.next(arglist__21811);
var f = cljs.core.first(arglist__21811);
var args = cljs.core.rest(arglist__21811);
return G__21808__delegate(ref,f,args);
});
G__21808.cljs$core$IFn$_invoke$arity$variadic = G__21808__delegate;
return G__21808;
})()
),sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}))], null);
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21819 = arguments.length;
var i__5727__auto___21820 = (0);
while(true){
if((i__5727__auto___21820 < len__5726__auto___21819)){
args__5732__auto__.push((arguments[i__5727__auto___21820]));

var G__21822 = (i__5727__auto___21820 + (1));
i__5727__auto___21820 = G__21822;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
if(cljs.core.truth_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.core_protocols._swap_BANG_,ref,f,args);
} else {
return sci.impl.core_protocols._swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,f);
}
}));

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq21770){
var G__21771 = cljs.core.first(seq21770);
var seq21770__$1 = cljs.core.next(seq21770);
var G__21772 = cljs.core.first(seq21770__$1);
var seq21770__$2 = cljs.core.next(seq21770__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21771,G__21772,seq21770__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
return sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2(ref,v);
});
sci.impl.core_protocols.swap_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.ISwap","cljs.core.ISwap",2045511362,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.ISwap,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IReset","cljs.core.IReset",348905844,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IReset,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.defaults = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sci.impl.core_protocols.iatom_defaults,sci.impl.core_protocols.ideref_default));

//# sourceMappingURL=sci.impl.core_protocols.js.map
