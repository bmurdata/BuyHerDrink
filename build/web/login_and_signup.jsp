<%-- 
    Document   : login_and_signup
    Created on : Sep 2, 2020, 11:34:39 PM
    Author     : aries
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login/Register</title>
        <link href="StyleSheets/login_styles.css" rel="stylesheet" type='text/css' />
        <script src="http://code.jquery.com/jquery-latest.js"></script>
        <script src="http://code.jquery.com/jquery-latest.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </head>
    <body>
        <header>
            <h1>BuyMeDrink</h1>
            <p style="text-align: center; margin-top: -10px;">&copy; 2020, all rights reserved</p>
            <p style="text-align: center; color: darkblue;">
                <i id="lgn_snp_pg_status_icon" class="fa fa-exclamation-triangle" style="color: red;"></i>
                <span id="lgn_snp_pg_status_msg">You're not logged in. Login or Signup below</span>
            </p>
        </header>
        <div class="login-page">
            <div class="form">
              <form class="register-form">
                <h1 style="font-weight: bolder; color: #37a0f5;
                    font-size: 22px; margin: 20px 0; text-align: center;">
                    <i class="fa fa-sign-in" aria-hidden="true"></i>
                    Register
                </h1>
                <input type="text" placeholder="name"/>
                <input type="password" placeholder="password"/>
                <input type="text" placeholder="email address"/>
                <button>create</button>
                <p class="message">Already registered? <a href="#">Sign In</a></p>
              </form>
              <form class="login-form">
                <h1 style="font-weight: bolder; color: #37a0f5;
                    font-size: 22px; margin: 20px 0; text-align: center;">
                    <i class="fa fa-sign-in" aria-hidden="true"></i>
                    Login
                </h1>
                <input id='lgn_user_name_fld' type="text" placeholder="username"/>
                <input id='lgn_password_fld' type="password" placeholder="password"/>
                <button id='login_btn'>login</button>
                <p class="message">Not registered? <a href="#">Create an account</a></p>
              </form>
            </div>
        </div>
        <script src="Scripts/login_scripts.js" type="text/javascript"></script>
    </body>
</html>
