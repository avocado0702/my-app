(ns main.core.components.plan-list
  (:require [reagent.core :as r]
            [re-frame.core :as re-frame]))

(defn add-btn
  []
  [:button {:on-click #(re-frame/dispatch [:add-item])} "+"])

(defn delete-btn
  [item-id] 
  [:button
   {:on-click #(re-frame/dispatch
                               [:delete-item item-id])} "-"])

(defn list-element
  [item selected-item]
  (let [input-value (r/atom (:titel item))] ;; `input-value`
                                            ;; 在这里定义并用于管理输入框的状态
    (fn [] [:div.list-element
            {:style {:padding "15px",
                     :border "1px solid #ccc",
                     :border-radius "8px",
                     :cursor "pointer"},
             :on-click #(do (reset! selected-item item)
                            (js/console.log "This item:"
                                            selected-item))}
            [:div [:h4 (:titel item) [delete-btn (:id item)]]]])))

(defn plan-list
  [selected-item]
  (let [pl (re-frame/subscribe [:get-plan-list])]
    (fn [] [:div.plan-list
            {:style {:width "250px",
                     :border-right "1px solid #ccc",
                     :padding "10px",
                     :overflow-y "auto"}} [:h2 "current plan" [add-btn]]
            (if (empty? @pl)
              [:h3 "you have no plan"]
              (for [item @pl] ;; 先遍历整个集合
                ^{:key (:id item)} 
                [list-element item selected-item]))])))

(re-frame/reg-event-db 
  :delete-item
  (fn [db           ;; 事件处理函数，接收 `cofx (db)`  和事件参数
       [_ item-id]] ;; 比如 `item-id` 的值是1，`_` 忽略了 `:delete-item`
    (js/console.log "Deleting a item:")
    (js/console.log "Deletied item id:" item-id)
    (update db :plan-list (fn [items] (remove #(= (:id %) item-id) items)))))


(re-frame/reg-event-db
  :add-item
  (fn [db]
    (js/console.log "Adding a new item")
    (let [new-id (if (empty? (:plan-list db)) ;; 检查 `:plan-list` 是否为空
                   1
                   (inc (reduce max (map :id (:plan-list db))))
                   )] ;; 如果为空，`new-id` 从 1 开始
      (update db :plan-list conj {:id new-id, :titel "new plan", :text "new plan introduction"}))))