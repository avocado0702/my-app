(ns main.core.navbar
  (:require [re-frame.core :as re-frame]))

(defn navbar
  []
  [:nav {:class "navbar"} 
   [:div {:class "navbar-container"} 
    [:span {:class "navbar-title"} "My App"]
    
    [:div
     [:a
      {:class "navbar-link",
       :href "#home",
       :on-click #(re-frame/dispatch [:set-current-page :home])} "Home"]
     [:a
      {:class "navbar-link",
       :href "#about",
       :on-click #(re-frame/dispatch [:set-current-page :about])} "About"]
     [:a
      {:class "navbar-link",
       :href "#contact",
       
       :on-click #(re-frame/dispatch [:set-current-page :contact])} "Contact"]
     [:a
      {:class "navbar-link",
       :href "#logout",
       :on-click #(re-frame/dispatch [:set-login-status false])} "Log-out"]]]])
