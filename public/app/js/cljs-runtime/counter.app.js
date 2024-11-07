goog.provide('counter.app');
counter.app.init = (function counter$app$init(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["The app has started!"], 0));
});
counter.app.counting_button = (function counter$app$counting_button(txt){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function (txt__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.green","button.green",-1328299291),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.inc);
})], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(txt__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))].join('')], null);
});
});
counter.app.complex_component = (function counter$app$complex_component(a,b,c){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["I mounted"], 0));
}),new cljs.core.Keyword(null,"display-name","display-name",694513143),"complex-component",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (a__$1,b__$1,c__$1){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),c__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),a__$1], null)," ",b__$1], null);
})], null));
});
counter.app.username_field = (function counter$app$username_field(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Username"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"username"], null)], null)], null);
});
counter.app.password_field = (function counter$app$password_field(min_length,max_length,required_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"name","name",1843675177),"password",new cljs.core.Keyword(null,"min-length","min-length",-325792315),min_length,new cljs.core.Keyword(null,"max-length","max-length",-254826109),max_length,new cljs.core.Keyword(null,"required","required",1807647006),required_QMARK_], null)], null)], null);
});
counter.app.contact_form = (function counter$app$contact_form(f){
var s = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"first-name","first-name",-1559982131),f], null));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(s)], 0));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"firstname","firstname",1659984849),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"first-name","first-name",-1559982131).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(s,cljs.core.assoc,new cljs.core.Keyword(null,"first-name","first-name",-1559982131),e.target.value);
})], null)], null)], null);
});
});
counter.app.Application = (function counter$app$Application(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.app.contact_form], null)], null);
});
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.app.Application], null),document.getElementById("app"));

//# sourceMappingURL=counter.app.js.map
