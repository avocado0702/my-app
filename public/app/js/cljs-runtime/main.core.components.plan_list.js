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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-element","div.list-element",-268935489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),"15px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(selected_item,item);

return console.log("This item:",selected_item);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"titel","titel",1985670278).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.components.plan_list.delete_btn,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null)], null)], null)], null);
});
});
main.core.components.plan_list.plan_list = (function main$core$components$plan_list$plan_list(selected_item){
var pl = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-plan-list","get-plan-list",246006684)], null));
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plan-list","div.plan-list",954433672),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"250px",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"1px solid #ccc",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"current plan",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.components.plan_list.add_btn], null)], null),((cljs.core.empty_QMARK_(cljs.core.deref(pl)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"you have no plan"], null):(function (){var iter__5480__auto__ = (function main$core$components$plan_list$plan_list_$_iter__12412(s__12413){
return (new cljs.core.LazySeq(null,(function (){
var s__12413__$1 = s__12413;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12413__$1);
if(temp__5804__auto__){
var s__12413__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12413__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12413__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12415 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12414 = (0);
while(true){
if((i__12414 < size__5479__auto__)){
var item = cljs.core._nth(c__5478__auto__,i__12414);
cljs.core.chunk_append(b__12415,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.components.plan_list.list_element,item,selected_item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__12421 = (i__12414 + (1));
i__12414 = G__12421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12415),main$core$components$plan_list$plan_list_$_iter__12412(cljs.core.chunk_rest(s__12413__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12415),null);
}
} else {
var item = cljs.core.first(s__12413__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.components.plan_list.list_element,item,selected_item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null)),main$core$components$plan_list$plan_list_$_iter__12412(cljs.core.rest(s__12413__$2)));
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-item","delete-item",-1801247188),(function (db,p__12417){
var vec__12418 = p__12417;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12418,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12418,(1),null);
console.log("Deleting a item:");

console.log("Deletied item id:",item_id);

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"plan-list","plan-list",672205601),(function (items){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__12416_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__12416_SHARP_),item_id);
}),items);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-item","add-item",715813891),(function (db){
console.log("Adding a new item");

var new_id = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"plan-list","plan-list",672205601).cljs$core$IFn$_invoke$arity$1(db)))?(1):(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"plan-list","plan-list",672205601).cljs$core$IFn$_invoke$arity$1(db))) + (1)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"plan-list","plan-list",672205601),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new_id,new cljs.core.Keyword(null,"titel","titel",1985670278),"new plan",new cljs.core.Keyword(null,"text","text",-1790561697),"new plan introduction"], null));
}));

//# sourceMappingURL=main.core.components.plan_list.js.map
