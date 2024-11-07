goog.provide('main.core.pages.components.plan_list');
main.core.pages.components.plan_list.plan_list = (function main$core$pages$components$plan_list$plan_list(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"hallo "], null);
});
main.core.pages.components.plan_list.delete_btn = (function main$core$pages$components$plan_list$delete_btn(item_id){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-item","delete-item",-1801247188),item_id], null));
})], null),"delete"], null);
});
main.core.pages.components.plan_list.list_element = (function main$core$pages$components$plan_list$list_element(item_id,item_text,on_delete){
var input_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(item_text);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-element","div.list-element",-268935489),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"enter a plan",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(input_value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23247_SHARP_){
return cljs.core.reset_BANG_(input_value,p1__23247_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.pages.components.plan_list.delete_btn,item_id], null)], null);
});
});

//# sourceMappingURL=main.core.pages.components.plan_list.js.map
