goog.provide('main.core.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return main.core.db.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"login-check","login-check",-1574399346),(function (p__27695,p__27696){
var map__27697 = p__27695;
var map__27697__$1 = cljs.core.__destructure_map(map__27697);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27697__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__27698 = p__27696;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27698,(0),null);
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27698,(1),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27698,(2),null);
var users = new cljs.core.Keyword(null,"user-list","user-list",346594331).cljs$core$IFn$_invoke$arity$1(db);
var matched_user = cljs.core.some((function (p1__27693_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p1__27693_SHARP_),username);
}),users);
var matcher_password = cljs.core.some((function (p1__27694_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p1__27694_SHARP_),username)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(p1__27694_SHARP_),password)));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-account","create-account",-1493050940),(function (p__27702,p__27703){
var map__27704 = p__27702;
var map__27704__$1 = cljs.core.__destructure_map(map__27704);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27704__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__27705 = p__27703;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27705,(0),null);
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27705,(1),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27705,(2),null);
var password_confirm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27705,(3),null);
if(cljs.core.truth_(cljs.core.some((function (p1__27701_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p1__27701_SHARP_),username);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-current-page","set-current-page",-1047328569),(function (db,p__27708){
var vec__27709 = p__27708;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27709,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27709,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-login-status","set-login-status",-178040890),(function (db,p__27712){
var vec__27713 = p__27712;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27713,(0),null);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27713,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"is-logged-in","is-logged-in",-1183905804),status);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-edit-mode","set-edit-mode",-1860679669),(function (db,p__27716){
var vec__27717 = p__27716;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27717,(0),null);
var edit_mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27717,(1),null);
console.log("Setting edit mode to:",edit_mode);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),edit_mode);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-login-error-message","set-login-error-message",-1556975842),(function (db,p__27720){
var vec__27721 = p__27720;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27721,(0),null);
var log_in_error_message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27721,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"log-in-error-message","log-in-error-message",-1308208762),log_in_error_message);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-selected-plan-id","set-selected-plan-id",609375933),(function (db,p__27724){
var vec__27725 = p__27724;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27725,(0),null);
var plan_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27725,(1),null);
console.log("Setting selected plan id to:",plan_id);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-plan-id","selected-plan-id",1219649976),plan_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-item","delete-item",-1801247188),(function (db,p__27729){
var vec__27730 = p__27729;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27730,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27730,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"plan-list","plan-list",672205601),(function (items){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__27728_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__27728_SHARP_),item_id);
}),items);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-item","add-item",715813891),(function (db){
console.log("Adding a new item");

var new_id = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"plan-list","plan-list",672205601).cljs$core$IFn$_invoke$arity$1(db)))?(1):(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"plan-list","plan-list",672205601).cljs$core$IFn$_invoke$arity$1(db))) + (1)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"plan-list","plan-list",672205601),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new_id,new cljs.core.Keyword(null,"titel","titel",1985670278),"new plan",new cljs.core.Keyword(null,"description","description",-1428560544),"new plan introduction"], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-plan","update-plan",215364405),(function (db,p__27734){
var vec__27735 = p__27734;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27735,(0),null);
var selected_item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27735,(1),null);
var edited_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27735,(2),null);
var edited_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27735,(3),null);
var edited_tasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27735,(4),null);
console.log("Updating a plan item:");

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"plan-list","plan-list",672205601),(function (items){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27733_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__27733_SHARP_),selected_item_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__27733_SHARP_,new cljs.core.Keyword(null,"titel","titel",1985670278),edited_title,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"description","description",-1428560544),edited_text,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),edited_tasks], 0));
} else {
return p1__27733_SHARP_;
}
}),items);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-edited-tasks","set-edited-tasks",-2071349019),(function (db,p__27738){
var vec__27739 = p__27738;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27739,(0),null);
var tasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27739,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"edited-tasks","edited-tasks",-1118231165),tasks);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-task-description","update-task-description",3715516),(function (db,p__27742){
var vec__27743 = p__27742;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27743,(0),null);
var task_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27743,(1),null);
var new_description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27743,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"edited-tasks","edited-tasks",-1118231165),(function (tasks){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (task){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task),task_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(task,new cljs.core.Keyword(null,"description","description",-1428560544),new_description);
} else {
return task;
}
}),tasks);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-default-task","add-default-task",-1389105811),(function (db,p__27746){
var vec__27747 = p__27746;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27747,(0),null);
var new_task = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27747,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"edited-tasks","edited-tasks",-1118231165),cljs.core.conj,new_task);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-edited-tasks","reset-edited-tasks",-1524896779),(function (db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"edited-tasks","edited-tasks",-1118231165),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-task-completion","toggle-task-completion",708129934),(function (db,p__27750){
var vec__27751 = p__27750;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27751,(0),null);
var plan_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27751,(1),null);
var task_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27751,(2),null);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-task","delete-task",-1353277694),(function (db,p__27755){
var vec__27756 = p__27755;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27756,(0),null);
var plan_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27756,(1),null);
var task_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27756,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plan-list","plan-list",672205601)], null),(function (plans){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (plan){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plan),plan_id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(plan,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__27754_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__27754_SHARP_),task_id);
})));
} else {
return plan;
}
}),plans);
}));
}));

//# sourceMappingURL=main.core.events.js.map
