(ns main.core.components.plan-info
  (:require [re-frame.core :as re-frame]
            [reagent.core :as r]))

(defn edit-btn [edit-mode]
  [:button {:on-click #(do (reset! edit-mode true)
                           (js/console.log "EDIT MODE" @edit-mode))} "Edit"])

(defn save-btn [edit-mode selected-item]
  [:button {:on-click #(do (reset! edit-mode false)
                           (re-frame/dispatch [:update-plan selected-item])
                           (js/console.log "current plan item is: " selected-item))} "Save"])

(defn plan-info [selected-item edit-mode]
  (let [edited-title (r/atom "")
        edited-text (r/atom "")]
    (js/console.log "Rendering plan-info with edit-mode:" @edit-mode)
    (if selected-item
      (if @edit-mode
        [:div.plan-info-edit
         [:h2 "Edit Plan"]
         [:table
          [:tbody
           [:tr
            [:td "Title: "]
            [:td [:input {:type "text"
                          :value @edited-title
                          :on-change #(reset! edited-title (-> % .-target .-value))}]]]
           [:tr
            [:td "Content: "]
            [:td [:textarea {:value @edited-text
                             :on-change #(reset! edited-text (-> % .-target .-value))}]]]]]
         [save-btn edit-mode selected-item]]
        [:div.plan-info
         [:h2 (str "Plan Title: " (:titel selected-item))]
         [:p (str "Plan Content: " (:text selected-item))]
         [edit-btn edit-mode]])
      [:p "Select a plan to see details"])))
