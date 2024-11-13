goog.provide('main.core.components.tasks_manager');
var module$node_modules$$mui$icons_material$AddCircle=shadow.js.require("module$node_modules$$mui$icons_material$AddCircle", {});
var module$node_modules$$mui$material$node$TextField$index=shadow.js.require("module$node_modules$$mui$material$node$TextField$index", {});
main.core.components.tasks_manager.add_task = (function main$core$components$tasks_manager$add_task(tasks){
var next_id = ((cljs.core.empty_QMARK_(cljs.core.deref(tasks)))?(1):(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref(tasks))) + (1)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$icons_material$AddCircle.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#D3D3D3","&:hover",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#1877f2",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tasks,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),next_id,new cljs.core.Keyword(null,"description","description",-1428560544),""], null));
})], null)], null);
});
main.core.components.tasks_manager.task_manager = (function main$core$components$tasks_manager$task_manager(edited_tasks){
var selected_item_id = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-selected-plan-id","get-selected-plan-id",-730951835)], null));
var tasks = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tasks-by-plan-id","tasks-by-plan-id",-1050020363),cljs.core.deref(selected_item_id)], null));
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.deref(tasks);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edited_tasks),cljs.core.deref(tasks));
} else {
return and__5000__auto__;
}
})())){
cljs.core.reset_BANG_(edited_tasks,cljs.core.deref(tasks));
} else {
}

return (function (){
console.log("Rendering task-manager");

console.log("selected-item-id:",cljs.core.deref(selected_item_id));

console.log("Subscribed tasks:",cljs.core.deref(tasks));

console.log("Edited tasks:",cljs.core.deref(edited_tasks));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tasks-manager","div.tasks-manager",1249446353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column",new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"20px"], null)], null),((cljs.core.seq(cljs.core.deref(edited_tasks)))?(function (){var iter__5480__auto__ = (function main$core$components$tasks_manager$task_manager_$_iter__29311(s__29312){
return (new cljs.core.LazySeq(null,(function (){
var s__29312__$1 = s__29312;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29312__$1);
if(temp__5804__auto__){
var s__29312__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29312__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__29312__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__29314 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__29313 = (0);
while(true){
if((i__29313 < size__5479__auto__)){
var task = cljs.core._nth(c__5478__auto__,i__29313);
cljs.core.chunk_append(b__29314,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-item","div.task-item",-1998171877),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$TextField$index.default,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),["Task ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task))].join(''),new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(task),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__29313,task,c__5478__auto__,size__5479__auto__,b__29314,s__29312__$2,temp__5804__auto__,selected_item_id,tasks){
return (function (p1__29310_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edited_tasks,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task),new cljs.core.Keyword(null,"description","description",-1428560544)], null),p1__29310_SHARP_.target.value);
});})(i__29313,task,c__5478__auto__,size__5479__auto__,b__29314,s__29312__$2,temp__5804__auto__,selected_item_id,tasks))
,new cljs.core.Keyword(null,"fullWidth","fullWidth",-1436357554),true,new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task)], null)));

var G__29315 = (i__29313 + (1));
i__29313 = G__29315;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29314),main$core$components$tasks_manager$task_manager_$_iter__29311(cljs.core.chunk_rest(s__29312__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29314),null);
}
} else {
var task = cljs.core.first(s__29312__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-item","div.task-item",-1998171877),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$TextField$index.default,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),["Task ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task))].join(''),new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(task),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (task,s__29312__$2,temp__5804__auto__,selected_item_id,tasks){
return (function (p1__29310_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edited_tasks,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task),new cljs.core.Keyword(null,"description","description",-1428560544)], null),p1__29310_SHARP_.target.value);
});})(task,s__29312__$2,temp__5804__auto__,selected_item_id,tasks))
,new cljs.core.Keyword(null,"fullWidth","fullWidth",-1436357554),true,new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task)], null)),main$core$components$tasks_manager$task_manager_$_iter__29311(cljs.core.rest(s__29312__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(edited_tasks));
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No tasks available"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.components.tasks_manager.add_task,edited_tasks], null)], null)], null);
});
});

//# sourceMappingURL=main.core.components.tasks_manager.js.map
