goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__18812 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__18813 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__18813);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )),container,(function (){
var _STAR_always_update_STAR__orig_val__18816 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__18817 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__18817);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null, ));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__18816);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__18812);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__18825 = arguments.length;
switch (G__18825) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__18835 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18835,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18835,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__18845_18919 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__18846_18920 = null;
var count__18847_18921 = (0);
var i__18848_18922 = (0);
while(true){
if((i__18848_18922 < count__18847_18921)){
var vec__18858_18923 = chunk__18846_18920.cljs$core$IIndexed$_nth$arity$2(null, i__18848_18922);
var container_18924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18858_18923,(0),null);
var comp_18925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18858_18923,(1),null);
reagent.dom.re_render_component(comp_18925,container_18924);


var G__18926 = seq__18845_18919;
var G__18927 = chunk__18846_18920;
var G__18928 = count__18847_18921;
var G__18929 = (i__18848_18922 + (1));
seq__18845_18919 = G__18926;
chunk__18846_18920 = G__18927;
count__18847_18921 = G__18928;
i__18848_18922 = G__18929;
continue;
} else {
var temp__5804__auto___18930 = cljs.core.seq(seq__18845_18919);
if(temp__5804__auto___18930){
var seq__18845_18931__$1 = temp__5804__auto___18930;
if(cljs.core.chunked_seq_QMARK_(seq__18845_18931__$1)){
var c__5525__auto___18933 = cljs.core.chunk_first(seq__18845_18931__$1);
var G__18934 = cljs.core.chunk_rest(seq__18845_18931__$1);
var G__18935 = c__5525__auto___18933;
var G__18936 = cljs.core.count(c__5525__auto___18933);
var G__18937 = (0);
seq__18845_18919 = G__18934;
chunk__18846_18920 = G__18935;
count__18847_18921 = G__18936;
i__18848_18922 = G__18937;
continue;
} else {
var vec__18865_18939 = cljs.core.first(seq__18845_18931__$1);
var container_18940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18865_18939,(0),null);
var comp_18941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18865_18939,(1),null);
reagent.dom.re_render_component(comp_18941,container_18940);


var G__18948 = cljs.core.next(seq__18845_18931__$1);
var G__18949 = null;
var G__18950 = (0);
var G__18951 = (0);
seq__18845_18919 = G__18948;
chunk__18846_18920 = G__18949;
count__18847_18921 = G__18950;
i__18848_18922 = G__18951;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
