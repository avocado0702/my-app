(ns main.core.components.plan-info
  (:require [re-frame.core :as re-frame]
            [reagent.core :as r]
            [main.core.components.tasks-manager :refer [task-manager]]
            ["@mui/material/Checkbox" :default Checkbox]
            ["@mui/material/TextField" :default InputField]
            ["@mui/material/FormControlLabel" :default FormControlLabel]
            ["@mui/material/Button" :default Button]
            ["@mui/material/ButtonGroup" :default ButtonGroup]
            [cljs.core :as c]))

(defn edit-btn
  []
  [:> Button
   {:variant "contained", :on-click #(re-frame/dispatch [:set-edit-mode true])}
   "Edit"])

(defn save-btn
  [selected-item-id edited-title edited-text edited-tasks]
  [:> Button
   {:on-click #(do (re-frame/dispatch [:update-plan @selected-item-id
                                       @edited-title @edited-text
                                       @edited-tasks])
                   (re-frame/dispatch [:set-edit-mode false])
                   (re-frame/dispatch [:reset-edited-tasks]))} "Save"])

(defn back-btn
  []
  [:> Button {:on-click #(re-frame/dispatch [:set-edit-mode false])} "Back"])

(defn plan-info
  []
  (let [edit-mode (re-frame/subscribe [:get-edit-mode])
        selected-item-id (re-frame/subscribe [:get-selected-plan-id])
        edited-tasks (re-frame/subscribe [:get-edited-tasks])
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
             [:div
              {:style {:display "flex",
                       :flexDirection "column",
                       :gap "10px",
                       :marginBottom "20px"}}
              [:div.plan-title
               [:> InputField
                {:variant "outlined",
                 :label "Title",
                 :type "text",
                 :value @edited-title,
                 :on-change #(reset! edited-title (-> %
                                                      .-target
                                                      .-value))}]]
              [:div.plan-info-content
               [:> InputField
                {:variant "outlined",
                 :label "Content",
                 :value @edited-text,
                 :multiline true,
                 :maxRows 4,
                 :on-change #(reset! edited-text (-> %
                                                     .-target
                                                     .-value))}]]]
             [task-manager edited-tasks]
             [:> ButtonGroup
              {:variant "text", :sx {:gap "16px", :margin-left "10px"}}
              [back-btn]
              [save-btn selected-item-id edited-title edited-text
               edited-tasks]]]
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
                [:p "No tasks available."])] [edit-btn]])
          [:p "Select a plan to see details"])))))
