// Javascript
var customerMessage = [];

function showCustomerMessage() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("textarea").value;

    if (name && email && message) {
        customerMessage.push(name, email, message);
        return name;
    }
}

// jQuery
$(document).ready(function() {

    //Preloader
    $(window).on("load", function() {
        preloaderFadeOutTime = 3000;

        function hidePreloader() {
            var preloader = $('.preloader');
            preloader.fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();
    });

    
    $(button).on("click", function() {
        alertFadeOutTime = 5000;

        function hideAlert() {
            var messageAlert = $('#message-alert');
            messageAlert.fadeOut(alertFadeOutTime);
        }
        hideAlert();
    });
    $("#button").click(function() {
        if (showCustomerMessage()) {
            $("#message-alert").text("Hi " + showCustomerMessage() + ", \nThank you for reaching out to us, we will respond as soon as possible.");
            $("#message-alert").addClass("alert-success");
            $("#message-alert").removeClass("alert-danger");
            $("#message-alert").show();
        } else {
            $("#message-alert").text("Please fill in all fields");
            $("#message-alert").removeClass("alert-success");
            $("#message-alert").addClass("alert-danger");
            $("#message-alert").show();
        }


    });

    $(button).on("click", function() {
        alertFadeOutTime = 5000;

        function hideAlert() {
            var messageAlert = $('#message-alert');
            messageAlert.fadeOut(alertFadeOutTime);
        }
        hideAlert();
    });
});






