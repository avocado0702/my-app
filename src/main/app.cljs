(ns main.app
  (:require [reagent.dom :as dom]
            [re-frame.core :as re-frame]
            [main.core.db]
            [main.core.subs]
            [main.core.events] 
            [main.core.navbar :refer [navbar]]
            [main.core.pages.homepage :refer [home-page]]
            [main.core.pages.about :refer [about-page]]
            [main.core.pages.contact :refer [contact-page]]
            [main.core.pages.login :refer [login-page]]
            [main.core.pages.register :refer [register-page]]))


(defn page-content []
  (let [current-page @(re-frame/subscribe [:get-current-page])] 
    (case current-page
      :home [home-page]
      :about [about-page]
      :contact [contact-page]
      :login [login-page]
      :register [register-page]
      [:div "Page not found"])))

(defn app []
  (let [is-logged-in @(re-frame/subscribe [:is-logged-in])
        current-page @(re-frame/subscribe [:get-current-page])] 
    (js/console.log "the page now" current-page)
    (if is-logged-in
      [:div [navbar current-page]
       [:div {:style {:margin-top "60px"}} [page-content]]]
      (case current-page
        :login [login-page] ;; 登录页面
        :register [register-page] ;; 注册页面
        [login-page]))))


(defn init
  []
  (re-frame/dispatch [:initialize-db])
  (dom/render [app] (.getElementById js/document "app"))
  (js/console.log "app start" )
  )
