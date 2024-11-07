goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_15931 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_15931(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_15933 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_15933(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__14313 = coll;
var G__14314 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__14313,G__14314) : shadow.dom.lazy_native_coll_seq.call(null, G__14313,G__14314));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__14383 = arguments.length;
switch (G__14383) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__14385 = arguments.length;
switch (G__14385) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__14390 = arguments.length;
switch (G__14390) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__14404 = arguments.length;
switch (G__14404) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__14425 = arguments.length;
switch (G__14425) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__14439 = arguments.length;
switch (G__14439) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e14473){if((e14473 instanceof Object)){
var e = e14473;
return console.log("didnt support attachEvent",el,e);
} else {
throw e14473;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__14502 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__14503 = null;
var count__14504 = (0);
var i__14505 = (0);
while(true){
if((i__14505 < count__14504)){
var el = chunk__14503.cljs$core$IIndexed$_nth$arity$2(null, i__14505);
var handler_16007__$1 = ((function (seq__14502,chunk__14503,count__14504,i__14505,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__14502,chunk__14503,count__14504,i__14505,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16007__$1);


var G__16011 = seq__14502;
var G__16012 = chunk__14503;
var G__16013 = count__14504;
var G__16014 = (i__14505 + (1));
seq__14502 = G__16011;
chunk__14503 = G__16012;
count__14504 = G__16013;
i__14505 = G__16014;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14502);
if(temp__5804__auto__){
var seq__14502__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14502__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14502__$1);
var G__16017 = cljs.core.chunk_rest(seq__14502__$1);
var G__16018 = c__5525__auto__;
var G__16019 = cljs.core.count(c__5525__auto__);
var G__16020 = (0);
seq__14502 = G__16017;
chunk__14503 = G__16018;
count__14504 = G__16019;
i__14505 = G__16020;
continue;
} else {
var el = cljs.core.first(seq__14502__$1);
var handler_16022__$1 = ((function (seq__14502,chunk__14503,count__14504,i__14505,el,seq__14502__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__14502,chunk__14503,count__14504,i__14505,el,seq__14502__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16022__$1);


var G__16023 = cljs.core.next(seq__14502__$1);
var G__16024 = null;
var G__16025 = (0);
var G__16026 = (0);
seq__14502 = G__16023;
chunk__14503 = G__16024;
count__14504 = G__16025;
i__14505 = G__16026;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__14536 = arguments.length;
switch (G__14536) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__14549 = cljs.core.seq(events);
var chunk__14550 = null;
var count__14551 = (0);
var i__14552 = (0);
while(true){
if((i__14552 < count__14551)){
var vec__14569 = chunk__14550.cljs$core$IIndexed$_nth$arity$2(null, i__14552);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14569,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14569,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16036 = seq__14549;
var G__16037 = chunk__14550;
var G__16038 = count__14551;
var G__16039 = (i__14552 + (1));
seq__14549 = G__16036;
chunk__14550 = G__16037;
count__14551 = G__16038;
i__14552 = G__16039;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14549);
if(temp__5804__auto__){
var seq__14549__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14549__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14549__$1);
var G__16042 = cljs.core.chunk_rest(seq__14549__$1);
var G__16043 = c__5525__auto__;
var G__16044 = cljs.core.count(c__5525__auto__);
var G__16045 = (0);
seq__14549 = G__16042;
chunk__14550 = G__16043;
count__14551 = G__16044;
i__14552 = G__16045;
continue;
} else {
var vec__14580 = cljs.core.first(seq__14549__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14580,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14580,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16047 = cljs.core.next(seq__14549__$1);
var G__16048 = null;
var G__16049 = (0);
var G__16050 = (0);
seq__14549 = G__16047;
chunk__14550 = G__16048;
count__14551 = G__16049;
i__14552 = G__16050;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__14585 = cljs.core.seq(styles);
var chunk__14586 = null;
var count__14587 = (0);
var i__14588 = (0);
while(true){
if((i__14588 < count__14587)){
var vec__14621 = chunk__14586.cljs$core$IIndexed$_nth$arity$2(null, i__14588);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14621,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14621,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16054 = seq__14585;
var G__16055 = chunk__14586;
var G__16056 = count__14587;
var G__16057 = (i__14588 + (1));
seq__14585 = G__16054;
chunk__14586 = G__16055;
count__14587 = G__16056;
i__14588 = G__16057;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14585);
if(temp__5804__auto__){
var seq__14585__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14585__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14585__$1);
var G__16065 = cljs.core.chunk_rest(seq__14585__$1);
var G__16066 = c__5525__auto__;
var G__16067 = cljs.core.count(c__5525__auto__);
var G__16068 = (0);
seq__14585 = G__16065;
chunk__14586 = G__16066;
count__14587 = G__16067;
i__14588 = G__16068;
continue;
} else {
var vec__14642 = cljs.core.first(seq__14585__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14642,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14642,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16072 = cljs.core.next(seq__14585__$1);
var G__16073 = null;
var G__16074 = (0);
var G__16075 = (0);
seq__14585 = G__16072;
chunk__14586 = G__16073;
count__14587 = G__16074;
i__14588 = G__16075;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__14654_16076 = key;
var G__14654_16077__$1 = (((G__14654_16076 instanceof cljs.core.Keyword))?G__14654_16076.fqn:null);
switch (G__14654_16077__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_16081 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_16081,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_16081,"aria-");
}
})())){
el.setAttribute(ks_16081,value);
} else {
(el[ks_16081] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__14696){
var map__14698 = p__14696;
var map__14698__$1 = cljs.core.__destructure_map(map__14698);
var props = map__14698__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14698__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__14699 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14699,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14699,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14699,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__14702 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__14702,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__14702;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__14711 = arguments.length;
switch (G__14711) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__14724){
var vec__14725 = p__14724;
var seq__14726 = cljs.core.seq(vec__14725);
var first__14727 = cljs.core.first(seq__14726);
var seq__14726__$1 = cljs.core.next(seq__14726);
var nn = first__14727;
var first__14727__$1 = cljs.core.first(seq__14726__$1);
var seq__14726__$2 = cljs.core.next(seq__14726__$1);
var np = first__14727__$1;
var nc = seq__14726__$2;
var node = vec__14725;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14746 = nn;
var G__14747 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14746,G__14747) : create_fn.call(null, G__14746,G__14747));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14756 = nn;
var G__14757 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14756,G__14757) : create_fn.call(null, G__14756,G__14757));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__14761 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14761,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14761,(1),null);
var seq__14765_16120 = cljs.core.seq(node_children);
var chunk__14766_16121 = null;
var count__14767_16122 = (0);
var i__14768_16123 = (0);
while(true){
if((i__14768_16123 < count__14767_16122)){
var child_struct_16124 = chunk__14766_16121.cljs$core$IIndexed$_nth$arity$2(null, i__14768_16123);
var children_16125 = shadow.dom.dom_node(child_struct_16124);
if(cljs.core.seq_QMARK_(children_16125)){
var seq__14882_16127 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16125));
var chunk__14884_16128 = null;
var count__14885_16129 = (0);
var i__14886_16130 = (0);
while(true){
if((i__14886_16130 < count__14885_16129)){
var child_16133 = chunk__14884_16128.cljs$core$IIndexed$_nth$arity$2(null, i__14886_16130);
if(cljs.core.truth_(child_16133)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16133);


var G__16134 = seq__14882_16127;
var G__16135 = chunk__14884_16128;
var G__16136 = count__14885_16129;
var G__16137 = (i__14886_16130 + (1));
seq__14882_16127 = G__16134;
chunk__14884_16128 = G__16135;
count__14885_16129 = G__16136;
i__14886_16130 = G__16137;
continue;
} else {
var G__16138 = seq__14882_16127;
var G__16139 = chunk__14884_16128;
var G__16140 = count__14885_16129;
var G__16141 = (i__14886_16130 + (1));
seq__14882_16127 = G__16138;
chunk__14884_16128 = G__16139;
count__14885_16129 = G__16140;
i__14886_16130 = G__16141;
continue;
}
} else {
var temp__5804__auto___16143 = cljs.core.seq(seq__14882_16127);
if(temp__5804__auto___16143){
var seq__14882_16144__$1 = temp__5804__auto___16143;
if(cljs.core.chunked_seq_QMARK_(seq__14882_16144__$1)){
var c__5525__auto___16146 = cljs.core.chunk_first(seq__14882_16144__$1);
var G__16147 = cljs.core.chunk_rest(seq__14882_16144__$1);
var G__16148 = c__5525__auto___16146;
var G__16149 = cljs.core.count(c__5525__auto___16146);
var G__16150 = (0);
seq__14882_16127 = G__16147;
chunk__14884_16128 = G__16148;
count__14885_16129 = G__16149;
i__14886_16130 = G__16150;
continue;
} else {
var child_16151 = cljs.core.first(seq__14882_16144__$1);
if(cljs.core.truth_(child_16151)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16151);


var G__16153 = cljs.core.next(seq__14882_16144__$1);
var G__16154 = null;
var G__16155 = (0);
var G__16156 = (0);
seq__14882_16127 = G__16153;
chunk__14884_16128 = G__16154;
count__14885_16129 = G__16155;
i__14886_16130 = G__16156;
continue;
} else {
var G__16157 = cljs.core.next(seq__14882_16144__$1);
var G__16158 = null;
var G__16159 = (0);
var G__16160 = (0);
seq__14882_16127 = G__16157;
chunk__14884_16128 = G__16158;
count__14885_16129 = G__16159;
i__14886_16130 = G__16160;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16125);
}


var G__16161 = seq__14765_16120;
var G__16162 = chunk__14766_16121;
var G__16163 = count__14767_16122;
var G__16164 = (i__14768_16123 + (1));
seq__14765_16120 = G__16161;
chunk__14766_16121 = G__16162;
count__14767_16122 = G__16163;
i__14768_16123 = G__16164;
continue;
} else {
var temp__5804__auto___16165 = cljs.core.seq(seq__14765_16120);
if(temp__5804__auto___16165){
var seq__14765_16166__$1 = temp__5804__auto___16165;
if(cljs.core.chunked_seq_QMARK_(seq__14765_16166__$1)){
var c__5525__auto___16167 = cljs.core.chunk_first(seq__14765_16166__$1);
var G__16168 = cljs.core.chunk_rest(seq__14765_16166__$1);
var G__16169 = c__5525__auto___16167;
var G__16170 = cljs.core.count(c__5525__auto___16167);
var G__16171 = (0);
seq__14765_16120 = G__16168;
chunk__14766_16121 = G__16169;
count__14767_16122 = G__16170;
i__14768_16123 = G__16171;
continue;
} else {
var child_struct_16172 = cljs.core.first(seq__14765_16166__$1);
var children_16174 = shadow.dom.dom_node(child_struct_16172);
if(cljs.core.seq_QMARK_(children_16174)){
var seq__14911_16175 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16174));
var chunk__14913_16176 = null;
var count__14914_16177 = (0);
var i__14915_16178 = (0);
while(true){
if((i__14915_16178 < count__14914_16177)){
var child_16179 = chunk__14913_16176.cljs$core$IIndexed$_nth$arity$2(null, i__14915_16178);
if(cljs.core.truth_(child_16179)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16179);


var G__16184 = seq__14911_16175;
var G__16185 = chunk__14913_16176;
var G__16186 = count__14914_16177;
var G__16187 = (i__14915_16178 + (1));
seq__14911_16175 = G__16184;
chunk__14913_16176 = G__16185;
count__14914_16177 = G__16186;
i__14915_16178 = G__16187;
continue;
} else {
var G__16188 = seq__14911_16175;
var G__16189 = chunk__14913_16176;
var G__16190 = count__14914_16177;
var G__16191 = (i__14915_16178 + (1));
seq__14911_16175 = G__16188;
chunk__14913_16176 = G__16189;
count__14914_16177 = G__16190;
i__14915_16178 = G__16191;
continue;
}
} else {
var temp__5804__auto___16192__$1 = cljs.core.seq(seq__14911_16175);
if(temp__5804__auto___16192__$1){
var seq__14911_16193__$1 = temp__5804__auto___16192__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14911_16193__$1)){
var c__5525__auto___16198 = cljs.core.chunk_first(seq__14911_16193__$1);
var G__16199 = cljs.core.chunk_rest(seq__14911_16193__$1);
var G__16200 = c__5525__auto___16198;
var G__16201 = cljs.core.count(c__5525__auto___16198);
var G__16202 = (0);
seq__14911_16175 = G__16199;
chunk__14913_16176 = G__16200;
count__14914_16177 = G__16201;
i__14915_16178 = G__16202;
continue;
} else {
var child_16203 = cljs.core.first(seq__14911_16193__$1);
if(cljs.core.truth_(child_16203)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16203);


var G__16207 = cljs.core.next(seq__14911_16193__$1);
var G__16208 = null;
var G__16209 = (0);
var G__16210 = (0);
seq__14911_16175 = G__16207;
chunk__14913_16176 = G__16208;
count__14914_16177 = G__16209;
i__14915_16178 = G__16210;
continue;
} else {
var G__16212 = cljs.core.next(seq__14911_16193__$1);
var G__16213 = null;
var G__16214 = (0);
var G__16215 = (0);
seq__14911_16175 = G__16212;
chunk__14913_16176 = G__16213;
count__14914_16177 = G__16214;
i__14915_16178 = G__16215;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16174);
}


var G__16216 = cljs.core.next(seq__14765_16166__$1);
var G__16217 = null;
var G__16218 = (0);
var G__16219 = (0);
seq__14765_16120 = G__16216;
chunk__14766_16121 = G__16217;
count__14767_16122 = G__16218;
i__14768_16123 = G__16219;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__14945 = cljs.core.seq(node);
var chunk__14946 = null;
var count__14947 = (0);
var i__14948 = (0);
while(true){
if((i__14948 < count__14947)){
var n = chunk__14946.cljs$core$IIndexed$_nth$arity$2(null, i__14948);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__16238 = seq__14945;
var G__16239 = chunk__14946;
var G__16240 = count__14947;
var G__16241 = (i__14948 + (1));
seq__14945 = G__16238;
chunk__14946 = G__16239;
count__14947 = G__16240;
i__14948 = G__16241;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14945);
if(temp__5804__auto__){
var seq__14945__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14945__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14945__$1);
var G__16247 = cljs.core.chunk_rest(seq__14945__$1);
var G__16248 = c__5525__auto__;
var G__16249 = cljs.core.count(c__5525__auto__);
var G__16250 = (0);
seq__14945 = G__16247;
chunk__14946 = G__16248;
count__14947 = G__16249;
i__14948 = G__16250;
continue;
} else {
var n = cljs.core.first(seq__14945__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__16254 = cljs.core.next(seq__14945__$1);
var G__16255 = null;
var G__16256 = (0);
var G__16257 = (0);
seq__14945 = G__16254;
chunk__14946 = G__16255;
count__14947 = G__16256;
i__14948 = G__16257;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__14962 = arguments.length;
switch (G__14962) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__14983 = arguments.length;
switch (G__14983) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__15049 = arguments.length;
switch (G__15049) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16278 = arguments.length;
var i__5727__auto___16279 = (0);
while(true){
if((i__5727__auto___16279 < len__5726__auto___16278)){
args__5732__auto__.push((arguments[i__5727__auto___16279]));

var G__16281 = (i__5727__auto___16279 + (1));
i__5727__auto___16279 = G__16281;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__15117_16283 = cljs.core.seq(nodes);
var chunk__15118_16284 = null;
var count__15119_16285 = (0);
var i__15120_16286 = (0);
while(true){
if((i__15120_16286 < count__15119_16285)){
var node_16287 = chunk__15118_16284.cljs$core$IIndexed$_nth$arity$2(null, i__15120_16286);
fragment.appendChild(shadow.dom._to_dom(node_16287));


var G__16289 = seq__15117_16283;
var G__16290 = chunk__15118_16284;
var G__16291 = count__15119_16285;
var G__16292 = (i__15120_16286 + (1));
seq__15117_16283 = G__16289;
chunk__15118_16284 = G__16290;
count__15119_16285 = G__16291;
i__15120_16286 = G__16292;
continue;
} else {
var temp__5804__auto___16297 = cljs.core.seq(seq__15117_16283);
if(temp__5804__auto___16297){
var seq__15117_16298__$1 = temp__5804__auto___16297;
if(cljs.core.chunked_seq_QMARK_(seq__15117_16298__$1)){
var c__5525__auto___16299 = cljs.core.chunk_first(seq__15117_16298__$1);
var G__16300 = cljs.core.chunk_rest(seq__15117_16298__$1);
var G__16301 = c__5525__auto___16299;
var G__16302 = cljs.core.count(c__5525__auto___16299);
var G__16303 = (0);
seq__15117_16283 = G__16300;
chunk__15118_16284 = G__16301;
count__15119_16285 = G__16302;
i__15120_16286 = G__16303;
continue;
} else {
var node_16308 = cljs.core.first(seq__15117_16298__$1);
fragment.appendChild(shadow.dom._to_dom(node_16308));


var G__16311 = cljs.core.next(seq__15117_16298__$1);
var G__16312 = null;
var G__16313 = (0);
var G__16314 = (0);
seq__15117_16283 = G__16311;
chunk__15118_16284 = G__16312;
count__15119_16285 = G__16313;
i__15120_16286 = G__16314;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq15088){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15088));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__15193_16327 = cljs.core.seq(scripts);
var chunk__15194_16328 = null;
var count__15195_16329 = (0);
var i__15196_16330 = (0);
while(true){
if((i__15196_16330 < count__15195_16329)){
var vec__15222_16331 = chunk__15194_16328.cljs$core$IIndexed$_nth$arity$2(null, i__15196_16330);
var script_tag_16332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15222_16331,(0),null);
var script_body_16333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15222_16331,(1),null);
eval(script_body_16333);


var G__16336 = seq__15193_16327;
var G__16337 = chunk__15194_16328;
var G__16338 = count__15195_16329;
var G__16339 = (i__15196_16330 + (1));
seq__15193_16327 = G__16336;
chunk__15194_16328 = G__16337;
count__15195_16329 = G__16338;
i__15196_16330 = G__16339;
continue;
} else {
var temp__5804__auto___16341 = cljs.core.seq(seq__15193_16327);
if(temp__5804__auto___16341){
var seq__15193_16342__$1 = temp__5804__auto___16341;
if(cljs.core.chunked_seq_QMARK_(seq__15193_16342__$1)){
var c__5525__auto___16343 = cljs.core.chunk_first(seq__15193_16342__$1);
var G__16344 = cljs.core.chunk_rest(seq__15193_16342__$1);
var G__16345 = c__5525__auto___16343;
var G__16346 = cljs.core.count(c__5525__auto___16343);
var G__16347 = (0);
seq__15193_16327 = G__16344;
chunk__15194_16328 = G__16345;
count__15195_16329 = G__16346;
i__15196_16330 = G__16347;
continue;
} else {
var vec__15242_16348 = cljs.core.first(seq__15193_16342__$1);
var script_tag_16349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15242_16348,(0),null);
var script_body_16350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15242_16348,(1),null);
eval(script_body_16350);


var G__16352 = cljs.core.next(seq__15193_16342__$1);
var G__16353 = null;
var G__16354 = (0);
var G__16355 = (0);
seq__15193_16327 = G__16352;
chunk__15194_16328 = G__16353;
count__15195_16329 = G__16354;
i__15196_16330 = G__16355;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__15251){
var vec__15255 = p__15251;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15255,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15255,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__15295 = arguments.length;
switch (G__15295) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__15354 = cljs.core.seq(style_keys);
var chunk__15355 = null;
var count__15356 = (0);
var i__15357 = (0);
while(true){
if((i__15357 < count__15356)){
var it = chunk__15355.cljs$core$IIndexed$_nth$arity$2(null, i__15357);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16380 = seq__15354;
var G__16381 = chunk__15355;
var G__16382 = count__15356;
var G__16383 = (i__15357 + (1));
seq__15354 = G__16380;
chunk__15355 = G__16381;
count__15356 = G__16382;
i__15357 = G__16383;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15354);
if(temp__5804__auto__){
var seq__15354__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15354__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15354__$1);
var G__16387 = cljs.core.chunk_rest(seq__15354__$1);
var G__16388 = c__5525__auto__;
var G__16389 = cljs.core.count(c__5525__auto__);
var G__16390 = (0);
seq__15354 = G__16387;
chunk__15355 = G__16388;
count__15356 = G__16389;
i__15357 = G__16390;
continue;
} else {
var it = cljs.core.first(seq__15354__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16394 = cljs.core.next(seq__15354__$1);
var G__16395 = null;
var G__16396 = (0);
var G__16397 = (0);
seq__15354 = G__16394;
chunk__15355 = G__16395;
count__15356 = G__16396;
i__15357 = G__16397;
continue;
}
} else {
return null;
}
}
break;
}
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k15392,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__15405 = k15392;
var G__15405__$1 = (((G__15405 instanceof cljs.core.Keyword))?G__15405.fqn:null);
switch (G__15405__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15392,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__15418){
var vec__15420 = p__15418;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15420,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15420,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15391){
var self__ = this;
var G__15391__$1 = this;
return (new cljs.core.RecordIter((0),G__15391__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15393,other15394){
var self__ = this;
var this15393__$1 = this;
return (((!((other15394 == null)))) && ((((this15393__$1.constructor === other15394.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15393__$1.x,other15394.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15393__$1.y,other15394.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15393__$1.__extmap,other15394.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k15392){
var self__ = this;
var this__5307__auto____$1 = this;
var G__15478 = k15392;
var G__15478__$1 = (((G__15478 instanceof cljs.core.Keyword))?G__15478.fqn:null);
switch (G__15478__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15392);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__15391){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__15484 = cljs.core.keyword_identical_QMARK_;
var expr__15485 = k__5309__auto__;
if(cljs.core.truth_((pred__15484.cljs$core$IFn$_invoke$arity$2 ? pred__15484.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__15485) : pred__15484.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__15485)))){
return (new shadow.dom.Coordinate(G__15391,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15484.cljs$core$IFn$_invoke$arity$2 ? pred__15484.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__15485) : pred__15484.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__15485)))){
return (new shadow.dom.Coordinate(self__.x,G__15391,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__15391),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__15391){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__15391,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__15398){
var extmap__5342__auto__ = (function (){var G__15506 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15398,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__15398)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15506);
} else {
return G__15506;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__15398),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__15398),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k15529,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__15553 = k15529;
var G__15553__$1 = (((G__15553 instanceof cljs.core.Keyword))?G__15553.fqn:null);
switch (G__15553__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15529,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__15564){
var vec__15565 = p__15564;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15565,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15565,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15528){
var self__ = this;
var G__15528__$1 = this;
return (new cljs.core.RecordIter((0),G__15528__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15530,other15531){
var self__ = this;
var this15530__$1 = this;
return (((!((other15531 == null)))) && ((((this15530__$1.constructor === other15531.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15530__$1.w,other15531.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15530__$1.h,other15531.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15530__$1.__extmap,other15531.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k15529){
var self__ = this;
var this__5307__auto____$1 = this;
var G__15617 = k15529;
var G__15617__$1 = (((G__15617 instanceof cljs.core.Keyword))?G__15617.fqn:null);
switch (G__15617__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15529);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__15528){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__15620 = cljs.core.keyword_identical_QMARK_;
var expr__15621 = k__5309__auto__;
if(cljs.core.truth_((pred__15620.cljs$core$IFn$_invoke$arity$2 ? pred__15620.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__15621) : pred__15620.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__15621)))){
return (new shadow.dom.Size(G__15528,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15620.cljs$core$IFn$_invoke$arity$2 ? pred__15620.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__15621) : pred__15620.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__15621)))){
return (new shadow.dom.Size(self__.w,G__15528,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__15528),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__15528){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__15528,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__15533){
var extmap__5342__auto__ = (function (){var G__15639 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15533,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__15533)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15639);
} else {
return G__15639;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__15533),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__15533),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__16534 = (i + (1));
var G__16535 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16534;
ret = G__16535;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15667){
var vec__15668 = p__15667;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15668,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15668,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__15677 = arguments.length;
switch (G__15677) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__16576 = ps;
var G__16577 = (i + (1));
el__$1 = G__16576;
i = G__16577;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__15715 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15715,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15715,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15715,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__15720_16605 = cljs.core.seq(props);
var chunk__15721_16606 = null;
var count__15722_16607 = (0);
var i__15723_16608 = (0);
while(true){
if((i__15723_16608 < count__15722_16607)){
var vec__15737_16613 = chunk__15721_16606.cljs$core$IIndexed$_nth$arity$2(null, i__15723_16608);
var k_16614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15737_16613,(0),null);
var v_16615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15737_16613,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_16614);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16614),v_16615);


var G__16624 = seq__15720_16605;
var G__16625 = chunk__15721_16606;
var G__16626 = count__15722_16607;
var G__16627 = (i__15723_16608 + (1));
seq__15720_16605 = G__16624;
chunk__15721_16606 = G__16625;
count__15722_16607 = G__16626;
i__15723_16608 = G__16627;
continue;
} else {
var temp__5804__auto___16629 = cljs.core.seq(seq__15720_16605);
if(temp__5804__auto___16629){
var seq__15720_16632__$1 = temp__5804__auto___16629;
if(cljs.core.chunked_seq_QMARK_(seq__15720_16632__$1)){
var c__5525__auto___16636 = cljs.core.chunk_first(seq__15720_16632__$1);
var G__16638 = cljs.core.chunk_rest(seq__15720_16632__$1);
var G__16639 = c__5525__auto___16636;
var G__16640 = cljs.core.count(c__5525__auto___16636);
var G__16641 = (0);
seq__15720_16605 = G__16638;
chunk__15721_16606 = G__16639;
count__15722_16607 = G__16640;
i__15723_16608 = G__16641;
continue;
} else {
var vec__15741_16644 = cljs.core.first(seq__15720_16632__$1);
var k_16645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15741_16644,(0),null);
var v_16646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15741_16644,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_16645);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16645),v_16646);


var G__16658 = cljs.core.next(seq__15720_16632__$1);
var G__16659 = null;
var G__16660 = (0);
var G__16661 = (0);
seq__15720_16605 = G__16658;
chunk__15721_16606 = G__16659;
count__15722_16607 = G__16660;
i__15723_16608 = G__16661;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__15756 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15756,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15756,(1),null);
var seq__15759_16668 = cljs.core.seq(node_children);
var chunk__15761_16669 = null;
var count__15762_16670 = (0);
var i__15763_16671 = (0);
while(true){
if((i__15763_16671 < count__15762_16670)){
var child_struct_16673 = chunk__15761_16669.cljs$core$IIndexed$_nth$arity$2(null, i__15763_16671);
if((!((child_struct_16673 == null)))){
if(typeof child_struct_16673 === 'string'){
var text_16674 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16674),child_struct_16673].join(''));
} else {
var children_16676 = shadow.dom.svg_node(child_struct_16673);
if(cljs.core.seq_QMARK_(children_16676)){
var seq__15825_16680 = cljs.core.seq(children_16676);
var chunk__15827_16681 = null;
var count__15828_16682 = (0);
var i__15829_16683 = (0);
while(true){
if((i__15829_16683 < count__15828_16682)){
var child_16686 = chunk__15827_16681.cljs$core$IIndexed$_nth$arity$2(null, i__15829_16683);
if(cljs.core.truth_(child_16686)){
node.appendChild(child_16686);


var G__16689 = seq__15825_16680;
var G__16690 = chunk__15827_16681;
var G__16691 = count__15828_16682;
var G__16692 = (i__15829_16683 + (1));
seq__15825_16680 = G__16689;
chunk__15827_16681 = G__16690;
count__15828_16682 = G__16691;
i__15829_16683 = G__16692;
continue;
} else {
var G__16694 = seq__15825_16680;
var G__16695 = chunk__15827_16681;
var G__16696 = count__15828_16682;
var G__16697 = (i__15829_16683 + (1));
seq__15825_16680 = G__16694;
chunk__15827_16681 = G__16695;
count__15828_16682 = G__16696;
i__15829_16683 = G__16697;
continue;
}
} else {
var temp__5804__auto___16698 = cljs.core.seq(seq__15825_16680);
if(temp__5804__auto___16698){
var seq__15825_16699__$1 = temp__5804__auto___16698;
if(cljs.core.chunked_seq_QMARK_(seq__15825_16699__$1)){
var c__5525__auto___16700 = cljs.core.chunk_first(seq__15825_16699__$1);
var G__16702 = cljs.core.chunk_rest(seq__15825_16699__$1);
var G__16703 = c__5525__auto___16700;
var G__16704 = cljs.core.count(c__5525__auto___16700);
var G__16705 = (0);
seq__15825_16680 = G__16702;
chunk__15827_16681 = G__16703;
count__15828_16682 = G__16704;
i__15829_16683 = G__16705;
continue;
} else {
var child_16707 = cljs.core.first(seq__15825_16699__$1);
if(cljs.core.truth_(child_16707)){
node.appendChild(child_16707);


var G__16708 = cljs.core.next(seq__15825_16699__$1);
var G__16709 = null;
var G__16710 = (0);
var G__16711 = (0);
seq__15825_16680 = G__16708;
chunk__15827_16681 = G__16709;
count__15828_16682 = G__16710;
i__15829_16683 = G__16711;
continue;
} else {
var G__16714 = cljs.core.next(seq__15825_16699__$1);
var G__16715 = null;
var G__16716 = (0);
var G__16717 = (0);
seq__15825_16680 = G__16714;
chunk__15827_16681 = G__16715;
count__15828_16682 = G__16716;
i__15829_16683 = G__16717;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16676);
}
}


var G__16721 = seq__15759_16668;
var G__16722 = chunk__15761_16669;
var G__16723 = count__15762_16670;
var G__16724 = (i__15763_16671 + (1));
seq__15759_16668 = G__16721;
chunk__15761_16669 = G__16722;
count__15762_16670 = G__16723;
i__15763_16671 = G__16724;
continue;
} else {
var G__16725 = seq__15759_16668;
var G__16726 = chunk__15761_16669;
var G__16727 = count__15762_16670;
var G__16728 = (i__15763_16671 + (1));
seq__15759_16668 = G__16725;
chunk__15761_16669 = G__16726;
count__15762_16670 = G__16727;
i__15763_16671 = G__16728;
continue;
}
} else {
var temp__5804__auto___16729 = cljs.core.seq(seq__15759_16668);
if(temp__5804__auto___16729){
var seq__15759_16730__$1 = temp__5804__auto___16729;
if(cljs.core.chunked_seq_QMARK_(seq__15759_16730__$1)){
var c__5525__auto___16732 = cljs.core.chunk_first(seq__15759_16730__$1);
var G__16733 = cljs.core.chunk_rest(seq__15759_16730__$1);
var G__16734 = c__5525__auto___16732;
var G__16735 = cljs.core.count(c__5525__auto___16732);
var G__16736 = (0);
seq__15759_16668 = G__16733;
chunk__15761_16669 = G__16734;
count__15762_16670 = G__16735;
i__15763_16671 = G__16736;
continue;
} else {
var child_struct_16737 = cljs.core.first(seq__15759_16730__$1);
if((!((child_struct_16737 == null)))){
if(typeof child_struct_16737 === 'string'){
var text_16738 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16738),child_struct_16737].join(''));
} else {
var children_16739 = shadow.dom.svg_node(child_struct_16737);
if(cljs.core.seq_QMARK_(children_16739)){
var seq__15848_16741 = cljs.core.seq(children_16739);
var chunk__15850_16742 = null;
var count__15851_16743 = (0);
var i__15852_16744 = (0);
while(true){
if((i__15852_16744 < count__15851_16743)){
var child_16746 = chunk__15850_16742.cljs$core$IIndexed$_nth$arity$2(null, i__15852_16744);
if(cljs.core.truth_(child_16746)){
node.appendChild(child_16746);


var G__16747 = seq__15848_16741;
var G__16748 = chunk__15850_16742;
var G__16749 = count__15851_16743;
var G__16750 = (i__15852_16744 + (1));
seq__15848_16741 = G__16747;
chunk__15850_16742 = G__16748;
count__15851_16743 = G__16749;
i__15852_16744 = G__16750;
continue;
} else {
var G__16754 = seq__15848_16741;
var G__16755 = chunk__15850_16742;
var G__16756 = count__15851_16743;
var G__16757 = (i__15852_16744 + (1));
seq__15848_16741 = G__16754;
chunk__15850_16742 = G__16755;
count__15851_16743 = G__16756;
i__15852_16744 = G__16757;
continue;
}
} else {
var temp__5804__auto___16758__$1 = cljs.core.seq(seq__15848_16741);
if(temp__5804__auto___16758__$1){
var seq__15848_16759__$1 = temp__5804__auto___16758__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15848_16759__$1)){
var c__5525__auto___16760 = cljs.core.chunk_first(seq__15848_16759__$1);
var G__16761 = cljs.core.chunk_rest(seq__15848_16759__$1);
var G__16762 = c__5525__auto___16760;
var G__16763 = cljs.core.count(c__5525__auto___16760);
var G__16764 = (0);
seq__15848_16741 = G__16761;
chunk__15850_16742 = G__16762;
count__15851_16743 = G__16763;
i__15852_16744 = G__16764;
continue;
} else {
var child_16767 = cljs.core.first(seq__15848_16759__$1);
if(cljs.core.truth_(child_16767)){
node.appendChild(child_16767);


var G__16771 = cljs.core.next(seq__15848_16759__$1);
var G__16772 = null;
var G__16773 = (0);
var G__16774 = (0);
seq__15848_16741 = G__16771;
chunk__15850_16742 = G__16772;
count__15851_16743 = G__16773;
i__15852_16744 = G__16774;
continue;
} else {
var G__16775 = cljs.core.next(seq__15848_16759__$1);
var G__16776 = null;
var G__16777 = (0);
var G__16778 = (0);
seq__15848_16741 = G__16775;
chunk__15850_16742 = G__16776;
count__15851_16743 = G__16777;
i__15852_16744 = G__16778;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16739);
}
}


var G__16781 = cljs.core.next(seq__15759_16730__$1);
var G__16782 = null;
var G__16783 = (0);
var G__16784 = (0);
seq__15759_16668 = G__16781;
chunk__15761_16669 = G__16782;
count__15762_16670 = G__16783;
i__15763_16671 = G__16784;
continue;
} else {
var G__16786 = cljs.core.next(seq__15759_16730__$1);
var G__16787 = null;
var G__16788 = (0);
var G__16789 = (0);
seq__15759_16668 = G__16786;
chunk__15761_16669 = G__16787;
count__15762_16670 = G__16788;
i__15763_16671 = G__16789;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16799 = arguments.length;
var i__5727__auto___16800 = (0);
while(true){
if((i__5727__auto___16800 < len__5726__auto___16799)){
args__5732__auto__.push((arguments[i__5727__auto___16800]));

var G__16802 = (i__5727__auto___16800 + (1));
i__5727__auto___16800 = G__16802;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15892){
var G__15893 = cljs.core.first(seq15892);
var seq15892__$1 = cljs.core.next(seq15892);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15893,seq15892__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
