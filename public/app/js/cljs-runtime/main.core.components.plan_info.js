goog.provide('main.core.components.plan_info');
main.core.components.plan_info.edit_btn = (function main$core$components$plan_info$edit_btn(edit_mode){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(edit_mode,true);

return console.log("EDIT MODE",cljs.core.deref(edit_mode));
})], null),"edit"], null);
});
main.core.components.plan_info.save_btn = (function main$core$components$plan_info$save_btn(edit_mode){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(edit_mode,false);
})], null),"save"], null);
});
main.core.components.plan_info.plan_info = (function main$core$components$plan_info$plan_info(selected_item,edit_mode){
var edited_title = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var edited_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
console.log("Rendering plan-info with edit-mode:",cljs.core.deref(edit_mode));

if(cljs.core.truth_(selected_item)){
if(cljs.core.truth_(cljs.core.deref(edit_mode))){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plan-info-edit","div.plan-info-edit",-1230648388),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Edit Plan"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Title: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(edited_title),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12414_SHARP_){
return cljs.core.reset_BANG_(edited_title,p1__12414_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Content: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(edited_text),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12415_SHARP_){
return cljs.core.reset_BANG_(edited_text,p1__12415_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.components.plan_info.save_btn,edit_mode], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plan-info","div.plan-info",-1890090358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),["Plan Title: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"titel","titel",1985670278).cljs$core$IFn$_invoke$arity$1(selected_item))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Plan Content: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(selected_item))].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.components.plan_info.edit_btn,edit_mode,edited_title,edited_text,selected_item], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Select a plan to see details"], null);
}
});

//# sourceMappingURL=main.core.components.plan_info.js.map
