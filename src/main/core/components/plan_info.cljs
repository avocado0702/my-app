(ns main.core.components.plan-info  (:require [re-frame.core :as re-frame]
                                              [reagent.core :as r]))

(defn edit-btn [edit-mode]
  [:button {:on-click #(do (reset! edit-mode true)
                           (js/console.log "EDIT MODE" @edit-mode))} "edit"])


(defn save-btn [edit-mode]
  [:button {:on-click #(reset! edit-mode false)} "save"])


(defn plan-info
  [selected-item edit-mode]
  (let [edited-title (r/atom "")
        edited-text (r/atom "")]
    (js/console.log "Rendering plan-info with edit-mode:" @edit-mode)
    (if selected-item
      (if @edit-mode
        ;; 编辑模式视图
        [:div.plan-info-edit [:h2 "Edit Plan"] [:label "Title: "]
         [:input
          {:type "text",
           :value @edited-title,
           :on-change #(reset! edited-title (-> %
                                                .-target
                                                .-value))}]

         [:label "Content: "]
         [:textarea
          {:value @edited-text,
           :on-change #(reset! edited-text (-> %
                                               .-target
                                               .-value))}] [save-btn edit-mode]]
        ;; 非编辑模式视图
        [:div.plan-info [:h2 (str "Plan Title: " (:titel selected-item))]
         [:p (str "Plan Content: " (:text selected-item))]
         [edit-btn edit-mode edited-title edited-text selected-item]])
      [:p "Select a plan to see details"])))






