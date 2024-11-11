goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22676 = arguments.length;
var i__5727__auto___22677 = (0);
while(true){
if((i__5727__auto___22677 < len__5726__auto___22676)){
args__5732__auto__.push((arguments[i__5727__auto___22677]));

var G__22678 = (i__5727__auto___22677 + (1));
i__5727__auto___22677 = G__22678;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((4) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5733__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__21942 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21942,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21942,(1),null);
var vec__21945 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21945,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21945,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name));
var extend_meta = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts);
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,extend_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22009){
var vec__22010 = p__22009;
var seq__22011 = cljs.core.seq(vec__22010);
var first__22012 = cljs.core.first(seq__22011);
var seq__22011__$1 = cljs.core.next(seq__22011);
var method_name = first__22012;
var ___$2 = seq__22011__$1;
var fq_name__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__21881__auto__","x__21881__auto__",584724339,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__21882__auto__","args__21882__auto__",-741845262,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__21883__auto__","methods__21883__auto__",-1867133721,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__21881__auto__","x__21881__auto__",584724339,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__21883__auto__","methods__21883__auto__",-1867133721,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__21881__auto__","x__21881__auto__",584724339,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__21882__auto__","args__21882__auto__",-741845262,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(extend_meta)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__21888__auto__","x__21888__auto__",-392538528,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__21889__auto__","args__21889__auto__",-1274884576,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__21890__auto__","meta__21890__auto__",2564686,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__21888__auto__","x__21888__auto__",-392538528,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__21891__auto__","method__21891__auto__",-1806678625,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__21890__auto__","meta__21890__auto__",2564686,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name__$1,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__21891__auto__","method__21891__auto__",-1806678625,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__21891__auto__","method__21891__auto__",-1806678625,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__21888__auto__","x__21888__auto__",-392538528,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__21889__auto__","args__21889__auto__",-1274884576,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__21888__auto__","x__21888__auto__",-392538528,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq21906){
var G__21907 = cljs.core.first(seq21906);
var seq21906__$1 = cljs.core.next(seq21906);
var G__21908 = cljs.core.first(seq21906__$1);
var seq21906__$2 = cljs.core.next(seq21906__$1);
var G__21909 = cljs.core.first(seq21906__$2);
var seq21906__$3 = cljs.core.next(seq21906__$2);
var G__21910 = cljs.core.first(seq21906__$3);
var seq21906__$4 = cljs.core.next(seq21906__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21907,G__21908,G__21909,G__21910,seq21906__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22697 = arguments.length;
var i__5727__auto___22698 = (0);
while(true){
if((i__5727__auto___22698 < len__5726__auto___22697)){
args__5732__auto__.push((arguments[i__5727__auto___22698]));

var G__22699 = (i__5727__auto___22698 + (1));
i__5727__auto___22698 = G__22699;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__22123 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__22125 = null;
var count__22126 = (0);
var i__22127 = (0);
while(true){
if((i__22127 < count__22126)){
var vec__22342 = chunk__22125.cljs$core$IIndexed$_nth$arity$2(null, i__22127);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22342,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22342,(1),null);
var extend_via_metadata_22700 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_22701 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_22702 = sci.impl.vars.getName(proto_ns_22701);
var pns_str_22703 = (cljs.core.truth_(extend_via_metadata_22700)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_22702):null);
var seq__22348_22704 = cljs.core.seq(mmap);
var chunk__22349_22705 = null;
var count__22350_22706 = (0);
var i__22351_22707 = (0);
while(true){
if((i__22351_22707 < count__22350_22706)){
var vec__22378_22708 = chunk__22349_22705.cljs$core$IIndexed$_nth$arity$2(null, i__22351_22707);
var meth_name_22709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22378_22708,(0),null);
var f_22710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22378_22708,(1),null);
var meth_str_22711 = cljs.core.name(meth_name_22709);
var meth_sym_22712 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_22711);
var env_22713 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_22714 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_22713,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_22702,meth_sym_22712], null));
var multi_method_22715 = cljs.core.deref(multi_method_var_22714);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_22715,atype,(cljs.core.truth_(extend_via_metadata_22700)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_22703,meth_str_22711);
return ((function (seq__22348_22704,chunk__22349_22705,count__22350_22706,i__22351_22707,seq__22123,chunk__22125,count__22126,i__22127,fq,meth_str_22711,meth_sym_22712,env_22713,multi_method_var_22714,multi_method_22715,vec__22378_22708,meth_name_22709,f_22710,extend_via_metadata_22700,proto_ns_22701,pns_22702,pns_str_22703,vec__22342,proto,mmap){
return (function() { 
var G__22717__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_22710,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_22710,this$,args);
}
};
var G__22717 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__22719__i = 0, G__22719__a = new Array(arguments.length -  1);
while (G__22719__i < G__22719__a.length) {G__22719__a[G__22719__i] = arguments[G__22719__i + 1]; ++G__22719__i;}
  args = new cljs.core.IndexedSeq(G__22719__a,0,null);
} 
return G__22717__delegate.call(this,this$,args);};
G__22717.cljs$lang$maxFixedArity = 1;
G__22717.cljs$lang$applyTo = (function (arglist__22720){
var this$ = cljs.core.first(arglist__22720);
var args = cljs.core.rest(arglist__22720);
return G__22717__delegate(this$,args);
});
G__22717.cljs$core$IFn$_invoke$arity$variadic = G__22717__delegate;
return G__22717;
})()
;
;})(seq__22348_22704,chunk__22349_22705,count__22350_22706,i__22351_22707,seq__22123,chunk__22125,count__22126,i__22127,fq,meth_str_22711,meth_sym_22712,env_22713,multi_method_var_22714,multi_method_22715,vec__22378_22708,meth_name_22709,f_22710,extend_via_metadata_22700,proto_ns_22701,pns_22702,pns_str_22703,vec__22342,proto,mmap))
})():f_22710));


var G__22721 = seq__22348_22704;
var G__22722 = chunk__22349_22705;
var G__22723 = count__22350_22706;
var G__22724 = (i__22351_22707 + (1));
seq__22348_22704 = G__22721;
chunk__22349_22705 = G__22722;
count__22350_22706 = G__22723;
i__22351_22707 = G__22724;
continue;
} else {
var temp__5804__auto___22725 = cljs.core.seq(seq__22348_22704);
if(temp__5804__auto___22725){
var seq__22348_22726__$1 = temp__5804__auto___22725;
if(cljs.core.chunked_seq_QMARK_(seq__22348_22726__$1)){
var c__5525__auto___22727 = cljs.core.chunk_first(seq__22348_22726__$1);
var G__22728 = cljs.core.chunk_rest(seq__22348_22726__$1);
var G__22729 = c__5525__auto___22727;
var G__22730 = cljs.core.count(c__5525__auto___22727);
var G__22731 = (0);
seq__22348_22704 = G__22728;
chunk__22349_22705 = G__22729;
count__22350_22706 = G__22730;
i__22351_22707 = G__22731;
continue;
} else {
var vec__22392_22732 = cljs.core.first(seq__22348_22726__$1);
var meth_name_22733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22392_22732,(0),null);
var f_22734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22392_22732,(1),null);
var meth_str_22735 = cljs.core.name(meth_name_22733);
var meth_sym_22736 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_22735);
var env_22737 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_22738 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_22737,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_22702,meth_sym_22736], null));
var multi_method_22739 = cljs.core.deref(multi_method_var_22738);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_22739,atype,(cljs.core.truth_(extend_via_metadata_22700)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_22703,meth_str_22735);
return ((function (seq__22348_22704,chunk__22349_22705,count__22350_22706,i__22351_22707,seq__22123,chunk__22125,count__22126,i__22127,fq,meth_str_22735,meth_sym_22736,env_22737,multi_method_var_22738,multi_method_22739,vec__22392_22732,meth_name_22733,f_22734,seq__22348_22726__$1,temp__5804__auto___22725,extend_via_metadata_22700,proto_ns_22701,pns_22702,pns_str_22703,vec__22342,proto,mmap){
return (function() { 
var G__22742__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_22734,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_22734,this$,args);
}
};
var G__22742 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__22743__i = 0, G__22743__a = new Array(arguments.length -  1);
while (G__22743__i < G__22743__a.length) {G__22743__a[G__22743__i] = arguments[G__22743__i + 1]; ++G__22743__i;}
  args = new cljs.core.IndexedSeq(G__22743__a,0,null);
} 
return G__22742__delegate.call(this,this$,args);};
G__22742.cljs$lang$maxFixedArity = 1;
G__22742.cljs$lang$applyTo = (function (arglist__22744){
var this$ = cljs.core.first(arglist__22744);
var args = cljs.core.rest(arglist__22744);
return G__22742__delegate(this$,args);
});
G__22742.cljs$core$IFn$_invoke$arity$variadic = G__22742__delegate;
return G__22742;
})()
;
;})(seq__22348_22704,chunk__22349_22705,count__22350_22706,i__22351_22707,seq__22123,chunk__22125,count__22126,i__22127,fq,meth_str_22735,meth_sym_22736,env_22737,multi_method_var_22738,multi_method_22739,vec__22392_22732,meth_name_22733,f_22734,seq__22348_22726__$1,temp__5804__auto___22725,extend_via_metadata_22700,proto_ns_22701,pns_22702,pns_str_22703,vec__22342,proto,mmap))
})():f_22734));


var G__22745 = cljs.core.next(seq__22348_22726__$1);
var G__22746 = null;
var G__22747 = (0);
var G__22748 = (0);
seq__22348_22704 = G__22745;
chunk__22349_22705 = G__22746;
count__22350_22706 = G__22747;
i__22351_22707 = G__22748;
continue;
}
} else {
}
}
break;
}


var G__22749 = seq__22123;
var G__22750 = chunk__22125;
var G__22751 = count__22126;
var G__22752 = (i__22127 + (1));
seq__22123 = G__22749;
chunk__22125 = G__22750;
count__22126 = G__22751;
i__22127 = G__22752;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22123);
if(temp__5804__auto__){
var seq__22123__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22123__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22123__$1);
var G__22755 = cljs.core.chunk_rest(seq__22123__$1);
var G__22756 = c__5525__auto__;
var G__22757 = cljs.core.count(c__5525__auto__);
var G__22758 = (0);
seq__22123 = G__22755;
chunk__22125 = G__22756;
count__22126 = G__22757;
i__22127 = G__22758;
continue;
} else {
var vec__22402 = cljs.core.first(seq__22123__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22402,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22402,(1),null);
var extend_via_metadata_22759 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_22760 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_22761 = sci.impl.vars.getName(proto_ns_22760);
var pns_str_22762 = (cljs.core.truth_(extend_via_metadata_22759)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_22761):null);
var seq__22408_22763 = cljs.core.seq(mmap);
var chunk__22409_22764 = null;
var count__22410_22765 = (0);
var i__22411_22766 = (0);
while(true){
if((i__22411_22766 < count__22410_22765)){
var vec__22445_22767 = chunk__22409_22764.cljs$core$IIndexed$_nth$arity$2(null, i__22411_22766);
var meth_name_22768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22445_22767,(0),null);
var f_22769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22445_22767,(1),null);
var meth_str_22770 = cljs.core.name(meth_name_22768);
var meth_sym_22771 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_22770);
var env_22772 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_22773 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_22772,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_22761,meth_sym_22771], null));
var multi_method_22774 = cljs.core.deref(multi_method_var_22773);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_22774,atype,(cljs.core.truth_(extend_via_metadata_22759)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_22762,meth_str_22770);
return ((function (seq__22408_22763,chunk__22409_22764,count__22410_22765,i__22411_22766,seq__22123,chunk__22125,count__22126,i__22127,fq,meth_str_22770,meth_sym_22771,env_22772,multi_method_var_22773,multi_method_22774,vec__22445_22767,meth_name_22768,f_22769,extend_via_metadata_22759,proto_ns_22760,pns_22761,pns_str_22762,vec__22402,proto,mmap,seq__22123__$1,temp__5804__auto__){
return (function() { 
var G__22778__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_22769,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_22769,this$,args);
}
};
var G__22778 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__22779__i = 0, G__22779__a = new Array(arguments.length -  1);
while (G__22779__i < G__22779__a.length) {G__22779__a[G__22779__i] = arguments[G__22779__i + 1]; ++G__22779__i;}
  args = new cljs.core.IndexedSeq(G__22779__a,0,null);
} 
return G__22778__delegate.call(this,this$,args);};
G__22778.cljs$lang$maxFixedArity = 1;
G__22778.cljs$lang$applyTo = (function (arglist__22780){
var this$ = cljs.core.first(arglist__22780);
var args = cljs.core.rest(arglist__22780);
return G__22778__delegate(this$,args);
});
G__22778.cljs$core$IFn$_invoke$arity$variadic = G__22778__delegate;
return G__22778;
})()
;
;})(seq__22408_22763,chunk__22409_22764,count__22410_22765,i__22411_22766,seq__22123,chunk__22125,count__22126,i__22127,fq,meth_str_22770,meth_sym_22771,env_22772,multi_method_var_22773,multi_method_22774,vec__22445_22767,meth_name_22768,f_22769,extend_via_metadata_22759,proto_ns_22760,pns_22761,pns_str_22762,vec__22402,proto,mmap,seq__22123__$1,temp__5804__auto__))
})():f_22769));


var G__22781 = seq__22408_22763;
var G__22782 = chunk__22409_22764;
var G__22783 = count__22410_22765;
var G__22784 = (i__22411_22766 + (1));
seq__22408_22763 = G__22781;
chunk__22409_22764 = G__22782;
count__22410_22765 = G__22783;
i__22411_22766 = G__22784;
continue;
} else {
var temp__5804__auto___22786__$1 = cljs.core.seq(seq__22408_22763);
if(temp__5804__auto___22786__$1){
var seq__22408_22790__$1 = temp__5804__auto___22786__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22408_22790__$1)){
var c__5525__auto___22791 = cljs.core.chunk_first(seq__22408_22790__$1);
var G__22792 = cljs.core.chunk_rest(seq__22408_22790__$1);
var G__22793 = c__5525__auto___22791;
var G__22794 = cljs.core.count(c__5525__auto___22791);
var G__22795 = (0);
seq__22408_22763 = G__22792;
chunk__22409_22764 = G__22793;
count__22410_22765 = G__22794;
i__22411_22766 = G__22795;
continue;
} else {
var vec__22463_22796 = cljs.core.first(seq__22408_22790__$1);
var meth_name_22797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22463_22796,(0),null);
var f_22798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22463_22796,(1),null);
var meth_str_22799 = cljs.core.name(meth_name_22797);
var meth_sym_22800 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_22799);
var env_22801 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_22802 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_22801,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_22761,meth_sym_22800], null));
var multi_method_22803 = cljs.core.deref(multi_method_var_22802);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_22803,atype,(cljs.core.truth_(extend_via_metadata_22759)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_22762,meth_str_22799);
return ((function (seq__22408_22763,chunk__22409_22764,count__22410_22765,i__22411_22766,seq__22123,chunk__22125,count__22126,i__22127,fq,meth_str_22799,meth_sym_22800,env_22801,multi_method_var_22802,multi_method_22803,vec__22463_22796,meth_name_22797,f_22798,seq__22408_22790__$1,temp__5804__auto___22786__$1,extend_via_metadata_22759,proto_ns_22760,pns_22761,pns_str_22762,vec__22402,proto,mmap,seq__22123__$1,temp__5804__auto__){
return (function() { 
var G__22804__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_22798,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_22798,this$,args);
}
};
var G__22804 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__22806__i = 0, G__22806__a = new Array(arguments.length -  1);
while (G__22806__i < G__22806__a.length) {G__22806__a[G__22806__i] = arguments[G__22806__i + 1]; ++G__22806__i;}
  args = new cljs.core.IndexedSeq(G__22806__a,0,null);
} 
return G__22804__delegate.call(this,this$,args);};
G__22804.cljs$lang$maxFixedArity = 1;
G__22804.cljs$lang$applyTo = (function (arglist__22807){
var this$ = cljs.core.first(arglist__22807);
var args = cljs.core.rest(arglist__22807);
return G__22804__delegate(this$,args);
});
G__22804.cljs$core$IFn$_invoke$arity$variadic = G__22804__delegate;
return G__22804;
})()
;
;})(seq__22408_22763,chunk__22409_22764,count__22410_22765,i__22411_22766,seq__22123,chunk__22125,count__22126,i__22127,fq,meth_str_22799,meth_sym_22800,env_22801,multi_method_var_22802,multi_method_22803,vec__22463_22796,meth_name_22797,f_22798,seq__22408_22790__$1,temp__5804__auto___22786__$1,extend_via_metadata_22759,proto_ns_22760,pns_22761,pns_str_22762,vec__22402,proto,mmap,seq__22123__$1,temp__5804__auto__))
})():f_22798));


var G__22808 = cljs.core.next(seq__22408_22790__$1);
var G__22809 = null;
var G__22810 = (0);
var G__22811 = (0);
seq__22408_22763 = G__22808;
chunk__22409_22764 = G__22809;
count__22410_22765 = G__22810;
i__22411_22766 = G__22811;
continue;
}
} else {
}
}
break;
}


var G__22812 = cljs.core.next(seq__22123__$1);
var G__22813 = null;
var G__22814 = (0);
var G__22815 = (0);
seq__22123 = G__22812;
chunk__22125 = G__22813;
count__22126 = G__22814;
i__22127 = G__22815;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq22116){
var G__22117 = cljs.core.first(seq22116);
var seq22116__$1 = cljs.core.next(seq22116);
var G__22118 = cljs.core.first(seq22116__$1);
var seq22116__$2 = cljs.core.next(seq22116__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22117,G__22118,seq22116__$2);
}));

/**
 * Processes single args+body pair for extending via metadata
 */
sci.impl.protocols.process_single_extend_meta = (function sci$impl$protocols$process_single_extend_meta(fq,p__22517){
var vec__22520 = p__22517;
var seq__22522 = cljs.core.seq(vec__22520);
var first__22523 = cljs.core.first(seq__22522);
var seq__22522__$1 = cljs.core.next(seq__22522);
var args = first__22523;
var body = seq__22522__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"farg__22496__auto__","farg__22496__auto__",1347215413,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(args),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__22501__auto__","m__22501__auto__",-994901052,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__22496__auto__","farg__22496__auto__",1347215413,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__22503__auto__","meth__22503__auto__",-262452585,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__22501__auto__","m__22501__auto__",-994901052,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__22503__auto__","meth__22503__auto__",-262452585,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
});
sci.impl.protocols.process_methods = (function sci$impl$protocols$process_methods(type,meths,protocol_ns,extend_via_metadata){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22574){
var vec__22575 = p__22574;
var seq__22576 = cljs.core.seq(vec__22575);
var first__22577 = cljs.core.first(seq__22576);
var seq__22576__$1 = cljs.core.next(seq__22576);
var meth_name = first__22577;
var fn_body = seq__22576__$1;
var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(protocol_ns,cljs.core.name(meth_name));
var fn_body__$1 = (cljs.core.truth_(extend_via_metadata)?((cljs.core.vector_QMARK_(cljs.core.first(fn_body)))?sci.impl.protocols.process_single_extend_meta(fq,fn_body):cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__22569_SHARP_){
return sci.impl.protocols.process_single_extend_meta(fq,p1__22569_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_body], 0))):fn_body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),fn_body__$1], 0))));
}),meths);
});
sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22823 = arguments.length;
var i__5727__auto___22824 = (0);
while(true){
if((i__5727__auto___22824 < len__5726__auto___22823)){
args__5732__auto__.push((arguments[i__5727__auto___22824]));

var G__22825 = (i__5727__auto___22824 + (1));
i__5727__auto___22824 = G__22825;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((4) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5733__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__22579_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__22579_SHARP_)));
}),impls);
var protocol_var = (function (){var G__22599 = ctx;
var G__22600 = new cljs.core.Keyword(null,"bindingx","bindingx",679516896).cljs$core$IFn$_invoke$arity$1(ctx);
var G__22601 = protocol_name;
var fexpr__22598 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__22598.cljs$core$IFn$_invoke$arity$3 ? fexpr__22598.cljs$core$IFn$_invoke$arity$3(G__22599,G__22600,G__22601) : fexpr__22598.call(null, G__22599,G__22600,G__22601));
})();
var protocol_data = cljs.core.deref(protocol_var);
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(protocol_data);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(protocol_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22603){
var vec__22604 = p__22603;
var seq__22605 = cljs.core.seq(vec__22604);
var first__22606 = cljs.core.first(seq__22605);
var seq__22605__$1 = cljs.core.next(seq__22605);
var type = first__22606;
var meths = seq__22605__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(type,meths,pns,extend_via_metadata))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq22583){
var G__22584 = cljs.core.first(seq22583);
var seq22583__$1 = cljs.core.next(seq22583);
var G__22585 = cljs.core.first(seq22583__$1);
var seq22583__$2 = cljs.core.next(seq22583__$1);
var G__22586 = cljs.core.first(seq22583__$2);
var seq22583__$3 = cljs.core.next(seq22583__$2);
var G__22587 = cljs.core.first(seq22583__$3);
var seq22583__$4 = cljs.core.next(seq22583__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22584,G__22585,G__22586,G__22587,seq22583__$4);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22831 = arguments.length;
var i__5727__auto___22835 = (0);
while(true){
if((i__5727__auto___22835 < len__5726__auto___22831)){
args__5732__auto__.push((arguments[i__5727__auto___22835]));

var G__22836 = (i__5727__auto___22835 + (1));
i__5727__auto___22835 = G__22836;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((4) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5733__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,atype,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__22612_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__22612_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22624){
var vec__22625 = p__22624;
var seq__22626 = cljs.core.seq(vec__22625);
var first__22627 = cljs.core.first(seq__22626);
var seq__22626__$1 = cljs.core.next(seq__22626);
var proto = first__22627;
var meths = seq__22626__$1;
var protocol_var = (function (){var G__22631 = ctx;
var G__22632 = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var G__22633 = proto;
var fexpr__22630 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__22630.cljs$core$IFn$_invoke$arity$3 ? fexpr__22630.cljs$core$IFn$_invoke$arity$3(G__22631,G__22632,G__22633) : fexpr__22630.call(null, G__22631,G__22632,G__22633));
})();
var proto_data = cljs.core.deref(protocol_var);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto_data);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(atype,meths,pns,extend_via_metadata))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq22613){
var G__22614 = cljs.core.first(seq22613);
var seq22613__$1 = cljs.core.next(seq22613);
var G__22615 = cljs.core.first(seq22613__$1);
var seq22613__$2 = cljs.core.next(seq22613__$1);
var G__22616 = cljs.core.first(seq22613__$2);
var seq22613__$3 = cljs.core.next(seq22613__$2);
var G__22617 = cljs.core.first(seq22613__$3);
var seq22613__$4 = cljs.core.next(seq22613__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22614,G__22615,G__22616,G__22617,seq22613__$4);
}));

sci.impl.protocols.find_matching_non_default_method = (function sci$impl$protocols$find_matching_non_default_method(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__22643_SHARP_){
var temp__5804__auto__ = cljs.core.get_method(p1__22643_SHARP_,sci.impl.types.type_impl(obj));
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
var ms = cljs.core.methods$(p1__22643_SHARP_);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.Keyword(null,"default","default",-1987822328));
return (!((m === default$)));
} else {
return null;
}
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
if((obj instanceof sci.impl.types.Reified)){
return cljs.core.contains_QMARK_(obj.sci$impl$types$IReified$getProtocols$arity$1(null, ),protocol);
} else {
var p = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(protocol);
var or__5002__auto__ = (function (){var and__5000__auto__ = p;
if(cljs.core.truth_(and__5000__auto__)){
var pred__22648 = cljs.core._EQ_;
var expr__22649 = p;
if(cljs.core.truth_((pred__22648.cljs$core$IFn$_invoke$arity$2 ? pred__22648.cljs$core$IFn$_invoke$arity$2(cljs.core.IDeref,expr__22649) : pred__22648.call(null, cljs.core.IDeref,expr__22649)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
}
} else {
if(cljs.core.truth_((pred__22648.cljs$core$IFn$_invoke$arity$2 ? pred__22648.cljs$core$IFn$_invoke$arity$2(cljs.core.ISwap,expr__22649) : pred__22648.call(null, cljs.core.ISwap,expr__22649)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (65536))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$ISwap$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
}
} else {
if(cljs.core.truth_((pred__22648.cljs$core$IFn$_invoke$arity$2 ? pred__22648.cljs$core$IFn$_invoke$arity$2(cljs.core.IReset,expr__22649) : pred__22648.call(null, cljs.core.IReset,expr__22649)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IReset$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__22649)].join('')));
}
}
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return sci.impl.protocols.find_matching_non_default_method(protocol,obj);
}
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if(cljs.core.truth_((function (){var and__5000__auto__ = (clazz instanceof cljs.core.Symbol);
if(and__5000__auto__){
var G__22665 = clazz;
var G__22665__$1 = (((G__22665 == null))?null:cljs.core.meta(G__22665));
if((G__22665__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(G__22665__$1);
}
} else {
return and__5000__auto__;
}
})())){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x)));
} else {
return (x instanceof clazz);

}
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__22670_SHARP_){
return cljs.core.get_method(p1__22670_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
