goog.provide('main.core.components.plan_info');
var module$node_modules$$mui$material$node$Checkbox$index=shadow.js.require("module$node_modules$$mui$material$node$Checkbox$index", {});
var module$node_modules$$mui$material$node$FormControlLabel$index=shadow.js.require("module$node_modules$$mui$material$node$FormControlLabel$index", {});
var module$node_modules$$mui$material$node$TextField$index=shadow.js.require("module$node_modules$$mui$material$node$TextField$index", {});
var module$node_modules$$mui$material$node$Button$index=shadow.js.require("module$node_modules$$mui$material$node$Button$index", {});
main.core.components.plan_info.edit_btn = (function main$core$components$plan_info$edit_btn(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-edit-mode","set-edit-mode",-1860679669),true], null));
})], null),"Edit"], null);
});
main.core.components.plan_info.save_btn = (function main$core$components$plan_info$save_btn(selected_item_id,edited_title,edited_text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-plan","update-plan",215364405),cljs.core.deref(selected_item_id),cljs.core.deref(edited_title),cljs.core.deref(edited_text)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-edit-mode","set-edit-mode",-1860679669),false], null));
})], null),"Save"], null);
});
main.core.components.plan_info.plan_info = (function main$core$components$plan_info$plan_info(){
var edit_mode = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-edit-mode","get-edit-mode",1087048520)], null));
var selected_item_id = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-selected-plan-id","get-selected-plan-id",-730951835)], null));
var edited_title = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var edited_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plan-info-edit","div.plan-info-edit",-1230648388),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Edit Plan"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Title: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(edited_title),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27648_SHARP_){
return cljs.core.reset_BANG_(edited_title,p1__27648_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Content: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(edited_text),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27649_SHARP_){
return cljs.core.reset_BANG_(edited_text,p1__27649_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Tasks: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core.seq(new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(current_plan)))?(function (){var iter__5480__auto__ = (function main$core$components$plan_info$plan_info_$_iter__27650(s__27651){
return (new cljs.core.LazySeq(null,(function (){
var s__27651__$1 = s__27651;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27651__$1);
if(temp__5804__auto__){
var s__27651__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27651__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__27651__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__27653 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__27652 = (0);
while(true){
if((i__27652 < size__5479__auto__)){
var task = cljs.core._nth(c__5478__auto__,i__27652);
cljs.core.chunk_append(b__27653,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-item","div.task-item",-1998171877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(task))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task)], null)));

var G__27658 = (i__27652 + (1));
i__27652 = G__27658;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27653),main$core$components$plan_info$plan_info_$_iter__27650(cljs.core.chunk_rest(s__27651__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27653),null);
}
} else {
var task = cljs.core.first(s__27651__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-item","div.task-item",-1998171877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(task))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task)], null)),main$core$components$plan_info$plan_info_$_iter__27650(cljs.core.rest(s__27651__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(current_plan));
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No tasks"], null))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.components.plan_info.save_btn,selected_item_id,edited_title,edited_text], null)], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plan-info","div.plan-info",-1890090358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"titel","titel",1985670278).cljs$core$IFn$_invoke$arity$1(current_plan))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(current_plan))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tasks-info","div.tasks-info",1943238830),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Your tasks:"], null),((cljs.core.seq(new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(current_plan)))?(function (){var iter__5480__auto__ = (function main$core$components$plan_info$plan_info_$_iter__27654(s__27655){
return (new cljs.core.LazySeq(null,(function (){
var s__27655__$1 = s__27655;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27655__$1);
if(temp__5804__auto__){
var s__27655__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27655__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__27655__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__27657 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__27656 = (0);
while(true){
if((i__27656 < size__5479__auto__)){
var task = cljs.core._nth(c__5478__auto__,i__27656);
cljs.core.chunk_append(b__27657,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-item","div.task-item",-1998171877),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$FormControlLabel$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"control","control",1892578036),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$Checkbox$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"is-completed","is-completed",-1839227074).cljs$core$IFn$_invoke$arity$1(task),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__27656,task,c__5478__auto__,size__5479__auto__,b__27657,s__27655__$2,temp__5804__auto__,current_plan,edit_mode,selected_item_id,edited_title,edited_text,last_item_id){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-task-completion","toggle-task-completion",708129934),cljs.core.deref(selected_item_id),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task)], null));
});})(i__27656,task,c__5478__auto__,size__5479__auto__,b__27657,s__27655__$2,temp__5804__auto__,current_plan,edit_mode,selected_item_id,edited_title,edited_text,last_item_id))
], null)], null)),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(task)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task)], null)));

var G__27659 = (i__27656 + (1));
i__27656 = G__27659;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27657),main$core$components$plan_info$plan_info_$_iter__27654(cljs.core.chunk_rest(s__27655__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27657),null);
}
} else {
var task = cljs.core.first(s__27655__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-item","div.task-item",-1998171877),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$FormControlLabel$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"control","control",1892578036),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$Checkbox$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"is-completed","is-completed",-1839227074).cljs$core$IFn$_invoke$arity$1(task),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (task,s__27655__$2,temp__5804__auto__,current_plan,edit_mode,selected_item_id,edited_title,edited_text,last_item_id){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-task-completion","toggle-task-completion",708129934),cljs.core.deref(selected_item_id),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task)], null));
});})(task,s__27655__$2,temp__5804__auto__,current_plan,edit_mode,selected_item_id,edited_title,edited_text,last_item_id))
], null)], null)),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(task)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task)], null)),main$core$components$plan_info$plan_info_$_iter__27654(cljs.core.rest(s__27655__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(current_plan));
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No tasks available."], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.components.plan_info.edit_btn,edit_mode], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Select a plan to see details"], null);
}
});
});

//# sourceMappingURL=main.core.components.plan_info.js.map
