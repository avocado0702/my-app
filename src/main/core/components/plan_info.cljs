(ns main.core.components.plan-info
  (:require [re-frame.core :as re-frame]
            [reagent.core :as r]
            ["@mui/material/Checkbox" :default Checkbox]
            ["@mui/material/FormControlLabel" :default FormControlLabel]
            ["@mui/material/TextField" :default TextField]
            ["@mui/material/Button" :default Button]))

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
        last-item-id (r/atom nil)]
    (fn []
      (let [current-plan @(re-frame/subscribe [:get-plan-by-id
                                               @selected-item-id])]
        (when (and current-plan (not= @last-item-id @selected-item-id))
          (reset! last-item-id @selected-item-id)
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
                                                       .-value))}]]]
               [:tr [:td "Tasks: "]
                [:td
                 (if (seq (:tasks current-plan))
                   (for [task (:tasks current-plan)]
                     ^{:key (:id task)}
                     [:div.task-item
                      [:p (str (:description task))]])
                   [:p "No tasks"])]]]]
             

             [save-btn selected-item-id edited-title edited-text]]
            [:div.plan-info [:h2 (str (:titel current-plan))]
             [:p (str (:description current-plan))]
             [:div.tasks-info [:h3 "Your tasks:"]
              (if (seq (:tasks current-plan))
                (for [task (:tasks current-plan)]
                  ^{:key (:id task)}
                  [:div.task-item
                   [:> FormControlLabel
                    {:control (r/as-element [:> Checkbox
                                             {:checked (:is-completed task),
                                              :on-change
                                                #(re-frame/dispatch
                                                   [:toggle-task-completion
                                                    @selected-item-id
                                                    (:id task)])}]),
                     :label (:description task)}]])
                [:p "No tasks available."])] [edit-btn edit-mode]])
          [:p "Select a plan to see details"])))))
