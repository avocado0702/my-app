(ns main.core.pages.login
  (:require ["@mui/material/TextField" :default TextField]
            ["@mui/material/Button" :default Button]
            ["@mui/material/ButtonGroup" :default ButtonGroup]
            [re-frame.core :as re-frame]
            [reagent.core :as r]))

(defn login-page
  []
  (let [username (r/atom "")
        password (r/atom "")
        error-message (re-frame/subscribe [:get-log-in-error-message])]
    (fn []
      [:div.outer-container
       [:div.login-container [:h2 "Login"]
        [:div.login-info-container
         {:style {:display "flex", :flexDirection "column", :gap "16px"}}
         [:> TextField
          {:type "text",
           :required true,
           :id "username",
           :label "username",
           :value @username,
           :on-change #(reset! username (-> %
                                            .-target
                                            .-value))}]
         [:> TextField
          {:type "password",
           :required true,
           :id "password",
           :label "password",
           :value @password,
           :on-change #(reset! password (-> %
                                            .-target
                                            .-value))}]
         [:div.login.error-message [:p @error-message]]
         [:> ButtonGroup {:variant "text", :sx {:gap "16px"}}
          [:> Button
           {:onClick
              (fn []
                (if (and (not (empty? @username)) (not (empty? @password)))
                  (do (js/console.log "clicked log in")
                      (re-frame/dispatch [:login-check @username @password]))
                  (re-frame/dispatch
                    [:set-login-error-message
                     "Username and password cannot be empty"])))} "Login"]
          [:> Button
           {:onClick #(re-frame/dispatch [:set-current-page :register])}
           "New Account"]]]]])))
