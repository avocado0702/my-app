goog.provide('main.core.components.plan_list');
var module$node_modules$$mui$icons_material$DeleteOutline=shadow.js.require("module$node_modules$$mui$icons_material$DeleteOutline", {});
var module$node_modules$$mui$icons_material$PlaylistAdd=shadow.js.require("module$node_modules$$mui$icons_material$PlaylistAdd", {});
main.core.components.plan_list.add_btn = (function main$core$components$plan_list$add_btn(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$icons_material$PlaylistAdd.default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#D3D3D3","&:hover",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#1877f2",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null),new cljs.core.Keyword(null,"size","size",1098693007),"medium",new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-item","add-item",715813891)], null));
})], null),"+"], null);
});
main.core.components.plan_list.delete_btn = (function main$core$components$plan_list$delete_btn(item_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$icons_material$DeleteOutline.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#D3D3D3","&:hover",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#ff0000",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-item","delete-item",-1801247188),item_id], null));
})], null)], null);
});
main.core.components.plan_list.list_element = (function main$core$components$plan_list$list_element(item){
var plan = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-plan-by-id","get-plan-by-id",533294233),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null));
var current_plan_id = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-selected-plan-id","get-selected-plan-id",-730951835)], null));
var edit_mode = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-edit-mode","get-edit-mode",1087048520)], null));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-element","div.list-element",-268935489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),cljs.core.deref(current_plan_id)))?"highlight":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((((cljs.core.not(cljs.core.deref(edit_mode))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),cljs.core.deref(current_plan_id)))))?(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-selected-plan-id","set-selected-plan-id",609375933),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null));

return console.log("This item id:",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
}):null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.deref(edit_mode);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),cljs.core.deref(current_plan_id));
} else {
return and__5000__auto__;
}
})())?"none":"auto"),new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.deref(edit_mode);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),cljs.core.deref(current_plan_id));
} else {
return and__5000__auto__;
}
})())?0.5:(1))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-element-header","div.list-element-header",-1125304975),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.list-element-title","h4.list-element-title",-1801901849),new cljs.core.Keyword(null,"titel","titel",1985670278).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(plan))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-element-buttons","div.list-element-buttons",1510622506),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.components.plan_list.delete_btn,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null)], null)], null)], null);
});
});
main.core.components.plan_list.plan_list = (function main$core$components$plan_list$plan_list(){
var pl = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-plan-list","get-plan-list",246006684)], null));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plan-list","div.plan-list",954433672),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Current Plan"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.components.plan_list.add_btn], null)], null),((cljs.core.empty_QMARK_(cljs.core.deref(pl)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"You have no plan"], null):(function (){var iter__5480__auto__ = (function main$core$components$plan_list$plan_list_$_iter__29325(s__29326){
return (new cljs.core.LazySeq(null,(function (){
var s__29326__$1 = s__29326;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29326__$1);
if(temp__5804__auto__){
var s__29326__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29326__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__29326__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__29330 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__29328 = (0);
while(true){
if((i__29328 < size__5479__auto__)){
var item = cljs.core._nth(c__5478__auto__,i__29328);
cljs.core.chunk_append(b__29330,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.components.plan_list.list_element,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__29333 = (i__29328 + (1));
i__29328 = G__29333;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29330),main$core$components$plan_list$plan_list_$_iter__29325(cljs.core.chunk_rest(s__29326__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29330),null);
}
} else {
var item = cljs.core.first(s__29326__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.components.plan_list.list_element,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null)),main$core$components$plan_list$plan_list_$_iter__29325(cljs.core.rest(s__29326__$2)));
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
