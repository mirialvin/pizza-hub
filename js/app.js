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
});



