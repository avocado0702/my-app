goog.provide('main.core.components.plan_info');
var module$node_modules$$mui$material$node$Checkbox$index=shadow.js.require("module$node_modules$$mui$material$node$Checkbox$index", {});
var module$node_modules$$mui$material$node$TextField$index=shadow.js.require("module$node_modules$$mui$material$node$TextField$index", {});
var module$node_modules$$mui$material$node$FormControlLabel$index=shadow.js.require("module$node_modules$$mui$material$node$FormControlLabel$index", {});
var module$node_modules$$mui$material$node$Button$index=shadow.js.require("module$node_modules$$mui$material$node$Button$index", {});
var module$node_modules$$mui$material$node$ButtonGroup$index=shadow.js.require("module$node_modules$$mui$material$node$ButtonGroup$index", {});
main.core.components.plan_info.edit_btn = (function main$core$components$plan_info$edit_btn(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$Button$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-edit-mode","set-edit-mode",-1860679669),true], null));
})], null),"Edit"], null);
});
main.core.components.plan_info.save_btn = (function main$core$components$plan_info$save_btn(selected_item_id,edited_title,edited_text,edited_tasks){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$Button$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-plan","update-plan",215364405),cljs.core.deref(selected_item_id),cljs.core.deref(edited_title),cljs.core.deref(edited_text),cljs.core.deref(edited_tasks)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-edit-mode","set-edit-mode",-1860679669),false], null));
})], null),"Save"], null);
});
main.core.components.plan_info.back_btn = (function main$core$components$plan_info$back_btn(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$Button$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-edit-mode","set-edit-mode",-1860679669),false], null));
})], null),"Back"], null);
});
main.core.components.plan_info.plan_info = (function main$core$components$plan_info$plan_info(){
var edit_mode = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-edit-mode","get-edit-mode",1087048520)], null));
var selected_item_id = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-selected-plan-id","get-selected-plan-id",-730951835)], null));
var edited_title = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var edited_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var edited_tasks = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var last_item_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
var current_plan = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-plan-by-id","get-plan-by-id",533294233),cljs.core.deref(selected_item_id)], null)));
if(cljs.core.truth_((function (){var and__5000__auto__ = current_plan;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(last_item_id),cljs.core.deref(selected_item_id));
} else {
return and__5000__auto__;
}
})())){
cljs.core.reset_BANG_(last_item_id,cljs.core.deref(selected_item_id));

cljs.core.reset_BANG_(edited_title,new cljs.core.Keyword(null,"titel","titel",1985670278).cljs$core$IFn$_invoke$arity$1(current_plan));

cljs.core.reset_BANG_(edited_text,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(current_plan));
} else {
}

if(cljs.core.truth_(cljs.core.deref(selected_item_id))){
if(cljs.core.truth_(cljs.core.deref(edit_mode))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plan-info-edit","div.plan-info-edit",-1230648388),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Edit Plan"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column",new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plan-title","div.plan-title",763037549),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$TextField$index.default,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"label","label",1718410804),"Title",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(edited_title),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__29316_SHARP_){
return cljs.core.reset_BANG_(edited_title,p1__29316_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plan-info-content","div.plan-info-content",-1166214756),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$TextField$index.default,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"label","label",1718410804),"Content",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(edited_text),new cljs.core.Keyword(null,"multiline","multiline",-1084693234),true,new cljs.core.Keyword(null,"maxRows","maxRows",-392329376),(4),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__29317_SHARP_){
return cljs.core.reset_BANG_(edited_text,p1__29317_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.components.tasks_manager.task_manager,edited_tasks], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$ButtonGroup$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"text",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gap","gap",80255254),"16px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.components.plan_info.back_btn], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.components.plan_info.save_btn,selected_item_id,edited_title,edited_text,edited_tasks], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plan-info","div.plan-info",-1890090358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"titel","titel",1985670278).cljs$core$IFn$_invoke$arity$1(current_plan))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(current_plan))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tasks-info","div.tasks-info",1943238830),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Your tasks:"], null),((cljs.core.seq(new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(current_plan)))?(function (){var iter__5480__auto__ = (function main$core$components$plan_info$plan_info_$_iter__29318(s__29319){
return (new cljs.core.LazySeq(null,(function (){
var s__29319__$1 = s__29319;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29319__$1);
if(temp__5804__auto__){
var s__29319__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29319__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__29319__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__29321 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__29320 = (0);
while(true){
if((i__29320 < size__5479__auto__)){
var task = cljs.core._nth(c__5478__auto__,i__29320);
cljs.core.chunk_append(b__29321,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-item","div.task-item",-1998171877),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$FormControlLabel$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"control","control",1892578036),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$Checkbox$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"is-completed","is-completed",-1839227074).cljs$core$IFn$_invoke$arity$1(task),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__29320,task,c__5478__auto__,size__5479__auto__,b__29321,s__29319__$2,temp__5804__auto__,current_plan,edit_mode,selected_item_id,edited_title,edited_text,edited_tasks,last_item_id){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-task-completion","toggle-task-completion",708129934),cljs.core.deref(selected_item_id),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task)], null));
});})(i__29320,task,c__5478__auto__,size__5479__auto__,b__29321,s__29319__$2,temp__5804__auto__,current_plan,edit_mode,selected_item_id,edited_title,edited_text,edited_tasks,last_item_id))
], null)], null)),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(task)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task)], null)));

var G__29322 = (i__29320 + (1));
i__29320 = G__29322;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29321),main$core$components$plan_info$plan_info_$_iter__29318(cljs.core.chunk_rest(s__29319__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29321),null);
}
} else {
var task = cljs.core.first(s__29319__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-item","div.task-item",-1998171877),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$FormControlLabel$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"control","control",1892578036),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$Checkbox$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"is-completed","is-completed",-1839227074).cljs$core$IFn$_invoke$arity$1(task),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (task,s__29319__$2,temp__5804__auto__,current_plan,edit_mode,selected_item_id,edited_title,edited_text,edited_tasks,last_item_id){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-task-completion","toggle-task-completion",708129934),cljs.core.deref(selected_item_id),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task)], null));
});})(task,s__29319__$2,temp__5804__auto__,current_plan,edit_mode,selected_item_id,edited_title,edited_text,edited_tasks,last_item_id))
], null)], null)),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(task)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task)], null)),main$core$components$plan_info$plan_info_$_iter__29318(cljs.core.rest(s__29319__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(current_plan));
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No tasks available."], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.components.plan_info.edit_btn], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Select a plan to see details"], null);
}
});
});

//# sourceMappingURL=main.core.components.plan_info.js.map
