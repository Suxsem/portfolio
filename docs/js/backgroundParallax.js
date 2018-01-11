var sidebarBackground;
var base;

$(function() {
   sidebarBackground = $(".sidebar");
   //base = $(window);
   base = $(".noBarHide"); //fix jumps in chrome mobile when address bar is hidden

   base.scroll(function() {
      var scrollTop = base.scrollTop();
      sidebarBackground.css("background-position-y", -scrollTop*0.2);
   });
});