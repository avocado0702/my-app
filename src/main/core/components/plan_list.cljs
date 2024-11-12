(ns main.core.components.plan-list
  (:require ["@mui/material/Fab" :default Fab]
            ["@mui/icons-material/DeleteOutline" :default DeleteOutline]
            ["@mui/icons-material/PlaylistAdd" :default PlaylistAdd]
            [re-frame.core :as re-frame]))

(defn add-btn
  []
  [:> PlaylistAdd
   {:sx {:color "#D3D3D3" 
         "&:hover" {:color "#1877f2", :cursor "pointer"}
         :margin-left "10px"},
    :size "medium",
    :variant "outlined",
    :onClick #(re-frame/dispatch [:add-item])} "+"])

(defn delete-btn
  [item-id]
  [:> DeleteOutline
   {:sx {:color "#D3D3D3", 
         "&:hover" {:color "#ff0000", 
                    :cursor "pointer"}}, 
    :on-click #(re-frame/dispatch [:delete-item item-id])}])

(defn list-element
  [item]
  (let [plan (re-frame/subscribe [:get-plan-by-id (:id item)])
        current-plan-id (re-frame/subscribe [:get-selected-plan-id])
        edit-mode (re-frame/subscribe [:get-edit-mode])]
    (fn [] [:div.list-element
            {:class (when (= (:id item) @current-plan-id) "highlight"),
             :on-click
               (when (or (not @edit-mode) (= (:id item) @current-plan-id))
                 #(do (re-frame/dispatch [:set-selected-plan-id (:id item)])
                      (js/console.log "This item id:" (:id item)))),
             :style {:pointer-events
                       (if (and @edit-mode (not= (:id item) @current-plan-id))
                         "none" 
                         "auto"),
                     :opacity (if (and @edit-mode
                                       (not= (:id item) @current-plan-id))
                                0.5 
                                1)}}
            
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