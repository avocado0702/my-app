(ns main.core.components.tasks-manager
  (:require
   ["@mui/icons-material/AddCircle" :default AddCircle]
   ["@mui/material/TextField" :default TextField]
   [re-frame.core :as re-frame]))

(defn add-task
  [edited-tasks]
  (let [next-id (if (empty? @edited-tasks)
                  1
                  (inc (apply max (map :id @edited-tasks))))
        new-task {:id next-id, :description "", :is-completed false}]
    [:> AddCircle
     {:sx {:color "#D3D3D3",
           "&:hover" {:color "#1877f2", :cursor "pointer"},
           :margin-left "10px"},
      :on-click #(re-frame/dispatch [:add-default-task new-task])}]))


(defn task-manager
  [edited-tasks]
  (let [selected-item-id (re-frame/subscribe [:get-selected-plan-id])
        tasks (re-frame/subscribe [:tasks-by-plan-id @selected-item-id])]
    (when (and @tasks (not= @edited-tasks @tasks)) (re-frame/dispatch [:set-edited-tasks @tasks]))
    (fn []
      [:div.tasks-manager
       {:style {:display "flex",
                :flexDirection "column",
                :gap "10px",
                :marginBottom "20px"}}
       (if (seq @edited-tasks)
         (for [task @edited-tasks]
           ^{:key (:id task)}
           [:div.task-item
            [:> TextField
             {:label (str "Task " (:id task)),
              :variant "outlined",
              :value (:description task),
              :on-change #(re-frame/dispatch [:update-task-description (:id task) (-> % .-target .-value)]),
              :fullWidth true,
              :sx {:margin-top "10px"}}]])
         [:p "No tasks available"])
       ;; 添加任务按钮
       [:div {:style {:display "flex", :justifyContent "center"}}
        [add-task edited-tasks]]])))