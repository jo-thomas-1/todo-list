"use strict";

// close alert message
function close_alert(alert_box)
{
    $(alert_box).fadeOut(600, function() {
        $("body").css("background", "linear-gradient(to bottom right, #3a7bd5, #3a6073)");
    });
}

// Login form validation
function login_validate()
{
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let message_box = document.getElementById("login_message_box");
    let message = document.getElementById("login_message");

    if(username.value === "admin")
    {
        if(password.value === "12345")
        {
            document.body.style.background = "linear-gradient(to bottom right, #3a7bd5, #3a6073)";
            return true;
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