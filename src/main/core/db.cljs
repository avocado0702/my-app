(ns main.core.db
  (:require [re-frame.core :as re-frame]))

(def default-db
  {:plan-list
     [{:id 1,
       :titel "plan 1",
       :text
         "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"}
      {:id 2,
       :titel "plan 2",
       :text
         "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"}
      {:id 3,
       :titel "plan 3",
       :text
         "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"}],
   :user-list [{:id 1,
                :username "superadmin",
                :password "topSuperAdmin",
                :is-admin true}],
   :is-logged-in false,
   :current-page :home,
   :log-in-error-message "",
   :register-error-message ""})


