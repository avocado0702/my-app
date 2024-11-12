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

(re-frame/reg-event-db :set-edit-mode
                       (fn [db [_ edit-mode]]
                         (js/console.log "Setting edit mode to:" edit-mode)
                         (assoc db :edit-mode edit-mode)))


(re-frame/reg-event-db :set-login-error-message
                       (fn [db [_ log-in-error-message]]
                         (assoc db :log-in-error-message log-in-error-message)))

(re-frame/reg-event-db :set-selected-plan-id
                       (fn [db [_ plan-id]]
                         (js/console.log "Setting selected plan id to:" plan-id)
                         (assoc db :selected-plan-id plan-id)))


(re-frame/reg-event-db
  :delete-item
  (fn [db [_ item-id]]
    (js/console.log "Deleting a item:")
    (js/console.log "Deleted item id:" item-id)
    (update db :plan-list (fn [items] (remove #(= (:id %) item-id) items)))))

(re-frame/reg-event-db
  :add-item
  (fn [db]
    (js/console.log "Adding a new item")
    (let [new-id (if (empty? (:plan-list db)) 
                   1
                   (inc (reduce max (map :id (:plan-list db)))))]  
      (update db
              :plan-list
              conj
              {:id new-id, :titel "new plan", :text "new plan introduction"}))))



(re-frame/reg-event-db :update-plan
                       (fn [db [_ selected-item-id edited-title edited-text]]
                         (js/console.log "Updating a plan item:")
                         (js/console.log "Updated item id:" selected-item-id)
                         (js/console.log "Updated item title:" edited-title)
                         (js/console.log "Updated item text:" edited-text)
                         (update db
                                 :plan-list
                                 (fn [items]
                                   (map #(if (= (:id %) selected-item-id)
                                           (assoc %
                                             :titel edited-title
                                             :text edited-text)
                                           %)
                                     items)))))

