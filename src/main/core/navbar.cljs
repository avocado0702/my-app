(ns main.core.navbar
  (:require [re-frame.core :as re-frame]))

(defn navbar
  []
  [:nav {:class "navbar"} ;; 添加 navbar 样式类
   [:div {:class "navbar-container"} ;; 添加 navbar-container 样式类
    ;; 标题
    [:span {:class "navbar-title"} "My App"]
    ;; 导航链接
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
