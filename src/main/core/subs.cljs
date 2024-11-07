(ns main.core.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub :get-plan-list (fn [db _] (:plan-list db))) ;get-plan-list 是这个订阅的id 
(re-frame/reg-sub :get-user-list (fn [db _] (:user-list db))) 
(re-frame/reg-sub :get-current-page (fn [db _] (:current-page db)))
(re-frame/reg-sub :is-logged-in (fn [db _] (:is-logged-in db)))
(re-frame/reg-sub :get-log-in-error-message (fn [db _] (:log-in-error-message db)))
(re-frame/reg-sub :get-register-error-message (fn [db _] (:register-error-message db)))
