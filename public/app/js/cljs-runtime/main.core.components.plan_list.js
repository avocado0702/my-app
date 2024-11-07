goog.provide('main.core.components.plan_list');
main.core.components.plan_list.add_btn = (function main$core$components$plan_list$add_btn(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-item","add-item",715813891)], null));
})], null),"+"], null);
});
main.core.components.plan_list.delete_btn = (function main$core$components$plan_list$delete_btn(item_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-item","delete-item",-1801247188),item_id], null));
})], null),"-"], null);
});
main.core.components.plan_list.list_element = (function main$core$components$plan_list$list_element(item,selected_item){
var input_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"titel","titel",1985670278).cljs$core$IFn$_invoke$arity$1(item));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-element","div.list-element",-268935489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(selected_item,item);

return console.log("This item:",selected_item);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-element-header","div.list-element-header",-1125304975),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.list-element-title","h4.list-element-title",-1801901849),new cljs.core.Keyword(null,"titel","titel",1985670278).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-element-buttons","div.list-element-buttons",1510622506),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.components.plan_list.delete_btn,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null)], null)], null)], null);
});
});
main.core.components.plan_list.plan_list = (function main$core$components$plan_list$plan_list(selected_item){
var pl = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-plan-list","get-plan-list",246006684)], null));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plan-list","div.plan-list",954433672),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Current Plan",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.components.plan_list.add_btn], null)], null),((cljs.core.empty_QMARK_(cljs.core.deref(pl)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"You have no plan"], null):(function (){var iter__5480__auto__ = (function main$core$components$plan_list$plan_list_$_iter__13010(s__13011){
return (new cljs.core.LazySeq(null,(function (){
var s__13011__$1 = s__13011;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13011__$1);
if(temp__5804__auto__){
var s__13011__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13011__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13011__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13013 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13012 = (0);
while(true){
if((i__13012 < size__5479__auto__)){
var item = cljs.core._nth(c__5478__auto__,i__13012);
cljs.core.chunk_append(b__13013,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.components.plan_list.list_element,item,selected_item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__13033 = (i__13012 + (1));
i__13012 = G__13033;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13013),main$core$components$plan_list$plan_list_$_iter__13010(cljs.core.chunk_rest(s__13011__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13013),null);
}
} else {
var item = cljs.core.first(s__13011__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.components.plan_list.list_element,item,selected_item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null)),main$core$components$plan_list$plan_list_$_iter__13010(cljs.core.rest(s__13011__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(pl));
})())], null);
});
});

//# sourceMappingURL=main.core.components.plan_list.js.map
