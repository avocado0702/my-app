(ns main.core.pages.about
  (:require
   [main.core.components.plan-info :refer [plan-info]]
   [main.core.components.plan-list :refer [plan-list]]
   [re-frame.core :as re-frame]))

(defn about-page
  []
  (let [edit-mode @(re-frame/subscribe [:get-edit-mode])]
    (fn [] [:div.about-page [:div.plan-list-container [plan-list]]
            [:div.plan-info-container [plan-info edit-mode]]])))