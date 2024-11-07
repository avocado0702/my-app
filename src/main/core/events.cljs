(ns main.core.events
  (:require [re-frame.core :as re-frame]
            [main.core.db :refer [default-db]]))


(re-frame/reg-event-db :initialize-db (fn [_ _] default-db))


(re-frame/reg-event-fx
  :login-check
  (fn [{:keys [db]} [_ username password]]
    (let [users (:user-list db)
          matched-user (some #(= (:username %) username) users)
          matcher-password (some #(and (= (:username %) username)
                                       (= (:password %) password))
                                 users)] ; 解引用订阅对象
      (cond matcher-password {:db (assoc db :is-logged-in true),
                              :dispatch [:set-current-page :home]}
            matched-user
              {:db (assoc db :log-in-error-message "Password is not correct!")}
            :else {:db (assoc db
                         :log-in-error-message "User does not exist!")}))))


(re-frame/reg-event-fx
  :create-account
  (fn [{:keys [db]} [_ username password password-confirm]]
    (cond (some #(= (:username %) username) (:user-list db))
            {:db (assoc db :register-error-message "Username already exists!")}
          (not= password password-confirm)
            {:db (assoc db :register-error-message "Password does not match!")}
          :else {:db (-> db
                         (update :user-list
                                 conj
                                 {:username username, :password password})
                         (assoc :register-error-message " ")),
                 :dispatch [:set-current-page :login]})))


(re-frame/reg-event-db :set-current-page
                       (fn [db [_ page]] (assoc db :current-page page)))

(re-frame/reg-event-db :set-login-status
                       (fn [db [_ status]] (assoc db :is-logged-in status)))


(re-frame/reg-event-db :set-login-error-message
                       (fn [db [_ log-in-error-message]]
                         (assoc db :log-in-error-message log-in-error-message)))



