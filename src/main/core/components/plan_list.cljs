(ns main.core.components.plan-list
  (:require ["@mui/material/Fab" :default Fab]
            [re-frame.core :as re-frame]))

(defn add-btn
  []
  [:> Fab
   {:aria-label "add",
    :size "medium",
    :variant "outlined",
    :sx {:width "26px",
         :backgroundColor "white",
         :color "#1877f2",
         :height "26px",
         :margin-top "2px",
         :minHeight "unset",
         :fontSize "20px",
         :position "relative",
         :zIndex 0,
         :boxShadow "none"},
    :onClick #(re-frame/dispatch [:add-item])} "+"])

(defn delete-btn [item-id]
  [:button {:on-click #(re-frame/dispatch [:delete-item item-id])} "-"])

(defn list-element
  [item]
  (let [plan (re-frame/subscribe [:get-plan-by-id (:id item)])
        current-plan-id (re-frame/subscribe [:get-selected-plan-id])]
        
    (fn [] [:div.list-element
            {:class (when (= (:id item) @current-plan-id) "highlight"),
             :on-click #(do (re-frame/dispatch [:set-selected-plan-id
                                                (:id item)])
                            (js/console.log "This item id:" (:id item)))}
            [:div.list-element-header [:h4.list-element-title (:titel @plan)]
             [:div.list-element-buttons [delete-btn (:id item)]]]])))


(defn plan-list
  []
  (let [pl (re-frame/subscribe [:get-plan-list])]
    (fn [] [:div.plan-list
            [:div {:style {:display "flex", :alignItems "center"}} 
             [:p "Current Plan"] [add-btn]] 
            (if (empty? @pl)
              [:h3 "You have no plan"]
              (for [item @pl] ^{:key (:id item)} [list-element item]))])))