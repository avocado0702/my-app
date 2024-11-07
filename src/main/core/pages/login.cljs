(ns main.core.pages.login
  (:require [re-frame.core :as re-frame]
            [reagent.core :as r]))

(defn login-page []
  (let [username (r/atom "")
        password (r/atom "")
        error-message (re-frame/subscribe [:get-log-in-error-message])]
    (fn []
      [:div.outer-container
        [:div.login-container 
          [:h2 "Login"]
          [:form
            [:div
              [:label {:for "username"} "Username:"]
              [:input
                {:type "text",
                 :id "username",
                 :name "username",
                 :value @username,
                 :on-change #(reset! username (-> % .-target .-value))}]
              [:label {:for "password"} "Password:"]
              [:input
                {:type "password",
                 :id "password",
                 :name "password",
                 :value @password,
                 :on-change #(reset! password (-> % .-target .-value))}]
              [:div.login.error-message [:p @error-message]]
              [:button.login-btn
                {:type "button",
                 :on-click (fn []
                             (if (and (not (empty? @username)) (not (empty? @password)))
                               (do
                                 (js/console.log "clicked log in")
                                 (re-frame/dispatch [:login-check @username @password]))
                               (re-frame/dispatch
                                 [:set-login-error-message
                                  "Username and password cannot be empty"])))}
                "Login"]
              [:button.register-btn
                {:type "button",
                 :on-click #(re-frame/dispatch [:set-current-page :register])}
                "New Account"]]]]])))
