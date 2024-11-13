(ns main.core.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub :get-plan-list (fn [db _] (:plan-list db)))
(re-frame/reg-sub :get-user-list (fn [db _] (:user-list db))) 
(re-frame/reg-sub :get-current-page (fn [db _] (:current-page db)))
(re-frame/reg-sub :is-logged-in (fn [db _] (:is-logged-in db)))
(re-frame/reg-sub :get-log-in-error-message (fn [db _] (:log-in-error-message db)))
(re-frame/reg-sub :get-register-error-message (fn [db _] (:register-error-message db)))
(re-frame/reg-sub :get-selected-plan-id (fn [db _] (:selected-plan-id db)))
(re-frame/reg-sub :get-edit-mode (fn [db _] (:edit-mode db)))
(re-frame/reg-sub :get-plan-by-id
                  (fn [db [_ plan-id]]
                    (first (filter #(= (:id %) plan-id) (:plan-list db)))))

(re-frame/reg-sub :tasks-by-plan-id
                  (fn [db [_ plan-id]]
                    (js/console.log "Fetching tasks for plan id:" plan-id)
                    (let [plan (some #(when (= (:id %) plan-id) %)
                                     (:plan-list db))]
                      (:tasks plan))))
