goog.provide('main.core.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return main.core.db.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"login-check","login-check",-1574399346),(function (p__28613,p__28614){
var map__28615 = p__28613;
var map__28615__$1 = cljs.core.__destructure_map(map__28615);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28615__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28616 = p__28614;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28616,(0),null);
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28616,(1),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28616,(2),null);
var users = new cljs.core.Keyword(null,"user-list","user-list",346594331).cljs$core$IFn$_invoke$arity$1(db);
var matched_user = cljs.core.some((function (p1__28611_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p1__28611_SHARP_),username);
}),users);
var matcher_password = cljs.core.some((function (p1__28612_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p1__28612_SHARP_),username)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(p1__28612_SHARP_),password)));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-account","create-account",-1493050940),(function (p__28620,p__28621){
var map__28622 = p__28620;
var map__28622__$1 = cljs.core.__destructure_map(map__28622);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28622__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28623 = p__28621;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28623,(0),null);
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28623,(1),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28623,(2),null);
var password_confirm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28623,(3),null);
if(cljs.core.truth_(cljs.core.some((function (p1__28619_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p1__28619_SHARP_),username);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-current-page","set-current-page",-1047328569),(function (db,p__28626){
var vec__28627 = p__28626;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28627,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28627,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-login-status","set-login-status",-178040890),(function (db,p__28630){
var vec__28631 = p__28630;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28631,(0),null);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28631,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"is-logged-in","is-logged-in",-1183905804),status);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-edit-mode","set-edit-mode",-1860679669),(function (db,p__28634){
var vec__28635 = p__28634;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28635,(0),null);
var edit_mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28635,(1),null);
console.log("Setting edit mode to:",edit_mode);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),edit_mode);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-login-error-message","set-login-error-message",-1556975842),(function (db,p__28638){
var vec__28639 = p__28638;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28639,(0),null);
var log_in_error_message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28639,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"log-in-error-message","log-in-error-message",-1308208762),log_in_error_message);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-selected-plan-id","set-selected-plan-id",609375933),(function (db,p__28642){
var vec__28643 = p__28642;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28643,(0),null);
var plan_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28643,(1),null);
console.log("Setting selected plan id to:",plan_id);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-plan-id","selected-plan-id",1219649976),plan_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-item","delete-item",-1801247188),(function (db,p__28647){
var vec__28648 = p__28647;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28648,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28648,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"plan-list","plan-list",672205601),(function (items){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__28646_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__28646_SHARP_),item_id);
}),items);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-item","add-item",715813891),(function (db){
console.log("Adding a new item");

var new_id = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"plan-list","plan-list",672205601).cljs$core$IFn$_invoke$arity$1(db)))?(1):(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"plan-list","plan-list",672205601).cljs$core$IFn$_invoke$arity$1(db))) + (1)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"plan-list","plan-list",672205601),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new_id,new cljs.core.Keyword(null,"titel","titel",1985670278),"new plan",new cljs.core.Keyword(null,"description","description",-1428560544),"new plan introduction"], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-plan","update-plan",215364405),(function (db,p__28652){
var vec__28653 = p__28652;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28653,(0),null);
var selected_item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28653,(1),null);
var edited_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28653,(2),null);
var edited_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28653,(3),null);
var edited_tasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28653,(4),null);
console.log("Updating a plan item:");

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"plan-list","plan-list",672205601),(function (items){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28651_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__28651_SHARP_),selected_item_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__28651_SHARP_,new cljs.core.Keyword(null,"titel","titel",1985670278),edited_title,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"description","description",-1428560544),edited_text,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),edited_tasks], 0));
} else {
return p1__28651_SHARP_;
}
}),items);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-task-completion","toggle-task-completion",708129934),(function (db,p__28656){
var vec__28657 = p__28656;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28657,(0),null);
var plan_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28657,(1),null);
var task_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28657,(2),null);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-task","add-task",-913525549),(function (db,p__28660){
var vec__28661 = p__28660;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28661,(0),null);
var plan_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28661,(1),null);
var task_description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28661,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plan-list","plan-list",672205601)], null),(function (plans){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (plan){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plan),plan_id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(plan,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(cljs.core.count(new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(plan)) + (1)),new cljs.core.Keyword(null,"description","description",-1428560544),task_description,new cljs.core.Keyword(null,"is-completed","is-completed",-1839227074),false], null));
} else {
return plan;
}
}),plans);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-task","delete-task",-1353277694),(function (db,p__28665){
var vec__28666 = p__28665;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28666,(0),null);
var plan_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28666,(1),null);
var task_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28666,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plan-list","plan-list",672205601)], null),(function (plans){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (plan){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plan),plan_id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(plan,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__28664_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__28664_SHARP_),task_id);
})));
} else {
return plan;
}
}),plans);
}));
}));

//# sourceMappingURL=main.core.events.js.map
