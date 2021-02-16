"use strict";

// callback function to redirect site
function go_to_main()
{
    window.location.replace('main.html');
}

// close alert message
function close_alert(alert_box)
{
    $(alert_box).fadeOut(600, function() {
        $("body").css("background", "linear-gradient(to bottom right, #3a7bd5, #3a6073)");
    });
}

// Login form validation
function login_validate(callback)
{
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let message_box = document.getElementById("login_message_box");
    let message = document.getElementById("login_message");

    if(username.value === "admin")
    {
        if(password.value === "12345")
        {
            message.innerHTML = "logging in ...";
            message_box.classList.add("alert-success");
            document.body.style.background = "linear-gradient(to bottom right, #3fff3c, #45B649)";
            $(message_box).fadeIn(700, function() {
                // callback function to redirect to the main page
                console.log('Login success - redirecting to main page');
                $(message_box).delay(1000).queue(function() { // for delay
                    callback();
                });
            });
            username.value = "valid";
            password.value = "valid";
            return false;
        }
    }
    
    message.innerHTML = "username or password entered is invalid";
    message_box.classList.add("alert-danger");
    $(message_box).fadeIn(1300);
    document.body.style.background = "linear-gradient(to bottom right, #f857a6, #ff5858)";
    
    username.value = "";
    password.value = "";

    return false;
}