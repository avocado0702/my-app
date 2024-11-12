goog.provide('main.core.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return main.core.db.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"login-check","login-check",-1574399346),(function (p__26072,p__26073){
var map__26074 = p__26072;
var map__26074__$1 = cljs.core.__destructure_map(map__26074);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26074__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26075 = p__26073;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26075,(0),null);
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26075,(1),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26075,(2),null);
var users = new cljs.core.Keyword(null,"user-list","user-list",346594331).cljs$core$IFn$_invoke$arity$1(db);
var matched_user = cljs.core.some((function (p1__26070_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p1__26070_SHARP_),username);
}),users);
var matcher_password = cljs.core.some((function (p1__26071_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p1__26071_SHARP_),username)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(p1__26071_SHARP_),password)));
}),users);
if(cljs.core.truth_(matcher_password)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"is-logged-in","is-logged-in",-1183905804),true),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-page","set-current-page",-1047328569),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null);
} else {
if(cljs.core.truth_(matched_user)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"log-in-error-message","log-in-error-message",-1308208762),"Password is not correct!")], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"log-in-error-message","log-in-error-message",-1308208762),"User does not exist!")], null);

}
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-account","create-account",-1493050940),(function (p__26079,p__26080){
var map__26081 = p__26079;
var map__26081__$1 = cljs.core.__destructure_map(map__26081);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26081__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26082 = p__26080;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26082,(0),null);
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26082,(1),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26082,(2),null);
var password_confirm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26082,(3),null);
if(cljs.core.truth_(cljs.core.some((function (p1__26078_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p1__26078_SHARP_),username);
}),new cljs.core.Keyword(null,"user-list","user-list",346594331).cljs$core$IFn$_invoke$arity$1(db)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"register-error-message","register-error-message",1588183190),"Username already exists!")], null);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(password,password_confirm)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"register-error-message","register-error-message",1588183190),"Password does not match!")], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"user-list","user-list",346594331),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"password","password",417022471),password], null)),new cljs.core.Keyword(null,"register-error-message","register-error-message",1588183190)," "),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-page","set-current-page",-1047328569),new cljs.core.Keyword(null,"login","login",55217519)], null)], null);

}
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-current-page","set-current-page",-1047328569),(function (db,p__26085){
var vec__26086 = p__26085;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26086,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26086,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-login-status","set-login-status",-178040890),(function (db,p__26089){
var vec__26090 = p__26089;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26090,(0),null);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26090,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"is-logged-in","is-logged-in",-1183905804),status);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-edit-mode","set-edit-mode",-1860679669),(function (db,p__26093){
var vec__26094 = p__26093;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26094,(0),null);
var edit_mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26094,(1),null);
console.log("Setting edit mode to:",edit_mode);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),edit_mode);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-login-error-message","set-login-error-message",-1556975842),(function (db,p__26097){
var vec__26098 = p__26097;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26098,(0),null);
var log_in_error_message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26098,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"log-in-error-message","log-in-error-message",-1308208762),log_in_error_message);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-selected-plan-id","set-selected-plan-id",609375933),(function (db,p__26101){
var vec__26102 = p__26101;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26102,(0),null);
var plan_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26102,(1),null);
console.log("Setting selected plan id to:",plan_id);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-plan-id","selected-plan-id",1219649976),plan_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-item","delete-item",-1801247188),(function (db,p__26106){
var vec__26107 = p__26106;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26107,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26107,(1),null);
console.log("Deleting a item:");

console.log("Deleted item id:",item_id);

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"plan-list","plan-list",672205601),(function (items){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__26105_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26105_SHARP_),item_id);
}),items);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-item","add-item",715813891),(function (db){
console.log("Adding a new item");

var new_id = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"plan-list","plan-list",672205601).cljs$core$IFn$_invoke$arity$1(db)))?(1):(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"plan-list","plan-list",672205601).cljs$core$IFn$_invoke$arity$1(db))) + (1)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"plan-list","plan-list",672205601),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new_id,new cljs.core.Keyword(null,"titel","titel",1985670278),"new plan",new cljs.core.Keyword(null,"description","description",-1428560544),"new plan introduction"], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-plan","update-plan",215364405),(function (db,p__26111){
var vec__26112 = p__26111;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26112,(0),null);
var selected_item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26112,(1),null);
var edited_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26112,(2),null);
var edited_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26112,(3),null);
console.log("Updating a plan item:");

console.log("Updated item id:",selected_item_id);

console.log("Updated item title:",edited_title);

console.log("Updated item text:",edited_text);

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"plan-list","plan-list",672205601),(function (items){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26110_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26110_SHARP_),selected_item_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__26110_SHARP_,new cljs.core.Keyword(null,"titel","titel",1985670278),edited_title,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"description","description",-1428560544),edited_text], 0));
} else {
return p1__26110_SHARP_;
}
}),items);
}));
}));

//# sourceMappingURL=main.core.events.js.map
