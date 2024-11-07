(ns main.core.pages.register
  (:require [reagent.core :as r]
            [re-frame.core :as re-frame]))

(defn register-page
  []
  (let [username (r/atom "")
        password (r/atom "")
        password-confirm (r/atom "")
        error-message (re-frame/subscribe [:get-register-error-message])]
    (fn []
      [:div.outer-container
       [:div.register-container [:h2 "Create Your Account"]
        [:p "Quickly and easily"]
        [:form
         {:on-submit (fn [e]
                       (.preventDefault e) ;; 防止表单提交刷新页面
                       (re-frame/dispatch [:create-account @username @password
                                           @password-confirm]))}
         ;; 用户名输入框，带 required 属性
         [:label {:for "username"} "Username: "]
         [:input
          {:type "text",
           :id "username",
           :name "username",
           :value @username,
           :required true,
           :on-change #(reset! username (-> %
                                            .-target
                                            .-value))}] [:br]
         ;; 密码输入框，带 required 属性
         [:label {:for "password"} "Password: "]
         [:input
          {:type "password",
           :id "password",
           :name "password",
           :value @password,
           :required true,
           :on-change #(reset! password (-> %
                                            .-target
                                            .-value))}] [:br]
         ;; 确认密码输入框，带 required 属性
         [:label {:for "confirm-password"} "Confirm Password: "]
         [:input
          {:type "password",
           :id "confirm-password",
           :name "confirm-password",
           :value @password-confirm,
           :required true,
           :on-change #(reset! password-confirm (-> %
                                                    .-target
                                                    .-value))}] [:br]
         [:div.register.error-message [:p @error-message]]
         [:button.register-btn {:type "submit"} "Create Account"]
         [:button.back-btn
          {:type "button",
           :on-click #(re-frame/dispatch [:set-current-page :login])}
          "Back to login"]]]])))
