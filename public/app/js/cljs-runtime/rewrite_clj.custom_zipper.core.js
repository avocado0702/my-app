goog.provide('rewrite_clj.custom_zipper.core');
rewrite_clj.custom_zipper.core.custom_zipper = (function rewrite_clj$custom_zipper$core$custom_zipper(root){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("rewrite-clj.custom-zipper.core","custom?","rewrite-clj.custom-zipper.core/custom?",-1122119625),true,new cljs.core.Keyword(null,"node","node",581201198),root,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.List.EMPTY], null);
});
rewrite_clj.custom_zipper.core.zipper = (function rewrite_clj$custom_zipper$core$zipper(root){
return clojure.zip.zipper(rewrite_clj.node.protocols.inner_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,rewrite_clj.node.protocols.children),rewrite_clj.node.protocols.replace_children,root);
});
rewrite_clj.custom_zipper.core.custom_zipper_QMARK_ = (function rewrite_clj$custom_zipper$core$custom_zipper_QMARK_(value){
return new cljs.core.Keyword("rewrite-clj.custom-zipper.core","custom?","rewrite-clj.custom-zipper.core/custom?",-1122119625).cljs$core$IFn$_invoke$arity$1(value);
});
/**
 * Returns the current node in `zloc`.
 */
rewrite_clj.custom_zipper.core.node = (function rewrite_clj$custom_zipper$core$node(G__16583){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__16583))){
var zloc = G__16583;
return new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(zloc);
} else {
return clojure.zip.node(G__16583);
}
});
/**
 * Returns true if the current node in `zloc` is a branch.
 */
rewrite_clj.custom_zipper.core.branch_QMARK_ = (function rewrite_clj$custom_zipper$core$branch_QMARK_(G__16588){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__16588))){
var zloc = G__16588;
return rewrite_clj.node.protocols.inner_QMARK_(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(zloc));
} else {
return clojure.zip.branch_QMARK_(G__16588);
}
});
/**
 * Returns a seq of the children of current node in `zloc`, which must be a branch.
 */
rewrite_clj.custom_zipper.core.children = (function rewrite_clj$custom_zipper$core$children(G__16593){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__16593))){
var map__16594 = G__16593;
var map__16594__$1 = cljs.core.__destructure_map(map__16594);
var zloc = map__16594__$1;
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16594__$1,new cljs.core.Keyword(null,"node","node",581201198));
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.branch_QMARK_(zloc))){
return cljs.core.seq(rewrite_clj.node.protocols.children(node));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("called children on a leaf node",cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return clojure.zip.children(G__16593);
}
});
/**
 * Returns a new branch node, given an existing `node` and new
 *   `children`. 
 */
rewrite_clj.custom_zipper.core.make_node = (function rewrite_clj$custom_zipper$core$make_node(G__16599,G__16600,G__16601){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__16599))){
var _zloc = G__16599;
var node = G__16600;
var children = G__16601;
return rewrite_clj.node.protocols.replace_children(node,children);
} else {
return clojure.zip.make_node(G__16599,G__16600,G__16601);
}
});
/**
 * Returns the ones-based `[row col]` of the start of the current node in `zloc`.
 * 
 *   Throws if `zloc` was not created with [position tracking](/doc/01-user-guide.adoc#position-tracking).
 */
rewrite_clj.custom_zipper.core.position = (function rewrite_clj$custom_zipper$core$position(zloc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_(zloc))){
return new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(zloc);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["to use position functions, please construct your zipper with ","':track-position?'  set to true."].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Returns the ones-based `[[start-row start-col] [end-row end-col]]` of the current node in `zloc`.
 *   `end-col` is exclusive.
 * 
 *   Throws if `zloc` was not created with [position tracking](/doc/01-user-guide.adoc#position-tracking).
 */
rewrite_clj.custom_zipper.core.position_span = (function rewrite_clj$custom_zipper$core$position_span(zloc){
var start_pos = rewrite_clj.custom_zipper.core.position(zloc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_pos,rewrite_clj.node.protocols._PLUS_extent(start_pos,rewrite_clj.node.protocols.extent(rewrite_clj.custom_zipper.core.node(zloc)))], null);
});
/**
 * Returns a seq of the left siblings of current node in `zloc`.
 */
rewrite_clj.custom_zipper.core.lefts = (function rewrite_clj$custom_zipper$core$lefts(G__16620){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__16620))){
var zloc = G__16620;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(zloc));
} else {
return clojure.zip.lefts(G__16620);
}
});
/**
 * Returns zipper with the location at the leftmost child of current node in `zloc`, or
 *   nil if no children.
 */
rewrite_clj.custom_zipper.core.down = (function rewrite_clj$custom_zipper$core$down(G__16624){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__16624))){
var zloc = G__16624;
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.branch_QMARK_(zloc))){
var map__16633 = zloc;
var map__16633__$1 = cljs.core.__destructure_map(map__16633);
var vec__16634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16633__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16634,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16634,(1),null);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16633__$1,new cljs.core.Keyword(null,"node","node",581201198));
var vec__16637 = rewrite_clj.custom_zipper.core.children(zloc);
var seq__16638 = cljs.core.seq(vec__16637);
var first__16639 = cljs.core.first(seq__16638);
var seq__16638__$1 = cljs.core.next(seq__16638);
var c = first__16639;
var cnext = seq__16638__$1;
var cs = vec__16637;
if(cljs.core.truth_(cs)){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("rewrite-clj.custom-zipper.core","custom?","rewrite-clj.custom-zipper.core/custom?",-1122119625),true,new cljs.core.Keyword(null,"node","node",581201198),c,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(col + rewrite_clj.node.protocols.leader_length(node))], null),new cljs.core.Keyword(null,"parent","parent",-878878779),zloc,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"right","right",-452581833),cnext], null),cljs.core.meta(zloc));
} else {
return null;
}
} else {
return null;
}
} else {
return clojure.zip.down(G__16624);
}
});
/**
 * Returns zipper with the location at the parent of current node in `zloc`, or nil if at
 *   the top.
 */
rewrite_clj.custom_zipper.core.up = (function rewrite_clj$custom_zipper$core$up(G__16641){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__16641))){
var zloc = G__16641;
var map__16647 = zloc;
var map__16647__$1 = cljs.core.__destructure_map(map__16647);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16647__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16647__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16647__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16647__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16647__$1,new cljs.core.Keyword(null,"changed?","changed?",-437828330));
if(cljs.core.truth_(parent)){
if(cljs.core.truth_(changed_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198),rewrite_clj.custom_zipper.core.make_node(zloc,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(parent),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,left),cljs.core.cons(node,right)))], 0));
} else {
return parent;
}
} else {
return null;
}
} else {
return clojure.zip.up(G__16641);
}
});
/**
 * Zips all the way up `zloc` and returns the root node, reflecting any changes.
 */
rewrite_clj.custom_zipper.core.root = (function rewrite_clj$custom_zipper$core$root(G__16651){
while(true){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__16651))){
var zloc = G__16651;
if(cljs.core.truth_(new cljs.core.Keyword(null,"end?","end?",-1423391609).cljs$core$IFn$_invoke$arity$1(zloc))){
return rewrite_clj.custom_zipper.core.node(zloc);
} else {
var p = rewrite_clj.custom_zipper.core.up(zloc);
if(cljs.core.truth_(p)){
var G__16757 = p;
G__16651 = G__16757;
continue;
} else {
return rewrite_clj.custom_zipper.core.node(zloc);
}
}
} else {
return clojure.zip.root(G__16651);
}
break;
}
});
/**
 * Returns zipper with location at the right sibling of the current node in `zloc`, or nil.
 */
rewrite_clj.custom_zipper.core.right = (function rewrite_clj$custom_zipper$core$right(G__16653){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__16653))){
var zloc = G__16653;
var map__16655 = zloc;
var map__16655__$1 = cljs.core.__destructure_map(map__16655);
var vec__16656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16655__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var seq__16657 = cljs.core.seq(vec__16656);
var first__16658 = cljs.core.first(seq__16657);
var seq__16657__$1 = cljs.core.next(seq__16657);
var r = first__16658;
var rnext = seq__16657__$1;
var right = vec__16656;
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16655__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16655__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16655__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16655__$1,new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.truth_((function (){var and__5000__auto__ = parent;
if(cljs.core.truth_(and__5000__auto__)){
return right;
} else {
return and__5000__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"node","node",581201198),r,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(left,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,position], null)),new cljs.core.Keyword(null,"right","right",-452581833),rnext,new cljs.core.Keyword(null,"position","position",-2011731912),rewrite_clj.node.protocols._PLUS_extent(position,rewrite_clj.node.protocols.extent(node))], 0));
} else {
return null;
}
} else {
return clojure.zip.right(G__16653);
}
});
/**
 * Returns zipper with location at the rightmost sibling of the current node in `zloc`, or self.
 */
rewrite_clj.custom_zipper.core.rightmost = (function rewrite_clj$custom_zipper$core$rightmost(G__16665){
while(true){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__16665))){
var zloc = G__16665;
var temp__5802__auto__ = rewrite_clj.custom_zipper.core.right(zloc);
if(cljs.core.truth_(temp__5802__auto__)){
var next = temp__5802__auto__;
var G__16758 = next;
G__16665 = G__16758;
continue;
} else {
return zloc;
}
} else {
return clojure.zip.rightmost(G__16665);
}
break;
}
});
/**
 * Returns zipper with location at the left sibling of the current node in `zloc`, or nil.
 */
rewrite_clj.custom_zipper.core.left = (function rewrite_clj$custom_zipper$core$left(G__16669){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__16669))){
var zloc = G__16669;
var map__16671 = zloc;
var map__16671__$1 = cljs.core.__destructure_map(map__16671);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16671__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16671__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16671__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16671__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.truth_((function (){var and__5000__auto__ = parent;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.seq(left);
} else {
return and__5000__auto__;
}
})())){
var vec__16672 = cljs.core.peek(left);
var lnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16672,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16672,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"node","node",581201198),lnode,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.pop(left),new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.cons(node,right)], 0));
} else {
return null;
}
} else {
return clojure.zip.left(G__16669);
}
});
/**
 * Returns zipper with location at the leftmost sibling of the current node in `zloc`, or self.
 */
rewrite_clj.custom_zipper.core.leftmost = (function rewrite_clj$custom_zipper$core$leftmost(G__16676){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__16676))){
var zloc = G__16676;
var map__16677 = zloc;
var map__16677__$1 = cljs.core.__destructure_map(map__16677);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16677__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16677__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16677__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16677__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.truth_((function (){var and__5000__auto__ = parent;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.seq(left);
} else {
return and__5000__auto__;
}
})())){
var vec__16681 = cljs.core.first(left);
var lnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16681,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16681,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"node","node",581201198),lnode,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest(left)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([right], 0))], 0));
} else {
return zloc;
}
} else {
return clojure.zip.leftmost(G__16676);
}
});
/**
 * Returns zipper with `item` inserted as the left sibling of current node in `zloc`,
 *  without moving location.
 */
rewrite_clj.custom_zipper.core.insert_left = (function rewrite_clj$custom_zipper$core$insert_left(G__16689,G__16690){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__16689))){
var zloc = G__16689;
var item = G__16690;
var map__16692 = zloc;
var map__16692__$1 = cljs.core.__destructure_map(map__16692);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16692__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16692__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16692__$1,new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.not(parent)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot insert left at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(left,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,position], null)),new cljs.core.Keyword(null,"position","position",-2011731912),rewrite_clj.node.protocols._PLUS_extent(position,rewrite_clj.node.protocols.extent(item))], 0));
}
} else {
return clojure.zip.insert_left(G__16689,G__16690);
}
});
/**
 * Returns zipper with `item` inserted as the right sibling of the current node in `zloc`,
 *   without moving location.
 */
rewrite_clj.custom_zipper.core.insert_right = (function rewrite_clj$custom_zipper$core$insert_right(G__16693,G__16694){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__16693))){
var zloc = G__16693;
var item = G__16694;
var map__16697 = zloc;
var map__16697__$1 = cljs.core.__destructure_map(map__16697);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16697__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16697__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.not(parent)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot insert right at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.cons(item,right)], 0));
}
} else {
return clojure.zip.insert_right(G__16693,G__16694);
}
});
/**
 * Returns zipper with `node` replacing current node in `zloc`, without moving location.
 */
rewrite_clj.custom_zipper.core.replace = (function rewrite_clj$custom_zipper$core$replace(G__16703,G__16704){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__16703))){
var zloc = G__16703;
var node = G__16704;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198),node], 0));
} else {
return clojure.zip.replace(G__16703,G__16704);
}
});
/**
 * Returns zipper with value of `(apply f current-node args)` replacing current node in `zloc`.
 * 
 * The result of `f` should be a rewrite-clj node.
 */
rewrite_clj.custom_zipper.core.edit = (function rewrite_clj$custom_zipper$core$edit(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16764 = arguments.length;
var i__5727__auto___16765 = (0);
while(true){
if((i__5727__auto___16765 < len__5726__auto___16764)){
args__5732__auto__.push((arguments[i__5727__auto___16765]));

var G__16766 = (i__5727__auto___16765 + (1));
i__5727__auto___16765 = G__16766;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return rewrite_clj.custom_zipper.core.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(rewrite_clj.custom_zipper.core.edit.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,f,args){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_(zloc))){
return rewrite_clj.custom_zipper.core.replace(zloc,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,rewrite_clj.custom_zipper.core.node(zloc),args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clojure.zip.edit,zloc,f,args);
}
}));

(rewrite_clj.custom_zipper.core.edit.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rewrite_clj.custom_zipper.core.edit.cljs$lang$applyTo = (function (seq16706){
var G__16707 = cljs.core.first(seq16706);
var seq16706__$1 = cljs.core.next(seq16706);
var G__16708 = cljs.core.first(seq16706__$1);
var seq16706__$2 = cljs.core.next(seq16706__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16707,G__16708,seq16706__$2);
}));

/**
 * Returns zipper with `item` inserted as the leftmost child of the current node in `zloc`,
 *   without moving location.
 */
rewrite_clj.custom_zipper.core.insert_child = (function rewrite_clj$custom_zipper$core$insert_child(G__16720,G__16721){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__16720))){
var zloc = G__16720;
var item = G__16721;
return rewrite_clj.custom_zipper.core.replace(zloc,rewrite_clj.custom_zipper.core.make_node(zloc,rewrite_clj.custom_zipper.core.node(zloc),cljs.core.cons(item,rewrite_clj.custom_zipper.core.children(zloc))));
} else {
return clojure.zip.insert_child(G__16720,G__16721);
}
});
/**
 * Returns zipper with `item` inserted as the rightmost child of the current node in `zloc`,
 *   without moving.
 */
rewrite_clj.custom_zipper.core.append_child = (function rewrite_clj$custom_zipper$core$append_child(G__16725,G__16726){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__16725))){
var zloc = G__16725;
var item = G__16726;
return rewrite_clj.custom_zipper.core.replace(zloc,rewrite_clj.custom_zipper.core.make_node(zloc,rewrite_clj.custom_zipper.core.node(zloc),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rewrite_clj.custom_zipper.core.children(zloc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
} else {
return clojure.zip.append_child(G__16725,G__16726);
}
});
/**
 * Returns zipper with location at the next depth-first location in the hierarchy in `zloc`.
 *   When reaching the end, returns a distinguished zipper detectable via [[end?]]. If already
 *   at the end, stays there.
 */
rewrite_clj.custom_zipper.core.next = (function rewrite_clj$custom_zipper$core$next(G__16728){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__16728))){
var zloc = G__16728;
if(cljs.core.truth_(new cljs.core.Keyword(null,"end?","end?",-1423391609).cljs$core$IFn$_invoke$arity$1(zloc))){
return zloc;
} else {
var or__5002__auto__ = (function (){var and__5000__auto__ = rewrite_clj.custom_zipper.core.branch_QMARK_(zloc);
if(cljs.core.truth_(and__5000__auto__)){
return rewrite_clj.custom_zipper.core.down(zloc);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = rewrite_clj.custom_zipper.core.right(zloc);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var p = zloc;
while(true){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.up(p))){
var or__5002__auto____$2 = rewrite_clj.custom_zipper.core.right(rewrite_clj.custom_zipper.core.up(p));
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var G__16769 = rewrite_clj.custom_zipper.core.up(p);
p = G__16769;
continue;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,new cljs.core.Keyword(null,"end?","end?",-1423391609),true);
}
break;
}
}
}
}
} else {
return clojure.zip.next(G__16728);
}
});
/**
 * Returns zipper with location at the previous depth-first location in the hierarchy in `zloc`.
 *   If already at the root, returns nil.
 */
rewrite_clj.custom_zipper.core.prev = (function rewrite_clj$custom_zipper$core$prev(G__16732){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__16732))){
var zloc = G__16732;
var temp__5802__auto__ = rewrite_clj.custom_zipper.core.left(zloc);
if(cljs.core.truth_(temp__5802__auto__)){
var lloc = temp__5802__auto__;
var zloc__$1 = lloc;
while(true){
var temp__5802__auto____$1 = (function (){var and__5000__auto__ = rewrite_clj.custom_zipper.core.branch_QMARK_(zloc__$1);
if(cljs.core.truth_(and__5000__auto__)){
return rewrite_clj.custom_zipper.core.down(zloc__$1);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto____$1)){
var child = temp__5802__auto____$1;
var G__16772 = rewrite_clj.custom_zipper.core.rightmost(child);
zloc__$1 = G__16772;
continue;
} else {
return zloc__$1;
}
break;
}
} else {
return rewrite_clj.custom_zipper.core.up(zloc);
}
} else {
return clojure.zip.prev(G__16732);
}
});
/**
 * Returns true if at end of depth-first walk in `zloc`.
 */
rewrite_clj.custom_zipper.core.end_QMARK_ = (function rewrite_clj$custom_zipper$core$end_QMARK_(G__16735){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__16735))){
var zloc = G__16735;
return new cljs.core.Keyword(null,"end?","end?",-1423391609).cljs$core$IFn$_invoke$arity$1(zloc);
} else {
return clojure.zip.end_QMARK_(G__16735);
}
});
/**
 * Returns zipper with current node in `zloc` removed, with location at node that would have preceded
 *   it in a depth-first walk.
 */
rewrite_clj.custom_zipper.core.remove = (function rewrite_clj$custom_zipper$core$remove(G__16736){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__16736))){
var zloc = G__16736;
var map__16737 = zloc;
var map__16737__$1 = cljs.core.__destructure_map(map__16737);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16737__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16737__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16737__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.not(parent)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot remove at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core.seq(left)){
var zloc__$1 = (function (){var vec__16742 = cljs.core.peek(left);
var lnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16742,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16742,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"node","node",581201198),lnode,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.pop(left)], 0));
})();
while(true){
var temp__5802__auto__ = (function (){var and__5000__auto__ = rewrite_clj.custom_zipper.core.branch_QMARK_(zloc__$1);
if(cljs.core.truth_(and__5000__auto__)){
return rewrite_clj.custom_zipper.core.down(zloc__$1);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
var G__16774 = rewrite_clj.custom_zipper.core.rightmost(child);
zloc__$1 = G__16774;
continue;
} else {
return zloc__$1;
}
break;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198),rewrite_clj.custom_zipper.core.make_node(zloc,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(parent),right)], 0));
}
}
} else {
return clojure.zip.remove(G__16736);
}
});

//# sourceMappingURL=rewrite_clj.custom_zipper.core.js.map
