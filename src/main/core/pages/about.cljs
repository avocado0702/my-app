(ns main.core.pages.about
  (:require [reagent.core :as r]
            [main.core.components.plan-list :refer [plan-list]]
            [main.core.components.plan-info :refer [plan-info]]))

(defn about-page
  []
  (let [selected-item (r/atom nil)
        edit-mode (r/atom false)]
    (fn []
      [:div.about-page {:style {:display "flex", :height "100vh"}} 
       [:div
        {:style {:width "250px",
                 :border-right "1px solid #ccc",
                 :padding "10px",
                 :overflow-y "auto"}} 
        [plan-list selected-item]]
       
           
       [:div 
        {:style {:flex "1", :padding "50px"}}
        [plan-info @selected-item edit-mode]]])))