goog.provide('main.core.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return main.core.db.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"login-check","login-check",-1574399346),(function (p__12956,p__12957){
var map__12958 = p__12956;
var map__12958__$1 = cljs.core.__destructure_map(map__12958);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12958__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12959 = p__12957;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12959,(0),null);
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12959,(1),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12959,(2),null);
var users = new cljs.core.Keyword(null,"user-list","user-list",346594331).cljs$core$IFn$_invoke$arity$1(db);
var matched_user = cljs.core.some((function (p1__12954_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p1__12954_SHARP_),username);
}),users);
var matcher_password = cljs.core.some((function (p1__12955_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p1__12955_SHARP_),username)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(p1__12955_SHARP_),password)));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-account","create-account",-1493050940),(function (p__12963,p__12964){
var map__12965 = p__12963;
var map__12965__$1 = cljs.core.__destructure_map(map__12965);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12965__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12966 = p__12964;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12966,(0),null);
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12966,(1),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12966,(2),null);
var password_confirm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12966,(3),null);
if(cljs.core.truth_(cljs.core.some((function (p1__12962_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p1__12962_SHARP_),username);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-current-page","set-current-page",-1047328569),(function (db,p__12969){
var vec__12970 = p__12969;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12970,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12970,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-login-status","set-login-status",-178040890),(function (db,p__12973){
var vec__12974 = p__12973;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12974,(0),null);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12974,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"is-logged-in","is-logged-in",-1183905804),status);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-login-error-message","set-login-error-message",-1556975842),(function (db,p__12977){
var vec__12978 = p__12977;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12978,(0),null);
var log_in_error_message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12978,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"log-in-error-message","log-in-error-message",-1308208762),log_in_error_message);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-item","delete-item",-1801247188),(function (db,p__12982){
var vec__12983 = p__12982;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12983,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12983,(1),null);
console.log("Deleting a item:");

console.log("Deleted item id:",item_id);

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"plan-list","plan-list",672205601),(function (items){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__12981_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__12981_SHARP_),item_id);
}),items);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-item","add-item",715813891),(function (db){
console.log("Adding a new item");

var new_id = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"plan-list","plan-list",672205601).cljs$core$IFn$_invoke$arity$1(db)))?(1):(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"plan-list","plan-list",672205601).cljs$core$IFn$_invoke$arity$1(db))) + (1)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"plan-list","plan-list",672205601),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new_id,new cljs.core.Keyword(null,"titel","titel",1985670278),"new plan",new cljs.core.Keyword(null,"text","text",-1790561697),"new plan introduction"], null));
}));

//# sourceMappingURL=main.core.events.js.map
