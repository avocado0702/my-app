(ns main.core.pages.about
  (:require [reagent.core :as r]
            [main.core.components.plan-list :refer [plan-list]]
            [main.core.components.plan-info :refer [plan-info]]))

(defn about-page []
  (let [selected-item (r/atom nil)
        edit-mode (r/atom false)]
    (fn []
      [:div.about-page
       [:div.plan-list-container
        [plan-list selected-item]]
       [:div.plan-info-container
        [plan-info selected-item edit-mode]]])))