(ns main.core.components.plan-info
  (:require [re-frame.core :as re-frame]
            [reagent.core :as r]))

(defn edit-btn
  []
  [:button {:on-click #(re-frame/dispatch [:set-edit-mode true])} "Edit"])

(defn save-btn
  [selected-item-id edited-title edited-text]
  [:button
   {:on-click #(do (re-frame/dispatch [:update-plan @selected-item-id @edited-title
                                       @edited-text])
                   (re-frame/dispatch [:set-edit-mode false])
                   )}
   "Save"])

(defn plan-info
  []
  (let [edit-mode (re-frame/subscribe [:get-edit-mode])
        selected-item-id (re-frame/subscribe [:get-selected-plan-id])
        edited-title (r/atom nil)
        edited-text (r/atom nil)
        last-item-id (r/atom nil)] ;; 用于跟踪上一个 selected-item-id
    (fn []
      (let [current-plan @(re-frame/subscribe [:get-plan-by-id
                                               @selected-item-id])]
        ;; 当 selected-item-id 变化时，更新编辑内容
        (when (and current-plan (not= @last-item-id @selected-item-id))
          (reset! last-item-id @selected-item-id) ;; 更新 last-item-id
          (reset! edited-title (:titel current-plan))
          (reset! edited-text (:description current-plan)))
        (if @selected-item-id
          (if @edit-mode
            [:div.plan-info-edit [:h2 "Edit Plan"]
             [:table
              [:tbody
               [:tr [:td "Title: "]
                [:td
                 [:input
                  {:type "text",
                   :value @edited-title,
                   :on-change #(reset! edited-title (-> %
                                                        .-target
                                                        .-value))}]]]
               [:tr [:td "Content: "]
                [:td
                 [:textarea
                  {:value @edited-text,
                   :on-change #(reset! edited-text (-> %
                                                       .-target
                                                       .-value))}]]]]]
             [save-btn selected-item-id edited-title edited-text]]
            [:div.plan-info [:h2 (str "Plan Title: " (:titel current-plan))]
             [:p (str "Plan Content: " (:description current-plan))]
             [edit-btn edit-mode]])
          [:p "Select a plan to see details"])))))
