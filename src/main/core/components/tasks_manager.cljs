(ns main.core.components.tasks-manager
  (:require
   ["@mui/icons-material/AddCircle" :default AddCircle]
   ["@mui/material/TextField" :default TextField]
   [re-frame.core :as re-frame]))

(defn add-task
  [tasks]
  (let [next-id (if (empty? @tasks) 1 (inc (apply max (map :id @tasks))))]
    [:> AddCircle
     {:sx {:color "#D3D3D3",
           "&:hover" {:color "#1877f2", :cursor "pointer"},
           :margin-left "10px"},
      :on-click #(swap! tasks conj {:id next-id, :description ""})}]))


(defn task-manager
  [edited-tasks]
  (let [selected-item-id (re-frame/subscribe [:get-selected-plan-id])
        tasks (re-frame/subscribe [:tasks-by-plan-id @selected-item-id])]
    ;; 初始化 edited-tasks 只在 tasks 改变时
    (when (and @tasks (not= @edited-tasks @tasks)) (reset! edited-tasks @tasks))
    (fn []
      (js/console.log "Rendering task-manager")
      (js/console.log "selected-item-id:" @selected-item-id)
      (js/console.log "Subscribed tasks:" @tasks)
      (js/console.log "Edited tasks:" @edited-tasks)
      [:div.tasks-manager
       {:style {:display "flex",
                :flexDirection "column",
                :gap "10px",
                :marginBottom "20px"}}
       ;; 显示任务列表
       (if (seq @edited-tasks)
         (for [task @edited-tasks]
           ^{:key (:id task)}
           [:div.task-item
            [:> TextField
             {:label (str "Task " (:id task)),
              :variant "outlined",
              :value (:description task),
              :on-change #(swap! edited-tasks assoc-in
                            [(:id task) :description]
                            (-> %
                                .-target
                                .-value)),
              :fullWidth true,
              :sx {:margin-top "10px"}}]])
         [:p "No tasks available"])
       ;; 添加任务按钮
       [:div {:style {:display "flex", :justifyContent "center"}}
        [add-task edited-tasks]]])))