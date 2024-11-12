goog.provide('main.core.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return main.core.db.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"login-check","login-check",-1574399346),(function (p__26228,p__26229){
var map__26230 = p__26228;
var map__26230__$1 = cljs.core.__destructure_map(map__26230);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26230__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26231 = p__26229;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26231,(0),null);
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26231,(1),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26231,(2),null);
var users = new cljs.core.Keyword(null,"user-list","user-list",346594331).cljs$core$IFn$_invoke$arity$1(db);
var matched_user = cljs.core.some((function (p1__26226_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p1__26226_SHARP_),username);
}),users);
var matcher_password = cljs.core.some((function (p1__26227_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p1__26227_SHARP_),username)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(p1__26227_SHARP_),password)));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-account","create-account",-1493050940),(function (p__26235,p__26236){
var map__26237 = p__26235;
var map__26237__$1 = cljs.core.__destructure_map(map__26237);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26237__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26238 = p__26236;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26238,(0),null);
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26238,(1),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26238,(2),null);
var password_confirm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26238,(3),null);
if(cljs.core.truth_(cljs.core.some((function (p1__26234_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p1__26234_SHARP_),username);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-current-page","set-current-page",-1047328569),(function (db,p__26241){
var vec__26242 = p__26241;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26242,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26242,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-login-status","set-login-status",-178040890),(function (db,p__26245){
var vec__26246 = p__26245;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26246,(0),null);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26246,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"is-logged-in","is-logged-in",-1183905804),status);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-edit-mode","set-edit-mode",-1860679669),(function (db,p__26249){
var vec__26250 = p__26249;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26250,(0),null);
var edit_mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26250,(1),null);
console.log("Setting edit mode to:",edit_mode);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),edit_mode);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-login-error-message","set-login-error-message",-1556975842),(function (db,p__26253){
var vec__26254 = p__26253;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26254,(0),null);
var log_in_error_message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26254,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"log-in-error-message","log-in-error-message",-1308208762),log_in_error_message);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-selected-plan-id","set-selected-plan-id",609375933),(function (db,p__26257){
var vec__26258 = p__26257;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26258,(0),null);
var plan_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26258,(1),null);
console.log("Setting selected plan id to:",plan_id);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-plan-id","selected-plan-id",1219649976),plan_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-item","delete-item",-1801247188),(function (db,p__26262){
var vec__26263 = p__26262;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26263,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26263,(1),null);
console.log("Deleting a item:");

console.log("Deleted item id:",item_id);

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"plan-list","plan-list",672205601),(function (items){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__26261_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26261_SHARP_),item_id);
}),items);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-item","add-item",715813891),(function (db){
console.log("Adding a new item");

var new_id = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"plan-list","plan-list",672205601).cljs$core$IFn$_invoke$arity$1(db)))?(1):(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"plan-list","plan-list",672205601).cljs$core$IFn$_invoke$arity$1(db))) + (1)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"plan-list","plan-list",672205601),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new_id,new cljs.core.Keyword(null,"titel","titel",1985670278),"new plan",new cljs.core.Keyword(null,"description","description",-1428560544),"new plan introduction"], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-plan","update-plan",215364405),(function (db,p__26267){
var vec__26268 = p__26267;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26268,(0),null);
var selected_item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26268,(1),null);
var edited_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26268,(2),null);
var edited_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26268,(3),null);
console.log("Updating a plan item:");

console.log("Updated item id:",selected_item_id);

console.log("Updated item title:",edited_title);

console.log("Updated item text:",edited_text);

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"plan-list","plan-list",672205601),(function (items){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26266_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26266_SHARP_),selected_item_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__26266_SHARP_,new cljs.core.Keyword(null,"titel","titel",1985670278),edited_title,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"description","description",-1428560544),edited_text], 0));
} else {
return p1__26266_SHARP_;
}
}),items);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-task-completion","toggle-task-completion",708129934),(function (db,p__26271){
var vec__26272 = p__26271;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26272,(0),null);
var plan_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26272,(1),null);
var task_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26272,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plan-list","plan-list",672205601)], null),(function (plans){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (plan){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plan),plan_id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(plan,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),(function (tasks){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (task){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task),task_id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(task,new cljs.core.Keyword(null,"is-completed","is-completed",-1839227074),cljs.core.not);
} else {
return task;
}
}),tasks);
}));
} else {
return plan;
}
}),plans);
}));
}));

//# sourceMappingURL=main.core.events.js.map
