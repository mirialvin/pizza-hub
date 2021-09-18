
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



