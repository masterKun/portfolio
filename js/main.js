$(document).ready(function(){
    $(document).on('click', '#theme_toggle', function(){
        $('body').toggleClass('dark-theme');
    });
    $(document).on('click', '#close_mobile_menu, .mobile-menu-wrapper .dimmer', function(){
        $('.mobile-menu-wrapper').removeClass('expand');
    });


    $(document).on('click', '#open_mobile_menu', function(){
        if(!$('.mobile-menu-wrapper').hasClass('expand')){
            $('.mobile-menu-wrapper').addClass('expand');
            return false;
        }
    });
});