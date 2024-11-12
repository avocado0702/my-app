(ns main.core.db)

(def default-db
  {:plan-list
     [{:id 1,
       :titel "my plan for monday",
       :description
         "things i need to do on monday",
       :completed-tasks 2,
       :total-tasks 3,
       :tasks [{:id 1, :description "dientist", :is-completed false}
               {:id 2, :description "shopping", :is-completed true}
               {:id 3, :description "visit grandma", :is-completed true}]}
      {:id 2,
       :titel "plan 2",
       :description "Lorem ipsum dolor sit amet,",
       :completed-tasks 1,
       :total-tasks 2,
       :tasks [{:id 1, :description "task 1", :is-completed false}
               {:id 2, :description "task 2", :is-completed true}]}
      {:id 3,
       :titel "plan 3",
       :description
         "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
       :completed-tasks 0,
       :total-tasks 0,
       :tasks []}],
   
   :user-list [{:id 1,
                :username "superadmin",
                :password "topSuperAdmin",
                :is-admin true}],
   :is-logged-in false,
   :current-page :home,
   :log-in-error-message "",
   :register-error-message "",
   :edit-mode false,
   :selected-plan-id nil})


