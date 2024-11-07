goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15658 = (function (f,blockable,meta15659){
this.f = f;
this.blockable = blockable;
this.meta15659 = meta15659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15660,meta15659__$1){
var self__ = this;
var _15660__$1 = this;
return (new cljs.core.async.t_cljs$core$async15658(self__.f,self__.blockable,meta15659__$1));
}));

(cljs.core.async.t_cljs$core$async15658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15660){
var self__ = this;
var _15660__$1 = this;
return self__.meta15659;
}));

(cljs.core.async.t_cljs$core$async15658.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15658.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15658.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15658.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15658.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15659","meta15659",-1090187148,null)], null);
}));

(cljs.core.async.t_cljs$core$async15658.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15658");

(cljs.core.async.t_cljs$core$async15658.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15658");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15658.
 */
cljs.core.async.__GT_t_cljs$core$async15658 = (function cljs$core$async$__GT_t_cljs$core$async15658(f,blockable,meta15659){
return (new cljs.core.async.t_cljs$core$async15658(f,blockable,meta15659));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15656 = arguments.length;
switch (G__15656) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async15658(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15690 = arguments.length;
switch (G__15690) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15698 = arguments.length;
switch (G__15698) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15704 = arguments.length;
switch (G__15704) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19508 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19508) : fn1.call(null, val_19508));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19508) : fn1.call(null, val_19508));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15708 = arguments.length;
switch (G__15708) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___19514 = n;
var x_19515 = (0);
while(true){
if((x_19515 < n__5593__auto___19514)){
(a[x_19515] = x_19515);

var G__19516 = (x_19515 + (1));
x_19515 = G__19516;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15727 = (function (flag,meta15728){
this.flag = flag;
this.meta15728 = meta15728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15729,meta15728__$1){
var self__ = this;
var _15729__$1 = this;
return (new cljs.core.async.t_cljs$core$async15727(self__.flag,meta15728__$1));
}));

(cljs.core.async.t_cljs$core$async15727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15729){
var self__ = this;
var _15729__$1 = this;
return self__.meta15728;
}));

(cljs.core.async.t_cljs$core$async15727.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15727.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15727.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15727.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15727.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15728","meta15728",-709561505,null)], null);
}));

(cljs.core.async.t_cljs$core$async15727.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15727.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15727");

(cljs.core.async.t_cljs$core$async15727.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15727");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15727.
 */
cljs.core.async.__GT_t_cljs$core$async15727 = (function cljs$core$async$__GT_t_cljs$core$async15727(flag,meta15728){
return (new cljs.core.async.t_cljs$core$async15727(flag,meta15728));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15727(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15745 = (function (flag,cb,meta15746){
this.flag = flag;
this.cb = cb;
this.meta15746 = meta15746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15747,meta15746__$1){
var self__ = this;
var _15747__$1 = this;
return (new cljs.core.async.t_cljs$core$async15745(self__.flag,self__.cb,meta15746__$1));
}));

(cljs.core.async.t_cljs$core$async15745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15747){
var self__ = this;
var _15747__$1 = this;
return self__.meta15746;
}));

(cljs.core.async.t_cljs$core$async15745.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15745.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15745.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15745.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15745.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15746","meta15746",-486357393,null)], null);
}));

(cljs.core.async.t_cljs$core$async15745.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15745");

(cljs.core.async.t_cljs$core$async15745.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15745");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15745.
 */
cljs.core.async.__GT_t_cljs$core$async15745 = (function cljs$core$async$__GT_t_cljs$core$async15745(flag,cb,meta15746){
return (new cljs.core.async.t_cljs$core$async15745(flag,cb,meta15746));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15745(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15772_SHARP_){
var G__15782 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15772_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15782) : fret.call(null, G__15782));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15773_SHARP_){
var G__15786 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15773_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15786) : fret.call(null, G__15786));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19536 = (i + (1));
i = G__19536;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19545 = arguments.length;
var i__5727__auto___19546 = (0);
while(true){
if((i__5727__auto___19546 < len__5726__auto___19545)){
args__5732__auto__.push((arguments[i__5727__auto___19546]));

var G__19547 = (i__5727__auto___19546 + (1));
i__5727__auto___19546 = G__19547;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15812){
var map__15815 = p__15812;
var map__15815__$1 = cljs.core.__destructure_map(map__15815);
var opts = map__15815__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15803){
var G__15804 = cljs.core.first(seq15803);
var seq15803__$1 = cljs.core.next(seq15803);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15804,seq15803__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15838 = arguments.length;
switch (G__15838) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15501__auto___19562 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15502__auto__ = (function (){var switch__13962__auto__ = (function (state_15917){
var state_val_15918 = (state_15917[(1)]);
if((state_val_15918 === (7))){
var inst_15910 = (state_15917[(2)]);
var state_15917__$1 = state_15917;
var statearr_15934_19565 = state_15917__$1;
(statearr_15934_19565[(2)] = inst_15910);

(statearr_15934_19565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15918 === (1))){
var state_15917__$1 = state_15917;
var statearr_15948_19569 = state_15917__$1;
(statearr_15948_19569[(2)] = null);

(statearr_15948_19569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15918 === (4))){
var inst_15874 = (state_15917[(7)]);
var inst_15874__$1 = (state_15917[(2)]);
var inst_15887 = (inst_15874__$1 == null);
var state_15917__$1 = (function (){var statearr_15958 = state_15917;
(statearr_15958[(7)] = inst_15874__$1);

return statearr_15958;
})();
if(cljs.core.truth_(inst_15887)){
var statearr_15959_19575 = state_15917__$1;
(statearr_15959_19575[(1)] = (5));

} else {
var statearr_15961_19577 = state_15917__$1;
(statearr_15961_19577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15918 === (13))){
var state_15917__$1 = state_15917;
var statearr_15969_19578 = state_15917__$1;
(statearr_15969_19578[(2)] = null);

(statearr_15969_19578[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15918 === (6))){
var inst_15874 = (state_15917[(7)]);
var state_15917__$1 = state_15917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15917__$1,(11),to,inst_15874);
} else {
if((state_val_15918 === (3))){
var inst_15915 = (state_15917[(2)]);
var state_15917__$1 = state_15917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15917__$1,inst_15915);
} else {
if((state_val_15918 === (12))){
var state_15917__$1 = state_15917;
var statearr_15989_19579 = state_15917__$1;
(statearr_15989_19579[(2)] = null);

(statearr_15989_19579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15918 === (2))){
var state_15917__$1 = state_15917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15917__$1,(4),from);
} else {
if((state_val_15918 === (11))){
var inst_15898 = (state_15917[(2)]);
var state_15917__$1 = state_15917;
if(cljs.core.truth_(inst_15898)){
var statearr_15996_19580 = state_15917__$1;
(statearr_15996_19580[(1)] = (12));

} else {
var statearr_16003_19581 = state_15917__$1;
(statearr_16003_19581[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15918 === (9))){
var state_15917__$1 = state_15917;
var statearr_16008_19582 = state_15917__$1;
(statearr_16008_19582[(2)] = null);

(statearr_16008_19582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15918 === (5))){
var state_15917__$1 = state_15917;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16016_19585 = state_15917__$1;
(statearr_16016_19585[(1)] = (8));

} else {
var statearr_16021_19586 = state_15917__$1;
(statearr_16021_19586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15918 === (14))){
var inst_15908 = (state_15917[(2)]);
var state_15917__$1 = state_15917;
var statearr_16028_19588 = state_15917__$1;
(statearr_16028_19588[(2)] = inst_15908);

(statearr_16028_19588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15918 === (10))){
var inst_15895 = (state_15917[(2)]);
var state_15917__$1 = state_15917;
var statearr_16033_19590 = state_15917__$1;
(statearr_16033_19590[(2)] = inst_15895);

(statearr_16033_19590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15918 === (8))){
var inst_15890 = cljs.core.async.close_BANG_(to);
var state_15917__$1 = state_15917;
var statearr_16034_19591 = state_15917__$1;
(statearr_16034_19591[(2)] = inst_15890);

(statearr_16034_19591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13963__auto__ = null;
var cljs$core$async$state_machine__13963__auto____0 = (function (){
var statearr_16046 = [null,null,null,null,null,null,null,null];
(statearr_16046[(0)] = cljs$core$async$state_machine__13963__auto__);

(statearr_16046[(1)] = (1));

return statearr_16046;
});
var cljs$core$async$state_machine__13963__auto____1 = (function (state_15917){
while(true){
var ret_value__13964__auto__ = (function (){try{while(true){
var result__13965__auto__ = switch__13962__auto__(state_15917);
if(cljs.core.keyword_identical_QMARK_(result__13965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13965__auto__;
}
break;
}
}catch (e16051){var ex__13966__auto__ = e16051;
var statearr_16052_19592 = state_15917;
(statearr_16052_19592[(2)] = ex__13966__auto__);


if(cljs.core.seq((state_15917[(4)]))){
var statearr_16061_19593 = state_15917;
(statearr_16061_19593[(1)] = cljs.core.first((state_15917[(4)])));

} else {
throw ex__13966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19594 = state_15917;
state_15917 = G__19594;
continue;
} else {
return ret_value__13964__auto__;
}
break;
}
});
cljs$core$async$state_machine__13963__auto__ = function(state_15917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13963__auto____1.call(this,state_15917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13963__auto____0;
cljs$core$async$state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13963__auto____1;
return cljs$core$async$state_machine__13963__auto__;
})()
})();
var state__15503__auto__ = (function (){var statearr_16080 = f__15502__auto__();
(statearr_16080[(6)] = c__15501__auto___19562);

return statearr_16080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15503__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__16103){
var vec__16105 = p__16103;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16105,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16105,(1),null);
var job = vec__16105;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15501__auto___19597 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15502__auto__ = (function (){var switch__13962__auto__ = (function (state_16113){
var state_val_16114 = (state_16113[(1)]);
if((state_val_16114 === (1))){
var state_16113__$1 = state_16113;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16113__$1,(2),res,v);
} else {
if((state_val_16114 === (2))){
var inst_16110 = (state_16113[(2)]);
var inst_16111 = cljs.core.async.close_BANG_(res);
var state_16113__$1 = (function (){var statearr_16119 = state_16113;
(statearr_16119[(7)] = inst_16110);

return statearr_16119;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16113__$1,inst_16111);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____0 = (function (){
var statearr_16131 = [null,null,null,null,null,null,null,null];
(statearr_16131[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__);

(statearr_16131[(1)] = (1));

return statearr_16131;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____1 = (function (state_16113){
while(true){
var ret_value__13964__auto__ = (function (){try{while(true){
var result__13965__auto__ = switch__13962__auto__(state_16113);
if(cljs.core.keyword_identical_QMARK_(result__13965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13965__auto__;
}
break;
}
}catch (e16142){var ex__13966__auto__ = e16142;
var statearr_16145_19604 = state_16113;
(statearr_16145_19604[(2)] = ex__13966__auto__);


if(cljs.core.seq((state_16113[(4)]))){
var statearr_16152_19605 = state_16113;
(statearr_16152_19605[(1)] = cljs.core.first((state_16113[(4)])));

} else {
throw ex__13966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19607 = state_16113;
state_16113 = G__19607;
continue;
} else {
return ret_value__13964__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__ = function(state_16113){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____1.call(this,state_16113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__;
})()
})();
var state__15503__auto__ = (function (){var statearr_16173 = f__15502__auto__();
(statearr_16173[(6)] = c__15501__auto___19597);

return statearr_16173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15503__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__16197){
var vec__16204 = p__16197;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16204,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16204,(1),null);
var job = vec__16204;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___19621 = n;
var __19622 = (0);
while(true){
if((__19622 < n__5593__auto___19621)){
var G__16220_19623 = type;
var G__16220_19624__$1 = (((G__16220_19623 instanceof cljs.core.Keyword))?G__16220_19623.fqn:null);
switch (G__16220_19624__$1) {
case "compute":
var c__15501__auto___19626 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19622,c__15501__auto___19626,G__16220_19623,G__16220_19624__$1,n__5593__auto___19621,jobs,results,process__$1,async){
return (function (){
var f__15502__auto__ = (function (){var switch__13962__auto__ = ((function (__19622,c__15501__auto___19626,G__16220_19623,G__16220_19624__$1,n__5593__auto___19621,jobs,results,process__$1,async){
return (function (state_16245){
var state_val_16246 = (state_16245[(1)]);
if((state_val_16246 === (1))){
var state_16245__$1 = state_16245;
var statearr_16263_19631 = state_16245__$1;
(statearr_16263_19631[(2)] = null);

(statearr_16263_19631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16246 === (2))){
var state_16245__$1 = state_16245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16245__$1,(4),jobs);
} else {
if((state_val_16246 === (3))){
var inst_16243 = (state_16245[(2)]);
var state_16245__$1 = state_16245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16245__$1,inst_16243);
} else {
if((state_val_16246 === (4))){
var inst_16231 = (state_16245[(2)]);
var inst_16232 = process__$1(inst_16231);
var state_16245__$1 = state_16245;
if(cljs.core.truth_(inst_16232)){
var statearr_16269_19633 = state_16245__$1;
(statearr_16269_19633[(1)] = (5));

} else {
var statearr_16270_19635 = state_16245__$1;
(statearr_16270_19635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16246 === (5))){
var state_16245__$1 = state_16245;
var statearr_16271_19636 = state_16245__$1;
(statearr_16271_19636[(2)] = null);

(statearr_16271_19636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16246 === (6))){
var state_16245__$1 = state_16245;
var statearr_16273_19637 = state_16245__$1;
(statearr_16273_19637[(2)] = null);

(statearr_16273_19637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16246 === (7))){
var inst_16237 = (state_16245[(2)]);
var state_16245__$1 = state_16245;
var statearr_16275_19638 = state_16245__$1;
(statearr_16275_19638[(2)] = inst_16237);

(statearr_16275_19638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19622,c__15501__auto___19626,G__16220_19623,G__16220_19624__$1,n__5593__auto___19621,jobs,results,process__$1,async))
;
return ((function (__19622,switch__13962__auto__,c__15501__auto___19626,G__16220_19623,G__16220_19624__$1,n__5593__auto___19621,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____0 = (function (){
var statearr_16276 = [null,null,null,null,null,null,null];
(statearr_16276[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__);

(statearr_16276[(1)] = (1));

return statearr_16276;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____1 = (function (state_16245){
while(true){
var ret_value__13964__auto__ = (function (){try{while(true){
var result__13965__auto__ = switch__13962__auto__(state_16245);
if(cljs.core.keyword_identical_QMARK_(result__13965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13965__auto__;
}
break;
}
}catch (e16277){var ex__13966__auto__ = e16277;
var statearr_16280_19646 = state_16245;
(statearr_16280_19646[(2)] = ex__13966__auto__);


if(cljs.core.seq((state_16245[(4)]))){
var statearr_16282_19652 = state_16245;
(statearr_16282_19652[(1)] = cljs.core.first((state_16245[(4)])));

} else {
throw ex__13966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19653 = state_16245;
state_16245 = G__19653;
continue;
} else {
return ret_value__13964__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__ = function(state_16245){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____1.call(this,state_16245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__;
})()
;})(__19622,switch__13962__auto__,c__15501__auto___19626,G__16220_19623,G__16220_19624__$1,n__5593__auto___19621,jobs,results,process__$1,async))
})();
var state__15503__auto__ = (function (){var statearr_16296 = f__15502__auto__();
(statearr_16296[(6)] = c__15501__auto___19626);

return statearr_16296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15503__auto__);
});})(__19622,c__15501__auto___19626,G__16220_19623,G__16220_19624__$1,n__5593__auto___19621,jobs,results,process__$1,async))
);


break;
case "async":
var c__15501__auto___19656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19622,c__15501__auto___19656,G__16220_19623,G__16220_19624__$1,n__5593__auto___19621,jobs,results,process__$1,async){
return (function (){
var f__15502__auto__ = (function (){var switch__13962__auto__ = ((function (__19622,c__15501__auto___19656,G__16220_19623,G__16220_19624__$1,n__5593__auto___19621,jobs,results,process__$1,async){
return (function (state_16325){
var state_val_16326 = (state_16325[(1)]);
if((state_val_16326 === (1))){
var state_16325__$1 = state_16325;
var statearr_16351_19658 = state_16325__$1;
(statearr_16351_19658[(2)] = null);

(statearr_16351_19658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16326 === (2))){
var state_16325__$1 = state_16325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16325__$1,(4),jobs);
} else {
if((state_val_16326 === (3))){
var inst_16322 = (state_16325[(2)]);
var state_16325__$1 = state_16325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16325__$1,inst_16322);
} else {
if((state_val_16326 === (4))){
var inst_16310 = (state_16325[(2)]);
var inst_16315 = async(inst_16310);
var state_16325__$1 = state_16325;
if(cljs.core.truth_(inst_16315)){
var statearr_16361_19659 = state_16325__$1;
(statearr_16361_19659[(1)] = (5));

} else {
var statearr_16363_19660 = state_16325__$1;
(statearr_16363_19660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16326 === (5))){
var state_16325__$1 = state_16325;
var statearr_16370_19661 = state_16325__$1;
(statearr_16370_19661[(2)] = null);

(statearr_16370_19661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16326 === (6))){
var state_16325__$1 = state_16325;
var statearr_16373_19662 = state_16325__$1;
(statearr_16373_19662[(2)] = null);

(statearr_16373_19662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16326 === (7))){
var inst_16320 = (state_16325[(2)]);
var state_16325__$1 = state_16325;
var statearr_16374_19664 = state_16325__$1;
(statearr_16374_19664[(2)] = inst_16320);

(statearr_16374_19664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19622,c__15501__auto___19656,G__16220_19623,G__16220_19624__$1,n__5593__auto___19621,jobs,results,process__$1,async))
;
return ((function (__19622,switch__13962__auto__,c__15501__auto___19656,G__16220_19623,G__16220_19624__$1,n__5593__auto___19621,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____0 = (function (){
var statearr_16384 = [null,null,null,null,null,null,null];
(statearr_16384[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__);

(statearr_16384[(1)] = (1));

return statearr_16384;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____1 = (function (state_16325){
while(true){
var ret_value__13964__auto__ = (function (){try{while(true){
var result__13965__auto__ = switch__13962__auto__(state_16325);
if(cljs.core.keyword_identical_QMARK_(result__13965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13965__auto__;
}
break;
}
}catch (e16392){var ex__13966__auto__ = e16392;
var statearr_16393_19665 = state_16325;
(statearr_16393_19665[(2)] = ex__13966__auto__);


if(cljs.core.seq((state_16325[(4)]))){
var statearr_16398_19669 = state_16325;
(statearr_16398_19669[(1)] = cljs.core.first((state_16325[(4)])));

} else {
throw ex__13966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19670 = state_16325;
state_16325 = G__19670;
continue;
} else {
return ret_value__13964__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__ = function(state_16325){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____1.call(this,state_16325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__;
})()
;})(__19622,switch__13962__auto__,c__15501__auto___19656,G__16220_19623,G__16220_19624__$1,n__5593__auto___19621,jobs,results,process__$1,async))
})();
var state__15503__auto__ = (function (){var statearr_16402 = f__15502__auto__();
(statearr_16402[(6)] = c__15501__auto___19656);

return statearr_16402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15503__auto__);
});})(__19622,c__15501__auto___19656,G__16220_19623,G__16220_19624__$1,n__5593__auto___19621,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16220_19624__$1)].join('')));

}

var G__19672 = (__19622 + (1));
__19622 = G__19672;
continue;
} else {
}
break;
}

var c__15501__auto___19673 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15502__auto__ = (function (){var switch__13962__auto__ = (function (state_16442){
var state_val_16445 = (state_16442[(1)]);
if((state_val_16445 === (7))){
var inst_16437 = (state_16442[(2)]);
var state_16442__$1 = state_16442;
var statearr_16452_19674 = state_16442__$1;
(statearr_16452_19674[(2)] = inst_16437);

(statearr_16452_19674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16445 === (1))){
var state_16442__$1 = state_16442;
var statearr_16453_19675 = state_16442__$1;
(statearr_16453_19675[(2)] = null);

(statearr_16453_19675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16445 === (4))){
var inst_16415 = (state_16442[(7)]);
var inst_16415__$1 = (state_16442[(2)]);
var inst_16416 = (inst_16415__$1 == null);
var state_16442__$1 = (function (){var statearr_16458 = state_16442;
(statearr_16458[(7)] = inst_16415__$1);

return statearr_16458;
})();
if(cljs.core.truth_(inst_16416)){
var statearr_16461_19676 = state_16442__$1;
(statearr_16461_19676[(1)] = (5));

} else {
var statearr_16462_19677 = state_16442__$1;
(statearr_16462_19677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16445 === (6))){
var inst_16415 = (state_16442[(7)]);
var inst_16420 = (state_16442[(8)]);
var inst_16420__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16427 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16428 = [inst_16415,inst_16420__$1];
var inst_16429 = (new cljs.core.PersistentVector(null,2,(5),inst_16427,inst_16428,null));
var state_16442__$1 = (function (){var statearr_16464 = state_16442;
(statearr_16464[(8)] = inst_16420__$1);

return statearr_16464;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16442__$1,(8),jobs,inst_16429);
} else {
if((state_val_16445 === (3))){
var inst_16440 = (state_16442[(2)]);
var state_16442__$1 = state_16442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16442__$1,inst_16440);
} else {
if((state_val_16445 === (2))){
var state_16442__$1 = state_16442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16442__$1,(4),from);
} else {
if((state_val_16445 === (9))){
var inst_16434 = (state_16442[(2)]);
var state_16442__$1 = (function (){var statearr_16466 = state_16442;
(statearr_16466[(9)] = inst_16434);

return statearr_16466;
})();
var statearr_16467_19678 = state_16442__$1;
(statearr_16467_19678[(2)] = null);

(statearr_16467_19678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16445 === (5))){
var inst_16418 = cljs.core.async.close_BANG_(jobs);
var state_16442__$1 = state_16442;
var statearr_16472_19680 = state_16442__$1;
(statearr_16472_19680[(2)] = inst_16418);

(statearr_16472_19680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16445 === (8))){
var inst_16420 = (state_16442[(8)]);
var inst_16431 = (state_16442[(2)]);
var state_16442__$1 = (function (){var statearr_16474 = state_16442;
(statearr_16474[(10)] = inst_16431);

return statearr_16474;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16442__$1,(9),results,inst_16420);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____0 = (function (){
var statearr_16477 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16477[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__);

(statearr_16477[(1)] = (1));

return statearr_16477;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____1 = (function (state_16442){
while(true){
var ret_value__13964__auto__ = (function (){try{while(true){
var result__13965__auto__ = switch__13962__auto__(state_16442);
if(cljs.core.keyword_identical_QMARK_(result__13965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13965__auto__;
}
break;
}
}catch (e16478){var ex__13966__auto__ = e16478;
var statearr_16479_19681 = state_16442;
(statearr_16479_19681[(2)] = ex__13966__auto__);


if(cljs.core.seq((state_16442[(4)]))){
var statearr_16480_19682 = state_16442;
(statearr_16480_19682[(1)] = cljs.core.first((state_16442[(4)])));

} else {
throw ex__13966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19684 = state_16442;
state_16442 = G__19684;
continue;
} else {
return ret_value__13964__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__ = function(state_16442){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____1.call(this,state_16442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__;
})()
})();
var state__15503__auto__ = (function (){var statearr_16483 = f__15502__auto__();
(statearr_16483[(6)] = c__15501__auto___19673);

return statearr_16483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15503__auto__);
}));


var c__15501__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15502__auto__ = (function (){var switch__13962__auto__ = (function (state_16531){
var state_val_16532 = (state_16531[(1)]);
if((state_val_16532 === (7))){
var inst_16527 = (state_16531[(2)]);
var state_16531__$1 = state_16531;
var statearr_16564_19686 = state_16531__$1;
(statearr_16564_19686[(2)] = inst_16527);

(statearr_16564_19686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16532 === (20))){
var state_16531__$1 = state_16531;
var statearr_16566_19688 = state_16531__$1;
(statearr_16566_19688[(2)] = null);

(statearr_16566_19688[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16532 === (1))){
var state_16531__$1 = state_16531;
var statearr_16568_19690 = state_16531__$1;
(statearr_16568_19690[(2)] = null);

(statearr_16568_19690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16532 === (4))){
var inst_16490 = (state_16531[(7)]);
var inst_16490__$1 = (state_16531[(2)]);
var inst_16491 = (inst_16490__$1 == null);
var state_16531__$1 = (function (){var statearr_16570 = state_16531;
(statearr_16570[(7)] = inst_16490__$1);

return statearr_16570;
})();
if(cljs.core.truth_(inst_16491)){
var statearr_16571_19694 = state_16531__$1;
(statearr_16571_19694[(1)] = (5));

} else {
var statearr_16572_19695 = state_16531__$1;
(statearr_16572_19695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16532 === (15))){
var inst_16506 = (state_16531[(8)]);
var state_16531__$1 = state_16531;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16531__$1,(18),to,inst_16506);
} else {
if((state_val_16532 === (21))){
var inst_16522 = (state_16531[(2)]);
var state_16531__$1 = state_16531;
var statearr_16578_19697 = state_16531__$1;
(statearr_16578_19697[(2)] = inst_16522);

(statearr_16578_19697[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16532 === (13))){
var inst_16524 = (state_16531[(2)]);
var state_16531__$1 = (function (){var statearr_16579 = state_16531;
(statearr_16579[(9)] = inst_16524);

return statearr_16579;
})();
var statearr_16586_19698 = state_16531__$1;
(statearr_16586_19698[(2)] = null);

(statearr_16586_19698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16532 === (6))){
var inst_16490 = (state_16531[(7)]);
var state_16531__$1 = state_16531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16531__$1,(11),inst_16490);
} else {
if((state_val_16532 === (17))){
var inst_16517 = (state_16531[(2)]);
var state_16531__$1 = state_16531;
if(cljs.core.truth_(inst_16517)){
var statearr_16603_19703 = state_16531__$1;
(statearr_16603_19703[(1)] = (19));

} else {
var statearr_16612_19704 = state_16531__$1;
(statearr_16612_19704[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16532 === (3))){
var inst_16529 = (state_16531[(2)]);
var state_16531__$1 = state_16531;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16531__$1,inst_16529);
} else {
if((state_val_16532 === (12))){
var inst_16500 = (state_16531[(10)]);
var state_16531__$1 = state_16531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16531__$1,(14),inst_16500);
} else {
if((state_val_16532 === (2))){
var state_16531__$1 = state_16531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16531__$1,(4),results);
} else {
if((state_val_16532 === (19))){
var state_16531__$1 = state_16531;
var statearr_16657_19716 = state_16531__$1;
(statearr_16657_19716[(2)] = null);

(statearr_16657_19716[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16532 === (11))){
var inst_16500 = (state_16531[(2)]);
var state_16531__$1 = (function (){var statearr_16664 = state_16531;
(statearr_16664[(10)] = inst_16500);

return statearr_16664;
})();
var statearr_16666_19717 = state_16531__$1;
(statearr_16666_19717[(2)] = null);

(statearr_16666_19717[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16532 === (9))){
var state_16531__$1 = state_16531;
var statearr_16672_19721 = state_16531__$1;
(statearr_16672_19721[(2)] = null);

(statearr_16672_19721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16532 === (5))){
var state_16531__$1 = state_16531;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16679_19722 = state_16531__$1;
(statearr_16679_19722[(1)] = (8));

} else {
var statearr_16685_19723 = state_16531__$1;
(statearr_16685_19723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16532 === (14))){
var inst_16509 = (state_16531[(11)]);
var inst_16506 = (state_16531[(8)]);
var inst_16506__$1 = (state_16531[(2)]);
var inst_16508 = (inst_16506__$1 == null);
var inst_16509__$1 = cljs.core.not(inst_16508);
var state_16531__$1 = (function (){var statearr_16701 = state_16531;
(statearr_16701[(11)] = inst_16509__$1);

(statearr_16701[(8)] = inst_16506__$1);

return statearr_16701;
})();
if(inst_16509__$1){
var statearr_16712_19724 = state_16531__$1;
(statearr_16712_19724[(1)] = (15));

} else {
var statearr_16720_19730 = state_16531__$1;
(statearr_16720_19730[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16532 === (16))){
var inst_16509 = (state_16531[(11)]);
var state_16531__$1 = state_16531;
var statearr_16731_19731 = state_16531__$1;
(statearr_16731_19731[(2)] = inst_16509);

(statearr_16731_19731[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16532 === (10))){
var inst_16497 = (state_16531[(2)]);
var state_16531__$1 = state_16531;
var statearr_16740_19733 = state_16531__$1;
(statearr_16740_19733[(2)] = inst_16497);

(statearr_16740_19733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16532 === (18))){
var inst_16513 = (state_16531[(2)]);
var state_16531__$1 = state_16531;
var statearr_16753_19735 = state_16531__$1;
(statearr_16753_19735[(2)] = inst_16513);

(statearr_16753_19735[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16532 === (8))){
var inst_16494 = cljs.core.async.close_BANG_(to);
var state_16531__$1 = state_16531;
var statearr_16766_19736 = state_16531__$1;
(statearr_16766_19736[(2)] = inst_16494);

(statearr_16766_19736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____0 = (function (){
var statearr_16794 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16794[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__);

(statearr_16794[(1)] = (1));

return statearr_16794;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____1 = (function (state_16531){
while(true){
var ret_value__13964__auto__ = (function (){try{while(true){
var result__13965__auto__ = switch__13962__auto__(state_16531);
if(cljs.core.keyword_identical_QMARK_(result__13965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13965__auto__;
}
break;
}
}catch (e16798){var ex__13966__auto__ = e16798;
var statearr_16801_19739 = state_16531;
(statearr_16801_19739[(2)] = ex__13966__auto__);


if(cljs.core.seq((state_16531[(4)]))){
var statearr_16804_19740 = state_16531;
(statearr_16804_19740[(1)] = cljs.core.first((state_16531[(4)])));

} else {
throw ex__13966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19742 = state_16531;
state_16531 = G__19742;
continue;
} else {
return ret_value__13964__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__ = function(state_16531){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____1.call(this,state_16531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13963__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13963__auto__;
})()
})();
var state__15503__auto__ = (function (){var statearr_16807 = f__15502__auto__();
(statearr_16807[(6)] = c__15501__auto__);

return statearr_16807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15503__auto__);
}));

return c__15501__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16814 = arguments.length;
switch (G__16814) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__16829 = arguments.length;
switch (G__16829) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__16841 = arguments.length;
switch (G__16841) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15501__auto___19751 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15502__auto__ = (function (){var switch__13962__auto__ = (function (state_16879){
var state_val_16880 = (state_16879[(1)]);
if((state_val_16880 === (7))){
var inst_16874 = (state_16879[(2)]);
var state_16879__$1 = state_16879;
var statearr_16886_19752 = state_16879__$1;
(statearr_16886_19752[(2)] = inst_16874);

(statearr_16886_19752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16880 === (1))){
var state_16879__$1 = state_16879;
var statearr_16887_19753 = state_16879__$1;
(statearr_16887_19753[(2)] = null);

(statearr_16887_19753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16880 === (4))){
var inst_16855 = (state_16879[(7)]);
var inst_16855__$1 = (state_16879[(2)]);
var inst_16856 = (inst_16855__$1 == null);
var state_16879__$1 = (function (){var statearr_16889 = state_16879;
(statearr_16889[(7)] = inst_16855__$1);

return statearr_16889;
})();
if(cljs.core.truth_(inst_16856)){
var statearr_16891_19754 = state_16879__$1;
(statearr_16891_19754[(1)] = (5));

} else {
var statearr_16896_19755 = state_16879__$1;
(statearr_16896_19755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16880 === (13))){
var state_16879__$1 = state_16879;
var statearr_16901_19756 = state_16879__$1;
(statearr_16901_19756[(2)] = null);

(statearr_16901_19756[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16880 === (6))){
var inst_16855 = (state_16879[(7)]);
var inst_16861 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16855) : p.call(null, inst_16855));
var state_16879__$1 = state_16879;
if(cljs.core.truth_(inst_16861)){
var statearr_16902_19760 = state_16879__$1;
(statearr_16902_19760[(1)] = (9));

} else {
var statearr_16903_19761 = state_16879__$1;
(statearr_16903_19761[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16880 === (3))){
var inst_16877 = (state_16879[(2)]);
var state_16879__$1 = state_16879;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16879__$1,inst_16877);
} else {
if((state_val_16880 === (12))){
var state_16879__$1 = state_16879;
var statearr_16907_19762 = state_16879__$1;
(statearr_16907_19762[(2)] = null);

(statearr_16907_19762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16880 === (2))){
var state_16879__$1 = state_16879;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16879__$1,(4),ch);
} else {
if((state_val_16880 === (11))){
var inst_16855 = (state_16879[(7)]);
var inst_16865 = (state_16879[(2)]);
var state_16879__$1 = state_16879;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16879__$1,(8),inst_16865,inst_16855);
} else {
if((state_val_16880 === (9))){
var state_16879__$1 = state_16879;
var statearr_16909_19763 = state_16879__$1;
(statearr_16909_19763[(2)] = tc);

(statearr_16909_19763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16880 === (5))){
var inst_16858 = cljs.core.async.close_BANG_(tc);
var inst_16859 = cljs.core.async.close_BANG_(fc);
var state_16879__$1 = (function (){var statearr_16910 = state_16879;
(statearr_16910[(8)] = inst_16858);

return statearr_16910;
})();
var statearr_16914_19764 = state_16879__$1;
(statearr_16914_19764[(2)] = inst_16859);

(statearr_16914_19764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16880 === (14))){
var inst_16872 = (state_16879[(2)]);
var state_16879__$1 = state_16879;
var statearr_16918_19765 = state_16879__$1;
(statearr_16918_19765[(2)] = inst_16872);

(statearr_16918_19765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16880 === (10))){
var state_16879__$1 = state_16879;
var statearr_16927_19766 = state_16879__$1;
(statearr_16927_19766[(2)] = fc);

(statearr_16927_19766[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16880 === (8))){
var inst_16867 = (state_16879[(2)]);
var state_16879__$1 = state_16879;
if(cljs.core.truth_(inst_16867)){
var statearr_16934_19768 = state_16879__$1;
(statearr_16934_19768[(1)] = (12));

} else {
var statearr_16935_19769 = state_16879__$1;
(statearr_16935_19769[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13963__auto__ = null;
var cljs$core$async$state_machine__13963__auto____0 = (function (){
var statearr_16943 = [null,null,null,null,null,null,null,null,null];
(statearr_16943[(0)] = cljs$core$async$state_machine__13963__auto__);

(statearr_16943[(1)] = (1));

return statearr_16943;
});
var cljs$core$async$state_machine__13963__auto____1 = (function (state_16879){
while(true){
var ret_value__13964__auto__ = (function (){try{while(true){
var result__13965__auto__ = switch__13962__auto__(state_16879);
if(cljs.core.keyword_identical_QMARK_(result__13965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13965__auto__;
}
break;
}
}catch (e16947){var ex__13966__auto__ = e16947;
var statearr_16948_19774 = state_16879;
(statearr_16948_19774[(2)] = ex__13966__auto__);


if(cljs.core.seq((state_16879[(4)]))){
var statearr_16950_19775 = state_16879;
(statearr_16950_19775[(1)] = cljs.core.first((state_16879[(4)])));

} else {
throw ex__13966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19776 = state_16879;
state_16879 = G__19776;
continue;
} else {
return ret_value__13964__auto__;
}
break;
}
});
cljs$core$async$state_machine__13963__auto__ = function(state_16879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13963__auto____1.call(this,state_16879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13963__auto____0;
cljs$core$async$state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13963__auto____1;
return cljs$core$async$state_machine__13963__auto__;
})()
})();
var state__15503__auto__ = (function (){var statearr_16956 = f__15502__auto__();
(statearr_16956[(6)] = c__15501__auto___19751);

return statearr_16956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15503__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15501__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15502__auto__ = (function (){var switch__13962__auto__ = (function (state_16997){
var state_val_16998 = (state_16997[(1)]);
if((state_val_16998 === (7))){
var inst_16993 = (state_16997[(2)]);
var state_16997__$1 = state_16997;
var statearr_16999_19780 = state_16997__$1;
(statearr_16999_19780[(2)] = inst_16993);

(statearr_16999_19780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (1))){
var inst_16966 = init;
var inst_16971 = inst_16966;
var state_16997__$1 = (function (){var statearr_17000 = state_16997;
(statearr_17000[(7)] = inst_16971);

return statearr_17000;
})();
var statearr_17001_19781 = state_16997__$1;
(statearr_17001_19781[(2)] = null);

(statearr_17001_19781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (4))){
var inst_16975 = (state_16997[(8)]);
var inst_16975__$1 = (state_16997[(2)]);
var inst_16978 = (inst_16975__$1 == null);
var state_16997__$1 = (function (){var statearr_17006 = state_16997;
(statearr_17006[(8)] = inst_16975__$1);

return statearr_17006;
})();
if(cljs.core.truth_(inst_16978)){
var statearr_17007_19782 = state_16997__$1;
(statearr_17007_19782[(1)] = (5));

} else {
var statearr_17008_19783 = state_16997__$1;
(statearr_17008_19783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (6))){
var inst_16971 = (state_16997[(7)]);
var inst_16975 = (state_16997[(8)]);
var inst_16981 = (state_16997[(9)]);
var inst_16981__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16971,inst_16975) : f.call(null, inst_16971,inst_16975));
var inst_16982 = cljs.core.reduced_QMARK_(inst_16981__$1);
var state_16997__$1 = (function (){var statearr_17009 = state_16997;
(statearr_17009[(9)] = inst_16981__$1);

return statearr_17009;
})();
if(inst_16982){
var statearr_17010_19784 = state_16997__$1;
(statearr_17010_19784[(1)] = (8));

} else {
var statearr_17011_19785 = state_16997__$1;
(statearr_17011_19785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (3))){
var inst_16995 = (state_16997[(2)]);
var state_16997__$1 = state_16997;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16997__$1,inst_16995);
} else {
if((state_val_16998 === (2))){
var state_16997__$1 = state_16997;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16997__$1,(4),ch);
} else {
if((state_val_16998 === (9))){
var inst_16981 = (state_16997[(9)]);
var inst_16971 = inst_16981;
var state_16997__$1 = (function (){var statearr_17013 = state_16997;
(statearr_17013[(7)] = inst_16971);

return statearr_17013;
})();
var statearr_17014_19787 = state_16997__$1;
(statearr_17014_19787[(2)] = null);

(statearr_17014_19787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (5))){
var inst_16971 = (state_16997[(7)]);
var state_16997__$1 = state_16997;
var statearr_17019_19788 = state_16997__$1;
(statearr_17019_19788[(2)] = inst_16971);

(statearr_17019_19788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (10))){
var inst_16988 = (state_16997[(2)]);
var state_16997__$1 = state_16997;
var statearr_17020_19789 = state_16997__$1;
(statearr_17020_19789[(2)] = inst_16988);

(statearr_17020_19789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (8))){
var inst_16981 = (state_16997[(9)]);
var inst_16984 = cljs.core.deref(inst_16981);
var state_16997__$1 = state_16997;
var statearr_17023_19790 = state_16997__$1;
(statearr_17023_19790[(2)] = inst_16984);

(statearr_17023_19790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13963__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13963__auto____0 = (function (){
var statearr_17027 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17027[(0)] = cljs$core$async$reduce_$_state_machine__13963__auto__);

(statearr_17027[(1)] = (1));

return statearr_17027;
});
var cljs$core$async$reduce_$_state_machine__13963__auto____1 = (function (state_16997){
while(true){
var ret_value__13964__auto__ = (function (){try{while(true){
var result__13965__auto__ = switch__13962__auto__(state_16997);
if(cljs.core.keyword_identical_QMARK_(result__13965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13965__auto__;
}
break;
}
}catch (e17028){var ex__13966__auto__ = e17028;
var statearr_17029_19791 = state_16997;
(statearr_17029_19791[(2)] = ex__13966__auto__);


if(cljs.core.seq((state_16997[(4)]))){
var statearr_17030_19792 = state_16997;
(statearr_17030_19792[(1)] = cljs.core.first((state_16997[(4)])));

} else {
throw ex__13966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19793 = state_16997;
state_16997 = G__19793;
continue;
} else {
return ret_value__13964__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13963__auto__ = function(state_16997){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13963__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13963__auto____1.call(this,state_16997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13963__auto____0;
cljs$core$async$reduce_$_state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13963__auto____1;
return cljs$core$async$reduce_$_state_machine__13963__auto__;
})()
})();
var state__15503__auto__ = (function (){var statearr_17032 = f__15502__auto__();
(statearr_17032[(6)] = c__15501__auto__);

return statearr_17032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15503__auto__);
}));

return c__15501__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__15501__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15502__auto__ = (function (){var switch__13962__auto__ = (function (state_17041){
var state_val_17042 = (state_17041[(1)]);
if((state_val_17042 === (1))){
var inst_17036 = cljs.core.async.reduce(f__$1,init,ch);
var state_17041__$1 = state_17041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17041__$1,(2),inst_17036);
} else {
if((state_val_17042 === (2))){
var inst_17038 = (state_17041[(2)]);
var inst_17039 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17038) : f__$1.call(null, inst_17038));
var state_17041__$1 = state_17041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17041__$1,inst_17039);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13963__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13963__auto____0 = (function (){
var statearr_17046 = [null,null,null,null,null,null,null];
(statearr_17046[(0)] = cljs$core$async$transduce_$_state_machine__13963__auto__);

(statearr_17046[(1)] = (1));

return statearr_17046;
});
var cljs$core$async$transduce_$_state_machine__13963__auto____1 = (function (state_17041){
while(true){
var ret_value__13964__auto__ = (function (){try{while(true){
var result__13965__auto__ = switch__13962__auto__(state_17041);
if(cljs.core.keyword_identical_QMARK_(result__13965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13965__auto__;
}
break;
}
}catch (e17048){var ex__13966__auto__ = e17048;
var statearr_17049_19796 = state_17041;
(statearr_17049_19796[(2)] = ex__13966__auto__);


if(cljs.core.seq((state_17041[(4)]))){
var statearr_17050_19797 = state_17041;
(statearr_17050_19797[(1)] = cljs.core.first((state_17041[(4)])));

} else {
throw ex__13966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19798 = state_17041;
state_17041 = G__19798;
continue;
} else {
return ret_value__13964__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13963__auto__ = function(state_17041){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13963__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13963__auto____1.call(this,state_17041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13963__auto____0;
cljs$core$async$transduce_$_state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13963__auto____1;
return cljs$core$async$transduce_$_state_machine__13963__auto__;
})()
})();
var state__15503__auto__ = (function (){var statearr_17056 = f__15502__auto__();
(statearr_17056[(6)] = c__15501__auto__);

return statearr_17056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15503__auto__);
}));

return c__15501__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__17066 = arguments.length;
switch (G__17066) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15501__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15502__auto__ = (function (){var switch__13962__auto__ = (function (state_17099){
var state_val_17100 = (state_17099[(1)]);
if((state_val_17100 === (7))){
var inst_17078 = (state_17099[(2)]);
var state_17099__$1 = state_17099;
var statearr_17101_19812 = state_17099__$1;
(statearr_17101_19812[(2)] = inst_17078);

(statearr_17101_19812[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17100 === (1))){
var inst_17069 = cljs.core.seq(coll);
var inst_17070 = inst_17069;
var state_17099__$1 = (function (){var statearr_17102 = state_17099;
(statearr_17102[(7)] = inst_17070);

return statearr_17102;
})();
var statearr_17103_19817 = state_17099__$1;
(statearr_17103_19817[(2)] = null);

(statearr_17103_19817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17100 === (4))){
var inst_17070 = (state_17099[(7)]);
var inst_17076 = cljs.core.first(inst_17070);
var state_17099__$1 = state_17099;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17099__$1,(7),ch,inst_17076);
} else {
if((state_val_17100 === (13))){
var inst_17093 = (state_17099[(2)]);
var state_17099__$1 = state_17099;
var statearr_17104_19819 = state_17099__$1;
(statearr_17104_19819[(2)] = inst_17093);

(statearr_17104_19819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17100 === (6))){
var inst_17081 = (state_17099[(2)]);
var state_17099__$1 = state_17099;
if(cljs.core.truth_(inst_17081)){
var statearr_17105_19824 = state_17099__$1;
(statearr_17105_19824[(1)] = (8));

} else {
var statearr_17106_19825 = state_17099__$1;
(statearr_17106_19825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17100 === (3))){
var inst_17097 = (state_17099[(2)]);
var state_17099__$1 = state_17099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17099__$1,inst_17097);
} else {
if((state_val_17100 === (12))){
var state_17099__$1 = state_17099;
var statearr_17107_19827 = state_17099__$1;
(statearr_17107_19827[(2)] = null);

(statearr_17107_19827[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17100 === (2))){
var inst_17070 = (state_17099[(7)]);
var state_17099__$1 = state_17099;
if(cljs.core.truth_(inst_17070)){
var statearr_17108_19829 = state_17099__$1;
(statearr_17108_19829[(1)] = (4));

} else {
var statearr_17110_19830 = state_17099__$1;
(statearr_17110_19830[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17100 === (11))){
var inst_17090 = cljs.core.async.close_BANG_(ch);
var state_17099__$1 = state_17099;
var statearr_17114_19831 = state_17099__$1;
(statearr_17114_19831[(2)] = inst_17090);

(statearr_17114_19831[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17100 === (9))){
var state_17099__$1 = state_17099;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17115_19832 = state_17099__$1;
(statearr_17115_19832[(1)] = (11));

} else {
var statearr_17116_19833 = state_17099__$1;
(statearr_17116_19833[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17100 === (5))){
var inst_17070 = (state_17099[(7)]);
var state_17099__$1 = state_17099;
var statearr_17117_19834 = state_17099__$1;
(statearr_17117_19834[(2)] = inst_17070);

(statearr_17117_19834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17100 === (10))){
var inst_17095 = (state_17099[(2)]);
var state_17099__$1 = state_17099;
var statearr_17119_19835 = state_17099__$1;
(statearr_17119_19835[(2)] = inst_17095);

(statearr_17119_19835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17100 === (8))){
var inst_17070 = (state_17099[(7)]);
var inst_17086 = cljs.core.next(inst_17070);
var inst_17070__$1 = inst_17086;
var state_17099__$1 = (function (){var statearr_17120 = state_17099;
(statearr_17120[(7)] = inst_17070__$1);

return statearr_17120;
})();
var statearr_17122_19836 = state_17099__$1;
(statearr_17122_19836[(2)] = null);

(statearr_17122_19836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13963__auto__ = null;
var cljs$core$async$state_machine__13963__auto____0 = (function (){
var statearr_17124 = [null,null,null,null,null,null,null,null];
(statearr_17124[(0)] = cljs$core$async$state_machine__13963__auto__);

(statearr_17124[(1)] = (1));

return statearr_17124;
});
var cljs$core$async$state_machine__13963__auto____1 = (function (state_17099){
while(true){
var ret_value__13964__auto__ = (function (){try{while(true){
var result__13965__auto__ = switch__13962__auto__(state_17099);
if(cljs.core.keyword_identical_QMARK_(result__13965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13965__auto__;
}
break;
}
}catch (e17125){var ex__13966__auto__ = e17125;
var statearr_17126_19837 = state_17099;
(statearr_17126_19837[(2)] = ex__13966__auto__);


if(cljs.core.seq((state_17099[(4)]))){
var statearr_17127_19838 = state_17099;
(statearr_17127_19838[(1)] = cljs.core.first((state_17099[(4)])));

} else {
throw ex__13966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19839 = state_17099;
state_17099 = G__19839;
continue;
} else {
return ret_value__13964__auto__;
}
break;
}
});
cljs$core$async$state_machine__13963__auto__ = function(state_17099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13963__auto____1.call(this,state_17099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13963__auto____0;
cljs$core$async$state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13963__auto____1;
return cljs$core$async$state_machine__13963__auto__;
})()
})();
var state__15503__auto__ = (function (){var statearr_17128 = f__15502__auto__();
(statearr_17128[(6)] = c__15501__auto__);

return statearr_17128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15503__auto__);
}));

return c__15501__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__17133 = arguments.length;
switch (G__17133) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19843 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19843(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19844 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19844(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19845 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19845(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19846 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19846(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17182 = (function (ch,cs,meta17183){
this.ch = ch;
this.cs = cs;
this.meta17183 = meta17183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17184,meta17183__$1){
var self__ = this;
var _17184__$1 = this;
return (new cljs.core.async.t_cljs$core$async17182(self__.ch,self__.cs,meta17183__$1));
}));

(cljs.core.async.t_cljs$core$async17182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17184){
var self__ = this;
var _17184__$1 = this;
return self__.meta17183;
}));

(cljs.core.async.t_cljs$core$async17182.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17182.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17182.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17182.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async17182.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async17182.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async17182.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17183","meta17183",237516161,null)], null);
}));

(cljs.core.async.t_cljs$core$async17182.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17182");

(cljs.core.async.t_cljs$core$async17182.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17182");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17182.
 */
cljs.core.async.__GT_t_cljs$core$async17182 = (function cljs$core$async$__GT_t_cljs$core$async17182(ch,cs,meta17183){
return (new cljs.core.async.t_cljs$core$async17182(ch,cs,meta17183));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async17182(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15501__auto___19854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15502__auto__ = (function (){var switch__13962__auto__ = (function (state_17362){
var state_val_17363 = (state_17362[(1)]);
if((state_val_17363 === (7))){
var inst_17357 = (state_17362[(2)]);
var state_17362__$1 = state_17362;
var statearr_17364_19857 = state_17362__$1;
(statearr_17364_19857[(2)] = inst_17357);

(statearr_17364_19857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (20))){
var inst_17258 = (state_17362[(7)]);
var inst_17271 = cljs.core.first(inst_17258);
var inst_17272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17271,(0),null);
var inst_17275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17271,(1),null);
var state_17362__$1 = (function (){var statearr_17366 = state_17362;
(statearr_17366[(8)] = inst_17272);

return statearr_17366;
})();
if(cljs.core.truth_(inst_17275)){
var statearr_17367_19862 = state_17362__$1;
(statearr_17367_19862[(1)] = (22));

} else {
var statearr_17368_19863 = state_17362__$1;
(statearr_17368_19863[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (27))){
var inst_17303 = (state_17362[(9)]);
var inst_17305 = (state_17362[(10)]);
var inst_17222 = (state_17362[(11)]);
var inst_17310 = (state_17362[(12)]);
var inst_17310__$1 = cljs.core._nth(inst_17303,inst_17305);
var inst_17311 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17310__$1,inst_17222,done);
var state_17362__$1 = (function (){var statearr_17371 = state_17362;
(statearr_17371[(12)] = inst_17310__$1);

return statearr_17371;
})();
if(cljs.core.truth_(inst_17311)){
var statearr_17372_19864 = state_17362__$1;
(statearr_17372_19864[(1)] = (30));

} else {
var statearr_17373_19865 = state_17362__$1;
(statearr_17373_19865[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (1))){
var state_17362__$1 = state_17362;
var statearr_17377_19866 = state_17362__$1;
(statearr_17377_19866[(2)] = null);

(statearr_17377_19866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (24))){
var inst_17258 = (state_17362[(7)]);
var inst_17280 = (state_17362[(2)]);
var inst_17281 = cljs.core.next(inst_17258);
var inst_17232 = inst_17281;
var inst_17233 = null;
var inst_17234 = (0);
var inst_17235 = (0);
var state_17362__$1 = (function (){var statearr_17378 = state_17362;
(statearr_17378[(13)] = inst_17235);

(statearr_17378[(14)] = inst_17233);

(statearr_17378[(15)] = inst_17280);

(statearr_17378[(16)] = inst_17232);

(statearr_17378[(17)] = inst_17234);

return statearr_17378;
})();
var statearr_17379_19867 = state_17362__$1;
(statearr_17379_19867[(2)] = null);

(statearr_17379_19867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (39))){
var state_17362__$1 = state_17362;
var statearr_17383_19868 = state_17362__$1;
(statearr_17383_19868[(2)] = null);

(statearr_17383_19868[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (4))){
var inst_17222 = (state_17362[(11)]);
var inst_17222__$1 = (state_17362[(2)]);
var inst_17224 = (inst_17222__$1 == null);
var state_17362__$1 = (function (){var statearr_17384 = state_17362;
(statearr_17384[(11)] = inst_17222__$1);

return statearr_17384;
})();
if(cljs.core.truth_(inst_17224)){
var statearr_17385_19869 = state_17362__$1;
(statearr_17385_19869[(1)] = (5));

} else {
var statearr_17386_19870 = state_17362__$1;
(statearr_17386_19870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (15))){
var inst_17235 = (state_17362[(13)]);
var inst_17233 = (state_17362[(14)]);
var inst_17232 = (state_17362[(16)]);
var inst_17234 = (state_17362[(17)]);
var inst_17251 = (state_17362[(2)]);
var inst_17255 = (inst_17235 + (1));
var tmp17380 = inst_17233;
var tmp17381 = inst_17232;
var tmp17382 = inst_17234;
var inst_17232__$1 = tmp17381;
var inst_17233__$1 = tmp17380;
var inst_17234__$1 = tmp17382;
var inst_17235__$1 = inst_17255;
var state_17362__$1 = (function (){var statearr_17388 = state_17362;
(statearr_17388[(13)] = inst_17235__$1);

(statearr_17388[(18)] = inst_17251);

(statearr_17388[(14)] = inst_17233__$1);

(statearr_17388[(16)] = inst_17232__$1);

(statearr_17388[(17)] = inst_17234__$1);

return statearr_17388;
})();
var statearr_17389_19871 = state_17362__$1;
(statearr_17389_19871[(2)] = null);

(statearr_17389_19871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (21))){
var inst_17284 = (state_17362[(2)]);
var state_17362__$1 = state_17362;
var statearr_17393_19872 = state_17362__$1;
(statearr_17393_19872[(2)] = inst_17284);

(statearr_17393_19872[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (31))){
var inst_17310 = (state_17362[(12)]);
var inst_17314 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_17310);
var state_17362__$1 = state_17362;
var statearr_17394_19880 = state_17362__$1;
(statearr_17394_19880[(2)] = inst_17314);

(statearr_17394_19880[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (32))){
var inst_17303 = (state_17362[(9)]);
var inst_17305 = (state_17362[(10)]);
var inst_17302 = (state_17362[(19)]);
var inst_17304 = (state_17362[(20)]);
var inst_17316 = (state_17362[(2)]);
var inst_17317 = (inst_17305 + (1));
var tmp17390 = inst_17303;
var tmp17391 = inst_17302;
var tmp17392 = inst_17304;
var inst_17302__$1 = tmp17391;
var inst_17303__$1 = tmp17390;
var inst_17304__$1 = tmp17392;
var inst_17305__$1 = inst_17317;
var state_17362__$1 = (function (){var statearr_17395 = state_17362;
(statearr_17395[(9)] = inst_17303__$1);

(statearr_17395[(10)] = inst_17305__$1);

(statearr_17395[(19)] = inst_17302__$1);

(statearr_17395[(20)] = inst_17304__$1);

(statearr_17395[(21)] = inst_17316);

return statearr_17395;
})();
var statearr_17396_19882 = state_17362__$1;
(statearr_17396_19882[(2)] = null);

(statearr_17396_19882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (40))){
var inst_17329 = (state_17362[(22)]);
var inst_17333 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_17329);
var state_17362__$1 = state_17362;
var statearr_17398_19883 = state_17362__$1;
(statearr_17398_19883[(2)] = inst_17333);

(statearr_17398_19883[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (33))){
var inst_17320 = (state_17362[(23)]);
var inst_17322 = cljs.core.chunked_seq_QMARK_(inst_17320);
var state_17362__$1 = state_17362;
if(inst_17322){
var statearr_17400_19884 = state_17362__$1;
(statearr_17400_19884[(1)] = (36));

} else {
var statearr_17401_19885 = state_17362__$1;
(statearr_17401_19885[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (13))){
var inst_17245 = (state_17362[(24)]);
var inst_17248 = cljs.core.async.close_BANG_(inst_17245);
var state_17362__$1 = state_17362;
var statearr_17405_19886 = state_17362__$1;
(statearr_17405_19886[(2)] = inst_17248);

(statearr_17405_19886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (22))){
var inst_17272 = (state_17362[(8)]);
var inst_17277 = cljs.core.async.close_BANG_(inst_17272);
var state_17362__$1 = state_17362;
var statearr_17406_19887 = state_17362__$1;
(statearr_17406_19887[(2)] = inst_17277);

(statearr_17406_19887[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (36))){
var inst_17320 = (state_17362[(23)]);
var inst_17324 = cljs.core.chunk_first(inst_17320);
var inst_17325 = cljs.core.chunk_rest(inst_17320);
var inst_17326 = cljs.core.count(inst_17324);
var inst_17302 = inst_17325;
var inst_17303 = inst_17324;
var inst_17304 = inst_17326;
var inst_17305 = (0);
var state_17362__$1 = (function (){var statearr_17407 = state_17362;
(statearr_17407[(9)] = inst_17303);

(statearr_17407[(10)] = inst_17305);

(statearr_17407[(19)] = inst_17302);

(statearr_17407[(20)] = inst_17304);

return statearr_17407;
})();
var statearr_17411_19889 = state_17362__$1;
(statearr_17411_19889[(2)] = null);

(statearr_17411_19889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (41))){
var inst_17320 = (state_17362[(23)]);
var inst_17335 = (state_17362[(2)]);
var inst_17336 = cljs.core.next(inst_17320);
var inst_17302 = inst_17336;
var inst_17303 = null;
var inst_17304 = (0);
var inst_17305 = (0);
var state_17362__$1 = (function (){var statearr_17412 = state_17362;
(statearr_17412[(25)] = inst_17335);

(statearr_17412[(9)] = inst_17303);

(statearr_17412[(10)] = inst_17305);

(statearr_17412[(19)] = inst_17302);

(statearr_17412[(20)] = inst_17304);

return statearr_17412;
})();
var statearr_17413_19890 = state_17362__$1;
(statearr_17413_19890[(2)] = null);

(statearr_17413_19890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (43))){
var state_17362__$1 = state_17362;
var statearr_17414_19891 = state_17362__$1;
(statearr_17414_19891[(2)] = null);

(statearr_17414_19891[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (29))){
var inst_17344 = (state_17362[(2)]);
var state_17362__$1 = state_17362;
var statearr_17415_19892 = state_17362__$1;
(statearr_17415_19892[(2)] = inst_17344);

(statearr_17415_19892[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (44))){
var inst_17354 = (state_17362[(2)]);
var state_17362__$1 = (function (){var statearr_17416 = state_17362;
(statearr_17416[(26)] = inst_17354);

return statearr_17416;
})();
var statearr_17417_19893 = state_17362__$1;
(statearr_17417_19893[(2)] = null);

(statearr_17417_19893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (6))){
var inst_17294 = (state_17362[(27)]);
var inst_17293 = cljs.core.deref(cs);
var inst_17294__$1 = cljs.core.keys(inst_17293);
var inst_17295 = cljs.core.count(inst_17294__$1);
var inst_17296 = cljs.core.reset_BANG_(dctr,inst_17295);
var inst_17301 = cljs.core.seq(inst_17294__$1);
var inst_17302 = inst_17301;
var inst_17303 = null;
var inst_17304 = (0);
var inst_17305 = (0);
var state_17362__$1 = (function (){var statearr_17418 = state_17362;
(statearr_17418[(9)] = inst_17303);

(statearr_17418[(10)] = inst_17305);

(statearr_17418[(28)] = inst_17296);

(statearr_17418[(19)] = inst_17302);

(statearr_17418[(20)] = inst_17304);

(statearr_17418[(27)] = inst_17294__$1);

return statearr_17418;
})();
var statearr_17419_19897 = state_17362__$1;
(statearr_17419_19897[(2)] = null);

(statearr_17419_19897[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (28))){
var inst_17302 = (state_17362[(19)]);
var inst_17320 = (state_17362[(23)]);
var inst_17320__$1 = cljs.core.seq(inst_17302);
var state_17362__$1 = (function (){var statearr_17421 = state_17362;
(statearr_17421[(23)] = inst_17320__$1);

return statearr_17421;
})();
if(inst_17320__$1){
var statearr_17425_19899 = state_17362__$1;
(statearr_17425_19899[(1)] = (33));

} else {
var statearr_17426_19900 = state_17362__$1;
(statearr_17426_19900[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (25))){
var inst_17305 = (state_17362[(10)]);
var inst_17304 = (state_17362[(20)]);
var inst_17307 = (inst_17305 < inst_17304);
var inst_17308 = inst_17307;
var state_17362__$1 = state_17362;
if(cljs.core.truth_(inst_17308)){
var statearr_17427_19901 = state_17362__$1;
(statearr_17427_19901[(1)] = (27));

} else {
var statearr_17428_19902 = state_17362__$1;
(statearr_17428_19902[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (34))){
var state_17362__$1 = state_17362;
var statearr_17429_19907 = state_17362__$1;
(statearr_17429_19907[(2)] = null);

(statearr_17429_19907[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (17))){
var state_17362__$1 = state_17362;
var statearr_17430_19908 = state_17362__$1;
(statearr_17430_19908[(2)] = null);

(statearr_17430_19908[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (3))){
var inst_17359 = (state_17362[(2)]);
var state_17362__$1 = state_17362;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17362__$1,inst_17359);
} else {
if((state_val_17363 === (12))){
var inst_17289 = (state_17362[(2)]);
var state_17362__$1 = state_17362;
var statearr_17431_19909 = state_17362__$1;
(statearr_17431_19909[(2)] = inst_17289);

(statearr_17431_19909[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (2))){
var state_17362__$1 = state_17362;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17362__$1,(4),ch);
} else {
if((state_val_17363 === (23))){
var state_17362__$1 = state_17362;
var statearr_17432_19911 = state_17362__$1;
(statearr_17432_19911[(2)] = null);

(statearr_17432_19911[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (35))){
var inst_17342 = (state_17362[(2)]);
var state_17362__$1 = state_17362;
var statearr_17433_19917 = state_17362__$1;
(statearr_17433_19917[(2)] = inst_17342);

(statearr_17433_19917[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (19))){
var inst_17258 = (state_17362[(7)]);
var inst_17262 = cljs.core.chunk_first(inst_17258);
var inst_17263 = cljs.core.chunk_rest(inst_17258);
var inst_17264 = cljs.core.count(inst_17262);
var inst_17232 = inst_17263;
var inst_17233 = inst_17262;
var inst_17234 = inst_17264;
var inst_17235 = (0);
var state_17362__$1 = (function (){var statearr_17434 = state_17362;
(statearr_17434[(13)] = inst_17235);

(statearr_17434[(14)] = inst_17233);

(statearr_17434[(16)] = inst_17232);

(statearr_17434[(17)] = inst_17234);

return statearr_17434;
})();
var statearr_17435_19918 = state_17362__$1;
(statearr_17435_19918[(2)] = null);

(statearr_17435_19918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (11))){
var inst_17258 = (state_17362[(7)]);
var inst_17232 = (state_17362[(16)]);
var inst_17258__$1 = cljs.core.seq(inst_17232);
var state_17362__$1 = (function (){var statearr_17439 = state_17362;
(statearr_17439[(7)] = inst_17258__$1);

return statearr_17439;
})();
if(inst_17258__$1){
var statearr_17440_19920 = state_17362__$1;
(statearr_17440_19920[(1)] = (16));

} else {
var statearr_17441_19921 = state_17362__$1;
(statearr_17441_19921[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (9))){
var inst_17291 = (state_17362[(2)]);
var state_17362__$1 = state_17362;
var statearr_17442_19922 = state_17362__$1;
(statearr_17442_19922[(2)] = inst_17291);

(statearr_17442_19922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (5))){
var inst_17230 = cljs.core.deref(cs);
var inst_17231 = cljs.core.seq(inst_17230);
var inst_17232 = inst_17231;
var inst_17233 = null;
var inst_17234 = (0);
var inst_17235 = (0);
var state_17362__$1 = (function (){var statearr_17443 = state_17362;
(statearr_17443[(13)] = inst_17235);

(statearr_17443[(14)] = inst_17233);

(statearr_17443[(16)] = inst_17232);

(statearr_17443[(17)] = inst_17234);

return statearr_17443;
})();
var statearr_17444_19924 = state_17362__$1;
(statearr_17444_19924[(2)] = null);

(statearr_17444_19924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (14))){
var state_17362__$1 = state_17362;
var statearr_17459_19925 = state_17362__$1;
(statearr_17459_19925[(2)] = null);

(statearr_17459_19925[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (45))){
var inst_17351 = (state_17362[(2)]);
var state_17362__$1 = state_17362;
var statearr_17460_19926 = state_17362__$1;
(statearr_17460_19926[(2)] = inst_17351);

(statearr_17460_19926[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (26))){
var inst_17294 = (state_17362[(27)]);
var inst_17347 = (state_17362[(2)]);
var inst_17348 = cljs.core.seq(inst_17294);
var state_17362__$1 = (function (){var statearr_17467 = state_17362;
(statearr_17467[(29)] = inst_17347);

return statearr_17467;
})();
if(inst_17348){
var statearr_17468_19927 = state_17362__$1;
(statearr_17468_19927[(1)] = (42));

} else {
var statearr_17469_19928 = state_17362__$1;
(statearr_17469_19928[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (16))){
var inst_17258 = (state_17362[(7)]);
var inst_17260 = cljs.core.chunked_seq_QMARK_(inst_17258);
var state_17362__$1 = state_17362;
if(inst_17260){
var statearr_17470_19929 = state_17362__$1;
(statearr_17470_19929[(1)] = (19));

} else {
var statearr_17471_19930 = state_17362__$1;
(statearr_17471_19930[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (38))){
var inst_17339 = (state_17362[(2)]);
var state_17362__$1 = state_17362;
var statearr_17472_19935 = state_17362__$1;
(statearr_17472_19935[(2)] = inst_17339);

(statearr_17472_19935[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (30))){
var state_17362__$1 = state_17362;
var statearr_17481_19936 = state_17362__$1;
(statearr_17481_19936[(2)] = null);

(statearr_17481_19936[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (10))){
var inst_17235 = (state_17362[(13)]);
var inst_17233 = (state_17362[(14)]);
var inst_17244 = cljs.core._nth(inst_17233,inst_17235);
var inst_17245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17244,(0),null);
var inst_17246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17244,(1),null);
var state_17362__$1 = (function (){var statearr_17490 = state_17362;
(statearr_17490[(24)] = inst_17245);

return statearr_17490;
})();
if(cljs.core.truth_(inst_17246)){
var statearr_17491_19938 = state_17362__$1;
(statearr_17491_19938[(1)] = (13));

} else {
var statearr_17492_19941 = state_17362__$1;
(statearr_17492_19941[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (18))){
var inst_17287 = (state_17362[(2)]);
var state_17362__$1 = state_17362;
var statearr_17499_19942 = state_17362__$1;
(statearr_17499_19942[(2)] = inst_17287);

(statearr_17499_19942[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (42))){
var state_17362__$1 = state_17362;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17362__$1,(45),dchan);
} else {
if((state_val_17363 === (37))){
var inst_17329 = (state_17362[(22)]);
var inst_17222 = (state_17362[(11)]);
var inst_17320 = (state_17362[(23)]);
var inst_17329__$1 = cljs.core.first(inst_17320);
var inst_17330 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17329__$1,inst_17222,done);
var state_17362__$1 = (function (){var statearr_17500 = state_17362;
(statearr_17500[(22)] = inst_17329__$1);

return statearr_17500;
})();
if(cljs.core.truth_(inst_17330)){
var statearr_17501_19949 = state_17362__$1;
(statearr_17501_19949[(1)] = (39));

} else {
var statearr_17502_19950 = state_17362__$1;
(statearr_17502_19950[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17363 === (8))){
var inst_17235 = (state_17362[(13)]);
var inst_17234 = (state_17362[(17)]);
var inst_17238 = (inst_17235 < inst_17234);
var inst_17239 = inst_17238;
var state_17362__$1 = state_17362;
if(cljs.core.truth_(inst_17239)){
var statearr_17506_19951 = state_17362__$1;
(statearr_17506_19951[(1)] = (10));

} else {
var statearr_17511_19952 = state_17362__$1;
(statearr_17511_19952[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13963__auto__ = null;
var cljs$core$async$mult_$_state_machine__13963__auto____0 = (function (){
var statearr_17514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17514[(0)] = cljs$core$async$mult_$_state_machine__13963__auto__);

(statearr_17514[(1)] = (1));

return statearr_17514;
});
var cljs$core$async$mult_$_state_machine__13963__auto____1 = (function (state_17362){
while(true){
var ret_value__13964__auto__ = (function (){try{while(true){
var result__13965__auto__ = switch__13962__auto__(state_17362);
if(cljs.core.keyword_identical_QMARK_(result__13965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13965__auto__;
}
break;
}
}catch (e17515){var ex__13966__auto__ = e17515;
var statearr_17516_19957 = state_17362;
(statearr_17516_19957[(2)] = ex__13966__auto__);


if(cljs.core.seq((state_17362[(4)]))){
var statearr_17518_19959 = state_17362;
(statearr_17518_19959[(1)] = cljs.core.first((state_17362[(4)])));

} else {
throw ex__13966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19960 = state_17362;
state_17362 = G__19960;
continue;
} else {
return ret_value__13964__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13963__auto__ = function(state_17362){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13963__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13963__auto____1.call(this,state_17362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13963__auto____0;
cljs$core$async$mult_$_state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13963__auto____1;
return cljs$core$async$mult_$_state_machine__13963__auto__;
})()
})();
var state__15503__auto__ = (function (){var statearr_17519 = f__15502__auto__();
(statearr_17519[(6)] = c__15501__auto___19854);

return statearr_17519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15503__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__17521 = arguments.length;
switch (G__17521) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_19967 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_19967(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19969 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_19969(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19972 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19972(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19977 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_19977(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19982 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19982(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19985 = arguments.length;
var i__5727__auto___19986 = (0);
while(true){
if((i__5727__auto___19986 < len__5726__auto___19985)){
args__5732__auto__.push((arguments[i__5727__auto___19986]));

var G__19987 = (i__5727__auto___19986 + (1));
i__5727__auto___19986 = G__19987;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17572){
var map__17573 = p__17572;
var map__17573__$1 = cljs.core.__destructure_map(map__17573);
var opts = map__17573__$1;
var statearr_17574_19991 = state;
(statearr_17574_19991[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_17583_19992 = state;
(statearr_17583_19992[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_17587_19993 = state;
(statearr_17587_19993[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17559){
var G__17560 = cljs.core.first(seq17559);
var seq17559__$1 = cljs.core.next(seq17559);
var G__17561 = cljs.core.first(seq17559__$1);
var seq17559__$2 = cljs.core.next(seq17559__$1);
var G__17562 = cljs.core.first(seq17559__$2);
var seq17559__$3 = cljs.core.next(seq17559__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17560,G__17561,G__17562,seq17559__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17588 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17589){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17589 = meta17589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17590,meta17589__$1){
var self__ = this;
var _17590__$1 = this;
return (new cljs.core.async.t_cljs$core$async17588(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17589__$1));
}));

(cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17590){
var self__ = this;
var _17590__$1 = this;
return self__.meta17589;
}));

(cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async17588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17589","meta17589",-703655030,null)], null);
}));

(cljs.core.async.t_cljs$core$async17588.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17588");

(cljs.core.async.t_cljs$core$async17588.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17588");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17588.
 */
cljs.core.async.__GT_t_cljs$core$async17588 = (function cljs$core$async$__GT_t_cljs$core$async17588(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17589){
return (new cljs.core.async.t_cljs$core$async17588(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17589));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async17588(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__15501__auto___20018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15502__auto__ = (function (){var switch__13962__auto__ = (function (state_17678){
var state_val_17679 = (state_17678[(1)]);
if((state_val_17679 === (7))){
var inst_17636 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
if(cljs.core.truth_(inst_17636)){
var statearr_17680_20019 = state_17678__$1;
(statearr_17680_20019[(1)] = (8));

} else {
var statearr_17681_20020 = state_17678__$1;
(statearr_17681_20020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (20))){
var inst_17629 = (state_17678[(7)]);
var state_17678__$1 = state_17678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17678__$1,(23),out,inst_17629);
} else {
if((state_val_17679 === (1))){
var inst_17610 = calc_state();
var inst_17611 = cljs.core.__destructure_map(inst_17610);
var inst_17612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17611,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17611,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17611,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17615 = inst_17610;
var state_17678__$1 = (function (){var statearr_17682 = state_17678;
(statearr_17682[(8)] = inst_17612);

(statearr_17682[(9)] = inst_17613);

(statearr_17682[(10)] = inst_17615);

(statearr_17682[(11)] = inst_17614);

return statearr_17682;
})();
var statearr_17683_20025 = state_17678__$1;
(statearr_17683_20025[(2)] = null);

(statearr_17683_20025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (24))){
var inst_17618 = (state_17678[(12)]);
var inst_17615 = inst_17618;
var state_17678__$1 = (function (){var statearr_17684 = state_17678;
(statearr_17684[(10)] = inst_17615);

return statearr_17684;
})();
var statearr_17685_20027 = state_17678__$1;
(statearr_17685_20027[(2)] = null);

(statearr_17685_20027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (4))){
var inst_17629 = (state_17678[(7)]);
var inst_17631 = (state_17678[(13)]);
var inst_17628 = (state_17678[(2)]);
var inst_17629__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17628,(0),null);
var inst_17630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17628,(1),null);
var inst_17631__$1 = (inst_17629__$1 == null);
var state_17678__$1 = (function (){var statearr_17686 = state_17678;
(statearr_17686[(7)] = inst_17629__$1);

(statearr_17686[(14)] = inst_17630);

(statearr_17686[(13)] = inst_17631__$1);

return statearr_17686;
})();
if(cljs.core.truth_(inst_17631__$1)){
var statearr_17687_20030 = state_17678__$1;
(statearr_17687_20030[(1)] = (5));

} else {
var statearr_17688_20031 = state_17678__$1;
(statearr_17688_20031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (15))){
var inst_17619 = (state_17678[(15)]);
var inst_17652 = (state_17678[(16)]);
var inst_17652__$1 = cljs.core.empty_QMARK_(inst_17619);
var state_17678__$1 = (function (){var statearr_17692 = state_17678;
(statearr_17692[(16)] = inst_17652__$1);

return statearr_17692;
})();
if(inst_17652__$1){
var statearr_17693_20032 = state_17678__$1;
(statearr_17693_20032[(1)] = (17));

} else {
var statearr_17694_20033 = state_17678__$1;
(statearr_17694_20033[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (21))){
var inst_17618 = (state_17678[(12)]);
var inst_17615 = inst_17618;
var state_17678__$1 = (function (){var statearr_17707 = state_17678;
(statearr_17707[(10)] = inst_17615);

return statearr_17707;
})();
var statearr_17708_20034 = state_17678__$1;
(statearr_17708_20034[(2)] = null);

(statearr_17708_20034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (13))){
var inst_17645 = (state_17678[(2)]);
var inst_17646 = calc_state();
var inst_17615 = inst_17646;
var state_17678__$1 = (function (){var statearr_17709 = state_17678;
(statearr_17709[(17)] = inst_17645);

(statearr_17709[(10)] = inst_17615);

return statearr_17709;
})();
var statearr_17710_20035 = state_17678__$1;
(statearr_17710_20035[(2)] = null);

(statearr_17710_20035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (22))){
var inst_17672 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
var statearr_17711_20036 = state_17678__$1;
(statearr_17711_20036[(2)] = inst_17672);

(statearr_17711_20036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (6))){
var inst_17630 = (state_17678[(14)]);
var inst_17634 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17630,change);
var state_17678__$1 = state_17678;
var statearr_17715_20039 = state_17678__$1;
(statearr_17715_20039[(2)] = inst_17634);

(statearr_17715_20039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (25))){
var state_17678__$1 = state_17678;
var statearr_17720_20040 = state_17678__$1;
(statearr_17720_20040[(2)] = null);

(statearr_17720_20040[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (17))){
var inst_17630 = (state_17678[(14)]);
var inst_17620 = (state_17678[(18)]);
var inst_17654 = (inst_17620.cljs$core$IFn$_invoke$arity$1 ? inst_17620.cljs$core$IFn$_invoke$arity$1(inst_17630) : inst_17620.call(null, inst_17630));
var inst_17655 = cljs.core.not(inst_17654);
var state_17678__$1 = state_17678;
var statearr_17727_20044 = state_17678__$1;
(statearr_17727_20044[(2)] = inst_17655);

(statearr_17727_20044[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (3))){
var inst_17676 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17678__$1,inst_17676);
} else {
if((state_val_17679 === (12))){
var state_17678__$1 = state_17678;
var statearr_17728_20045 = state_17678__$1;
(statearr_17728_20045[(2)] = null);

(statearr_17728_20045[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (2))){
var inst_17618 = (state_17678[(12)]);
var inst_17615 = (state_17678[(10)]);
var inst_17618__$1 = cljs.core.__destructure_map(inst_17615);
var inst_17619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17618__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17618__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17618__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17678__$1 = (function (){var statearr_17736 = state_17678;
(statearr_17736[(15)] = inst_17619);

(statearr_17736[(12)] = inst_17618__$1);

(statearr_17736[(18)] = inst_17620);

return statearr_17736;
})();
return cljs.core.async.ioc_alts_BANG_(state_17678__$1,(4),inst_17621);
} else {
if((state_val_17679 === (23))){
var inst_17663 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
if(cljs.core.truth_(inst_17663)){
var statearr_17740_20046 = state_17678__$1;
(statearr_17740_20046[(1)] = (24));

} else {
var statearr_17741_20047 = state_17678__$1;
(statearr_17741_20047[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (19))){
var inst_17658 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
var statearr_17742_20048 = state_17678__$1;
(statearr_17742_20048[(2)] = inst_17658);

(statearr_17742_20048[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (11))){
var inst_17630 = (state_17678[(14)]);
var inst_17642 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17630);
var state_17678__$1 = state_17678;
var statearr_17743_20050 = state_17678__$1;
(statearr_17743_20050[(2)] = inst_17642);

(statearr_17743_20050[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (9))){
var inst_17619 = (state_17678[(15)]);
var inst_17630 = (state_17678[(14)]);
var inst_17649 = (state_17678[(19)]);
var inst_17649__$1 = (inst_17619.cljs$core$IFn$_invoke$arity$1 ? inst_17619.cljs$core$IFn$_invoke$arity$1(inst_17630) : inst_17619.call(null, inst_17630));
var state_17678__$1 = (function (){var statearr_17754 = state_17678;
(statearr_17754[(19)] = inst_17649__$1);

return statearr_17754;
})();
if(cljs.core.truth_(inst_17649__$1)){
var statearr_17758_20051 = state_17678__$1;
(statearr_17758_20051[(1)] = (14));

} else {
var statearr_17759_20052 = state_17678__$1;
(statearr_17759_20052[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (5))){
var inst_17631 = (state_17678[(13)]);
var state_17678__$1 = state_17678;
var statearr_17764_20053 = state_17678__$1;
(statearr_17764_20053[(2)] = inst_17631);

(statearr_17764_20053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (14))){
var inst_17649 = (state_17678[(19)]);
var state_17678__$1 = state_17678;
var statearr_17765_20054 = state_17678__$1;
(statearr_17765_20054[(2)] = inst_17649);

(statearr_17765_20054[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (26))){
var inst_17668 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
var statearr_17768_20055 = state_17678__$1;
(statearr_17768_20055[(2)] = inst_17668);

(statearr_17768_20055[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (16))){
var inst_17660 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
if(cljs.core.truth_(inst_17660)){
var statearr_17769_20059 = state_17678__$1;
(statearr_17769_20059[(1)] = (20));

} else {
var statearr_17770_20060 = state_17678__$1;
(statearr_17770_20060[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (10))){
var inst_17674 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
var statearr_17771_20061 = state_17678__$1;
(statearr_17771_20061[(2)] = inst_17674);

(statearr_17771_20061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (18))){
var inst_17652 = (state_17678[(16)]);
var state_17678__$1 = state_17678;
var statearr_17775_20062 = state_17678__$1;
(statearr_17775_20062[(2)] = inst_17652);

(statearr_17775_20062[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (8))){
var inst_17629 = (state_17678[(7)]);
var inst_17640 = (inst_17629 == null);
var state_17678__$1 = state_17678;
if(cljs.core.truth_(inst_17640)){
var statearr_17780_20063 = state_17678__$1;
(statearr_17780_20063[(1)] = (11));

} else {
var statearr_17784_20064 = state_17678__$1;
(statearr_17784_20064[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13963__auto__ = null;
var cljs$core$async$mix_$_state_machine__13963__auto____0 = (function (){
var statearr_17789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17789[(0)] = cljs$core$async$mix_$_state_machine__13963__auto__);

(statearr_17789[(1)] = (1));

return statearr_17789;
});
var cljs$core$async$mix_$_state_machine__13963__auto____1 = (function (state_17678){
while(true){
var ret_value__13964__auto__ = (function (){try{while(true){
var result__13965__auto__ = switch__13962__auto__(state_17678);
if(cljs.core.keyword_identical_QMARK_(result__13965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13965__auto__;
}
break;
}
}catch (e17793){var ex__13966__auto__ = e17793;
var statearr_17794_20065 = state_17678;
(statearr_17794_20065[(2)] = ex__13966__auto__);


if(cljs.core.seq((state_17678[(4)]))){
var statearr_17795_20066 = state_17678;
(statearr_17795_20066[(1)] = cljs.core.first((state_17678[(4)])));

} else {
throw ex__13966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20067 = state_17678;
state_17678 = G__20067;
continue;
} else {
return ret_value__13964__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13963__auto__ = function(state_17678){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13963__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13963__auto____1.call(this,state_17678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13963__auto____0;
cljs$core$async$mix_$_state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13963__auto____1;
return cljs$core$async$mix_$_state_machine__13963__auto__;
})()
})();
var state__15503__auto__ = (function (){var statearr_17799 = f__15502__auto__();
(statearr_17799[(6)] = c__15501__auto___20018);

return statearr_17799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15503__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20069 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20069(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20070 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20070(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20073 = (function() {
var G__20074 = null;
var G__20074__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20074__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20074 = function(p,v){
switch(arguments.length){
case 1:
return G__20074__1.call(this,p);
case 2:
return G__20074__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20074.cljs$core$IFn$_invoke$arity$1 = G__20074__1;
G__20074.cljs$core$IFn$_invoke$arity$2 = G__20074__2;
return G__20074;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17836 = arguments.length;
switch (G__17836) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20073(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20073(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17891 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17892){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17892 = meta17892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17893,meta17892__$1){
var self__ = this;
var _17893__$1 = this;
return (new cljs.core.async.t_cljs$core$async17891(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17892__$1));
}));

(cljs.core.async.t_cljs$core$async17891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17893){
var self__ = this;
var _17893__$1 = this;
return self__.meta17892;
}));

(cljs.core.async.t_cljs$core$async17891.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17891.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17891.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17891.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17891.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async17891.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17891.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17892","meta17892",1965797379,null)], null);
}));

(cljs.core.async.t_cljs$core$async17891.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17891");

(cljs.core.async.t_cljs$core$async17891.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17891");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17891.
 */
cljs.core.async.__GT_t_cljs$core$async17891 = (function cljs$core$async$__GT_t_cljs$core$async17891(ch,topic_fn,buf_fn,mults,ensure_mult,meta17892){
return (new cljs.core.async.t_cljs$core$async17891(ch,topic_fn,buf_fn,mults,ensure_mult,meta17892));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__17851 = arguments.length;
switch (G__17851) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17847_SHARP_){
if(cljs.core.truth_((p1__17847_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17847_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17847_SHARP_.call(null, topic)))){
return p1__17847_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17847_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async17891(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__15501__auto___20089 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15502__auto__ = (function (){var switch__13962__auto__ = (function (state_18028){
var state_val_18029 = (state_18028[(1)]);
if((state_val_18029 === (7))){
var inst_18024 = (state_18028[(2)]);
var state_18028__$1 = state_18028;
var statearr_18031_20091 = state_18028__$1;
(statearr_18031_20091[(2)] = inst_18024);

(statearr_18031_20091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (20))){
var state_18028__$1 = state_18028;
var statearr_18032_20092 = state_18028__$1;
(statearr_18032_20092[(2)] = null);

(statearr_18032_20092[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (1))){
var state_18028__$1 = state_18028;
var statearr_18033_20093 = state_18028__$1;
(statearr_18033_20093[(2)] = null);

(statearr_18033_20093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (24))){
var inst_18007 = (state_18028[(7)]);
var inst_18016 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18007);
var state_18028__$1 = state_18028;
var statearr_18034_20094 = state_18028__$1;
(statearr_18034_20094[(2)] = inst_18016);

(statearr_18034_20094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (4))){
var inst_17959 = (state_18028[(8)]);
var inst_17959__$1 = (state_18028[(2)]);
var inst_17960 = (inst_17959__$1 == null);
var state_18028__$1 = (function (){var statearr_18035 = state_18028;
(statearr_18035[(8)] = inst_17959__$1);

return statearr_18035;
})();
if(cljs.core.truth_(inst_17960)){
var statearr_18036_20096 = state_18028__$1;
(statearr_18036_20096[(1)] = (5));

} else {
var statearr_18037_20097 = state_18028__$1;
(statearr_18037_20097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (15))){
var inst_18001 = (state_18028[(2)]);
var state_18028__$1 = state_18028;
var statearr_18038_20098 = state_18028__$1;
(statearr_18038_20098[(2)] = inst_18001);

(statearr_18038_20098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (21))){
var inst_18021 = (state_18028[(2)]);
var state_18028__$1 = (function (){var statearr_18047 = state_18028;
(statearr_18047[(9)] = inst_18021);

return statearr_18047;
})();
var statearr_18048_20099 = state_18028__$1;
(statearr_18048_20099[(2)] = null);

(statearr_18048_20099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (13))){
var inst_17983 = (state_18028[(10)]);
var inst_17985 = cljs.core.chunked_seq_QMARK_(inst_17983);
var state_18028__$1 = state_18028;
if(inst_17985){
var statearr_18049_20100 = state_18028__$1;
(statearr_18049_20100[(1)] = (16));

} else {
var statearr_18050_20101 = state_18028__$1;
(statearr_18050_20101[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (22))){
var inst_18013 = (state_18028[(2)]);
var state_18028__$1 = state_18028;
if(cljs.core.truth_(inst_18013)){
var statearr_18051_20102 = state_18028__$1;
(statearr_18051_20102[(1)] = (23));

} else {
var statearr_18052_20103 = state_18028__$1;
(statearr_18052_20103[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (6))){
var inst_17959 = (state_18028[(8)]);
var inst_18009 = (state_18028[(11)]);
var inst_18007 = (state_18028[(7)]);
var inst_18007__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17959) : topic_fn.call(null, inst_17959));
var inst_18008 = cljs.core.deref(mults);
var inst_18009__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18008,inst_18007__$1);
var state_18028__$1 = (function (){var statearr_18054 = state_18028;
(statearr_18054[(11)] = inst_18009__$1);

(statearr_18054[(7)] = inst_18007__$1);

return statearr_18054;
})();
if(cljs.core.truth_(inst_18009__$1)){
var statearr_18055_20104 = state_18028__$1;
(statearr_18055_20104[(1)] = (19));

} else {
var statearr_18056_20105 = state_18028__$1;
(statearr_18056_20105[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (25))){
var inst_18018 = (state_18028[(2)]);
var state_18028__$1 = state_18028;
var statearr_18058_20106 = state_18028__$1;
(statearr_18058_20106[(2)] = inst_18018);

(statearr_18058_20106[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (17))){
var inst_17983 = (state_18028[(10)]);
var inst_17992 = cljs.core.first(inst_17983);
var inst_17993 = cljs.core.async.muxch_STAR_(inst_17992);
var inst_17994 = cljs.core.async.close_BANG_(inst_17993);
var inst_17995 = cljs.core.next(inst_17983);
var inst_17969 = inst_17995;
var inst_17970 = null;
var inst_17971 = (0);
var inst_17972 = (0);
var state_18028__$1 = (function (){var statearr_18059 = state_18028;
(statearr_18059[(12)] = inst_17994);

(statearr_18059[(13)] = inst_17969);

(statearr_18059[(14)] = inst_17970);

(statearr_18059[(15)] = inst_17972);

(statearr_18059[(16)] = inst_17971);

return statearr_18059;
})();
var statearr_18060_20107 = state_18028__$1;
(statearr_18060_20107[(2)] = null);

(statearr_18060_20107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (3))){
var inst_18026 = (state_18028[(2)]);
var state_18028__$1 = state_18028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18028__$1,inst_18026);
} else {
if((state_val_18029 === (12))){
var inst_18003 = (state_18028[(2)]);
var state_18028__$1 = state_18028;
var statearr_18061_20108 = state_18028__$1;
(statearr_18061_20108[(2)] = inst_18003);

(statearr_18061_20108[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (2))){
var state_18028__$1 = state_18028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18028__$1,(4),ch);
} else {
if((state_val_18029 === (23))){
var state_18028__$1 = state_18028;
var statearr_18062_20109 = state_18028__$1;
(statearr_18062_20109[(2)] = null);

(statearr_18062_20109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (19))){
var inst_17959 = (state_18028[(8)]);
var inst_18009 = (state_18028[(11)]);
var inst_18011 = cljs.core.async.muxch_STAR_(inst_18009);
var state_18028__$1 = state_18028;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18028__$1,(22),inst_18011,inst_17959);
} else {
if((state_val_18029 === (11))){
var inst_17969 = (state_18028[(13)]);
var inst_17983 = (state_18028[(10)]);
var inst_17983__$1 = cljs.core.seq(inst_17969);
var state_18028__$1 = (function (){var statearr_18063 = state_18028;
(statearr_18063[(10)] = inst_17983__$1);

return statearr_18063;
})();
if(inst_17983__$1){
var statearr_18064_20110 = state_18028__$1;
(statearr_18064_20110[(1)] = (13));

} else {
var statearr_18065_20111 = state_18028__$1;
(statearr_18065_20111[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (9))){
var inst_18005 = (state_18028[(2)]);
var state_18028__$1 = state_18028;
var statearr_18070_20114 = state_18028__$1;
(statearr_18070_20114[(2)] = inst_18005);

(statearr_18070_20114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (5))){
var inst_17966 = cljs.core.deref(mults);
var inst_17967 = cljs.core.vals(inst_17966);
var inst_17968 = cljs.core.seq(inst_17967);
var inst_17969 = inst_17968;
var inst_17970 = null;
var inst_17971 = (0);
var inst_17972 = (0);
var state_18028__$1 = (function (){var statearr_18078 = state_18028;
(statearr_18078[(13)] = inst_17969);

(statearr_18078[(14)] = inst_17970);

(statearr_18078[(15)] = inst_17972);

(statearr_18078[(16)] = inst_17971);

return statearr_18078;
})();
var statearr_18079_20116 = state_18028__$1;
(statearr_18079_20116[(2)] = null);

(statearr_18079_20116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (14))){
var state_18028__$1 = state_18028;
var statearr_18083_20118 = state_18028__$1;
(statearr_18083_20118[(2)] = null);

(statearr_18083_20118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (16))){
var inst_17983 = (state_18028[(10)]);
var inst_17987 = cljs.core.chunk_first(inst_17983);
var inst_17988 = cljs.core.chunk_rest(inst_17983);
var inst_17989 = cljs.core.count(inst_17987);
var inst_17969 = inst_17988;
var inst_17970 = inst_17987;
var inst_17971 = inst_17989;
var inst_17972 = (0);
var state_18028__$1 = (function (){var statearr_18085 = state_18028;
(statearr_18085[(13)] = inst_17969);

(statearr_18085[(14)] = inst_17970);

(statearr_18085[(15)] = inst_17972);

(statearr_18085[(16)] = inst_17971);

return statearr_18085;
})();
var statearr_18086_20121 = state_18028__$1;
(statearr_18086_20121[(2)] = null);

(statearr_18086_20121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (10))){
var inst_17969 = (state_18028[(13)]);
var inst_17970 = (state_18028[(14)]);
var inst_17972 = (state_18028[(15)]);
var inst_17971 = (state_18028[(16)]);
var inst_17977 = cljs.core._nth(inst_17970,inst_17972);
var inst_17978 = cljs.core.async.muxch_STAR_(inst_17977);
var inst_17979 = cljs.core.async.close_BANG_(inst_17978);
var inst_17980 = (inst_17972 + (1));
var tmp18080 = inst_17969;
var tmp18081 = inst_17970;
var tmp18082 = inst_17971;
var inst_17969__$1 = tmp18080;
var inst_17970__$1 = tmp18081;
var inst_17971__$1 = tmp18082;
var inst_17972__$1 = inst_17980;
var state_18028__$1 = (function (){var statearr_18087 = state_18028;
(statearr_18087[(17)] = inst_17979);

(statearr_18087[(13)] = inst_17969__$1);

(statearr_18087[(14)] = inst_17970__$1);

(statearr_18087[(15)] = inst_17972__$1);

(statearr_18087[(16)] = inst_17971__$1);

return statearr_18087;
})();
var statearr_18097_20123 = state_18028__$1;
(statearr_18097_20123[(2)] = null);

(statearr_18097_20123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (18))){
var inst_17998 = (state_18028[(2)]);
var state_18028__$1 = state_18028;
var statearr_18098_20124 = state_18028__$1;
(statearr_18098_20124[(2)] = inst_17998);

(statearr_18098_20124[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18029 === (8))){
var inst_17972 = (state_18028[(15)]);
var inst_17971 = (state_18028[(16)]);
var inst_17974 = (inst_17972 < inst_17971);
var inst_17975 = inst_17974;
var state_18028__$1 = state_18028;
if(cljs.core.truth_(inst_17975)){
var statearr_18099_20125 = state_18028__$1;
(statearr_18099_20125[(1)] = (10));

} else {
var statearr_18100_20126 = state_18028__$1;
(statearr_18100_20126[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13963__auto__ = null;
var cljs$core$async$state_machine__13963__auto____0 = (function (){
var statearr_18106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18106[(0)] = cljs$core$async$state_machine__13963__auto__);

(statearr_18106[(1)] = (1));

return statearr_18106;
});
var cljs$core$async$state_machine__13963__auto____1 = (function (state_18028){
while(true){
var ret_value__13964__auto__ = (function (){try{while(true){
var result__13965__auto__ = switch__13962__auto__(state_18028);
if(cljs.core.keyword_identical_QMARK_(result__13965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13965__auto__;
}
break;
}
}catch (e18109){var ex__13966__auto__ = e18109;
var statearr_18110_20127 = state_18028;
(statearr_18110_20127[(2)] = ex__13966__auto__);


if(cljs.core.seq((state_18028[(4)]))){
var statearr_18111_20130 = state_18028;
(statearr_18111_20130[(1)] = cljs.core.first((state_18028[(4)])));

} else {
throw ex__13966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20131 = state_18028;
state_18028 = G__20131;
continue;
} else {
return ret_value__13964__auto__;
}
break;
}
});
cljs$core$async$state_machine__13963__auto__ = function(state_18028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13963__auto____1.call(this,state_18028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13963__auto____0;
cljs$core$async$state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13963__auto____1;
return cljs$core$async$state_machine__13963__auto__;
})()
})();
var state__15503__auto__ = (function (){var statearr_18112 = f__15502__auto__();
(statearr_18112[(6)] = c__15501__auto___20089);

return statearr_18112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15503__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18124 = arguments.length;
switch (G__18124) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18132 = arguments.length;
switch (G__18132) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__18140 = arguments.length;
switch (G__18140) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__15501__auto___20153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15502__auto__ = (function (){var switch__13962__auto__ = (function (state_18227){
var state_val_18228 = (state_18227[(1)]);
if((state_val_18228 === (7))){
var state_18227__$1 = state_18227;
var statearr_18232_20157 = state_18227__$1;
(statearr_18232_20157[(2)] = null);

(statearr_18232_20157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (1))){
var state_18227__$1 = state_18227;
var statearr_18233_20159 = state_18227__$1;
(statearr_18233_20159[(2)] = null);

(statearr_18233_20159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (4))){
var inst_18158 = (state_18227[(7)]);
var inst_18157 = (state_18227[(8)]);
var inst_18161 = (inst_18158 < inst_18157);
var state_18227__$1 = state_18227;
if(cljs.core.truth_(inst_18161)){
var statearr_18234_20161 = state_18227__$1;
(statearr_18234_20161[(1)] = (6));

} else {
var statearr_18236_20162 = state_18227__$1;
(statearr_18236_20162[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (15))){
var inst_18213 = (state_18227[(9)]);
var inst_18218 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18213);
var state_18227__$1 = state_18227;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18227__$1,(17),out,inst_18218);
} else {
if((state_val_18228 === (13))){
var inst_18213 = (state_18227[(9)]);
var inst_18213__$1 = (state_18227[(2)]);
var inst_18214 = cljs.core.some(cljs.core.nil_QMARK_,inst_18213__$1);
var state_18227__$1 = (function (){var statearr_18237 = state_18227;
(statearr_18237[(9)] = inst_18213__$1);

return statearr_18237;
})();
if(cljs.core.truth_(inst_18214)){
var statearr_18238_20171 = state_18227__$1;
(statearr_18238_20171[(1)] = (14));

} else {
var statearr_18239_20172 = state_18227__$1;
(statearr_18239_20172[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (6))){
var state_18227__$1 = state_18227;
var statearr_18240_20173 = state_18227__$1;
(statearr_18240_20173[(2)] = null);

(statearr_18240_20173[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (17))){
var inst_18220 = (state_18227[(2)]);
var state_18227__$1 = (function (){var statearr_18250 = state_18227;
(statearr_18250[(10)] = inst_18220);

return statearr_18250;
})();
var statearr_18251_20174 = state_18227__$1;
(statearr_18251_20174[(2)] = null);

(statearr_18251_20174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (3))){
var inst_18225 = (state_18227[(2)]);
var state_18227__$1 = state_18227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18227__$1,inst_18225);
} else {
if((state_val_18228 === (12))){
var _ = (function (){var statearr_18258 = state_18227;
(statearr_18258[(4)] = cljs.core.rest((state_18227[(4)])));

return statearr_18258;
})();
var state_18227__$1 = state_18227;
var ex18245 = (state_18227__$1[(2)]);
var statearr_18262_20181 = state_18227__$1;
(statearr_18262_20181[(5)] = ex18245);


if((ex18245 instanceof Object)){
var statearr_18270_20182 = state_18227__$1;
(statearr_18270_20182[(1)] = (11));

(statearr_18270_20182[(5)] = null);

} else {
throw ex18245;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (2))){
var inst_18156 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18157 = cnt;
var inst_18158 = (0);
var state_18227__$1 = (function (){var statearr_18273 = state_18227;
(statearr_18273[(11)] = inst_18156);

(statearr_18273[(7)] = inst_18158);

(statearr_18273[(8)] = inst_18157);

return statearr_18273;
})();
var statearr_18286_20187 = state_18227__$1;
(statearr_18286_20187[(2)] = null);

(statearr_18286_20187[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (11))){
var inst_18192 = (state_18227[(2)]);
var inst_18193 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18227__$1 = (function (){var statearr_18290 = state_18227;
(statearr_18290[(12)] = inst_18192);

return statearr_18290;
})();
var statearr_18291_20188 = state_18227__$1;
(statearr_18291_20188[(2)] = inst_18193);

(statearr_18291_20188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (9))){
var inst_18158 = (state_18227[(7)]);
var _ = (function (){var statearr_18292 = state_18227;
(statearr_18292[(4)] = cljs.core.cons((12),(state_18227[(4)])));

return statearr_18292;
})();
var inst_18199 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18158) : chs__$1.call(null, inst_18158));
var inst_18200 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18158) : done.call(null, inst_18158));
var inst_18201 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18199,inst_18200);
var ___$1 = (function (){var statearr_18294 = state_18227;
(statearr_18294[(4)] = cljs.core.rest((state_18227[(4)])));

return statearr_18294;
})();
var state_18227__$1 = state_18227;
var statearr_18301_20193 = state_18227__$1;
(statearr_18301_20193[(2)] = inst_18201);

(statearr_18301_20193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (5))){
var inst_18211 = (state_18227[(2)]);
var state_18227__$1 = (function (){var statearr_18305 = state_18227;
(statearr_18305[(13)] = inst_18211);

return statearr_18305;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18227__$1,(13),dchan);
} else {
if((state_val_18228 === (14))){
var inst_18216 = cljs.core.async.close_BANG_(out);
var state_18227__$1 = state_18227;
var statearr_18306_20198 = state_18227__$1;
(statearr_18306_20198[(2)] = inst_18216);

(statearr_18306_20198[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (16))){
var inst_18223 = (state_18227[(2)]);
var state_18227__$1 = state_18227;
var statearr_18308_20200 = state_18227__$1;
(statearr_18308_20200[(2)] = inst_18223);

(statearr_18308_20200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (10))){
var inst_18158 = (state_18227[(7)]);
var inst_18204 = (state_18227[(2)]);
var inst_18205 = (inst_18158 + (1));
var inst_18158__$1 = inst_18205;
var state_18227__$1 = (function (){var statearr_18309 = state_18227;
(statearr_18309[(14)] = inst_18204);

(statearr_18309[(7)] = inst_18158__$1);

return statearr_18309;
})();
var statearr_18310_20203 = state_18227__$1;
(statearr_18310_20203[(2)] = null);

(statearr_18310_20203[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18228 === (8))){
var inst_18209 = (state_18227[(2)]);
var state_18227__$1 = state_18227;
var statearr_18312_20204 = state_18227__$1;
(statearr_18312_20204[(2)] = inst_18209);

(statearr_18312_20204[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13963__auto__ = null;
var cljs$core$async$state_machine__13963__auto____0 = (function (){
var statearr_18314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18314[(0)] = cljs$core$async$state_machine__13963__auto__);

(statearr_18314[(1)] = (1));

return statearr_18314;
});
var cljs$core$async$state_machine__13963__auto____1 = (function (state_18227){
while(true){
var ret_value__13964__auto__ = (function (){try{while(true){
var result__13965__auto__ = switch__13962__auto__(state_18227);
if(cljs.core.keyword_identical_QMARK_(result__13965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13965__auto__;
}
break;
}
}catch (e18315){var ex__13966__auto__ = e18315;
var statearr_18316_20205 = state_18227;
(statearr_18316_20205[(2)] = ex__13966__auto__);


if(cljs.core.seq((state_18227[(4)]))){
var statearr_18322_20206 = state_18227;
(statearr_18322_20206[(1)] = cljs.core.first((state_18227[(4)])));

} else {
throw ex__13966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20207 = state_18227;
state_18227 = G__20207;
continue;
} else {
return ret_value__13964__auto__;
}
break;
}
});
cljs$core$async$state_machine__13963__auto__ = function(state_18227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13963__auto____1.call(this,state_18227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13963__auto____0;
cljs$core$async$state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13963__auto____1;
return cljs$core$async$state_machine__13963__auto__;
})()
})();
var state__15503__auto__ = (function (){var statearr_18331 = f__15502__auto__();
(statearr_18331[(6)] = c__15501__auto___20153);

return statearr_18331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15503__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18334 = arguments.length;
switch (G__18334) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15501__auto___20212 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15502__auto__ = (function (){var switch__13962__auto__ = (function (state_18377){
var state_val_18378 = (state_18377[(1)]);
if((state_val_18378 === (7))){
var inst_18350 = (state_18377[(7)]);
var inst_18351 = (state_18377[(8)]);
var inst_18350__$1 = (state_18377[(2)]);
var inst_18351__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18350__$1,(0),null);
var inst_18352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18350__$1,(1),null);
var inst_18353 = (inst_18351__$1 == null);
var state_18377__$1 = (function (){var statearr_18382 = state_18377;
(statearr_18382[(7)] = inst_18350__$1);

(statearr_18382[(8)] = inst_18351__$1);

(statearr_18382[(9)] = inst_18352);

return statearr_18382;
})();
if(cljs.core.truth_(inst_18353)){
var statearr_18383_20216 = state_18377__$1;
(statearr_18383_20216[(1)] = (8));

} else {
var statearr_18384_20217 = state_18377__$1;
(statearr_18384_20217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18378 === (1))){
var inst_18340 = cljs.core.vec(chs);
var inst_18341 = inst_18340;
var state_18377__$1 = (function (){var statearr_18385 = state_18377;
(statearr_18385[(10)] = inst_18341);

return statearr_18385;
})();
var statearr_18386_20219 = state_18377__$1;
(statearr_18386_20219[(2)] = null);

(statearr_18386_20219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18378 === (4))){
var inst_18341 = (state_18377[(10)]);
var state_18377__$1 = state_18377;
return cljs.core.async.ioc_alts_BANG_(state_18377__$1,(7),inst_18341);
} else {
if((state_val_18378 === (6))){
var inst_18373 = (state_18377[(2)]);
var state_18377__$1 = state_18377;
var statearr_18392_20221 = state_18377__$1;
(statearr_18392_20221[(2)] = inst_18373);

(statearr_18392_20221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18378 === (3))){
var inst_18375 = (state_18377[(2)]);
var state_18377__$1 = state_18377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18377__$1,inst_18375);
} else {
if((state_val_18378 === (2))){
var inst_18341 = (state_18377[(10)]);
var inst_18343 = cljs.core.count(inst_18341);
var inst_18344 = (inst_18343 > (0));
var state_18377__$1 = state_18377;
if(cljs.core.truth_(inst_18344)){
var statearr_18398_20222 = state_18377__$1;
(statearr_18398_20222[(1)] = (4));

} else {
var statearr_18399_20223 = state_18377__$1;
(statearr_18399_20223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18378 === (11))){
var inst_18341 = (state_18377[(10)]);
var inst_18366 = (state_18377[(2)]);
var tmp18393 = inst_18341;
var inst_18341__$1 = tmp18393;
var state_18377__$1 = (function (){var statearr_18400 = state_18377;
(statearr_18400[(11)] = inst_18366);

(statearr_18400[(10)] = inst_18341__$1);

return statearr_18400;
})();
var statearr_18401_20224 = state_18377__$1;
(statearr_18401_20224[(2)] = null);

(statearr_18401_20224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18378 === (9))){
var inst_18351 = (state_18377[(8)]);
var state_18377__$1 = state_18377;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18377__$1,(11),out,inst_18351);
} else {
if((state_val_18378 === (5))){
var inst_18371 = cljs.core.async.close_BANG_(out);
var state_18377__$1 = state_18377;
var statearr_18413_20226 = state_18377__$1;
(statearr_18413_20226[(2)] = inst_18371);

(statearr_18413_20226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18378 === (10))){
var inst_18369 = (state_18377[(2)]);
var state_18377__$1 = state_18377;
var statearr_18417_20227 = state_18377__$1;
(statearr_18417_20227[(2)] = inst_18369);

(statearr_18417_20227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18378 === (8))){
var inst_18350 = (state_18377[(7)]);
var inst_18351 = (state_18377[(8)]);
var inst_18352 = (state_18377[(9)]);
var inst_18341 = (state_18377[(10)]);
var inst_18361 = (function (){var cs = inst_18341;
var vec__18346 = inst_18350;
var v = inst_18351;
var c = inst_18352;
return (function (p1__18332_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18332_SHARP_);
});
})();
var inst_18362 = cljs.core.filterv(inst_18361,inst_18341);
var inst_18341__$1 = inst_18362;
var state_18377__$1 = (function (){var statearr_18418 = state_18377;
(statearr_18418[(10)] = inst_18341__$1);

return statearr_18418;
})();
var statearr_18419_20233 = state_18377__$1;
(statearr_18419_20233[(2)] = null);

(statearr_18419_20233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13963__auto__ = null;
var cljs$core$async$state_machine__13963__auto____0 = (function (){
var statearr_18423 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18423[(0)] = cljs$core$async$state_machine__13963__auto__);

(statearr_18423[(1)] = (1));

return statearr_18423;
});
var cljs$core$async$state_machine__13963__auto____1 = (function (state_18377){
while(true){
var ret_value__13964__auto__ = (function (){try{while(true){
var result__13965__auto__ = switch__13962__auto__(state_18377);
if(cljs.core.keyword_identical_QMARK_(result__13965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13965__auto__;
}
break;
}
}catch (e18424){var ex__13966__auto__ = e18424;
var statearr_18425_20237 = state_18377;
(statearr_18425_20237[(2)] = ex__13966__auto__);


if(cljs.core.seq((state_18377[(4)]))){
var statearr_18426_20239 = state_18377;
(statearr_18426_20239[(1)] = cljs.core.first((state_18377[(4)])));

} else {
throw ex__13966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20240 = state_18377;
state_18377 = G__20240;
continue;
} else {
return ret_value__13964__auto__;
}
break;
}
});
cljs$core$async$state_machine__13963__auto__ = function(state_18377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13963__auto____1.call(this,state_18377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13963__auto____0;
cljs$core$async$state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13963__auto____1;
return cljs$core$async$state_machine__13963__auto__;
})()
})();
var state__15503__auto__ = (function (){var statearr_18429 = f__15502__auto__();
(statearr_18429[(6)] = c__15501__auto___20212);

return statearr_18429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15503__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18435 = arguments.length;
switch (G__18435) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15501__auto___20246 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15502__auto__ = (function (){var switch__13962__auto__ = (function (state_18465){
var state_val_18466 = (state_18465[(1)]);
if((state_val_18466 === (7))){
var inst_18447 = (state_18465[(7)]);
var inst_18447__$1 = (state_18465[(2)]);
var inst_18448 = (inst_18447__$1 == null);
var inst_18449 = cljs.core.not(inst_18448);
var state_18465__$1 = (function (){var statearr_18467 = state_18465;
(statearr_18467[(7)] = inst_18447__$1);

return statearr_18467;
})();
if(inst_18449){
var statearr_18468_20247 = state_18465__$1;
(statearr_18468_20247[(1)] = (8));

} else {
var statearr_18469_20249 = state_18465__$1;
(statearr_18469_20249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18466 === (1))){
var inst_18437 = (0);
var state_18465__$1 = (function (){var statearr_18470 = state_18465;
(statearr_18470[(8)] = inst_18437);

return statearr_18470;
})();
var statearr_18471_20251 = state_18465__$1;
(statearr_18471_20251[(2)] = null);

(statearr_18471_20251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18466 === (4))){
var state_18465__$1 = state_18465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18465__$1,(7),ch);
} else {
if((state_val_18466 === (6))){
var inst_18460 = (state_18465[(2)]);
var state_18465__$1 = state_18465;
var statearr_18474_20252 = state_18465__$1;
(statearr_18474_20252[(2)] = inst_18460);

(statearr_18474_20252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18466 === (3))){
var inst_18462 = (state_18465[(2)]);
var inst_18463 = cljs.core.async.close_BANG_(out);
var state_18465__$1 = (function (){var statearr_18475 = state_18465;
(statearr_18475[(9)] = inst_18462);

return statearr_18475;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18465__$1,inst_18463);
} else {
if((state_val_18466 === (2))){
var inst_18437 = (state_18465[(8)]);
var inst_18441 = (inst_18437 < n);
var state_18465__$1 = state_18465;
if(cljs.core.truth_(inst_18441)){
var statearr_18476_20260 = state_18465__$1;
(statearr_18476_20260[(1)] = (4));

} else {
var statearr_18477_20261 = state_18465__$1;
(statearr_18477_20261[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18466 === (11))){
var inst_18437 = (state_18465[(8)]);
var inst_18452 = (state_18465[(2)]);
var inst_18453 = (inst_18437 + (1));
var inst_18437__$1 = inst_18453;
var state_18465__$1 = (function (){var statearr_18478 = state_18465;
(statearr_18478[(10)] = inst_18452);

(statearr_18478[(8)] = inst_18437__$1);

return statearr_18478;
})();
var statearr_18479_20266 = state_18465__$1;
(statearr_18479_20266[(2)] = null);

(statearr_18479_20266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18466 === (9))){
var state_18465__$1 = state_18465;
var statearr_18480_20268 = state_18465__$1;
(statearr_18480_20268[(2)] = null);

(statearr_18480_20268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18466 === (5))){
var state_18465__$1 = state_18465;
var statearr_18481_20272 = state_18465__$1;
(statearr_18481_20272[(2)] = null);

(statearr_18481_20272[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18466 === (10))){
var inst_18457 = (state_18465[(2)]);
var state_18465__$1 = state_18465;
var statearr_18483_20273 = state_18465__$1;
(statearr_18483_20273[(2)] = inst_18457);

(statearr_18483_20273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18466 === (8))){
var inst_18447 = (state_18465[(7)]);
var state_18465__$1 = state_18465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18465__$1,(11),out,inst_18447);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13963__auto__ = null;
var cljs$core$async$state_machine__13963__auto____0 = (function (){
var statearr_18485 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18485[(0)] = cljs$core$async$state_machine__13963__auto__);

(statearr_18485[(1)] = (1));

return statearr_18485;
});
var cljs$core$async$state_machine__13963__auto____1 = (function (state_18465){
while(true){
var ret_value__13964__auto__ = (function (){try{while(true){
var result__13965__auto__ = switch__13962__auto__(state_18465);
if(cljs.core.keyword_identical_QMARK_(result__13965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13965__auto__;
}
break;
}
}catch (e18489){var ex__13966__auto__ = e18489;
var statearr_18490_20276 = state_18465;
(statearr_18490_20276[(2)] = ex__13966__auto__);


if(cljs.core.seq((state_18465[(4)]))){
var statearr_18491_20277 = state_18465;
(statearr_18491_20277[(1)] = cljs.core.first((state_18465[(4)])));

} else {
throw ex__13966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20279 = state_18465;
state_18465 = G__20279;
continue;
} else {
return ret_value__13964__auto__;
}
break;
}
});
cljs$core$async$state_machine__13963__auto__ = function(state_18465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13963__auto____1.call(this,state_18465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13963__auto____0;
cljs$core$async$state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13963__auto____1;
return cljs$core$async$state_machine__13963__auto__;
})()
})();
var state__15503__auto__ = (function (){var statearr_18492 = f__15502__auto__();
(statearr_18492[(6)] = c__15501__auto___20246);

return statearr_18492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15503__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18502 = (function (f,ch,meta18498,_,fn1,meta18503){
this.f = f;
this.ch = ch;
this.meta18498 = meta18498;
this._ = _;
this.fn1 = fn1;
this.meta18503 = meta18503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18504,meta18503__$1){
var self__ = this;
var _18504__$1 = this;
return (new cljs.core.async.t_cljs$core$async18502(self__.f,self__.ch,self__.meta18498,self__._,self__.fn1,meta18503__$1));
}));

(cljs.core.async.t_cljs$core$async18502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18504){
var self__ = this;
var _18504__$1 = this;
return self__.meta18503;
}));

(cljs.core.async.t_cljs$core$async18502.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18502.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18502.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18502.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18493_SHARP_){
var G__18508 = (((p1__18493_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18493_SHARP_) : self__.f.call(null, p1__18493_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18508) : f1.call(null, G__18508));
});
}));

(cljs.core.async.t_cljs$core$async18502.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18498","meta18498",1218853429,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18497","cljs.core.async/t_cljs$core$async18497",-26247339,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18503","meta18503",1421174326,null)], null);
}));

(cljs.core.async.t_cljs$core$async18502.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18502.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18502");

(cljs.core.async.t_cljs$core$async18502.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18502");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18502.
 */
cljs.core.async.__GT_t_cljs$core$async18502 = (function cljs$core$async$__GT_t_cljs$core$async18502(f,ch,meta18498,_,fn1,meta18503){
return (new cljs.core.async.t_cljs$core$async18502(f,ch,meta18498,_,fn1,meta18503));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18497 = (function (f,ch,meta18498){
this.f = f;
this.ch = ch;
this.meta18498 = meta18498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18499,meta18498__$1){
var self__ = this;
var _18499__$1 = this;
return (new cljs.core.async.t_cljs$core$async18497(self__.f,self__.ch,meta18498__$1));
}));

(cljs.core.async.t_cljs$core$async18497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18499){
var self__ = this;
var _18499__$1 = this;
return self__.meta18498;
}));

(cljs.core.async.t_cljs$core$async18497.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18497.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18497.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18497.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18497.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async18502(self__.f,self__.ch,self__.meta18498,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18521 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18521) : self__.f.call(null, G__18521));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18497.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18497.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18498","meta18498",1218853429,null)], null);
}));

(cljs.core.async.t_cljs$core$async18497.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18497.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18497");

(cljs.core.async.t_cljs$core$async18497.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18497");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18497.
 */
cljs.core.async.__GT_t_cljs$core$async18497 = (function cljs$core$async$__GT_t_cljs$core$async18497(f,ch,meta18498){
return (new cljs.core.async.t_cljs$core$async18497(f,ch,meta18498));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18497(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18560 = (function (f,ch,meta18562){
this.f = f;
this.ch = ch;
this.meta18562 = meta18562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18563,meta18562__$1){
var self__ = this;
var _18563__$1 = this;
return (new cljs.core.async.t_cljs$core$async18560(self__.f,self__.ch,meta18562__$1));
}));

(cljs.core.async.t_cljs$core$async18560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18563){
var self__ = this;
var _18563__$1 = this;
return self__.meta18562;
}));

(cljs.core.async.t_cljs$core$async18560.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18560.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18560.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18560.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18560.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18560.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18560.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18562","meta18562",1934019053,null)], null);
}));

(cljs.core.async.t_cljs$core$async18560.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18560");

(cljs.core.async.t_cljs$core$async18560.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18560");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18560.
 */
cljs.core.async.__GT_t_cljs$core$async18560 = (function cljs$core$async$__GT_t_cljs$core$async18560(f,ch,meta18562){
return (new cljs.core.async.t_cljs$core$async18560(f,ch,meta18562));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18560(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18582 = (function (p,ch,meta18583){
this.p = p;
this.ch = ch;
this.meta18583 = meta18583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18584,meta18583__$1){
var self__ = this;
var _18584__$1 = this;
return (new cljs.core.async.t_cljs$core$async18582(self__.p,self__.ch,meta18583__$1));
}));

(cljs.core.async.t_cljs$core$async18582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18584){
var self__ = this;
var _18584__$1 = this;
return self__.meta18583;
}));

(cljs.core.async.t_cljs$core$async18582.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18582.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18582.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18582.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18582.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18582.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18582.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18582.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18583","meta18583",-2033595732,null)], null);
}));

(cljs.core.async.t_cljs$core$async18582.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18582");

(cljs.core.async.t_cljs$core$async18582.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18582");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18582.
 */
cljs.core.async.__GT_t_cljs$core$async18582 = (function cljs$core$async$__GT_t_cljs$core$async18582(p,ch,meta18583){
return (new cljs.core.async.t_cljs$core$async18582(p,ch,meta18583));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async18582(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18591 = arguments.length;
switch (G__18591) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15501__auto___20313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15502__auto__ = (function (){var switch__13962__auto__ = (function (state_18612){
var state_val_18613 = (state_18612[(1)]);
if((state_val_18613 === (7))){
var inst_18608 = (state_18612[(2)]);
var state_18612__$1 = state_18612;
var statearr_18615_20314 = state_18612__$1;
(statearr_18615_20314[(2)] = inst_18608);

(statearr_18615_20314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18613 === (1))){
var state_18612__$1 = state_18612;
var statearr_18616_20315 = state_18612__$1;
(statearr_18616_20315[(2)] = null);

(statearr_18616_20315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18613 === (4))){
var inst_18594 = (state_18612[(7)]);
var inst_18594__$1 = (state_18612[(2)]);
var inst_18595 = (inst_18594__$1 == null);
var state_18612__$1 = (function (){var statearr_18617 = state_18612;
(statearr_18617[(7)] = inst_18594__$1);

return statearr_18617;
})();
if(cljs.core.truth_(inst_18595)){
var statearr_18618_20322 = state_18612__$1;
(statearr_18618_20322[(1)] = (5));

} else {
var statearr_18619_20323 = state_18612__$1;
(statearr_18619_20323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18613 === (6))){
var inst_18594 = (state_18612[(7)]);
var inst_18599 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18594) : p.call(null, inst_18594));
var state_18612__$1 = state_18612;
if(cljs.core.truth_(inst_18599)){
var statearr_18620_20326 = state_18612__$1;
(statearr_18620_20326[(1)] = (8));

} else {
var statearr_18621_20327 = state_18612__$1;
(statearr_18621_20327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18613 === (3))){
var inst_18610 = (state_18612[(2)]);
var state_18612__$1 = state_18612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18612__$1,inst_18610);
} else {
if((state_val_18613 === (2))){
var state_18612__$1 = state_18612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18612__$1,(4),ch);
} else {
if((state_val_18613 === (11))){
var inst_18602 = (state_18612[(2)]);
var state_18612__$1 = state_18612;
var statearr_18623_20334 = state_18612__$1;
(statearr_18623_20334[(2)] = inst_18602);

(statearr_18623_20334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18613 === (9))){
var state_18612__$1 = state_18612;
var statearr_18624_20335 = state_18612__$1;
(statearr_18624_20335[(2)] = null);

(statearr_18624_20335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18613 === (5))){
var inst_18597 = cljs.core.async.close_BANG_(out);
var state_18612__$1 = state_18612;
var statearr_18625_20338 = state_18612__$1;
(statearr_18625_20338[(2)] = inst_18597);

(statearr_18625_20338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18613 === (10))){
var inst_18605 = (state_18612[(2)]);
var state_18612__$1 = (function (){var statearr_18626 = state_18612;
(statearr_18626[(8)] = inst_18605);

return statearr_18626;
})();
var statearr_18627_20343 = state_18612__$1;
(statearr_18627_20343[(2)] = null);

(statearr_18627_20343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18613 === (8))){
var inst_18594 = (state_18612[(7)]);
var state_18612__$1 = state_18612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18612__$1,(11),out,inst_18594);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13963__auto__ = null;
var cljs$core$async$state_machine__13963__auto____0 = (function (){
var statearr_18634 = [null,null,null,null,null,null,null,null,null];
(statearr_18634[(0)] = cljs$core$async$state_machine__13963__auto__);

(statearr_18634[(1)] = (1));

return statearr_18634;
});
var cljs$core$async$state_machine__13963__auto____1 = (function (state_18612){
while(true){
var ret_value__13964__auto__ = (function (){try{while(true){
var result__13965__auto__ = switch__13962__auto__(state_18612);
if(cljs.core.keyword_identical_QMARK_(result__13965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13965__auto__;
}
break;
}
}catch (e18635){var ex__13966__auto__ = e18635;
var statearr_18636_20347 = state_18612;
(statearr_18636_20347[(2)] = ex__13966__auto__);


if(cljs.core.seq((state_18612[(4)]))){
var statearr_18637_20349 = state_18612;
(statearr_18637_20349[(1)] = cljs.core.first((state_18612[(4)])));

} else {
throw ex__13966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20351 = state_18612;
state_18612 = G__20351;
continue;
} else {
return ret_value__13964__auto__;
}
break;
}
});
cljs$core$async$state_machine__13963__auto__ = function(state_18612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13963__auto____1.call(this,state_18612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13963__auto____0;
cljs$core$async$state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13963__auto____1;
return cljs$core$async$state_machine__13963__auto__;
})()
})();
var state__15503__auto__ = (function (){var statearr_18638 = f__15502__auto__();
(statearr_18638[(6)] = c__15501__auto___20313);

return statearr_18638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15503__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18640 = arguments.length;
switch (G__18640) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15501__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15502__auto__ = (function (){var switch__13962__auto__ = (function (state_18723){
var state_val_18724 = (state_18723[(1)]);
if((state_val_18724 === (7))){
var inst_18717 = (state_18723[(2)]);
var state_18723__$1 = state_18723;
var statearr_18730_20356 = state_18723__$1;
(statearr_18730_20356[(2)] = inst_18717);

(statearr_18730_20356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (20))){
var inst_18683 = (state_18723[(7)]);
var inst_18696 = (state_18723[(2)]);
var inst_18697 = cljs.core.next(inst_18683);
var inst_18659 = inst_18697;
var inst_18662 = null;
var inst_18663 = (0);
var inst_18664 = (0);
var state_18723__$1 = (function (){var statearr_18738 = state_18723;
(statearr_18738[(8)] = inst_18662);

(statearr_18738[(9)] = inst_18664);

(statearr_18738[(10)] = inst_18696);

(statearr_18738[(11)] = inst_18659);

(statearr_18738[(12)] = inst_18663);

return statearr_18738;
})();
var statearr_18745_20360 = state_18723__$1;
(statearr_18745_20360[(2)] = null);

(statearr_18745_20360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (1))){
var state_18723__$1 = state_18723;
var statearr_18751_20361 = state_18723__$1;
(statearr_18751_20361[(2)] = null);

(statearr_18751_20361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (4))){
var inst_18647 = (state_18723[(13)]);
var inst_18647__$1 = (state_18723[(2)]);
var inst_18648 = (inst_18647__$1 == null);
var state_18723__$1 = (function (){var statearr_18755 = state_18723;
(statearr_18755[(13)] = inst_18647__$1);

return statearr_18755;
})();
if(cljs.core.truth_(inst_18648)){
var statearr_18757_20367 = state_18723__$1;
(statearr_18757_20367[(1)] = (5));

} else {
var statearr_18758_20368 = state_18723__$1;
(statearr_18758_20368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (15))){
var state_18723__$1 = state_18723;
var statearr_18762_20369 = state_18723__$1;
(statearr_18762_20369[(2)] = null);

(statearr_18762_20369[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (21))){
var state_18723__$1 = state_18723;
var statearr_18763_20372 = state_18723__$1;
(statearr_18763_20372[(2)] = null);

(statearr_18763_20372[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (13))){
var inst_18662 = (state_18723[(8)]);
var inst_18664 = (state_18723[(9)]);
var inst_18659 = (state_18723[(11)]);
var inst_18663 = (state_18723[(12)]);
var inst_18677 = (state_18723[(2)]);
var inst_18680 = (inst_18664 + (1));
var tmp18759 = inst_18662;
var tmp18760 = inst_18659;
var tmp18761 = inst_18663;
var inst_18659__$1 = tmp18760;
var inst_18662__$1 = tmp18759;
var inst_18663__$1 = tmp18761;
var inst_18664__$1 = inst_18680;
var state_18723__$1 = (function (){var statearr_18765 = state_18723;
(statearr_18765[(14)] = inst_18677);

(statearr_18765[(8)] = inst_18662__$1);

(statearr_18765[(9)] = inst_18664__$1);

(statearr_18765[(11)] = inst_18659__$1);

(statearr_18765[(12)] = inst_18663__$1);

return statearr_18765;
})();
var statearr_18766_20380 = state_18723__$1;
(statearr_18766_20380[(2)] = null);

(statearr_18766_20380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (22))){
var state_18723__$1 = state_18723;
var statearr_18769_20382 = state_18723__$1;
(statearr_18769_20382[(2)] = null);

(statearr_18769_20382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (6))){
var inst_18647 = (state_18723[(13)]);
var inst_18656 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18647) : f.call(null, inst_18647));
var inst_18657 = cljs.core.seq(inst_18656);
var inst_18659 = inst_18657;
var inst_18662 = null;
var inst_18663 = (0);
var inst_18664 = (0);
var state_18723__$1 = (function (){var statearr_18775 = state_18723;
(statearr_18775[(8)] = inst_18662);

(statearr_18775[(9)] = inst_18664);

(statearr_18775[(11)] = inst_18659);

(statearr_18775[(12)] = inst_18663);

return statearr_18775;
})();
var statearr_18776_20383 = state_18723__$1;
(statearr_18776_20383[(2)] = null);

(statearr_18776_20383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (17))){
var inst_18683 = (state_18723[(7)]);
var inst_18688 = cljs.core.chunk_first(inst_18683);
var inst_18689 = cljs.core.chunk_rest(inst_18683);
var inst_18690 = cljs.core.count(inst_18688);
var inst_18659 = inst_18689;
var inst_18662 = inst_18688;
var inst_18663 = inst_18690;
var inst_18664 = (0);
var state_18723__$1 = (function (){var statearr_18778 = state_18723;
(statearr_18778[(8)] = inst_18662);

(statearr_18778[(9)] = inst_18664);

(statearr_18778[(11)] = inst_18659);

(statearr_18778[(12)] = inst_18663);

return statearr_18778;
})();
var statearr_18782_20386 = state_18723__$1;
(statearr_18782_20386[(2)] = null);

(statearr_18782_20386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (3))){
var inst_18719 = (state_18723[(2)]);
var state_18723__$1 = state_18723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18723__$1,inst_18719);
} else {
if((state_val_18724 === (12))){
var inst_18706 = (state_18723[(2)]);
var state_18723__$1 = state_18723;
var statearr_18788_20387 = state_18723__$1;
(statearr_18788_20387[(2)] = inst_18706);

(statearr_18788_20387[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (2))){
var state_18723__$1 = state_18723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18723__$1,(4),in$);
} else {
if((state_val_18724 === (23))){
var inst_18714 = (state_18723[(2)]);
var state_18723__$1 = state_18723;
var statearr_18791_20389 = state_18723__$1;
(statearr_18791_20389[(2)] = inst_18714);

(statearr_18791_20389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (19))){
var inst_18700 = (state_18723[(2)]);
var state_18723__$1 = state_18723;
var statearr_18792_20390 = state_18723__$1;
(statearr_18792_20390[(2)] = inst_18700);

(statearr_18792_20390[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (11))){
var inst_18683 = (state_18723[(7)]);
var inst_18659 = (state_18723[(11)]);
var inst_18683__$1 = cljs.core.seq(inst_18659);
var state_18723__$1 = (function (){var statearr_18793 = state_18723;
(statearr_18793[(7)] = inst_18683__$1);

return statearr_18793;
})();
if(inst_18683__$1){
var statearr_18795_20391 = state_18723__$1;
(statearr_18795_20391[(1)] = (14));

} else {
var statearr_18799_20393 = state_18723__$1;
(statearr_18799_20393[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (9))){
var inst_18708 = (state_18723[(2)]);
var inst_18709 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18723__$1 = (function (){var statearr_18806 = state_18723;
(statearr_18806[(15)] = inst_18708);

return statearr_18806;
})();
if(cljs.core.truth_(inst_18709)){
var statearr_18807_20395 = state_18723__$1;
(statearr_18807_20395[(1)] = (21));

} else {
var statearr_18808_20396 = state_18723__$1;
(statearr_18808_20396[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (5))){
var inst_18650 = cljs.core.async.close_BANG_(out);
var state_18723__$1 = state_18723;
var statearr_18809_20397 = state_18723__$1;
(statearr_18809_20397[(2)] = inst_18650);

(statearr_18809_20397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (14))){
var inst_18683 = (state_18723[(7)]);
var inst_18685 = cljs.core.chunked_seq_QMARK_(inst_18683);
var state_18723__$1 = state_18723;
if(inst_18685){
var statearr_18810_20398 = state_18723__$1;
(statearr_18810_20398[(1)] = (17));

} else {
var statearr_18811_20399 = state_18723__$1;
(statearr_18811_20399[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (16))){
var inst_18703 = (state_18723[(2)]);
var state_18723__$1 = state_18723;
var statearr_18814_20400 = state_18723__$1;
(statearr_18814_20400[(2)] = inst_18703);

(statearr_18814_20400[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (10))){
var inst_18662 = (state_18723[(8)]);
var inst_18664 = (state_18723[(9)]);
var inst_18673 = cljs.core._nth(inst_18662,inst_18664);
var state_18723__$1 = state_18723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18723__$1,(13),out,inst_18673);
} else {
if((state_val_18724 === (18))){
var inst_18683 = (state_18723[(7)]);
var inst_18693 = cljs.core.first(inst_18683);
var state_18723__$1 = state_18723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18723__$1,(20),out,inst_18693);
} else {
if((state_val_18724 === (8))){
var inst_18664 = (state_18723[(9)]);
var inst_18663 = (state_18723[(12)]);
var inst_18666 = (inst_18664 < inst_18663);
var inst_18667 = inst_18666;
var state_18723__$1 = state_18723;
if(cljs.core.truth_(inst_18667)){
var statearr_18821_20405 = state_18723__$1;
(statearr_18821_20405[(1)] = (10));

} else {
var statearr_18822_20406 = state_18723__$1;
(statearr_18822_20406[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13963__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13963__auto____0 = (function (){
var statearr_18823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18823[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13963__auto__);

(statearr_18823[(1)] = (1));

return statearr_18823;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13963__auto____1 = (function (state_18723){
while(true){
var ret_value__13964__auto__ = (function (){try{while(true){
var result__13965__auto__ = switch__13962__auto__(state_18723);
if(cljs.core.keyword_identical_QMARK_(result__13965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13965__auto__;
}
break;
}
}catch (e18826){var ex__13966__auto__ = e18826;
var statearr_18827_20407 = state_18723;
(statearr_18827_20407[(2)] = ex__13966__auto__);


if(cljs.core.seq((state_18723[(4)]))){
var statearr_18830_20408 = state_18723;
(statearr_18830_20408[(1)] = cljs.core.first((state_18723[(4)])));

} else {
throw ex__13966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20410 = state_18723;
state_18723 = G__20410;
continue;
} else {
return ret_value__13964__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13963__auto__ = function(state_18723){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13963__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13963__auto____1.call(this,state_18723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13963__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13963__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13963__auto__;
})()
})();
var state__15503__auto__ = (function (){var statearr_18834 = f__15502__auto__();
(statearr_18834[(6)] = c__15501__auto__);

return statearr_18834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15503__auto__);
}));

return c__15501__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18843 = arguments.length;
switch (G__18843) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18854 = arguments.length;
switch (G__18854) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18863 = arguments.length;
switch (G__18863) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15501__auto___20418 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15502__auto__ = (function (){var switch__13962__auto__ = (function (state_18896){
var state_val_18897 = (state_18896[(1)]);
if((state_val_18897 === (7))){
var inst_18891 = (state_18896[(2)]);
var state_18896__$1 = state_18896;
var statearr_18902_20422 = state_18896__$1;
(statearr_18902_20422[(2)] = inst_18891);

(statearr_18902_20422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (1))){
var inst_18870 = null;
var state_18896__$1 = (function (){var statearr_18903 = state_18896;
(statearr_18903[(7)] = inst_18870);

return statearr_18903;
})();
var statearr_18904_20423 = state_18896__$1;
(statearr_18904_20423[(2)] = null);

(statearr_18904_20423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (4))){
var inst_18873 = (state_18896[(8)]);
var inst_18873__$1 = (state_18896[(2)]);
var inst_18874 = (inst_18873__$1 == null);
var inst_18877 = cljs.core.not(inst_18874);
var state_18896__$1 = (function (){var statearr_18910 = state_18896;
(statearr_18910[(8)] = inst_18873__$1);

return statearr_18910;
})();
if(inst_18877){
var statearr_18911_20425 = state_18896__$1;
(statearr_18911_20425[(1)] = (5));

} else {
var statearr_18912_20426 = state_18896__$1;
(statearr_18912_20426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (6))){
var state_18896__$1 = state_18896;
var statearr_18913_20427 = state_18896__$1;
(statearr_18913_20427[(2)] = null);

(statearr_18913_20427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (3))){
var inst_18893 = (state_18896[(2)]);
var inst_18894 = cljs.core.async.close_BANG_(out);
var state_18896__$1 = (function (){var statearr_18918 = state_18896;
(statearr_18918[(9)] = inst_18893);

return statearr_18918;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18896__$1,inst_18894);
} else {
if((state_val_18897 === (2))){
var state_18896__$1 = state_18896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18896__$1,(4),ch);
} else {
if((state_val_18897 === (11))){
var inst_18873 = (state_18896[(8)]);
var inst_18885 = (state_18896[(2)]);
var inst_18870 = inst_18873;
var state_18896__$1 = (function (){var statearr_18932 = state_18896;
(statearr_18932[(7)] = inst_18870);

(statearr_18932[(10)] = inst_18885);

return statearr_18932;
})();
var statearr_18938_20429 = state_18896__$1;
(statearr_18938_20429[(2)] = null);

(statearr_18938_20429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (9))){
var inst_18873 = (state_18896[(8)]);
var state_18896__$1 = state_18896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18896__$1,(11),out,inst_18873);
} else {
if((state_val_18897 === (5))){
var inst_18870 = (state_18896[(7)]);
var inst_18873 = (state_18896[(8)]);
var inst_18880 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18873,inst_18870);
var state_18896__$1 = state_18896;
if(inst_18880){
var statearr_18953_20431 = state_18896__$1;
(statearr_18953_20431[(1)] = (8));

} else {
var statearr_18960_20432 = state_18896__$1;
(statearr_18960_20432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (10))){
var inst_18888 = (state_18896[(2)]);
var state_18896__$1 = state_18896;
var statearr_18961_20433 = state_18896__$1;
(statearr_18961_20433[(2)] = inst_18888);

(statearr_18961_20433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (8))){
var inst_18870 = (state_18896[(7)]);
var tmp18952 = inst_18870;
var inst_18870__$1 = tmp18952;
var state_18896__$1 = (function (){var statearr_18962 = state_18896;
(statearr_18962[(7)] = inst_18870__$1);

return statearr_18962;
})();
var statearr_18963_20434 = state_18896__$1;
(statearr_18963_20434[(2)] = null);

(statearr_18963_20434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13963__auto__ = null;
var cljs$core$async$state_machine__13963__auto____0 = (function (){
var statearr_18964 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18964[(0)] = cljs$core$async$state_machine__13963__auto__);

(statearr_18964[(1)] = (1));

return statearr_18964;
});
var cljs$core$async$state_machine__13963__auto____1 = (function (state_18896){
while(true){
var ret_value__13964__auto__ = (function (){try{while(true){
var result__13965__auto__ = switch__13962__auto__(state_18896);
if(cljs.core.keyword_identical_QMARK_(result__13965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13965__auto__;
}
break;
}
}catch (e18967){var ex__13966__auto__ = e18967;
var statearr_18980_20435 = state_18896;
(statearr_18980_20435[(2)] = ex__13966__auto__);


if(cljs.core.seq((state_18896[(4)]))){
var statearr_18983_20436 = state_18896;
(statearr_18983_20436[(1)] = cljs.core.first((state_18896[(4)])));

} else {
throw ex__13966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20437 = state_18896;
state_18896 = G__20437;
continue;
} else {
return ret_value__13964__auto__;
}
break;
}
});
cljs$core$async$state_machine__13963__auto__ = function(state_18896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13963__auto____1.call(this,state_18896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13963__auto____0;
cljs$core$async$state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13963__auto____1;
return cljs$core$async$state_machine__13963__auto__;
})()
})();
var state__15503__auto__ = (function (){var statearr_18986 = f__15502__auto__();
(statearr_18986[(6)] = c__15501__auto___20418);

return statearr_18986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15503__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18995 = arguments.length;
switch (G__18995) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15501__auto___20445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15502__auto__ = (function (){var switch__13962__auto__ = (function (state_19045){
var state_val_19046 = (state_19045[(1)]);
if((state_val_19046 === (7))){
var inst_19041 = (state_19045[(2)]);
var state_19045__$1 = state_19045;
var statearr_19054_20449 = state_19045__$1;
(statearr_19054_20449[(2)] = inst_19041);

(statearr_19054_20449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (1))){
var inst_18998 = (new Array(n));
var inst_18999 = inst_18998;
var inst_19000 = (0);
var state_19045__$1 = (function (){var statearr_19055 = state_19045;
(statearr_19055[(7)] = inst_19000);

(statearr_19055[(8)] = inst_18999);

return statearr_19055;
})();
var statearr_19056_20457 = state_19045__$1;
(statearr_19056_20457[(2)] = null);

(statearr_19056_20457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (4))){
var inst_19003 = (state_19045[(9)]);
var inst_19003__$1 = (state_19045[(2)]);
var inst_19004 = (inst_19003__$1 == null);
var inst_19005 = cljs.core.not(inst_19004);
var state_19045__$1 = (function (){var statearr_19061 = state_19045;
(statearr_19061[(9)] = inst_19003__$1);

return statearr_19061;
})();
if(inst_19005){
var statearr_19062_20458 = state_19045__$1;
(statearr_19062_20458[(1)] = (5));

} else {
var statearr_19065_20459 = state_19045__$1;
(statearr_19065_20459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (15))){
var inst_19034 = (state_19045[(2)]);
var state_19045__$1 = state_19045;
var statearr_19066_20460 = state_19045__$1;
(statearr_19066_20460[(2)] = inst_19034);

(statearr_19066_20460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (13))){
var state_19045__$1 = state_19045;
var statearr_19071_20461 = state_19045__$1;
(statearr_19071_20461[(2)] = null);

(statearr_19071_20461[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (6))){
var inst_19000 = (state_19045[(7)]);
var inst_19026 = (inst_19000 > (0));
var state_19045__$1 = state_19045;
if(cljs.core.truth_(inst_19026)){
var statearr_19073_20465 = state_19045__$1;
(statearr_19073_20465[(1)] = (12));

} else {
var statearr_19074_20466 = state_19045__$1;
(statearr_19074_20466[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (3))){
var inst_19043 = (state_19045[(2)]);
var state_19045__$1 = state_19045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19045__$1,inst_19043);
} else {
if((state_val_19046 === (12))){
var inst_18999 = (state_19045[(8)]);
var inst_19032 = cljs.core.vec(inst_18999);
var state_19045__$1 = state_19045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19045__$1,(15),out,inst_19032);
} else {
if((state_val_19046 === (2))){
var state_19045__$1 = state_19045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19045__$1,(4),ch);
} else {
if((state_val_19046 === (11))){
var inst_19017 = (state_19045[(2)]);
var inst_19021 = (new Array(n));
var inst_18999 = inst_19021;
var inst_19000 = (0);
var state_19045__$1 = (function (){var statearr_19094 = state_19045;
(statearr_19094[(7)] = inst_19000);

(statearr_19094[(8)] = inst_18999);

(statearr_19094[(10)] = inst_19017);

return statearr_19094;
})();
var statearr_19095_20467 = state_19045__$1;
(statearr_19095_20467[(2)] = null);

(statearr_19095_20467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (9))){
var inst_18999 = (state_19045[(8)]);
var inst_19015 = cljs.core.vec(inst_18999);
var state_19045__$1 = state_19045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19045__$1,(11),out,inst_19015);
} else {
if((state_val_19046 === (5))){
var inst_19003 = (state_19045[(9)]);
var inst_19000 = (state_19045[(7)]);
var inst_18999 = (state_19045[(8)]);
var inst_19009 = (state_19045[(11)]);
var inst_19008 = (inst_18999[inst_19000] = inst_19003);
var inst_19009__$1 = (inst_19000 + (1));
var inst_19010 = (inst_19009__$1 < n);
var state_19045__$1 = (function (){var statearr_19101 = state_19045;
(statearr_19101[(12)] = inst_19008);

(statearr_19101[(11)] = inst_19009__$1);

return statearr_19101;
})();
if(cljs.core.truth_(inst_19010)){
var statearr_19103_20472 = state_19045__$1;
(statearr_19103_20472[(1)] = (8));

} else {
var statearr_19104_20473 = state_19045__$1;
(statearr_19104_20473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (14))){
var inst_19037 = (state_19045[(2)]);
var inst_19039 = cljs.core.async.close_BANG_(out);
var state_19045__$1 = (function (){var statearr_19106 = state_19045;
(statearr_19106[(13)] = inst_19037);

return statearr_19106;
})();
var statearr_19107_20475 = state_19045__$1;
(statearr_19107_20475[(2)] = inst_19039);

(statearr_19107_20475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (10))){
var inst_19024 = (state_19045[(2)]);
var state_19045__$1 = state_19045;
var statearr_19108_20477 = state_19045__$1;
(statearr_19108_20477[(2)] = inst_19024);

(statearr_19108_20477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (8))){
var inst_18999 = (state_19045[(8)]);
var inst_19009 = (state_19045[(11)]);
var tmp19105 = inst_18999;
var inst_18999__$1 = tmp19105;
var inst_19000 = inst_19009;
var state_19045__$1 = (function (){var statearr_19109 = state_19045;
(statearr_19109[(7)] = inst_19000);

(statearr_19109[(8)] = inst_18999__$1);

return statearr_19109;
})();
var statearr_19110_20481 = state_19045__$1;
(statearr_19110_20481[(2)] = null);

(statearr_19110_20481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13963__auto__ = null;
var cljs$core$async$state_machine__13963__auto____0 = (function (){
var statearr_19111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19111[(0)] = cljs$core$async$state_machine__13963__auto__);

(statearr_19111[(1)] = (1));

return statearr_19111;
});
var cljs$core$async$state_machine__13963__auto____1 = (function (state_19045){
while(true){
var ret_value__13964__auto__ = (function (){try{while(true){
var result__13965__auto__ = switch__13962__auto__(state_19045);
if(cljs.core.keyword_identical_QMARK_(result__13965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13965__auto__;
}
break;
}
}catch (e19112){var ex__13966__auto__ = e19112;
var statearr_19116_20482 = state_19045;
(statearr_19116_20482[(2)] = ex__13966__auto__);


if(cljs.core.seq((state_19045[(4)]))){
var statearr_19117_20483 = state_19045;
(statearr_19117_20483[(1)] = cljs.core.first((state_19045[(4)])));

} else {
throw ex__13966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20484 = state_19045;
state_19045 = G__20484;
continue;
} else {
return ret_value__13964__auto__;
}
break;
}
});
cljs$core$async$state_machine__13963__auto__ = function(state_19045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13963__auto____1.call(this,state_19045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13963__auto____0;
cljs$core$async$state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13963__auto____1;
return cljs$core$async$state_machine__13963__auto__;
})()
})();
var state__15503__auto__ = (function (){var statearr_19138 = f__15502__auto__();
(statearr_19138[(6)] = c__15501__auto___20445);

return statearr_19138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15503__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19151 = arguments.length;
switch (G__19151) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15501__auto___20488 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15502__auto__ = (function (){var switch__13962__auto__ = (function (state_19251){
var state_val_19252 = (state_19251[(1)]);
if((state_val_19252 === (7))){
var inst_19243 = (state_19251[(2)]);
var state_19251__$1 = state_19251;
var statearr_19280_20491 = state_19251__$1;
(statearr_19280_20491[(2)] = inst_19243);

(statearr_19280_20491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (1))){
var inst_19174 = [];
var inst_19175 = inst_19174;
var inst_19176 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19251__$1 = (function (){var statearr_19286 = state_19251;
(statearr_19286[(7)] = inst_19175);

(statearr_19286[(8)] = inst_19176);

return statearr_19286;
})();
var statearr_19290_20498 = state_19251__$1;
(statearr_19290_20498[(2)] = null);

(statearr_19290_20498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (4))){
var inst_19184 = (state_19251[(9)]);
var inst_19184__$1 = (state_19251[(2)]);
var inst_19186 = (inst_19184__$1 == null);
var inst_19187 = cljs.core.not(inst_19186);
var state_19251__$1 = (function (){var statearr_19293 = state_19251;
(statearr_19293[(9)] = inst_19184__$1);

return statearr_19293;
})();
if(inst_19187){
var statearr_19294_20500 = state_19251__$1;
(statearr_19294_20500[(1)] = (5));

} else {
var statearr_19295_20501 = state_19251__$1;
(statearr_19295_20501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (15))){
var inst_19175 = (state_19251[(7)]);
var inst_19235 = cljs.core.vec(inst_19175);
var state_19251__$1 = state_19251;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19251__$1,(18),out,inst_19235);
} else {
if((state_val_19252 === (13))){
var inst_19225 = (state_19251[(2)]);
var state_19251__$1 = state_19251;
var statearr_19301_20503 = state_19251__$1;
(statearr_19301_20503[(2)] = inst_19225);

(statearr_19301_20503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (6))){
var inst_19175 = (state_19251[(7)]);
var inst_19227 = inst_19175.length;
var inst_19228 = (inst_19227 > (0));
var state_19251__$1 = state_19251;
if(cljs.core.truth_(inst_19228)){
var statearr_19311_20504 = state_19251__$1;
(statearr_19311_20504[(1)] = (15));

} else {
var statearr_19312_20505 = state_19251__$1;
(statearr_19312_20505[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (17))){
var inst_19240 = (state_19251[(2)]);
var inst_19241 = cljs.core.async.close_BANG_(out);
var state_19251__$1 = (function (){var statearr_19314 = state_19251;
(statearr_19314[(10)] = inst_19240);

return statearr_19314;
})();
var statearr_19315_20506 = state_19251__$1;
(statearr_19315_20506[(2)] = inst_19241);

(statearr_19315_20506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (3))){
var inst_19248 = (state_19251[(2)]);
var state_19251__$1 = state_19251;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19251__$1,inst_19248);
} else {
if((state_val_19252 === (12))){
var inst_19175 = (state_19251[(7)]);
var inst_19218 = cljs.core.vec(inst_19175);
var state_19251__$1 = state_19251;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19251__$1,(14),out,inst_19218);
} else {
if((state_val_19252 === (2))){
var state_19251__$1 = state_19251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19251__$1,(4),ch);
} else {
if((state_val_19252 === (11))){
var inst_19175 = (state_19251[(7)]);
var inst_19184 = (state_19251[(9)]);
var inst_19194 = (state_19251[(11)]);
var inst_19215 = inst_19175.push(inst_19184);
var tmp19320 = inst_19175;
var inst_19175__$1 = tmp19320;
var inst_19176 = inst_19194;
var state_19251__$1 = (function (){var statearr_19324 = state_19251;
(statearr_19324[(7)] = inst_19175__$1);

(statearr_19324[(8)] = inst_19176);

(statearr_19324[(12)] = inst_19215);

return statearr_19324;
})();
var statearr_19325_20507 = state_19251__$1;
(statearr_19325_20507[(2)] = null);

(statearr_19325_20507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (9))){
var inst_19176 = (state_19251[(8)]);
var inst_19210 = cljs.core.keyword_identical_QMARK_(inst_19176,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19251__$1 = state_19251;
var statearr_19327_20509 = state_19251__$1;
(statearr_19327_20509[(2)] = inst_19210);

(statearr_19327_20509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (5))){
var inst_19184 = (state_19251[(9)]);
var inst_19176 = (state_19251[(8)]);
var inst_19194 = (state_19251[(11)]);
var inst_19204 = (state_19251[(13)]);
var inst_19194__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19184) : f.call(null, inst_19184));
var inst_19204__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19194__$1,inst_19176);
var state_19251__$1 = (function (){var statearr_19329 = state_19251;
(statearr_19329[(11)] = inst_19194__$1);

(statearr_19329[(13)] = inst_19204__$1);

return statearr_19329;
})();
if(inst_19204__$1){
var statearr_19330_20510 = state_19251__$1;
(statearr_19330_20510[(1)] = (8));

} else {
var statearr_19334_20511 = state_19251__$1;
(statearr_19334_20511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (14))){
var inst_19184 = (state_19251[(9)]);
var inst_19194 = (state_19251[(11)]);
var inst_19220 = (state_19251[(2)]);
var inst_19221 = [];
var inst_19222 = inst_19221.push(inst_19184);
var inst_19175 = inst_19221;
var inst_19176 = inst_19194;
var state_19251__$1 = (function (){var statearr_19340 = state_19251;
(statearr_19340[(7)] = inst_19175);

(statearr_19340[(8)] = inst_19176);

(statearr_19340[(14)] = inst_19222);

(statearr_19340[(15)] = inst_19220);

return statearr_19340;
})();
var statearr_19341_20512 = state_19251__$1;
(statearr_19341_20512[(2)] = null);

(statearr_19341_20512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (16))){
var state_19251__$1 = state_19251;
var statearr_19345_20513 = state_19251__$1;
(statearr_19345_20513[(2)] = null);

(statearr_19345_20513[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (10))){
var inst_19212 = (state_19251[(2)]);
var state_19251__$1 = state_19251;
if(cljs.core.truth_(inst_19212)){
var statearr_19347_20514 = state_19251__$1;
(statearr_19347_20514[(1)] = (11));

} else {
var statearr_19348_20516 = state_19251__$1;
(statearr_19348_20516[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (18))){
var inst_19237 = (state_19251[(2)]);
var state_19251__$1 = state_19251;
var statearr_19350_20517 = state_19251__$1;
(statearr_19350_20517[(2)] = inst_19237);

(statearr_19350_20517[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (8))){
var inst_19204 = (state_19251[(13)]);
var state_19251__$1 = state_19251;
var statearr_19352_20525 = state_19251__$1;
(statearr_19352_20525[(2)] = inst_19204);

(statearr_19352_20525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13963__auto__ = null;
var cljs$core$async$state_machine__13963__auto____0 = (function (){
var statearr_19354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19354[(0)] = cljs$core$async$state_machine__13963__auto__);

(statearr_19354[(1)] = (1));

return statearr_19354;
});
var cljs$core$async$state_machine__13963__auto____1 = (function (state_19251){
while(true){
var ret_value__13964__auto__ = (function (){try{while(true){
var result__13965__auto__ = switch__13962__auto__(state_19251);
if(cljs.core.keyword_identical_QMARK_(result__13965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13965__auto__;
}
break;
}
}catch (e19359){var ex__13966__auto__ = e19359;
var statearr_19360_20526 = state_19251;
(statearr_19360_20526[(2)] = ex__13966__auto__);


if(cljs.core.seq((state_19251[(4)]))){
var statearr_19365_20527 = state_19251;
(statearr_19365_20527[(1)] = cljs.core.first((state_19251[(4)])));

} else {
throw ex__13966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20532 = state_19251;
state_19251 = G__20532;
continue;
} else {
return ret_value__13964__auto__;
}
break;
}
});
cljs$core$async$state_machine__13963__auto__ = function(state_19251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13963__auto____1.call(this,state_19251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13963__auto____0;
cljs$core$async$state_machine__13963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13963__auto____1;
return cljs$core$async$state_machine__13963__auto__;
})()
})();
var state__15503__auto__ = (function (){var statearr_19374 = f__15502__auto__();
(statearr_19374[(6)] = c__15501__auto___20488);

return statearr_19374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15503__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
