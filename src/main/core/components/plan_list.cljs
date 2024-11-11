(ns main.core.components.plan-list
  (:require [re-frame.core :as re-frame]))

(defn add-btn []
  [:button {:on-click #(re-frame/dispatch [:add-item])} "+"])

(defn delete-btn [item-id]
  [:button {:on-click #(re-frame/dispatch [:delete-item item-id])} "-"])

(defn list-element [item selected-item]
  
    (fn []
      [:div.list-element
       {:on-click #(do (reset! selected-item item)
                       (js/console.log "This item:" selected-item))}
       [:div.list-element-header
        [:h4.list-element-title (:titel item)]
        [:div.list-element-buttons
         [delete-btn (:id item)]]]]))

(defn plan-list [selected-item]
  (let [pl (re-frame/subscribe [:get-plan-list])]
    (fn []
      [:div.plan-list
       [:h2 "Current Plan" [add-btn]]
       (if (empty? @pl)
         [:h3 "You have no plan"]
         (for [item @pl]
           ^{:key (:id item)}
           [list-element item selected-item]))])))

