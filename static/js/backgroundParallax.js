var sidebarBackground;

$(function() {
   sidebarBackground = $(".sidebar");
});

$(window).scroll(function() {
   var scrollTop = $(window).scrollTop();
   sidebarBackground.css("background-position-y", -scrollTop*0.2);
});