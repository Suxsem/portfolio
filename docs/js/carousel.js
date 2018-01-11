$(function() {
   var number = $(".gallery .item").length;
   var gallery = $(".gallery");
   var isOnDiv = false;
   $(gallery).mouseenter(function(){isOnDiv=true;});
   $(gallery).mouseleave(function(){isOnDiv=false;});
   var i = 0;
   setInterval(function() {
      if (!isOnDiv)
         window.location.hash = "item-" + (i++ % number + 1);
   }, 5000);
});